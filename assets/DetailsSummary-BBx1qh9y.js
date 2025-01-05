import{g as D,a as O,k as N,b as P,s as S,d as b,e as T,r as u,u as R,j as e,f as Q,h as Z,i as E,M as y,m as $,T as F}from"./index-DAsaCoeY.js";import{s as A}from"./Footer-XvYiQ7Hx.js";function z(s){return D("MuiCircularProgress",s)}O("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const h=44,C=N`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,w=N`
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
`,B=typeof C!="string"?P`
        animation: ${C} 1.4s linear infinite;
      `:null,H=typeof w!="string"?P`
        animation: ${w} 1.4s ease-in-out infinite;
      `:null,U=s=>{const{classes:t,variant:r,color:c,disableShrink:i}=s,l={root:["root",r,`color${b(c)}`],svg:["svg"],circle:["circle",`circle${b(r)}`,i&&"circleDisableShrink"]};return Z(l,z,t)},K=S("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.root,t[r.variant],t[`color${b(r.color)}`]]}})(T(({theme:s})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:s.transitions.create("transform")}},{props:{variant:"indeterminate"},style:B||{animation:`${C} 1.4s linear infinite`}},...Object.entries(s.palette).filter(E()).map(([t])=>({props:{color:t},style:{color:(s.vars||s).palette[t].main}}))]}))),L=S("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(s,t)=>t.svg})({display:"block"}),V=S("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(s,t)=>{const{ownerState:r}=s;return[t.circle,t[`circle${b(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(T(({theme:s})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:s.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink,style:H||{animation:`${w} 1.4s ease-in-out infinite`}}]}))),J=u.forwardRef(function(t,r){const c=R({props:t,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:m=!1,size:a=40,style:p,thickness:d=3.6,value:n=0,variant:o="indeterminate",...x}=c,f={...c,color:l,disableShrink:m,size:a,thickness:d,value:n,variant:o},v=U(f),j={},k={},M={};if(o==="determinate"){const q=2*Math.PI*((h-d)/2);j.strokeDasharray=q.toFixed(3),M["aria-valuenow"]=Math.round(n),j.strokeDashoffset=`${((100-n)/100*q).toFixed(3)}px`,k.transform="rotate(-90deg)"}return e.jsx(K,{className:Q(v.root,i),style:{width:a,height:a,...k,...p},ownerState:f,ref:r,role:"progressbar",...M,...x,children:e.jsx(L,{className:v.svg,ownerState:f,viewBox:`${h/2} ${h/2} ${h} ${h}`,children:e.jsx(V,{className:v.circle,style:j,ownerState:f,cx:h,cy:h,r:(h-d)/2,fill:"none",strokeWidth:d})})})}),Y=()=>{const[s,t]=u.useState(!1),[r,c]=u.useState(!1),[i,l]=u.useState(!1),[m,a]=u.useState(!1),p=()=>{t(!0)},d=()=>{c(!0)},n=()=>{t(!1)},o=()=>{c(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"support",children:[e.jsx("button",{className:"support-button support-button-donut",onClick:p,children:"Поддержать сайт"}),e.jsx("button",{className:"support-button support-button-share",onClick:d,children:"Поделиться"})]}),e.jsxs(y,{open:s,title:"Поддержать автора и сайт",closeIcon:null,centered:!0,onCancel:n,footer:null,children:[e.jsx("p",{className:"support-modal-text",children:"Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать его, то вы можете поддержать меня любой суммой и любым удобным вам способом."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"},children:[e.jsx($.button,{className:"support-button support-button-sber",onClick:()=>l(!0),whileHover:{scale:1.075,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},children:"Сбербанк"})," ",e.jsxs(y,{open:i,closeIcon:null,centered:!0,className:"support-modal",title:"Поддержать на Сбербанк автора",onCancel:()=>l(!1),footer:null,children:[e.jsx("p",{children:"Вы можете перевести из любого банка по номеру банковской карты любую сумму."}),e.jsx("mark",{style:{cursor:"pointer"},className:"copy-cardnumber copy-cardnumber-sber",children:"2202202357342488"}),e.jsxs("p",{style:{textAlign:"center",fontSize:"10px",opacity:"0.75",marginTop:"-5px"},children:["Нажмите, чтобы скопировать",e.jsx("br",{}),"Получатель: Михаил Денисович Ф."]})]}),e.jsx($.button,{className:"support-button support-button-yoomoney",onClick:()=>a(!0),whileHover:{scale:1.075,transition:{duration:.5,ease:[.075,.82,.165,1]}},whileTap:{scale:.9,opacity:.5},children:"ЮMoney"}),e.jsx(y,{open:m,closeIcon:null,centered:!0,className:"support-modal",title:"Поддержать на ЮMoney автора",onCancel:()=>a(!1),footer:null,children:e.jsxs("p",{children:["Для пополнения кошелька вам нужно проделать несколько действий:",e.jsxs("ul",{children:[e.jsx("li",{children:"Зайдите в приложение своего банка."}),e.jsx("li",{children:'Откройте раздел "Платежи" и найдите в категориях "Электронные кошельки" или "Финансы" пункт "ЮMoney". Ну или в поиске введите "ЮMoney".'}),e.jsxs("li",{children:['Нажмите на номер кошелька снизу, он скопируется в буфер обмена. Вставьте этот номер в поле "Номер кошелька" приложения банка и введите любую сумму, а затем подтвердите перевод.',e.jsx("mark",{style:{cursor:"pointer"},className:"copy-cardnumber copy-cardnumber-yoomoney",children:"410016763684808"}),e.jsx("p",{style:{textAlign:"center",fontSize:"10px",opacity:"0.75",marginTop:"-5px"},children:"Нажмите, чтобы скопировать"}),e.jsxs("p",{style:{fontSize:"12px",opacity:"0.75"},children:["Или пополните баланс автору с помощью"," ",e.jsx("a",{style:{color:"var(--accent)",fontWeight:700,textDecoration:"underline"},href:"https://yoomoney.ru/to/410016763684808",children:"этой ссылки"}),"."]})]})]})]})})]})]}),e.jsx(y,{open:r,closeIcon:null,centered:!0,onCancel:o,footer:null,children:e.jsx("div",{children:'Модуль "поделиться" пока ещё не разработан'})})]})},I=u.createContext(!1),_=()=>u.useContext(I);let g=!1;const X=()=>{g=!0},ee=()=>{const s=Array.from(document.querySelectorAll(".faq-content"));let t="";return s.forEach((r,c)=>{Array.from(r.querySelectorAll(".faq-summary")).forEach((l,m)=>{if(t=`${c+1}.${m+1}`,l.hasAttribute("id")||l.setAttribute("id",t),window.location.hash===`#${t}`){const a=l.closest("details");a&&!a.hasAttribute("data-anchor-processed")&&(a.setAttribute("open","true"),a.setAttribute("data-anchor-processed","true"),setTimeout(()=>{var o;const p=((o=document.querySelector("header"))==null?void 0:o.offsetHeight)??0,n=l.getBoundingClientRect().top+window.pageYOffset-p-24;window.scrollTo({top:n,behavior:"smooth"})},100))}})}),t},te=({title:s,children:t})=>{var p,d;const[r,c]=u.useState(!1),i=u.useRef(null);u.useEffect(()=>{if(i.current){const n=new MutationObserver(()=>{var o;c(((o=i.current)==null?void 0:o.open)||!1)});return n.observe(i.current,{attributes:!0,attributeFilter:["open"]}),()=>n.disconnect()}},[]);const l=n=>{const o=n.currentTarget;o.open&&setTimeout(()=>{window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search)},5e3),o.hasAttribute("data-anchor-processed")&&o.removeAttribute("data-anchor-processed")},m=()=>{var x,f;if(!g){A.warning("Копирование ссылок на пункты временно недоступно, дождитесь полной загрузки страницы");return}const n=((f=(x=i.current)==null?void 0:x.querySelector(".faq-summary"))==null?void 0:f.id)??"",o=`${window.location.origin}${window.location.pathname}#${n}`;navigator.clipboard.writeText(o),A.success(`Ссылка на пункт ${n} скопирована в буфер обмена`)},a=((d=(p=i.current)==null?void 0:p.querySelector(".faq-summary"))==null?void 0:d.id)??"";return e.jsxs("details",{ref:i,open:r,onToggle:l,children:[e.jsxs("summary",{className:"faq-summary",children:[e.jsxs("div",{className:"faq-summary-left",children:[e.jsx("span",{style:{fontFamily:"JetBrains Mono, monospace"},children:r?"-":"+"}),e.jsx("h3",{children:`${a?`${a}. `:""}${s}`})]}),e.jsx(F,{title:"Скопировать ссылку на пункт",children:e.jsx("button",{onClick:m,className:"copy_button",style:{width:"20px",height:"20px",flex:"none",filter:g?"none":"saturate(0%)",opacity:g?1:.5},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:"20px",height:"20px",children:e.jsx("path",{d:"M684-80q-48.33 0-82.17-33.83Q568-147.67 568-196q0-7.33 4.33-32l-293-171.33q-16.18 16.56-37.42 25.94Q220.67-364 196-364q-48.33 0-82.17-33.83Q80-431.67 80-480t33.83-82.17Q147.67-596 196-596q24 0 45 9.03T278-562l294.33-170q-2-7.67-3.16-15.5Q568-755.33 568-764q0-48.33 33.83-82.17Q635.67-880 684-880t82.17 33.83Q800-812.33 800-764t-33.83 82.17Q732.33-648 684-648q-23.52 0-44.09-8.83-20.58-8.84-36.58-23.84L307-513.33q2.67 7.66 3.83 16.16 1.17 8.5 1.17 16.84 0 8.33-.83 15.5-.84 7.16-2.84 14.83L604-280q16-15 36.4-23.5 20.39-8.5 43.7-8.5 48.57 0 82.23 33.83Q800-244.33 800-196t-33.83 82.17Q732.33-80 684-80Zm.02-66.67q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm-488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16ZM684-196ZM196-480Zm488-284Z"})})})})]}),e.jsx(I.Provider,{value:r,children:e.jsx("section",{className:"faq-section",children:t})})]})};export{J as C,te as D,Y as S,X as e,ee as g,_ as u};