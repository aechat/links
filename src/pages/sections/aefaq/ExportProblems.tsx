import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {Divider} from "antd";

const AEExportProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/ExportProblems.tsx" />
      <DetailsSummary
        tag="не экспортируется, битый файл"
        title="Почему при экспорте в .mp4 через встроенный кодек H.264 сохраняется файл с размером в 1 Кб?"
      >
        <p>
          В ранних версиях <mark className="app">Adobe After Effects</mark> версии{" "}
          <mark>2023</mark> был неприятный баг, когда при экспорте композиции через
          встроенный кодек <mark className="video">H.264</mark> в путь с кириллицей - на
          выходе получался файл размером <mark>1 Кб</mark>. И соответственно
          экспортированная композиция не открывалась и никем не читался. Для решения этой
          проблемы достаточно обновить <mark className="app">Adobe After Effects</mark> до
          версии <mark>23.6</mark> или новее. После обновления начните экспорт заново.
        </p>
        <AdditionInfo>
          Проверить текущую версию <mark className="app">Adobe After Effects</mark> вы
          можете в <mark className="ui">Help &gt; About After Effects</mark>.
        </AdditionInfo>
        <p>
          Если вы по каким-то причинам не можете или не хотите обновлять программу, то
          установите плагин{" "}
          <a href="https://www.autokroma.com/AfterCodecs/">AfterCodecs</a> или{" "}
          <a href="https://www.voukoder.org/">Voukoder</a> и начните экспорт через них.
          Или просто выводите композицию в путь без кириллицы или в другом кодеке.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="исходник с айфона, hlg, rec709"
        title="После экспорта у меня изменились цвета. Как избежать изменения цветов?"
      >
        <Divider>Проверяем рабочее цветовое пространство</Divider>
        <p>
          Для начала убедитесь в том, что в настройках проекта не установлен какой-нибудь
          другой цветовой профиль, отличный от <mark>None</mark>. Для этого откройте{" "}
          <mark className="ui">Project Manager</mark> через комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark> и перейдите в вкладку{" "}
          <mark className="ui">Color</mark>. В разделе{" "}
          <mark className="ui">Working Color Space</mark> укажите значение{" "}
          <mark>None</mark>.
        </p>
        <ImageFigure
          caption="Project Settings"
          imgSrc="images/aftereffects/change_working_color_space.png"
          imgTitle="Изменение цветового профиля"
          styleClass="figure_windows-dark"
        />
        <Divider>Изменение цветов из-за особенностей кодека для вывода</Divider>
        <p>
          Ещё бывает такое, что некоторые кодеки и варианты экспорта любят изменять цвета
          из-за сжатия или некоторых особенностей, например{" "}
          <mark className="video">H.264</mark>. Исправить это поведение сложновато, кроме
          как экспортом из <mark className="app">Adobe After Effects</mark> в другой
          формат, например <mark className="video">Apple Prores 422</mark>. После экспорта
          можно переконвертировать в <mark className="video">H.264</mark> через{" "}
          <mark className="app">Shutter Encoder</mark> и не потерять в цветах.
        </p>
        <Divider>Изменение цветов из-за исходников</Divider>
        <p>
          Иногда при использовании исходников с мобильных телефонов, например{" "}
          <mark>iPhone 13</mark> или новее, возникают проблемы с пересветом. Это
          происходит из-за того, что &quot;яблочные&quot; устройства пишут в{" "}
          <mark>Rec.2020</mark>, а не в <mark>Rec.709</mark>. Да, получается более широкий
          диапазон для дальнейшего монтажа, но для обычного пользователя это всё
          превращается в геморрой. Поэтому для того, чтобы с данной проблемой не
          сталкиваться в дальнейшем - смотрите на параметры вашего исходника и переводите
          их в <mark>Rec.709</mark> с помощью конвертеров, например, через{" "}
          <mark className="app">Shutter Encoder</mark>.
        </p>
        <p>
          В <mark className="app">Shutter Encoder</mark> поместите ваш исходник, выберите
          нужный формат для вывода и укажите в вкладке{" "}
          <mark className="ui">Colorimetry</mark>{" "}
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Узнать цветовое пространство у исходника можно через{" "}
              <mark className="app">MediaInfo</mark>.
            </li>
            <li>
              Если у вас не установлен <mark className="app">Shutter Encoder</mark>, то
              его можно скачать{" "}
              <a href="https://www.shutterencoder.com/">по этой ссылке</a>.
            </li>
          </ul>
        </AdditionInfo>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/shutter_encoder_interface.png"
          imgTitle="Интерфейс Shutter Encoder"
          styleClass="figure_macos-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="медиаенкодер, медиаэнкодер, переместилось"
        title="Почему в предпросмотре Media Encoder и после экспорта видео смещается влево или вправо?"
      >
        <p>
          Проверьте текущую версию программ, которыми вы пользуетесь. Вполне вероятно, что
          вы используете версии в промежутках от <mark>23.1</mark> до <mark>23.5</mark>,
          где присутствует такой неприятный баг при использовании{" "}
          <mark className="app">Adobe Media Encoder</mark> в качестве основной программы
          для экспорта композиций. Для решения данного бага достаточно обновить все
          программы от Adobe до версии <mark>23.6</mark> или свежее.{" "}
          <i style={{opacity: "0.5"}}>
            Или отказаться от <mark className="app">Adobe Media Encoder</mark> в пользу
            вывода композиций напрямую из <mark className="app">Adobe After Effects</mark>
            .
          </i>
        </p>
        <AdditionInfo>
          Проверить текущую версию <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> вы можете в{" "}
          <mark className="ui">Help &gt; About</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="растянулось, соотношения пикселя, стандарт пикселя"
        title="Почему моя композиция плющится в предпросмотре и после экспорта?"
      >
        <p>
          Иногда бывает такое, что при экспорте композиции или при предпросмотре
          изображение получается каким-то сплюснутым или искажённым. Скорее всего вы
          указали неквадратный пиксель в настройках композиции или попытались
          экспортировать видео в формате <mark className="video">DV PAL</mark> или что-то
          подобное. У таких форматов соотношение пикселей отличается от <mark>1:1</mark>.
        </p>
        <Divider>Проверяем настройки композиции</Divider>
        <p>
          Чтобы найти причину такого поведения предпросмотра - стоит проверить значение
          соотношения пикселя у композиции. Для этого откройте настройки композиции с
          помощью комбинации клавиш <mark className="key">Ctrl + K</mark> и посмотрите
          значение параметра <mark className="ui">Pixel Aspect Ratio</mark>.
        </p>
        <ImageFigure
          caption="Composition Settings"
          imgSrc="images/aftereffects/change_pixel_aspect_ratio.png"
          imgTitle="Изменение соотношения пикселей"
          styleClass="figure_windows-dark"
        />
        <Divider>Включаем коррекцию предпросмотра под размер пикселя</Divider>
        <p>
          Если вы всё же хотите использовать неквадратный пиксель для композиции, чтобы
          экспортировать его под формат для телевидения, то вам стоит включить коррекцию
          предпросмотра под размер пикселя. Он включается параметром{" "}
          <mark className="ui">Pixel Aspect Ration Correction</mark> в меню окна
          предпросмотра. Это позволит отобразить предпросмотр корректно, как задумано в
          настройках соотношения пикселя в композиции и не столкнуться с неожиданными
          результатами после вывода в <mark className="video">DV PAL</mark> или подобные
          форматы с нестандартным соотношением пикселя.
        </p>
        <ImageFigure
          caption="Composition"
          imgSrc="images/aftereffects/enable_pixel_ratio_correction.png"
          imgTitle="Включение коррекции предпросмотра под размер пикселя"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="элемент 3д, фликерит"
        title="Почему композиция с Element 3D экспортируется с мерцаниями?"
      >
        <Divider>Проверяем значение FPS у композиции</Divider>
        <p>
          Причин для некорректного поведения при рендере композиции с применённым{" "}
          <mark className="plugin">Element 3D</mark> может быть несколько. Одна из частых
          - дробное значение кадров в секунду у вашей композиции, например{" "}
          <mark>29,97</mark>. Чтобы проверить этот параметр и изменить его, откройте
          настройки композиции с помощью <mark className="key">Ctrl + K</mark> или{" "}
          <mark className="key">ПКМ</mark> по композиции в окне{" "}
          <mark className="ui">Projects</mark> и выберите{" "}
          <mark className="ui">Composition Settings</mark>. В открывшемся окне настроек
          композиции укажите в параметре <mark className="ui">Frame Rate</mark> целую
          часть числа, например <mark>24</mark>, <mark>30</mark> или <mark>60</mark>.
        </p>
        <AdditionInfo>
          Если композиций с плавающим значением много, то для пакетного изменения
          параметров можно воспользоваться скриптом{" "}
          <a href="https://aescripts.com/rd-compsetter/">rd: Comp Setter</a>.
        </AdditionInfo>
        <VideoFigure
          caption="Изменение FPS у композиции"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_fps_comp.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="колор бендинг, полоски, цвет, шум, глубина цвета"
        title="Экспортировал композицию и вижу в результате ужасный ступенчатый градиент. Как мне от него избавиться?"
      >
        <p>
          Поздравляю, вы столкнулись с понятием{" "}
          <mark className="word">Color Banding</mark>, что означает полосатость на
          переходах между оттенками одного и того же цвета. Скорее всего вы пытаетесь
          сделать плавный неконтрастный градиент или смешать два цвета между собой.
        </p>
        <VideoFigure
          caption="Полосатость в градиенте, эффект был усилен через Posterize"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/color_banding_example.mp4"
        />
        <p>
          Это происходит из-за недостаточной цветовой глубины, так как 8-битное
          представление цвета в настройках проекта не может отобрать всевозможные
          промежуточные оттенки цветов, присутствующие в градиенте. Также при экспорте
          некоторые видеокодеки могут сжать цвета, например{" "}
          <mark className="video">H.264</mark>.
        </p>
        <YouTubeVideo
          caption="Почему тёмные видео превращаются в кашу?"
          link="h9j89L8eQQk"
        />
        <AdditionDanger>
          Способы решения, описанные ниже, не позволят вам полностью избавиться от
          полосатости на изображении из-за различных ограничений и особенностей цветовых
          пространств. Помимо этого, также возможно, что на одном мониторе полосатость
          будет незаметна, а на другом - заметна из-за различных типов матриц, на котором
          просматривается контент.
        </AdditionDanger>
        <Divider>Уменьшаем полосатость с помощью повышения цветовой глубины</Divider>
        <p>
          В большинстве случаев проблема полосатости решается повышением битности в
          проекте. Для этого вам нужно открыть окно{" "}
          <mark className="ui">Project Settings</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark>. Затем нужно перейти во
          вкладку <mark className="ui">Color</mark> и в параметре{" "}
          <mark className="ui">Bit Depth</mark> установить 16 или 32 бита.
        </p>
        <AdditionWarning>
          При повышении глубины цвета для <mark className="app">Adobe After Effects</mark>{" "}
          требуется больше ресурсов вашего устройства для корректного рендера. Из-за этого
          возрастает риск нарваться на различные ошибки по типу <mark>Out of Memory</mark>
          .
        </AdditionWarning>
        <ImageFigure
          caption="Project Settings"
          imgSrc="images/aftereffects/change_bit_depth.png"
          imgTitle="Изменяем битность в проекте"
          styleClass="figure_windows-dark"
        />
        <Divider>Подавляем полосатость с помощью генерации шума</Divider>
        <p>
          Также уменьшить эффект полосатости может помочь накладывание обычного шума. Для
          этого вам нужно создать корректирующий слой поверх всех объектов и применить
          стандартный эффект <mark className="plugin">Add Grain</mark> или{" "}
          <mark className="plugin">Noise</mark> со значением от 1 до 5 процентов. Можно
          ещё навесить эффект <mark className="plugin">Denoiser III</mark> после
          генератора шума, который поставляется в пакете плагинов{" "}
          <mark className="plugin">Red Giant Magic Bullet Suite</mark>.
        </p>
        <AdditionInfo>
          Если вы часто работаете с градиентами, советую создать свой пресет для
          подавления полосатости или взять готовый{" "}
          <a
            download
            href="files/Remove Banding.ffx"
          >
            по этой ссылке
          </a>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="odd resolution"
        title="Почему я не могу экспортировать видео с нечётным разрешением?"
      >
        <p>
          Из-за технических ограничений кодеков <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark>, вы не сможете экспортировать видео в таких
          кодеках с нечётным разрешением. Данные кодеки используют макроблоки только с
          чётными значениями пикселей.
        </p>
        <ImageFigure
          caption="Ошибка в AfterCodecs при экспорте с нечётным разрешением"
          imgSrc="images/odd_resolution_error.png"
          imgTitle="Ошибка экспорта с нечётным разрешением"
          styleClass="figure_windows-light"
        />
        <p>
          Для решения проблемы при экспорте вам достаточно указать чётное значение
          пикселей у каждой стороны в свойствах композиции. Для этого откройте настройки
          композиции с помощью комбинации клавиш <mark className="key">Ctrl + K</mark> и
          укажите в параметрах ширины и высоты числовое значение, которое делится на{" "}
          <mark>2</mark> без остатка. После изменения настроек композиции попробуйте
          начать экспорт заново, он должен пройти без проблем.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="крашится, останавливается сохранение, создание прокси"
        title="Как экспортировать композицию, если рендер сбоит на конкретном участке?"
      >
        <p>
          Если вы испытываете проблемы с экспортом на определённом промежутке композиции,
          когда же в предпросмотре всё проигрывается отлично, то вам стоит попробовать
          создать прокси для композиции и использовать их в финальном рендере.
        </p>
        <Divider>Создаём прокси для композиций</Divider>
        <p>
          Для создания прокси нужно перейти в окно <mark className="ui">Project</mark>,
          выбрать композицию с которым вы испытываете проблемы, нажать{" "}
          <mark className="key">ПКМ</mark> и выбрать{" "}
          <mark className="ui">Create Proxy &gt; Movie</mark>. После нажатия вас отправят
          в очередь экспорта. Далее в нём нужно открыть окно{" "}
          <mark className="ui">Render Settings &gt; Custom</mark> и поставить везде
          наивысшие настройки (или выбрать пресет{" "}
          <mark className="ui">Best Settings</mark>), чтобы после создания прокси ничего
          не пропало и не ухудшилось. Если прокси автоматически не установилось для
          композиции - сделайте это вручную через{" "}
          <mark className="ui">Set Proxy &gt; File</mark>.
        </p>
        <VideoFigure
          caption="Создание прокси для композиций"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/create_comp_proxy.mp4"
        />
        <AdditionInfo>
          Для создания прокси лучше указать формат QuickTime в кодеке{" "}
          <mark className="video">Apple Prores 422</mark> или{" "}
          <mark className="video">Apple Prores 4444</mark>, если композиция содержит
          альфа-канал.
        </AdditionInfo>
        <Divider>Экспортируем композицию с использованием прокси</Divider>
        <p>
          Чтобы начать экспорт композиции с использованием прокси - не забудьте указать{" "}
          <mark className="ui">Use All Proxies</mark> в окне{" "}
          <mark className="ui">Render Settings</mark>. После изменения параметра начните
          экспорт как обычно.
        </p>
        <VideoFigure
          caption="Настройка использования прокси в финальном рендере"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/use_all_proxies.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="пропало аудио, отсутствует музыка в видео"
        title="Почему в экспортированной композиции нет звука?"
      >
        <p>
          Если вы экспортировали свою композицию в формате видео и у вас при проигрывании
          нет звука, даже если он должен быть, то скорее всего вы столкнулись с редким
          багом, связанный с кривой автоматикой сохранения звука в видео-контейнер. Для
          решения проблемы и принудительного экспорта видео вместе с звуковой дорожкой -
          нужно перейти в параметры <mark className="ui">Output Module</mark> и указать{" "}
          <mark className="ui">Audio Output On</mark> вместо{" "}
          <mark className="ui">Audio Output Auto</mark>.
        </p>
        <AdditionInfo>
          Ещё данный способ может помочь от принудительной конвертации вашего видео в{" "}
          <mark className="image">GIF</mark> в мессенджерах, например{" "}
          <mark className="app">Telegram</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/audio_output_on.png"
          imgTitle="Принудительно включаем вывод звука"
          styleClass="figure_windows-dark"
        />
        <p>
          Если это не помогло, то попробуйте экспортировать звук из вашей композиции
          отдельно в формате <mark className="file">.wav</mark> и заменить её в
          композиции, а затем повторить попытку экспорта ещё раз.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="конвертация, шаттер енкодер, сжатие видео, квантование, cqr"
        title="Почему экспортированная композиция получается с огромным размером на диске или как сжать его без сильной потери качества или до определённого веса?"
      >
        <p>
          При экспорте какой-нибудь композиции из{" "}
          <mark className="app">Adobe After Effects</mark> вы можете наткнуться на
          неприятный сюрприз - файл может получиться слишком большим по весу на жёстком
          диске. Такой файл может не подойти для загрузки видео на нужный сервис или
          просто занимать кучу места на дисковом пространстве.
        </p>
        <AdditionInfo>
          В ранних версиях <mark className="app">Adobe After Effects</mark>, до
          возвращения нативного экспорта в <mark className="video">H.264</mark>, по
          умолчанию стоял не очень оптимальный пресет для повседневного экспорта. Поэтому,
          если новичок случайно сохранит композицию в <mark className="file">.avi</mark> с
          кодеком <mark className="file">Animation</mark>, то он быстро столкнётся с тем,
          что размер файла у полученного ролика уйдет в небеса. В таких случаях без сжатия
          и конвертации видео не обойтись.{" "}
          <i style={{opacity: "0.5"}}>
            Или достаточно было выбрать другой вариант для экспорта.
          </i>
        </AdditionInfo>
        <Divider>Конвертируем через Shutter Encoder</Divider>
        <p>
          Для быстрой конвертации видео нам понадобится{" "}
          <mark className="app">Shutter Encoder</mark> - бесплатный и популярный
          графический интерфейс утилиты <mark className="app">FFmpeg</mark>, который
          доступен для <mark>Windows</mark> и <mark>macOS</mark>. С помощью него можно
          конвертировать видео в распространённые форматы и при необходимости указывать
          нужные настройки кодирования.
        </p>
        <AdditionInfo>
          Если у вас не установлен <mark className="app">Shutter Encoder</mark>, то его
          можно скачать <a href="https://www.shutterencoder.com/">по этой ссылке</a>. Не
          забудьте передвинуть ползунок доната на <mark>0</mark>, чтобы получить ссылку на
          скачивание.
        </AdditionInfo>
        <p>
          После установки и открытия <mark className="app">Shutter Encoder</mark> -
          начните импорт вашего получившегося файла. Затем укажите в{" "}
          <mark className="ui">Choose function</mark> формат, в который вы хотите
          экспортировать видео. Между прочим, выбор кодека для конвертации тоже влияет на
          вес и качество картинки, но не все устройства и площадки могут поддерживать тот
          или иной кодек. В большинстве случаев вам может подойти вариант{" "}
          <mark className="video">H.264</mark> или <mark className="video">H.265</mark>.
        </p>
        <p>
          После выбора кодека - в правой части окна программы появятся различные настройки
          кодирования, которые вы можете указать под свои нужды. Для изменения битрейта
          или способа кодирования понадобится раздел{" "}
          <mark className="ui">Bitrate adjustment</mark>. В этом разделе изменение
          параметров битрейта, а также выбор варианта для кодирования сильно влияет на
          качество видео и размер после конвертации.
        </p>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/shutter_encoder_interface.png"
          imgTitle="Интерфейс Shutter Encoder"
          styleClass="figure_macos-dark"
        />
        <ul>
          <li>
            По умолчанию в <mark className="app">Shutter Encoder</mark> при выборе формата{" "}
            <mark className="video">H.264</mark> или аналогичный, установлен параметр
            кодирования с помощью <mark>VBR</mark> или же с помощью{" "}
            <mark className="word">переменного битрейта</mark>. Он плохо подходит для
            монтажа из-за непредсказуемого поведения, но хорошо подходит для передачи
            видео или публикации в социальные сети. В <mark>VBR</mark> также становится
            активным поле желательного размера видео, только зачастую кодировщик может
            немного уйти за края указанного значения.
            <AdditionWarning>
              Данный вариант кодирования подойдет, если нужно максимально ужать видео до
              нужного размера по весу. Но есть загвоздка - из-за особенностей{" "}
              <mark className="word">переменного битрейта</mark> сложно предсказать размер
              файла, а также качество получаемой картинки.
            </AdditionWarning>
          </li>
          <li>
            Существует вариант кодирования через <mark>CBR</mark> или же с помощью{" "}
            <mark className="word">постоянного битрейта</mark>. Такой способ часто выходит
            самым большим по весу и не эффективен в плане сжатия видео, зато с таким
            способом получаемый вес становится более предсказуемым.
          </li>
          <li>
            Если вам нужно сохранить хорошее качество на протяжении всего видео, при этом
            отбросить часть веса, то есть способ кодирования через <mark>CQ</mark> или же{" "}
            <mark className="word">квантование</mark>. Такой способ позволяет забыть о
            выставлении битрейта перед конвертацией.
            <AdditionWarning>
              <mark>CQ-квантование</mark> поддерживается не всеми кодеками.
            </AdditionWarning>
            <AdditionInfo>
              <ul>
                <li>
                  В отличие от <mark>VBR</mark>, где качество может сильно колебаться,
                  качество видео закодированное с помощью <mark>CQ</mark> останется
                  стабильным на протяжении всего видео, что делает его хорошим выбором для
                  тех, кто ценит предсказуемость в качестве.
                </li>
                <li>
                  По умолчанию <mark>CQ</mark> выставляется со значением <mark>23</mark>.
                  Значение <mark>CQ</mark> вычисляется по следующей формуле: чем меньше
                  значение, тем лучше качество, но больше вес. Эта формула работает и в
                  обратную сторону: чем больше значение, тем хуже качество, но меньше вес.
                  Обычно для получения хорошего качества выставляют значение в диапазоне
                  от <mark>17</mark> до <mark>25</mark>.
                </li>
              </ul>
            </AdditionInfo>
          </li>
        </ul>
        <p>
          После выставления нужных значений - укажите путь до файла, включите при
          необходимости конвертацию цветового пространства, а также аппаратное ускорение в
          нижней части интерфейса и нажмите на <mark className="ui">Start function</mark>.
          После успешного завершения процедуры вы получите новый файл в той папке, в
          которой вы указали сохранение видео.
        </p>
        <Divider>Сжимаем через Adobe Media Encoder</Divider>
        <p>
          Изначально <mark className="app">Adobe Media Encoder</mark> был задуман как
          конвертер и в нём ещё не было возможности экспорта композиций из{" "}
          <mark className="app">Adobe After Effects</mark>. Воспользуемся в кои-то веки
          данной программой по назначению. Чтобы начать конвертацию - импортируйте нужное
          видео в <mark className="app">Adobe Media Encoder</mark> любым способом - через{" "}
          <mark className="word">Drag-n-drop</mark> в очередь экспорта, через{" "}
          <mark className="ui">File &gt; Import</mark>, через{" "}
          <mark className="key">Ctrl + I</mark> или с помощью двойного нажатия по пустой
          очереди экспорта. В открывшемся окне проводника укажите путь до файла, который
          нужно конвертировать.
        </p>
        <ImageFigure
          caption="Media Encoder"
          imgSrc="images/media_encoder_import.png"
          imgTitle="Импорт в Adobe Media Encoder"
          styleClass="figure_windows-light"
        />
        <p>
          После импорта файлов вы можете выбрать формат, шаблон и путь сохранения для
          конвертируемого видео. Слева от выбора формата или шаблона вы можете открыть
          список шаблонов, а нажав по названию формата или шаблона - вы можете открыть
          редактор шаблона для конвертации, где вы можете изменить различные параметры
          конвертации. Также вы можете указать путь до папки, в которую нужно сохранить и
          вариант рендера на процессоре или с аппаратным ускорением с помощью видеокарты.
        </p>
        <ImageFigure
          caption="Media Encoder"
          imgSrc="images/media_encoder_exporting.png"
          imgTitle="Экспорт в Adobe Media Encoder"
          styleClass="figure_windows-light"
        />
        <AdditionInfo>
          В <mark className="app">Adobe Media Encoder</mark> можно конвертировать видео с
          помощью сторонних плагинов, по типу <mark className="plugin">Voukoder</mark> и{" "}
          <mark className="plugin">AfterCodecs</mark>, если вам не нравится результат от
          стандартных кодеков.
        </AdditionInfo>
        <p>
          После настройки параметров просто нажмите на кнопку начала конвертации и
          ожидайте результата в выходной папке.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Rendering error while writing to file (...). Unable to delete existing file" или "An unexpected error occurred while exporting a composition. Error code: 9988"'>
        <p>
          Скорее всего вы пытаетесь перезаписать файл, который используется другой
          программой, например, открыт в видеоплеере или отправляется собеседнику в{" "}
          <mark className="app">Telegram</mark>. Решение для этой проблемы банальное -
          просто закройте программу, которая использует файл или перезагрузите устройство.
          Затем попробуйте ещё раз начать процедуру экспорта или укажите другой путь для
          вывода.
        </p>
      </DetailsSummary>
    </div>
  );
};
export default AEExportProblems;
