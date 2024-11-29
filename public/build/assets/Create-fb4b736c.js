import{Q as v}from"./QSelect-aeca41c2.js";import{r as o,o as C,c as _,w as g,b as x,a as s,d as Q,e as B,f as h,g as I,N as u}from"./app-7be9a94d.js";import{Q as D}from"./QForm-d1a62da8.js";import{Q as E}from"./QPage-b4a12ee2.js";const F={class:"row q-mx-auto bg-white col-10 col-sm-8"},L={__name:"Create",setup(N){var y;const i=o([]),b=o([]),f=[{label:"DEBIT",value:"DEBIT"},{label:"CREDIT",value:"CREDIT"}],d=o(!1),c=o(!1),p=o([]),n=o(null),m=o(f[0]),t=o({purpose_expression:"",operation_type:(y=m==null?void 0:m.value)==null?void 0:y.value}),V=async()=>{var a;t.value.contractor_ids=p.value.map(e=>e.id),t.value.category_id=(a=n==null?void 0:n.value)==null?void 0:a.id;try{(await axios.post("/api/rules",t.value)).data.success?u.create({message:"Правило успешно создано",color:"green"}):u.create({message:"Правило не создано",color:"red"})}catch{u.create({message:"Ошибка создания правила",color:"red"})}},q=async(a,e,l)=>{if(a.length>3){d.value=!0;try{const r=await axios.get("/api/categories",{params:{q:a}});i.value=r.data.data,e(()=>i.value)}catch{u.create({message:"Ошибка получения категорий",color:"red"})}d.value=!1}},w=async(a,e,l)=>{if(a.length>3){c.value=!0;try{const r=await axios.get("/api/contractors",{params:{q:a}});b.value=r.data.data,e(()=>i.value)}catch{u.create({message:"Ошибка получения контрагентов",color:"red"})}}c.value=!1};return(a,e)=>(C(),_(E,{class:"row shadow-3 bg-grey-2"},{default:g(()=>[x("div",F,[s(I,{class:"bg-white q-px-xl blue col-12"},{default:g(()=>[e[4]||(e[4]=x("div",{class:"text-h4 q-mt-md"}," Создание правила ",-1)),s(D,{class:"q-mt-xl",onSubmit:Q(V,["prevent"])},{default:g(()=>[s(v,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l),options:i.value,label:"Выберите категорию","option-value":"id","option-label":"name","use-input":"","input-debounce":"300",onFilter:q,loading:d.value},null,8,["modelValue","options","loading"]),s(B,{"model-value":"name",label:"Регулярное выражение назначения",class:"col-3 q-mt-md",outlined:"",dense:"",modelValue:t.value.purpose_expression,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value.purpose_expression=l),filled:""},null,8,["modelValue"]),s(v,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:t.value.operation_type,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value.operation_type=l),options:f,label:"Тип операции"},null,8,["modelValue"]),s(v,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=l=>p.value=l),options:b.value,label:"Выберете контрагентов","option-value":"id","option-label":"name","use-input":"",multiple:"","input-debounce":"300",onFilter:w,loading:c.value},null,8,["modelValue","options","loading"]),s(h,{class:"q-mt-md",label:"Создать",type:"submit",color:"primary"})]),_:1})]),_:1})])]),_:1}))}};export{L as default};