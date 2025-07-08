import React from "react";

import {Divider} from "antd";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

import DetailsSummary from "../../../components/DetailsSummary";

import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";

import {AdditionInfo, AdditionWarning} from "../../../components/Additions";

const PRExportProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/PRExportProblems.tsx" />
      <DetailsSummary title='При попытке экспорта появляется "Error compiling movie", а в конце лога - "Error code: -1609629695"'>
        <p>
          Данная ошибка может появиться по самым разным причинам - универсального способа
          устранить его нет. Чаще всего она связана с применёнными эффектами, кривыми
          исходниками, сбоями в работе аппаратного ускорения, нехваткой оперативной памяти
          или нехваткой места на вашем жёстком диске. Обычно конкретика проблемы
          указывается в окне с ошибкой.
        </p>
        <AdditionWarning>
          Приведённые ниже способы{" "}
          <u>
            <b>не являются панацеей</b>
          </u>{" "}
          для решения ошибки и позволяют лишь исключить часть проблем при экспорте вашей
          секвенции.
        </AdditionWarning>
        <ul>
          <li>
            Если у вас в логах пишется{" "}
            <mark className="ui">Accelerated Renderer Error</mark> или{" "}
            <mark className="ui">Ошибка рендеринга с ускорением</mark> - попробуйте
            отключить <mark>GPU-ускорение</mark> в настройках проекта на время. Для этого
            перейдите в{" "}
            <mark className="ui">File &gt; Project Settings &gt; General</mark> и выберите
            в параметре <mark className="ui">Renderer</mark> значение{" "}
            <mark className="ui">Mercury Playback Engine Software Only</mark>.
            <AdditionWarning>
              Скорость экспорта при переключении рендеринга на процессор может измениться
              в лучшую или худшую сторону.
            </AdditionWarning>
          </li>
          <li>
            Попробуйте экспортировать вашу секвенцию в другой формат видео, например в{" "}
            <mark className="video">QuickTime</mark> в кодеке{" "}
            <mark className="video">Apple Prores 422</mark> или использовать сторонние
            плагины <mark className="plugin">Voukoder</mark> или{" "}
            <mark className="plugin">AfterCodecs</mark> для экспорта. Если экспорт
            произойдет успешно, то полученный файл, при необходимости, вы можете позже
            переконвертировать в нужный вам формат.
          </li>
          <li>
            Попробуйте заменить и перекодировать все ваши исходники в монтажный кодек,
            например <mark className="video">Apple Prores 422</mark>.
          </li>
          <li>
            Если у вас указвыается таймкод, где происходит ошибка - перейдите на это место
            и проанализируйте ваши действия. Скорее всего там был применён эффект, который
            может ломать ваш экспорт. Попробуйте его отключить на время или заменить на
            другой эффект, а затем повторить экспорт.
          </li>
          <li>
            Перед экспортом рекомендуется очистить кэш. Для этого перейдите в{" "}
            <mark className="ui">Edit &gt; Preferences &gt; Media Cache</mark>, найдите
            раздел <mark className="ui">Media Cache Files</mark> и нажмите кнопку{" "}
            <mark className="ui">Delete</mark>. В этой же вкладке настроек можно настроить
            автоматическую очистку или изменить место хранения кэша.
          </li>
          <li>
            Убедитесь в том, что вы не используете кириллицу в путях исходников, а также в
            пути для вывода файла. Программы от <mark>Adobe</mark> с давних пор не любят
            кириллицу в путях и эта проблема тянется и до последних версий.
          </li>
          <li>
            Если вы выводите через <mark className="app">Adobe Media Encoder</mark>, то
            откажитесь от него в пользу экспорта напрямую из{" "}
            <mark className="app">Adobe Premiere Pro</mark>.
          </li>
          <li>
            Если предыдущие методы не помогли - попробуйте включить опцию{" "}
            <mark>Use Previews</mark> в настройках экспорта, чтобы использовать файлы
            пререндера.
            <AdditionInfo>
              <ul>
                <li>
                  Чтобы создать файлы пререндера - используйте{" "}
                  <mark className="ui">Sequence &gt; Render In to Out</mark>,
                  предварительно установив точки входа и выхода на таймлайне с помощью{" "}
                  <mark className="key">I</mark> и <mark className="key">O</mark>.
                </li>
                <li>
                  Рекомендуется установить кодек{" "}
                  <mark className="video">Apple Prores 422</mark> для файлов пререндера в
                  настройках секвенции. По умолчанию там установлено{" "}
                  <mark className="video">Apple Prores 422 LT</mark>, а нужен -{" "}
                  <mark className="video">Apple Prores 422</mark>.
                </li>
                <li>
                  Экспортировать секвенцию с файлами пререндера нужно в том же кодеке, что
                  указано в настройках секвенции в разделе{" "}
                  <mark className="ui">Video Previews</mark>. Если указали{" "}
                  <mark className="video">Apple Prores 422</mark> - экспортируйте своё
                  видео именно в нём, иначе файлы пререндера не подтянутся автоматически.
                </li>
              </ul>
            </AdditionInfo>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title='"An unknown error (-1609629695) occurred during the Project Manager operation"'>
        <p>
          Попробуйте выключить чекбокс напротив параметра{" "}
          <mark className="ui">Include Preview Files</mark>, а затем повторить попытку
          сбора материалов в нужную папку.
        </p>
        <ImageFigure
          caption="Project Manager"
          imgSrc="images/premierepro/disable_include_preview_files.png"
          imgTitle="Отключаем Include Preview Files в менеджере проекта"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Экспортировал секвенцию в H.264 и отправил пользователю iPhone, а он не может открыть видео. Почему это происходит и как это исправить?">
        <p>
          <mark className="app">Adobe Premiere Pro</mark> поднимает значение{" "}
          <mark className="ui">Level</mark> для секвенций с большим разрешением, например{" "}
          <mark>3840 на 2160</mark>, а <mark>iPhone</mark> не может понять такие файлы.
          Для решения проблемы - попробуйте в настройках экспорта опустить{" "}
          <mark className="ui">Level</mark> до значения <mark>4.1</mark>, предварительно
          убрав чекбоксы напротив <mark className="ui">Profile</mark> и{" "}
          <mark className="ui">Level</mark> для разблокировки настроек.
        </p>
        <VideoFigure
          caption="Export"
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/set_level_4-1.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Что делать, если экспорт зависает на определённом моменте?">
        <p>
          При экспорте проблема зависания полоски прогресса может возникнуть по разным
          причинам.
        </p>
        <p>
          Иногда вам может помочь использование <mark>Pre-render</mark> файлов для
          финального экспорта.
        </p>
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        tag="не экспортируется, битый файл"
        title="Почему при экспорте в MP4 через встроенный кодек H.264 сохраняется файл с размером в 1 Кб?"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="исходник с айфона, hlg, rec709"
        title="После экспорта у меня изменились цвета. Как избежать изменения цветов?"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="медиаенкодер, медиаэнкодер, переместилось"
        title="Почему в предпросмотре Premiere Pro, Media Encoder и после экспорта видео смещается влево или вправо?"
      >
        <p>
          Проверьте текущую версию программ, установленные на вашем устройстве. Вполне
          вероятно, что вы используете версии в промежутках от <mark>23.1</mark> до{" "}
          <mark>23.5</mark>, где присутствует такой неприятный баг смещения текущего
          кадра. Оно может возникнуть при использовании композиций из{" "}
          <mark className="app">Adobe After Effects</mark> через{" "}
          <mark className="plugin">Dynamic Link</mark> или при экспорте секвенции через{" "}
          <mark className="app">Adobe Media Encoder</mark>. Для решения данного бага
          просто обновите все программы от Adobe до <mark>23.6</mark> или свежее.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="колор бендинг, полоски, цвет, шум, глубина цвета"
        title="Экспортировал композицию и вижу в результате ужасный ступенчатый градиент. Как мне от него избавиться?"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу экспортировать видео в H.264 с нечётным разрешением?">
        <p>
          Вы не сможете экспортировать видео в <mark className="video">H.264</mark> или{" "}
          <mark className="video">H.265</mark> с нечётным разрешением из-за технических
          особенностей кодекса. Данные кодеки используют макроблоки с чётными значениями,
          поэтому чисто технически у вас не получится указать разрешение, например{" "}
          <mark>575</mark>.
        </p>
        <ImageFigure
          caption="Ошибка в AfterCodecs при экспорте с нечётным разрешением"
          imgSrc="images/odd_resolution_error.png"
          imgTitle="Ошибка экспорта с нечётным разрешением"
          styleClass="figure_windows-light"
        />
        <p>
          Для решения проблемы просто укажите чётное значение пикселей у каждой стороны в
          свойствах композиции. Для этого откройте настройки композиции с помощью
          комбинации клавиш <mark className="key">Ctrl + K</mark> и укажите в параметрах
          ширины и высоты цифровое значение, которые делится на 2 без остатка. После
          изменения настроек композиции попробуйте начать экспорт заново.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Почему после экспорта отсутствует звук в видео?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="конвертация, шаттер енкодер, сжатие видео, квантование, cqr"
        title="Как сжать экспортированное видео без сильной потери качества или до определённого веса?"
      >
        <p>
          При экспорте какой-нибудь секвенции из{" "}
          <mark className="app">Adobe Premiere Pro</mark> можно наткнуться на неприятный
          сюрприз - файл может получиться слишком большим по весу. Такой файл может не
          подойти для загрузки видео на нужный сервис или просто занимать кучу места на
          диске. В таких случаях без сжатия и конвертации видео не обойтись.
        </p>
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
          <mark className="ui">Choose function</mark> формат, в который вы хотите вывести
          видео. Между прочим, выбор кодека для конвертации тоже влияет на вес и качество
          картинки, но не все устройства и площадки могут поддерживать тот или иной кодек.
          В большинстве случаев нам подойдет <mark className="video">H.264</mark> или{" "}
          <mark className="video">H.265</mark>.
        </p>
        <p>
          После выбора кодека, в правой части окна программы появятся различные настройки
          кодирования. Нас интересует лишь раздел{" "}
          <mark className="ui">Bitrate adjustment</mark>. В этом разделе изменение
          параметров битрейта сильно влияет на качество видео и размер после конвертации.
          Там можно выбрать три варианта для кодирования.
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
          конвертер и в нём ещё не было возможности экспорта секвенций из{" "}
          <mark className="app">Adobe Premiere Pro</mark>. Воспользуемся в кои-то веки
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
    </div>
  );
};

export default PRExportProblems;
