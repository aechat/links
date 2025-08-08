import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ContentFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import ContentFilter from "../../../components/features/ContentFilter";

import TgsToJsonConverter from "../../../components/features/ConverterTgsToJson";

import CodeSnippet from "../../../components/features/CodeSnippet";

const ProjectStructureExample = `Обзор на Ford Focus 2
├── Video
│   ├── Car_Broll             // общие кадры автомобиля (езды, экстерьер, интерьер)
│   ├── Talking_Head          // блогер в кадре
│   ├── Screen_Recordings     // съёмки с экрана (сравнения, сайты, реклама)
│   └── Phone_Footage         // вертикальные видео, снятые на смартфон
├── Proxy                     // прокси-файлы (при необходимости)
├── Audio
│   ├── Voiceover             // озвучка, записанная отдельно
│   ├── Music                 // фоновая музыка
│   └── SFX                   // звуковые эффекты: щелчки, шум шин, рев мотора
├── Images
│   ├── Diagrams              // технические схемы, инфографика
│   ├── Screenshots           // скриншоты с сайтов, приложений
│   └── Memes                 // мемы и вставки для юмора
├── Export
│   ├── Previews              // превью для согласования
│   ├── Final                 // финальные рендеры
│   └── Shorts                // вертикальные версии и клипы для соцсетей
├── техническое задание.docx
├── сценарий.docx
├── project.prproj            // если вдруг пригодится Premiere Pro для сборки и нарезки клипов
└── project.aep               // главный проект After Effects`;

const AEImport: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="пайплайн, импорт, конвертация, монтажный кодек, шаттер енкодер, видео из айфона"
        title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?"
      >
        <p>
          Предположим, вы приняли заказ, получили исходники и приступили к работе. Но со
          временем у вас может возникнуть множество вопросов об исходниках, стабильности
          работы и организации проекта.
        </p>
        <Divider>Организация исходников</Divider>
        <p>
          Прежде чем импортировать файлы в{" "}
          <mark className="app">Adobe After Effects</mark> и создавать композиции,
          перенесите все исходники в отдельную папку или на отдельный диск — не храните их
          на рабочем столе или в системных директориях. Избегайте названий папок и файлов
          на кириллице — используйте латиницу. Это упростит работу с большим количеством
          материала и избавит от необходимости искать нужные файлы по разным местам, а
          также избавит вас от необходимости выполнять{" "}
          <mark className="select">«Collect Files»</mark> для передачи или архивации
          проекта.
        </p>
        <p>
          Структура проекта может выглядеть примерно так — многое зависит от ваших задач и
          предпочтений. Главное — чтобы все файлы для монтажа были собраны в одном месте и
          всегда под рукой.
        </p>
        <CodeSnippet language="shell">{ProjectStructureExample}</CodeSnippet>
        <Divider>Проверяем исходники</Divider>
        <p>
          После первичной сортировки стоит узнать об исходниках подробнее: в каком кодеке
          и контейнере они сохранены, в каком цветовом пространстве записаны, какова
          частота кадров и другие технические параметры. Для этого можно воспользоваться
          онлайн-сервисом{" "}
          <a href="https://mediaarea.net/MediaInfoOnline">MediaInfo Online</a> или его
          локальной версией <a href="https://mediaarea.net/en/MediaInfo">MediaInfo</a>,
          доступной для многих операционных систем.
        </p>
        <Addition type="info">
          Для подробного отображения информации в <mark className="app">MediaInfo</mark>{" "}
          используйте вид <mark className="select">«View» → «Tree»</mark> (
          <mark className="select">«Вид» → «Дерево»</mark> в русской версии) или
          воспользуйтесь консольной версией программы —{" "}
          <mark className="app">MediaInfo-CLI</mark>.
        </Addition>
        <p>
          Самыми проблемными аспектами у исходников являются кодек, цветовое пространство
          и режим частоты кадров.
        </p>
        <ul>
          <li>
            Почему <mark className="word">кодек</mark> имеет значение? Некоторые кодеки
            сильно сжимают видео, экономя место на диске, но при этом создают высокую
            нагрузку на процессор при воспроизведении и редактировании. В итоге могут
            возникать проблемы с просмотром материала в программах для монтажа, а иногда —
            и визуальные артефакты. Для более плавной и комфортной работы лучше
            использовать <mark className="video">монтажные кодеки</mark>: они менее сжаты,
            занимают больше места на диске, но зато значительно упрощают редактирование и
            позволяют воспроизводить видео без задержек и подвисаний. Эти кодеки созданы
            специально для монтажа и постобработки — в отличие от форматов, рассчитанных
            на хранение или загрузку в интернет, — и помогают избежать «тормозов» и сбоев
            при работе с видеофайлами.
            <ContentFigure
              caption="Почему некоторые футажи так сложны в редактировании"
              src="cfz3jwdo1v0"
              type="youtube"
            />
          </li>
          <li>
            Почему <mark className="word">цветовое пространство</mark>? Хоть это и меньшее
            из всех зол, некоторые футажи могут иметь пространство, отличное от привычного{" "}
            <mark>Rec.709</mark>. Например, <mark>iPhone</mark> без предварительных
            настроек пишет видео в <mark>Rec.2020</mark>. На экране смартфона такое видео
            будет казаться нормальным, а в{" "}
            <mark className="app">Adobe After Effects</mark>, если включён цветовой
            профиль, — пересвеченным. Чтобы это исправить, нужно преобразовать исходник в
            цветовое пространство <mark>Rec.709</mark> для привычной работы.
            <ContentFigure
              caption="Цветовые пространства: Базовые знания простым языком"
              src="vlFdAqoriL0"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Что такое <mark className="word">режим частоты кадров</mark> и почему он
              может вызывать проблемы? Многие смартфоны и камеры записывают видео с
              переменной частотой кадров — даже если в настройках указано{" "}
              <mark>60 к/с</mark>, на деле частота может снижаться до <mark>30</mark> или{" "}
              <mark>25</mark> кадров в секунду — в зависимости от условий съёмки и
              алгоритмов устройства. Причиной может быть перегрев, слабое освещение или
              другие факторы. Такие перепады{" "}
              <mark className="app">Adobe After Effects</mark> переносит плохо: кадры
              могут дублироваться или перемешиваться, а алгоритмы — например, трекинг
              объекта — работать с ошибками. Чтобы этого избежать, видео стоит
              предварительно конвертировать<sup>1</sup> в постоянную частоту кадров,
              например через <mark className="app">Shutter Encoder</mark> или{" "}
              <mark className="app">HandBrake</mark>.
            </p>
            <Addition type="warning">
              <sup>1</sup> Не путайте конвертацию с интерпретацией через{" "}
              <mark className="select">
                «Interpret Footage» → «Conform to frame rate»
              </mark>
              . Если задать частоту вручную через это окно, скорость воспроизведения
              изменится — ролик станет быстрее или медленнее, в зависимости от настроек.
            </Addition>
            <Addition type="info">
              Видео, представленное ниже, было записано с учётом работы в{" "}
              <mark className="app">Adobe Premiere Pro</mark>, однако многие тезисы вполне
              подходят и для <mark className="app">Adobe After Effects</mark>. Параметры{" "}
              <mark className="select">«Preserve Audio Sync»</mark> и{" "}
              <mark className="select">«Smooth Video Motion»</mark> для адаптации видео с
              переменной частотой кадров находятся в{" "}
              <mark className="select">«Interpret Footage» → «More Options»</mark>.
            </Addition>
            <ContentFigure
              caption="Разбираемся с переменной частотой кадров"
              src="vzh-41y1gxQ"
              type="youtube"
            />
            <p>
              Кроме того, при импорте футажей с разной частотой кадров кадры могут
              повторяться — это приводит к прерывистому, «дёрганому» видео. Убедитесь, что
              частота кадров проекта совпадает с частотой исходников. Проверить это можно
              в окне <mark className="select">«Project»</mark>, в столбце{" "}
              <mark className="select">«Frame Rate»</mark>.
            </p>
            <ContentFigure
              caption="Как несовпадение частоты кадров портит ваше видео"
              src="p3Jb3UPAw-w"
              type="youtube"
            />
          </li>
        </ul>
        <p>
          На скриншоте ниже — метаданные видео, снятого на <mark>iPhone</mark>, в котором
          собрались почти все описанные выше проблемы. Сам по себе кодек не так страшен —
          большинство программ для монтажа его поддерживают, — но не каждое железо
          способно «прожевать» его без проблем. Гораздо чаще проблемы вызывает переменная
          частота кадров: она может интерпретироваться с ошибками или мешать стабильному
          воспроизведению. Ещё один важный момент — цветовое пространство. Большинство
          мониторов работают в <mark>Rec.709</mark>, тогда как исходник может быть в{" "}
          <mark>Rec.2020</mark>. При включённом{" "}
          <mark className="select">«Color Management»</mark> такое несоответствие может
          привести к выжженным или пересвеченным цветам.
        </p>
        <ContentFigure
          caption="Терминал - MediaInfo-CLI"
          imgTitle="Пример открытого в MediaInfo файла"
          src="images/mediainfo_example.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Конвертируем материалы в рабочие форматы</Divider>
        <p>
          Чтобы перекодировать исходники в <mark className="video">монтажный кодек</mark>{" "}
          или привести в порядок другие свойства, установите и запустите программу для
          конвертации файлов — для этого подойдёт <mark className="app">Handbrake</mark>,{" "}
          <mark className="app">Format Factory</mark>, <mark className="app">VLC</mark>{" "}
          или любая другая. В этой статье используется{" "}
          <mark className="app">Shutter Encoder</mark> — бесплатный и надёжный конвертер
          видео, аудио и изображений с открытым исходным кодом, работающий на базе{" "}
          <mark className="app">FFmpeg</mark> и поддерживающий большое количество
          форматов. Скачать его можно{" "}
          <a href="https://www.shutterencoder.com/">по этой ссылке</a>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Чтобы скачать программу бесплатно, на сайте установите ползунок{" "}
              <mark className="select">
                «It helps me to pay for the server & the domain»
              </mark>{" "}
              на ноль, а затем нажмите на кнопку скачивания для вашей операционной
              системы.
            </li>
            <li>
              Рекомендуется использовать английский интерфейс программы — в русской
              локализации встречаются некорректные переводы, которые могут сбить вас с
              толку. Чтобы сменить язык, откройте настройки программы, нажав на иконку{" "}
              <mark className="select">«шестерёнки»</mark> в левом верхнем углу. В
              открывшемся окне найдите параметр{" "}
              <mark className="select">«Установить язык»</mark>, измените его значение на{" "}
              <mark className="select">«English»</mark> и подтвердите перезапуск.
            </li>
          </ul>
        </Addition>
        <p>
          На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
          показаться запутанным и сложным, но на самом деле это не так. Для
          перекодирования исходников пользователю нужно выполнить всего несколько
          действий.
        </p>
        <ul>
          <li>
            Первым делом импортируйте в программу исходники или целую папку с помощью
            кнопки <mark className="select">«Browse»</mark> или перетащите их в окно
            программы для добавления в очередь.
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
            Затем выберите в <mark className="select">«Choose Function»</mark> нужный
            формат для конвертации, например <mark className="video">Apple ProRes</mark>{" "}
            или <mark className="video">H.264</mark>. Изменение данного параметра будет
            относиться ко всем файлам в очереди конвертации.
            <ContentFigure
              caption="Shutter Encoder"
              imgTitle="Выбор кодека в Shutter Encoder"
              src="images/shutter_encoder_choose_function.png"
              theme="dark"
              type="image"
              variant="mac"
            />
            <ul>
              <li>
                Если вы выбрали <mark className="video">Apple ProRes</mark> — нужно
                выбрать его тип: <mark className="video">Apple ProRes 422</mark> или{" "}
                <mark className="video">Apple ProRes 4444</mark>, а также его подвид.
                <ContentFigure
                  caption="Shutter Encoder"
                  imgTitle="Выбор типа Apple Prores в Shutter Encoder"
                  src="images/shutter_encoder_select_type_prores.png"
                  theme="dark"
                  type="image"
                  variant="mac"
                />
                <Addition type="info">
                  Если вы конвертируете исходник, снятый на свежие <mark>iPhone</mark>, —
                  отключите вторую аудиодорожку во вкладке{" "}
                  <mark className="select">«Audio Settings»</mark>, иначе при нажатии на{" "}
                  <mark className="select">«Start function»</mark> вы можете столкнуться с
                  ошибкой{" "}
                  <mark className="warning">
                    «Error opening output files: Invalid argument»
                  </mark>
                  .
                  <ContentFigure
                    caption="Shutter Encoder"
                    imgTitle="Отключаем проблемную аудиодорожку в Shutter Encoder"
                    src="images/shutter_encoder_disable_second_audio.png"
                    theme="dark"
                    type="image"
                    variant="mac"
                  />
                </Addition>
              </li>
              <li>
                Если вы выбрали <mark className="video">H.264</mark> или{" "}
                <mark className="video">H.265</mark>, то для этого формата потребуется
                выполнить ещё несколько действий.
                <Addition type="warning">
                  Учтите, что <mark className="video">H.264</mark> и{" "}
                  <mark className="video">H.265</mark> не являются{" "}
                  <mark className="video">монтажными кодеками</mark>, и использовать их в
                  работе в <mark className="app">Adobe After Effects</mark> не
                  рекомендуется из-за их непредсказуемого поведения.
                </Addition>
                <ul>
                  <li>
                    Измените тип кодирования, переключив его с{" "}
                    <mark className="select">«VBR»</mark> на{" "}
                    <mark className="select">«CQ»</mark>. Почему не{" "}
                    <mark className="select">«VBR»</mark> и не{" "}
                    <mark className="select">«CBR»</mark>? Режим{" "}
                    <mark className="select">«CQ»</mark> распределяет битрейт динамически
                    в зависимости от сложности сцены и поддерживает стабильное качество на
                    всём протяжении ролика. В то время как{" "}
                    <mark className="select">«VBR»</mark> требует настройки целевого и
                    максимального битрейта, подобрать которые с первого раза непросто,
                    особенно если важно сохранить высокое качество и при этом не получить
                    слишком тяжёлый файл. А <mark className="select">«CBR»</mark> нередко
                    приводит к «раздутому» размеру файла и не гарантирует стабильное
                    качество в разных промежутках видео.
                    <ContentFigure
                      caption="Shutter Encoder"
                      src="images/shutter_encoder_change_cq_h264.mp4"
                      theme="dark"
                      type="video"
                      variant="mac"
                    />
                    <Addition type="info">
                      <ul>
                        <li>
                          Чем меньше значение <mark className="select">«CQ»</mark>, тем
                          лучше качество. По умолчанию устанавливается <mark>23</mark> —
                          этого достаточно для большинства случаев.
                        </li>
                        <li>
                          Если нужно сохранить почти максимальное качество, укажите
                          значение от <mark>17</mark> до <mark>20</mark>. Однако размер
                          файла при этом заметно возрастёт.
                        </li>
                        <li>
                          Экстремальные значения (например, <mark>50</mark>) использовать
                          не рекомендуется — в итоге можно получить «кашу» из пикселей.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    Укажите битрейт для аудио в параметре{" "}
                    <mark className="select">«Audio Bitrate»</mark>; достаточно установить
                    значение <mark>320</mark> Кбит/с.
                    <ContentFigure
                      caption="Shutter Encoder"
                      src="images/shutter_encoder_change_audio_bitrate_h264.mp4"
                      theme="dark"
                      type="video"
                      variant="mac"
                    />
                  </li>
                  <li>
                    При необходимости включите аппаратное ускорение для декодирования
                    видео в параметре{" "}
                    <mark className="select">«Hardware Acceleration»</mark>. В большинстве
                    случаев это ускорит процесс конвертации видео.
                    <ContentFigure
                      caption="Shutter Encoder"
                      imgTitle="Включение аппаратного ускорения для H.264 в Shutter Encoder"
                      src="images/shutter_encoder_enable_hardware_acceleration_h264.png"
                      theme="dark"
                      type="image"
                      variant="mac"
                    />
                    <Addition type="info">
                      Выбор значений в этом параметре зависит от вашего устройства и
                      установленных драйверов.
                    </Addition>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            При необходимости конвертируйте цветовое пространство во вкладке{" "}
            <mark className="select">«Colorimetry»</mark>, если оно отличается от{" "}
            <mark>Rec.709</mark>. Цветовое пространство исходника можно узнать через{" "}
            <mark className="app">MediaInfo</mark>.
            <Addition type="warning">
              Цвета после конвертации из одного цветового пространства в другое могут
              незначительно измениться.
            </Addition>
            <ContentFigure
              caption="Shutter Encoder"
              src="images/shutter_encoder_convert_colorspace.mp4"
              theme="dark"
              type="video"
              variant="mac"
            />
          </li>
          <li>
            При необходимости преобразуйте переменную частоту кадров в постоянную. Это
            можно сделать во вкладке <mark className="select">«Advanced features»</mark>.
            <ContentFigure
              caption="Shutter Encoder"
              src="images/shutter_encoder_convert_to_constant_fps.mp4"
              theme="dark"
              type="video"
              variant="mac"
            />
          </li>
          <li>
            После настройки нужных параметров нажмите на кнопку{" "}
            <mark className="select">«Start function»</mark> для начала конвертации. По
            умолчанию программа сохраняет конвертированные файлы в ту же папку, откуда
            были импортированы исходники.
            <ContentFigure
              caption="Shutter Encoder"
              imgTitle="Начало конвертации в Shutter Encoder"
              src="images/shutter_encoder_start_function.png"
              theme="dark"
              type="image"
              variant="mac"
            />
            <Addition type="info">
              <ul>
                <li>
                  Если в программу добавлено несколько исходников, они будут
                  конвертированы последовательно в соответствии с вашими настройками.
                </li>
                <li>
                  При необходимости вы можете указать свою директорию для сохранения
                  файлов во вкладке <mark className="select">«Output»</mark>.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <p>
          <mark className="app">Shutter Encoder</mark> поддерживает шаблоны настроек для
          повторного использования. Если не хочется каждый раз вручную выбирать параметры,
          можно создать собственный шаблон или взять готовые из{" "}
          <a href="https://github.com/aechat/links/tree/main/public/files/shutterencoder_templates">
            репозитория этого сайта на GitHub
          </a>{" "}
          и импортировать его через окно <mark className="select">«My functions»</mark>.
        </p>
        {/* TODO: написать про шаблоны кодирования в shutter encoder, как их применять и импортировать а также как их сохранять (да они есть такие вроде как) */}
        <Divider>Импортируем материалы в программу</Divider>
        <p>
          После импорта подготовленных материалов в программу вы можете отсортировать их
          вручную в окне <mark className="select">«Project»</mark>, создав папки и
          разместив там нужные файлы, или автоматизировать этот процесс, например, с
          помощью <mark className="plugin">Declutter</mark> или{" "}
          <mark className="plugin">Organize Project Assets Pro</mark>.
        </p>
        <Addition type="info">
          При необходимости вы можете создать шаблон с уже созданными папками и загружать
          его при создании нового проекта. Чтобы задать свой файл проекта как шаблон,
          откройте настройки программы{" "}
          <mark className="select">«Edit» → «Preferences» → «New Project»</mark>, включите
          параметр <mark className="select">«New Project loads template»</mark>, а затем
          выберите свой файл проекта с помощью{" "}
          <mark className="select">«Choose Project Template»</mark>. Если файл шаблона
          будет удалён или перемещён, программа загрузит пустой проект и предупредит вас,
          что файл не найден.
          <ContentFigure
            caption="Preferences"
            imgTitle="Включение и выбор шаблона при каждом открытии Adobe After Effects"
            src="images/aftereffects/choose_project_template.png"
            theme="dark"
            type="image"
            variant="windows"
          />
        </Addition>
        <p>
          После успешного перекодирования исходников вы можете их заменить, если они уже
          были импортированы в ваш проект, в окне{" "}
          <mark className="select">«Project»</mark>. Для этого нажмите{" "}
          <mark className="key">ПКМ</mark> по нужному исходнику и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark> или нажмите на
          комбинацию клавиш <mark className="key">Ctrl + H</mark>, выделив исходник,
          который нужно заменить. После этого укажите путь до нового файла в системном
          файловом менеджере.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Замена исходника в проекте"
          src="images/aftereffects/replace_footage.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          Подробную информацию о пайплайне импорта и экспорта вы можете узнать в{" "}
          <a href="https://t.me/montage_tutors/2">записи канала «Montage Tutors»</a> или в
          статьях разделов{" "}
          <a
            href="#import"
            onClick={(e) => {
              e.preventDefault();

              const target = document.getElementById("import");

              if (target) {
                const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

                const padding = Math.min(
                  10 + (14 - 10) * ((window.innerWidth - 320) / (768 - 320)),
                  14
                );

                const y =
                  target.getBoundingClientRect().top +
                  window.pageYOffset -
                  headerHeight -
                  padding;
                window.scrollTo({top: y, behavior: "smooth"});
              }
            }}
          >
            «Импорт»
          </a>{" "}
          и{" "}
          <a
            href="#export"
            onClick={(e) => {
              e.preventDefault();

              const target = document.getElementById("export");

              if (target) {
                const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

                const padding = Math.min(
                  10 + (14 - 10) * ((window.innerWidth - 320) / (768 - 320)),
                  14
                );

                const y =
                  target.getBoundingClientRect().top +
                  window.pageYOffset -
                  headerHeight -
                  padding;
                window.scrollTo({top: y, behavior: "smooth"});
              }
            }}
          >
            «Экспорт»
          </a>{" "}
          на этой странице.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="зелёный экран, искажения в предпросмотре, глитчи, полосы, видео mp4 из интернета, youtube"
        title="Как избавиться от артефактов при работе с исходниками?"
      >
        <p>
          Каждый, кто работал в <mark className="app">Adobe After Effects</mark> с чужими
          исходниками, сталкивался с разными проблемами: артефакты и другие графические
          баги могут не только раздражать, но и испортить проект при экспорте. В этой
          статье разберём типичные причины таких ошибок и способы их устранения.
        </p>
        <Divider>Очищаем или отключаем дисковый кэш</Divider>
        <p>
          Если вы работаете с композицией и со временем в предпросмотре начинают
          появляться различные дёргания, старые кадры или что-то ещё, то возможно, вы
          столкнулись с некорректной работой дискового кэширования. Чтобы быстро очистить
          кэш, перейдите в{" "}
          <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark> и
          нажмите <mark className="select">«OK»</mark>. После этого предпросмотр нужно
          будет кэшировать заново.
        </p>
        <ContentFigure
          caption="Очистка кэша и оперативной памяти"
          imgTitle="Очистка кэша и оперативной памяти"
          src="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          При наличии хотя бы <mark>32–64 ГБ</mark> оперативной памяти и мощного
          процессора дисковый кэш можно отключить, особенно если вы редко работаете со
          сложными сценами. Для этого снимите флажок{" "}
          <mark className="select">«Enable Disk Cache»</mark> в{" "}
          <mark className="select">«Edit» → «Preferences» → «Media & Disk Cache»</mark>.
          Это снизит риск сбоев при воспроизведении кэшированных кадров, однако функция
          предпросмотра кадров с диска станет недоступна.
        </p>
        <ContentFigure
          caption="Отключаем дисковый кэш"
          imgTitle="Отключаем дисковый кэш"
          src="images/aftereffects/enable_disk_cache.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Исправляем проблемные исходники перекодированием</Divider>
        <p>
          Непредсказуемые артефакты часто возникают, если в проект импортированы
          материалы, скачанные из интернета — например, с{" "}
          <mark className="app">YouTube</mark>. Такие сервисы перекодируют видео
          собственными алгоритмами, которые не всегда подходят для монтажа. В конечном
          итоге процессору приходится каждый раз распутывать поток кадров и сложные
          последовательности <mark>P</mark>, <mark>I</mark> и <mark>B</mark>-кадров.
          Иногда он делает это с ошибками — и на экране предпросмотра могут появиться
          артефакты.
        </p>
        <ContentFigure
          caption="Пример артефактов проблемного исходника из интернета"
          src="images/h264_artifacts.webm"
          theme="light"
          type="video"
          variant="windows"
        />
        <p>
          Чтобы избежать проблем с такими видео, их лучше перекодировать в формат для
          монтажа — например, <mark className="video">Apple ProRes 422</mark>, где каждый
          кадр хранится как отдельное изображение. Это обычная практика, которой стоит
          придерживаться, если вы сомневаетесь в стабильности исходников. Для конвертации
          видео в <mark className="video">монтажные кодеки</mark> подойдут{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">Handbrake</mark> или{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <ContentFigure
          caption="Shutter Encoder"
          imgTitle="Конвертируем в ProRes через Shutter Encoder"
          src="images/convert_to_prores_shutterencoder.png"
          theme="dark"
          type="image"
          variant="mac"
        />
        <p>
          После конвертации перейдите в окно <mark className="select">«Project»</mark>,
          выделите исходник, файл которого вы хотите заменить, нажмите{" "}
          <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark>. В открывшемся
          проводнике выберите файл, который вы получили после конвертации. При
          необходимости проделайте те же действия с остальными проблемными исходниками в
          вашем проекте.
        </p>
        <ContentFigure
          caption="Project"
          imgTitle="Замена исходника в проекте"
          src="images/aftereffects/replace_footage.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Проверяем жёсткий диск, на котором хранится проект</Divider>
        <p>
          В редких случаях артефакты может вызывать неисправный жёсткий диск, на котором
          вы храните свой проект. Такое возможно, если у вас плохой кабель для подключения
          диска или сам диск повреждён. Попробуйте переместить исходники в другое место, а
          затем переподключить их в проекте и проверить, появится ли проблема снова.
        </p>
        <ContentFilter
          windowsContent={
            <div>
              <Divider>
                Боремся с «зелёной заливкой» на устройствах с видеокартами AMD
              </Divider>
              <p>
                Если при работе с исходниками вместо видео появляется «зелёная заливка»,
                попробуйте отключить аппаратное декодирование в настройках программы. Для
                этого перейдите в{" "}
                <mark className="select">«Edit» → «Preferences» → «Import»</mark>, снимите
                флажок{" "}
                <mark className="select">«Enable hardware accelerated decoding»</mark> и
                перезагрузите программу. Такое поведение часто встречается на устройствах
                с дискретным или встроенным в процессор видеочипом от{" "}
                <mark className="company">AMD</mark>. Если это не поможет, придётся
                отправлять исходники на конвертацию.
              </p>
              <ContentFigure
                caption="Preferences"
                imgTitle="Отключение аппаратного декодирования в настройках"
                src="images/aftereffects/disable_hardware_accelerated_decoding.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <Divider>Боремся с артефактами из-за драйверов NVIDIA</Divider>
              <p>
                В некоторых версиях драйверов <mark className="company">NVIDIA</mark>, как{" "}
                <mark>Game Ready</mark>, так и <mark>Studio</mark>, могут появляться
                разные артефакты. Например, баг, создающий «полосы» на изображении в
                предпросмотре и при экспорте, связан с некорректной работой драйверов
                версий от <mark>55X</mark> до <mark>56X</mark>. Для решения достаточно
                обновить драйверы видеокарты — желательно до версии{" "}
                <mark className="app">NVIDIA Studio Driver</mark> для более стабильной
                работы с монтажными программами — либо установить более старую версию.
              </p>
              <Addition type="info">
                Загрузить драйверы <mark className="app">NVIDIA Studio</mark> можно на{" "}
                <a href="https://www.nvidia.com/en-us/geforce/drivers/">
                  официальной странице загрузки
                </a>
                . На сайте укажите модель видеокарты, операционную систему и не забудьте
                выбрать в <mark className="select">«Download Type»</mark> значение{" "}
                <mark className="select">«Studio Driver»</mark>.
              </Addition>

              <Divider>
                Работаем с импортёром Autokroma Influx вместо стандартного
              </Divider>
              <p>
                Если вы по каким-то причинам наотрез отказываетесь от перекодирования
                исходников, то можете попробовать использовать «принудительное»
                декодирование файлов через сторонний плагин{" "}
                <mark className="plugin">Autokroma Influx</mark>. Он может помочь
                уменьшить вероятность ошибок и сбоев при работе с исходниками, скачанными
                из интернета. Для этого в настройках плагина{" "}
                <mark className="plugin">Autokroma Influx</mark> установите для параметра{" "}
                <mark className="select">«Formats»</mark> значение{" "}
                <mark className="select">
                  «Force Influx to override all Adobe importers»
                </mark>
                . Таким образом вы принудительно переопределите декодирование всех
                поддерживаемых форматов через{" "}
                <mark className="plugin">Autokroma Influx</mark>.
              </p>
              <ContentFigure
                caption="Autokroma Influx"
                imgTitle="Принудительное переопределение стандартного импортёра сторонним"
                src="images/influx_force_override.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы открыть настройки{" "}
                    <mark className="plugin">Autokroma Influx</mark>, запустите{" "}
                    <mark className="file">Influx.exe</mark>, находящийся по пути{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\Autokroma
                      Influx
                    </mark>
                    .
                  </li>
                  <li>
                    Список форматов, поддерживаемых{" "}
                    <mark className="plugin">Autokroma Influx</mark>, указан{" "}
                    <a href="https://www.autokroma.com/Influx/Main_Features">
                      на официальном сайте
                    </a>
                    .
                  </li>
                </ul>
              </Addition>
              <Addition type="danger">
                <ul>
                  <li>
                    Принудительное переопределение декодирования через{" "}
                    <mark className="plugin">Autokroma Influx</mark> вы выполняете на свой
                    страх и риск! Стабильность работы и производительность вашего проекта
                    при использовании этой опции не гарантируется.
                  </li>
                  <li>
                    Если возникают проблемы с проектом, верните значение параметра{" "}
                    <mark className="select">«Formats»</mark> обратно на{" "}
                    <mark className="select">
                      «Use Influx for new formats, codecs and as a fallback (Default)»
                    </mark>
                    и перекодируйте ваши исходники в монтажный кодек.
                  </li>
                </ul>
              </Addition>
              <p>
                Если вы не хотите переопределять стандартный импортёр, просто переименуйте
                нужный исходник, добавив в конец имени файла{" "}
                <mark className="code">.INFLUX</mark>. Например, файл{" "}
                <mark className="file">IMG_1294.MP4</mark> можно переименовать в{" "}
                <mark className="file">IMG_1294.MP4.INFLUX</mark>. Такой файл будет
                принудительно декодирован через{" "}
                <mark className="plugin">Autokroma Influx</mark> вне зависимости от
                настройки <mark className="select">«Formats»</mark>.
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="переменный фпс, пропуски кадров"
        title="Почему при импорте исходника с переменной частотой кадров его длина в композиции короче, чем в видеопроигрывателе?"
      >
        <p>
          При импорте <mark className="app">Adobe After Effects</mark> преобразовывает
          видео покадрово, не учитывая особенности переменной или дробной частоты кадров.
          В результате такие файлы могут содержать дублирующиеся кадры, которые программа
          автоматически пропускает. Из-за этого итоговая длительность видео в проекте
          может оказаться короче, чем при воспроизведении того же файла в обычном
          видеопроигрывателе.
        </p>
        <p>
          Чтобы исправить эту проблему, измените частоту кадров с помощью интерпретации.
          Для этого выделите ваш исходник в окне <mark className="select">«Project»</mark>{" "}
          и нажмите комбинацию клавиш <mark className="key">Ctrl + Alt + G</mark>. В
          открывшемся окне в разделе <mark className="select">«Frame Rate»</mark>{" "}
          установите для <mark className="select">«Conform to frame rate»</mark> ожидаемое
          количество кадров в секунду.
        </p>
        <Addition type="warning">
          <mark className="select">«Conform to frame rate»</mark> может изменить скорость
          вашего видео. Если такой вариант вас не устраивает — воспользуйтесь конвертацией
          видео с нужными настройками.
        </Addition>
        <ContentFigure
          caption="Interpret Footage"
          imgTitle="Интерпретация футажа"
          src="images/aftereffects/interpret_footage_main.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если это не помогло, перекодируйте ваш исходник с постоянной частотой кадров
          через <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">Adobe Media Encoder</mark> или{" "}
          <mark className="app">Handbrake</mark>. В{" "}
          <mark className="app">Shutter Encoder</mark> это можно сделать во вкладке{" "}
          <mark className="select">«Advanced features»</mark>.
        </p>
        <ContentFigure
          caption="Shutter Encoder"
          src="images/shutter_encoder_convert_to_constant_fps.mp4"
          theme="dark"
          type="video"
          variant="mac"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="как переподключить исходники, отсутствуют файлы, реконнект, потерялись исходники, ошибка импорта, переподключение файлов, linking, missing files"
        title="«Warning: files are missing since you last saved project» и вместо клипов — цветовая палитра"
      >
        <p>
          Причин появления этого предупреждения может быть несколько: не до конца
          распакованный архив, перемещение файла проекта или исходников.
        </p>
        <Divider>Правильно распаковываем архив с чужим проектом</Divider>
        <p>
          Если вы собираетесь открыть чужой проект или шаблон, убедитесь, что архив
          полностью распакован и проект не запускается напрямую из архива. При открытии
          проекта из архива будет извлечён только файл <mark className="file">AEP</mark>{" "}
          во временную папку, а все остальные материалы останутся недоступны для{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ContentFilter
          macContent={
            <div>
              <p>
                Для корректного открытия чужого проекта — полностью распакуйте архив, а
                затем зайдите в созданную директорию и откройте проект формата{" "}
                <mark className="file">AEP</mark> оттуда.
              </p>
              <ContentFigure
                caption="Распаковка через контекстное меню"
                imgTitle="Распаковка через контекстное меню"
                src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                theme="light"
                type="image"
                variant="mac"
              />
            </div>
          }
          windowsContent={
            <div>
              <p>
                Для корректного открытия чужого проекта — полностью распакуйте архив, а
                затем зайдите в созданную директорию и откройте проект формата{" "}
                <mark className="file">AEP</mark> оттуда.
              </p>
              <ContentFigure
                caption="Распаковка многотомного архива"
                src="1OVwQS0uHhk"
                type="youtube"
              />
            </div>
          }
        />
        <Divider>
          Восстанавливаем путь к исходникам после их перемещения или переименования
        </Divider>
        <p>
          Если вы переместили файл <mark className="file">AEP</mark>, а исходники остались
          в другом месте, их можно переподключить вручную. Для этого в окне{" "}
          <mark className="select">«Project»</mark> найдите строку поиска и введите{" "}
          <mark className="copy">Missing Footage</mark>. В списке появятся файлы, которые
          потеряли связь с исходниками. Чтобы восстановить связь — нажмите на нужный файл{" "}
          <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark>. Затем в открывшемся
          проводнике укажите путь к исходнику — и сможете продолжить работу.
        </p>
        <Addition type="info">
          Если вы потеряли несколько исходников, но все они лежали в одной папке или её
          подпапках, то при переподключении одного файла остальные подключатся
          автоматически.
        </Addition>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Замена исходника в проекте"
          src="images/aftereffects/replace_footage.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="хеик, хеиф, хевк, heic, heif, hevc, айфон, iphone"
        title="Как открыть и импортировать HEIC, HEIF или HEVC?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Пользователи <mark>Windows</mark> могут столкнуться с проблемой открытия и
                импорта в <mark className="app">Adobe After Effects</mark> таких файлов,
                если в системе отсутствуют кодеки для работы с соответствующими форматами
                изображений и видео. Казалось бы, достаточно установить их из{" "}
                <mark className="app">Microsoft Store</mark>, но, увы, не всё так просто:
                один из кодеков платный, а другой устанавливается неочевидным образом.
              </p>
              <p>
                Чтобы корректно открывать такие изображения и видео, вам нужно установить
                нужные кодеки. Для их загрузки посетите{" "}
                <a href="https://store.rg-adguard.net/">
                  онлайн-генератор ссылок из Microsoft Store
                </a>
                , а затем вставьте в сервис одну из ссылок ниже.
              </p>
              <ContentFigure
                caption="Браузер"
                imgTitle="Генератор ссылок из Microsoft Store"
                src="images/link_generator_msstore.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <ul>
                <li>
                  Ссылка для скачивания кодека <mark className="image">HEIF/HEIC</mark>:{" "}
                  <code>https://apps.microsoft.com/9pmmsr1cgpwg</code>
                </li>
                <li>
                  Ссылка для скачивания кодека <mark className="video">HEVC</mark>:{" "}
                  <code>https://apps.microsoft.com/9n4wgh0z6vhq</code>
                  <Addition type="danger">
                    <mark className="app">Adobe After Effects</mark> после установки
                    кодеков всё равно не сможет импортировать видео с контейнером{" "}
                    <mark className="video">HEVC</mark>. Если вы попробуете импортировать
                    такой файл, программа сообщит, что он не поддерживается. Чтобы это
                    исправить, переименовуйте ваше видео в{" "}
                    <mark className="video">MP4</mark> или перекодируйте его в другой
                    кодек через <mark className="app">Shutter Encoder</mark>.
                  </Addition>
                </li>
              </ul>
              <p>
                После вставки ссылки и нажатия на кнопку{" "}
                <mark className="select">«OK»</mark>, нажмите на файл с расширением{" "}
                <mark className="file">APPXBUNDLE</mark> для его скачивания.
              </p>
              <Addition type="warning">
                Если браузер предупреждает, что вы скачиваете редкий файл или вирус,
                проигнорируйте предупреждение и продолжите скачивание.
              </Addition>
              <p>
                Для установки пакетов с расширением{" "}
                <mark className="file">APPXBUNDLE</mark> достаточно открыть их двойным
                кликом. Если вам предлагают открыть файл с помощью{" "}
                <mark className="app">Обработчика команд Windows</mark> или{" "}
                <mark className="app">Установщика приложений</mark>, выбирайте любой
                вариант. Я предпочту установку через{" "}
                <mark className="app">Обработчик команд Windows</mark>.
              </p>
              <p>
                После успешной установки кодеков вы сможете открывать файлы форматов{" "}
                <mark className="file">HEIF</mark>, <mark className="file">HEIC</mark> и{" "}
                <mark className="file">HEVC</mark> в различных видеоплеерах и программах
                для просмотра фото, например в <mark className="app">MPC-HC</mark> и{" "}
                <mark className="app">FastStone Image Viewer</mark>.
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="autokroma influx"
        title="Как импортировать MKV, FLV, WEBM или другие неподдерживаемые форматы без конвертации?"
      >
        <p>
          <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> изначально не поддерживают
          множество кодеков — например, <mark className="video">VP9</mark> и{" "}
          <mark className="video">AV1</mark>, — а также некоторых контейнеров, таких как{" "}
          <mark className="video">WEBM</mark>, <mark className="video">FLV</mark>,{" "}
          <mark className="video">MKV</mark> и других. Если у вас небольшой проект и нет
          желания перекодировать исходники, можно использовать плагин{" "}
          <a href="https://www.autokroma.com/Influx">Autokroma Influx</a>. Он упрощает
          импорт файлов, которые не поддерживаются в{" "}
          <mark className="app">Adobe After Effects</mark>,{" "}
          <mark className="app">Adobe Premiere Pro</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <Addition type="warning">
          Иногда видео с немонтажными кодеками или файлы, импортированные через{" "}
          <mark className="plugin">Autokroma Influx</mark>, могут работать нестабильно.
          Картинка может дёргаться, появляться артефакты, меняться цвета или вовсе
          пропадать, а рендер — тормозить. Чтобы избежать таких проблем, лучше заранее
          перекодировать видео в монтажный формат — например, с помощью{" "}
          <mark className="app">MKVToolNix</mark>, <mark className="app">HandBrake</mark>{" "}
          или <mark className="app">Shutter Encoder</mark>.
        </Addition>
        <ContentFigure
          caption="Autokroma Influx"
          src="l3zBFli6BIk"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="фпс, частота кадров, интерпретация"
        title="Почему при импорте секвенции изображений длина слоя получается короче, длиннее или с неправильной частотой кадров?"
      >
        <p>
          При импорте изображений как секвенции задаётся частота кадров, указанная в
          настройках <mark className="app">Adobe After Effects</mark>. Чтобы проверить
          настройки импорта, перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Import»</mark> и при
          необходимости в параметре <mark className="select">«Sequence Footage»</mark>{" "}
          выберите нужную частоту кадров. Это значение будет применяться при следующем
          импорте секвенций.
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Настройки импорта секвенций"
          src="images/aftereffects/change_fps_sequence_footage.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если вам нужно преобразовать частоту кадров уже импортированной секвенции,
          воспользуйтесь интерпретацией футажа. Для этого выделите секвенцию в окне{" "}
          <mark className="select">«Project»</mark> и нажмите комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + G</mark>. В открывшемся окне в разделе{" "}
          <mark className="select">«Frame Rate»</mark> установите для{" "}
          <mark className="select">«Conform to frame rate»</mark> ожидаемое количество
          кадров в секунду.
        </p>
        <ContentFigure
          caption="Interpret Footage"
          imgTitle="Интерпретация футажа"
          src="images/aftereffects/interpret_footage_main.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="фотошоп, не появляется окно импорта, не предлагает выбор типа псд"
        title="Почему я не могу импортировать PSD по слоям?"
      >
        <p>
          Такое бывает, когда вы сохраняете в <mark className="app">Adobe Photoshop</mark>{" "}
          файл в формате <mark className="image">PSD</mark> в цветовом режиме, отличном от{" "}
          <mark>RGB</mark>. <mark className="app">Adobe After Effects</mark> не распознаёт
          файлы в <mark>CMYK</mark> или аналогичных режимах, поэтому импортирует их как
          целый холст без возможности разделения по слоям. Чтобы проверить, в каком режиме
          сохранён ваш файл, откройте его в <mark className="app">Adobe Photoshop</mark> и
          посмотрите на заголовок окна.
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Проверяем цветовой режим в Adobe Photoshop"
          src="images/aftereffects/tab_in_photoshop.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Если в заголовке написано <mark>CMYK</mark>, <mark>Grayscale</mark> или что-то
          другое, отличное от <mark>RGB</mark>, вам нужно преобразовать файл в{" "}
          <mark>RGB</mark>. Для этого в <mark className="select">«Image» → «Mode»</mark>{" "}
          выберите режим <mark className="select">«RGB Color»</mark>.
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Переключаем цветовой режим на RGB в Adobe Photoshop"
          src="images/aftereffects/photoshop_switch_to_rgb.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Если появится окно с вопросом{" "}
          <mark>
            «Change modes can affect the appearance of layers. Flatten image before mode
            change?»
          </mark>
          , смело нажимайте на кнопку <mark className="select">«Don&apos;t Flatten»</mark>
          . Иначе ваши слои объединятся в один, если вы нажмёте на{" "}
          <mark className="select">«Flatten»</mark>. После смены цветового режима цвета
          могут сильно измениться.
        </Addition>
        <p>
          После изменения цветового режима сохраните <mark className="image">PSD</mark>{" "}
          файл и попробуйте снова импортировать его в{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ContentFigure
          caption="filename.psd"
          imgTitle="Корректный импорт PSD в Adobe After Effects"
          src="images/aftereffects/correct_import_psd.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если этот способ вам не помог или вас не устраивают цвета после изменения
          цветового режима, экспортируйте все слои из{" "}
          <mark className="app">Adobe Photoshop</mark> отдельными файлами. Для этого
          перейдите в <mark className="select">«File» → «Export»</mark> и нажмите на{" "}
          <mark className="select">«Layers to Files»</mark>.
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Кнопка для начала экспорта слоёв в файлы"
          src="images/photoshop/layers_to_files.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          В открывшемся окне вы можете указать путь для сохранения, название и тип файла,
          в который хотите экспортировать слои. После настроек нажмите на{" "}
          <mark className="select">«OK»</mark>, и ваши слои сохранятся как отдельные
          файлы.
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Экспорт слоёв в файлы"
          src="images/photoshop/export_layers.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          После экспорта слоёв в виде отдельных файлов вы сможете импортировать их в{" "}
          <mark className="app">Adobe After Effects</mark> и работать с ними как обычно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="импорт из иллюстратора, градиенты"
        title="Как перенести макет, созданный в Illustrator, по слоям и с градиентами?"
      >
        <p>
          Предположим, у вас возникла необходимость перенести файл формата{" "}
          <mark className="file">AI</mark>.{" "}
          <mark className="app">Adobe After Effects</mark> предоставляет такую
          возможность. Однако при работе с большинством проектов, созданных в{" "}
          <mark className="app">Adobe Illustrator</mark>, вы можете столкнуться с тем, что
          количество доступных слоёв будет ограничено. Это связано с тем, что в процессе
          создания макета несколько фигур часто объединяются в один слой.
        </p>
        <p>
          Если вы не собираетесь редактировать импортированные фигуры в{" "}
          <mark className="app">Adobe After Effects</mark> для детальной анимации, то
          вручную пересоздавать градиенты не нужно. Но, как сказано ранее, в некоторых
          проектах из <mark className="app">Adobe Illustrator</mark> фигуры могут быть
          объединены. Для этого в самом <mark className="app">Adobe Illustrator</mark>{" "}
          нужно разбить все или только необходимые фигуры на отдельные слои.
        </p>
        <ContentFigure
          caption="Разбиваем слои в Illustrator"
          src="images/manual_explode_layer_illustrator.mp4"
          theme="light"
          type="video"
          variant="windows"
        />
        <p>
          После разбивки слоёв сохраните проект в{" "}
          <mark className="app">Adobe Illustrator</mark> как{" "}
          <mark className="file">AI</mark>-файл. Затем импортируйте его в{" "}
          <mark className="app">Adobe After Effects</mark>, выбрав тип импорта
          «композиция». Также вы можете выбрать размер слоёв в{" "}
          <mark className="select">«Footage Dimensions»</mark>:{" "}
          <mark className="select">«Layer Size»</mark> или{" "}
          <mark className="select">«Document Size»</mark>.
        </p>
        <ContentFigure
          caption="File.ai"
          imgTitle="Импортируем файл Illustrator"
          src="images/aftereffects/import_ai_file.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После импорта вы получите в <mark className="app">Adobe After Effects</mark>{" "}
          слои с градиентами. Их нельзя редактировать как обычную фигуру, но их можно
          сделать «как бы векторными», включив для слоёв опцию{" "}
          <mark className="select">«Continuously Rasterize»</mark>.
        </p>
        <ContentFigure
          caption="Импортированные нередактируемые фигуры"
          src="images/aftereffects/imported_non_editable_shapes.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Addition type="warning">
          <ul>
            <li>
              Некоторые ошибочно полагают, что в{" "}
              <mark className="app">Adobe After Effects</mark>, как и в{" "}
              <mark className="app">Adobe Illustrator</mark>, можно приближать изображение
              в предпросмотре без потери качества, если в композиции используются
              векторные слои. Это не так. <mark className="app">Adobe After Effects</mark>{" "}
              — растровый, а не векторный редактор. Он отображает и растрирует все слои до
              разрешения, установленного в настройках композиции. Единственное исключение,
              позволяющее увеличить предпросмотр более чем на <mark>100%</mark> без потери
              качества, — это использование <mark className="plugin">Draft 3D</mark> с
              включённой опцией <mark className="select">«Extended Preview»</mark>. Но это
              работает только при наличии в композиции векторных слоёв или 3D-моделей, а
              также если в композиции есть камера, включён режим 3D для слоя или применён
              эффект, работающий в 3D-пространстве. В любом случае, на выходе вы получите
              файл с разрешением, заданным в настройках композиции.
            </li>
            <li>
              При включённой опции{" "}
              <mark className="select">«Continuously Rasterize»</mark> могут быть побочные
              эффекты, например разрывы слоя при использовании{" "}
              <mark className="plugin">Puppet Tool</mark>.
            </li>
          </ul>
        </Addition>
        <p>
          Если вам всё же потребуется преобразовать слой в редактируемую фигуру, то, увы,
          придётся попрощаться с градиентами. Градиенты из{" "}
          <mark className="app">Adobe Illustrator</mark> и{" "}
          <mark className="app">Adobe After Effects</mark> обычно невзаимозаменяемы, и их
          нужно будет пересоздать вручную.
        </p>
      </DetailsSummary>

      <DetailsSummary
        tag="импорт из фигмы, фигма"
        title="Как перенести макет из Figma?"
      >
        <p>
          Макет из онлайн-сервиса <mark className="app">Figma</mark> можно перенести с
          помощью двух плагинов: <mark className="plugin">AEUX</mark> и{" "}
          <mark className="plugin">Overlord 2</mark>. Прежде чем что-либо импортировать,
          вам нужно сохранить макет локально в <mark className="app">Figma</mark> через{" "}
          <mark className="select">«Иконка Figma» → «File» → «Save local copy»</mark> и
          открыть его в{" "}
          <b>
            <u>десктопной версии</u>
          </b>{" "}
          <mark className="app">Figma</mark>. Это необходимо, если вы собираетесь
          импортировать чужой проект, так как зачастую их нельзя редактировать и работать
          с ними через плагины.
        </p>
        <Addition type="info">
          Плагин <mark className="plugin">Overlord</mark> второй версии с поддержкой
          импорта макетов из <mark className="app">Figma</mark> отсутствует в свободном
          доступе у автора, поэтому в этой статье ограничимся плагином
          <mark className="plugin">AEUX</mark>, который можно загрузить на странице
          релизов в <a href="https://github.com/google/AEUX/releases">GitHub</a>. Плагин
          нужно установить в <mark className="app">Adobe After Effects</mark> и в{" "}
          <b>
            <u>десктопную версию</u>
          </b>{" "}
          <mark className="app">Figma</mark>.
        </Addition>
        <p>
          Плагин для <mark className="app">Adobe After Effects</mark> распространяется в
          формате <mark className="file">ZXP</mark>, поэтому его можно установить как
          через <a href="https://updates.aescripts.com/zxp-installer/">ZXP Installer</a>,
          так и вручную.
        </p>
        <p>
          Для установки плагина в десктопную версию <mark className="app">Figma</mark>{" "}
          нужно распаковать папку <mark className="path">Figma</mark> из архива{" "}
          <mark className="file">AEUX_0_X_X.zip</mark> и указать путь к{" "}
          <mark className="file">manifest.json</mark> в распакованной папке. Это делается
          через{" "}
          <mark className="select">
            «Иконка Figma» → «Plugins» → «Development» → «Import plugin from manifest»
          </mark>
          .
        </p>
        <ContentFigure
          caption="Figma"
          imgTitle="Установка стороннего плагина в Figma"
          src="images/figma_install_plugin.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После успешной установки плагина в <mark className="app">Figma</mark> его можно
          запустить с помощью{" "}
          <mark className="select">
            «Иконка Figma» → «Plugins» → «Development» → «AEUX»
          </mark>
          .
        </p>
        <ContentFigure
          caption="Figma"
          imgTitle="Запуск AEUX в Figma"
          src="images/figma_run_aeux.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Чтобы отправить проект в <mark className="app">Adobe After Effects</mark>, нужно
          выделить нужные слои в макете и нажать на кнопку{" "}
          <mark className="select">«Send selection to AE»</mark>.
        </p>
        <Addition type="warning">
          <mark className="app">Adobe After Effects</mark> перед нажатием на кнопку
          переноса макета из <mark className="app">Figma</mark> должен быть запущен, иначе
          появится ошибка.
        </Addition>
        <ContentFigure
          caption="Figma"
          src="images/aftereffects/send_figma_to_ae.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          После нажатия на кнопку переноса у вас откроется{" "}
          <mark className="app">Adobe After Effects</mark>, и программа предложит, куда
          сохранить изображения для проекта. После выбора папки вы получите новую
          композицию с макетом из <mark className="app">Figma</mark>.
        </p>
        <Addition type="warning">
          Импорт часто проходит неидеально, поэтому некоторые элементы макета всё же
          придётся отредактировать в соответствии с оригиналом. Иногда повторный импорт
          выделенных слоёв проходит лучше.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="3д, элемент 3д, блендер, объемные модели, расширенный 3д, адвансед 3д, с4д, обж, фбх, гтлф, глб"
        title="Как импортировать трёхмерные объекты форматов C4D, OBJ, FBX, GLTF или GLB?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> версии <mark>24.1</mark> и
          новее появился новый движок рендеринга{" "}
          <mark className="plugin">Advanced 3D</mark>, который позволяет импортировать
          трёхмерные объекты без использования сторонних плагинов. На момент написания
          этой статьи поддерживается импорт <mark className="file">OBJ</mark>,{" "}
          <mark className="file">FBX</mark>, <mark className="file">GLTF</mark> и{" "}
          <mark className="file">GLB</mark>. Такие модели можно создать в любом популярном
          3D-редакторе, например <mark className="app">Blender</mark>,{" "}
          <mark className="app">Cinema 4D</mark> или{" "}
          <mark className="app">Substance 3D Painter</mark>.
        </p>
        <Addition type="info">
          <mark className="company">Adobe</mark> рекомендует использовать формат{" "}
          <mark className="file">GLB</mark>, так как в один файл обычно уже запакованы
          нужные материалы и текстуры.
        </Addition>
        <ContentFigure
          caption="Работаем с 3D-моделями из Substance Painter в Adobe After Effects"
          src="qPOkGR7Ek2I"
          type="youtube"
        />
        <p>
          Чтобы импортировать проект формата <mark className="file">C4D</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>, на устройстве должна быть
          установлена полноценная версия <mark className="app">Cinema 4D</mark>. В
          противном случае программа выдаст ошибку и потребует установить{" "}
          <mark className="app">Cinema 4D</mark>.
        </p>
        <ContentFigure
          caption="Cineware"
          src="qFVQrxWvOjw"
          type="youtube"
        />
        <p>
          Если вы используете <mark className="app">Adobe After Effects</mark> версии ниже{" "}
          <mark>24.0</mark>, вам придётся использовать сторонний плагин{" "}
          <mark className="plugin">Element 3D</mark>. Он поддерживает импорт файлов
          формата <mark className="file">C4D</mark>, <mark className="file">OBJ</mark> и{" "}
          <mark className="file">E3D</mark>.
        </p>
        <Addition type="warning">
          Для импорта файлов <mark className="file">C4D</mark> требуется установленная
          полноценная версия <mark className="app">Cinema 4D</mark> на вашем устройстве.
        </Addition>
        <ContentFigure
          caption="Element 3D V2 First Look!"
          src="z5nBA45DvRo"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="телеграм, стикеры, тгс"
        title="Как импортировать анимированный стикер из Telegram?"
      >
        <p>
          С ростом популярности стикеров в мессенджере{" "}
          <mark className="app">Telegram</mark> у пользователей возникает желание
          импортировать их в <mark className="app">Adobe After Effects</mark> и
          использовать в своих проектах. Особенно это заметно у рилсмейкеров, которые
          применяют стандартные анимированные эмодзи. Стикеры из{" "}
          <mark className="app">Telegram</mark> можно загрузить на устройство с помощью
          десктопного клиента (веб-версия не подойдёт), нажав{" "}
          <mark className="key">ПКМ</mark> по отправленному стикеру и выбрав в контекстном
          меню <mark className="select">«Сохранить как»</mark>.
        </p>
        <ContentFigure
          caption="Telegram"
          imgTitle="Сохранить стикер как TGS"
          src="images/download_tgs_from_telegram.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          Большинство стандартных анимированных эмодзи можно найти в различных
          стикер-паках, например{" "}
          <a href="https://t.me/addstickers/AnimatedEmojies">здесь</a>.
        </Addition>
        <p>
          После того как вы получили <mark className="file">TGS</mark>-файл, его нужно
          переконвертировать в <mark className="file">JSON</mark>. Сделать это можно с
          помощью конвертера ниже, загрузив в него файл. После успешной конвертации не
          забудьте скачать результат и выберите один из способов импорта в{" "}
          <mark className="app">Adobe After Effects</mark>: через{" "}
          <mark className="plugin">LottieFiles</mark> или{" "}
          <mark className="plugin">Bodymovin</mark>.
        </p>
        <Addition type="danger">
          Учтите, что из-за особенностей импорта <mark className="file">JSON</mark>-файлов
          некоторые элементы анимации могут импортироваться некорректно.
        </Addition>
        <Divider>Конвертер TGS в JSON</Divider>
        <TgsToJsonConverter />
        <Divider>Импортируем через LottieFiles</Divider>
        <p>
          <mark className="plugin">LottieFiles for After Effects</mark> — официальное
          бесплатное<sup>1</sup> расширение от{" "}
          <a href="https://lottiefiles.com/">LottieFiles</a>, с помощью которого можно
          импортировать <mark className="file">JSON</mark>-анимацию в композицию{" "}
          <mark className="app">Adobe After Effects</mark>. Скачать его можно с{" "}
          <a href="https://aescripts.com/lottiefiles/">aescripts.com</a>. После установки
          расширение появится в <mark className="select">«Window» → «Extensions»</mark>.
          При первом открытии потребуется войти в аккаунт <mark>LottieFiles</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Пользователям из Российской Федерации для входа в аккаунт может
              потребоваться <mark className="app">VPN</mark>. После авторизации его можно
              отключить.
            </li>
            <li>
              Для корректной работы расширения требуется установить флажок для параметра{" "}
              <mark className="select">
                «Allow Scripts to Write Files and Access Network»
              </mark>{" "}
              в настройках <mark className="app">Adobe After Effects</mark>:{" "}
              <mark className="select">
                «Edit» → «Preferences» → «Scripting & Expressions»
              </mark>
              .
            </li>
            <li>
              <sup>1</sup> Чтобы скачать расширение, зарегистрируйтесь на сайте{" "}
              <a href="https://aescripts.com">aescripts.com</a>, добавьте его в корзину и
              подтвердите заказ. Плагин появится{" "}
              <a href="https://aescripts.com/downloadable/customer/products/">
                в вашем профиле
              </a>
              , и вы сможете скачать его абсолютно бесплатно.
            </li>
          </ul>
        </Addition>
        <p>
          После успешного входа в аккаунт перейдите во вкладку{" "}
          <mark className="select">«Import»</mark> в расширении и нажмите на кнопку{" "}
          <mark className="select">«Browse»</mark> для выбора вашего{" "}
          <mark className="file">JSON</mark>-файла. Расширение начнёт конвертацию и
          создаст новую композицию с вашей анимацией, которую можно использовать дальше в
          своих проектах.
        </p>
        <ContentFigure
          caption="LottieFiles"
          imgTitle="Импорт с помощью расширения LottieFiles"
          src="images/aftereffects/import_lottiefiles.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Импортируем через Bodymovin</Divider>
        <Addition type="warning">
          При импорте стикеров через <mark className="plugin">Bodymovin</mark> в некоторых
          случаях вам придётся пересоздавать градиенты вручную. Обычно в окне плагина
          появляется информация о том, какие градиенты и с какими данными нужно
          воссоздать.
        </Addition>
        <p>
          <mark className="plugin">Bodymovin</mark> — альтернативное бесплатное
          <sup>1</sup> расширение с{" "}
          <a href="https://aescripts.com/bodymovin/">aescripts.com</a>. После установки
          оно будет находиться в <mark className="select">«Window» → «Extensions»</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> Чтобы скачать расширение, зарегистрируйтесь на сайте{" "}
              <a href="https://aescripts.com">aescripts.com</a>, вернитесь на страницу с
              плагином, установите цену <mark>0</mark> в{" "}
              <mark className="select">«Name Your Own Price»</mark>, добавьте его в
              корзину и подтвердите заказ. Плагин появится{" "}
              <a href="https://aescripts.com/downloadable/customer/products/">
                в вашем профиле
              </a>
              , и вы сможете скачать его абсолютно бесплатно.
            </li>
            <li>
              Для корректной работы расширения требуется установить флажок для параметра{" "}
              <mark className="select">
                «Allow Scripts to Write Files and Access Network»
              </mark>{" "}
              в настройках <mark className="app">Adobe After Effects</mark>:{" "}
              <mark className="select">
                «Edit» → «Preferences» → «Scripting & Expressions»
              </mark>
              .
            </li>
          </ul>
        </Addition>
        <p>
          После открытия расширения <mark className="plugin">Bodymovin</mark> перейдите во
          вкладку <mark className="select">«Import Lottie Animation»</mark> и нажмите на
          кнопку <mark className="select">«Import Local File»</mark>. В открывшемся окне
          проводника выберите нужный <mark className="file">JSON</mark>-файл, который вы
          конвертировали ранее.
        </p>
        <ContentFigure
          caption="Bodymovin"
          imgTitle="Импортируем .json в Adobe After Effects через Bodymovin"
          src="images/aftereffects/bodymovin_import_json.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Импорт <mark className="file">JSON</mark> в{" "}
          <mark className="app">Adobe After Effects</mark> может занять некоторое время.
          После импорта у вас появится новая композиция в окне{" "}
          <mark className="select">«Project»</mark>. В некоторых случаях импорт может
          пройти с нюансами, например, градиенты могут быть перенесены некорректно. К
          счастью, плагин предоставляет информацию о том, что и с какими данными нужно
          вставить, но сам процесс может занять много времени.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Неперенесенные градиенты в Adobe After Effects через Bodymovin"
          src="images/aftereffects/gradient_data_bodymovin.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Градиенты можно заменить на обычную заливку, если это допустимо, или же
          постарайтесь уделить немного времени на их восстановление. Количество градиентов
          будет зависеть от самого стикера.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="импорт из премьер про, import prproj sequence"
        title="Как импортировать секвенцию из Adobe Premiere Pro?"
      >
        <p>
          Представим, что вы смонтировали видеоролик в{" "}
          <mark className="app">Adobe Premiere Pro</mark> и теперь хотите перенести его в{" "}
          <mark className="app">Adobe After Effects</mark>. Если вы просто импортируете{" "}
          <mark className="file">PRPROJ</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + I</mark>, то получите секвенцию, которую нельзя
          редактировать. Чтобы её можно было редактировать, словно таймлайн был
          конвертирован из <mark className="app">Adobe Premiere Pro</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>, нужно использовать другой
          способ.
        </p>
        <p>
          Для импорта секвенций из <mark className="app">Adobe Premiere Pro</mark> как
          полноценных композиций, в программе нужно выбрать{" "}
          <mark className="select">
            «File» → «Import» → «Import Premiere Pro Project»
          </mark>{" "}
          и указать нужный файл проекта <mark className="app">Adobe Premiere Pro</mark>.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Начало импорта секвенций из Adobe Premiere Pro"
          src="images/aftereffects/import_premiere_pro_project.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Далее <mark className="app">Adobe After Effects</mark> спросит, какие секвенции
          нужно импортировать. По умолчанию стоит параметр{" "}
          <mark className="select">«All Sequences»</mark>, но вы можете указать конкретную
          секвенцию. Также при желании можно отключить импорт аудиофайлов.
        </p>
        <ContentFigure
          caption="Premiere Pro Importer"
          imgTitle="Импорт секвенций из Adobe Premiere Pro"
          src="images/aftereffects/premiere_pro_importer.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После этого в окне <mark className="select">«Project»</mark> появится новая
          папка с названием вашего проекта из{" "}
          <mark className="app">Adobe Premiere Pro</mark>, импортированные файлы и новые
          композиции с нарезками. Некоторые эффекты в силу различий двух программ могут не
          примениться, и их придётся применить повторно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="импорт могрт, aeproject, анимационный шаблон"
        title="Как открыть и импортировать MOGRT?"
      >
        <p>
          Шаблоны анимации в формате <mark className="file">MOGRT</mark> обычно создаются
          в <mark className="app">Adobe After Effects</mark> и используются в проектах{" "}
          <mark className="app">Adobe Premiere Pro</mark>. Но при необходимости такие
          файлы можно распаковать и использовать в своих композициях{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <Divider>Открываем MOGRT как проект</Divider>
        <p>
          Чтобы открыть шаблон формата <mark className="file">MOGRT</mark>, нужно вызвать
          окно открытия проекта с помощью{" "}
          <mark className="select">«File» → «Open Project»</mark> или{" "}
          <mark className="key">Ctrl + O</mark>. В открывшемся окне проводника выберите
          нужный файл <mark className="file">MOGRT</mark>, укажите папку, куда нужно
          распаковать проект, и нажмите <mark className="select">«Extract»</mark>. После
          этого <mark className="app">Adobe After Effects</mark> конвертирует шаблон{" "}
          <mark className="file">MOGRT</mark> в отдельный проект и сохранит его в
          указанной папке.
        </p>
        <Addition type="warning">
          Через <mark className="select">«File» → «Import»</mark> такие шаблоны
          импортировать не получится — программа выдаст ошибку о неподдерживаемом файле.
        </Addition>
        <p>
          Чтобы начать редактировать такой шаблон, откройте нужную композицию в окне{" "}
          <mark className="select">«Project»</mark>, а затем откройте окно{" "}
          <mark className="select">«Essential Graphics»</mark> через{" "}
          <mark className="select">«Composition» → «Open in Essential Graphics»</mark>. В
          этом же окне вы можете запаковать проект обратно в{" "}
          <mark className="file">MOGRT</mark> после внесения правок с помощью{" "}
          <mark className="select">«Export Motion Graphics Template»</mark>.
        </p>
        <ContentFigure
          caption="Essential Graphics"
          imgTitle="Демонстрация окна Essential Graphics"
          src="images/aftereffects/essential_graphics.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Используем MOGRT в другом проекте</Divider>
        <p>
          Поскольку с помощью <mark className="select">«Open Project»</mark> мы
          конвертировали анимацию формата <mark className="file">MOGRT</mark> в{" "}
          <mark className="file">AEP</mark>, её можно применять в своих проектах,
          импортируя композиции через <mark className="select">«File» → «Import»</mark>{" "}
          (комбинация клавиш <mark className="key">Ctrl + I</mark>). В окне импорта нужно
          указать <mark className="file">AEP</mark>-файл в директории, в которую
          изначально был распакован <mark className="file">MOGRT</mark>. Импортированные
          композиции появятся в окне <mark className="select">«Project»</mark>.
          Редактировать такие шаблоны можно также через{" "}
          <mark className="select">«Composition» → «Open in Essential Graphics»</mark> или
          вручную изменяя слои.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="требуется преобразовать данный проект из версии XX.X.X (Windows/macOS). исходный файл останется без изменений"
        title="Что такое «This project must be converted from version XX.X.X (Windows/macOS). The original file will be unchanged» при открытии проекта?"
      >
        <p>
          Это сообщение означает, что вы открыли проект, созданный в более старой версии{" "}
          <mark className="app">Adobe After Effects</mark>, в новой версии программы. В
          таких случаях программа автоматически конвертирует проект для совместимости, при
          этом исходный файл остаётся без изменений. Чтобы продолжить работу, просто
          нажмите <mark className="select">«OK»</mark> в появившемся окне.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          src="images/aftereffects/this_project_must_be_converted.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          После конвертации и открытия проекта обязательно сохраните его — нажмите{" "}
          <mark className="key">Ctrl + S</mark> или выберите{" "}
          <mark className="select">«File» → «Save»</mark>, иначе изменения не сохранятся.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="несовместимость версий, открыть в старой версии, конвертация проекта, сохранить как, save as"
        title="«The file you are attempting to open was created with After Effects version XX.X.X (Windows/macOS) and cannot be opened with this version» или как открыть проект, созданный в более новой версии программы, если я не хочу обновляться?"
      >
        <p>
          Скорее всего, вы пытаетесь открыть проект, который был создан в более новой
          версии <mark className="app">Adobe After Effects</mark>, чем та, что у вас
          установлена. В этом случае есть два варианта решения проблемы: попросить
          пользователя с более новой версией программы сохранить проект в старом формате
          или обновить <mark className="app">Adobe After Effects</mark> до актуальной
          версии. Второй способ проще и быстрее — не поленитесь потратить час на установку
          новой версии <mark className="app">Adobe After Effects</mark> и{" "}
          <a href="#4.3">перенос настроек с плагинами</a>.{" "}
          <i style={{opacity: "0.5"}}>
            Это сэкономит вам время в будущем, если вы часто работаете с чужими проектами.
          </i>
        </p>
        <Addition type="info">
          Проекты, созданные в <mark>Windows</mark>, без проблем откроются в версии для{" "}
          <mark>macOS</mark> и наоборот.
        </Addition>
        <Addition type="warning">
          <ul>
            <li>
              Обратите внимание, что новые версии{" "}
              <mark className="app">Adobe After Effects</mark> уже не позволяют сохранять
              проекты для версий <mark>18.X</mark> или <mark>22.X</mark>. В таком случае
              потребуется установить несколько версий программы и поочерёдно
              конвертировать проект через каждую.
            </li>
            <li>
              После сохранения проекта в старом формате часть функций или эффектов,
              добавленных в более новой версии{" "}
              <mark className="app">Adobe After Effects</mark>, могут работать некорректно
              или вовсе не поддерживаться в вашей старой версии программы.
            </li>
          </ul>
        </Addition>
        <Divider>Конвертируем проект для старой версии Adobe After Effects</Divider>
        <p>
          Чтобы сохранить проект в формате более старой версии программы, перейдите в{" "}
          <mark className="select">«File» → «Save As»</mark> и выберите нужную версию из
          списка. Программа предложит указать папку для сохранения копии проекта.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Сохранение проекта под более старую версию"
          src="images/aftereffects/file_save_as.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          После конвертации откройте сохранённый файл в нужной старой версии{" "}
          <mark className="app">Adobe After Effects</mark>. Рекомендуется сохранять копию
          проекта в той же папке, где находится оригинал, чтобы избежать проблем с путями
          к исходникам.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default AEImport;
