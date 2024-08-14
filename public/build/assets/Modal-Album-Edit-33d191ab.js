import{u as N,a as A,b as k,d as w,r as S,c as M,j as e,C as E,P as x,m as O,s as V,h as q}from"./index-356b1d0f.js";import{B as L}from"./BaseModal-8622d577.js";import{A as P}from"./react-select-async-creatable.esm-62f34686.js";import{E as I}from"./EditCoverDroppable-3c153051.js";function B(l){var f,h;const[a]=N(),{control:p,formState:{errors:m},register:r,handleSubmit:j,watch:b}=A();k();const o=l.data.cover?l.data.cover:w,[c,v]=S.useState(o),C=M(t=>t.updateItems);async function g(t){return x.searchArtists(t).then(n=>n.map(O))}const s=l.data,u={value:s.artist.name,label:s.artist.name},y=async t=>{V();const n=new FormData;c&&c!==o&&n.append("image",c);for(const i in t)i==="field"?n.append(i,t[i][1]):n.append(i,t[i]);x.updateAlbum(s==null?void 0:s.id,n).then(i=>{C(i),q()}),l.onClose()};return e.jsx(L,{title:a("context.edit_album"),show:l.isOpen,onClose:l.onClose,children:e.jsxs("form",{onSubmit:j(y),children:[e.jsx(I,{cover:o,setCover:v}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("edit.name")}),e.jsx("input",{className:"w-full form-input",defaultValue:s==null?void 0:s.name,...r("name",{required:{value:!0,message:a("edit.required")}})}),((f=m.name)==null?void 0:f.message)&&e.jsx("div",{className:"validationText",children:(h=m.name)==null?void 0:h.message})]}),!b("compilation")&&e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("edit.artists")}),e.jsx(E,{control:p,defaultValue:u,name:"artist",rules:{required:{value:!0,message:a("edit.required")}},render:({field:{onChange:t,value:n,ref:i}})=>e.jsx(P,{className:"select",classNamePrefix:"micanto-select",inputRef:i,defaultValue:u,noOptionsMessage:()=>a("select.noOptionsMessage"),formatCreateLabel:d=>`${a("select.create")} "${d}"`,loadingMessage:()=>a("select.loadingMessage"),onChange:d=>t(d),loadOptions:g,cacheOptions:!0,isClearable:!0})})]}),e.jsx("div",{className:"form-field form-check",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:(s==null?void 0:s.is_compilation)==1,...r("compilation")})," ",a("edit.compilation")]})}),e.jsx("div",{className:"form-field form-check",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:(s==null?void 0:s.is_single)==1,...r("single")})," ",a("edit.single")]})}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("edit.year")}),e.jsx("input",{type:"number",className:"w-full form-input",defaultValue:s==null?void 0:s.year,...r("year")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{onClick:l.onClose,type:"button",className:"btn btn-close mr-2","data-bs-dismiss":"modal","aria-label":"Close",children:a("close")}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:a("save")})]})]})})}export{B as default};
