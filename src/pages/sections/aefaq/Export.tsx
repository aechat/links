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

const AEExport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Export.tsx" />
      <DetailsSummary
        title="Какие настройки экспорта стоит установить для вывода в социальные сети?"
        tag="тикток, ютуб, максимальное качество, разрешение, битрейт"
      >
        <p>
          Каждая социальная сеть или видео площадка, увы, пережимают загружаемое
          пользователем видео так, чтобы уместить у себя на серверах с меньшим объёмом
          файла. Если вы установите слишком высокое значение битрейта и разрешение,
          например для <mark>TikTok</mark>, то площадка с радостью всё пережмёт до{" "}
          <mark>1080p/60fps</mark> и около <mark>10 Мбит/с</mark>, поэтому разрешение{" "}
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
          link="r6Rp-uo6HmI"
          caption="Почему снег и конфетти паршивят картинку"
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
          link="p3Jb3UPAw-w"
          caption="Как несовпадение частоты кадров портят ваше видео"
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
            Вес полученного файла не должен превышать <mark>75 Мб</mark>, если вы
            собираетесь выкладывать видео с устройства на Android. Или не превышать{" "}
            <mark>250 Мб</mark>, если вы собираетесь выкладывать видео с устройства на
            iOS.
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
          <sup>*</sup>Instagram и Meta всё ещё признаны экстремистскими организациями и
          запрещены на территории Российской Федерации.
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
          styleClass="figure_windows-dark"
          imgSrc="images/phone_telegram_videoquality.jpg"
          imgTitle="Выбор качества видео в Telegram"
          caption="Telegram"
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
      <DetailsSummary title="Почему из каждого угла советуют не использовать Media Encoder для экспорта композиций из After Effects?">
        <p>
          <mark className="app">Media Encoder</mark> славится своими багами и различными
          проблемами при экспорте композиций из <mark className="app">After Effects</mark>
          . Поэтому чтобы исключить траблы и не морочить себе голову при экспорте -
          советуем от него отказаться и использовать его только в крайних случаях,
          например для создания прокси-видео.
        </p>
        <p>
          Вы спросите, а в чём собственно проблема? Да проблем то от него целая куча...
        </p>
        <ul>
          <li>
            <mark className="app">Media Encoder</mark> при экспорте сложных сцен может
            просто остановить процесс рендера, и всё. Без объяснения причин, а потом ищи и
            гадай, что ему не нравится.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> любит терять исходники просто так,
            поэтому не удивляйтесь, если вы вместо изображения или видео вы увидите
            палитру цветов как при технических работах на ТВ.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> может вывести композиции с
            артефактами, например сместив изображение в сторону. Хоть этот баг и исправили
            в поздних версиях программ, но тем не менее.
          </li>
          <li>
            При экспорте из <mark className="app">After Effects</mark> в{" "}
            <mark className="app">Media Encoder</mark> также могут появиться красные
            кресты, водяные знаки или ещё что-то похожее, сигнализирующее об отсутствии
            лицензии на плагин. Если в <mark className="app">After Effects</mark> всё с
            активацией хорошо, то не факт что она адекватно перенесётся в{" "}
            <mark className="app">Media Encoder</mark>.
          </li>
          <li>
            При экспорте в <mark className="app">Media Encoder</mark> вы не получите
            стабильную работу функции Multi-frame Render, которая отлично работает в самом{" "}
            <mark className="app">After Effects</mark>.
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
        <AdditionInfo>
          Если вам нужно поставить на очередь просчёта сразу несколько композиций -
          создайте проект болванку и импортируйте туда несколько своих проектов. Затем вы
          сможете все нужные композиции закинуть в очередь просчёта и начать его,
          предварительно указав нужный формат и расположение.
        </AdditionInfo>
        <p>
          При экспорте напрямую из <mark className="app">After Effects</mark> вы можете
          уберечь себя от ужасов, описанных в списке выше. Надеюсь, что мы убедили вас его
          не использовать.
        </p>
        <AdditionInfo>
          О том, как экспортировать в популярные форматы, вы можете посмотреть в следующих
          пунктах по списку.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .mp4 и H.264/H.265?">
        <p>
          Вы можете вывести композиции в популярном кодеке напрямую из{" "}
          <mark className="app">After Effects</mark> тремя способами.
        </p>
        <ul>
          <li>
            Через встроенный кодек <mark className="plugin">H.264</mark>. Доступен только
            на <mark className="app">After Effects</mark> версий 2023 или новее.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">Voukoder</mark>. Доступен
            только для Windows, поддержка устройств на macOS косвенно присутствует с
            версий Voukoder Pro 2.0 и новее, но мы его рассматривать не будем.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">AfterCodecs</mark>. Доступен
            для Windows и macOS, а также поддерживает достаточно много старых версий
            программы.
          </li>
        </ul>
        <AdditionWarning>
          Через кодеки <mark className="video">H.264</mark> и{" "}
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
          <mark className="ui">Output Module</mark>, параметры экспорта (например
          использование прокси или принудительно отключить эффекты) в пункте{" "}
          <mark className="ui">Render Settings</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          caption="Render Queue"
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
          Чтобы начать изменять битрейт и аналогичные настройки для встроенного кодека
          H.264, откройте окно <mark className="ui">Output Module</mark>, нажав на
          название выбранного пресета. Для выбора нужного нам битрейта откройте окно{" "}
          <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/output_module_format_options.png"
          imgTitle="Окно Output Module"
          caption="Output Module Settings"
        />
        <p>
          В открывшемся окне мы можем выбрать <mark>VBR</mark> или <mark>CBR</mark>. Если
          в вашем видео есть слишком быстрые движения объектов и куча частиц - установите
          больше битрейта и <mark>CBR</mark>, но не переусердствуйте. Пункт{" "}
          <mark>VBR</mark> больше подойдет тем, кому нужен минимальный вес файла.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/h264_options.png"
          imgTitle="Окно настроек H.264"
          caption="H.264 Options"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/start_render_button.png"
          imgTitle="Кнопка начала рендера"
          caption="Render Queue"
        />
        <Divider>Выводим через Voukoder</Divider>
        <p>
          Если же вас результат рендера от стандартного H.264 не устраивает, то можно
          воспользоваться плагином <mark className="plugin">Voukoder</mark>. В этом
          примере мы рассмотрим плагин{" "}
          <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">версии 13.4.1</a>
          , не Pro версию.
        </p>
        <AdditionWarning>
          Демонстрируемая версия плагина <mark className="plugin">Voukoder</mark>{" "}
          недоступна на устройствах с macOS. Чтобы подключить плагин к программе, нужно
          скачать и установить{" "}
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/selecting_voukoder.png"
          imgTitle="Выбираем Voukoder из списка форматов"
          caption="Output Module Settings"
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
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/select_codec_in_voukoder.png"
          imgTitle="Выбираем нужный вариант кодека в Voukoder"
          caption="Voukoder 13.4.1"
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
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/codec_parameter_voukoder.png"
          imgTitle="Настраиваем качество видео в Voukoder"
          caption="Voukoder 13.4.1"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/selecting_aftercodecs.png"
          imgTitle="Выбираем AfterCodecs из списка форматов"
          caption="Output Module Settings"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/aftercodecs_settings.png"
          imgTitle="Настройки AfterCodecs"
          caption="AfterCodecs 1.11.5 for After Effects"
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
      <DetailsSummary title="Как вывести композицию в .webm и VP9?">
        <p>
          Стандартными средствами из <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Media Encoder</mark> нельзя вывести композицию в{" "}
          <mark className="file">.webm</mark>, поэтому мы пойдем таким путём: сначала
          выведем композицию в <mark className="video">Apple Prores 422</mark>, если вам
          не нужно выводить с альфа-каналом или в{" "}
          <mark className="video">Apple Prores 4444</mark>, если вам нужно вывести с
          альфа-каналом.
        </p>
        <AdditionDanger>
          Крайне не рекомендую использовать плагин{" "}
          <a href="https://fnord.com/">WebM от fnord</a> для экспорта из{" "}
          <mark className="app">Media Encoder</mark>, так как он часто выводит видео на
          прозрачном фоне с жуткими артефактами.
        </AdditionDanger>
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
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/export_to_prores.mp4"
          caption="Выводим видео в Apple Prores"
        />
        <p>
          Затем не забудьте указать путь, куда вы хотите вывести видео, и нажмите на{" "}
          <mark className="ui">Render</mark> или на клавишу{" "}
          <mark className="key">Enter</mark>.
        </p>
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
          styleClass="figure_macos-dark"
          imgSrc="images/select_vp9_shutter_encoder.png"
          imgTitle="Выбор VP9 в Shutter Encoder"
          caption="Shutter Encoder"
        />
        <p>
          Затем включаем в дополнительных опциях{" "}
          <mark className="ui">Enable alpha channel</mark>, если вы хотите вывести видео с
          альфа-каналом.
        </p>
        <ImageFigure
          styleClass="figure_macos-dark"
          imgSrc="images/enable_alpha_shutter_encoder.png"
          imgTitle="Включение альфа-канала в Shutter Encoder"
          caption="Shutter Encoder"
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
          фоне в <mark className="app">Safari</mark> для устройств на iOS и macOS
          отсутствует, там будет отображаться чёрный фон вместо прозрачности.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .gif?">
        <p>
          В базовой комплектации <mark className="app">After Effects</mark> вывести
          композицию в формат <mark className="image">Gif</mark> не получится, но никто не
          запрещал воспользоваться альтернативными способами.
        </p>
        <AdditionInfo>
          Если вы собираетесь выводить композицию в <mark className="image">Gif</mark> для
          веб-страницы, то советую лучше вывести в формат{" "}
          <mark className="image">WebM</mark>. Он лучше подходит для получения
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
          У формата <mark className="image">Gif</mark> есть множество ограничений и
          нюансов.
          <ul>
            <li>
              Данный формат не поддерживает полупрозрачность, только два цвета для
              альфа-канала: <mark>#FFFFFF</mark> и <mark>#000000</mark>.
            </li>
            <li>
              <mark className="image">Gif</mark> вмещает в себя только 256 цветов, поэтому
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
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/open_gifgun.png"
          imgTitle="Открытие расширения GifGun"
          caption="After Effects"
        />
        <p>
          После открытия расширения вы увидите простое окно с двумя кнопками:{" "}
          <mark className="ui">Make GIF</mark> для начала экспорта в{" "}
          <mark className="file">.gif</mark> и кнопку с шестерёнкой. Нажав на вторую
          кнопку вы откроете настройки, где сможете указать размер, FPS или путь к
          выходному файлу.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/gifgun_settings.png"
          imgTitle="Настройки расширения GifGun"
          caption="GifGun"
        />
        <Divider>Выводим через Media Encoder</Divider>
        <p>
          <mark className="image">Gif</mark> можно ещё получить с помощью{" "}
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
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/selecting_animated_gif_media_encoder.png"
          imgTitle="Выбираем формат GIF для экспорта через Media Encoder"
          caption="Media Encoder"
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
          указали путь, появится файл формата <mark className="image">Gif</mark>.
        </p>
        <Divider>Конвертируем через Ezgif</Divider>
        <p>
          Если вы не хотите возиться с экспортом или у вас уже есть готовое видео, которое
          надо лишь перегнать в формат <mark className="image">Gif</mark>, то советую
          онлайн-сервис <a href="https://ezgif.com/video-to-gif">Ezgif</a>. При
          конвертации через этот сервис вы получите <mark className="image">Gif</mark> с
          отличным соотношением качества и размера файла.
        </p>
        <p>
          Для начала конвертации просто загрузите ваше видео в сервис, а затем нажмите на
          кнопку <mark className="ui">Upload Video</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/ezgif_main.png"
          imgTitle="Главная страница Ezgif"
          caption="Ezgif"
        />
        <AdditionWarning>
          Максимальный размер файла, который можно загрузить в сервис, не должен превышать
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
          styleClass="figure_windows-light"
          imgSrc="images/ezgif_settings.png"
          imgTitle="Настройки конвертации в Ezgif"
          caption="Ezgif"
        />
        <p>
          Далее после успешной конвертации вы получите ваше видео в формате{" "}
          <mark className="image">Gif</mark> чуть ниже, в разделе{" "}
          <mark className="ui">Output GIF Animation</mark>, которое можно сохранить по
          нажатию <mark className="key">ПКМ</mark> &gt;{" "}
          <mark className="ui">Сохранить изображение как...</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию с альфа-каналом, то есть с прозрачностью?">
        <AdditionWarning>
          Сразу скажу, в <mark className="video">H.264</mark> и{" "}
          <mark className="file">.mp4</mark> нельзя вывести композицию с альфа-каналом.
          Это можно сделать только на устройствах с macOS и при использовании кодека{" "}
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/toggle_transparency_grid.png"
          imgTitle="Включение сетки для отображения прозрачных частей"
          caption="Composition"
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
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/export_prores4444_rgb-alpha.mp4"
          caption="After Effects"
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
      <DetailsSummary title="Как вывести текущий кадр предпросмотра как файл изображения?">
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/export_one_frame_render_queue.png"
          imgTitle="Сохранение одного кадра через Render Queue"
          caption="Render Queue"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/fx_console_full_resolution_screenshots.png"
          imgTitle="Устанавливаем полное разрешение скриншотов"
          caption="FX Console"
        />
        <p>
          Теперь для быстрого сохранения текущего кадра в отдельный файл вам достаточно
          открыть окно плагина через <mark className="key">Ctrl + Space</mark> и нажать на
          иконку сохранения. Вам предложат три варианта: сохранить как{" "}
          <mark className="file">JPG</mark>, <mark className="file">PNG</mark> или
          сохранить кадр в буфер обмена.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/fx_console_save_frame_as.png"
          imgTitle="Сохраняем текущий кадр через FX Console"
          caption="After Effects"
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
      <DetailsSummary title="Как вывести все кадры композиции как отдельные файлы изображений?">
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          caption="Render Queue"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/selecting_png_sequence.png"
          imgTitle="Выбираем последовательность PNG для вывода"
          caption="Output Module Settings"
        />
        <p>
          После этого просто нажимаем на кнопку <mark className="ui">Render</mark> или на
          клавишу <mark className="key">Enter</mark>. Вот и всё, все кадры из вашей
          композиции сохранятся в нужную папку.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести только часть моей композиции? Можно ли сделать так, чтобы композиция всегда экспортировалась по всей длине вне зависимости от указанной рабочей области?">
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/make_template_render_settings.png"
          imgTitle="Создание шаблона для Render Settings"
          caption="Render Queue"
        />
        <p>
          В открывшемся окне у нас уже будет создан пресет под названием{" "}
          <mark>Untitled</mark>, название которого можно заменить на какое угодно. Чтобы
          установить новый пресет в качестве стандартного - укажите его в разделе{" "}
          <mark className="ui">Defaults</mark> для нужного типа файла.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/render_settings_templates.png"
          imgTitle="Создание шаблона для Render Settings"
          caption="Render Queue"
        />
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_render_time_span.png"
          imgTitle="Изменение области рендера композиции"
          caption="Render Queue"
        />
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию файлом с отображением всех границ и путей движения?">
        <p>
          Для этого существует сторонний плагин <mark className="plugin">Cyclops</mark>. С
          помощью него можно вывести вашу композицию вместе с границами и путями движения
          в формате видео.
        </p>
        <YouTubeVideo
          link="vNH3d9YqLo4"
          caption="Cyclops Tutorial"
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
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/render_queue_make_template.png"
          imgTitle="Создаём шаблон экспорта"
          caption="Make Template"
        />
        <p>
          В открывшемся окне у нас уже будет создан пресет под названием{" "}
          <mark>Untitled</mark>, название которого можно заменить на какое угодно. В этом
          же окне можно задать пресеты и для других типов файлов по умолчанию в разделе{" "}
          <mark className="ui">Defaults</mark>, если необходимо.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/output_module_templates.png"
          imgTitle="Настраиваем шаблоны для экспорта"
          caption="Output Module Templates"
        />
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
          <mark className="ui">Render Settings</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Я сделал работу в After Effects, но мне нужно передать .aep файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?">
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
          Поэтому заранее предупредите того, кому вы собираетесь передать ваш проект, что
          ему нужно будет установить все необходимые плагины и шрифты. Информация об
          используемых шрифтах, эффектах и исходниках будет указана в текстовом файле
          рядом с файлом проекта.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/select_collect_files.png"
          imgTitle="Выбираем функцию Collect Files"
          caption="After Effects"
        />
        <p>
          Далее появится окно, где нам предложат, что именно паковать в папку с проектом.
          В пункте <mark className="ui">Collect Source Files</mark> можно выбрать, что
          именно паковать: все файлы или лишь те, которые используются в композициях,
          чтобы уменьшить вес. После нажатия на кнопку <mark className="ui">Collect</mark>{" "}
          программа откроет системный файловый менеджер для того, чтобы вы указали путь
          куда сохранить папку с проектом.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/collect_files_settings.png"
          imgTitle="Настройки Collect Files"
          caption="Collect Files"
        />
        <p>
          После выполнения функции <mark className="ui">Collect Files</mark> вы можете
          заархивировать папку с проектом любым удобным для вас способом, чтобы передать
          ее другому человеку или сохранить ее в облачном хранилище.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Какие эффекты можно использовать в Lottie для успешного вывода?">
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
