import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";

const AEExportProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/ExportProblems.tsx" />
      <DetailsSummary
        title="Почему при экспорте в .mp4 через встроенный кодек H.264 сохраняется файл с размером в 1 Кб?"
        tag="не экспортируется, битый файл"
      >
        <p>
          В ранних версиях <mark className="app">After Effects</mark> 2023 года был
          неприятный баг, когда пользователь пытался сохранить видео через встроенный
          кодек H.264 в путь с кириллицей и на выходе получался файл размером 1 Кб. И
          соответственно он не открывался и никем не читался.
        </p>
        <p>
          Для решения этой проблемы просто обновите{" "}
          <mark className="app">After Effects</mark> до версии <mark>23.6</mark> или
          новее. После обновления начните экспорт заново.
        </p>
        <p>
          Если вы по каким-то причинам не можете или не хотите обновлять программу -
          воспользуйтесь плагинами{" "}
          <a href="https://www.autokroma.com/AfterCodecs/">AfterCodecs</a> или{" "}
          <a href="https://www.voukoder.org/">Voukoder</a>. Либо просто выводите в путь
          без кириллицы или в другом кодеке.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="После экспорта у меня изменились цвета. Как избежать изменения цветов?"
        tag="исходник с айфона, hlg, rec709"
      >
        <p>
          Убедитесь в том, что в настройках проекта не установлен какой-нибудь другой
          цветовой профиль, отличный от <mark>None</mark>. Для этого откройте{" "}
          <mark className="ui">Project Manager</mark> через комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark> и перейдите в вкладку{" "}
          <mark className="ui">Color</mark>. В разделе{" "}
          <mark className="ui">Working Color Space</mark> укажите значение{" "}
          <mark>None</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_working_color_space.png"
          imgTitle="Изменение цветового профиля"
          caption="Project Settings"
        />
        <p>
          Ещё бывает такое, что некоторые кодеки и варианты экспорта любят изменять цвета
          из-за сжатия или некоторых особенностей, например{" "}
          <mark className="file">H.264</mark>. Исправить это поведение сложновато, кроме
          как экспортом из <mark className="app">After Effects</mark> в другой формат,
          например <mark className="file">Apple Prores 422</mark>. После экспорта можно
          переконвертировать в <mark className="file">H.264</mark> через{" "}
          <mark className="app">Shutter Encoder</mark> и не потерять в цветах.
        </p>
        <AdditionWarning>.</AdditionWarning>
        <p>
          Иногда при использовании исходников с мобильных телефонов, например{" "}
          <mark>iPhone 13</mark> или новее, возникают проблемы с пересветом. Это
          происходит из-за того, что &quot;яблочные&quot; устройства пишут в{" "}
          <mark>Rec.2020</mark>, а не в <mark>Rec.709</mark>. Да, получается более широкий
          диапазон для дальнейшего монтажа, но для обычного пользователя это всё
          превращается в геморрой.
        </p>
        <p>
          Поэтому для того, чтобы с данной проблемой не сталкиваться в дальнейшем -
          смотрите на параметры вашего исходника и переводите их в <mark>Rec.709</mark> с
          помощью конвертеров, например, через{" "}
          <mark className="app">Shutter Encoder</mark>.
        </p>
        <ImageFigure
          styleClass="figure_macos-dark"
          imgSrc="images/shutter_encoder_interface.png"
          imgTitle="Интерфейс Shutter Encoder"
          caption="Shutter Encoder"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Почему в предпросмотре Media Encoder и после экспорта видео смещается влево или вправо?"
        tag="медиаенкодер, медиаэнкодер, переместилось"
      >
        <p>
          Проверьте вашу версию программ. Вполне вероятно, что вы используете версии в
          промежутках от 23.1 до 23.5, где присутствует такой неприятный баг при
          использовании <mark className="app">Media Encoder</mark> в качестве программы
          для экспорта композиций.
        </p>
        <p>
          Для решения данного бага просто обновите все программы от Adobe до{" "}
          <mark>23.6</mark> или свежее.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Почему моё видео сплющилось после экспорта?"
        tag="растянулось, соотношения пикселя, стандарт пикселя"
      >
        <p>
          Скорее всего вы указали неквадратный пиксель в настройках композиции или
          попытались экспортировать видео в формате <mark className="file">DV PAL</mark>{" "}
          или что-то подобное. У таких форматов соотношение пикселей отличается от{" "}
          <mark>1:1</mark>.
        </p>
        <p>
          Чтобы исправить это, проверьте настройки вашей композиции. Для этого нажмите на
          комбинацию клавиш <mark className="key">Ctrl + K</mark> и выберите{" "}
          <mark className="ui">Square Pixel</mark> в разделе{" "}
          <mark className="ui">Pixel Aspect Ratio</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_pixel_aspect_ratio.png"
          imgTitle="Изменение соотношения пикселей"
          caption="Composition Settings"
        />
        <p>
          Если вы хотите использовать неквадратный пиксель для композиции, которую
          собираетесь выгнать под формат для телевидения, то лучше включите коррекцию
          предпросмотра под размер пикселя, включив пункт{" "}
          <mark className="ui">Pixel Aspect Ration Correction</mark>. Это позволит
          отобразить предпросмотр корректно, как задумано в настройках соотношения пикселя
          в композиции и не столкнуться с неожиданными результатами после вывода.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/enable_pixel_ratio_correction.png"
          imgTitle="Включение коррекции предпросмотра под размер пикселя"
          caption="Composition"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Почему композиция с Element 3D экспортируется с мерцаниями?"
        tag="элемент фликерит"
      >
        <p>
          Это может происходит из-за того, что в настройках вашей композиции указан FPS с
          плавающим значением, например <mark>29,97</mark>. Для{" "}
          <mark className="plugin">Element 3D</mark> лучше в настройках указать целую
          часть числа, например <mark>24</mark>, <mark>30</mark> или <mark>60</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_fps_comp.mp4"
          caption="Изменение FPS у композиции"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Экспортировал композицию и вижу в результате ужасный ступенчатый градиент. Как мне от него избавиться?"
        tag="колор бендинг, полоски, цвет, шум, глубина цвета"
      >
        <p>
          Поздравляю, вы столкнулись с понятием <mark>Color Banding</mark>, что означает
          полосатость на переходах между оттенками одного и того же цвета. Скорее всего вы
          пытаетесь сделать плавный неконтрастный градиент или смешать два цвета между
          собой.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/color_banding_example.mp4"
          caption="Полосатость в градиенте, эффект был усилен через Posterize"
        />
        <p>
          Это происходит из-за недостаточной цветовой глубины, так как 8-битное
          представление цвета в настройках проекта не может отобрать всевозможные
          промежуточные оттенки цветов, присутствующие в градиенте. Также при экспорте
          некоторые видеокодеки могут сжать цвета, например{" "}
          <mark className="file">H.264</mark>.
        </p>
        <YouTubeVideo
          link="h9j89L8eQQk"
          caption="Почему тёмные видео превращаются в кашу?"
        />
        <p>
          В большинстве случаев проблема полосатости решается повышением битности в
          проекте. Для этого вам нужно открыть окно{" "}
          <mark className="ui">Project Settings</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark>. Затем нужно перейти во
          вкладку <mark className="ui">Color</mark> и в пункте{" "}
          <mark className="ui">Bit Depth</mark> установить 16 или 32 бита.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_bit_depth.png"
          imgTitle="Изменяем битность в проекте"
          caption="Project Settings"
        />
        <AdditionWarning>
          Учтите, что при повышении глубины цвета нужно больше ресурсов вашего устройства
          для корректного рендера. Из-за этого возрастает риск нарваться на ошибку{" "}
          <mark>Out of Memory</mark>.
        </AdditionWarning>
        <p>
          Также уменьшить эффект полосатости может помочь накладывание обычного шума. Для
          этого вам нужно создать корректирующий слой поверх всех объектов и применить
          стандартный эффект <mark className="plugin">Add Grain</mark> или{" "}
          <mark className="plugin">Noise</mark> со значением от 1 до 5 процентов. Можно
          ещё навесить эффект <mark className="plugin">Denoiser III</mark> после
          генератора шума, который поставляется в пакете плагинов{" "}
          <mark className="plugin">Red Giant Magic Bullet Suite</mark>.
        </p>
        <AdditionInfo>
          Если вы часто работаете с градиентами, советую создать свой пресет для
          подавления полосатости или взять готовый{" "}
          <a
            download
            href="files/Remove Banding.ffx"
          >
            по этой ссылке
          </a>
          .
        </AdditionInfo>
        <AdditionDanger>
          Способы решения, описанные выше, не позволят вам достичь полного отсутствия
          полосатости на изображении из-за ограничений, связанных с использованием
          цветовых пространств. Помимо этого, также возможно, что на одном мониторе
          полосатость будет незаметна, а на другом - заметна из-за различных типов матриц.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary
        title="Почему я не могу экспортировать видео в H.264 с нечётным разрешением?"
        tag="odd resolution"
      >
        <p>
          Вы не можете экспортировать видео в <mark className="file">H.264</mark> или{" "}
          <mark className="file">H.265</mark> с нечётным разрешением из-за его технических
          особенностей, в частности из-за использования кодеками макроблоков с чётными
          значениями.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/odd_resolution_error.png"
          imgTitle="Ошибка экспорта с нечётным разрешением"
          caption="Ошибка в AfterCodecs при экспорте с нечётным разрешением"
        />
        <p>
          Для решения проблемы просто укажите чётное значение пикселей у каждой стороны в
          настройках композиции и повторите экспорт снова.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Как экспортировать композицию, если After Effects сбоит на конкретном участке?"
        tag="крашит, останавливается рендер, создание прокси"
      >
        <p>
          Если вы испытываете проблемы с экспортом на определённом промежутке композиции,
          когда же в предпросмотре всё проигрывается отлично, то вам следует попробовать
          создать прокси для композиции и использовать его в финальном рендере.
        </p>
        <p>
          Для создания прокси нужно перейти в окно <mark className="ui">Project</mark>,
          выбрать композицию с которым вы испытываете проблемы, нажать{" "}
          <mark className="key">ПКМ</mark> и выбрать{" "}
          <mark className="ui">Create Proxy &gt; Movie</mark>. После нажатия вас отправят
          в очередь экспорта. Далее в нём нужно открыть пункт{" "}
          <mark className="ui">Render Settings &gt; Custom</mark> и поставить везде
          наивысшие настройки (или выбрать пресет{" "}
          <mark className="ui">Best Settings</mark>), чтобы после создания прокси ничего
          не пропало и не ухудшилось. Если прокси автоматически не установилось для
          композиции - сделайте это вручную через{" "}
          <mark className="ui">Set Proxy &gt; File</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/create_comp_proxy.mp4"
          caption="Создание прокси для композиций"
        />
        <AdditionInfo>
          Для создания прокси лучше указать формат QuickTime в кодеке{" "}
          <mark className="file">Apple Prores 422</mark> или{" "}
          <mark className="file">Apple Prores 4444</mark>, если композиция содержит
          альфа-канал.
        </AdditionInfo>
        <p>
          В финальном экспорте не забудьте указать{" "}
          <mark className="ui">Use All Proxies</mark> в{" "}
          <mark className="ui">Render Settings</mark>. После этого попробуйте
          экспортировать композицию заново с использованием прокси.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/use_all_proxies.mp4"
          caption="Настройка использования прокси в финальном рендере"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему после экспорта в видеофайл отсутствует звук в видео?">
        <p>
          Бывают такие случаи, когда пользователь экспортирует композицию в видео и
          надеется, что после рендера можно будет отдавать композицию клиенту. Но не тут
          то было, звук сбежал из контейнера! Пользователь столкнулся с редким багом,
          связанный с кривой автоматикой вывода звука.
        </p>
        <p>
          Для решения проблемы и принудительного экспорта видео вместе с звуковой дорожкой
          вам нужно перейти в настройки <mark className="ui">Output Module</mark> и
          указать <mark className="ui">Audio Output On</mark> вместо{" "}
          <mark className="ui">Audio Output Auto</mark>. Также это может помочь от
          принудительной конвертации вашего видео в <mark className="file">GIF</mark> в
          мессенджерах, например Telegram.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/audio_output_on.png"
          imgTitle="Принудительно включаем вывод звука"
          caption="Output Module Settings"
        />
        <p>
          Если это не помогло, то попробуйте вывести звук из вашей композиции отдельно в
          формате <mark className="file">.wav</mark> и заменить её в композиции, а затем
          повторить попытку экспорта ещё раз.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Экспортировал композицию, а оно занимает очень много места на диске. Как его сжать без потери качества?"
        tag="конвертация, шаттер енкодер"
      >
        <p>
          С такой проблемой сталкивался каждый новичок в программе в старых версиях{" "}
          <mark className="app">After Effects</mark>, когда ещё нативную поддержку кодека{" "}
          <mark className="file">H.264</mark> удалили и долго не возвращали. В то время по
          умолчанию стоял пресет на <mark className="file">AVI</mark> в кодеке{" "}
          <mark className="file">Animation</mark>. А он славился тем, что при сравнительно
          коротких композициях выводил файлы по 10 Гб и больше. К счастью такие времена
          ушли, но некоторые старички побаиваются выводить композиции напрямую из{" "}
          <mark className="app">After Effects</mark>, отдавая предпочтение{" "}
          <mark className="app">Media Encoder</mark>. Зачем? Непонятно.
        </p>
        <p>
          Ну или бывают случаи, когда напутал с кодеком, а заново рендер делать не
          хочется, так как занимает слишком много время. Для таких случаев придумали
          конвертацию видео через <mark className="app">FFmpeg</mark>. Но так как{" "}
          <mark className="app">FFmpeg</mark> является консольной утилитой и не все могут
          внятно разобраться как с ней работать - для них давно изобрели GUI-клиенты,
          например <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
        </p>
        <p>
          В такие конвертеры достаточно расположить вашу экспортированную композицию и
          указать нужный формат. Обычно в конвертере есть различные пресеты для качества
          или для маленького размера в ущерб качеству.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Rendering error while writing to file (...). Unable to delete existing file" или "An unexpected error occurred while exporting a composition. Error code: 9988"'>
        <p>
          Вполне вероятно, что вы пытаетесь перезаписать файл, который используется другой
          программой, например открыт в видеоплеере.
        </p>
        <p>
          Решение может быть банальным: просто закройте программу, которая использует файл
          или перезагрузите устройство. Затем попробуйте ещё раз начать процедуру
          экспорта. Или просто укажите другой путь для вывода.
        </p>
      </DetailsSummary>
    </div>
  );
};
export default AEExportProblems;
