var D=Object.defineProperty;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(t,a,e)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,w=(t,a)=>{for(var e in a||(a={}))R.call(a,e)&&g(t,e,a[e]);if(h)for(var e of h(a))C.call(a,e)&&g(t,e,a[e]);return t};var p=(t,a,e)=>new Promise((o,u)=>{var c=s=>{try{i(e.next(s))}catch(l){u(l)}},m=s=>{try{i(e.throw(s))}catch(l){u(l)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(c,m);i((e=e.apply(t,a)).next())});import{_ as N}from"./BasicForm.vue_vue_type_script_setup_true_lang-ha6E9QtS.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7dq_STkv.js";import"./componentMap-Nm0uM88W.js";import{u as P}from"./useForm-zTBhxbsV.js";import{s as y,d as B}from"./system-IgV6woAP.js";import{a as F}from"./entry/index-ik9kLCN0-1706159834690.js";import{l as V,d as L,f as _,c as U,u as n,_ as M,a9 as T,aa as b,k as v,ad as $}from"./vue-lybwVHEG.js";import{ax as q}from"./antd-veAxK-b_.js";import{a as A,B as G}from"./index--mC4dmyW.js";import{_ as O}from"./index-m7NrmIlE.js";const ae=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:t})=>(Reflect.has(t,"pendingStatus")||(t.pendingStatus=!1),V(q,{checked:t.status==="1",checkedChildren:"停用",unCheckedChildren:"启用",loading:t.pendingStatus,onChange(a){t.pendingStatus=!0;const e=a?"1":"0",{createMessage:o}=F();y(t.id,e).then(()=>{t.status=e,o.success("已成功修改角色状态")}).catch(()=>{o.error("修改角色状态失败")}).finally(()=>{t.pendingStatus=!1})}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],se=[{field:"roleNme",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],W=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu"}],oe=L({__name:"RoleDrawer",emits:["success","register"],setup(t,{emit:a}){const e=_(!0),o=_([]),[u,{resetFields:c,setFieldsValue:m,validate:i}]=P({labelWidth:90,baseColProps:{span:24},schemas:W,showActionButtonGroup:!1}),[s,{setDrawerProps:l,closeDrawer:S}]=A(r=>p(this,null,function*(){c(),l({confirmLoading:!1}),n(o).length===0&&(o.value=yield B()),e.value=!!(r!=null&&r.isUpdate),n(e)&&m(w({},r.record))})),k=U(()=>n(e)?"编辑角色":"新增角色");function x(){return p(this,null,function*(){try{const r=yield i();l({confirmLoading:!0}),S(),a("success")}finally{l({confirmLoading:!1})}})}return(r,j)=>(M(),T(n(G),$(r.$attrs,{onRegister:n(s),showFooter:"",title:k.value,width:"500px",onOk:x}),{default:b(()=>[v(n(N),{onRegister:n(u)},{menu:b(({model:d,field:f})=>[v(n(O),{value:d[f],"onUpdate:value":I=>d[f]=I,treeData:o.value,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{oe as _,ae as c,se as s};
