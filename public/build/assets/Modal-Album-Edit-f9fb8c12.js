import{u as w,a as O,b as M,d as E,r as x,c as V,j as e,C as q,P as j,m as L,s as P,h as I}from"./index-00800051.js";import{B as R}from"./BaseModal-08c1bbb8.js";import{A as T}from"./react-select-async-creatable.esm-276cc995.js";import{E as _}from"./EditCoverDroppable-179d0a27.js";function z(l){var p,h;const[a]=w(),{control:b,formState:{errors:u},register:n,handleSubmit:v,watch:C}=O();M();const o=l.data.cover?l.data.cover:E,[c,g]=x.useState(o),y=V(t=>t.updateItems),[d,N]=x.useState({}),A=(t,i)=>{N(i)};async function S(t){return j.searchArtists(t).then(i=>i.map(L))}const s=l.data,f={value:s.artist.name,label:s.artist.name},k=async t=>{P();const i=new FormData;c&&c!==o&&i.append("image",c),d&&Object.hasOwn(d,"x")&&i.append("crop",JSON.stringify(d));for(const r in t)r==="field"?i.append(r,t[r][1]):i.append(r,t[r]);j.updateAlbum(s==null?void 0:s.id,i).then(r=>{y(r),I()}),l.onClose()};return e.jsx(R,{title:a("context.edit_album"),show:l.isOpen,onClose:l.onClose,children:e.jsxs("form",{onSubmit:v(k),children:[e.jsx(_,{cover:o,setCover:g,saveCrop:A}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("edit.name")}),e.jsx("input",{className:"w-full form-input",defaultValue:s==null?void 0:s.name,...n("name",{required:{value:!0,message:a("edit.required")}})}),((p=u.name)==null?void 0:p.message)&&e.jsx("div",{className:"validationText",children:(h=u.name)==null?void 0:h.message})]}),!C("compilation")&&e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("edit.artists")}),e.jsx(q,{control:b,defaultValue:f,name:"artist",rules:{required:{value:!0,message:a("edit.required")}},render:({field:{onChange:t,value:i,ref:r}})=>e.jsx(T,{className:"select",classNamePrefix:"micanto-select",inputRef:r,defaultValue:f,noOptionsMessage:()=>a("select.noOptionsMessage"),formatCreateLabel:m=>`${a("select.create")} "${m}"`,loadingMessage:()=>a("select.loadingMessage"),onChange:m=>t(m),loadOptions:S,cacheOptions:!0,isClearable:!0})})]}),e.jsx("div",{className:"form-field form-check",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:(s==null?void 0:s.is_compilation)==1,...n("compilation")})," ",a("edit.compilation")]})}),e.jsx("div",{className:"form-field form-check",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",defaultChecked:(s==null?void 0:s.is_single)==1,...n("single")})," ",a("edit.single")]})}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("edit.year")}),e.jsx("input",{type:"number",className:"w-full form-input",defaultValue:s==null?void 0:s.year,...n("year")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{onClick:l.onClose,type:"button",className:"btn btn-close mr-2","data-bs-dismiss":"modal","aria-label":"Close",children:a("close")}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:a("save")})]})]})})}export{z as default};
