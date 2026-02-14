import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PrExportProblems: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="fix-error-1609629695"
        title="«Error compiling movie» с кодом -1609629695"
      >
        <p>
          Эта ошибка может появиться по самым разным причинам, универсального способа
          устранить её нет. Чаще всего она связана с применёнными эффектами, «кривыми»
          исходниками, сбоями в работе аппаратного ускорения, нехваткой оперативной памяти
          или места на жёстком диске. Обычно конкретика проблемы указывается в окне с
          ошибкой.
        </p>
        <Addition type="warning">
          Приведённые ниже способы{" "}
          <u>
            <b>не являются панацеей</b>
          </u>{" "}
          для решения ошибки и позволяют лишь исключить часть проблем при экспорте вашей
          секвенции.
        </Addition>
        <ul>
          <li>
            Если в логах пишется{" "}
            <mark className="select">«Accelerated Renderer Error»</mark> или{" "}
            <mark className="select">«Ошибка рендеринга с ускорением»</mark> — попробуйте
            отключить <mark>GPU-ускорение</mark> в настройках проекта на время. Для этого
            перейдите в{" "}
            <mark className="select">«File» → «Project Settings» → «General»</mark> и
            выберите в параметре <mark className="select">«Renderer»</mark> значение{" "}
            <mark className="select">«Mercury Playback Engine Software Only»</mark>.
            <Addition type="warning">
              Скорость экспорта при переключении рендеринга на процессор может измениться
              в лучшую или худшую сторону.
            </Addition>
          </li>
          <li>
            Попробуйте экспортировать вашу секвенцию в другой формат видео, например в{" "}
            <mark className="video">QUICKTIME</mark> с кодеком{" "}
            <mark className="video">Apple ProRes 422</mark> или использовать сторонние
            плагины <mark className="plugin">Voukoder</mark> или{" "}
            <mark className="plugin">AfterCodecs</mark> для экспорта. Если экспорт пройдёт
            успешно, полученный файл при необходимости можно позже переконвертировать в
            нужный вам формат.
          </li>
          <li>
            Попробуйте заменить и перекодировать все ваши исходники в монтажный кодек,
            например <mark className="video">Apple ProRes 422</mark>.
          </li>
          <li>
            Если у вас указывается тайм-код, где происходит ошибка, перейдите на это место
            и проанализируйте свои действия. Скорее всего, там был применён эффект,
            который может ломать ваш экспорт. Попробуйте его отключить на время или
            заменить на другой, а затем повторить экспорт.
          </li>
          <li>
            Перед экспортом рекомендуется очистить кэш. Для этого перейдите в{" "}
            <mark className="select">«Edit» → «Preferences» → «Media Cache»</mark>,
            найдите раздел <mark className="select">«Media Cache Files»</mark> и нажмите
            кнопку <mark className="select">«Delete»</mark>. В этой же вкладке настроек
            можно настроить автоматическую очистку или изменить место хранения кэша.
          </li>
          <li>
            Убедитесь, что вы не используете кириллицу в путях к исходникам, а также в
            пути для вывода файла. Программы от <mark className="company">Adobe</mark> с
            давних пор не любят кириллицу в путях, и эта проблема тянется до последних
            версий.
          </li>
          <li>
            Если вы выводите через <mark className="app">Adobe Media Encoder</mark>, то
            откажитесь от него в пользу экспорта напрямую из{" "}
            <mark className="app">Adobe Premiere</mark>.
          </li>
          <li>
            <p>
              Если предыдущие методы не помогли, попробуйте включить опцию{" "}
              <mark>Use Previews</mark> в настройках экспорта, чтобы использовать файлы
              пререндера.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Чтобы создать файлы пререндера, используйте{" "}
                  <mark className="select">«Sequence» → «Render In to Out»</mark>,
                  предварительно установив точки входа и выхода на таймлайне с помощью{" "}
                  <mark className="key">I</mark> и <mark className="key">O</mark>.
                </li>
                <li>
                  Рекомендуется установить кодек{" "}
                  <mark className="video">Apple ProRes 422</mark> для файлов пререндера в
                  настройках секвенции. По умолчанию там установлено{" "}
                  <mark className="video">Apple ProRes 422 LT</mark>, а нужен —{" "}
                  <mark className="video">Apple ProRes 422</mark>.
                </li>
                <li>
                  Экспортировать секвенцию с файлами пререндера нужно в том же кодеке, что
                  указан в настройках секвенции в разделе{" "}
                  <mark className="select">«Video Previews»</mark>. Если указали{" "}
                  <mark className="video">Apple ProRes 422</mark> — экспортируйте своё
                  видео именно в нём, иначе файлы пререндера не подтянутся автоматически.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-error-1609629695-during-the-project-manager-operation"
        title="«An unknown error (-1609629695) occurred during the Project Manager operation»"
      >
        <p>
          Попробуйте выключить флажок напротив параметра{" "}
          <mark className="select">«Include Preview Files»</mark>, а затем повторить
          попытку сбора материалов в нужную папку.
        </p>
        <ArticleMedia
          caption="Project Manager"
          src="legacy/premierepro/disable_include_preview_files.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-playback-error"
        tag="0x80070002, mp4, ошибка воспроизведения"
        title="Почему я не могу открыть видео‚ которое я экспортировал?"
      >
        <p>
          <mark className="app">Adobe Premiere</mark> поднимает значение{" "}
          <mark className="select">«Level»</mark> для секвенций с большим разрешением,
          например <mark>3840 на 2160</mark>, а <mark>iPhone</mark> не может понять такие
          файлы. Для решения проблемы попробуйте в настройках экспорта опустить{" "}
          <mark className="select">«Level»</mark> до значения <mark>4.1</mark>,
          предварительно убрав флажки напротив <mark className="select">«Profile»</mark> и{" "}
          <mark className="select">«Level»</mark> для разблокировки настроек.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/set_level_4-1.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-render-freeze"
        title="Что делать, если экспорт зависает на определённом моменте?"
      >
        {/*   <p>
          При экспорте проблема зависания полосы прогресса может возникнуть по разным
          причинам.
        </p>
        <p>
          Иногда вам может помочь использование <mark>Pre-render</mark> файлов для
          финального экспорта.
        </p> */}
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-export-1kb-file"
        tag="file importer detected an inconsistency in the file structure, reading and writing this file's metadata (xmp) has been disabled, не экспортируется, битый файл"
        title="Почему при экспорте в MP4 через встроенный кодек H.264 и HEVC сохраняется файл с размером в 1 КБ?"
      >
        <p>
          Скорее всего, вы столкнулись с багом <mark className="app">Adobe Premiere</mark>{" "}
          версии <mark>23.1</mark>. Из-за кириллицы или символов вне <mark>ASCII</mark> в
          пути сохранения при экспорте через встроенный кодек{" "}
          <mark className="video">H.264</mark> и <mark className="video">HEVC</mark>{" "}
          получается повреждённый файл размером <mark>1 КБ</mark>, который не открывается
          ни одной программой.
        </p>
        <Addition type="info">
          Проверить текущую версию <mark className="app">Adobe Premiere</mark> можно в
          меню <mark className="select">«Help» → «About Premiere»</mark>.
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
          секвенции без кириллицы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-export-color-shift"
        tag="iphone, hlg, rec.709, color shift, color space, color management"
        title="Почему после экспорта у меня изменились цвета и оттенки?"
      >
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-position-shift"
        tag="медиаенкодер, медиаэнкодер, переместилось"
        title="Почему в предпросмотре Premiere, Media Encoder и после экспорта видео смещается влево или вправо?"
      >
        <p>
          Проверьте текущую версию программ, установленных на вашем устройстве. Вполне
          вероятно, что вы используете версии в промежутке от <mark>23.1</mark> до{" "}
          <mark>23.5</mark>, где присутствует этот неприятный баг смещения текущего кадра.
          Он может возникнуть при использовании композиций из{" "}
          <mark className="app">Adobe After Effects</mark> через{" "}
          <mark className="plugin">Dynamic Link</mark> или при экспорте секвенции через{" "}
          <mark className="app">Adobe Media Encoder</mark>. Для решения этого бага просто
          обновите все программы от Adobe до <mark>23.6</mark> или свежее.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-color-banding"
        tag="color banding, полосы, шум, глубина цвета, bit depth"
        title="Как избавиться от ужасного ступенчатого градиента?"
      >
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-odd-resolution-error"
        title="Почему при экспорте размер секвенция растягивается до чётного значения?"
      >
        <p>
          Вы не сможете экспортировать видео в <mark className="video">H.264</mark> или{" "}
          <mark className="video">H.265</mark> с нечётным разрешением из-за технических
          особенностей кодека. Данные кодеки используют макроблоки с чётными значениями,
          поэтому чисто технически у вас не получится указать разрешение, например{" "}
          <mark>575</mark>.
        </p>
        <ArticleMedia
          caption="Ошибка в AfterCodecs при экспорте с нечётным разрешением"
          src="legacy/odd_resolution_error.png"
          type="image"
        />
        <p>
          Для решения проблемы просто укажите чётное значение пикселей у каждой стороны в
          свойствах композиции. Для этого откройте настройки композиции с помощью
          комбинации клавиш <mark className="key">Ctrl + K</mark> и укажите в параметрах
          ширины и высоты цифровое значение, которые делится на 2 без остатка. После
          изменения настроек композиции попробуйте начать экспорт заново.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="no-sound-after-export"
        title="Почему после экспорта отсутствует звук в видео?"
      >
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        anchor="compress-video-shutter-encoder"
        tag="конвертация, шаттер енкодер, сжатие видео, квантование, cqr"
        title="Как сжать экспортированное видео без сильной потери качества или до определённого веса?"
      >
        <p>
          При экспорте какой-нибудь секвенции из{" "}
          <mark className="app">Adobe Premiere</mark> можно наткнуться на неприятный
          сюрприз — файл может получиться слишком большим по весу. Такой файл может не
          подойти для загрузки видео на нужный сервис или просто занимать кучу места на
          диске. В таких случаях без сжатия и конвертации видео не обойтись.
        </p>
        <Divider>Конвертируем через Shutter Encoder</Divider>
        <p>
          Для быстрой конвертации видео нам понадобится{" "}
          <mark className="app">Shutter Encoder</mark> — бесплатный и популярный
          графический интерфейс утилиты <mark className="app">FFmpeg</mark>, который
          доступен для <mark>Windows</mark> и <mark>macOS</mark>. С помощью него можно
          конвертировать видео в распространённые форматы и при необходимости указывать
          нужные настройки кодирования.
        </p>
        <Addition type="info">
          Если у вас не установлен <mark className="app">Shutter Encoder</mark>, то его
          можно скачать <a href="https://www.shutterencoder.com/">по этой ссылке</a>.
          Чтобы скачать программу бесплатно, на сайте установите чекбокс{" "}
          <mark className="select">
            «I do not wish to participate in the development of the software»
          </mark>
          , а затем нажмите на кнопку скачивания для вашей операционной системы.
        </Addition>
        <p>
          После установки и открытия <mark className="app">Shutter Encoder</mark> —
          начните импорт вашего получившегося файла. Затем укажите в{" "}
          <mark className="select">«Choose function»</mark> формат, в который вы хотите
          вывести видео. Между прочим, выбор кодека для конвертации тоже влияет на вес и
          качество картинки, но не все устройства и площадки могут поддерживать тот или
          иной кодек. В большинстве случаев нам подойдёт{" "}
          <mark className="video">H.264</mark> или <mark className="video">H.265</mark>.
        </p>
        <p>
          После выбора кодека, в правой части окна программы появятся различные настройки
          кодирования. Нас интересует лишь раздел{" "}
          <mark className="select">«Bitrate adjustment»</mark>. В этом разделе изменение
          параметров битрейта сильно влияет на качество видео и размер после конвертации.
          Там можно выбрать три варианта для кодирования.
        </p>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/shutter_encoder_interface.png"
          type="image"
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
            <Addition type="warning">
              Данный вариант кодирования подойдёт, если нужно максимально ужать видео до
              нужного размера по весу. Но есть загвоздка — из-за особенностей{" "}
              <mark className="word">переменного битрейта</mark> сложно предсказать размер
              файла, а также качество получаемой картинки.
            </Addition>
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
            <Addition type="warning">
              <mark>CQ-квантование</mark> поддерживается не всеми кодеками.
            </Addition>
            <Addition type="info">
              <ul>
                <li>
                  В отличие от <mark>VBR</mark>, где качество может сильно колебаться,
                  качество видео, закодированное с помощью <mark>CQ</mark>, останется
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
            </Addition>
          </li>
        </ul>
        <p>
          После выставления нужных значений укажите путь до файла, включите при
          необходимости конвертацию цветового пространства, а также аппаратное ускорение в
          нижней части интерфейса и нажмите на{" "}
          <mark className="select">«Start function»</mark>. После успешного завершения
          процедуры вы получите новый файл в той папке, в которой вы указали сохранение
          видео.
        </p>
        <Divider>Сжимаем через Adobe Media Encoder</Divider>
        <p>
          Изначально <mark className="app">Adobe Media Encoder</mark> был задуман как
          конвертер, и в нём ещё не было возможности экспорта секвенций из{" "}
          <mark className="app">Adobe Premiere</mark>. Воспользуемся в кои-то веки данной
          программой по назначению. Чтобы начать конвертацию — импортируйте нужное видео в{" "}
          <mark className="app">Adobe Media Encoder</mark> любым способом — через{" "}
          <mark className="word">drag-n-drop</mark> в очередь экспорта, через{" "}
          <mark className="select">«File» → «Import»</mark>, через{" "}
          <mark className="key">Ctrl + I</mark> или с помощью двойного нажатия по пустой
          очереди экспорта. В открывшемся окне проводника укажите путь до файла, который
          нужно конвертировать.
        </p>
        <ArticleMedia
          caption="Media Encoder"
          src="legacy/media_encoder_import.png"
          type="image"
        />
        <p>
          После импорта файлов вы можете выбрать формат, шаблон и путь сохранения для
          конвертируемого видео. Слева от выбора формата или шаблона вы можете открыть
          список шаблонов, а нажав по названию формата или шаблона — вы можете открыть
          редактор шаблона для конвертации, где вы можете изменить различные параметры
          конвертации. Также вы можете указать путь до папки, в которую нужно сохранить и
          вариант рендера на процессоре или с аппаратным ускорением с помощью видеокарты.
        </p>
        <ArticleMedia
          caption="Media Encoder"
          src="legacy/media_encoder_exporting.png"
          type="image"
        />
        <Addition type="info">
          В <mark className="app">Adobe Media Encoder</mark> можно конвертировать видео с
          помощью сторонних плагинов, по типу <mark className="plugin">Voukoder</mark> и{" "}
          <mark className="plugin">AfterCodecs</mark>, если вам не нравится результат от
          стандартных кодеков.
        </Addition>
        <p>
          После настройки параметров просто нажмите на кнопку начала конвертации и
          ожидайте результата в выходной папке.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PrExportProblems;
