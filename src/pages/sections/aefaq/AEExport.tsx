import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ContentFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import ContentFilter from "../../../components/features/ContentFilter";

import JsonToTgsConverter from "../../../components/features/ConverterJsonToTgs";

const AEExport: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="render queue, очередь рендера, настройки экспорта, render settings, output module, export settings"
        title="Что такое очередь рендеринга?"
      >
        <p>
          <mark className="select">«Render Queue»</mark> — это основное окно для экспорта
          композиций из <mark className="app">Adobe After Effects</mark> в форматах видео,
          аудио или изображений. Это очередь композиций, которые будут экспортироваться
          последовательно, сверху вниз.
        </p>
        <ContentFigure
          caption="Render Queue"
          imgTitle="Окно очереди экспорта"
          src="images/aftereffects/render_queue.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В очередь можно добавить одну или несколько композиций. Текущую или выделенную
          композицию в окне <mark className="select">«Project»</mark> можно отправить на
          экспорт с помощью сочетания клавиш <mark className="key">Ctrl + M</mark> или
          через меню{" "}
          <mark className="select">«File» → «Export» → «Add to Render Queue»</mark>.
        </p>
        <p>
          Для каждой композиции в очереди можно задать параметры вывода. Есть три основных
          параметра: <mark className="select">«Render Settings»</mark>,{" "}
          <mark className="select">«Output Module»</mark> и{" "}
          <mark className="select">«Output To»</mark>. Для каждого из них доступны готовые
          и пользовательские пресеты. Чтобы выбрать шаблон, нажмите на стрелку слева от
          названия, а для изменения параметров — на само название.
        </p>
        <p>
          Экспорт выбранных композиций можно запустить кнопкой{" "}
          <mark className="select">«Render»</mark> в правом верхнем углу или клавишей{" "}
          <mark className="key">Enter</mark>.
        </p>
        <Divider>Разбираемся с «Output Module»</Divider>
        <p>
          <mark className="select">«Output Module»</mark> отвечает за изменение формата
          вывода и при необходимости — за настройку его параметров через{" "}
          <mark className="select">«Format Options»</mark>.
        </p>
        <p>
          В последних версиях <mark className="app">Adobe After Effects</mark> для
          экспорта доступны популярные форматы видео{" "}
          <mark className="video">H.264 (MP4)</mark>,{" "}
          <mark className="video">QuickTime</mark> и <mark className="video">AVI</mark>,
          аудиоформаты <mark className="audio">AIFF</mark>,{" "}
          <mark className="audio">MP3</mark> и <mark className="audio">WAV</mark>, а также
          возможность экспортировать композицию покадрово в форматах{" "}
          <mark className="image">TIFF</mark>, <mark className="image">JPEG</mark>,{" "}
          <mark className="image">PNG</mark>, <mark className="image">PSD</mark> и других.
          Чтобы выбрать формат, установите нужное значение в параметре{" "}
          <mark className="select">«Format»</mark>.
        </p>
        <p>
          В этом же окне можно изменить размер и кадрирование изображения. В разделе
          настроек аудио — задать частоту дискретизации, битовую глубину и выбрать режим:{" "}
          <mark className="select">«Mono»</mark> или{" "}
          <mark className="select">«Stereo»</mark>.
        </p>
        <Addition type="info">
          При включенной опции <mark className="select">«Audio Output Auto»</mark> звук
          может не попасть в итоговый файл из-за бага в{" "}
          <mark className="app">Adobe After Effects</mark>. Чтобы избежать этого,
          установите значение <mark className="select">«Audio Output On»</mark>.
        </Addition>
        <ContentFigure
          caption="Output Module Settings"
          imgTitle="Настройка модуля вывода"
          src="images/aftereffects/output_module_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Разбираемся с «Output To»</Divider>
        <p>
          <mark className="select">«Output To»</mark> задаёт путь для сохранения файла. В
          зависимости от выбранного формата к названию автоматически добавляется
          расширение. Для имён файлов можно использовать стандартный шаблон или создать
          собственный.
        </p>
        <ContentFigure
          caption="Render Queue"
          imgTitle="Указание шаблона для названия файла"
          src="images/aftereffects/filename_preset_render_queue.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если в списке шаблонов для <mark className="select">«Output To»</mark> выбрать{" "}
          <mark className="select">«Custom»</mark>, откроется окно{" "}
          <mark className="select">«File Name and Location Template»</mark>, где можно
          изменить шаблон названия, создать собственный или установить его по умолчанию.
        </p>
        <p>
          Для шаблонов имени поддерживаются относительные пути, что обеспечивает гибкость
          управления расположением экспортируемых файлов. Кнопка{" "}
          <mark className="select">«Add Property»</mark> позволяет добавить в структуру
          имени дополнительные параметры.
        </p>
        <ContentFigure
          caption="File Name and Location Template"
          imgTitle="Окно создания собственного шаблона имени"
          src="images/aftereffects/filename_and_location_template.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          <ul>
            <li>
              Чтобы сохранить композицию на уровень выше папки с проектом, используйте
              конструкцию{" "}
              <mark className="code">[projectFolder]\..\[compName].[fileExtension]</mark>.
            </li>
            <li>
              Чтобы сохранить файл в подпапку внутри папки проекта, используйте
              конструкцию{" "}
              <mark className="code">
                [projectFolder]\renders\[compName].[fileExtension]
              </mark>
              , где вместо <mark className="path">renders</mark> можно указать любое
              другое название.
            </li>
          </ul>
        </Addition>
        <Divider>Разбираемся с «Render Settings»</Divider>
        <p>
          <mark className="select">«Render Settings»</mark> — необязательный, но полезный
          раздел настроек. В нём можно задать разрешение, включить или отключить
          определённые свойства слоёв и указать, использовать ли прокси в финальном
          экспорте.
        </p>
        <ContentFigure
          caption="Render Settings"
          imgTitle="Окно Render Settings"
          src="images/aftereffects/render_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Как управлять очередью рендеринга?</Divider>
        <ul>
          <li>
            Если вы отправили в очередь несколько композиций, но экспортировать нужно лишь
            некоторые из них, установите или снимите флажки напротив нужных элементов.
            <ContentFigure
              caption="Render Queue"
              imgTitle="Выбор композиций для экспорта"
              src="images/aftereffects/select_comp_queue.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Чтобы убрать композицию из очереди, выделите её и нажмите{" "}
            <mark className="key">Delete</mark>.
          </li>
          <li>
            Чтобы экспортировать одну композицию в нескольких форматах, нажмите на кнопку
            «плюса» рядом с <mark className="select">«Output Module»</mark> и укажите
            нужные форматы. Этот подход экономит время при работе со сложными проектами,
            так как <mark className="app">Adobe After Effects</mark> рендерит композицию
            один раз, а затем упаковывает её в разные форматы.
            <ContentFigure
              caption="Render Queue"
              imgTitle="Экспорт одной композиции в нескольких форматах"
              src="images/aftereffects/multiple_formats_render_queue.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Чтобы повторить экспорт уже отрендеренной или случайно отменённой композиции,
            нажмите <mark className="key">ПКМ</mark> на нужном элементе в очереди и
            выберите <mark className="select">«Duplicate»</mark>. Если вы хотите
            перезаписать исходный файл, выберите{" "}
            <mark className="select">«Duplicate with File Name»</mark>.
            <ContentFigure
              caption="Render Queue"
              imgTitle="Дублирование элемента в очереди рендеринга"
              src="images/aftereffects/duplicate_with_filename_render_queue.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
        </ul>
        <Divider>
          Как создать свой шаблон для «Output Module» и сделать его шаблоном по умолчанию?
        </Divider>
        <p>
          Чтобы не настраивать параметры экспорта каждый раз заново, их можно сохранить в
          собственный шаблон. Для этого добавьте композицию в очередь с помощью{" "}
          <mark className="key">Ctrl + M</mark> и нажмите на значок стрелки рядом с{" "}
          <mark className="select">«Output Module»</mark>. В контекстном меню выберите{" "}
          <mark className="select">«Make Template»</mark> — откроется окно для создания и
          настройки шаблонов. Это же окно можно вызвать через{" "}
          <mark className="select">«Edit» → «Templates» → «Output Module»</mark>.
        </p>
        <ContentFigure
          caption="Make Template"
          imgTitle="Создание шаблона для модуля вывода"
          src="images/aftereffects/render_queue_make_template.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В открывшемся окне появится пресет <mark>Untitled</mark>, который можно
          переименовать. В разделе <mark className="select">«Defaults»</mark> можно
          назначить созданный шаблон стандартным для определённых типов задач.
        </p>
        <p>
          Чтобы отредактировать шаблон, нажмите <mark className="select">«Edit»</mark>,
          после чего откроется окно{" "}
          <mark className="select">«Output Module Settings»</mark>. Окно редактирования
          шаблона экспорта, по сути, не отличается от обычной настройки типа вывода.
        </p>
        <ContentFigure
          caption="Output Module Templates"
          imgTitle="Окно управления шаблонами модуля вывода"
          src="images/aftereffects/output_module_templates.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>
          Как создать свой шаблон для «Render Settings» и сделать его шаблоном по
          умолчанию?
        </Divider>
        <p>
          Процесс создания пресета для <mark className="select">«Render Settings»</mark>{" "}
          аналогичен созданию шаблона для модуля вывода. Для этого нажмите на значок
          стрелки рядом с <mark className="select">«Render Settings»</mark> и выберите{" "}
          <mark className="select">«Make Template»</mark>. Это же окно можно вызвать через{" "}
          <mark className="select">«Edit» → «Templates» → «Render Settings»</mark>.
        </p>
        <ContentFigure
          caption="Render Queue"
          imgTitle="Создание шаблона для Render Settings"
          src="images/aftereffects/make_template_render_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В открывшемся окне будет создан пресет с названием <mark>Untitled</mark>,
          которое можно заменить на любое другое. В разделе{" "}
          <mark className="select">«Defaults»</mark> можно задать его в качестве пресета
          по умолчанию для других типов файлов.
        </p>
        <p>
          Чтобы отредактировать шаблон, нажмите <mark className="select">«Edit»</mark>,
          после чего откроется окно <mark className="key">Render Settings</mark>. Окно
          редактирования шаблона ничем не отличается от обычной настройки рендеринга.
        </p>
        <ContentFigure
          caption="Render Settings Templates"
          imgTitle="Окно управления шаблонами Render Settings"
          src="images/aftereffects/render_settings_templates.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="dynamic link, проблемы при экспорте"
        title="Почему «из каждого утюга» советуют не использовать Adobe Media Encoder для экспорта?"
      >
        <p>
          Долгие годы <mark className="app">Adobe Media Encoder</mark> считался
          практически безальтернативным решением для экспорта из{" "}
          <mark className="app">Adobe After Effects</mark> в популярный кодек{" "}
          <mark className="video">H.264</mark>. Это было связано с тем, что в старых
          версиях <mark className="app">Adobe After Effects</mark> отсутствовала
          возможность напрямую экспортировать композиции в этом формате. В этой статье мы
          рассмотрим, с какими «сюрпризами» можно столкнуться при использовании{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <p>
          Изначально <mark className="app">Adobe Media Encoder</mark> был разработан для
          конвертации исходников из одного формата в другой, а также для создания
          прокси-файлов, которые затем использовались в{" "}
          <mark className="app">Adobe Premiere Pro</mark>.
        </p>
        <p>
          Однако со временем в <mark className="app">Adobe Media Encoder</mark> появилась
          функция экспорта композиций из <mark className="app">Adobe After Effects</mark>,
          и пошло-поехало. Некоторые пользователи по привычке или из-за незнания
          альтернатив продолжают полагаться только на{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <p>
          С выходом версии <mark>23.0</mark> и новее необходимость в{" "}
          <mark className="app">Adobe Media Encoder</mark> для экспорта в{" "}
          <mark className="video">H.264</mark> заметно уменьшилась: в{" "}
          <mark className="app">Adobe After Effects</mark> вернули нативную функцию
          экспорта в этот кодек. Если вы используете старые версии программы, лучше
          воспользоваться плагинами, такими как{" "}
          <mark className="plugin">AfterCodecs</mark> или{" "}
          <mark className="plugin">Voukoder</mark>. <a href="#9.4">Подробнее...</a>
        </p>
        <Addition type="info">
          Если нужно поставить на рендеринг сразу несколько композиций из разных проектов,
          создайте один пустой проект в <mark className="app">Adobe After Effects</mark> и
          импортируйте в него нужные проекты. Затем вы сможете добавить все композиции в
          очередь и запустить экспорт.
        </Addition>
        <Divider>
          Какие проблемы могут быть при использовании Adobe Media Encoder?
        </Divider>
        <ul>
          <li>
            При экспорте сложных сцен <mark className="app">Adobe Media Encoder</mark>{" "}
            может остановить рендеринг без объяснения причин, и будет сложно понять
            причину. Сложные сцены лучше экспортировать напрямую из{" "}
            <mark className="app">Adobe After Effects</mark>, при необходимости используя{" "}
            <a href="#9.11">прокси</a>. Это минимизирует время экспорта и риск ошибок.
            <Addition type="warning">
              При экспорте композиции в <mark className="app">Adobe Media Encoder</mark>{" "}
              запускается ещё один процесс <mark className="file">AfterFX.exe</mark>,
              который создаёт дополнительную нагрузку на компьютер и может занять всю
              оперативную память, что часто приводит к сбоям.
            </Addition>
          </li>
          <li>
            <mark className="app">Adobe Media Encoder</mark> может терять исходники: после
            экспорта вы рискуете обнаружить разноцветный плейсхолдер вместо нужного файла,
            особенно если рендеринг был долгим.
          </li>
          <li>
            <mark className="app">Adobe Media Encoder</mark> может экспортировать
            композиции с артефактами, например со смещённым изображением<sup>1</sup> или
            искажёнными цветами.
            <Addition type="info">
              <sup>1</sup> Баг со смещением изображения встречается в версиях от{" "}
              <mark>23.1</mark> до <mark>23.5</mark>. Чтобы его исправить, обновите{" "}
              <mark className="app">Adobe After Effects</mark> и{" "}
              <mark className="app">Adobe Media Encoder</mark> до версии <mark>23.6</mark>{" "}
              или новее.
            </Addition>
          </li>
          <li>
            При экспорте через <mark className="app">Adobe Media Encoder</mark> на
            сторонних эффектах могут появиться красные кресты, водяные знаки или другие
            признаки отсутствия лицензии. Даже если в{" "}
            <mark className="app">Adobe After Effects</mark> с активацией всё в порядке,
            не факт, что она корректно подхватится в{" "}
            <mark className="app">Adobe Media Encoder</mark>, поскольку лицензии многих
            сторонних эффектов привязаны именно к{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            При экспорте в <mark className="app">Adobe Media Encoder</mark> вы вряд ли
            добьётесь стабильной работы функции{" "}
            <mark className="select">«Multi-Frame Rendering»</mark>, которая отлично
            работает при экспорте напрямую из{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            Композиция, отправленная из <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark>, может просто не появиться в
            очереди рендеринга. Такое бывает при внутреннем сбое{" "}
            <mark className="plugin">Dynamic Link</mark>, о котором программа не сообщает.
          </li>
          <li>
            Обычно процесс экспорта в <mark className="app">Adobe After Effects</mark>{" "}
            запускается почти мгновенно, в отличие от долгого запуска самого{" "}
            <mark className="app">Adobe Media Encoder</mark>. После его запуска нужно ещё
            подождать, пока он подгрузит композицию, запустит фоновый процесс{" "}
            <mark className="file">AfterFX.exe</mark> и только потом начнёт экспорт. Не
            всегда удобно ждать минуту, чтобы{" "}
            <mark className="app">Adobe Media Encoder</mark> «опомнился» для экспорта
            короткого видео.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="качество видео, разрешение, битрейт, кодек, fps, соцсети, настройки экспорта, export settings, video quality, file size, color space"
        title="Как подобрать настройки экспорта для разных задач?"
      >
        <p>
          От настроек экспорта напрямую зависит, как вашу работу увидят зрители.
          Правильные параметры помогают сбалансировать качество изображения, размер файла
          и совместимость с разными платформами. В природе не существует единого
          «чудо-пресета», ведь лучшие настройки всегда определяются конкретной задачей,
          содержанием видео и требованиями площадки, где оно будет опубликовано. Поэтому,
          чтобы найти идеальный вариант для своего контента, нужно пробовать и
          экспериментировать с настройками экспорта.
        </p>
        <p>
          В этой статье мы разберём основные факторы, влияющие на итоговое качество
          изображения и размер файла.
        </p>
        <Divider>Что влияет на качество видео после экспорта?</Divider>
        <p>
          В первую очередь на качество видео после экспорта влияют{" "}
          <mark className="word">кодек</mark> и <mark className="word">битрейт</mark>.
          Многие до сих пор думают, что на качество влияет и{" "}
          <mark className="word">контейнер</mark>, который часто называют форматом,
          например <mark className="file">MP4</mark> или <mark className="file">MOV</mark>
          , но это не так. Чтобы разобраться в этих терминах, представим простую аналогию.
        </p>
        <ul>
          <li>
            <mark className="word">Контейнер</mark> — это «коробка», которая хранит в себе
            видео- и аудиодорожки, субтитры и различные метаданные.
            <Addition type="info">
              Поскольку <mark className="word">контейнер</mark> — это лишь «оболочка», его
              иногда можно сменить без перекодирования. Например, видео с кодеком{" "}
              <mark className="video">H.264</mark>, упакованное в{" "}
              <mark className="file">MOV</mark>, в большинстве случаев будет корректно
              работать, если просто изменить расширение файла на{" "}
              <mark className="file">MP4</mark> или <mark className="file">MKV</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Кодек</mark> — это алгоритм, который сжимает видео,
            чтобы уменьшить размер файла, и распаковывает его для просмотра.
          </li>
          <li>
            <mark className="word">Битрейт</mark> — это скорость потока данных в{" "}
            <mark>Мбит/с</mark> или <mark>Кбит/с</mark>, которая определяет объём
            информации в каждой секунде видео.
          </li>
        </ul>
        <p>
          При сжатии с потерями <mark className="word">кодек</mark> отбрасывает часть
          визуальной информации. Чем ниже <mark className="word">битрейт</mark>, тем
          агрессивнее сжатие и заметнее артефакты: изображение начнёт рассыпаться на
          квадраты, детали — размываться, а плавные градиенты превратятся в грубые полосы.
        </p>
        <p>
          Однако итоговый результат зависит не только от{" "}
          <mark className="word">битрейта</mark>, но и от самого контента. Динамичные
          сцены со сложной графикой или множеством мелких частиц требуют очень высокого
          битрейта для сохранения деталей. При низком значении битрейта{" "}
          <mark className="word">кодек</mark> не справляется, так как его принцип работы —
          экономить на статичных участках кадра, чтобы направить все ресурсы на прорисовку
          движения. Если поток данных слишком большой для выделенного битрейта — качество
          видео неизбежно пострадает.
        </p>
        <ContentFigure
          caption="Почему снег и конфетти портят картинку"
          src="r6Rp-uo6HmI"
          type="youtube"
        />
        <p>
          Если вы ограничены битрейтом, например требованиями видеохостинга, можно
          попробовать «упростить» изображение, чтобы помочь кодеку сжать видео без
          значительной потери качества.
        </p>
        <ul>
          <li>
            Тряска камеры заставляет каждый пиксель в кадре постоянно меняться, что
            требует огромного битрейта. Попробуйте применить эффект стабилизации, например{" "}
            <mark className="plugin">Warp Stabilizer</mark>, чтобы сделать изображение
            статичнее и помочь кодеку сохранить детали, а не тратить ресурсы на обработку
            дрожания.
          </li>
          <li>
            Резкие и хаотичные движения плохо сжимаются при ограниченном битрейте. В
            результате такие сцены с большой вероятностью превратятся в «кашу» из
            артефактов и размытых блоков.
          </li>
          <li>
            Некоторые кодеки, например <mark className="video">H.264</mark> и его
            производные, экономят место, объединяя похожие оттенки в один блок, из-за чего
            теряются детали. Старайтесь избегать низкоконтрастных градиентов на важных
            объектах, чтобы сохранить их детализацию.
          </li>
        </ul>
        <Divider>А что делать с частотой кадров?</Divider>
        <p>
          Если частота кадров исходного материала и проекта не совпадают, это может
          привести к нежелательным артефактам. Например, если вы импортировали видео с
          частотой <mark>25 FPS</mark>, а в настройках композиции указали{" "}
          <mark>30 FPS</mark>, некоторые кадры будут повторяться, что приведёт к
          прерывистому, «дёрганому» движению. Чтобы этого избежать, убедитесь, что частота
          кадров проекта соответствует частоте кадров исходников. Это можно проверить в
          окне <mark className="select">«Project»</mark> в столбце{" "}
          <mark className="select">«Frame Rate»</mark>.
        </p>
        <p>
          Если вы импортировали в проект видео с переменной частотой кадров, например
          снятое на <mark>iPhone</mark>, его стоит конвертировать в видео с постоянной
          частотой — <mark>30</mark> или <mark>60 FPS</mark> — с помощью конвертера вроде{" "}
          <mark className="app">Shutter Encoder</mark>. Такие видео проще редактировать и
          ротоскопировать.
        </p>
        <ContentFigure
          caption="Разбираемся с переменной частотой кадров в видео"
          src="vzh-41y1gxQ"
          type="youtube"
        />
        <Divider>Какие бывают виды кодеков?</Divider>
        <p>
          <mark className="word">Кодеки</mark> условно делятся на просмотровые
          (потоковые), предназначенные для конечного зрителя, и монтажные — рассчитанные
          на работу в профессиональных видеоредакторах. Первые значительно сжимают видео
          ради экономии места и быстрой передачи по сети, а вторые сохраняют максимум
          качества для удобного монтажа и последующей обработки.
        </p>
        <ul>
          <li>
            Просмотровые кодеки применяются при публикации видео в интернете. К ним
            относятся популярные <mark className="video">H.264</mark>,{" "}
            <mark className="video">HEVC (H.265)</mark>,{" "}
            <mark className="video">VP9</mark> и <mark className="video">AV1</mark>. При
            одинаковых настройках размер файла зависит от эффективности сжатия:{" "}
            <mark className="video">HEVC (H.265)</mark> и{" "}
            <mark className="video">AV1</mark> создают файлы меньшего объёма, чем{" "}
            <mark className="video">H.264</mark> и <mark className="video">VP9</mark>.
            Использовать их для монтажа — плохая идея:{" "}
            <a href="https://www.youtube.com/watch?v=cfz3jwdo1v0">
              придётся мириться с «тормозами» и артефактами
            </a>
            .
          </li>
          <li>
            Монтажные кодеки, такие как <mark className="video">Apple ProRes 4444</mark>{" "}
            или <mark className="video">DNxHD</mark>, почти не сжимают изображение и
            отлично подходят для редактирования. Но имейте в виду: такие файлы занимают
            много места, а для работы с материалом в высоком разрешении может
            потребоваться быстрый накопитель.
          </li>
        </ul>
        <ContentFigure
          caption="Всё о кодеках"
          src="MprgQSTqL9E"
          type="youtube"
        />
        <Divider>Какие бывают виды контроля битрейта?</Divider>
        <p>
          Для управления битрейтом, или скоростью передачи данных, при кодировании
          используются три основных метода: <mark className="select">«CBR»</mark>,{" "}
          <mark className="select">«VBR»</mark> и{" "}
          <mark className="select">«CQ» («CQP»/«CRF»)</mark>.
        </p>
        <ContentFigure
          caption="Объяснение видов битрейта"
          src="eN5a2kHHP7s"
          type="youtube"
        />
        <ul>
          <li>
            При постоянном битрейте <mark className="select">«CBR»</mark> скорость
            передачи данных остаётся неизменной на протяжении всего видео. Этот режим
            предсказуем и идеально подходит для прямых трансляций, например на{" "}
            <mark className="app">YouTube</mark> или <mark className="app">Twitch</mark>,
            но для хранения обычных видео он не идеален. Кодировщик в таком случае тратит
            одинаковое количество данных и на статичные, и на динамичные сцены, что порой
            делает размер файла неоправданно большим.
          </li>
          <li>
            <p>
              При переменном битрейте <mark className="select">«VBR»</mark> скорость
              динамически меняется в зависимости от сложности кадра — увеличивается в
              динамичных сценах и уменьшается в статичных. Это позволяет достичь
              приемлемого качества при меньшем размере файла и часто используется в
              сервисах по типу <mark className="app">Netflix</mark> или{" "}
              <mark className="app">КиноПоиск</mark>. Однако этот вариант не подходит для
              сцен с резкими перепадами динамики, когда требуется выделить поток данных,
              значительно превышающий заданный.
            </p>
            <p>
              У переменного битрейта есть два режима:{" "}
              <mark className="select">«1 pass»</mark> и{" "}
              <mark className="select">«2 pass»</mark>.
            </p>
            <ul>
              <li>
                В режиме <mark className="select">«1 pass»</mark> кодировщик обрабатывает
                видео за один проход, сжимая его «на лету». Это быстро, но менее
                эффективно.
              </li>
              <li>
                В режиме <mark className="select">«2 pass»</mark> на первом проходе
                кодировщик анализирует всё видео и создаёт «карту» сложных и простых сцен.
                На втором проходе он использует эту карту, чтобы грамотно распределить
                битрейт: больше данных отдаётся сложным сценам, меньше — простым. Этот
                способ медленнее, но гораздо эффективнее для достижения заданного размера
                файла.
              </li>
            </ul>
          </li>
          <li>
            <p>
              Метод постоянного качества<sup>1</sup> позволяет задать кодировщику целевой
              уровень качества со словами:{" "}
              <mark className="quote">
                «Я задал такой-то уровень качества, а битрейт подбирай сам»
              </mark>
              . Он сам решает, сколько данных выделить каждому кадру, чтобы картинка
              выглядела одинаково хорошо и в спокойных, и в динамичных сценах. Это
              идеальный вариант для сохранения максимального качества без ручного подбора
              битрейта: он не раздувает файл, как <mark className="select">«CBR»</mark>, и
              зачастую сжимает видео эффективнее и качественнее, чем{" "}
              <mark className="select">«VBR»</mark>.
            </p>
            <Addition type="info">
              <sup>1</sup> Параметр постоянного качества может называться по-разному в
              зависимости от кодека: <mark className="select">«CQP»</mark>,{" "}
              <mark className="select">«QP»</mark>, <mark className="select">«CRF»</mark>{" "}
              или <mark className="select">«CQ»</mark>.
            </Addition>
            <p>
              Этот уровень качества вы задаёте по абстрактной шкале от <mark>0</mark> до{" "}
              <mark>51</mark>, где <mark>0</mark> — сжатие без потерь, а <mark>51</mark> —
              максимально возможное сжатие с наихудшим качеством.
            </p>
            <ul>
              <li>
                Значение по умолчанию в большинстве случаев — <mark>23</mark>. Этого более
                чем достаточно для экспорта на <mark className="app">YouTube</mark>,{" "}
                <mark className="app">VK Видео</mark> и подобные площадки. Но учтите:
                видеохостинги всё равно пережмут ваш ролик по-своему, чтобы сэкономить
                место на своих серверах.
              </li>
              <li>
                Если нужно сохранить видео с максимальным качеством, установите значение
                от <mark>17</mark> до <mark>20</mark>. Размер файла, само собой, заметно
                вырастет. Выбирать значение ниже <mark>15</mark> смысла нет: серьёзного
                прироста качества вы не заметите, а вот размер файла раздуете значительно.
              </li>
            </ul>
            <Addition type="warning">
              <ul>
                <li>
                  Этот тип кодирования доступен только в{" "}
                  <mark className="video">H.264</mark>,{" "}
                  <mark className="video">H.265</mark>, <mark className="video">VP9</mark>
                  , <mark className="video">AV1</mark> и их производных.
                </li>
                <li>
                  При экспорте из <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Media Encoder</mark> стандартными средствами
                  этот вариант кодирования выбрать нельзя. Для этого нужно использовать
                  сторонний плагин-экспортёр{" "}
                  <mark className="plugin">Voukoder Classic</mark>
                  <sup>1</sup> или <mark className="plugin">Voukoder Pro</mark> или
                  сторонние конвертеры, использующие <mark className="app">FFmpeg</mark>,
                  например <mark className="app">Shutter Encoder</mark>.
                  <ul>
                    <li>
                      <sup>1</sup> <mark className="plugin">Voukoder Classic</mark>{" "}
                      доступен только для <mark>Windows</mark> и больше не доступен на
                      официальном сайте и в репозитории{" "}
                      <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">
                        GitHub
                      </a>
                      . Архив с этой версией экспортёра и «коннекторами» вы можете найти в{" "}
                      <a href="https://t.me/+Qd9xu7A4TeIwNzY6">
                        «складе стройматериалов»
                      </a>{" "}
                      по хештегу <mark className="tag">#voukoder</mark>.
                    </li>
                  </ul>
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <p>
          Если файл уже был сильно сжат, допустим до <mark>1 Мбит/с</mark>, вернуть
          исходное качество, просто повысив битрейт при повторной конвертации, не
          получится. Видео не работает как архив, который можно сжать и распаковать без
          потерь. Если установить битрейт значительно выше, чем у пережатого оригинала, вы
          лишь увеличите размер файла, но не улучшите качество.
        </p>
        <Addition type="info">
          Если вам нужно улучшить качество исходника, воспользуйтесь{" "}
          <a href="#7.1">программами для апскейла видео</a>.
        </Addition>
        <Divider>Что ещё может влиять на качество после экспорта?</Divider>
        <p>
          Если вы экспортировали композицию в <mark className="video">H.264</mark> или его
          производных, выставили высокий битрейт, но видео всё равно «рассыпается» в
          динамичных сценах, скорее всего, причина в структуре{" "}
          <mark className="word">GOP</mark> — группы кадров. При экспорте через
          стандартный экспортёр <mark className="plugin">H.264</mark> нельзя вручную
          задать количество опорных кадров, и кодировщик делает это автоматически, что
          иногда даёт не самый удачный результат. Помимо кодека и битрейта, на качество и
          поведение видео влияет именно структура группы кадров. Большинство кодеков,
          включая <mark className="video">H.264</mark>, используют межкадровую компрессию{" "}
          <mark>Inter-frame</mark>, чтобы добиться максимального сжатия.
        </p>
        <p>
          В отличие от форматов без сжатия или с внутрикодовым сжатием, видео с потерями
          хранит не последовательность самостоятельных изображений, а набор инструкций:
          как одна картинка должна превратиться в следующую. Кодек не записывает каждый
          кадр полностью — он сохраняет только изменения между ними.
        </p>
        <ul>
          <li>
            <mark className="word">I-кадры</mark> — ключевые или опорные кадры. Это
            полноценные, самодостаточные изображения, подобные{" "}
            <mark className="image">JPEG</mark>. Они содержат всю визуальную информацию и
            служат основой для декодирования остальных кадров.
          </li>
          <li>
            <mark className="word">P-кадры</mark> — прогнозируемые. Они не хранят целое
            изображение, а только данные о различиях относительно предыдущего I- или
            P-кадра: например, «сдвинуть этот блок пикселей вправо» или «немного осветлить
            область». Это позволяет значительно экономить место.
          </li>
          <li>
            <mark className="word">B-кадры</mark> — двунаправленные. Они анализируют и
            предыдущие, и последующие кадры, вычисляя, как между ними изменяется картинка.
            Такой подход обеспечивает ещё большее сжатие, но требует больше вычислений при
            кодировании и декодировании.
          </li>
        </ul>
        <ContentFigure
          caption="Как работает Datamosh и как его сделать?"
          src="v1WgvdbCSs0"
          type="youtube"
        />
        <p>
          <mark className="word">GOP</mark> или{" "}
          <mark className="word">Group of Pictures</mark> — это последовательность,
          начинающаяся с одного <mark>I-кадра</mark> и включающая несколько{" "}
          <mark>P-</mark> и <mark>B-кадров</mark> до следующего опорного. От длины этой
          группы напрямую зависит поведение видео при сжатии.
        </p>
        <ul>
          <li>
            При <mark className="word">длинном GOP</mark>, например{" "}
            <mark>250 кадров</mark> между опорными, кодек получает больше пространства для
            предсказаний и экономии данных. Это даёт лучший результат при низком битрейте
            и уменьшает размер файла. Однако при резких движениях или смене сцены качество
            может резко упасть, так как кодеку не хватает свежих <mark>I-кадров</mark> для
            восстановления точной картинки.
          </li>
          <li>
            При <mark className="word">коротком GOP</mark>, например{" "}
            <mark>12–25 кадров</mark>, ключевые кадры появляются чаще. Это делает видео
            более устойчивым к артефактам и потере качества, но увеличивает размер файла.
            Именно поэтому монтажные кодеки вроде{" "}
            <mark className="video">Apple ProRes</mark> используют только{" "}
            <mark>I-кадры</mark> — такой режим называют{" "}
            <mark className="word">All-Intra</mark>. Он обеспечивает стабильность при
            редактировании и идеально подходит для постпродакшена.
          </li>
        </ul>
        <p>
          Для экспорта в веб чаще применяют <mark className="word">длинный GOP</mark>, так
          как это стандарт для стриминговых сервисов. Но если вы замечаете, что на резких
          сменах сцены картинка «сыпется» или цветопередача на однотонных участках
          искажается, попробуйте поэкспериментировать с длиной{" "}
          <mark className="select">«GOP»</mark> в настройках кодека. Это можно сделать,
          например, в <mark className="plugin">Voukoder</mark> или{" "}
          <mark className="app">Shutter Encoder</mark>.
        </p>
        <ContentFigure
          caption="Что такое группа кадров?"
          src="nFGmb8Z2zLw"
          type="youtube"
        />
        <Divider>А как сохранить цветопередачу при конвертации?</Divider>
        <p>
          Если вам важна точность цветопередачи, например при экспорте композиции с жёстко
          заданным цветом фона — экспортируйте видео в кодеке с цветовой субдискретизацией{" "}
          <mark>4:4:4</mark>, например <mark className="video">Apple ProRes 4444</mark>.
          Этот вариант хорош для дальнейшего видеопроизводства, но при загрузке на
          видеохостинги ролик всё равно будет перекодирован с субдискретизацией{" "}
          <mark>4:2:0</mark>, и точность исходного цвета потеряется. Если ваш заказчик
          настаивает на конкретном оттенке, проще объяснить ему эту техническую
          особенность сжатия видео, чем пытаться что-то исправить.
        </p>
        <p>
          <mark className="word">Цветовая субдискретизация</mark> — это метод сжатия
          изображения, при котором информация о цвете для группы пикселей усредняется,
          чтобы сэкономить место. Он основан на том, что человеческий глаз гораздо
          чувствительнее к перепадам яркости, чем к перепадам цвета. Поскольку мы плохо
          различаем мелкие детали цвета, на этой информации можно сэкономить много места,
          и человеческий глаз этого почти не заметит. Визуально уловить разницу с
          оригинальным файлом почти невозможно, если не проверять цвет пипеткой в
          графическом редакторе.
        </p>
        <p>
          Любое цветное изображение можно разделить на две составляющие:{" "}
          <mark className="word">яркость</mark> и <mark className="word">цветность</mark>.
        </p>
        <ul>
          <li>
            <mark className="word">Яркость</mark> — это, по сути, детализированная
            чёрно-белая версия изображения. Она отвечает за контуры, текстуры и чёткость.
            Наш глаз особенно чувствителен к этой информации.
          </li>
          <li>
            <mark className="word">Цветность</mark> — это информация о цвете, которая
            «раскрашивает» чёрно-белую основу. Главный принцип субдискретизации: мы
            сохраняем всю или почти всю информацию о яркости, но выбрасываем часть
            информации о цвете.
          </li>
        </ul>
        <p>
          Основные форматы цветовой субдискретизации — <mark>4:2:0</mark>,{" "}
          <mark>4:2:2</mark> и <mark>4:4:4</mark>. Первая цифра в этой схеме отвечает за
          количество сэмплов яркости, вторая — за количество сэмплов цвета в первой строке
          пикселей, а третья — во второй. Иногда встречается и четвёртая цифра, которая
          указывает на наличие альфа-канала.
        </p>
        <ContentFigure
          caption="Цветовая субдискретизация: что, какая и зачем?"
          src="aF_RCHoc89U"
          type="youtube"
        />
        <ul>
          <li>
            В <mark>4:2:0</mark> изображение получается самым сжатым: на четыре пикселя у
            каждого сохраняется собственная яркость, но цветовая информация берётся общей
            для целого квадрата из двух по горизонтали и двух по вертикали. Кодек делает
            ставку на то, что в небольшом квадрате <mark>2×2</mark> пикселя цвет вряд ли
            сильно меняется, и наш глаз «согласится» с усреднённым вариантом, пока
            детализация по яркости остаётся высокой. Этот вариант используется практически
            везде: на <mark className="app">YouTube</mark>,{" "}
            <mark className="app">TikTok</mark> и других популярных видеоплощадках.
          </li>
          <li>
            В <mark>4:2:2</mark> компромисс мягче: яркость остаётся у каждого пикселя
            своя, а цвет делится попарно по горизонтали. То есть первый и второй пиксель
            получают одинаковый цвет, третий и четвертый — тоже. В этом случае кодек
            отбрасывает половину горизонтальной информации о цвете. Наш мозг смотрит на
            два соседних пикселя и как бы думает:{" "}
            <mark className="quote">„Они так близко, наверное, одного цвета“</mark>. И мы
            не замечаем подмены. Этот вариант часто используется в профессиональных
            камерах.
          </li>
          <li>
            В <mark>4:4:4</mark> или <mark>4:4:4:4</mark> и яркость, и цвет уникальны для
            каждого пикселя, вследствие чего цвета после экспорта не исказятся. Никакой
            экономии — никакой потери цветовой информации, однако размер такого файла вас
            вряд ли обрадует.
          </li>
        </ul>
        <Divider>А что делать с параметрами аудио?</Divider>
        <p>
          При экспорте видео можно настроить звук, изменив его{" "}
          <mark className="word">битрейт</mark>, <mark className="word">битность</mark>,{" "}
          <mark className="word">кодек</mark> и{" "}
          <mark className="word">частоту дискретизации</mark>. Однако в повседневной
          работе к этим настройкам обращаются редко и обычно оставляют настройки экспорта
          по умолчанию. Разницу в качестве между исходным и экспортированным звуком на
          слух замечают не все, но упомянуть об этих параметрах стоит для расширения
          кругозора.
        </p>
        <ul>
          <li>
            С <mark className="word">битрейтом</mark> мы уже знакомы, но не с его
            типичными значениями для аудио. Как правило, для получения хорошего звука
            после экспорта и публикации на <mark className="app">YouTube</mark> и других
            площадках достаточно значения <mark>256 Кбит/с</mark>, а для остальных случаев
            — <mark>320 Кбит/с</mark> при условии, что изначально был импортирован
            качественный аудиофайл.
          </li>
          <li>
            <p>
              С аудиокодеками всё немного запутаннее: пользователи часто путают форматы
              сжатия звука с кодеками, применяемыми в беспроводных наушниках. Между собой
              они различаются и по способу сжатия, и по качеству итогового звучания.
            </p>
            <p>
              Например, при экспорте из <mark className="app">Adobe After Effects</mark>{" "}
              звук обычно кодируется в <mark className="audio">AAC</mark> с потерями при{" "}
              <a href="#9.4">любом из трёх видов</a> экспорта в{" "}
              <mark className="video">H.264</mark> или остаётся несжатым при экспорте в{" "}
              <mark className="video">Apple ProRes</mark>.
            </p>
            <ContentFigure
              caption="Форматы аудио: какой лучше выбрать?"
              src="6IVmlBWMxVA"
              type="youtube"
            />
            <p>
              Если вам нужно экспортировать композицию с аудиодорожкой, закодированной в
              специфическом формате<sup>1</sup>, и упаковать её в определённый контейнер,
              воспользуйтесь плагинами <mark className="plugin">Voukoder Classic</mark>
              <sup>2</sup> или <mark className="plugin">Voukoder Pro</mark>.
            </p>
            <Addition type="warning">
              <ul>
                <li>
                  <sup>1</sup> Некоторые форматы, например{" "}
                  <mark className="audio">WAV</mark>, могут не воспроизводиться на ряде
                  устройств.
                </li>
                <li>
                  <sup>2</sup> <mark className="plugin">Voukoder Classic</mark> доступен
                  только для устройств на <mark>Windows</mark> и больше не доступен на
                  официальном сайте и в репозитории{" "}
                  <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">
                    {" "}
                    GitHub{" "}
                  </a>{" "}
                  . Архив с этой версией экспортёра и «коннекторами» вы можете найти в{" "}
                  <a href="https://t.me/+Qd9xu7A4TeIwNzY6">«складе стройматериалов»</a> по
                  хештегу <mark className="tag">#voukoder</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            И самое интересное — <mark className="word">частота дискретизации</mark> и{" "}
            <mark className="word">битность</mark>.
            <ul>
              <li>
                <p>
                  <mark className="word">Частота дискретизации</mark> показывает, сколько
                  раз в секунду аналоговый звуковой сигнал «снимается» и превращается в
                  цифровые данные — примерно как количество кадров в секунду для видео.
                  Измеряется в герцах или килогерцах. Стандартным значением считается{" "}
                  <mark>48000 Гц</mark>, именно с ним по умолчанию работают{" "}
                  <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere Pro</mark>.
                </p>
                <Addition type="info">
                  Если в одном проекте используются аудиодорожки с разной частотой
                  дискретизации, например <mark>44100 Гц</mark> и <mark>48000 Гц</mark>,
                  могут возникнуть сложности с их синхронизацией.
                </Addition>
              </li>
              <li>
                <p>
                  <mark className="word">Битность</mark> — это количество битов информации
                  в одном образце звука. Она определяет его динамический диапазон и
                  точность передачи амплитуды (громкости). Чем выше битность, тем
                  детальнее и качественнее получается цифровое аудио.
                </p>
                <p>
                  Стандартные значения — <mark>16</mark> и <mark>24 бита</mark>. Для
                  финального экспорта на площадки вроде{" "}
                  <mark className="app">YouTube</mark> обычно достаточно{" "}
                  <mark>16 бит</mark>. Если же предстоит дальнейшая обработка звука, лучше
                  работать с 24-битным аудио: оно даёт больше простора для редактирования
                  и лучше сохраняет исходное качество.
                </p>
              </li>
            </ul>
            <ContentFigure
              caption="Частота дискретизации и её глубина"
              src="w6f6FeRRjPU"
              type="youtube"
            />
          </li>
        </ul>
        <Divider>Почему видеоплощадки так нещадно сжимают видео?</Divider>
        <p>
          Представьте, что <mark className="app">YouTube</mark>,{" "}
          <mark className="app">Instagram</mark>
          <sup>1</sup>, <mark className="app">TikTok</mark> и прочие — это огромные
          склады, куда пользователи ежедневно загружают миллионы часов материала. Главная
          причина агрессивного сжатия видео — экономия места на серверах. Если бы площадки
          хранили всё в исходном качестве, им потребовались бы невообразимые объёмы
          памяти. Это нереально дорого, особенно для бесплатных площадок.
        </p>
        <Addition type="danger">
          <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark> признаны
          экстремистскими организациями и запрещены на территории Российской Федерации.
        </Addition>
        <p>
          Вторая причина — скорость доставки контента. Мало кто захочет скачивать два
          гигабайта ради пятисекундного ролика, особенно если интернет медленный. Поэтому,
          чтобы видео воспроизводилось без задержек, его нужно сделать максимально
          «лёгким».
        </p>
        <p>
          Ваша цель — отдать площадке настолько качественный исходник, чтобы даже после её
          «мясорубки» он выглядел достойно. Если есть время, экспериментируйте: загружайте
          тестовые ролики с разными настройками экспорта в режиме приватного доступа на{" "}
          <mark className="app">YouTube</mark> или другую площадку и сравнивайте
          результат. Но, пожалуйста, не зацикливайтесь на мелких деталях. Обычный зритель,
          скорее всего, всё равно не заметит той разницы между загруженным видео и
          исходником, которая так бросается вам в глаза.
        </p>
        <p>
          Популярный техноблогер{" "}
          <a href="https://www.youtube.com/channel/UCBJycsmduvYEL83R_U4JriQ">
            Маркус Браунли
          </a>{" "}
          однажды провёл эксперимент: он тысячу раз загружал на{" "}
          <mark className="app">YouTube</mark> одно и то же видео, чтобы посмотреть, что с
          ним станет. Результат оказался предсказуемым: с каждой новой загрузкой площадка
          сжимала ролик заново, и качество падало. Это работает по тому же принципу, что и
          копирование старых VHS-кассет: каждая следующая копия всегда хуже предыдущей.
        </p>
        <ContentFigure
          caption="Что будет, если опубликовать одно и то же видео 1000 раз?"
          src="JR4KHfqw-oE"
          type="youtube"
        />
        <Divider>Дополнительный материал для размышлений</Divider>
        <div className="flexible-links">
          <a href="https://blog.frame.io/2017/02/15/choose-the-right-codec/">
            Выбор кодека для проекта
          </a>
          <a href="https://aws.amazon.com/ru/blogs/rus/media-part-1-back-to-basics-gops-explained/">
            Что такое «GOP»?
          </a>
        </div>
        <ContentFigure
          caption="Как работают видеокодеки?"
          src="gqDuIcJ-alM"
          type="youtube"
        />
        {/* TODO: добавить различные видео и материалы */}
      </DetailsSummary>
      <DetailsSummary
        tag="h264, h265, hevc, avc1, voukoder, aftercodecs"
        title="Как экспортировать композицию в MP4?"
      >
        <p>
          Обычно под экспортом в <mark className="video">MP4</mark> из{" "}
          <mark className="app">Adobe After Effects</mark> подразумевают экспорт в{" "}
          <mark className="video">H.264</mark> — один из самых популярных кодеков, с
          которым ежедневно сталкиваются пользователи интернета, будь то в социальных
          сетях, на видеохостингах, сайтах или даже на телевидении. Первая версия этого
          стандарта была выпущена в 2003 году, и до сих пор он активно используется.
          Помимо <mark className="video">H.264</mark>, существуют более эффективные
          наследники, такие как <mark className="video">H.265 (HEVC)</mark> и{" "}
          <mark className="video">AV1</mark>, но они менее популярны из-за проблем с
          совместимостью на старых устройствах.
        </p>
        <p>
          В этой статье мы рассмотрим, как экспортировать композицию в{" "}
          <mark className="video">H.264</mark> и его производных напрямую из{" "}
          <mark className="app">Adobe After Effects</mark> без использования{" "}
          <mark className="app">Adobe Media Encoder</mark>. Это можно сделать несколькими
          способами: с помощью стандартного экспортёра{" "}
          <mark className="video">H.264</mark>, доступного в{" "}
          <mark className="app">Adobe After Effects</mark> с версии <mark>2023</mark> и
          новее, или сторонних плагинов — <mark className="plugin">Voukoder</mark> и{" "}
          <mark className="plugin">AfterCodecs</mark>. Какой способ выбрать — зависит от
          вас, цели экспорта и вашего проекта.
        </p>
        <Addition type="info">
          Перед чтением этой статьи рекомендуется <a href="#9.1">ознакомиться</a> с
          интерфейсом окна <mark className="select">«Render Queue»</mark> и его
          функционалом, если вы впервые экспортируете композиции из{" "}
          <mark className="app">Adobe After Effects</mark>.
        </Addition>
        <Addition type="danger">
          <ul>
            <li>
              <p>
                Обратите внимание: с помощью кодеков <mark className="video">H.264</mark>{" "}
                и <mark className="video">H.265</mark>
                <sup>1</sup> не получится экспортировать видео с прозрачностью. Для
                экспорта композиции с прозрачным фоном лучше использовать формат{" "}
                <mark className="video">QuickTime (Apple ProRes 4444)</mark>.
              </p>
              <ul>
                <li>
                  <sup>1</sup> У кодека <mark className="video">H.265</mark> всё же есть
                  нюанс — чтобы получить видео с этим кодеком и альфа-каналом, нужно
                  сначала экспортировать композицию в{" "}
                  <mark className="video">Apple ProRes 4444</mark>, а затем конвертировать
                  её через <mark className="app">Shutter Encoder</mark> с включённой
                  опцией <mark className="select">«Enable alpha channel»</mark>. Однако
                  альфа-канал в <mark className="video">H.265</mark> на практике можно
                  увидеть только в браузере <mark className="app">Safari</mark> — в{" "}
                  <mark className="app">Adobe After Effects</mark> и других монтажных
                  программах он отображаться не будет.
                </li>
              </ul>
            </li>
            <li>
              Из-за особенностей стандарта <mark className="video">H.264</mark> не
              получится экспортировать композицию с нечётным разрешением, например{" "}
              <mark>725×501</mark>. В таком случае{" "}
              <mark className="app">Adobe After Effects</mark> автоматически растянет
              видео до разрешения <mark>726×502</mark> или выдаст ошибку при экспорте.
            </li>
          </ul>
        </Addition>
        <Divider>Экспортируем с помощью стандартного H.264</Divider>
        <Addition type="info">
          Если вы используете <mark className="app">Adobe After Effects</mark> версии ниже{" "}
          <mark>23.0</mark>, пролистайте эту статью дальше для ознакомления с
          альтернативными способами экспорта.
        </Addition>
        <p>
          Начнём с самого простого способа экспорта видео в{" "}
          <mark className="video">MP4</mark> — через стандартный экспортёр{" "}
          <mark className="plugin">H.264</mark>. Его добавили в{" "}
          <mark className="app">Adobe After Effects</mark> начиная с версии{" "}
          <mark>23.0</mark>, и теперь он используется по умолчанию вместо старого пресета{" "}
          <mark className="select">«AVI (Animation)»</mark>, который был стандартом в
          более ранних версиях.
        </p>
        <p>
          Вслед за этим были добавлены новые пресеты{" "}
          <mark className="select">«H.264 (15 Мбит/c)»</mark>,{" "}
          <mark className="select">«H.264 (5 Мбит/c)»</mark> и{" "}
          <mark className="select">«H.264 (40 Мбит/c)»</mark> для быстрого применения
          настроек.
        </p>
        <Addition type="warning">
          <p>
            Учтите, что у встроенного в <mark className="app">Adobe After Effects</mark>{" "}
            экспортёра <mark className="plugin">H.264</mark> есть несколько проблем и
            ограничений. Если вы с ними столкнётесь, программа выдаст предупреждение.
          </p>
          <ul>
            <li>
              Он не умеет экспортировать видео с нестандартной частотой кадров, например{" "}
              <mark>20 FPS</mark>. Если проигнорировать предупреждение, ролик получится
              ускоренным и закончится раньше звуковой дорожки. При использовании{" "}
              <mark className="plugin">AfterCodecs</mark>,{" "}
              <mark className="plugin">Voukoder</mark> или других форматов такой проблемы
              нет.
            </li>
            <li>Он плохо дружит с неквадратными пикселями в настройках композиции.</li>
            <li>
              Из-за особенностей самого стандарта <mark className="video">H.264</mark> у
              вас не получится экспортировать композицию с нечётным разрешением, например{" "}
              <mark>725×501</mark>. В этом случае{" "}
              <mark className="app">Adobe After Effects</mark> автоматически растянет
              видео до <mark>726×502</mark>.
            </li>
            <li>
              Видео, экспортированные через стандартный{" "}
              <mark className="plugin">H.264</mark>, могут не открываться в стандартном{" "}
              <mark className="app">медиаплеере Windows</mark> и на некоторых устройствах,
              например <mark>iPhone</mark>. Обычно это решается повторной конвертацией
              видео через любой конвертер (например,{" "}
              <mark className="app">Shutter Encoder</mark>) или экспортом через
              альтернативные плагины.
            </li>
          </ul>
        </Addition>
        <ul>
          <li>
            <p>
              Чтобы отправить на экспорт текущую композицию или выделенную в окне{" "}
              <mark className="select">«Project»</mark>, нажмите{" "}
              <mark className="key">Ctrl + M</mark> или выберите в меню{" "}
              <mark className="select">«File» → «Export» → «Add to Render Queue»</mark>.
            </p>
            <ContentFigure
              caption="Render Queue"
              imgTitle="Очередь рендеринга с выбранным H.264"
              src="images/aftereffects/render_queue_h264.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <p>
              Когда откроется окно <mark className="select">«Render Queue»</mark>,
              убедитесь, что у вас выбран стандартный пресет для экспорта в{" "}
              <mark className="video">H.264</mark>. Выбрать нужный шаблон можно с помощью
              значка стрелки справа от <mark className="select">«Output Module»</mark>.
            </p>
          </li>
          <li>
            Чтобы изменить битрейт или другие параметры, нажмите на название шаблона —
            откроется окно <mark className="select">«Output Module»</mark>. Параметры,
            связанные с изменением битрейта для <mark className="video">H.264</mark>,
            находятся в разделе <mark className="select">«Format Options»</mark>.
            <ContentFigure
              caption="Output Module Settings"
              imgTitle="Окно Output Module"
              src="images/aftereffects/output_module_format_options.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            В этом окне выбирается режим битрейта: переменный или постоянный. Для
            динамичных сцен с кучей частиц выберите <mark className="select">«CBR»</mark>{" "}
            и установите битрейт повыше. Режим <mark className="select">«VBR»</mark>{" "}
            сэкономит размер файла, но может ударить по качеству.
            <Addition type="info">
              Если не хотите подбирать битрейт вручную, но нужно получить максимальное
              качество экспортируемой композиции, тогда ваш выбор — режим{" "}
              <mark className="select">«CQ»</mark> в плагине{" "}
              <mark className="plugin">Voukoder</mark>. В стандартном{" "}
              <mark className="plugin">H.264</mark> данный режим кодирования отсутствует.
            </Addition>
            <ContentFigure
              caption="H.264 Options"
              imgTitle="Окно настроек H.264"
              src="images/aftereffects/h264_options.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            После того как вы указали нужный битрейт или настроили нужные параметры
            экспорта, нажмите на <mark className="select">«OK»</mark>, пока не закроются
            все окна настроек формата.
          </li>
          <li>
            В <mark className="select">«Output To»</mark> укажите путь и имя файла. Для
            запуска экспорта нажмите <mark className="select">«Render»</mark> или клавишу{" "}
            <mark className="key">Enter</mark>.
            <ContentFigure
              caption="Render Queue"
              imgTitle="Кнопка начала рендеринга"
              src="images/aftereffects/start_render_button.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Когда экспорт композиции закончится, файл будет лежать в указанной вами
            директории. С полученным видео делайте что хотите: передайте клиенту,
            опубликуйте в соцсетях или удалите.
          </li>
        </ul>
        <Divider>Экспортируем с помощью Voukoder</Divider>
        <ContentFilter
          windowsContent={
            <div>
              <Addition type="info">
                В этой статье демонстрируется{" "}
                <mark className="plugin">Voukoder Classic</mark> версии{" "}
                <mark>13.4.1</mark>, недоступная для устройств на <mark>macOS</mark>.
              </Addition>
              <p>
                Если результат экспорта через стандартный{" "}
                <mark className="video">H.264</mark> вас не устраивает, попробуйте плагин{" "}
                <mark className="plugin">Voukoder</mark>. Прежде чем воспользоваться
                экспортом композиции с помощью <mark className="plugin">Voukoder</mark> —
                нужно установить саму утилиту вместе с «коннекторами» как обычно с помощью
                установочных файлов.
              </p>
              <p>
                К сожалению, исходный репозиторий демонстрируемой версии{" "}
                <mark className="plugin">Voukoder</mark> на{" "}
                <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">GitHub</a>{" "}
                был удалён из-за его замены на платный{" "}
                <mark className="plugin">Voukoder Pro</mark>, поэтому перезалив данной
                версии экспортёра вместе с «коннекторами» вы можете найти в{" "}
                <a href="https://t.me/+Qd9xu7A4TeIwNzY6">складе стройматериалов</a> по
                хештегу <mark className="tag">#voukoder</mark>. После корректной установки{" "}
                <mark className="plugin">Voukoder</mark> он должен появиться в списке{" "}
                <mark className="select">«Format»</mark> в окне{" "}
                <mark className="select">«Output Module»</mark>.
              </p>
              <Addition type="warning">
                Для корректной установки <mark className="plugin">Voukoder</mark> —
                убедитесь в том, что <mark className="app">Adobe After Effects</mark> был
                установлен в директорию по умолчанию и не менялся при установке.
              </Addition>
              <ul>
                <li>
                  <p>
                    Чтобы отправить на экспорт текущую или выделенную в окне{" "}
                    <mark className="select">«Project»</mark> композицию, нажмите{" "}
                    <mark className="key">Ctrl + M</mark> или выберите в меню{" "}
                    <mark className="select">
                      «File» → «Export» → «Add to Render Queue»
                    </mark>
                    .
                  </p>
                  <ContentFigure
                    caption="Render Queue"
                    imgTitle="Очередь рендеринга с выбранным H.264"
                    src="images/aftereffects/render_queue_h264.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                  <p>
                    Чтобы выбрать <mark className="plugin">Voukoder</mark> в качестве
                    формата для экспорта, нужно нажать на название текущего пресета для
                    открытия окна <mark className="select">«Output Module»</mark>.
                  </p>
                </li>
                <li>
                  В открывшемся окне <mark className="select">«Output Module»</mark>{" "}
                  выберите в <mark className="select">«Format</mark> значение{" "}
                  <mark className="select">«Voukoder»</mark>. Чтобы открыть основное окно
                  дополнительных настроек экспорта в{" "}
                  <mark className="plugin">Voukoder</mark> для выбора кодека и настроек
                  его качества, намжмите на{" "}
                  <mark className="select">«Format Options»</mark>.
                  <ContentFigure
                    caption="Output Module Settings"
                    imgTitle="Выбор Voukoder в списке форматов"
                    src="images/aftereffects/selecting_voukoder.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  После открытия настроек <mark className="plugin">Voukoder</mark> нужно
                  выбрать кодек. По умолчанию выбрано значение{" "}
                  <mark className="select">«H.264»</mark>, а в скобках — технология
                  аппаратного ускорения кодирования<sup>1</sup>. При необходимости вы
                  можете выбрать более эффективный по сжатию кодек{" "}
                  <mark className="video">HEVC (H.265)</mark>, если нужно сохранить такое
                  же качество при меньшем размере файла по сравнению с{" "}
                  <mark className="video">H.264</mark>.
                  <ContentFigure
                    caption="Voukoder 13.4.1"
                    imgTitle="Выбор варианта кодека в Voukoder"
                    src="images/aftereffects/select_codec_in_voukoder.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                  <Addition type="info">
                    <ul>
                      <li>
                        <sup>1</sup> Варианты показаны на примере связки «процессор{" "}
                        <mark className="company">AMD</mark> + видеокарта{" "}
                        <mark className="company">NVIDIA</mark>». Выбор на вашем
                        устройстве может отличаться.
                        <ul>
                          <li>
                            <mark className="select">«x264»</mark> или{" "}
                            <mark className="select">«x265»</mark> — кодирование с
                            использованием только процессора. Стабильно, но не всегда
                            быстро.
                          </li>
                          <li>
                            <mark className="select">«NVIDIA NVENC»</mark> — кодирование с
                            использованием аппаратного ускорения видеокарты{" "}
                            <mark className="company">NVIDIA</mark>. Это может ускорить
                            рендеринг, но не гарантирует полное использование видеокарты,
                            особенно при использовании «тяжёлых» эффектов.
                          </li>
                          <li>
                            <mark className="select">«AMD AMF»</mark> — то же самое, но
                            для видеокарт и встроенной графики{" "}
                            <mark className="company">AMD</mark>.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Кодеки <mark className="video">AV1</mark> и{" "}
                        <mark className="video">VP9</mark> редко используются для экспорта
                        из <mark className="app">Adobe After Effects</mark>. Если вам
                        нужен этот формат, проще экспортировать композицию в условном{" "}
                        <mark className="video">Apple Prores 4444</mark>, а затем
                        переконвертировать видео позже через{" "}
                        <a href="https://www.shutterencoder.com/">Shutter Encoder</a> или
                        другие конвертеры.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  <p>
                    После выбора кодека нужного кодека, например{" "}
                    <mark className="select">«H.264 (NVIDIA NVENC)»</mark>, перейдите во
                    вкладку <mark className="select">«Параметры»</mark>. В этой вкладке
                    можно настроить качество видео с помощью метода постоянного качества
                    <sup>1</sup>, который нацелен на поддержание постоянного
                    воспринимаемого качества, не заботясь о размере файла.
                  </p>
                  <Addition type="info">
                    <sup>1</sup> Параметр постоянного качества может называться по-разному
                    в зависимости от выбранного кодека:{" "}
                    <mark className="select">«CQP»</mark>,{" "}
                    <mark className="select">«QP»</mark>,{" "}
                    <mark className="select">«CRF»</mark> или{" "}
                    <mark className="select">«CQ»</mark>.
                  </Addition>
                  <ContentFigure
                    caption="Voukoder 13.4.1"
                    imgTitle="Настройка качества видео в Voukoder"
                    src="images/aftereffects/codec_parameter_voukoder.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                  <p>
                    При использовании метода постоянного качества кодировщик сам решает,
                    какой битрейт необходимо выделить для каждого кадра, чтобы
                    соответствовать заданному уровню качества, который устанавливается
                    значением <mark className="select">«CQP»</mark> от <mark>0</mark> до{" "}
                    <mark>51</mark>, где <mark>0</mark> равно сжатию без потерь с огромным
                    размером, <mark>51</mark> — наименьшему размеру файла и наихудшему
                    качеству видео.
                  </p>
                  <ul>
                    <li>
                      По умолчанию для параметра постоянного качества установлено значение{" "}
                      <mark>23</mark>. Этого с головой хватит для экспорта на{" "}
                      <mark className="app">YouTube</mark>,{" "}
                      <mark className="app">VK Видео</mark> и подобные платформы. Учтите,
                      что видеохостинги всё равно будут сжимать видео по-своему, чтобы
                      уместить видео для хранения на собственных серверах.
                    </li>
                    <li>
                      Если нужно сохранить почти максимальное качество, укажите для
                      параметра постоянного качества значение от <mark>17</mark> до{" "}
                      <mark>20</mark>. Размер файла заметно возрастёт. Значение меньше{" "}
                      <mark>15</mark> смысла ставить нет, серьёзного сохранения качества
                      вы не заметите, однако можете сильно раздуть размер файла.
                    </li>
                    <li>
                      Если хотите получить хорошее соотношение «качество/минимальный вес»,
                      укажите для параметра постоянного качества значение <mark>30</mark>.
                      Экстремальные значения, например <mark>50</mark>, использовать не
                      рекомендуется, так как в итоге вы можете получить «кашу» из
                      пикселей. Экспериментируйте со значениями с умом.
                    </li>
                  </ul>
                </li>
                <li>
                  Если ничего дополнительного вам не нужно настраивать, то нажмите на{" "}
                  <mark className="select">«OK»</mark>, пока не закроются все окна
                  настроек формата. Не забудьте указать в{" "}
                  <mark className="select">«Output To»</mark> путь и имя файла. Для
                  запуска экспорта нажмите <mark className="select">«Render»</mark> или
                  клавишу <mark className="key">Enter</mark>.
                  <ContentFigure
                    caption="Render Queue"
                    imgTitle="Кнопка начала рендеринга"
                    src="images/aftereffects/start_render_button.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                </li>
              </ul>
            </div>
          }
        />
        <Divider>Экспортируем с помощью AfterCodecs</Divider>
        <p>
          Ещё одна хорошая альтернатива для экспорта <mark className="video">H.264</mark>{" "}
          из <mark className="app">Adobe After Effects</mark> — использование стороннего
          экспортёра <mark className="plugin">AfterCodecs</mark> от{" "}
          <mark className="company">Autokroma</mark>.
        </p>
        <ul>
          <li>
            <p>
              Чтобы отправить на экспорт текущую или выделенную в окне{" "}
              <mark className="select">«Project»</mark> композицию, нажмите{" "}
              <mark className="key">Ctrl + M</mark> или выберите в меню{" "}
              <mark className="select">«File» → «Export» → «Add to Render Queue»</mark>.
            </p>
            <ContentFigure
              caption="Render Queue"
              imgTitle="Очередь рендеринга с выбранным H.264"
              src="images/aftereffects/render_queue_h264.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <p>
              Чтобы выбрать <mark className="plugin">AfterCodecs</mark> в качестве формата
              для экспорта, нужно нажать на название текущего пресета для открытия окна{" "}
              <mark className="select">«Output Module»</mark>.
            </p>
          </li>
          <li>
            В открывшемся окне <mark className="select">«Output Module»</mark> выберите в{" "}
            <mark className="select">«Format</mark> значение{" "}
            <mark className="select">«AfterCodecs MP4»</mark>. Чтобы открыть основное окно
            дополнительных настроек экспорта в <mark className="plugin">AfterCodecs</mark>{" "}
            для выбора кодека и настроек его качества, намжмите на{" "}
            <mark className="select">«Format Options»</mark>.
            <ContentFigure
              caption="Output Module Settings"
              imgTitle="Выбор AfterCodecs из списка форматов"
              src="images/aftereffects/selecting_aftercodecs.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            <p>
              В открывшемся окне можно настроить качество и скорость кодирования. По
              умолчанию в параметре <mark className="select">«Quality»</mark> установлено
              значение <mark>70</mark>, а для <mark className="select">«Speed»</mark> —{" "}
              <mark>5</mark>.
            </p>
            <ContentFigure
              caption="AfterCodecs 1.11.5 for Adobe After Effects"
              imgTitle="Настройки AfterCodecs"
              src="images/aftereffects/aftercodecs_settings.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <ul>
              <li>
                Параметр <mark className="select">«Tradeoff»</mark> определяет тип
                кодирования: <mark className="select">«Quality»</mark> — ставит в
                приоритет качество, которое задаётся в процентах, а результат похож на
                смесь <mark className="select">«VBR»</mark> и режима постоянного качества;{" "}
                <mark className="select">«Bitrate»</mark> — задаёт постоянный битрейт на
                всё видео; <mark className="select">«File Size»</mark> — подгоняет
                качество с помощью переменного битрейта, чтобы уложиться в заданный размер
                файла.
              </li>
              <li>
                Параметр <mark className="select">«Speed»</mark> определяет скорость
                кодирования. Чем ниже значение, тем медленнее процесс, но лучше итоговое
                качество и эффективнее сжатие.
              </li>
              <li>
                В разделе <mark className="select">«Colors»</mark> можно настроить
                битность и цветовой диапазон, но обычно эти параметры не трогают.
              </li>
              <li>
                Параметр <mark className="select">«Audio Bitrate»</mark> отвечает за
                качество звука. Автоматический режим может работать криво, поэтому лучше
                вручную выставить значение <mark>512 Кбит/с</mark>, чтобы не жертвовать
                качеством.
              </li>
              <li>
                Параметры <mark className="select">«Tuning»</mark>,{" "}
                <mark className="select">«H.264 Profiles»</mark>,{" "}
                <mark className="select">«GOP»</mark>,{" "}
                <mark className="select">«Audio Bitrate»</mark>,{" "}
                <mark className="select">«VR Meta»</mark> и{" "}
                <mark className="select">«Fast Start»</mark> лучше не трогать, если нет
                веской на то причины.
              </li>
            </ul>
          </li>
          <li>
            Если ничего дополнительного вам не нужно настраивать, то нажмите на{" "}
            <mark className="select">«OK»</mark>, пока не закроются все окна настроек
            формата. Не забудьте указать в <mark className="select">«Output To»</mark>{" "}
            путь и имя файла. Для запуска экспорта нажмите{" "}
            <mark className="select">«Render»</mark> или клавишу{" "}
            <mark className="key">Enter</mark>.
            <ContentFigure
              caption="Render Queue"
              imgTitle="Кнопка начала рендеринга"
              src="images/aftereffects/start_render_button.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
        </ul>
        <Addition type="info">
          Более подробную информацию о рекомендуемом процессе ввода и вывода можно найти в
          Telegram-посте от <a href="https://t.me/montage_tutors/2">Montage Tutors</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="vp9, av1, alpha channel, видео с прозрачностью"
        title="Как экспортировать композицию в WEBM?"
      >
        <p>
          Обычно под <mark className="video">WEBM</mark> понимают видео с кодеками{" "}
          <mark className="video">VP9</mark> или <mark className="video">AV1</mark>. Это
          современные стандарты сжатия от <mark className="company">Google</mark>, которые
          часто используют в вебе и мобильных приложениях. Они сжимают видео эффективнее,
          чем <mark className="video">H.264</mark>, и, что важно, поддерживают альфа-канал
          <sup>1</sup>.
        </p>
        <Addition type="warning">
          <sup>1</sup> <mark className="app">Safari</mark> на <mark>iOS</mark> и{" "}
          <mark>macOS</mark> плохо дружит с <mark className="video">WEBM</mark> с
          прозрачностью. Вместо неё вы, скорее всего, увидите просто чёрный фон.
        </Addition>
        <p>
          Стандартными средствами из <mark className="app">Adobe After Effects</mark> или{" "}
          <mark className="app">Adobe Media Encoder</mark> экспортировать в{" "}
          <mark className="video">WEBM</mark> не получится. Сначала придётся вывести
          композицию в качественном монтажном кодеке, например{" "}
          <mark className="video">Apple ProRes</mark>, а уже потом конвертировать
          полученный файл через <mark className="app">Shutter Encoder</mark>.
        </p>
        <Addition type="danger">
          <p>
            Несмотря на то, что существует сторонний плагин для экспорта{" "}
            <a href="https://fnord.com/">WEBM от fnord</a>, я категорически не рекомендую
            его использовать. Он часто выдаёт видео с жуткими артефактами, отвратительным
            качеством или просто «падает» посреди рендера без всякой на то причины.
          </p>
        </Addition>
        <Divider>Экспортируем композицию в промежуточном формате</Divider>
        {/* FIXME: заменить видео на поштучные картинки */}
        <ContentFigure
          caption="Экспорт видео в Apple ProRes"
          src="images/aftereffects/export_to_prores.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <ul>
          <li>
            Прежде чем экспортировать композицию в{" "}
            <mark className="video">Apple Prores</mark>, добавьте её в очередь рендеринга
            с помощью комбинации клавиш <mark className="key">Ctrl + M</mark> или через
            меню <mark className="select">«File» → «Export» → «Add to Render Queue»</mark>
            .
          </li>
          <li>
            Нажмите на название пресета в очереди рендера, чтобы открыть настройки{" "}
            <mark className="select">«Output Module»</mark>.{/* FIXME: фото */}
          </li>
          <li>
            В параметре <mark className="select">«Format»</mark> выберите{" "}
            <mark className="select">«QuickTime»</mark>, а в{" "}
            <mark className="select">«Format Options»</mark> — подходящий тип кодека{" "}
            <mark className="video">Apple ProRes</mark>.{/* FIXME: фото */}
            <ul>
              <li>
                Для экспорта без альфа-канала выберите{" "}
                <mark className="video">Apple ProRes 422</mark> или другой подходящий
                вариант.
              </li>
              <li>
                Для экспорта с альфа-каналом выберите кодек{" "}
                <mark className="video">Apple ProRes 4444</mark> и не забудьте установить
                для параметра <mark className="select">«Channels»</mark> значение{" "}
                <mark className="select">«RGB + Alpha»</mark>.
              </li>
            </ul>
          </li>
          <li>
            Если другие настройки не требуются, нажмите{" "}
            <mark className="select">«OK»</mark>. Не забудьте указать путь и имя файла в{" "}
            <mark className="select">«Output To»</mark>, а затем запустите экспорт кнопкой{" "}
            <mark className="select">«Render»</mark> или клавишей{" "}
            <mark className="key">Enter</mark>.
            <ContentFigure
              caption="Render Queue"
              imgTitle="Кнопка начала рендеринга"
              src="images/aftereffects/start_render_button.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
        </ul>
        <Divider>Конвертируем в WEBM с помощью Shutter Encoder</Divider>
        <ul>
          <li>
            После экспорта композиции из <mark className="app">Adobe After Effects</mark>,
            откройте <mark className="app">Shutter Encoder</mark>
            <sup>1</sup> и импортируйте в него полученный файл.
            <Addition type="info">
              <ul>
                <li>
                  <sup>1</sup> Если <mark className="app">Shutter Encoder</mark> у вас не
                  установлен, скачайте его{" "}
                  <a href="https://www.shutterencoder.com/">по этой ссылке</a>. Чтобы
                  появилась ссылка на скачивание, не забудьте сдвинуть ползунок для
                  пожертвований на <mark>0</mark>.
                </li>
                <li>
                  В <mark className="app">Shutter Encoder</mark> лучше сразу переключиться
                  на английский интерфейс. Перевод на русский язык в этой программе
                  кривоват, из-за него можно легко запутаться и включить не те параметры.
                  Чтобы открыть настройки, нажмите на иконку шестерёнки в левой части
                  заголовка окна.
                </li>
              </ul>
            </Addition>
            <ContentFigure
              caption="Shutter Encoder"
              imgTitle="Импорт материалов в Shutter Encoder"
              src="images/shutter_encoder_import.png"
              theme="dark"
              type="image"
              variant="mac"
            />
          </li>
          <li>
            В поле <mark className="select">«Choose Function»</mark> выберите{" "}
            <mark className="video">VP9</mark> или <mark className="video">AV1</mark>
            <sup>1</sup>.
            <Addition type="info">
              <sup>1</sup> <mark className="video">AV1</mark> сжимает видео эффективнее,
              чем <mark className="video">VP9</mark>, но хуже поддерживается старыми
              устройствами.
            </Addition>
            <ContentFigure
              caption="Shutter Encoder"
              imgTitle="Выбор VP9 в Shutter Encoder"
              src="images/select_vp9_shutter_encoder.png"
              theme="dark"
              type="image"
              variant="mac"
            />
          </li>
          <li>
            Если вы экспортировали файл в <mark className="video">Apple ProRes 4444</mark>{" "}
            и нужно сохранить прозрачность, справа в разделе{" "}
            <mark className="select">«Advanced Settings»</mark> включите параметр{" "}
            <mark className="select">«Enable alpha channel»</mark>.
            <ContentFigure
              caption="Shutter Encoder"
              imgTitle="Включение альфа-канала в Shutter Encoder"
              src="images/enable_alpha_shutter_encoder.png"
              theme="dark"
              type="image"
              variant="mac"
            />
          </li>
          <li>
            Если больше ничего настраивать не нужно, укажите путь для сохранения и нажмите{" "}
            <mark className="select">«Start function»</mark>. Готовый файл будет упакован
            в контейнер <mark className="video">WEBM</mark> и готов к использованию.
            {/* FIXME: фото  */}
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="gifgun, ezgif, animated gif"
        title="Как экспортировать композицию в GIF?"
      >
        <p>
          <mark className="image">GIF</mark> — старый, но до сих пор популярный формат,
          разработанный в 1987 году. Его ценят за простоту: любой браузер или мессенджер
          открывает его без проблем, поэтому он и закрепился в культуре мемов, стикеров и
          коротких анимаций.
        </p>
        <p>
          Стандартного экспорта в <mark className="image">GIF</mark> из{" "}
          <mark className="app">Adobe After Effects</mark> нет, но есть обходные пути.{" "}
          <mark className="image">GIF</mark> можно создать с помощью стороннего расширения{" "}
          <mark className="plugin">GifGun</mark>, через{" "}
          <mark className="app">Adobe Media Encoder</mark> или с помощью
          онлайн-конвертера, например <a href="https://ezgif.com/video-to-gif">Ezgif</a>.
          Последний, пожалуй, даёт лучший результат по соотношению «качество/размер».
        </p>
        <Addition type="warning">
          <p>
            Имейте в виду: у формата <mark className="image">GIF</mark> множество
            ограничений и особенностей. Для веб-страниц разумнее использовать{" "}
            <mark className="video">WEBM</mark> или <mark className="video">H.264</mark> —
            они обеспечивают лучшее качество при меньшем размере файла.
          </p>
          <ul>
            <li>
              Нет поддержки полупрозрачности: пиксель либо полностью прозрачный, либо нет.
            </li>
            <li>
              Палитра ограничена 256 цветами, поэтому о плавных градиентах и точной
              цветопередаче придётся забыть.
            </li>
            <li>
              Размер файла быстро растёт, особенно при высоком разрешении или частоте
              кадров. Для веба лучше придерживаться максимум <mark>1024×576</mark> и{" "}
              <mark>15 FPS</mark>. Тяжёлые <mark className="image">GIF</mark> перегружают
              браузер и замедляют сайты, особенно на мобильных устройствах.
            </li>
            <li>
              <mark className="image">GIF</mark> сжимается крайне посредственно по
              сравнению с <mark className="video">WEBM</mark> или{" "}
              <mark className="video">MP4</mark>, поэтому почти всегда получается больше
              по размеру и хуже по качеству.
            </li>
          </ul>
        </Addition>
        <Divider>Экспортируем с помощью GifGun</Divider>
        {/* TODO: переделать под список */}
        <ul>
          <li>
            Предположим, что вы уже установили расширение{" "}
            <mark className="plugin">GifGun</mark>. Откройте его через меню{" "}
            <mark className="select">«Window» → «Extensions» → «GifGun»</mark>.
            <ContentFigure
              caption="Adobe After Effects"
              imgTitle="Открытие расширения GifGun"
              src="images/aftereffects/open_gifgun.png"
              theme="light"
              type="image"
              variant="windows"
            />
            <Addition type="info">
              <ul>
                <li>
                  <ContentFilter
                    macContent={
                      <div>
                        Если расширение есть в списке, но не открывается, убедитесь, что
                        вы выполнили в <mark className="app">Терминале</mark> команды для
                        включения debug-режима, необходимые для работы сторонних
                        расширений. Чтобы скопировать команды в буфер обмена, достаточно
                        на них нажать.
                        <code style={{fontSize: "0.875em"}}>
                          defaults write com.adobe.CSXS.5 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.6 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.7 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.8 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.9 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.10 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.11 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.12 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.13 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.14 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.15 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.16 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.17 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.18 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.19 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.20 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.21 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.22 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.23 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.24 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.25 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.26 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.27 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.28 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.29 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.30 PlayerDebugMode 1
                          <br />
                        </code>
                      </div>
                    }
                    windowsContent={
                      <div>
                        Если расширение есть в списке, но не открывается, убедитесь, что
                        вы подтвердили слияние записей с{" "}
                        <a
                          download
                          href="files/Enable Extensions Adobe.reg"
                        >
                          файлом реестра
                        </a>
                        , включающим debug-режим для корректной работы сторонних
                        расширений.
                      </div>
                    }
                  />
                </li>
                <li>
                  Для корректной работы расширения рекомендуется в настройках{" "}
                  <mark className="select">
                    «Edit» → «Preferences» → «Scripting & Expressions»
                  </mark>{" "}
                  установить флажок у параметра{" "}
                  <mark className="select">
                    «Allow Scripts to Write Files and Access Network»
                  </mark>
                  .
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            В открывшемся окне расширения вы увидите две основные кнопки:{" "}
            <mark className="select">«Make GIF»</mark> для запуска экспорта и кнопка с
            шестерёнкой для настроек.
            <ContentFigure
              caption="GifGun"
              imgTitle="Главное окно GifGun"
              src="images/aftereffects/gifgun_main.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            В настройках вы можете указать максимальный размер файла, частоту кадров и
            путь сохранения.
            <ContentFigure
              caption="GifGun"
              imgTitle="Настройки экспорта в GifGun"
              src="images/aftereffects/gifgun_settings.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Чтобы начать экспорт <mark className="image">GIF</mark> с заданными вами
            настройками, просто нажмите на <mark className="select">«Make GIF»</mark> из
            главного окна расширения и ожидайте получения результата. Если чекбокс{" "}
            <mark className="select">«Open GIF folder»</mark> был включен, расширение
            автоматически откроет системный проводник с директорией, куда была сохранена
            анимация.
          </li>
        </ul>
        <Divider>Конвертируем через Ezgif</Divider>
        <p>
          Если вы не хотите возиться с дополнениями или у вас уже есть готовое видео,
          которое нужно просто конвертировать в <mark className="image">GIF</mark>,
          воспользуйтесь онлайн-сервисом{" "}
          <a href="https://ezgif.com/video-to-gif">Ezgif</a>. Он обеспечивает хорошее
          соотношение качества и размера файла.
        </p>
        <ul>
          <li>
            Сначала загрузите видео на сайт — просто перетащите его в область публикации и
            нажмите кнопку <mark className="select">«Upload Video»</mark>.
            <Addition type="warning">
              Максимальный размер загружаемого файла — <mark>200 МБ</mark>.
            </Addition>
            <ContentFigure
              caption="Ezgif"
              imgTitle="Главная страница Ezgif"
              src="images/ezgif_main.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            После загрузки можно настроить частоту кадров и разрешение итогового файла.
            Выбор параметров не слишком широкий, но для простой конвертации этого вполне
            достаточно. После указания нужных параметров, нажмите{" "}
            <mark className="select">«Convert to GIF!»</mark>.
            <Addition type="warning">
              Максимальная длительность <mark className="image">GIF</mark> зависит от
              выбранной частоты кадров: до 60 секунд при <mark>5 FPS</mark> или до 15
              секунд при <mark>20 FPS</mark>.
            </Addition>
            <ContentFigure
              caption="Ezgif"
              imgTitle="Настройки конвертации в Ezgif"
              src="images/ezgif_settings.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            После конвертации готовый <mark className="image">GIF</mark> появится ниже — в
            разделе <mark className="select">«Output GIF Animation»</mark>. Сохраните его,
            нажав <mark className="key">ПКМ</mark> по анимации и выбрав{" "}
            <mark className="select">«Сохранить изображение как...»</mark>.
          </li>
        </ul>
        <Divider>Экспортируем с помощью Adobe Media Encoder</Divider>
        <p>
          <mark className="image">GIF</mark> можно экспортировать и через{" "}
          <mark className="app">Adobe Media Encoder</mark>. Несмотря на то, что многие его
          обходят стороной, он всё же предлагает больше вариантов форматов экспорта по
          сравнению с «чистым» <mark className="app">Adobe After Effects</mark>.
        </p>
        <ul>
          <li>
            Для начала отправьте композицию<sup>1</sup> из{" "}
            <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark> через меню{" "}
            <mark className="select">
              «File» → «Export» → «Add to Adobe Media Encoder Queue»
            </mark>{" "}
            и дождитесь открытия программы, либо откройте{" "}
            <mark className="app">Adobe Media Encoder</mark> и импортируйте в него готовое
            видео.
            <Addition type="info">
              <sup>1</sup> Композиция корректно отправится в{" "}
              <mark className="app">Adobe Media Encoder</mark> только если версии обеих
              программ совпадают по году выпуска и они установлены в стандартные папки.
            </Addition>
          </li>
          <li>
            В очереди экспорта выберите формат{" "}
            <mark className="select">«Animated GIF»</mark>. Там же можно задать пресет и
            путь сохранения. Для детальной настройки разрешения, частоты кадров и других
            параметров нажмите на название пресета, чтобы открыть окно{" "}
            <mark className="select">«Export Settings»</mark>.
            <Addition type="warning">
              Если выбрать формат <mark className="select">«GIF»</mark> без слова{" "}
              <mark>Animated</mark>, вы получите последовательность отдельных кадров,
              которая заполнит всю папку сохранения.
            </Addition>
            <ContentFigure
              caption="Media Encoder"
              imgTitle="Выбор формата GIF для экспорта через Adobe Media Encoder"
              src="images/aftereffects/selecting_animated_gif_media_encoder.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            После настройки параметров в <mark className="select">«Export Settings»</mark>{" "}
            нажмите <mark className="select">«OK»</mark>, чтобы закрыть окно, и запустите
            экспорт, нажав на зелёную иконку в очереди экспорта.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="prores 4444, prores 422, quicktime, видео с прозрачностью, alpha channel"
        title="Как экспортировать композицию в Apple ProRes?"
      >
        <AdditionWarning>
          В <mark className="video">H.264</mark> и <mark className="file">MP4</mark>{" "}
          нельзя экспортировать композицию с альфа-каналом. Это можно сделать только на
          устройствах с <mark>macOS</mark> и при использовании кодека{" "}
          <mark className="video">H.265 (HEVC)</mark>.
        </AdditionWarning>
        <p>
          Прежде чем начать выводить композицию с альфа-каналом, убедитесь в том, что в
          вашей композиции есть сам альфа-канал. Без этого никак. Чтобы проверить это,
          можно воспользоваться кнопкой{" "}
          <mark className="ui">Toggle Transparency Grid</mark>, которая подставляет сетку
          в виде шахматной доски для отображения прозрачных частей в композиции.
        </p>
        <ImageFigure
          caption="Composition"
          imgSrc="images/aftereffects/toggle_transparency_grid.png"
          imgTitle="Включение сетки для отображения прозрачных частей"
          styleClass="figure_windows-dark"
        />
        <p>
          Если всё с этим в порядке, то пора переходить в{" "}
          <mark className="ui">Render Queue</mark>, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. После перехода в очередь рендера откройте{" "}
          <mark className="ui">Output Module</mark> и выберите в параметре{" "}
          <mark className="ui">Format</mark> значение{" "}
          <mark className="plugin">Quicktime</mark>. Потом откройте{" "}
          <mark className="ui">Format Options</mark> и выберите там параметр{" "}
          <mark className="video">Apple Prores 4444</mark> или{" "}
          <mark className="video">GoPro Cineform</mark> в разделе{" "}
          <mark className="ui">Video Codec</mark>. Затем не забудьте указать в{" "}
          <mark className="ui">Channels</mark> значение{" "}
          <mark className="ui">RGB + Alpha</mark>, чтобы экспортировать видео с
          прозрачностью.
        </p>
        <VideoFigure
          caption="Adobe After Effects"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/export_prores4444_rgb-alpha.mp4"
        />
      <DetailsSummary
        tag="аудио, звук, музыка, wav, mp3, aiff"
        title="Как экспортировать из композиции только аудио?"
      >
      </DetailsSummary>
      <DetailsSummary
        tag="стикеры, tgs, lottie, animated stickers"
        title="Как экспортировать анимацию для стикеров и эмодзи в Telegram?"
      >
        <p>
          В современном мире - только ленивый не слышал о мессенджере{" "}
          <mark className="app">Telegram</mark>, а также о функции отправки стикеров
          собеседнику. В <mark className="word">стикерах</mark> можно хранить всякую
          ржаку, мемы и прочие виды контента. Но мало кто знает, как их можно создать в{" "}
          <mark className="app">Telegram</mark> и экспортировать свою композицию из{" "}
          <mark className="app">Adobe After Effects</mark> в соответствии с требованиями
          стикеров. Стикеры делятся на четыре вида и у каждого имеется свой подход к
          экспорту из программы и импорту в <mark className="app">Telegram</mark>.
        </p>
        <Divider>Разбираемся с типами стикеров</Divider>
        <ul>
          <li>
            <mark className="word">Статичный стикер</mark> или{" "}
            <mark className="word">статичный эмодзи</mark> - обычная картинка, которая
            отправляется собеседнику. Их можно создать в любом графическом редакторе,
            например <mark className="app">Adobe Photoshop</mark> или{" "}
            <mark className="app">GIMP</mark>, или экспортировать из{" "}
            <mark className="app">Adobe After Effects</mark> как{" "}
            <a href="#10.10">один кадр</a>, главное соблюдать некоторые требования.
            <ul>
              <li>
                Для создания принимаются изображения формата{" "}
                <mark className="image">PNG</mark> или <mark className="image">WebP</mark>{" "}
                с прозрачным или непрозрачным фоном.
              </li>
              <li>
                Разрешение такого стикера должно быть не больше, чем <mark>512</mark> на{" "}
                <mark>512</mark> пикселей. Такие стикеры можно сделать с любым
                соотношением сторон, главное чтобы ни одна сторона не была больше чем{" "}
                <mark>512</mark> пикселей.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Анимированный стикер</mark> - векторные стикеры с
            анимацией, которые не теряют качество в зависимости от того, на каком
            устройстве они проигрываются. По своей сути, он похож на анимацию{" "}
            <mark>Lottie</mark> и имеет ряд ограничений по эффектам и весу. Разрешение у
            композиции должно быть <mark>512</mark> на <mark>512</mark> пикселей.
            Количество <mark>FPS</mark> у композиции должно быть строго со значением{" "}
            <mark>30</mark> или <mark>60</mark>, иначе рендер завершится с ошибкой.
            <AdditionDanger>
              <p>
                Для корректной вывода анимации в файл формата{" "}
                <mark className="file">TGS</mark>, в вашей композиции не должно быть
                нижеперечисленных эффектов и свойств.
              </p>
              <ul>
                <li>
                  Выражения не поддерживаются, но их можно конвертировать в ключи. Для
                  этого выделите нужное свойство с выражением, нажмите на{" "}
                  <mark className="key">ПКМ</mark> и выберите{" "}
                  <mark className="ui">
                    Keyframe Assistant &gt; Convert Expression to Keyframes
                  </mark>
                  .
                </li>
                <li>
                  Не поддерживается интерполяция скорости с помощью{" "}
                  <mark>Auto Bezier</mark> у ключевых кадров. Для смены типа интерполяции
                  кадров выделите нужные ключи, нажмите на{" "}
                  <mark className="key">Ctrl + Alt + K</mark> и избавляйтесь там от типа
                  автоматического Безье.
                </li>
                <li>
                  Слои с изображениями не поддерживаются. Если вам нужно будет
                  использовать такой слой, то вы можете выполнить авто-трассировку слоя
                  для конвертации в вектор в <mark className="ui">Adobe Illustrator</mark>{" "}
                  или другом софте, а затем импортировать их как слои-фигуры.{" "}
                  <a href="https://helpx.adobe.com/ru/illustrator/using/image-trace-results-optimization.html">
                    Подробнее...
                  </a>
                </li>
                <li>
                  Различные эффекты из <mark className="ui">Effects & Presets</mark>,
                  которыми вы привыкли пользоваться, категорически нельзя использовать.
                  Иначе они просто пропадут из вашей финальной анимации.
                </li>
                <li>
                  Нельзя растягивать слои и использовать <mark>Time Remapping</mark>.
                  Проверить <mark className="word">растянутость</mark> можно в столбце{" "}
                  <mark className="ui">Stretch</mark>.
                </li>
                <li>
                  Текстовые слои не поддерживаются, их нужно конвертировать в фигуру.
                  Конвертация происходит с помощью нажатия{" "}
                  <mark className="key">ПКМ</mark> по слою с текстом и выбора{" "}
                  <mark className="ui">Create &gt; Create Shapes from Text</mark>.
                </li>
                <li>
                  Не поддерживается поворот слоёв с помощью{" "}
                  <mark>Auto-Oriented Layers</mark>. Авто-ориентацию можно выключить
                  выделением слоя и нажатием <mark className="key">Ctrl + Alt + O</mark>.
                  В открывшемся окне выберите параметр <mark className="ui">Off</mark>.
                </li>
                <li>
                  Маски для слоёв, 3D-слои, <mark>Solid Layer</mark>,{" "}
                  <mark>Merge Paths</mark>, <mark>Repeater</mark>, <mark>Star Shape</mark>
                  и <mark>Gradient Stroke</mark> не поддерживаются.
                </li>
              </ul>
            </AdditionDanger>
          </li>
          <li>
            <mark className="word">Анимированные эмодзи</mark> - по своей сути похожи на{" "}
            <mark className="word">анимированные стикеры</mark>, к ней применяются такие
            же ограничения по эффектам и возможностям{" "}
            <mark className="app">Adobe After Effects</mark> и выводится аналогичным
            образом.
            <ul>
              <li>
                Для анимированных эмодзи нужно указать размер композиции <mark>100</mark>{" "}
                на <mark>100</mark> пикселей. Ни больше, ни меньше.
              </li>
              <li>
                Все ограничения по эффектам такие же, как и у{" "}
                <mark className="word">анимированных стикеров</mark>.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Видеостикер</mark> - стикер, по сути являющийся обычным
            видео, который хранится в формате <mark className="video">WebM</mark> и кодеке{" "}
            <mark className="video">VP9</mark>. Разрешение такого стикера должно быть
            максимум <mark>512</mark> на <mark>512</mark> пикселей.
          </li>
        </ul>
        <AdditionInfo>
          Подробнее о требованиях для того или иного типа стикеров вы можете посмотреть на{" "}
          <a href="https://core.telegram.org/stickers">сайте Telegram</a>.
        </AdditionInfo>
        <Divider>Экспортируем анимированный стикер через Bodymovin-Telegram</Divider>
        <p>
          Для вывода из <mark className="app">Adobe After Effects</mark> в стикеры формата{" "}
          <mark className="file">TGS</mark> нам нужно использовать бесплатное стороннее
          расширение{" "}
          <a href="https://github.com/TelegramMessenger/bodymovin-extension">
            Bodymovin-TG
          </a>
          . Учтите, что он давно не обновлялся и могут возникать различные ошибки при
          использовании самой свежей версии{" "}
          <mark className="app">Adobe After Effects</mark> и в нём меньше функций, по
          сравнению с оригинальным <mark className="plugin">Bodymovin</mark>. После
          установки <mark className="plugin">Bodymovin-TG</mark> он появится в{" "}
          <mark className="ui">
            Window &gt; Extensions &gt; Bodymovin for Telegram Stickers
          </mark>
          . Если вы уверены, что ваша анимация подходит под все требования создания
          анимированных стикеров или анимированных эмодзи, то откройте окно расширения и
          выделите в нём нужную композицию, укажите путь для сохранения и нажмите на
          кнопку <mark className="ui">Export</mark>. Если при экспорте что-то пойдет не
          так, то расширение подскажет об этом.
        </p>
        <ImageFigure
          caption="Bodymovin for Telegram Stickers"
          imgSrc="images/aftereffects/bodymovin_tg_export_window.png"
          imgTitle="Вывод анимированного стикера через Bodymovin for Telegram Stickers"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Для корректной работы расширения требуется установить чекбокс у параметра{" "}
          <mark className="ui">Allow Scripts to Write Files and Access Network</mark> в
          настройках <mark className="app">Adobe After Effects</mark> -{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Scripting & Expressions</mark>.
        </AdditionWarning>
        <p>
          После экспорта перейдите в{" "}
          <a href="https://t.me/Stickers">бот для создания стикеров</a> и начните процесс
          создания стикера. Если что-то пойдет не так, бот об этом сообщит и скажет, что
          не так. Часто ошибки могут появиться из-за слишком большого размера файла или
          неверного типа стикеров при инициализации процесса создания.
        </p>
        <Divider>
          Альтернативный вывод анимированного стикера через обычный Bodymovin
        </Divider>
        <AdditionDanger>
          Данный способ не всегда работает стабильно и был создан ради экспериментальной
          альтернативы.
        </AdditionDanger>
        <p>
          Если экспорт из <mark className="plugin">Bodymovin-TG</mark> произошёл со сбоями
          или вам не хватает функционала из оригинального расширения, то вы можете
          попробовать экспортировать анимацию через обычный{" "}
          <mark className="plugin">Bodymovin</mark>, а затем конвертировать полученный
          файл через <i style={{opacity: 0.5}}>самодельный</i> конвертер в этой статье.
        </p>
        <p>
          Прежде чем начать экспорт анимации в <mark className="file">JSON</mark> нам
          нужно установить стороннее бесплатное
          <sup>1</sup> расширение <mark className="plugin">Bodymovin</mark>, который можно
          загрузить из <a href="https://aescripts.com/bodymovin/">aescripts</a>. После
          установки он появится в{" "}
          <mark className="ui">Window &gt; Extensions &gt; Bodymovin</mark>.
        </p>
        <AdditionInfo>
          <sup>1</sup> Чтобы скачать расширение - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с
          расширением, установите цену <mark>0</mark> в{" "}
          <mark className="ui">Name Your Own Price</mark>, добавьте его в корзину и
          подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
        <AdditionWarning>
          <ul>
            <li>
              Перед началом экспорта убедитесь в том, что вся ваша анимация поддерживается
              для вывода из <mark className="plugin">Bodymovin</mark>. Совместимость
              эффектов вы можете проверить прямо в{" "}
              <mark className="plugin">Bodymovin</mark> во вкладке{" "}
              <mark className="ui">Support Features</mark>. Если тот или иной эффект или
              действие не будет поддерживаться, то в выведенной композиции могут пропасть
              некоторые объекты, слои или анимация.
            </li>
            <li>
              Для корректной работы расширения требуется установить чекбокс у параметра{" "}
              <mark className="ui">Allow Scripts to Write Files and Access Network</mark>{" "}
              в настройках <mark className="app">Adobe After Effects</mark> -{" "}
              <mark className="ui">
                Edit &gt; Preferences &gt; Scripting & Expressions
              </mark>
              .
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Для вывода векторной анимации в <mark className="file">JSON</mark> откройте
          вкладку <mark className="ui">Compositions</mark> расширения{" "}
          <mark className="plugin">Bodymovin</mark>, выделите в этом окне нужную
          композицию, укажите путь для сохранения и нажмите на кнопку{" "}
          <mark className="ui">Export</mark>. Если при экспорте что-то пойдет не так, то
          расширение подскажет об этом.
        </p>
        <ImageFigure
          caption="Bodymovin"
          imgSrc="images/aftereffects/bodymovin_export_window.png"
          imgTitle="Вывод композиции через Bodymovin"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Полученную анимацию вы можете посмотреть в расширении во вкладке{" "}
          <mark className="ui">Preview</mark> или в{" "}
          <a href="https://www.svgsprite.com/tools/lottie-player/">Lottie Player</a>.
        </AdditionInfo>
        <p>
          После успешного вывода анимации в <mark className="file">JSON</mark> - поместите
          его в блок с конвертером чуть ниже, а затем нажмите на{" "}
          <mark className="ui">Скачать преобразованный TGS</mark>.
        </p>
        <AdditionInfo>
          По небольшим тестам после конвертации <mark className="file">TGS</mark> в{" "}
          <mark className="file">JSON</mark> из статьи про импорт{" "}
          <mark className="file">TGS</mark> в{" "}
          <mark className="app">Adobe After Effects</mark> на этой странице и обратной
          конвертации в <mark className="file">TGS</mark> с помощью блока ниже,
          выяснилось, что метод <mark>python-gzip</mark> чуть лучше сжимает файл, нежели{" "}
          <mark>js-pako-gzip</mark>.
        </AdditionInfo>
        <Divider>Конвертер JSON в TGS</Divider>
        <JsonToTgsConverter />
        <p>
          После конвертации перейдите в{" "}
          <a href="https://t.me/Stickers">бот для создания стикеров</a> и начните процесс
          создания анимированных стикеров или эмодзи с помощью команд{" "}
          <mark className="code">/newanimated</mark> или{" "}
          <mark className="code">/newemojipack</mark>. Если что-то пойдет не так, бот об
          этом сообщит и скажет, что не так с вашим файлом. Часто ошибки могут появиться
          из-за слишком большого размера файла или неподдерживаемой анимации.
        </p>
        <Divider>Экспортируем видеостикер</Divider>
        <p>
          Видеостикер по своей сути - обычный короткий видеоролик, который запакован в{" "}
          <mark className="file">WebM</mark> в кодеке <mark className="video">VP9</mark>.
          Требования от <mark className="app">Telegram</mark> по такому формату следующие.
        </p>
        <ul>
          <li>
            Для обоих типов требуется экспортировать видео в формате{" "}
            <mark className="video">WebM</mark> и в кодеке{" "}
            <mark className="video">VP9</mark>.{" "}
            <a href="#10.4">На этой странице уже обсуждался вывод в VP9</a> из{" "}
            <mark className="app">Adobe After Effects</mark> с помощью конвертации
            полученного видео.
          </li>
          <li>
            Если вы собираетесь создавать{" "}
            <b>
              <u>видеостикеры</u>
            </b>
            , то максимальное разрешение такого файла должно быть не больше, чем{" "}
            <mark>512</mark> на <mark>512</mark> пикселей.
          </li>
          <li>
            Если вы собираетесь создавать{" "}
            <b>
              <u>видеосмайлики</u>
            </b>{" "}
            или{" "}
            <b>
              <u>видеоэмодзи</u>
            </b>
            , то максимальное разрешение такого файла должно быть <mark>100</mark> на{" "}
            <mark>100</mark> пикселей. Ни больше, ни меньше.
          </li>
          <li>
            Длина видео файла не должен превышать <mark>3</mark> секунды, а размер видео
            файла не должен превышать <mark>256</mark> килобайт.
          </li>
          <li>
            Фреймрейт видео файла должен быть не больше чем <mark>30</mark> кадров в
            секунду.{" "}
            <i style={{opacity: 0.5, fontSize: "0.8em"}}>Странно, что не 60...</i>
          </li>
        </ul>
        <p>
          После конвертации перейдите в{" "}
          <a href="https://t.me/Stickers">бот для создания стикеров</a> и начните процесс
          создания видеостикеров с помощью команд <mark className="code">/newvideo</mark>{" "}
          или <mark className="code">/newemojipack</mark>. Если что-то пойдет не так, бот
          об этом сообщит и скажет, что не так с вашим файлом.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="анимационный шаблон для premiere pro"
        title="Как сохранить проект в формате MOGRT?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> есть возможность создать
          анимационный шаблон из вашей композиции для последующего использования в{" "}
          <mark className="app">Adobe Premiere Pro</mark>. Для этого в окне{" "}
          <mark className="ui">Essential Graphics</mark> достаточно нажать на кнопку{" "}
          <mark className="ui">Export Motion Graphics Template</mark>.
        </p>
        <AdditionWarning>
          Экспортировать такой шаблон не получится, если не будет создан какой-либо
          контроллер или не будет перенесено какое-либо свойство в окно{" "}
          <mark className="ui">Essential Graphics</mark>.
        </AdditionWarning>
        <ImageFigure
          caption="Essential Graphics"
          imgSrc="images/aftereffects/export_motion_graphics_template.png"
          imgTitle="Начинаем экспорт композиции как анимационный шаблон"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          <p>
            <mark className="file">MOGRT</mark> файл по своей сути обычный архив, в
            котором хранятся два-три файла, которые формируют сам анимационный шаблон.
          </p>
          <ul>
            <li>
              <mark className="file">definition.json</mark> - файл, в котором находятся
              ссылки, контроллеры и прочая техническая информация шаблона для его
              корректной работы.
            </li>
            <li>
              <mark className="file">project.aegraphics</mark> - файл, где хранится вся
              заготовленная анимация. Стандартными средствами{" "}
              <mark className="app">Adobe Premiere Pro</mark> анимацию нельзя
              отредактировать, но такой проект можно открыть в{" "}
              <mark className="app">Adobe After Effects</mark> и при необходимости внести
              свои правки там, а затем конвертировать обратно в{" "}
              <mark className="file">MOGRT</mark>.
            </li>
            <li>
              <mark className="file">thumb.jpg</mark> - статичная обложка для
              анимационного шаблона для предварительного просмотра в окне{" "}
              <mark className="ui">Graphics Templates</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          После нажатия на кнопку экспорта - измените параметр в{" "}
          <mark className="ui">Destination</mark> на{" "}
          <mark className="ui">Local Drive</mark> и с помощью кнопки{" "}
          <mark className="ui">Browse</mark> укажите нужный путь для сохранения шаблона.
          Также в разделе <mark className="ui">Compatibility</mark> вы можете указать,
          нужно ли будет пользователю <mark className="app">Adobe Premiere Pro</mark>{" "}
          устанавливать <mark className="app">Adobe After Effects</mark> для корректной
          работы анимации или нет.
        </p>
        <ImageFigure
          caption="Export as Motion Graphics Template"
          imgSrc="images/aftereffects/export_as_motion_graphics_template.png"
          imgTitle=""
          styleClass="figure_windows-dark"
        />
        <AdditionDanger>
          <p>
            Не все эффекты, созданными вами, будут поддерживаться в анимационном шаблоне,
            если вы решите использовать <mark className="file">MOGRT</mark> в{" "}
            <mark className="app">Adobe Premiere Pro</mark> без установленного{" "}
            <mark className="app">Adobe After Effects</mark> на устройстве. Ниже вы можете
            посмотреть условия для корректной работы вашего анимационного шаблона в{" "}
            <mark className="app">Adobe Premiere Pro</mark> без{" "}
            <mark className="app">Adobe After Effects</mark>.
          </p>
          <ul>
            <li>
              Поддерживаются все стандартные эффекты, кроме{" "}
              <mark className="plugin">Camera-Shake Deblur</mark>,{" "}
              <mark className="plugin">Maxon Cineware</mark>,{" "}
              <mark className="plugin">Warp Stabilizer</mark> и нельзя использовать{" "}
              <mark className="plugin">Puppet</mark> для деформации слоёв.
            </li>
            <li>
              Само собой из-за отсутствия <mark className="app">Adobe After Effects</mark>{" "}
              нельзя будет использовать сторонние плагины.
            </li>
            <li>
              Если вы решите использовать 3D-слои, то в таком случае будет поддерживаться
              только <mark className="plugin">Classic 3D</mark>.
            </li>
            <li>
              Не все видеоформаты, а также футажи, использующие связь через{" "}
              <mark className="plugin">Dynamic Link</mark> будут работать.
            </li>
          </ul>
        </AdditionDanger>
        <p>
          После успешного экспорта вы можете использовать вашу анимацию в{" "}
          <mark className="app">Adobe Premiere Pro</mark>, сначала переместив файл в{" "}
          <mark className="ui">Graphic Templates</mark>, а затем импортированный шаблон -
          на таймлайн секвенции.
        </p>
        <YouTubeVideo
          caption="How to export MOGRT templates"
          link="tHDnFgW9NpQ"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="proxy, ускорение рендера, уменьшение перепросчёта, пререндер, быстрый повторный экспорт"
        title="Как создать прокси для композиции?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> можно создавать прокси для
          композиций, чтобы не пересчитывать тяжёлые сцены при изменении какой-нибудь
          мелочи. Это может быть полезно, если редактировать внутренности композиции вы
          больше не планируете или если вы испытываете какие-нибудь проблемы при экспорте.
        </p>
        <Divider>Создаём прокси</Divider>
        <p>
          Для того чтобы создать прокси - перейдите в окно{" "}
          <mark className="ui">Project</mark>, найдите и выделите нужную композицию,
          нажмите <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="ui">Create Proxy &gt; Movie</mark>. Программа переместит вас в
          очередь экспорта.
        </p>
        <AdditionInfo>
          Прокси можно создать и для видео, которые уже импортированы в проект, таким же
          способом.
        </AdditionInfo>
        <p>
          В очереди экспорта вам нужно установить параметр{" "}
          <mark className="ui">Best Settings</mark> в{" "}
          <mark className="ui">Render Settings</mark>. Это делается для того, чтобы прокси
          не рендерилось в низком разрешении. Ещё вы можете выбрать свой формат, например{" "}
          <mark className="video">QuickTime</mark> в кодеке{" "}
          <mark className="video">Apple Prores 422</mark>. Если композиция содержит
          альфа-канал - выберите в качестве кодека{" "}
          <mark className="video">Apple Prores 4444</mark>.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Если прокси после рендера автоматически не применился - задайте его вручную
              с помощью <mark className="ui">Set Proxy &gt; File</mark> по нужной
              композиции в окне <mark className="ui">Project</mark>. В открывшемся окне
              укажите путь до файла прокси, который был экспортирован из{" "}
              <mark className="app">Adobe After Effects</mark>.
            </li>
            <li>
              Чтобы каждый раз при создании прокси не выбирать{" "}
              <mark className="ui">Best Settings</mark> в{" "}
              <mark className="ui">Render Settings</mark> - перейдите в{" "}
              <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark> и
              выберите в открывшемся окне значение{" "}
              <mark className="ui">Best Settings</mark> в параметре{" "}
              <mark className="ui">Movie Proxy Default</mark>. Аналогичным образом вы
              можете указать стандартный пресет и для{" "}
              <mark className="ui">Output Module</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <VideoFigure
          caption="Создание прокси для композиций"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/create_comp_proxy.mp4"
        />
        <Divider>Делаем финальный экспорт вместе с прокси</Divider>
        <p>
          Если вы хотите экспортировать композицию вместе с прокси - в{" "}
          <mark className="ui">Render Settings &gt; Custom</mark> не забудьте указать
          значение <mark className="ui">Use All Proxies</mark> в параметре{" "}
          <mark className="ui">Proxy Use</mark>.
        </p>
        <AdditionInfo>
          Чтобы каждый раз при создании прокси не выбирать{" "}
          <mark className="ui">Use All Proxies</mark> в{" "}
          <mark className="ui">Render Settings</mark> - перейдите в{" "}
          <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark> и
          отредактируйте пресет <mark className="ui">Best Settings</mark> или создайте
          свой под ваши нужды. Аналогичным образом вы можете настроить пресет и для{" "}
          <mark className="ui">Output Module</mark>.
        </AdditionInfo>
        <VideoFigure
          caption="Настройка использования прокси в финальном рендере"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/use_all_proxies.mp4"
        />
        <Divider>Отключаем прокси для композиции</Divider>
        <p>
          Для того, чтобы отключить прокси - нажмите на иконку квадрата рядом с исходником
          в окне <mark className="ui">Project</mark>. Если вы хотите отвязать исходник от
          прокси насовсем - нажмите <mark className="key">ПКМ</mark> по исходнику и
          выберите <mark className="ui">Set Proxy &gt; None</mark>.
        </p>
        <VideoFigure
          caption="Переключение состояния прокси"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/toggle_disable_proxy.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="кадр, изображение, скриншот, jpg, png, psd, превью"
        title="Как экспортировать текущий кадр как изображение?"
      >
        <p>
          Иногда у пользователя возникает нужда в выводе одного кадра из композиции как
          файл изображения, желательно в полном качестве, например для создания превью или
          показать пример чего-либо. Можно сделать это двумя способами.
        </p>
        <Divider>Экспортируем через Render Queue</Divider>
        <p>
          Для того, чтобы быстро отправить текущий кадр в очередь рендера, нужно прожать
          комбинацию клавиш <mark className="key">Ctrl + Alt + S</mark> или перейти в{" "}
          <mark className="ui">Composition &gt; Save Frame As</mark> и выбрать{" "}
          <mark className="ui">File</mark>.
        </p>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/export_one_frame_render_queue.png"
          imgTitle="Сохранение одного кадра через Render Queue"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого у вас откроется <mark className="ui">Render Queue</mark>, который
          предложит экспортировать <mark className="file">PSD</mark> файл в путь, который
          вы укажете в графе <mark className="ui">Output To</mark>. Формат можно изменить
          на свой, нажав на название пресета или на стрелочку рядом с ним.
        </p>
        <AdditionInfo>
          Вы можете создать свой шаблон формата, чтобы не менять тип файла каждый раз,
          когда вы экспортируете кадр через{" "}
          <mark className="ui">Composition &gt; Save Frame As &gt; File</mark>.
        </AdditionInfo>
        <Divider>Экспортируем с помощью FX Console</Divider>
        <p>
          Если вы считаете способ через <mark className="ui">Save Frame As</mark>{" "}
          неудобным, то есть альтернатива. Вы можете сохранить текущий кадр через плагин{" "}
          <mark className="ui">FX Console</mark>, который можно загрузить{" "}
          <a href="https://www.videocopilot.net/blog/?s=fx%20console">по этой ссылке</a>.
        </p>
        <p>
          После установки плагина, откройте панель эффектов с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Space</mark> и нажмите на иконку шестерёнки. В
          настройках установите чекбокс у параметра{" "}
          <mark className="ui">Full Resolution Screenshots</mark>. Это позволит сохранять
          вам скриншоты в полном разрешении, независимо от того, какое было установлено в
          окне предпросмотра.
        </p>
        <ImageFigure
          caption="FX Console"
          imgSrc="images/aftereffects/fx_console_full_resolution_screenshots.png"
          imgTitle="Устанавливаем полное разрешение скриншотов"
          styleClass="figure_windows-dark"
        />
        <p>
          Теперь для быстрого сохранения текущего кадра в отдельный файл вам достаточно
          открыть окно плагина через <mark className="key">Ctrl + Space</mark> и нажать на
          иконку сохранения. Вам предложат три варианта: сохранить как{" "}
          <mark className="file">JPG</mark>, <mark className="file">PNG</mark> или
          сохранить кадр в буфер обмена.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/fx_console_save_frame_as.png"
          imgTitle="Сохраняем текущий кадр через FX Console"
          styleClass="figure_windows-dark"
        />
        <p>
          При нажатии на кнопку <mark className="ui">Save to JPG</mark> или{" "}
          <mark className="ui">Save to PNG</mark> появится системное окно для выбора места
          сохранения изображения. После указания местоположения вы сразу же получите файл
          в нужном месте.
        </p>
        <AdditionInfo>
          Некоторые пользователи ошибочно считают, что иконка фотоаппарата или же кнопка{" "}
          <mark className="ui">Take Snapshot</mark> в окне предпросмотра композиции
          сохранит куда-то кадр в какую-то папку. Отчасти это верно, но только этот кадр
          сохраняется в оперативную память и служит лишь для сравнения снятого кадра с
          каким-либо другим.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="вывести секвенцию фото, jpg, png, psd"
        title="Как экспортировать все кадры композиции как отдельные изображения?"
      >
        <p>
          Если вы хотите экспортировать все кадры из композиции в отдельные файлы, то вам
          достаточно выбрать в качестве способа вывода{" "}
          <mark className="ui">JPG Sequence</mark>,{" "}
          <mark className="ui">PNG Sequence</mark> или любой другой формат с названием{" "}
          <mark>Sequence</mark> в конце.
        </p>
        <p>
          Для начала как всегда отправляем нашу композицию в очередь рендера, указываем
          путь и открываем <mark className="ui">Output Module</mark> для настройки формата
          вывода.
        </p>
        <AdditionInfo>
          <mark className="app">Adobe After Effects</mark> по умолчанию при выводе
          секвенции создаст дополнительную папку, чтобы не забивать папку, в которую вы
          хотите экспортировать. Это поведение можно отключить, убрав чекбокс с{" "}
          <mark className="ui">Save in subfolder</mark> при выборе расположения вывода.
        </AdditionInfo>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          styleClass="figure_windows-dark"
        />
        <p>
          Потом в окне <mark className="ui">Output Module</mark> в параметре{" "}
          <mark className="ui">Format</mark> выберите любой формат с названием{" "}
          <mark>Sequence</mark> в конце. В моем случае - я выберу{" "}
          <mark className="ui">PNG Sequence</mark>. В{" "}
          <mark className="ui">Format Options</mark> можно настроить параметры
          изображения, например качество или сжатие.
        </p>
        <AdditionInfo>
          Если вы хотите экспортировать кадры с прозрачностью - не забудьте указать
          параметр <mark className="ui">RGB + Alpha</mark> в параметре{" "}
          <mark className="ui">Channels</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/selecting_png_sequence.png"
          imgTitle="Выбираем последовательность PNG для вывода"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого просто нажимаем на кнопку <mark className="ui">Render</mark> или на
          клавишу <mark className="key">Enter</mark>. Вот и всё, все кадры из вашей
          композиции сохранятся в нужную папку.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="рабочая область, настройки рендера, длина композиции, таймлайн"
        title="Как экспортировать всю композицию целиком или только её часть?"
      >
        <p>
          По умолчанию <mark className="app">Adobe After Effects</mark> выводит композицию
          длиной, соответствующей вашей рабочей области, которую вы указали с помощью
          комбинаций клавиш <mark className="key">B</mark> и{" "}
          <mark className="key">N</mark> или соответствующими маркерами на таймлайне.
        </p>
        <p>
          Если же вы хотите сделать так, чтобы композиция всегда экспортировалась по всей
          длине композиции, то вам нужно создать свой пресет для{" "}
          <mark className="ui">Render Settings</mark> и сделать его при необходимости
          стандартным. Для этого нажмите на иконку стрелочки возле{" "}
          <mark className="ui">Render Settings</mark> и нажмите на кнопку{" "}
          <mark className="ui">Make Template</mark>.
        </p>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/make_template_render_settings.png"
          imgTitle="Создание шаблона для Render Settings"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне у нас уже будет создан пресет под названием{" "}
          <mark>Untitled</mark>, название которого можно заменить на какое угодно. Чтобы
          установить новый пресет в качестве стандартного - укажите его в разделе{" "}
          <mark className="ui">Defaults</mark> для нужного типа файла.
        </p>
        <ImageFigure
          caption="Render Settings Templates"
          imgSrc="images/aftereffects/render_settings_templates.png"
          imgTitle="Создание шаблона для Render Settings"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Чтобы не переходить каждый раз в очередь экспорта - данное окно редактирования
          шаблонов для экспорта можно открыть с помощью{" "}
          <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark>.
        </AdditionInfo>
        <p>
          Для редактирования нового шаблона нужно нажать на{" "}
          <mark className="ui">Edit</mark>, которое открывает уже привычное нам окно{" "}
          <mark className="key">Render Settings</mark>. Окно редактирования шаблона
          настроек буквально ничем не отличается от обычной настройки параметров рендера.
          В этом окне в параметре <mark className="ui">Time Span</mark> нужно установить
          значение <mark className="ui">Length of Comp</mark> вместо{" "}
          <mark className="ui">Work Area Only</mark>.
        </p>
        <ImageFigure
          caption="Render Settings"
          imgSrc="images/aftereffects/change_render_time_span.png"
          imgTitle="Изменение области рендера композиции"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="границы слоёв, пути движения, направляющие, демонстрация анимации"
        title="Как экспортировать видео с отображением границ слоёв и путей движения?"
      >
        <p>
          Для экспорта композиции с отображением границ и путей движения можно
          воспользоваться сторонним плагином <mark className="plugin">Cyclops</mark>. Он
          позволяет экспортировать вашу композицию в видео вместе с визуальными
          элементами, такие как границы слоёв и пути анимации, что упрощает процесс
          презентации вашей работы.
        </p>
        <YouTubeVideo
          caption="Cyclops Tutorial"
          link="vNH3d9YqLo4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как сохранить свой шаблон с настройками для экспорта композиций?">
        <p>
          У каждого пользователя <mark className="app">Adobe After Effects</mark> может
          возникнуть желание сохранить настройки для экспорта, чтобы каждый раз не
          настраивать его. Для создания своих предустановок нужно открыть очередь экспорта
          с помощью комбинации клавиш <mark className="key">Ctrl + M</mark> и нажать на
          стрелочку возле <mark className="ui">Output Module</mark>. В открывшемся меню
          нужно выбрать <mark className="key">Make Template</mark> для перехода на окно
          создания и настроек пресетов.
        </p>
        <ImageFigure
          caption="Make Template"
          imgSrc="images/aftereffects/render_queue_make_template.png"
          imgTitle="Создаём шаблон экспорта"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне у нас уже будет создан пресет под названием{" "}
          <mark>Untitled</mark>, название которого можно заменить на какое угодно. В этом
          же окне можно задать пресеты и для других типов файлов по умолчанию в разделе{" "}
          <mark className="ui">Defaults</mark>, если необходимо.
        </p>
        <ImageFigure
          caption="Output Module Templates"
          imgSrc="images/aftereffects/output_module_templates.png"
          imgTitle="Настраиваем шаблоны для экспорта"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Чтобы не переходить каждый раз в очередь экспорта - данное окно редактирования
          шаблонов для экспорта можно открыть с помощью{" "}
          <mark className="ui">Edit &gt; Templates &gt; Output Module</mark>.
        </AdditionInfo>
        <p>
          Для редактирования нового шаблона нужно нажать на{" "}
          <mark className="ui">Edit</mark>, которое открывает уже привычное нам окно{" "}
          <mark className="key">Output Module Settings</mark>. Окно редактирования шаблона
          экспорта буквально ничем не отличается от обычной настройки типа вывода.
        </p>
        <p>
          После создания пресета - проверьте его на работоспособность и поставьте новый
          шаблон по умолчанию для определённого типа экспорта по вашему желанию.
          Аналогичным образом можно создать пресеты и для{" "}
          <mark className="ui">Render Settings</mark> с помощью{" "}
          <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="сбор проекта, collect files"
        title="Как передать проект со всеми исходниками другому человеку?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> есть функция для сохранения
          вашего проекта в отдельную папку вместе со всеми исходниками, чтобы в дальнейшем
          при переносе или передаче другому лицу ничего не потерялось и не отвалилось.
          Чтобы это сделать, нужно перейти в{" "}
          <mark className="ui">File &gt; Dependencies</mark> и нажать кнопку{" "}
          <mark className="ui">Collect Files</mark>. Если не сохраняли проект, то
          программа предложит вам это сделать.
        </p>
        <AdditionInfo>
          Данная функция не сохраняет исполняемые файлы плагинов, пресетов и шрифтов.
          Заранее предупредите того, кому вы собираетесь передать ваш проект, что ему
          нужно будет установить необходимые плагины и шрифты. Информация об используемых
          шрифтах, эффектах и исходниках будет указана в текстовом файле рядом с файлом
          проекта.
        </AdditionInfo>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/select_collect_files.png"
          imgTitle="Выбираем функцию Collect Files"
          styleClass="figure_windows-light"
        />
        <p>
          Далее появится окно, где предложат, что именно нужно собрать в папку с проектом.
          В параметре <mark className="ui">Collect Source Files</mark> можно выбрать, что
          именно собирать - все файлы из проекта или лишь те, которые используются в
          композициях, чтобы уменьшить вес. После нажатия на кнопку{" "}
          <mark className="ui">Collect</mark> программа откроет системный файловый
          менеджер для того, чтобы вы указали путь куда сохранить папку с проектом.
        </p>
        <ImageFigure
          caption="Collect Files"
          imgSrc="images/aftereffects/collect_files_settings.png"
          imgTitle="Настройки Collect Files"
          styleClass="figure_windows-dark"
        />
        <ContentSwitcher
          macContent={
            <div>
              <p>
                После окончания сборки файлов, перейдите в папку, куда вы сохранили проект
                и создайте архив с помощью <a href="https://www.keka.io/ru/">keka</a>.
                Если площадка или социальная сеть, в которой вы пытаетесь поделиться
                архивом, вставляет палки в колёса в виде ограничений на размер файла - вы
                сможете разделить архив на определённый размер файла перед его созданием и
                отправить его другому человеку по кусочкам. После создания архива,
                отправьте его другому человеку любым удобным для вас способом.
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
                  alignItems: "center",
                }}
              >
                <ImageFigure
                  caption="Выбор формата архива"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-format.gif"
                  imgTitle="Выбор формата архива"
                  styleClass="figure_macos-light"
                />
                <ImageFigure
                  caption="Выбор размера разделения архива"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-split.gif"
                  imgTitle="Выбор размера разделения архива"
                  styleClass="figure_macos-light"
                />
              </div>
              <AdditionInfo>
                Подробнее о создании архивов через{" "}
                <a href="https://www.keka.io/ru/">keka</a> вы можете прочесть на{" "}
                <a href="https://github.com/aonez/Keka/wiki/Compressing-with-Keka">
                  этой странице
                </a>
                .
              </AdditionInfo>
            </div>
          }
          windowsContent={
            <div>
              <p>
                После окончания сборки файлов, перейдите в папку, куда вы сохранили проект
                и создайте архив с помощью{" "}
                <a href="https://www.rarlab.com/download.htm">WinRAR</a> или{" "}
                <a href="https://www.7-zip.org/">7-Zip</a>. Если площадка или социальная
                сеть, в которой вы пытаетесь поделиться архивом, вставляет палки в колёса
                в виде ограничений на размер файла - вы сможете разделить архив на
                определённый размер файла перед его созданием и отправить его другому
                человеку по кусочкам. После создания архива, отправьте его другому
                человеку любым удобным для вас способом.
              </p>
              <YouTubeVideo
                caption="Как разбить архив на части и собрать его"
                link="6KumGS0EyUQ"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="лотти"
        title="Какие эффекты можно использовать в Lottie для успешного вывода?"
      >
      <DetailsSummary title="Какие эффекты можно использовать при использовании Lottie?">
        </p>
      </DetailsSummary>
    </div>
  );
};

export default AEExport;
