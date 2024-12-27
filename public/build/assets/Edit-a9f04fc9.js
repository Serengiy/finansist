import{u as R,r,k as U,o as p,c as C,w as n,N as i,a as t,g as q,b as g,f as u,t as Q,s as k,x as P,F as L,p as $,v as M,d as O,e as j,l as z,P as h}from"./app-5d15a536.js";import{Q as H,a as B}from"./QTable-57e6cd3b.js";import{a as w}from"./QSelect-8284dfc7.js";import{Q as A}from"./QForm-b23e252c.js";import{Q as G}from"./QPage-553a970e.js";const J={class:"row justify-end"},K={class:"row q-mx-auto bg-white col-10 col-sm-8"},te={__name:"Edit",setup(W){const _=R().params.id,c=r([]),v=r(!1),d=r(null),f=r([]),x=r([]),y=r(!1),m=r(!1),b=r([]),T=r([{name:"sum",label:"Сумма",field:"sber_amountRub"},{name:"date",label:"Дата",field:"date_at"},{name:"payee_contractor",label:"Контрагент",field:"payee_contractor"},{name:"categories",label:"Категория",field:"categories"},{name:"purpose",label:"Назначение платежа",field:"sber_paymentPurpose"}]),l=r({name:"",purpose_expression:""}),D=[{label:"DEBIT",value:"DEBIT"},{label:"CREDIT",value:"CREDIT"}],V=async()=>{try{const a=await axios.get(`/api/rules/${_}`,{params:{include:"category,contractor"}});l.value=a.data.data,d.value=l.value.category,f.value=l.value.contractor}catch{i.create({message:"Ошибка получения данных",color:"red",timeout:2e3})}},F=async()=>{h.show({message:"Загрузка..."});try{const a=await axios.get("/api/rules/operations-by-rule",{params:{rule:l.value}});b.value=a.data,m.value=!0}catch{i.create({message:"Ошибка получения данных",color:"red",timeout:2e3})}finally{h.hide()}},E=async()=>{i.create({message:"Обработка началась",timeout:2e3});try{const a=await axios.get("/api/rules/validate-by-rule",{params:{rule:l.value}});b.value=a.data,i.create({message:"Обработка закончена",color:"green",timeout:2e3})}catch{i.create({message:"Ошибка при валидации",color:"red",timeout:2e3})}};U(async()=>{await V()});const I=async()=>{var a;try{const e=await axios.put(`/api/rules/${_}`,{category_id:d.value.id,operation_type:l.value.operation_type,purpose_expression:l.value.purpose_expression});(a=e==null?void 0:e.data)!=null&&a.success?i.create({message:"Данные успешно сохранены",color:"green",timeout:2e3}):i.create({message:"Ошибка сохранения данных",color:"red",timeout:2e3})}catch{i.create({message:"Ошибка сохранения данных",color:"red",timeout:2e3})}finally{V()}},N=async(a,e,o)=>{if((a==null?void 0:a.length)>4){v.value=!0;try{const s=await axios.get("/api/categories",{params:{q:a}});c.value=s.data.data,e(()=>c.value)}catch{i.create({message:"Fetching categories failed",color:"red"})}v.value=!1}},S=async(a,e,o)=>{if(a.length>3){y.value=!0;try{const s=await axios.get("/api/contractors",{params:{q:a}});x.value=s.data.data,e(()=>c.value)}catch{i.create({message:"Ошибка получения контрагентов",color:"red"})}}y.value=!1};return(a,e)=>(p(),C(G,{class:"row shadow-3 bg-grey-2"},{default:n(()=>[t($,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=o=>m.value=o),maximized:""},{default:n(()=>[t(q,null,{default:n(()=>[g("div",J,[t(u,{onClick:e[0]||(e[0]=o=>m.value=!1),flat:"",round:"",icon:"close"})]),t(H,{title:"Найденные операции соответствующие правилу",rows:b.value,columns:T.value,"row-key":"id","rows-per-page-options":[20,50]},{"body-cell-payee_contractor":n(o=>[t(B,{props:o},{default:n(()=>{var s;return[g("div",null,Q(((s=o.row.payee_contractor)==null?void 0:s.full_name)||"Нет данных"),1)]}),_:2},1032,["props"])]),"body-cell-categories":n(o=>[t(B,{props:o},{default:n(()=>[(p(!0),k(L,null,P(o.row.categories,s=>(p(),k("div",null,Q(s==null?void 0:s.name),1))),256))]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1})]),_:1},8,["modelValue"]),g("div",K,[t(q,{class:"bg-white q-px-xl blue col-12"},{default:n(()=>[t(u,{class:"q-my-md",icon:"arrow_back",to:"/operations/rules"},{default:n(()=>e[6]||(e[6]=[M("Назад")])),_:1}),e[7]||(e[7]=g("div",{class:"text-h4"}," Редактирование правила ",-1)),t(A,{class:"q-mt-xl",onSubmit:O(I,["prevent"])},{default:n(()=>[t(w,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),options:c.value,label:"Выберите категорию","option-value":"id","option-label":"name","use-input":"","input-debounce":"300",hint:"Start typing to search",onFilter:N,loading:v.value},null,8,["modelValue","options","loading"]),t(w,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:l.value.operation_type,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.operation_type=o),options:D,label:"Тип операции"},null,8,["modelValue"]),t(j,{"model-value":"name",label:"Регулярное выражение назначения",class:"col-3 q-mt-md",outlined:"",dense:"",modelValue:l.value.purpose_expression,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.purpose_expression=o),filled:""},null,8,["modelValue"]),t(w,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=o=>f.value=o),options:x.value,label:"Выберете контрагентов","option-value":"id","option-label":"name","use-input":"",multiple:"","input-debounce":"300",onFilter:S,loading:y.value},null,8,["modelValue","options","loading"]),t(u,{class:"q-mt-md",label:"Сохранить",type:"submit",color:"primary"}),t(u,{class:"q-ml-md q-mt-md",label:"Показать соответствующие операции",onClick:F,color:"primary"}),l.value.id?(p(),C(u,{key:0,class:"q-ml-md q-mt-md",label:"Провести привязку",onClick:E,color:"primary"})):z("",!0)]),_:1})]),_:1})])]),_:1}))}};export{te as default};
