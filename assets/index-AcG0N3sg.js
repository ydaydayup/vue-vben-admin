import{f as x,c as F,a as K}from"./entry/index-ik9kLCN0-1706159834690.js";import{aa as C,af as b,b6 as z,Q as R,a1 as q,a0 as N,aT as M,bz as V,aH as A}from"./antd-veAxK-b_.js";import{d as G,f as B,c as w,u as e,w as E,_ as i,a9 as u,aa as l,$ as d,ab as S,k as c,a0 as k,E as T,a1 as g,ac as j,F as P,a2 as O}from"./vue-lybwVHEG.js";const _=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}],I={class:"title"},L={key:0,class:"extra"},$={key:1},H={key:0,class:"description"},X={class:"datetime"},U=G({__name:"NoticeList",props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(r,{emit:v}){const n=r,{prefixCls:y}=x("header-notify-list"),p=B(n.currentPage||1),m=w(()=>{const{pageSize:a,list:s}=n;if(a===!1)return[];let t=C(a)?a:5;return s.slice(t*(e(p)-1),t*e(p))});E(()=>n.currentPage,a=>{p.value=a});const h=w(()=>{const{list:a,pageSize:s}=n,t=C(s)?s:Number(s)&&5;return t>0&&a&&a.length>t?{total:a.length,pageSize:t,current:e(p),onChange(f){p.value=f,v("update:currentPage",f)}}:!1});function o(a){n.onTitleClick&&n.onTitleClick(a)}return(a,s)=>(i(),u(e(b),{class:O(e(y)),bordered:"",pagination:h.value},{default:l(()=>[(i(!0),d(P,null,S(m.value,t=>(i(),u(e(b).Item,{key:t.id,class:"list-item"},{default:l(()=>[c(e(b).Item.Meta,null,{title:l(()=>[k("div",I,[c(e(z).Paragraph,{onClick:f=>o(t),delete:!!t.titleDelete,ellipsis:r.titleRows&&r.titleRows>0?{rows:r.titleRows,tooltip:!!t.title}:!1,content:t.title},null,8,["onClick","delete","ellipsis","content"]),t.extra?(i(),d("div",L,[c(e(R),{class:"tag",color:t.color},{default:l(()=>[T(g(t.extra),1)]),_:2},1032,["color"])])):j("",!0)])]),avatar:l(()=>[t.avatar?(i(),u(e(q),{key:0,class:"avatar",src:t.avatar},null,8,["src"])):(i(),d("span",$,g(t.avatar),1))]),description:l(()=>[k("div",null,[t.description?(i(),d("div",H,[c(e(z).Paragraph,{ellipsis:r.descRows&&r.descRows>0?{rows:r.descRows,tooltip:!!t.description}:!1,content:t.description},null,8,["ellipsis","content"])])):j("",!0),k("div",X,g(t.datetime),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["class","pagination"]))}}),D=F(U,[["__scopeId","data-v-cff26da6"]]),J={key:0},Z=G({__name:"index",setup(r){const{prefixCls:v}=x("header-notify"),{createMessage:n}=K(),y=B(_),p={},m=w(()=>{let o=0;for(let a=0;a<_.length;a++)o+=_[a].list.length;return o});function h(o){n.success("你点击了通知，ID="+o.id),o.titleDelete=!o.titleDelete}return(o,a)=>(i(),d("div",{class:O(e(v))},[c(e(A),{title:"",trigger:"click",overlayClassName:`${e(v)}__overlay`},{content:l(()=>[c(e(N),null,{default:l(()=>[(i(!0),d(P,null,S(y.value,s=>(i(),u(e(N).TabPane,{key:s.key},{tab:l(()=>[T(g(s.name)+" ",1),s.list.length!==0?(i(),d("span",J,"("+g(s.list.length)+")",1)):j("",!0)]),default:l(()=>[s.key==="1"?(i(),u(D,{key:0,list:s.list,onTitleClick:h},null,8,["list"])):(i(),u(D,{key:1,list:s.list},null,8,["list"]))]),_:2},1024))),128))]),_:1})]),default:l(()=>[c(e(M),{count:m.value,dot:"",numberStyle:p},{default:l(()=>[c(e(V))]),_:1},8,["count"])]),_:1},8,["overlayClassName"])],2))}});export{Z as default};
