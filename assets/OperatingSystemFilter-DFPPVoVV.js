import{r as i,j as n}from"./index-DyQ0LbtH.js";const l=({windowsContent:o,macContent:a})=>{const[e,s]=i.useState(!0),c=()=>{const t=window.navigator.userAgent.toLowerCase();t.includes("mac")||t.includes("iphone")||t.includes("ipad")?s(!1):s(!0)};i.useEffect(()=>{c()},[]);const r=()=>{s(!e)};return n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",opacity:.8,filter:"saturate(0%) brightness(1.1)"},className:"addition-info",children:[e?"Информация ниже указана для устройств на Windows.":"Информация ниже указана для устройств на macOS.",n.jsx("button",{className:"change_os",onClick:r,children:e?"Показать для macOS":"Показать для Windows"})]}),e?o:a]})};export{l as C};
