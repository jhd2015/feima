var $=Object.defineProperty;var k=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var R=(a,s,t)=>s in a?$(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,z=(a,s)=>{for(var t in s||(s={}))A.call(s,t)&&R(a,t,s[t]);if(k)for(var t of k(s))B.call(s,t)&&R(a,t,s[t]);return a};import{u as C}from"./hooks-DnkqZJ19.js";import{d as L,n as r,ak as j,ah as I,aI as J,J as V,b as n,X as q,Y as i,w as N,j as T,aJ as o,aj as D,A as W,at as Y}from"./index-DVQFhUTl.js";const _={options:{type:Array,default:()=>[]},modelValue:{type:void 0,require:!1,default:"0"},block:{type:Boolean,default:!1},size:{type:String},disabled:{type:Boolean,default:!1},resize:{type:Boolean,default:!1}},E=L({name:"ReSegmented",props:_,emits:["change","update:modelValue"],setup(a,{emit:s}){const t=r(0),v=r(0),{isDark:b}=j(),g=r(!1),c=r(-1),m=r(""),f=W(),d=I(a.modelValue)?J(a,"modelValue"):r(0);function M({option:e,index:l},u){a.disabled||e.disabled||(u.preventDefault(),I(a.modelValue)?s("update:modelValue",l):d.value=l,m.value="",s("change",{index:l,option:e}))}function w({option:e,index:l},u){a.disabled||(u.preventDefault(),c.value=l,e.disabled||d.value===l?m.value="":m.value=b.value?"#1f1f1f":"rgba(0, 0, 0, 0.06)")}function S(e,l){a.disabled||(l.preventDefault(),c.value=-1)}function h(e=d.value){i(()=>{var u;const l=(u=f==null?void 0:f.proxy)==null?void 0:u.$refs[`labelRef${e}`];l&&(t.value=l.clientWidth,v.value=l.offsetLeft,g.value=!0)})}function y(){q(".pure-segmented",()=>{i(()=>{h(d.value)})})}(a.block||a.resize)&&y(),V(()=>d.value,e=>{i(()=>{h(e)})},{immediate:!0}),V(()=>a.size,y,{immediate:!0});const X=()=>a.options.map((e,l)=>n("label",{ref:`labelRef${l}`,class:["pure-segmented-item",(a.disabled||(e==null?void 0:e.disabled))&&"pure-segmented-item-disabled"],style:{background:c.value===l?m.value:"",color:a.disabled?null:!e.disabled&&(d.value===l||c.value===l)?b.value?"rgba(255, 255, 255, 0.85)":"rgba(0,0,0,.88)":""},onMouseenter:u=>w({option:e,index:l},u),onMouseleave:u=>S({option:e,index:l},u),onClick:u=>M({option:e,index:l},u)},[n("input",{type:"radio",name:"segmented"},null),N(n("div",{class:"pure-segmented-item-label"},[e.icon&&!o(e.label)?n("span",{class:"pure-segmented-item-icon",style:{marginRight:e.label?"6px":0}},[D(C(e.icon,z({},e==null?void 0:e.iconAttrs)))]):null,e.label?o(e.label)?D(e.label):n("span",null,[e.label]):null]),[[T("tippy"),{content:e==null?void 0:e.tip,zIndex:41e3}]])]));return()=>n("div",{class:{"pure-segmented":!0,"pure-segmented-block":a.block,"pure-segmented--large":a.size==="large","pure-segmented--small":a.size==="small"}},[n("div",{class:"pure-segmented-group"},[n("div",{class:"pure-segmented-item-selected",style:{width:`${t.value}px`,transform:`translateX(${v.value}px)`,display:g.value?"block":"none"}},null),X()])])}}),K=Y(E);export{K as R};