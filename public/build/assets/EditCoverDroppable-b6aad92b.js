import{r as u,o as d,p as f,u as m,j as a}from"./index-77cc7f27.js";const x=n=>{const[o,r]=u.useState(!1),l=e=>(d(e)&&(e.preventDefault(),r(!0)),!1),c=()=>r(!1),i=async e=>{if(!d(e))return!1;e.preventDefault(),r(!1);try{let t=e.dataTransfer.files[0];await s(t)}catch{}return!1},s=async e=>{n(e),document.querySelector(".upload-area img").src=await f(e)};return{onDragOver:l,onDragLeave:c,onDrop:i,setPreview:s,droppable:o}};function D({cover:n,setCover:o}){const{droppable:r,onDragOver:l,onDragLeave:c,onDrop:i,setPreview:s}=x(o),[e]=m(),t=p=>{p.preventDefault(),document.getElementById("image-upload").click()};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{onDragOver:l,onDrop:i,onDragLeave:c,className:r?"droppable upload-area flex mb-4":"upload-area flex mb-4",children:[a.jsx("div",{children:a.jsx("img",{width:"140px",src:n,className:"rounded-lg"})}),a.jsx("div",{className:"justify-center items-center flex flex-1",children:a.jsxs("div",{className:"text-center",children:[e("dnd.text")," ",a.jsx("br",{}),a.jsx("a",{className:"btn btn-primary mt-2",href:"#",onClick:t,children:e("dnd.choose")})]})})]}),a.jsx("input",{id:"image-upload",type:"file",onChange:p=>s(p.target.files[0])})]})}export{D as E};
