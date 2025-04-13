import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {Divider} from "antd";
import JsonToTgsConverter from "../../../components/features/ConverterJsonToTgs";
import ContentSwitcher from "../../../components/features/ContentFilter";

const AEExport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Export.tsx" />
      <DetailsSummary
        tag="тикток, ютуб, максимальное качество, разрешение, битрейт"
        title="Какие настройки экспорта стоит установить для вывода в социальные сети?"
      >
        <p>
          Каждая социальная сеть или видео площадка, увы, пережимают загружаемое
          пользователем видео так, чтобы уместить у себя на серверах с меньшим объёмом
          файла. Если вы установите слишком высокое значение битрейта и разрешение,
          например для <mark className="app">TikTok</mark>, то площадка с радостью всё
          пережмёт до <mark>1080p/60fps</mark> и около <mark>10 Мбит/с</mark>, поэтому
          разрешение <mark>4K</mark> и битрейт условно <mark>100 Мбит/с</mark> смысла
          ставить нет. Также установка слишком низкого битрейта или других неверных
          параметров могут испортить ваше прекрасное видео.
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
          Для публикации видео на <mark className="app">YouTube</mark> нужно соблюдать{" "}
          <a href="https://support.google.com/youtube/answer/1722171?hl=ru#zippy=%2C%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA-h%2C%D0%B1%D0%B8%D1%82%D1%80%D0%B5%D0%B9%D1%82">
            несколько рекомендаций
          </a>
          .
        </p>
        <ul>
          <li>
            Контейнер у видео должен быть <mark className="file">.mp4</mark>.
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
            нет, но лучше соблюдать таблицу битрейтов из официального сайта{" "}
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
            Вес полученного файла не должен превышать <mark>75 Мб</mark>, если вы
            собираетесь выкладывать видео с устройства на Android. Или не превышать{" "}
            <mark>250 Мб</mark>, если вы собираетесь выкладывать видео с устройства на
            <mark>iOS</mark>.
          </li>
          <li>
            Контейнер у видео должен быть <mark className="file">.mp4</mark>.
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
          Экспортируем для Instagram<sup>*</sup>
        </Divider>
        <AdditionDanger>
          <sup>*</sup>
          <mark className="app">Instagram</mark> и <mark>Meta</mark> всё ещё признаны
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
          Этот мессенджер более лоялен к видеофайлам. Если выкладывать видео через{" "}
          <mark className="app">Telegram Desktop</mark> в личные чаты или каналы, то он
          отправится без сжатия и не пережмёт ваше видео. Это хорошо, если нужно отдать
          клиенту видео в оригинальном качестве, но не очень, если собираетесь выкладывать
          видео в пост, так как не все смогут скачать полностью видео. Поэтому просто
          постарайтесь любыми способами обойтись в <mark>50 Мб</mark> для коротких видео
          или <mark>300 Мб</mark> для длинных. Желательно тоже в кодеке{" "}
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
      <DetailsSummary
        tag="медиаенкодер, медиаэнкодер"
        title="Почему из каждого угла советуют не использовать Media Encoder для экспорта композиций из After Effects?"
      >
        <p>
          <mark className="app">Media Encoder</mark> славится своими багами и различными
          проблемами при экспорте композиций из <mark className="app">After Effects</mark>
          . Поэтому чтобы исключить траблы и не морочить себе голову при экспорте -
          советуем от него отказаться и использовать его только в крайних случаях,
          например для создания прокси-видео. Вы спросите, а в чём собственно проблема? Да
          проблем то от него целая куча...
        </p>
        <ul>
          <li>
            <mark className="app">Media Encoder</mark> при экспорте сложных сцен может
            просто остановить процесс рендера, и всё. Без объяснения причин, а потом ищи и
            гадай, что ему не нравится.
            <AdditionWarning>
              При начале экспорта через <mark className="app">Media Encoder</mark>,
              программа запускает дополнительный процесс{" "}
              <mark className="file">AfterFX.exe</mark>. Лишний процесс{" "}
              <mark className="file">AfterFX.exe</mark> может дополнительно нагрузить ваш
              компьютер или заполнить всю оперативную память. Из-за этого могут быть сбои
              при экспорте через <mark className="app">Media Encoder</mark>.
            </AdditionWarning>
          </li>
          <li>
            <mark className="app">Media Encoder</mark> любит терять исходники просто так,
            поэтому не удивляйтесь, если вы вместо изображения или видео вы увидите
            палитру цветов как при технических работах на ТВ.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> может вывести композиции с
            различными артефактами, например сместив изображение в сторону или ухудшив
            цветопередачу.
          </li>
          <li>
            При экспорте композиций из <mark className="app">After Effects</mark> в{" "}
            <mark className="app">Media Encoder</mark> могут появиться красные кресты,
            водяные знаки или ещё что-то похожее, сигнализирующее об отсутствии лицензии
            на сторонних эффектах. Если в <mark className="app">After Effects</mark> всё с
            активацией хорошо, то не факт что она адекватно перенесётся в{" "}
            <mark className="app">Media Encoder</mark>, так как лицензия плагинов может
            быть завязана глубже именно к <mark className="app">After Effects</mark>.
          </li>
          <li>
            При экспорте в <mark className="app">Media Encoder</mark> вы вряд ли получите
            стабильную работу функции <mark>Multi-frame Render</mark>, которая отлично
            работает при экспорте напрямую из <mark className="app">After Effects</mark>.
          </li>
          <li>
            При отправке композиций из <mark className="app">After Effects</mark> в{" "}
            <mark className="app">Media Encoder</mark> она может просто не появиться в
            очереди рендера. Такое бывает, когда происходит внутренний сбой в{" "}
            <mark>Dynamic Link</mark>, но пользователю об этом не сообщают. Никому не
            охота искать процессы Adobe, завершать их, а затем повторять попытку экспорта
            снова.
          </li>
          <li>
            Запуск экспорта в <mark className="app">After Effects</mark> происходит почти
            моментально, в отличии от долгого запуска самого{" "}
            <mark className="app">Media Encoder</mark>. После запуска{" "}
            <mark className="app">Media Encoder</mark> надо ещё подождать, когда он
            подгрузит композицию из <mark className="app">After Effects</mark>, запустит
            ещё один процесс <mark className="file">AfterFX.exe</mark> для рендера и
            только потом уже начнёт экспорт. Согласитесь, не очень удобно ждать минуту,
            когда надо вывести короткое видео.
          </li>
        </ul>
        <p>
          Изначально <mark className="app">Media Encoder</mark> был создан для
          перекодирования исходников из одного формата в другой и для создания прокси,
          чтобы в дальнейшем их подключить в <mark className="app">Premiere Pro</mark>. Но
          со временем Adobe решил добавить туда функцию экспорта из{" "}
          <mark className="app">After Effects</mark> и понеслась. Большинство
          пользователей экспортом в этой программе занимались по причине того, что в{" "}
          <mark className="app">After Effects</mark> по стандарту в старых версиях не было
          возможности экспортировать в кодек <mark className="video">H.264</mark>.
        </p>
        <p>
          После обновления программ до версий <mark>23.X</mark> и новее нужда в выводе
          через <mark className="app">Media Encoder</mark> пропала, так как в{" "}
          <mark className="app">After Effects</mark> добавили нативный экспорт в{" "}
          <mark className="video">H.264</mark>. Также никто не запрещал устанавливать
          сторонние плагины, например{" "}
          <mark className="plugin">Autokroma AfterCodecs</mark> или{" "}
          <mark className="plugin">Voukoder</mark> для экспорта в различные кодеки
          напрямую из <mark className="app">After Effects</mark>.
        </p>
        <AdditionInfo>
          Если вам нужно поставить на очередь просчёта сразу несколько композиций -
          создайте проект болванку и импортируйте туда несколько своих проектов. Затем вы
          сможете все нужные композиции закинуть в очередь просчёта и начать его,
          предварительно указав нужный формат и расположение.
        </AdditionInfo>
        <p>
          Вывод из этого полотна проблем довольно простой: при экспорте напрямую из{" "}
          <mark className="app">After Effects</mark> вы можете уберечь себя от ужасов,
          которые создаёт <mark className="app">Media Encoder</mark>. Надеюсь, что мы
          убедили вас его не использовать.
        </p>
        <AdditionInfo>
          О том, как экспортировать в популярные форматы, вы можете прочитать в следующих
          пунктах этой страницы.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="H.265, мп4, ш264, ш265, h264, h265, вывести видео, avc1"
        title="Как экспортировать композицию в .mp4 и H.264?"
      >
        <p>
          <mark className="video">H.264</mark> - это популярный кодек видео, с которым мы
          встречаемся каждый день - в социальных сетях, видеоплощадках, на сайтах и даже в
          телевидении. Первая версия этого кодека появилась в 2003 году и с тех пор его
          распространение продолжается до сих пор. Сейчас, конечно, есть более эффективные
          наследники <mark className="video">H.264</mark>, такие как{" "}
          <mark className="video">H.265</mark>, <mark className="video">H.266</mark> и
          прочие, но обычно при открытии таких видео на старых устройствах пользователь
          сталкивается с плохой совместимостью, поэтому они менее популярны в народе. Раз{" "}
          <mark className="video">H.264</mark> такой популярный, то может возникнуть
          вопрос, а как экспортировать его из <mark className="app">After Effects</mark>{" "}
          без танцев с бубном? Из программы вывести видео с таким кодеком без
          использования <mark className="app">Media Encoder</mark> можно аж тремя
          способами.
        </p>
        <ul>
          <li>
            С помощью встроенного кодека <mark className="plugin">H.264</mark>. Он
            доступен только на <mark className="app">After Effects</mark> версий{" "}
            <mark>2023</mark> и новее.
          </li>
          <li>
            С помощью стороннего плагина <mark className="plugin">Voukoder</mark>.
            Доступен для устройств на <mark>Windows</mark>. Поддержка устройств на{" "}
            <mark>macOS</mark> косвенно присутствует с версий{" "}
            <mark className="app">Voukoder Pro 2.0</mark> и новее, но эту версию в этом
            пункте рассматривать не будем.
          </li>
          <li>
            С помощью стороннего плагина <mark className="plugin">AfterCodecs</mark>.
            Доступен для <mark>Windows</mark> и <mark>macOS</mark>, а также поддерживает
            достаточно много старых версий <mark className="app">After Effects</mark>.
          </li>
        </ul>
        <AdditionWarning>
          С помощью кодеков <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark> нельзя вывести видео с альфа-каналом, то
          есть с прозрачностью. Для вывода видео на прозрачном фоне воспользуйтесь
          форматами <mark className="video">Quicktime - Apple Prores 4444</mark> или{" "}
          <mark className="video">WebM - VP9</mark>.
        </AdditionWarning>
        <p>
          Сначала разберёмся, куда что тыкать. Для того чтобы засунуть вашу нужную
          композицию в очередь экспорта, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Вы переместитесь в окно очереди экспорта,
          где вы можете установить кодек для экспорта в пункте{" "}
          <mark className="ui">Output Module</mark>, параметры экспорта, например
          использование прокси или принудительно отключить эффекты в пункте{" "}
          <mark className="ui">Render Settings</mark>.
        </p>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          styleClass="figure_windows-dark"
        />
        <Divider>Выводим через встроенный H.264</Divider>
        <AdditionWarning>
          У стандартного кодека <mark className="plugin">H.264</mark> есть ряд ограничений
          - нельзя выводить видео с нестандартным FPS, например <mark>20</mark> и может
          некорректно работать с не-квадратными пикселями в настройках вашей композиции.
          Программа при необходимости выбьет окно с предупреждением, в котором будет
          описана определённая ошибка при выборе тех или иных настроек экспорта.
        </AdditionWarning>
        <p>
          Начнём по порядку, с первого и простого способа. Вывод в{" "}
          <mark className="video">H.264</mark> стандартными способами вернули в версиях{" "}
          <mark className="app">After Effects</mark> 2023 и новее. Теперь вместо{" "}
          <mark className="plugin">AVI</mark> по умолчанию уже стоит то, что нам нужно.
          Обычно в большинстве случаев хватает трёх стандартных пресетов:{" "}
          <mark className="video">H.264 - 5 Мбит/c</mark>,{" "}
          <mark className="video">H.264 - 15 Мбит/c</mark> и{" "}
          <mark className="video">H.264 - 40 Мбит/c</mark>.
        </p>
        <p>
          Чтобы начать изменять битрейт и аналогичные настройки для встроенного кодека{" "}
          <mark className="video">
            H.264, откройте окно <mark className="ui">Output Module</mark>, нажав на
          </mark>
          название выбранного пресета. Для выбора нужного нам битрейта откройте окно{" "}
          <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/output_module_format_options.png"
          imgTitle="Окно Output Module"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне мы можем выбрать <mark>VBR</mark> или <mark>CBR</mark>. Если
          в вашем видео есть слишком быстрые движения объектов и куча частиц - установите
          больше битрейта и <mark>CBR</mark>, но не переусердствуйте. Пункт{" "}
          <mark>VBR</mark> больше подойдет тем, кому нужен минимальный вес файла.
        </p>
        <ImageFigure
          caption="H.264 Options"
          imgSrc="images/aftereffects/h264_options.png"
          imgTitle="Окно настроек H.264"
          styleClass="figure_windows-dark"
        />
        <p>
          После того, как вы указали нужный битрейт, прожимайте кнопки{" "}
          <mark className="ui">OK</mark> до полного закрытия{" "}
          <mark className="ui">Output Module</mark>. В графе{" "}
          <mark className="ui">Output To</mark> вы можете указать путь и название для
          вашей экспортируемой композиции, в стрелочке слева можно указать
          предустановленный шаблон названия или создать свой. Для начала экспорта нажмите
          на кнопку <mark className="ui">Render</mark> или на{" "}
          <mark className="key">Enter</mark>.
        </p>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/start_render_button.png"
          imgTitle="Кнопка начала рендера"
          styleClass="figure_windows-dark"
        />
        <Divider>Выводим через Voukoder</Divider>
        <p>
          Если же вас результат рендера от стандартного{" "}
          <mark className="video">H.264</mark> не устраивает, то можно воспользоваться
          плагином <mark className="plugin">Voukoder</mark>. В этом примере мы рассмотрим
          плагин{" "}
          <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">версии 13.4.1</a>
          , не Pro версию.
        </p>
        <AdditionWarning>
          Демонстрируемая версия плагина <mark className="plugin">Voukoder</mark>{" "}
          недоступна на устройствах с <mark>macOS</mark>. Чтобы подключить плагин к
          программе, нужно скачать и установить{" "}
          <a href="https://github.com/Vouk/voukoder/releases/download/13.4.1/voukoder-13.4.1.msi">
            сам Voukoder
          </a>{" "}
          и{" "}
          <a href="https://github.com/Vouk/voukoder-connectors/blob/master/aftereffects/aftereffects-connector-0.10.0.msi?raw=true">
            коннектор для After Effects
          </a>{" "}
          к нему.
        </AdditionWarning>
        <p>
          Для того чтобы начать рендер с помощью <mark className="plugin">Voukoder</mark>,
          вам нужно снова зайти в <mark className="ui">Output Module</mark> и выбрать
          пункте <mark className="ui">Format</mark> плагин{" "}
          <mark className="ui">Voukoder</mark>. Чтобы перейти в настройки{" "}
          <mark className="ui">Voukoder</mark> нужно нажать рядом кнопку{" "}
          <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/selecting_voukoder.png"
          imgTitle="Выбираем Voukoder из списка форматов"
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
          вывода из <mark className="app">After Effects</mark> используются редко, а если
          уж и надо вывести в таком формате, то проще переконвертировать видео позже через
          условный <a href="https://www.shutterencoder.com/">Shutter Encoder</a>. Теперь
          поговорим и о приставках в названиях кодеков.
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
            <mark>AMD AMF</mark> - тоже самое, что и предыдущий пункт, но на встроенном
            видеочипе AMD.
          </li>
        </ul>
        <ImageFigure
          caption="Voukoder 13.4.1"
          imgSrc="images/aftereffects/select_codec_in_voukoder.png"
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
          imgSrc="images/aftereffects/codec_parameter_voukoder.png"
          imgTitle="Настраиваем качество видео в Voukoder"
          styleClass="figure_windows-light"
        />
        <ul>
          <li>
            Значения <mark>23</mark> или <mark>25</mark> хватит с головой для экспорта
            видео в <mark className="app">YouTube</mark>,{" "}
            <mark className="app">VK Видео</mark> и подобных видео площадок.
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
          экспорта и начать экспорт с помощью кнопки <mark className="ui">Render</mark>.
        </p>
        <Divider>Выводим через AfterCodecs</Divider>
        <p>
          Теперь поговорим и про <mark className="plugin">AfterCodecs</mark>. Для начала
          экспорта через <mark className="plugin">AfterCodecs</mark> нам нужно снова зайти
          в <mark className="ui">Output Module</mark> и выбрать то, что нам нужно. Для
          открытия настроек <mark className="plugin">AfterCodecs</mark> мы снова нажимаем
          на кнопку <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/selecting_aftercodecs.png"
          imgTitle="Выбираем AfterCodecs из списка форматов"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне мы снова видим кучу непонятных параметров. Здесь нам нужно
          указать качество и скорость кодирования видео.
        </p>
        <ul>
          <li>
            В пункте <mark className="ui">Tradeoff</mark> мы можем указать три варианта на
            что ориентироваться при кодировании: на процент качества (похож на метод
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
          caption="AfterCodecs 1.11.5 for After Effects"
          imgSrc="images/aftereffects/aftercodecs_settings.png"
          imgTitle="Настройки AfterCodecs"
          styleClass="figure_windows-dark"
        />
        <p>
          После завершения настроек мы нажимаем <mark className="ui">OK</mark> и начинаем
          рендер как обычно, через кнопку <mark className="ui">Render</mark> или{" "}
          <mark className="key">Enter</mark>.
        </p>
        <AdditionInfo>
          Более подробную информацию о рекомендуемом пайплайне ввода и вывода вы можете
          узнать в Telegram-посте{" "}
          <a href="https://t.me/montage_tutors/2">Montage Tutors</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="вебм, вп9, ав1"
        title="Как экспортировать композицию в .webm и VP9/AV1?"
      >
        <p>
          <mark className="video">VP9</mark>, <mark className="video">AV1</mark> или же{" "}
          <mark className="video">WebM</mark> - стандарт сжатия видео, который часто
          используется для встраивания в различные веб-ресурсы и мобильные приложения. Эти
          кодеки обычно лучше сжимают видео по сравнению с{" "}
          <mark className="video">H.264</mark>, а также поддерживают{" "}
          <mark className="word">альфа-канал</mark>, чтобы можно было прикрепить видео с
          прозрачным фоном. Но, к сожалению, стандартными средствами из{" "}
          <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Media Encoder</mark> невозможно экспортировать композицию
          в <mark className="video">WebM</mark>. Для вывода видео в таком кодеке мы будем
          экспортировать композицию как обычно, а затем конвертировать полученный файл в
          нужный формат с помощью <mark className="app">Shutter Encoder</mark>.
        </p>
        <AdditionDanger>
          Автор{" "}
          <b>
            <u>крайне не рекомендует</u>
          </b>{" "}
          использовать плагин <a href="https://fnord.com/">WebM от fnord</a> для экспорта
          из <mark className="app">Media Encoder</mark>, так как он часто экспортирует
          видео на прозрачном фоне с жуткими артефактами или внезапно останавливает
          кодирование без причины.
        </AdditionDanger>
        <Divider>Выводим композицию в удобном формате</Divider>
        <p>
          Для начала нам нужно вывести видео как обычно: в{" "}
          <mark className="video">Apple Prores 4444</mark>, если вы хотите видео с
          альфа-каналом или в <mark className="video">Apple Prores 422</mark>, если вы
          хотите видео без альфа-канала. Для этого мы переходим в очередь рендера,
          открываем <mark className="ui">Output Module</mark>. В пункте{" "}
          <mark className="ui">Format</mark> выбираем{" "}
          <mark className="ui">Quicktime</mark>, а в{" "}
          <mark className="ui">Format Options</mark> нужный нам кодек.
        </p>
        <AdditionWarning>
          Не забудьте поставить в <mark className="ui">Channels</mark> параметр{" "}
          <mark className="ui">RGB + Alpha</mark>, если вы собираетесь выводить видео с
          альфа-каналом.
        </AdditionWarning>
        <VideoFigure
          caption="Выводим видео в Apple Prores"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/export_to_prores.mp4"
        />
        <p>
          Затем не забудьте указать путь, куда вы хотите вывести видео, и нажмите на{" "}
          <mark className="ui">Render</mark> или на клавишу{" "}
          <mark className="key">Enter</mark>.
        </p>
        <Divider>Конвертируем в WebM с помощью Shutter Encoder</Divider>
        <p>
          После успешного экспорта открываем <mark className="app">Shutter Encoder</mark>{" "}
          и вставляем в него выведенное видео из{" "}
          <mark className="app">After Effects</mark>. В пункте{" "}
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
          контейнере <mark className="file">.webm</mark>, которое можно использовать в
          веб-проектах или где-нибудь ещё.
        </p>
        <AdditionWarning>
          Имейте ввиду, что поддержка <mark className="video">WebM</mark> на прозрачном
          фоне в <mark className="app">Safari</mark> для устройств на <mark>iOS</mark> и{" "}
          <mark>macOS</mark>
          отсутствует, там будет отображаться чёрный фон вместо прозрачности.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary
        title="Как экспортировать композицию в .gif?"
        tag="создать гифку"
      >
        <p>
          В базовой комплектации <mark className="app">After Effects</mark> вывести
          композицию в формат <mark className="image">GIF</mark> не получится, но никто не
          запрещал воспользоваться альтернативными способами.
        </p>
        <AdditionInfo>
          Если вы собираетесь выводить композицию в <mark className="image">GIF</mark> для
          веб-страницы, то советую лучше вывести в формат{" "}
          <mark className="video">WebM</mark>. Он лучше подходит для получения
          качественного изображения с маленьким размером.
        </AdditionInfo>
        <ul>
          <li>
            Из самого <mark className="app">After Effects</mark> можно вывести{" "}
            <mark className="file">.gif</mark> с помощью расширения{" "}
            <mark className="plugin">GifGun</mark>.
          </li>
          <li>
            Либо вывести <mark className="file">.gif</mark> через{" "}
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
          У формата <mark className="image">GIF</mark> есть множество ограничений и
          нюансов.
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
              <mark>1024x576</mark> и <mark>15 FPS</mark> для композиций с соотношением
              сторон <mark>16:9</mark>.
            </li>
          </ul>
        </AdditionWarning>
        <Divider>Выводим через GifGun</Divider>
        <p>
          Предположим, что вы уже установили расширение{" "}
          <mark className="plugin">GifGun</mark>. Он должен появиться в{" "}
          <mark className="ui">Window &gt; Extensions</mark>.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/open_gifgun.png"
          imgTitle="Открытие расширения GifGun"
          styleClass="figure_windows-light"
        />
        <p>
          После открытия расширения вы увидите простое окно с двумя кнопками:{" "}
          <mark className="ui">Make GIF</mark> для начала экспорта в{" "}
          <mark className="file">.gif</mark> и кнопку с шестерёнкой. Нажав на вторую
          кнопку вы откроете настройки, где сможете указать размер, FPS или путь к
          выходному файлу.
        </p>
        <ImageFigure
          caption="GifGun"
          imgSrc="images/aftereffects/gifgun_settings.png"
          imgTitle="Настройки расширения GifGun"
          styleClass="figure_windows-dark"
        />
        <Divider>Выводим через Media Encoder</Divider>
        <p>
          <mark className="image">GIF</mark> можно ещё получить с помощью{" "}
          <mark className="app">Media Encoder</mark>. Хоть мы и отговариваем от его
          использования, но в выборе различных форматов для экспорта он занимает более
          выигрышную позицию по сравнению с выводом напрямую из{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <p>
          Для того чтобы начать экспорт через <mark className="app">Media Encoder</mark>,
          перейдите в <mark className="ui">File &gt; Export</mark> и нажмите на{" "}
          <mark className="ui">Add to Adobe Media Encoder Queue</mark> и подождите, когда
          откроется вторая программа.
        </p>
        <AdditionInfo>
          Композиция из <mark className="app">After Effects</mark> корректно отправится в{" "}
          <mark className="app">Media Encoder</mark> только в том случае, если у вас
          установлен одинаковый год программ и на стандартном расположении программ. В
          противном случае вам выбьют ошибку о том, что{" "}
          <mark className="app">Media Encoder</mark> не установлен.
        </AdditionInfo>
        <p>
          После открытия <mark className="app">Media Encoder</mark> укажите формат{" "}
          <mark className="image">Animated GIF</mark> в очереди экспорта. Там же вы можете
          указать пресет и путь к выходному файлу. Для детальной настройки вы можете
          открыть <mark className="ui">Export Settings</mark>, нажав по названию
          стандартного пресета. Там же вы можете указать разрешение, FPS и другие
          параметры.
        </p>
        <ImageFigure
          caption="Media Encoder"
          imgSrc="images/aftereffects/selecting_animated_gif_media_encoder.png"
          imgTitle="Выбираем формат GIF для экспорта через Media Encoder"
          styleClass="figure_windows-light"
        />
        <AdditionWarning>
          Если вы выберете в качестве формата пункт <mark className="ui">GIF</mark> без
          слова <mark>Animated</mark>, то вы получите только кадры отдельными
          изображениями формата <mark className="file">.gif</mark> и забьёте себе папку
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
          <mark>200 Мб</mark>. Максимальная длина не должна превышать 60 секунд для
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
      <DetailsSummary
        tag="export with alpha-channel, прорес 4444"
        title="Как экспортировать композицию с альфа-каналом, то есть с прозрачностью?"
      >
        <AdditionWarning>
          В <mark className="video">H.264</mark> и <mark className="file">.mp4</mark>{" "}
          нельзя вывести композицию с альфа-каналом. Это можно сделать только на
          устройствах с <mark>macOS</mark> и при использовании кодека{" "}
          <mark className="video">H.265 (HEVC)</mark>.
        </AdditionWarning>
        <p>
          Прежде чем начать выводить композицию с альфа-каналом, убедитесь в том, что в
          вашей композиции есть сам альфа-канал. Без этого никак. Чтобы проверить это,
          можно воспользоваться кнопкой{" "}
          <mark className="ui">Toggle Transparency Grid</mark>, которая подставляет сетку
          в виде шахматной доски для отображения прозрачных частей в композиции.
        </p>
        <ImageFigure
          caption="Composition"
          imgSrc="images/aftereffects/toggle_transparency_grid.png"
          imgTitle="Включение сетки для отображения прозрачных частей"
          styleClass="figure_windows-dark"
        />
        <p>
          Если всё с этим в порядке, то пора переходить в{" "}
          <mark className="ui">Render Queue</mark>, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. После перехода в очередь рендера откройте{" "}
          <mark className="ui">Output Module</mark> и выберите в пункте{" "}
          <mark className="ui">Format</mark> параметр{" "}
          <mark className="plugin">Quicktime</mark>. Потом откройте{" "}
          <mark className="ui">Format Options</mark> и выберите там параметр{" "}
          <mark className="video">Apple Prores 4444</mark> или{" "}
          <mark className="video">GoPro Cineform</mark> в разделе Video Codec. Затем не
          забудьте указать в <mark className="ui">Channels</mark> параметр{" "}
          <mark className="ui">RGB + Alpha</mark>, чтобы вывести видео с прозрачностью.
        </p>
        <VideoFigure
          caption="After Effects"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/export_prores4444_rgb-alpha.mp4"
        />
        <p>
          Затем укажите путь для вывода файла и нажмите на кнопку{" "}
          <mark className="ui">Render</mark> или на клавишу{" "}
          <mark className="key">Enter</mark>. После экспорта вы сможете воспользоваться
          этим видео в последующем монтаже видео или где-нибудь ещё.
        </p>
        <AdditionInfo>
          Если вы хотите посмотреть такое видео, но у вас оно не открывается стандартным
          плеером, то вам нужно установить сторонний видеоплеер, например{" "}
          <mark className="app">VLC</mark> или <mark className="app">MPC-HC</mark>.
          Учтите, что не все видео-проигрыватели корректно отображают видео с
          альфа-каналом.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="телеграм, стикеры, tgs, тгс"
        title="Как экспортировать композицию как стикеры и эмодзи для Telegram?"
      >
        <p>
          В наше время только ленивый не слышал о мессенджере{" "}
          <mark className="app">Telegram</mark>, а также о функции отправки стикеров
          собеседнику. В <mark className="word">стикерах</mark> можно хранить всякую
          ржаку, мемы и прочие виды контента. Но мало кто знает, как их можно создать в{" "}
          <mark className="app">Telegram</mark> и вывести свою композицию из{" "}
          <mark className="app">After Effects</mark> в соответствии с требованиями
          стикеров. Стикеры делятся на четыре вида и у каждого имеется свой подход к
          экспорту из программы и импорту в <mark className="app">Telegram</mark>.
        </p>
        <Divider>Разбираемся с типами стикеров</Divider>
        <ul>
          <li>
            <mark className="word">Статичный стикер</mark> или{" "}
            <mark className="word">статичный эмодзи</mark> - обычная картинка, которая
            отправляется собеседнику. Их можно создать в любом графическом редакторе,
            например <mark className="app">Photoshop</mark> или{" "}
            <mark className="app">GIMP</mark>, или вывести из{" "}
            <mark className="app">After Effects</mark> как <a href="#10.9">один кадр</a>,
            главное соблюдать некоторые требования.
            <ul>
              <li>
                Для создания принимаются изображения формата{" "}
                <mark className="image">PNG</mark> или <mark className="image">WebP</mark>{" "}
                с прозрачным или непрозрачным фоном.
              </li>
              <li>
                Разрешение такого стикера должно быть не больше, чем <mark>512</mark> на{" "}
                <mark>512</mark> пикселей. Такие стикеры можно сделать с любым
                соотношением сторон, главное чтобы ни одна сторона не была больше чем{" "}
                <mark>512</mark> пикселей.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Анимированный стикер</mark> - векторные стикеры с
            анимацией, которые не теряют качество в зависимости от того, на каком
            устройстве они проигрываются. По своей сути, он похож на анимацию{" "}
            <mark>Lottie</mark> и имеет ряд ограничений по эффектам и весу. Разрешение у
            композиции должно быть <mark>512</mark> на <mark>512</mark> пикселей.
            Количество <mark>FPS</mark> у композиции должно быть строго со значением{" "}
            <mark>30</mark> или <mark>60</mark>, иначе рендер завершится с ошибкой.
            <AdditionDanger>
              <p>
                Для корректной вывода анимации в файл формата{" "}
                <mark className="file">.tgs</mark>, в вашей композиции не должно быть
                нижеперечисленных эффектов и свойств.
              </p>
              <ul>
                <li>
                  Выражения не поддерживаются, но их можно конвертировать в ключи. Для
                  этого выделите нужное свойство с выражением, нажмите на{" "}
                  <mark className="key">ПКМ</mark> и выберите{" "}
                  <mark className="ui">
                    Keyframe Assistant &gt; Convert Expression to Keyframes
                  </mark>
                  .
                </li>
                <li>
                  Не поддерживается интерполяция скорости с помощью{" "}
                  <mark>Auto Bezier</mark> у ключевых кадров. Для смены типа интерполяции
                  кадров выделите нужные ключи, нажмите на{" "}
                  <mark className="key">Ctrl + Alt + K</mark> и избавляйтесь там от типа
                  автоматического Безье.
                </li>
                <li>
                  Слои с изображениями не поддерживаются. Если вам нужно будет
                  использовать такой слой, то вы можете выполнить авто-трассировку слоя
                  для конвертации в вектор в <mark className="ui">Illustrator</mark> или
                  другом софте, а затем импортировать их как слои-фигуры.{" "}
                  <a href="https://helpx.adobe.com/ru/illustrator/using/image-trace-results-optimization.html">
                    Подробнее...
                  </a>
                </li>
                <li>
                  Различные эффекты из <mark className="ui">Effects & Presets</mark>,
                  которыми вы привыкли пользоваться, категорически нельзя использовать.
                  Иначе они просто пропадут из вашей финальной анимации.
                </li>
                <li>
                  Нельзя растягивать слои и использовать <mark>Time Remapping</mark>.
                  Проверить <mark className="word">растянутость</mark> можно в столбце{" "}
                  <mark className="ui">Stretch</mark>.
                </li>
                <li>
                  Текстовые слои не поддерживаются, их нужно конвертировать в фигуру.
                  Конвертация происходит с помощью нажатия{" "}
                  <mark className="key">ПКМ</mark> по слою с текстом и выбора{" "}
                  <mark className="ui">Create &gt; Create Shapes from Text</mark>.
                </li>
                <li>
                  Не поддерживается поворот слоёв с помощью{" "}
                  <mark>Auto-Oriented Layers</mark>. Авто-ориентацию можно выключить
                  выделением слоя и нажатием <mark className="key">Ctrl + Alt + O</mark>.
                  В открывшемся окне выберите параметр <mark className="ui">Off</mark>.
                </li>
                <li>
                  Маски для слоёв, 3D-слои, <mark>Solid Layer</mark>,{" "}
                  <mark>Merge Paths</mark>, <mark>Repeater</mark>, <mark>Star Shape</mark>
                  и <mark>Gradient Stroke</mark> не поддерживаются.
                </li>
              </ul>
            </AdditionDanger>
          </li>
          <li>
            <mark className="word">Анимированные эмодзи</mark> - по своей сути похожи на{" "}
            <mark className="word">анимированные стикеры</mark>, к ней применяются такие
            же ограничения по эффектам и возможностям{" "}
            <mark className="app">After Effects</mark> и выводится аналогичным образом.
            <ul>
              <li>
                Для анимированных эмодзи нужно указать размер композиции <mark>100</mark>{" "}
                на <mark>100</mark> пикселей. Ни больше, ни меньше.
              </li>
              <li>
                Все ограничения по эффектам такие же, как и у{" "}
                <mark className="word">анимированных стикеров</mark>.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Видео-стикер</mark> - стикер, по сути являющийся
            обычным видео, который хранится в формате <mark className="video">WebM</mark>{" "}
            и кодеке <mark className="video">VP9</mark>s. Разрешение такого стикера должно
            быть максимум <mark>512</mark> на <mark>512</mark> пикселей.
          </li>
        </ul>
        <AdditionInfo>
          Подробнее о требованиях для того или иного типа стикеров вы можете посмотреть на{" "}
          <a href="https://core.telegram.org/stickers">сайте Telegram</a>.
        </AdditionInfo>
        <Divider>Выводим анимированный стикер через Bodymovin-Telegram</Divider>
        <p>
          Для вывода из <mark className="app">After Effects</mark> в стикеры формата{" "}
          <mark className="file">.tgs</mark> нам нужно использовать бесплатное стороннее
          расширение{" "}
          <a href="https://github.com/TelegramMessenger/bodymovin-extension">
            Bodymovin-TG
          </a>
          . Учтите, что он давно не обновлялся и могут возникать различные ошибки при
          использовании самой свежей версии <mark className="app">After Effects</mark> и в
          нём меньше функций, по сравнению с оригинальным{" "}
          <mark className="plugin">Bodymovin</mark>. После установки{" "}
          <mark className="plugin">Bodymovin-TG</mark> он появится в{" "}
          <mark className="ui">
            Window &gt; Extensions &gt; Bodymovin for Telegram Stickers
          </mark>
          . Если вы уверены, что ваша анимация подходит под все требования создания
          анимированных стикеров или анимированных эмодзи, то откройте окно расширения и
          выделите в нём нужную композицию, укажите путь для сохранения и нажмите на
          кнопку <mark className="ui">Export</mark>. Если при экспорте что-то пойдет не
          так, то расширение подскажет об этом.
        </p>
        <ImageFigure
          caption="Bodymovin for Telegram Stickers"
          imgSrc="images/aftereffects/bodymovin_tg_export_window.png"
          imgTitle="Вывод анимированного стикера через Bodymovin for Telegram Stickers"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Для корректной работы расширения требуется установить чекбокс у пункта{" "}
          <mark className="ui">Allow Scripts to Write Files and Access Network</mark> в
          настройках <mark className="app">After Effects</mark> -{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Scripting & Expressions</mark>.
        </AdditionWarning>
        <p>
          После экспорта перейдите в{" "}
          <a href="https://t.me/Stickers">бот для создания стикеров</a> и начните процесс
          создания стикера. Если что-то пойдет не так, бот об этом сообщит и скажет, что
          не так. Часто ошибки могут появиться из-за слишком большого размера файла или
          неверного типа стикеров при инициализации процесса создания.
        </p>
        <Divider>
          Альтернативный вывод анимированного стикера через обычный Bodymovin
        </Divider>
        <AdditionDanger>
          Данный способ не всегда работает стабильно и был создан ради экспериментальной
          альтернативы.
        </AdditionDanger>
        <p>
          Если экспорт из <mark className="plugin">Bodymovin-TG</mark> произошёл со сбоями
          или вам не хватает функционала из оригинального расширения, то вы можете
          попробовать вывести анимацию через обычный{" "}
          <mark className="plugin">Bodymovin</mark>, а затем конвертировать полученный
          файл через <i style={{opacity: 0.5}}>самодельный</i> конвертер в этом пункте.
        </p>
        <p>
          Прежде чем начать экспорт анимации в <mark className="file">.json</mark> нам
          нужно установить стороннее бесплатное
          <sup>*</sup> расширение <mark className="plugin">Bodymovin</mark>, который можно
          загрузить из <a href="https://aescripts.com/bodymovin/">aescripts</a>. После
          установки он появится в{" "}
          <mark className="ui">Window &gt; Extensions &gt; Bodymovin</mark>.
        </p>
        <AdditionInfo>
          <sup>*</sup>Чтобы скачать расширение - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с
          расширением, установите цену <mark>0</mark> в{" "}
          <mark className="ui">Name Your Own Price</mark>, добавьте его в корзину и
          подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
        <AdditionWarning>
          <ul>
            <li>
              Перед началом экспорта убедитесь в том, что вся ваша анимация поддерживается
              для вывода из <mark className="plugin">Bodymovin</mark>. Совместимость
              эффектов вы можете проверить прямо в{" "}
              <mark className="plugin">Bodymovin</mark> во вкладке{" "}
              <mark className="ui">Support Features</mark>. Если тот или иной эффект или
              действие не будет поддерживаться, то в выведенной композиции могут пропасть
              некоторые объекты, слои или анимация.
            </li>
            <li>
              Для корректной работы расширения требуется установить чекбокс у пункта{" "}
              <mark className="ui">Allow Scripts to Write Files and Access Network</mark>{" "}
              в настройках <mark className="app">After Effects</mark> -{" "}
              <mark className="ui">
                Edit &gt; Preferences &gt; Scripting & Expressions
              </mark>
              .
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Для вывода векторной анимации в <mark className="file">.json</mark> откройте
          вкладку <mark className="ui">Compositions</mark> расширения{" "}
          <mark className="plugin">Bodymovin</mark>, выделите в этом окне нужную
          композицию, укажите путь для сохранения и нажмите на кнопку{" "}
          <mark className="ui">Export</mark>. Если при экспорте что-то пойдет не так, то
          расширение подскажет об этом.
        </p>
        <ImageFigure
          caption="Bodymovin"
          imgSrc="images/aftereffects/bodymovin_export_window.png"
          imgTitle="Вывод композиции через Bodymovin"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Полученную анимацию вы можете посмотреть в расширении во вкладке{" "}
          <mark className="ui">Preview</mark> или в{" "}
          <a href="https://www.svgsprite.com/tools/lottie-player/">Lottie Player</a>.
        </AdditionInfo>
        <p>
          После успешного вывода анимации в <mark className="file">.json</mark> -
          поместите его в блок с конвертером чуть ниже, а затем нажмите на{" "}
          <mark className="ui">Скачать преобразованный TGS</mark>.
        </p>
        <AdditionInfo>
          По небольшим тестам после конвертации <mark className="file">.tgs</mark> в{" "}
          <mark className="file">.json</mark> из пункта про импорт{" "}
          <mark className="file">.tgs</mark> в <mark className="app">After Effects</mark>{" "}
          на этой странице и обратной конвертации в <mark className="file">.tgs</mark> с
          помощью блока ниже, выяснилось, что метод <mark>python-gzip</mark> чуть лучше
          сжимает файл, нежели <mark>js-pako-gzip</mark>.
        </AdditionInfo>
        <Divider>Конвертер JSON в TGS</Divider>
        <JsonToTgsConverter />
        <p>
          После конвертации перейдите в{" "}
          <a href="https://t.me/Stickers">бот для создания стикеров</a> и начните процесс
          создания анимированных стикеров или эмодзи с помощью команд{" "}
          <mark className="code">/newanimated</mark> или{" "}
          <mark className="code">/newemojipack</mark>. Если что-то пойдет не так, бот об
          этом сообщит и скажет, что не так с вашим файлом. Часто ошибки могут появиться
          из-за слишком большого размера файла или неподдерживаемой анимации.
        </p>
        <Divider>Выводим видео-стикер</Divider>
        <p>
          Видео-стикер по своей сути - обычный короткий видеоролик, который запакован в{" "}
          <mark className="file">WebM</mark> в кодеке <mark className="video">VP9</mark>.
          Требования от <mark className="app">Telegram</mark> по такому формату следующие.
        </p>
        <ul>
          <li>
            Для обоих типов требуется вывести видео в формате{" "}
            <mark className="video">WebM</mark> и в кодеке{" "}
            <mark className="video">VP9</mark>.{" "}
            <a href="#10.4">На этой странице уже обсуждался вывод в WebM/VP9</a> из{" "}
            <mark className="app">After Effects</mark> с помощью конвертации полученного
            видео.
          </li>
          <li>
            Если вы собираетесь создавать видео-
            <b>
              <u>стикеры</u>
            </b>
            , то максимальное разрешение такого файла должно быть не больше, чем{" "}
            <mark>512</mark> на <mark>512</mark> пикселей.
          </li>
          <li>
            Если вы собираетесь создавать видео-
            <b>
              <u>смайлики</u>
            </b>{" "}
            или видео-
            <b>
              <u>эмодзи</u>
            </b>
            , то максимальное разрешение такого файла должно быть <mark>100</mark> на{" "}
            <mark>100</mark> пикселей. Ни больше, ни меньше.
          </li>
          <li>
            Длина видеофайла не должен превышать <mark>3</mark> секунды, а размер
            видеофайла не должен превышать <mark>256</mark> килобайт.
          </li>
          <li>
            Фреймрейт видеофайла должен быть не больше чем <mark>30</mark> кадров в
            секунду.{" "}
            <i style={{opacity: 0.5, fontSize: "0.8em"}}>Странно, что не 60...</i>
          </li>
        </ul>
        <p>
          После конвертации перейдите в{" "}
          <a href="https://t.me/Stickers">бот для создания стикеров</a> и начните процесс
          создания видео-стикеров с помощью команд <mark className="code">/newvideo</mark>{" "}
          или <mark className="code">/newemojipack</mark>. Если что-то пойдет не так, бот
          об этом сообщит и скажет, что не так с вашим файлом.
        </p>
      </DetailsSummary>
      </DetailsSummary>
      <DetailsSummary title="Как экспортировать текущий кадр предпросмотра как файл изображения?">
        <p>
          Иногда у пользователя возникает нужда в выводе одного кадра из композиции как
          файл изображения, желательно в полном качестве, например для создания превью или
          показать пример чего-либо. Можно сделать это двумя способами.
        </p>
        <Divider>Выводим через Render Queue</Divider>
        <p>
          Для того, чтобы быстро отправить текущий кадр в очередь рендера, нужно прожать
          комбинацию клавиш <mark className="key">Ctrl + Alt + S</mark> или перейти в{" "}
          <mark className="ui">Composition &gt; Save Frame As</mark> и выбрать{" "}
          <mark className="ui">File</mark>.
        </p>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/export_one_frame_render_queue.png"
          imgTitle="Сохранение одного кадра через Render Queue"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого у вас откроется <mark className="ui">Render Queue</mark>, который
          предложит экспортировать <mark className="file">.psd</mark> файл в путь, который
          вы укажете в графе <mark className="ui">Output To</mark>. Формат можно изменить
          на свой, нажав на название пресета или на стрелочку рядом с ним.
        </p>
        <AdditionInfo>
          Вы можете создать свой шаблон формата, чтобы не менять тип файла каждый раз,
          когда вы экспортируете кадр через{" "}
          <mark className="ui">Composition &gt; Save Frame As &gt; File</mark>.
        </AdditionInfo>
        <Divider>Выводим через FX Console</Divider>
        <p>
          Если вы считаете способ через <mark className="ui">Save Frame As</mark>{" "}
          неудобным, то есть альтернатива. Вы можете сохранить текущий кадр через плагин{" "}
          <mark className="ui">FX Console</mark>, который можно загрузить{" "}
          <a href="https://www.videocopilot.net/blog/?s=fx%20console">по этой ссылке</a>.
        </p>
        <p>
          После установки плагина, откройте панель эффектов с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Space</mark> и нажмите на иконку шестерёнки. В
          настройках установите чекбокс у пункта{" "}
          <mark className="ui">Full Resolution Screenshots</mark>. Это позволит сохранять
          вам скриншоты в полном разрешении, независимо от того, какое было установлено в
          окне предпросмотра.
        </p>
        <ImageFigure
          caption="FX Console"
          imgSrc="images/aftereffects/fx_console_full_resolution_screenshots.png"
          imgTitle="Устанавливаем полное разрешение скриншотов"
          styleClass="figure_windows-dark"
        />
        <p>
          Теперь для быстрого сохранения текущего кадра в отдельный файл вам достаточно
          открыть окно плагина через <mark className="key">Ctrl + Space</mark> и нажать на
          иконку сохранения. Вам предложат три варианта: сохранить как{" "}
          <mark className="file">JPG</mark>, <mark className="file">PNG</mark> или
          сохранить кадр в буфер обмена.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/fx_console_save_frame_as.png"
          imgTitle="Сохраняем текущий кадр через FX Console"
          styleClass="figure_windows-dark"
        />
        <p>
          При выборе пунктов <mark className="ui">Save to JPG</mark> или{" "}
          <mark className="ui">Save to PNG</mark> появится системное окно для выбора места
          сохранения изображения. После указания местоположения вы сразу же получите файл
          в нужном месте.
        </p>
        <AdditionInfo>
          Некоторые пользователи ошибочно считают, что иконка фотоаппарата или же кнопка{" "}
          <mark className="ui">Take Snapshot</mark> в окне предпросмотра композиции
          сохранит куда-то кадр в какую-то папку. Отчасти это верно, но только этот кадр
          сохраняется в оперативную память и служит лишь для сравнения снятого кадра с
          каким-либо другим.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="вывести секвенцию фото"
        title="Как экспортировать все кадры композиции как отдельные файлы изображений?"
      >
        <p>
          Если вы хотите вывести все кадры из композиции в отдельные файлы, то вам
          достаточно выбрать в качестве способа вывода{" "}
          <mark className="ui">JPG Sequence</mark>,{" "}
          <mark className="ui">PNG Sequence</mark> или любой другой формат с названием{" "}
          <mark>Sequence</mark> в конце.
        </p>
        <p>
          Для начала как всегда отправляем нашу композицию в очередь рендера, указываем
          путь и открываем <mark className="ui">Output Module</mark> для настройки формата
          вывода.
        </p>
        <AdditionInfo>
          <mark className="app">After Effects</mark> по умолчанию при выводе секвенции
          создаст дополнительную папку, чтобы не срать папку, в которую вы хотите вывести.
          Это поведение можно отключить, убрав чекбокс с{" "}
          <mark className="ui">Save in subfolder</mark> при выборе расположения вывода.
        </AdditionInfo>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          styleClass="figure_windows-dark"
        />
        <p>
          Потом в окне <mark className="ui">Output Module</mark> в пункте{" "}
          <mark className="ui">Format</mark> выбираем любой формат с названием{" "}
          <mark>Sequence</mark> в конце. В моем случае - я выберу{" "}
          <mark className="ui">PNG Sequence</mark>. В{" "}
          <mark className="ui">Format Options</mark> можно настроить параметры
          изображения, например качество или сжатие.
        </p>
        <AdditionInfo>
          Если вы хотите вывести кадры с прозрачностью - не забудьте указать параметр{" "}
          <mark className="ui">RGB + Alpha</mark> в пункте{" "}
          <mark className="ui">Channels</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/selecting_png_sequence.png"
          imgTitle="Выбираем последовательность PNG для вывода"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого просто нажимаем на кнопку <mark className="ui">Render</mark> или на
          клавишу <mark className="key">Enter</mark>. Вот и всё, все кадры из вашей
          композиции сохранятся в нужную папку.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как экспортировать только часть моей композиции? Можно ли сделать так, чтобы композиция всегда экспортировалась по всей длине вне зависимости от указанной рабочей области?">
        <p>
          По умолчанию <mark className="app">After Effects</mark> выводит композицию
          длиной, соответствующей вашей рабочей области, которую вы указали с помощью
          комбинаций клавиш <mark className="key">B</mark> и{" "}
          <mark className="key">N</mark> или соответствующими маркерами на таймлайне.
        </p>
        <p>
          Если же вы хотите сделать так, чтобы композиция всегда экспортировалась по всей
          длине композиции, то вам нужно создать свой пресет для{" "}
          <mark className="ui">Render Settings</mark> и сделать его при необходимости
          стандартным. Для этого нажмите на иконку стрелочки возле пункта{" "}
          <mark className="ui">Render Settings</mark> и выберите пункт{" "}
          <mark className="ui">Make Template</mark>.
        </p>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/make_template_render_settings.png"
          imgTitle="Создание шаблона для Render Settings"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне у нас уже будет создан пресет под названием{" "}
          <mark>Untitled</mark>, название которого можно заменить на какое угодно. Чтобы
          установить новый пресет в качестве стандартного - укажите его в разделе{" "}
          <mark className="ui">Defaults</mark> для нужного типа файла.
        </p>
        <ImageFigure
          caption="Render Settings Templates"
          imgSrc="images/aftereffects/render_settings_templates.png"
          imgTitle="Создание шаблона для Render Settings"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Чтобы не переходить каждый раз в очередь экспорта - данное окно редактирования
          шаблонов для экспорта можно открыть с помощью{" "}
          <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark>.
        </AdditionInfo>
        <p>
          Для редактирования нового шаблона нужно нажать на{" "}
          <mark className="ui">Edit</mark>, которое открывает уже привычное нам окно{" "}
          <mark className="key">Render Settings</mark>. Окно редактирования шаблона
          настроек буквально ничем не отличается от обычной настройки параметров рендера.
          В этом окне в пункте <mark className="ui">Time Span</mark> нужно установить
          значение <mark className="ui">Length of Comp</mark> вместо{" "}
          <mark className="ui">Work Area Only</mark>.
        </p>
        <ImageFigure
          caption="Render Settings"
          imgSrc="images/aftereffects/change_render_time_span.png"
          imgTitle="Изменение области рендера композиции"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Как экспортировать композицию файлом с отображением всех границ и путей движения?">
        <p>
          Для этого существует сторонний плагин <mark className="plugin">Cyclops</mark>. С
          помощью него можно вывести вашу композицию вместе с границами и путями движения
          в формате видео.
        </p>
        <YouTubeVideo
          caption="Cyclops Tutorial"
          link="vNH3d9YqLo4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как сохранить свой шаблон с настройками для экспорта композиций?">
        <p>
          У каждого пользователя <mark className="app">After Effects</mark> может
          возникнуть желание сохранить настройки для экспорта, чтобы каждый раз не
          настраивать его. Для создания своих предустановок нужно открыть очередь экспорта
          с помощью комбинации клавиш <mark className="key">Ctrl + M</mark> и нажать на
          стрелочку возле <mark className="ui">Output Module</mark>. В открывшемся меню
          нужно выбрать <mark className="key">Make Template</mark> для перехода на окно
          создания и настроек пресетов.
        </p>
        <ImageFigure
          caption="Make Template"
          imgSrc="images/aftereffects/render_queue_make_template.png"
          imgTitle="Создаём шаблон экспорта"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне у нас уже будет создан пресет под названием{" "}
          <mark>Untitled</mark>, название которого можно заменить на какое угодно. В этом
          же окне можно задать пресеты и для других типов файлов по умолчанию в разделе{" "}
          <mark className="ui">Defaults</mark>, если необходимо.
        </p>
        <ImageFigure
          caption="Output Module Templates"
          imgSrc="images/aftereffects/output_module_templates.png"
          imgTitle="Настраиваем шаблоны для экспорта"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Чтобы не переходить каждый раз в очередь экспорта - данное окно редактирования
          шаблонов для экспорта можно открыть с помощью{" "}
          <mark className="ui">Edit &gt; Templates &gt; Output Module</mark>.
        </AdditionInfo>
        <p>
          Для редактирования нового шаблона нужно нажать на{" "}
          <mark className="ui">Edit</mark>, которое открывает уже привычное нам окно{" "}
          <mark className="key">Output Module Settings</mark>. Окно редактирования шаблона
          экспорта буквально ничем не отличается от обычной настройки типа вывода.
        </p>
        <p>
          После создания пресета - проверьте его на работоспособность и поставьте новый
          шаблон по умолчанию для определённого типа экспорта по вашему желанию.
          Аналогичным образом можно создать пресеты и для{" "}
          <mark className="ui">Render Settings</mark> с помощью{" "}
          <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="коллект файлс, collect tiles"
        title="Я сделал работу в After Effects, но мне нужно передать .aep файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?"
      >
        <p>
          В <mark className="app">After Effects</mark> есть функция для сохранения вашего
          проекта в отдельную папку вместе со всеми исходниками, чтобы в дальнейшем при
          переносе или передаче другому лицу ничего не потерялось и не отвалилось. Чтобы
          это сделать, нужно перейти в <mark className="ui">File &gt; Dependencies</mark>{" "}
          и выбрать пункт <mark className="ui">Collect Files</mark>. Если не сохраняли
          проект, то программа предложит вам это сделать.
        </p>
        <AdditionInfo>
          Данная функция не сохраняет исполняемые файлы плагинов, пресетов и шрифтов.
          Заранее предупредите того, кому вы собираетесь передать ваш проект, что ему
          нужно будет установить необходимые плагины и шрифты. Информация об используемых
          шрифтах, эффектах и исходниках будет указана в текстовом файле рядом с файлом
          проекта.
        </AdditionInfo>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/select_collect_files.png"
          imgTitle="Выбираем функцию Collect Files"
          styleClass="figure_windows-light"
        />
        <p>
          Далее появится окно, где предложат, что именно нужно собрать в папку с проектом.
          В параметре <mark className="ui">Collect Source Files</mark> можно выбрать, что
          именно собирать - все файлы из проекта или лишь те, которые используются в
          композициях, чтобы уменьшить вес. После нажатия на кнопку{" "}
          <mark className="ui">Collect</mark> программа откроет системный файловый
          менеджер для того, чтобы вы указали путь куда сохранить папку с проектом.
        </p>
        <ImageFigure
          caption="Collect Files"
          imgSrc="images/aftereffects/collect_files_settings.png"
          imgTitle="Настройки Collect Files"
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
      <DetailsSummary
        tag="лотти"
        title="Какие эффекты можно использовать в Lottie для успешного вывода?"
      >
        <p>
          Изначально <mark className="file">Lottie</mark> не поддерживает все функции,
          например сторонние плагины или эффекты, поэтому на сайте Lottiefiles есть целая{" "}
          <a href="https://lottiefiles.com/supported-features">
            таблица совместимости эффектов
          </a>{" "}
          вашей анимации с браузерами и платформами. Чтобы проверить вашу анимацию, вы
          можете её загрузить в{" "}
          <a href="https://app.lottiefiles.com/preview">предпросмотр от Lottie</a>.
        </p>
      </DetailsSummary>
    </div>
  );
};
export default AEExport;
