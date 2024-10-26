import{O as b,a6 as v,S as w,aw as E}from"./app-64dafc3a.js";const H=b({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(r,{slots:g,emit:p}){let a=!1,u,d,i=null,o=null,n,h;function f(){u&&u(),u=null,a=!1,i!==null&&(clearTimeout(i),i=null),o!==null&&(clearTimeout(o),o=null),d!==void 0&&d.removeEventListener("transitionend",n),n=null}function m(t,e,l){e!==void 0&&(t.style.height=`${e}px`),t.style.transition=`height ${r.duration}ms cubic-bezier(.25, .8, .50, 1)`,a=!0,u=l}function c(t,e){t.style.overflowY=null,t.style.height=null,t.style.transition=null,f(),e!==h&&p(e)}function y(t,e){let l=0;d=t,a===!0?(f(),l=t.offsetHeight===t.scrollHeight?0:void 0):(h="hide",t.style.overflowY="hidden"),m(t,l,e),i=setTimeout(()=>{i=null,t.style.height=`${t.scrollHeight}px`,n=s=>{o=null,(Object(s)!==s||s.target===t)&&c(t,"show")},t.addEventListener("transitionend",n),o=setTimeout(n,r.duration*1.1)},100)}function T(t,e){let l;d=t,a===!0?f():(h="show",t.style.overflowY="hidden",l=t.scrollHeight),m(t,l,e),i=setTimeout(()=>{i=null,t.style.height=0,n=s=>{o=null,(Object(s)!==s||s.target===t)&&c(t,"hide")},t.addEventListener("transitionend",n),o=setTimeout(n,r.duration*1.1)},100)}return v(()=>{a===!0&&f()}),()=>w(E,{css:!1,appear:r.appear,onEnter:y,onLeave:T},g.default)}});export{H as Q};
