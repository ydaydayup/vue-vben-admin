var g=(n,s,o)=>new Promise((u,l)=>{var i=e=>{try{c(o.next(e))}catch(a){l(a)}},t=e=>{try{c(o.throw(e))}catch(a){l(a)}},c=e=>e.done?u(e.value):Promise.resolve(e.value).then(i,t);c((o=o.apply(n,s)).next())});import{s as f,a0 as w,K as m}from"./entry/index-ik9kLCN0-1706159834690.js";import{f as R,b as p,u as d,w as b,I as r}from"./vue-lybwVHEG.js";function y(n){const s=R(null),o=R(!1),u=R(null);let l;function i(e,a){p(()=>{s.value=null,o.value=null}),!(d(o)&&f()&&e===d(s))&&(s.value=e,u.value=a,n&&e.setProps(w(n)),o.value=!0,l==null||l(),l=b(()=>n,()=>{n&&e.setProps(w(n))},{immediate:!0,deep:!0}))}function t(){const e=d(s);return e||m("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[i,{reload:e=>g(this,null,function*(){return yield t().reload(e)}),setProps:e=>{t().setProps(e)},redoHeight:()=>{t().redoHeight()},setSelectedRows:e=>r(t().setSelectedRows(e)),setLoading:e=>{t().setLoading(e)},getDataSource:()=>t().getDataSource(),getRawDataSource:()=>t().getRawDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const a=t().getColumns({ignoreIndex:e})||[];return r(a)},setColumns:e=>{t().setColumns(e)},setTableData:e=>t().setTableData(e),setPagination:e=>t().setPagination(e),deleteSelectRowByKey:e=>{t().deleteSelectRowByKey(e)},getSelectRowKeys:()=>r(t().getSelectRowKeys()),getSelectRows:()=>r(t().getSelectRows()),clearSelectedRowKeys:()=>{t().clearSelectedRowKeys()},setSelectedRowKeys:e=>{t().setSelectedRowKeys(e)},getPaginationRef:()=>t().getPaginationRef(),getSize:()=>r(t().getSize()),updateTableData:(e,a,S)=>t().updateTableData(e,a,S),deleteTableDataRecord:e=>t().deleteTableDataRecord(e),insertTableDataRecord:(e,a)=>t().insertTableDataRecord(e,a),updateTableDataRecord:(e,a)=>t().updateTableDataRecord(e,a),findTableDataRecord:e=>t().findTableDataRecord(e),getRowSelection:()=>r(t().getRowSelection()),getCacheColumns:()=>r(t().getCacheColumns()),getForm:()=>d(u),setShowPagination:e=>g(this,null,function*(){t().setShowPagination(e)}),getShowPagination:()=>r(t().getShowPagination()),expandAll:()=>{t().expandAll()},collapseAll:()=>{t().collapseAll()},expandRows:e=>{t().expandRows(e)},collapseRows:e=>{t().collapseRows(e)},scrollTo:e=>{t().scrollTo(e)}}]}export{y as u};
