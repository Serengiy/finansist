import{u as B,r as z,x as E,o,p as n,a as l,w as d,F as c,q as u,t as m,l as i,a1 as N,b as V,N as q}from"./app-868719fb.js";import{a as F,Q as U}from"./QTable-c076b676.js";import{Q as $}from"./QPagination-2fa34b7f.js";const A={key:0,class:"rounded-borders shadow-3"},D={key:3,class:"row justify-between"},I={class:"row bg-white justify-center q-pb-md"},M={key:1},J={__name:"RulesTable",props:{rules:Array,pagination:Object},emits:["update:pagination","refresh"],setup(s,{emit:Q}){B();const C=s,p=Q,R=z([{name:"category",label:"Категория",field:t=>{var a;return(a=t==null?void 0:t.category)==null?void 0:a.name},align:"left"},{name:"contractor",label:"Контрагент",field:t=>{var a;return(a=t==null?void 0:t.contractor)==null?void 0:a.full_name},align:"left"},{name:"purpose_expression",label:"Регулярное выражение",field:"purpose_expression",align:"left"},{name:"actions",label:"Действия",align:"left"}]),T=async t=>{var a;try{const r=await axios.delete(`/api/rules/${t}`);(a=r==null?void 0:r.data)!=null&&a.success&&(q.create({message:"Правило успешно удалено",color:"green",timeout:2e3}),p("refresh"))}catch{q.create({message:"Ошибка удаления",color:"red",timeout:2e3})}},j=t=>{p("update:pagination",{...C.pagination,page:t})};return(t,a)=>{var g;const r=E("router-link");return o(),n("div",null,[s.rules.length?(o(),n("div",A,[l(U,{class:"q-mt-md q-px-sm",rows:s.rules,pagination:{rowsPerPage:(g=s.pagination)==null?void 0:g.rowsPerPage},columns:R.value,"row-key":"id","hide-bottom":"",flat:""},{"body-cell":d(e=>[l(F,{item:e},{default:d(()=>{var f,y,x,b,k,w,h,_,v,P;return[e.col.name==="purpose_expression"?(o(),n(c,{key:0},[u(m((f=e.row)==null?void 0:f.purpose_expression),1)],64)):i("",!0),e.col.name==="category"?(o(),n(c,{key:1},[u(m((x=(y=e.row)==null?void 0:y.category)==null?void 0:x.name),1)],64)):i("",!0),e.col.name==="contractor"?(o(),n(c,{key:2},[(k=(b=e.row)==null?void 0:b.contractor)!=null&&k.name?i("",!0):(o(),n(c,{key:0},[u(" Для всех ")],64)),(h=(w=e.row)==null?void 0:w.contractor)!=null&&h.full_name?(o(),n(c,{key:1},[u(m((v=(_=e.row)==null?void 0:_.contractor)==null?void 0:v.full_name),1)],64)):i("",!0)],64)):i("",!0),e.col.name==="actions"?(o(),n("div",D,[l(r,{class:"q-mr-sm",to:{name:"EditRule",params:{id:(P=e==null?void 0:e.row)==null?void 0:P.id}}},{default:d(()=>[l(N,{name:"edit",size:"xs",class:"cursor-pointer",color:"primary"})]),_:2},1032,["to"]),l(N,{onClick:O=>T(e.row.id),name:"delete",size:"xs",class:"cursor-pointer",color:"negative"},null,8,["onClick"])])):i("",!0)]}),_:2},1032,["item"])]),_:1},8,["rows","pagination","columns"]),V("div",I,[l($,{modelValue:s.pagination.page,"onUpdate:modelValue":[a[0]||(a[0]=e=>s.pagination.page=e),j],max:Math.ceil(s.pagination.rowsNumber/s.pagination.rowsPerPage),"boundary-numbers":"","boundary-links":"","max-pages":10,class:"text-center q-mt-md"},null,8,["modelValue","max"])])])):(o(),n("div",M,a[1]||(a[1]=[V("p",{class:"text-h6 text-center"}," Для этого контрагента правила не установлены ",-1)])))])}}};export{J as _};
