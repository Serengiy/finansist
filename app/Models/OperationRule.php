<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class OperationRule extends Model
{
    use HasFactory;

    const DEBIT = 'DEBIT';
    protected $guarded = ['id'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function contractor(): BelongsTo
    {
        return $this->belongsTo(Contractor::class);
    }

    public function scopeFilter(Builder $query, array $filter): Builder
    {
        if($categoryId = $filter['category_id'] ?? null){
            $query->where('category_id', $categoryId);
        }

        if ($contractorId = $filter['contractor_id'] ?? null){
            $query->where('contractor_id', $contractorId);
        }

        if($name = $filter['name'] ?? null){
            $query->where('name', 'LIKE', "%$name%");
        }
        if($purpose_expression = $filter['purpose_expression'] ?? null){
            $query->where('purpose_expression', 'LIKE', "%$purpose_expression%");
        }
        if($operation_type = $filter['operation_type'] ?? null){
            $query->where('operation_type', $operation_type);
        }

        return $query;
    }

    public static function validateOperations(Collection $operations): int
    {
        $updatedOperations = 0;
        foreach ($operations as $operation){
            self::validateOperation($operation) && $updatedOperations++;
        }
        return $updatedOperations;
    }

    public static function validateOperation($operation): int
    {
        $payeeContractorId = $operation->payee_contractor_id;
        $rules = OperationRule::query()->where('contractor_id', $payeeContractorId)->get()
            ->sortByDesc(function ($rule) {
                return !empty($rule->purpose_expression);
            });

        foreach ($rules as $rule){
            if($expression = $rule->purpose_expression){
                $isValid = self::validateExpression($operation, $expression);
                if($isValid && $rule->contractor_id === $payeeContractorId){
                    $res = $operation->categories()->sync([
                        $rule->category_id => ['rule_id' => $rule->id]
                    ]);
                    return sizeof($res['updated']);
                }
            }else{
                if($rule->contractor_id === $payeeContractorId){
                    $res = $operation->categories()->sync([
                        $rule->category_id => ['rule_id' => $rule->id]
                    ]);
                    return sizeof($res['updated']);
                }
            }
        }
        return 0;
    }

    private static function validateExpression(Operation $operation, string $expression): bool
    {
        try {
            return preg_match($expression, $operation->sber_paymentPurpose) === 1;
        }catch (\Exception $e){
            $expression = Str::start($expression, '/');
            $expression = Str::finish($expression, '/');
            return preg_match($expression, $operation->sber_paymentPurpose) === 1;
        }

    }
}
