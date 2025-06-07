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
          Этот мессенджер более лоялен к видео файлам. Если выкладывать видео через{" "}
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
        tag="медиаенкодер, медиаэнкодер, adobe media encoder"
        title="Почему из каждого угла советуют не использовать Adobe Media Encoder для экспорта композиций из Adobe After Effects?"
      >
        <p>
          <mark className="app">Adobe Media Encoder</mark> часто становится источником
          проблем при экспорте композиций из{" "}
          <mark className="app">Adobe After Effects</mark>. Его используют либо по
          привычке, либо потому, что в старых версиях{" "}
          <mark className="app">Adobe After Effects</mark> нельзя было напрямую
          экспортировать в <mark className="video">H.264</mark>. Сейчас в нём такой
          необходимости уже нет, так как в{" "}
          <mark className="app">Adobe After Effects</mark> версий <mark>23.0</mark> и выше
          экспорт в <mark className="video">H.264</mark> вернули, а для старых версий
          программы при желании можно поставить{" "}
          <mark className="plugin">AfterCodecs</mark> или{" "}
          <mark className="plugin">Voukoder</mark>. А теперь перечислим, какие палки в
          колёса вставляет <mark className="app">Adobe Media Encoder</mark> при
          повседневном использовании.
        </p>
        <ul>
          <li>
            <mark className="app">Adobe Media Encoder</mark> при экспорте сложных сцен
            может просто остановить процесс рендера без объяснения причины. В таком случае
            сложно будет понять, что ему не нравится. Лучше экспортировать сложные сцены
            напрямую в <mark className="app">Adobe After Effects</mark> и, при
            необходимости, использовать прокси для композиций, чтобы минимизировать время
            экспорта и различные ошибки.
            <AdditionWarning>
              При начале экспорта композиции через{" "}
              <mark className="app">Adobe Media Encoder</mark> - программа запускает
              дополнительный процесс <mark className="file">AfterFX.exe</mark>. Лишний
              процесс <mark className="file">AfterFX.exe</mark> может дополнительно
              нагрузить ваш компьютер или заполнить всю оперативную память. Из-за этого
              могут быть сбои при экспорте через{" "}
              <mark className="app">Adobe Media Encoder</mark>.
            </AdditionWarning>
          </li>
          <li>
            Некоторые пользователи могут столкнуться с кодом ошибки{" "}
            <mark className="code">-1609629695</mark> лишь с малым объяснением, что
            произошло при экспорте композиции из{" "}
            <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark>. Они бы не сталкивались с
            ним, если бы его не использовали в качестве единственного способа экспорта
            композиций из программы.
          </li>
          <li>
            <mark className="app">Adobe Media Encoder</mark> может потерять исходники, то
            есть после экспорта вы можете обнаружить разноцветный плейсхолдер вместо
            нужного исходника. Это не всегда бывает приятно, особенно когда вы долго
            экспортировали композицию.
          </li>
          <li>
            <mark className="app">Adobe Media Encoder</mark> может экспортировать
            композиции с различными артефактами, например сместив изображение в сторону
            или ухудшив цветопередачу.
            <AdditionInfo>
              Для исправления бага со смещением изображения - проверьте установленные
              версии <mark className="app">Adobe After Effects</mark> и{" "}
              <mark className="app">Adobe Media Encoder</mark>. Если их версии попадают в
              промежуток от <mark>23.1</mark> до <mark>23.5</mark> включительно, то вам
              нужно будет обновить обе программы до <mark>23.6</mark>.
            </AdditionInfo>
          </li>
          <li>
            При экспорте композиций из <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark> могут появиться красные
            кресты, водяные знаки или ещё что-то похожее, сигнализирующее об отсутствии
            лицензии на сторонних эффектах. Если в{" "}
            <mark className="app">Adobe After Effects</mark> всё с активацией хорошо, то
            не факт что активация плагинов хорошо перенесётся в{" "}
            <mark className="app">Adobe Media Encoder</mark>, так как лицензия плагинов
            может быть завязана глубже именно к{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            При экспорте в <mark className="app">Adobe Media Encoder</mark> вы вряд ли
            получите стабильную работу функции <mark>Multi-frame Render</mark>, которая
            отлично работает при экспорте напрямую из{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            При отправке композиций из <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark> она может просто не появиться
            в очереди рендера. Такое бывает, когда происходит внутренний сбой в{" "}
            <mark>Dynamic Link</mark>, но пользователю об этом не сообщают.
          </li>
          <li>
            Запуск экспорта в <mark className="app">Adobe After Effects</mark> происходит
            почти моментально, в отличии от долгого запуска самого{" "}
            <mark className="app">Adobe Media Encoder</mark>. После запуска{" "}
            <mark className="app">Adobe Media Encoder</mark> надо ещё подождать, когда он
            подгрузит композицию из <mark className="app">Adobe After Effects</mark>,
            запустит ещё один процесс <mark className="file">AfterFX.exe</mark> для
            рендера и только потом уже начнёт экспорт. Согласитесь, не очень удобно ждать
            минуту, когда надо экспортировать короткое видео.
          </li>
        </ul>
        <p>
          Изначально <mark className="app">Adobe Media Encoder</mark> был создан для
          перекодирования исходников из одного формата в другой и для создания прокси,
          чтобы в дальнейшем их подключить в{" "}
          <mark className="app">Adobe Premiere Pro</mark>. Но со временем{" "}
          <mark>Adobe</mark> решил добавить туда функцию экспорта из{" "}
          <mark className="app">Adobe After Effects</mark> и понеслась. Большинство
          пользователей экспортом в этой программе занимались по причине того, что в{" "}
          <mark className="app">Adobe After Effects</mark> по стандарту в старых версиях
          не было возможности экспортировать в кодек <mark className="video">H.264</mark>.
        </p>
        <p>
          После обновления <mark className="app">Adobe After Effects</mark> на версию{" "}
          <mark>23.X</mark> и новее - нужда в выводе через{" "}
          <mark className="app">Adobe Media Encoder</mark> пропадает, так как в{" "}
          <mark className="app">Adobe After Effects</mark> добавили нативный экспорт в{" "}
          <mark className="video">H.264</mark>. Также никто не запрещал устанавливать
          сторонние плагины, например{" "}
          <mark className="plugin">Autokroma AfterCodecs</mark> или{" "}
          <mark className="plugin">Voukoder</mark> для экспорта в различные кодеки
          напрямую из <mark className="app">Adobe After Effects</mark>.
        </p>
        <AdditionInfo>
          Если вам нужно поставить на очередь просчёта сразу несколько композиций -
          создайте проект-болванку в <mark className="app">Adobe After Effects</mark> и
          импортируйте туда несколько своих проектов. Затем вы сможете все нужные
          композиции закинуть в очередь просчёта и начать его, предварительно указав
          нужный формат и расположение.
        </AdditionInfo>
        <p>
          Вывод из перечисления популярных проблем довольно простой - при экспорте
          напрямую из <mark className="app">Adobe After Effects</mark> вы можете уберечь
          себя от проблем, которые создаёт{" "}
          <mark className="app">Adobe Media Encoder</mark>. Надеюсь, что мы убедили вас
          его не использовать.
        </p>
        <AdditionInfo>
          О том, как экспортировать в различные популярные форматы - вы можете прочитать в
          следующих статьях на этой странице.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="H.265, мп4, ш264, ш265, h264, h265, вывести видео, avc1, вукодер, афтеркодекс"
        title="Как экспортировать композицию в MP4 и H.264?"
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
          вопрос -{" "}
          <mark className="quote">
            а как экспортировать его из After Effects без танцев с бубном?
          </mark>
          . Из программы экспортировать композицию в таком кодеке без использования{" "}
          <mark className="app">Adobe Media Encoder</mark> можно тремя способами.
        </p>
        <ul>
          <li>
            С помощью встроенного кодека <mark className="plugin">H.264</mark>, который
            доступен в <mark className="app">Adobe After Effects</mark> версиях{" "}
            <mark>2023</mark> и новее.
            <AdditionWarning>
              <p>
                У встроенного в <mark className="app">Adobe After Effects</mark> кодека{" "}
                <mark className="plugin">H.264</mark> есть ряд ограничений. Программа при
                необходимости выбьет окно с предупреждением, в котором будет описана
                определённая ошибка при выборе тех или иных настроек экспорта.
              </p>
              <ul>
                <li>
                  Нельзя экспортировать видео с нестандартным FPS, например{" "}
                  <mark>20</mark>. Если проигнорировать предупреждение программы - видео
                  получится быстрее и закончится раньше, чем ваша аудиодорожка.
                </li>
                <li>
                  Из-за особенностей стандарта <mark className="video">H.264</mark> - вы
                  не сможете экспортировать композицию с нечётным значением разрешения,
                  например <mark>725 на 501</mark>.{" "}
                  <mark className="app">Adobe After Effects</mark> в таком случае растянет
                  ваше видео до <mark>726 на 502</mark>.
                </li>
                <li>
                  Стандартный кодек может некорректно работать с неквадратными пикселями в
                  настройках вашей композиции.
                </li>
              </ul>
            </AdditionWarning>
          </li>
          <li>
            С помощью стороннего плагина <mark className="plugin">Voukoder</mark>.
            Доступен для устройств на <mark>Windows</mark> и <mark>macOS</mark>
            <sup>1</sup>.
            <AdditionWarning>
              <sup>1</sup> Поддержка устройств на <mark>macOS</mark> появилась в{" "}
              <mark className="plugin">Voukoder</mark> версий <mark>Pro 2.0</mark> и
              новее. <mark className="plugin">Voukoder Classic</mark>, который
              рассматривается в данной статье - не поддерживается на устройствах с{" "}
              <mark>macOS</mark>.
            </AdditionWarning>
          </li>
          <li>
            С помощью стороннего плагина <mark className="plugin">AfterCodecs</mark>. Он
            доступен для <mark>Windows</mark> и <mark>macOS</mark>, а также поддерживает
            большинство старых версий <mark className="app">Adobe After Effects</mark>.
          </li>
        </ul>
        <AdditionDanger>
          С помощью кодеков <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark> нельзя экспортировать видео с
          альфа-каналом, то есть с прозрачностью. Для вывода видео на прозрачном фоне
          воспользуйтесь форматами{" "}
          <mark className="video">Quicktime - Apple Prores 4444</mark> или{" "}
          <mark className="video">WebM - VP9</mark>.
        </AdditionDanger>
        <p>
          Прежде чем начать экспорт - нужно разобраться, куда что нажимать. Для того чтобы
          отправить вашу нужную композицию в очередь экспорта - нажмите на комбинацию
          клавиш <mark className="key">Ctrl + M</mark>. Таким образом вы переместитесь в
          окно очереди экспорта, где вы можете установить кодек для экспорта в параметре{" "}
          <mark className="ui">Output Module</mark>, параметры экспорта, например
          использование прокси или принудительно отключить эффекты в параметре{" "}
          <mark className="ui">Render Settings</mark>.
        </p>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          styleClass="figure_windows-dark"
        />
        <Divider>Экспортируем с помощью встроенного H.264</Divider>
        <p>
          Начнём с первого и простого способа экспорта в{" "}
          <mark className="video">H.264</mark>. Вывод в{" "}
          <mark className="video">H.264</mark> стандартными способами вернули и заменили
          пресет по умолчанию вместо <mark className="video">AVI - Animation</mark> в
          версиях <mark className="app">Adobe After Effects</mark> 2023 и новее. Обычно в
          большинстве случаев для экспорта хватает трёх стандартных пресетов:{" "}
          <mark className="video">H.264 - 5 Мбит/c</mark>,{" "}
          <mark className="video">H.264 - 15 Мбит/c</mark> и{" "}
          <mark className="video">H.264 - 40 Мбит/c</mark>.
        </p>
        <AdditionInfo>
          Если вы хотите создать свой пресет - перейдите в{" "}
          <mark className="ui">Edit &gt; Templates</mark> и нажмите на{" "}
          <mark className="ui">Output Module</mark>. В открывшемся окне нажмите на{" "}
          <mark className="ui">New</mark> и задайте новое имя пресета. Чтобы
          отредактировать его - нажмите на <mark className="ui">Edit</mark>. Также при
          желании вы можете задать свой новый пресет в качестве стандартного или изменить
          уже существующие.
        </AdditionInfo>
        <p>
          Чтобы изменить битрейт или другие настройки для встроенного кодека{" "}
          <mark className="video">H.264</mark> - откройте окно{" "}
          <mark className="ui">Output Module</mark>, нажав на название выбранного пресета
          в очереди рендера. Для выбора нужного нам битрейта откройте окно{" "}
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
          больше битрейта и <mark>CBR</mark>, но не переусердствуйте. Параметр{" "}
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
          <mark className="ui">Output Module</mark>. В{" "}
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
        <Divider>Экспортируем с помощью Voukoder</Divider>
        <p>
          Если результат экспорта от стандартного <mark className="video">H.264</mark> вас
          не устраивает - попробуйте экспортировать композицию через сторонний плагин{" "}
          <mark className="plugin">Voukoder</mark>. Для того чтобы начать рендер с помощью{" "}
          <mark className="plugin">Voukoder</mark>, вам нужно снова зайти в{" "}
          <mark className="ui">Output Module</mark> и выбрать в параметре{" "}
          <mark className="ui">Format</mark> значение{" "}
          <mark className="plugin">Voukoder</mark>. Чтобы перейти в настройки{" "}
          <mark className="plugin">Voukoder</mark> - нажмите на кнопку{" "}
          <mark className="ui">Format Options</mark>.
        </p>
        <AdditionWarning>
          <ul>
            <li>
              Чтобы подключить плагин к <mark className="app">Adobe After Effects</mark> -
              нужно скачать и установить сам <mark className="plugin">Voukoder</mark>и{" "}
              <mark className="plugin">коннектор для After Effects</mark> к нему. Для
              корректной установки плагина - убедитесь в том, что вы не устанавливали{" "}
              <mark className="app">Adobe After Effects</mark> в нестандартное
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
        <ImageFigure
          caption="Output Module Settings"
          imgSrc="images/aftereffects/selecting_voukoder.png"
          imgTitle="Выбираем Voukoder из списка форматов"
          styleClass="figure_windows-dark"
        />
        <p>
          После открытия настроек - нужно выбрать кодек, в который вы хотите
          экспортировать видео. В основном для вывода видео и его корректного открытия на
          многих современных устройствах используется кодек{" "}
          <mark className="video">H.264</mark>. Но можно и воспользоваться{" "}
          <mark className="video">HEVC (H.265)</mark>, если вам нужно примерно сохранить
          качество видео с меньшим объёмом файла.
        </p>
        <AdditionInfo>
          Кодеки <mark className="video">AV1</mark> и <mark className="video">VP9</mark>{" "}
          для вывода из <mark className="app">Adobe After Effects</mark> используются
          редко. А если уж вам надо экспортировать в таком формате - проще
          переконвертировать видео позже через условный{" "}
          <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
        </AdditionInfo>
        <p>
          Теперь поговорим и о приставках в названиях кодеков. Для вариантов{" "}
          <mark className="video">H.264</mark> и <mark className="video">H.265</mark> есть
          три варианта для кодирования.
        </p>
        <AdditionInfo>
          Варианты кодирования показаны на устройстве с связкой процессора{" "}
          <mark>AMD</mark> и видеокарты <mark>NVIDIA</mark>. Выбор на вашем устройстве
          может отличаться от демонстрируемых скриншотов в зависимости от вашего железа.
        </AdditionInfo>
        <ul>
          <li>
            <mark>x264</mark> или <mark>x265</mark> используется кодирования видео на
            процессоре без дополнительного использования видеокарты. Стабильно, но не
            всегда быстро.
          </li>
          <li>
            <mark>NVIDIA NVENC</mark> используется для кодирования видео с использованием
            видеокарты <mark>NVIDIA</mark>. Данный параметр может ускорить процесс
            рендера, но не гарантирует 100% использование видеокарты, особенно если вы
            используете нагруженные эффекты, которые могут конфликтовать друг с другом.
          </li>
          <li>
            <mark>AMD AMF</mark> - тоже самое, что и предыдущий параметр, но рендер будет
            выполняться на встроенном видеочипе <mark>AMD</mark>.
          </li>
        </ul>
        <ImageFigure
          caption="Voukoder 13.4.1"
          imgSrc="images/aftereffects/select_codec_in_voukoder.png"
          imgTitle="Выбираем нужный вариант кодека в Voukoder"
          styleClass="figure_windows-light"
        />
        <p>
          После выбора нужного кодека, например{" "}
          <mark className="video">H.264 (NVIDIA NVENC)</mark> - перейдите во вкладку{" "}
          <mark className="ui">Параметры</mark>. В этой вкладке вы можете указать качество
          желаемого видео. По умолчанию в этой вкладке установлен параметр кодирования
          через квантование и его фактор. <mark>CQP</mark> или <mark>CRF</mark> - это
          некий эквивалент качества, чем меньше - тем лучше качество, но больше вес.
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
            <mark>качество/минимальный вес</mark> - укажите значение <mark>30</mark>.
            <AdditionWarning>
              Вы можете поэкспериментировать с значением в большую или меньшую сторону,
              здесь нет универсального значения. Экстремальные значения, например{" "}
              <mark>50</mark>, не рекомендуется использовать, так как вы можете получить в
              итоге кашу из кадров.
            </AdditionWarning>
          </li>
        </ul>
        <p>
          Дальше в <mark className="plugin">Voukoder</mark> нам ничего не нужно
          настраивать. При необходимости вы можете изменить другие параметры в окне
          экспорта, закрыть окно настройки <mark className="plugin">Voukoder</mark>{" "}
          кнопкой <mark className="ui">ОК</mark> и начать экспорт с помощью кнопки{" "}
          <mark className="ui">Render</mark>.
        </p>
        <Divider>Экспортируем с помощью AfterCodecs</Divider>
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
            вместо <mark>Auto</mark>, чтобы запаковать звук в аудио без сильной потери
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
          caption="AfterCodecs 1.11.5 for Adobe After Effects"
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
        title="Как экспортировать композицию в WEBM и VP9/AV1?"
      >
        <p>
          <mark className="video">VP9</mark> и <mark className="video">AV1</mark> -
          стандарты сжатия видео, разрабатываемые корпорацией <mark>Google</mark>, которые
          часто используются для встраивания видеороликов в различные веб-ресурсы и
          мобильные приложения. Обычно данные кодеки пакуются в контейнер{" "}
          <mark className="video">WebM</mark> и лучше сжимают видео по сравнению с{" "}
          <mark className="video">H.264</mark>, а также поддерживают{" "}
          <mark className="word">альфа-канал</mark>, чтобы можно было прикрепить видео с
          прозрачным фоном. К сожалению, стандартными средствами из{" "}
          <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> не получится экспортировать
          композицию в <mark className="video">WebM</mark>. Для вывода композиции в таком
          кодеке нужно будет экспортировать композицию как обычно, например в{" "}
          <mark className="video">Apple Prores</mark>, а затем конвертировать полученный
          файл в нужный кодек с помощью <mark className="app">Shutter Encoder</mark>.
        </p>
        <AdditionDanger>
          Автор{" "}
          <b>
            <u>крайне не рекомендует</u>
          </b>{" "}
          использовать плагин <a href="https://fnord.com/">WebM от fnord</a> для экспорта
          композиций в данном формате из <mark className="app">Adobe Media Encoder</mark>,
          так как он часто экспортирует видео на прозрачном фоне с жуткими артефактами или
          внезапно останавливает кодирование без причины.
        </AdditionDanger>
        <Divider>Экспортируем композицию в удобном формате</Divider>
        <p>
          Для начала вам нужно экспортировать видео как обычно. Выбор формата для
          изначального экспорта зависит от ваших целей. В этой статье будет
          рассматриваться экспорт в <mark className="video">Apple Prores</mark>, а затем
          последующая конвертация в <mark className="video">WebM</mark>. Для этого мы
          переходим в очередь рендера, открываем <mark className="ui">Output Module</mark>
          . В параметре <mark className="ui">Format</mark> выбираем{" "}
          <mark className="ui">Quicktime</mark>, а в{" "}
          <mark className="ui">Format Options</mark> нужный нам кодек. Затем не забудьте
          указать путь, куда вы хотите экспортировать видео, и нажмите на{" "}
          <mark className="ui">Render</mark> или на клавишу{" "}
          <mark className="key">Enter</mark>.
        </p>
        <ul>
          <li>
            Если вам нужно экспортировать видео с альфа-каналом - выберите кодек{" "}
            <mark className="video">Apple Prores 4444</mark> и не забудьте поставить в
            параметр <mark className="ui">Channels</mark> значение{" "}
            <mark className="ui">RGB + Alpha</mark>.
          </li>
          <li>
            Если вы хотите экспортировать видео без альфа-канала - выберите кодек{" "}
            <mark className="video">Apple Prores 422</mark> или любой другой. Также вы
            можете выбрать любой другой формат, который не поддерживает вывод с
            альфа-каналом, например <mark className="video">H.264</mark>.
          </li>
        </ul>
        <VideoFigure
          caption="Экспортируем видео в Apple Prores 4444"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/export_to_prores.mp4"
        />
        <Divider>Конвертируем в WebM с помощью Shutter Encoder</Divider>
        <p>
          После успешного экспорта - откройте <mark className="app">Shutter Encoder</mark>{" "}
          и вставьте в него экспортированное видео из{" "}
          <mark className="app">Adobe After Effects</mark>. В параметре{" "}
          <mark className="ui">Choose Function</mark> выберите{" "}
          <mark className="video">VP9</mark> или <mark className="video">AV1</mark>.
        </p>
        <AdditionInfo>
          Если у вас не установлен <mark className="app">Shutter Encoder</mark> - скачайте
          и установите его <a href="https://www.shutterencoder.com/">по этой ссылке</a>.
        </AdditionInfo>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/select_vp9_shutter_encoder.png"
          imgTitle="Выбор VP9 в Shutter Encoder"
          styleClass="figure_macos-dark"
        />
        <p>
          Затем включите в дополнительных опциях{" "}
          <mark className="ui">Enable alpha channel</mark>, если вам нужно конвертировать
          видео с альфа-каналом.
        </p>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/enable_alpha_shutter_encoder.png"
          imgTitle="Включение альфа-канала в Shutter Encoder"
          styleClass="figure_macos-dark"
        />
        <p>
          В программе вы можете выставить путь для файла и остальные параметры, если вам
          это нужно. После указания нужных вам настроек - нажмите на кнопку{" "}
          <mark className="ui">Start function</mark> или на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Enter</mark> для начала конвертации. Готовый файл
          будет закодирован в <mark className="video">VP9</mark> или{" "}
          <mark className="video">AV1</mark>, в зависимости от того что вы указали, и
          упакован в контейнер <mark className="file">WEBM</mark>, который можно будет
          использовать в своих веб-проектах или где-нибудь ещё.
        </p>
        <AdditionWarning>
          Имейте ввиду, что поддержка <mark className="video">WebM</mark> на прозрачном
          фоне в <mark className="app">Safari</mark> для устройств на <mark>iOS</mark> и{" "}
          <mark>macOS</mark>
          отсутствует, там будет отображаться чёрный фон вместо прозрачности.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary
        tag="создать гифку"
        title="Как экспортировать композицию в GIF?"
      >
        <p>
          <mark className="image">GIF</mark> - старый, но ещё популярный формат для обмена
          изображений, чаще всего анимированных. В базовой комплектации{" "}
          <mark className="app">Adobe After Effects</mark> экспортировать композицию в
          формат <mark className="image">GIF</mark> не получится, но никто не запрещал
          воспользоваться альтернативными способами.
        </p>
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
              <mark>1024x576</mark> и <mark>15 FPS</mark> для композиций с соотношением
              сторон <mark>16:9</mark>.
            </li>
          </ul>
        </AdditionWarning>
        <ul>
          <li>
            Из самого <mark className="app">Adobe After Effects</mark> можно
            экспортировать <mark className="image">GIF</mark> с помощью расширения{" "}
            <mark className="plugin">GifGun</mark>.
          </li>
          <li>
            Либо экспортировать <mark className="image">GIF</mark> через{" "}
            <del style={{opacity: 0.5}}>упаси боже</del>{" "}
            <mark className="app">Adobe Media Encoder</mark>.
          </li>
          <li>
            С помощью конвертации вашего видео через онлайн-сервис{" "}
            <a href="https://ezgif.com/video-to-gif">Ezgif</a>. Он даёт самый адекватный
            результат по соотношению <mark>качество/размер файла</mark>.
          </li>
        </ul>
        <AdditionInfo>
          Если вы собираетесь выводить композицию в <mark className="image">GIF</mark> для
          веб-страницы - советую экспортировать вашу композицию в{" "}
          <mark className="video">WebM</mark>. Он лучше подойдет для получения
          качественного изображения с маленьким размером, а также для встраивания в
          различные приложения.
        </AdditionInfo>
        <Divider>Экспортируем с помощью GifGun</Divider>
        <p>
          Предположим, что вы уже установили расширение{" "}
          <mark className="plugin">GifGun</mark>. Он должен появиться в{" "}
          <mark className="ui">Window &gt; Extensions</mark>.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/open_gifgun.png"
          imgTitle="Открытие расширения GifGun"
          styleClass="figure_windows-light"
        />
        <p>
          После открытия расширения вы увидите простое окно с двумя кнопками:{" "}
          <mark className="ui">Make GIF</mark> для начала экспорта в{" "}
          <mark className="image">GIF</mark> и кнопку с шестерёнкой. Нажав на вторую
          кнопку вы откроете настройки, где сможете указать размер, FPS или путь к
          выходному файлу.
        </p>
        <ImageFigure
          caption="GifGun"
          imgSrc="images/aftereffects/gifgun_settings.png"
          imgTitle="Настройки расширения GifGun"
          styleClass="figure_windows-dark"
        />
        <Divider>Экспортируем с помощью Media Encoder</Divider>
        <p>
          <mark className="image">GIF</mark> можно ещё получить с помощью{" "}
          <mark className="app">Adobe Media Encoder</mark>. Хоть мы и отговариваем от его
          использования, но в выборе различных форматов для экспорта он занимает более
          выигрышную позицию по сравнению с выводом напрямую из{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <p>
          Для того чтобы начать экспорт через{" "}
          <mark className="app">Adobe Media Encoder</mark>, перейдите в{" "}
          <mark className="ui">File &gt; Export</mark> и нажмите на{" "}
          <mark className="ui">Add to Adobe Media Encoder Queue</mark> и подождите, когда
          откроется вторая программа.
        </p>
        <AdditionInfo>
          Композиция из <mark className="app">Adobe After Effects</mark> корректно
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
          imgSrc="images/aftereffects/selecting_animated_gif_media_encoder.png"
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
        tag="export with alpha-channel, вывод в прорес 4444"
        title="Как экспортировать композицию с альфа-каналом, то есть с прозрачностью?"
      >
        <AdditionWarning>
          В <mark className="video">H.264</mark> и <mark className="file">.mp4</mark>{" "}
          нельзя экспортировать композицию с альфа-каналом. Это можно сделать только на
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
          <mark className="ui">Output Module</mark> и выберите в параметре{" "}
          <mark className="ui">Format</mark> значение{" "}
          <mark className="plugin">Quicktime</mark>. Потом откройте{" "}
          <mark className="ui">Format Options</mark> и выберите там параметр{" "}
          <mark className="video">Apple Prores 4444</mark> или{" "}
          <mark className="video">GoPro Cineform</mark> в разделе{" "}
          <mark className="ui">Video Codec</mark>. Затем не забудьте указать в{" "}
          <mark className="ui">Channels</mark> значение{" "}
          <mark className="ui">RGB + Alpha</mark>, чтобы экспортировать видео с
          прозрачностью.
        </p>
        <VideoFigure
          caption="Adobe After Effects"
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
          В современном мире - только ленивый не слышал о мессенджере{" "}
          <mark className="app">Telegram</mark>, а также о функции отправки стикеров
          собеседнику. В <mark className="word">стикерах</mark> можно хранить всякую
          ржаку, мемы и прочие виды контента. Но мало кто знает, как их можно создать в{" "}
          <mark className="app">Telegram</mark> и экспортировать свою композицию из{" "}
          <mark className="app">Adobe After Effects</mark> в соответствии с требованиями
          стикеров. Стикеры делятся на четыре вида и у каждого имеется свой подход к
          экспорту из программы и импорту в <mark className="app">Telegram</mark>.
        </p>
        <Divider>Разбираемся с типами стикеров</Divider>
        <ul>
          <li>
            <mark className="word">Статичный стикер</mark> или{" "}
            <mark className="word">статичный эмодзи</mark> - обычная картинка, которая
            отправляется собеседнику. Их можно создать в любом графическом редакторе,
            например <mark className="app">Adobe Photoshop</mark> или{" "}
            <mark className="app">GIMP</mark>, или экспортировать из{" "}
            <mark className="app">Adobe After Effects</mark> как{" "}
            <a href="#10.10">один кадр</a>, главное соблюдать некоторые требования.
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
                <mark className="file">TGS</mark>, в вашей композиции не должно быть
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
                  для конвертации в вектор в <mark className="ui">Adobe Illustrator</mark>{" "}
                  или другом софте, а затем импортировать их как слои-фигуры.{" "}
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
            <mark className="app">Adobe After Effects</mark> и выводится аналогичным
            образом.
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
        <Divider>Экспортируем анимированный стикер через Bodymovin-Telegram</Divider>
        <p>
          Для вывода из <mark className="app">Adobe After Effects</mark> в стикеры формата{" "}
          <mark className="file">TGS</mark> нам нужно использовать бесплатное стороннее
          расширение{" "}
          <a href="https://github.com/TelegramMessenger/bodymovin-extension">
            Bodymovin-TG
          </a>
          . Учтите, что он давно не обновлялся и могут возникать различные ошибки при
          использовании самой свежей версии{" "}
          <mark className="app">Adobe After Effects</mark> и в нём меньше функций, по
          сравнению с оригинальным <mark className="plugin">Bodymovin</mark>. После
          установки <mark className="plugin">Bodymovin-TG</mark> он появится в{" "}
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
          Для корректной работы расширения требуется установить чекбокс у параметра{" "}
          <mark className="ui">Allow Scripts to Write Files and Access Network</mark> в
          настройках <mark className="app">Adobe After Effects</mark> -{" "}
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
          попробовать экспортировать анимацию через обычный{" "}
          <mark className="plugin">Bodymovin</mark>, а затем конвертировать полученный
          файл через <i style={{opacity: 0.5}}>самодельный</i> конвертер в этой статье.
        </p>
        <p>
          Прежде чем начать экспорт анимации в <mark className="file">JSON</mark> нам
          нужно установить стороннее бесплатное
          <sup>1</sup> расширение <mark className="plugin">Bodymovin</mark>, который можно
          загрузить из <a href="https://aescripts.com/bodymovin/">aescripts</a>. После
          установки он появится в{" "}
          <mark className="ui">Window &gt; Extensions &gt; Bodymovin</mark>.
        </p>
        <AdditionInfo>
          <sup>1</sup> Чтобы скачать расширение - зарегистрируйтесь на сайте{" "}
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
              Для корректной работы расширения требуется установить чекбокс у параметра{" "}
              <mark className="ui">Allow Scripts to Write Files and Access Network</mark>{" "}
              в настройках <mark className="app">Adobe After Effects</mark> -{" "}
              <mark className="ui">
                Edit &gt; Preferences &gt; Scripting & Expressions
              </mark>
              .
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Для вывода векторной анимации в <mark className="file">JSON</mark> откройте
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
          После успешного вывода анимации в <mark className="file">JSON</mark> - поместите
          его в блок с конвертером чуть ниже, а затем нажмите на{" "}
          <mark className="ui">Скачать преобразованный TGS</mark>.
        </p>
        <AdditionInfo>
          По небольшим тестам после конвертации <mark className="file">TGS</mark> в{" "}
          <mark className="file">JSON</mark> из статьи про импорт{" "}
          <mark className="file">TGS</mark> в{" "}
          <mark className="app">Adobe After Effects</mark> на этой странице и обратной
          конвертации в <mark className="file">TGS</mark> с помощью блока ниже,
          выяснилось, что метод <mark>python-gzip</mark> чуть лучше сжимает файл, нежели{" "}
          <mark>js-pako-gzip</mark>.
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
        <Divider>Экспортируем видео-стикер</Divider>
        <p>
          Видео-стикер по своей сути - обычный короткий видеоролик, который запакован в{" "}
          <mark className="file">WebM</mark> в кодеке <mark className="video">VP9</mark>.
          Требования от <mark className="app">Telegram</mark> по такому формату следующие.
        </p>
        <ul>
          <li>
            Для обоих типов требуется экспортировать видео в формате{" "}
            <mark className="video">WebM</mark> и в кодеке{" "}
            <mark className="video">VP9</mark>.{" "}
            <a href="#10.4">На этой странице уже обсуждался вывод в VP9</a> из{" "}
            <mark className="app">Adobe After Effects</mark> с помощью конвертации
            полученного видео.
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
            Длина видео файла не должен превышать <mark>3</mark> секунды, а размер видео
            файла не должен превышать <mark>256</mark> килобайт.
          </li>
          <li>
            Фреймрейт видео файла должен быть не больше чем <mark>30</mark> кадров в
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
      <DetailsSummary
        tag="создание могрт, анимационный шаблон для дальнейшего использования в Premiere Pro"
        title="Как сохранить проект в формате MOGRT?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> есть возможность создать
          анимационный шаблон из вашей композиции для последующего использования в{" "}
          <mark className="app">Adobe Premiere Pro</mark>. Для этого в окне{" "}
          <mark className="ui">Essential Graphics</mark> достаточно нажать на кнопку{" "}
          <mark className="ui">Export Motion Graphics Template</mark>.
        </p>
        <AdditionWarning>
          Экспортировать такой шаблон не получится, если не будет создан какой-либо
          контроллер или не будет перенесено какое-либо свойство в окно{" "}
          <mark className="ui">Essential Graphics</mark>.
        </AdditionWarning>
        <ImageFigure
          caption="Essential Graphics"
          imgSrc="images/aftereffects/export_motion_graphics_template.png"
          imgTitle="Начинаем экспорт композиции как анимационный шаблон"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          <p>
            <mark className="file">MOGRT</mark> файл по своей сути обычный архив, в
            котором хранятся два-три файла, которые формируют сам анимационный шаблон.
          </p>
          <ul>
            <li>
              <mark className="file">definition.json</mark> - файл, в котором находятся
              ссылки, контроллеры и прочая техническая информация шаблона для его
              корректной работы.
            </li>
            <li>
              <mark className="file">project.aegraphics</mark> - файл, где хранится вся
              заготовленная анимация. Стандартными средствами{" "}
              <mark className="app">Adobe Premiere Pro</mark> анимацию нельзя
              отредактировать, но такой проект можно открыть в{" "}
              <mark className="app">Adobe After Effects</mark> и при необходимости внести
              свои правки там, а затем конвертировать обратно в{" "}
              <mark className="file">MOGRT</mark>.
            </li>
            <li>
              <mark className="file">thumb.jpg</mark> - статичная обложка для
              анимационного шаблона для предварительного просмотра в окне{" "}
              <mark className="ui">Graphics Templates</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          После нажатия на кнопку экспорта - измените параметр в{" "}
          <mark className="ui">Destination</mark> на{" "}
          <mark className="ui">Local Drive</mark> и с помощью кнопки{" "}
          <mark className="ui">Browse</mark> укажите нужный путь для сохранения шаблона.
          Также в разделе <mark className="ui">Compatibility</mark> вы можете указать,
          нужно ли будет пользователю <mark className="app">Adobe Premiere Pro</mark>{" "}
          устанавливать <mark className="app">Adobe After Effects</mark> для корректной
          работы анимации или нет.
        </p>
        <ImageFigure
          caption="Export as Motion Graphics Template"
          imgSrc="images/aftereffects/export_as_motion_graphics_template.png"
          imgTitle=""
          styleClass="figure_windows-dark"
        />
        <AdditionDanger>
          <p>
            Не все эффекты, созданными вами, будут поддерживаться в анимационном шаблоне,
            если вы решите использовать <mark className="file">MOGRT</mark> в{" "}
            <mark className="app">Adobe Premiere Pro</mark> без установленного{" "}
            <mark className="app">Adobe After Effects</mark> на устройстве. Ниже вы можете
            посмотреть условия для корректной работы вашего анимационного шаблона в{" "}
            <mark className="app">Adobe Premiere Pro</mark> без{" "}
            <mark className="app">Adobe After Effects</mark>.
          </p>
          <ul>
            <li>
              Поддерживаются все стандартные эффекты, кроме{" "}
              <mark className="plugin">Camera-Shake Deblur</mark>,{" "}
              <mark className="plugin">Maxon Cineware</mark>,{" "}
              <mark className="plugin">Warp Stabilizer</mark> и нельзя использовать{" "}
              <mark className="plugin">Puppet</mark> для деформации слоёв.
            </li>
            <li>
              Само собой из-за отсутствия <mark className="app">Adobe After Effects</mark>{" "}
              нельзя будет использовать сторонние плагины.
            </li>
            <li>
              Если вы решите использовать 3D-слои, то в таком случае будет поддерживаться
              только <mark className="plugin">Classic 3D</mark>.
            </li>
            <li>
              Не все видеоформаты, а также футажи, использующие связь через{" "}
              <mark className="plugin">Dynamic Link</mark> будут работать.
            </li>
          </ul>
        </AdditionDanger>
        <p>
          После успешного экспорта вы можете использовать вашу анимацию в{" "}
          <mark className="app">Adobe Premiere Pro</mark>, сначала переместив файл в{" "}
          <mark className="ui">Graphic Templates</mark>, а затем импортированный шаблон -
          на таймлайн секвенции.
        </p>
        <YouTubeVideo
          caption="How to export MOGRT templates"
          link="tHDnFgW9NpQ"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="прокси, proxy composition, ускорение времени рендера, уменьшение перепросчёта, пререндер, prerender, как сократить время повторного экспорта если заказчик попросил внести небольшие правки"
        title="Как создать прокси для нужной композиции?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> можно создавать прокси для
          композиций, чтобы не пересчитывать тяжёлые сцены при изменении какой-нибудь
          мелочи. Это может быть полезно, если редактировать внутренности композиции вы
          больше не планируете или если вы испытываете какие-нибудь проблемы при экспорте.
        </p>
        <Divider>Создаём прокси</Divider>
        <p>
          Для того чтобы создать прокси - перейдите в окно{" "}
          <mark className="ui">Project</mark>, найдите и выделите нужную композицию,
          нажмите <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="ui">Create Proxy &gt; Movie</mark>. Программа переместит вас в
          очередь экспорта.
        </p>
        <AdditionInfo>
          Прокси можно создать и для видео, которые уже импортированы в проект, таким же
          способом.
        </AdditionInfo>
        <p>
          В очереди экспорта вам нужно установить параметр{" "}
          <mark className="ui">Best Settings</mark> в{" "}
          <mark className="ui">Render Settings</mark>. Это делается для того, чтобы прокси
          не рендерилось в низком разрешении. Ещё вы можете выбрать свой формат, например{" "}
          <mark className="video">QuickTime</mark> в кодеке{" "}
          <mark className="video">Apple Prores 422</mark>. Если композиция содержит
          альфа-канал - выберите в качестве кодека{" "}
          <mark className="video">Apple Prores 4444</mark>.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Если прокси после рендера автоматически не применился - задайте его вручную
              с помощью <mark className="ui">Set Proxy &gt; File</mark> по нужной
              композиции в окне <mark className="ui">Project</mark>. В открывшемся окне
              укажите путь до файла прокси, который был экспортирован из{" "}
              <mark className="app">Adobe After Effects</mark>.
            </li>
            <li>
              Чтобы каждый раз при создании прокси не выбирать{" "}
              <mark className="ui">Best Settings</mark> в{" "}
              <mark className="ui">Render Settings</mark> - перейдите в{" "}
              <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark> и
              выберите в открывшемся окне значение{" "}
              <mark className="ui">Best Settings</mark> в параметре{" "}
              <mark className="ui">Movie Proxy Default</mark>. Аналогичным образом вы
              можете указать стандартный пресет и для{" "}
              <mark className="ui">Output Module</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <VideoFigure
          caption="Создание прокси для композиций"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/create_comp_proxy.mp4"
        />
        <Divider>Делаем финальный экспорт вместе с прокси</Divider>
        <p>
          Если вы хотите экспортировать композицию вместе с прокси - в{" "}
          <mark className="ui">Render Settings &gt; Custom</mark> не забудьте указать
          значение <mark className="ui">Use All Proxies</mark> в параметре{" "}
          <mark className="ui">Proxy Use</mark>.
        </p>
        <AdditionInfo>
          Чтобы каждый раз при создании прокси не выбирать{" "}
          <mark className="ui">Use All Proxies</mark> в{" "}
          <mark className="ui">Render Settings</mark> - перейдите в{" "}
          <mark className="ui">Edit &gt; Templates &gt; Render Settings</mark> и
          отредактируйте пресет <mark className="ui">Best Settings</mark> или создайте
          свой под ваши нужды. Аналогичным образом вы можете настроить пресет и для{" "}
          <mark className="ui">Output Module</mark>.
        </AdditionInfo>
        <VideoFigure
          caption="Настройка использования прокси в финальном рендере"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/use_all_proxies.mp4"
        />
        <Divider>Отключаем прокси для композиции</Divider>
        <p>
          Для того, чтобы отключить прокси - нажмите на иконку квадрата рядом с исходником
          в окне <mark className="ui">Project</mark>. Если вы хотите отвязать исходник от
          прокси насовсем - нажмите <mark className="key">ПКМ</mark> по исходнику и
          выберите <mark className="ui">Set Proxy &gt; None</mark>.
        </p>
        <VideoFigure
          caption="Переключение состояния прокси"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/toggle_disable_proxy.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как экспортировать текущий кадр предпросмотра как файл изображения?">
        <p>
          Иногда у пользователя возникает нужда в выводе одного кадра из композиции как
          файл изображения, желательно в полном качестве, например для создания превью или
          показать пример чего-либо. Можно сделать это двумя способами.
        </p>
        <Divider>Экспортируем через Render Queue</Divider>
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
          предложит экспортировать <mark className="file">PSD</mark> файл в путь, который
          вы укажете в графе <mark className="ui">Output To</mark>. Формат можно изменить
          на свой, нажав на название пресета или на стрелочку рядом с ним.
        </p>
        <AdditionInfo>
          Вы можете создать свой шаблон формата, чтобы не менять тип файла каждый раз,
          когда вы экспортируете кадр через{" "}
          <mark className="ui">Composition &gt; Save Frame As &gt; File</mark>.
        </AdditionInfo>
        <Divider>Экспортируем с помощью FX Console</Divider>
        <p>
          Если вы считаете способ через <mark className="ui">Save Frame As</mark>{" "}
          неудобным, то есть альтернатива. Вы можете сохранить текущий кадр через плагин{" "}
          <mark className="ui">FX Console</mark>, который можно загрузить{" "}
          <a href="https://www.videocopilot.net/blog/?s=fx%20console">по этой ссылке</a>.
        </p>
        <p>
          После установки плагина, откройте панель эффектов с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Space</mark> и нажмите на иконку шестерёнки. В
          настройках установите чекбокс у параметра{" "}
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
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/fx_console_save_frame_as.png"
          imgTitle="Сохраняем текущий кадр через FX Console"
          styleClass="figure_windows-dark"
        />
        <p>
          При нажатии на кнопку <mark className="ui">Save to JPG</mark> или{" "}
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
        title="Как экспортировать все кадры композиции отдельными изображениями?"
      >
        <p>
          Если вы хотите экспортировать все кадры из композиции в отдельные файлы, то вам
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
          <mark className="app">Adobe After Effects</mark> по умолчанию при выводе
          секвенции создаст дополнительную папку, чтобы не забивать папку, в которую вы
          хотите экспортировать. Это поведение можно отключить, убрав чекбокс с{" "}
          <mark className="ui">Save in subfolder</mark> при выборе расположения вывода.
        </AdditionInfo>
        <ImageFigure
          caption="Render Queue"
          imgSrc="images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          styleClass="figure_windows-dark"
        />
        <p>
          Потом в окне <mark className="ui">Output Module</mark> в параметре{" "}
          <mark className="ui">Format</mark> выберите любой формат с названием{" "}
          <mark>Sequence</mark> в конце. В моем случае - я выберу{" "}
          <mark className="ui">PNG Sequence</mark>. В{" "}
          <mark className="ui">Format Options</mark> можно настроить параметры
          изображения, например качество или сжатие.
        </p>
        <AdditionInfo>
          Если вы хотите экспортировать кадры с прозрачностью - не забудьте указать
          параметр <mark className="ui">RGB + Alpha</mark> в параметре{" "}
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
      <DetailsSummary title="Как экспортировать всю композицию или только его часть?">
        <p>
          По умолчанию <mark className="app">Adobe After Effects</mark> выводит композицию
          длиной, соответствующей вашей рабочей области, которую вы указали с помощью
          комбинаций клавиш <mark className="key">B</mark> и{" "}
          <mark className="key">N</mark> или соответствующими маркерами на таймлайне.
        </p>
        <p>
          Если же вы хотите сделать так, чтобы композиция всегда экспортировалась по всей
          длине композиции, то вам нужно создать свой пресет для{" "}
          <mark className="ui">Render Settings</mark> и сделать его при необходимости
          стандартным. Для этого нажмите на иконку стрелочки возле{" "}
          <mark className="ui">Render Settings</mark> и нажмите на кнопку{" "}
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
          В этом окне в параметре <mark className="ui">Time Span</mark> нужно установить
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
          Для экспорта композиции с отображением границ и путей движения можно
          воспользоваться сторонним плагином <mark className="plugin">Cyclops</mark>. Он
          позволяет экспортировать вашу композицию в видео вместе с визуальными
          элементами, такие как границы слоёв и пути анимации, что упрощает процесс
          презентации вашей работы.
        </p>
        <YouTubeVideo
          caption="Cyclops Tutorial"
          link="vNH3d9YqLo4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как сохранить свой шаблон с настройками для экспорта композиций?">
        <p>
          У каждого пользователя <mark className="app">Adobe After Effects</mark> может
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
        tag="коллект файлс, collect files"
        title="Как передать проект вместе с исходниками другому человеку?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> есть функция для сохранения
          вашего проекта в отдельную папку вместе со всеми исходниками, чтобы в дальнейшем
          при переносе или передаче другому лицу ничего не потерялось и не отвалилось.
          Чтобы это сделать, нужно перейти в{" "}
          <mark className="ui">File &gt; Dependencies</mark> и нажать кнопку{" "}
          <mark className="ui">Collect Files</mark>. Если не сохраняли проект, то
          программа предложит вам это сделать.
        </p>
        <AdditionInfo>
          Данная функция не сохраняет исполняемые файлы плагинов, пресетов и шрифтов.
          Заранее предупредите того, кому вы собираетесь передать ваш проект, что ему
          нужно будет установить необходимые плагины и шрифты. Информация об используемых
          шрифтах, эффектах и исходниках будет указана в текстовом файле рядом с файлом
          проекта.
        </AdditionInfo>
        <ImageFigure
          caption="Adobe After Effects"
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
