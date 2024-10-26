import{y as ae,x as re,r as m,z as ce,L as ie,B as ne,o as a,n as r,d as e,t as p,q as c,v as n,a as d,w as _,i as w,F as v,I as G,c as S,ah as de,P as y,N as J,J as A,g as q,s as ue}from"./app-64dafc3a.js";import{a as K,Q as M}from"./QTable-9f10ca35.js";import{Q as pe}from"./QSlideTransition-5ec42607.js";import{Q as I}from"./QFile-eeadd18b.js";import{_ as _e}from"./ImageDialog-5fc91dda.js";import{_ as ve}from"./ImageCarouselDialog-dda6426c.js";import"./QSelect-fcdeceb1.js";import"./QChip-18101fab.js";import"./position-engine-f936ecea.js";import"./QTooltip-3ff6951b.js";import"./QImg-4607bda3.js";import"./ClosePopup-9fac0edc.js";import"./use-dialog-plugin-component-00e1baf8.js";import"./use-render-cache-f6c711e0.js";const me={class:"row justify-center"},he={key:0,class:"q-pa-lg q-mb-xl text-red"},ge={key:0,class:"q-pa-lg q-mb-xl"},fe={class:"row justify-center"},ye={class:"col-sm-9"},be={class:"order-details"},we={class:"row"},ke={class:"col-12 text-h5"},xe=e("b",null,"Номер заказа: ",-1),qe={class:"col-12 text-h5"},$e=e("b",null,"ID заказа: ",-1),je={class:"row text-center q-mt-lg"},Ce={class:"col-12 text-h6"},ze={key:0},Ve={class:"q-mt-lg"},Se={class:"row col-12"},Ie=e("div",null,[e("p",null,[e("b",null,"Другие заказы этого резерва: ")])],-1),Qe={class:"q-ml-lg"},Te=e("div",{class:"row text-center q-mt-lg"},[e("div",{class:"col-12 text-h6"}," Сборка заказа")],-1),Ne={class:"row justify-center col-12"},Ue={class:"row q-mt-lg"},Be=["onClick"],Oe=["src"],Pe={class:"row col-12 q-mt-lg justify-center"},De={class:"row col-9 q-mt-lg"},Fe={class:"col-12 text-center"},Le={key:0,class:"row justify-center col-12 q-mt-lg"},Re=e("div",{class:"col-xs-3 col-sm-3"},[e("p",null,[e("b",null,"Фото товара:")])],-1),We={class:"col-xs-9 col-sm-6"},Ee={class:"col-xs-12 col-sm-3 q-mt-sm-sm"},He={key:0,class:"row justify-center"},Ge=["src"],Je={key:1,class:"row justify-center"},Ae=["src"],Ke={key:1,class:"row justify-center col-12 q-mt-lg"},Me=e("div",{class:"col-xs-3 col-sm-3"},[e("p",null,[e("b",null,"Фото бирки:")])],-1),Xe={class:"col-xs-9 col-sm-6"},Ye={class:"col-xs-12 col-sm-3 q-mt-sm-sm"},Ze={key:0,class:"row justify-center"},es=["src"],ss={key:1,class:"row justify-center"},os=["src"],ts={key:2,class:"row col-9 justify-center q-mt-lg"},ls={class:"col-12 text-center"},as={key:3,class:"row col-9 justify-center q-my-sm"},rs={class:"col-12 text-center"},cs={class:"text-h6"},is={class:"col-12 text-center"},ns={key:4,class:"row justify-center col-12 q-mt-lg"},ds=e("div",{class:"col-xs-3 col-sm-3"},[e("p",null,[e("b",null,"Фото собранного товара:")])],-1),us={class:"col-xs-9 col-sm-6"},ps={class:"col-xs-12 col-sm-3 q-mt-sm-sm"},_s={key:0,class:"row justify-center"},vs=["src"],ms={key:1,class:"row justify-center"},hs=["src"],gs={key:5,class:"row justify-center col-12 q-mt-lg"},fs=e("div",{class:"col-xs-5 col-sm-3"},[e("p",null,[e("b",null,"Комплектующие:")])],-1),ys={class:"col-xs-7 col-sm-9"},bs={key:6,class:"row col-9 justify-center q-mt-lg"},ws={key:1,class:"q-pa-lg"},ks={class:"text-center"},xs=e("h3",null,"Заказ собран.",-1),Ds={__name:"ShowWb",setup(qs){const Q=ae();re();const i=m(),$=m(),k=m(!1);m(null);const T=m(null),f=ce("user"),j=Q.params.orderId,C=m(),z=m(),t=m({is_found:!1,product_pic:null,product_label:null,moved_to_supply:!1,barcode_printed:!1,product_package:null,responsible:null,components:[]});m(null);const X=async()=>{y.show();try{const s=await(await axios.get(`/api/orders/${j}/wb`)).data;if(s.canceled){C.value=s.canceled,y.hide();return}i.value=s.order,T.value=s.components,z.value=s.images}catch(l){console.error(l)}y.hide()},Y=()=>{var l,s,u;try{axios.post(`/api/orders/user/${(l=f==null?void 0:f.value)==null?void 0:l.id}/accept-order/${j}/wb`,{tg_id:(s=f.value)==null?void 0:s.tg_id,fi:(u=f.value)==null?void 0:u.fi}),t.value.is_found=!0}catch(x){console.log(x)}},N=async l=>{var s;l&&(t.value.submit=!0),y.show();try{t.value.responsible=(s=f==null?void 0:f.value)==null?void 0:s.id;const u=await axios.post(`/api/orders/${j}`,{supply:t.value},{responseType:"arraybuffer",headers:{"Content-Type":"multipart/form-data"}});u.status===201?($.value=i.value.id,i.value=null,t.value=null):u.status===200||J.create({message:"Не удалось сохранить товар",color:"red"}),y.hide()}catch(u){console.log(u)}y.hide()};ie(()=>{Q.name==="OrderShowWb"&&X()}),m(0);const U={rowsNumber:50},h=l=>l instanceof File?URL.createObjectURL(l):typeof l=="string"?l:null,Z=()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},V=l=>{i.value.images[l]=null},ee=async l=>{y.show();try{(await axios.post(`/api/supplies/${l}`)).status===200?t.value.moved_to_supply=!0:J.create({message:"Проблемы с получением стикеров"}),Z()}catch(s){console.log(s)}y.hide()},se=()=>{t.value.barcode_printed=!0,window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},b=l=>{console.log(l),A.create({component:_e,componentProps:{imageUrl:l}})},oe=l=>{A.create({component:ve,componentProps:{images:z.value,currentIndex:l}})};ne(()=>{var l,s,u;return[(l=t.value)==null?void 0:l.product_pic,(s=t.value)==null?void 0:s.product_label,(u=t.value)==null?void 0:u.product_package]},async([l,s,u])=>{(l||s||u)&&await N()});const te=[{label:"Название",name:"name",field:l=>l.product.name,sortable:!1,align:"left",headerStyle:"width: 40%;font-size: 0.9rem;"},{label:"Магазин",name:"shop",field:l=>l.reserve.shop,sortable:!1,align:"left",headerStyle:"width: 20%;font-size: 0.9rem;"},{label:"Маркетплейс",name:"marketplace",field:l=>l.reserve.marketplace,sortable:!1,align:"left",headerStyle:"width: 20%;font-size: 0.9rem;"},{label:"Цена заказа",name:"price",field:"price",sortable:!1,align:"left",headerStyle:"width: 20%;font-size: 0.9rem;"}],le=[{label:"Дата отгрузки",name:"reserve_id",field:"price",sortable:!1,align:"left",headerStyle:"width: 40%;font-size: 0.9rem;"},{label:"Цвет",name:"color",field:l=>l.product.name,sortable:!1,align:"left",headerStyle:"width: 20%;font-size: 0.9rem;"},{label:"Размер",name:"size",field:l=>l.reserve.shop,sortable:!1,align:"left",headerStyle:"width: 20%;font-size: 0.9rem;"},{label:"Дата заказа",name:"order_date",field:l=>l.reserve.marketplace,sortable:!1,align:"left",headerStyle:"width: 20%;font-size: 0.9rem;"}];return(l,s)=>{var u,x,B,O,P,D,F,L,R,W,E,H;return a(),r(v,null,[e("div",me,[C.value?(a(),r("div",he,[e("h5",null,p(C.value),1)])):c("",!0)]),i.value?(a(),r("div",ge,[e("div",fe,[e("div",ye,[e("div",null,[e("div",be,[e("div",we,[e("div",ke,[xe,n(p(i.value.order_id),1)]),e("div",qe,[$e,n(p(i.value.id),1)])]),e("div",je,[e("div",Ce,[n(" Общая информация "),d(w,{onClick:s[0]||(s[0]=o=>k.value=!k.value)},{default:_(()=>[d(q,{name:k.value?"arrow_drop_up":"arrow_drop_down"},null,8,["name"])]),_:1})])]),d(pe,null,{default:_(()=>[k.value?(a(),r("div",ze,[d(ue,{class:"q-mt-lg"}),i.value?(a(),S(M,{key:0,columns:te,pagination:U,rows:[i.value],dense:"","hide-bottom":"","row-key":"id","virtual-scroll":"","wrap-cells":""},{"body-cell":_(o=>[d(K,null,{default:_(()=>[o.col.name=="name"?(a(),r(v,{key:0},[n(p(o.row.product.name),1)],64)):c("",!0),o.col.name=="shop"?(a(),r(v,{key:1},[n(p(o.row.reserve.shop),1)],64)):c("",!0),o.col.name=="marketplace"?(a(),r(v,{key:2},[o.row.reserve.marketplace==="wb"?(a(),r(v,{key:0},[n(" Wildberries ")],64)):c("",!0),o.row.reserve.marketplace==="ozon"?(a(),r(v,{key:1},[n(" Ozon ")],64)):c("",!0)],64)):c("",!0),o.col.name=="price"?(a(),r(v,{key:3},[n(p(o.row.price),1)],64)):c("",!0)]),_:2},1024)]),_:1},8,["rows"])):c("",!0),i.value?(a(),S(M,{key:1,columns:le,pagination:U,rows:[i.value],dense:"","hide-bottom":"","row-key":"id","virtual-scroll":"","wrap-cells":""},{"body-cell":_(o=>[d(K,null,{default:_(()=>[o.col.name=="color"?(a(),r(v,{key:0},[n(p(o.row.prop.color),1)],64)):c("",!0),o.col.name=="size"?(a(),r(v,{key:1},[n(p(o.row.prop.size),1)],64)):c("",!0),o.col.name=="order_date"?(a(),r(v,{key:2},[n(p(o.row.order_date),1)],64)):c("",!0),o.col.name=="reserve_id"?(a(),r(v,{key:3},[n(p(o.row.shipping_date),1)],64)):c("",!0)]),_:2},1024)]),_:1},8,["rows"])):c("",!0),e("div",Ve,[e("div",Se,[Ie,e("div",Qe,[(a(!0),r(v,null,G(i.value.reserve.orders,o=>(a(),r("div",null," №: "+p(o.order_id),1))),256))])])])])):c("",!0)]),_:1})])]),Te,e("div",Ne,[e("div",Ue,[(a(!0),r(v,null,G(z.value,o=>(a(),r("div",{class:"col-xs-3 col-md-3 cursor-pointer col-lg-3",onClick:g=>oe(o)},[e("img",{src:o,alt:"ss",height:"auto",style:{"border-radius":"10px"},width:"100"},null,8,Oe)],8,Be))),256))])]),e("div",Pe,[e("div",De,[e("div",Fe,[t.value.is_found?c("",!0):(a(),S(w,{key:0,onClick:Y,color:"green",outlined:""},{default:_(()=>[n("Товар найден")]),_:1}))])]),t.value.is_found?(a(),r("div",Le,[Re,e("div",We,[d(I,{modelValue:t.value.product_pic,"onUpdate:modelValue":s[1]||(s[1]=o=>t.value.product_pic=o),onInput:s[2]||(s[2]=o=>V("product_pic")),outlined:"",label:"Фото",clearable:"",dense:"",accept:"image/*,.pdf"},{default:_(()=>[d(q,{name:"attach_file",class:"cursor-pointer",color:"grey",size:"1.2rem"})]),_:1},8,["modelValue"])]),e("div",Ee,[t.value.product_pic?(a(),r("div",He,[e("div",{class:"cursor-pointer",onClick:s[3]||(s[3]=o=>b(h(t.value.product_pic)))},[e("img",{src:h(t.value.product_pic),width:"100",height:"auto",alt:"ss",style:{"border-radius":"10px"}},null,8,Ge)])])):c("",!0),(u=i.value.images)!=null&&u.product_pic?(a(),r("div",Je,[e("div",{class:"cursor-pointer",onClick:s[4]||(s[4]=o=>{var g;return b(h((g=i.value.images)==null?void 0:g.product_pic))})},[e("img",{src:(x=i.value.images)==null?void 0:x.product_pic,width:"100",height:"auto",alt:"ss",style:{"border-radius":"10px"}},null,8,Ae)])])):c("",!0)])])):c("",!0),t.value.is_found&&(t.value.product_pic||(B=i.value.images)!=null&&B.product_pic)?(a(),r("div",Ke,[Me,e("div",Xe,[d(I,{modelValue:t.value.product_label,"onUpdate:modelValue":s[5]||(s[5]=o=>t.value.product_label=o),onInput:s[6]||(s[6]=o=>V("product_label")),outlined:"",label:"Фото бирки",clearable:"",dense:"",accept:"image/*,.pdf"},{default:_(()=>[d(q,{name:"attach_file",class:"cursor-pointer",color:"grey",size:"1.2rem"})]),_:1},8,["modelValue"])]),e("div",Ye,[t.value.product_label?(a(),r("div",Ze,[e("div",{class:"cursor-pointer",onClick:s[7]||(s[7]=o=>b(h(t.value.product_label)))},[e("img",{src:h(t.value.product_label),width:"100",height:"auto",alt:"ss",style:{"border-radius":"10px"}},null,8,es)])])):c("",!0),(O=i.value.images)!=null&&O.product_label?(a(),r("div",ss,[e("div",{class:"cursor-pointer",onClick:s[8]||(s[8]=o=>{var g;return b(h((g=i.value.images)==null?void 0:g.product_label))})},[e("img",{src:(P=i.value.images)==null?void 0:P.product_label,width:"100",height:"auto",alt:"ss",style:{"border-radius":"10px"}},null,8,os)])])):c("",!0)])])):c("",!0),t.value.is_found&&(t.value.product_label||(D=i.value.images)!=null&&D.product_label)?(a(),r("div",ts,[e("div",ls,[d(w,{onClick:s[9]||(s[9]=o=>ee(i.value.id)),color:"green"},{default:_(()=>[n("Получить наклейки")]),_:1})])])):c("",!0),t.value.moved_to_supply&&(t.value.product_label||(F=i.value.images)!=null&&F.product_label)?(a(),r("div",as,[e("div",rs,[e("p",cs,"ID заказа: "+p(i.value.id),1)]),e("div",is,[d(w,{onClick:se,color:"green"},{default:_(()=>[n("Штрихкод напечатан")]),_:1})])])):c("",!0),t.value.barcode_printed&&(t.value.product_label||(L=i.value.images)!=null&&L.product_label)?(a(),r("div",ns,[ds,e("div",us,[d(I,{modelValue:t.value.product_package,"onUpdate:modelValue":s[10]||(s[10]=o=>t.value.product_package=o),onInput:s[11]||(s[11]=o=>V("product_package")),outlined:"",label:"Фото собранного товара",clearable:"",dense:"",accept:"image/*,.pdf"},{default:_(()=>[d(q,{name:"attach_file",class:"cursor-pointer",color:"grey",size:"1.2rem"})]),_:1},8,["modelValue"])]),e("div",ps,[t.value.product_package?(a(),r("div",_s,[e("div",{class:"cursor-pointer",onClick:s[12]||(s[12]=o=>b(h(t.value.product_package)))},[e("img",{src:h(t.value.product_package),width:"100",height:"auto",alt:"ss",style:{"border-radius":"10px"}},null,8,vs)])])):c("",!0),(R=i.value.images)!=null&&R.product_package?(a(),r("div",ms,[e("div",{class:"cursor-pointer",onClick:s[13]||(s[13]=o=>{var g;return b(h((g=i.value.images)==null?void 0:g.product_package))})},[e("img",{src:(W=i.value.images)==null?void 0:W.product_package,width:"100",height:"auto",alt:"ss",style:{"border-radius":"10px"}},null,8,hs)])])):c("",!0)])])):c("",!0),t.value.barcode_printed&&(t.value.product_package||(E=i.value.images)!=null&&E.product_package)?(a(),r("div",gs,[fs,e("div",ys,[d(de,{type:"checkbox",modelValue:t.value.components,"onUpdate:modelValue":s[14]||(s[14]=o=>t.value.components=o),options:T.value},null,8,["modelValue","options"])])])):c("",!0),t.value.barcode_printed&&(t.value.product_package||(H=i.value.images)!=null&&H.product_package)?(a(),r("div",bs,[d(w,{onClick:s[15]||(s[15]=o=>N(!0)),color:"green"},{default:_(()=>[n("Завершить")]),_:1})])):c("",!0)])])])])):c("",!0),$.value?(a(),r("div",ws,[e("div",ks,[xs,e("h3",null,"ID заказа: "+p($.value),1)])])):c("",!0)],64)}}};export{Ds as default};
