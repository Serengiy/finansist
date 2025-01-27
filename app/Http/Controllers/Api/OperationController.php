<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Operation\OperationCreateRequest;
use App\Http\Requests\Operation\OperationSeedFromAPIRequest;
use App\Http\Resources\OperationResource;
use App\Models\Category;
use App\Models\Contractor;
use App\Models\Operation;
use App\Models\OperationRule;
use App\Models\Type;
use Firebase\JWT\JWT;
use GuzzleHttp\Client;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class OperationController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        if ($categoryId = $request->input('parentCategoryId')) {
            $category = Category::query()->find($categoryId);
            $categoryIds = $category->geyNestedChildren();
            $categoryIds[] = (int)$categoryId;
            $request->merge(['categoryIds' => $categoryIds]);
        }

        $operationsQuery = Operation::query()
            ->filter($request->all())
            ->with(['categories', 'types', 'payeeContractor'])
        ->orderByDesc('date_at');

        $operations = $operationsQuery->paginate($request->input('paginate', 50))
            ->withQueryString();

        return OperationResource::collection($operations);
    }

    public function summary(Request $request): JsonResponse
    {
        $dateFrom = $request->input('dateFrom') ?: Carbon::now()->startOfMonth()->toDateString();
        $dateTo = $request->input('dateTo') ?: Carbon::now()->endOfMonth()->toDateString();

        $categoryFilter = $request->input('category');

        $query = Operation::query()
            ->with('categories')
            ->selectRaw('categories.name as category, DATE(date_at) as date, SUM(sber_amountRub) as daily_total')
            ->join('categories_operations', 'operations.id', '=', 'categories_operations.operation_id')
            ->join('categories', 'categories_operations.category_id', '=', 'categories.id')
            ->whereDate('date_at', '>=', $dateFrom)
            ->whereDate('date_at', '<=', $dateTo);

        // Filter by category if provided
        if ($categoryFilter) {
            $query->where('categories.name', $categoryFilter['name']);
        }

        $query->groupBy('categories.name', 'date')
            ->orderBy('categories.name')
            ->orderBy('date_at');

        $dailySummaries = $query->get();

        $formattedData = [];
        foreach ($dailySummaries as $record) {
            $category = $record->category;
            $date = $record->date_at;
            $sber_amountRub = $record->daily_total;

            if (!isset($formattedData[$category])) {
                $formattedData[$category] = ['category' => $category, 'total' => 0];
            }
            $formattedData[$category][$date] = $sber_amountRub;
            $formattedData[$category]['total'] += $sber_amountRub;
        }

        $result = array_values($formattedData);

        return response()->json([
            'data' => $result,
            'types' => Type::query()->select(['id', 'name'])->get(),
            'categories' => Category::query()->select(['id', 'name'])->get(),
        ]);
    }

    public function store(OperationCreateRequest $request): JsonResponse
    {
        DB::beginTransaction();
        $data = $request->validated();
        $request['is_manual'] = true;
        $categories = $data['categories'] ?? null;
        unset($data['categories']);

        $operation = Operation::query()->create($data);
        if ($categories) {

            try {
                $operation->refresh();
                $categoriesToHandle = $this->mapCategories($categories);
                $operation->handleCategories($categoriesToHandle);
            } catch (\Exception $exception) {
                return response()->json([
                    'success' => false,
                    'message' => $exception->getMessage(),
                ]);
            }
        }
        DB::commit();
        return response()->json([
            'success' => true,
        ]);
    }

    public function show(int $id, Request $request): OperationResource
    {
        $operationQuery = Operation::query();
        if ($request->get('include')) {
            $operationQuery->with(explode(',', $request->get('include')));
        }

        return OperationResource::make($operationQuery->findOrFail($id));
    }

    public function update(int $id, Request $request): JsonResponse
    {
        $operation = Operation::query()->findOrFail($id);

        DB::beginTransaction();
        $operation->update($request->except('categories'));
        $operation->refresh();

        if ($categories = $request->get('categories')) {
            $categoriesToHandle = $this->mapCategories($categories);

            try {
                $operation->handleCategories($categoriesToHandle);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => $e->getMessage(),
                ]);
            }
            unset($request['categories']);
        }
        $request['is_manual'] = true;
        DB::commit();

        return response()->json([
            'success' => true,
        ]);
    }

    private function mapCategories(array $categories): array
    {
        $mappedCategories = [];
        foreach ($categories as $category) {
            $mappedCategories[$category['id']] = (float)$category['sber_amountRub'];
        }
        return $mappedCategories;
    }

    public function seed(OperationSeedFromAPIRequest $request): JsonResponse
    {
        $validate = $request->validated();
        $data = $validate['data'];
        foreach ($data as $operation) {
            Operation::query()->firstOrCreate($operation);
        }
        return response()->json([
            'success' => true,
        ]);
    }

    public function getOperations(Request $request)
    {
        set_time_limit(6000);
        $start_at = $request->input('start_at', now()->startOfMonth()->toDateString());
        $end_at = $request->input('end_at', now()->endOfMonth()->toDateString());
        try {
            $client = new Client();

            $payload = ['start_at' => $start_at];
            $token = JWT::encode($payload, config('app.key'), 'HS256');

            $response = $client->request('GET', 'https://api.lookin.team/api/finance/fin-lookin/operations', [
                'query' => [
                    'start_at' => $start_at,
                    'end_at' => $end_at,
                    'token' => $token,
                    'tokenTest' => $payload['start_at'],
                ],
                'stream' => true,
                'read_timeout' => 120, // Время ожидания для чтения данных
            ]);

// Обработка ответа
            $body = $response->getBody();
            $transactions = collect(json_decode($body)->data); // Декодируем JSON в ассоциативный масси
            $rules = OperationRule::all();
            $contractors = Contractor::all();
            foreach ($transactions as $transaction) {
                if(!$contractors->where('id', $transaction->payee_contractor_id)->first()) {
                    $payeeData = $transaction->sber_rurTransfer;
                    $payee_inn = $payeeData?->payeeInn ?: null;
                    $payee = Contractor::create([
                        'id' => $transaction->payee_contractor_id,
                        'inn_kpp' => $payee_inn,
                        'full_name' => $payeeData->payeeName,
                        'bank_name' => $payeeData->payeeBankName ?: null,
                        'corr_account' => $payeeData->payeeBankCorrAccount ?: null,
                        'bank_bik' => $payeeData->payeeBankBic ?: null,
                        'checking_account' => $payeeData->payeeAccount ?: null,
                    ]);
                }
                if(!$contractors->where('id', $transaction->payer_contractor_id)->first()) {
                    $payerData = json_decode($transaction->sber_rurTransfer);
                    $payee_inn = $payerData?->payerInn ?: null;
                    $payer = Contractor::create([
                        'id' => $transaction->payer_contractor_id,
                        'inn_kpp' => $payerData->payerInn,
                        'full_name' => $payerData->payerName,
                        'bank_name' => $payerData?->payerBankName ?: null,
                        'corr_account' => $payerData?->payerBankCorrAccount ?: null,
                        'bank_bik' => $payerData?->payerBankBic ?: null,
                        'checking_account' => $payerData?->payerAccount ?: null,
                    ]);
                }
                $operation =  Operation::updateOrCreate([
                    'sber_operationId' => $transaction->sber_operationId,
                ], [
                    'pizzeria_id' => $transaction->pizzeria->id,
                    'date_at' => $transaction->sber_operationDate,
                    'sber_amountRub' => $transaction->sber_amountRub,
                    'sber_direction' => $transaction->sber_direction,
                    'sber_paymentPurpose' => $transaction->sber_paymentPurpose,
                    'sber_operationId' => $transaction->sber_operationId,
                    'payer_contractor_id' => $transaction->payer_contractor_id,
                    'payee_contractor_id' => $transaction->payee_contractor_id,
                    'is_completed' => 1,
                    'is_manual' => $transaction->is_manual,
                    'created_at' => $transaction->created_at,
                ]);
                $operationRule = OperationRule::validateOperation($operation, unserialize(serialize($rules)));
                if($operationRule) {
                    if($operationRule->category_id == 24) { // если инкассация - убираем подтверждение
                        $operation->update([
                            'is_completed' => 0,
                        ]);
                    }
                    $res = $operation->categories()->sync([
                        $operationRule->category_id => ['rule_id' => $operationRule->id]
                    ]);
                }
            }
            return response()->json(['count' => $transactions->count()]);
        } catch (\Exception $e) {
            Log::error('Error in getOperations():', ['message' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
            throw $e;
        }
    }
}
