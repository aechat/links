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
        tag="очередь рендера, render queue, как настроить экспорт, куда нажимать для сохранения композиции, свой шаблон с настройками для экспорта композиций"
        title="Что такое очередь рендеринга?"
      >
        <p>
          <mark className="select">«Render Queue»</mark> — это основное окно для экспорта
          композиций из <mark className="app">Adobe After Effects</mark> в форматах видео,
          аудио или изображений. Она подразумевает под собой очередь композиций, которые
          будут экспортироваться последовательно друг за другом сверху вниз.
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
          или пользовательские пресеты: чтобы выбрать шаблон, нажмите на иконку стрелки
          слева от названия, а для изменения параметров — на само название.
        </p>
        <p>
          Экспорт выбранных композиций можно запустить кнопкой{" "}
          <mark className="select">«Render»</mark> в правом верхнем углу или клавишей{" "}
          <mark className="key">Enter</mark>.
        </p>
        <Divider>Разбираемся с «Output Module»</Divider>
        <p>
          <mark className="select">«Output Module»</mark> отвечает за изменение формата
          вывода и, при необходимости, настройку его параметров через{" "}
          <mark className="select">«Format Options»</mark>.
        </p>
        <p>
          В последних версиях <mark className="app">Adobe After Effects</mark> доступны
          для экспорта популярные видеоформаты <mark className="video">H.264 (MP4)</mark>,{" "}
          <mark className="video">QuickTime</mark> и <mark className="video">AVI</mark>,
          аудиоформаты <mark className="audio">AIFF</mark>,{" "}
          <mark className="audio">MP3</mark> и <mark className="audio">WAV</mark>, а также
          возможность экспортировать композицию покадрово в форматах{" "}
          <mark className="image">TIFF</mark>, <mark className="image">JPEG</mark>,{" "}
          <mark className="image">PNG</mark>, <mark className="image">PSD</mark> и других.
          Чтобы выбрать формат экспорта, установите нужное значение в параметре{" "}
          <mark className="select">«Format»</mark>.
        </p>
        <p>
          В этом окне можно найти необязательные настройки для изменения размера и
          кадрирования изображения. В разделе настроек аудио можно задать частоту
          дискретизации, битовую глубину и выбрать режим между{" "}
          <mark className="select">«Mono»</mark> и{" "}
          <mark className="select">«Stereo»</mark>.
        </p>
        <Addition type="info">
          При включённой опции <mark className="select">«Audio Output Auto»</mark> звук
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
          изменить шаблон названия, создать собственный или установить его как шаблон по
          умолчанию.
        </p>
        <p>
          Для шаблонов имени поддерживаются относительные пути, что даёт гибкость в
          управлении расположением экспортируемых файлов. Кнопка{" "}
          <mark className="select">«Add Property»</mark> позволяет добавить дополнительные
          параметры в структуру имени.
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
          раздел настроек. В нём можно задать разрешение рендеринга, включить или
          отключить определённые свойства слоёв или, например, указать, использовать ли
          прокси в финальном экспорте.
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
            Чтобы экспортировать одну композицию в нескольких форматах, нажмите на кнопку{" "}
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
            нажмите <mark className="key">ПКМ</mark> по нужному элементу в очереди и
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
          <mark className="key">Ctrl + M</mark> и нажмите на иконку стрелки рядом с{" "}
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
          назначить созданный шаблон как стандартный для определённых типов задач.
        </p>
        <p>
          Чтобы отредактировать шаблон, нажмите на <mark className="select">«Edit»</mark>,
          что откроет окно <mark className="select">«Output Module Settings»</mark>. Окно
          редактирования шаблона экспорта по сути не отличается от обычной настройки типа
          вывода.
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
          аналогичен созданию шаблона для модуля вывода. Для этого нажмите на иконку
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
          <mark className="select">«Defaults»</mark> можно задать пресеты для других типов
          файлов по умолчанию.
        </p>
        <p>
          Чтобы отредактировать шаблон, нажмите на <mark className="select">«Edit»</mark>,
          что откроет окно <mark className="key">Render Settings</mark>. Окно
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
        tag="медиа энкодер"
        title="Почему «из каждого утюга» советуют не использовать Adobe Media Encoder для экспорта?"
      >
        <p>
          Долгие годы <mark className="app">Adobe Media Encoder</mark> считался
          практически безальтернативным решением для экспорта из{" "}
          <mark className="app">Adobe After Effects</mark> в популярный кодек{" "}
          <mark className="video">H.264</mark>. Это было связано с тем, что в старых
          версиях <mark className="app">Adobe After Effects</mark> попросту отсутствовала
          возможность напрямую экспортировать композиции в этом формате. В этой статье
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
          и пошло-поехало. Некоторые пользователи, по привычке или из-за незнания
          альтернатив, продолжают полагаться исключительно на{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <p>
          С выходом версии <mark>23.0</mark> и новее необходимость прибегать к{" "}
          <mark className="app">Adobe Media Encoder</mark> для экспорта в{" "}
          <mark className="video">H.264</mark> заметно уменьшилась, поскольку в{" "}
          <mark className="app">Adobe After Effects</mark> вернули функцию нативного
          экспорта в этот кодек. Если вы используете старые версии программы, лучше
          воспользоваться плагинами, такими как{" "}
          <mark className="plugin">AfterCodecs</mark> или{" "}
          <mark className="plugin">Voukoder</mark>. <a href="#9.4">Подробнее...</a>
        </p>
        <Addition type="info">
          Если вам нужно поставить в очередь на рендеринг сразу несколько композиций из
          разных проектов — создайте один пустой проект в{" "}
          <mark className="app">Adobe After Effects</mark> и импортируйте в него нужные
          проекты. Затем вы сможете добавить все композиции в очередь и запустить экспорт.
        </Addition>
        <Divider>
          Какие проблемы могут быть при использовании Adobe Media Encoder?
        </Divider>
        <ul>
          <li>
            При экспорте сложных сцен <mark className="app">Adobe Media Encoder</mark>{" "}
            может просто остановить рендеринг без объяснения причин, и будет сложно
            понять, в чём именно проблема. Сложные сцены лучше экспортировать напрямую из{" "}
            <mark className="app">Adobe After Effects</mark>, при необходимости используя{" "}
            <a href="#9.11">прокси</a>, чтобы минимизировать время экспорта и риск ошибок.
            <Addition type="warning">
              При отправке композиции на экспорт в{" "}
              <mark className="app">Adobe Media Encoder</mark> запускается фоновый процесс{" "}
              <mark className="file">AfterFX.exe</mark>. Этот лишний процесс создаёт
              дополнительную нагрузку на компьютер и может занять всю оперативную память,
              что часто приводит к сбоям.
            </Addition>
          </li>
          <li>
            Некоторые пользователи могут столкнуться с ошибкой{" "}
            <mark className="code">-1609629695</mark> с расплывчатым описанием. Эту ошибку
            можно было бы избежать, не используя{" "}
            <mark className="app">Adobe Media Encoder</mark> в качестве основного способа
            экспорта.
          </li>
          <li>
            <mark className="app">Adobe Media Encoder</mark> может потерять исходники:
            после экспорта вы можете внезапно обнаружить разноцветный плейсхолдер вместо
            нужного файла, особенно если рендеринг был долгим.
          </li>
          <li>
            <mark className="app">Adobe Media Encoder</mark> может экспортировать
            композиции с артефактами, например, со смещённым изображением<sup>1</sup> или
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
            не факт, что она корректно «подхватится» в{" "}
            <mark className="app">Adobe Media Encoder</mark>, так как лицензии многих
            плагинов могут быть привязаны именно к{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            При экспорте в <mark className="app">Adobe Media Encoder</mark> вы вряд ли
            получите стабильную работу функции{" "}
            <mark className="select">«Multi-Frame Rendering»</mark>, которая отлично
            работает при экспорте напрямую из{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            Композиция, отправленная из <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark>, может просто не появиться в
            очереди рендеринга. Такое бывает при внутреннем сбое в{" "}
            <mark className="plugin">Dynamic Link</mark>, о котором программа не сообщает
            пользователю.
          </li>
          <li>
            Обычно процесс экспорта в <mark className="app">Adobe After Effects</mark>{" "}
            запускается почти мгновенно, в отличие от долгого запуска самого{" "}
            <mark className="app">Adobe Media Encoder</mark>. После запуска{" "}
            <mark className="app">Adobe Media Encoder</mark> нужно ещё подождать, пока он
            подгрузит композицию, запустит фоновый процесс{" "}
            <mark className="file">AfterFX.exe</mark>, и только потом начнёт экспорт. Не
            всегда удобно ждать минуту, чтобы{" "}
            <mark className="app">Adobe Media Encoder</mark> «отдуплился» для экспорта
            короткого видео.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="сохранить максимальное качество, разрешение, битрейт, кодек, fps, соцсети, настройки рендера, вывод видео"
        title="Как подобрать настройки экспорта для разных задач?"
      >
        <p>
          Настройка экспорта — ключевой этап, определяющий, как вашу работу увидит
          зритель. Правильные параметры помогают найти баланс между качеством изображения,
          размером файла и совместимостью с разными платформами. Поэтому универсального
          «чудо-пресета» не существует: оптимальные настройки всегда подбираются
          индивидуально — под конкретную задачу, содержимое проекта и требования площадки,
          где будет опубликован ролик. Единственный способ понять, что лучше всего
          работает для вашего контента на конкретной платформе, — это экспериментировать.
        </p>
        <p>
          В этой статье разберём основные факторы, влияющие на итоговое качество
          изображение и вес файла.
        </p>
        <Divider>Что влияет на качество видео после экспорта?</Divider>
        <p>
          В первую очередь на качество видео после экспорта влияют кодек и битрейт. Многие
          ещё думают, что на качество влияет и контейнер, который часто называют форматом,
          например <mark className="file">MP4</mark> или <mark className="file">MOV</mark>
          , однако это не так.
        </p>
        <p>
          <mark className="word">Контейнер</mark> — это «коробка», которая хранит в себе
          видеоданные в определённом кодеке, аудио и другие данные, вроде субтитров или
          метаданных камеры. <mark className="word">Кодек</mark> — это программа, которая
          сжимает для уменьшения размера файла и декодирует видеоданные для проигрывания
          на устройстве, а <mark className="word">битрейт</mark> — скорость передачи этих
          данных, которая измеряется в <mark>Мбит/с</mark> или <mark>Кбит/с</mark>.
        </p>
        <Addition type="info">
          {/* TODO: перефразировать выглядит туповато */}
          Кстати, раз контейнер — это просто «коробка», её иногда можно сменить, не трогая
          содержимое. Если видео с кодеком <mark className="video">H.264</mark> упаковано
          в <mark className="file">MOV</mark>, можно просто переименовать файл, изменив
          расширение на <mark className="file">MP4</mark> или{" "}
          <mark className="file">MKV</mark>. В большинстве случаев оно откроется и будет
          работать без перекодирования.
        </Addition>
        <p>
          При сжатии с потерями кодек отбрасывает часть информации, чтобы уменьшить размер
          файла. Чем ниже битрейт, тем агрессивнее он это делает, что и приводит к
          известным артефактам: картинка «рассыпается» на квадраты, детали размываются, а
          плавные цветовые переходы превращаются в грубые полосы.
        </p>
        <p>
          Однако на итоговый результат влияет не только битрейт, но и то, что именно вы
          сжимаете. Динамичные сцены со сложной анимацией или множеством частиц требуют
          неприлично высокого битрейта для сохранения деталей. При низком значении кодек
          просто не справляется, потому что работает по простому принципу: «экономит» на
          статичных участках кадра, чтобы направить все доступные данные на прорисовку
          движения. Если «шланг» узкий, а потока много, — жди беды.
        </p>
        <p>
          Если вы хотите оптимизировать поток видео, если битрейт всё таки будет ограничен
          особенно для видеоплощадок, то вы можете «упростить» ваше происходящее на видео.
          Если оператор «пьяный» и происходящее на видео сильно трясётся — вы можете
          применить эффект стабилизации, например{" "}
          <mark className="plugin">Warp Stabilizer</mark>. Избегайте неконтрастных цветов
          на главных объектах, если вы хотите их оставить в хорошем качестве — кодеки
          сжимают и объединяют похожие цвета в блок усреднённого цвета. Быстрые движения
          плохо перевариваются кодеком с заданным низким значением.
        </p>
        {/* TODO: про стабилизацию, про медленные движения и контраст */}
        <ContentFigure
          caption="Почему снег и конфетти портят картинку"
          src="r6Rp-uo6HmI"
          type="youtube"
        />
        <p>
          <mark className="word">Кодеки</mark> условно делятся на просмотровые, или
          потоковые, предназначенные для конечного зрителя, например{" "}
          <mark className="video">H.264</mark>, и монтажные, созданные для
          видеопроизводства, например <mark className="video">Apple ProRes</mark>. Первые
          сильно сжимают видео для экономии места и быстрой доставки в интернете, а вторые
          сохраняют максимум качества и меньше сжимаются для комфортной работы в
          видеоредакторах.
        </p>
        <ContentFigure
          caption="Всё о кодеках"
          src="MprgQSTqL9E"
          type="youtube"
        />
        <ul>
          <li>
            Для публикации видео в интернете используются просмотровые кодеки. К ним
            относятся популярные <mark className="video">H.264</mark>,{" "}
            <mark className="video">HEVC (H.265)</mark>,{" "}
            <mark className="video">VP9</mark> и <mark className="video">AV1</mark>. При
            одинаковых настройках кодирования размер файла может быть разным в зависимости
            от эффективности кодека — <mark className="video">HEVC (H.265)</mark> и{" "}
            <mark className="video">AV1</mark> более эффективно сжимают видео по сравнению
            с <mark className="video">H.264</mark> и <mark className="video">VP9</mark>.
            Тащить их в монтаж — плохая идея:{" "}
            <a href="https://www.youtube.com/watch?v=cfz3jwdo1v0">
              намучаетесь с тормозами и артефактами
            </a>
            .
          </li>
          <li>
            Для видеопроизводства и промежуточных рендеров нужны монтажные кодеки,
            например <mark className="video">Apple ProRes 4444</mark>. Они почти не
            сжимают картинку и идеально подходят для монтажа, но готовьтесь к тому, что
            такие файлы занимают много места на диске.
          </li>
        </ul>
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
            но для обычных видео он неэффективен. Кодировщик в таком случае тратит
            одинаковое количество данных и на статичные, и на динамичные сцены, делая
            размер файла неоправданно большим.
          </li>
          <li>
            При переменном битрейте <mark className="select">«VBR»</mark> скорость
            динамически меняется в зависимости от сложности кадра — увеличивается в
            динамичных сценах и уменьшается в статичных. Это позволяет достичь приемлемого
            качества при меньшем размере файла и часто используется для видео по запросу,
            как в <mark className="app">Netflix</mark>.
            {/* TODO: написать про 1 пасс и 2 пасс, хорош для достижения определённого веса, но не в пользу качества */}
          </li>
          <li>
            <p>
              Метод постоянного качества<sup>1</sup> — это когда вы говорите кодировщику:{" "}
              <mark className="quote">
                «я задал вот такой уровень качества, а битрейт подбирай сам»
              </mark>
              . Он сам решает, сколько данных выделить каждому кадру, чтобы картинка
              выглядела одинаково хорошо и в спокойных сценах, и в очень динамичных. Это
              идеальный вариант, если нужно сохранить максимальное качество композиции без
              ручного подбора битрейта и без раздувания веса файла, как в режиме{" "}
              <mark className="select">«CBR»</mark>.
            </p>
            <Addition type="info">
              <sup>1</sup> Параметр постоянного качества может называться по-разному в
              зависимости от кодека: <mark className="select">«CQP»</mark>,{" "}
              <mark className="select">«QP»</mark>, <mark className="select">«CRF»</mark>{" "}
              или <mark className="select">«CQ»</mark>.
            </Addition>
            <p>
              Этот уровень качества вы задаёте по абстрактной шкале от <mark>0</mark> до{" "}
              <mark>51</mark>, где <mark>0</mark> — это сжатие без потерь, а{" "}
              <mark>51</mark> — самое ужасное качество при минимальном размере файла.
            </p>
            <ul>
              <li>
                Значение по умолчанию в большинстве случаев — <mark>23</mark>. Этого с
                головой хватит для экспорта на <mark className="app">YouTube</mark>,{" "}
                <mark className="app">VK Видео</mark> и подобные площадки. Но учтите:
                видеохостинги всё равно пережмут ваш ролик по-своему, чтобы сэкономить
                место на своих серверах.
              </li>
              <li>
                Если нужно сохранить видео с максимальным качеством, установите значение
                от <mark>17</mark> до <mark>20</mark>. Размер файла, само собой, заметно
                вырастет. Выбирать значение ниже <mark>15</mark> смысла нет: серьёзного
                прироста качества вы не заметите, а вот файл размер файла раздуете нехило.
              </li>
            </ul>
            <Addition type="warning">
              <ul>
                <li>
                  Данный тип кодирования доступен только в{" "}
                  <mark className="video">H.264</mark>,{" "}
                  <mark className="video">H.265</mark>, <mark className="video">VP9</mark>{" "}
                  и <mark className="video">AV1</mark> и их производных.
                </li>
                <li>
                  При экспорте из <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Media Encoder</mark> стандартными средствами
                  нельзя выбрать данный вариант кодирования. Для этого нужно использовать
                  сторонний плагин-экспортёр{" "}
                  <mark className="plugin">Voukoder Classic</mark>
                  <sup>1</sup> или <mark className="plugin">Voukoder Pro</mark>, или
                  сторонние конвертеры использующие <mark className="app">FFmpeg</mark>,
                  например <mark className="app">Shutter Encoder</mark>.
                  <ul>
                    <li>
                      <sup>1</sup> <mark className="plugin">Voukoder Classic</mark>{" "}
                      доступен только для устройств на <mark>Windows</mark> и перестал
                      быть доступным на официальном сайте и репозитории в{" "}
                      <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">
                        GitHub
                      </a>
                      . Перезалив данного экспортёра вместе с «коннекторами» вы можете
                      найти в{" "}
                      <a href="https://t.me/+Qd9xu7A4TeIwNzY6">складе стройматериалов</a>{" "}
                      по хештегу <mark className="tag">#voukoder</mark>.
                    </li>
                  </ul>
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <p>
          Если файл уже был сильно сжат — допустим, до <mark>1 Мбит/с</mark>, — то вернуть
          исходное качество, просто повысив битрейт при повторной конвертации, не
          получится. Видео не работает как архив, который можно сжать и распаковать без
          потерь. Если установить битрейт значительно выше, чем у пережатого оригинала, вы
          только раздуете размер файла, но не улучшите качество.
        </p>
        <Addition type="info">
          Если вам нужно улучшить качество исходника, воспользуйтесь{" "}
          <a href="#7.1">программами для апскейла видео</a>.
        </Addition>
        {/* <p>Но кодек и битрейт — это только полдела.</p> */}
        {/* <Divider>Какие настройки и кодеки надо выбирать?</Divider> */}
        <Divider>Почему видеоплощадки так нещадно сжимают видео?</Divider>
        <p>
          Представьте, что <mark className="app">YouTube</mark>,{" "}
          <mark className="app">Instagram</mark>
          <sup>1</sup>, <mark className="app">TikTok</mark> и прочие — это огромные
          склады, куда каждый день его пользователи заливают миллионы часов материала.
          Главная причина агрессивного сжатия видео — экономия места на серверах. Если бы
          площадки хранили всё в исходном качестве, им потребовались бы миллиарды
          йоттабайтов памяти. Это нереально дорого, особенно для бесплатных площадок.
        </p>
        <Addition type="danger">
          <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark> признаны
          экстремистскими организациями и запрещены на территории Российской Федерации.
        </Addition>
        <p>
          Вторая причина — скорость доставки контента. Мало кто захочет скачивать два
          гигабайта ради пятисекундного ролика, особенно если интернет медленный. Поэтому,
          чтобы видео не тормозило, его нужно сделать максимально лёгким.
        </p>
        <p>
          Ваша цель — отдать площадке настолько качественный исходник, чтобы даже после её
          «мясорубки» ролик выглядел достойно. Если есть время, экспериментируйте:
          загружайте тестовые ролики с разными настройками экспорта в режиме приватного
          доступа на <mark className="app">YouTube</mark> или другую площадку и
          сравнивайте результат. Но, пожалуйста, не «наяривайте» на мелкие детали. Обычный
          зритель, скорее всего, всё равно не заметит той разницы между загруженным видео
          и исходником, которая так бросается в глаза вам.
        </p>
        <p>
          Популярный техно-блогер{" "}
          <a href="https://www.youtube.com/channel/UCBJycsmduvYEL83R_U4JriQ">
            Маркус Браунли
          </a>{" "}
          однажды провёл эксперимент: он тысячу раз загружал на{" "}
          <mark className="app">YouTube</mark> одно и то же видео, чтобы посмотреть, что с
          ним станет. Результат оказался предсказуемым: с каждой новой загрузкой площадка
          сжимала ролик заново, и соответственно падало качество. Это работает по тому же
          принципу, что и копирование старых VHS-кассет: каждая следующая копия всегда
          хуже предыдущей.
        </p>
        <ContentFigure
          caption="Что будет, если опубликовать одно и тоже видео 1000 раз?"
          src="JR4KHfqw-oE"
          type="youtube"
        />

        <AdditionInfo>
          Если вы хотите создать свой пресет - перейдите в{" "}
          <mark className="ui">Edit &gt; Templates</mark> и нажмите на{" "}
          <mark className="ui">Output Module</mark>. В открывшемся окне нажмите на{" "}
          <mark className="ui">New</mark> и задайте новое имя пресета. Чтобы
          отредактировать его - нажмите на <mark className="ui">Edit</mark>. Также при
          желании вы можете задать свой новый пресет в качестве стандартного или изменить
          уже существующие.
        </AdditionInfo>
        <p>
          Чтобы изменить битрейт или другие настройки для встроенного кодека{" "}
          <mark className="video">H.264</mark> - откройте окно{" "}
          <mark className="ui">Output Module</mark>, нажав на название выбранного пресета
          в очереди рендера. Для выбора нужного нам битрейта откройте окно{" "}
          <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/output_module_format_options.png"
          imgTitle="Окно Output Module"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне мы можем выбрать <mark>VBR</mark> или <mark>CBR</mark>. Если
          в вашем видео есть слишком быстрые движения объектов и куча частиц - установите
          больше битрейта и <mark>CBR</mark>, но не переусердствуйте. Параметр{" "}
          <mark>VBR</mark> больше подойдет тем, кому нужен минимальный вес файла.
        </p>
        <ImageFigure
          caption="H.264 Options"
          imgSrc="images/aftereffects/h264_options.png"
          imgTitle="Окно настроек H.264"
          styleClass="figure_windows-dark"
        />
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
          <mark className="app">Shutter Encoder</mark>. Такие видео будет проще
          редактировать и ротоскопировать.
        </p>
        <ContentFigure
          caption="Разбираемся с переменной частотой кадров в видео"
          src="vzh-41y1gxQ"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="h.264, h.265, мп4, hevc, avc1, вывести видео, вукодер, voukoder, aftercodecs, афтеркодекс, хевк, авс1"
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
          В этой статье рассмотрим, как экспортировать композицию в{" "}
          <mark className="video">H.264</mark> и его производных напрямую из{" "}
          <mark className="app">Adobe After Effects</mark> без использования{" "}
          <mark className="app">Adobe Media Encoder</mark>. Это можно сделать несколькими
          способами: с помощью стандартного экспортёра{" "}
          <mark className="video">H.264</mark>, доступный в{" "}
          <mark className="app">Adobe After Effects</mark> с версии <mark>2023</mark> и
          новее, или сторонних плагинов — <mark className="plugin">Voukoder</mark> и{" "}
          <mark className="plugin">AfterCodecs</mark>. Какой способ выбрать — зависит от
          вас, цели экспорта и вашего проекта.
        </p>
        <Addition type="info">
          Перед чтением этой статьи, рекомендуется <a href="#9.1">ознакомиться</a> с
          интерфейсом окна <mark className="select">«Render Queue»</mark> и его
          функционалом, если вы первый раз экспортируете композиции из{" "}
          <mark className="app">Adobe After Effects</mark>.
        </Addition>
        <Addition type="danger">
          <ul>
            <li>
              <p>
                Обратите внимание, что с помощью кодеков{" "}
                <mark className="video">H.264</mark> и{" "}
                <mark className="video">H.265</mark> не получится экспортировать видео с
                прозрачностью. Хоть и <mark className="video">H.265</mark> с альфа-каналом
                можно экспортировать только на устройствах с <mark>macOS</mark>,
                совместимость таких видео с другими устройствами оставляет желать лучшего.
              </p>
              <p>
                Для экспорта композиции с прозрачным фоном лучше использовать форматы{" "}
                <mark className="video">QuickTime (Apple ProRes 4444)</mark> или{" "}
                <mark className="video">WEBM (VP9)</mark>.
              </p>
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
              <mark className="plugin">H.264</mark> могут не открываться в стандартном{" "}
              <mark className="app">медиаплеере Windows</mark> и на некоторых устройствах,
              например <mark>iPhone</mark>. Обычно это решается повторной конвертацией
              видео через любой конвертер, например{" "}
              <mark className="app">Shutter Encoder</mark> или экспортом видео через
              альтернативные способы.
            </li>
          </ul>
        </Addition>
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
              После того как у вас откроется окно{" "}
              <mark className="select">«Render Queue»</mark>, убедитесь в том, что у вас
              выбран стандартный пресет для экспорта в{" "}
              <mark className="video">H.264</mark>. Выбрать нужный шаблон можно с помощью
              иконки стрелки справа от <mark className="select">«Output Module»</mark>.
            </p>
          </li>
          <li>
            Чтобы изменить битрейт или другие параметры, нажмите на название шаблона —
            откроется окно <mark className="select">«Output Module»</mark>. Параметры,
            связанные с изменением значения битрейта для{" "}
            <mark className="video">H.264</mark> находится в разделе{" "}
            <mark className="select">«Format Options»</mark>.
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
        tag="вебм, вп9, ав1, vp9, av1"
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
        tag="создать гифку"
        title="Как экспортировать композицию в GIF?"
      >
        <p>
          <mark className="image">GIF</mark> - старый, но ещё популярный формат для обмена
          изображений, чаще всего анимированных. В базовой комплектации{" "}
          <mark className="app">Adobe After Effects</mark> экспортировать композицию в
          формат <mark className="image">GIF</mark> не получится, но никто не запрещал
          воспользоваться альтернативными способами.
        </p>
        <AdditionWarning>
          <p>
            У формата <mark className="image">GIF</mark> есть множество ограничений и
            нюансов.
          </p>
          <ul>
            <li>
              Данный формат не поддерживает полупрозрачность, только два цвета для
              альфа-канала: <mark>#FFFFFF</mark> и <mark>#000000</mark>.
            </li>
            <li>
              <mark className="image">GIF</mark> вмещает в себя только 256 цветов, поэтому
              забудьте о плавных градиентах и качественном цвете.
            </li>
            <li>
              Полученный файл может быть огромным по весу, если указать большое разрешение
              или FPS. Максимально рекомендуемо использовать разрешение{" "}
              <mark>1024x576</mark> и <mark>15 FPS</mark> для композиций с соотношением
              сторон <mark>16:9</mark>.
            </li>
          </ul>
        </AdditionWarning>
        <ul>
          <li>
            Из самого <mark className="app">Adobe After Effects</mark> можно
            экспортировать <mark className="image">GIF</mark> с помощью расширения{" "}
            <mark className="plugin">GifGun</mark>.
          </li>
          <li>
            Либо экспортировать <mark className="image">GIF</mark> через{" "}
            <del style={{opacity: 0.5}}>упаси боже</del>{" "}
            <mark className="app">Adobe Media Encoder</mark>.
          </li>
          <li>
            С помощью конвертации вашего видео через онлайн-сервис{" "}
            <a href="https://ezgif.com/video-to-gif">Ezgif</a>. Он даёт самый адекватный
            результат по соотношению <mark>качество/размер файла</mark>.
          </li>
        </ul>
        <AdditionInfo>
          Если вы собираетесь выводить композицию в <mark className="image">GIF</mark> для
          веб-страницы - советую экспортировать вашу композицию в{" "}
          <mark className="video">WebM</mark>. Он лучше подойдет для получения
          качественного изображения с маленьким размером, а также для встраивания в
          различные приложения.
        </AdditionInfo>
        <Divider>Экспортируем с помощью GifGun</Divider>
        <p>
          Предположим, что вы уже установили расширение{" "}
          <mark className="plugin">GifGun</mark>. Он должен появиться в{" "}
          <mark className="ui">Window &gt; Extensions</mark>.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/open_gifgun.png"
          imgTitle="Открытие расширения GifGun"
          styleClass="figure_windows-light"
        />
        <p>
          После открытия расширения вы увидите простое окно с двумя кнопками:{" "}
          <mark className="ui">Make GIF</mark> для начала экспорта в{" "}
          <mark className="image">GIF</mark> и кнопку с шестерёнкой. Нажав на вторую
          кнопку вы откроете настройки, где сможете указать размер, FPS или путь к
          выходному файлу.
        </p>
        <ImageFigure
          caption="GifGun"
          imgSrc="images/aftereffects/gifgun_settings.png"
          imgTitle="Настройки расширения GifGun"
          styleClass="figure_windows-dark"
        />
        <Divider>Экспортируем с помощью Media Encoder</Divider>
        <p>
          <mark className="image">GIF</mark> можно ещё получить с помощью{" "}
          <mark className="app">Adobe Media Encoder</mark>. Хоть мы и отговариваем от его
          использования, но в выборе различных форматов для экспорта он занимает более
          выигрышную позицию по сравнению с выводом напрямую из{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <p>
          Для того чтобы начать экспорт через{" "}
          <mark className="app">Adobe Media Encoder</mark>, перейдите в{" "}
          <mark className="ui">File &gt; Export</mark> и нажмите на{" "}
          <mark className="ui">Add to Adobe Media Encoder Queue</mark> и подождите, когда
          откроется вторая программа.
        </p>
        <AdditionInfo>
          Композиция из <mark className="app">Adobe After Effects</mark> корректно
          отправится в <mark className="app">Adobe Media Encoder</mark> только в том
          случае, если у вас установлен одинаковый год программ и на стандартном
          расположении программ. В противном случае вам выбьют ошибку о том, что{" "}
          <mark className="app">Adobe Media Encoder</mark> не установлен.
        </AdditionInfo>
        <p>
          После открытия <mark className="app">Adobe Media Encoder</mark> укажите формат{" "}
          <mark className="image">Animated GIF</mark> в очереди экспорта. Там же вы можете
          указать пресет и путь к выходному файлу. Для детальной настройки вы можете
          открыть <mark className="ui">Export Settings</mark>, нажав по названию
          стандартного пресета. Там же вы можете указать разрешение, FPS и другие
          параметры.
        </p>
        <ImageFigure
          caption="Media Encoder"
          imgSrc="images/aftereffects/selecting_animated_gif_media_encoder.png"
          imgTitle="Выбираем формат GIF для экспорта через Adobe Media Encoder"
          styleClass="figure_windows-light"
        />
        <AdditionWarning>
          Если вы выберете в качестве формата параметр <mark className="ui">GIF</mark> без
          слова <mark>Animated</mark>, то вы получите только кадры отдельными
          изображениями формата <mark className="image">GIF</mark> и забьёте себе папку
          для сохранения.
        </AdditionWarning>
        <p>
          После настройки просто нажмите на кнопку <mark className="ui">OK</mark> и
          нажмите на зелёную иконку для начала экспорта. После этого в месте, куда вы
          указали путь, появится файл формата <mark className="image">GIF</mark>.
        </p>
        <Divider>Конвертируем через Ezgif</Divider>
        <p>
          Если вы не хотите возиться с экспортом или у вас уже есть готовое видео, которое
          надо лишь перегнать в формат <mark className="image">GIF</mark>, то советую
          онлайн-сервис <a href="https://ezgif.com/video-to-gif">Ezgif</a>. При
          конвертации через этот сервис вы получите <mark className="image">GIF</mark> с
          отличным соотношением качества и размера файла.
        </p>
        <p>
          Для начала конвертации просто загрузите ваше видео в сервис, а затем нажмите на
          кнопку <mark className="ui">Upload Video</mark>.
        </p>
        <ImageFigure
          caption="Ezgif"
          imgSrc="images/ezgif_main.png"
          imgTitle="Главная страница Ezgif"
          styleClass="figure_windows-light"
        />
        <AdditionWarning>
          Максимальный размер файла, который можно загрузить в сервис, не должен превышать{" "}
          <mark>200 Мб</mark>. Максимальная длина не должна превышать 60 секунд для
          конвертации в <mark>5 FPS</mark>
          или 15 секунд для конвертации в <mark>20 FPS</mark>.
        </AdditionWarning>
        <p>
          После загрузки видео вы сможете настроить FPS и нужное разрешение. Выбор из
          настроек мягко говоря не очень широкий, но для простой конвертации хватает. Если
          вы настроили всё, что вам нужно, то просто нажмите на кнопку{" "}
          <mark className="ui">Convert to GIF!</mark>.
        </p>
        <ImageFigure
          caption="Ezgif"
          imgSrc="images/ezgif_settings.png"
          imgTitle="Настройки конвертации в Ezgif"
          styleClass="figure_windows-light"
        />
        <p>
          Далее после успешной конвертации вы получите ваше видео в формате{" "}
          <mark className="image">GIF</mark> чуть ниже, в разделе{" "}
          <mark className="ui">Output GIF Animation</mark>, которое можно сохранить по
          нажатию <mark className="key">ПКМ</mark> &gt;{" "}
          <mark className="ui">Сохранить изображение как...</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="export with alpha-channel, вывод в прорес 4444"
        title="Как экспортировать композицию с альфа-каналом, то есть с прозрачностью?"
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
        <p>
          Затем укажите путь для вывода файла и нажмите на кнопку{" "}
          <mark className="ui">Render</mark> или на клавишу{" "}
          <mark className="key">Enter</mark>. После экспорта вы сможете воспользоваться
          этим видео в последующем монтаже видео или где-нибудь ещё.
        </p>
        <AdditionInfo>
          Если вы хотите посмотреть такое видео, но у вас оно не открывается стандартным
          плеером, то вам нужно установить сторонний видеоплеер, например{" "}
          <mark className="app">VLC</mark> или <mark className="app">MPC-HC</mark>.
          Учтите, что не все видео-проигрыватели корректно отображают видео с
          альфа-каналом.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="телеграм, стикеры, tgs, тгс"
        title="Как экспортировать композицию как стикеры и эмодзи для Telegram?"
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
        tag="создание могрт, анимационный шаблон для дальнейшего использования в Premiere Pro"
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
        tag="прокси, proxy composition, ускорение времени рендера, уменьшение перепросчёта, пререндер, prerender, как сократить время повторного экспорта если заказчик попросил внести небольшие правки"
        title="Как создать прокси для нужной композиции?"
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
      <DetailsSummary title="Как экспортировать текущий кадр предпросмотра как файл изображения?">
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
        tag="вывести секвенцию фото"
        title="Как экспортировать все кадры композиции отдельными изображениями?"
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
      <DetailsSummary title="Как экспортировать всю композицию или только его часть?">
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
      <DetailsSummary title="Как экспортировать композицию файлом с отображением всех границ и путей движения?">
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
        tag="коллект файлс, collect files"
        title="Как передать проект вместе с исходниками другому человеку?"
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
        <p>
          Изначально <mark className="file">Lottie</mark> не поддерживает все функции,
          например сторонние плагины или эффекты, поэтому на сайте Lottiefiles есть целая{" "}
          <a href="https://lottiefiles.com/supported-features">
            таблица совместимости эффектов
          </a>{" "}
          вашей анимации с браузерами и платформами. Чтобы проверить вашу анимацию, вы
          можете её загрузить в{" "}
          <a href="https://app.lottiefiles.com/preview">предпросмотр от Lottie</a>.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default AEExport;
