import{u as x,f as y,a as j,j as a,s as f,P}from"./index-356b1d0f.js";import{B as v}from"./BaseModal-8622d577.js";function S(e){var d,m,o,u;const[l]=x(),[c]=y(t=>[t.editPlaylist]),{control:C,formState:{errors:i},register:n,handleSubmit:r}=j({}),s={name:(d=e==null?void 0:e.data)==null?void 0:d.name,id:(m=e==null?void 0:e.data)==null?void 0:m.id},b=async t=>{f(),P.editPlaylist(t).then(h=>{c(h),e.onClose()})};return a.jsx(v,{title:"Playlist",show:e.isOpen,onClose:e.onClose,children:a.jsxs("form",{onSubmit:r(b),children:[a.jsxs("div",{className:"form-field",children:[a.jsx("label",{children:l("playlist.name")}),a.jsx("input",{defaultValue:s==null?void 0:s.id,type:"hidden",...n("id")}),a.jsx("input",{className:"w-full form-input",placeholder:l("playlist.name"),defaultValue:s==null?void 0:s.name,...n("name",{required:{value:!0,message:l("edit.required")}})}),((o=i.name)==null?void 0:o.message)&&a.jsx("div",{className:"validationText",children:(u=i.name)==null?void 0:u.message})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{onClick:e.onClose,type:"button",className:"btn btn-close mr-2","data-bs-dismiss":"modal","aria-label":"Close",children:l("close")}),a.jsx("button",{className:"btn btn-primary",type:"submit",children:l("save")})]})]})})}export{S as default};
