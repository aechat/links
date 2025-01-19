import{j as s}from"./index-BhpFWGwc.js";import{G as b}from"./GithubUpdateInfo-BsMTVCLN.js";import{A as e}from"./Footer-Cbc3OGfx.js";import{I as o}from"./ContentFigure-S-x6OjoZ.js";import{D as a}from"./DetailsSummary-D3XCrMka.js";import{C as r}from"./OperatingSystemFilter-Dnr2fCny.js";import"./Apple-D9k_30HM.js";const p=()=>s.jsxs("div",{className:"faq-content",children:[s.jsx(b,{filePath:"src/pages/sections/psfaq/Errors.tsx"}),s.jsx(a,{title:"Рабочий диск заполнен или Scratch Disk Full",children:s.jsx("p",{})}),s.jsxs(a,{title:'"Для доступа к функциям на базе технологии Firefly в приложениях Adobe у вас должны быть установлены подлинные приложения Adobe", "Проверьте своё подключение к интернету и повторите попытку" или "Could not complete your request because of a program error"',children:[s.jsx("p",{children:'Вы пытаетесь использовать функцию генеративной заливки для создания или коррекции изображения. На "народных" версиях функции, которые используют Adobe Firefly недоступны, так как у вас отсутствует подписка на Creative Cloud.'}),s.jsxs("p",{children:["Решения два: либо вы оформляете подписку на Creative Cloud, либо заменяйте Firefly на интеграцию ",s.jsx("mark",{className:"app",children:"Stable Diffusion"})," в"," ",s.jsx("mark",{className:"app",children:"Photoshop"})," через плагин"," ",s.jsx("a",{href:"https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases",children:"Auto-Photoshop-StableDiffusion"}),"."]}),s.jsxs("p",{children:["Если вы пытаетесь использовать инструмент ",s.jsx("mark",{className:"ui",children:"Remove Tool"})," ","и у вас выскакивает ошибка"," ",s.jsx("mark",{children:"Could not complete your request because of a program error"}),", то вам нужно переключить режим заливки на ",s.jsx("mark",{className:"ui",children:"Generative AI Off"}),"."]}),s.jsx(o,{styleClass:"figure_windows-light",imgSrc:"images/photoshop/disable_generative_ai_removetool.png",imgTitle:"Отключаем генеративную заливку при использовании инструмента Remove Tool",caption:"Photoshop"})]}),s.jsxs(a,{title:'"This unlicensed Adobe app is not genuine and will be disabled soon" или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?',tag:"слетела лицензия, красное окно, не запускается, впн, файл хостс, блокировка доступа в интернет",children:[s.jsx("p",{children:"Программа от Adobe решила достучаться в интернет. Причин может быть три."}),s.jsxs("ul",{children:[s.jsxs("li",{children:["Вы забыли отключить VPN. С наплывом блокировок различных ресурсов на территории СНГ пользователи стали часто пользоваться обходами, да вот забыли что не все VPN-клиенты корректно работают с правилами в ",s.jsx("mark",{className:"file",children:"hosts"})," ","и системном брандмауэре. Соответственно клиентами они игнорируются и пускают доступ к интернету программам."]}),s.jsxs("li",{children:["Если вы не пользуетесь VPN, то возможно, что во время установки программ от Adobe что-то не прописалось в файл ",s.jsx("mark",{className:"file",children:"hosts"})," или кто-то удалил оттуда строки."]}),s.jsx("li",{children:"Ваш антивирус съел какие-то файлы для корректной подмены активации, ссылаясь на то, что это якобы вирус. Для устранения этого - отключите антивирус или внесите папку с программами Adobe в белый лист антивируса, а затем переустановите программу."})]}),s.jsx(o,{styleClass:"figure_windows-light",imgSrc:"images/adobe_the_unlicensed_app.png",imgTitle:"Сообщение об отсутствии лицензии",caption:"Adobe"}),s.jsx(r,{windowsContent:s.jsxs("div",{children:[s.jsxs("p",{children:["Если вы хотите использовать одновременно VPN и"," ",s.jsx("mark",{className:"app",children:"Photoshop"}),", то изучите настройки вашего VPN-клиента. Возможно, там есть пункт про раздельное туннелирование или список исключений, не позволяющий прогонять трафик программы через VPN."]}),s.jsxs("p",{children:["Если вы не используете VPN на устройстве с Windows, то попробуйте отредактировать файл ",s.jsx("mark",{className:"file",children:"hosts"}),". Для этого вам нужно перейти в"," ",s.jsx("mark",{className:"path",children:"C:\\Windows\\System32\\drivers\\etc"}),", скопировать файл ",s.jsx("mark",{className:"path",children:"hosts"})," в любое удобное место, открыть любой текстовый редактор (например ",s.jsx("mark",{className:"app",children:"Notepad++"})," ","или ",s.jsx("mark",{className:"app",children:"VS Code"}),") и внести строки чуть ниже в конец файла. Затем сохраните отредактированный файл и перенесите его обратно в"," ",s.jsx("mark",{className:"path",children:"C:\\Windows\\System32\\drivers\\etc\\hosts"})," с заменой. Также попробуйте скрипт"," ",s.jsx("a",{href:"https://github.com/ph33nx/WinMasterBlocker",children:"WinMasterBlocker"})," ","для автоматического внесения правил блокировки доступа в интернет в брандмауэр."]}),s.jsx(e,{children:"Для изменения системных файлов требуются права администратора."}),s.jsxs("code",{children:["0.0.0.0 ic.adobe.io",s.jsx("br",{}),"0.0.0.0 cc-api-data.adobe.io",s.jsx("br",{}),"0.0.0.0 genuine.adobe.com",s.jsx("br",{}),"0.0.0.0 assets.adobedtm.",s.jsx("br",{}),"0.0.0.0 cc-api-data.adobe.io",s.jsx("br",{}),"0.0.0.0 ic.adobe.io",s.jsx("br",{}),"0.0.0.0 lm.licenses.adobe.com",s.jsx("br",{}),"0.0.0.0 lmlicenses.wip4.adobe.com",s.jsx("br",{}),"0.0.0.0 lm-prd-da1.licenses.adobe.com",s.jsx("br",{}),"0.0.0.0 activate.adobe.com",s.jsx("br",{}),"0.0.0.0 activate.wip4.adobe.com",s.jsx("br",{}),"0.0.0.0 practivate.adobe.com",s.jsx("br",{}),"0.0.0.0 practivate-da1.adobe.com",s.jsx("br",{}),"0.0.0.0 na1r.services.adobe.com",s.jsx("br",{}),"0.0.0.0 hlrcv.stage.adobe.com",s.jsx("br",{}),"0.0.0.0 uds.licenses.adobe.com",s.jsx("br",{}),"0.0.0.0 licenses.adobe.com",s.jsx("br",{}),"0.0.0.0 license.adobe.com",s.jsx("br",{}),"0.0.0.0 helpexamples.com",s.jsx("br",{}),"0.0.0.0 activate-sea.adobe.com",s.jsx("br",{}),"0.0.0.0 activate-sjc0.adobe.com",s.jsx("br",{}),"0.0.0.0 ereg.adobe.com",s.jsx("br",{}),"0.0.0.0 activate.wip3.adobe.com",s.jsx("br",{}),"0.0.0.0 wip3.adobe.com",s.jsx("br",{}),"0.0.0.0 ereg.wip3.adobe.com",s.jsx("br",{}),"0.0.0.0 wwis-dubc1-vip60.adobe.com ",s.jsx("br",{}),"0.0.0.0 prod.adobegenuine.com",s.jsx("br",{}),"0.0.0.0 gocart-web-prod-ue1-alb-1461435473.us-east-1.elb.amazonaws.com",s.jsx("br",{}),"0.0.0.0 dyzt55url8.adobe.io",s.jsx("br",{}),"0.0.0.0 b5kbg2ggog.adobe.io",s.jsx("br",{}),"0.0.0.0 5zgzzv92gn.adobe.io",s.jsx("br",{}),"0.0.0.0 0mo5a70cqa.adobe.io",s.jsx("br",{}),"0.0.0.0 pojvrj7ho5.adobe.io",s.jsx("br",{}),"0.0.0.0 i7pq6fgbsl.adobe.io",s.jsx("br",{}),"0.0.0.0 ph0f2h2csf.adobe.io",s.jsx("br",{}),"0.0.0.0 r3zj0yju1q.adobe.io",s.jsx("br",{}),"0.0.0.0 9ngulmtgqi.adobe.io",s.jsx("br",{}),"0.0.0.0 guzg78logz.adobe.io",s.jsx("br",{}),"0.0.0.0 2ftem87osk.adobe.io",s.jsx("br",{}),"0.0.0.0 1b9khekel6.adobe.io",s.jsx("br",{}),"0.0.0.0 3d3wqt96ht.adobe.io",s.jsx("br",{}),"0.0.0.0 23ynjitwt5.adobe.io",s.jsx("br",{}),"0.0.0.0 4vzokhpsbs.adobe.io",s.jsx("br",{}),"0.0.0.0 3ca52znvmj.adobe.io",s.jsx("br",{}),"0.0.0.0 r5hacgq5w6.adobe.io",s.jsx("br",{}),"0.0.0.0 gw8gfjbs05.adobe.io",s.jsx("br",{}),"0.0.0.0 lre1kgz2u4.adobe.io",s.jsx("br",{}),"0.0.0.0 ij0gdyrfka.adobe.io",s.jsx("br",{}),"0.0.0.0 8ncdzpmmrg.adobe.io",s.jsx("br",{}),"0.0.0.0 7sj9n87sls.adobe.io",s.jsx("br",{}),"0.0.0.0 7m31guub0q.adobe.io",s.jsx("br",{}),"0.0.0.0 7g2gzgk9g1.adobe.io",s.jsx("br",{}),"0.0.0.0 cd536oo20y.adobe.io",s.jsx("br",{}),"0.0.0.0 dxyeyf6ecy.adobe.io",s.jsx("br",{}),"0.0.0.0 jc95y2v12r.adobe.io",s.jsx("br",{}),"0.0.0.0 1hzopx6nz7.adobe.io",s.jsx("br",{}),"0.0.0.0 m59b4msyph.adobe.io",s.jsx("br",{}),"0.0.0.0 69tu0xswvq.adobe.io",s.jsx("br",{}),"0.0.0.0 vajcbj9qgq.adobe.io",s.jsx("br",{}),"0.0.0.0 p7uxzbht8h.adobe.io",s.jsx("br",{}),"0.0.0.0 vcorzsld2a.adobe.io",s.jsx("br",{}),"0.0.0.0 p0bjuoe16a.adobe.io",s.jsx("br",{}),"0.0.0.0 fqaq3pq1o9.adobe.io",s.jsx("br",{}),"0.0.0.0 aoorovjtha.adobe.io",s.jsx("br",{}),"0.0.0.0 pv256ds6c99.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2l4573ukh.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv24v41zibm.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2nn9r0j2r.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2yt8sqmh0.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv218qmzox6.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv218qmzox6.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2b0yc07ls.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2nn9r0j2r.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2yt8sqmh0.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv256ds6c99.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2zp87w2eo.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2ys4tjt9x.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2ska86hnt.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv24b15c1z0.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv256ds6c99.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2ska86hnt.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2b0yc07ls.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2l4573ukh.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv24v41zibm.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2ska86hnt.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2l4573ukh.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv24v41zibm.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2zp87w2eo.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2ys4tjt9x.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2ys4tjt9x.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2fcqvzl1r.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2fcqvzl1r.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv24b15c1z0.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv24b15c1z0.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2bqhsp36w.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2b0yc07ls.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv218qmzox6.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2yt8sqmh0.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2fcqvzl1r.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2bqhsp36w.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 pv2nn9r0j2r.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 cv2zp87w2eo.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 iv2bqhsp36w.prod.cloud.adobe.io",s.jsx("br",{}),"0.0.0.0 yj8yx3y8zo.adobestats.io",s.jsx("br",{}),"0.0.0.0 mpsige2va9.adobestats.io",s.jsx("br",{}),"0.0.0.0 ujqx8lhpz4.adobestats.io",s.jsx("br",{}),"0.0.0.0 y2r8jzsv4p.adobestats.io",s.jsx("br",{}),"0.0.0.0 eq7dbze88m.adobestats.io",s.jsx("br",{}),"0.0.0.0 q9hjwppxeq.adobestats.io",s.jsx("br",{}),"0.0.0.0 skg7pqn0al.adobestats.io",s.jsx("br",{}),"0.0.0.0 9iay914wzy.adobestats.io",s.jsx("br",{}),"0.0.0.0 yuzuoqo0il.adobestats.io",s.jsx("br",{}),"0.0.0.0 2o3c6rbyfr.adobestats.io",s.jsx("br",{}),"0.0.0.0 vicsj37lhf.adobestats.io",s.jsx("br",{}),"0.0.0.0 nhc73ypmli.adobestats.io",s.jsx("br",{}),"0.0.0.0 oxiz2n3i4v.adobestats.io",s.jsx("br",{}),"0.0.0.0 2qjz50z5lf.adobestats.io",s.jsx("br",{}),"0.0.0.0 i2x2ius9o5.adobestats.io",s.jsx("br",{}),"0.0.0.0 lnwbupw1s7.adobestats.io",s.jsx("br",{}),"0.0.0.0 n746qg9j4i.adobestats.io",s.jsx("br",{}),"0.0.0.0 2621x1nzeq.adobestats.io",s.jsx("br",{}),"0.0.0.0 r9r6oomgms.adobestats.io",s.jsx("br",{}),"0.0.0.0 99pfl4vazm.adobestats.io",s.jsx("br",{}),"0.0.0.0 zekdqanici.adobestats.io",s.jsx("br",{}),"0.0.0.0 g9cli80sqp.adobestats.io",s.jsx("br",{}),"0.0.0.0 dyv9axahup.adobestats.io",s.jsx("br",{}),"0.0.0.0 17ov1u3gio.adobestats.io",s.jsx("br",{}),"0.0.0.0 7l4xxjhvkt.adobestats.io",s.jsx("br",{}),"0.0.0.0 wcxqmuxd4z.adobestats.io",s.jsx("br",{}),"0.0.0.0 l558s6jwzy.adobestats.io",s.jsx("br",{}),"0.0.0.0 85n85uoa1h.adobestats.io",s.jsx("br",{}),"0.0.0.0 zrao5tdh1t.adobestats.io",s.jsx("br",{}),"0.0.0.0 eftcpaiu36.adobestats.io",s.jsx("br",{}),"0.0.0.0 2qj10f8rdg.adobestats.io",s.jsx("br",{}),"0.0.0.0 ffs3xik41x.adobestats.io",s.jsx("br",{}),"0.0.0.0 g3y09mbaam.adobestats.io",s.jsx("br",{}),"0.0.0.0 x880ulw3h0.adobestats.io",s.jsx("br",{}),"0.0.0.0 jaircqa037.adobestats.io",s.jsx("br",{}),"0.0.0.0 ppn4fq68w7.adobestats.io",s.jsx("br",{}),"0.0.0.0 1ei1f4k9yk.adobestats.io",s.jsx("br",{}),"0.0.0.0 6j0onv1tde.adobestats.io",s.jsx("br",{}),"0.0.0.0 pljm140ld1.adobestats.io",s.jsx("br",{}),"0.0.0.0 50sxgwgngu.adobestats.io",s.jsx("br",{}),"0.0.0.0 u31z50xvp9.adobestats.io",s.jsx("br",{}),"0.0.0.0 2dhh9vsp39.adobestats.io",s.jsx("br",{}),"0.0.0.0 rb0u8l34kr.adobestats.io",s.jsx("br",{}),"0.0.0.0 3odrrlydxt.adobestats.io",s.jsx("br",{}),"0.0.0.0 3u6k9as4bj.adobestats.io",s.jsx("br",{}),"0.0.0.0 curbpindd3.adobestats.io",s.jsx("br",{}),"0.0.0.0 4dviy9tb3o.adobestats.io",s.jsx("br",{}),"0.0.0.0 yb6j6g0r1n.adobestats.io",s.jsx("br",{}),"0.0.0.0 0bj2epfqn1.adobestats.io",s.jsx("br",{}),"0.0.0.0 ura7zj55r9.adobestats.io",s.jsx("br",{}),"0.0.0.0 xesnl0ss94.adobestats.io",s.jsx("br",{}),"0.0.0.0 xbd20b9wqa.adobestats.io",s.jsx("br",{}),"0.0.0.0 cr2fouxnpm.adobestats.io",s.jsx("br",{}),"0.0.0.0 zmg3v61bbr.adobestats.io",s.jsx("br",{}),"0.0.0.0 bk7y1gneyk.adobestats.io",s.jsx("br",{}),"0.0.0.0 dx0nvmv4hz.adobestats.io",s.jsx("br",{}),"0.0.0.0 eyiu19jd5w.adobestats.io",s.jsx("br",{}),"0.0.0.0 561r5c3bz1.adobestats.io",s.jsx("br",{}),"0.0.0.0 54cu4v5twu.adobestats.io",s.jsx("br",{}),"0.0.0.0 6eidhihhci.adobestats.io",s.jsx("br",{}),"0.0.0.0 31q40256l4.adobestats.io",s.jsx("br",{}),"0.0.0.0 bs2yhuojzm.adobestats.io",s.jsx("br",{}),"0.0.0.0 p50zgina3e.adobestats.io",s.jsx("br",{}),"0.0.0.0 yri0bsu0ak.adobestats.io",s.jsx("br",{}),"0.0.0.0 zu8yy3jkaz.adobestats.io",s.jsx("br",{}),"0.0.0.0 m59cps6x3n.adobestats.io",s.jsx("br",{}),"0.0.0.0 kgj0gsg3cf.adobestats.io",s.jsx("br",{}),"0.0.0.0 uf0onoepoe.adobestats.io",s.jsx("br",{}),"0.0.0.0 28t4psttw7.adobestats.io",s.jsx("br",{}),"0.0.0.0 hjs70w1pdi.adobestats.io",s.jsx("br",{}),"0.0.0.0 klw4np5a1x.adobestats.io",s.jsx("br",{}),"0.0.0.0 lz2x4rks1u.adobestats.io",s.jsx("br",{}),"0.0.0.0 pc6sk9bygv.adobestats.io",s.jsx("br",{}),"0.0.0.0 t9phy8ywkd.adobestats.io",s.jsx("br",{}),"0.0.0.0 dfnm3epsb7.adobestats.io",s.jsx("br",{}),"0.0.0.0 5ky0dijg73.adobestats.io",s.jsx("br",{}),"0.0.0.0 124hzdrtoi.adobestats.io",s.jsx("br",{}),"0.0.0.0 69rxfbohle.adobestats.io",s.jsx("br",{}),"0.0.0.0 9uffo0j6wj.adobestats.io",s.jsx("br",{}),"0.0.0.0 kwi5n2ruax.adobestats.io",s.jsx("br",{}),"0.0.0.0 nh8wam2qd9.adobestats.io",s.jsx("br",{}),"0.0.0.0 rm3xrk61n1.adobestats.io",s.jsx("br",{}),"0.0.0.0 rmnia8d0tr.adobestats.io",s.jsx("br",{}),"0.0.0.0 vrz9w7o7yv.adobestats.io",s.jsx("br",{}),"0.0.0.0 5m62o8ud26.adobestats.io",s.jsx("br",{}),"0.0.0.0 esx6aswt5e.adobestats.io",s.jsx("br",{}),"0.0.0.0 hwfqhlenbg.adobestats.io",s.jsx("br",{}),"0.0.0.0 je5ufnklzs.adobestats.io",s.jsx("br",{}),"0.0.0.0 jmx50quqz0.adobestats.io",s.jsx("br",{}),"0.0.0.0 jsxfc5yij1.adobestats.io",s.jsx("br",{}),"0.0.0.0 vfsjlgw02v.adobestats.io",s.jsx("br",{}),"0.0.0.0 yshuhythub.adobestats.io",s.jsx("br",{}),"0.0.0.0 zrbzvc9mel.adobestats.io",s.jsx("br",{}),"0.0.0.0 rj669kv2lc.adobestats.io",s.jsx("br",{}),"0.0.0.0 agxqobl83f.adobestats.io",s.jsx("br",{}),"0.0.0.0 zr60t8ia88.adobestats.io",s.jsx("br",{}),"0.0.0.0 a1y2b7wsna.adobestats.io",s.jsx("br",{}),"0.0.0.0 hf6s5jdv95.adobestats.io",s.jsx("br",{}),"0.0.0.0 tprqy2lgua.adobestats.io",s.jsx("br",{}),"0.0.0.0 c474kdh1ky.adobestats.io",s.jsx("br",{}),"0.0.0.0 d101mw99xq.adobestats.io",s.jsx("br",{}),"0.0.0.0 oh41yzugiz.adobestats.io",s.jsx("br",{}),"0.0.0.0 jwonv590qs.adobestats.io",s.jsx("br",{}),"0.0.0.0 7k1t5im229.adobestats.io",s.jsx("br",{}),"0.0.0.0 3xuuprv9lg.adobestats.io",s.jsx("br",{}),"0.0.0.0 9wm8di7ifk.adobestats.io",s.jsx("br",{}),"0.0.0.0 ebvf40engd.adobestats.io",s.jsx("br",{}),"0.0.0.0 hq0mnwz735.adobestats.io",s.jsx("br",{}),"0.0.0.0 j134yk6hv5.adobestats.io",s.jsx("br",{}),"0.0.0.0 j14y4uzge7.adobestats.io",s.jsx("br",{}),"0.0.0.0 jye4987hyr.adobestats.io",s.jsx("br",{}),"0.0.0.0 kvi8uopy6f.adobestats.io",s.jsx("br",{}),"0.0.0.0 lv5yrjxh6i.adobestats.io",s.jsx("br",{}),"0.0.0.0 m95pt874uw.adobestats.io",s.jsx("br",{}),"0.0.0.0 pdb7v5ul5q.adobestats.io",s.jsx("br",{}),"0.0.0.0 px8vklwioh.adobestats.io",s.jsx("br",{}),"0.0.0.0 qmyqpp3xs3.adobestats.io",s.jsx("br",{}),"0.0.0.0 r1lqxul5sr.adobestats.io",s.jsx("br",{}),"0.0.0.0 tf3an24xls.adobestats.io",s.jsx("br",{}),"0.0.0.0 tyradj47rp.adobestats.io",s.jsx("br",{}),"0.0.0.0 vp7ih9xoxg.adobestats.io",s.jsx("br",{}),"0.0.0.0 x5cupsunjc.adobestats.io",s.jsx("br",{}),"0.0.0.0 ll8xjr580v.adobestats.io",s.jsx("br",{}),"0.0.0.0 n0yaid7q47.adobestats.io",s.jsx("br",{}),"0.0.0.0 nhs5jfxg10.adobestats.io",s.jsx("br",{}),"0.0.0.0 wz8kjkd9gc.adobestats.io",s.jsx("br",{}),"0.0.0.0 zfzx6hae4g.adobestats.io",s.jsx("br",{}),"0.0.0.0 6y6ozj4sot.adobestats.io",s.jsx("br",{}),"0.0.0.0 qxc5z5sqkv.adobestats.io",s.jsx("br",{}),"0.0.0.0 1qwiekvkux.adobestats.io",s.jsx("br",{})]})]}),macContent:s.jsxs("div",{children:[s.jsxs("p",{children:["Для блокировки доступа определённым программам к интернету на устройствах с macOS можно воспользоваться программой"," ",s.jsx("a",{href:"https://radiosilenceapp.com/",children:"Radio Silence"}),". После установки и активации этой программы перейдите в вкладку"," ",s.jsx("mark",{className:"ui",children:"Network Monitor"}),". В этой же вкладке запретите программам от Adobe, которые лезут в сеть, доступ в интернет, нажав на кнопку ",s.jsx("mark",{className:"ui",children:"Block"}),"."]}),s.jsx(o,{styleClass:"figure_macos-dark",imgSrc:"/images/network_radio_silence.png",imgTitle:"Блокируем доступ в интернет программам на примере Premiere Pro",caption:"Radio Silence"}),s.jsxs("p",{children:["После проделанных действий ",s.jsx("mark",{className:"app",children:"Photoshop"})," и остальные программы от Adobe не должен стучаться в сеть и выдавать ошибку об отсутствии лицензии. Ниже показано, как в итоге примерно должна выглядеть у вас вкладка ",s.jsx("mark",{className:"ui",children:"Firewall"})," после отлова процессов Adobe, лезущие в интернет."]}),s.jsx(o,{styleClass:"figure_macos-dark",imgSrc:"/images/firewall_radio_silence.png",imgTitle:"Окно Firewall после блокировки доступа в интернет программам",caption:"Radio Silence"})]})})]})]});export{p as default};
