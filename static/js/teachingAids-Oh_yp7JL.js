import{aM as t}from"./index-CKzzTDKE.js";const a=e=>t.request("post","/material/add",{data:e}),s=e=>t.request("get","/material/list",{params:e}),i=e=>t.request("post","/material/delete",{data:e}),o=e=>t.request("post","/material/update",{data:e}),p={upper(e){return t.request("post","/material/on",{data:e})},lower(e){return t.request("post","/material/off",{data:e})},free(e){return t.request("post","/material/free",{data:e})}};export{i as a,o as b,a as c,s as m,p as o};
