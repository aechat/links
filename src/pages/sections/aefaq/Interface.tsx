import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/view_layer_bounds.png"
          imgTitle="Включение отображение границ масок и слоёв"
          caption="Composition"
        />
        <p>
          Если вы всё ещё не видите то, что вам нужно с этой включённой опцией - проверьте
          настройки <mark className="ui">View Options</mark>, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + U</mark> и выставьте галочки рядом со всеми
          пунктами.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/view_options.png"
          imgTitle="Настройка отображения параметров слоя"
          caption="View Options"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_motion_path_range.png"
          imgTitle="Изменение области времени отображения пути движения"
          caption="Preferences"
        />
      </DetailsSummary>
      <DetailsSummary title="Случайно закрыл окно в интерфейсе, как мне его вернуть?">
        <p>
          Для восстановления случайно закрытого окна перейдите в{" "}
          <mark className="ui">Window</mark> и выберите нужное вам окно. Также в этом
          пункте можно открыть окна расширений или переключиться между рабочими
          пространствами.
        </p>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/open_window.mp4"
          caption="Восстановление закрытого окна"
        />
        <p>
          Чтобы закрыть окно в интерфейсе рабочего пространства программы - нажмите на
          крестик слева от выбранного заголовка окна или нажмите на три полоски возле
          заголовка окна и выберите <mark className="ui">Close Panel</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как мне прикрепить нужное окно в рабочее пространство программы?">
        <p>
          Для того, чтобы прикрепить окно к рабочему пространству программы - нужно зажать
          курсор в районе названия окна и перетащить его в нужное место. Программа сама
          предложит вам прицепить его внутрь окна или в сторону.
        </p>
        <AdditionWarning>
          Цепляться нужно именно за название вкладки в интерфейсе самого{" "}
          <mark className="app">After Effects</mark>, а не за заголовок окна, создаваемый
          вашей операционной системой.
        </AdditionWarning>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/attach_window.mp4"
          caption="Прикрепление окна в рабочее пространство"
        />
        <p>
          Чтобы отцепить окно - нажмите на три полоски возле заголовка окна и нажмите на{" "}
          <mark className="ui">Undock Panel</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу прикрепить окно скрипта и как мне его в конце концов закрепить?">
        <p>
          Скрипты формата <mark className="file">.jsx</mark> или{" "}
          <mark className="file">.jsxbin</mark>, которые содержат интерфейс, не могут быть
          прикреплены, если они находятся в директории{" "}
          <mark className="path">...\Adobe After Effects 20XX\Support Files\Scripts</mark>
          , минуя папку <mark className="path">ScriptUI Panels</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/i_cant_attach_script.mp4"
          caption="After Effects"
        />
        <p>
          Для возможности прикрепления таких окон в рабочее пространство скрипты формата{" "}
          <mark className="file">.jsx</mark> или <mark className="file">.jsxbin</mark>{" "}
          необходимо переместить в папку <mark className="path">ScriptUI Panels</mark>.
          После этого требуется перезагрузка <mark className="app">After Effects</mark>,
          если приложение уже было запущено.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/move_from_scripts_to_scriptuipanels.mp4"
          caption="Проводник"
        />
        <p>
          После переноса из одной папки в другую - скрипт переместится из меню{" "}
          <mark className="ui">File &gt; Scripts</mark> в конец списка меню{" "}
          <mark className="ui">Window</mark>. После открытия скрипта оттуда, у вас
          появится возможность прикреплять окно скрипта в любой части рабочего
          пространства.
        </p>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/attaching_jsx_script.mp4"
          caption="Прикрепление скрипта True Comp Duplicator"
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
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/manage_windows.mp4"
          caption="Управление окнами в рабочем пространстве"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Пропали нужные переключатели и колонки на таймлайне. Как мне их вернуть?"
        tag="отобразить переключатели, включить кнопки"
      >
        <p>
          Если вы случайным образом куда-то нажали так, что у вас нужные параметры на
          таймлайне пропали, то не время паниковать. В левом нижнем углу окна таймлайна
          есть 4 кнопки для быстрого переключения отображения некоторых колонок. Также
          колонки можно включать и выключать, нажав <mark className="key">ПКМ</mark> по
          столбцам и в <mark className="ui">Columns</mark> выбрать то, что вам нужно.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/enable_timeline_columns.mp4"
          caption="Включение колонок на таймлайне"
        />
      </DetailsSummary>
      <DetailsSummary title="Компьютер во время работы упал в BSOD и испортил мне настройки. Как мне их восстановить?">
        <p>
          В редких случаях при обычной работе с <mark className="app">After Effects</mark>{" "}
          ваше устройство может упасть в &quot;синий экран смерти&quot;, и в это время по
          несчастливому стечению обстоятельств программа перезаписывала файл ваших
          настроек. Соответственно <mark className="app">After Effects</mark> может побить
          файл настроек и, скорее всего, в таком случае вы увидите при следующем запуске
          программы ошибку чтения пользовательских настроек и сбросит их до
          &quot;заводских&quot;.
        </p>
        <p>
          Если вы обновлялись с предыдущих версий{" "}
          <mark className="app">After Effects</mark>, то вы можете импортировать настройки
          со старых версий. Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Startup & Repair</mark> найдите
          и нажмите на кнопку{" "}
          <mark className="ui">Migrate Previous Version Preferences</mark>. В открывшемся
          окне вы можете выбрать из какой версии{" "}
          <mark className="app">After Effects</mark> перенести настройки.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/migrate_previous_version_preferences.png"
          imgTitle="Переносим настройки из старых версий программы"
          caption="Preferences"
        />
        <p>
          Если у вас предыдущих настроек нет, то переименовывать файл настроек, убрав
          суффикс <mark>-old</mark> особого смысла нет, так как файл может быть поврежден.
          Советую периодически сохранять настройки пользователя в какую-нибудь отдельную
          папку или настроить синхронизацию файлов конфигураций в облачном хранилище.
          Открыть папку с настройками пользователя можно, нажав на кнопку
          <mark className="ui">Reveal Preferences in Explorer</mark> в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Startup & Repair</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Установил After Effects 2023 или новее и не могу понять, что случилось с Alpha и Luma Matte?"
        tag="track matte, альфа люма мейт, трекмейт"
      >
        <p>
          В версиях <mark>2023</mark> и новее пришла новая эпоха работы с масками. После
          обновления работа с слоями-масками стала проще. Но после этого обновления
          появилась другая проблема - старые обучающие видео вводят новичков с новыми
          версиями в заблуждение, а новые видео - пользователей с старыми версиями{" "}
          <mark className="app">After Effects</mark>. Поэтому постарайтесь найти более
          актуальное видео для объяснения решения вашей задачи или приспособьтесь к
          немного другой реализации работы с масками.
        </p>
        <YouTubeVideo
          link="2Fi57LLJrUE"
          caption="Обновление вкладки Track Matte"
        />
        <AdditionInfo>
          Дополнительную информацию об обновлении работы с масками можно{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/track-mattes-and-traveling-mattes.html">
            прочитать на сайте Adobe
          </a>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title='Меня бесит окно "Properties", как отключить его автоматическое открытие?'>
        <p>
          Новая функция <mark className="ui">Свойства</mark> или же{" "}
          <mark className="ui">Properties</mark> была добавлена в{" "}
          <mark className="app">After Effects 23.4</mark> и новее. После выхода этого
          обновления не все приняли положительно новое окно свойств слоя, а некоторых
          взбесило, что это окно само стало открываться при выборе того или иного
          инструмента.
        </p>
        <p>
          К счастью, автоматическое открытие окна свойств можно отключить, убрав галочку
          из <mark className="ui">Auto-Open Panel</mark>. Эту процедуру нужно выполнить
          пару раз, потому что эта галочка не отключает авто-открытие у всех инструментов.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/toggle_auto-open_panel.png"
          imgTitle="Отключение автоматического открытия окна свойств"
          caption="After Effects"
        />
        <AdditionInfo>
          Подробнее о работе этой новой функции вы можете{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/properties-panel.html">
            прочитать на официальном сайте Adobe
          </a>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        title="Как включить всплывающую панель для применения эффектов, которая открывается с помощью Ctrl+Space?"
        tag="ктрл пробел, применение эффектов, фх консоль"
      >
        <p>
          То, что описано в этом вопросе - не является встроенной функцией{" "}
          <mark className="app">After Effects</mark>. Здесь идёт речь об стороннем плагине{" "}
          <a href="https://www.videocopilot.net/blog/?s=fx%20console">FX Console</a>.
        </p>
        <p>
          С помощью этого плагина действительно можно быстро применить эффект на
          выделенный слой, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Space</mark>. Также с помощью него можно быстро
          создать скриншот текущего кадра в файл или в буфер обмена.
        </p>
        <AdditionInfo>
          Для создания скриншотов с полным разрешением - укажите пункт{" "}
          <mark className="ui">Full Resolution Screenshots</mark> в настройках плагина.
          Там же можно и переназначить комбинацию клавиш для открытия окна плагина.
        </AdditionInfo>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/fx_console_demonstration.mp4"
          caption="Демонстрация плагина FX Console"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Как изменить вид отсчёта времени на таймлайне?"
        tag="другой вид, альтернативный таймкод"
      >
        <p>
          В <mark className="app">After Effects</mark> доступно два вида отображения
          текущего времени на таймлайне: в формате <mark>ЧЧ:ММ:СС:КК</mark>, где{" "}
          <mark>Ч</mark> - часы, <mark>М</mark> - минуты, <mark>С</mark> - секунды и{" "}
          <mark>К</mark> - кадры или отображение текущего положения по кадрам. Между этими
          режимами вы можете переключиться, нажав по таймкоду с зажатым{" "}
          <mark className="ui">Ctrl</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/alternate_timecode_style.mp4"
          caption="Изменение вида отображения времени на таймлайне"
        />
      </DetailsSummary>
      <DetailsSummary title="Как мне установить свой процент масштабирования предпросмотра?">
        <p>
          Многих пользователей бесит, что по умолчанию в{" "}
          <mark className="app">After Effects</mark> в предпросмотре нельзя установить
          свой процент масштабирования, доступны только жалкие фиксированные значения:{" "}
          <mark>25%</mark>, <mark>33.3%</mark>, <mark>50%</mark>, <mark>100%</mark> и
          прочие. К счастью, есть сторонний плагин <mark className="plugin">ae-zoom</mark>
          , который создаёт окно с регулировкой своего процента масштабирования в
          предпросмотре и решает проблему. Скачать его можно на{" "}
          <a href="https://github.com/QuisPic/ae-zoom/releases">
            странице релизов в GitHub
          </a>
          .
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/ae-zoom_demonstration.webm"
          caption="Демонстрация плагина ae-zoom"
        />
        <ContentSwitcher
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
        />
        <AdditionInfo>
          Если вы хотите сделать прикрепляемое окно для масштабирования, то переместите{" "}
          <mark className="file">Zoom.jsx</mark> в дочернюю папку{" "}
          <mark className="path">Script UI Panels</mark>. Тогда скрипт будет открываться
          из пункта <mark className="ui">Window</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как убрать пикселизацию предпросмотра при перемещении плейхеда?">
        <p>
          То, что вы называете пикселизацией - на самом деле называется адаптивным
          разрешением, которая включена в <mark className="app">After Effects</mark> по
          умолчанию. Его можно отключить, нажав на молнию (
          <mark className="ui">Fast Previews</mark>)в окне предпросмотра и выбрать там
          пункт <mark className="ui">Off</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/disable_adaptive_resolution.png"
          imgTitle="Отключение адаптивного разрешения"
          caption="Timeline"
        />
        <p>
          После отключения этого параметра, при перемещении временной метки качество не
          должно ухудшаться и будет соответствовать выбранному параметру разрешения
          предпросмотра.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Где найти Front View, Current Camera и прочие варианты отображения камеры?">
        <p>
          Чтобы &quot;включить&quot; эти кнопки, в вашей композиции должна быть создана
          камера или хотя бы один слой должен быть переведён в режим 3D-слоя.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/toggle_3d_layer.png"
          imgTitle="Включение режима 3D для слоя"
          caption="Timeline"
        />
        <p>
          Если одно из условий соблюдено, то вы увидите кнопки для переключения видов в
          окне предпросмотра. Рядом же вы можете переключить движок 3D-рендера, включить{" "}
          <mark>Draft 3D</mark> или разделить предпросмотр на несколько видов.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_view.png"
          imgTitle="Переключение видов в окне предпросмотра"
          caption="Composition"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу поставить плейхед в самый конец композиции?">
        <p>
          Плейхед или же временная метка воспроизведения показывает то, что находится{" "}
          <u>впереди</u> его пути. <mark className="app">After Effects</mark> выделяет
          кадр, который вы видите в предпросмотре небольшой подсветкой по всей высоте
          вашего таймлайна. Переместив плейхед максимально вправо или нажав на кнопку{" "}
          <mark className="key">End</mark> вы действительно попадёте в самый конец
          композиции, дальше перемещать его смысла нет.
        </p>
        <AdditionInfo>
          Вы, конечно, можете поставить плейхед в самый конец композиции, прибавив ещё
          один кадр в таймкоде вручную. Только там вы не увидите ровным счётом ничего,
          потому что композиция закончилась раньше, чем временная метка.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/last_frame_problem.png"
          imgTitle="Проблема последнего кадра"
          caption="Timeline"
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
      </DetailsSummary>
      <DetailsSummary title="У меня есть два ключа с одинаковым значением, но между ними всё равно идёт какая-то анимация. Как её убрать?">
        <p>
          Скорее всего вы ни разу не смотрели на график скорости между двумя ключами,
          особенно после того, как вы изменили длительность между кадрами. В моем примере
          у первого и второго ключа стоит одинаковое значение <mark>100%</mark>, но между
          ними всё равно будет идти анимация из-за изменённого графика скорости Безье.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/problematic_interpolation.png"
          imgTitle="Пример с проблемной интерполяцией"
          caption="Speed Graph"
        />
        <p>
          Чтобы убрать анимацию между двумя кадрами, вам нужно изменить режим интерполяции
          ключевых кадров. Для этого нужно выделить все ключи, которые вам нужны и нажать
          на комбинацию клавиш <mark className="key">Ctrl + Alt + K</mark> для открытия
          окна <mark className="ui">Keyframe Interpolation</mark>.
        </p>
        <p>
          В открывшемся окне в пункте <mark className="ui">Temporal Interpolation</mark>{" "}
          нужно выбрать <mark className="ui">Linear</mark> или{" "}
          <mark className="ui">Hold</mark>. После этого у вас между выделенными ключами не
          должно быть лишней анимации.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_keyframe_interpolation.png"
          imgTitle="Изменение интерполяции ключевых кадров"
          caption="Keyframe Interpolation"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Как включить отображение звуковой волны у слоя со звуком?"
        tag="вейвформ, аудио, увидеть волну"
      >
        <p>
          Если вам нужно отобразить звуковую волну у слоя со звуком для того, чтобы
          расставить маркеры или что-нибудь ещё, то просто выделите нужный слой со звуком
          и два раза нажмите на кнопку <mark className="key">L</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/show_waveform.png"
          imgTitle="Отображение звуковой волны у слоя со звуком"
          caption="Timeline"
        />
        <AdditionInfo>
          При желании вы можете растянуть звуковую волну по высоте, потянув за нижний край
          волны.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Я использую After Effects 2019 и в нём не выделяется объект в Rotobrush, что делать?">
        <p>
          Скорее всего вы столкнулись с багом этой версии, если вы используете репак от
          KpoJluk. Проблема решается откатом до CC 2018, установкой{" "}
          <mark className="app">After Effects 2019</mark> сборки от m0nkrus или установкой
          более свежей версии программы.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как отключить экран со списком недавних проектов при запуске?">
        <p>
          По умолчанию, при запуске <mark className="app">After Effects</mark> открывается
          домашнее окно с приветствием и списком недавних проектов. На некоторых
          устройствах или старых версиях <mark className="app">After Effects</mark>{" "}
          загрузка данного окна занимает относительно много времени или вовсе не
          загружается корректно. За это время вы бы уже смогли создать новую композицию и
          уже начать работу.
        </p>
        <p>
          К счастью, это окно можно отключить. Для отключения стартового окна со списком
          недавних проектов - откройте настройки{" "}
          <mark className="app">After Effects</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + ; (Ж)</mark>, перейдите в раздел{" "}
          <mark className="ui">Startup & Repair</mark> и выключите пункт{" "}
          <mark className="ui">Enable Home Screen</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/enable_home_screen.png"
          imgTitle="Переключаем отображение домашнего экрана"
          caption="Preferences"
        />
        <AdditionInfo>
          Если вы хотите оставить стартовое окно, но оно у вас не грузится корректно -
          попробуйте войти в аккаунт Adobe. Это можно сделать через{" "}
          <mark className="ui">Help &gt; Sign In</mark>. После входа псевдо-лицензия не
          слетит.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса программы?">
        <AdditionDanger>
          Для <mark className="app">After Effects</mark> версий 25.X данная инструкция
          неактуальна, после включения пункта в консоли - в настройках ничего не будет.
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
          Также этот пункт можно найти и в режиме отображения{" "}
          <mark className="ui">Debug Database View</mark>.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/console_theme_colorizing.png"
          imgTitle="Включение возможности изменения акцента интерфейса"
          caption="Console"
        />
        <p>
          После успешного включения опции, перейдите в настройки программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Appearance</mark> и нажмите на
          кнопку <mark className="ui">Change Color</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/select_theme_color.png"
          imgTitle="Выбираем пункт для смены цвета интерфейса"
          caption="Preferences"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/theme_colorizing.png"
          imgTitle="Выбор акцентного цвета для интерфейса"
          caption="Change Color"
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
          устройств на Windows.
        </AdditionDanger>
        <p>
          При запуске <mark className="app">After Effects</mark> вы часто видите
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
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/resource_hacker_open_file.png"
          imgTitle="Открываем файл в Resource Hacker"
          caption="Resource Hacker"
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
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/resource_hacker_extract_file.png"
          imgTitle="Извлекаем изображения из .dll"
          caption="Resource Hacker"
        />
        <p>
          Отредактировать извлечённый файл вы можете в любом редакторе изображений,
          например <mark className="app">Photoshop</mark>,{" "}
          <mark className="app">GIMP</mark>, <mark className="app">Illustrator</mark> и
          даже в самом <mark className="app">After Effects</mark>. Нужно просто не менять
          размер изображения и сохранить его также в <mark className="file">.png</mark>.
        </p>
        <p>
          Я же просто заменю в <mark className="app">Photoshop</mark> стандартное
          изображение на изображение автомобиля Ford Focus и сохраню его в{" "}
          <mark className="file">.png</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/custom_splash_example.png"
          imgTitle="Изменённое изображение при открытии программы"
          caption="Пример модификации изображения при загрузке After Effects"
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
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/resource_hacker_replace.png"
          imgTitle="Заменяем изображение в .dll"
          caption="Resource Hacker"
        />
        <p>
          После успешной замены нам достаточно сохранить изменения, нажав на{" "}
          <mark className="key">Ctrl + S</mark>. Теперь при каждом запуске программы вы
          будете видеть свой шедевр, который вы сотворили. В теории надпись{" "}
          <mark>Artwork by Name Surname</mark> тоже можно изменить, но я не вглублялся в
          такие подробности.
        </p>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/custom_splash_opening.mp4"
          caption="Пример изменённой плашки при открытии программы"
        />
      </DetailsSummary>
      <DetailsSummary title="Где-то слышал про секретные настройки, что это такое?">
        <p>
          Разработчики из Adobe оставили некоторые функции от любопытных лиц и поместила
          их в отдельную категорию <mark className="ui">Secret</mark>, только вот не учли
          одно но. Там нет ничего интересного. Прям совсем.
        </p>
        <p>
          Для того, чтобы отключить &quot;секретные настройки&quot; в{" "}
          <mark className="app">After Effects</mark>, вам нужно открыть любой пункт
          настроек в <mark className="ui">Edit &gt; Preferences</mark> с зажатой клавишей{" "}
          <mark className="key">Shift</mark>. Затем в окне настроек появится пункт{" "}
          <mark className="ui">Secret</mark> и мы сможем в него перейти.
        </p>
        <AdditionInfo>
          Учтите, что клавиша <mark className="key">Shift</mark> должна быть зажата до тех
          пор, пока окно с настройками не откроется.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/secret_settings.png"
          imgTitle="Секретные настройки"
          caption="Preferences"
        />
        <p>
          В последних версиях <mark className="app">After Effects</mark> там находятся
          всего лишь три настройки.
        </p>
        <ul>
          <li>
            <mark className="ui">Disable Layer Cache</mark> - ожидаемо отключает
            кэширование слоёв.
          </li>
          <li>
            <mark className="ui">Purge Every X Frames During Make Movie</mark>, где вместо{" "}
            <mark>X</mark> любое число от <mark>0</mark> (выключено) до <mark>99999</mark>{" "}
            - автоматически очищать каждый выбранный кадр при рендере последовательности
            изображений.
          </li>
          <li>
            <mark className="ui">Ignore Sequence Rendering Errors</mark> позволяет
            программе забить болт на ошибки при рендере последовательности изображений. В
            повседневной практике пункт бесполезен, имхо.
          </li>
        </ul>
        <p>
          Иногда отключение кэширование слоя и автоматическая очистка кадров может вам
          помочь, если вы испытываете проблемы с переполнением оперативной памяти при
          экспорте композиции.
        </p>
        <AdditionWarning>
          Изменение этих параметров может серьёзно сказаться на стабильности программы!
          <b>
            <u>Выполняйте действия на свой страх и риск!</u>
          </b>
        </AdditionWarning>
      </DetailsSummary>
    </div>
  );
};
export default AEInterface;
