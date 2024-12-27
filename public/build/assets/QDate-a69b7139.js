import{y as M,ag as at,ah as nt,ai as jt,V as Ft,aj as Vt,ak as Et,C as At,al as Nt,am as zt,r as N,j as re,_ as y,J as oe,$ as Zt,an as Bt,ao as Rt,D as Je,f as z}from"./app-d8a71dc8.js";import{g as b,h as Lt}from"./QSelect-3c885f97.js";function Qt(){let e=Object.create(null);return{getCache:(n,l)=>e[n]===void 0?e[n]=typeof l=="function"?l():l:e[n],setCache(n,l){e[n]=l},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const L=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function pt(e,n,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),n=e.getMonth()+1,e=e.getFullYear()),Jt(Ie(e,n,l))}function We(e,n,l){return ot(Xt(e,n,l))}function Pt(e){return Ut(e)===0}function he(e,n){return n<=6?31:n<=11||Pt(e)?30:29}function Ut(e){const n=L.length;let l=L[0],r,u,s,m,i;if(e<l||e>=L[n-1])throw new Error("Invalid Jalaali year "+e);for(i=1;i<n&&(r=L[i],u=r-l,!(e<r));i+=1)l=r;return m=e-l,u-m<6&&(m=m-u+S(u+4,33)*33),s=$($(m+1,33)-1,4),s===-1&&(s=4),s}function rt(e,n){const l=L.length,r=e+621;let u=-14,s=L[0],m,i,h,x,v;if(e<s||e>=L[l-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<l&&(m=L[v],i=m-s,!(e<m));v+=1)u=u+S(i,33)*8+S($(i,33),4),s=m;x=e-s,u=u+S(x,33)*8+S($(x,33)+3,4),$(i,33)===4&&i-x===4&&(u+=1);const w=S(r,4)-S((S(r,100)+1)*3,4)-150,E=20+u-w;return n||(i-x<6&&(x=x-i+S(i+4,33)*33),h=$($(x+1,33)-1,4),h===-1&&(h=4)),{leap:h,gy:r,march:E}}function Xt(e,n,l){const r=rt(e,!0);return Ie(r.gy,3,r.march)+(n-1)*31-S(n,7)*(n-7)+l-1}function Jt(e){const n=ot(e).gy;let l=n-621,r,u,s;const m=rt(l,!1),i=Ie(n,3,m.march);if(s=e-i,s>=0){if(s<=185)return u=1+S(s,31),r=$(s,31)+1,{jy:l,jm:u,jd:r};s-=186}else l-=1,s+=179,m.leap===1&&(s+=1);return u=7+S(s,30),r=$(s,30)+1,{jy:l,jm:u,jd:r}}function Ie(e,n,l){let r=S((e+S(n-8,6)+100100)*1461,4)+S(153*$(n+9,12)+2,5)+l-34840408;return r=r-S(S(e+100100+S(n-8,6),100)*3,4)+752,r}function ot(e){let n=4*e+139361631;n=n+S(S(4*e+183187720,146097)*3,4)*4-3908;const l=S($(n,1461),4)*5+308,r=S($(l,153),5)+1,u=$(S(l,153),12)+1;return{gy:S(n,1461)-100100+S(8-u,6),gm:u,gd:r}}function S(e,n){return~~(e/n)}function $(e,n){return e-~~(e/n)*n}const Wt=["gregorian","persian"],Ge={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Wt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Gt=["update:modelValue"];function B(e){return e.year+"/"+b(e.month)+"/"+b(e.day)}function Kt(e,n){const l=M(()=>e.disable!==!0&&e.readonly!==!0),r=M(()=>l.value===!0?0:-1),u=M(()=>{const i=[];return e.color!==void 0&&i.push(`bg-${e.color}`),e.textColor!==void 0&&i.push(`text-${e.textColor}`),i.join(" ")});function s(){return e.locale!==void 0?{...n.lang.date,...e.locale}:n.lang.date}function m(i){const h=new Date,x=i===!0?null:0;if(e.calendar==="persian"){const v=pt(h);return{year:v.jy,month:v.jm,day:v.jd}}return{year:h.getFullYear(),month:h.getMonth()+1,day:h.getDate(),hour:x,minute:x,second:x,millisecond:x}}return{editable:l,tabindex:r,headerClass:u,getLocale:s,getCurrentDate:m}}const lt=864e5,ea=36e5,$e=6e4,ut="YYYY-MM-DDTHH:mm:ss.SSSZ",ta=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,aa=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Oe={};function na(e,n){const l="("+n.days.join("|")+")",r=e+l;if(Oe[r]!==void 0)return Oe[r];const u="("+n.daysShort.join("|")+")",s="("+n.months.join("|")+")",m="("+n.monthsShort.join("|")+")",i={};let h=0;const x=e.replace(aa,w=>{switch(h++,w){case"YY":return i.YY=h,"(-?\\d{1,2})";case"YYYY":return i.YYYY=h,"(-?\\d{1,4})";case"M":return i.M=h,"(\\d{1,2})";case"Mo":return i.M=h++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return i.M=h,"(\\d{2})";case"MMM":return i.MMM=h,m;case"MMMM":return i.MMMM=h,s;case"D":return i.D=h,"(\\d{1,2})";case"Do":return i.D=h++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return i.D=h,"(\\d{2})";case"H":return i.H=h,"(\\d{1,2})";case"HH":return i.H=h,"(\\d{2})";case"h":return i.h=h,"(\\d{1,2})";case"hh":return i.h=h,"(\\d{2})";case"m":return i.m=h,"(\\d{1,2})";case"mm":return i.m=h,"(\\d{2})";case"s":return i.s=h,"(\\d{1,2})";case"ss":return i.s=h,"(\\d{2})";case"S":return i.S=h,"(\\d{1})";case"SS":return i.S=h,"(\\d{2})";case"SSS":return i.S=h,"(\\d{3})";case"A":return i.A=h,"(AM|PM)";case"a":return i.a=h,"(am|pm)";case"aa":return i.aa=h,"(a\\.m\\.|p\\.m\\.)";case"ddd":return u;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"do":return h++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return h++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return h++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return i.Z=h,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return i.ZZ=h,"(Z|[+-]\\d{2}\\d{2})";case"X":return i.X=h,"(-?\\d+)";case"x":return i.x=h,"(-?\\d{4,})";default:return h--,w[0]==="["&&(w=w.substring(1,w.length-1)),w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:i,regex:new RegExp("^"+x)};return Oe[r]=v,v}function st(e,n){return e!==void 0?e:n!==void 0?n.date:jt.date}function Ke(e,n=""){const l=e>0?"-":"+",r=Math.abs(e),u=Math.floor(r/60),s=r%60;return l+b(u)+n+b(s)}function ra(e,n,l){let r=e.getFullYear(),u=e.getMonth();const s=e.getDate();return n.year!==void 0&&(r+=l*n.year,delete n.year),n.month!==void 0&&(u+=l*n.month,delete n.month),e.setDate(1),e.setMonth(2),e.setFullYear(r),e.setMonth(u),e.setDate(Math.min(s,Fe(e))),n.date!==void 0&&(e.setDate(e.getDate()+l*n.date),delete n.date),e}function oa(e,n,l){const r=n.year!==void 0?n.year:e[`get${l}FullYear`](),u=n.month!==void 0?n.month-1:e[`get${l}Month`](),s=new Date(r,u+1,0).getDate(),m=Math.min(s,n.date!==void 0?n.date:e[`get${l}Date`]());return e[`set${l}Date`](1),e[`set${l}Month`](2),e[`set${l}FullYear`](r),e[`set${l}Month`](u),e[`set${l}Date`](m),delete n.year,delete n.month,delete n.date,e}function Te(e,n,l){const r=it(n),u=new Date(e),s=r.year!==void 0||r.month!==void 0||r.date!==void 0?ra(u,r,l):u;for(const m in r){const i=Lt(m);s[`set${i}`](s[`get${i}`]()+l*r[m])}return s}function it(e){const n={...e};return e.years!==void 0&&(n.year=e.years,delete n.years),e.months!==void 0&&(n.month=e.months,delete n.months),e.days!==void 0&&(n.date=e.days,delete n.days),e.day!==void 0&&(n.date=e.day,delete n.day),e.hour!==void 0&&(n.hours=e.hour,delete n.hour),e.minute!==void 0&&(n.minutes=e.minute,delete n.minute),e.second!==void 0&&(n.seconds=e.second,delete n.second),e.millisecond!==void 0&&(n.milliseconds=e.millisecond,delete n.millisecond),n}function ct(e,n,l){const r=it(n),u=l===!0?"UTC":"",s=new Date(e),m=r.year!==void 0||r.month!==void 0||r.date!==void 0?oa(s,r,u):s;for(const i in r){const h=i.charAt(0).toUpperCase()+i.slice(1);m[`set${u}${h}`](r[i])}return m}function la(e,n,l){const r=dt(e,n,l),u=new Date(r.year,r.month===null?null:r.month-1,r.day===null?1:r.day,r.hour,r.minute,r.second,r.millisecond),s=u.getTimezoneOffset();return r.timezoneOffset===null||r.timezoneOffset===s?u:Te(u,{minutes:r.timezoneOffset-s},1)}function dt(e,n,l,r,u){const s={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(u!==void 0&&Object.assign(s,u),e==null||e===""||typeof e!="string")return s;n===void 0&&(n=ut);const m=st(l,at.props),i=m.months,h=m.monthsShort,{regex:x,map:v}=na(n,m),w=e.match(x);if(w===null)return s;let E="";if(v.X!==void 0||v.x!==void 0){const T=parseInt(w[v.X!==void 0?v.X:v.x],10);if(isNaN(T)===!0||T<0)return s;const j=new Date(T*(v.X!==void 0?1e3:1));s.year=j.getFullYear(),s.month=j.getMonth()+1,s.day=j.getDate(),s.hour=j.getHours(),s.minute=j.getMinutes(),s.second=j.getSeconds(),s.millisecond=j.getMilliseconds()}else{if(v.YYYY!==void 0)s.year=parseInt(w[v.YYYY],10);else if(v.YY!==void 0){const T=parseInt(w[v.YY],10);s.year=T<0?T:2e3+T}if(v.M!==void 0){if(s.month=parseInt(w[v.M],10),s.month<1||s.month>12)return s}else v.MMM!==void 0?s.month=h.indexOf(w[v.MMM])+1:v.MMMM!==void 0&&(s.month=i.indexOf(w[v.MMMM])+1);if(v.D!==void 0){if(s.day=parseInt(w[v.D],10),s.year===null||s.month===null||s.day<1)return s;const T=r!=="persian"?new Date(s.year,s.month,0).getDate():he(s.year,s.month);if(s.day>T)return s}v.H!==void 0?s.hour=parseInt(w[v.H],10)%24:v.h!==void 0&&(s.hour=parseInt(w[v.h],10)%12,(v.A&&w[v.A]==="PM"||v.a&&w[v.a]==="pm"||v.aa&&w[v.aa]==="p.m.")&&(s.hour+=12),s.hour=s.hour%24),v.m!==void 0&&(s.minute=parseInt(w[v.m],10)%60),v.s!==void 0&&(s.second=parseInt(w[v.s],10)%60),v.S!==void 0&&(s.millisecond=parseInt(w[v.S],10)*10**(3-w[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(E=v.Z!==void 0?w[v.Z].replace(":",""):w[v.ZZ],s.timezoneOffset=(E[0]==="+"?-1:1)*(60*E.slice(1,3)+1*E.slice(3,5)))}return s.dateHash=b(s.year,6)+"/"+b(s.month)+"/"+b(s.day),s.timeHash=b(s.hour)+":"+b(s.minute)+":"+b(s.second)+E,s}function ua(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function sa(e,n){return ct(new Date,e,n)}function ia(e){const n=new Date(e).getDay();return n===0?7:n}function me(e){const n=new Date(e.getFullYear(),e.getMonth(),e.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);const l=new Date(n.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const r=n.getTimezoneOffset()-l.getTimezoneOffset();n.setHours(n.getHours()-r);const u=(n-l)/(lt*7);return 1+Math.floor(u)}function ca(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function qe(e,n){const l=new Date(e);return n===!0?ca(l):l.getTime()}function da(e,n,l,r={}){const u=qe(n,r.onlyDate),s=qe(l,r.onlyDate),m=qe(e,r.onlyDate);return(m>u||r.inclusiveFrom===!0&&m===u)&&(m<s||r.inclusiveTo===!0&&m===s)}function fa(e,n){return Te(e,n,1)}function va(e,n){return Te(e,n,-1)}function V(e,n,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(n){case"year":case"years":r[`${u}Month`](0);case"month":case"months":r[`${u}Date`](1);case"day":case"days":case"date":r[`${u}Hours`](0);case"hour":case"hours":r[`${u}Minutes`](0);case"minute":case"minutes":r[`${u}Seconds`](0);case"second":case"seconds":r[`${u}Milliseconds`](0)}return r}function ha(e,n,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(n){case"year":case"years":r[`${u}Month`](11);case"month":case"months":r[`${u}Date`](Fe(r));case"day":case"days":case"date":r[`${u}Hours`](23);case"hour":case"hours":r[`${u}Minutes`](59);case"minute":case"minutes":r[`${u}Seconds`](59);case"second":case"seconds":r[`${u}Milliseconds`](999)}return r}function ma(e){let n=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{n=Math.max(n,new Date(l))}),n}function ga(e){let n=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{n=Math.min(n,new Date(l))}),n}function ve(e,n,l){return(e.getTime()-e.getTimezoneOffset()*$e-(n.getTime()-n.getTimezoneOffset()*$e))/l}function je(e,n,l="days"){const r=new Date(e),u=new Date(n);switch(l){case"years":case"year":return r.getFullYear()-u.getFullYear();case"months":case"month":return(r.getFullYear()-u.getFullYear())*12+r.getMonth()-u.getMonth();case"days":case"day":case"date":return ve(V(r,"day"),V(u,"day"),lt);case"hours":case"hour":return ve(V(r,"hour"),V(u,"hour"),ea);case"minutes":case"minute":return ve(V(r,"minute"),V(u,"minute"),$e);case"seconds":case"second":return ve(V(r,"second"),V(u,"second"),1e3)}}function ge(e){return je(e,V(e,"year"),"days")+1}function ya(e){return nt(e)===!0?"date":typeof e=="number"?"number":"string"}function Da(e,n,l){const r=new Date(e);if(n){const u=new Date(n);if(r<u)return u}if(l){const u=new Date(l);if(r>u)return u}return r}function Ma(e,n,l){const r=new Date(e),u=new Date(n);if(l===void 0)return r.getTime()===u.getTime();switch(l){case"second":case"seconds":if(r.getSeconds()!==u.getSeconds())return!1;case"minute":case"minutes":if(r.getMinutes()!==u.getMinutes())return!1;case"hour":case"hours":if(r.getHours()!==u.getHours())return!1;case"day":case"days":case"date":if(r.getDate()!==u.getDate())return!1;case"month":case"months":if(r.getMonth()!==u.getMonth())return!1;case"year":case"years":if(r.getFullYear()!==u.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${l}`)}return!0}function Fe(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function K(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const et={YY(e,n,l){const r=this.YYYY(e,n,l)%100;return r>=0?b(r):"-"+b(Math.abs(r))},YYYY(e,n,l){return l??e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return K(e.getMonth()+1)},MM(e){return b(e.getMonth()+1)},MMM(e,n){return n.monthsShort[e.getMonth()]},MMMM(e,n){return n.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return K(this.Q(e))},D(e){return e.getDate()},Do(e){return K(e.getDate())},DD(e){return b(e.getDate())},DDD(e){return ge(e)},DDDo(e){return K(ge(e))},DDDD(e){return b(ge(e),3)},d(e){return e.getDay()},do(e){return K(e.getDay())},dd(e,n){return n.days[e.getDay()].slice(0,2)},ddd(e,n){return n.daysShort[e.getDay()]},dddd(e,n){return n.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return me(e)},wo(e){return K(me(e))},ww(e){return b(me(e))},H(e){return e.getHours()},HH(e){return b(e.getHours())},h(e){const n=e.getHours();return n===0?12:n>12?n%12:n},hh(e){return b(this.h(e))},m(e){return e.getMinutes()},mm(e){return b(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return b(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return b(Math.floor(e.getMilliseconds()/10))},SSS(e){return b(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,n,l,r){const u=r??e.getTimezoneOffset();return Ke(u,":")},ZZ(e,n,l,r){const u=r??e.getTimezoneOffset();return Ke(u)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ft(e,n,l,r,u){if(e!==0&&!e||e===1/0||e===-1/0)return;const s=new Date(e);if(isNaN(s))return;n===void 0&&(n=ut);const m=st(l,at.props);return n.replace(ta,(i,h)=>i in et?et[i](s,m,r,u):h===void 0?i:h.split("\\]").join("]"))}function wa(e){return nt(e)===!0?new Date(e.getTime()):e}const Sa={isValid:ua,extractDate:la,buildDate:sa,getDayOfWeek:ia,getWeekOfYear:me,isBetweenDates:da,addToDate:fa,subtractFromDate:va,adjustDate:ct,startOfDate:V,endOfDate:ha,getMaxDate:ma,getMinDate:ga,getDateDiff:je,getDayOfYear:ge,inferDateFormat:ya,getDateBetween:Da,isSameDate:Ma,daysInMonth:Fe,formatDate:ft,clone:wa},U=20,Ya=["Calendar","Years","Months"],tt=e=>Ya.includes(e),ke=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ee=" — ";function R(e){return e.year+"/"+b(e.month)}const xa=Ft({name:"QDate",props:{...Ge,...Vt,...Et,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...Ge.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:ke},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:ke},navigationMaxYearMonth:{type:String,validator:ke},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:tt}},emits:[...Gt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:n,emit:l}){const{proxy:r}=At(),{$q:u}=r,s=Nt(e,u),{getCache:m}=Qt(),{tabindex:i,headerClass:h,getLocale:x,getCurrentDate:v}=Kt(e,u);let w;const E=zt(e),T=Bt(E),j=N(null),Q=N(Re()),H=N(x()),vt=M(()=>Re()),ht=M(()=>x()),A=M(()=>v()),g=N(Le(Q.value,H.value)),k=N(e.defaultView),Ve=M(()=>u.lang.rtl===!0?"right":"left"),le=N(Ve.value),ye=N(Ve.value),De=g.value.year,ue=N(De-De%U-(De<0?U:0)),q=N(null),mt=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(s.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),p=M(()=>e.color||"primary"),X=M(()=>e.textColor||"white"),se=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),Me=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),F=M(()=>Me.value.filter(t=>typeof t=="string").map(t=>_e(t,Q.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),J=M(()=>{const t=a=>_e(a,Q.value,H.value);return Me.value.filter(a=>Rt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ie=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=We(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),we=M(()=>e.calendar==="persian"?B:(t,a,o)=>ft(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?Q.value:a,o===void 0?H.value:o,t.year,t.timezoneOffset)),te=M(()=>F.value.length+J.value.reduce((t,a)=>t+1+je(ie.value(a.to),ie.value(a.from)),0)),Ee=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(q.value!==null){const o=q.value.init,c=ie.value(o);return H.value.daysShort[c.getDay()]+", "+H.value.monthsShort[o.month-1]+" "+o.day+ee+"?"}if(te.value===0)return ee;if(te.value>1)return`${te.value} ${H.value.pluralDay}`;const t=F.value[0],a=ie.value(t);return isNaN(a.valueOf())===!0?ee:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),gt=M(()=>F.value.concat(J.value.map(a=>a.from)).sort((a,o)=>a.year-o.year||a.month-o.month)[0]),yt=M(()=>F.value.concat(J.value.map(a=>a.to)).sort((a,o)=>o.year-a.year||o.month-a.month)[0]),Ae=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(te.value===0)return ee;if(te.value>1){const t=gt.value,a=yt.value,o=H.value.monthsShort;return o[t.month-1]+(t.year!==a.year?" "+t.year+ee+o[a.month-1]+" ":t.month!==a.month?ee+o[a.month-1]:"")+" "+a.year}return F.value[0].year}),ce=M(()=>{const t=[u.iconSet.datetime.arrowLeft,u.iconSet.datetime.arrowRight];return u.lang.rtl===!0?t.reverse():t}),Ne=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),Dt=M(()=>{const t=H.value.daysShort,a=Ne.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=M(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():he(t.year,t.month)}),Mt=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),C=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),O=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Ye=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return C.value!==null&&C.value.year>=g.value.year&&(t.year.prev=!1,C.value.year===g.value.year&&C.value.month>=g.value.month&&(t.month.prev=!1)),O.value!==null&&O.value.year<=g.value.year&&(t.year.next=!1,O.value.year===g.value.year&&O.value.month<=g.value.month&&(t.month.next=!1)),t}),de=M(()=>{const t={};return F.value.forEach(a=>{const o=R(a);t[o]===void 0&&(t[o]=[]),t[o].push(a.day)}),t}),ze=M(()=>{const t={};return J.value.forEach(a=>{const o=R(a.from),c=R(a.to);if(t[o]===void 0&&(t[o]=[]),t[o].push({from:a.from.day,to:o===c?a.to.day:void 0,range:a}),o<c){let d;const{year:Y,month:f}=a.from,D=f<12?{year:Y,month:f+1}:{year:Y+1,month:1};for(;(d=R(D))<=c;)t[d]===void 0&&(t[d]=[]),t[d].push({from:void 0,to:d===c?a.to.day:void 0,range:a}),D.month++,D.month>12&&(D.year++,D.month=1)}}),t}),ae=M(()=>{if(q.value===null)return;const{init:t,initHash:a,final:o,finalHash:c}=q.value,[d,Y]=a<=c?[t,o]:[o,t],f=R(d),D=R(Y);if(f!==I.value&&D!==I.value)return;const _={};return f===I.value?(_.from=d.day,_.includeFrom=!0):_.from=1,D===I.value?(_.to=Y.day,_.includeTo=!0):_.to=Z.value,_}),I=M(()=>R(g.value)),wt=M(()=>{const t={};if(e.options===void 0){for(let o=1;o<=Z.value;o++)t[o]=!0;return t}const a=typeof e.options=="function"?e.options:o=>e.options.includes(o);for(let o=1;o<=Z.value;o++){const c=I.value+"/"+b(o);t[o]=a(c)}return t}),Yt=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:o=>e.events.includes(o);for(let o=1;o<=Z.value;o++){const c=I.value+"/"+b(o);t[o]=a(c)===!0&&Mt.value(c)}}return t}),bt=M(()=>{let t,a;const{year:o,month:c}=g.value;if(e.calendar!=="persian")t=new Date(o,c-1,1),a=new Date(o,c-1,0).getDate();else{const d=We(o,c,1);t=new Date(d.gy,d.gm-1,d.gd);let Y=c-1,f=o;Y===0&&(Y=12,f--),a=he(f,Y)}return{days:t.getDay()-Ne.value-1,endDay:a}}),Ze=M(()=>{const t=[],{days:a,endDay:o}=bt.value,c=a<0?a+7:a;if(c<6)for(let f=o-c;f<=o;f++)t.push({i:f,fill:!0});const d=t.length;for(let f=1;f<=Z.value;f++){const D={i:f,event:Yt.value[f],classes:[]};wt.value[f]===!0&&(D.in=!0,D.flat=!0),t.push(D)}if(de.value[I.value]!==void 0&&de.value[I.value].forEach(f=>{const D=d+f-1;Object.assign(t[D],{selected:!0,unelevated:!0,flat:!1,color:p.value,textColor:X.value})}),ze.value[I.value]!==void 0&&ze.value[I.value].forEach(f=>{if(f.from!==void 0){const D=d+f.from-1,_=d+(f.to||Z.value)-1;for(let ne=D;ne<=_;ne++)Object.assign(t[ne],{range:f.range,unelevated:!0,color:p.value,textColor:X.value});Object.assign(t[D],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[_],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const D=d+f.to-1;for(let _=d;_<=D;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:p.value,textColor:X.value});Object.assign(t[D],{flat:!1,rangeTo:!0})}else{const D=d+Z.value-1;for(let _=d;_<=D;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:p.value,textColor:X.value})}}),ae.value!==void 0){const f=d+ae.value.from-1,D=d+ae.value.to-1;for(let _=f;_<=D;_++)t[_].color=p.value,t[_].editRange=!0;ae.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ae.value.includeTo===!0&&(t[D].editRangeTo=!0)}g.value.year===A.value.year&&g.value.month===A.value.month&&(t[d+A.value.day-1].today=!0);const Y=t.length%7;if(Y>0){const f=7-Y;for(let D=1;D<=f;D++)t.push({i:D,fill:!0})}return t.forEach(f=>{let D="q-date__calendar-item ";f.fill===!0?D+="q-date__calendar-item--fill":(D+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(D+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(D+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(D+=` text-${f.color}`)),f.classes=D}),t}),_t=M(()=>e.disable===!0?{"aria-disabled":"true"}:{});re(()=>e.modelValue,t=>{if(w===t)w=0;else{const a=Le(Q.value,H.value);W(a.year,a.month,a)}}),re(k,()=>{j.value!==null&&r.$el.contains(document.activeElement)===!0&&j.value.focus()}),re(()=>g.value.year+"|"+g.value.month,()=>{l("navigation",{year:g.value.year,month:g.value.month})}),re(vt,t=>{Xe(t,H.value,"mask"),Q.value=t}),re(ht,t=>{Xe(Q.value,t,"locale"),H.value=t});function Be(){const{year:t,month:a,day:o}=A.value,c={...g.value,year:t,month:a,day:o},d=de.value[R(c)];(d===void 0||d.includes(c.day)===!1)&&xe(c),be(c.year,c.month)}function St(t){tt(t)===!0&&(k.value=t)}function xt(t,a){["month","year"].includes(t)&&(t==="month"?pe:Se)(a===!0?-1:1)}function be(t,a){k.value="Calendar",W(t,a)}function Ht(t,a){if(e.range===!1||!t){q.value=null;return}const o=Object.assign({...g.value},t),c=a!==void 0?Object.assign({...g.value},a):o;q.value={init:o,initHash:B(o),final:c,finalHash:B(c)},be(o.year,o.month)}function Re(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function _e(t,a,o){return dt(t,a,o,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Le(t,a){const o=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(o.length===0)return Qe();const c=o[o.length-1],d=_e(c.from!==void 0?c.from:c,t,a);return d.dateHash===null?Qe():d}function Qe(){let t,a;if(e.defaultYearMonth!==void 0){const o=e.defaultYearMonth.split("/");t=parseInt(o[0],10),a=parseInt(o[1],10)}else{const o=A.value!==void 0?A.value:v();t=o.year,a=o.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+b(a)+"/01"}}function pe(t){let a=g.value.year,o=Number(g.value.month)+t;o===13?(o=1,a++):o===0&&(o=12,a--),W(a,o),se.value===!0&&fe("month")}function Se(t){const a=Number(g.value.year)+t;W(a,g.value.month),se.value===!0&&fe("year")}function Ct(t){W(t,g.value.month),k.value=e.defaultView==="Years"?"Months":"Calendar",se.value===!0&&fe("year")}function Ot(t){W(g.value.year,t),k.value="Calendar",se.value===!0&&fe("month")}function qt(t,a){const o=de.value[a];(o!==void 0&&o.includes(t.day)===!0?He:xe)(t)}function P(t){return{year:t.year,month:t.month,day:t.day}}function W(t,a,o){if(C.value!==null&&t<=C.value.year&&((a<C.value.month||t<C.value.year)&&(a=C.value.month),t=C.value.year),O.value!==null&&t>=O.value.year&&((a>O.value.month||t>O.value.year)&&(a=O.value.month),t=O.value.year),o!==void 0){const{hour:d,minute:Y,second:f,millisecond:D,timezoneOffset:_,timeHash:ne}=o;Object.assign(g.value,{hour:d,minute:Y,second:f,millisecond:D,timezoneOffset:_,timeHash:ne})}const c=t+"/"+b(a)+"/01";c!==g.value.dateHash&&(le.value=g.value.dateHash<c==(u.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(ye.value=le.value),Je(()=>{ue.value=t-t%U-(t<0?U:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:c})}))}function Pe(t,a,o){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;w=c;const{reason:d,details:Y}=Ue(a,o);l("update:modelValue",c,d,Y)}function fe(t){const a=F.value[0]!==void 0&&F.value[0].dateHash!==null?{...F.value[0]}:{...g.value};Je(()=>{a.year=g.value.year,a.month=g.value.month;const o=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():he(a.year,a.month);a.day=Math.min(Math.max(1,a.day),o);const c=G(a);w=c;const{details:d}=Ue("",a);l("update:modelValue",c,t,d)})}function Ue(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...P(a.target),from:P(a.from),to:P(a.to)}}:{reason:`${t}-day`,details:P(a)}}function G(t,a,o){return t.from!==void 0?{from:we.value(t.from,a,o),to:we.value(t.to,a,o)}:we.value(t,a,o)}function xe(t){let a;if(e.multiple===!0)if(t.from!==void 0){const o=B(t.from),c=B(t.to),d=F.value.filter(f=>f.dateHash<o||f.dateHash>c),Y=J.value.filter(({from:f,to:D})=>D.dateHash<o||f.dateHash>c);a=d.concat(Y).concat(t).map(f=>G(f))}else{const o=Me.value.slice();o.push(G(t)),a=o}else a=G(t);Pe(a,"add",t)}function He(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const o=G(t);t.from!==void 0?a=e.modelValue.filter(c=>c.from!==void 0?c.from!==o.from&&c.to!==o.to:!0):a=e.modelValue.filter(c=>c!==o),a.length===0&&(a=null)}Pe(a,"remove",t)}function Xe(t,a,o){const c=F.value.concat(J.value).map(d=>G(d,t,a)).filter(d=>d.from!==void 0?d.from.dateHash!==null&&d.to.dateHash!==null:d.dateHash!==null);l("update:modelValue",(e.multiple===!0?c:c[0])||null,o)}function kt(){if(e.minimal!==!0)return y("div",{class:"q-date__header "+h.value},[y("div",{class:"relative-position"},[y(oe,{name:"q-transition--fade"},()=>y("div",{key:"h-yr-"+Ae.value,class:"q-date__header-subtitle q-date__header-link "+(k.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...m("vY",{onClick(){k.value="Years"},onKeyup(t){t.keyCode===13&&(k.value="Years")}})},[Ae.value]))]),y("div",{class:"q-date__header-title relative-position flex no-wrap"},[y("div",{class:"relative-position col"},[y(oe,{name:"q-transition--fade"},()=>y("div",{key:"h-sub"+Ee.value,class:"q-date__header-title-label q-date__header-link "+(k.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...m("vC",{onClick(){k.value="Calendar"},onKeyup(t){t.keyCode===13&&(k.value="Calendar")}})},[Ee.value]))]),e.todayBtn===!0?y(z,{class:"q-date__header-today self-start",icon:u.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:i.value,onClick:Be}):null])])}function Ce({label:t,type:a,key:o,dir:c,goTo:d,boundaries:Y,cls:f}){return[y("div",{class:"row items-center q-date__arrow"},[y(z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ce.value[0],tabindex:i.value,disable:Y.prev===!1,...m("go-#"+a,{onClick(){d(-1)}})})]),y("div",{class:"relative-position overflow-hidden flex flex-center"+f},[y(oe,{name:"q-transition--jump-"+c},()=>y("div",{key:o},[y(z,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:i.value,...m("view#"+a,{onClick:()=>{k.value=a}})})]))]),y("div",{class:"row items-center q-date__arrow"},[y(z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ce.value[1],tabindex:i.value,disable:Y.next===!1,...m("go+#"+a,{onClick(){d(1)}})})])]}const $t={Calendar:()=>[y("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[y("div",{class:"q-date__navigation row items-center no-wrap"},Ce({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:le.value,goTo:pe,boundaries:Ye.value.month,cls:" col"}).concat(Ce({label:g.value.year,type:"Years",key:g.value.year,dir:ye.value,goTo:Se,boundaries:Ye.value.year,cls:""}))),y("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Dt.value.map(t=>y("div",{class:"q-date__calendar-item"},[y("div",t)]))),y("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[y(oe,{name:"q-transition--slide-"+le.value},()=>y("div",{key:I.value,class:"q-date__calendar-days fit"},Ze.value.map(t=>y("div",{class:t.classes},[t.in===!0?y(z,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:i.value,...m("day#"+t.i,{onClick:()=>{It(t.i)},onMouseover:()=>{Tt(t.i)}})},t.event!==!1?()=>y("div",{class:"q-date__event bg-"+t.event}):null):y("div",""+t.i)]))))])])],Months(){const t=g.value.year===A.value.year,a=c=>C.value!==null&&g.value.year===C.value.year&&C.value.month>c||O.value!==null&&g.value.year===O.value.year&&O.value.month<c,o=H.value.monthsShort.map((c,d)=>{const Y=g.value.month===d+1;return y("div",{class:"q-date__months-item flex flex-center"},[y(z,{class:t===!0&&A.value.month===d+1?"q-date__today":null,flat:Y!==!0,label:c,unelevated:Y,color:Y===!0?p.value:null,textColor:Y===!0?X.value:null,tabindex:i.value,disable:a(d+1),...m("month#"+d,{onClick:()=>{Ot(d+1)}})})])});return e.yearsInMonthView===!0&&o.unshift(y("div",{class:"row no-wrap full-width"},[Ce({label:g.value.year,type:"Years",key:g.value.year,dir:ye.value,goTo:Se,boundaries:Ye.value.year,cls:" col"})])),y("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},o)},Years(){const t=ue.value,a=t+U,o=[],c=d=>C.value!==null&&C.value.year>d||O.value!==null&&O.value.year<d;for(let d=t;d<=a;d++){const Y=g.value.year===d;o.push(y("div",{class:"q-date__years-item flex flex-center"},[y(z,{key:"yr"+d,class:A.value.year===d?"q-date__today":null,flat:!Y,label:d,dense:!0,unelevated:Y,color:Y===!0?p.value:null,textColor:Y===!0?X.value:null,tabindex:i.value,disable:c(d),...m("yr#"+d,{onClick:()=>{Ct(d)}})})]))}return y("div",{class:"q-date__view q-date__years flex flex-center"},[y("div",{class:"col-auto"},[y(z,{round:!0,dense:!0,flat:!0,icon:ce.value[0],tabindex:i.value,disable:c(t),...m("y-",{onClick:()=>{ue.value-=U}})})]),y("div",{class:"q-date__years-content col self-stretch row items-center"},o),y("div",{class:"col-auto"},[y(z,{round:!0,dense:!0,flat:!0,icon:ce.value[1],tabindex:i.value,disable:c(a),...m("y+",{onClick:()=>{ue.value+=U}})})])])}};function It(t){const a={...g.value,day:t};if(e.range===!1){qt(a,I.value);return}if(q.value===null){const o=Ze.value.find(d=>d.fill!==!0&&d.i===t);if(e.noUnset!==!0&&o.range!==void 0){He({target:a,from:o.range.from,to:o.range.to});return}if(o.selected===!0){He(a);return}const c=B(a);q.value={init:a,initHash:c,final:a,finalHash:c},l("rangeStart",P(a))}else{const o=q.value.initHash,c=B(a),d=o<=c?{from:q.value.init,to:a}:{from:a,to:q.value.init};q.value=null,xe(o===c?a:{target:a,...d}),l("rangeEnd",{from:P(d.from),to:P(d.to)})}}function Tt(t){if(q.value!==null){const a={...g.value,day:t};Object.assign(q.value,{final:a,finalHash:B(a)})}}return Object.assign(r,{setToday:Be,setView:St,offsetCalendar:xt,setCalendarTo:be,setEditingRange:Ht}),()=>{const t=[y("div",{class:"q-date__content col relative-position"},[y(oe,{name:"q-transition--fade"},$t[k.value])])],a=Zt(n.default);return a!==void 0&&t.push(y("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&T(t,"push"),y("div",{class:mt.value,..._t.value},[kt(),y("div",{ref:j,class:"q-date__main col column",tabindex:-1},t)])}}});export{xa as Q,Sa as d};