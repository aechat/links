import{j as e}from"./index-BA3yzTQM.js";import{G as a}from"./GithubUpdateInfo-DlrJq5G2.js";import{b as r,A as l}from"./Footer-BNLkX1HL.js";import{D as i}from"./DetailsSummary-NB9B6o2F.js";import{I as s,V as c}from"./ContentFigure-CecnX6Ea.js";import{C as n}from"./OperatingSystemFilter-DzXPVg57.js";import{H as d}from"./HostsAdobe-CcZdLt3F.js";import"./Apple-D5kz38VM.js";const g=()=>e.jsxs("div",{className:"faq-content",children:[e.jsx(a,{filePath:"src/pages/sections/prfaq/Errors.tsx"}),e.jsxs(i,{title:"This effect requires GPU Acceleration при применении эффекта",children:[e.jsxs("p",{children:["Скорее всего у вас отключено ускорение на основе видеокарты в настройках проекта. Некоторые эффекты могут напрочь отказывать работать на"," ",e.jsx("mark",{className:"ui",children:"Mercury Playback Engine Software Only"})," и требовать ускорение на видеокарте."]}),e.jsxs("p",{children:["Для настройки типа рендеринга перейдите в"," ",e.jsx("mark",{className:"ui",children:"File > Project Settings > General"})," и в пункте"," ",e.jsx("mark",{className:"ui",children:"Renderer"})," установите значение"," ",e.jsx("mark",{className:"ui",children:"Mercury Playback Engine GPU Acceleration"}),". Если у вас отсутствует какой-либо пункт для ускорения на видеокарте, то попробуйте обновить драйвера на ваш видеочип."]}),e.jsx(s,{styleClass:"figure_windows-dark",imgSrc:"images/premierepro/set_render_on_gpu.png",imgTitle:"Установка рендеринга на GPU",caption:"Premiere Pro"}),e.jsx("p",{children:"В редких случаях эффект, требующий GPU-ускорения может конфликтовать с остальными эффектами, применённые на клипе и выдавать похожую ошибку. Для этого отключите все эффекты, а затем выявляйте виновника торжества с помощью постепенного включения тех или иных эффектов."})]}),e.jsxs(i,{title:"Media Offline или медиаданные в автономном режиме",children:[e.jsx("p",{children:"Эта ошибка часто возникает, если вы удалили исходники из диска, перенесли их или открыли чужой проект, не распаковав его из архива полностью. Оно может появляться в разных воплощениях - в качестве окна о потерянных исходниках при запуске проекта или в качестве плейсхолдера с красной заливкой."}),e.jsx(s,{styleClass:"figure_windows-dark",imgSrc:"images/premierepro/медиаданные_в_автономном_режиме.png",imgTitle:"Медиаданные в авнономном режиме",caption:"Premiere Pro"}),e.jsxs("p",{children:['Чтобы переподключить "потеряшек", перейдите в'," ",e.jsx("mark",{className:"ui",children:"File"})," и выберите пункт"," ",e.jsx("mark",{className:"ui",children:"Link Media"}),". В открывшемся окне вы увидите список потерявшихся исходников. Вы можете выделить нужный и указать ему путь, нажав на"," ",e.jsx("mark",{className:"ui",children:"Locate"}),"."]}),e.jsxs(r,{children:["Нажав на кнопку ",e.jsx("mark",{className:"ui",children:"Search"}),' в окне для указания пути, программа попытается найти все потерянные файлы во вложенных папках текущего пути. Если вы не помните где потеряли ваши файлы, откройте корень вашего диска, нажмите на кнопку поиска и подождите некоторое время. Также если вы укажете путь только одному файлу, рядом с которым лежат такие же "потеряшки", то и остальные исходники вместе с ним подключатся автоматически.']}),e.jsx(s,{styleClass:"figure_windows-dark",imgSrc:"images/premierepro/missing_media.png",imgTitle:"Отсутствующие медиафайлы",caption:"Media Offline"})]}),e.jsxs(i,{title:'Вылезло "System Compatibility Report" при запуске Premiere Pro',children:[e.jsxs(r,{children:["Когда вы видите это окно при запуске - не надо паниковать. Это не является ошибкой или серьёзной проблемой, но исправлять причину её появления нам в любом случае нужно. Запустить программу можно как обычно, нажав на"," ",e.jsx("mark",{className:"ui",children:"Continue with known issues"}),"."]}),e.jsx(s,{styleClass:"figure_windows-dark",imgSrc:"images/premierepro/system_compatibility_report.png",imgTitle:"Предупреждение о несовместимости оборудования с программой",caption:"System Compatibility Report"}),e.jsx("p",{children:"В данном окне обычно пишутся возможные проблемы с использованием программы, например устаревшие драйвера или плагины с каким-то критическим багом."}),e.jsx("p",{children:"Если вы в курсе о причинах некой несовместимости и вы согласны работать дальше с некими ограничениями, лишь бы не видеть это окно при запуске - вы можете отключить это окно, программа даёт это сделать."}),e.jsxs("p",{children:["Для отключения этого окна перейдите в настройки программы:"," ",e.jsx("mark",{className:"ui",children:"Edit > Preferences > General"}),". Затем в этом разделе отключите галочку с пункта"," ",e.jsx("mark",{className:"ui",children:"Show System Compatibility Issues"}),"."]}),e.jsx(s,{styleClass:"figure_windows-dark",imgSrc:"images/premierepro/show_system_compatibility_issues.png",imgTitle:"Отключаем предупреждения о несовместимости оборудования с программой",caption:"Preferences"})]}),e.jsxs(i,{title:"Ошибка при запуске приложения 0xc0000142",children:[e.jsxs("p",{children:["Вы пытаетесь запустить приложение на устройстве с процессором без поддержки инструкций AVX2. В"," ",e.jsx("a",{href:"https://helpx.adobe.com/ru/after-effects/system-requirements.html",children:"нынешних системных требованиях для After Effects"})," ","указано, что требуется процессор от Intel минимум 6 поколения, например, i7-6700 или свежее, или процессор от AMD серии минимум 1000, например, Ryzen 5 1600 или свежее. У процессора, установленный в вашем устройстве, обязательно должна быть поддержка инструкций AVX2."]}),e.jsx(r,{children:"На сайте Adobe пишется следующее: версии 24.х и более поздние нельзя установить в системах с процессорами Intel® 3-го поколения или более ранних версий (а также в системах с более ранними процессорами AMD)."}),e.jsxs("p",{children:["Решение достаточно простое: вы можете установить"," ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," версии 23.6. Это будет последняя поддерживаемая для вас версия программы. Либо обновите процессор на вашем устройстве."]}),e.jsx("p",{children:"Бывают редкие случаи, когда процессор действительно поддерживает инструкции AVX2, но он каким-то образом выключен в вашей системе. Для этого вам нужно попробовать ввести команду ниже в командную строку от имени администратора и перезагрузить устройство."}),e.jsx("code",{children:"bcdedit /set xsavedisable 0"}),e.jsxs(r,{children:["Чтобы снова отключить AVX2, введите команду"," ",e.jsx("mark",{className:"code",children:"bcdedit /set xsavedisable 1"})," и снова перезагрузите устройство."]})]}),e.jsxs(i,{title:'"This unlicensed Adobe app is not genuine and will be disabled soon", "Unlicensed Adobe apps may expose your device to increased security risks", "This app will disable in X days" или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?',tag:"слетела лицензия, красное окно, не запускается, впн, файл хостс, блокировка доступа в интернет",children:[e.jsx("p",{children:"Программа от Adobe решила достучаться в интернет. Причин может быть четыре."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Вы забыли отключить ",e.jsx("mark",{className:"app",children:"VPN"}),". С наплывом блокировок различных ресурсов на территории СНГ пользователи стали часто пользоваться обходами, да вот забыли что не все VPN-клиенты корректно работают с правилами в ",e.jsx("mark",{className:"file",children:"hosts"})," и системном брандмауэре. Соответственно клиентами они игнорируются и пускают доступ к интернету программам."]}),e.jsxs("li",{children:["Если вы не пользуетесь ",e.jsx("mark",{className:"app",children:"VPN"}),", то возможно, что во время установки программ от Adobe что-то не прописалось в файл"," ",e.jsx("mark",{className:"file",children:"hosts"})," или кто-то удалил оттуда строки."]}),e.jsxs("li",{children:["Возможно в вашей системе затесалась служба"," ",e.jsx("mark",{className:"app",children:"Adobe Genuine Software"}),", которая осталась от установки версии из ",e.jsx("mark",{className:"app",children:"Creative Cloud"}),". Попробуйте отключить службу"," ",e.jsx("mark",{className:"app",children:"Adobe Genuine Software Monitor Service"})," через программу ",e.jsx("mark",{className:"app",children:"services.msc"}),"."]}),e.jsx("li",{children:"Ваш антивирус съел какие-то файлы для корректной подмены активации, ссылаясь на то, что это якобы вирус. Для устранения этого - отключите антивирус или внесите папку с программами Adobe в белый лист антивируса, а затем переустановите программу."})]}),e.jsx(s,{styleClass:"figure_windows-light",imgSrc:"images/adobe_the_unlicensed_app.png",imgTitle:"Сообщение об отсутствии лицензии",caption:"Adobe"}),e.jsx(n,{windowsContent:e.jsxs("div",{children:[e.jsxs("p",{children:["Если вы хотите использовать одновременно VPN и"," ",e.jsx("mark",{className:"app",children:"Premiere Pro"}),", то изучите настройки вашего VPN-клиента. Возможно, там есть пункт про раздельное туннелирование или список исключений, не позволяющий прогонять трафик программы через VPN."]}),e.jsxs("p",{children:["Если вы не используете VPN на устройстве с Windows, то попробуйте отредактировать файл ",e.jsx("mark",{className:"file",children:"hosts"}),". Для этого вам нужно перейти в"," ",e.jsx("mark",{className:"path",children:"C:\\Windows\\System32\\drivers\\etc"}),", скопировать файл ",e.jsx("mark",{className:"path",children:"hosts"})," в любое удобное место, открыть любой текстовый редактор, например ",e.jsx("mark",{className:"app",children:"Notepad++"})," ","или ",e.jsx("mark",{className:"app",children:"VS Code"}),", и внести строки из кнопки для открытия модального окна чуть ниже в конец файла. Затем сохраните отредактированный файл и перенесите его обратно в"," ",e.jsx("mark",{className:"path",children:"C:\\Windows\\System32\\drivers\\etc\\hosts"})," с заменой. Также попробуйте скрипт"," ",e.jsx("a",{href:"https://github.com/ph33nx/WinMasterBlocker",children:"WinMasterBlocker"})," ","для автоматического внесения правил блокировки доступа в интернет в брандмауэр."]}),e.jsx(d,{}),e.jsx(l,{children:"Для изменения системных файлов требуются права администратора."})]}),macContent:e.jsxs("div",{children:[e.jsxs("p",{children:["Для блокировки доступа определённым программам к интернету на устройствах с macOS можно воспользоваться программой"," ",e.jsx("a",{href:"https://radiosilenceapp.com/",children:"Radio Silence"}),". После установки и активации этой программы перейдите в вкладку"," ",e.jsx("mark",{className:"ui",children:"Network Monitor"}),". В этой же вкладке запретите программам от Adobe, которые лезут в сеть, доступ в интернет, нажав на кнопку ",e.jsx("mark",{className:"ui",children:"Block"}),"."]}),e.jsx(s,{styleClass:"figure_macos-dark",imgSrc:"images/network_radio_silence.png",imgTitle:"Блокируем доступ в интернет программам на примере Premiere Pro",caption:"Radio Silence"}),e.jsxs("p",{children:["После проделанных действий ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," и остальные программы от Adobe не должен стучаться в сеть и выдавать ошибку об отсутствии лицензии. Ниже показано, как в итоге примерно должна выглядеть у вас вкладка ",e.jsx("mark",{className:"ui",children:"Firewall"})," после отлова процессов Adobe, лезущие в интернет."]}),e.jsx(s,{styleClass:"figure_macos-dark",imgSrc:"images/firewall_radio_silence.png",imgTitle:"Окно Firewall после блокировки доступа в интернет программам",caption:"Radio Silence"})]})})]}),e.jsx(i,{title:'"Premiere Pro could not find any capable video play modules. Please update your video display drivers and start again" при запуске программы',tag:"premiere pro не удалось найти совместимые видеомодули воспроизведения, обновите видеодрайверы и запустите приложение повторно",children:e.jsxs("p",{children:["Данная ошибка может появиться после установки"," ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," версии ",e.jsx("mark",{children:"25.2"})," в вариации репака от ",e.jsx("mark",{children:"Kp0JluK"})," и почему-то на устройствах с видеокартой от"," ",e.jsx("mark",{children:"NVIDIA"}),". Если вы уверены в том, что у вас уже обновлены драйвера на видеокарту, то попробуйте установить этот же релиз повторно, то есть произвести двойную установку. То есть установите ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," ","первый раз, а затем просто откройте установщик и снова произведите установку уже поверх установленного приложения."]})}),e.jsxs(i,{title:"Вылетает Premiere Pro и Media Encoder после установки плагинов Boris FX Sapphire",children:[e.jsxs("p",{children:["Это довольно популярный баг, который мешает нормальному запуску"," ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," и"," ",e.jsx("mark",{className:"app",children:"Media Encoder"})," при наличии установленных в системе плагинов ",e.jsx("mark",{className:"plugin",children:"Boris FX Sapphire"}),". В более поздних версиях плагинов и программ это исправили, но если вы с таким столкнулись - вам достаточно просто указать"," ",e.jsx("mark",{className:"ui",children:"режим совместимости с Windows 8"})," в свойствах ярлыка программы."]}),e.jsxs("p",{children:["Для этого открываем свойства ярлыка, переходим в вкладку"," ",e.jsx("mark",{className:"ui",children:"Совместимость"})," и нажимаем галочку рядом с пунктом"," ",e.jsx("mark",{className:"ui",children:"Запускать программу в режиме совместимости с Windows 8"}),"."]}),e.jsx(c,{styleClass:"figure_windows-dark",videoSrc:"images/compatibility_media_encoder.mp4",caption:"Настройка режима совместимости"}),e.jsxs("p",{children:["После проделанных действий программа при запуске не должна вылетать. Если всё ещё вылетает, обновите плагины ",e.jsx("mark",{className:"plugin",children:"Boris FX Sapphire"})," ","до последних версий."]})]})]});export{g as default};
