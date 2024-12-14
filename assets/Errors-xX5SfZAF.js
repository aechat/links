import{j as e}from"./index-CaMEm9ZF.js";import{D as s}from"./DetailsSummary-DWmcvHtn.js";import{a,A as l,b as r}from"./Footer-O2W-Yyag.js";import{I as i}from"./ContentFigure-CTEmcdl4.js";import{G as c}from"./GithubUpdateInfo-BXOr6o0T.js";import"./Header-CCF6x5d8.js";const f=()=>e.jsxs("div",{className:"faq-content",id:"errors",children:[e.jsxs(a,{children:["Пожалуйста, не ленитесь и внимательно прочтите ошибку, которую выдаёт программа. В большинстве случаев в описании ошибки уже содержится причина и возможное решение проблемы. Если возникают трудности с чтением ошибки или предупреждения на английском интерфейсе программы -"," ",e.jsx("a",{href:"https://translate.yandex.ru/",children:"воспользуйтесь переводчиком"}),"."]}),e.jsx(c,{filePath:"src/pages/sections/aefaq/Errors.tsx"}),e.jsxs(s,{title:'Ошибка 23::40, окно "Out of Memory", "After Effects has unexpectedly run out of memory and cannot complete this export" или "Low memory warning. RAM use has been extended for previews"',children:[e.jsxs("p",{children:["Поздравляю, вы встретились с первым боссом в"," ",e.jsx("mark",{className:"app",children:"After Effects"}),"! Эти ошибки возникают из-за того, что у вас банально не хватает оперативной памяти для реализации ваших проектов. Это происходит из-за того что вы используете слишком нагруженные эффекты, не монтажный кодек у видео-исходников или неправильно настроили программу."]}),e.jsx(l,{children:"При появлении данных ошибок убедитесь в том, что вы не используете исходники с большим разрешением (больше, чем 1080p), не установили 16 или 32 бит в параметрах проекта и не перегружаете свой проект различными эффектами (например от Red Giant или BorisFX)."}),e.jsx("p",{children:"Обычно для устранения этой ошибки могут помочь некоторые советы, приведённые ниже:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Очистите кэш и оперативную память через"," ",e.jsx("mark",{className:"ui",children:"Edit > Purge > All Memory & Disk Cache"}),"."]}),e.jsxs("li",{children:["Если вы используете исходники из интернета, в частности из видео площадок - перекодируйте их через программу"," ",e.jsx("a",{href:"https://www.shutterencoder.com/",children:"Shutter Encoder"})," в"," ",e.jsx("mark",{className:"file",children:"ProRes 422"})," или повторно в"," ",e.jsx("mark",{className:"file",children:"H.264"}),". Таким образом вы ещё можете оградить себя от различных багов во время использования подобных исходников."]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://remontka.pro/fail-podkachki-windows/",children:"Настройте файл подкачки"}),", если у вас устройство на Windows. Советую установить значение от 4096 до 65536 или 131072 (будет создаваться файл подкачки с изначальным размером в 4 Гб, который динамически может расширяться до 64 Гб или 128 Гб), в большинстве случаев этого хватает."]}),e.jsxs("li",{children:["Установите программу"," ",e.jsx("a",{href:"https://github.com/henrypp/memreduct/releases",children:"Mem Reduct"})," для периодической очистки ОЗУ, если у вас Windows, и настройте очистку оперативной памяти при достижении 90%."]}),e.jsxs("li",{children:["Если у вас включена функция Multi-Frame Render - попробуйте его отключить на время. Для этого вам нужно перейти в"," ",e.jsx("mark",{className:"ui",children:"Edit > Preferences > Memory & Performance"})," и убрать галочку с ",e.jsx("mark",{className:"ui",children:"Enable Multi-frame Render"}),"."]}),e.jsxs("li",{children:["Проверьте настройки в"," ",e.jsx("mark",{className:"ui",children:"Edit > Preferences > Memory & Performance"}),". Если вы туда лезли и что-то настраивали, то есть шанс, что вы неправильно прочитали описание настройки и оставили программам Adobe 1 Гб ОЗУ, а оставшуюся часть памяти - на другие программы. Для того чтобы выделить всю возможную память для программ Adobe, установите значение ",e.jsx("mark",{children:"0"})," в пункте ",e.jsx("mark",{className:"ui",children:"RAM reserved for other applications"}),". После нажатия на ",e.jsx("mark",{className:"key",children:"Enter"})," программа сама установит нужное значение."]}),e.jsxs("li",{children:["Если вы используете несколько композиций с различными эффектами - попробуйте создать прокси для них и использовать их в дальнейшем. Заодно таким образом вы уменьшите временные затраты на перепросчёт кадров, если вы не планируете дальше изменять эти композиции. Создать прокси для композиций можно в окне"," ",e.jsx("mark",{className:"ui",children:"Project"}),", найдя нужную композицию и нажав на"," ",e.jsx("mark",{className:"key",children:"ПКМ"}),". В контекстном меню нужно выбрать"," ",e.jsx("mark",{className:"ui",children:"Create Proxy > Movie"}),". Далее в окне экспорта вы выбираете любой удобный вам формат для создания прокси и начните генерацию прокси. После рендера - он автоматически подключится к композиции. Отключить прокси у композиции можно также через контекстное меню:"," ",e.jsx("mark",{className:"ui",children:"Set Proxy > None"}),"."]}),e.jsxs("li",{children:["Ну и самое главное: если у вас мало оперативной памяти на вашем устройстве - докупите ещё и установите в материнскую плату, если возможно. В нынешних реалиях для комфортной работы в ",e.jsx("mark",{className:"app",children:"After Effects"})," ","требуется минимум 32 Гб ОЗУ."]})]})]}),e.jsxs(s,{title:"After Effects has encountered a failure related to GPU-enabled effects from this frame. This is likely because your GPU is out of memory.",children:[e.jsx("p",{children:"Данная ошибка указывает на то, что видеопамять вашей видеокарты заполнена и эффект, использующий GPU-ускорение, задыхается. Такое часто происходит, если у вас видеокарта с объёмом видеопамяти меньше чем 4 Гб."}),e.jsxs("p",{children:['В таком случае пользователю надо освободить видеопамять любым способом - перезагрузка устройства или "перезагрузка" драйверов видеокарты с помощью комбинации клавиш ',e.jsx("mark",{className:"key",children:"Ctrl + Win + Shift + B"}),"."]}),e.jsxs("p",{children:["В данной ошибке вам прямо советуют переключить рендер с видеокарты на процессор. Это можно сделать через окно ",e.jsx("mark",{className:"ui",children:"Project Manager"}),", открыв его с помощью комбинации клавиш"," ",e.jsx("mark",{className:"key",children:"Ctrl + Alt + Shift + K"})," и указав"," ",e.jsx("mark",{className:"ui",children:"Mercury Software Only"})," в вкладке"," ",e.jsx("mark",{className:"ui",children:"Video Rendering and Effects"}),"."]}),e.jsx(i,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/set_render_on_cpu.png",imgTitle:"Установка рендера на процессор",caption:"Project Settings"}),e.jsxs(r,{children:['Подробнее о каждом пункте на примере использования устройства на связке "процессор AMD и видеокарта NVIDIA":',e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("mark",{className:"ui",children:"Mercury GPU Acceleration (CUDA)"})," - программа"," ",e.jsx("u",{children:"возможно"})," будет использовать видеокарту вместе с процессором для обработки композиций. Но видеокарта не всегда и не во всех случаях будет использоваться, так как не все эффекты программы оптимизированы под работу с ним."]}),e.jsxs("li",{children:[e.jsx("mark",{className:"ui",children:"Mercury GPU Acceleration (OpenCL или OpenGL)"})," - аналогично предыдущему пункту, но на встроенном видеочипе процессора."]}),e.jsxs("li",{children:[e.jsx("mark",{className:"ui",children:"Mercury Software only"})," - программа будет преимущественно обрабатывать композиции через видеокарту, но может использовать видеокарту принудительно, если какому-то эффекту будет необходимо это сделать."," "]})]})]})]}),e.jsxs(s,{title:"Cached preview needs 2 or more frames for playback",children:[e.jsx("p",{children:"Данная ошибка может выскочить по двум причинам: из-за переполненного кэша и оперативной памяти или из-за банальной невнимательности пользователя программы."}),e.jsxs("p",{children:["В первом случае пользователю надо почистить кэш"," ",e.jsx("mark",{className:"app",children:"After Effects"}),". Для этого ему нужно зайти в"," ",e.jsx("mark",{className:"ui",children:"Edit > Purge > All Memory & Disk Cache"})," и нажать на ",e.jsx("mark",{className:"ui",children:"OK"}),". После этого попробуйте закэшировать предпросмотр снова."]}),e.jsx(i,{styleClass:"figure_windows-light",imgSrc:"images/aftereffects/edit_purge_all-memory-and-disk-cache.png",imgTitle:"Очистка кэша и освобождение оперативной памяти",caption:"Очистка кэша и освобождение оперативной памяти"}),e.jsx(r,{children:"Иногда может быть такое, что применяемый эффект может заставить держать ваш компьютер в страхе, поэтому он и не может нормально обработать кадры для предпросмотра. Если у вас есть возможность - найдите эффект, который мешает нормальному рендеру и замените его на похожий."}),e.jsx("p",{children:"Если очистка кэша не помогла, то проверьте длину вашей рабочей области. Может вы упустили тот факт, что вы случайным образом сократили его до одного кадра, поэтому и отображается эта ошибка."}),e.jsx(i,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/low_work-area.png",imgTitle:"Маленькая рабочая область",caption:"Одна из причин ошибки - маленькая рабочая область"}),e.jsxs("p",{children:["Чтобы это исправить - перейдите в начало вашей композиции (",e.jsx("mark",{className:"key",children:"Home"}),") и нажмите на ",e.jsx("mark",{className:"key",children:"B"}),", а затем перейдите в конец вашей композиции (",e.jsx("mark",{className:"key",children:"End"}),") и нажмите на ",e.jsx("mark",{className:"key",children:"N"}),". Таким образом вы расширите вашу рабочую область от начала до конца вашей композиции и эта ошибка должна исчезнуть."]})]}),e.jsxs(s,{title:"Unable to allocate enough memory to render the current frame (XXXX x XXXX @ X bpc). Either decrease the memory requirements for the rendering frame, or install more RAM",children:[e.jsxs("p",{children:["Вы создали каким-то образом (с помощью"," ",e.jsx("mark",{className:"plugin",children:"Motion Tile"}),","," ",e.jsx("mark",{className:"plugin",children:"CC Repetile"})," или другим способом) настолько большое изображение, что ваш компьютер не переваривает. Или установили высокую битность (16 или 32 бит) в настройках проекта. Ну или вы просто применили эффект, который потребляет слишком много оперативной памяти."]}),e.jsxs("p",{children:["В описании ошибки буквально есть решение проблемы - нужно уменьшить требования к кадру. Это означает что вам нужно убрать жручие эффекты, понизить битность и банально освободить оперативную память, например через"," ",e.jsx("mark",{className:"ui",children:"Edit > Purge"}),"."]}),e.jsxs("p",{children:["Иногда может помочь"," ",e.jsx("a",{href:"https://remontka.pro/fail-podkachki-windows/",children:"настройка файла подкачки"})," ","в вашей системе, если у вас устройство на Windows. Советую установить значение от 4096 до 65536 (будет создаваться файл подкачки с изначальным размером в 4 Гб, который динамически может расширяться до 64 Гб), в большинстве случаев этого хватает."]}),e.jsxs(r,{children:["Если у вас мало оперативной памяти и советы выше не помогают - вряд ли что-то можно сделать, не переделывая весь проект. В таком случае советую докупить больше оперативной памяти. В нынешних реалиях для комфортной работы в"," ",e.jsx("mark",{className:"app",children:"After Effects"})," требуется минимум 32 Гб ОЗУ."]})]}),e.jsxs(s,{title:"Effect cannot allocate a buffer larger than 30000 pixels in either dimension",children:[e.jsxs("p",{children:["Вы создали слишком большое изображение, например через"," ",e.jsx("mark",{className:"plugin",children:"Motion Tile"})," или"," ",e.jsx("mark",{className:"plugin",children:"CC Repetile"}),". Ошибка указывает на то, что слой на выходе не может превышать больше чем 30000 пикселей на одну ось."]}),e.jsxs(r,{children:["30000 пикселей у слоя на каждую ось - это максимальное значение для"," ",e.jsx("mark",{className:"app",children:"After Effects"}),". Данное ограничение нельзя обойти."]}),e.jsx("p",{children:"Для решения этой проблемы уменьшите разрешение вашего слоя любыми удобными для вас способами или настройте эффекты так, чтобы они не генерировали слишком большое разрешение у слоя."})]}),e.jsxs(s,{title:"This effect may slow down Preview and Export as it is optimized Multi-Frame Render",children:[e.jsx(r,{children:"Когда вы видите это окно - не надо паниковать. Это не является ошибкой или серьёзной проблемой."}),e.jsx("p",{children:"Данное предупреждение указывает вас на то, что вы используете старую версию плагина, не адаптированная под Multi-Frame Render. В таком случае рекомендуется обновить используемый плагин, если разработчик всё ещё поддерживает свой плагин. Ну или просто можете проигнорировать."}),e.jsxs("p",{children:["Если эта ошибка вас раздражает или у вас нет возможности/желания обновлять используемый плагин - вы можете отключить предупреждение, отключив функцию многокадрового рендера в настройках ",e.jsx("mark",{className:"app",children:"After Effects"}),". Для этого вам нужно перейти в"," ",e.jsx("mark",{className:"ui",children:"Edit > Preferences > Memory & Performance"})," и убрать галочку с ",e.jsx("mark",{className:"ui",children:"Enable Multi-frame Render"}),"."]}),e.jsx(i,{imgSrc:"images/aftereffects/checkbox_multiframe-render.png",imgTitle:"Переключение работы функции Multi-Frame Render",styleClass:"figure_windows-dark",caption:"Preferences"})]}),e.jsx(s,{title:"Иногда появляются тонкие полосы в композициях при использовании видео-исходников",children:e.jsxs("p",{children:["Такой баг встречался на некоторых версиях драйверов для видеокарт NVIDIA с 55X до 56X. Для решения этой проблемы достаточно обновить драйвера на видеокарту или перекодировать видео в ",e.jsx("mark",{className:"file",children:"Prores 422"})," через любой удобный вам конвертер видео файлов."]})}),e.jsxs(s,{title:'"Не удалось выполнить преобразование символов Unicode" или "Не удалось загрузить псевдоэффекты" при запуске After Effects',children:[e.jsxs("p",{children:["Такой баг встречается, когда вы пытаетесь"," ",e.jsx("mark",{className:"app",children:"After Effects"})," установленный с русским языком. Встречался на старых версиях и на версии 24.4, позже исправили."]}),e.jsxs("p",{children:["Для решения проблемы нужно переустановить"," ",e.jsx("mark",{className:"app",children:"After Effects"})," на английский язык. Или обновиться до более свежей версии ",e.jsx("mark",{className:"app",children:"After Effects"}),"."]})]}),e.jsx(s,{title:"Синий экран при использовании Twixtor",children:e.jsx("p",{})}),e.jsx(s,{title:"Красный экран при использовании BorisFX Sapphire",children:e.jsx("p",{})}),e.jsx(s,{title:"File is damaged или Unable to import file (НАЗВАНИЕ_ФАЙЛА.XYZ) as project (bad format or not readable)",children:e.jsx("p",{})}),e.jsxs(s,{title:"This project must be converted from version XX.X.X (Windows/macOS). The original file will be unchanged",children:[e.jsx(r,{children:"Данное окно не является ошибкой, скорее является предупреждением. Не забудьте сохранить конвертированный проект на ваш диск."}),e.jsxs("p",{children:["Вы открыли проект, созданный в более ранней версии"," ",e.jsx("mark",{className:"app",children:"After Effects"})," в более свежей версии программы. В таком случае программа переконвертирует исходный файл проекта для работы с более новой версией ",e.jsx("mark",{className:"app",children:"After Effects"}),". Исходный файл проекта не будет затронут и каким-либо образом изменён."]})]}),e.jsx(s,{title:"The file you are attempting to open was created with After Effects version XX.X.X (Windows/macOS) and cannot be opened with this version",children:e.jsxs("p",{children:["Вы пытаетесь открыть проект, созданный в более поздней версии"," ",e.jsx("mark",{className:"app",children:"After Effects"}),", чем та, что у вас установлена."]})}),e.jsx(s,{title:"After Effects error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory. Please check your settings in Media and Disk Cache Preferences",children:e.jsx("p",{})}),e.jsx(s,{title:"Error: overflow converting ratio denominators (17::19) или (17::18)",children:e.jsx("p",{})}),e.jsxs(s,{title:'"Cinema 4D must be installed in order to use the Cinema 4D renderer" или "Cineware Server Suite failed to acquire renderer port and path. Server commands not available" или "Cinema 4D: Render Failed"',children:[e.jsxs("p",{children:["Если у вас установлен ",e.jsx("mark",{className:"app",children:"After Effects"})," от KpoJluK, то в его дистрибутивах c версий 2020 и выше не поставляется плагин"," ",e.jsx("mark",{className:"plugin",children:"Cineware"})," и"," ",e.jsx("mark",{className:"plugin",children:"Cinema 4D"})," для уменьшения веса программы. Чтобы решить эту проблему - установите полноценную"," ",e.jsx("mark",{className:"app",children:"Maxon Cinema 4D"})," нужной версии, которую просит ваша версия ",e.jsx("mark",{className:"app",children:"After Effects"}),". Обычно в такой ошибке указывается, какую версию ",e.jsx("mark",{className:"app",children:"Cinema 4D"})," нужно установить."]}),e.jsxs(r,{children:["Если After Effects пишет, что нужно установить, например Cinema 4D 2023 - то нужно ставить строго любую версию 2023.X.X! Версии 2024.X.X. или 25.X.X в таком случае не подойдут.",e.jsx("br",{}),"Также Cinema 4D версий 26.X.X не подойдут для версий After Effects ниже 23.1, так как Adobe не включала в поддержку эту версию."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("mark",{className:"app",children:"After Effects 25.1 и новее"})," требует"," ",e.jsx("mark",{className:"app",children:"Cinema 4D 2025.X.X"}),"."]}),e.jsxs("li",{children:[e.jsx("mark",{className:"app",children:"After Effects 24.1-25.0"})," требует"," ",e.jsx("mark",{className:"app",children:"Cinema 4D 2024.X.X"}),"."]}),e.jsxs("li",{children:[e.jsx("mark",{className:"app",children:"After Effects 23.1 - 23.6"})," требует"," ",e.jsx("mark",{className:"app",children:"Cinema 4D 2023.X.X"}),"."]}),e.jsxs("li",{children:[e.jsx("mark",{className:"app",children:"After Effects 22.x и выше"})," требует"," ",e.jsx("mark",{className:"app",children:"Cinema 4D 25.X.X"}),"."]}),e.jsxs("li",{children:[e.jsx("mark",{className:"app",children:"After Effects 17.x (2020)"})," и"," ",e.jsx("mark",{className:"app",children:"After Effects 18.x (2021)"})," требует"," ",e.jsx("mark",{className:"app",children:"Cinema 4D R21.X.X."}),". Путь до установленных программ вы можете настроить в настройках 3D-рендера.",e.jsx(i,{styleClass:"figure_windows-light",imgSrc:"images/aftereffects/composition_settings_3drenderer_cinema4d.png",imgTitle:"Composition Settings",caption:"Composition Settings"}),e.jsx(i,{styleClass:"figure_windows-light",imgSrc:"images/aftereffects/cinema4d_renderer_options.png",imgTitle:"Choose CINEMA 4D Installation",caption:"Choose CINEMA 4D Installation"}),e.jsx(i,{styleClass:"figure_windows-light",imgSrc:"images/aftereffects/choose_cinema4d_installation.png",imgTitle:"Choose CINEMA 4D Installation",caption:"Choose CINEMA 4D Installation"})]})]}),e.jsxs("p",{children:["Если у вас установлен ",e.jsx("mark",{className:"app",children:"After Effects"})," из"," ",e.jsx("mark",{className:"app",children:"Creative Cloud"})," - до установите"," ",e.jsx("mark",{className:"plugin",children:"Cinema 4D"})," оттуда:"," ",e.jsx("mark",{className:"ui",children:"Установленные приложения > After Effects > Подключаемые модули > Cinema 4D > Установить"}),"."]})]}),e.jsxs(s,{title:"Frame rate mismatch, or footage with fields found. For best Roto Brush & Refine Edge results, set the composition to XX fps to match the layer source",children:[e.jsxs("p",{children:["Данное предупреждение показывается при использовании инструмента"," ",e.jsx("mark",{className:"plugin",children:"Rotobrush"})," и оповещает пользователя о том, что количество кадров в секунду у исходника отличается от указанного количества кадров в секунду в настройках композиции. Например, вы используете исходник с частотой кадров 50 к/c, а композиция настроена на 30. Программа прямым текстом скажет, что нужно поставить верный фреймрейт в настройках композиции и какое именно значение, чтобы всё вырезалось верно."]}),e.jsxs(r,{children:["Чтобы открыть настройки композиции - нажмите на комбинацию клавиш"," ",e.jsx("mark",{className:"key",children:"Ctrl + K"}),"."]}),e.jsx("p",{children:"Если вы не хотите менять значение FPS в настройках композиции, то для вас есть три способа псевдо-решения:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Создайте прекомпозицию с нужным исходником, а затем прямо на слое с свежесозданной прекомпозицией начинаем делать ротоскопинг через"," ",e.jsx("mark",{className:"plugin",children:"Rotobrush"}),"."]}),e.jsxs("li",{children:["Интерпретируйте FPS у исходника. Для этого перейдите в окно Project, найдите там ваш исходник и нажмите на него ",e.jsx("mark",{className:"key",children:"ПКМ"}),". Затем в контекстном меню выберите"," ",e.jsx("mark",{className:"ui",children:"Interpret Footage > Conform to Frame Rate"}),"."]}),e.jsxs("li",{children:["Просто перекодировать исходник через"," ",e.jsx("a",{href:"https://www.shutterencoder.com/",children:"Shutter Encoder"})," с указанием нужного FPS и заменить позже в проекте."]})]})]}),e.jsx(s,{title:"Content Aware Fill Error: Initialization Failed",children:e.jsx("p",{})}),e.jsx(s,{title:"Analys Solve Failed в 3D Camera Tracker",children:e.jsx("p",{})}),e.jsxs(s,{title:'Вылезло "System Compatibility Report" при запуске After Effects',children:[e.jsxs(r,{children:["Когда вы видите это окно при запуске - не надо паниковать. Это не является ошибкой или серьёзной проблемой, но исправлять причину её появления нам в любом случае нужно. Запустить программу можно как обычно, нажав на"," ",e.jsx("mark",{className:"ui",children:"Continue with known issues"}),"."]}),e.jsx("p",{children:"В данном окне обычно пишутся возможные проблемы с использованием программы, например устаревшие драйвера или плагины с каким-то критическим багом."}),e.jsx("p",{children:"Если вы в курсе о причинах некой несовместимости и вы согласны работать дальше с некими ограничениями (например отсутствие режима Draft 3D), лишь бы не видеть это окно при запуске - вы можете отключить это окно, программа даёт это сделать."}),e.jsxs("p",{children:["Для отключения этого окна перейдите в настройки программы:"," ",e.jsx("mark",{className:"ui",children:"Edit > Preferences > Startup & Repair"}),". Затем в этом разделе отключите галочку с пункта"," ",e.jsx("mark",{className:"ui",children:"Show System Compatibility Issues"}),"."]}),e.jsxs(r,{children:["В старых версиях ",e.jsx("mark",{className:"app",children:"After Effects"})," этот пункт находится в разделе ",e.jsx("mark",{className:"ui",children:"General"}),"."]})]}),e.jsxs(s,{title:"Advanced 3D is not supported by the current software",children:[e.jsxs("p",{children:["Ваша видеокарта не соответствует требованиям и не поддерживает функцию"," ",e.jsx("mark",{className:"plugin",children:"Advanced 3D"}),". Проверьте на наличие и соответствие вашей видеокарты в"," ",e.jsx("a",{href:"https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html",children:"системных требованиях"})," ","для этого модуля рендеринга."]}),e.jsxs("p",{children:["Если ваш графический процессор имеется в"," ",e.jsx("a",{href:"https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html",children:"списке поддерживаемых видеокарт"}),", но при использовании ",e.jsx("mark",{className:"plugin",children:"Advanced 3D"})," программа вылетает или не даёт ею воспользоваться - попробуйте обновить"," ",e.jsx("mark",{className:"app",children:"After Effects"})," до последней версии."]}),e.jsxs(r,{children:["Совет про обновление даю не просто так. Когда эта функция только-только выходила - моя GTX 1060 на 3 Гб VRAM отказывалась работать с ним (хотя карта была в"," ",e.jsx("a",{href:"https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html",children:"списке"}),"), также не работала функция Draft 3D долгое время. После нескольких обновлений всё таки мне вернули и ",e.jsx("mark",{className:"plugin",children:"Advanced 3D"}),", и Draft 3D, правда через пару месяцев я уже успел обновиться до RTX 4060 Ti."]})]}),e.jsxs(s,{title:"Ошибка при запуске приложения 0xc0000142",children:[e.jsxs("p",{children:["Вы пытаетесь запустить приложение на устройстве с процессором без поддержки инструкций AVX2. В"," ",e.jsx("a",{href:"https://helpx.adobe.com/ru/after-effects/system-requirements.html",children:"нынешних системных требованиях для After Effects"})," ","указано, что требуется процессор от Intel минимум 6 поколения (например, i7-6700) или свежее, или процессор от AMD серии минимум 1000 (например, Ryzen 5 1600) например или свежее. У процессора, установленный в вашем устройстве, обязательно должна быть поддержка инструкций AVX2."]}),e.jsx(r,{children:"На сайте Adobe пишется следующее: версии 24.х и более поздние нельзя установить в системах с процессорами Intel® 3-го поколения или более ранних версий (а также в системах с более ранними процессорами AMD)."}),e.jsxs("p",{children:["Решение достаточно простое: вы можете установить"," ",e.jsx("mark",{className:"app",children:"After Effects"})," версии 23.6. Это будет последняя поддерживаемая для вас версия программы. Либо обновите процессор на вашем устройстве."]}),e.jsx("p",{children:"Бывают редкие случаи, когда процессор действительно поддерживает инструкции AVX2, но он каким-то образом выключен в вашей системе. Для этого вам нужно попробовать ввести команду ниже в командную строку от имени администратора и перезагрузить устройство."}),e.jsx("code",{children:"bcdedit /set xsavedisable 0"}),e.jsxs(r,{children:["Чтобы снова отключить AVX2, введите команду"," ",e.jsx("mark",{children:"bcdedit /set xsavedisable 1"})," и снова перезагрузите устройство."]})]}),e.jsx(s,{title:"Ошибка про отсутствие MSVCP140.dll, api-ms-win-crt-runtime-l1-1-0.dll или аналогичные",children:e.jsxs("p",{children:["Вы забыли установить"," ",e.jsx("a",{href:"https://github.com/abbodi1406/vcredist/releases/",children:"Microsoft Visual C++ Redistributable"}),", который можно установить перед установкой After Effects в репаке от"," ",e.jsx("mark",{children:"KpoJluk"})," или вручную из"," ",e.jsx("a",{href:"https://github.com/abbodi1406/vcredist/releases/",children:"этой ссылки"}),". Или обновите вашу систему до последней версии, хотя бы до Windows 10 22H2."]})}),e.jsx(s,{title:"Точка входа в процедуру не найдена в библиотеке Kernel32.dll или не могу запустить программу, хотя Visual C++ Redistributable установил",children:e.jsxs("p",{children:["Вы зачем-то установили ",e.jsx("mark",{className:"app",children:"After Effects"})," версии 2020 или новее и пытаетесь запустить программу на неподдерживаемой операционной системе, например ",e.jsx("mark",{children:"Windows 7"})," или ",e.jsx("mark",{children:"Windows 8.1"}),". Adobe давно прекратила поддержку этих операционных систем, поэтому для вас максимально последняя версия ",e.jsx("mark",{className:"app",children:"After Effects"})," - это"," ",e.jsx("mark",{children:"After Effects 2019"})," или более старые."]})}),e.jsx(s,{title:"Не найден файл D3DCompiler_47.dll",children:e.jsx("p",{})}),e.jsxs(s,{title:"After Effects warning: A rendering plug-in was not found. The default rendering plug-in will be substituted. “Ray-Traced 3D”",children:[e.jsxs("p",{children:["Данное предупреждение появится, когда вы попытаетесь открыть очень старый проект с использованием движка ",e.jsx("mark",{className:"plugin",children:"Ray-Traced 3D"})," в новых версиях ",e.jsx("mark",{className:"app",children:"After Effects"}),". Его вырезали с версии 2020 и выше."]}),e.jsxs("p",{children:["Чтобы корректно открыть проект с использованием устаревшего"," ",e.jsx("mark",{className:"plugin",children:"Ray-Traced 3D"})," - вам нужно открыть его в любой версии 2019 года или старше, в котором этот движок доживал последние дни."]})]}),e.jsxs(s,{title:"Warning: This project uses fonts that are not currently available on this computer. Font substitution will occur until the originals become available",children:[e.jsx(r,{children:"Это окно является не ошибкой, а предупреждением. Вы можете запустить проект без установленного шрифта. В композициях с отсутствующим шрифтом вы можете установить другой шрифт самостоятельно."}),e.jsx("p",{children:"Данное окно при запуске предупреждает о том, что вы запустили проект с использованием шрифта, который не установлен в вашей системе. Для этого попросите у автора проекта файл с шрифтом и установите его в соответствии с вашей операционной системой. Обычно в этом окне прилагается список отсутствующих шрифтов."}),e.jsx(r,{children:"Если автор проекта не может предоставить шрифт, вам нужно будет поискать его вручную в сети Интернет."}),e.jsx(i,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/missing_fonts_warning.png",imgTitle:"Предупреждение об отсутствующих шрифтах в системе",caption:"Предупреждение об отсутствующих шрифтах в системе"}),e.jsxs("p",{children:["Если вы установили шрифт, а это сообщение никуда не пропало - просто переназначьте шрифт на тот, что вы недавно установили. Бывает такое, что один и тот же шрифт распространяется под разными названиями и"," ",e.jsx("mark",{className:"app",children:"After Effects"})," не понимает, как ему нужно использовать."]})]}),e.jsxs(s,{title:"This project contains references to missing effects. Please install the following effects to restore these references",children:[e.jsx("p",{children:"Данное предупреждение указывает на то, что у вас не установлены какие-то эффекты, которые используются в проекте."}),e.jsxs(r,{children:["Иногда многие спрашивают, что за эффекты с приставкой ",e.jsx("mark",{children:"S_"})," и"," ",e.jsx("mark",{children:"BCC"}),"? Эффекты с такой приставкой поставляются компанией"," ",e.jsx("mark",{children:"BorisFX"})," в пакетах ",e.jsx("mark",{className:"plugin",children:"Sapphire"})," и"," ",e.jsx("mark",{className:"plugin",children:"Continuum"}),"."]})]}),e.jsx(s,{title:"After Effects warning: The following plugins have failed to load. Please reinstall these plugins",children:e.jsx("p",{})}),e.jsx(s,{title:'"Приложение Adobe Creative Cloud, необходимое для устранения проблемы отсутствует или повреждено..."?',children:e.jsx("p",{})}),e.jsx(s,{title:"Вылетает программа при использовании рендера Advanced 3D",children:e.jsx("p",{})}),e.jsx(s,{title:"Вылетает Adobe Media Encoder после установки плагинов BorisFX Sapphire",children:e.jsx("p",{})}),e.jsxs(s,{title:'"This unlicensed Adobe app is not genuine and will be disabled soon" или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?',children:[e.jsx("p",{children:"Программа от Adobe решила достучаться в интернет. Причин может быть две:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["При установке Adobe что-то не прописалось в файл"," ",e.jsx("mark",{className:"file",children:"hosts"}),"."]}),e.jsxs("li",{children:["Вы забыли отключить VPN. С наплывом блокировок различных ресурсов на территории СНГ пользователи стали часто пользоваться обходами, да вот забыли что не все они работают одинаково. Некоторые клиенты игнорируют правила в"," ",e.jsx("mark",{className:"file",children:"hosts"})," и пускают доступ к интернету программе."]})]})]}),e.jsx(s,{title:"Код ошибки 1 или 501 при установке After Effects",children:e.jsx("p",{})}),e.jsx(s,{title:"Код ошибки 21 при установке After Effects или 'операционная система не соответствует минимальным требованиям для этой программы установки'",children:e.jsx("p",{})}),e.jsxs(s,{title:"Your disk cache folder is on a drive that does not have enough avaiable space to safely store the full amount specified in your preferences. Please make more space available or go to Media & Disk Cache preferences to change the folder or maximium disk cache size",children:[e.jsx("p",{children:"В данном предупреждении буквально написано, что не хватает места на разделе, где указано хранение дискового кэша. Для решения этой проблемы просто освободите место на разделе, где хранится дисковый кэш."}),e.jsx(i,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/low_diskcache_space_warning.png",imgTitle:"Предупреждение о недостаточном свободном месте на диске",caption:"Warning"}),e.jsxs("p",{children:["Вы можете уменьшить максимальное количество гигабайт для дискового кэша или изменить местоположение хранения в настройках"," ",e.jsx("mark",{className:"app",children:"After Effects"}),". Для этого перейдите в"," ",e.jsx("mark",{className:"ui",children:"Edit > Preferences > Media & Disk Cache"})," и уменьшите максимальный размер дискового кэша или укажите другое расположение, например на другом диске или внешнем накопителе."]}),e.jsx(i,{styleClass:"figure_windows-dark",imgSrc:"images/aftereffects/preferences-media_and_disk_cache.png",imgTitle:"Настройка дискового кэша",caption:"Preferences"})]})]});export{f as default};
