import{aV as e,aN as y,aW as O,f as R,aX as d,h as S}from"./entry/index-ik9kLCN0-1706159834690.js";import{d as A,f as G,ao as h,c as m,u as s,k as r}from"./vue-lybwVHEG.js";import{B as k,bh as P}from"./antd-veAxK-b_.js";const C="/assets/no-data-SqNedQxX.svg",D="/assets/net-error-LF5G2h98.svg",v=A({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=G(new Map),{query:p}=h(),o=y(),c=O(),{t}=S(),{prefixCls:x}=R("app-exception-page"),E=m(()=>{const{status:l}=p,{status:i}=n;return Number(l)||i}),_=m(()=>s(a).get(s(E))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?T:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?T:u,handler:()=>n.full?o(d.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:D}),()=>{const{title:l,subTitle:i,btnText:b,icon:f,handler:g,status:N}=s(_)||{};return r(P,{class:x,status:N,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>b&&r(k,{type:"primary",onClick:g},{default:()=>b}),icon:()=>f?r("img",{src:f},null):null})}}});export{v as default};
