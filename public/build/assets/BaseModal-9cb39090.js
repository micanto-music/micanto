import{r as d,n as c,j as o}from"./index-6eb254c0.js";const p=d.memo(s=>{const{title:e,footer:i,closeOnTap:n,onClose:m,children:t}=s,a=document.getElementById("app");if(!a)throw new Error("Root node not found. Can`t render modal.");const r=l=>{n||l.stopPropagation()};return c.createPortal(o.jsx("div",{className:"modal contexify_willEnter-fade",children:o.jsx("div",{className:"modal-panel",onClick:r,children:o.jsxs("div",{className:"modal-content",children:[e!=""&&o.jsx("div",{className:"modal-header",children:o.jsx("h4",{children:e})}),o.jsx("div",{className:"modal-body",children:t})]})})}),a)});export{p as B};