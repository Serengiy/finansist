import{Q as m}from"./QPage-967866e9.js";import{u as h,r as f,k as v,x as w,o as a,c as x,w as r,N as y,b as t,t as c,p as i,a as l,q as d}from"./app-868719fb.js";import"./QTable-c076b676.js";import"./QPagination-2fa34b7f.js";import"./QSelect-549536ce.js";const g={class:"row justify-center"},k={class:"col-10 text-center bg-white rounded-borders q-pa-sm justify-center q-mt-lg"},C={class:"row text-h6"},N={class:"row text-h6"},b={key:0},B={key:1},q={class:"row text-h6"},V={class:"row text-h6"},M={__name:"Show",setup(j){const u=h().params.id,o=f({}),p=async()=>{await _()},_=async()=>{try{const s=await axios.get(`/api/contractors/${u}`);o.value=s.data.data,console.log(o.value)}catch{y.create({message:"Ошибка получения данных",color:"red",timeout:2e3})}};return v(()=>{p()}),(s,e)=>{const n=w("router-link");return a(),x(m,{class:"bg-grey-2"},{default:r(()=>[t("div",g,[t("div",k,[t("div",C,[t("p",null,"Контрагент: "+c(o.value.full_name),1)]),t("div",N,[o.value.inn?(a(),i("p",b,"ИНН: "+c(o.value.inn_kpp),1)):(a(),i("p",B,"ИНН отсутствует"))]),t("div",q,[t("p",null,[l(n,{to:{name:"ContractorOperations",params:{id:o.value.id}}},{default:r(()=>e[0]||(e[0]=[d("Операции")])),_:1},8,["to"])])]),t("div",V,[t("p",null,[l(n,{to:{name:"ContractorRules",params:{id:o.value.id}}},{default:r(()=>e[1]||(e[1]=[d("Правила")])),_:1},8,["to"])])])])])]),_:1})}}};export{M as default};