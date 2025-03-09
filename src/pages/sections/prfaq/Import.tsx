import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {Divider} from "antd";
import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";

const PRImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Import.tsx" />
      <DetailsSummary title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?">
        <p>
          Прежде чем начать создавать секвенцию и импортировать файлы в{" "}
          <mark className="app">Premiere Pro</mark>, вам стоит расположить все ваши
          исходники в отдельный диск, раздел или папку, чтобы иметь быстрый доступ к
          исходникам, а не на рабочем столе или в системных папках. Так вам будет проще
          работать с кучей материала, особенно когда начинаете работу постепенно.{" "}
          <mark className="word">Структурирование</mark> - это{" "}
          <b>
            <u>основа</u>
          </b>{" "}
          дальнейшей работы.
        </p>
        <p>
          После первичной сортировки исходников, стоит узнать о них получше: в каком
          кодеке и контейнере они запакованы, в каком цветовом пространстве записаны,
          сколько FPS у видеоисходника и прочие технические свойства. Для этого вы можете
          воспользоваться онлайн-сервисом{" "}
          <a href="https://mediaarea.net/MediaInfoOnline">MediaInfo Online</a> или его
          локальной версией <a href="https://mediaarea.net/en/MediaInfo">MediaInfo</a>,
          которая доступна для многих операционных систем.
        </p>
        <AdditionInfo>
          Желательно для лучшего отображения информации в{" "}
          <mark className="app">MediaInfo</mark> использовать вид{" "}
          <mark className="ui">Tree</mark> или воспользоваться консольной версией
          программы.
        </AdditionInfo>
        <p>
          В <mark className="app">MediaInfo</mark> можно узнать многое о ваших исходниках.
          Если ваш видеоисходник не скачан из площадок, например из <mark>YouTube</mark>,
          записан с <mark>Constant FPS</mark>, а цветовое пространство является{" "}
          <mark>Rec.709</mark>, то радуемся жизни и спокойно импортируем в композицию и
          работаем с ними.
        </p>
        <AdditionWarning>
          Но увы, не всегда такие исходники могут работать хорошо. Если проскакивают
          какие-либо артефакты - отправляйте исходники на конвертацию.
        </AdditionWarning>
        <p>
          Если же у вас видео записано в <mark>Variable FPS</mark>, цветовое пространство
          является <mark>Rec.2020</mark>, так ещё и на снят <mark>iPhone</mark>, то вам
          нужно в обязательном порядке перекодировать исходники. Также это касается видео,
          полученных из видеоплощадок по типу <mark>YouTube</mark>, <mark>VK Видео</mark>{" "}
          и аналогичные. После корректной перекодировки видео вы избавите себя от проблем
          с цветами и неправильной интерпретации частоты кадров, а также от различных
          артефактов от последствий кривого кодирования до вас.
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
              При кодировании в некоторые кодеки, в частности{" "}
              <mark className="video">Apple Prores</mark> этот пункт можно пропустить,
              из-за отсутствия режимов кодирования, так как там обычно используются
              стандартные шаблоны для битрейта.
              <ul>
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
              <mark className="ui">NVIDIA NVENC</mark>.
            </AdditionInfo>
          </li>
        </ul>
        <p>
          После успешного перекодирования исходников вы можете их заменить в окне проекта.
          Для этого перейдите в <mark className="ui">Project</mark>, выделите нужные
          исходники, нажмите на <mark className="key">ПКМ</mark> и выберите пункт{" "}
          <mark className="ui">Replace Footage</mark>. В открывшемся окне укажите путь до
          нового файла в системном файловом менеджере.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/replace_footage.png"
          imgTitle="Замена исходника в проекте"
          caption="Premiere Pro"
        />
        <p>
          Вот и всё, удачной работы с проектом! И да, лучше перекодировать, чем
          недокодировать и мучаться с возможными багами кривых исходников.
        </p>
        <AdditionInfo>
          Более подробную информацию о рекомендуемом пайплайне ввода и вывода вы можете
          узнать в Telegram-посте{" "}
          <a href="https://t.me/montage_tutors/2">Montage Tutors</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        title="Почему у меня появляются различные артефакты при использовании исходников в кодеке H.264?"
        tag="зелёный экран, зелень, дергается изображение, полосы, глитчи, артефакты, глюки, искажения"
      >
        <p>
          Скорее всего вы импортируете исходники, которые были загружены из интернета.
          Такое часто бывает при загрузке видео из <mark>YouTube</mark> и последующем
          импорте в программу. Подобные сервисы перекодируют видео непонятно во что и
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
          В редких случаях вы можете встретиться с багом, который &quot;полосатит&quot;
          изображения. Это баг встречался из-за кривых версий драйверов для видеокарт
          NVIDIA с <mark>55X</mark> до <mark>56X</mark>. Для решения этой проблемы
          достаточно обновить драйвера на видеокарту.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Импортировал видео, а оно слишком засвеченное. Как исправить?"
        tag="пересвет, айфон, яркость, цветовое пространство, рек709"
      >
        <p>
          Скорее всего вы импортировали видео, записанное на iPhone или на камеру в
          цветовом пространстве HLG. Для решения цветовых проблем есть два способа.
        </p>
        <Divider>Включаем Auto Tone Map Media</Divider>
        <p>
          В <mark className="app">Premiere Pro</mark> версии 23.2 и выше появилась
          возможность активировать коррекцию цвета для исходников с большим цветовым
          диапазоном. Чтобы его включить - перейдите в настройки нужной секвенции через{" "}
          <mark className="ui">Sequence &gt; Sequence Settings</mark> и активируйте опцию{" "}
          <mark className="ui">Auto Tone Map Media</mark> в вкладке{" "}
          <mark className="ui">Color Management</mark>.
        </p>
        <AdditionInfo>
          При создании новых секвенций эта опция обычно включена по умолчанию.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/enable_auto_tone_map.png"
          imgTitle="Включение Auto Tone Map Media в настройках секвенции"
          caption="Sequence Settings"
        />
        <Divider>Перекодируем в другой цветовой профиль</Divider>
        <p>
          Или же, если результат от <mark className="ui">Auto Tone Map Media</mark> не
          устраивает или этот пункт не помогает, то вам нужно все ваши исходники
          перекодировать из одного цветового пространства в другой. Какое цветовое
          пространство у ваших исходников - вы можете об этом узнать через{" "}
          <mark className="app">MediaInfo</mark>. Обычно через эту утилиту можно извлечь
          информацию о формате, FPS и цветовом пространстве вашего исходника.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/mediainfo_example.png"
          imgTitle="Пример открытого в MediaInfo файла"
          caption="Терминал - MediaInfo-CLI"
        />
        <p>
          Чтобы начать перекодирование ваших исходников, вам нужно установить программу{" "}
          <a href="https://www.shutterencoder.com/">Shutter Encoder</a>. После установки
          просто запустите программу и перетащите в него ваши файлы, можно даже целую
          папку.
        </p>
        <AdditionInfo>
          Чтобы скачать программу бесплатно, просто переместите ползунок из{" "}
          <mark className="ui">It helps me to pay for the server & the domain</mark> на
          ноль, а затем нажмите на кнопку скачивания, соответствующую вашей операционной
          системе.
        </AdditionInfo>
        <p>
          На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
          показаться сложным, но на самом деле это не так. Для перекодирования исходников
          вам нужно сделать всего несколько простых шагов.
        </p>
        <ImageFigure
          styleClass="figure_macos-dark"
          imgSrc="images/shutter_encoder_interface.png"
          imgTitle="Интерфейс Shutter Encoder"
          caption="Shutter Encoder"
        />
        <ul>
          <li>
            Сначала выберите кодек в <mark className="ui">Choose Function</mark>. Обычно
            выбирают <mark className="video">Apple Prores 422</mark>,{" "}
            <mark className="video">H.264</mark> или <mark className="video">DNxHR</mark>.
          </li>
          <li>
            После выбора кодека определитесь с режимом кодирования. В правой части, рядом
            с выбором битрейта, есть кнопка, которая переключает кодировщик между режимами{" "}
            <mark className="ui">CBR</mark>, <mark className="ui">VBR</mark> или{" "}
            <mark className="ui">CQ</mark>.
            <AdditionInfo>
              При кодировании в некоторые кодеки, например,{" "}
              <mark className="video">Apple Prores</mark>, этот пункт можно пропустить,
              так как там обычно используются стандартные шаблоны для битрейта.
              <ul>
                <li>
                  <mark>CBR</mark> - это постоянный битрейт, который хорошо подходит для
                  монтажа, но не очень для социальных сетей из-за большого размера файлов
                  по сравнению с VBR.
                </li>
                <li>
                  <mark>VBR</mark> - это переменный битрейт, который может изменяться в
                  зависимости от временных промежутков. Он не очень подходит для монтажа
                  из-за непредсказуемого качества, но отлично подходит для передачи видео
                  или публикации в соцсетях.
                </li>
                <li>
                  <mark>CQ</mark> - это метод, при котором качество видео регулируется
                  изменением уровня сжатия. Чем ниже значение, тем выше качество, но и
                  размер файла больше. Этот подход позволяет достичь оптимального баланса
                  между качеством и размером.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            После выбора режима кодирования укажите рекомендуемое значение битрейта или
            квантования.
          </li>
          <li>
            Если цветовое пространство вашего исходника отличается от <mark>Rec.709</mark>
            , то в пункте <mark className="ui">Colorimetry</mark> включите галочку{" "}
            <mark className="ui">Convert Colorspace</mark>. Затем установите первым
            значением ваш цветовой профиль, указанный в{" "}
            <mark className="app">MediaInfo</mark>, а вторым - <mark>Rec.709</mark>.
          </li>
          <li>
            После настройки укажите путь для сохранения перекодированных файлов и нажмите
            на кнопку <mark className="ui">Start Function</mark>.
            <AdditionInfo>
              Если у вас видеокарта от NVIDIA, не забудьте установить галочку в пункте{" "}
              <mark className="ui">Hardware Acceleration</mark> и выбрать рядом параметр{" "}
              <mark className="ui">NVIDIA NVENC</mark>.
            </AdditionInfo>
          </li>
        </ul>
        <p>
          После перекодирования исходников замените каждый в окне{" "}
          <mark className="ui">Project</mark>, нажав <mark className="key">ПКМ</mark> по
          нужному исходнику и нажав на <mark className="ui">Replace Footage</mark>. В
          открывшемся окне укажите путь до нового перекодированного исходника. При
          необходимости проделайте эти действия с остальными исходниками.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой. Как мне их импортировать?">
        <p>
          <mark className="app">Premiere Pro</mark> может не поддерживать некоторые
          кодеки, например <mark className="video">VP9</mark>,{" "}
          <mark className="video">AV1</mark>, а также контейнеры по типу{" "}
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
          <mark className="app">Premiere Pro</mark>,{" "}
          <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <AdditionWarning>
          Поскольку декодирование из немонтажных кодеков, а также через{" "}
          <mark className="plugin">Autokroma Influx</mark> работает не так, как хотелось
          бы, то вы можете столкнуться с некоторыми проблемами, например появление
          различных артефактов, дёрганные кадры, искажённые цвета, долгий рендер или вовсе
          отсутствие изображения. Поэтому рекомендуется в следующий раз всё-таки
          перекодировать ваши исходники в монтажный кодек, например через{" "}
          <mark className="app">Shutter Encoder</mark>.
        </AdditionWarning>
        <p>
          Если вы сталкиваетесь с различными артефактами при использовании{" "}
          <mark className="plugin">Autokroma Influx</mark> или не хотите устанавливать
          сторонние плагины, то попробуйте всё же перекодировать ваши исходники через{" "}
          <mark className="app">MKVToolNix</mark>, <mark className="app">HandBrake</mark>{" "}
          или <mark className="app">Shutter Encoder</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .heic, .heif или .hevc. Как мне их открыть и импортировать в проект?">
        <AdditionDanger>
          <mark className="app">Premiere Pro</mark>, к сожалению, даже после установки
          кодеков HEVC и HEIF/HEIC не сможет импортировать видеофайлы формата{" "}
          <mark className="file">.hevc</mark>. Такие файлы нужно перекодировать через{" "}
          <mark className="app">Shutter Encoder</mark> в другой кодек или попробуйте
          установить <a href="https://www.autokroma.com/Influx">Autokroma Influx</a> для
          импорта файлов неподдерживаемых форматов в ваш проект.
        </AdditionDanger>
        <p>
          Некоторые пользователи операционных систем Windows 10 и 11 могут столкнуться с
          проблемой открытия таких файлов, так как у них не установлены кодеки для работы
          с данными форматами изображений и видео. Казалось бы, достаточно их установить с{" "}
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
          <mark className="app">FastStone Image Viewer</mark>, а также конвертировать
          такие файлы через <mark className="app">Shutter Encoder</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как импортировать композиции из After Effects в секвенцию Premiere Pro?">
        <AdditionWarning>
          Прежде чем начать импорт композиций из{" "}
          <mark className="app">After Effects</mark> - убедитесь что обе программы
          установлены на стандартном расположении и их версии являются
          &quot;одногодками&quot;. При использовании разных версий программ у вас могут
          быть проблемы с подсоединением файлов и{" "}
          <mark className="plugin">Dynamic Link</mark>.
        </AdditionWarning>
        <p>
          Для того, чтобы импортировать композиции из{" "}
          <mark className="app">After Effects</mark> в{" "}
          <mark className="app">Premiere Pro</mark> через{" "}
          <mark className="plugin">Dynamic Link</mark> - достаточно открыть окно импорта
          через комбинацию клавиш <mark className="key">Ctrl + I</mark> и указать там
          нужный <mark className="file">.aep</mark> файл.
        </p>
        <p>
          После выбора нужного <mark className="file">.aep</mark> файла - у вас откроется
          окно, в котором <mark className="app">Premiere Pro</mark> подключится к{" "}
          <mark className="app">After Effects</mark> и через некоторое время выдаст вам
          список композиций. Вы можете выбрать одну или несколько композиций для импорта.
        </p>
        {/* TODO: приложить скриншот */}
        <p>
          После успешного импорта вы можете расположить композиции из{" "}
          <mark className="app">After Effects</mark> прямо на таймлайн в{" "}
          <mark className="app">Premiere Pro</mark>.
        </p>
        <AdditionInfo>
          Чтобы закэшировать предпросмотр в местах, где расположены композиции из{" "}
          <mark className="app">After Effects</mark> - перейдите в{" "}
          <mark className="ui">Sequence</mark> и выберите{" "}
          <mark className="ui">Render In to Out</mark>. Рекомендую поставить свою
          комбинацию клавиш для этого действия.
        </AdditionInfo>
        <AdditionWarning>
          <ul>
            <li>
              Версии приложений от <mark>Adobe</mark>, активированные через{" "}
              <mark className="app">GenP</mark> могут некорректно работать друг с другом
              через <mark className="plugin">Dynamic Link</mark>. При возникновении
              проблем с работой <mark className="plugin">Dynamic Link</mark> -
              переустановите программы на репаки от <mark>KpoJluK</mark> или{" "}
              <mark>m0nkrus</mark>.
            </li>
            <li>
              Не рекомендуется использовать слишком много композиций, импортированные
              через <mark className="plugin">Dynamic Link</mark>. Таким образом вы можете
              ухудшить производительность вашего проекта и заработать себе проблемы при
              экспорте секвенции. Если вы не планируете редактировать нужные композиции в
              дальнейшем - рекомендую отрендерить их в{" "}
              <mark className="app">After Effects</mark> и заменить их в секвенции{" "}
              <mark className="app">Premiere Pro</mark>.
            </li>
          </ul>
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Откуда-то появились на предпросмотре чёрные полосы, что это может быть?">
        <p>
          Скорее всего вы столкнулись с багом драйверов видеокарты NVIDIA версий{" "}
          <mark>55X.XX</mark>. Для решения проблемы - достаточно обновить драйвера вашей
          видеокарты или откатить их на предыдущие версии.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PRImport;
