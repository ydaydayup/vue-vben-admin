import{d as A,ao as C,f as m,a8 as K,_ as n,a9 as P,aa as e,E as p,k as t,u as r,F as f,a1 as y,a0 as c,ab as v,$ as _,ac as k}from"./vue-lybwVHEG.js";import{P as V}from"./index-EBG5AtYL.js";import{aN as D,aO as w}from"./entry/index-ik9kLCN0-1706159834690.js";import{a0 as b}from"./antd-veAxK-b_.js";import"./useContentViewHeight-jw8gvi-F.js";import"./useWindowSizeFn-YZ4hdm43.js";import"./onMountedOrActivated-C4XOXYty.js";const E={class:"pt-4 m-4 desc-wrap"},W=A({name:"AccountDetail",__name:"AccountDetail",setup(F){var i;const g=b,u=b.TabPane,T=C(),B=D(),o=m((i=T.params)==null?void 0:i.id),s=m("detail"),{setTitle:x}=w();x("详情：用户"+o.value);function N(){B("/system/account")}return(h,l)=>{const d=K("a-button");return n(),P(r(V),{title:"用户"+o.value+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:N},{extra:e(()=>[t(d,{type:"primary",danger:""},{default:e(()=>[p(" 禁用账号 ")]),_:1}),t(d,{type:"primary"},{default:e(()=>[p(" 修改密码 ")]),_:1})]),footer:e(()=>[t(r(g),{"default-active-key":"detail",activeKey:s.value,"onUpdate:activeKey":l[0]||(l[0]=a=>s.value=a)},{default:e(()=>[t(r(u),{key:"detail",tab:"用户资料"}),t(r(u),{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:e(()=>[c("div",E,[s.value=="detail"?(n(),_(f,{key:0},v(10,a=>c("div",{key:a},"这是用户"+y(o.value)+"资料Tab",1)),64)):k("",!0),s.value=="logs"?(n(),_(f,{key:1},v(10,a=>c("div",{key:a},"这是用户"+y(o.value)+"操作日志Tab",1)),64)):k("",!0)])]),_:1},8,["title"])}}});export{W as default};
