import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import ContentSwitcher from "../../../components/features/ContentFilter";
import {Divider} from "antd";

const AEInterface: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Interface.tsx" />
      <DetailsSummary title="Как включить отображение границ слоёв?">
        <p>
          Для включения отображения границ слоёв и их манипуляторов в окне предпросмотра,
          нажмите на комбинацию клавиш <mark className="key">Ctrl + Shift + H</mark> или
          нажмите на соответствующую иконку в окне предпросмотра.
        </p>
        <ImageFigure
          caption="Composition"
          imgSrc="images/aftereffects/view_layer_bounds.png"
          imgTitle="Включение отображение границ масок и слоёв"
          styleClass="figure_windows-dark"
        />
        <p>
          Если вы всё ещё не видите то, что вам нужно с этой включённой опцией - проверьте
          настройки <mark className="ui">View Options</mark>, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + U</mark> и выставьте галочки рядом со всеми
          параметрами.
        </p>
        <ImageFigure
          caption="View Options"
          imgSrc="images/aftereffects/view_options.png"
          imgTitle="Настройка отображения параметров слоя"
          styleClass="figure_windows-dark"
        />
        <p>
          Если вы не видите путь движения анимации вашего объекта или оно слишком короткое
          - измените область времени отображения пути движения, открыв{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Display</mark>. В разделе{" "}
          <mark className="ui">Motion Graph</mark> по умолчанию стоит отображение длины
          пути движения анимации не более 15 секунд. Если вы хотите включить отображение
          траектории по всей длине вашей анимации, то установите значение{" "}
          <mark className="ui">All Keyframes</mark>. Ну или можете вовсе отключить
          траекторию пути.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/change_motion_path_range.png"
          imgTitle="Изменение области времени отображения пути движения"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Что означает зелёная и синяя полоса сверху на таймлайне?">
        <p>
          Каждый, кто хоть раз работал в <mark className="app">Adobe After Effects</mark>,
          замечал на своём таймлайне зелёные или синие полосы, которые в каких-то случаях
          появляются и пропадают. Эти индикаторы показывают состояние кадров - отрендерены
          ли они и где расположены - в оперативной памяти или в дисковом кэше.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/green-blue_lines.png"
          imgTitle="Демонстрация таймлайна"
          styleClass="figure_windows-dark"
        />
        <ul>
          <li>
            <mark className="ui">Зелёная линия</mark> показывает кадры композиции, которые
            были закэширован в оперативную память и готовы для дальнейшего
            воспроизведения. Этот промежуток может расширяться в зависимости от того,
            сколько кадров вы отрендерили, так и сужаться от нехватки оперативной памяти,
            так как программа может выгрузить эти кадры в дисковый кэш или выкинуть их
            далеко и надолго.
            <AdditionWarning>
              В отличие от классических нелинейных редакторов, например{" "}
              <mark className="app">Adobe Premiere Pro</mark> или{" "}
              <mark className="app">Davinci Resolve</mark> -{" "}
              <mark className="app">Adobe After Effects</mark> не рассчитан на отображение
              предпросмотра в реальном времени, поэтому кадры всегда стоит предварительно
              прокэшировать, прежде чем его просмотреть. Для этого я рекомендую включить в
              окне <mark className="ui">Preview</mark> два параметра -{" "}
              <mark className="ui">Cache Before Playback</mark> и{" "}
              <mark className="ui">If Caching, play cached frames</mark>.{" "}
              <a href="#3.10">Подробнее...</a>
            </AdditionWarning>
          </li>
          <li>
            <mark className="ui">Синяя линия</mark> означает промежуток кадров, которые
            были записаны в дисковый кэш. Они остаются доступными даже после перезапуска
            программы, если кэш не был очищен. При попытке проиграть из дискового кэша -
            кадры обратно перемещаются<sup>*</sup> в оперативную память и проигрываются
            оттуда. При отключенном дисковом кэше - этот цвет на таймлайне не появится.
            <AdditionInfo>
              <sup>*</sup>В <mark className="app">Adobe After Effects</mark> версии{" "}
              <mark>25.2</mark> и новее была добавлена функция проигрывания предпросмотра
              напрямую из дискового кэша, минуя оперативную память, как будто вы смотрите
              видео в видеопроигрывателе. В таком случае зелёная полоса будет означать
              промежуток, который готов для дальнейшего воспроизведения предпросмотра.
              Если у вас не отключен дисковый кэш, то эта опция уже включена по умолчанию,
              а включить или выключить его можно в{" "}
              <mark className="ui">
                Edit &gt; Preferences &gt; Media & Disk Cache &gt; Enable Preview from
                Disk Cache
              </mark>
              . При использовании данной опции желательно использовать быстрый
              твердотельный накопитель.
            </AdditionInfo>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="разделить оси, не могу изменить плавность, не редактируется график скорости, separate dimensions, усики, сосочки, манипуляторы, value speed graph"
        title="Почему у меня пропали направляющие Безье?"
      >
        <p>
          Часто новичок, который недавно открыл программу, может натыкать так, что у него
          может пропасть некоторые важные элементы для создания различной анимации или
          фигур.
        </p>
        <Divider>
          Куда пропала возможность изменения плавности в графике скорости?
        </Divider>
        <p>
          Если вы пытаетесь отредактировать график скорости значения у аттрибута, имеющий
          более одного значения в массиве, например <mark className="ui">Position</mark>{" "}
          или <mark className="ui">Anchor Point</mark>, то в таком случае в режиме графика{" "}
          <mark className="ui">Value Graph</mark> вы не можете отредактировать скорость. В
          таком случае у вас есть два выхода: либо разделить значения через{" "}
          <mark className="ui">Separate Dimensions</mark>, если это возможно, либо
          переключиться на вид графика скорости <mark className="ui">Speed Graph</mark>.
        </p>
        <Divider>Делим значения положения</Divider>
        <p>
          Для того, чтобы разделить значения, например положения, вам нужно нажать правой
          кнопкой мыши по аттрибуту и нажать на{" "}
          <mark className="ui">Separate Dimensions</mark>. Если разделить значения у
          нужного параметра не получается - придётся переключиться на другой вид графика.
        </p>
        <VideoFigure
          caption="Разделение аттрибутов положения на X и Y"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/separate_dimensions.mp4"
        />
        <Divider>Изменение вида графика скорости</Divider>
        <p>
          Для того, чтобы изменить вид графика с <mark className="ui">Value Graph</mark>{" "}
          на <mark className="ui">Speed Graph</mark>, вам нужно открыть{" "}
          <mark className="ui">Graph Editor</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Shift + F3</mark> или соответствующей кнопки на таймлайне,
          открыть контекстное меню и выбрать то, что нам нужно.
        </p>
        <VideoFigure
          caption="Изменение вида графика скорости"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_graph_view.mp4"
        />
        <Divider>Куда пропали &quot;усики&quot; в пространстве?</Divider>
        <p>
          Если вы хотите изменять плавность траектории движения объекта прямо в
          предпросмотре, то вам нужно изменить тип пространственной интерполяции для
          ключей. Для этого выделите нужные ключевые кадры и нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + K</mark>. В открывшемся окне выберите в
          параметре <mark className="ui">Spatial Interpolation</mark> значение{" "}
          <mark className="ui">Bezier</mark> или любой другой тип безье. После этого вы
          сможете изменять траекторию движения в предпросмотре без всяких проблем.
        </p>
        <VideoFigure
          caption="Изменение типа пространственной интерполяции"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_spatial_interpolation.mp4"
        />
        <AdditionInfo>
          Если вы не видите путь движения анимации вашего объекта или оно слишком короткое
          - измените область времени отображения пути движения, открыв{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Display</mark> и установив
          значение <mark className="ui">All Keyframes</mark>. Также убедитесь в том, что
          вы включили отображение границ слоёв с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Shift + H</mark>.
        </AdditionInfo>
        <Divider>Почему у меня пропали манипуляторы при создании шейпов?</Divider>
        <p>
          При создании различных фигур с помощью пера иногда у вас может пропасть функция
          изменения изгиба при зажатии <mark className="key">ПКМ</mark> и перемещении
          курсора в сторону. Скорее всего вы случайно включили функцию{" "}
          <mark className="ui">Rotobeizer</mark>, которая автоматически искривляет линию
          под расположение точек. Данную функцию можно отключить в панели инструментов,
          убрав соответствующую галочку.
        </p>
        <AdditionInfo>
          Для конвертирования типа вертекса - воспользуйтесь инструментом{" "}
          <mark className="ui">Convert Vertex Tool</mark>. Она активирует{" "}
          <mark className="word">усики</mark> у созданных фигур, которые были созданы не с
          помощью <mark className="ui">Rotobeizer</mark>.
        </AdditionInfo>
        <VideoFigure
          caption="Adobe After Effects"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/rotobezier_demo.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="стиль графов, другой вид, отображение скорости, как сделать нормальный вид графика, speed value graph выглядит по другому"
        title="Почему мой график скорости не похож на тот, что показывают в уроках?"
      >
        <p>
          Скорее всего у вас включен другой вид отображения графика скорости. Попробуйте
          изменить вид на <mark className="ui">Value Graph</mark> или на{" "}
          <mark className="ui">Speed Graph</mark>, в зависимости от того, что вам нужно.
          Для этого откройте <mark className="ui">Graph Editor</mark> с помощью комбинации
          клавиш <mark className="key">Shift + F3</mark> или соответствующей кнопки на
          таймлайне, откройте контекстное меню и выберите то, что вам нужно.
        </p>
        <VideoFigure
          caption="Изменение вида графика скорости"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_graph_view.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="отобразить переключатели, включить кнопки"
        title="Пропали нужные переключатели и колонки на таймлайне. Как мне их вернуть?"
      >
        <p>
          Если вы случайным образом дотыкались до такой степени, что у вас нужные
          параметры на таймлайне пропали, то не время паниковать. Вы можете вернуть
          отображение нужных переключателей - для этого нажмите на{" "}
          <mark className="key">ПКМ</mark> по столбцам и выберите в разделе{" "}
          <mark className="ui">Columns</mark> контекстного меню то, что вам нужно. Также в
          левом нижнем углу окна таймлайна вы можете воспользоваться четырьмя кнопками для
          быстрого переключения отображения некоторых колонок.
        </p>
        <VideoFigure
          caption="Включение колонок на таймлайне"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/enable_timeline_columns.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Я случайно закрыл окно в интерфейсе. Как его вернуть обратно?">
        <p>
          Для восстановления случайно закрытого окна перейдите в{" "}
          <mark className="ui">Window</mark> и выберите нужное вам окно. Также в этом
          контекстном меню можно открыть окна расширений или переключиться между рабочими
          пространствами.
        </p>
        <VideoFigure
          caption="Восстановление закрытого окна"
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/open_window.mp4"
        />
        <p>
          Чтобы закрыть окно в интерфейсе рабочего пространства программы - нажмите на
          крестик слева от выбранного заголовка окна или нажмите на три полоски возле
          заголовка окна и выберите <mark className="ui">Close Panel</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как прикрепить нужное окно в рабочее пространство программы?">
        <p>
          Для того, чтобы прикрепить окно к рабочему пространству программы - нужно зажать
          курсор в районе названия окна и перетащить его в нужное место. Программа сама
          предложит вам прицепить его внутрь окна или в сторону.
        </p>
        <AdditionWarning>
          Цепляться нужно именно за название вкладки в интерфейсе самого{" "}
          <mark className="app">Adobe After Effects</mark>, а не за заголовок окна,
          создаваемый вашей операционной системой.
        </AdditionWarning>
        <VideoFigure
          caption="Прикрепление окна в рабочее пространство"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/attach_window.mp4"
        />
        <p>
          Чтобы отцепить окно - нажмите на три полоски возле заголовка окна и нажмите на{" "}
          <mark className="ui">Undock Panel</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать так, чтобы мое рабочее пространство не переключалось на другое при открытии чужих проектов?">
        <AdditionWarning>
          В старых версиях <mark className="app">Adobe After Effects</mark> такой опции
          нет. Чтобы она появилась - обновитесь до более свежей версии.
        </AdditionWarning>
        <p>
          В <mark className="app">Adobe After Effects</mark> версии <mark>25.2</mark> и
          новее появилась новая функция в настройках, предотвращающая смену
          пользовательского рабочего пространства на стандартное или иное. При частой
          работе с чужими проектами изначальная особенность программы бесило многих
          пользователей и <mark>Adobe</mark> добавила для этого{" "}
          <a href="https://helpx.adobe.com/after-effects/using/whats-new/2025-2.html#maintain-workspace-when-opening-projects">
            решение
          </a>
          . Для предотвращения переключения рабочих пространств нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; General</mark> и включить
          параметр{" "}
          <mark className="ui">Maintain current workspace when opening projects</mark>.
          При включенной опции рабочие пространства перестанут переключаться сами по себе,
          если пользователь явно не хочет их переключать.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/enable_maintain_current_workspace.png"
          imgTitle="Настройка предотвращения переключения рабочих пространств"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу прикрепить окно скрипта. Есть какие-то способы закрепить его?">
        <p>
          Скрипты формата <mark className="file">.jsx</mark> или{" "}
          <mark className="file">.jsxbin</mark>, которые содержат интерфейс, не могут быть
          прикреплены, если они находятся в директории{" "}
          <mark className="path">...\Adobe After Effects 20XX\Support Files\Scripts</mark>
          , минуя папку <mark className="path">ScriptUI Panels</mark>.
        </p>
        <VideoFigure
          caption="Adobe After Effects"
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/i_cant_attach_script.mp4"
        />
        <p>
          Для возможности прикрепления таких окон в рабочее пространство скрипты формата{" "}
          <mark className="file">.jsx</mark> или <mark className="file">.jsxbin</mark>{" "}
          необходимо переместить в папку <mark className="path">ScriptUI Panels</mark>.
          После этого требуется перезагрузка{" "}
          <mark className="app">Adobe After Effects</mark>, если приложение уже было
          запущено.
        </p>
        <VideoFigure
          caption="Проводник"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/move_from_scripts_to_scriptuipanels.mp4"
        />
        <p>
          После переноса из одной папки в другую - скрипт переместится из меню{" "}
          <mark className="ui">File &gt; Scripts</mark> в конец списка меню{" "}
          <mark className="ui">Window</mark>. После открытия скрипта оттуда, у вас
          появится возможность прикреплять окно скрипта в любой части рабочего
          пространства.
        </p>
        <VideoFigure
          caption="Прикрепление скрипта True Comp Duplicator"
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/attaching_jsx_script.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как поставить несколько окон во вкладки или расположить их по списку?">
        <p>
          Чтобы организовать несколько окон в одном интерфейсе, их можно объединить в виде
          вкладок внутри существующего окна, переместив их в одно окно. Это позволяет
          легко переключаться между ними, экономя пространство экрана и обеспечивая доступ
          ко всем инструментам в одном месте. Такой подход особенно удобен для работы на
          небольших экранах, где важна компактность и функциональность.
        </p>
        <p>
          Вкладки окон ещё можно организовать в формате списка, при нажатии на его
          элементы - свёрнутые окна будут раскрываться. Для этого откройте меню, нажав на
          три полоски в нужном окне, и выберите{" "}
          <mark className="ui">Panel Group Settings &gt; Stacked Panel Group</mark>.
        </p>
        <AdditionInfo>
          Чтобы одновременно открывалось только одно окно из списка, активируйте опцию{" "}
          <mark className="ui">Solo Panels in Stack</mark> в тех же настройках.
        </AdditionInfo>
        <VideoFigure
          caption="Управление окнами в рабочем пространстве"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/manage_windows.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="шляпка, стесняшка, медуза, shy layer, тихий, скрытые слои"
        title="Почему я не вижу некоторые слои на таймлайне, хотя они видны в композиции и спокойно отображаются в окне предпросмотра?"
      >
        <p>
          Обычно таким вопросом вы можете задаться, когда открываете шаблон или чужой
          проект, в котором вы не оставили ни одного отпечатка. Автор проекта может скрыть
          некоторые слои на таймлайне с помощью функции <mark className="ui">Shy</mark>{" "}
          для того, чтобы шаловливые ручки не лезли не туда, куда нужно.
        </p>
        <p>
          Включить или выключить отображение скрытых слоёв вы можете в панели инструментов
          на таймлайне с помощью соответствующей иконки. Также задать параметр скрытого
          слоя вы можете с помощью нужного переключателя.
        </p>
        <VideoFigure
          caption="Работа со скрытыми слоями"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/toggle_shy.mp4"
        />
        <AdditionInfo>
          Если вы не видите нужные переключатели у слоя, то включите колонку{" "}
          <mark className="ui">Switches</mark>, нажав на первую иконку в левом нижнем
          углу.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="сбросились настройки, восстановить параметры"
        title="Компьютер во время работы упал в BSOD и испортил мне настройки. Как мне их восстановить?"
      >
        <p>
          В редких случаях при обычной работе с{" "}
          <mark className="app">Adobe After Effects</mark> ваше устройство может упасть в
          &quot;синий экран смерти&quot;, и в это время по несчастливому стечению
          обстоятельств программа перезаписывала файл ваших настроек. Соответственно{" "}
          <mark className="app">Adobe After Effects</mark> может побить файл настроек и,
          скорее всего, в таком случае вы увидите при следующем запуске программы ошибку
          чтения пользовательских настроек и сбросит их до &quot;заводских&quot;.
        </p>
        <p>
          Если вы обновлялись с предыдущих версий{" "}
          <mark className="app">Adobe After Effects</mark>, то вы можете импортировать
          настройки со старых версий. Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Startup & Repair</mark> найдите
          и нажмите на кнопку{" "}
          <mark className="ui">Migrate Previous Version Preferences</mark>. В открывшемся
          окне вы можете выбрать из какой версии{" "}
          <mark className="app">Adobe After Effects</mark> перенести настройки.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/migrate_previous_version_preferences.png"
          imgTitle="Переносим настройки из старых версий программы"
          styleClass="figure_windows-dark"
        />
        <p>
          Если у вас предыдущих настроек нет, то переименовывать файл настроек, убрав
          суффикс <mark>-old</mark> особого смысла нет, так как файл может быть поврежден.
          Советую периодически сохранять настройки пользователя в какую-нибудь отдельную
          папку или{" "}
          <a href="#4.1">
            настроить синхронизацию файлов конфигураций в облачном хранилище
          </a>
          . Открыть папку с настройками пользователя можно, нажав на кнопку{" "}
          <mark className="ui">Reveal Preferences in Explorer</mark> в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Startup & Repair</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="track matte, альфа люма мейт, трекмейт, trkmat"
        title="Установил After Effects 2023 или новее и не могу понять, что случилось с Alpha и Luma Matte?"
      >
        <p>
          В версиях <mark>2023</mark> и новее пришла новая эпоха работы с масками. После
          обновления работа с слоями-масками стала проще. Но после этого обновления
          появилась другая проблема - старые обучающие видео вводят новичков с новыми
          версиями в заблуждение, а новые видео - пользователей с старыми версиями{" "}
          <mark className="app">Adobe After Effects</mark>. Поэтому постарайтесь найти
          более актуальное видео для объяснения решения вашей задачи или приспособьтесь к
          немного другой реализации работы с масками.
        </p>
        <YouTubeVideo
          caption="Обновление вкладки Track Matte"
          link="2Fi57LLJrUE"
        />
        <AdditionInfo>
          Дополнительную информацию об обновлении работы с масками можно{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/track-mattes-and-traveling-mattes.html">
            прочитать на сайте Adobe
          </a>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="properties window"
        title="Как отключить автоматическое открытие окна свойств слоя?"
      >
        <p>
          Отдельное окно <mark className="ui">Свойства</mark> или же{" "}
          <mark className="ui">Properties</mark> была добавлена в{" "}
          <mark className="app">Adobe After Effects 23.4</mark> и новее. После выхода
          этого обновления не все приняли положительно такое окно свойств слоя, а кого-то
          и выбешивало то, что это окно открывается автоматически при выборе некоторых
          инструментов.
        </p>
        <AdditionInfo>
          Подробности о работе этой функции вы можете{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/properties-panel.html">
            прочитать на официальном сайте Adobe
          </a>
          .
        </AdditionInfo>
        <p>
          К счастью, автоматическое открытие окна свойств можно отключить, убрав галочку
          из <mark className="ui">Auto-Open Panel</mark>. Эту процедуру нужно выполнить
          пару раз, потому что эта галочка не отключает авто-открытие у всех инструментов.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/toggle_auto-open_panel.png"
          imgTitle="Отключение автоматического открытия окна свойств"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="ктрл пробел, быстрое применение эффектов, фх консоль"
        title="Как включить всплывающую панель для применения эффектов, которая открывается с помощью Ctrl+Space?"
      >
        <p>
          То, что описано в этом вопросе - не является встроенной функцией{" "}
          <mark className="app">Adobe After Effects</mark>. Здесь идёт речь о стороннем
          плагине{" "}
          <a href="https://www.videocopilot.net/blog/?s=fx%20console">FX Console</a>. С
          помощью него действительно можно быстро применить эффект на выделенный слой,
          нажав на комбинацию клавиш <mark className="key">Ctrl + Space</mark>. Также с
          помощью данного плагина можно быстро создать скриншот текущего кадра в файл или
          в буфер обмена.
        </p>
        <AdditionInfo>
          Для создания скриншотов с полным разрешением - включите параметр{" "}
          <mark className="ui">Full Resolution Screenshots</mark> в настройках плагина.
          Там же можно и переназначить комбинацию клавиш для открытия окна плагина.
        </AdditionInfo>
        <VideoFigure
          caption="Демонстрация плагина FX Console"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/fx_console_demonstration.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="другой вид, альтернативный таймкод, отображение кадров"
        title="Как изменить вид отсчёта времени на таймлайне?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> доступно два вида отображения
          текущего времени на таймлайне: в формате <mark>ЧЧ:ММ:СС:КК</mark>, где{" "}
          <mark>Ч</mark> - часы, <mark>М</mark> - минуты, <mark>С</mark> - секунды и{" "}
          <mark>К</mark> - кадры или отображение текущего положения по кадрам. Между этими
          режимами вы можете переключиться, нажав по таймкоду с зажатым{" "}
          <mark className="ui">Ctrl</mark>.
        </p>
        <VideoFigure
          caption="Изменение вида отображения времени на таймлайне"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/alternate_timecode_style.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как установить свой процент масштабирования предпросмотра?">
        <p>
          Многих пользователей бесит, что по умолчанию в{" "}
          <mark className="app">Adobe After Effects</mark> в предпросмотре нельзя
          установить свой процент масштабирования, доступны только жалкие фиксированные
          значения: <mark>25%</mark>, <mark>33.3%</mark>, <mark>50%</mark>,{" "}
          <mark>100%</mark> и прочие. К счастью, есть сторонний плагин{" "}
          <mark className="plugin">ae-zoom</mark>, который создаёт окно с регулировкой
          своего процента масштабирования в предпросмотре и решает проблему. Скачать его
          можно на{" "}
          <a href="https://github.com/QuisPic/ae-zoom/releases">
            странице релизов в GitHub
          </a>
          .
        </p>
        <VideoFigure
          caption="Демонстрация плагина ae-zoom"
          styleClass="figure_windows-dark"
          videoSrc="images/ae-zoom_demonstration.webm"
        />
        <ContentSwitcher
          macContent={
            <div>
              <ul>
                <li>
                  Чтобы установить это расширение для изменения масштабирования
                  предпросмотра, вам нужно перенести файл{" "}
                  <mark className="file">Zoom.jsx</mark> из архива в стандартную папку для
                  скриптов -{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Scripts/
                  </mark>
                  .
                </li>
                <li>
                  Затем перенесите <mark className="file">Zoom.plugin</mark> из папки
                  архива <mark className="path">Plug-in/macOS</mark> в общую папку для
                  плагинов -{" "}
                  <mark className="path">
                    /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  .
                </li>
              </ul>
              <p>
                После установки расширения вы сможете его открыть в{" "}
                <mark className="ui">File &gt; Scripts</mark> и регулировать
                масштабирование как вашей душе угодно.
              </p>
            </div>
          }
          windowsContent={
            <div>
              <ul>
                <li>
                  Чтобы установить это расширение для изменения масштабирования
                  предпросмотра, вам нужно перенести файл{" "}
                  <mark className="file">Zoom.jsx</mark> из архива в стандартную папку для
                  скриптов -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts\
                  </mark>
                  .
                </li>
                <li>
                  Затем перенесите <mark className="file">Zoom.aex</mark> из папки архива{" "}
                  <mark className="path">Plug-in/Windows</mark> в общую папку для плагинов
                  -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  .
                </li>
              </ul>
              <p>
                После установки расширения вы сможете его открыть в{" "}
                <mark className="ui">File &gt; Scripts</mark> и регулировать
                масштабирование как вашей душе угодно.
              </p>
            </div>
          }
        />
        <AdditionInfo>
          Если вы хотите сделать прикрепляемое окно для масштабирования, то переместите{" "}
          <mark className="file">Zoom.jsx</mark> в дочернюю папку{" "}
          <mark className="path">Script UI Panels</mark>. Тогда скрипт будет открываться
          из контекстного меню <mark className="ui">Window</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Где найти Front View, Current Camera и прочие варианты отображения камеры?">
        <p>
          Если в вашей композиции отсутствует камера или не включено трёхмерное
          пространство у какого-либо слоя, то данные кнопки будут скрыты по причине
          ненадобности в текущем понимании. Чтобы &quot;включить&quot; эти кнопки - в
          вашей композиции должна быть создана камера, применён любой эффект, который
          работает в 3D-пространстве, например{" "}
          <mark className="plugin">CC Particle World</mark> или{" "}
          <mark className="plugin">Trapcode Particular</mark>, или хотя бы один слой
          должен быть переведён в режим 3D-слоя.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/toggle_3d_layer.png"
          imgTitle="Включение режима 3D для слоя"
          styleClass="figure_windows-dark"
        />
        <p>
          Если одно из условий соблюдено, то вы увидите кнопки для переключения видов в
          окне предпросмотра. Рядом же вы можете переключить движок 3D-рендера, включить{" "}
          <mark>Draft 3D</mark> или разделить предпросмотр на несколько видов.
        </p>
        <ImageFigure
          caption="Composition"
          imgSrc="images/aftereffects/change_view.png"
          imgTitle="Переключение видов в окне предпросмотра"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему точки, для того чтобы прицепить объект, не отображаются в 3D Camera Tracker?">
        <p>
          Скорее всего вы скрыли отображение границ слоёв и их манипуляторов в окне
          предпросмотра. Для того чтобы их вернуть - нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + H</mark> или нажмите на соответствующую
          иконку в окне предпросмотра и продолжайте работу.
        </p>
        <AdditionInfo>
          Точки будут отображаться если выделен сам эффект{" "}
          <mark className="plugin">3D Camera Tracker</mark>
        </AdditionInfo>
        <ImageFigure
          caption="Composition"
          imgSrc="images/aftereffects/view_layer_bounds.png"
          imgTitle="Включение отображение границ масок и слоёв"
          styleClass="figure_windows-dark"
        />
        <p>
          Если вам нужно принудительно отобразить точки трекинга, то включите функцию{" "}
          <mark className="ui">Render Track Points</mark>. В таком случае вы не сможете
          выделять точки для трекинга.
        </p>
        <ImageFigure
          caption="Effects Controls"
          imgSrc="images/aftereffects/render_track_points.png"
          imgTitle="Включение точек трекинга"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="плейхед, cti"
        title="Почему я не могу поставить метку текущего времени в самый конец композиции?"
      >
        <p>
          <mark className="word">Плейхед</mark>,{" "}
          <mark className="word">временная метка воспроизведения</mark> или{" "}
          <mark className="word">CTI (Current Time Indicator)</mark> показывает то, что
          находится <u>впереди</u> его пути.{" "}
          <mark className="app">Adobe After Effects</mark> выделяет кадр, который вы
          видите в предпросмотре небольшой подсветкой по всей высоте вашего таймлайна.
          Переместив плейхед максимально вправо или нажав на кнопку{" "}
          <mark className="key">End</mark> вы действительно попадёте в самый конец
          композиции, дальше перемещать его смысла нет.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/last_frame_problem.png"
          imgTitle="Проблема последнего кадра"
          styleClass="figure_windows-dark"
        />
        <p>
          Композиция из примера на скриншоте имеет параметры длины композиции в 30 секунд
          с частотой кадров 25 к/с, последняя секунда для этой композиции это{" "}
          <mark>00:29:24</mark> или же <mark>749-ый кадр</mark>. На{" "}
          <mark>750-м кадре</mark> вы ничего не увидите, так как отсчёт кадров идёт с
          нуля, а не с единицы, как у индексов массива в популярных языках
          программирования. Всего у композиции будет действительно <mark>750</mark>{" "}
          кадров, но они будут нумероваться от <mark>0</mark> до <mark>749</mark>.
        </p>
        <AdditionInfo>
          Вы, конечно, можете поставить <mark className="word">временную метку</mark> в
          самый конец композиции, прибавив ещё один кадр в таймкоде вручную. Только таким
          образом в предпросмотре вы не увидите ровным счётом ничего, потому что
          композиция закончилась раньше, чем <mark className="word">плейхед</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="У меня есть два ключа с одинаковым значением, но между ними всё равно идёт какая-то анимация. Как её убрать?">
        <Divider>Проверяем график скорости</Divider>
        <p>
          Скорее всего вы ни разу не смотрели на график скорости между двумя ключами,
          особенно после того, как вы изменили длительность между кадрами. Чтобы
          посмотреть на график скорости выделенного параметра - нажмите на комбинацию
          клавиш <mark className="key">Shift + F3</mark>. В этом же графике скорости вы
          сможете подстроить скорость вашей анимации с помощью манипуляторов. В моем
          примере у первого и второго ключа стоит одинаковое значение <mark>100%</mark>,
          но между ними всё равно будет идти анимация из-за изменённого графика скорости.
        </p>
        <ImageFigure
          caption="Speed Graph"
          imgSrc="images/aftereffects/problematic_interpolation.png"
          imgTitle="Пример с проблемной интерполяцией"
          styleClass="figure_windows-dark"
        />
        <Divider>Меняем интерполяцию между кадрами</Divider>
        <p>
          Чтобы убрать анимацию между двумя кадрами - воспользуйтесь манипуляторами для
          изменения скорости в <mark className="ui">Speed Editor</mark> или измените режим
          интерполяции ключевых кадров. Для изменения режима интерполяции - выделите все
          ключи, которые вам нужны и нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + K</mark> для открытия окна{" "}
          <mark className="ui">Keyframe Interpolation</mark>. В открывшемся окне в
          параметре <mark className="ui">Temporal Interpolation</mark> выберите значение{" "}
          <mark className="ui">Linear</mark> или <mark className="ui">Hold</mark>. После
          этого у вас между выделенными ключами не должно быть лишней анимации.
        </p>
        <ImageFigure
          caption="Keyframe Interpolation"
          imgSrc="images/aftereffects/change_keyframe_interpolation.png"
          imgTitle="Изменение интерполяции ключевых кадров"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="вейвформ, аудио, увидеть волну"
        title="Как включить отображение звуковой волны у слоя со звуком?"
      >
        <p>
          Если вам нужно отобразить звуковую волну у слоя со звуком для того, чтобы
          расставить маркеры или что-нибудь ещё, то просто выделите нужный слой со звуком
          и два раза нажмите на кнопку <mark className="key">L</mark>.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/show_waveform.png"
          imgTitle="Отображение звуковой волны у слоя со звуком"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          При желании вы можете растянуть звуковую волну по высоте, потянув за нижний край
          волны.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="ротобраш"
        title="Я использую After Effects 2019 и в нём не выделяется объект в Rotobrush, что делать?"
      >
        <p>
          Скорее всего вы столкнулись с багом этой версии, если вы используете репак от{" "}
          <mark>KpoJluk</mark>. Проблема решается откатом программы до версии{" "}
          <mark>CC 2018</mark>, установкой{" "}
          <mark className="app">Adobe After Effects 2019</mark> сборки от{" "}
          <mark>m0nkrus</mark> или установкой более свежей версии программы от кого
          угодно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="стартовая страница, домашний экран, окно с проектами"
        title="Почему у меня не работает окно с недавними проектами и как отключить его?"
      >
        <p>
          По умолчанию, при запуске <mark className="app">Adobe After Effects</mark>{" "}
          открывается домашнее окно с приветствием и списком недавних проектов. На
          некоторых <mark className="word">народных</mark> версиях{" "}
          <mark className="app">Adobe After Effects</mark> стартовый экран может не
          грузиться и выдавать пустоту. Для быстрого решения этой проблемы - достаточно
          войти в аккаунт <mark>Adobe</mark> с помощью{" "}
          <mark className="ui">Help &gt; Sign In</mark>.
        </p>
        <AdditionWarning>
          <ul>
            <li>
              Если при попытке входа вы столкнулись с окном{" "}
              <mark className="ui">Sorry, something went wrong</mark> и надписью{" "}
              <mark className="ui">Are you connected to the internet?</mark>, то, скорее
              всего, программа не может выйти в интернет. Для решения этой проблемы -
              включите на время <mark className="app">VPN</mark> или разрешите программе
              доступ в интернет с помощью <mark className="app">брандмауэра</mark>.{" "}
            </li>
            <li>
              Чтобы открыть брандмауэр - откройте окно{" "}
              <mark className="app">Выполнить</mark> с помощью комбинации клавиш{" "}
              <mark className="key">Win + R</mark>, введите в него{" "}
              <mark className="code">wf.msc</mark> и нажмите на{" "}
              <mark className="key">Enter</mark>. После этого перейдите в{" "}
              <mark className="ui">Правила для входящих подключений</mark> и у правил,
              связанных с блокировкой <mark>Adobe</mark>, нажмите на{" "}
              <mark className="key">ПКМ</mark> и выберите{" "}
              <mark className="ui">Отключить правило</mark>. После отключения правил -
              перезапустите <mark className="app">Adobe After Effects</mark>, выполните
              процедуру входа в аккаунт и снова включите правила{" "}
              <mark className="app">брандмауэра</mark>.
            </li>
          </ul>
        </AdditionWarning>
        <Divider>Отключаем домашний экран при запуске программы</Divider>
        <p>
          Если вариант со входом в аккаунт вас не устраивает или вас бесит это окно, то к
          счастью, это окно можно отключить. Для отключения стартового окна со списком
          недавних проектов откройте настройки{" "}
          <mark className="app">Adobe After Effects</mark> с помощью{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Startup & Repair</mark>, а затем
          в открывшемся окне выключите параметр{" "}
          <mark className="ui">Enable Home Screen</mark>.
        </p>
        <AdditionInfo>
          В старых версиях <mark className="app">Adobe After Effects</mark> параметр с
          выключением домашнего экрана находится в разделе{" "}
          <mark className="ui">General</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/enable_home_screen.png"
          imgTitle="Переключаем отображение домашнего экрана"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="cti stuck, плейхед зависает, не работает зум"
        title="Почему красная линия воспроизведения на таймлайне иногда останавливается?"
      >
        <p>
          Предположим, что вы начали кэширование предпросмотра и в какой-то момент у вас
          полоса текущего времени предпросмотра внезапно останавливается. Дополнительно
          при этом может зависнуть сам предпросмотр, то есть не реагировать на увеличение
          или на перемещение плейхеда. Данный баг относительно новый и может появиться на
          любой версии программы, даже на чистой и лицензионной.
        </p>
        <p>
          Баг <u>может</u> возникнуть из-за одновременно открытых{" "}
          <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Premiere Pro</mark>, а также при использовании{" "}
          <mark className="plugin">Dynamic Link</mark>. Также баг может возникнуть на
          совершенно чистой установке <mark className="app">Adobe After Effects</mark> без
          сторонних плагинов и скриптов.
        </p>
        <AdditionWarning>
          Приведённый ниже способ{" "}
          <u>
            <b>не является панацеей</b>
          </u>{" "}
          для решения проблемы зависания красной полосы проигрывания предпросмотра.
        </AdditionWarning>
        <p>
          Для возможного решения проблемы попробуйте установить значение{" "}
          <mark>false</mark> рядом с параметром{" "}
          <mark className="ui">PreviewPlaybackOptimization</mark> в консоли. Чтобы это
          сделать - откройте консоль с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + F12</mark>, установите вид отображения{" "}
          <mark className="ui">Debug Database View</mark> и уберите чекбокс напротив{" "}
          <mark className="ui">PreviewPlaybackOptimization</mark>. После этого
          перезагрузите программу и попробуйте закэшировать и проиграть предпросмотр
          заново.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/disable_previewplaybackoptimization.png"
          imgTitle="Отключение оптимизации предпросмотра"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Как изменить стандартные цвета меток для различных типов слоёв?">
        <p>
          В <mark className="app">Adobe After Effects</mark> всем типам слоев
          присваивается тот или иной цвет. Иногда пользователю хочется сделать цвета слоёв
          более насыщенными или изменить на свои. Чтобы это сделать - перейдите в
          настройки программы{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Labels</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/preferences_labels.png"
          imgTitle="Настройки меток"
          styleClass="figure_windows-dark"
        />
        <p>
          Перед вами появятся две категории - <mark className="ui">Label Defaults</mark> и{" "}
          <mark className="ui">Label Colors</mark>. В первой категории вы можете задать
          для нужного типа слоя или маркера любой цвет из второй категории. Во второй
          категории вы можете изменить цвет и даже задать ему своё имя.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса программы?">
        <AdditionDanger>
          Для <mark className="app">Adobe After Effects</mark> версий <mark>25.X</mark>{" "}
          данная инструкция неактуальна, после включения параметра в консоли - в
          настройках ничего не будет.
        </AdditionDanger>
        <p>
          Вы, наверное, не раз натыкались на различные скриншоты, где у пользователей
          изменён цветовой акцент в интерфейсе программы. В версиях от 2017 до 2024 можно
          включить возможность изменения акцента через консоль. Для этого нажмите на
          комбинацию клавиш <mark className="key">Ctrl + F12</mark>. Затем введите команду
          ниже в консоль в режиме <mark className="ui">Console View</mark> и нажмите на{" "}
          <mark className="key">Enter</mark>.
        </p>
        <code>debug.set Enable_Theme_Colorizing=true</code>
        <AdditionInfo>
          Режимы отображения консоли можно изменить нажав на три полоски в заголовке окна.
          Также этот параметр можно найти и в режиме отображения{" "}
          <mark className="ui">Debug Database View</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="Console"
          imgSrc="images/aftereffects/console_theme_colorizing.png"
          imgTitle="Включение возможности изменения акцента интерфейса"
          styleClass="figure_windows-dark"
        />
        <p>
          После успешного включения опции, перейдите в настройки программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Appearance</mark> и нажмите на
          кнопку <mark className="ui">Change Color</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/select_theme_color.png"
          imgTitle="Находим кнопку для смены цвета интерфейса"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшейся цветовой палитре вы можете указать любой цвет, какой захотите.
          Желательно выбрать тот цвет, который будет хорошо выделяться на фоне остального
          интерфейса.
        </p>
        <AdditionWarning>
          Не рекомендую ставить тёмные, а также слишком насыщенные оттенки, ибо вы можете
          плохо различать некоторые элементы интерфейса.
        </AdditionWarning>
        <ImageFigure
          caption="Change Color"
          imgSrc="images/aftereffects/theme_colorizing.png"
          imgTitle="Выбор акцентного цвета для интерфейса"
          styleClass="figure_windows-dark"
        />
        <p>
          После выбора нужного вам цвета, нажмите на <mark className="ui">OK</mark> и
          теперь вы можете наслаждаться &quot;афтером не как у всех&quot;.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить картинку во время запуска программы?">
        <AdditionDanger>
          Действия с заменой файлов программы{" "}
          <b>
            <u>вы делаете на свой страх и риск!</u>
          </b>{" "}
          А лучше не занимайтесь такой бесполезной х&$%й. После обновления программы ваша
          картинка перезапишется на исходную. Инструкция действительна только для
          устройств на <mark>Windows</mark>.
        </AdditionDanger>
        <p>
          При запуске <mark className="app">Adobe After Effects</mark> вы часто видите
          какую-либо картинку, задуманной Adobe и наверное задумывались, что неплохо бы её
          заменить на свою. Да, такое можно сделать с помощью махинаций с{" "}
          <mark className="file">.dll</mark> файлами. Для этого нам пригодится программа{" "}
          <mark className="app">Resource Hacker</mark>, которую можно загрузить{" "}
          <a href="https://angusj.com/resourcehacker/#download">по этой ссылке</a>.
        </p>
        <Divider>Извлекаем изображения из .dll</Divider>
        <p>
          После открытия <mark className="app">Resource Hacker</mark> мы видим такой
          интерфейс. Что нам от него нужно - просто открыть{" "}
          <mark className="file">AfterFXLib.dll</mark>, находящийся по пути{" "}
          <mark className="path">
            C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files
          </mark>{" "}
          в этой программе, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + O</mark> или нажав на соответствующую иконку.
        </p>
        <ImageFigure
          caption="Resource Hacker"
          imgSrc="images/aftereffects/resource_hacker_open_file.png"
          imgTitle="Открываем файл в Resource Hacker"
          styleClass="figure_windows-light"
        />
        <p>
          После открытия файла, в левой части окна{" "}
          <mark className="app">Resource Hacker</mark> появятся папки с изображениями и
          другими файлами. Нам нужно в ней открыть папку <mark className="path">PNG</mark>{" "}
          и найти изображения с названиями <mark className="image">AE_SPLASH</mark>,{" "}
          <mark className="image">AE_SPLASH_AT_2X</mark> и{" "}
          <mark className="image">AE_SPLASH_AT_3TO2X</mark>, а затем извлечь эти
          изображения, выделив их <mark className="key">ПКМ</mark> и выбрав{" "}
          <mark className="ui">Save *.png resource</mark>. После открытия системного окна
          - укажите любое удобное вам место сохранения изображения.
        </p>
        <AdditionInfo>
          Всего есть три изображения, каждое из которых адаптировано под определённый
          масштаб дисплея. Вы можете заменить один, два или все три файла в зависимости от
          ваших личных предпочтений, если часто меняете масштабирование системы. По
          аналогии вы можете изменить плашку для окна <mark className="ui">About</mark>,
          заменив файлы <mark className="file">AE_ABOUT</mark>,{" "}
          <mark className="file">AE_ABOUT_AT_2X</mark> и{" "}
          <mark className="file">AE_ABOUT_AT_3TO2X</mark>
        </AdditionInfo>
        <ImageFigure
          caption="Resource Hacker"
          imgSrc="images/aftereffects/resource_hacker_extract_file.png"
          imgTitle="Извлекаем изображения из .dll"
          styleClass="figure_windows-light"
        />
        <p>
          Отредактировать извлечённый файл вы можете в любом редакторе изображений,
          например <mark className="app">Adobe Photoshop</mark>,{" "}
          <mark className="app">GIMP</mark>,{" "}
          <mark className="app">Adobe Illustrator</mark> и даже в самом{" "}
          <mark className="app">Adobe After Effects</mark>. Нужно просто не менять размер
          изображения и сохранить его также в <mark className="file">.png</mark>.
        </p>
        <p>
          Я же просто заменю в <mark className="app">Adobe Photoshop</mark> стандартное
          изображение на изображение автомобиля <mark>Ford Focus</mark> и сохраню его в{" "}
          <mark className="file">.png</mark>.
        </p>
        <ImageFigure
          caption="Пример модификации изображения при загрузке Adobe After Effects"
          imgSrc="images/aftereffects/custom_splash_example.png"
          imgTitle="Изменённое изображение при открытии программы"
          styleClass="figure_windows-light"
        />
        <Divider>Заменяем изображения в .dll</Divider>
        <p>
          После изменения изображения, возвращаемся к{" "}
          <mark className="app">Resource Hacker</mark>, выбираем изображение которое нам
          нужно заменить, нажав по ней <mark className="key">ЛКМ</mark> и нажимаем
          комбинацию клавиш <mark className="key">Ctrl + R</mark>. В открывшемся окне
          нажимаем на кнопку <mark className="ui">Select File</mark>, после которого
          откроется системное окно для выбора нужного файла, где мы собственно и выбираем
          изображение. После выбора нажимаем на кнопку <mark className="ui">Replace</mark>{" "}
          и считай пол дела сделано.
        </p>
        <ImageFigure
          caption="Resource Hacker"
          imgSrc="images/aftereffects/resource_hacker_replace.png"
          imgTitle="Заменяем изображение в .dll"
          styleClass="figure_windows-light"
        />
        <p>
          После успешной замены нам достаточно сохранить изменения, нажав на{" "}
          <mark className="key">Ctrl + S</mark>. Теперь при каждом запуске программы вы
          будете видеть свой шедевр, который вы сотворили. В теории надпись{" "}
          <mark>Artwork by Name Surname</mark> тоже можно изменить, но я не вглублялся в
          такие подробности.
        </p>
        <VideoFigure
          caption="Пример изменённой плашки при открытии программы"
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/custom_splash_opening.mp4"
        />
      </DetailsSummary>
    </div>
  );
};
export default AEInterface;
