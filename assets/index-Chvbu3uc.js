import _ from"./CollapseItem-HiL1J0pY.js";import B from"./FormComponentPanel-q0gjRimE.js";import G from"./JsonModal-5JKzRhr0.js";import V from"./index-cYRzKVG1.js";import{_ as N}from"./useForm.vue_vue_type_script_setup_true_lang-pnQ7uod4.js";import q from"./Toolbar-0VFcJ4pV.js";import Q from"./PropsPanel-9sEvHZsb.js";import U from"./ImportJsonModal-yl6dZKkR.js";import X from"./CodeModal-RfF4KhMK.js";import"./index-BP83ZoDO.js";import{g as P,f as Y}from"./index-ZfBvCGVI.js";import{b as Z,c as ee,l as oe}from"./formItemConfig-m0xdxqrq.js";import{f as te,a$ as re,C as b,c as ne}from"./entry/index-ik9kLCN0-1706159834690.js";import{g as se}from"./formItemPropsConfig-cJ3moMHQ.js";import{bk as J,bl as le,L as ae,f as c}from"./antd-veAxK-b_.js";import{d as ie,f as a,p as f,_ as me,$ as pe,k as n,aa as i,u as s,a2 as z,ak as ue,aj as de,O as ce,ab as fe,ae as ve,F as he}from"./vue-lybwVHEG.js";import"./vuedraggable.umd-qGTG2fsj.js";import"./LayoutItem-khhxzmrh.js";import"./FormNode-3YLzdejF.js";import"./FormNodeOperate-XEiuhX-i.js";import"./useFormDesignState-yMpjuC-D.js";import"./index-Wj-D_lje.js";import"./PreviewCode-pvVlABQw.js";import"./copyTextToClipboard-2AOVSRlO.js";import"./index-B_Vf9HGl.js";import"./FormRender-WI5OncLC.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-ha6E9QtS.js";import"./FormItem.vue_vue_type_script_lang-0Q9-7MNg.js";import"./componentMap-Nm0uM88W.js";import"./useFormItem-Y8aCfwEt.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-r0ly_Fh6.js";import"./index-cpAkOqO9.js";import"./useWindowSizeFn-YZ4hdm43.js";import"./uuid-uJQj7518.js";import"./useSortable-WekxPyT_.js";import"./download-qgvMrq71.js";import"./base64Conver-UKE1Rgbp.js";import"./index-pHlIjQ5b.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-92LOaLSc.js";import"./index-6ksZpJ-P.js";import"./index-wml-s6Fc.js";import"./helper-S-x_RTVE.js";import"./BasicForm.vue_vue_type_style_index_0_lang-7dq_STkv.js";import"./useForm-zTBhxbsV.js";import"./FormProps.vue_vue_type_script_setup_true_name_FormProps_lang-6FiZBOrp.js";import"./FormItemProps.vue_vue_type_script_setup_true_name_FormItemProps_lang-8YFKWtfY.js";import"./RuleProps-Zh0Sy3FM.js";import"./ComponentProps-gSGuJ3P3.js";import"./FormOptions-8iTS6bC8.js";import"./FormItemColumnProps-MSrOr7e3.js";const ye=ie({__name:"index",props:{title:{type:String,default:"v-form-antd表单设计器"}},setup(Pe){const{prefixCls:F}=te("form-design"),D=a(null),I=a(null),M=a(null),w=a(null),L=a(null),$=a(null),S=a({}),t=a({schemas:[],layout:"horizontal",labelLayout:"flex",labelWidth:100,labelCol:{},wrapperCol:{},currentItem:{component:"",componentProps:{}},activeKey:1}),O=o=>{o.schemas=o.schemas||[],o.schemas.forEach(e=>{e.colProps=e.colProps||{span:24},e.componentProps=e.componentProps||{},e.itemProps=e.itemProps||{}}),t.value=o},T=re(t,{deep:!0,capacity:20,parse:o=>{const e=c(o),{currentItem:r,schemas:l}=e,d=l&&l.find(m=>m.key===(r==null?void 0:r.key));return d&&(e.currentItem=d),e}}),p=o=>{t.value.currentItem=o,E(o.key?t.value.activeKey===1?2:t.value.activeKey:1)},H=o=>{o.colProps=o.colProps||{},o.colProps.span=se.span},v=(o,e)=>{},g=o=>{const e=c(o);return H(e),P(e),e},h=o=>{var r;const e=c(o);if(H(e),P(e),!((r=t.value.currentItem)!=null&&r.key)){p(e),t.value.schemas&&t.value.schemas.push(e);return}A(e,!1)},W=o=>{const e=c(o);return e.component==="Grid"&&Y([o],r=>{P(r)}),e},A=(o=t.value.currentItem,e=!0)=>{var d;const r=(d=t.value.currentItem)==null?void 0:d.key,l=m=>{m.some((y,C)=>{var K;if(y.key===r){e?m.splice(C,0,W(y)):m.splice(C+1,0,o);const k={newIndex:C+1};return x(k,m,e),!0}["Grid","Tabs"].includes(y.component)&&((K=y.columns)==null||K.forEach(k=>{l(k.children)}))})};t.value.schemas&&l(t.value.schemas)},x=({newIndex:o},e,r=!1)=>{const l=e[o];r&&P(l),p(l)},u=o=>{const e=c(t.value);o==null||o.showModal(e)},E=o=>{t.value.activeKey=o},R=()=>{t.value.schemas=[],p({component:""})},j=(o,e)=>S.value[o]=e;return f("formModel",S),f("setFormModelMethod",j),f("formConfig",t),f("historyReturn",T),f("formDesignMethods",{handleBeforeColAdd:x,handleCopy:A,handleListPush:h,handleSetSelectItem:p,handleAddAttrs:v,setFormConfig:O}),(o,e)=>(me(),pe(he,null,[n(s(ae),null,{default:i(()=>[n(s(J),{class:z(`left ${s(F)}-sider`),collapsible:"",collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"md"},{default:i(()=>[n(s(b),{title:"基础控件"},{default:i(()=>[n(_,{list:s(Z),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"自定义控件"},{default:i(()=>[n(_,{list:s(ee),onAddAttrs:v,handleListPush:g,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"布局控件"},{default:i(()=>[n(_,{list:s(oe),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1})]),_:1},8,["class"]),n(s(le),null,{default:i(()=>[n(q,{onHandleOpenJsonModal:e[0]||(e[0]=r=>u(I.value)),onHandleOpenImportJsonModal:e[1]||(e[1]=r=>u(M.value)),onHandlePreview:e[2]||(e[2]=r=>u(w.value)),onHandlePreview2:e[3]||(e[3]=r=>u(L.value)),onHandleOpenCodeModal:e[4]||(e[4]=r=>u($.value)),onHandleClearFormItems:R}),n(B,{"current-item":t.value.currentItem,data:t.value,onHandleSetSelectItem:p},null,8,["current-item","data"])]),_:1}),n(s(J),{class:z(`right ${s(F)}-sider`),collapsible:"",reverseArrow:!0,collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"lg"},{default:i(()=>[n(Q,{ref_key:"propsPanel",ref:D,activeKey:t.value.activeKey},ve({_:2},[fe(t.value.schemas,r=>({name:`${r.component}Props`,fn:i(l=>[ce(o.$slots,`${r.component}Props`,de(ue({formItem:l,props:l.componentProps})),void 0,!0)])}))]),1032,["activeKey"])]),_:3},8,["class"])]),_:3}),n(G,{ref_key:"jsonModal",ref:I},null,512),n(X,{ref_key:"codeModal",ref:$},null,512),n(U,{ref_key:"importJsonModal",ref:M},null,512),n(V,{ref_key:"eFormPreview",ref:w,formConfig:t.value},null,8,["formConfig"]),n(N,{ref_key:"eFormPreview2",ref:L,formConfig:t.value},null,8,["formConfig"])],64))}}),ho=ne(ye,[["__scopeId","data-v-52ba6cd3"]]);export{ho as default};
