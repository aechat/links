import{j as e}from"./index-B7FHDkMM.js";import{D as s}from"./DetailsSummary-CtjQLd3Q.js";import{G as l}from"./GithubUpdateInfo-Duwv--dA.js";import{b as a,A as i,a as c}from"./Footer-CeFxcFfH.js";import{I as r,V as n}from"./ContentFigure-CQI66r7q.js";const j=()=>e.jsxs("div",{className:"faq-content",children:[e.jsx(l,{filePath:"src/pages/sections/aefaq/Import.tsx"}),e.jsxs(s,{title:"Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?",children:[e.jsxs("p",{children:["Прежде чем начать создавать композиции и импортировать файлы в"," ",e.jsx("mark",{className:"app",children:"After Effects"}),", вам следует бы расположить все ваши исходники в отдельный диск, раздел или папку, чтобы иметь быстрый доступ к исходникам, а не на рабочем столе или в системных папках. Так вам будет проще работать с кучей материала, особенно когда начинаете работу постепенно. Структурирование - это основа дальнейшей работы."]}),e.jsxs("p",{children:["Затем после сортировки исходников, нужно узнать о них получше: в каком кодеке и контейнере запакованы, в каком цветовом пространстве записан, сколько FPS у видеоисходника и прочее. Для этого вы можете воспользоваться онлайн-сервисом"," ",e.jsx("a",{href:"https://mediaarea.net/MediaInfoOnline",children:"MediaInfo Online"})," или его локальной версией ",e.jsx("a",{href:"https://mediaarea.net/en/MediaInfo",children:"MediaInfo"}),", которая доступна для многих операционных систем."]}),e.jsxs("p",{children:["В ",e.jsx("mark",{className:"app",children:"MediaInfo"})," можно узнать многое о ваших исходниках. Если ваш видеоисходник не скачан из площадок, например из YouTube, записан с"," ",e.jsx("mark",{children:"Constant FPS"}),", а цветовое пространство является ",e.jsx("mark",{children:"Rec.709"}),", то радуемся жизни и спокойно импортируем в композицию и работаем с ними."]}),e.jsxs("p",{children:["Если же у вас видео записано в ",e.jsx("mark",{children:"Variable FPS"}),", цветовое пространство является ",e.jsx("mark",{children:"Rec.2020"}),", так ещё и на снят iPhone, то вам нужно в обязательном порядке перекодировать исходники. Также это касается видео, полученных из видеоплощадок по типу YouTube, VK Видео и аналогичные. После корректной перекодировки видео вы избавите себя от проблем с цветами и неправильной интерпретации частоты кадров, а также от различных артефактов от последствий кривого кодирования до вас."]}),e.jsxs("p",{children:["Для того, чтобы начать процесс перекодирования ваших исходников, вам нужно установить программу"," ",e.jsx("a",{href:"https://www.shutterencoder.com/",children:"Shutter Encoder"}),", запустить и закинуть в нее ваши исходники, можно даже целую папку."]}),e.jsxs(a,{children:["Для того чтобы скачать программу бесплатно, перенесите ползунок из"," ",e.jsx("mark",{className:"ui",children:"It helps me to pay for the server & the domain"})," на ноль, а после нажмите на кнопку скачивания в зависимости от вашей операционной системы."]}),e.jsxs("p",{children:["На первый взгляд интерфейс ",e.jsx("mark",{className:"app",children:"Shutter Encoder"})," может показаться замороченным и сложным, но на самом деле это не так. Пользователю в ней для перекодирования исходников нужно сделать лишь несколько действий."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Для начала выберите кодек в ",e.jsx("mark",{className:"ui",children:"Choose Function"}),". Чаще всего используют ",e.jsx("mark",{className:"video",children:"Apple Prores 422"}),","," ",e.jsx("mark",{className:"video",children:"H.264"})," или ",e.jsx("mark",{className:"video",children:"DNxHR"}),"."]}),e.jsx("li",{children:"После выбора кодека - определитесь с режимом кодирования. Для этого в правой части..."}),e.jsx("li",{}),e.jsxs("li",{children:["Затем укажите битрейт для аудио, достаточно установить значение"," ",e.jsx("mark",{children:"320"})," Кбит/с в пункте ",e.jsx("mark",{className:"ui",children:"Audio Bitrate"}),"."]}),e.jsxs("li",{children:["После настройки - укажите путь для сохранения перекодированных файлов и нажмите на кнопку ",e.jsx("mark",{className:"ui",children:"Start Function"}),"."]})]}),e.jsxs("p",{children:["После успешного перекодирования исходников вы можете их заменить в окне"," ",e.jsx("mark",{className:"ui",children:"Project"}),". Для этого нажмите"," ",e.jsx("mark",{className:"key",children:"ПКМ"})," и выберите"," ",e.jsx("mark",{className:"ui",children:"Replace Footage > File"})," или нажмите на комбинацию клавиш ",e.jsx("mark",{className:"key",children:"Ctrl + H"}),", выделив исходник, который нужно заменить. После этого укажите путь до нового файла в системном файловом менеджере."]}),e.jsx(r,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/replace_footage.png",imgTitle:"Замена исходника в проекте",caption:"After Effects"}),e.jsx("p",{children:"Вот и всё, удачной работы с проектом!"})]}),e.jsxs(s,{title:"Использую исходник в контейнере .mp4 или в кодеке H.264. Почему у меня лезут артефакты, зелёный экран и дергается изображение?",children:[e.jsx("p",{children:"Такое часто бывает при импорте исходников, которые были скачаны из интернета, в частности из YouTube. Подобные сервисы перекодируют видео непонятно во что и непонятно по каким алгоритмам, поэтому их не рекомендуется использовать в дальнейшей работе. Чтобы с такими видео из интернета можно было спокойно работать - их нужно перекодировать самому в внятный кодек."}),e.jsx(n,{styleClass:"figure_windows-light",videoSrc:"images/h264_artifacts.webm",caption:"Артефакты из-за кривых исходников из просторов интернета"})]}),e.jsxs(s,{title:"Почему я не могу импортировать .psd по слоям? After Effects не мне предлагает выбор типа импорта!",children:[e.jsxs("p",{children:["Такое бывает, когда вы сохраняете файл в формате"," ",e.jsx("mark",{className:"file",children:"PSD"})," в цветовом режиме, отличном от"," ",e.jsx("mark",{children:"RGB"}),". ",e.jsx("mark",{className:"app",children:"After Effects"})," не понимает файлы в"," ",e.jsx("mark",{children:"CMYK"})," или аналогичных режимах, поэтому импортирует файл как целый холст без возможности разделения по слоям."]}),e.jsxs("p",{children:["Чтобы проверить, в каком режиме сохраняется ваш файл, вам нужно открыть его в"," ",e.jsx("mark",{className:"app",children:"Photoshop"})," и посмотреть на его заголовок."]}),e.jsx(r,{styleClass:"figure_windows-light",imgSrc:"images/aftereffects/tab_in_photoshop.png",imgTitle:"Проверяем цветовой режим",caption:"Photoshop"})]}),e.jsx(s,{title:"Хочу импортировать секвенцию изображений, но полученная секвенция импортируется короче/длиннее чем нужно или с неверным FPS. Как исправить?",children:e.jsx("p",{})}),e.jsx(s,{title:"Импортировал исходник с переменным FPS. Почему длина исходника в After Effects короче, чем в видео-проигрывателе?",children:e.jsxs("p",{children:[e.jsx("mark",{className:"app",children:"After Effects"})," при импорте преобразует все кадры у видео без учёта пропусков от переменного или дробного FPS. Поэтому и получается так, что при импорте такого исходника некоторые дублирующие кадры пропускаются и длина исходника в ",e.jsx("mark",{className:"app",children:"After Effects"})," становится короче, чем в видео-проигрывателе."]})}),e.jsx(s,{title:"Как импортировать 3D-объекты формата .obj, .fbx или .glb?",children:e.jsxs("p",{children:["Нативно в ",e.jsx("mark",{className:"app",children:"After Effects"})," в старых версиях нельзя было импортировать 3D-объекты без использования сторонних плагинов. В версиях 2024 и новее завезли новый физический движок для рендера"," ",e.jsx("mark",{className:"plugin",children:"Advanced 3D"}),"."]})}),e.jsxs(s,{title:"Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой, но перекодировать я их не хочу. Как мне их импортировать?",children:[e.jsxs("p",{children:[e.jsx("mark",{className:"app",children:"After Effects"})," изначально не поддерживает большое количество кодеков, например ",e.jsx("mark",{className:"video",children:"VP9"}),","," ",e.jsx("mark",{className:"video",children:"Flac"}),", ",e.jsx("mark",{className:"video",children:"AV1"}),", а также контейнеры ",e.jsx("mark",{className:"file",children:".webm"}),","," ",e.jsx("mark",{className:"file",children:".flv"}),", ",e.jsx("mark",{className:"file",children:".mkv"})," и прочие."]}),e.jsxs("p",{children:["Любая программа для монтажа и композитинга чего-угодно была изначально предназначена работать только с монтажным кодеком. Но в последнее время для упрощения работы Adobe постепенно добавляет поддержку различных форматов, но всё ещё не всех. Если у вас небольшой проект и нет желания заниматься перекодированием исходников, то вы можете попробовать плагин"," ",e.jsx("a",{href:"https://www.autokroma.com/Influx",children:"Autokroma Influx"}),". Он облегчает импорт некоторых файлов которые не поддерживаются в"," ",e.jsx("mark",{className:"app",children:"After Effects"}),","," ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," и"," ",e.jsx("mark",{className:"app",children:"Media Encoder"}),"."]}),e.jsxs(i,{children:["Поскольку декодирование из немонтажных кодеков, а также через"," ",e.jsx("mark",{className:"plugin",children:"Autokroma Influx"})," работает не так, как хотелось бы, то вы можете столкнуться с некоторыми проблемами, например появление различных артефактов, дёрганные кадры, искажённые цвета или долгий рендер. Поэтому рекомендуется в следующий раз всё-таки перекодировать ваши исходники в монтажный кодек, например через ",e.jsx("mark",{className:"app",children:"Shutter Encoder"}),"."]})]}),e.jsxs(s,{title:"Прислали исходники в формате .heic, .heif или .hevc, но выбивает ошибку. Как их мне импортировать в проект?",children:[e.jsx(a,{children:"Пользователям устройств на macOS ничего устанавливать не нужно, данные файлы импортируются нормально."}),e.jsxs(c,{children:[e.jsx("mark",{className:"app",children:"After Effects"})," даже после установки кодеков HEVC не сможет импортировать видеофайлы формата ",e.jsx("mark",{className:"file",children:".hevc"}),", перекодируйте их через ",e.jsx("mark",{className:"app",children:"Shutter Encoder"})," в другой кодек."]}),e.jsxs("p",{children:["Некоторые пользователи, использующие ",e.jsx("mark",{className:"app",children:"After Effects"})," ","на операционных системах Windows 10 и 11 могут столкнуться с проблемой импорта таких файлов, так как у них не установлены кодеки для работы с данными форматами изображений и видео. Казалось бы, достаточно их установить с"," ",e.jsx("mark",{className:"app",children:"Microsoft Store"}),", но увы. Один из кодеков платный, а другой - устанавливается неочевидно."]}),e.jsxs("p",{children:["Для того чтобы корректно открыть такие изображения и видео, вам нужно установить нужные кодеки. Для начала загрузки кодеков нужно посетить"," ",e.jsx("a",{href:"https://store.rg-adguard.net/",children:"онлайн-генератор ссылок из Microsoft Store"}),", а затем вставить ссылку в сервис, взяв их чуть ниже."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Для скачивания кодека ",e.jsx("mark",{className:"video",children:"HEVC"}),".",e.jsx("code",{children:"https://apps.microsoft.com/9n4wgh0z6vhq"})]}),e.jsxs("li",{children:["Для скачивания кодека ",e.jsx("mark",{className:"video",children:"HEIF/HEIC"}),".",e.jsx("code",{children:"https://apps.microsoft.com/9pmmsr1cgpwg"})]})]}),e.jsx(r,{styleClass:"figure_windows-dark",imgSrc:"images/link_generator_msstore.png",imgTitle:"Генератор ссылок из Microsoft Store",caption:"Браузер"}),e.jsxs("p",{children:["После вставки ссылки и нажатия на кнопку ",e.jsx("mark",{className:"ui",children:"OK"}),", нажмите на файл с форматом ",e.jsx("mark",{className:"file",children:".appxbundle"})," для его скачивания."]}),e.jsx(i,{children:"Если браузер жалуется, мол вы скачиваете редкий файл или некий вирус, то проигнорируйте это и продолжите скачивание дальше."}),e.jsxs("p",{children:["Чтобы установить пакеты с расширением ",e.jsx("mark",{className:"file",children:".appxbundle"}),", достаточно их открыть двойным кликом. Если вам предлагают открыть файл с помощью"," ",e.jsx("mark",{className:"app",children:"Обработчика команд Windows"})," или"," ",e.jsx("mark",{className:"app",children:"Установщика приложений"}),", то выберите то, что вам душе угодно. Я же предпочту установку через"," ",e.jsx("mark",{className:"app",children:"Обработчик команд Windows"}),"."]}),e.jsxs("p",{children:["После успешной установки кодеков вы теперь сможете открыть файлы форматов"," ",e.jsx("mark",{className:"file",children:".heif"}),", ",e.jsx("mark",{className:"file",children:".heic"})," и"," ",e.jsx("mark",{className:"file",children:".hevc"})," в различных видеоплеерах и просмотрщиков фото, например в ",e.jsx("mark",{className:"app",children:"MPC-HC"})," и"," ",e.jsx("mark",{className:"app",children:"FastStone Image Viewer"}),"."]})]}),e.jsx(s,{title:"Как импортировать анимированный стикер из Telegram в формате .tgs?",children:e.jsx("p",{})}),e.jsx(s,{title:"Скинули проект, который нельзя открыть в старой версии After Effects, но я не хочу обновляться. Или мне придётся?",children:e.jsx("p",{})}),e.jsx(s,{title:'При открытии чужого проекта выскакивает "After Effects warning: X files are missing since you last saved project" и вместо исходников - цветовая палитра. Как мне переподключить исходники?',children:e.jsx("p",{})}),e.jsx(s,{title:"Пытаюсь импортировать .ai с градиентами, но не получается. Как всё-таки перенести градиенты из Illustrator в After Effects?",children:e.jsx("p",{})}),e.jsx(s,{title:"Как перенести макет из Figma в After Effects?",children:e.jsx("p",{})})]});export{j as default};
