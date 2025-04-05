import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import TgsToJsonConverter from "../../../components/features/ConverterTgsToJson";
import {Divider} from "antd";

const AEImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Import.tsx" />
      <DetailsSummary
        tag="пайплайн, импорт, конвертация, внятный кодек, шаттер енкодер, видео из айфона"
        title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?"
      >
        <p>
          Прежде чем начать создавать композиции и импортировать файлы в{" "}
          <mark className="app">After Effects</mark>, вам стоит расположить все ваши
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
          caption="Терминал - MediaInfo-CLI"
          imgSrc="images/mediainfo_example.png"
          imgTitle="Пример открытого в MediaInfo файла"
          styleClass="figure_windows-dark"
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
          caption="Shutter Encoder"
          imgSrc="images/shutter_encoder_interface.png"
          imgTitle="Интерфейс Shutter Encoder"
          styleClass="figure_macos-dark"
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
          После успешного перекодирования исходников вы можете их заменить в окне{" "}
          <mark className="ui">Project</mark>. Для этого нажмите{" "}
          <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="ui">Replace Footage &gt; File</mark> или нажмите на комбинацию
          клавиш <mark className="key">Ctrl + H</mark>, выделив исходник, который нужно
          заменить. После этого укажите путь до нового файла в системном файловом
          менеджере.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/replace_footage.png"
          imgTitle="Замена исходника в проекте"
          styleClass="figure_windows-dark"
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
        tag="зелёный экран, зелень, дергается изображение, полосы, глитчи, артефакты, глюки, искажения, исходники из интернета в кодеке H.264, скачано из ютуба"
        title="Почему у меня появляются различные артефакты в предпросмотре?"
      >
        <p>
          Если вы работаете с композицией и со временем у вас начинаются появляться в
          предпросмотре различные дёрганья, появляются старые кадры или ещё чего-либо, то
          возможно вы столкнулись с кривой работой кэширования на диск. Для очистки кэша
          перейдите в <mark className="ui">Edit &gt; Purge</mark> и выберите{" "}
          <mark className="ui">All Memory & Disk Cache</mark>.
        </p>
        <AdditionInfo>
          Если у вас много оперативной памяти (минимум <mark>32 ГБ</mark>) и
          производительный процессор на вашем устройстве, то рекомендую отключить дисковый
          кэш. Это можно сделать, отключив галочку{" "}
          <mark className="ui">Enable Disk Cache</mark> в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark>.
        </AdditionInfo>
        <p>
          Также различные непредсказуемые артефакты могут часто вылезать, если вы
          импортировали в проект исходники, которые были загружены из интернета, например
          из <mark>YouTube</mark>. Подобные сервисы перекодируют видео непонятно во что и
          непонятно по каким алгоритмам, поэтому их не рекомендуется использовать в
          дальнейшей работе. Очистка кэша в данном случае не всегда помогает.
        </p>
        <VideoFigure
          caption="Пример артефактов кривого исходника из просторов интернета"
          styleClass="figure_windows-light"
          videoSrc="images/h264_artifacts.webm"
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
          caption="Shutter Encoder"
          imgSrc="images/convert_to_prores_shutterencoder.png"
          imgTitle="Конвертируем в ProRes через Shutter Encoder"
          styleClass="figure_macos-dark"
        />
        <p>
          Если вы столкнулись с проблемой, когда вместо исходника появляется зеленая
          заливка, то попробуйте отключить аппаратное декодирование в настройках
          программы. Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Import</mark> и выключите
          галочку <mark className="ui">Enable hardware accelerated decoding</mark> и
          перезагрузите программу. Такое часто встречается на устройствах с дискретным и
          встроенным в процессор видеочипом AMD.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/disable_hardware_accelerated_decoding.png"
          imgTitle="Отключение аппаратного декодирования в настройках"
          styleClass="figure_windows-dark"
        />
        <p>
          Если вы напрочь отказываетесь от перекодирования по каким-то причинам, то вы
          можете попробовать использовать принудительное декодирование файлов через{" "}
          сторонний плагин <mark className="plugin">Autokroma Influx</mark>. Он может
          помочь уменьшить вероятность различных глюков и багов исходников, скачанных из
          интернета. Для этого в настройках плагина{" "}
          <mark className="plugin">Autokroma Influx</mark> укажите в пункте{" "}
          <mark className="ui">Formats</mark> параметр{" "}
          <mark className="ui">Force Influx to override all Adobe importers</mark>. Таким
          образом вы переопределите принудительно для всех поддерживаемых форматов файлов
          декодирование через <mark className="plugin">Autokroma Influx</mark>.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Чтобы открыть настройки <mark className="plugin">Autokroma Influx</mark> -
              откройте <mark className="file">Influx.exe</mark>, находящийся по пути{" "}
              <mark className="path">
                C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\Autokroma Influx
              </mark>
              .
            </li>
            <li>
              Список поддерживаемых <mark className="plugin">Autokroma Influx</mark>{" "}
              форматов указано{" "}
              <a href="https://www.autokroma.com/Influx/Main_Features">
                на официальном сайте
              </a>
              .
            </li>
          </ul>
        </AdditionInfo>
        <AdditionDanger>
          <b>
            <u>
              Принудительное переопределение декодирование через{" "}
              <mark className="plugin">Autokroma Influx</mark> вы проделываете на свой
              страх и риск!
            </u>
          </b>
          Стабильность работы и хорошая производительность вашего проекта не
          гарантируется, она может улучшиться или наоборот, ухудшиться. Если возникают
          проблемы с проектом, то верните значение в <mark className="ui">Formats</mark>{" "}
          обратно на{" "}
          <mark className="ui">
            Use Influx for new formats, codecs and as a fallback (Default)
          </mark>
          и перекодируйте ваши исходники в монтажный кодек.
        </AdditionDanger>
        <p>
          Если вы не хотите переопределять стандартный импортёр, то вы можете
          переименовать файлы нужных исходников, добавив в конце полного названия файла{" "}
          <mark className="code">.influx</mark>. То есть, если у вас имеется файл с
          названием <mark className="file">IMG_1294.mp4</mark>, то вы можете переименовать
          его в <mark className="file">IMG_1294.mp4.influx</mark>. Таким образом такой
          файл будет импортирован принудительно через{" "}
          <mark className="plugin">Autokroma Influx</mark> вне зависимости от настройки{" "}
          <mark className="ui">Formats</mark>.
        </p>
        <p>
          В редких случаях вы можете встретиться с багом, который &quot;полосатит&quot;
          изображения. Это баг встречался из-за кривых версий драйверов для видеокарт
          NVIDIA с <mark>55X</mark> до <mark>56X</mark>. Для решения этой проблемы
          достаточно обновить драйвера на видеокарту.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="фотошоп, псд, не появляется окно"
        title="Почему я не могу импортировать .psd по слоям? After Effects не предлагает мне выбор типа импорта!"
      >
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
          caption="Photoshop"
          imgSrc="images/aftereffects/tab_in_photoshop.png"
          imgTitle="Проверяем цветовой режим в Photoshop"
          styleClass="figure_windows-light"
        />
        <p>
          Если в заголовке написано <mark>CMYK</mark>, <mark>Grayscale</mark> или что-то
          другое, отличающееся от <mark>RGB</mark>, то вам нужно будет преобразовать файл
          в <mark>RGB</mark>. Для этого нужно в{" "}
          <mark className="ui">Image &gt; Mode</mark> выбрать режим{" "}
          <mark className="ui">RGB Color</mark>.
        </p>
        <ImageFigure
          caption="Photoshop"
          imgSrc="images/aftereffects/photoshop_switch_to_rgb.png"
          imgTitle="Переключаем цветовой режим на RGB в Photoshop"
          styleClass="figure_windows-light"
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
          caption="filename.psd"
          imgSrc="images/aftereffects/correct_import_psd.png"
          imgTitle="Корректный импорт PSD в After Effects"
          styleClass="figure_windows-dark"
        />
        <p>
          Если этот способ вам не помог или вас не устраивают цвета после изменения
          цветового режима, то выведите все слои из <mark className="app">Photoshop</mark>{" "}
          отдельными файлами. Для этого перейдите в{" "}
          <mark className="ui">File &gt; Export</mark> и выберите пункт{" "}
          <mark className="ui">Layers to Files</mark>.
        </p>
        <ImageFigure
          caption="Photoshop"
          imgSrc="images/aftereffects/photoshop_layers_to_files.png"
          imgTitle="Пункт для начала экспорта слоёв в файлы"
          styleClass="figure_windows-light"
        />
        <p>
          В открывшемся окне вы можете указать путь для сохранения файлов, название и тип
          файла, в который вы хотите экспортировать слои. После настроек нажмите на{" "}
          <mark className="ui">OK</mark> и ваши слои сохранятся как файлы.
        </p>
        <ImageFigure
          caption="Photoshop"
          imgSrc="images/aftereffects/photoshop_export_layers.png"
          imgTitle="Экспорт слоёв в файлы"
          styleClass="figure_windows-light"
        />
        <p>
          После экспорта слоёв как отдельные слои, вы сможете их импортировать в{" "}
          <mark className="app">After Effects</mark> и работать с ними как обычно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="фпс, частота кадров, интерпретация"
        title="Импортирую пачку изображений как секвенцию, но она получилась короче/длиннее чем нужно или с неверным FPS. Как исправить?"
      >
        <p>
          При импорте картинок, как секвенция, задаётся фреймрейт, который указан в ваших
          настройках <mark className="app">After Effects</mark>. Для того, чтобы проверить
          ваши настройки импорта, вам нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Import</mark> и выбрать в{" "}
          <mark className="ui">Sequence Footage</mark> свою частоту кадров. Это значение
          будет применяться при следующем импорте секвенций из картинок.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/change_fps_sequence_footage.png"
          imgTitle="Настройки импорта секвенций"
          styleClass="figure_windows-dark"
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
          caption="Interpret Footage"
          imgSrc="images/aftereffects/interpret_footage_main.png"
          imgTitle="Интерпретация футажа"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="переменный фпс, пропуски кадров"
        title="Импортировал исходник с переменным FPS. Почему длина исходника в After Effects короче, чем в видео-проигрывателе?"
      >
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
          caption="Interpret Footage"
          imgSrc="images/aftereffects/interpret_footage_main.png"
          imgTitle="Интерпретация футажа"
          styleClass="figure_windows-dark"
        />
        <p>
          Если это не помогло, то перекодируйте ваш исходник с постоянным FPS через{" "}
          <mark className="app">Media Encoder</mark>,{" "}
          <mark className="app">Shutter Encoder</mark> или{" "}
          <mark className="app">Handbrake</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как импортировать секвенцию из Premiere Pro в композицию After Effects?">
        <p>
          Давайте представим, что вы смонтировали видеоролик в{" "}
          <mark className="app">Premiere Pro</mark> и теперь хотите перенести его в{" "}
          <mark className="app">After Effects</mark>. Если вы просто импортируете{" "}
          <mark className="file">.prproj</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + I</mark>, то получите секвенцию, которую нельзя
          редактировать в <mark className="app">After Effects</mark>. Но мы же хотим,
          чтобы её можно было редактировать, как будто мы действительно конвертировали
          таймлайн из <mark className="app">Premiere Pro</mark> в{" "}
          <mark className="app">After Effects</mark>, верно?
        </p>
        <p>
          Поэтому для импорта секвенций из <mark className="app">Premiere Pro</mark> в{" "}
          <mark className="app">After Effects</mark> как полноценные композиции в
          программе нужно выбрать{" "}
          <mark className="ui">File &gt; Import &gt; Import Premiere Pro Project</mark> и
          выбрать нужный файл проекта <mark className="app">Premiere Pro</mark>.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/import_premiere_pro_project.png"
          imgTitle="Начало импорта секвенций из Premiere Pro"
          styleClass="figure_windows-light"
        />
        <p>
          Далее <mark className="app">After Effects</mark> спросит, какие секвенции нужно
          импортировать. По умолчанию стоит пункт{" "}
          <mark className="ui">All Sequences</mark>, но вы можете указать конкретную
          секвенцию. Также при желании вы можете отключить импорт аудио-файлов.
        </p>
        <ImageFigure
          caption="Premiere Pro Importer"
          imgSrc="images/aftereffects/premiere_pro_importer.png"
          imgTitle="Импорт секвенций из Premiere Pro"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого в окне <mark className="ui">Project</mark> появится новая папка с
          названием вашего проекта из <mark className="app">Premiere Pro</mark>,
          импортированные файлы и новые композиции с нарезками. Некоторые эффекты в силу
          различий двух программ могут не примениться и их нужно будет применить повторно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="3д, элемент 3д, блендер, объемные модели"
        title="Как импортировать 3D-объекты формата .obj, .fbx или .glb?"
      >
        <p>
          Станадртными средствами в старых версиях программы{" "}
          <mark className="app">After Effects</mark> нельзя было импортировать 3D-объекты
          без танцев с бубнами. Поэтому раньше приходилось использовать сторонние плагины,
          например <mark className="plugin">VideoCopilot Element 3D</mark>. С помощью него
          можно импортировать 3D-модели форматов <mark className="file">.obj</mark>,{" "}
          <mark className="file">.fbx</mark> и проекты из{" "}
          <mark className="app">Cinema 4D</mark>.
        </p>
        <AdditionInfo>
          При импорте моделей формата <mark className="file">.c4d</mark> требуется
          установленный полноценнный <mark className="app">Maxon Cinema 4D</mark>, если он
          вырезан в вашей сборке <mark className="app">After Effects</mark>.
        </AdditionInfo>
        <YouTubeVideo
          caption="Базовый курс по возможностям Element 3D"
          link="Co9V2u0ZZO8"
        />
        <p>
          Потом позднее, в <mark className="app">After Effects</mark> версий{" "}
          <mark>2024</mark> и новее завезли новый физический движок для рендера{" "}
          <mark className="plugin">Advanced 3D</mark>, где заодно добавили нативный импорт
          3D-моделей. Поддержка форматов, правда, не впечатляет, как и функции
          взаимодействия с ними.
        </p>
        <YouTubeVideo
          caption="Масштабные нововведения для 3D в After Effects"
          link="Zetbh4p9Z8A"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="инфлюкс, без кодирования"
        title="Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой, но перекодировать я их не хочу. Как мне их импортировать?"
      >
        <p>
          <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Media Encoder</mark> изначально не поддерживают большое
          количество кодеков, например <mark className="video">VP9</mark>,{" "}
          <mark className="video">AV1</mark>, а также контейнеры{" "}
          <mark className="file">.webm</mark>, <mark className="file">.flv</mark>,{" "}
          <mark className="file">.mkv</mark> и прочие. Если у вас небольшой проект и нет
          желания заниматься перекодированием исходников, то вы можете попробовать плагин{" "}
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
      <DetailsSummary
        tag="исходники видео фото с айфона"
        title="Прислали исходники в формате .heic, .heif или .hevc, но выбивает ошибку. Как их мне открыть и импортировать в проект?"
      >
        <p>
          Некоторые пользователи, использующие <mark className="app">After Effects</mark>{" "}
          на операционных системах <mark>Windows 10/11</mark> могут столкнуться с
          проблемой открытия и импорта таких файлов, так как у них не установлены кодеки
          для работы с данными форматами изображений и видео. Казалось бы, достаточно их
          установить с <mark className="app">Microsoft Store</mark>, но увы. Один из
          кодеков платный, а другой - устанавливается неочевидно.
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
            <AdditionDanger>
              <ul>
                <li>
                  <mark className="app">After Effects</mark> даже после установки кодеков{" "}
                  <mark className="video">HEVC</mark> не сможет импортировать видеофайлы
                  формата <mark className="file">.hevc</mark>.
                </li>
                <li>
                  Для решения проблемы с импортом видеофайлы с расширением{" "}
                  <mark className="file">.hevc</mark> лучше всего перекодировать через{" "}
                  <mark className="app">Shutter Encoder</mark> в другой кодек или
                  переименовать файлы в <mark className="file">.mp4</mark>, а затем
                  импортировать с помощью{" "}
                  <a href="https://www.autokroma.com/Influx">Autokroma Influx</a> в ваш
                  проект.
                </li>
              </ul>
            </AdditionDanger>
          </li>
          <li>
            Для скачивания кодека <mark className="video">HEIF/HEIC</mark>.
            <code>https://apps.microsoft.com/9pmmsr1cgpwg</code>
          </li>
        </ul>
        <ImageFigure
          caption="Браузер"
          imgSrc="images/link_generator_msstore.png"
          imgTitle="Генератор ссылок из Microsoft Store"
          styleClass="figure_windows-dark"
        />
        <p>
          После вставки ссылки и нажатия на кнопку <mark className="ui">OK</mark>, нажмите
          на файл с форматом <mark className="file">.appxbundle</mark> для его скачивания.
        </p>
        <AdditionWarning>
          Если браузер жалуется, мол вы скачиваете редкий файл или некий вирус, то
          проигнорируйте и продолжите скачивание дальше.
        </AdditionWarning>
        <p>
          Для установки пакетов с расширением <mark className="file">.appxbundle</mark> -
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
      <DetailsSummary
        tag="телеграм, стикеры"
        title="Как импортировать анимированный стикер из Telegram как композицию?"
      >
        <AdditionWarning>
          При импорте стикеров в формате <mark className="file">.tgs</mark> в некоторых
          случаях вам нужно будет пересоздать градиенты. Обычно в окне плагина для импорта
          вам скажут, какие градиенты нужно пересоздать.
        </AdditionWarning>
        <p>
          С ростом популярности различных стикеров в мессенджере{" "}
          <mark className="app">Telegram</mark> у пользователей возникает желание
          импортировать анимированные стикеры в <mark className="app">After Effects</mark>{" "}
          и использовать их в проекте. Особенно это заметно у рилсомейкеров, которые
          применяют стандартные анимированные эмодзи в своих проектах.
        </p>
        <AdditionInfo>
          Большинство стандартных анимированных эмодзи можно найти в различных
          стикер-паках, например{" "}
          <a href="https://t.me/addstickers/AnimatedEmojies">тут</a>.
        </AdditionInfo>
        <p>
          Стикеры можно загрузить на ваше устройство, нажав{" "}
          <mark className="key">ПКМ</mark> по отправленному стикеру в чат и выбрав{" "}
          <mark className="ui">Сохранить как</mark>.
        </p>
        <ImageFigure
          caption="Telegram"
          imgSrc="images/download_tgs_from_telegram.png"
          imgTitle="Сохранить стикер как .tgs"
          styleClass="figure_windows-dark"
        />
        <p>
          После того как мы получили <mark className="file">.tgs</mark>, нам нужно его
          переконвертировать в <mark className="file">.json</mark>. Сделать это вы можете
          с помощью конвертера ниже, предоставив ему файл. После успешной конвертации не
          забудьте скачать файл.
        </p>
        <Divider>Конвертер TGS в JSON</Divider>
        <TgsToJsonConverter />
        <p>
          После конвертации нам нужно скачать плагин{" "}
          <mark className="plugin">Bodymovin</mark> из{" "}
          <a href="https://aescripts.com/bodymovin/">aescripts</a>
          <sup>*</sup> и установить его в <mark className="app">After Effects</mark>.
          Найти и открыть плагин можно в{" "}
          <mark className="ui">Window &gt; Extensions</mark>.
        </p>
        <AdditionInfo>
          <sup>*</sup>Чтобы скачать скрипт - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с плагином,
          установите цену <mark>0</mark> в <mark className="ui">Name Your Own Price</mark>
          , добавьте его в корзину и подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
        <p>
          После открытия плагина <mark className="plugin">Bodymovin</mark> нам нужно
          перейти во вкладку <mark className="ui">Import Lottie Animation</mark> и нажать
          на кнопку <mark className="ui">Import Local File</mark>. В открытом системном
          окне выберите <mark className="file">.json</mark>, который вы уже
          переконвертировали ранее.
        </p>
        <ImageFigure
          caption="Bodymovin"
          imgSrc="images/aftereffects/bodymovin_import_json.png"
          imgTitle="Импортируем .json в After Effects через Bodymovin"
          styleClass="figure_windows-dark"
        />
        <p>
          Импорт <mark className="file">.json</mark> в{" "}
          <mark className="app">After Effects</mark> может занять некоторое время. После
          импорта у вас появится новая композиция в окне{" "}
          <mark className="ui">Project</mark>. В некоторых случаях импортирование может
          пройти с некоторыми нюансами, например без корректно импортированных градиентов.
          Благо плагин даёт информацию что вставлять и какие данные, но вставка занимает
          довольно долгое время, поэтому увы без этого никуда.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/gradient_data_bodymovin.png"
          imgTitle="Неперенесенные градиенты в After Effects через Bodymovin"
          styleClass="figure_windows-dark"
        />
        <p>
          Градиенты можно заменить на обычную заливку, если необходимо, или же всё-таки
          постарайтесь уделить немного времени на замену градиентов. Количество градиентов
          будет зависеть от самого стикера.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="старая версия, не открывается, обновление, ошибка импорта"
        title="Скинули проект, который нельзя открыть в старой версии After Effects, но я не хочу обновляться. Или мне придётся?"
      >
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
      <DetailsSummary
        tag="реконнект, потерялись файлы, ошибка импорта"
        title='При открытии чужого проекта выскакивает "After Effects warning: X files are missing since you last saved project" и вместо исходников - цветовая палитра. Как мне переподключить исходники?'
      >
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
      <DetailsSummary
        tag="импорт из иллюстратора, градиенты"
        title="Как перенести макет из Illustrator в After Effects по слоям и с градиентами?"
      >
        <p>
          Предположим, что у вас возникла необходимость перенести файл формата{" "}
          <mark className="file">.ai</mark>. Да,{" "}
          <mark className="app">After Effects</mark> предоставляет такую возможность.
          Однако, стоит отметить, что при работе с большинством проектов, созданных в{" "}
          <mark className="app">Illustrator</mark>, вы можете столкнуться с тем, что
          количество доступных слоёв будет ограничено. Это связано с тем, что в процессе
          создания макета несколько шейпов часто объединяются в один слой.
        </p>
        <p>
          Если вы не собираетесь редактировать импортированные фигуры в{" "}
          <mark className="app">After Effects</mark> для более детальной анимации, то
          вручную пересоздавать градиенты не нужно. Но, как сказано ранее - в некоторых
          проектах из <mark className="app">Illustrator</mark> фигуры могут объединяться.
          Для этого нам нужно в самом <mark className="app">Illustrator</mark> разбить все
          или только необходимые фигуры на отдельные слои.
        </p>
        <VideoFigure
          caption="Разбиваем слои в Illustrator"
          styleClass="figure_windows-light"
          videoSrc="images/manual_explode_layer_illustrator.mp4"
        />
        <p>
          Затем после разбивки слоёв, сохраните проект в{" "}
          <mark className="app">Illustrator</mark> как <mark className="file">.ai</mark>.
          После этого, начните импорт <mark className="file">.ai</mark> файла в{" "}
          <mark className="app">After Effects</mark> как обычно и выберите тип импорта как
          композиция. Также вы можете выбрать размер слоёв в{" "}
          <mark className="ui">Footage Dimensions</mark>:{" "}
          <mark className="ui">Layer Size</mark> или{" "}
          <mark className="ui">Document Size</mark>.
        </p>
        <ImageFigure
          caption="File.ai"
          imgSrc="images/aftereffects/import_ai_file.png"
          imgTitle="Импортируем файл Illustrator"
          styleClass="figure_windows-dark"
        />
        <p>
          После импорта вы получите в <mark className="app">After Effects</mark> слои с
          градиентами. Их вы не сможете редактировать как обычную фигуру, но их можно
          сделать &quot;как бы векторными&quot;, включив у слоёв{" "}
          <mark className="ui">Continuously Rasterize</mark>.
        </p>
        <VideoFigure
          caption="Импортированые нередактируемые фигуры"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/imported_non_editable_shapes.mp4"
        />
        <AdditionWarning>
          <ul>
            <li>
              Есть отдельная категория лиц, которая считает, что при включённом{" "}
              <mark className="ui">Continuously Rasterize</mark> программа даст
              пользователю возможность увеличения предпросмотра без потери качества, как в{" "}
              <mark className="app">Adobe Illustrator</mark>. Спешу огорчить,{" "}
              <mark className="app">After Effects</mark> не работает так и не может
              отобразить больше пикселей, чем то, что указано в настройках композиции.
            </li>
            <li>
              При включенной опции <mark className="ui">Continuously Rasterize</mark>{" "}
              могут быть побочные явления, например разрывы слоя при использовании{" "}
              <mark className="plugin">Puppet Tool</mark>.
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Если вам всё-таки нужно будет слой переконвертировать в редактируемый шейп то
          увы, придётся попрощаться с градиентами. Градиенты из{" "}
          <mark className="app">Illustrator</mark> обычно не взаимозаменяемые с
          градиентами из <mark className="app">After Effects</mark> и их нужно будет
          пересоздать вручную.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="импорт из фигмы, фигма"
        title="Как перенести макет из Figma в After Effects?"
      >
        <p>
          Макет из онлайн-сервиса <mark className="app">Figma</mark> можно перегнать двумя
          плагинами: <mark className="plugin">AEUX</mark> и{" "}
          <mark className="plugin">Overlord 2</mark>. Прежде чем импортировать что-либо,
          вам нужно сохранить макет локально в <mark className="app">Figma</mark> через{" "}
          <mark className="ui">Иконка Figma &gt; File &gt; Save local copy</mark> и
          открыть его в{" "}
          <b>
            <u>десктопной версии</u>
          </b>{" "}
          <mark className="app">Figma</mark>. Это нужно делать, если вы собираетесь
          импортировать чужой проект, так как зачастую их нельзя редактировать и
          использовать с ними плагины.
        </p>
        <AdditionInfo>
          Плагин <mark className="plugin">Overlord</mark> второй версии с поддержкой
          импорта макетов из <mark className="app">Figma</mark> отсутствует у автора по
          причине жадности, поэтому в этом пункте ограничимся лишь плагином
          <mark className="plugin">AEUX</mark>, который можно загрузить на странице
          релизов в <a href="https://github.com/google/AEUX/releases">GitHub</a>. Плагин
          нужно установить в <mark className="app">After Effects</mark> и в{" "}
          <b>
            <u>десктопную версию</u>
          </b>{" "}
          <mark className="app">Figma</mark>.
        </AdditionInfo>
        <p>
          Плагин для <mark className="app">After Effects</mark> распространяется в формате{" "}
          <mark className="file">.zxp</mark>, поэтому можно его установить как через{" "}
          <a href="https://updates.aescripts.com/zxp-installer/">ZXP Installer</a>, так и
          через ручную установку.
        </p>
        <p>
          Для установки плагина в десктопную версию <mark className="app">Figma</mark>{" "}
          нужно распаковать папку <mark className="path">Figma</mark> из архива{" "}
          <mark className="file">AEUX_0_X_X.zip</mark> и в указать путь к{" "}
          <mark className="file">manifest.json</mark> в распакованной папке. Это делается
          через{" "}
          <mark className="ui">
            Иконка Figma &gt; Plugins &gt; Development &gt; Import plugin from manifest
          </mark>
          .
        </p>
        <ImageFigure
          caption="Figma"
          imgSrc="images/figma_install_plugin.png"
          imgTitle="Установка стороннего плагина в Figma"
          styleClass="figure_windows-dark"
        />
        <p>
          После успешной установки плагина в <mark className="app">Figma</mark> его можно
          запустить с помощью{" "}
          <mark className="ui">Иконка Figma &gt; Plugins &gt; Development &gt; AEUX</mark>
          .
        </p>
        <ImageFigure
          caption="Figma"
          imgSrc="images/figma_run_aeux.png"
          imgTitle="Запуск AEUX в Figma"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы начать отправку проекта в <mark className="app">After Effects</mark>,
          нужно выделить нужные слои из макета и нажать на кнопку{" "}
          <mark className="ui">Send selection to AE</mark>.
        </p>
        <AdditionWarning>
          <mark className="app">After Effects</mark> перед нажатием на кнопку переноса
          макета из <mark className="app">Figma</mark> должен быть запущен, иначе выбьет
          ошибку.
        </AdditionWarning>
        <VideoFigure
          caption="Figma"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/send_figma_to_ae.mp4"
        />
        <p>
          После нажатия на кнопку переноса - у вас откроется{" "}
          <mark className="app">After Effects</mark> и предложит куда сохранить
          изображения для проекта. После выбора папки вы получите новую композицию с
          макетом из <mark className="app">Figma</mark>.
        </p>
        <AdditionWarning>
          Импорт часто проходит далеко не идеально, поэтому некоторые элементы макета всё
          же придётся отредактировать в соответствии с оригиналом. Иногда при повторном
          импорте выделенных слоёв макета перенос проходит лучше.
        </AdditionWarning>
      </DetailsSummary>
    </div>
  );
};
export default AEImport;
