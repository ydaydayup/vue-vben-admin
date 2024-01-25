import{aQ as R,aR as A,aS as N,J as b,C as $}from"./entry/index-ik9kLCN0-1706159834690.js";import{f as _,u as o,s as S,g as B,j as L,d as T,b as U,a8 as z,_ as P,a9 as V,aa as p,E as h,k}from"./vue-lybwVHEG.js";import{P as j}from"./index-EBG5AtYL.js";import"./antd-veAxK-b_.js";import"./useContentViewHeight-jw8gvi-F.js";import"./useWindowSizeFn-YZ4hdm43.js";import"./onMountedOrActivated-C4XOXYty.js";const W="watermark-dom",y=_(null),d=new Map;function I(e){const r=document.createElement("canvas"),m=300,s=240;Object.assign(r,{width:m,height:s});const t=r.getContext("2d");return t&&(t.rotate(-20*Math.PI/180),t.font="15px Vedana",t.fillStyle="rgba(0, 0, 0, 0.15)",t.textAlign="left",t.textBaseline="middle",t.fillText(e,m/20,s)),r.toDataURL("image/png")}const E=(e,r)=>{e.className="__"+W,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000",e.style.height="100%",e.style.width="100%",e.style.background=`url(${I(o(y)||r)}) left top repeat`},D=()=>new MutationObserver(r=>{var m;for(const s of r){for(const t of Array.from(s.removedNodes)){const i=Array.from(d.values()).find(f=>f.targetElement===t);if(!i)return;const{targetElement:l,parentElement:c}=i;c!=null&&c.contains(l)||(m=i==null?void 0:i.parentElement)==null||m.appendChild(t)}if(s.attributeName==="style"&&s.target){const t=s.target;t.className==="__"+W&&E(t,t==null?void 0:t["data-watermark-text"])}}});function v(e=_(document.body)){const r=Symbol(W);if(o(e)&&d.has(r)){const{setWatermark:a,clear:n}=d.get(r);return{setWatermark:a,clear:n,clearAll:x}}const s=N(function(){const a=o(e);if(!a)return;const{clientHeight:n,clientWidth:u}=a;l({height:n,width:u})}),t=S(),i=()=>{var u,g;const a=o(t);t.value=void 0;const n=o(e);d.has(r)&&((g=(u=d.get(r))==null?void 0:u.obInstance)==null||g.disconnect()),d.delete(r),n&&(a&&n.removeChild(a),R(n,s))};function l(a={}){const n=o(t);n&&(b(a.width)&&(n.style.width=`${a.width}px`),b(a.height)&&(n.style.height=`${a.height}px`),b(a.str)&&(n.style.background=`url(${I(a.str)}) left top repeat`))}const c=a=>{var w,C;if(o(t)&&d.has(r)){y.value=a,l({str:a});return}const n=document.createElement("div");n["data-watermark-text"]=a,y.value=a,t.value=n,E(n,a);const u=o(e);if(!u)return;const{clientHeight:g,clientWidth:M}=u;l({str:a,width:M,height:g}),u.appendChild(n),d.set(r,{setWatermark:f,clear:i,parentElement:u,targetElement:n,obInstance:D()}),(C=(w=d.get(r))==null?void 0:w.obInstance)==null||C.observe(u,{childList:!0,subtree:!0,attributes:!0})};function f(a){c(a),A(document.documentElement,s),B()&&L(()=>{i()})}return{setWatermark:f,clear:i,clearAll:x}}function x(){Array.from(d.values()).forEach(e=>{var r;(r=e==null?void 0:e.obInstance)==null||r.disconnect(),e.clear()})}const K=T({__name:"index",setup(e){const{setWatermark:r,clear:m,clearAll:s}=v(),{setWatermark:t}=v();return U(()=>{s()}),(i,l)=>{const c=z("a-button");return P(),V(o(j),{title:"水印示例"},{default:p(()=>[k(o($),{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:p(()=>[k(c,{type:"primary",class:"mr-2",onClick:l[0]||(l[0]=f=>o(r)("WaterMark Info1"))},{default:p(()=>[h(" Create Watermark1 ")]),_:1}),k(c,{type:"primary",class:"mr-2",onClick:l[1]||(l[1]=f=>o(t)("WaterMark Info2"))},{default:p(()=>[h(" Create Watermark2 ")]),_:1}),k(c,{color:"error",class:"mr-2",onClick:o(m)},{default:p(()=>[h(" Clear Watermark1 ")]),_:1},8,["onClick"]),k(c,{color:"error",class:"mr-2",onClick:o(s)},{default:p(()=>[h(" ClearAll ")]),_:1},8,["onClick"]),k(c,{color:"warning",class:"mr-2",onClick:l[2]||(l[2]=f=>o(r)("WaterMark Info New"))},{default:p(()=>[h(" Update Watermark1 ")]),_:1})]),_:1})]),_:1})}}});export{K as default};
