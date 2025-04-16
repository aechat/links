import{j as e}from"./index-Blsace7T.js";import{G as c}from"./GithubUpdateInfo-DunAlcAN.js";import{D as s}from"./DetailsSummary-BMw3M_rO.js";import{I as r}from"./ContentFigure-D3qjzDpf.js";import{A as i,b as a}from"./Footer-C266GEjr.js";import{D as l}from"./index-BsEsCB_n.js";const t=()=>e.jsxs("div",{className:"faq-content",children:[e.jsx(c,{filePath:"src/pages/sections/prfaq/ExportProblems.tsx"}),e.jsxs(s,{title:"Код ошибки: -1609629695 при экспорте",children:[e.jsx("p",{children:"Данная ошибка может возникнуть по совершенно разным причинам. У данной ошибки нет универсального решения, но от неё можно попробовать избавиться, если выполнить некоторые пункты ниже."}),e.jsxs(i,{children:["Приведённые ниже способы"," ",e.jsx("u",{children:e.jsx("b",{children:"не являются панацеей"})})," ","для решения и позволяют лишь исключить часть проблем при экспорте."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Попробуйте отключить ",e.jsx("mark",{children:"GPU-ускорение"})," в настройках проекта на время. Для этого перейдите в"," ",e.jsx("mark",{className:"ui",children:"File > Project Settings > General"})," и выберите в пункте ",e.jsx("mark",{className:"ui",children:"Renderer"})," значение"," ",e.jsx("mark",{className:"ui",children:"Mercury Playback Engine Software Only"}),".",e.jsx(i,{children:"Скорость экспорта при переключении рендеринга на процессор может измениться в лучшую или худшую сторону."})]}),e.jsx("li",{children:"Убедитесь в том, что вы не используете кириллицу в путях исходников, а также в пути для вывода файла. Программы от Adobe с давних пор не любят кириллицу в путях и эта проблема тянется и до последних версий."}),e.jsxs("li",{children:["Если вы выводите в формате ",e.jsx("mark",{className:"video",children:"H.264"})," напрямую из"," ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," - попробуйте выбрать кодек"," ",e.jsx("mark",{className:"video",children:"Apple Prores 442"})," для экспорта. Полученное видео вы можете переконвертировать любым способом, например через"," ",e.jsx("mark",{className:"app",children:"Shutter Encoder"})," или"," ",e.jsx("mark",{className:"app",children:"Handbrake"}),"."]}),e.jsxs("li",{children:["Если вы выводите через ",e.jsx("mark",{className:"app",children:"Media Encoder"}),", то откажитесь от него в пользу экспорта напрямую из"," ",e.jsx("mark",{className:"app",children:"Premiere Pro"}),"."]}),e.jsxs("li",{children:["Перед импортом чужих исходников в проект, рекомендуется их перекодировать в монтажный кодек, например в ",e.jsx("mark",{className:"video",children:"Apple Prores 422"}),", чтобы исключить различные проблемы при экспорте."]}),e.jsxs("li",{children:["При экспорте вы можете попробовать использовать ",e.jsx("mark",{children:"Previews"}),", если приведённые выше способы не помогают."]})]})]}),e.jsxs(s,{title:"Почему созданные субтитры не отображаются на экспортированной секвенции?",children:[e.jsxs("p",{children:["По умолчанию в ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," отключен параметр"," ",e.jsx("mark",{className:"ui",children:"Captions"})," при экспорте, поэтому вы не экспортируете видео вместе с наложенными субтитрами. Чтобы включить наложение созданных субтитров - включите ",e.jsx("mark",{className:"ui",children:"Captions"})," в настройках экспорта, а затем начните экспорт вашей секвенции. При желании, вы можете сохранить свой пресет настроек, в котором ",e.jsx("mark",{className:"ui",children:"Captions"})," будет уже включен."]}),e.jsx(r,{caption:"Export",imgSrc:"images/premierepro/enable_captions_export.png",imgTitle:"Включение наложения субтитров",styleClass:"figure_windows-dark"})]}),e.jsx(s,{title:"Что делать, если экспорт зависает на определённом моменте?",children:e.jsx("p",{})}),e.jsx(s,{title:"Экспортировал секвенцию, а оно занимает очень много места на диска. Как его сжать без потери качества?",children:e.jsx("p",{})}),e.jsx(s,{tag:"не экспортируется, битый файл",title:"Почему при экспорте в .mp4 через встроенный кодек H.264 сохраняется файл с размером в 1 Кб?",children:e.jsx("p",{})}),e.jsx(s,{tag:"исходник с айфона, hlg, rec709",title:"После экспорта у меня изменились цвета. Как избежать изменения цветов?",children:e.jsx("p",{})}),e.jsxs(s,{tag:"медиаенкодер, медиаэнкодер, переместилось",title:"Почему в предпросмотре Premiere Pro, Media Encoder и после экспорта видео смещается влево или вправо?",children:[e.jsxs("p",{children:["Проверьте текущую версию программ, установленные на вашем устройстве. Вполне вероятно, что вы используете версии в промежутках от ",e.jsx("mark",{children:"23.1"})," до"," ",e.jsx("mark",{children:"23.5"}),", где присутствует такой неприятный баг смещения текущего кадра. Оно может возникнуть при использовании композиций из"," ",e.jsx("mark",{className:"app",children:"After Effects"})," через"," ",e.jsx("mark",{className:"plugin",children:"Dynamic Link"})," или при экспорте секвенции через"," ",e.jsx("mark",{className:"app",children:"Media Encoder"}),"."]}),e.jsxs("p",{children:["Для решения данного бага просто обновите все программы от Adobe до"," ",e.jsx("mark",{children:"23.6"})," или свежее."]})]}),e.jsx(s,{tag:"колор бендинг, полоски, цвет, шум, глубина цвета",title:"Экспортировал композицию и вижу в результате ужасный ступенчатый градиент. Как мне от него избавиться?",children:e.jsx("p",{})}),e.jsxs(s,{title:"Почему я не могу экспортировать видео в H.264 с нечётным разрешением?",children:[e.jsxs("p",{children:["Вы не сможете экспортировать видео в ",e.jsx("mark",{className:"video",children:"H.264"})," или"," ",e.jsx("mark",{className:"video",children:"H.265"})," с нечётным разрешением из-за технических особенностей кодекса. Данные кодеки используют макроблоки с чётными значениями, поэтому чисто технически у вас не получится указать разрешение, например"," ",e.jsx("mark",{children:"575"}),"."]}),e.jsx(r,{caption:"Ошибка в AfterCodecs при экспорте с нечётным разрешением",imgSrc:"images/odd_resolution_error.png",imgTitle:"Ошибка экспорта с нечётным разрешением",styleClass:"figure_windows-light"}),e.jsxs("p",{children:["Для решения проблемы просто укажите чётное значение пикселей у каждой стороны в свойствах композиции. Для этого откройте настройки композиции с помощью комбинации клавиш ",e.jsx("mark",{className:"key",children:"Ctrl + K"})," и укажите в параметрах ширины и высоты цифровое значение, которые делится на 2 без остатка. После изменения настроек композиции попробуйте начать экспорт заново."]})]}),e.jsx(s,{title:"Почему после экспорта в видеофайл отсутствует звук в видео?",children:e.jsx("p",{})}),e.jsxs(s,{tag:"конвертация, шаттер енкодер, сжатие видео, квантование, cqr",title:"Как сжать экспортированное видео без сильной потери качества или до определённого веса?",children:[e.jsxs("p",{children:["При экспорте какой-нибудь секвенции из ",e.jsx("mark",{className:"app",children:"Premiere Pro"})," ","можно наткнуться на неприятный сюрприз - файл может получиться слишком большим по весу. Такой файл может не подойти для загрузки видео на нужный сервис или просто занимать кучу места на диске. В таких случаях без сжатия и конвертации видео не обойтись."]}),e.jsx(l,{children:"Конвертируем через Shutter Encoder"}),e.jsxs("p",{children:["Для быстрой конвертации видео нам понадобится"," ",e.jsx("mark",{className:"app",children:"Shutter Encoder"})," - бесплатный и популярный графический интерфейс утилиты ",e.jsx("mark",{className:"app",children:"FFmpeg"}),", который доступен для ",e.jsx("mark",{children:"Windows"})," и ",e.jsx("mark",{children:"macOS"}),". С помощью него можно конвертировать видео в распространённые форматы и при необходимости указывать нужные настройки кодирования."]}),e.jsxs(a,{children:["Если у вас не установлен ",e.jsx("mark",{className:"app",children:"Shutter Encoder"}),", то его можно скачать ",e.jsx("a",{href:"https://www.shutterencoder.com/",children:"по этой ссылке"}),". Не забудьте передвинуть ползунок доната на ",e.jsx("mark",{children:"0"}),", чтобы получить ссылку на скачивание."]}),e.jsxs("p",{children:["После установки и открытия ",e.jsx("mark",{className:"app",children:"Shutter Encoder"})," - начните импорт вашего получившегося файла. Затем укажите в"," ",e.jsx("mark",{className:"ui",children:"Choose function"})," формат, в который вы хотите вывести видео. Между прочим, выбор кодека для конвертации тоже влияет на вес и качество картинки, но не все устройства и площадки могут поддерживать тот или иной кодек. В большинстве случаев нам подойдет ",e.jsx("mark",{className:"video",children:"H.264"})," или"," ",e.jsx("mark",{className:"video",children:"H.265"}),"."]}),e.jsxs("p",{children:["После выбора кодека, в правой части окна программы появятся различные настройки кодирования. Нас интересует лишь раздел"," ",e.jsx("mark",{className:"ui",children:"Bitrate adjustment"}),". В этом разделе изменение параметров битрейта сильно влияет на качество видео и размер после конвертации. Там можно выбрать три варианта для кодирования."]}),e.jsx(r,{caption:"Shutter Encoder",imgSrc:"images/shutter_encoder_interface.png",imgTitle:"Интерфейс Shutter Encoder",styleClass:"figure_macos-dark"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["По умолчанию в ",e.jsx("mark",{className:"app",children:"Shutter Encoder"})," при выборе формата"," ",e.jsx("mark",{className:"video",children:"H.264"})," или аналогичный, установлен параметр кодирования с помощью ",e.jsx("mark",{children:"VBR"})," или же с помощью"," ",e.jsx("mark",{className:"word",children:"переменного битрейта"}),". Он плохо подходит для монтажа из-за непредсказуемого поведения, но хорошо подходит для передачи видео или публикации в социальные сети. В ",e.jsx("mark",{children:"VBR"})," также становится активным поле желательного размера видео, только зачастую кодировщик может немного уйти за края указанного значения.",e.jsxs(i,{children:["Данный вариант кодирования подойдет, если нужно максимально ужать видео до нужного размера по весу. Но есть загвоздка - из-за особенностей"," ",e.jsx("mark",{className:"word",children:"переменного битрейта"})," сложно предсказать размер файла, а также качество получаемой картинки."]})]}),e.jsxs("li",{children:["Существует вариант кодирования через ",e.jsx("mark",{children:"CBR"})," или же с помощью"," ",e.jsx("mark",{className:"word",children:"постоянного битрейта"}),". Такой способ часто выходит самым большим по весу и не эффективен в плане сжатия видео, зато с таким способом получаемый вес становится более предсказуемым."]}),e.jsxs("li",{children:["Если вам нужно сохранить хорошее качество на протяжении всего видео, при этом отбросить часть веса, то есть способ кодирования через ",e.jsx("mark",{children:"CQ"})," или же"," ",e.jsx("mark",{className:"word",children:"квантование"}),". Такой способ позволяет забыть о выставлении битрейта перед конвертацией.",e.jsxs(i,{children:[e.jsx("mark",{children:"CQ-квантование"})," поддерживается не всеми кодеками."]}),e.jsx(a,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["В отличие от ",e.jsx("mark",{children:"VBR"}),", где качество может сильно колебаться, качество видео закодированное с помощью ",e.jsx("mark",{children:"CQ"})," останется стабильным на протяжении всего видео, что делает его хорошим выбором для тех, кто ценит предсказуемость в качестве."]}),e.jsxs("li",{children:["По умолчанию ",e.jsx("mark",{children:"CQ"})," выставляется со значением ",e.jsx("mark",{children:"23"}),". Значение ",e.jsx("mark",{children:"CQ"})," вычисляется по следующей формуле: чем меньше значение, тем лучше качество, но больше вес. Эта формула работает и в обратную сторону: чем больше значение, тем хуже качество, но меньше вес. Обычно для получения хорошего качества выставляют значение в диапазоне от ",e.jsx("mark",{children:"17"})," до ",e.jsx("mark",{children:"25"}),"."]})]})})]})]}),e.jsxs("p",{children:["После выставления нужных значений - укажите путь до файла, включите при необходимости конвертацию цветового пространства, а также аппаратное ускорение в нижней части интерфейса и нажмите на ",e.jsx("mark",{className:"ui",children:"Start function"}),". После успешного завершения процедуры вы получите новый файл в той папке, в которой вы указали сохранение видео."]}),e.jsx(l,{children:"Сжимаем через Adobe Media Encoder"}),e.jsxs("p",{children:["Изначально ",e.jsx("mark",{className:"app",children:"Media Encoder"})," был задуман как конвертер и в нём ещё не было возможности экспорта секвенций из"," ",e.jsx("mark",{className:"app",children:"Premiere Pro"}),". Воспользуемся в кои-то веки данной программой по назначению. Чтобы начать конвертацию - импортируйте нужное видео в"," ",e.jsx("mark",{className:"app",children:"Media Encoder"})," любым способом - через"," ",e.jsx("mark",{className:"word",children:"Drag-n-drop"})," в очередь экспорта, через"," ",e.jsx("mark",{className:"ui",children:"File > Import"}),", через"," ",e.jsx("mark",{className:"key",children:"Ctrl + I"})," или с помощью двойного нажатия по пустой очереди экспорта. В открывшемся окне проводника укажите путь до файла, который нужно конвертировать."]}),e.jsx(r,{caption:"Media Encoder",imgSrc:"images/media_encoder_import.png",imgTitle:"Импорт в Media Encoder",styleClass:"figure_windows-light"}),e.jsx("p",{children:"После импорта файлов вы можете выбрать формат, шаблон и путь сохранения для конвертируемого видео. Слева от выбора формата или шаблона вы можете открыть список шаблонов, а нажав по названию формата или шаблона - вы можете открыть редактор шаблона для конвертации, где вы можете изменить различные параметры конвертации. Также вы можете указать путь до папки, в которую нужно сохранить и вариант рендера на процессоре или с аппаратным ускорением с помощью видеокарты."}),e.jsx(r,{caption:"Media Encoder",imgSrc:"images/media_encoder_exporting.png",imgTitle:"Экспорт в Media Encoder",styleClass:"figure_windows-light"}),e.jsxs(a,{children:["В ",e.jsx("mark",{className:"app",children:"Media Encoder"})," можно конвертировать видео с помощью сторонних плагинов, по типу ",e.jsx("mark",{className:"plugin",children:"Voukoder"})," и"," ",e.jsx("mark",{className:"plugin",children:"AfterCodecs"}),", если вам не нравится результат от стандартных кодеков."]}),e.jsx("p",{children:"После настройки параметров просто нажмите на кнопку начала конвертации и ожидайте результата в выходной папке."})]})]});export{t as default};
