var ue=Object.defineProperty,se=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(c,p,o)=>p in c?ue(c,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[p]=o,O=(c,p)=>{for(var o in p||(p={}))de.call(p,o)&&H(c,o,p[o]);if(J)for(var o of J(p))pe.call(p,o)&&H(c,o,p[o]);return c},j=(c,p)=>se(c,re(p));var K=(c,p,o)=>new Promise((b,i)=>{var _=f=>{try{k(o.next(f))}catch(a){i(a)}},x=f=>{try{k(o.throw(f))}catch(a){i(a)}},k=f=>f.done?b(f.value):Promise.resolve(f.value).then(_,x);k((o=o.apply(c,p)).next())});import{S as me}from"./sortable.esm-DLvoQ0uI.js";import{c as ve,h as fe,a as ce,o as A,R as be,b as ge,d as _e}from"./index-D-mVkeuZ.js";import{n as y,b as e,r as d,f as g,aF as ke,aG as D,Y as Ce,d as P,aH as z,aI as he,J as ye,t as Ve,g as Y,h as n,o as w,e as S,x as xe,c as T,u as s,V as I,Q as Le,j as we,aJ as F,w as q,_ as Se}from"./index-B3VfAA98.js";function Re(c){const p=t=>{t.preventDefault(),Ce(()=>{const r=document.querySelector(".el-table__body-wrapper tbody");me.create(r,{animation:300,handle:".drag-btn",onEnd:({newIndex:R,oldIndex:V})=>{const v=o.value.list.splice(V,1)[0];o.value.list.splice(R,0,v)}})})},o=y({list:[],isLoading:!1}),b=y({title:"",month:"",baiduLink:""});c.isStarCoin&&(b.value.starCoin="0");function i(){o.value.isLoading=!0;const t={};for(let r in b.value)b.value[r]&&(t[r]=b.value[r]);fe(t).then(r=>{o.value.list=r}).finally(()=>{o.value.isLoading=!1})}const _=y([{type:"selection",align:"left"},{label:"序号",prop:"id",cellRenderer:({row:t})=>e("div",{class:"flex items-center"},[e(d("iconify-icon-online"),{icon:"icon-park-outline:drag",class:"drag-btn cursor-grab",onMouseenter:r=>p(r)},null),e("p",{class:"ml-[16px]"},[t.id])])},{label:"封面",prop:"img",slot:"img",width:60},{label:"编号",prop:"number"},{label:"标题",prop:"title",width:300},{label:"一级分类",prop:"month",headerSlot:"jointLevel1"},{label:"二级分类",prop:"festival",headerSlot:"jointLevel2"},{label:"三级分类",prop:"name",headerSlot:"jointLevel3"},{label:"格式",prop:"starCoin"},{label:"星币数",prop:"starCoin",cellRenderer:({row:t})=>t.starCoin>0?t.starCoin:"免费"},{label:"状态",prop:"status",cellRenderer:({row:t})=>t.status?e(d("el-tag"),{type:"primary"},{default:()=>[g("上架")]}):e(d("el-tag"),{type:"danger"},{default:()=>[g("下架")]})},{label:"更新日期",prop:"name"},{label:"操作",prop:"name",width:200,slot:"operation"}]),x=[{value:1,label:"Asia",children:[{value:2,label:"China",children:[{value:3,label:"Beijing"},{value:4,label:"Shanghai"},{value:5,label:"Hangzhou"}]},{value:6,label:"Japan",children:[{value:7,label:"Tokyo"},{value:8,label:"Osaka"},{value:9,label:"Kyoto"}]},{value:10,label:"Korea",children:[{value:11,label:"Seoul"},{value:12,label:"Busan"},{value:13,label:"Taegu"}]}]},{value:14,label:"Europe",children:[{value:15,label:"France",children:[{value:16,label:"Paris"},{value:17,label:"Marseille"},{value:18,label:"Lyon"}]},{value:19,label:"UK",children:[{value:20,label:"London"},{value:21,label:"Birmingham"},{value:22,label:"Manchester"}]}]},{value:23,label:"North America",children:[{value:24,label:"US",children:[{value:25,label:"New York"},{value:26,label:"Los Angeles"},{value:27,label:"Washington"}]},{value:28,label:"Canada",children:[{value:29,label:"Toronto"},{value:30,label:"Montreal"},{value:31,label:"Ottawa"}]}]}],k=y([]);function f(t){k.value=[],k.value=t.map(({_id:r})=>r)}function a(t){ke.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ce({id:t}).then(()=>{D.success("删除成功"),i()})}).catch(()=>{D.info("已取消删除")})}function h(t){var r;A[t]&&((r=A[t]({ids:JSON.stringify(k.value)}))==null||r.then(()=>{D.success("操作成功"),i()}))}function C(t){A.upper({ids:JSON.stringify([t])}).then(()=>{D.success("操作成功"),i()})}function m(t){A.lower({ids:JSON.stringify([t])}).then(()=>{D.success("操作成功"),i()})}return{columns:_,tableData:o,options:x,searchModel:b,handleSelectionChange:f,loadData:i,copyTextToClipboard:ve,handDelete:a,headOperationAll:h,handUpper:C,handLower:m}}const Ue={class:"dialog-footer"},Be=P({__name:"DialogForm",props:z({data:{default:{_id:"",number:"",title:"",month:"",festival:"",baiduLink:"",img:[]}}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:z(["refresh"],["update:modelValue"]),setup(c,{emit:p}){const o=he(c,"modelValue"),b=c,i=y({_id:"",starCoin:0,title:"",month:"",festival:"",baiduLink:"",img:[]});ye(()=>o.value,()=>{var f;i.value=j(O({},b.data),{starCoin:Number(b.data.starCoin||0),img:(f=b.data.img)==null?void 0:f.map(a=>({url:a,status:"success"}))})});const _=p,x=Ve({starCoin:[{required:!0,message:"不可以为空"}],title:[{required:!0,message:"不可以为空"}],baiduLink:[{required:!0,message:"不可以为空"}],month:[{required:!0,message:"不可以为空"}],img:[{type:"array",required:!0,message:"不可以为空"}],festival:[{required:!0,message:"不可以为空"}]});function k(){return K(this,null,function*(){var h,C;const f=j(O({},i.value),{img:(h=i.value.img)==null?void 0:h.filter(m=>m.status=="success").map(m=>{var t;return((t=m==null?void 0:m.response)==null?void 0:t.file)||m.url})}),a=new FormData;for(const m in f)Object.prototype.hasOwnProperty.call(f,m)&&(m=="img"?f[m].forEach((t,r)=>{a.append(`img[${r}]`,t)}):a.append(m,f[m]));(C=i.value)!=null&&C._id?(a.append("id",i.value._id),ge(a).then(()=>{o.value=!1,_("refresh")})):_e(a).then(()=>{o.value=!1,_("refresh")})})}return(f,a)=>{var V;const h=d("el-input-number"),C=d("el-form-item"),m=d("el-input"),t=d("el-form"),r=d("el-button"),R=d("el-dialog");return w(),Y(R,{modelValue:o.value,"onUpdate:modelValue":a[7]||(a[7]=v=>o.value=v),title:`${(V=b.data)!=null&&V._id?"编辑":"新增"}手抄报`,width:"500"},{footer:n(()=>[S("div",Ue,[e(r,{onClick:a[6]||(a[6]=v=>o.value=!1)},{default:n(()=>a[9]||(a[9]=[g("取消")])),_:1}),e(r,{type:"primary",onClick:k},{default:n(()=>a[10]||(a[10]=[g(" 确认 ")])),_:1})])]),default:n(()=>[e(t,{ref:"ruleFormRef","label-position":"top",model:i.value,rules:x,"label-width":"auto",class:"demo-ruleForm","status-icon":""},{default:n(()=>[e(C,{label:"星币",prop:"starCoin"},{default:n(()=>[e(h,{modelValue:i.value.starCoin,"onUpdate:modelValue":a[0]||(a[0]=v=>i.value.starCoin=v),min:0,placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(C,{label:"标题",prop:"title"},{default:n(()=>[e(m,{modelValue:i.value.title,"onUpdate:modelValue":a[1]||(a[1]=v=>i.value.title=v),"show-word-limit":"",maxlength:"200",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(C,{label:"月分",prop:"month"},{default:n(()=>[e(m,{modelValue:i.value.month,"onUpdate:modelValue":a[2]||(a[2]=v=>i.value.month=v),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(C,{label:"节曰",prop:"festival"},{default:n(()=>[e(m,{modelValue:i.value.festival,"onUpdate:modelValue":a[3]||(a[3]=v=>i.value.festival=v),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(C,{label:"百度云链接",prop:"baiduLink"},{default:n(()=>[e(m,{modelValue:i.value.baiduLink,"onUpdate:modelValue":a[4]||(a[4]=v=>i.value.baiduLink=v),maxlength:"200",autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(C,{prop:"img"},{label:n(()=>a[8]||(a[8]=[g(" 上传 ")])),default:n(()=>[e(be,{modelValue:i.value.img,"onUpdate:modelValue":a[5]||(a[5]=v=>i.value.img=v),name:"handCopy"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}}),De={class:"flex"},Te={class:"head"},$e={key:0,class:"imgBox"},Ae={class:"table_operation"},Me=P({name:"thandCopyList",__name:"index",props:{isStarCoin:{default:!1}},setup(c){const p=c,{columns:o,tableData:b,options:i,searchModel:_,handleSelectionChange:x,loadData:k,copyTextToClipboard:f,handDelete:a,headOperationAll:h,handUpper:C,handLower:m}=Re(p);xe(()=>{k()});const t=y([]),r=y(),R=y(),V=()=>{var L,l;(l=(L=s(R).popperRef)==null?void 0:L.delayHide)==null||l.call(L)},v=y(!1),M=y({});function G(L){v.value=!0,M.value=L}function Q(){v.value=!0,M.value={}}return(L,l)=>{const E=d("el-input"),U=d("el-button"),W=d("el-image"),X=d("el-tag"),Z=d("Link"),B=d("el-icon"),ee=d("Remove"),le=d("Top"),ae=d("Bottom"),te=d("Edit"),oe=d("pure-table"),ne=d("el-cascader-panel"),ie=d("el-popover"),N=we("click-outside");return w(),T(Le,null,[S("div",De,[S("div",Te,[l[15]||(l[15]=S("div",null,"手抄报列表",-1)),S("div",null,[e(E,{modelValue:s(_).title,"onUpdate:modelValue":l[0]||(l[0]=u=>s(_).title=u),"suffix-icon":s(F),style:{width:"150px","margin-right":"10px"},placeholder:"请输入标题"},null,8,["modelValue","suffix-icon"]),e(E,{modelValue:s(_).month,"onUpdate:modelValue":l[1]||(l[1]=u=>s(_).month=u),"suffix-icon":s(F),style:{width:"150px","margin-right":"10px"},placeholder:"请输入月分"},null,8,["modelValue","suffix-icon"]),e(E,{modelValue:s(_).baiduLink,"onUpdate:modelValue":l[2]||(l[2]=u=>s(_).baiduLink=u),"suffix-icon":s(F),style:{width:"150px","margin-right":"20px"},placeholder:"请输入标题"},null,8,["modelValue","suffix-icon"]),e(U,{type:"primary",onClick:s(k)},{default:n(()=>l[9]||(l[9]=[g("搜索")])),_:1},8,["onClick"]),e(U,{onClick:l[3]||(l[3]=u=>s(h)("upper"))},{default:n(()=>l[10]||(l[10]=[g("批量上架")])),_:1}),e(U,{onClick:l[4]||(l[4]=u=>s(h)("lower"))},{default:n(()=>l[11]||(l[11]=[g("批量下架")])),_:1}),p.isStarCoin?(w(),Y(U,{key:0,onClick:l[5]||(l[5]=u=>s(h)("delete"))},{default:n(()=>l[12]||(l[12]=[g("批量删除")])),_:1})):I("",!0),e(U,{type:"primary",onClick:l[6]||(l[6]=u=>s(h)("free"))},{default:n(()=>l[13]||(l[13]=[g(" 设置免费 ")])),_:1}),e(U,{type:"primary",onClick:Q},{default:n(()=>l[14]||(l[14]=[g("新增")])),_:1})])]),e(oe,{"row-key":"id",data:s(b).list,loading:s(b).isLoading,columns:s(o),onSelectionChange:s(x)},{img:n(({row:u})=>[u!=null&&u.img?(w(),T("div",$e,[e(W,{"preview-teleported":!0,src:u.img[0],fit:"fill","preview-src-list":u.img},null,8,["src","preview-src-list"])])):I("",!0)]),jointLevel1:n(()=>[q((w(),T("div",{ref_key:"buttonRef",ref:r},l[16]||(l[16]=[g("一级分类")]))),[[N,V]])]),jointLevel2:n(()=>[q((w(),T("div",null,l[17]||(l[17]=[g("二级分类")]))),[[N,V]])]),jointLevel3:n(()=>[q((w(),T("div",null,l[18]||(l[18]=[g("三级分类")]))),[[N,V]])]),state:n(()=>[e(X,{type:"primary"},{default:n(()=>l[19]||(l[19]=[g("状态")])),_:1})]),operation:n(({row:u})=>[S("div",Ae,[e(B,{onClick:$=>s(f)(u.baiduLink)},{default:n(()=>[e(Z)]),_:2},1032,["onClick"]),e(B,{onClick:$=>s(a)(u._id)},{default:n(()=>[e(ee)]),_:2},1032,["onClick"]),e(B,{onClick:$=>s(C)(u._id)},{default:n(()=>[e(le)]),_:2},1032,["onClick"]),e(B,{onClick:$=>s(m)(u._id)},{default:n(()=>[e(ae)]),_:2},1032,["onClick"]),e(B,{onClick:$=>G(u)},{default:n(()=>[e(te)]),_:2},1032,["onClick"])])]),_:1},8,["data","loading","columns","onSelectionChange"]),e(ie,{ref_key:"popoverRef",ref:R,"virtual-ref":r.value,width:"400px",trigger:"click","virtual-triggering":"",placement:"bottom-start"},{default:n(()=>[S("div",null,[e(ne,{modelValue:t.value,"onUpdate:modelValue":l[7]||(l[7]=u=>t.value=u),props:{multiple:!0},options:s(i)},null,8,["modelValue","options"])])]),_:1},8,["virtual-ref"])]),e(Be,{modelValue:v.value,"onUpdate:modelValue":l[8]||(l[8]=u=>v.value=u),data:M.value,onRefresh:s(k)},null,8,["modelValue","data","onRefresh"])],64)}}}),Fe=Se(Me,[["__scopeId","data-v-abbc7b8c"]]);export{Fe as default};