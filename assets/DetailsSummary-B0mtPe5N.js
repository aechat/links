import{g as P,a as H,r as c,b as O,j as e,s as N,d as K,e as k,f as L,h as E,i as Q,k as $,l as T,c as R,m as b,M as v,C,T as z}from"./index-CNTtX7Y5.js";import{b as Z,s as g}from"./Footer-BdfyjOba.js";function _(t){return P("MuiCircularProgress",t)}H("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const y=44,S=T`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,M=T`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,B=typeof S!="string"?$`
        animation: ${S} 1.4s linear infinite;
      `:null,F=typeof M!="string"?$`
        animation: ${M} 1.4s ease-in-out infinite;
      `:null,U=t=>{const{classes:s,variant:r,color:o,disableShrink:x}=t,n={root:["root",r,`color${k(o)}`],svg:["svg"],circle:["circle",`circle${k(r)}`,x&&"circleDisableShrink"]};return L(n,_,s)},V=N("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,s[r.variant],s[`color${k(r.color)}`]]}})(E(({theme:t})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("transform")}},{props:{variant:"indeterminate"},style:B||{animation:`${S} 1.4s linear infinite`}},...Object.entries(t.palette).filter(Q()).map(([s])=>({props:{color:s},style:{color:(t.vars||t).palette[s].main}}))]}))),Y=N("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,s)=>s.svg})({display:"block"}),G=N("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.circle,s[`circle${k(r.variant)}`],r.disableShrink&&s.circleDisableShrink]}})(E(({theme:t})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink,style:F||{animation:`${M} 1.4s ease-in-out infinite`}}]}))),te=c.forwardRef(function(s,r){const o=O({props:s,name:"MuiCircularProgress"}),{className:x,color:n="primary",disableShrink:f=!1,size:l=40,style:j,thickness:d=3.6,value:h=0,variant:u="indeterminate",...i}=o,a={...o,color:n,disableShrink:f,size:l,thickness:d,value:h,variant:u},p=U(a),m={},w={},q={};if(u==="determinate"){const A=2*Math.PI*((y-d)/2);m.strokeDasharray=A.toFixed(3),q["aria-valuenow"]=Math.round(h),m.strokeDashoffset=`${((100-h)/100*A).toFixed(3)}px`,w.transform="rotate(-90deg)"}return e.jsx(V,{className:K(p.root,x),style:{width:l,height:l,...w,...j},ownerState:a,ref:r,role:"progressbar",...q,...i,children:e.jsx(Y,{className:p.svg,ownerState:a,viewBox:`${y/2} ${y/2} ${y} ${y}`,children:e.jsx(G,{className:p.circle,style:m,ownerState:a,cx:y,cy:y,r:(y-d)/2,fill:"none",strokeWidth:d})})})}),W=R(e.jsx("path",{d:"M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1"}),"CoffeeRounded"),J=R(e.jsx("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"EditRounded"),ae=()=>{const[t,s]=c.useState(!1),[r,o]=c.useState(!1),[x,n]=c.useState(!1),[f,l]=c.useState(!1),j=()=>{s(!0)},d=()=>{o(!0)},h=()=>{s(!1)},u=()=>{o(!1)},i=()=>{n(!1)},a=()=>{l(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"support",children:[e.jsxs(b.button,{className:"modal-page-button",onClick:d,style:{filter:"saturate(0.5)"},whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.95,opacity:.5},children:[e.jsx(J,{}),"Помочь с редактированием страницы"]}),e.jsxs(b.button,{className:"modal-page-button",style:{filter:"saturate(1.25)"},whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.95,opacity:.5},onClick:j,children:[e.jsx(W,{}),"Поддержать сайт"]})]}),e.jsx(v,{open:t,closeIcon:null,centered:!0,onCancel:h,footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-header-title",children:"Поддержать проект"}),e.jsx("button",{className:"modal-header-close",onClick:h,children:e.jsx(C,{})})]}),e.jsxs("div",{className:"modal-content",children:[e.jsx("p",{children:"Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать его, то вы можете поддержать меня любой суммой и любым удобным вам способом."}),e.jsxs("div",{className:"flexible-links",children:[e.jsx(b.button,{className:"sber",onClick:()=>n(!0),whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.95,opacity:.5},children:"Сбербанк"}),e.jsx(v,{open:x,closeIcon:null,centered:!0,className:"support-modal",onCancel:i,footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-header-title",children:"Поддержать на Сбербанк"}),e.jsx("button",{className:"modal-header-close",onClick:i,children:e.jsx(C,{})})]}),e.jsxs("div",{className:"modal-content",children:[e.jsx("p",{children:"Вы можете перевести из любого банка по номеру банковской карты любую сумму."}),e.jsx(b.mark,{whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.95,opacity:.5},className:"sber",style:{marginInline:"10px"},children:"2202202357342488"}),e.jsxs("p",{style:{textAlign:"center",fontSize:"0.6875rem",opacity:"0.75",marginBlockEnd:"10px"},children:["Нажмите на номер карты, чтобы скопировать его в буфер обмена",e.jsx("br",{}),"Получатель: Михаил Денисович Ф."]})]})]})}),e.jsx(b.button,{className:"yoomoney",onClick:()=>l(!0),whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.95,opacity:.5},children:"ЮMoney"}),e.jsx(v,{open:f,closeIcon:null,centered:!0,className:"support-modal",onCancel:a,footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-header-title",children:"Поддержать на ЮMoney"}),e.jsx("button",{className:"modal-header-close",onClick:a,children:e.jsx(C,{})})]}),e.jsxs("div",{className:"modal-content",children:[e.jsx("p",{children:"Для пополнения кошелька вам нужно проделать несколько действий:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Зайдите в приложение своего банка."}),e.jsx("li",{children:'Откройте раздел "Платежи" и найдите в категориях "Электронные кошельки" или "Финансы" пункт "ЮMoney". Ну или в поиске введите "ЮMoney".'}),e.jsxs("li",{children:['Нажмите на номер кошелька снизу, он скопируется в буфер обмена. Вставьте этот номер в поле "Номер кошелька" приложения банка и введите любую сумму, а затем подтвердите перевод.',e.jsx(b.mark,{whileHover:{scale:.975,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.95,opacity:.5},className:"yoomoney",children:"410016763684808"}),e.jsx("p",{style:{textAlign:"center",fontSize:"0.625rem",opacity:"0.75",marginTop:"-5px"},children:"Нажмите, чтобы скопировать"}),e.jsxs("p",{style:{fontSize:"0.75rem",opacity:"0.75"},children:["Или пополните баланс автору с помощью"," ",e.jsx("a",{style:{color:"var(--accent)",fontWeight:700,textDecoration:"underline"},href:"https://yoomoney.ru/to/410016763684808",children:"этой ссылки"}),"."]})]})]})]})]})})]})]})]})}),e.jsx(v,{open:r,closeIcon:null,centered:!0,onCancel:u,footer:null,children:e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("div",{className:"modal-header-title",children:"Помочь с редактированием страницы"}),e.jsx("button",{className:"modal-header-close",onClick:u,children:e.jsx(C,{})})]}),e.jsxs("div",{className:"modal-content",children:[e.jsxs("p",{children:["Если вы хотите помочь с наполнением данной страницы и вы имеете какой-никакой опыт работы с"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://git-scm.com/",children:"Git"})," ","и"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/git-guides",children:"GitHub"}),", то вы можете"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/aechat/links/fork",children:"создать форк проекта сайта"})," ","и внести свои изменения с помощью"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://arduinoplus.ru/git-course/chuzhoi-repozitorii/",children:"Pull Request"}),"."]}),e.jsxs("p",{children:["Файлы контента внутри секций находятся по пути"," ",e.jsx("mark",{className:"path",children:"src/pages/sections"}),", где лежат файлы формата"," ",e.jsx("mark",{className:"file",children:".tsx"}),". Более подробно о форматировании и редактировании указано в файле"," ",e.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/aechat/links/blob/main/README.md",children:"README.md"}),"."]}),e.jsx(Z,{children:"Разделы с частыми вопросами находятся в разработке и иногда обновляются, поэтому могут быть неточности в действиях, выводах и тексте. Мнение авторов и мнение читателя могут отличаться."})]})]})})]})},D=t=>{if(!t||!t.target)return;const s=t.target;if(s.tagName==="MARK"&&!s.classList.length)return;const r=s.innerHTML.replace(/<br\s*\/?>/gi,`
`).replace(/<\/?[^>]+(>|$)/g,"");if(navigator.clipboard)navigator.clipboard.writeText(r).then(()=>{g.success("Текст скопирован в буфер обмена")}).catch(o=>{g.error("Ошибка при копировании текста в буфер обмена: "+o.message)});else{const o=document.createElement("textarea");o.value=r,Object.assign(o.style,{position:"fixed",top:"0",left:"0",width:"1px",height:"1px",padding:"0",border:"none",outline:"none",boxShadow:"none",background:"transparent"}),document.body.appendChild(o),o.focus(),o.select(),document.execCommand("copy"),g.success("Текст успешно скопирован в буфер обмена"),document.body.removeChild(o)}};g.config({top:60,duration:3,maxCount:2});const X=()=>{document.addEventListener("click",t=>{t.target instanceof HTMLElement&&(t.target.tagName==="MARK"||t.target.tagName==="CODE")&&D(t)})},re={copyToClipboard:D,enableAutoCopy:X},I=c.createContext(!1),oe=()=>c.useContext(I),ne=()=>{const t=Array.from(document.querySelectorAll(".faq-content"));let s="";if(t.forEach((r,o)=>{Array.from(r.querySelectorAll(".faq-summary")).forEach((n,f)=>{if(s=`${o+1}.${f+1}`,n.hasAttribute("id")||n.setAttribute("id",s),window.location.hash===`#${s}`){const l=n.closest("details");l&&!l.hasAttribute("data-anchor-processed")&&(l.setAttribute("open","true"),l.setAttribute("data-anchor-processed","true"),setTimeout(()=>{var u;const j=((u=document.querySelector("header"))==null?void 0:u.offsetHeight)??0,h=n.getBoundingClientRect().top+window.pageYOffset-j-14;window.scrollTo({top:h,behavior:"smooth"})},100))}})}),window.location.hash){const r=window.location.hash.slice(1);!document.getElementById(r)&&/^\d+\.\d+$/.test(r)&&(g.error("Не удалось найти пункт, который был указан в ссылке. Скорее всего он был перемещён в другое место или удалён"),history.replaceState(null,"",window.location.pathname+window.location.search))}return s},ie=({title:t,children:s,tag:r})=>{var h,u;const[o,x]=c.useState(!1),n=c.useRef(null),f=c.useRef(null);c.useEffect(()=>{if(n.current){const i=new MutationObserver(()=>{var a;x(((a=n.current)==null?void 0:a.open)||!1)});return i.observe(n.current,{attributes:!0,attributeFilter:["open"]}),()=>i.disconnect()}},[]),c.useEffect(()=>{const i=a=>{(a.ctrlKey&&a.altKey&&a.shiftKey&&a.key==="A"||a.ctrlKey&&a.altKey&&a.shiftKey&&a.key==="Ф")&&(document.querySelectorAll("details").forEach(m=>{m.setAttribute("open","true")}),g.success("Вжух, и все спойлеры раскрылись!"))};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[]),c.useEffect(()=>{f.current&&f.current.querySelectorAll("a").forEach(a=>{a.hasAttribute("target")||a.setAttribute("target","_blank"),a.host!==window.location.host&&a.setAttribute("rel","noopener noreferrer")})},[s]);const l=i=>{var m,w;const a=i.currentTarget,p=(w=(m=n.current)==null?void 0:m.querySelector(".faq-summary"))==null?void 0:w.id;a.open&&p?history.replaceState(null,"",window.location.pathname+window.location.search+`#${p}`):window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)},j=()=>{var p,m;const i=((m=(p=n.current)==null?void 0:p.querySelector(".faq-summary"))==null?void 0:m.id)??"";if(!i){g.warning("Копирование ссылок на пункты временно недоступно, дождитесь полной загрузки страницы");return}const a=`${window.location.origin}${window.location.pathname}#${i}`;navigator.clipboard.writeText(a),g.success(`Теперь вы можете поделиться пунктом ${i} с другими пользователями`)},d=((u=(h=n.current)==null?void 0:h.querySelector(".faq-summary"))==null?void 0:u.id)??"";return e.jsxs("details",{ref:n,open:o,onToggle:l,"data-tags":r,children:[e.jsxs(b.summary,{whileHover:{transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{opacity:.75},className:"faq-summary",children:[e.jsxs("div",{className:"faq-summary-left",children:[e.jsx("span",{style:{fontFamily:"JetBrains Mono, monospace"},children:o?"-":"+"}),e.jsx("h3",{children:`${d?`${d}. `:""}${t}`})]}),e.jsx(z,{title:"Скопировать ссылку на пункт",children:e.jsx("button",{onClick:j,className:"copy_button",style:{flex:"none",filter:d?"none":"saturate(0) opacity(0.25)"},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:"20px",height:"20px",children:e.jsx("path",{d:"M684-80q-48.33 0-82.17-33.83Q568-147.67 568-196q0-7.33 4.33-32l-293-171.33q-16.18 16.56-37.42 25.94Q220.67-364 196-364q-48.33 0-82.17-33.83Q80-431.67 80-480t33.83-82.17Q147.67-596 196-596q24 0 45 9.03T278-562l294.33-170q-2-7.67-3.16-15.5Q568-755.33 568-764q0-48.33 33.83-82.17Q635.67-880 684-880t82.17 33.83Q800-812.33 800-764t-33.83 82.17Q732.33-648 684-648q-23.52 0-44.09-8.83-20.58-8.84-36.58-23.84L307-513.33q2.67 7.66 3.83 16.16 1.17 8.5 1.17 16.84 0 8.33-.83 15.5-.84 7.16-2.84 14.83L604-280q16-15 36.4-23.5 20.39-8.5 43.7-8.5 48.57 0 82.23 33.83Q800-244.33 800-196t-33.83 82.17Q732.33-80 684-80Zm.02-66.67q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm-488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16ZM684-196ZM196-480Zm488-284Z"})})})})]}),e.jsx(I.Provider,{value:o,children:e.jsxs("section",{className:"faq-section",ref:f,children:[s,r&&e.jsxs("div",{className:"faq-tags",children:[e.jsx("span",{children:"Теги для поиска:"}),r.split(", ").map((i,a)=>e.jsx("mark",{className:"tag",children:i},a))]})]})})]})};export{re as C,ie as D,ae as S,te as a,ne as g,oe as u};
