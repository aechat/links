import React from "react";

import {Divider} from "antd";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

import DetailsSummary from "../../../components/DetailsSummary";

import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";

import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

import ContentSwitcher from "../../../components/features/ContentFilter";

const PRExport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/PRExport.tsx" />
      <DetailsSummary
        tag="тикток, ютуб, максимальное качество, разрешение, битрейт"
        title="Какие настройки экспорта стоит установить для вывода в социальные сети?"
      >
        <p>
          Каждая социальная сеть или видео площадка, увы, пережимают загружаемое
          пользователем видео так, чтобы уместить у себя на серверах с меньшим объёмом
          файла. Если вы установите слишком высокое значение битрейта и разрешение,
          например для <mark>TikTok</mark>, то площадка с радостью всё пережмёт до{" "}
          <mark>1080p/60fps</mark> и около <mark>5 Мбит/с</mark>, поэтому разрешение{" "}
          <mark>4K</mark> и битрейт условно <mark>100 Мбит/с</mark> смысла ставить нет.
          Также установка слишком низкого битрейта или других неверных параметров могут
          испортить ваше прекрасное видео.
        </p>
        <p>
          А теперь в целом про качество: оно будет зависеть от того, что происходит на
          вашем экране. Если вы монтируете спокойные видео, то есть подкасты или ролики
          без редких движений, то вам спокойно хватит <mark>5-10 Мбит/с</mark> в{" "}
          <mark>1080p</mark> для сохранения всех деталей на видео.
        </p>
        <p>
          Если видео было закодировано условно в <mark>1 Мбит/с</mark>, то вернуть
          качество установкой более высокого битрейта, которое пережали до вас, нельзя.
          Это вам не архив, из которого можно распаковать несжатое видео с исходным
          качеством.
        </p>
        <YouTubeVideo
          caption="Почему снег и конфетти паршивят картинку"
          link="r6Rp-uo6HmI"
        />
        <p>
          Теперь поговорим о правилах хорошего тона для FPS. Если вы импортируете видео в
          монтажную программу в 30 кадров/сек, то и выводить нужно точно с такой же
          частотой, не больше. Вывести с меньшим фреймрейтом допустимо, если у вас такая
          творческая задумка, но с большим - нет смысла, кадры не появятся из воздуха.
          Если вы импортируете видео с разным фреймрейтом, например <mark>24</mark>,{" "}
          <mark>30</mark> и <mark>60</mark>, то лучше создавать композицию с наименьшим
          FPS, то есть в <mark>24</mark> кадра/сек в данном примере. Не всем понравится
          ваш трюк с комбинацией различных фреймрейтов в одном видео.
        </p>
        <YouTubeVideo
          caption="Как несовпадение частоты кадров портят ваше видео"
          link="p3Jb3UPAw-w"
        />
        <p>
          И прежде чем загрузить куда-нибудь контент с чересстрочной разверткой - сделайте
          её прогрессивной. Например, если у вас контент в <mark>1080i60</mark>, то его
          следует перевести в <mark>1080p30</mark>, то есть 60 чересстрочных полукадров в
          секунду следует заменить 30 прогрессивными кадрами в секунду.
        </p>
        <Divider>Экспортируем для YouTube</Divider>
        <p>
          Для публикации видео на YouTube нужно соблюдать{" "}
          <a href="https://support.google.com/youtube/answer/1722171?hl=ru#zippy=%2C%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA-h%2C%D0%B1%D0%B8%D1%82%D1%80%D0%B5%D0%B9%D1%82">
            несколько рекомендаций
          </a>
          .
        </p>
        <ul>
          <li>
            Контейнер у видео должен быть <mark className="video">MP4</mark>.
          </li>
          <li>
            Видеокодек должен быть <mark className="video">H.264</mark>.
          </li>
          <li>
            Аудиокодек должен быть <mark className="audio">AAC</mark> с частотой
            дискретизации <mark>48 кГц</mark> или <mark>96 кГц</mark>.
          </li>
          <li>
            Видео должно быть в переменном или постоянном битрейте. Ограничений на него
            нет, но лучше соблюдать таблицу битрейтов из официального сайта YouTube.
          </li>
        </ul>
        <Divider>Таблица рекомендуемого битрейта при использовании SDR</Divider>
        <table>
          <thead>
            <tr>
              <th>Разрешение</th>
              <th>Битрейт (24, 25, 30 FPS)</th>
              <th>Битрейт (48, 50, 60 FPS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8K</td>
              <td>80-160 Мбит/с</td>
              <td>120-240 Мбит/с</td>
            </tr>
            <tr>
              <td>2160p (4K)</td>
              <td>35-45 Мбит/с</td>
              <td>53-68 Мбит/с</td>
            </tr>
            <tr>
              <td>1440p (2К)</td>
              <td>16 Мбит/c</td>
              <td>24 Мбит/c</td>
            </tr>
            <tr>
              <td>1080p</td>
              <td>8 Мбит/c</td>
              <td>12 Мбит/c</td>
            </tr>
            <tr>
              <td>720p</td>
              <td>5 Мбит/c</td>
              <td>7,5 Мбит/c</td>
            </tr>
            <tr>
              <td>480p</td>
              <td>2,5 Мбит/c</td>
              <td>4 Мбит/c</td>
            </tr>
            <tr>
              <td>360p</td>
              <td>1 Мбит/c</td>
              <td>1,5 Мбит/c</td>
            </tr>
          </tbody>
        </table>
        <Divider>Таблица рекомендуемого битрейта при использовании HDR</Divider>
        <table>
          <thead>
            <tr>
              <th>Разрешение</th>
              <th>Битрейт (24, 25, 30 FPS)</th>
              <th>Битрейт (48, 50, 60 FPS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8K</td>
              <td>100-200 Мбит/с</td>
              <td>150-300 Мбит/с</td>
            </tr>
            <tr>
              <td>2160p (4K)</td>
              <td>44-56 Мбит/с</td>
              <td>66-85 Мбит/с</td>
            </tr>
            <tr>
              <td>1440p (2К)</td>
              <td>20 Мбит/с</td>
              <td>30 Мбит/с</td>
            </tr>
            <tr>
              <td>1080p</td>
              <td>10 Мбит/c</td>
              <td>15 Мбит/с</td>
            </tr>
            <tr>
              <td>720p</td>
              <td>6,5 Мбит/с</td>
              <td>9,5 Мбит/с</td>
            </tr>
            <tr>
              <td>480p</td>
              <td>Не поддерживается</td>
              <td>Не поддерживается</td>
            </tr>
            <tr>
              <td>360p</td>
              <td>Не поддерживается</td>
              <td>Не поддерживается</td>
            </tr>
          </tbody>
        </table>
        <Divider>Экспортируем для TikTok</Divider>
        <p>
          Данная площадка с вертикальными видео тоже имеет свои ограничения и рекомендации
          по кодированию видео.
        </p>
        <ul>
          <li>
            Вес полученного файла не должен превышать <mark>75 МБ</mark>, если вы
            собираетесь выкладывать видео с устройства на Android. Или не превышать{" "}
            <mark>250 МБ</mark>, если вы собираетесь выкладывать видео с устройства на
            <mark>iOS</mark>.
          </li>
          <li>
            Контейнер у видео должен быть <mark className="video">MP4</mark>.
          </li>
          <li>
            Видеокодек должен быть <mark className="video">H.264</mark>.
          </li>
          <li>
            Рекомендуется установить битрейт <mark>5-8 Мбит/с</mark> для видео в
            разрешении <mark>1080p</mark> или <mark>3-5 Мбит/с</mark> для видео в
            разрешении <mark>720p</mark>.
          </li>
        </ul>
        <Divider>
          Экспортируем для Instagram<sup>1</sup>
        </Divider>
        <AdditionDanger>
          <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark> признаны
          экстремистскими организациями и запрещены на территории Российской Федерации.
        </AdditionDanger>
        <p>
          На этой площадке можно выложить видео как отдельный пост, так и вертикальные
          Reels. Из-за того что это два разных типа публикаций, то и требования тоже
          разные.
        </p>
        <ul>
          <li>
            При создании обычного поста в него можно засунуть видео с соотношением сторон{" "}
            <mark>4:5</mark>, <mark>16:9</mark> или <mark>4:3</mark>.
          </li>
          <li>
            Если вы попытаетесь опубликовать видео с соотношением сторон <mark>9:16</mark>
            , то оно превратится в Reels.
          </li>
          <li>
            Желательно использовать фреймрейт <mark>24</mark>, <mark>25</mark> или{" "}
            <mark>30</mark> FPS, а битрейт установить <mark>5 Мбит/с</mark>.
            <AdditionInfo>
              Из-за специфики алгоритмов сжатия на этой платформе видео с 60 FPS может
              нещадно резаться в битрейте, соответственно и в качестве.
            </AdditionInfo>
          </li>
        </ul>
        <Divider>Экспортируем для Telegram</Divider>
        <p>
          Этот мессенджер более лоялен к видео файлам. Если выкладывать видео через{" "}
          <mark className="app">Telegram Desktop</mark> в личные чаты или каналы, то он
          отправится без сжатия и не пережмёт ваше видео. Это хорошо, если нужно отдать
          клиенту видео в оригинальном качестве, но не очень, если собираетесь выкладывать
          видео в пост, так как не все смогут скачать полностью видео. Поэтому просто
          постарайтесь любыми способами обойтись в <mark>50 МБ</mark> для коротких видео
          или <mark>300 МБ</mark> для длинных. Желательно тоже в кодеке{" "}
          <mark className="video">H.264</mark>.
        </p>
        <p>
          Публикация видео в каналы и через мобильные устройства может ухудшить ваше видео
          из-за автоматической конвертации по умолчанию в чуть худшее качество, чем
          оригинал. Для того чтобы отправить видео в максимальном качестве - нажмите на
          кнопку выбора качества и потяните его максимально вправо.
        </p>
        <ImageFigure
          caption="Telegram"
          imgSrc="images/phone_telegram_videoquality.jpg"
          imgTitle="Выбор качества видео в Telegram"
          styleClass="figure_windows-dark"
        />
        <p>
          Если вы хотите опубликовать историю в Telegram, то вам нужно экспортировать
          видео в разрешении <mark>1280 x 720</mark> и указать перед экспортом битрейт до{" "}
          <mark>5 Мбит/с</mark>.
        </p>
        <AdditionWarning>
          Если вы попробуете опубликовать историю с разрешением больше, чем{" "}
          <mark>1280 x 720</mark>, то <mark className="app">Telegram</mark> обратно сожмёт
          ваше видео до <mark>720p</mark>.
        </AdditionWarning>
        <p>
          Для анимированной аватарки вашего профиля нужно вывести видео в разрешении до{" "}
          <mark>800 x 800</mark> и с битрейтом до <mark>2 Мбит/с</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в MP4 и H.264/H.265?">
        <p>
          Предположим, что вы хотите вывести качественное видео с минимальным весом в
          кодеке
          <mark className="video">H.264</mark> или <mark className="video">H.265</mark>, а
          также в цветовом пространстве <mark>Rec.709</mark>. Из{" "}
          <mark className="app">Adobe Premiere Pro</mark> можно вывести тремя способами.
        </p>
        <ul>
          <li>
            Через встроенный кодек <mark className="plugin">H.264</mark>.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">Voukoder</mark>. Доступен
            только для <mark>Windows</mark>, поддержка устройств на <mark>macOS</mark>{" "}
            косвенно присутствует с версий Voukoder Pro 2.0 и новее, но мы его
            рассматривать не будем.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">AfterCodecs</mark>. Доступен
            для <mark>Windows</mark> и <mark>macOS</mark>, а также поддерживает достаточно
            много старых версий программы.
          </li>
        </ul>
        <AdditionWarning>
          Через кодеки <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark> нельзя вывести видео с альфа-каналом, то
          есть с прозрачностью. Для вывода видео на прозрачном фоне воспользуйтесь
          форматом <mark className="video">Quicktime - Apple Prores 4444</mark>.
        </AdditionWarning>
        <p>
          Для начала нужно разобраться, куда что тыкать. Для того чтобы перейти к началу
          экспорта, перейдите в вкладку <mark className="ui">Export</mark> или нажмите на
          комбинацию клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <p>
          После этого вы переместитесь на полноэкранное окно настроек экспорта. В этой
          вкладке вы можете указать название файла, путь сохранения, формат и указать в
          вкладках более детальные настройки. Также вы можете выбрать область для
          кодирования видео - всю секвенцию или только часть.
        </p>
        <ImageFigure
          caption="Интерфейс экспорта"
          imgSrc="images/premierepro/export_interface.png"
          imgTitle="Интерфейс экспорта"
          styleClass="figure_windows-dark"
        />
        <Divider>Экспортируем через встроенный H.264</Divider>
        <p>
          По умолчанию при открытии вкладки экспорта,{" "}
          <mark className="app">Adobe Premiere Pro</mark> сам установит пресет для вывода
          в <mark className="video">H.264</mark> с переменным битрейтом с одним проходом
          примерно в 15 Мбит/с. Для социальных сетей таких параметров хватит спокойно.
        </p>
        <p>
          Если вам нужно изменить тип битрейта и скорость передачи данных - раскройте
          вкладку <mark className="ui">Video</mark> и измените нужные вам параметры. Из
          доступных параметров нам доступно изменение битрейта, кадров в секунду,
          цветового профиля, включение эффектов и переключение между Software- или
          Hardware-кодированием. Чтобы изменить{" "}
          <mark className="ui">заблокированные настройки</mark> - просто уберите чекбокс
          справа от нужного параметра.
        </p>
        <VideoFigure
          caption="Настройки экспорта видео"
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/export_video_settings.mp4"
        />
        <p>
          Затем просто нажмите на кнопку <mark className="ui">Export</mark> в правом
          нижнем углу и дождитесь окончания кодирования вашей секвенции.
        </p>
        <Divider>Экспортируем через Voukoder</Divider>
        <p>
          Если же вас результат рендера от стандартного H.264 не устраивает, то можно
          воспользоваться плагином <mark className="plugin">Voukoder</mark>. В этом
          примере мы рассмотрим плагин{" "}
          <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">версии 13.4.1</a>
          , не Pro версию.
        </p>
        <AdditionWarning>
          <ul>
            <li>
              Чтобы подключить плагин к <mark className="app">Adobe Premiere Pro</mark> -
              нужно скачать и установить сам <mark className="plugin">Voukoder</mark>и{" "}
              <mark className="plugin">коннектор</mark> к нему. Для корректной установки
              плагина - убедитесь в том, что вы не устанавливали{" "}
              <mark className="app">Adobe Premiere Pro</mark> в нестандартное
              расположение.
            </li>
            <li>
              В этой статье используется версия{" "}
              <mark className="plugin">Voukoder Classic 13.4.1</mark>. К сожалению,
              исходный репозиторий на{" "}
              <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">GitHub</a>{" "}
              был удалён, поэтому последнюю классическую версию вы можете найти в{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">складе стройматериалов</a> по
              хештегу <mark className="tag">#voukoder</mark>. Демонстрируемая версия
              плагина <mark className="plugin">Voukoder</mark> недоступна для устройств с{" "}
              <mark>macOS</mark>.
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Чтобы начать рендер с помощью <mark className="plugin">Voukoder</mark>, вам
          нужно снова перейти в вкладку <mark className="ui">Export</mark> и в параметре{" "}
          <mark className="ui">Format</mark> выбрать <mark className="ui">Voukoder</mark>.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/selecting_voukoder.png"
          imgTitle="Выбираем Voukoder для рендера"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы перейти в настройки плагина, вам нужно раскрыть вкладку{" "}
          <mark className="ui">Voukoder</mark> и нажать на кнопку{" "}
          <mark className="ui">Configure</mark>.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/open_voukoder_settings.png"
          imgTitle="Открываем настройки Voukoder"
          styleClass="figure_windows-dark"
        />
        <p>
          После открытия настроек нам нужно выбрать кодек, в который мы хотим
          экспортировать видео. В основном для вывода видео и его корректного открытия на
          многих современных устройствах используется кодек{" "}
          <mark className="video">H.264</mark>. Но можно и воспользоваться{" "}
          <mark className="video">HEVC (H.265)</mark>, если вам нужно примерно сохранить
          качество видео с меньшим объёмом файла. Кодеки{" "}
          <mark className="video">AV1</mark> и <mark className="video">VP9</mark> для
          вывода из <mark className="app">Adobe After Effects</mark> используются редко, а
          если уж и надо вывести в таком формате, то проще переконвертировать видео позже
          через условный <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
          Теперь поговорим и о приставках в названиях кодеков.
        </p>
        <AdditionInfo>
          Варианты кодирования показаны на устройстве с связкой процессора AMD и
          видеокарты NVIDIA. Выбор у вас может отличаться в зависимости от вашего железа.
        </AdditionInfo>
        <ul>
          <p>
            Для вариантов <mark className="video">H.264</mark> и{" "}
            <mark className="video">H.265</mark> есть три варианта для кодирования.
          </p>
          <li>
            <mark>x264</mark> или <mark>x265</mark> используется кодирования видео на
            процессоре без дополнительного использования видеокарты. Стабильно, но не
            всегда быстро.
          </li>
          <li>
            <mark>NVIDIA NVENC</mark> используется для кодирования видео с использованием
            видеокарты NVIDIA. Может ускорить процесс рендера, но не гарантирует 100%
            использование видеокарты.
          </li>
          <li>
            <mark>AMD AMF</mark> - тоже самое, что и предыдущий параметр, но на встроенном
            видеочипе AMD.
          </li>
        </ul>
        <ImageFigure
          caption="Voukoder 13.4.1"
          imgSrc="images/premierepro/select_codec_in_voukoder.png"
          imgTitle="Выбираем нужный вариант кодека в Voukoder"
          styleClass="figure_windows-light"
        />
        <p>
          После выбора нужного нам кодека (я выбрал{" "}
          <mark className="video">H.264 (NVIDIA NVENC)</mark>), нужно перейти во вкладку{" "}
          <mark className="ui">Параметры</mark>. В этой вкладке можно указать качество
          желаемого видео. По умолчанию там уже стоит то, что нам нужно, а именно параметр
          квантования и его фактор. <mark>CQP</mark> или <mark>CRF</mark> - это некий
          эквивалент качества, чем меньше - тем лучше качество, но больше вес.
        </p>
        <ImageFigure
          caption="Voukoder 13.4.1"
          imgSrc="images/premierepro/codec_parameter_voukoder.png"
          imgTitle="Настраиваем качество видео в Voukoder"
          styleClass="figure_windows-light"
        />
        <ul>
          <li>
            Значения <mark>23</mark> или <mark>25</mark> хватит с головой для экспорта
            видео в YouTube, VK Видео и подобных видео площадок.
            <AdditionInfo>
              Учтите, что многие видео площадки всё равно будут сжимать видео по своему,
              чтобы уместить их у себя на серверах.
            </AdditionInfo>
          </li>
          <li>
            Если вам нужно около максимальное качество, тогда укажите значение квантования{" "}
            <mark>17</mark> или <mark>20</mark>. В таком случае вес файла заметно
            возрастёт.
          </li>
          <li>
            Если вы хотите получить видео с хорошим соотношением{" "}
            <mark>качество/минимальный вес</mark>, тогда укажите значение <mark>30</mark>.
            Можете поэкспериментировать с значением в большую или меньшую сторону.
            <AdditionWarning>
              Экстремальные значения, например <mark>50</mark>, не рекомендуется
              использовать, так как можете получить кашу из кадров на выходе.
            </AdditionWarning>
          </li>
        </ul>
        <p>
          Дальше в <mark className="plugin">Voukoder</mark> нам ничего не нужно
          настраивать. При необходимости вы можете изменить другие параметры в окне
          экспорта и начать экспорт с помощью кнопки <mark className="ui">Export</mark>.
        </p>
        <Divider>Экспортируем через AfterCodecs</Divider>
        <p>
          Теперь поговорим и про <mark className="plugin">AfterCodecs</mark>. Для начала
          экспорта через <mark className="plugin">AfterCodecs</mark> нам нужно снова
          вернуться во вкладку <mark className="ui">Export</mark> и выбрать в параметре{" "}
          <mark className="ui">Format</mark> значение{" "}
          <mark className="ui">AfterCodecs</mark>.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/selecting_aftercodecs.png"
          imgTitle="Выбор AfterCodecs"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы перейти в настройки <mark className="plugin">AfterCodecs</mark> -
          раскройте вкладку <mark className="ui">Video Settings</mark> и нажмите на кнопку{" "}
          <mark className="ui">AfterCodecs Settings</mark>.
        </p>
        <AdditionInfo>
          По умолчанию в <mark className="plugin">AfterCodecs</mark> стоит контейнер{" "}
          <mark className="video">MOV</mark>. Так как мы в этой статье экспортируем видео
          в <mark className="video">MP4</mark>, то и указать нужно соответствующий
          контейнер для вывода.
        </AdditionInfo>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/change_format_open_aftercodecs_settings.png"
          imgTitle="Изменение контейнера и открытие настроек AfterCodecs"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне мы снова видим кучу непонятных параметров. Здесь нам нужно
          указать качество и скорость кодирования видео.
        </p>
        <ul>
          <li>
            В параметре <mark className="ui">Tradeoff</mark> мы можем указать три варианта
            на что ориентироваться при кодировании: на процент качества (похож на метод
            квантования CQP), на желаемый битрейт или на желаемый размер файла (не
            рекомендуется при повседневном использовании).
          </li>
          <li>
            Значение для скорости кодирования <mark className="ui">Speed</mark> можно
            поставить <mark>2</mark> или <mark>4</mark>.
          </li>
          <li>
            В разделе <mark className="ui">Colors</mark> можно изменить битность и
            цветовой диапазон. Обычно там значения меняют редко.
          </li>
          <li>
            В <mark className="ui">Audio</mark> лучше указать значение <mark>512</mark>,
            вместо <mark>Auto</mark>, чтобы вывести звук в аудио без сильной потери
            качества.
          </li>
          <AdditionWarning>
            Параметры <mark className="ui">Tuning</mark>,{" "}
            <mark className="ui">H.264 Profiles</mark>, <mark className="ui">GOP</mark>,{" "}
            <mark className="ui">Audio Bitrate</mark>, <mark className="ui">VR Meta</mark>{" "}
            и <mark className="ui">Fast Start</mark> лучше не менять без острой
            необходимости!
          </AdditionWarning>
        </ul>
        <ImageFigure
          caption="AfterCodecs 1.11.5 for Adobe Premiere Pro"
          imgSrc="images/premierepro/aftercodecs_settings.png"
          imgTitle="Настройки AfterCodecs"
          styleClass="figure_windows-dark"
        />
        <p>
          После завершения настроек мы нажимаем <mark className="ui">OK</mark> и начинаем
          рендер как обычно, через кнопку <mark className="ui">Export</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в WEBM и VP9?">
        <p>
          Стандартными средствами из <mark className="app">Adobe Premiere Pro</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> нельзя вывести композицию в{" "}
          <mark className="video">WEBM</mark>, но можно вывести в другом формате и
          переконвертировать его.
        </p>
        <AdditionDanger>
          Крайне не рекомендую использовать плагин{" "}
          <a href="https://fnord.com/">WebM от fnord</a> для экспорта из{" "}
          <mark className="app">Adobe Premiere Pro</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>, так как он часто выводит видео
          на прозрачном фоне с жуткими артефактами.
        </AdditionDanger>
        <Divider>Экспортируем секвенцию в удобном формате</Divider>
        <p>
          Для начала нам нужно вывести секвенцию как обычно, через{" "}
          <mark className="video">Apple Prores 4444</mark>, если вы хотите видео с
          альфа-каналом или в <mark className="video">Apple Prores 422</mark>, если вы
          хотите видео без альфа-канала. Ну или вообще вывести в ваш любимый формат, так
          как полученное видео мы всё равно будем конвертировать. Чтобы это сделать, нам
          нужно перейти в вкладку <mark className="ui">Export</mark> с помощью комбинации
          клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <p>
          После перехода во вкладку экспорта выбираем в параметре{" "}
          <mark className="ui">Format</mark> значение{" "}
          <mark className="plugin">QuickTime</mark>. Затем раскройте вкладку{" "}
          <mark className="ui">Video</mark> и в параметре{" "}
          <mark className="ui">Video Codec</mark> укажите нужный кодек в зависимости от
          ваших требований.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/export_prores4444_8bit-alpha.png"
          imgTitle="Экспортируем видео в Apple Prores"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Не забудьте поставить в <mark className="ui">Depth</mark> параметр{" "}
          <mark className="ui">8-bpc + alpha</mark> или{" "}
          <mark className="ui">16-bpc + alpha</mark>, если вы собираетесь выводить видео с
          альфа-каналом.
        </AdditionWarning>
        <p>
          Затем не забудьте указать путь, куда вы хотите вывести видео и нажмите на кнопку{" "}
          <mark className="ui">Export</mark> в правом нижнем углу.
        </p>
        <Divider>Конвертируем в WebM с помощью Shutter Encoder</Divider>
        <p>
          После успешного экспорта открываем <mark className="app">Shutter Encoder</mark>{" "}
          и вставляем в него выведенное видео из{" "}
          <mark className="app">Adobe Premiere Pro</mark>. В параметре{" "}
          <mark className="ui">Choose Function</mark> выбираем{" "}
          <mark className="video">VP9</mark>.
        </p>
        <AdditionInfo>
          Если у вас не установлен <mark className="app">Shutter Encoder</mark>, то его
          можно скачать <a href="https://www.shutterencoder.com/">по этой ссылке</a>.
        </AdditionInfo>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/select_vp9_shutter_encoder.png"
          imgTitle="Выбор VP9 в Shutter Encoder"
          styleClass="figure_macos-dark"
        />
        <p>
          Затем включаем в дополнительных опциях{" "}
          <mark className="ui">Enable alpha channel</mark>, если вы хотите вывести видео с
          альфа-каналом.
        </p>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/enable_alpha_shutter_encoder.png"
          imgTitle="Включение альфа-канала в Shutter Encoder"
          styleClass="figure_macos-dark"
        />
        <p>
          В программе можно также выставить путь для файла (по умолчанию видео кодируется
          в папку, где был исходник) и остальные параметры, если вам это нужно. После
          настроек нажимаем на кнопку <mark className="ui">Start function</mark> или на
          комбинацию клавиш <mark className="key">Ctrl + Enter</mark>.
        </p>
        <p>
          После экспорта вы получите видео в кодеке <mark className="video">VP9</mark> и
          контейнере <mark className="video">WEBM</mark>, которое можно использовать в
          веб-проектах или где-нибудь ещё.
        </p>
        <AdditionWarning>
          Имейте ввиду, что поддержка <mark className="video">WebM</mark> на прозрачном
          фоне в <mark className="app">Safari</mark> для устройств на <mark>iOS</mark> и{" "}
          <mark>macOS</mark>
          отсутствует, там будет отображаться чёрный фон вместо прозрачности.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в GIF?">
        <p>
          Из <mark className="app">Adobe Premiere Pro</mark> вывести ваш ролик в формат{" "}
          <mark className="image">GIF</mark> можно тремя способами.
        </p>
        <AdditionInfo>
          Если вы собираетесь выводить секвенцию в <mark className="image">GIF</mark> для
          веб-страницы, то советую лучше вывести в формат{" "}
          <mark className="video">WebM</mark>. Он лучше подходит для получения
          качественного изображения с маленьким размером.
        </AdditionInfo>
        <ul>
          <li>
            Вывести <mark className="image">GIF</mark> напрямую из{" "}
            <mark className="app">Adobe Premiere Pro</mark>, указав формат{" "}
            <mark className="ui">Animated GIF</mark> во вкладке{" "}
            <mark className="ui">Export</mark>.
          </li>
          <li>
            Либо вывести <mark className="image">GIF</mark> через{" "}
            <del style={{opacity: 0.5}}>упаси боже</del>{" "}
            <mark className="plugin">Media Encoder</mark>.
          </li>
          <li>
            С помощью конвертации вашего видео через онлайн-сервис{" "}
            <a href="https://ezgif.com/video-to-gif">Ezgif</a>. Он даёт самый адекватный
            результат по соотношению <mark>качество/размер файла</mark>.
          </li>
        </ul>
        <AdditionWarning>
          <p>
            У формата <mark className="image">GIF</mark> есть множество ограничений и
            нюансов.
          </p>
          <ul>
            <li>
              Данный формат не поддерживает полупрозрачность, только два цвета для
              альфа-канала: <mark>#FFFFFF</mark> и <mark>#000000</mark>.
            </li>
            <li>
              <mark className="image">GIF</mark> вмещает в себя только 256 цветов, поэтому
              забудьте о плавных градиентах и качественном цвете.
            </li>
            <li>
              Полученный файл может быть огромным по весу, если указать большое разрешение
              или FPS. Максимально рекомендуемо использовать разрешение{" "}
              <mark>1024x576</mark> и <mark>15 FPS</mark> для секвенций с соотношением
              сторон <mark>16:9</mark>.
            </li>
          </ul>
        </AdditionWarning>
        <Divider>Экспортируем из Premiere Pro</Divider>
        <p>
          Для начала экспорта <mark className="image">GIF</mark> напрямую из{" "}
          <mark className="app">Adobe Premiere Pro</mark> вам нужно перейти во вкладку{" "}
          <mark className="ui">Export</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Затем выберите в параметре{" "}
          <mark className="ui">Format</mark> значение{" "}
          <mark className="ui">Animated GIF</mark> и не забудьте указать путь для вывода
          файла.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/selecting_animated_gif.png"
          imgTitle="Выбор формата Animated GIF"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Если вы выберете в качестве формата параметр <mark className="ui">GIF</mark> без
          слова <mark>Animated</mark>, то вы получите только кадры отдельными
          изображениями формата <mark className="image">GIF</mark> и забьёте себе папку
          для сохранения.
        </AdditionWarning>
        <p>
          После завершения настроек - просто нажмите на кнопку{" "}
          <mark className="ui">Export</mark> в правом нижнем углу экрана и вы получите в
          нужном месте нужный файл.
        </p>
        <Divider>Экспортируем из Media Encoder</Divider>
        <p>
          <mark className="image">GIF</mark> можно ещё получить с помощью{" "}
          <mark className="app">Adobe Media Encoder</mark>. Хоть мы и отговариваем от его
          использования, но если вам нужно вывести много изображений формата{" "}
          <mark className="image">GIF</mark>, то он подойдет лучше.
        </p>
        <p>
          Для того чтобы начать экспорт через{" "}
          <mark className="app">Adobe Media Encoder</mark>, перейдите в{" "}
          <mark className="ui">File &gt; Export</mark> и нажмите на{" "}
          <mark className="ui">Add to Adobe Media Encoder Queue</mark> или нажмите на
          комбинацию клавиш <mark className="key">Alt + Shift + M</mark> и подождите,
          когда откроется вторая программа.
        </p>
        <AdditionInfo>
          Секвенция из <mark className="app">Adobe Premiere Pro</mark> корректно
          отправится в <mark className="app">Adobe Media Encoder</mark> только в том
          случае, если у вас установлен одинаковый год программ и на стандартном
          расположении программ. В противном случае вам выбьют ошибку о том, что{" "}
          <mark className="app">Adobe Media Encoder</mark> не установлен.
        </AdditionInfo>
        <p>
          После открытия <mark className="app">Adobe Media Encoder</mark> укажите формат{" "}
          <mark className="image">Animated GIF</mark> в очереди экспорта. Там же вы можете
          указать пресет и путь к выходному файлу. Для детальной настройки вы можете
          открыть <mark className="ui">Export Settings</mark>, нажав по названию
          стандартного пресета. Там же вы можете указать разрешение, FPS и другие
          параметры.
        </p>
        <ImageFigure
          caption="Media Encoder"
          imgSrc="images/premierepro/selecting_animated_gif_media_encoder.png"
          imgTitle="Выбираем формат GIF для экспорта через Adobe Media Encoder"
          styleClass="figure_windows-light"
        />
        <AdditionWarning>
          Если вы выберете в качестве формата параметр <mark className="ui">GIF</mark> без
          слова <mark>Animated</mark>, то вы получите только кадры отдельными
          изображениями формата <mark className="image">GIF</mark> и забьёте себе папку
          для сохранения.
        </AdditionWarning>
        <p>
          После настройки просто нажмите на кнопку <mark className="ui">OK</mark> и
          нажмите на зелёную иконку для начала экспорта. После этого в месте, куда вы
          указали путь, появится файл формата <mark className="image">GIF</mark>.
        </p>
        <Divider>Конвертируем через Ezgif</Divider>
        <p>
          Если вы не хотите возиться с экспортом или у вас уже есть готовое видео, которое
          надо лишь перегнать в формат <mark className="image">GIF</mark>, то советую
          онлайн-сервис <a href="https://ezgif.com/video-to-gif">Ezgif</a>. При
          конвертации через этот сервис вы получите <mark className="image">GIF</mark> с
          отличным соотношением качества и размера файла.
        </p>
        <p>
          Для начала конвертации просто загрузите ваше видео в сервис, а затем нажмите на
          кнопку <mark className="ui">Upload Video</mark>.
        </p>
        <ImageFigure
          caption="Ezgif"
          imgSrc="images/ezgif_main.png"
          imgTitle="Главная страница Ezgif"
          styleClass="figure_windows-light"
        />
        <AdditionWarning>
          Максимальный размер файла, который можно загрузить в сервис, не должен превышать{" "}
          <mark>200 МБ</mark>. Максимальная длина не должна превышать 60 секунд для
          конвертации в <mark>5 FPS</mark>
          или 15 секунд для конвертации в <mark>20 FPS</mark>.
        </AdditionWarning>
        <p>
          После загрузки видео вы сможете настроить FPS и нужное разрешение. Выбор из
          настроек мягко говоря не очень широкий, но для простой конвертации хватает. Если
          вы настроили всё, что вам нужно, то просто нажмите на кнопку{" "}
          <mark className="ui">Convert to GIF!</mark>.
        </p>
        <ImageFigure
          caption="Ezgif"
          imgSrc="images/ezgif_settings.png"
          imgTitle="Настройки конвертации в Ezgif"
          styleClass="figure_windows-light"
        />
        <p>
          Далее после успешной конвертации вы получите ваше видео в формате{" "}
          <mark className="image">GIF</mark> чуть ниже, в разделе{" "}
          <mark className="ui">Output GIF Animation</mark>, которое можно сохранить по
          нажатию <mark className="key">ПКМ</mark> &gt;{" "}
          <mark className="ui">Сохранить изображение как...</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию с альфа-каналом, то есть с прозрачностью?">
        <AdditionWarning>
          В <mark className="video">H.264</mark> и <mark className="video">MP4</mark>{" "}
          нельзя вывести композицию с альфа-каналом. Это можно сделать только на
          устройствах с <mark>macOS</mark> и при использовании кодека{" "}
          <mark className="video">H.265 (HEVC)</mark>.
        </AdditionWarning>
        <p>
          Прежде чем начать вывод секвенции с прозрачностью, убедитесь в том, что сама
          прозрачность у вас существует. Без этого никак. Чтобы проверить прозрачные
          участки в видео - нажмите на иконку гаечного ключа в окне{" "}
          <mark className="ui">Program Monitor</mark> и выберите в меню параметр{" "}
          <mark className="ui">Transparency Grid</mark>. Данная опция подставляет сетку в
          виде шахматной доски для отображения прозрачных частей в секвенции.
        </p>
        <ImageFigure
          caption="Program Monitor"
          imgSrc="images/premierepro/toggle_transparency_grid.png"
          imgTitle="Включение сетки для отображения прозрачных частей"
          styleClass="figure_windows-dark"
        />
        <p>
          Если всё с этим в порядке, то пора переходить во вкладку{" "}
          <mark className="ui">Export</mark> нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Затем выберите в{" "}
          <mark className="ui">Format</mark> параметр{" "}
          <mark className="ui">QuickTime</mark> и в <mark className="ui">Depth</mark>{" "}
          выберите <mark className="ui">8-bpc + Alpha</mark> или{" "}
          <mark className="ui">16-bpc + Alpha</mark>, если вам нужно вывести видео с
          большей битностью.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/export_prores4444_8bit-alpha.png"
          imgTitle="Экспорт секвенции с альфа-каналом"
          styleClass="figure_windows-dark"
        />
        <p>
          Затем укажите путь для вывода файла и нажмите на кнопку{" "}
          <mark className="ui">Export</mark> в левом нижнем углу. После экспорта вы
          сможете воспользоваться этим видео в последующем монтаже видео или где-нибудь
          ещё.
        </p>
        <AdditionInfo>
          Если вы хотите посмотреть такое видео, но у вас оно не открывается стандартным
          плеером, то вам нужно установить сторонний видеоплеер, например{" "}
          <mark className="app">VLC</mark> или <mark className="app">MPC-HC</mark>.
          Учтите, что не все видеопроигрыватели корректно отображают видео с
          альфа-каналом.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как сохранить свой шаблон с настройками для экспорта секвенций?">
        <p>
          Вы, наверное, не раз замечали параметр <mark className="ui">Preset</mark> в окне
          экспорта и задумывались, можно ли добавить свои? Да, в{" "}
          <mark className="app">Adobe Premiere Pro</mark> можно добавить свои надстройки,
          чтобы в дальнейшем не перенастраивать экспорт.
        </p>
        <p>
          Для этого перейдите во вкладку <mark className="ui">Export</mark> и начните там
          настраивать экспорт под себя. После того, как вы закончили - нажмите на три
          точки рядом с параметром <mark className="ui">Preset</mark> и в контекстном меню
          нажмите на <mark className="ui">Save Preset</mark>. В открывшемся меню введите
          название вашего будущего пресета и нажмите на <mark className="ui">OK</mark>.
        </p>
        <VideoFigure
          caption="Export"
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/create_custom_preset.mp4"
        />
        <p>
          После этого вы сможете воспользоваться своими заготовленными настройками
          экспорта в дальнейшем. Чтобы удалить, импортировать пресеты или сохранить их
          отдельным файлом, воспользуйтесь окном{" "}
          <mark className="ui">Preset Manager</mark>, которая открывается через три точки
          у <mark className="ui">Preset</mark> и выбрать там{" "}
          <mark className="ui">More Presets</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести текущий кадр предпросмотра как файл изображения?">
        <p>
          Для экспорта текущего кадра предпросмотра достаточно нажать на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + E</mark> или нажать на иконку фотоаппарата
          в <mark className="ui">Program Monitor</mark>.
        </p>
        <ImageFigure
          caption="Program Monitor"
          imgSrc="images/premierepro/export_frame_program_monitor.png"
          imgTitle="Экспорт текущего кадра в окне Program Monitor"
          styleClass="figure_windows-dark"
        />
        <p>
          Затем в открывшемся окне выберите формат и путь для сохранения изображения, а
          потом нажмите на <mark className="ui">OK</mark>.
        </p>
        <ImageFigure
          caption="Export Frame"
          imgSrc="images/premierepro/export_frame.png"
          imgTitle="Экспорт текущего кадра"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Как вывести все кадры секвенции как отдельные файлы изображений?">
        <p>
          Если вы хотите вывести все кадры из секвенции в отдельные файлы, то вам
          достаточно выбрать в качестве способа вывода <mark className="image">JPG</mark>,{" "}
          <mark className="image">PNG</mark>, <mark className="image">TIFF</mark> или
          любой другой формат изображений.
        </p>
        <p>
          Для начала как всегда нам нужно перейти во вкладку{" "}
          <mark className="ui">Export</mark> и выбрать в параметре{" "}
          <mark className="ui">Format</mark> нужный нам тип файла.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/select_png_export.png"
          imgTitle="Выбираем формат изображений"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Если вы хотите вывести кадры с прозрачностью - не забудьте указать параметр{" "}
          <mark className="ui">Include Alpha Channel</mark>.
        </AdditionInfo>
        <p>
          Затем{" "}
          <b>
            <u>не забудьте</u>
          </b>{" "}
          создать новую пустую папку, куда вы хотите экспортировать все кадры и указать её
          в качестве пути для вывода. <mark className="app">Adobe Premiere Pro</mark> не
          создаёт автоматически подпапку для секвенции изображений, как это делает{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <p>
          После этого просто нажимаем на кнопку <mark className="ui">Export</mark>. Вот и
          всё, все кадры из вашей секвенции сохранятся в нужную папку.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести только часть моей секвенции?">
        <p>
          Прежде чем начать экспорт части секвенции, вам нужно поставить точки входа на
          таймлайне с помощью кнопок <mark className="key">I</mark> и{" "}
          <mark className="key">O</mark>. Это позволит вам создать область, в пределах
          которой мы можем начать экспорт.
        </p>
        <AdditionInfo>
          Чтобы очистить рабочую область, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + X</mark>.
        </AdditionInfo>
        <p>
          Затем нам нужно перейти во вкладку <mark className="ui">Export</mark> и в
          параметре <mark className="ui">Range</mark> под окном предпросмотра указать
          область рендера секвенции. Нам предлагают четыре варианта на выбор.
        </p>
        <ImageFigure
          caption="Export"
          imgSrc="images/premierepro/select_export_range.png"
          imgTitle="Выбираем область экспорта"
          styleClass="figure_windows-dark"
        />
        <ul>
          <li>
            <mark className="ui">Entire Source</mark> позволяет вывести секвенцию по всей
            его длине. В данной ситуации нам это не подходит.
          </li>
          <li>
            <mark className="ui">Source In/Out</mark> позволяет вывести секвенцию по
            меткам начала и конца, или же входа и выхода, отмеченная с помощью кнопок{" "}
            <mark className="key">I</mark> и <mark className="key">O</mark>. То, что там
            нужно.
          </li>
          <li>
            <mark className="ui">Work Area</mark> позволяет вывести секвенцию по размеру
            рабочей области. По умолчанию рабочая область скрыта и его можно активировать,
            нажав на три полоски в заголовке таймлайна и выбрать{" "}
            <mark className="ui">Work Area Bar</mark>. В данной ситуации тоже может
            подойти, но он менее удобен.
          </li>
          <li>
            <mark className="ui">Custom</mark> позволяет вывести секвенцию по длине,
            указанным под окном предпросмотра в вкладке <mark className="ui">Export</mark>
            . Подходит, если вы не хотите ставить метки In/Out на вашем таймлайне.
          </li>
        </ul>
        <p>
          После настройки области экспорта - не забудьте настроить остальные параметры
          экспорта под ваши нужны и нажать на кнопку <mark className="ui">Export</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Я сделал работу в Premiere Pro, но мне нужно передать .prproj файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?">
        <p>
          Да, возможно. Это можно сделать через{" "}
          <mark className="ui">Project Manager</mark>, который находится в параметре{" "}
          <mark className="ui">File</mark> контекстного меню.
        </p>
        <ImageFigure
          caption="Adobe Premiere Pro"
          imgSrc="images/premierepro/file_project_manager.png"
          imgTitle="Открытие Project Manager"
          styleClass="figure_windows-light"
        />
        <p>
          После открытия окна <mark className="ui">Project Manager</mark> вы можете
          увидеть список ваших секвенций. В этом списке вы можете выбрать все секвенции
          для экспорта или оставить только нужные. Также не забудьте указать нужный путь
          до файла, нажав на кнопку <mark className="ui">Browse</mark> в параметре{" "}
          <mark className="ui">Destination Path</mark>. В разделе{" "}
          <mark className="ui">Options</mark> вы можете указать, сохранять ли файлы
          предпросмотра или неиспользуемые исходники и прочие параметры.
        </p>
        <p>
          Чтобы начать сохранение проекта вместе с исходниками, достаточно нажать на{" "}
          <mark className="ui">OK</mark> в правом нижнем углу и дождаться окончания
          операции. Убедитесь в том, что у вас включен параметр{" "}
          <mark className="ui">Collect Files and Copy to New Location</mark>.
        </p>
        <ImageFigure
          caption="Project Manager"
          imgSrc="images/premierepro/project_manager.png"
          imgTitle="Окно Project Manager"
          styleClass="figure_windows-dark"
        />
        <ContentSwitcher
          macContent={
            <div>
              <p>
                После окончания сборки файлов, перейдите в папку, куда вы сохранили проект
                и создайте архив с помощью <a href="https://www.keka.io/ru/">keka</a>.
                Если площадка или социальная сеть, в которой вы пытаетесь поделиться
                архивом, вставляет палки в колёса в виде ограничений на размер файла - вы
                сможете разделить архив на определённый размер файла перед его созданием и
                отправить его другому человеку по кусочкам. После создания архива,
                отправьте его другому человеку любым удобным для вас способом.
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
                  alignItems: "center",
                }}
              >
                <ImageFigure
                  caption="Выбор формата архива"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-format.gif"
                  imgTitle="Выбор формата архива"
                  styleClass="figure_macos-light"
                />
                <ImageFigure
                  caption="Выбор размера разделения архива"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-split.gif"
                  imgTitle="Выбор размера разделения архива"
                  styleClass="figure_macos-light"
                />
              </div>
              <AdditionInfo>
                Подробнее о создании архивов через{" "}
                <a href="https://www.keka.io/ru/">keka</a> вы можете прочесть на{" "}
                <a href="https://github.com/aonez/Keka/wiki/Compressing-with-Keka">
                  этой странице
                </a>
                .
              </AdditionInfo>
            </div>
          }
          windowsContent={
            <div>
              <p>
                После окончания сборки файлов, перейдите в папку, куда вы сохранили проект
                и создайте архив с помощью{" "}
                <a href="https://www.rarlab.com/download.htm">WinRAR</a> или{" "}
                <a href="https://www.7-zip.org/">7-Zip</a>. Если площадка или социальная
                сеть, в которой вы пытаетесь поделиться архивом, вставляет палки в колёса
                в виде ограничений на размер файла - вы сможете разделить архив на
                определённый размер файла перед его созданием и отправить его другому
                человеку по кусочкам. После создания архива, отправьте его другому
                человеку любым удобным для вас способом.
              </p>
              <YouTubeVideo
                caption="Как разбить архив на части и собрать его"
                link="6KumGS0EyUQ"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title="Я нарезал видео в Premiere Pro, но хочу переместить таймлайн в другую монтажную программу. Как это сделать?">
        <p>
          В <mark className="app">Adobe Premiere Pro</mark> есть функция для экспорта{" "}
          <mark className="file">XML</mark> файла. В этом файле хранится вся информация об
          используемых клипах, точках их входа и выхода, а также другие параметры.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PRExport;
