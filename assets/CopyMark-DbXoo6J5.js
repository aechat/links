import{s as o}from"./Footer-XvYiQ7Hx.js";const r=t=>{if(!t||!t.target)return;const a=t.target;if(a.tagName==="MARK"&&!a.classList.length)return;const n=a.innerHTML.replace(/<br\s*\/?>/gi,`
`).replace(/<\/?[^>]+(>|$)/g,"");if(navigator.clipboard)navigator.clipboard.writeText(n).then(()=>{o.success("Текст скопирован в буфер обмена")}).catch(e=>{o.error("Ошибка при копировании текста в буфер обмена: "+e.message)});else{const e=document.createElement("textarea");e.value=n,Object.assign(e.style,{position:"fixed",top:"0",left:"0",width:"1px",height:"1px",padding:"0",border:"none",outline:"none",boxShadow:"none",background:"transparent"}),document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),o.success("Текст успешно скопирован в буфер обмена"),document.body.removeChild(e)}};o.config({top:75,duration:3,maxCount:3});const c=()=>{document.addEventListener("click",t=>{t.target instanceof HTMLElement&&(t.target.tagName==="MARK"||t.target.tagName==="CODE")&&r(t)})},i={copyToClipboard:r,enableAutoCopy:c};export{i as C};