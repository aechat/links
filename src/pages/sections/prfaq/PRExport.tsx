import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PRExport: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="тикток, ютуб, максимальное качество, разрешение, битрейт, кодек, fps, соцсети, настройки рендера, вывод видео"
        title="Какие настройки экспорта стоит установить для вывода в социальные сети?"
      >
        <p>
          Каждая социальная сеть или видеоплощадка, увы, пережимают загружаемое
          пользователем видео так, чтобы оно занимало меньше места на серверах. Если вы
          установите слишком высокое значение битрейта и разрешение, например для{" "}
          <mark className="app">TikTok</mark>, то площадка с радостью всё пережмёт до{" "}
          <mark>1080p/60 FPS</mark> и битрейта около <mark>5 Мбит/с</mark>, поэтому
          разрешение <mark>4K</mark> и битрейт <mark>100 Мбит/с</mark> ставить
          бессмысленно. Установка слишком низкого битрейта или других неверных параметров
          также может испортить ваше видео.
        </p>
        <p>
          В целом, итоговое качество зависит от того, что происходит на экране. Если вы
          монтируете спокойные видео, например подкасты или ролики без резких движений, то
          для сохранения всех деталей в разрешении <mark>1080p</mark> вам хватит{" "}
          <mark>5–10 Мбит/с</mark>.
        </p>
        <p>
          Если видео уже было закодировано, скажем, в <mark>1 Мбит/с</mark>, то вернуть
          качество, просто установив более высокий битрейт, не получится. Это не архив, из
          которого можно распаковать несжатое видео с исходным качеством.
        </p>
        <ContentFigure
          caption="Почему снег и конфетти портят картинку"
          src="r6Rp-uo6HmI"
          type="youtube"
        />
        <p>
          Теперь поговорим о правилах хорошего тона для FPS. Если вы импортируете видео в
          монтажную программу с частотой 30 кадров в секунду, то и выводить его нужно с
          такой же частотой, не больше. Вывести с меньшим фреймрейтом допустимо, если
          такова ваша творческая задумка, но с большим — нет смысла, кадры из воздуха не
          появятся. Если вы импортируете видео с разным фреймрейтом, например{" "}
          <mark>24</mark>, <mark>30</mark> и <mark>60</mark>, то лучше создавать
          композицию с наименьшим FPS, то есть <mark>24 кадра/с</mark> в данном примере.
          Не всем понравится ваш трюк с комбинацией различных фреймрейтов в одном видео.
        </p>
        <ContentFigure
          caption="Как несовпадение частоты кадров портит ваше видео"
          src="p3Jb3UPAw-w"
          type="youtube"
        />
        <p>
          И прежде чем загрузить куда-нибудь контент с чересстрочной развёрткой — сделайте
          её прогрессивной. Например, если у вас контент в <mark>1080i60</mark>, то его
          следует перевести в <mark>1080p30</mark>, то есть 60 чересстрочных полукадров в
          секунду следует заменить 30 прогрессивными кадрами в секунду.
        </p>
        <Divider>Экспортируем для YouTube</Divider>
        <p>
          Для публикации видео на <mark className="app">YouTube</mark> нужно соблюдать{" "}
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
            нет, но лучше соблюдать таблицу битрейтов с официального сайта{" "}
            <mark className="app">YouTube</mark>.
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
              <td>80–160 Мбит/с</td>
              <td>120–240 Мбит/с</td>
            </tr>
            <tr>
              <td>2160p (4K)</td>
              <td>35–45 Мбит/с</td>
              <td>53–68 Мбит/с</td>
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
              <td>100–200 Мбит/с</td>
              <td>150–300 Мбит/с</td>
            </tr>
            <tr>
              <td>2160p (4K)</td>
              <td>44–56 Мбит/с</td>
              <td>66–85 Мбит/с</td>
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
          Эта площадка с вертикальными видео тоже имеет свои ограничения и рекомендации по
          кодированию.
        </p>
        <ul>
          <li>
            Вес полученного файла не должен превышать <mark>75 МБ</mark>, если вы
            собираетесь выкладывать видео с устройства на <mark>Android</mark>, или{" "}
            <mark>250 МБ</mark> — с устройства на <mark>iOS</mark>.
          </li>
          <li>
            Контейнер видео должен быть <mark className="video">MP4</mark>.
          </li>
          <li>
            Видеокодек — <mark className="video">H.264</mark>.
          </li>
          <li>
            Рекомендуется установить битрейт <mark>5–8 Мбит/с</mark> для видео в
            разрешении <mark>1080p</mark> или <mark>3–5 Мбит/с</mark> для{" "}
            <mark>720p</mark>.
          </li>
        </ul>
        <Divider>
          Экспортируем для Instagram<sup>1</sup>
        </Divider>
        <Addition type="danger">
          <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark> признаны
          экстремистскими организациями и запрещены на территории Российской Федерации.
        </Addition>
        <p>
          На этой площадке можно выложить видео как отдельный пост или как вертикальные
          Reels. Из-за того, что это два разных типа публикаций, требования тоже разные.
        </p>
        <ul>
          <li>
            При создании обычного поста в него можно добавить видео с соотношением сторон{" "}
            <mark>4:5</mark>, <mark>16:9</mark> или <mark>4:3</mark>.
          </li>
          <li>
            Если вы попытаетесь опубликовать видео с соотношением сторон <mark>9:16</mark>
            , оно превратится в Reels.
          </li>
          <li>
            Желательно использовать фреймрейт <mark>24</mark>, <mark>25</mark> или{" "}
            <mark>30 FPS</mark>, а битрейт установить <mark>5 Мбит/с</mark>.
            <Addition type="info">
              Из-за специфики алгоритмов сжатия на этой платформе видео с 60 FPS может
              нещадно резаться по битрейту, а соответственно, и по качеству.
            </Addition>
          </li>
        </ul>
        <Divider>Экспортируем для Telegram</Divider>
        <p>
          Этот мессенджер более лоялен к видеофайлам. Если выкладывать видео через{" "}
          <mark className="app">Telegram Desktop</mark> в личные чаты или каналы, оно
          отправится без сжатия. Это хорошо, если нужно отдать клиенту видео в
          оригинальном качестве, но не очень, если собираетесь выкладывать ролик в пост,
          так как не все смогут его полностью скачать. Поэтому постарайтесь уложиться в{" "}
          <mark>50 МБ</mark> для коротких видео или <mark>300 МБ</mark> для длинных.
          Желательно тоже в кодеке <mark className="video">H.264</mark>.
        </p>
        <p>
          Публикация видео в каналы через мобильные устройства может ухудшить его качество
          из-за автоматической конвертации. Чтобы отправить видео в максимальном качестве,
          нажмите на кнопку выбора качества и потяните ползунок максимально вправо.
        </p>
        <ContentFigure
          caption="Telegram"
          imgTitle="Выбор качества видео в Telegram"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/phone_telegram_videoquality.jpg"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если вы хотите опубликовать историю в <mark className="app">Telegram</mark>,
          нужно экспортировать видео в разрешении <mark>1280×720</mark> и указать перед
          экспортом битрейт до <mark>5 Мбит/с</mark>.
        </p>
        <Addition type="warning">
          Если вы попробуете опубликовать историю с разрешением больше, чем{" "}
          <mark>1280×720</mark>, <mark className="app">Telegram</mark> сожмёт ваше видео
          до <mark>720p</mark>.
        </Addition>
        <p>
          Для анимированной аватарки профиля нужно вывести видео в разрешении до{" "}
          <mark>800×800</mark> и с битрейтом до <mark>2 Мбит/с</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="h.264, h.265, мп4, hevc, avc1, вывести видео, вукодер, voukoder, aftercodecs, афтеркодекс, хевк, авс1"
        title="Как вывести секвенцию в MP4 и H.264/H.265?"
      >
        <p>
          Предположим, вы хотите вывести качественное видео с минимальным весом в кодеке{" "}
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
        <Addition type="warning">
          Через кодеки <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark> нельзя вывести видео с альфа-каналом, то
          есть с прозрачностью. Для вывода видео на прозрачном фоне воспользуйтесь
          форматом <mark className="video">QUICKTIME — Apple ProRes 4444</mark>.
        </Addition>
        <p>
          Для начала нужно разобраться, куда нажимать. Чтобы перейти к началу экспорта,
          откройте вкладку <mark className="select">«Export»</mark> или нажмите комбинацию
          клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <p>
          После этого вы переместитесь в полноэкранное окно настроек экспорта. В этой
          вкладке можно указать название файла, путь сохранения, формат и задать в других
          вкладках более детальные настройки. Также вы можете выбрать область для
          кодирования видео — всю секвенцию или только её часть.
        </p>
        <ContentFigure
          caption="Интерфейс экспорта"
          imgTitle="Интерфейс экспорта"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/export_interface.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Экспортируем через встроенный H.264</Divider>
        <p>
          По умолчанию при открытии вкладки экспорта,{" "}
          <mark className="app">Adobe Premiere Pro</mark> сам установит пресет для вывода
          в <mark className="video">H.264</mark> с переменным битрейтом с одним проходом
          примерно в 15 Мбит/с. Для социальных сетей таких параметров хватит.
        </p>
        <p>
          Если вам нужно изменить тип битрейта и скорость передачи данных — раскройте
          вкладку <mark className="select">«Video»</mark> и измените нужные параметры. Вам
          доступны изменение битрейта, частоты кадров, цветового профиля, включение
          эффектов и переключение между <mark>Software</mark>- или <mark>Hardware</mark>
          -кодированием. Чтобы изменить «заблокированные настройки», просто уберите флажок
          справа от нужного параметра.
        </p>
        <ContentFigure
          caption="Настройки экспорта видео"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/export_video_settings.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          Затем просто нажмите на кнопку <mark className="select">«Export»</mark> в правом
          нижнем углу и дождитесь окончания кодирования вашей секвенции.
        </p>
        <Divider>Экспортируем через Voukoder</Divider>
        <p>
          Если же вас результат рендера от стандартного H.264 не устраивает, то можно
          воспользоваться плагином <mark className="plugin">Voukoder</mark>. В этом
          примере мы рассмотрим плагин{" "}
          <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">версии 13.4.1</a>
          , не Pro-версию.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Чтобы подключить плагин к <mark className="app">Adobe Premiere Pro</mark>,
              нужно скачать и установить сам <mark className="plugin">Voukoder</mark> и{" "}
              <mark className="plugin">коннектор</mark> к нему. Для корректной установки
              плагина убедитесь, что вы не устанавливали{" "}
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
        </Addition>
        <p>
          Чтобы начать рендер с помощью <mark className="plugin">Voukoder</mark>, вам
          нужно снова перейти во вкладку <mark className="select">«Export»</mark> и в
          параметре <mark className="select">«Format»</mark> выбрать{" "}
          <mark className="select">«Voukoder»</mark>.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Выбираем Voukoder для рендера"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/selecting_voukoder.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Чтобы перейти в настройки плагина, вам нужно раскрыть вкладку{" "}
          <mark className="select">«Voukoder»</mark> и нажать на кнопку{" "}
          <mark className="select">«Configure»</mark>.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Открываем настройки Voukoder"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/open_voukoder_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После открытия настроек нам нужно выбрать кодек, в который мы хотим
          экспортировать видео. В основном для вывода видео и его корректного открытия на
          многих современных устройствах используется кодек{" "}
          <mark className="video">H.264</mark>. Но можно и воспользоваться{" "}
          <mark className="video">HEVC (H.265)</mark>, если вам нужно примерно сохранить
          качество видео с меньшим объёмом файла. Кодеки{" "}
          <mark className="video">AV1</mark> и <mark className="video">VP9</mark> для
          вывода из <mark className="app">Adobe After Effects</mark> используются редко, а
          если уж и надо вывести в таком формате, то проще переконвертировать видео позже
          через условный <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
          Теперь поговорим и о приставках в названиях кодеков.
        </p>
        <Addition type="info">
          Варианты кодирования показаны на устройстве со связкой процессора AMD и
          видеокарты NVIDIA. Выбор у вас может отличаться в зависимости от вашего железа.
        </Addition>
        <ul>
          <p>
            Для вариантов <mark className="video">H.264</mark> и{" "}
            <mark className="video">H.265</mark> есть три варианта для кодирования.
          </p>
          <li>
            <mark>x264</mark> или <mark>x265</mark> используется для кодирования видео на
            процессоре без дополнительного использования видеокарты. Стабильно, но не
            всегда быстро.
          </li>
          <li>
            <mark>NVIDIA NVENC</mark> используется для кодирования видео с использованием
            видеокарты NVIDIA. Может ускорить процесс рендера, но не гарантирует 100%
            использование видеокарты.
          </li>
          <li>
            <mark>AMD AMF</mark> — то же самое, что и предыдущий параметр, но на
            встроенном видеочипе AMD.
          </li>
        </ul>
        <ContentFigure
          caption="Voukoder 13.4.1"
          imgTitle="Выбираем нужный вариант кодека в Voukoder"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/select_codec_in_voukoder.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          После выбора нужного нам кодека (я выбрал{" "}
          <mark className="video">H.264 (NVIDIA NVENC)</mark>), нужно перейти во вкладку{" "}
          <mark className="select">«Параметры»</mark>. В этой вкладке можно указать
          качество желаемого видео. По умолчанию там уже стоит то, что нам нужно, а именно
          параметр квантования и его фактор. <mark>CQP</mark> или <mark>CRF</mark> — это
          некий эквивалент качества, чем меньше — тем лучше качество, но больше вес.
        </p>
        <ContentFigure
          caption="Voukoder 13.4.1"
          imgTitle="Настраиваем качество видео в Voukoder"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/codec_parameter_voukoder.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <ul>
          <li>
            Значения <mark>23</mark> или <mark>25</mark> хватит с головой для экспорта
            видео в YouTube, VK Видео и подобные видеоплощадки.
            <Addition type="info">
              Учтите, что многие видеоплощадки всё равно будут сжимать видео по-своему,
              чтобы уместить их у себя на серверах.
            </Addition>
          </li>
          <li>
            Если вам нужно почти максимальное качество, тогда укажите значение квантования{" "}
            <mark>17</mark> или <mark>20</mark>. В таком случае вес файла заметно
            возрастёт.
          </li>
          <li>
            Если вы хотите получить видео с хорошим соотношением{" "}
            <mark>качество/минимальный вес</mark>, тогда укажите значение <mark>30</mark>.
            Можете поэкспериментировать со значением в большую или меньшую сторону.
            <Addition type="warning">
              Экстремальные значения, например <mark>50</mark>, не рекомендуется
              использовать, так как можете получить кашу из кадров на выходе.
            </Addition>
          </li>
        </ul>
        <p>
          Дальше в <mark className="plugin">Voukoder</mark> нам ничего не нужно
          настраивать. При необходимости вы можете изменить другие параметры в окне
          экспорта и начать экспорт с помощью кнопки{" "}
          <mark className="select">«Export»</mark>.
        </p>
        <Divider>Экспортируем через AfterCodecs</Divider>
        <p>
          Теперь поговорим и про <mark className="plugin">AfterCodecs</mark>. Для начала
          экспорта через <mark className="plugin">AfterCodecs</mark> нам нужно снова
          вернуться во вкладку <mark className="select">«Export»</mark> и выбрать в
          параметре <mark className="select">«Format»</mark> значение{" "}
          <mark className="select">«AfterCodecs»</mark>.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Выбор AfterCodecs"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/selecting_aftercodecs.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Чтобы перейти в настройки <mark className="plugin">AfterCodecs</mark>, раскройте
          вкладку <mark className="select">«Video Settings»</mark> и нажмите на кнопку{" "}
          <mark className="select">«AfterCodecs Settings»</mark>.
        </p>
        <Addition type="info">
          По умолчанию в <mark className="plugin">AfterCodecs</mark> стоит контейнер{" "}
          <mark className="video">MOV</mark>. Так как мы в этой статье экспортируем видео
          в <mark className="video">MP4</mark>, то и указать нужно соответствующий
          контейнер для вывода.
        </Addition>
        <ContentFigure
          caption="Export"
          imgTitle="Изменение контейнера и открытие настроек AfterCodecs"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/change_format_open_aftercodecs_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В открывшемся окне мы снова видим кучу непонятных параметров. Здесь нам нужно
          указать качество и скорость кодирования видео.
        </p>
        <ul>
          <li>
            В параметре <mark className="select">«Tradeoff»</mark> мы можем указать три
            варианта, на что ориентироваться при кодировании: на процент качества (похож
            на метод квантования CQP), на желаемый битрейт или на желаемый размер файла
            (не рекомендуется при повседневном использовании).
          </li>
          <li>
            Значение для скорости кодирования <mark className="select">«Speed»</mark>{" "}
            можно поставить <mark>2</mark> или <mark>4</mark>.
          </li>
          <li>
            В разделе <mark className="select">«Colors»</mark> можно изменить битность и
            цветовой диапазон. Обычно там значения меняют редко.
          </li>
          <li>
            В <mark className="select">«Audio»</mark> лучше указать значение{" "}
            <mark>512</mark> вместо <mark>Auto</mark>, чтобы вывести звук без сильной
            потери качества.
          </li>
          <Addition type="warning">
            Параметры <mark className="select">«Tuning»</mark>,{" "}
            <mark className="select">«H.264 Profiles»</mark>,{" "}
            <mark className="select">«GOP»</mark>,{" "}
            <mark className="select">«Audio Bitrate»</mark>,{" "}
            <mark className="select">«VR Meta»</mark> и{" "}
            <mark className="select">«Fast Start»</mark> лучше не менять без острой
            необходимости!
          </Addition>
        </ul>
        <ContentFigure
          caption="AfterCodecs 1.11.5 for Adobe Premiere Pro"
          imgTitle="Настройки AfterCodecs"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/aftercodecs_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После завершения настроек мы нажимаем <mark className="select">«OK»</mark> и
          начинаем рендер как обычно, через кнопку{" "}
          <mark className="select">«Export»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в WEBM и VP9?">
        <p>
          Стандартными средствами из <mark className="app">Adobe Premiere Pro</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> нельзя вывести композицию в{" "}
          <mark className="video">WEBM</mark>, но можно вывести в другом формате и
          переконвертировать его.
        </p>
        <Addition type="danger">
          Крайне не рекомендую использовать плагин{" "}
          <a href="https://fnord.com/">WEBM от fnord</a> для экспорта из{" "}
          <mark className="app">Adobe Premiere Pro</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>, так как он часто выводит видео
          на прозрачном фоне с жуткими артефактами.
        </Addition>
        <Divider>Экспортируем секвенцию в удобном формате</Divider>
        <p>
          Для начала нам нужно вывести секвенцию как обычно, через{" "}
          <mark className="video">Apple ProRes 4444</mark>, если вы хотите видео с
          альфа-каналом или в <mark className="video">Apple ProRes 422</mark>, если вы
          хотите видео без альфа-канала. Ну или вообще вывести в ваш любимый формат, так
          как полученное видео мы всё равно будем конвертировать. Чтобы это сделать, нам
          нужно перейти во вкладку <mark className="select">«Export»</mark> с помощью
          комбинации клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <p>
          После перехода во вкладку экспорта выбираем в параметре{" "}
          <mark className="select">«Format»</mark> значение{" "}
          <mark className="select">«QuickTime»</mark>. Затем раскройте вкладку{" "}
          <mark className="select">«Video»</mark> и в параметре{" "}
          <mark className="select">«Video Codec»</mark> укажите нужный кодек в зависимости
          от ваших требований.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Экспортируем видео в Apple Prores"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/export_prores4444_8bit-alpha.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Не забудьте поставить в <mark className="select">«Depth»</mark> параметр{" "}
          <mark className="select">«8-bpc + alpha»</mark> или{" "}
          <mark className="select">«16-bpc + alpha»</mark>, если вы собираетесь выводить
          видео с альфа-каналом.
        </Addition>
        <p>
          Затем не забудьте указать путь, куда вы хотите вывести видео и нажмите на кнопку{" "}
          <mark className="select">«Export»</mark> в правом нижнем углу. После экспорта вы
          сможете воспользоваться этим видео в последующем монтаже видео или где-нибудь
          ещё.
        </p>
        <Divider>Конвертируем в WEBM с помощью Shutter Encoder</Divider>
        <p>
          После успешного экспорта открываем <mark className="app">Shutter Encoder</mark>{" "}
          и вставляем в него выведенное видео из{" "}
          <mark className="app">Adobe Premiere Pro</mark>. В параметре{" "}
          <mark className="select">«Choose Function»</mark> выбираем{" "}
          <mark className="video">VP9</mark>.
        </p>
        <Addition type="info">
          Если у вас не установлен <mark className="app">Shutter Encoder</mark>, то его
          можно скачать <a href="https://www.shutterencoder.com/">по этой ссылке</a>.
        </Addition>
        <ContentFigure
          caption="Shutter Encoder"
          imgTitle="Выбор VP9 в Shutter Encoder"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/select_vp9_shutter_encoder.png"
          theme="dark"
          type="image"
          variant="mac"
        />
        <p>
          Затем включаем в дополнительных опциях{" "}
          <mark className="select">«Enable alpha channel»</mark>, если вы хотите вывести
          видео с альфа-каналом.
        </p>
        <ContentFigure
          caption="Shutter Encoder"
          imgTitle="Включение альфа-канала в Shutter Encoder"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/enable_alpha_shutter_encoder.png"
          theme="dark"
          type="image"
          variant="mac"
        />
        <p>
          В программе можно также выставить путь для файла (по умолчанию видео кодируется
          в папку, где был исходник) и остальные параметры, если вам это нужно. После
          настроек нажимаем на кнопку <mark className="select">«Start function»</mark> или
          на комбинацию клавиш <mark className="key">Ctrl + Enter</mark>.
        </p>
        <p>
          После экспорта вы получите видео в кодеке <mark className="video">VP9</mark> и
          контейнере <mark className="video">WEBM</mark>, которое можно использовать в
          веб-проектах или где-нибудь ещё.
        </p>
        <Addition type="warning">
          Имейте в виду, что поддержка <mark className="video">WEBM</mark> на прозрачном
          фоне в <mark className="app">Safari</mark> для устройств на <mark>iOS</mark> и{" "}
          <mark>macOS</mark>
          отсутствует, там будет отображаться чёрный фон вместо прозрачности.
        </Addition>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в GIF?">
        <p>
          Из <mark className="app">Adobe Premiere Pro</mark> вывести ваш ролик в формат{" "}
          <mark className="image">GIF</mark> можно тремя способами.
        </p>
        <Addition type="info">
          Если вы собираетесь выводить секвенцию в <mark className="image">GIF</mark> для
          веб-страницы, то советую лучше вывести в формат{" "}
          <mark className="video">WEBM</mark>. Он лучше подходит для получения
          качественного изображения с маленьким размером.
        </Addition>
        <ul>
          <li>
            Вывести <mark className="image">GIF</mark> напрямую из{" "}
            <mark className="app">Adobe Premiere Pro</mark>, указав формат{" "}
            <mark className="select">«Animated GIF»</mark> во вкладке{" "}
            <mark className="select">«Export»</mark>.
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
        <Addition type="warning">
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
        </Addition>
        <Divider>Экспортируем из Premiere Pro</Divider>
        <p>
          Для начала экспорта <mark className="image">GIF</mark> напрямую из{" "}
          <mark className="app">Adobe Premiere Pro</mark> вам нужно перейти во вкладку{" "}
          <mark className="select">«Export»</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Затем выберите в параметре{" "}
          <mark className="select">«Format»</mark> значение{" "}
          <mark className="select">«Animated GIF»</mark> и не забудьте указать путь для
          вывода файла.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Выбор формата Animated GIF"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/selecting_animated_gif.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Если вы выберете в качестве формата параметр{" "}
          <mark className="select">«GIF»</mark> без слова <mark>Animated</mark>, то вы
          получите только кадры отдельными изображениями формата{" "}
          <mark className="image">GIF</mark> и забьёте себе папку для сохранения.
        </Addition>
        <p>
          После завершения настроек просто нажмите на кнопку{" "}
          <mark className="select">«Export»</mark> в правом нижнем углу экрана, и вы
          получите в нужном месте нужный файл.
        </p>
        <Divider>Экспортируем из Media Encoder</Divider>
        <p>
          <mark className="image">GIF</mark> можно ещё получить с помощью{" "}
          <mark className="app">Adobe Media Encoder</mark>. Хоть мы и отговариваем от его
          использования, но если вам нужно вывести много изображений формата{" "}
          <mark className="image">GIF</mark>, то он подойдёт лучше.
        </p>
        <p>
          Для того чтобы начать экспорт через{" "}
          <mark className="app">Adobe Media Encoder</mark>, перейдите в{" "}
          <mark className="select">«File» → «Export»</mark> и нажмите на{" "}
          <mark className="select">«Add to Adobe Media Encoder Queue»</mark> или нажмите
          на комбинацию клавиш <mark className="key">Alt + Shift + M</mark> и подождите,
          когда откроется вторая программа.
        </p>
        <Addition type="info">
          Секвенция из <mark className="app">Adobe Premiere Pro</mark> корректно
          отправится в <mark className="app">Adobe Media Encoder</mark> только в том
          случае, если у вас установлен одинаковый год программ и на стандартном
          расположении программ. В противном случае вам выбьют ошибку о том, что{" "}
          <mark className="app">Adobe Media Encoder</mark> не установлен.
        </Addition>
        <p>
          После открытия <mark className="app">Adobe Media Encoder</mark> укажите формат{" "}
          <mark className="image">ANIMATED GIF</mark> в очереди экспорта. Там же вы можете
          указать пресет и путь к выходному файлу. Для детальной настройки вы можете
          открыть <mark className="select">«Export Settings»</mark>, нажав по названию
          стандартного пресета. Там же вы можете указать разрешение, FPS и другие
          параметры.
        </p>
        <ContentFigure
          caption="Media Encoder"
          imgTitle="Выбираем формат GIF для экспорта через Adobe Media Encoder"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/selecting_animated_gif_media_encoder.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Если вы выберете в качестве формата параметр{" "}
          <mark className="select">«GIF»</mark> без слова <mark>Animated</mark>, то вы
          получите только кадры отдельными изображениями формата{" "}
          <mark className="image">GIF</mark> и забьёте себе папку для сохранения.
        </Addition>
        <p>
          После настройки просто нажмите на кнопку <mark className="select">«OK»</mark> и
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
          кнопку <mark className="select">«Upload Video»</mark>.
        </p>
        <ContentFigure
          caption="Ezgif"
          imgTitle="Главная страница Ezgif"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/ezgif_main.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Максимальный размер файла, который можно загрузить в сервис, не должен превышать{" "}
          <mark>200 МБ</mark>. Максимальная длина не должна превышать 60 секунд для
          конвертации в <mark>5 FPS</mark>
          или 15 секунд для конвертации в <mark>20 FPS</mark>.
        </Addition>
        <p>
          После загрузки видео вы сможете настроить FPS и нужное разрешение. Выбор из
          настроек, мягко говоря, не очень широкий, но для простой конвертации хватает.
          Если вы настроили всё, что вам нужно, то просто нажмите на кнопку{" "}
          <mark className="select">«Convert to GIF!»</mark>.
        </p>
        <ContentFigure
          caption="Ezgif"
          imgTitle="Настройки конвертации в Ezgif"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/ezgif_settings.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Далее после успешной конвертации вы получите ваше видео в формате{" "}
          <mark className="image">GIF</mark> чуть ниже, в разделе{" "}
          <mark className="select">«Output GIF Animation»</mark>, которое можно сохранить
          по нажатию <mark className="key">ПКМ</mark> →{" "}
          <mark className="select">«Сохранить изображение как...»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию с альфа-каналом, то есть с прозрачностью?">
        <Addition type="warning">
          В <mark className="video">H.264</mark> и <mark className="video">MP4</mark>{" "}
          нельзя вывести композицию с альфа-каналом. Это можно сделать только на
          устройствах с <mark>macOS</mark> и при использовании кодека{" "}
          <mark className="video">H.265 (HEVC)</mark>.
        </Addition>
        <p>
          Прежде чем начать вывод секвенции с прозрачностью, убедитесь в том, что сама
          прозрачность у вас существует. Без этого никак. Чтобы проверить прозрачные
          участки в видео, нажмите на иконку гаечного ключа в окне{" "}
          <mark className="select">«Program Monitor»</mark> и выберите в меню параметр{" "}
          <mark className="select">«Transparency Grid»</mark>. Эта опция подставляет сетку
          в виде шахматной доски для отображения прозрачных частей в секвенции.
        </p>
        <ContentFigure
          caption="Program Monitor"
          imgTitle="Включение сетки для отображения прозрачных частей"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/toggle_transparency_grid.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если всё с этим в порядке, то пора переходить во вкладку{" "}
          <mark className="select">«Export»</mark>, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Затем выберите в{" "}
          <mark className="select">«Format»</mark> параметр{" "}
          <mark className="select">«QuickTime»</mark> и в{" "}
          <mark className="select">«Depth»</mark> выберите{" "}
          <mark className="select">«8-bpc + Alpha»</mark> или{" "}
          <mark className="select">«16-bpc + Alpha»</mark>, если вам нужно вывести видео с
          большей битностью.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Экспорт секвенции с альфа-каналом"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/export_prores4444_8bit-alpha.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Затем укажите путь для вывода файла и нажмите на кнопку{" "}
          <mark className="select">«Export»</mark> в правом нижнем углу. После экспорта вы
          сможете воспользоваться этим видео в последующем монтаже или где-нибудь ещё.
        </p>
        <Addition type="info">
          Если вы хотите посмотреть такое видео, но у вас оно не открывается стандартным
          плеером, то вам нужно установить сторонний видеоплеер, например{" "}
          <mark className="app">VLC</mark> или <mark className="app">MPC-HC</mark>.
          Учтите, что не все видеопроигрыватели корректно отображают видео с
          альфа-каналом.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="previews, ускорение времени рендера, уменьшение перепросчёта, пререндер, prerender"
        title="Как сократить время повторного экспорта, если заказчик попросил внести небольшие правки?"
      >
      </DetailsSummary>
      <DetailsSummary title="Как сохранить свой шаблон с настройками для экспорта секвенций?">
        <p>
          Вы, наверное, не раз замечали параметр <mark className="select">«Preset»</mark>{" "}
          в окне экспорта и задумывались, можно ли добавить свои? Да, в{" "}
          <mark className="app">Adobe Premiere Pro</mark> можно добавить свои надстройки,
          чтобы в дальнейшем не перенастраивать экспорт.
        </p>
        <p>
          Для этого перейдите во вкладку <mark className="select">«Export»</mark> и
          начните там настраивать экспорт под себя. После того, как вы закончили — нажмите
          на три точки рядом с параметром <mark className="select">«Preset»</mark> и в
          контекстном меню нажмите на <mark className="select">«Save Preset»</mark>. В
          открывшемся меню введите название вашего будущего пресета и нажмите на{" "}
          <mark className="select">«OK»</mark>.
        </p>
        <ContentFigure
          caption="Export"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/create_custom_preset.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          После этого вы сможете воспользоваться своими заготовленными настройками
          экспорта в дальнейшем. Чтобы удалить, импортировать пресеты или сохранить их
          отдельным файлом, воспользуйтесь окном{" "}
          <mark className="select">«Preset Manager»</mark>, которая открывается через три
          точки у <mark className="select">«Preset»</mark> и выбрать там{" "}
          <mark className="select">«More Presets»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести текущий кадр предпросмотра как файл изображения?">
        <p>
          Для экспорта текущего кадра предпросмотра достаточно нажать на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + E</mark> или нажать на иконку фотоаппарата
          в <mark className="select">«Program Monitor»</mark>.
        </p>
        <ContentFigure
          caption="Program Monitor"
          imgTitle="Экспорт текущего кадра в окне Program Monitor"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/export_frame_program_monitor.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Затем в открывшемся окне выберите формат и путь для сохранения изображения, а
          потом нажмите на <mark className="select">«OK»</mark>.
        </p>
        <ContentFigure
          caption="Export Frame"
          imgTitle="Экспорт текущего кадра"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/export_frame.png"
          theme="dark"
          type="image"
          variant="windows"
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
          Для начала, как всегда, нам нужно перейти во вкладку{" "}
          <mark className="select">«Export»</mark> и выбрать в параметре{" "}
          <mark className="select">«Format»</mark> нужный нам тип файла.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Выбираем формат изображений"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/select_png_export.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          Если вы хотите вывести кадры с прозрачностью — не забудьте указать параметр{" "}
          <mark className="select">«Include Alpha Channel»</mark>.
        </Addition>
        <p>
          Затем{" "}
          <b>
            <u>не забудьте</u>
          </b>{" "}
          создать новую пустую папку, куда вы хотите экспортировать все кадры, и указать
          её в качестве пути для вывода. <mark className="app">Adobe Premiere Pro</mark>{" "}
          не создаёт автоматически подпапку для секвенции изображений, как это делает{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <p>
          После этого просто нажимаем на кнопку <mark className="select">«Export»</mark>.
          Вот и всё, все кадры из вашей секвенции сохранятся в нужную папку.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести только часть моей секвенции?">
        <p>
          Прежде чем начать экспорт части секвенции, вам нужно поставить точки входа на
          таймлайне с помощью кнопок <mark className="key">I</mark> и{" "}
          <mark className="key">O</mark>. Это позволит вам создать область, в пределах
          которой мы можем начать экспорт.
        </p>
        <Addition type="info">
          Чтобы очистить рабочую область, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + X</mark>.
        </Addition>
        <p>
          Затем нам нужно перейти во вкладку <mark className="select">«Export»</mark> и в
          параметре <mark className="select">«Range»</mark> под окном предпросмотра
          указать область рендера секвенции. Нам предлагают четыре варианта на выбор.
        </p>
        <ContentFigure
          caption="Export"
          imgTitle="Выбираем область экспорта"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/select_export_range.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <ul>
          <li>
            <mark className="select">«Entire Source»</mark> позволяет вывести секвенцию по
            всей её длине. В данной ситуации нам это не подходит.
          </li>
          <li>
            <mark className="select">«Source In/Out»</mark> позволяет вывести секвенцию по
            меткам начала и конца, или же входа и выхода, отмеченная с помощью кнопок{" "}
            <mark className="key">I</mark> и <mark className="key">O</mark>. То, что там
            нужно.
          </li>
          <li>
            <mark className="select">«Work Area»</mark> позволяет вывести секвенцию по
            размеру рабочей области. По умолчанию рабочая область скрыта, и её можно
            активировать, нажав на три полоски в заголовке таймлайна и выбрав{" "}
            <mark className="select">«Work Area Bar»</mark>. В данной ситуации тоже может
            подойти, но он менее удобен.
          </li>
          <li>
            <mark className="select">«Custom»</mark> позволяет вывести секвенцию по длине,
            указанным под окном предпросмотра в вкладке{" "}
            <mark className="select">«Export»</mark>. Подходит, если вы не хотите ставить
            метки In/Out на вашем таймлайне.
          </li>
        </ul>
        <p>
          После настройки области экспорта не забудьте настроить остальные параметры
          экспорта под ваши нужны и нажать на кнопку{" "}
          <mark className="select">«Export»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Я сделал работу в Premiere Pro, но мне нужно передать .prproj файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?">
        <p>
          Да, возможно. Это можно сделать через{" "}
          <mark className="select">«Project Manager»</mark>, который находится в параметре{" "}
          <mark className="select">«File»</mark> контекстного меню.
        </p>
        <ContentFigure
          caption="Adobe Premiere Pro"
          imgTitle="Открытие Project Manager"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/file_project_manager.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          После открытия окна <mark className="select">«Project Manager»</mark> вы можете
          увидеть список ваших секвенций. В этом списке вы можете выбрать все секвенции
          для экспорта или оставить только нужные. Также не забудьте указать нужный путь
          до файла, нажав на кнопку <mark className="select">«Browse»</mark> в параметре{" "}
          <mark className="select">«Destination Path»</mark>. В разделе{" "}
          <mark className="select">«Options»</mark> вы можете указать, сохранять ли файлы
          предпросмотра или неиспользуемые исходники и прочие параметры.
        </p>
        <p>
          Чтобы начать сохранение проекта вместе с исходниками, достаточно нажать на{" "}
          <mark className="select">«OK»</mark> в правом нижнем углу и дождаться окончания
          операции. Убедитесь в том, что у вас включен параметр{" "}
          <mark className="select">«Collect Files and Copy to New Location»</mark>.
        </p>
        <ContentFigure
          caption="Project Manager"
          imgTitle="Окно Project Manager"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/project_manager.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <ContentFilter
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
                  alignItems: "center",
                  display: "grid",
                  gap: "10px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
                }}
              >
                <ContentFigure
                  caption="Выбор формата архива"
                  imgTitle="Выбор формата архива"
                  src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-format.gif"
                  theme="light"
                  type="image"
                  variant="mac"
                />
                <ContentFigure
                  caption="Выбор размера разделения архива"
                  imgTitle="Выбор размера разделения архива"
                  src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-split.gif"
                  theme="light"
                  type="image"
                  variant="mac"
                />
              </div>
              <Addition type="info">
                Подробнее о создании архивов через{" "}
                <a href="https://www.keka.io/ru/">keka</a> вы можете прочесть на{" "}
                <a href="https://github.com/aonez/Keka/wiki/Compressing-with-Keka">
                  этой странице
                </a>
                .
              </Addition>
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
              <ContentFigure
                caption="Как разбить архив на части и собрать его"
                src="6KumGS0EyUQ"
                type="youtube"
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
