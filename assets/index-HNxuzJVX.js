var y=Object.defineProperty,b=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(i,e,t)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,u=(i,e)=>{for(var t in e||(e={}))v.call(e,t)&&f(i,t,e[t]);if(d)for(var t of d(e))w.call(e,t)&&f(i,t,e[t]);return i},h=(i,e)=>b(i,k(e));var _=(i,e,t)=>new Promise((s,n)=>{var m=r=>{try{a(t.next(r))}catch(l){n(l)}},o=r=>{try{a(t.throw(r))}catch(l){n(l)}},a=r=>r.done?s(r.value):Promise.resolve(r.value).then(m,o);a((t=t.apply(i,e)).next())});import{a as C}from"./componentMap-Nm0uM88W.js";import"./entry/index-ik9kLCN0-1706159834690.js";import"./helper-S-x_RTVE.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7dq_STkv.js";import"./antd-veAxK-b_.js";import"./index-cpAkOqO9.js";import"./TableImg.vue_vue_type_style_index_0_lang-PO84xcBJ.js";import"./uuid-uJQj7518.js";import"./sortable.esm-F3p9rkNP.js";import{g as S}from"./system-IgV6woAP.js";import{P as A}from"./index-EBG5AtYL.js";import{_ as B}from"./DeptTree.vue_vue_type_script_setup_true_lang-BrJRsr2v.js";import{d as P}from"./account.data-WrUDrOgU.js";import{V as R}from"./index-0icb_gAY.js";import{d as T,f as g,r as V,_ as I,a9 as N,aa as x,k as c,u as p,ad as q,a0 as z}from"./vue-lybwVHEG.js";import"./useFormItem-Y8aCfwEt.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-r0ly_Fh6.js";import"./useSortable-WekxPyT_.js";import"./download-qgvMrq71.js";import"./base64Conver-UKE1Rgbp.js";import"./index-pHlIjQ5b.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-92LOaLSc.js";import"./copyTextToClipboard-2AOVSRlO.js";import"./index-6ksZpJ-P.js";import"./index-wml-s6Fc.js";import"./useWindowSizeFn-YZ4hdm43.js";import"./onMountedOrActivated-C4XOXYty.js";import"./useContentViewHeight-jw8gvi-F.js";import"./index-m7NrmIlE.js";import"./useContextMenu-l1tBK9dY.js";const F=[{title:"用户名",field:"account",width:120},{title:"昵称",field:"nickname",width:120},{title:"邮箱",field:"email",width:120},{title:"创建时间",field:"createTime",width:180},{title:"角色",field:"role",width:200},{title:"所属部门",field:"dept",slots:{default:({row:i})=>P[i.dept]}},{title:"备注",field:"remark"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],H=[{field:"account",title:"用户名",itemRender:{name:"AInput"},span:6},{field:"nickname",title:"昵称",itemRender:{name:"AInput"},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}],$={class:"m-4 vxebasic-form-container"},_e=T({__name:"index",setup(i){const e=g(),t=g(),s=V({id:"VxeTable",keepSource:!0,columns:F,formConfig:{enabled:!0,items:H},height:"auto",proxyConfig:{ajax:{query:r=>_(this,[r],function*({page:o,form:a}){return S(h(u({page:o.currentPage,pageSize:o.pageSize},a),{searchInfo:t.value}))})}}}),n=(o="")=>{t.value=o,e.value&&e.value.commitProxy("query")},m=o=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var r;(r=e.value)==null||r.remove(o)}}}];return(o,a)=>(I(),N(p(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x(()=>[c(B,{class:"w-1/4 xl:w-1/5",onSelect:n}),z("div",$,[c(p(R),q({ref_key:"tableRef",ref:e},s),{action:x(({row:r})=>[c(p(C),{outside:"",actions:m(r)},null,8,["actions"])]),_:1},16)])]),_:1}))}});export{_e as default};
