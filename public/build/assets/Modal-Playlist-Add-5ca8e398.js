import{u as b,b as y,f as h,a as x,j as s,s as f,P as j}from"./index-77cc7f27.js";import{B as P}from"./BaseModal-1450042a.js";function g(e){var i,o;const[a]=b(),r=y(),[d]=h(l=>[l.addPlaylist]),{control:v,formState:{errors:t},register:m,handleSubmit:c}=x({}),u=async l=>{f(),j.addPlaylist(l).then(n=>{e.onClose(),d(n),r("/playlist/"+n.id)})};return s.jsx(P,{title:"Playlist",show:e.isOpen,onClose:e.onClose,children:s.jsxs("form",{onSubmit:c(u),children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:a("playlist.name")}),s.jsx("input",{className:"w-full form-input",placeholder:a("playlist.name"),...m("name",{required:{value:!0,message:a("edit.required")}})}),((i=t.title)==null?void 0:i.message)&&s.jsx("div",{className:"validationText",children:(o=t.title)==null?void 0:o.message})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:e.onClose,type:"button",className:"btn btn-close mr-2","data-bs-dismiss":"modal","aria-label":"Close",children:a("close")}),s.jsx("button",{className:"btn btn-primary",type:"submit",children:a("save")})]})]})})}export{g as default};
