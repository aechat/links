import{j as e}from"./index-X-M7Rpvg.js";import{D as s}from"./DetailsSummary-ZgM0BhVo.js";import{G as l}from"./GithubUpdateInfo-D4UHOXkJ.js";import{I as r,V as i,Y as c}from"./ContentFigure-B419yrfZ.js";import{A as n,b as a,a as t}from"./Footer-B99UvhLk.js";const j=()=>e.jsxs("div",{className:"faq-content",children:[e.jsx(l,{filePath:"src/pages/sections/aefaq/ExportProblems.tsx"}),e.jsxs(s,{title:"Почему при экспорте в .mp4 через встроенный кодек H.264 сохраняется файл с размером в 1 Кб?",tag:"не экспортируется, битый файл",children:[e.jsxs("p",{children:["В ранних версиях ",e.jsx("mark",{className:"app",children:"After Effects"})," 2023 года был неприятный баг, когда пользователь пытался сохранить видео через встроенный кодек H.264 в путь с кириллицей и на выходе получался файл размером 1 Кб. И соответственно он не открывался и никем не читался."]}),e.jsxs("p",{children:["Для решения этой проблемы просто обновите"," ",e.jsx("mark",{className:"app",children:"After Effects"})," до версии ",e.jsx("mark",{children:"23.6"})," или новее. После обновления начните экспорт заново."]}),e.jsxs("p",{children:["Если вы по каким-то причинам не можете или не хотите обновлять программу - воспользуйтесь плагинами"," ",e.jsx("a",{href:"https://www.autokroma.com/AfterCodecs/",children:"AfterCodecs"})," или"," ",e.jsx("a",{href:"https://www.voukoder.org/",children:"Voukoder"}),". Либо просто выводите в путь без кириллицы или в другом кодеке."]})]}),e.jsxs(s,{title:"После экспорта у меня изменились цвета. Как избежать изменения цветов?",tag:"исходник с айфона, hlg, rec709",children:[e.jsxs("p",{children:["Убедитесь в том, что в настройках проекта не установлен какой-нибудь другой цветовой профиль, отличный от ",e.jsx("mark",{children:"None"}),". Для этого откройте"," ",e.jsx("mark",{className:"ui",children:"Project Manager"})," через комбинацию клавиш"," ",e.jsx("mark",{className:"key",children:"Ctrl + Alt + Shift + K"})," и перейдите в вкладку"," ",e.jsx("mark",{className:"ui",children:"Color"}),". В разделе"," ",e.jsx("mark",{className:"ui",children:"Working Color Space"})," укажите значение"," ",e.jsx("mark",{children:"None"}),"."]}),e.jsx(r,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/change_working_color_space.png",imgTitle:"Изменение цветового профиля",caption:"Project Settings"}),e.jsxs("p",{children:["Ещё бывает такое, что некоторые кодеки и варианты экспорта любят изменять цвета из-за сжатия или некоторых особенностей, например"," ",e.jsx("mark",{className:"video",children:"H.264"}),". Исправить это поведение сложновато, кроме как экспортом из ",e.jsx("mark",{className:"app",children:"After Effects"})," в другой формат, например ",e.jsx("mark",{className:"video",children:"Apple Prores 422"}),". После экспорта можно переконвертировать в ",e.jsx("mark",{className:"video",children:"H.264"})," через"," ",e.jsx("mark",{className:"app",children:"Shutter Encoder"})," и не потерять в цветах."]}),e.jsxs("p",{children:["Иногда при использовании исходников с мобильных телефонов, например"," ",e.jsx("mark",{children:"iPhone 13"}),' или новее, возникают проблемы с пересветом. Это происходит из-за того, что "яблочные" устройства пишут в'," ",e.jsx("mark",{children:"Rec.2020"}),", а не в ",e.jsx("mark",{children:"Rec.709"}),". Да, получается более широкий диапазон для дальнейшего монтажа, но для обычного пользователя это всё превращается в геморрой."]}),e.jsxs("p",{children:["Поэтому для того, чтобы с данной проблемой не сталкиваться в дальнейшем - смотрите на параметры вашего исходника и переводите их в ",e.jsx("mark",{children:"Rec.709"})," с помощью конвертеров, например, через"," ",e.jsx("mark",{className:"app",children:"Shutter Encoder"}),"."]}),e.jsx(r,{styleClass:"figure_macos-dark",imgSrc:"images/shutter_encoder_interface.png",imgTitle:"Интерфейс Shutter Encoder",caption:"Shutter Encoder"})]}),e.jsxs(s,{title:"Почему в предпросмотре Media Encoder и после экспорта видео смещается влево или вправо?",tag:"медиаенкодер, медиаэнкодер, переместилось",children:[e.jsxs("p",{children:["Проверьте вашу версию программ. Вполне вероятно, что вы используете версии в промежутках от 23.1 до 23.5, где присутствует такой неприятный баг при использовании ",e.jsx("mark",{className:"app",children:"Media Encoder"})," в качестве программы для экспорта композиций."]}),e.jsxs("p",{children:["Для решения данного бага просто обновите все программы от Adobe до"," ",e.jsx("mark",{children:"23.6"})," или свежее."]})]}),e.jsxs(s,{title:"Почему моё видео сплющилось после экспорта?",tag:"растянулось, соотношения пикселя, стандарт пикселя",children:[e.jsxs("p",{children:["Скорее всего вы указали неквадратный пиксель в настройках композиции или попытались экспортировать видео в формате ",e.jsx("mark",{className:"file",children:"DV PAL"})," ","или что-то подобное. У таких форматов соотношение пикселей отличается от"," ",e.jsx("mark",{children:"1:1"}),"."]}),e.jsxs("p",{children:["Чтобы исправить это, проверьте настройки вашей композиции. Для этого нажмите на комбинацию клавиш ",e.jsx("mark",{className:"key",children:"Ctrl + K"})," и выберите"," ",e.jsx("mark",{className:"ui",children:"Square Pixel"})," в разделе"," ",e.jsx("mark",{className:"ui",children:"Pixel Aspect Ratio"}),"."]}),e.jsx(r,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/change_pixel_aspect_ratio.png",imgTitle:"Изменение соотношения пикселей",caption:"Composition Settings"}),e.jsxs("p",{children:["Если вы хотите использовать неквадратный пиксель для композиции, которую собираетесь выгнать под формат для телевидения, то лучше включите коррекцию предпросмотра под размер пикселя, включив пункт"," ",e.jsx("mark",{className:"ui",children:"Pixel Aspect Ration Correction"}),". Это позволит отобразить предпросмотр корректно, как задумано в настройках соотношения пикселя в композиции и не столкнуться с неожиданными результатами после вывода."]}),e.jsx(r,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/enable_pixel_ratio_correction.png",imgTitle:"Включение коррекции предпросмотра под размер пикселя",caption:"Composition"})]}),e.jsxs(s,{title:"Почему композиция с Element 3D экспортируется с мерцаниями?",tag:"элемент фликерит",children:[e.jsxs("p",{children:["Это может происходит из-за того, что в настройках вашей композиции указан FPS с плавающим значением, например ",e.jsx("mark",{children:"29,97"}),". Для"," ",e.jsx("mark",{className:"plugin",children:"Element 3D"})," лучше в настройках указать целую часть числа, например ",e.jsx("mark",{children:"24"}),", ",e.jsx("mark",{children:"30"})," или ",e.jsx("mark",{children:"60"}),"."]}),e.jsx(i,{styleClass:"figure_windows-dark",videoSrc:"images/aftereffects/change_fps_comp.mp4",caption:"Изменение FPS у композиции"})]}),e.jsxs(s,{title:"Экспортировал композицию и вижу в результате ужасный ступенчатый градиент. Как мне от него избавиться?",tag:"колор бендинг, полоски, цвет, шум, глубина цвета",children:[e.jsxs("p",{children:["Поздравляю, вы столкнулись с понятием ",e.jsx("mark",{children:"Color Banding"}),", что означает полосатость на переходах между оттенками одного и того же цвета. Скорее всего вы пытаетесь сделать плавный неконтрастный градиент или смешать два цвета между собой."]}),e.jsx(i,{styleClass:"figure_windows-dark",videoSrc:"images/aftereffects/color_banding_example.mp4",caption:"Полосатость в градиенте, эффект был усилен через Posterize"}),e.jsxs("p",{children:["Это происходит из-за недостаточной цветовой глубины, так как 8-битное представление цвета в настройках проекта не может отобрать всевозможные промежуточные оттенки цветов, присутствующие в градиенте. Также при экспорте некоторые видеокодеки могут сжать цвета, например"," ",e.jsx("mark",{className:"video",children:"H.264"}),"."]}),e.jsx(c,{link:"h9j89L8eQQk",caption:"Почему тёмные видео превращаются в кашу?"}),e.jsxs("p",{children:["В большинстве случаев проблема полосатости решается повышением битности в проекте. Для этого вам нужно открыть окно"," ",e.jsx("mark",{className:"ui",children:"Project Settings"})," с помощью комбинации клавиш"," ",e.jsx("mark",{className:"key",children:"Ctrl + Alt + Shift + K"}),". Затем нужно перейти во вкладку ",e.jsx("mark",{className:"ui",children:"Color"})," и в пункте"," ",e.jsx("mark",{className:"ui",children:"Bit Depth"})," установить 16 или 32 бита."]}),e.jsx(r,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/change_bit_depth.png",imgTitle:"Изменяем битность в проекте",caption:"Project Settings"}),e.jsxs(n,{children:["Учтите, что при повышении глубины цвета нужно больше ресурсов вашего устройства для корректного рендера. Из-за этого возрастает риск нарваться на ошибку"," ",e.jsx("mark",{children:"Out of Memory"}),"."]}),e.jsxs("p",{children:["Также уменьшить эффект полосатости может помочь накладывание обычного шума. Для этого вам нужно создать корректирующий слой поверх всех объектов и применить стандартный эффект ",e.jsx("mark",{className:"plugin",children:"Add Grain"})," или"," ",e.jsx("mark",{className:"plugin",children:"Noise"})," со значением от 1 до 5 процентов. Можно ещё навесить эффект ",e.jsx("mark",{className:"plugin",children:"Denoiser III"})," после генератора шума, который поставляется в пакете плагинов"," ",e.jsx("mark",{className:"plugin",children:"Red Giant Magic Bullet Suite"}),"."]}),e.jsxs(a,{children:["Если вы часто работаете с градиентами, советую создать свой пресет для подавления полосатости или взять готовый"," ",e.jsx("a",{download:!0,href:"files/Remove Banding.ffx",children:"по этой ссылке"}),"."]}),e.jsx(t,{children:"Способы решения, описанные выше, не позволят вам достичь полного отсутствия полосатости на изображении из-за ограничений, связанных с использованием цветовых пространств. Помимо этого, также возможно, что на одном мониторе полосатость будет незаметна, а на другом - заметна из-за различных типов матриц."})]}),e.jsxs(s,{title:"Почему я не могу экспортировать видео в H.264 с нечётным разрешением?",tag:"odd resolution",children:[e.jsxs("p",{children:["Вы не сможете экспортировать видео в ",e.jsx("mark",{className:"video",children:"H.264"})," или"," ",e.jsx("mark",{className:"video",children:"H.265"})," с нечётным разрешением из-за технических особенностей кодекса. Данные кодеки используют макроблоки с чётными значениями, поэтому чисто технически у вас не получится указать разрешение, например"," ",e.jsx("mark",{children:"575"}),"."]}),e.jsx(r,{styleClass:"figure_windows-light",imgSrc:"images/odd_resolution_error.png",imgTitle:"Ошибка экспорта с нечётным разрешением",caption:"Ошибка в AfterCodecs при экспорте с нечётным разрешением"}),e.jsxs("p",{children:["Для решения проблемы просто укажите чётное значение пикселей у каждой стороны в свойствах композиции. Для этого откройте настройки композиции с помощью комбинации клавиш ",e.jsx("mark",{className:"key",children:"Ctrl + K"})," и укажите в параметрах ширины и высоты цифровое значение, которые делится на 2 без остатка. После изменения настроек композиции попробуйте начать экспорт заново."]})]}),e.jsxs(s,{title:"Как экспортировать композицию, если After Effects сбоит на конкретном участке?",tag:"крашит, останавливается рендер, создание прокси",children:[e.jsx("p",{children:"Если вы испытываете проблемы с экспортом на определённом промежутке композиции, когда же в предпросмотре всё проигрывается отлично, то вам следует попробовать создать прокси для композиции и использовать его в финальном рендере."}),e.jsxs("p",{children:["Для создания прокси нужно перейти в окно ",e.jsx("mark",{className:"ui",children:"Project"}),", выбрать композицию с которым вы испытываете проблемы, нажать"," ",e.jsx("mark",{className:"key",children:"ПКМ"})," и выбрать"," ",e.jsx("mark",{className:"ui",children:"Create Proxy > Movie"}),". После нажатия вас отправят в очередь экспорта. Далее в нём нужно открыть пункт"," ",e.jsx("mark",{className:"ui",children:"Render Settings > Custom"})," и поставить везде наивысшие настройки (или выбрать пресет"," ",e.jsx("mark",{className:"ui",children:"Best Settings"}),"), чтобы после создания прокси ничего не пропало и не ухудшилось. Если прокси автоматически не установилось для композиции - сделайте это вручную через"," ",e.jsx("mark",{className:"ui",children:"Set Proxy > File"}),"."]}),e.jsx(i,{styleClass:"figure_windows-dark",videoSrc:"images/aftereffects/create_comp_proxy.mp4",caption:"Создание прокси для композиций"}),e.jsxs(a,{children:["Для создания прокси лучше указать формат QuickTime в кодеке"," ",e.jsx("mark",{className:"video",children:"Apple Prores 422"})," или"," ",e.jsx("mark",{className:"video",children:"Apple Prores 4444"}),", если композиция содержит альфа-канал."]}),e.jsxs("p",{children:["В финальном экспорте не забудьте указать"," ",e.jsx("mark",{className:"ui",children:"Use All Proxies"})," в"," ",e.jsx("mark",{className:"ui",children:"Render Settings"}),". После этого попробуйте экспортировать композицию заново с использованием прокси."]}),e.jsx(i,{styleClass:"figure_windows-dark",videoSrc:"images/aftereffects/use_all_proxies.mp4",caption:"Настройка использования прокси в финальном рендере"})]}),e.jsxs(s,{title:"Почему после экспорта в видеофайл отсутствует звук в видео?",children:[e.jsx("p",{children:"Бывают такие случаи, когда пользователь экспортирует композицию в видео и надеется, что после рендера можно будет отдавать композицию клиенту. Но не тут то было, звук сбежал из контейнера! Пользователь столкнулся с редким багом, связанный с кривой автоматикой вывода звука."}),e.jsxs("p",{children:["Для решения проблемы и принудительного экспорта видео вместе с звуковой дорожкой вам нужно перейти в настройки ",e.jsx("mark",{className:"ui",children:"Output Module"})," и указать ",e.jsx("mark",{className:"ui",children:"Audio Output On"})," вместо"," ",e.jsx("mark",{className:"ui",children:"Audio Output Auto"}),". Также это может помочь от принудительной конвертации вашего видео в ",e.jsx("mark",{className:"file",children:"GIF"})," в мессенджерах, например Telegram."]}),e.jsx(r,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/audio_output_on.png",imgTitle:"Принудительно включаем вывод звука",caption:"Output Module Settings"}),e.jsxs("p",{children:["Если это не помогло, то попробуйте вывести звук из вашей композиции отдельно в формате ",e.jsx("mark",{className:"file",children:".wav"})," и заменить её в композиции, а затем повторить попытку экспорта ещё раз."]})]}),e.jsxs(s,{title:"Экспортировал композицию, а оно занимает очень много места на диске. Как его сжать без потери качества?",tag:"конвертация, шаттер енкодер",children:[e.jsxs("p",{children:["С такой проблемой сталкивался каждый новичок в программе в старых версиях"," ",e.jsx("mark",{className:"app",children:"After Effects"}),", когда ещё нативную поддержку кодека"," ",e.jsx("mark",{className:"video",children:"H.264"})," удалили и долго не возвращали. В то время по умолчанию стоял пресет на ",e.jsx("mark",{className:"file",children:"AVI"})," в кодеке"," ",e.jsx("mark",{className:"file",children:"Animation"}),". А он славился тем, что при сравнительно коротких композициях выводил файлы по 10 Гб и больше. К счастью такие времена ушли, но некоторые старички побаиваются выводить композиции напрямую из"," ",e.jsx("mark",{className:"app",children:"After Effects"}),", отдавая предпочтение"," ",e.jsx("mark",{className:"app",children:"Media Encoder"}),". Зачем? Непонятно."]}),e.jsxs("p",{children:["Ну или бывают случаи, когда напутал с кодеком, а заново рендер делать не хочется, так как занимает слишком много время. Для таких случаев придумали конвертацию видео через ",e.jsx("mark",{className:"app",children:"FFmpeg"}),". Но так как"," ",e.jsx("mark",{className:"app",children:"FFmpeg"})," является консольной утилитой и не все могут внятно разобраться как с ней работать - для них давно изобрели GUI-клиенты, например ",e.jsx("a",{href:"https://www.shutterencoder.com/",children:"Shutter Encoder"}),"."]}),e.jsx("p",{children:"В такие конвертеры достаточно расположить вашу экспортированную композицию и указать нужный формат. Обычно в конвертере есть различные пресеты для качества или для маленького размера в ущерб качеству."})]}),e.jsxs(s,{title:'"Rendering error while writing to file (...). Unable to delete existing file" или "An unexpected error occurred while exporting a composition. Error code: 9988"',children:[e.jsx("p",{children:"Вполне вероятно, что вы пытаетесь перезаписать файл, который используется другой программой, например открыт в видеоплеере."}),e.jsx("p",{children:"Решение может быть банальным: просто закройте программу, которая использует файл или перезагрузите устройство. Затем попробуйте ещё раз начать процедуру экспорта. Или просто укажите другой путь для вывода."})]})]});export{j as default};
