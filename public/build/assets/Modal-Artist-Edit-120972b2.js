import{u as w,a as S,d as y,r as p,e as N,j as e,s as A,P as E,h as I}from"./index-53121363.js";import{B as O}from"./BaseModal-c7568d6b.js";import{E as P}from"./EditCoverDroppable-7f584478.js";function L(a){var u,f;const[o]=w(),{formState:{errors:c},register:x,handleSubmit:b,watch:T}=S(),r=a.data.image?a.data.image:y,[i,h]=p.useState(r),j=N(n=>n.updateItem),t=a.data,[d,v]=p.useState({}),C=(n,s)=>{v(s)},g=async n=>{A();const s=new FormData;let m=!1;i&&i!==r&&(s.append("image",i),m=!0),d&&Object.hasOwn(d,"x")&&(s.append("crop",JSON.stringify(d)),m=!0),s.append("name",n.name),E.updateArtist(t==null?void 0:t.id,s).then(l=>{m&&(l.data.image=l.data.image+"?t="+Date.now()),j(l.data),I()}),a.onClose()};return e.jsx(O,{title:o("context.edit_artist"),show:a.isOpen,onClose:a.onClose,children:e.jsxs("form",{onSubmit:b(g),encType:"multipart/form-data",children:[e.jsx(P,{cover:r,setCover:h,saveCrop:C}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:o("edit.name")}),e.jsx("input",{className:"w-full form-input",defaultValue:t==null?void 0:t.name,...x("name",{required:{value:!0,message:o("edit.required")}})}),((u=c.name)==null?void 0:u.message)&&e.jsx("div",{className:"validationText",children:(f=c.name)==null?void 0:f.message})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{onClick:a.onClose,type:"button",className:"btn btn-close mr-2","data-bs-dismiss":"modal","aria-label":"Close",children:o("close")}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:o("save")})]})]})})}export{L as default};