import{u as d,r as l,k as m,A as _,o as f,c as g,w as u,N as v,b as o,a as r,n as w,v as x,S as k}from"./app-e2b673e7.js";import{Q as y}from"./QPage-118d7a0c.js";import{_ as N}from"./RulesTable-cc57963c.js";import"./QTable-66bad645.js";import"./QSelect-729c43b5.js";import"./QPagination-159fe69e.js";const b={class:"row justify-center"},h={class:"justify-center col-12 q-px-md q-mt-lg"},C={class:"text-blue-5 row items-center"},R=["onClick"],z={__name:"Rules",setup(B){const n=d().params.id,c=l([]),i=l({page:1,rowsPerPage:20,rowsNumber:0}),a=async()=>{try{const e=await axios.get("/api/rules",{params:{contractor_id:n,load:["category,contractor"]}});console.log(e.data.data),c.value=e.data.data}catch{v.create({message:"Ошибка получения данных",color:"red",timeout:2e3})}};return m(()=>{a()}),(e,t)=>{const p=_("router-link");return f(),g(y,{class:"bg-grey-3"},{default:u(()=>[o("div",b,[o("div",h,[o("p",C,[r(p,{to:{name:"ContractorShow",params:{id:k(n)}},custom:""},{default:u(({navigate:s})=>[o("div",{onClick:s,class:"cursor-pointer"},[r(w,{size:"sm",name:"keyboard_arrow_left"}),t[1]||(t[1]=x(" Назад "))],8,R)]),_:1},8,["to"])]),t[2]||(t[2]=o("p",{class:"text-h6 text-center"}," Правила ",-1)),r(N,{rules:c.value,pagination:i.value,"onUpdate:pagination":t[0]||(t[0]=s=>{i.value=s,a()}),onRefresh:a},null,8,["rules","pagination"])])])]),_:1})}}};export{z as default};