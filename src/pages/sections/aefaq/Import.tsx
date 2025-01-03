import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

const AEImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Import.tsx" />
      <DetailsSummary title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?">
        <p>
          Прежде чем начать создавать композиции и импортировать файлы в{" "}
          <mark className="app">After Effects</mark>, вам следует бы расположить все ваши
          исходники в отдельный диск, раздел или папку, чтобы иметь быстрый доступ к
          исходникам, а не на рабочем столе или в системных папках. Так вам будет проще
          работать с кучей материала, особенно когда начинаете работу постепенно.
          Структурирование - это основа дальнейшей работы.
        </p>
        <p>
          После первичной сортировки исходников, вам нужно узнать о них получше: в каком
          кодеке и контейнере запакованы, в каком цветовом пространстве записан, сколько
          FPS у видеоисходника и прочие технические свойства. Для этого вы можете
          воспользоваться онлайн-сервисом{" "}
          <a href="https://mediaarea.net/MediaInfoOnline">MediaInfo Online</a> или его
          локальной версией <a href="https://mediaarea.net/en/MediaInfo">MediaInfo</a>,
          которая доступна для многих операционных систем.
        </p>
        <AdditionInfo>
          Желательно для лучшего отображения информации в{" "}
          <mark className="app">MediaInfo</mark> использовать вид{" "}
          <mark className="ui">Tree</mark>.
        </AdditionInfo>
        <p>
          В <mark className="app">MediaInfo</mark> можно узнать многое о ваших исходниках.
          Если ваш видеоисходник не скачан из площадок, например из YouTube, записан с{" "}
          <mark>Constant FPS</mark>, а цветовое пространство является <mark>Rec.709</mark>
          , то радуемся жизни и спокойно импортируем в композицию и работаем с ними.
        </p>
        <p>
          Если же у вас видео записано в <mark>Variable FPS</mark>, цветовое пространство
          является <mark>Rec.2020</mark>, так ещё и на снят iPhone, то вам нужно в
          обязательном порядке перекодировать исходники. Также это касается видео,
          полученных из видеоплощадок по типу YouTube, VK Видео и аналогичные. После
          корректной перекодировки видео вы избавите себя от проблем с цветами и
          неправильной интерпретации частоты кадров, а также от различных артефактов от
          последствий кривого кодирования до вас.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/mediainfo_example.png"
          imgTitle="Пример открытого в MediaInfo файла"
          caption="Терминал - MediaInfo-CLI"
        />
        <p>
          Для того, чтобы начать процесс перекодирования ваших исходников, вам нужно
          установить программу{" "}
          <a href="https://www.shutterencoder.com/">Shutter Encoder</a>, запустить и
          закинуть в нее ваши исходники, можно даже целую папку.
        </p>
        <AdditionInfo>
          Для того чтобы скачать программу бесплатно, перенесите ползунок из{" "}
          <mark className="ui">It helps me to pay for the server & the domain</mark> на
          ноль, а после нажмите на кнопку скачивания в зависимости от вашей операционной
          системы.
        </AdditionInfo>
        <p>
          На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
          показаться замороченным и сложным, но на самом деле это не так. Пользователю в
          ней для перекодирования исходников нужно сделать лишь несколько действий.
        </p>
        <ImageFigure
          styleClass="figure_macos-dark"
          imgSrc="images/shutter_encoder_interface.png"
          imgTitle="Интерфейс Shutter Encoder"
          caption="Shutter Encoder"
        />
        <ul>
          <li>
            Для начала выберите кодек в <mark className="ui">Choose Function</mark>. Чаще
            всего используют <mark className="video">Apple Prores 422</mark>,{" "}
            <mark className="video">H.264</mark> или <mark className="video">DNxHR</mark>.
          </li>
          <li>
            После выбора кодека - определитесь с режимом кодирования. Для этого в правой
            части рядом с выбором битрейта есть кнопка, которая переключает кодировщик
            между режимами <mark className="ui">CBR</mark>,{" "}
            <mark className="ui">VBR</mark> или <mark className="ui">CQ</mark>.
            <AdditionInfo>
              <ul>
                <p>
                  При кодировании в некоторые кодеки, в частности{" "}
                  <mark className="file">Apple ProRes</mark> этот пункт можно пропустить,
                  из-за отсутствия режимов кодирования, так как там обычно используются
                  стандартные шаблоны для битрейта.
                </p>
                <li>
                  <mark>CBR</mark> - постоянный битрейт, хорошо подходит для монтажа, но
                  не очень для социальных сетей из-за большого веса по сравнению с
                  кодированием через VBR.
                </li>
                <li>
                  <mark>VBR</mark> - переменный битрейт, на разных временных промежутках
                  битрейт может изменяться. Плохо подходит для монтажа из-за
                  непредсказуемого качества, но хорошо подходит для передачи видео или
                  публикации в социальные сети.
                </li>
                <li>
                  <mark>CQ</mark> - метод, при котором качество видео регулируется
                  изменением уровня сжатия. Чем ниже значение, тем выше качество, но
                  больше размер файла. С помощью этого подхода можно достичь оптимального
                  баланса между качеством и размером.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            После выбора режима кодирования - укажите рекомендуемое значение битрейта или
            квантования.
          </li>
          <li>
            Если цветовое пространство исходника отличается от <mark>Rec.709</mark>, то в
            пункте <mark className="ui">Colorimetry</mark> включите галочку{" "}
            <mark className="ui">Convert Colorspace</mark>. Затем установите там первым
            значением ваш цветовой профиль, который был указан в{" "}
            <mark className="app">MediaInfo</mark>, а вторым значением -{" "}
            <mark>Rec.709</mark>.
          </li>
          <li>
            Затем укажите битрейт для аудио, достаточно установить значение{" "}
            <mark>320</mark> Кбит/с в пункте <mark className="ui">Audio Bitrate</mark>.
          </li>
          <li>
            После настройки - укажите путь для сохранения перекодированных файлов и
            нажмите на кнопку <mark className="ui">Start Function</mark>.
            <AdditionInfo>
              Если у вас видеокарта от NVIDIA, то не забудьте установить галочку в пункте{" "}
              <mark className="ui">Hardware Acceleration</mark> и выбрать рядом параметр{" "}
              <mark className="ui">Nvidia NVENC</mark>.
            </AdditionInfo>
          </li>
        </ul>
        <p>
          После успешного перекодирования исходников вы можете их заменить в окне{" "}
          <mark className="ui">Project</mark>. Для этого нажмите{" "}
          <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="ui">Replace Footage &gt; File</mark> или нажмите на комбинацию
          клавиш <mark className="key">Ctrl + H</mark>, выделив исходник, который нужно
          заменить. После этого укажите путь до нового файла в системном файловом
          менеджере.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/replace_footage.png"
          imgTitle="Замена исходника в проекте"
          caption="After Effects"
        />
        <p>
          Вот и всё, удачной работы с проектом! И да, лучше перекодировать, чем
          недокодировать и мучаться с возможными багами кривых исходников.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Использую исходник в контейнере .mp4 или в кодеке H.264. Почему у меня лезут артефакты, зелёный экран и дергается изображение?">
        <p>
          Такое часто бывает при импорте исходников, которые были загружены из интернета,
          в частности из YouTube. Подобные сервисы перекодируют видео непонятно во что и
          непонятно по каким алгоритмам, поэтому их не рекомендуется использовать в
          дальнейшей работе.
        </p>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/h264_artifacts.webm"
          caption="Артефакты кривых исходников из просторов интернета"
        />
        <p>
          Чтобы с такими видео из интернета можно было спокойно работать - вам нужно
          перегнать ваши видео в удобоваримый кодек и формат для монтажа, например в{" "}
          <mark className="video">Apple Prores 422</mark>, а затем заменить их в проекте.
          Да, это нормальный процесс и желательно так делать каждый раз, когда скачиваете
          видео с сервисов, которые любят пережимать для себя, но не для монтажёров.
          Перекодировать видео можно с помощью программ{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">Handbrake</mark> или{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <ImageFigure
          styleClass="figure_macos-dark"
          imgSrc="images/convert_to_prores_shutterencoder.png"
          imgTitle="Конвертируем в ProRes через Shutter Encoder"
          caption="Shutter Encoder"
        />
        <p>
          Если вы столкнулись с проблемой, когда вместо исходника появляется зеленая
          заливка, то попробуйте отключить аппаратное декодирование в настройках
          программы. Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Import</mark> и выключите
          галочку <mark className="ui">Enable hardware accelerated decoding</mark> и
          перезагрузите программу.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/disable_hardware_accelerated_decoding.png"
          imgTitle="Отключение аппаратного декодирования в настройках"
          caption="Preferences"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу импортировать .psd по слоям? After Effects не мне предлагает выбор типа импорта!">
        <p>
          Такое бывает, когда вы сохраняете в <mark className="app">Photoshop</mark> файл
          в формате <mark className="file">PSD</mark> в цветовом режиме, отличном от{" "}
          <mark>RGB</mark>. <mark className="app">After Effects</mark> не понимает файлы в{" "}
          <mark>CMYK</mark> или аналогичных режимах, поэтому импортирует файл как целый
          холст без возможности разделения по слоям.
        </p>
        <p>
          Чтобы проверить, в каком режиме сохраняется ваш файл, вам нужно открыть его в{" "}
          <mark className="app">Photoshop</mark> и посмотреть на его заголовок.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/tab_in_photoshop.png"
          imgTitle="Проверяем цветовой режим в Photoshop"
          caption="Photoshop"
        />
        <p>
          Если в заголовке написано <mark>CMYK</mark>, <mark>Grayscale</mark> или что-то
          другое, отличающееся от <mark>RGB</mark>, то вам нужно будет преобразовать файл
          в <mark>RGB</mark>. Для этого нужно в{" "}
          <mark className="ui">Image &gt; Mode</mark> выбрать режим{" "}
          <mark className="ui">RGB Color</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/photoshop_switch_to_rgb.png"
          imgTitle="Переключаем цветовой режим на RGB в Photoshop"
          caption="Photoshop"
        />
        <AdditionWarning>
          Если появится окно с вопросом{" "}
          <mark>
            Change modes can affect the appearance of layers. Flatten image before mode
            change?
          </mark>
          , то смело нажимаем на кнопку <mark className="ui">Don&apos;t Flatten</mark>.
          Иначе ваши слои объединятся в один слой, если вы нажмёте на{" "}
          <mark className="ui">Flatten</mark>.
          <AdditionDanger>
            Цвета, возможно, сильно изменятся после смены цветового режима.
          </AdditionDanger>
        </AdditionWarning>
        <p>
          После изменения цветового режима сохраните <mark className="file">.psd</mark>{" "}
          файл и попробуйте снова импортировать его в{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/correct_import_psd.png"
          imgTitle="Корректный импорт PSD в After Effects"
          caption="filename.psd"
        />
        <p>
          Если этот способ вам не помог или вас не устраивают цвета после изменения
          цветового режима, то выведите все слои из <mark className="app">Photoshop</mark>{" "}
          отдельными файлами. Для этого перейдите в{" "}
          <mark className="ui">File &gt; Export</mark> и выберите пункт{" "}
          <mark className="ui">Layers to Files</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/photoshop_layers_to_files.png"
          imgTitle="Пункт для начала экспорта слоёв в файлы"
          caption="Photoshop"
        />
        <p>
          В открывшемся окне вы можете указать путь для сохранения файлов, название и тип
          файла, в который вы хотите экспортировать слои. После настроек нажмите на{" "}
          <mark className="ui">OK</mark> и ваши слои сохранятся как файлы.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/photoshop_export_layers.png"
          imgTitle="Экспорт слоёв в файлы"
          caption="Photoshop"
        />
        <p>
          После экспорта слоёв как отдельные слои, вы сможете их импортировать в{" "}
          <mark className="app">After Effects</mark> и работать с ними как обычно.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Импортирую пачку изображений как секвенцию, но она получилась короче/длиннее чем нужно или с неверным FPS. Как исправить?">
        <p>
          При импорте картинок, как секвенция, задаётся фреймрейт, который указан в ваших
          настройках <mark className="app">After Effects</mark>. Для того, чтобы проверить
          ваши настройки импорта, вам нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Import</mark> и выбрать в{" "}
          <mark className="ui">Sequence Footage</mark> свою частоту кадров. Это значение
          будет применяться при следующем импорте секвенций из картинок.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_fps_sequence_footage.png"
          imgTitle="Настройки импорта секвенций"
          caption="Preferences"
        />
        <p>
          Если вам нужно преобразовать из одного фреймрейта в другой уже импортированную
          секвенцию, то вам нужно воспользоваться интерпретацией футажа. Для этого
          выделите секвенцию в окне <mark className="ui">Project</mark> и нажмите на
          комбинацию клавиш <mark className="key">Ctrl + Alt + G</mark>. В открывшемся
          окне в разделе <mark className="ui">Frame Rate</mark> укажите пункт{" "}
          <mark className="ui">Conform to frame rate</mark> и установите ожидаемое
          количество кадров в секунду.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/interpret_footage_main.png"
          imgTitle="Интерпретация футажа"
          caption="Interpret Footage"
        />
      </DetailsSummary>
      <DetailsSummary title="Импортировал исходник с переменным FPS. Почему длина исходника в After Effects короче, чем в видео-проигрывателе?">
        <p>
          <mark className="app">After Effects</mark> при импорте преобразует все кадры у
          видео без учёта пропусков от переменного или дробного FPS. Поэтому и получается
          так, что при импорте такого исходника некоторые дублирующие кадры пропускаются и
          длина исходника в <mark className="app">After Effects</mark> становится короче,
          чем в видео-проигрывателе.
        </p>
        <p>
          Чтобы исправить эту проблему измените FPS с помощью интерпретации. Для этого
          выделите ваш исходник в окне <mark className="ui">Project</mark> и нажмите на
          комбинацию клавиш <mark className="key">Ctrl + Alt + G</mark>. В открывшемся
          окне в разделе <mark className="ui">Frame Rate</mark> укажите пункт{" "}
          <mark className="ui">Conform to frame rate</mark> и установите ожидаемое
          количество кадров в секунду.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/interpret_footage_main.png"
          imgTitle="Интерпретация футажа"
          caption="Interpret Footage"
        />
        <p>
          Если это не помогло, то перекодируйте ваш исходник с постоянным FPS через{" "}
          <mark className="app">Media Encoder</mark>,{" "}
          <mark className="app">Shutter Encoder</mark> или{" "}
          <mark className="app">Handbrake</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как импортировать 3D-объекты формата .obj, .fbx или .glb?">
        <p>
          Нативно в <mark className="app">After Effects</mark> в старых версиях программы
          нельзя было импортировать 3D-объекты встроенными методами. Поэтому дедам
          приходилось использовать сторонние плагины, например{" "}
          <mark className="plugin">VideoCopilot Element 3D</mark>. С помощью него можно
          импортировать 3D модели форматов <mark className="file">.obj</mark>,{" "}
          <mark className="file">.fbx</mark> и проекты из{" "}
          <mark className="app">Cinema 4D</mark>.
        </p>
        <YouTubeVideo
          link="Co9V2u0ZZO8"
          caption="Базовый курс по возможностям Element 3D"
        />
        <p>
          Потом позднее, в <mark className="app">After Effects</mark> версий 2024 и новее
          завезли новый физический движок для рендера{" "}
          <mark className="plugin">Advanced 3D</mark>, где заодно добавили нативный импорт
          3D моделей. Поддержка форматов, правда, не впечатляет, как и функции
          взаимодействия с ними.
        </p>
        <YouTubeVideo
          link="Zetbh4p9Z8A"
          caption="Масштабные нововведения для 3D в After Effects"
        />
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой, но перекодировать я их не хочу. Как мне их импортировать?">
        <p>
          <mark className="app">After Effects</mark> изначально не поддерживает большое
          количество кодеков, например <mark className="video">VP9</mark>,{" "}
          <mark className="video">Flac</mark>, <mark className="video">AV1</mark>, а также
          контейнеры <mark className="file">.webm</mark>,{" "}
          <mark className="file">.flv</mark>, <mark className="file">.mkv</mark> и прочие.
        </p>
        <p>
          Любая программа для монтажа и композитинга чего-угодно была изначально
          предназначена работать только с монтажным кодеком. Но в последнее время для
          упрощения работы Adobe постепенно добавляет поддержку различных форматов, но всё
          ещё не всех. Если у вас небольшой проект и нет желания заниматься
          перекодированием исходников, то вы можете попробовать плагин{" "}
          <a href="https://www.autokroma.com/Influx">Autokroma Influx</a>. Он облегчает
          импорт некоторых файлов которые не поддерживаются в{" "}
          <mark className="app">After Effects</mark>,{" "}
          <mark className="app">Premiere Pro</mark> и{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <AdditionWarning>
          Поскольку декодирование из немонтажных кодеков, а также через{" "}
          <mark className="plugin">Autokroma Influx</mark> работает не так, как хотелось
          бы, то вы можете столкнуться с некоторыми проблемами, например появление
          различных артефактов, дёрганные кадры, искажённые цвета или долгий рендер.
          Поэтому рекомендуется в следующий раз всё-таки перекодировать ваши исходники в
          монтажный кодек, например через <mark className="app">Shutter Encoder</mark>.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .heic, .heif или .hevc, но выбивает ошибку. Как их мне импортировать в проект?">
        <AdditionInfo>
          Пользователям устройств на macOS ничего устанавливать не нужно, данные файлы
          импортируются нормально.
        </AdditionInfo>
        <AdditionDanger>
          <mark className="app">After Effects</mark> даже после установки кодеков HEVC не
          сможет импортировать видеофайлы формата <mark className="file">.hevc</mark>,
          перекодируйте их через <mark className="app">Shutter Encoder</mark> в другой
          кодек.
        </AdditionDanger>
        <p>
          Некоторые пользователи, использующие <mark className="app">After Effects</mark>{" "}
          на операционных системах Windows 10 и 11 могут столкнуться с проблемой импорта
          таких файлов, так как у них не установлены кодеки для работы с данными форматами
          изображений и видео. Казалось бы, достаточно их установить с{" "}
          <mark className="app">Microsoft Store</mark>, но увы. Один из кодеков платный, а
          другой - устанавливается неочевидно.
        </p>
        <p>
          Для того чтобы корректно открыть такие изображения и видео, вам нужно установить
          нужные кодеки. Для начала загрузки кодеков нужно посетить{" "}
          <a href="https://store.rg-adguard.net/">
            онлайн-генератор ссылок из Microsoft Store
          </a>
          , а затем вставить ссылку в сервис, взяв их чуть ниже.
        </p>
        <ul>
          <li>
            Для скачивания кодека <mark className="video">HEVC</mark>.
            <code>https://apps.microsoft.com/9n4wgh0z6vhq</code>
          </li>
          <li>
            Для скачивания кодека <mark className="video">HEIF/HEIC</mark>.
            <code>https://apps.microsoft.com/9pmmsr1cgpwg</code>
          </li>
        </ul>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/link_generator_msstore.png"
          imgTitle="Генератор ссылок из Microsoft Store"
          caption="Браузер"
        />
        <p>
          После вставки ссылки и нажатия на кнопку <mark className="ui">OK</mark>, нажмите
          на файл с форматом <mark className="file">.appxbundle</mark> для его скачивания.
        </p>
        <AdditionWarning>
          Если браузер жалуется, мол вы скачиваете редкий файл или некий вирус, то
          проигнорируйте это и продолжите скачивание дальше.
        </AdditionWarning>
        <p>
          Чтобы установить пакеты с расширением <mark className="file">.appxbundle</mark>,
          достаточно их открыть двойным кликом. Если вам предлагают открыть файл с помощью{" "}
          <mark className="app">Обработчика команд Windows</mark> или{" "}
          <mark className="app">Установщика приложений</mark>, то выберите то, что вам
          душе угодно. Я же предпочту установку через{" "}
          <mark className="app">Обработчик команд Windows</mark>.
        </p>
        <p>
          После успешной установки кодеков вы теперь сможете открыть файлы форматов{" "}
          <mark className="file">.heif</mark>, <mark className="file">.heic</mark> и{" "}
          <mark className="file">.hevc</mark> в различных видеоплеерах и просмотрщиков
          фото, например в <mark className="app">MPC-HC</mark> и{" "}
          <mark className="app">FastStone Image Viewer</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как импортировать анимированный стикер из Telegram в формате .tgs?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Скинули проект, который нельзя открыть в старой версии After Effects, но я не хочу обновляться. Или мне придётся?">
        <p>
          Если вы не хотите обновляться на более свежую версию{" "}
          <mark className="app">After Effects</mark> по религиозным или внутренним
          причинам, то попросите автора проекта или прохожих людей из тематических чатов
          переконвертировать ваш <mark className="file">.aep</mark> файл для более старых
          версий программы. Переконвертировать третья сторона может с помощью{" "}
          <mark className="ui">File &gt; Save As &gt; Save Copy As XX.X</mark>.
        </p>
        <p>
          Если у вас нет возможности попросить помощи у прохожих или ваша версия настолько
          древняя, что понижение версии проекта не помогает, то у меня для вас плохие
          новости. Обновите программу, не поленитесь потратить лишний час на установку и
          перенос настроек. Вы себе только спасибо скажете, если часто работаете с чужими
          проектами.
        </p>
      </DetailsSummary>
      <DetailsSummary title='При открытии чужого проекта выскакивает "After Effects warning: X files are missing since you last saved project" и вместо исходников - цветовая палитра. Как мне переподключить исходники?'>
        <p>
          Для начала убедитесь в том, что вы{" "}
          <u>
            <b>полностью распаковали проект</b>
          </u>{" "}
          и{" "}
          <u>
            <b>не открываете его внутри архива</b>
          </u>
          . Если вы пытаетесь открыть проект из архива, то вы распакуете лишь один{" "}
          <mark className="ui">.aep</mark> файл без исходников в временную папку вашей
          операционной системы. Исходники проекта должны лежать рядом с файлом проекта.
        </p>
        <p>
          Если вы переместили <mark className="file">.aep</mark> файл, а исходники
          оставили в другом, то вы можете их переподключить вручную. Для этого в окне{" "}
          <mark className="ui">Project</mark> в поиске напишите{" "}
          <mark className="copy">Missing Footage</mark>. В результатах поиска будут
          выведены файлы проекта, которые потеряли связь с исходниками. Для того, чтобы
          подключить файлы вновь, нажмите по ним <mark className="key">ПКМ</mark> и
          выберите <mark className="ui">Replace Footage &gt; File</mark>. В открывшемся
          окне проводника вашей операционной системы вы можете указать путь до вашего
          исходника и вы сможете продолжить работу дальше.
        </p>

        <AdditionInfo>
          Если вы потеряли 10 исходников, но все они лежали в одной папке, то при
          присоединении одного - подключатся и остальные.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Пытаюсь импортировать .ai с градиентами, но не получается. Как всё-таки перенести градиенты из Illustrator в After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как перенести макет Figma в After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEImport;