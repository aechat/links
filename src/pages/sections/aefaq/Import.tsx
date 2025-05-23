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
import ContentSwitcher from "../../../components/features/ContentFilter";

const AEImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Import.tsx" />
      <DetailsSummary
        tag="пайплайн, импорт, конвертация, внятный кодек, шаттер енкодер, видео из айфона"
        title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?"
      >
        <Divider>Организация исходников</Divider>
        <p>
          Прежде чем начать создавать композиции и импортировать файлы в{" "}
          <mark className="app">Adobe After Effects</mark>, вам стоит расположить все ваши
          исходники в отдельный диск, раздел или папку, чтобы иметь быстрый доступ к
          исходникам, а не на рабочем столе или в системных папках. Так вам будет проще
          работать с кучей материала, особенно когда начинаете работу постепенно.{" "}
          <mark className="word">Структурирование</mark> - это{" "}
          <b>
            <u>основа</u>
          </b>{" "}
          дальнейшей работы.
        </p>
        <Divider>Проверяем и, при необходимости, конвертируем исходники</Divider>
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
              <mark className="video">Apple Prores</mark> этот параметр можно пропустить,
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
            параметре <mark className="ui">Colorimetry</mark> включите чекбокс{" "}
            <mark className="ui">Convert Colorspace</mark>. Затем установите там первым
            значением ваш цветовой профиль, который был указан в{" "}
            <mark className="app">MediaInfo</mark>, а вторым значением -{" "}
            <mark>Rec.709</mark>.
          </li>
          <li>
            Затем укажите битрейт для аудио, достаточно установить значение{" "}
            <mark>320</mark> Кбит/с в параметре <mark className="ui">Audio Bitrate</mark>.
          </li>
          <li>
            После настройки - укажите путь для сохранения перекодированных файлов и
            нажмите на кнопку <mark className="ui">Start Function</mark>.
            <AdditionInfo>
              Если у вас видеокарта от NVIDIA, то не забудьте установить галочку в
              параметре <mark className="ui">Hardware Acceleration</mark> и выбрать рядом{" "}
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
          caption="Adobe After Effects"
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
        title="Почему у меня появляются различные артефакты в предпросмотре при работе с видео?"
      >
        <p>
          Каждый, кто работал в <mark className="app">Adobe After Effects</mark> с чужими
          исходниками сталкивался с различными проблемами при работе с ними. Артефакты или
          прочие графические баги могут сильно раздражать или испортить ваш проект при
          экспорте композиций. В этой статье мы разберем типичные проблемы и их способы
          решения.
        </p>
        <Divider>Очищаем или отключаем дисковый кэш</Divider>
        <p>
          Если вы работаете с композицией и со временем у вас начинаются появляться в
          предпросмотре различные дёрганья, появляются старые кадры или ещё чего-либо, то
          возможно вы столкнулись с кривой работой кэширования на диск. Для очистки кэша
          перейдите в <mark className="ui">Edit &gt; Purge</mark>, выберите{" "}
          <mark className="ui">All Memory & Disk Cache</mark>, а затем нажмите в
          всплывающем окне <mark className="ui">OK</mark>.
        </p>
        <AdditionInfo>
          Если у вас много оперативной памяти, то есть минимум <mark>32-64 ГБ</mark>, и
          производительный процессор на вашем устройстве - вы можете отключить дисковый
          кэш и работать без него спокойно. Это можно сделать, отключив галочку{" "}
          <mark className="ui">Enable Disk Cache</mark> в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark>.
        </AdditionInfo>
        <Divider>Исправляем кривые исходники перекодированием</Divider>
        <p>
          Различные непредсказуемые артефакты могут часто вылезать, если вы импортировали
          в проект исходники, которые были загружены из интернета, например из{" "}
          <mark>YouTube</mark>. Подобные сервисы перекодируют видео непонятно во что и
          непонятно по каким алгоритмам, поэтому их не рекомендуется использовать в
          дальнейшей работе. Очистка кэша в данном случае не всегда помогает.
        </p>
        <VideoFigure
          caption="Пример артефактов кривого исходника из просторов интернета"
          styleClass="figure_windows-light"
          videoSrc="images/h264_artifacts.webm"
        />
        <p>
          Что же тогда делать? Чтобы с такими видео из интернета можно было спокойно
          работать - вам нужно перегнать ваши видео в удобоваримый кодек и формат для
          монтажа, например в <mark className="video">Apple Prores 422</mark>, а затем
          заменить их в проекте. Да, это нормальный процесс и желательно так делать каждый
          раз, когда скачиваете видео с сервисов, которые любят пережимать для себя, но не
          для монтажёров. Перекодировать видео можно с помощью программ{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">Handbrake</mark> или{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/convert_to_prores_shutterencoder.png"
          imgTitle="Конвертируем в ProRes через Shutter Encoder"
          styleClass="figure_macos-dark"
        />
        <p>
          После конвертации перейдите в окно <mark className="ui">Project</mark>, выделите
          нужный исходник, для которого вы хотите заменить файл, нажмите{" "}
          <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="ui">Replace Footage &gt; File</mark>. В открывшемся проводнике
          выберите файл, который вы получили после конвертации в{" "}
          <mark className="app">Shutter Encoder</mark>. При необходимости - проделайте те
          же действия с остальными исходниками, которые были импортированы в ваш проект.
        </p>
        <Divider>Боремся с зелёной заливкой на устройствах с видеокартами AMD</Divider>
        <p>
          Если вы столкнулись с проблемой, когда вместо исходника появляется зеленая
          заливка - попробуйте отключить{" "}
          <mark className="word">аппаратное декодирование</mark> в настройках программы.
          Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Import</mark> и выключите
          галочку <mark className="ui">Enable hardware accelerated decoding</mark> и
          перезагрузите программу. Такое странное поведение часто встречается на
          устройствах с дискретным и встроенным в процессор видеочипом <mark>AMD</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/disable_hardware_accelerated_decoding.png"
          imgTitle="Отключение аппаратного декодирования в настройках"
          styleClass="figure_windows-dark"
        />
        <Divider>Боремся с артефактами из-за драйверов от NVIDIA</Divider>
        <p>
          В некоторых версиях драйверов от <mark>NVIDIA</mark>, не важно какой серии -{" "}
          <mark>Game Ready</mark> или <mark>Studio</mark>, могут выскочить различные
          артефакты. Например может появиться баг, который &quot;полосатит&quot;
          изображение на предпросмотре и при экспорте композиции. Это происходило из-за
          установленной кривой версии драйверов с <mark>55X</mark> до <mark>56X</mark> для
          видеокарт <mark>NVIDIA</mark>. Для решения этой проблемы достаточно обновить
          драйвера на вашу видеокарту, желательно на редакцию{" "}
          <mark>NVIDIA Studio Driver</mark> для более стабильной работы с монтажными
          программами или установить более старые.
        </p>
        <AdditionInfo>
          Загрузить драйвера <mark>NVIDIA Studio</mark> вы можете на{" "}
          <a href="https://www.nvidia.com/en-us/geforce/drivers/">
            официальной странице загрузки драйверов
          </a>
          . На странице укажите текущую модель вашей видеокарты, операционную систему и не
          забудьте указать в <mark className="ui">Download Type</mark> значение{" "}
          <mark>Studio Driver</mark>.
        </AdditionInfo>
        <Divider>Проверяем жёсткий диск, на котором хранится проект</Divider>
        <p>
          В редких случаях артефакты может вызывать кривой жёсткий диск, на котором вы
          храните свой проект. Да, такое может быть, когда у вас либо плохой кабель, к
          которому вы подсоединили свое устройство к диску, либо сам диск битый.
          Попробуйте переместить исходники в другое место, а затем заменить их в проекте и
          посмотреть - не появится ли эта проблема снова.
        </p>
        <Divider>Работаем с импортёром Autokroma Influx вместо стандартного</Divider>
        <p>
          Если вы напрочь отказываетесь от перекодирования исходников по каким-то
          причинам, то вы можете попробовать использовать{" "}
          <mark className="word">принудительное декодирование</mark> файлов через
          сторонний плагин <mark className="plugin">Autokroma Influx</mark>. Он может
          помочь уменьшить вероятность различных глюков и багов исходников, скачанных из
          интернета. Для этого в настройках плагина{" "}
          <mark className="plugin">Autokroma Influx</mark> укажите в параметре{" "}
          <mark className="ui">Formats</mark> значение{" "}
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
          </b>{" "}
          Стабильность работы и хорошая производительность вашего проекта не гарантируется
          - она может улучшиться или наоборот, ухудшиться. Если возникают проблемы с
          проектом, то верните значение в <mark className="ui">Formats</mark> обратно на{" "}
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
          <mark className="plugin">Autokroma Influx</mark> вне зависимости от настройки в{" "}
          <mark className="ui">Formats</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="фотошоп, не появляется окно импорта, не предлагает выбор типа псд"
        title="Почему у меня не получается импортировать .psd по слоям?"
      >
        <p>
          Такое бывает, когда вы сохраняете в <mark className="app">Adobe Photoshop</mark>{" "}
          файл в формате <mark className="file">PSD</mark> в цветовом режиме, отличном от{" "}
          <mark>RGB</mark>. <mark className="app">Adobe After Effects</mark> не понимает
          файлы в <mark>CMYK</mark> или аналогичных режимах, поэтому импортирует файл как
          целый холст без возможности разделения по слоям. Чтобы проверить, в каком режиме
          сохраняется ваш файл, вам нужно открыть его в{" "}
          <mark className="app">Adobe Photoshop</mark> и посмотреть на его заголовок.
        </p>
        <ImageFigure
          caption="Adobe Photoshop"
          imgSrc="images/aftereffects/tab_in_photoshop.png"
          imgTitle="Проверяем цветовой режим в Adobe Photoshop"
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
          caption="Adobe Photoshop"
          imgSrc="images/aftereffects/photoshop_switch_to_rgb.png"
          imgTitle="Переключаем цветовой режим на RGB в Adobe Photoshop"
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
          <mark className="ui">Flatten</mark>. После смены цветового режима цвета могут
          сильно измениться.
        </AdditionWarning>
        <p>
          После изменения цветового режима сохраните <mark className="file">.psd</mark>{" "}
          файл и попробуйте снова импортировать его в{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ImageFigure
          caption="filename.psd"
          imgSrc="images/aftereffects/correct_import_psd.png"
          imgTitle="Корректный импорт PSD в Adobe After Effects"
          styleClass="figure_windows-dark"
        />
        <p>
          Если этот способ вам не помог или вас не устраивают цвета после изменения
          цветового режима, то выведите все слои из{" "}
          <mark className="app">Adobe Photoshop</mark> отдельными файлами. Для этого
          перейдите в <mark className="ui">File &gt; Export</mark> и нажмите на кнопку{" "}
          <mark className="ui">Layers to Files</mark>.
        </p>
        <ImageFigure
          caption="Adobe Photoshop"
          imgSrc="images/aftereffects/photoshop_layers_to_files.png"
          imgTitle="Кнопка для начала экспорта слоёв в файлы"
          styleClass="figure_windows-light"
        />
        <p>
          В открывшемся окне вы можете указать путь для сохранения файлов, название и тип
          файла, в который вы хотите экспортировать слои. После настроек нажмите на{" "}
          <mark className="ui">OK</mark> и ваши слои сохранятся как файлы.
        </p>
        <ImageFigure
          caption="Adobe Photoshop"
          imgSrc="images/aftereffects/photoshop_export_layers.png"
          imgTitle="Экспорт слоёв в файлы"
          styleClass="figure_windows-light"
        />
        <p>
          После экспорта слоёв как отдельные слои, вы сможете их импортировать в{" "}
          <mark className="app">Adobe After Effects</mark> и работать с ними как обычно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="фпс, частота кадров, интерпретация"
        title="Почему когда я импортирую пачку изображений как секвенцию - она выходит короче, длиннее или с неверным FPS?"
      >
        <p>
          При импорте картинок, как секвенция, задаётся фреймрейт, который указан в ваших
          настройках <mark className="app">Adobe After Effects</mark>. Для того, чтобы
          проверить ваши настройки импорта - перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Import</mark> и выберите при
          необходимости в параметре <mark className="ui">Sequence Footage</mark> свою
          частоту кадров. Это значение будет применяться при следующем импорте секвенций
          из картинок.
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
          окне в разделе <mark className="ui">Frame Rate</mark> установите в{" "}
          <mark className="ui">Conform to frame rate</mark> ожидаемое количество кадров в
          секунду.
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
          <mark className="app">Adobe After Effects</mark> при импорте преобразует все
          кадры у видео без учёта пропусков от переменного или дробного FPS. Поэтому и
          получается так, что при импорте такого исходника некоторые дублирующие кадры
          пропускаются и длина исходника в{" "}
          <mark className="app">Adobe After Effects</mark> становится короче, чем в
          видео-проигрывателе.
        </p>
        <p>
          Чтобы исправить эту проблему измените FPS с помощью интерпретации. Для этого
          выделите ваш исходник в окне <mark className="ui">Project</mark> и нажмите на
          комбинацию клавиш <mark className="key">Ctrl + Alt + G</mark>. В открывшемся
          окне в разделе <mark className="ui">Frame Rate</mark> установите в{" "}
          <mark className="ui">Conform to frame rate</mark> ожидаемое количество кадров в
          секунду.
        </p>
        <ImageFigure
          caption="Interpret Footage"
          imgSrc="images/aftereffects/interpret_footage_main.png"
          imgTitle="Интерпретация футажа"
          styleClass="figure_windows-dark"
        />
        <p>
          Если это не помогло, то перекодируйте ваш исходник с постоянным FPS через{" "}
          <mark className="app">Adobe Media Encoder</mark>,{" "}
          <mark className="app">Shutter Encoder</mark> или{" "}
          <mark className="app">Handbrake</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="import premiere pro sequence"
        title="Как импортировать секвенцию из Premiere Pro в композицию After Effects?"
      >
        <p>
          Давайте представим, что вы смонтировали видеоролик в{" "}
          <mark className="app">Adobe Premiere Pro</mark> и теперь хотите перенести его в{" "}
          <mark className="app">Adobe After Effects</mark>. Если вы просто импортируете{" "}
          <mark className="file">.prproj</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + I</mark>, то получите секвенцию, которую нельзя
          редактировать в <mark className="app">Adobe After Effects</mark>. Но мы же
          хотим, чтобы её можно было редактировать, как будто мы действительно
          конвертировали таймлайн из <mark className="app">Adobe Premiere Pro</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>, верно?
        </p>
        <p>
          Поэтому для импорта секвенций из <mark className="app">Adobe Premiere Pro</mark>{" "}
          в <mark className="app">Adobe After Effects</mark> как полноценные композиции в
          программе нужно выбрать{" "}
          <mark className="ui">File &gt; Import &gt; Import Premiere Pro Project</mark> и
          выбрать нужный файл проекта <mark className="app">Adobe Premiere Pro</mark>.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/import_premiere_pro_project.png"
          imgTitle="Начало импорта секвенций из Adobe Premiere Pro"
          styleClass="figure_windows-light"
        />
        <p>
          Далее <mark className="app">Adobe After Effects</mark> спросит, какие секвенции
          нужно импортировать. По умолчанию стоит параметр{" "}
          <mark className="ui">All Sequences</mark>, но вы можете указать конкретную
          секвенцию. Также при желании вы можете отключить импорт аудио-файлов.
        </p>
        <ImageFigure
          caption="Premiere Pro Importer"
          imgSrc="images/aftereffects/premiere_pro_importer.png"
          imgTitle="Импорт секвенций из Adobe Premiere Pro"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого в окне <mark className="ui">Project</mark> появится новая папка с
          названием вашего проекта из <mark className="app">Adobe Premiere Pro</mark>,
          импортированные файлы и новые композиции с нарезками. Некоторые эффекты в силу
          различий двух программ могут не примениться и их нужно будет применить повторно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="3д, элемент 3д, блендер, объемные модели, расширенный 3д, адвансед 3д"
        title="Как я могу импортировать 3D-объекты формата .c4d, .obj или .fbx, .gtlf или .glb в мой проект?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> версиях <mark>24.1</mark> и
          новее появился новый движок рендеринга{" "}
          <mark className="plugin">Advanced 3D</mark>, который позволяет импортировать
          3D-объекты без использования сторонних плагинов. На момент написания этой статьи
          в последней версии можно импортировать <mark className="file">.obj</mark>,{" "}
          <mark className="file">.fbx</mark>, <mark className="file">.gtlf</mark> и{" "}
          <mark className="file">.glb</mark>. Такие модели можно создать в любом
          популярном 3D-редакторе, например <mark className="app">Blender</mark>,{" "}
          <mark className="app">Cinema 4D</mark> или{" "}
          <mark className="app">Substance Painter 3D</mark>.
        </p>
        <AdditionInfo>
          <mark>Adobe</mark> рекомендует использовать формат моделей{" "}
          <mark className="file">.glb</mark>, так как в один файл обычно уже запакованы
          нужные материалы и текстуры.
        </AdditionInfo>
        <YouTubeVideo
          caption="Работаем с 3D-моделями из Substance Painter в Adobe After Effects"
          link="qPOkGR7Ek2I"
        />
        <p>
          Чтобы импортировать проект формата <mark className="file">.c4d</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>, на устройстве должна быть
          установлена полноценная <mark className="app">Cinema 4D</mark>. В противном
          случае программа будет выдавать ошибку и требовать установленную версию{" "}
          <mark className="app">Cinema 4D</mark>.
        </p>
        <YouTubeVideo
          caption="Cineware"
          link="qFVQrxWvOjw"
        />
        <p>
          Если вы используете <mark className="app">Adobe After Effects</mark> версии ниже{" "}
          <mark>24.0</mark>, то вам придется использовать сторонний плагин{" "}
          <mark className="plugin">Element 3D</mark>. Он поддерживает импорт файлов
          формата <mark className="file">.c4d</mark>, <mark className="file">.obj</mark> и{" "}
          <mark className="file">.e3d</mark>.
        </p>
        <AdditionWarning>
          Для импорта <mark className="file">.c4d</mark> файлов требуется установленная
          полноценная версия <mark className="app">Cinema 4D</mark> на вашем устройстве.
        </AdditionWarning>
        <YouTubeVideo
          caption="Element 3D V2 First Look!"
          link="z5nBA45DvRo"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="инфлюкс, без кодирования"
        title="Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой, но перекодировать я их не хочу. Как мне их импортировать?"
      >
        <p>
          <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> изначально не поддерживают
          большое количество кодеков, например <mark className="video">VP9</mark>,{" "}
          <mark className="video">AV1</mark>, а также контейнеры{" "}
          <mark className="file">.webm</mark>, <mark className="file">.flv</mark>,{" "}
          <mark className="file">.mkv</mark> и прочие. Если у вас небольшой проект и нет
          желания заниматься перекодированием исходников, то вы можете попробовать плагин{" "}
          <a href="https://www.autokroma.com/Influx">Autokroma Influx</a>. Он облегчает
          импорт некоторых файлов которые не поддерживаются в{" "}
          <mark className="app">Adobe After Effects</mark>,{" "}
          <mark className="app">Adobe Premiere Pro</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <YouTubeVideo
          caption="Autokroma Influx"
          link="l3zBFli6BIk"
        />
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
          Некоторые пользователи, использующие{" "}
          <mark className="app">Adobe After Effects</mark> на операционных системах{" "}
          <mark>Windows 10 или 11</mark> могут столкнуться с проблемой открытия и импорта
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
            Для скачивания кодека <mark className="image">HEIF/HEIC</mark>.
            <code>https://apps.microsoft.com/9pmmsr1cgpwg</code>
          </li>
          <li>
            Для скачивания кодека <mark className="video">HEVC</mark>.
            <code>https://apps.microsoft.com/9n4wgh0z6vhq</code>
            <AdditionDanger>
              <mark className="app">Adobe After Effects</mark> после установки кодеков все
              ещё не будет импортировать видео с контейнером{" "}
              <mark className="video">HEVC</mark>. То есть если вы попробуете
              импортировать <mark className="video">.hevc</mark> в проект - вам скажут,
              что такой файл не поддерживается. Чтобы это исправить - попробуйте
              переименовать ваше видео в <mark className="video">.mp4</mark> или
              перекодируйте видео в другой кодек через{" "}
              <mark className="app">Shutter Encoder</mark>.
            </AdditionDanger>
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
        tag="открыть могрт, import mogrt, aeproject"
        title="Как открыть анимационный шаблон формата .mogrt и импортировать в свой проект?"
      >
        <p>
          Шаблоны анимации в формате <mark className="file">.mogrt</mark> обычно создаются
          в <mark className="app">Adobe After Effects</mark> и используется позже в
          проектах <mark className="app">Adobe Premiere Pro</mark>. Но при необходимости
          такие файлы можно распаковать обратно и использовать в своих композициях{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <Divider>Открываем .mogrt как проект</Divider>
        <p>
          Чтобы открыть шаблон формата <mark className="file">.mogrt</mark> - нужно
          открыть окно открытия проекта с помощью{" "}
          <mark className="ui">File &gt; Open Project</mark> или{" "}
          <mark className="key">Ctrl + O</mark>. В открывшемся окне проводника выберите
          нужный файл <mark className="file">.mogrt</mark>, а затем укажите папку, куда
          нужно распаковать этот проект и нажмите на <mark className="ui">Extract</mark>.
          После этого <mark className="app">Adobe After Effects</mark> конвертирует{" "}
          <mark className="file">.mogrt</mark> шаблон как отдельный проект и сохранит его
          в указанной папке.
        </p>
        <AdditionWarning>
          Через <mark className="ui">File &gt; Import</mark> такие шаблоны импортировать в
          проект не получится - будет выдавать ошибку неподдерживаемого файла.
        </AdditionWarning>
        <p>
          Чтобы начать редактировать такой шаблон, откройте нужную композицию в окне{" "}
          <mark className="ui">Project</mark>, а затем откройте окно{" "}
          <mark className="ui">Essential Graphics</mark> с помощью{" "}
          <mark className="ui">Composition &gt; Open in Essential Graphics</mark>. В этом
          же окне вы можете обратно запаковать проект в{" "}
          <mark className="file">.mogrt</mark> после нужных правок.
        </p>
        {/* TODO: приложить скриншот */}
        <Divider>Используем .mogrt в другом проекте</Divider>
        <p>
          Так как с помощью <mark className="ui">Open Project</mark> мы конвертировали
          анимацию формата <mark className="file">.mogrt</mark> в{" "}
          <mark className="file">.aep</mark> - его можно будет спокойно применять в своих
          проектах с помощью импорта композиций через{" "}
          <mark className="ui">File &gt; Import</mark> или комбинации клавиш{" "}
          <mark className="key">Ctrl + I</mark>. В открывшемся окне импорта нужно указать{" "}
          <mark className="file">.aep</mark> файл в директории, в которую изначально был
          распакован <mark className="ui">.mogrt</mark> файл из предыдущих действий.
          Импортированные композиции появятся в окне <mark className="ui">Project</mark> и
          редактировать такие анимационные шаблоны можно также через{" "}
          <mark className="ui">Composition &gt; Open in Essential Graphics</mark> или
          ручным ковырянием слоёв.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="телеграм, стикеры, тгс, tgs"
        title="Как импортировать анимированный стикер из Telegram как композицию?"
      >
        <p>
          С ростом популярности различных стикеров в мессенджере{" "}
          <mark className="app">Telegram</mark> у пользователей возникает желание
          импортировать анимированные стикеры в{" "}
          <mark className="app">Adobe After Effects</mark> и использовать их в проекте.
          Особенно это заметно у рилсомейкеров, которые применяют стандартные
          анимированные эмодзи в своих проектах. Стикеры из{" "}
          <mark className="app">Telegram</mark> можно загрузить на ваше устройство с
          помощью десктопного клиента (веб-версия не подойдет), нажав{" "}
          <mark className="key">ПКМ</mark> по отправленному стикеру в чат и выбрать в
          контекстном меню <mark className="ui">Сохранить как</mark>.
        </p>
        <ImageFigure
          caption="Telegram"
          imgSrc="images/download_tgs_from_telegram.png"
          imgTitle="Сохранить стикер как .tgs"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Большинство стандартных анимированных эмодзи можно найти в различных
          стикер-паках, например{" "}
          <a href="https://t.me/addstickers/AnimatedEmojies">тут</a>.
        </AdditionInfo>
        <p>
          После того как вы получили <mark className="file">.tgs</mark> - его нужно
          переконвертировать в <mark className="file">.json</mark>. Сделать это вы можете
          с помощью конвертера ниже, предоставив ему файл. После успешной конвертации не
          забудьте скачать файл, а затем выберите один из способов импорта в{" "}
          <mark className="app">Adobe After Effects</mark> - через{" "}
          <mark className="plugin">LottieFiles</mark> или{" "}
          <mark className="plugin">Bodymovin</mark>.
        </p>
        <AdditionDanger>
          Учтите, что в силу особенностей импорта <mark className="file">.json</mark>{" "}
          файлов - некоторые элементы анимации могут импортироваться некорректно.
        </AdditionDanger>
        <Divider>Конвертер TGS в JSON</Divider>
        <TgsToJsonConverter />
        <Divider>Импортируем через LottieFiles</Divider>
        <p>
          <mark className="plugin">LottieFiles for After Effects</mark> - официальное
          бесплатное<sup>*</sup> расширение от{" "}
          <a href="https://lottiefiles.com/">LottieFiles</a>, с помощью которого вы можете
          импортировать <mark className="file">.json</mark> анимацию в композицию{" "}
          <mark className="app">Adobe After Effects</mark>. Скачать его можно на из{" "}
          <a href="https://aescripts.com/lottiefiles/">aescripts</a>. После установки
          расширение появится в <mark className="ui">Window &gt; Extensions</mark>. При
          открытии вам понадобится войти в аккаунт <mark>LottieFiles</mark> для того,
          чтобы вы могли работать с этим расширением.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Для пользователей с РФ, возможно, нужно будет использовать{" "}
              <mark className="app">VPN</mark> для успешного входа в аккаунт. После
              авторизации его можно будет отключить.
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
            <li>
              <sup>*</sup>Чтобы скачать расширение - зарегистрируйтесь на сайте{" "}
              <a href="https://aescripts.com">aescripts</a>, добавьте расширение в корзину
              и подтвердите заказ. Нужный плагин появится{" "}
              <a href="https://aescripts.com/downloadable/customer/products/">
                в вашем профиле
              </a>{" "}
              и вы можете его скачать абсолютно бесплатно.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          После успешного входа в аккаунт - перейдите во вкладку{" "}
          <mark className="ui">Import</mark> в расширении и нажмите на кнопку{" "}
          <mark className="ui">Browse</mark> для выбора вашего{" "}
          <mark className="file">.json</mark> файла. Расширение начнёт конвертацию и
          создаст новую композицию с вашей анимацией, которую вы можете использовать
          дальше в своих проектах.
        </p>
        <ImageFigure
          caption="LottieFiles"
          imgSrc="images/aftereffects/import_lottiefiles.png"
          imgTitle="Импорт с помощью расширения LottieFiles"
          styleClass="figure_windows-dark"
        />
        <Divider>Импортируем через Bodymovin</Divider>
        <AdditionWarning>
          При импорте стикеров через <mark className="plugin">Bodymovin</mark> в некоторых
          случаях вам нужно будет пересоздать градиенты вручную. Обычно в окне плагина для
          импорта вам скажут, какие градиенты нужно пересоздать и с какими данными.
        </AdditionWarning>
        <p>
          <mark className="plugin">Bodymovin</mark> - альтернативное бесплатное
          <sup>*</sup> расширение из{" "}
          <a href="https://aescripts.com/bodymovin/">aescripts</a>, которое можно
          установить его в <mark className="app">Adobe After Effects</mark>. После
          установки он будет находиться в{" "}
          <mark className="ui">Window &gt; Extensions</mark>.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              <sup>*</sup>Чтобы скачать расширение - зарегистрируйтесь на сайте{" "}
              <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с
              плагином, установите цену <mark>0</mark> в{" "}
              <mark className="ui">Name Your Own Price</mark>, добавьте его в корзину и
              подтвердите заказ. Нужный плагин появится{" "}
              <a href="https://aescripts.com/downloadable/customer/products/">
                в вашем профиле
              </a>{" "}
              и вы можете его скачать абсолютно бесплатно.
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
        </AdditionInfo>
        <p>
          После открытия расширения <mark className="plugin">Bodymovin</mark> - перейдите
          во вкладку <mark className="ui">Import Lottie Animation</mark> и нажмите на
          кнопку <mark className="ui">Import Local File</mark>. В открытом окне проводника
          выберите нужный файл формата <mark className="file">.json</mark>, который был
          конвертирован ранее.
        </p>
        <ImageFigure
          caption="Bodymovin"
          imgSrc="images/aftereffects/bodymovin_import_json.png"
          imgTitle="Импортируем .json в After Effects через Bodymovin"
          styleClass="figure_windows-dark"
        />
        <p>
          Импорт <mark className="file">.json</mark> в{" "}
          <mark className="app">Adobe After Effects</mark> может занять некоторое время.
          После импорта у вас появится новая композиция в окне{" "}
          <mark className="ui">Project</mark>. В некоторых случаях импортирование может
          пройти с некоторыми нюансами, например без корректно импортированных градиентов.
          Благо плагин даёт информацию что вставлять и какие данные, но вставка занимает
          довольно долгое время, поэтому увы без этого никуда.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
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
        tag="требуется преобразовать данный проект из версии XX.X.X (Windows/macOS). исходный файл останется без изменений"
        title='"This project must be converted from version XX.X.X (Windows/macOS). The original file will be unchanged" при открытии проекта'
      >
        <p>
          Данное сообщение указывает на то, что вы открыли проект, который был создан в
          более ранней версии <mark className="app">Adobe After Effects</mark> в более
          свежей версии программы. В этом случае{" "}
          <mark className="app">Adobe After Effects</mark> автоматически конвертирует
          исходный файл проекта, чтобы обеспечить совместимость с вашей версией программы.
          При этом оригинальный файл проекта останется неизменным и не будет подвергнут
          никаким изменениям.
        </p>
        <AdditionWarning>
          После конвертации файла проекта программой - не забудьте сохранить проект с
          помощью комбинации клавиш <mark className="key">Ctrl + S</mark>, иначе ваши
          правки не будут сохранены автоматически.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title='"The file you are attempting to open was created with After Effects version XX.X.X (Windows/macOS) and cannot be opened with this version" при открытии проекта. Как открыть чужой проект, если я не хочу обновляться?'>
        <p>
          Скорее всего вы пытаетесь открыть проект, который был создан в более поздней
          версии <mark className="app">Adobe After Effects</mark>, чем та, что у вас
          установлена. В таком случае у вас есть два возможных варианта решения этой
          проблемы - попросить какого-нибудь пользователя, который использует более новую
          версию программы, сохранить проект в более старом формате, или же обновить{" "}
          <mark className="app">Adobe After Effects</mark> до актуальной версии. Второй
          способ выполнить гораздо проще и быстрее - не поленитесь потратить лишний час на
          установку новой версии <mark className="app">Adobe After Effects</mark> и{" "}
          <a href="#4.3">перенос настроек с плагинами</a>.{" "}
          <i style={{opacity: "0.5"}}>
            Вы себе потом спасибо скажете, если часто работаете с чужими проектами.
          </i>
        </p>
        <AdditionWarning>
          <ul>
            <li>
              Обратите внимание, что новые версии{" "}
              <mark className="app">Adobe After Effects</mark> уже не позволяют сохранять
              проекты для версий программы <mark>18.X</mark> или <mark>22.X</mark>. В
              таком случае потребуется установить несколько версий программы на вашем
              устройстве и поочередно конвертировать проект через каждую версию.
            </li>
            <li>
              После сохранения проекта в старом формате - часть функций или эффектов,
              добавленные в проект более новой версии{" "}
              <mark className="app">Adobe After Effects</mark>, могут работать некорректно
              или вовсе не поддерживаться в вашей старой версии программы.
            </li>
          </ul>
        </AdditionWarning>
        <Divider>Конвертируем проект для старой версии After Effects</Divider>
        <p>
          Для конвертации проекта в формат более старой версии{" "}
          <mark className="app">Adobe After Effects</mark> откройте{" "}
          <mark className="ui">File</mark>, выберите <mark className="ui">Save As</mark>,
          а затем нажмите на нужную вам версию в списке. Во время сохранения копии
          программа спросит, в какую директорию сохранить конвертированный проект и
          нажмите на <mark className="ui">ОК</mark>.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/file_save_as.png"
          imgTitle="Сохранение проекта под более старую версию"
          styleClass="figure_windows-light"
        />
        <p>
          После конвертации откройте сохранённый файл проекта в старой версии{" "}
          <mark className="app">Adobe After Effects</mark>. Рекомендуется сохранять
          конвертированный проект в ту же папку, где находится исходный файл, чтобы
          избежать проблем с путями к исходниками.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="отсутствует файлов с момента последнего сохранения проекта, реконнект, потерялись файлы, ошибка импорта, linking, missing files"
        title='При открытии проекта выскакивает "Warning: files are missing since you last saved project", а вместо клипов - цветовая палитра. Как я могу переподключить исходники?'
      >
        <p>
          Причин, почему это предупреждение появляется при открытии проекта, может быть
          несколько - это может быть нераспакованный полностью архив, перемещенный файл
          проекта или переместились исходники.
        </p>
        <Divider>Правильно распаковываем архив с чужим проектом</Divider>
        <p>
          Если вы собираетесь открыть чужой проект или шаблон - убедитесь, что архив с
          проектом был{" "}
          <u>
            <b>полностью распакован</b>
          </u>{" "}
          и вы{" "}
          <u>
            <b>не запускаете его напрямую из архива</b>
          </u>
          . Если открыть проект прямо из архива, то в таком случае будет извлечён только
          файл <mark className="ui">.aep</mark> в временную папку вашей операционной
          системы, а все остальные материалы - нет и останутся недоступными в{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ContentSwitcher
          macContent={
            <div>
              <p>
                Для корректного открытия чужого проекта - распакуйте полностью архив, а
                затем зайдите в распакованную директорию и откройте{" "}
                <mark className="file">.aep</mark> проект оттуда.
              </p>
              <ImageFigure
                caption="Распаковка через контекстное меню"
                imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                imgTitle="Распаковка через контекстное меню"
                styleClass="figure_macos-light"
              />
            </div>
          }
          windowsContent={
            <div>
              <p>
                Для корректного открытия чужого проекта - распакуйте полностью архив, а
                затем зайдите в распакованную директорию и откройте{" "}
                <mark className="file">.aep</mark> проект оттуда.
              </p>
              <YouTubeVideo
                caption="Распаковка многотомного архива"
                link="1OVwQS0uHhk"
              />
            </div>
          }
        />
        <Divider>
          Восстанавливаем путь к исходникам после перемещения или переименования файлов
        </Divider>
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
          Если вы потеряли 10 исходников, но все они лежали в одной папке или в подпапках
          одной папки, то при присоединении одного - подключатся и остальные.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="импорт из иллюстратора, градиенты"
        title="Как перенести макет из Illustrator в After Effects по слоям и с градиентами?"
      >
        <p>
          Предположим, что у вас возникла необходимость перенести файл формата{" "}
          <mark className="file">.ai</mark>. Да,{" "}
          <mark className="app">Adobe After Effects</mark> предоставляет такую
          возможность. Однако, стоит отметить, что при работе с большинством проектов,
          созданных в <mark className="app">Adobe Illustrator</mark>, вы можете
          столкнуться с тем, что количество доступных слоёв будет ограничено. Это связано
          с тем, что в процессе создания макета несколько шейпов часто объединяются в один
          слой.
        </p>
        <p>
          Если вы не собираетесь редактировать импортированные фигуры в{" "}
          <mark className="app">Adobe After Effects</mark> для более детальной анимации,
          то вручную пересоздавать градиенты не нужно. Но, как сказано ранее - в некоторых
          проектах из <mark className="app">Adobe Illustrator</mark> фигуры могут
          объединяться. Для этого нам нужно в самом{" "}
          <mark className="app">Adobe Illustrator</mark> разбить все или только
          необходимые фигуры на отдельные слои.
        </p>
        <VideoFigure
          caption="Разбиваем слои в Illustrator"
          styleClass="figure_windows-light"
          videoSrc="images/manual_explode_layer_illustrator.mp4"
        />
        <p>
          Затем после разбивки слоёв, сохраните проект в{" "}
          <mark className="app">Adobe Illustrator</mark> как{" "}
          <mark className="file">.ai</mark>. После этого, начните импорт{" "}
          <mark className="file">.ai</mark> файла в{" "}
          <mark className="app">Adobe After Effects</mark> как обычно и выберите тип
          импорта как композиция. Также вы можете выбрать размер слоёв в{" "}
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
          После импорта вы получите в <mark className="app">Adobe After Effects</mark>{" "}
          слои с градиентами. Их вы не сможете редактировать как обычную фигуру, но их
          можно сделать &quot;как бы векторными&quot;, включив у слоёв{" "}
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
              <mark className="app">Adobe After Effects</mark> не работает так и не может
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
          <mark className="app">Adobe Illustrator</mark> обычно не взаимозаменяемые с
          градиентами из <mark className="app">Adobe After Effects</mark> и их нужно будет
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
          причине жадности, поэтому в этой статье ограничимся лишь плагином
          <mark className="plugin">AEUX</mark>, который можно загрузить на странице
          релизов в <a href="https://github.com/google/AEUX/releases">GitHub</a>. Плагин
          нужно установить в <mark className="app">Adobe After Effects</mark> и в{" "}
          <b>
            <u>десктопную версию</u>
          </b>{" "}
          <mark className="app">Figma</mark>.
        </AdditionInfo>
        <p>
          Плагин для <mark className="app">Adobe After Effects</mark> распространяется в
          формате <mark className="file">.zxp</mark>, поэтому можно его установить как
          через <a href="https://updates.aescripts.com/zxp-installer/">ZXP Installer</a>,
          так и через ручную установку.
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
          Чтобы начать отправку проекта в <mark className="app">Adobe After Effects</mark>
          , нужно выделить нужные слои из макета и нажать на кнопку{" "}
          <mark className="ui">Send selection to AE</mark>.
        </p>
        <AdditionWarning>
          <mark className="app">Adobe After Effects</mark> перед нажатием на кнопку
          переноса макета из <mark className="app">Figma</mark> должен быть запущен, иначе
          выбьет ошибку.
        </AdditionWarning>
        <VideoFigure
          caption="Figma"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/send_figma_to_ae.mp4"
        />
        <p>
          После нажатия на кнопку переноса - у вас откроется{" "}
          <mark className="app">Adobe After Effects</mark> и предложит куда сохранить
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
