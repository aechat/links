import{r,j as c}from"./index-o1LN1PSI.js";const w="aechat",S="links",$="main",C=({filePath:n})=>{const[m,i]=r.useState("Ищем информацию..."),[s,l]=r.useState(null),g=async()=>{const o=`https://api.github.com/repos/${w}/${S}/commits?path=${n}&sha=${$}`;try{const t=await fetch(o);if(!t.ok)throw new Error(`${t.status}`);const e=(await t.json()).filter(y=>!y.commit.message.startsWith("Merge"));if(e.length===0){i("Индикатор свежести информации временно недоступен");return}const a=new Date(e[0].commit.author.date),h={year:"2-digit",month:"2-digit",day:"2-digit"},p={hour:"2-digit",minute:"2-digit"},u=a.toLocaleString("ru-RU",h),f=a.toLocaleString("ru-RU",p),d=e[0].commit.message.charAt(0).toLowerCase()+e[0].commit.message.slice(1),x=e[0].html_url;i(`Раздел обновлён ${u} в ${f}<br/>Что нового: <a style="font-weight: 800;" target="_blank" rel="noreferrer" href="${x}" target="_blank">${d}</a>`)}catch(t){l(`Индикатор свежести информации временно недоступен: ${t}`)}};return r.useEffect(()=>{const o=setTimeout(()=>{g()},1500);return()=>clearTimeout(o)},[n]),s?c.jsx("p",{style:{color:"var(--accent)",fontSize:"0.75rem",opacity:"0.35",textAlign:"right",textWrap:"balance",whiteSpace:"pre-wrap",hyphens:"none",fontWeight:"400",fontStyle:"italic",lineHeight:"1.35",marginBlockEnd:"20px",marginInline:"10px"},children:s}):c.jsx("p",{style:{filter:"saturate(0.5)",fontSize:"0.75rem",opacity:"0.5",textAlign:"right",hyphens:"none",fontWeight:"400",whiteSpace:"pre-wrap",lineHeight:"1.35",marginBlockEnd:"20px",marginInline:"10px"},dangerouslySetInnerHTML:{__html:m}})};export{C as G};
