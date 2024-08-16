import{u as g,i as y,a as C,k as _,r as q,j as e,s as E,P as S,h as T}from"./index-219e74ed.js";import{B as P}from"./BaseModal-38a0c8cd.js";import{E as k}from"./EditCoverDroppable-0654d3ea.js";function M(s){var m,c,u,f,p,x,w,h;const[a]=g(),{user:j}=y(),{formState:{errors:l},register:n,handleSubmit:v,watch:A}=C(),d=(m=s==null?void 0:s.data)!=null&&m.image?(c=s==null?void 0:s.data)==null?void 0:c.image:_,[o,b]=q.useState(d),i=s.data,N=async r=>{E();const t=new FormData;o&&o!==d&&t.append("image",o),r.password&&t.append("password",r.password),t.append("name",r.name),t.append("email",r.email),r.new_password!=""&&t.append("new_password",r.new_password),S.updateUser(i==null?void 0:i.id,t).then(()=>{T()}),s.onClose()};return e.jsx(P,{title:a("profile.title"),show:s.isOpen,onClose:s.onClose,children:e.jsxs("form",{onSubmit:v(N),encType:"multipart/form-data",children:[e.jsx(k,{cover:d,setCover:b}),j.is_admin!==1&&e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("profile.current_password")}),e.jsx("input",{type:"password",className:"w-full form-input",...n("password",{required:{value:!0,message:a("edit.required")}})}),((u=l.password)==null?void 0:u.message)&&e.jsx("div",{className:"validationText",children:(f=l.password)==null?void 0:f.message}),e.jsx("p",{children:a("profile.password_hint")})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("profile.name")}),e.jsx("input",{type:"text",className:"w-full form-input",defaultValue:i==null?void 0:i.name,...n("name",{required:{value:!0,message:a("edit.required")}})}),((p=l.name)==null?void 0:p.message)&&e.jsx("div",{className:"validationText",children:(x=l.name)==null?void 0:x.message})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("profile.email")}),e.jsx("input",{type:"email",className:"w-full form-input",defaultValue:i==null?void 0:i.email,...n("email",{required:{value:!0,message:a("edit.required")}})}),((w=l.email)==null?void 0:w.message)&&e.jsx("div",{className:"validationText",children:(h=l.email)==null?void 0:h.message})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{children:a("profile.new_password")}),e.jsx("input",{type:"password",className:"w-full form-input",...n("new_password")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{onClick:s.onClose,type:"button",className:"btn btn-close mr-2","data-bs-dismiss":"modal","aria-label":"Close",children:a("close")}),e.jsx("button",{className:"btn btn-primary",type:"submit",children:a("save")})]})]})})}export{M as default};
