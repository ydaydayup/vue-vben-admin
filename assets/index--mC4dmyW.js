var pe=Object.defineProperty,fe=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var U=(r,n,t)=>n in r?pe(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,y=(r,n)=>{for(var t in n||(n={}))ge.call(n,t)&&U(r,t,n[t]);if(K)for(var t of K(n))he.call(n,t)&&U(r,t,n[t]);return r},R=(r,n)=>fe(r,de(n));var X=(r,n,t)=>new Promise((i,l)=>{var p=c=>{try{e(t.next(c))}catch(u){l(u)}},o=c=>{try{e(t.throw(c))}catch(u){l(u)}},e=c=>c.done?i(c.value):Promise.resolve(c.value).then(p,o);e((t=t.apply(r,n)).next())});import{h as W,f as _,p as I,V as we,q as me,d as Z,Z as ye,t as Y,s as ke,K as ee,w as De}from"./entry/index-ik9kLCN0-1706159834690.js";import{d as q,c as h,a8 as Be,_ as d,$ as b,F as ve,O as g,a9 as O,aa as w,E as j,a1 as S,ad as F,ac as P,a2 as D,u as a,ag as te,a0 as x,k as E,f as k,g as H,w as G,n as $e,ae as J,m as Ce,ab as be,aj as Pe,ak as Oe,x as oe,r as se,I as T,h as Te}from"./vue-lybwVHEG.js";import{b2 as Se,aa as Fe,X as He,e as ae,a as Le}from"./antd-veAxK-b_.js";const{t:Q}=W(),ne={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Q("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Q("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},Ne=y({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},open:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},ne),Re=q({name:"BasicDrawerFooter",__name:"DrawerFooter",props:R(y({},ne),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(r,{emit:n}){const t=r,{prefixCls:i}=_("basic-drawer-footer"),l=h(()=>{const e=`${t.height}`;return{height:e,lineHeight:`calc(${e} - 1px)`}});function p(){n("ok")}function o(){n("close")}return(e,c)=>{const u=Be("a-button");return e.showFooter||e.$slots.footer?(d(),b("div",{key:0,class:D(a(i)),style:te(l.value)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(d(),b(ve,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(d(),O(u,F({key:0},e.cancelButtonProps,{onClick:o,class:"mr-2"}),{default:w(()=>[j(S(e.cancelText),1)]),_:1},16)):P("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(d(),O(u,F({key:1,type:e.okType,onClick:p},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:w(()=>[j(S(e.okText),1)]),_:1},16,["type","loading"])):P("",!0),g(e.$slots,"appendFooter")],64))],6)):P("",!0)}}}),Ie={key:1},je=q({name:"BasicDrawerHeader",__name:"DrawerHeader",props:{isDetail:I.bool,showDetailBack:I.bool,title:I.string},emits:["close"],setup(r,{emit:n}){const{prefixCls:t}=_("basic-drawer-header");function i(){n("close")}return(l,p)=>r.isDetail?(d(),b("div",{key:1,class:D([a(t),`${a(t)}--detail`])},[x("span",{class:D(`${a(t)}__twrap`)},[r.showDetailBack?(d(),b("span",{key:0,onClick:i},[E(a(Se),{class:D(`${a(t)}__back`)},null,8,["class"])])):P("",!0),r.title?(d(),b("span",Ie,S(r.title),1)):P("",!0)],2),x("span",{class:D(`${a(t)}__toolbar`)},[g(l.$slots,"titleToolbar")],2)],2)):(d(),O(a(we),{key:0,class:D(a(t))},{default:w(()=>[g(l.$slots,"title"),j(" "+S(l.$slots.title?"":r.title),1)]),_:3},8,["class"]))}}),Ee=q({inheritAttrs:!1,__name:"BasicDrawer",props:Ne,emits:["open-change","ok","close","register"],setup(r,{emit:n}){const t=r,i=k(!1),l=me(),p=k({}),{t:o}=W(),{prefixVar:e,prefixCls:c}=_("basic-drawer"),u={setDrawerProps:ce,emitOpen:void 0},m=H();m&&n("register",u,m.uid);const z=h(()=>Z(t,a(p))),v=h(()=>{const s=R(y(y({placement:"right"},a(l)),a(z)),{open:a(i)});s.title=void 0;const{isDetail:f,width:$,wrapClassName:C,getContainer:N}=s;if(f){$||(s.width="100%");const M=`${c}__detail`;s.rootClassName=C?`${C} ${M}`:M,N||(s.getContainer=`.${e}-layout-content`)}return s}),re=h(()=>y(y({},l),a(v))),A=h(()=>{const{footerHeight:s,showFooter:f}=a(v);return f&&s?Fe(s)?`${s}px`:`${s.replace("px","")}px`:"0px"}),le=h(()=>({position:"relative",height:`calc(100% - ${a(A)})`})),ie=h(()=>{var s;return!!((s=a(v))!=null&&s.loading)});G(()=>t.open,(s,f)=>{s!==f&&(i.value=s)},{deep:!0}),G(()=>i.value,s=>{oe(()=>{n("open-change",s),m&&u.emitOpen&&u.emitOpen(s,m.uid)})});function L(s){return X(this,null,function*(){const{closeFunc:f}=a(v);if(n("close",s),f&&ae(f)){const $=yield f();i.value=!$;return}i.value=!1})}function ce(s){p.value=Z(a(p),s),Reflect.has(s,"open")&&(i.value=!!s.open)}function ue(){n("ok")}return(s,f)=>{const $=$e("loading");return d(),O(a(He),F(re.value,{class:a(c),onClose:L}),J({default:w(()=>[Ce((d(),O(a(ye),{style:te(le.value),"loading-tip":s.loadingText||a(o)("common.loadingText")},{default:w(()=>[g(s.$slots,"default")]),_:3},8,["style","loading-tip"])),[[$,ie.value]]),E(Re,F(v.value,{onClose:L,onOk:ue,height:A.value}),J({_:2},[be(Object.keys(s.$slots),C=>({name:C,fn:w(N=>[g(s.$slots,C,Pe(Oe(N||{})))])}))]),1040,["height"])]),_:2},[s.$slots.title?{name:"title",fn:w(()=>[g(s.$slots,"title")]),key:"1"}:{name:"title",fn:w(()=>[E(je,{title:z.value.title,isDetail:s.isDetail,showDetailBack:s.showDetailBack,onClose:L},{titleToolbar:w(()=>[g(s.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack"])]),key:"0"}]),1040,["class"])}}}),B=se({}),V=se({});function Ae(){if(!H())throw new Error("useDrawer() can only be used inside setup() or functional components!");const r=k(null),n=k(!1),t=k(0);function i(o,e){Y(()=>{r.value=null,n.value=null,B[a(t)]=null}),!(a(n)&&ke()&&o===a(r))&&(t.value=e,r.value=o,n.value=!0,o.emitOpen=(c,u)=>{V[u]=c})}const l=()=>{const o=a(r);return o||ee("useDrawer instance is undefined!"),o},p={setDrawerProps:o=>{var e;(e=l())==null||e.setDrawerProps(o)},getOpen:h(()=>V[~~a(t)]),openDrawer:(o=!0,e,c=!0)=>{var m;if((m=l())==null||m.setDrawerProps({open:o}),!e)return;if(c){B[a(t)]=null,B[a(t)]=T(e);return}Le(T(B[a(t)]),T(e))||(B[a(t)]=T(e))},closeDrawer:()=>{var o;(o=l())==null||o.setDrawerProps({open:!1})}};return[i,p]}const Me=r=>{const n=k(null),t=H(),i=k(0);if(!H())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const l=()=>{const o=a(n);if(!o){ee("useDrawerInner instance is undefined!");return}return o},p=(o,e)=>{Y(()=>{n.value=null}),i.value=e,n.value=o,t==null||t.emit("register",o,e)};return Te(()=>{const o=B[a(i)];o&&(!r||!ae(r)||oe(()=>{r(o)}))}),[p,{changeLoading:(o=!0)=>{var e;(e=l())==null||e.setDrawerProps({loading:o})},changeOkLoading:(o=!0)=>{var e;(e=l())==null||e.setDrawerProps({confirmLoading:o})},getOpen:h(()=>V[~~a(i)]),closeDrawer:()=>{var o;(o=l())==null||o.setDrawerProps({open:!1})},setDrawerProps:o=>{var e;(e=l())==null||e.setDrawerProps(o)}}]},Ke=De(Ee);export{Ke as B,Me as a,Ae as u};
