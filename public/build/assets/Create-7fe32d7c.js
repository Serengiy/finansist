import{u as V,r as d,o as y,a as g,b as q,w as u,k as i,N as s,f as p,e as t,h as x,Q as r,l as w,g as Q,m as C}from"./app-f80ab9e6.js";import{a as U,Q as c}from"./QForm-be91830e.js";import{Q as k}from"./QPage-a14373ce.js";const B={class:"row q-mx-auto bg-white"},I={__name:"Create",setup(N){const v=V(),n=d([]),m=d([]),e=d({amount:"",description:"",is_completed:!1,date:"",category:null,type:null}),b=async()=>{try{const o=await i.get("/api/operations/create");n.value=o.data.categories,m.value=o.data.types}catch{s.create({message:"Ошибка получения данных",color:"red"})}},f=async()=>{try{(await i.post("/api/operations",e.value)).data.success?(s.create({message:"Операция успешно создана",color:"positive"}),e.value={amount:"",descriptions:"",is_completed:!1,date:""}):s.create({message:"Ошибка создания операции",color:"red"})}catch{s.create({message:"Ошибка отправки данных",color:"red"})}};return y(()=>{v.name=="OperationCreate"&&b()}),(o,a)=>(g(),q(k,{class:"row shadow-3 bg-grey-2"},{default:u(()=>[p("div",B,[t(C,{class:"bg-white q-px-xl blue"},{default:u(()=>[a[6]||(a[6]=p("div",{class:"text-h4 q-mt-md"}," Создание новой операции ",-1)),t(U,{class:"q-mt-xl",onSubmit:x(f,["prevent"])},{default:u(()=>[t(r,{class:"q-mt-md",dense:"",outlined:"",modelValue:e.value.amount,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.amount=l),label:"Сумма",type:"number",required:""},null,8,["modelValue"]),t(r,{class:"q-mt-md",type:"textarea",dense:"",outlined:"",modelValue:e.value.description,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.description=l),label:"Описание",required:""},null,8,["modelValue"]),t(w,{class:"q-mt-md",dense:"",outlined:"",modelValue:e.value.is_completed,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.is_completed=l),label:"Is Completed?"},null,8,["modelValue"]),t(r,{class:"q-mt-md",dense:"",outlined:"",modelValue:e.value.date,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.date=l),label:"Date",type:"date",required:""},null,8,["modelValue"]),t(c,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:e.value.type,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.type=l),options:m.value,label:"Фильтр по типам","option-value":"id","option-label":"name"},null,8,["modelValue","options"]),t(c,{class:"col-3 q-mt-md",dense:"",clearable:"",outlined:"",filled:"",modelValue:e.value.category,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.category=l),options:n.value,label:"Фильтр по категориям","option-value":"id","option-label":"name"},null,8,["modelValue","options"]),t(Q,{class:"q-mt-md",label:"Submit",type:"submit",color:"primary"})]),_:1})]),_:1})])]),_:1}))}};export{I as default};