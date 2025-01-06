import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";

const PRExport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Export.tsx" />
      <DetailsSummary title="Какие настройки экспорта стоит установить для вывода в социальные сети?">
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
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          Экспортируем для YouTube
        </div>
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
        <table>
          <thead>
            <th
              colSpan={3}
              style={{textAlign: "center", fontWeight: "bold", color: "var(--accent)"}}
            >
              Таблица рекомендуемого битрейта при использовании HDR
            </th>
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
              <td>2160p (4К)</td>
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
        <table>
          <thead>
            {" "}
            <th
              colSpan={3}
              style={{textAlign: "center", fontWeight: "bold", color: "var(--accent)"}}
            >
              Таблица рекомендуемого битрейта при использовании SDR
            </th>
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
              <td>2160p (4К)</td>
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
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          Экспортируем для TikTok
        </div>
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
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          Экспортируем для Instagram<sup>*</sup>
        </div>
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
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          Экспортируем для Telegram
        </div>
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
          <mark>1280 x 720</mark>, то Telegram обратно сожмёт ваше видео до{" "}
          <mark>720p</mark>.
        </AdditionWarning>
        <p>
          Для анимированной аватарки вашего профиля нужно вывести видео в разрешении до{" "}
          <mark>800 x 800</mark> и с битрейтом до <mark>2 Мбит/с</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в .mp4 и H.264/H.265?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в .WebM и VP9?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в .gif?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию с альфа-каналом, то есть с прозрачностью?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сохранить свой шаблон с настройками для экспорта секвенций?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Я сделал работу в Premiere Pro, но мне нужно передать .prproj файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRExport;