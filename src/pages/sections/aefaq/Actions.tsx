import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const AEActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Actions.tsx" />
      <DetailsSummary title="Чем бы мне улучшить качество исходников?">
        <p>
          В настоящее время существует куча различных способов для улучшения качества
          видео или фото с помощью нейросетей. В данном пункте все способы будут работать
          локально на вашем компьютере, поэтому если у вас слабый ПК или
          непроизводительная видеокарта - будет туговато.
        </p>
        <p>
          Для улучшения качества видео существует{" "}
          <mark className="app">Topaz Video AI</mark>. Он поставляется как отдельная
          программа и может подключаться в <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Davinci Resolve</mark>. Но я бы посоветовал работать в
          Standalone-версии, так стабильней и проще будет использовать исходники в
          дальнейшем.
        </p>
        <YouTubeVideo
          link="zbX7x8Oo_Uc"
          caption="Topaz Video AI"
        />
        <p>
          Плагинов для <mark className="app">After Effects</mark> по улучшению качества
          исходников довольно много, но нам нужно собрать что-то достойное в этот список.
          В качестве хорошего апскейлера-плагина могу привести{" "}
          <mark className="plugin">BCC UpRes ML</mark> в пакете плагинов{" "}
          <mark className="plugin">BorisFX Continuum</mark>.
        </p>
        <YouTubeVideo
          link="fTYcNP8ZdTE"
          caption="BCC UpRes ML"
        />
        <p>
          Если вы хотите улучшить качество фотографий, то для этого есть{" "}
          <mark className="app">Topaz Photo AI</mark> и{" "}
          <mark className="app">Topaz Gigapixel AI</mark>. Кажется, что это похожие
          программы, но результат порой бывает настолько разный, что приходится миксовать
          между этими программами. Для <mark className="app">Topaz Photo AI</mark>{" "}
          готовьте примерно 15 Гб на вашем жёстком диске, а для{" "}
          <mark className="app">Topaz Gigapixel AI</mark> - около 25 Гб. И в этот вес не
          учитываются будущие обновления.
        </p>
        <YouTubeVideo
          link="VMaYdjWqRRg"
          caption="Topaz Gigapixel AI"
        />
        <p>
          Если вы ищете бесплатный и open-source аналог Topaz - для вас есть более простой
          вариант - <mark className="app">Upscayl</mark>. Скачать его вы можете по{" "}
          <a href="https://upscayl.org/">этой ссылке</a>. Данная программа также напичкана
          ИИ-моделями для улучшения качества изображений, без поддержки видео-файлов.
        </p>
        <VideoFigure
          styleClass="figure_macos-dark"
          videoSrc="https://github.com/upscayl/upscayl/assets/25067102/ad2453b1-3c5a-4eb2-b992-4cf10e6a49f5"
          caption="Upscayl"
        />
        <p>
          В далёком прошлом &quot;деды-фотографы&quot; до мейнстрима всяких ИИ-апскейлеров
          улучшали изображения через <mark className="app">Benvista PhotoZoom</mark>,
          который вышел аж в 2005 году. С недавних пор в него тоже добавили ИИ-модели, но
          можно обойтись и без них. За счёт своих алгоритмов результат в этой программе
          может выйти лучше, чем в программах описанных выше. И занимает всего лишь 110 Мб
          на жёстком диске.
        </p>
        <YouTubeVideo
          link="woDDQ0xnt84"
          caption="Benvista Photozoom"
        />
        <AdditionInfo>
          Скачать программы <mark className="app">Benvista PhotoZoom</mark>,{" "}
          <mark className="app">Topaz Photo AI</mark>,{" "}
          <mark className="app">Topaz Gigapixel AI</mark> и{" "}
          <mark className="app">Topaz Video AI</mark>, а также пакет плагинов{" "}
          <mark className="plugin">BorisFX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Чем можно плавно замедлить видео?">
        <p>
          Рано или поздно наступает момент, когда монтажёру или композеру нужно замедлить
          видео так, чтобы оно было плавным, без рывков, имея у себя исходник с маленьким
          количеством кадров в секунду. С нынешними технологиями выполнить задачу
          &quot;плавного замедления видео&quot; стало ещё проще.
        </p>
        <p>
          Для этого мы разберём популярные плагины и программы, позволяющие
          интерполировать кадры между собой. Таким образом вы добавите лишних кадров в
          секунду и позволите себе растягивать видео без мерзких пропусков кадров.
        </p>
        <p>
          Первым плагином для <mark className="app">After Effects</mark> в этом списке
          является <mark className="plugin">Twixtor</mark>. Он вышел достаточно давно,
          хорошо зарекомендовал себя в монтаже и имеет много настроек.
        </p>
        <YouTubeVideo
          link="EGZCNcQyvrE"
          caption="Twixtor"
        />
        <p>
          С относительно недавних пор в <mark className="plugin">BorisFX Continuum</mark>{" "}
          тоже добавили некий аналог <mark className="plugin">Twixtor</mark> на основе ИИ.
          Называется <mark className="plugin">BCC Retimer ML</mark> и в сравнении с{" "}
          <mark className="plugin">Twixtor</mark> выдаёт гораздо лучшие результаты.
        </p>
        <YouTubeVideo
          link="YraSxOpy1Qg"
          caption="BCC Retimer ML"
        />
        <p>
          Если вы не хотите использовать <mark className="app">After Effects</mark> для
          замедления видео или если при использовании плагинов у вас всё тормозит, то
          можно использовать сторонние программы, которые генерируют видео отдельно на ваш
          диск с увеличенной частотой кадров за счёт интерполяции. Например,{" "}
          <mark className="app">FlowFrames</mark>.
        </p>
        <YouTubeVideo
          link="H8ISNjzDULw"
          caption="FlowFrames"
        />
        <p>
          Или <mark className="app">FrameGUI</mark>.
        </p>
        <YouTubeVideo
          link="Axz_KwiqNmc"
          caption="FrameGUI"
        />
        <p>
          Ну или <mark className="app">Topaz Video AI</mark>. В этой программе также можно
          улучшить качество исходников за счёт искусственного интеллекта.
        </p>
        <YouTubeVideo
          link="591MqOooDAE"
          caption="Topaz Video AI"
        />
        <AdditionInfo>
          Действия на видео, приведённые выше, могут отличаться в зависимости от версии
          программы или плагина. Некоторые плагины или программы вы можете скачать в
          канале <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> по
          хештегам <mark className="tag">#twixtor</mark>,{" "}
          <mark className="tag">#continuum</mark> или <mark className="tag">#topaz</mark>.
        </AdditionInfo>
        <p>
          Стандартными средствами <mark className="app">After Effects</mark> тоже можно
          замедлить видео, правда результат будет не таким хорошим, как хотелось бы. Для
          этого вам нужно добавить видео на таймлайн и замедлить его с помощью комбинации
          клавиш <mark className="key">Ctrl + Alt + T</mark>. Эта комбинация включит
          функцию <mark className="ui">Enable Time Remapping</mark> для слоя. После
          изменения длины видео - выделите слой, нажмите на{" "}
          <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
          <mark className="ui">Frame Blending &gt; Frame Mix или Pixel Motion</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Чем можно хорошо подавить шумы на видео?">
        <p>
          Когда видео-исходник был снят в условиях малой освещенности или с высоким ISO -
          вы неизбежно столкнётесь с цифровым шумом - дефектом изображения, возникающий
          при съемке из-за несовершенства технологий сенсоров камер фотоаппаратов,
          видеокамер и телефонов, а также из-за фотонной природы света. Особенно он
          заметен на однотонных поверхностях - небо, кожа и в участках теней.
        </p>
        <p>
          Полностью от шума избавиться сложно, но можно его существенно подавить с помощью
          различных инструментов и плагинов. Одним из эффективных плагинов для уменьшения
          шума (и мерцаний от искусственного освещения) является{" "}
          <mark className="plugin">Neat Video</mark>. Плагин гибко настраивается и
          поддерживает GPU-ускорение.
        </p>
        <YouTubeVideo
          link="https://youtube.com/embed/mwSqzxApy-E"
          caption="Neat Video"
        />
        <p>
          У Red Giant тоже есть свой де-нойзер под названием{" "}
          <mark className="plugin">Denoiser III</mark>, который находится в пакете
          плагинов <mark className="plugin">Magic Bullet Suite</mark>.
        </p>
        <YouTubeVideo
          link="PXCElU7HcX8"
          caption="Denoiser III"
        />
        <p>
          И Boris FX тоже не отстаёт от инструментов для подавления шумов. В пакете
          плагинов <mark className="plugin">Boris FX Continuum</mark> тоже можно найти два
          де-нойзера - <mark className="plugin">BCC DeNoise OBS</mark> на основе
          алгоритмов и относительно новый <mark className="plugin">BCC+DeNoise ML</mark>,
          основанный на машинном обучении.{" "}
        </p>
        <YouTubeVideo
          link="https://youtube.com/embed/L1PeaTa13H4"
          caption="BCC DeNoise ML"
        />
        <p>
          Ну и куда же без Re:vision Effects с их <mark className="plugin">DE:Noise</mark>
          .
        </p>
        <YouTubeVideo
          link="tGIXeddCPQM"
          caption="DE:Noise"
        />
        <p>
          Если вы не хотите использовать сторонние плагины в своём проекте - вы можете
          воспользоваться встроенным эффектом <mark className="plugin">Reduce Grain</mark>
          .
        </p>
        <YouTubeVideo
          link="FmSTOXu2V6I"
          caption="Reduce Grain"
        />
      </DetailsSummary>
      <DetailsSummary title="Какими средствами обычно удаляют зелёный или синий фон?">
        <p>
          Предположим, что заказчик предоставил вам исходники объекта или персонажа на
          зелёном фоне. Можно конечно воспользоваться инструментом{" "}
          <mark className="plugin">Rotobrush</mark>, но он нам не нужен, так как есть
          более простые и эффективные решения.
        </p>
        <AdditionInfo>
          Если вы хотите потренироваться с кеингом зелёного фона - скачайте любое видео из{" "}
          <a href="https://www.youtube.com/playlist?list=PLB62ktMZylCyHxubuonbeZ5VWIYPJMY9J">
            этого плейлиста
          </a>{" "}
          и экспериментируйте.
        </AdditionInfo>
        <p>
          В стандартной поставке <mark className="app">After Effects</mark> есть пресет{" "}
          <mark className="file">Keylight + Key Cleaner + Advanced Spill Suppressor</mark>
          , который закрывает большинство задач по быстрому удалению фона.
        </p>
        <YouTubeVideo
          link="tK_Z1dYgtxs"
          caption="Keylight + Key Cleaner + Advanced Spill Suppressor"
        />
        <p>
          Если у вас действительно полностью однотонный фон, то вы можете воспользоваться
          эффектом <mark className="plugin">Linear Color Key</mark>, если результат не
          сильно важен в угоду производительности сцены.
        </p>
        <YouTubeVideo
          link="8RjOe6cO-cY"
          caption="Linear Color Key"
        />
        <p>
          Из сторонних инструментов для удаления цветного фона любой сложности можно
          выделить <mark className="plugin">Primatte Keyer</mark>, поставляющийся в пакет
          плагинов <mark className="plugin">Red Giant VFX Suite</mark>.
        </p>
        <YouTubeVideo
          link="zYARqiWTArU"
          caption="Getting Started with Primatte Keyer"
        />
        <p>
          Если результат от работы плагины выше не нравится - есть{" "}
          <mark className="plugin">BCC Primatte Studio</mark>, поставляющийся в пакете{" "}
          <mark className="plugin">BorisFX Continuum</mark>.
        </p>
        <YouTubeVideo
          link="AaKTHKspAkQ"
          caption="BCC Primatte Studio"
        />
      </DetailsSummary>
      <DetailsSummary title='А если исходник был снят не на "зелёнке", то как отделить объект от фона?"'>
        <p>
          В век технологий существует много различных инструментов для отделения объекта
          от фона в сложных ситуациях. Например, когда у оператора не было возможности
          снять объект на однотонном фоне, а вырезать объект на пост-обработке нужно.
        </p>
        <p>
          В базовой поставке <mark className="app">After Effects</mark> давно существует
          прекрасный инструмент <mark className="plugin">Rotobrush</mark>{" "}
          <mark className="key">Alt + W</mark>, который позволяет вырезать объект от фона
          любой сложности. С относительно недавних пор Adobe обновили этот инструмент до
          версии 3.0, в которой улучшили работу ротоскопирования объектов с помощью
          ИИ-моделей и выдаёт довольно хорошие результаты при правильном использовании
          инструмента.
        </p>
        <YouTubeVideo
          link="eoOIrdb_0ko"
          caption="Rotobrush"
        />
        <p>
          Если результат от <mark className="plugin">Rotobrush</mark> вам не нравится - вы
          можете воспользоваться сторонним плагином{" "}
          <mark className="plugin">BorisFX Silhouette</mark> в котором есть инструмент{" "}
          <mark className="plugin">Power Matte</mark>.
        </p>
        <YouTubeVideo
          link="3pdkJ1BPEg0"
          caption="Power Matte in Silhouette"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем бы убрать белый или чёрный цвет у слоя?">
        <p>
          Для удаления чёрного и белого фона есть встроенный эффект{" "}
          <mark className="plugin">Extract</mark>, который входит в стандартную поставку{" "}
          <mark className="app">After Effects</mark>. С помощью него можно вырезать
          светлые и тёмные тона по яркостной шкале. Этот эффект хорошо подходит для
          отделения от фона простых объектов. Но! Если вы попытаетесь использовать его,
          например, на композиции с эффектом взрыва или сложными частицами - вы получите
          неприятную кашу.
        </p>
        <YouTubeVideo
          link="v7pqZ9gtn8I"
          caption="Extract"
        />
        <p>
          Если результат от стандартного эффекта не удовлетворяет вас (как раз из-за
          каши), то можно воспользоваться сторонним эффектом{" "}
          <mark className="plugin">uni.unmult</mark>, который поставляется в пакет
          плагинов <mark className="plugin">Red Giant Universe</mark>. Он достаточно
          хорошо убирает тёмные или светлые оттенки, если включен пункт{" "}
          <mark className="ui">Invert</mark>. Плагин делает слой прозрачным, что позволяет
          применить футаж поверх любой композиции.{" "}
        </p>
        <AdditionWarning>
          С некоторыми футажами может появиться ощущение, что слой слишком прозрачный, чем
          хотелось бы. В качестве костыльного способа можно просто продублировать нужный
          слой с применённым эффектом и привязать их друг к другу, если необходимо.
        </AdditionWarning>
        <YouTubeVideo
          link="GGjIu0CZ1M4"
          caption="Red Giant Universe Unmult"
        />
        <p>
          Если вы не хотите заморачиваться с эффектами и плагинами - просто добавьте видео
          с чёрным фоном и примените режим наложения <mark className="ui">Screen</mark>.
        </p>
        <AdditionWarning>
          Режимы наложения не будут работать, если под слоем по иерархии на таймлайне
          ничего нет. И да, добавлять чёрный солид в таком случае будет бессмысленно.
        </AdditionWarning>
        <p>
          Если у вас есть альфа-канал отдельным слоем, то вы можете применить его как
          маску с помощью функции Track Matte.
        </p>
        <YouTubeVideo
          link="ltrGC0kDFic"
          caption="How to Use Luma Mattes"
        />
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно прицепить слой к объекту на видео?">
        <p>
          Предположим, что у вас есть видео в котором вы хотите прицепить слой к объекту с
          небольшими движениями. Для этого вам нужно открыть окно{" "}
          <mark className="plugin">Tracker</mark>, которое можно вызвать из меню{" "}
          <mark className="ui">Window</mark> в верхней части интерфейса программы. В этом
          же окне вы можете выбрать четыре действия:
        </p>
        <ul>
          <li>
            <mark className="ui">Track Camera</mark> - применяет эффект{" "}
            <mark className="plugin">3D Camera Tracking</mark>. Полезен если вам нужно
            прицепить объект к поворачивающейся плоскости.
          </li>
          <li>
            <mark className="ui">Warp Stabilizer</mark> - применяет эффект{" "}
            <mark className="plugin">Warp Stabilizer</mark>. Нужен для стабилизации
            дёрганной камеры и устранения эффекта &quot;пьяного оператора&quot; с его
            трясущимися руками и может помочь улучшить качество трекинга. В эффекте есть
            несколько методов для стабилизации камеры на случай, если стандартный не
            нравится.{" "}
            <AdditionWarning>
              Эффект стабилизации может обрезать вашу картинку, для устранения этого -
              раскройте Auto-Scale и установите приемлемое для вас значение Maximum Scale.
              Слишком большие значения в Smoothness могут превратить вашу картинку в
              непонятное желе. Экспериментируйте с умом!
            </AdditionWarning>
          </li>
          <li>
            <mark className="ui">Track Motion</mark> - то, что нам нужно для трекинга
            движения объекта. Благодаря этому мы сможем прицепить любой слой к движущемуся
            объекту.
          </li>
          <li>
            <mark className="ui">Stabilize Motion</mark> - функция, которая перемещает
            исходное видео под движение трекаемого объекта. Может быть полезно, когда
            нужно зафиксировать взгляд на нужный объект.
          </li>
        </ul>
        <YouTubeVideo
          link="tqWWhChc8RA"
          caption="Motion Tracking"
        />
        <AdditionInfo>
          Если ваш объект движется слишком быстро - увеличьте область действия работы
          трекинга, так как за пределы области действия трекер не увидит объект. Если же
          наоборот, медленно, но точку уводит непонятно куда - уменьшите область трекинга
          и постарайтесь улучшить контраст любым способом у исходного видео.
        </AdditionInfo>
        <p>
          Если же вам надо оттречить плоскость, которая движется под разными углами
          стандартными способами - сделайте это через{" "}
          <mark className="plugin">3D Camera Tracker</mark>.
        </p>
        <YouTubeVideo
          link="yaT3YwIK-BI"
          caption="3D Camera Tracker"
        />
        <p>
          Если результат от способов выше не понравился, то не время унывать. В
          стандартной поставке <mark className="app">After Effects</mark> есть прекрасный
          инструмент для планарного трекинга под названием{" "}
          <mark className="plugin">Mocha AE</mark>. Он будет несколько урезанней, нежели
          его полноценная версия под названием <mark className="plugin">Mocha Pro</mark>,
          которую надо устанавливать отдельно, но базовые вещи для наложения слоя с
          движением на исходное видео выполнить может.
        </p>
        <YouTubeVideo
          link="be_8uRcyiEs"
          caption="Mocha AE For Beginners"
        />
        <AdditionInfo>
          Если у вас слой после переноса трекинга из <mark className="plugin">Mocha</mark>{" "}
          куда то улетает - проверьте разрешение слоя, который вы собираетесь разместить и
          сравните его с разрешением вашей композиции. Если они отличаются - слой так и
          будет улетать. Для исправления этого недочёта - примените{" "}
          <a href="files/Mocha_data_rescale_import.ffx">пресет по этой ссылке</a> от{" "}
          <a href="https://t.me/Pavelusha">@Pavelusha</a> на слой, на котором добавлен{" "}
          <mark className="plugin">Corner Pin</mark>. В применённом пресете вам нужно
          выбрать в Source Layer тот слой, на котором тречили данные. При правильном
          использовании ваша вставляемая картинка переместится куда надо.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как мне сделать точки у шейпового слоя управляемыми с помощью 'нулевых слоёв'?">
        <p>
          Предположим, что вы создали некий шейповый слой или маску и вы хотите
          анимировать этот слой через Path. Но через некоторое время вы понимаете, что
          дёргание Path порой бывает неудобным и муторным.
        </p>
        <p>
          Для упрощения анимации масок и фигурных слоёв в базовой поставке{" "}
          <mark className="app">After Effects</mark> добавлен разработчиками скрипт{" "}
          <mark className="file">Create Nulls From Path.jsx</mark>, который создаёт нули
          для контроля точек фигуры. Его можно открыть с помощью{" "}
          <mark className="ui">Window &gt; Create Nulls From Path.jsx</mark> в конце
          выпадающего меню.
        </p>
        <YouTubeVideo
          link="Unnvx0alhyw"
          caption="Animating with Create Nulls From Path"
        />
      </DetailsSummary>
      <DetailsSummary title="Как мне сделать обводку слоя?">
        <p>
          Есть два быстрых способа для создания обводки: через{" "}
          <mark className="ui">Auto-trace</mark> и через{" "}
          <mark className="ui">Layer Style</mark>.
        </p>
        <p>
          Начнём с первого способа - через <mark className="ui">Layer Style</mark>. Для
          этого вам нужно выделить ваш слой в окне предпросмотра или в таймлайне, нажать{" "}
          <mark className="key">ПКМ</mark> и выбрать в контекстном меню{" "}
          <mark className="ui">Layer Style &gt; Stroke</mark>. После этого вы можете
          раскрыть свойства обводки и изменить ему цвет, прозрачность или размер.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/stroke_layer-style.mp4"
          caption="Создание обводки через Layer Style"
        />
        <p>
          Второй способ, через <mark className="ui">Auto-Trace</mark>, будет чуть
          посложнее. Вам нужно будет создать маску с помощью функции авто-трассировки. Для
          этого вам нужно выделить слой, перейти в{" "}
          <mark className="ui">Layer &gt; Auto-Trace</mark>. В новом окне вы можете
          выбрать диапазон работы авто-трассировки: создать маску только с текущего кадра
          или с с рабочей области. Затем у нас сгенерируется маска на новом слое. Также
          можно выбрать на основе чего создавать трассировку: из альфа-канала, яркости или
          определённого цвета. Вы можете применить маску сразу на выделенный слой, убрав в
          окне галочку с пункта <mark className="ui">Apply to new layer</mark>. После
          настройки просто нажмите на кнопку <mark className="ui">OK</mark> и примените
          эффект <mark className="plugin">Stroke</mark> на слой с созданной маской.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/stroke_auto-trace.mp4"
          caption="Создание обводки через Auto-Trace и эффекта Stroke"
        />
        <AdditionInfo>
          Эффект <mark className="plugin">Stroke</mark> автоматически сделает обводку из
          созданной маски. Если на вашем слое есть несколько масок - эффект выберет первую
          по списку. При желании можно изменить параметр &quot;из какой маски делать
          обводку&quot;.
        </AdditionInfo>
        <p>
          Второй способ прекрасно подходит к многим сторонним эффектам для создания
          обводки, например <mark className="plugin">Saber</mark> или{" "}
          <mark className="plugin">Thicc Stroke</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем сделать анимацию толщины variable-шрифта?">
        <p>
          Для анимации шрифта от тонкого начертания до жирного используется техника
          морфинга фигур. В видео ниже создаются два текстовых слоя, расположенных друг на
          друге, из которых создают шейповый слой и делают анимацию движения Path. За счёт
          этого получается красивая и быстрая анимация смены толщины текста.
        </p>
        <YouTubeVideo
          link="yyDAFSC2qDo"
          caption="Smooth Typo Transition from Bold Text to Thin Text"
        />
      </DetailsSummary>
      <DetailsSummary title="Какими средствами и плагинами обычно делают анимацию 2D-персонажей?">
        <p>
          Существуют множество способов для создания персонажной анимаций. Каждый
          инструмент выполняет определённую или общую задачу по анимации персонажей
          разного качества.
        </p>
        <ul>
          <li>
            Через <mark className="plugin">Puppet Tool</mark>. Просто, встроенно и
            сердито. С помощью него можно двигать слой как марионетку, на что отсылает
            название инструмента.{" "}
            <a href="https://www.youtube.com/watch?v=Vu3RHRnoRM4">Как?</a>
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">Duik</mark>. Он поставляется{" "}
            <a href="https://rxlaboratory.org/duik-angela-download/">
              бесплатно на официальном сайте
            </a>
            .
          </li>
          <li>
            Через кучу тематических плагинов, например{" "}
            <mark className="plugin">Rubberhose</mark>,{" "}
            <mark className="plugin">Limber</mark>,{" "}
            <mark className="plugin">Character Tool</mark> и подобные.
          </li>
        </ul>
        <YouTubeVideo
          link="AcEIT03Mrzk"
          caption="Сравнение популярных плагинов для персонажной анимации"
        />
      </DetailsSummary>
      <DetailsSummary title="Как мне быстро расставить ключи и маркеры под бит, желательно автоматически?">
        <p>
          Если у вас имеется аудиофайл, особенно с чётко выраженными битами - вам будет
          довольно легко сгенерировать ключи на основе звуковой волны.
        </p>
        <AdditionInfo>
          Если вам нужно вытащить биты и отделить их от остальной музыки - воспользуйтесь
          программой{" "}
          <a href="https://github.com/stemrollerapp/stemroller/releases">StemRoller</a>.
        </AdditionInfo>
        <p>
          В <mark className="app">After Effects</mark> вы можете сгенерировать ключи с
          помощью нажатия <mark className="key">ПКМ</mark> по слою с аудиофайлом и выбрав{" "}
          <mark className="ui">Keyframe Assistant &gt; Convert Audio to Keyframes</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/convert_audio_to_keyframes.png"
          imgTitle="Генерация ключей из аудиодорожки"
          caption="Генерация ключей из аудиодорожки"
        />
        <p>
          Минус этого способа заключается в том, что вы не можете настроить интерполяцию
          между ключами, не удаляя лишние ключевые кадры. Да и в принципе чистить такое -
          будет не очень удобно.
        </p>
        <p>
          Но никто не запрещал использовать сторонние методы для расстановки ключевых
          кадров. Например, через <mark className="plugin">Sound Keys</mark>, поставляемый
          в пакет плагинов <mark className="plugin">Red Giant Trapcode Suite</mark>.
        </p>
        <YouTubeVideo
          link="uqKFsIHu-DA"
          caption="Как пользоваться Sound Keys в After Effects"
        />
        <p>
          Хоть <mark className="plugin">Sound Keys</mark> и даёт хороший результат за счёт
          возможности гибкой настройки, но с помощью него нельзя автоматически поставить
          маркеры на композиции под биты. На помощь приходит ещё один сторонний плагин -{" "}
          <mark className="plugin">Beat Edit</mark>, который как раз и выполняет эту
          задачу.
        </p>
        <YouTubeVideo
          link="JGVLRcjp7ss"
          caption="Как создавать маркеры с помощью Beat Edit"
        />
        <AdditionInfo>
          Плагины, приведённые в этом пункте можно скачать из канала{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> или из канала{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как мне распаковать пре-композицию?">
        <p>
          Бывают случаи, когда пользователь сделал несколько прекомпозиций, а потом
          внезапно ему понадобилось их распаковать. И порой не хочется заходить в каждую
          композицию, прожимать <mark className="key">Ctrl + A</mark> для выделения всех
          слоёв, <mark className="key">Ctrl + C</mark> для копирования слоёв, переходить в
          родительскую композицию и нажимать на <mark className="key">Ctrl + V</mark>,
          особенно когда надо сделать так с большой кучей композиций.
        </p>
        <p>
          Для решения этой нудной проблемы был создан бесплатный<sup>*</sup> плагин{" "}
          <a href="https://aescripts.com/un-precompose/">Un-precompose</a>. После его
          установки он появится в <mark className="ui">Layer &gt; Un-precompose</mark>.
          Чтобы эта кнопка работала - нужно выделить композиции, которые вы хотите
          распаковать.
        </p>
        <AdditionInfo>
          <sup>*</sup>Чтобы скачать скрипт - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с плагином,
          установите цену 0 в <mark className="ui">Name Your Own Price</mark>, добавьте
          его в корзину и подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/unprecompose_demonstration.mp4"
          caption="Распаковка нескольких прекомпозиций с помощью Un-precompose"
        />
        <AdditionWarning>
          Имейте ввиду, что ссылки внутри эффектов (например указание слоя в Displacement
          Map) и внутри выражений при распаковке прекомпозиций могут слететь.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Как разбить текстовый слой на отдельные слои с буквами, словами или строками?">
        <p>
          Для быстрого разделения текстового слоя на буквы или строки существует сторонний
          скрипт <a href="https://aescripts.com/decomposetext/">DecomposeText</a>
          <sup>*</sup>. С помощью него можно сгенерировать из одного текстового слоя сразу
          несколько слоёв с отдельными буквами для более точной анимации текста.
        </p>
        <AdditionInfo>
          <sup>*</sup>Чтобы скачать скрипт - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с плагином,
          установите цену 0 в <mark className="ui">Name Your Own Price</mark>, добавьте
          его в корзину и подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/decomposetext.mp4"
          caption="Разделяем текстовый слой на слова с помощью DecomposeText"
        />
        <AdditionWarning>
          Скрипт не поддерживает текст, созданный как Paragraph Text. Для этого вам нужно
          будет его конвертировать в Point Text, выбрав инструмент Text и нажав на{" "}
          <mark className="key">ПКМ</mark> по текстовому слою в предпросмотре. В
          открывшемся контекстном меню нужно выбрать{" "}
          <mark className="ui">Convert to Point Text</mark>.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Как изменить параметры сразу нескольких композиций?">
        <p>
          Изменить разрешение, частоту кадров или другие параметры сразу в нескольких
          композициях стандартными способами программы не получится - вам нужно
          воспользоваться сторонним плагином{" "}
          <a href="https://aescripts.com/rd-compsetter/">rd: Comp Setter</a>.
        </p>
        <p>
          Для этого достаточно выделить нужные вам композиции в окне{" "}
          <mark className="ui">Project</mark>, указать нужные настройки в скрипте и нажать
          на <mark className="ui">Apply</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/rd_compsetter_demonstration.mp4"
          caption="Демонстрация работы rd: Comp Setter"
        />
        <p>Вот и всё, теперь ваши выделенные композиции приведены к общему виду.</p>
      </DetailsSummary>
      <DetailsSummary title="Как применить Adjustment Layer только на конкретные слои?">
        <p>
          Изначально в <mark className="app">After Effects</mark> нет возможности
          применить корректирующий слой только на определённые слои под ним. Либо надо
          переносить по иерархии, либо городить костыли в виде масок.
        </p>
        <p>
          В этом пункте мы сделаем второе. Для этого нам понадобится сторонний эффект{" "}
          <mark className="plugin">Supercomp</mark>, поставляемый в пакете плагинов{" "}
          <mark className="plugin">VFX Suite</mark> от Red Giant. В нём нам нужно
          обесцветить наши слои и сделать их супер яркими, чтобы сделать из них маску.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/supercomp_demonstration.mp4"
          caption="Демонстрация работы Supercomp для создания маски"
        />
        <p>
          Если вы не хотите ставить <mark className="plugin">VFX Suite</mark>, то вы
          можете создать маску просто создав прекомпозицию из нужных слоёв и накинуть на
          них <mark className="plugin">Fill</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/supercomp_without_plugins.mp4"
          caption="Демонстрация работы Supercomp для создания маски"
        />
        <AdditionWarning>
          Со сложными слоями такой способ может не прокатить, экспериментируйте с умом.
        </AdditionWarning>
      </DetailsSummary>
    </div>
  );
};
export default AEActions;
