import{Q as P,a as $}from"./QTable-9f10ca35.js";import{r as f,o as v,c as j,w as a,u as q,Q as I,a as t,b as S,d as e,f as D,i as w,j as V,n as y,t as _,q as k,h as R,k as B,p as N,l as H,y as T,z,L as E,v as d,J as O,P as Q}from"./app-64dafc3a.js";import{Q as A}from"./QSpace-767f85f1.js";import{Q as F}from"./QForm-db958e76.js";import{C as J}from"./ClosePopup-9fac0edc.js";import{u as x}from"./use-dialog-plugin-component-00e1baf8.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";import"./QSelect-fcdeceb1.js";import"./QChip-18101fab.js";import"./position-engine-f936ecea.js";const C=c=>(N("data-v-57eb1bcd"),c=c(),H(),c),L=C(()=>e("h5",{class:"text-center"},"Введите баркод для замены",-1)),U={class:"col-12"},G={class:"row justify-center items-center"},M={class:"col-6"},W=C(()=>e("div",{class:"q-gutter-xs"},[e("span",null,"Баркод")],-1)),X={class:"row justify-center q-mt-md"},Y={class:"row col-6 justify-end"},Z={class:""},ee={class:"q-ml-lg"},se={key:0},te={class:"text-center text-h6 text-red"},oe={__name:"ReplaceProduct",props:["id","store_id","store_label"],emits:[...x.emits],setup(c){const s=c,h=s.id;console.log(s);const b=f({id:s.store_id,label:s.store_label}),i=f(""),u=f("4750975710522"),{onDialogHide:g,dialogRef:n}=x();async function l(){i.value="";try{const o=await axios.post(`/api/orders/${h}/replace/`,{barcode:u.value,store_id:b.value.id});o.data.error&&(i.value=o.data.error)}catch(o){console.error(o)}}return(o,r)=>(v(),j(I,{ref_key:"dialogRef",ref:n,onHide:q(g)},{default:a(()=>[t(B,{class:"dialog"},{default:a(()=>[L,t(F,{onSubmit:l},{default:a(()=>[t(S,{class:"q-gutter-md"},{default:a(()=>[e("div",U,[e("div",G,[e("div",M,[t(D,{outlined:"",dense:"","reverse-fill-mask":"",label:"Баркод",modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=m=>u.value=m)},{label:a(()=>[W]),_:1},8,["modelValue"])])]),e("div",X,[e("div",Y,[e("div",Z,[t(w,{color:"primary",label:"Заменить",type:"submit",unelevated:""})]),e("div",ee,[V(t(w,{color:"red",label:"Отмена",unelevated:""},null,512),[[J]])])])])]),i.value?(v(),y("div",se,[e("div",te,_(i.value),1)])):k("",!0)]),_:1}),t(R,{align:"right"},{default:a(()=>[t(A)]),_:1})]),_:1})]),_:1})]),_:1},8,["onHide"]))}},ae=K(oe,[["__scopeId","data-v-57eb1bcd"]]),le={key:0,class:"container"},re={class:"q-pa-lg"},ce={class:"row"},ie={class:"col-9"},ne={class:"row justify-between q-mt-sm"},de={class:"col-12"},_e=e("b",null,"Маркетплейс: ",-1),ue={class:"row items-center justify-between q-mt-sm"},pe={class:"col-12"},me=e("b",null,"Номер резерва: ",-1),fe={class:"row items-center justify-between q-mt-sm"},ve={class:"col-12"},he=e("b",null,"Дата резерва: ",-1),be={class:"row items-center justify-between q-mt-sm"},ge={class:"col-12"},we=e("b",null,"Магазин резерва: ",-1),ye={key:0,class:""},Ve={__name:"Show",setup(c){const s=f({}),h=T();z("auth");const b={descending:!1,page:1,rowsPerPage:50},i=async()=>{Q.show();const n=h.params.reserveId;try{const l=await fetch(`/api/reserves/${n}`);s.value=await l.json()}catch(l){console.error("Ошибка получения данных о резерве:",l)}Q.hide()},u=n=>{var l,o;O.create({component:ae,componentProps:{id:n,store_id:(l=s.value)==null?void 0:l.shop.id,store_label:(o=s.value)==null?void 0:o.shop.name}}).onOk(r=>{console.log(r)})};E(()=>{i()});const g=[{label:"Маркетплейс",name:"marketplace",field:"marketplace",sortable:!1,align:"left"},{label:"Статус",name:"status",field:"status",sortable:!1,align:"left"},{label:"Номер заказа",name:"order_id",field:"order_id",sortable:!1,align:"left"},{label:"Дата заказа",name:"order_date",field:"order_date",sortable:!1,align:"left"},{label:"Характеристика",name:"prop",field:"prop",sortable:!1,align:"left"}];return(n,l)=>{var o,r,m;return s.value?(v(),y("div",le,[e("div",re,[e("div",ce,[e("div",ie,[e("div",ne,[e("p",de,[_e,d(_(s.value.marketplace),1)])]),e("div",ue,[e("p",pe,[me,d(_(s.value.reserve_id),1)])]),e("div",fe,[e("p",ve,[he,d(_(s.value.due_date),1)])]),e("div",be,[e("p",ge,[we,d(_((o=s.value.shop)==null?void 0:o.name),1)])])])]),(m=(r=s.value)==null?void 0:r.orders)!=null&&m.length?(v(),y("div",ye,[t(P,{rows:s.value.orders,columns:g,pagination:b,dense:"",title:"Заказы","row-key":"id","virtual-scroll":"","wrap-cells":""},{"body-cell-prop":a(p=>[t($,{props:p},{default:a(()=>[d(_(p.row.prop||""),1)]),_:2},1032,["props"])]),"body-cell-action":a(p=>[t($,{props:p},{default:a(()=>[t(w,{color:"blue",dense:"",size:"sm",onClick:ke=>u(p.row.id)},{default:a(()=>[d("Заменить")]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"])])):k("",!0)])])):k("",!0)}}};export{Ve as default};