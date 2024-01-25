var Ve=Object.defineProperty,He=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ye=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var ie=(e,l,n)=>l in e?Ve(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,m=(e,l)=>{for(var n in l||(l={}))Ye.call(l,n)&&ie(e,n,l[n]);if(se)for(var n of se(l))Re.call(l,n)&&ie(e,n,l[n]);return e},ue=(e,l)=>He(e,Xe(l));var oe=(e,l,n)=>new Promise((k,T)=>{var v=S=>{try{p(n.next(S))}catch(b){T(b)}},r=S=>{try{p(n.throw(S))}catch(b){T(b)}},p=S=>S.done?k(S.value):Promise.resolve(S.value).then(v,r);p((n=n.apply(e,l)).next())});import{ap as ze,d as Ee,f as _e,ah as Ge,c as O,w as $,_ as M,$ as U,u as i,O as qe,ac as I,a9 as W,aa as j,a1 as de,E as he,a2 as fe,k as A,F as z,ak as Je,aj as We,ab as Ze,A as Qe,l as ye,r as pe,I as R,h as V,o as et,m as ke,z as ge,ad as tt,i as nt}from"./vue-lybwVHEG.js";import{az as at,h as lt,u as ct,V as rt,y as Q,aA as Se,H as st,aB as it,a7 as ut,aC as ot,X as Ke,Z as dt,r as xe}from"./entry/index-ik9kLCN0-1706159834690.js";import{aX as ht,aY as ft,aZ as yt,x as pt,a_ as kt,a$ as gt,D as St,k as Kt,f as ee,b0 as xt,o as Ct,e as Z,G as At,al as vt,aG as Ce,ad as Lt,v as bt,ah as Ae}from"./antd-veAxK-b_.js";import{u as Et}from"./useContextMenu-l1tBK9dY.js";function te(e,l){return l?typeof l=="string"?` ${e}--${l}`:Array.isArray(l)?l.reduce((n,k)=>n+te(e,k),""):Object.keys(l).reduce((n,k)=>n+(l[k]?te(e,k):""),""):""}function _t(e){return(l,n)=>(l&&typeof l!="string"&&(n=l,l=""),l=l?`${e}__${l}`:e,`${l}${te(l,n)}`)}function Te(e){return[_t(`${at}-${e}`)]}const ve=Symbol(),Le=Symbol();function Tt(e,l){if(!ft(e)||e[Le])return e;const{values:n,required:k,default:T,type:v,validator:r}=e,p=n||r?S=>{let b=!1,L=[];if(n&&(L=[...n,T],b||(b=L.includes(S))),r&&(b||(b=r(S))),!b&&L.length>0){const h=[...new Set(L)].map(t=>JSON.stringify(t)).join(", ");ze(`Invalid prop: validation failed${l?` for prop "${l}"`:""}. Expected one of [${h}], got value ${JSON.stringify(S)}.`)}return b}:void 0;return{type:typeof v=="object"&&Object.getOwnPropertySymbols(v).includes(ve)&&v?v[ve]:v,required:!!k,default:T,validator:p,[Le]:!0}}const Bt=e=>ht(Object.entries(e).map(([l,n])=>[l,Tt(n,l)]));var _=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(_||{});const wt=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],Dt=Bt({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:[Array,Object],default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1},treeWrapperClassName:String}),Ft={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Nt=Ee({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:l}){const n=e,k=_e(""),[T]=Te("tree-header"),v=Ge(),{t:r}=lt(),p=O(()=>["mr-1","w-full",{"ml-5":v.headerTitle||n.title}]),S=O(()=>{const{checkable:t}=n,c=[{label:r("component.tree.expandAll"),value:_.EXPAND_ALL},{label:r("component.tree.unExpandAll"),value:_.UN_EXPAND_ALL,divider:t}];return t?[{label:r("component.tree.selectAll"),value:_.SELECT_ALL},{label:r("component.tree.unSelectAll"),value:_.UN_SELECT_ALL,divider:t},...c,{label:r("component.tree.checkStrictly"),value:_.CHECK_STRICTLY},{label:r("component.tree.checkUnStrictly"),value:_.CHECK_UN_STRICTLY}]:c}),b=({key:t})=>{var c,s,d,o;switch(t){case _.SELECT_ALL:(c=n.checkAll)==null||c.call(n,!0);break;case _.UN_SELECT_ALL:(s=n.checkAll)==null||s.call(n,!1);break;case _.EXPAND_ALL:(d=n.expandAll)==null||d.call(n,!0);break;case _.UN_EXPAND_ALL:(o=n.expandAll)==null||o.call(n,!1);break;case _.CHECK_STRICTLY:l("strictly-change",!1);break;case _.CHECK_UN_STRICTLY:l("strictly-change",!0);break}};function L(t){l("search",t)}const h=ct(L,200);return $(()=>k.value,t=>{h(t)}),$(()=>n.searchText,t=>{t!==k.value&&(k.value=t)}),(t,c)=>(M(),U("div",{class:fe([i(T)(),"flex mb-1 px-2 py-1.5 items-center"])},[i(v).headerTitle?qe(t.$slots,"headerTitle",{key:0}):I("",!0),!i(v).headerTitle&&t.title?(M(),W(i(rt),{key:1,helpMessage:t.helpMessage},{default:j(()=>[he(de(t.title),1)]),_:1},8,["helpMessage"])):I("",!0),t.search||t.toolbar?(M(),U("div",Ft,[t.search?(M(),U("div",{key:0,class:fe(p.value)},[A(i(yt),{placeholder:i(r)("common.searchText"),size:"small",allowClear:"",value:k.value,"onUpdate:value":c[0]||(c[0]=s=>k.value=s)},null,8,["placeholder","value"])],2)):I("",!0),t.toolbar?(M(),W(i(St),{key:1,onClick:c[1]||(c[1]=Qe(()=>{},["prevent"]))},{overlay:j(()=>[A(i(pt),{onClick:b},{default:j(()=>[(M(!0),U(z,null,Ze(S.value,s=>(M(),U(z,{key:s.value},[A(i(kt),We(Je({key:s.value})),{default:j(()=>[he(de(s.label),1)]),_:2},1040),s.divider?(M(),W(i(gt),{key:0})):I("",!0)],64))),128))]),_:1})]),default:j(()=>[A(Q,{icon:"ion:ellipsis-vertical"})]),_:1})):I("",!0)])):I("",!0)],2))}}),Mt=({icon:e})=>e?Kt(e)?ye(Q,{icon:e,class:"mr-2"}):ye(Q):null;function Ot(e,l){function n(h){const t=[],c=h||i(e),{key:s,children:d}=i(l);if(!d||!s)return t;for(let o=0;o<c.length;o++){const u=c[o];t.push(u[s]);const y=u[d];y&&y.length&&t.push(...n(y))}return t}function k(h){const t=[],c=h||i(e),{key:s,children:d}=i(l);if(!d||!s)return t;for(let o=0;o<c.length;o++){const u=c[o];u.disabled!==!0&&u.selectable!==!1&&t.push(u[s]);const y=u[d];y&&y.length&&t.push(...k(y))}return t}function T(h,t){const c=[],s=t||i(e),{key:d,children:o}=i(l);if(!o||!d)return c;for(let u=0;u<s.length;u++){const y=s[u],E=y[o];h===y[d]?(c.push(y[d]),E&&E.length&&c.push(...n(E))):E&&E.length&&c.push(...T(h,E))}return c}function v(h,t,c){if(!h)return;const s=c||i(e),{key:d,children:o}=i(l);if(!(!o||!d))for(let u=0;u<s.length;u++){const y=s[u],E=y[o];if(y[d]===h){s[u]=m(m({},s[u]),t);break}else E&&E.length&&v(h,t,y[o])}}function r(h=1,t,c=1){if(!h)return[];const s=[],d=t||i(e)||[];for(let o=0;o<d.length;o++){const u=d[o],{key:y,children:E}=i(l),G=y?u[y]:"",P=E?u[E]:[];s.push(G),P&&P.length&&c<h&&(c+=1,s.push(...r(h,P,c)))}return s}function p({parentKey:h=null,node:t,push:c="push"}){const s=ee(i(e));if(!h){s[c](t),e.value=s;return}const{key:d,children:o}=i(l);!o||!d||(Se(s,u=>{if(u[d]===h)return u[o]=u[o]||[],u[o][c](t),!0}),e.value=s)}function S({parentKey:h=null,list:t,push:c="push"}){const s=ee(i(e));if(!(!t||t.length<1))if(h){const{key:d,children:o}=i(l);if(!o||!d)return;Se(s,u=>{if(u[d]===h){u[o]=u[o]||[];for(let y=0;y<t.length;y++)u[o][c](t[y]);return e.value=s,!0}})}else{for(let d=0;d<t.length;d++)s[c](t[d]);e.value=s;return}}function b(h,t){if(!h)return;const c=t||i(e),{key:s,children:d}=i(l);if(!(!d||!s))for(let o=0;o<c.length;o++){const u=c[o],y=u[d];if(u[s]===h){c.splice(o,1);break}else y&&y.length&&b(h,u[d])}}function L(h,t,c){if(!h&&h!==0)return null;const s=t||i(e),{key:d,children:o}=i(l);return d?(s.forEach(u=>{if(c!=null&&c.key||(c==null?void 0:c.key)===0)return c;if(u[d]===h){c=u;return}u[o]&&u[o].length&&(c=L(h,u[o],c))}),c||null):null}return{deleteNodeByKey:b,insertNodeByKey:p,insertNodesByKey:S,filterByLevel:r,updateNodeByKey:v,getAllKeys:n,getChildrenKeys:T,getEnabledKeys:k,getSelectedNode:L}}function be(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!nt(e)}const jt=Ee({name:"BasicTree",inheritAttrs:!1,props:Dt,emits:wt,setup(e,{attrs:l,slots:n,emit:k,expose:T}){const[v]=Te("tree"),r=pe({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),p=pe({startSearch:!1,searchText:"",searchData:[]}),S=_e([]),[b]=Et(),L=O(()=>{const{fieldNames:a}=e;return m({children:"children",title:"title",key:"key"},a)}),h=O(()=>{let a=ue(m(m({blockNode:!0},l),e),{expandedKeys:r.expandedKeys,selectedKeys:r.selectedKeys,checkedKeys:r.checkedKeys,checkStrictly:r.checkStrictly,fieldNames:i(L),"onUpdate:expandedKeys":f=>{r.expandedKeys=f,k("update:expandedKeys",f)},"onUpdate:selectedKeys":f=>{r.selectedKeys=f,k("update:selectedKeys",f)},onCheck:(f,K)=>{let g=R(r.checkedKeys);if(st(g)&&p.startSearch){const C=K.node.eventKey;g=xt(g,G(C)),K.checked&&g.push(C),r.checkedKeys=g}else r.checkedKeys=f;const x=R(r.checkedKeys);k("update:value",x),k("check",x,K)},onRightClick:De});return Ct(a,"treeData","class")}),t=O(()=>p.startSearch?p.searchData:i(S)),c=O(()=>!t.value||t.value.length===0),{deleteNodeByKey:s,insertNodeByKey:d,insertNodesByKey:o,filterByLevel:u,updateNodeByKey:y,getAllKeys:E,getChildrenKeys:G,getEnabledKeys:P,getSelectedNode:Be}=Ot(S,L);function we(a,f){return!f&&e.renderIcon&&Z(e.renderIcon)?e.renderIcon(a):f}function De(K){return oe(this,arguments,function*({event:a,node:f}){var F;const{rightMenuList:g=[],beforeRightClick:x}=e;let C={event:a,items:[]};if(x&&Z(x)){let B=yield x(f,a);Array.isArray(B)?C.items=B:Object.assign(C,B)}else C.items=g;(F=C.items)!=null&&F.length&&(C.items=C.items.filter(B=>!B.hidden),b(C))})}function Fe(){return i(S)}function H(a){r.expandedKeys=a}function Ne(){return r.expandedKeys}function ne(a){r.selectedKeys=a}function Me(){return r.selectedKeys}function ae(a){r.checkedKeys=a}function Oe(){return r.checkedKeys}function le(a){r.checkedKeys=a?P():[]}function q(a){r.expandedKeys=a?E():[]}function me(a){r.checkStrictly=a}$(()=>e.searchValue,a=>{a!==p.searchText&&(p.searchText=a)},{immediate:!0}),$(()=>e.treeData,a=>{a&&J(p.searchText)});function J(a){if(a!==p.searchText&&(p.searchText=a),k("update:searchValue",a),!a){p.startSearch=!1;return}const{filterFn:f,checkable:K,expandOnSearch:g,checkOnSearch:x,selectedOnSearch:C}=i(e);p.startSearch=!0;const{title:F,key:B}=i(L),D=[];if(p.searchData=it(i(S),w=>{var X,Y;const N=f?f(a,w,i(L)):(Y=(X=w[F])==null?void 0:X.includes(a))!=null?Y:!1;return N&&D.push(w[B]),N},i(L)),g){const w=ut(p.searchData).map(N=>N[B]);w&&w.length&&H(w)}x&&K&&D.length&&ae(D),C&&D.length&&ne(D)}function Ie(a,f){if(!(!e.clickRowToExpand||!f||f.length===0))if(!r.expandedKeys.includes(a))H([...r.expandedKeys,a]);else{const K=[...r.expandedKeys],g=K.findIndex(x=>x===a);g!==-1&&K.splice(g,1),H(K)}}V(()=>{S.value=e.treeData}),et(()=>{const a=parseInt(e.defaultExpandLevel);a>0?r.expandedKeys=u(a):e.defaultExpandAll&&q(!0)}),V(()=>{r.expandedKeys=e.expandedKeys}),V(()=>{r.selectedKeys=e.selectedKeys}),V(()=>{r.checkedKeys=e.checkedKeys}),$(()=>e.value,()=>{r.checkedKeys=R(e.value||[])},{immediate:!0}),$(()=>r.checkedKeys,()=>{const a=R(r.checkedKeys);k("update:value",a),k("change",a)}),V(()=>{r.checkStrictly=e.checkStrictly});const $e={getTreeData:Fe,setExpandedKeys:H,getExpandedKeys:Ne,setSelectedKeys:ne,getSelectedKeys:Me,setCheckedKeys:ae,getCheckedKeys:Oe,insertNodeByKey:d,insertNodesByKey:o,deleteNodeByKey:s,updateNodeByKey:y,getSelectedNode:Be,checkAll:le,expandAll:q,filterByLevel:a=>{r.expandedKeys=u(a)},setSearchValue:a=>{J(a)},getSearchValue:()=>p.searchText};function Pe(a){const{actionList:f}=e;if(!(!f||f.length===0))return f.map((K,g)=>{var C;let x=!0;return Z(K.show)?x=(C=K.show)==null?void 0:C.call(K,a):Ae(K.show)&&(x=K.show),x?A("span",{key:g,class:v("action")},[K.render(a)]):null})}const Ue=O(()=>{const a=ee(t.value);return ot(a,(f,K)=>{var re;const g=p.searchText,{highlight:x}=i(e),{title:C,key:F,children:B}=i(L),D=we(f,f.icon),w=Lt(f,C),N=g?w.indexOf(g):-1,X=p.startSearch&&!bt(g)&&x&&N!==-1,Y=`color: ${Ae(x)?"#f50":x}`,je=X?A("span",{class:(re=i(h))!=null&&re.blockNode?`${v("content")}`:""},[A("span",null,[w.substr(0,N)]),A("span",{style:Y},[g]),A("span",null,[w.substr(N+g.length)])]):w,ce=D?A(Mt,{icon:D},null):n.icon?A("span",{class:"mr-2"},[xe(n,"icon")]):null;return f[C]=A("span",{class:`${v("title")}`,onClick:Ie.bind(null,f[F],f[B])},[n!=null&&n.title?A(z,null,[ce,xe(n,"title",f)]):A(z,null,[ce,je,A("span",{class:v("actions")},[Pe(f)])])]),f}),a});return T($e),()=>{let a,f;const{title:K,helpMessage:g,toolbar:x,search:C,checkable:F}=e,B=K||x||C||n.headerTitle,D={height:"calc(100% - 38px)"};return A("div",{class:[v(),"h-full",l.class]},[B&&A(Nt,{checkable:F,checkAll:le,expandAll:q,title:K,search:C,toolbar:x,helpMessage:g,onStrictlyChange:me,onSearch:J,searchText:p.searchText},be(a=Ke(n))?a:{default:()=>[a]}),A(At,{wrapperClassName:i(e.treeWrapperClassName),spinning:i(e.loading),tip:"加载中..."},{default:()=>[ke(A(dt,{style:D},{default:()=>[A(vt,tt(i(h),{showIcon:!1,treeData:Ue.value}),be(f=Ke(n,["title"]))?f:{default:()=>[f]})]}),[[ge,!i(c)]]),ke(A(Ce,{image:Ce.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ge,i(c)]])]})])}}});export{jt as _};
