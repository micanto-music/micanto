import{u as j,a as p,d as v,r as C,e as g,j as e,s as w,P as y,h as N}from"./index-356b1d0f.js";import{B as S}from"./BaseModal-8622d577.js";import{E}from"./EditCoverDroppable-3c153051.js";function q(a){var d,l;const[s]=j(),{formState:{errors:m},register:c,handleSubmit:u,watch:A}=p(),o=a.data.image?a.data.image:v,[n,f]=C.useState(o),x=g(r=>r.updateItem),t=a.data,b=async r=>{w();const i=new FormData;n&&n!==o&&i.append("image",n),i.append("name",r.name),y.updateArtist(t==null?void 0:t.id,i).then(h=>{x(h.data),N()}),a.onClose()};return e.jsx(S,{title:s("context.edit_artist"),show:a.isOpen,onClose:a.onClose,children:e.jsxs("form",{onSubmit:u(b),encType:"multipart/form-data",children:[e.jsx(E,{cover:o,setCover:f}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:s("edit.name")}),e.jsx("input",{className:"w-full form-input",defaultValue:t==null?void 0:t.name,...c("name",{required:{value:!0,message:s("edit.required")}})}),((d=m.name)==null?void 0:d.message)&&e.jsx("div",{className:"validationText",children:(l=m.name)==null?void 0:l.message})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{onClick:a.onClose,type:"button",className:"btn btn-close mr-2","data-bs-dismiss":"modal","aria-label":"Close",children:s("close")}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:s("save")})]})]})})}export{q as default};
