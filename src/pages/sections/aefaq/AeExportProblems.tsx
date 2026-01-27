import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import DetailsSummary from "../../../components/content/DetailsSummary";

const AeExportProblems: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        tag="ошибка экспорта, файл занят, видео используется другим процессом"
        title="«Rendering error while writing to file (...). Unable to delete existing file» или «An unexpected error occurred while exporting a composition. Error code: 9988»"
      >
        <p>
          Скорее всего, вы пытаетесь перезаписать файл, который в данный момент
          используется другой программой, например открыт в видеоплеере или отправляется в{" "}
          <mark className="app">Telegram</mark>.
        </p>
        <p>
          Для решения проблемы закройте программу, которая использует файл, и попробуйте
          снова. Если ошибка остаётся, перезагрузите устройство. В качестве крайней меры
          попробуйте изменить путь сохранения или выберите другой формат для экспорта.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="не экспортируется, битый файл, кириллица в пути"
        title="Почему при экспорте в MP4 с помощью стандартного H.264 сохраняется файл размером 1 КБ?"
      >
        <p>
          Скорее всего, вы столкнулись с багом{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>23.1</mark>. Из-за
          кириллицы или символов вне <mark>ASCII</mark> в пути сохранения при экспорте
          через встроенный кодек <mark className="video">H.264</mark> получается
          повреждённый файл размером <mark>1 КБ</mark>, который не открывается ни одной
          программой.
        </p>
        <Addition type="info">
          Проверить текущую версию <mark className="app">Adobe After Effects</mark> можно
          в меню <mark className="select">«Help» → «About After Effects»</mark>.
        </Addition>
        <p>
          Для решения этой проблемы достаточно обновить{" "}
          <mark className="app">Adobe After Effects</mark> до актуальной версии или до{" "}
          <mark>23.6</mark>, в которой ошибка исправлена, и повторить экспорт.
        </p>
        <p>
          Если не хотите или не можете обновить программу, экспортируйте видео через
          сторонние плагины вроде <mark className="plugin">Voukoder</mark> или{" "}
          <mark className="plugin">AfterCodecs</mark>, о чём{" "}
          <a href="#export-mp4">рассказано здесь</a>, или укажите путь сохранения
          композиции без кириллицы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="settings mismatch, output file will be resized from to meet format constraints, odd resolution, нечетное разрешение, ограничения h264"
        title="Почему при экспорте размер композиции растягивается до чётного значения?"
      >
        <p>
          Скорее всего, вы пытаетесь экспортировать композицию с нечётным разрешением,
          используя кодеки <mark className="video">H.264</mark>,{" "}
          <mark className="video">H.265</mark> или их производные. Эти кодеки не
          поддерживают нечётные разрешения из-за своих технических особенностей: они
          обрабатывают изображение макроблоками, размеры которых должны быть чётными.
          Поэтому чтобы соответствовать стандарту, кодек принудительно растягивает или
          обрезает изображение до ближайшего чётного значения.
        </p>
        <ArticleMedia
          caption="Предупреждение об изменении размеров композиции"
          src="legacy/aftereffects/output_file_will_be_resized.png"
          type="image"
        />
        <Addition type="info">
          Предупреждение <mark className="select">«Output file will be resized»</mark>{" "}
          может появиться и по другим причинам. Например, если формат вывода требует иного
          разрешения, чем у композиции, или если используется неквадратный пиксель.
        </Addition>
        <p>
          Кроме того, если у вас указано нечётное разрешение, вы не сможете экспортировать
          композицию через некоторые сторонние плагины, например{" "}
          <mark className="plugin">AfterCodecs</mark>, и получите соответствующую ошибку.
        </p>
        <ArticleMedia
          caption="Ошибка в AfterCodecs при экспорте с нечётным разрешением"
          src="legacy/odd_resolution_error.png"
          type="image"
        />
        <p>
          Чтобы решить эту проблему, откройте настройки композиции с помощью комбинации
          клавиш <mark className="key">Ctrl + K</mark> или через меню{" "}
          <mark className="select">«Composition» → «Composition Settings»</mark> и укажите
          чётные значения для ширины и высоты. После этого экспорт должен пройти без
          ошибок.
        </p>
        <Divider>А что, если нужно экспортировать H.264 с нечётным разрешением?</Divider>
        <p>
          Если вам всё же необходимо получить видео с нечётным разрешением, воспользуйтесь
          плагином <mark className="plugin">Voukoder</mark> для экспорта композиции. Он
          обходит ограничение кодека с помощью небольшой хитрости: перед кодированием
          плагин автоматически добавляет к кадру чёрную полосу в один пиксель или обрезает
          его на один пиксель, чтобы размеры стали чётными. После сжатия в метаданные
          файла записывается исходное нечётное разрешение. В результате большинство
          плееров и видеоредакторов корректно отобразят видео, несмотря на то что сам
          видеопоток имеет чётные размеры.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="конвертация, оптимизация размера, shutter encoder, сжатие видео, квантование, cqr, vbr, cbr, cq, large file size"
        title="Как уменьшить размер видео после экспорта, не потеряв в качестве?"
      >
        <p>
          При экспорте композиции из <mark className="app">Adobe After Effects</mark>{" "}
          итоговый файл может получиться слишком большим. Такой файл может не подойти для
          загрузки на нужный сервис и будет занимать много места на диске.
        </p>
        <p>
          Чтобы уменьшить размер видео, его нужно сжать с помощью видеокодека. Кодеки
          различаются по эффективности сжатия и совместимости с устройствами и
          программами.
        </p>
        <p>
          Если вы используете <mark className="app">Adobe After Effects</mark> версии ниже{" "}
          <mark>23.0</mark>, то, скорее всего, вы пытались экспортировать композицию без
          детальной настройки <mark className="select">«Output Module»</mark>. В старых
          версиях по умолчанию стоял неоптимальный пресет —{" "}
          <mark className="video">AVI</mark> с кодеком{" "}
          <mark className="video">Animation</mark> без сжатия, из-за чего экспортированный
          файл получался огромным.{" "}
          <i style={{opacity: "0.5"}}>
            Хотя достаточно было просто выбрать другой формат перед экспортом или
            воспользоваться <mark className="plugin">Voukoder</mark> или{" "}
            <mark className="plugin">AfterCodecs</mark>.
          </i>
        </p>
        <p>
          Если вы не хотите заново экспортировать композицию из{" "}
          <mark className="app">Adobe After Effects</mark>, достаточно прогнать полученное
          видео через любой конвертер, например{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">HandBrake</mark> или{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <Divider>Сжимаем видео с помощью Shutter Encoder</Divider>
        <p>
          Для быстрой конвертации видео можно воспользоваться{" "}
          <mark className="app">Shutter Encoder</mark> — это бесплатный графический
          интерфейс для утилиты <mark className="app">FFmpeg</mark>, доступный для{" "}
          <mark>Windows</mark> и <mark>macOS</mark>. Он позволяет конвертировать видео в
          распространённые форматы и гибко настраивать параметры кодирования.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Если у вас не установлен <mark className="app">Shutter Encoder</mark>, его
              можно скачать <a href="https://www.shutterencoder.com/">по этой ссылке</a>.
              Не забудьте передвинуть ползунок пожертвования на <mark>0</mark>, чтобы
              получить ссылку на скачивание.
            </li>
            <li>
              Рекомендуется использовать английский интерфейс программы: в русской
              локализации встречаются некорректные переводы, которые могут сбить с толку.
              Чтобы сменить язык, откройте настройки программы, нажав на иконку{" "}
              <mark className="select">«шестерёнки»</mark> в левом верхнем углу. В
              открывшемся окне найдите параметр{" "}
              <mark className="select">«Установить язык»</mark>, измените его значение на{" "}
              <mark className="select">«English»</mark> и подтвердите перезапуск.
            </li>
          </ul>
        </Addition>
        <ul>
          <li>
            После открытия <mark className="app">Shutter Encoder</mark> импортируйте в
            программу полученный файл из <mark className="app">Adobe After Effects</mark>{" "}
            с помощью кнопки <mark className="select">«Browse»</mark> или перетащите его в
            окно программы, чтобы добавить в очередь.
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_import.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Затем в <mark className="select">«Choose Function»</mark> выберите
              подходящий формат. Выбор зависит от ваших задач. Выбранный параметр будет
              применён ко всем файлам в очереди конвертации.
            </p>
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_choose_function.png"
              type="image"
            />
            <ul>
              <li>
                Для максимальной совместимости с большинством устройств выберите{" "}
                <mark className="video">H.264</mark>. Это самый распространённый кодек,
                который поддерживается практически везде: от старых смартфонов до
                современных браузеров. Хотя он менее эффективен по сравнению с новыми
                стандартами, это надёжный выбор, если видео должно открываться у всех без
                проблем.
              </li>
              <li>
                Если вам важнее более эффективное сжатие и хорошая поддержка на
                современных устройствах, подойдут <mark className="video">H.265</mark> или{" "}
                <mark className="video">VP9</mark>.{" "}
                <mark className="video">H.265 (HEVC)</mark> сжимает видео на 25–50% лучше,
                чем <mark className="video">H.264</mark>, но может не работать на старом
                оборудовании. <mark className="video">VP9</mark> — его открытая и
                бесплатная альтернатива от <mark className="company">Google</mark> со
                схожим уровнем сжатия, широко используемая на{" "}
                <mark className="app">YouTube</mark>.
              </li>
              <li>
                Для наилучшего сжатия существуют <mark className="video">AV1</mark> и{" "}
                <mark className="video">H.266</mark>. <mark className="video">AV1</mark> —
                современный открытый кодек, который сжимает видео ещё на 20–30%
                эффективнее, чем <mark className="video">H.265</mark>, но требует
                современного оборудования для кодирования и воспроизведения.{" "}
                <mark className="video">H.266 (VVC)</mark> — самый передовой стандарт
                сжатия видео, но его поддержка тоже крайне ограничена.
              </li>
            </ul>
          </li>
          <li>
            Если вы выбрали один из вышеописанных кодеков, для этих форматов потребуется
            выполнить ещё несколько действий.
            <ul>
              <li>
                <p>
                  Для начала нужно определиться с режимом кодирования, который определяет,
                  как программа управляет битрейтом, что напрямую влияет на качество и
                  размер итогового файла.
                </p>
                <ul>
                  <li>
                    <mark className="select">«CQ (Constant Quality)»</mark> — динамически
                    распределяет битрейт в зависимости от сложности сцены и поддерживает
                    стабильное качество на всём протяжении ролика. Это оптимальный выбор
                    для большинства задач.
                  </li>
                  <li>
                    <mark className="select">«VBR (Variable Bitrate)»</mark> — требует
                    настройки целевого и максимального битрейта, подобрать которые с
                    первого раза непросто, особенно если важно сохранить высокое качество
                    и при этом не получить слишком тяжёлый файл.
                  </li>
                  <li>
                    <mark className="select">«CBR (Constant Bitrate)»</mark> — использует
                    постоянный битрейт независимо от сложности кадра, что нередко приводит
                    к «раздутому» размеру файла и не гарантирует стабильное качество в
                    разных частях видео.
                  </li>
                </ul>
                <p>
                  Поскольку режим <mark className="select">«CQ»</mark> обеспечивает лучший
                  баланс между качеством и размером, измените стандартную настройку,
                  переключившись с <mark className="select">«VBR»</mark> на него.
                </p>
                <ArticleMedia
                  caption="Shutter Encoder"
                  src="legacy/shutter_encoder_change_cq_h264.mp4"
                  type="video"
                />
                <Addition type="info">
                  <ul>
                    <li>
                      Чем меньше значение <mark className="select">«CQ»</mark>, тем лучше
                      качество. По умолчанию устанавливается <mark>23</mark> — этого
                      достаточно для большинства случаев.
                    </li>
                    <li>
                      Если нужно сохранить почти максимальное качество, укажите значение
                      от <mark>17</mark> до <mark>20</mark>. Однако размер файла при этом
                      заметно возрастёт.
                    </li>
                    <li>
                      Экстремальные значения, например <mark>50</mark>, использовать не
                      рекомендуется — в итоге можно получить «кашу» из пикселей.
                    </li>
                  </ul>
                </Addition>
              </li>
              <li>
                Укажите битрейт для аудио в параметре{" "}
                <mark className="select">«Audio Bitrate»</mark>; достаточно установить
                значение <mark>320</mark> Кбит/с.
                <ArticleMedia
                  caption="Shutter Encoder"
                  src="legacy/shutter_encoder_change_audio_bitrate_h264.mp4"
                  type="video"
                />
              </li>
              <li>
                При необходимости включите аппаратное ускорение для декодирования видео в
                параметре <mark className="select">«Hardware Acceleration»</mark>. В
                большинстве случаев это ускорит процесс конвертации.
                <ArticleMedia
                  caption="Shutter Encoder"
                  src="legacy/shutter_encoder_enable_hardware_acceleration_h264.png"
                  type="image"
                />
                <Addition type="info">
                  Выбор значений в этом параметре зависит от формата, вашего устройства и
                  установленных драйверов.
                </Addition>
              </li>
            </ul>
          </li>
          <li>
            После настройки нужных параметров нажмите кнопку{" "}
            <mark className="select">«Start function»</mark> для начала конвертации. По
            умолчанию программа сохраняет готовые файлы в ту же папку, откуда были
            импортированы исходники.
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_start_function.png"
              type="image"
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
        <Divider>Сжимаем с помощью Adobe Media Encoder</Divider>
        <p>
          Изначально <mark className="app">Adobe Media Encoder</mark> был задуман как
          конвертер и раньше не имел прямого экспорта из{" "}
          <mark className="app">Adobe After Effects</mark>. Именно этой функцией и можно
          воспользоваться для сжатия видео.
        </p>
        <ul>
          <li>
            Для начала импортируйте видео в{" "}
            <mark className="app">Adobe Media Encoder</mark> любым удобным способом:
            перетащите файл в очередь, воспользуйтесь меню{" "}
            <mark className="select">«File» → «Import»</mark> или комбинацией клавиш{" "}
            <mark className="key">Ctrl + I</mark>, либо дважды щёлкните по пустой области
            в окне очереди.
            <ArticleMedia
              caption="Adobe Media Encoder"
              src="legacy/media_encoder_import.png"
              type="image"
            />
          </li>
          <li>
            После импорта файла вы можете указать формат, шаблон и путь для сохранения
            файла. Нажатие на название формата или пресета откроет редактор настроек, где
            можно изменить различные параметры или выбрать модуль рендеринга.
            <ArticleMedia
              caption="Adobe Media Encoder"
              src="legacy/media_encoder_exporting.png"
              type="image"
            />
            <Addition type="info">
              В <mark className="app">Adobe Media Encoder</mark> можно конвертировать
              видео с помощью сторонних плагинов, таких как{" "}
              <mark className="plugin">Voukoder</mark> и{" "}
              <mark className="plugin">AfterCodecs</mark>, если результат стандартных
              кодеков вас не устраивает.
            </Addition>
          </li>
          <li>
            После настройки нажмите кнопку запуска и дождитесь появления готового файла в
            указанной вами папке.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="битрейт, качество, артефакты, low quality"
        title="Из-за чего может ухудшаться качество композиции после экспорта?"
      ></DetailsSummary>
      <DetailsSummary
        tag="ame, кривые исходники"
        title="Почему после экспорта иногда появляются артефакты и дёрганные кадры?"
      ></DetailsSummary>
      <DetailsSummary
        tag="соотношение пикселей, pixel aspect ratio"
        title="Почему моя композиция «плющится» в предпросмотре и после экспорта?"
      >
        <p>
          Иногда при экспорте или предпросмотре композиции изображение может выглядеть
          сплюснутым или искажённым. Скорее всего, вы указали неквадратный пиксель в
          настройках композиции или попытались экспортировать видео в формате вроде{" "}
          <mark className="video">DV PAL</mark>, у которого соотношение сторон пикселя
          отличается от <mark>1:1</mark>.
        </p>
        <Divider>Проверяем настройки композиции</Divider>
        <p>
          Для начала проверьте соотношение сторон пикселя в настройках композиции. Для
          этого откройте их с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + K</mark> и посмотрите на значение параметра{" "}
          <mark className="select">«Pixel Aspect Ratio»</mark>. При необходимости
          исправьте значение на нужное, например на{" "}
          <mark className="select">«Square Pixels»</mark>.
        </p>
        <ArticleMedia
          caption="Composition Settings"
          src="legacy/aftereffects/change_pixel_aspect_ratio.png"
          type="image"
        />
        <Divider>Включаем коррекцию соотношения сторон пикселя</Divider>
        <p>
          Если вы всё же хотите использовать неквадратный пиксель для композиции, например
          для экспорта в <mark className="video">DV PAL</mark>, включите коррекцию
          соотношения сторон для предпросмотра. Она активируется параметром{" "}
          <mark className="select">«Pixel Aspect Ratio Correction»</mark> в меню окна
          предпросмотра. Это позволит корректно отображать видео и предотвратить
          неожиданные искажения после экспорта.
        </p>
        <ArticleMedia
          caption="Composition"
          src="legacy/aftereffects/enable_pixel_ratio_correction.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="color banding, полосы, шум, глубина цвета, bit depth"
        title="Как избавиться от ужасного ступенчатого градиента?"
      >
        <p>
          <mark className="word">Ступенчатый градиент</mark>, или{" "}
          <mark className="word">Color Banding</mark>, — это визуальный артефакт, при
          котором плавный переход между оттенками превращается в заметные цветовые
          «ступени».
        </p>
        <p>
          Этот дефект особенно заметен на участках с низкой контрастностью: на небе, в
          тумане или в местах, где близкие оттенки переходят друг в друга. Кроме того,
          видимость полос зависит от типа матрицы монитора — на одном они могут быть
          незаметны, а на другом — отчётливо видны.
        </p>
        <ArticleMedia
          autoPlay
          loop
          caption="Полосы в градиенте, дефект усилен с помощью Posterize"
          src="legacy/color_banding_example.mp4"
          type="video"
        />
        <p>
          Основная причина такого явления — ограниченная глубина цвета, вам просто не
          хватает цветов для отображения. Например, 8-битное изображение может отобразить
          лишь <mark>256</mark> градаций на цветовой канал, и если для плавного перехода
          их требуется больше, происходит округление до ближайших доступных значений. Это
          и создаёт видимую ступенчатость: вместо мягкой смены оттенков появляются
          отдельные полосы.
        </p>
        <p>
          Проблема усугубляется и выбором кодека. Кодеки, такие как{" "}
          <mark className="video">H.264</mark>, при экспорте применяют цветовую
          субдискретизацию <mark>4:2:0</mark>, которая значительно сокращает объём
          информации о цвете, что также может привести к появлению полос.
        </p>
        <ArticleMedia
          src="h9j89L8eQQk"
          type="youtube"
        />
        <Divider>Уменьшаем «полосатость»</Divider>
        <Addition type="danger">
          Описанные ниже способы не помогут полностью избавиться от полос.
        </Addition>
        <ul>
          <li>
            <p>
              В большинстве случаев проблема решается повышением глубины цвета проекта.
              Для этого откройте <mark className="select">«Project Settings»</mark> с
              помощью комбинации клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>, перейдите во вкладку{" "}
              <mark className="select">«Color»</mark> и в параметре{" "}
              <mark className="select">«Bit Depth»</mark> установите значение{" "}
              <mark>16 бит</mark> или <mark>32 бит</mark> на канал.
            </p>
            <Addition type="warning">
              Если вы увеличите глубину цвета, для рендеринга одного кадра потребуется
              больше ресурсов устройства, что повышает риск ошибок вроде{" "}
              <mark className="warning">«Out of Memory»</mark>.
            </Addition>
            <ArticleMedia
              caption="Project Settings"
              src="legacy/aftereffects/change_bit_depth.png"
              type="image"
            />
          </li>
          <li>
            Чтобы цветовая информация не сжималась, экспортируйте композицию в кодеке с
            поддержкой цветовой субдискретизации <mark>4:4:4</mark> — например, в{" "}
            <mark className="video">Apple Prores 4444</mark>. В качестве альтернативы
            используйте <mark className="plugin">Voukoder</mark> для экспорта в{" "}
            <mark className="video">H.264</mark> и его производные с субдискретизацией{" "}
            <mark>4:4:4</mark> вместо <mark>4:2:0</mark>.
          </li>
          <li>
            <p>
              Уменьшить эффект полос помогает и наложение шума. Для этого создайте
              корректирующий слой поверх всех остальных и примените к нему стандартный
              эффект <mark className="plugin">Add Grain</mark> или{" "}
              <mark className="plugin">Noise</mark> со значением <mark>1–5%</mark>.
            </p>
            <p>
              В качестве альтернативы можно применить эффект{" "}
              <mark className="plugin">Denoiser III</mark> из пакета{" "}
              <mark className="plugin">Red Giant Magic Bullet Suite</mark> или его аналоги
              для подавления шума.
            </p>
            <Addition type="info">
              Если вы часто работаете с градиентами, советуем создать свой пресет для
              подавления полос или скачать готовый{" "}
              <a
                download
                href="files/Remove Banding.ffx"
              >
                по этой ссылке
              </a>
              .
            </Addition>
            <Addition type="warning">
              Эффекты для генерации и подавления шума требуют больше ресурсов устройства,
              что повышает риск ошибок вроде{" "}
              <mark className="warning">«Out of Memory»</mark>.
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="iphone, hlg, rec.709, color shift, color space, color management"
        title="Почему после экспорта у меня изменились цвета и оттенки?"
      ></DetailsSummary>
      <DetailsSummary
        tag="пропало аудио, no audio"
        title="Почему в экспортированном видео нет звука?"
      >
        <p>
          Если в вашей композиции был звук, а в экспортированном видео его вдруг не
          оказалось, то, скорее всего, вы столкнулись с редким багом настроек вывода.
        </p>
        <p>
          Чтобы это исправить, перейдите в <mark className="select">«Output Module»</mark>{" "}
          и для параметра <mark className="select">«Audio Output»</mark> установите
          значение <mark className="select">«On»</mark> вместо{" "}
          <mark className="select">«Auto»</mark>.
        </p>
        <ArticleMedia
          caption="Output Module Settings"
          src="legacy/aftereffects/audio_output_on.png"
          type="image"
        />
        <Addition type="info">
          <ul>
            <li>
              Этот способ также может помочь избежать принудительной конвертации видео в{" "}
              <mark className="image">GIF</mark> в таких мессенджерах, как{" "}
              <mark className="app">Telegram</mark>.
            </li>
            <li>
              Если это не помогло, попробуйте экспортировать звук из композиции отдельно в
              формате <mark className="audio">WAV</mark>, импортировать его обратно в
              проект, заменив исходную аудиодорожку, и повторить экспорт.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="0x80070002, mp4, ошибка воспроизведения"
        title="Почему я не могу открыть видео‚ которое я экспортировал?"
      ></DetailsSummary>
      <DetailsSummary
        tag="зависает, ame"
        title="Из-за чего может зависать рендер при экспорте композиции через Adobe Media Encoder?"
      ></DetailsSummary>
      <DetailsSummary
        tag="баг версии, ame"
        title="Почему после экспорта с помощью Adobe Media Encoder видео смещается в сторону?"
      >
        <p>
          Проверьте версии используемых вами программ. Вероятно, вы используете{" "}
          <mark className="app">Adobe Media Encoder</mark> и{" "}
          <mark className="app">Adobe After Effects</mark> версий с <mark>23.1</mark> по{" "}
          <mark>23.5</mark>, в которых присутствует этот баг.
        </p>
        <p>
          Для решения проблемы достаточно обновить все программы до версии{" "}
          <mark>23.6</mark> или новее либо отказаться от{" "}
          <mark className="app">Adobe Media Encoder</mark> в пользу прямого экспорта из{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <Addition type="info">
          Проверить текущую версию <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> вы можете в меню{" "}
          <mark className="select">«Help» → «About»</mark>.
        </Addition>
      </DetailsSummary>
    </div>
  );
};

export default AeExportProblems;
