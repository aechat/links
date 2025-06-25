import React from "react";

import {Divider} from "antd";

import DetailsSummary from "../../../components/DetailsSummary";

import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

import ContentSwitcher from "../../../components/features/ContentFilter";

import CodeSnippet from "../../../components/features/CodeSnippet";

const AEActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Actions.tsx" />
      <DetailsSummary
        tag="апскейл, топаз, качество, 4к, резкость, восстановить четкость"
        title="Какими средствами я могу улучшить качество изображений и видео?"
      >
        <p>
          В настоящее время существует множество способов улучшить качество видео или фото
          с помощью нейросетей. Описанные здесь методы работают локально на вашем
          компьютере, поэтому для начала запаситесь производительной видеокартой и
          процессором.
        </p>
        <Divider>Улучшаем качество видео</Divider>
        <p>
          Для улучшения качества видео можно использовать программу{" "}
          <mark className="app">Topaz Video AI</mark>. Данная программа может подключаться
          к <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Davinci Resolve</mark>, но я бы посоветовал использовать
          Standalone-версию - так будет стабильнее и проще работать с исходниками. С
          помощью него можно вытянуть из плохого качества - относительно хорошее, а также
          увеличить плавность видео. С первого раза хороший результат из вашего исходника
          может и не выйти, поэтому пробуйте экспериментировать с настройками для
          получения хорошего результата.
        </p>
        <YouTubeVideo
          caption="Topaz Video AI"
          link="zbX7x8Oo_Uc"
        />
        <p>
          Также существуют много плагинов для{" "}
          <mark className="app">Adobe After Effects</mark>, которые помогают улучшить
          качество видео и изображений. Из такого можно обратить внимание на{" "}
          <mark className="plugin">BCC UpRes ML</mark> из набора сторонних плагинов{" "}
          <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <YouTubeVideo
          caption="BCC UpRes ML"
          link="fTYcNP8ZdTE"
        />
        <Divider>Улучшаем качество фотографий</Divider>
        <p>
          Если вы хотите улучшить качество ваших фотографий, то для этого подойдут
          программы <mark className="app">Topaz Photo AI</mark> или{" "}
          <mark className="app">Topaz Gigapixel AI</mark>. По своей задаче эти программы
          похожи, а результаты могут сильно отличаться, поэтому время от времени
          приходится использовать обе программы. Для{" "}
          <mark className="app">Topaz Photo AI</mark> вам понадобится около 15 ГБ на
          жестком диске, а для <mark className="app">Topaz Gigapixel AI</mark> - около 25
          ГБ. И это без учета будущих обновлений.
        </p>
        <AdditionInfo>
          Про различия <mark className="app">Topaz Photo AI</mark> и{" "}
          <mark className="app">Topaz Gigapixel AI</mark> можно узнать{" "}
          <a href="https://www.topazlabs.com/pai-vs-gp">на официальном сайте</a>.
        </AdditionInfo>
        <YouTubeVideo
          caption="Topaz Gigapixel AI"
          link="VMaYdjWqRRg"
        />
        <p>
          Если вы ищете бесплатный и open-source аналог{" "}
          <mark className="app">Topaz Gigapixel AI</mark> для улучшения изображений, то
          есть более простой вариант - <mark className="app">Upscayl</mark>. Скачать его
          можно по <a href="https://upscayl.org/">этой ссылке</a>. Эта программа также
          использует генеративные модели для улучшения качества изображений.
        </p>
        <AdditionWarning>
          Данная программа не поддерживает улучшение видеофайлов.
        </AdditionWarning>
        <VideoFigure
          caption="Upscayl"
          styleClass="figure_macos-dark"
          videoSrc="https://github.com/upscayl/upscayl/assets/25067102/ad2453b1-3c5a-4eb2-b992-4cf10e6a49f5"
        />
        <p>
          В качестве альтернативы для улучшения качества изображений можно воспользоваться
          программой <mark className="app">Benvista PhotoZoom</mark>, первая версия
          которого вышла ещё в 2005 году. С относительно недавних пор в него также
          добавили генеративные модели, но можно обойтись и без них. Благодаря своим
          алгоритмам, результат в этой программе может быть даже лучше, чем в
          вышеупомянутых программах. И занимает всего лишь <mark>110 Мб</mark> на жестком
          диске.
        </p>
        <YouTubeVideo
          caption="Benvista Photozoom"
          link="woDDQ0xnt84"
        />
        <AdditionInfo>
          Скачать программы <mark className="app">Benvista PhotoZoom</mark>,{" "}
          <mark className="app">Topaz Photo AI</mark>,{" "}
          <mark className="app">Topaz Gigapixel AI</mark> и{" "}
          <mark className="app">Topaz Video AI</mark>, а также пакет плагинов{" "}
          <mark className="plugin">Boris FX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="слоумо, твикстор, топаз, ретаймер, тайм ремапинг, плавное замедление, флоуфреймс, дайте мне больше фпс, fps interpolation"
        title="Какими средствами я могу замедлить видео или сделать его более плавным?"
      >
        <p>
          В какой-то момент у пользователя возникает задача замедлить видео так, чтобы оно
          смотрелось плавно и без рывков, особенно если исходник имеет низкую частоту
          кадров. Или просто сделать видео более плавным,{" "}
          <i style={{opacity: "0.5"}}>
            как это любят эдиторы, прибывшие из <mark className="app">TikTok</mark>
          </i>
          . Эту задачу можно решить с помощью интерполирования кадров или же добавлением
          дополнительных кадров за счёт смешения существующих соседних.
        </p>
        <AdditionWarning>
          Прежде чем замедлять аниме-клипы, скринкасты видеоигр или исходники, записанные
          с переменным FPS - стоит <a href="#8.3">избавиться от повторяющихся кадров</a>.
          Таким образом вы обеспечите более стабильную работу интерполяции и можете
          добиться более плавного замедления.
        </AdditionWarning>
        <AdditionInfo>
          <ul>
            <li>
              Действия на видео, приведённые ниже, могут отличаться в зависимости от
              версии программы или плагина.
            </li>
            <li>
              Некоторые плагины и программы вы можете скачать в канале{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> по
              хештегам <mark className="tag">#twixtor</mark>,{" "}
              <mark className="tag">#continuum</mark> или{" "}
              <mark className="tag">#topaz</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <Divider>Замедляем плавно прямо в After Effects</Divider>
        <p>
          Первым в списке плагинов, с помощью которого можно плавно замедлить видео в{" "}
          <mark className="app">Adobe After Effects</mark> идёт{" "}
          <mark className="plugin">Twixtor</mark>. Этот плагин достаточно давно появился
          на рынке и за это время он успел зарекомендовать себя как хороший инструмент для
          интерполяции кадров и плавного изменения скорости видеоклипа. У него есть
          множество настроек, что позволяет адаптировать его использование под различные
          задачи.
        </p>
        <YouTubeVideo
          caption="Twixtor"
          link="EGZCNcQyvrE"
        />
        <p>
          Также в <mark className="plugin">Boris FX Continuum</mark> появился эффект{" "}
          <mark className="plugin">BCC Retimer ML</mark> для интерполяции кадров и
          плавного замедления видео, который использует искусственный интеллект. Этот
          эффект порой показывает лучше результат, чем вышеупомянутый{" "}
          <mark className="plugin">Twixtor</mark>.
        </p>
        <YouTubeVideo
          caption="BCC Retimer ML"
          link="YraSxOpy1Qg"
        />
        <p>
          Стандартными средствами <mark className="app">Adobe After Effects</mark> тоже
          можно плавно замедлить видео с помощью функции смешивания соседних кадров,
          правда результат может получиться не таким хорошим, как хотелось бы. Для этого
          вам нужно добавить видео на таймлайн и замедлить его с помощью{" "}
          <mark>Time Remapping</mark>. Его можно включить с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + T</mark>. После изменения длины видео с
          помощью ремапинга - выделите нужный слой, нажмите на{" "}
          <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
          <mark className="ui">Frame Blending &gt; Frame Mix или Pixel Motion</mark>.
        </p>
        <YouTubeVideo
          caption="Frame Blending и Pixel Motion в Adobe After Effects"
          link="fNINAOwY2IY"
        />
        <Divider>Делаем видео более плавным вне After Effects</Divider>
        <p>
          Если же у вас возникает задача превратить видео, например с{" "}
          <mark>24 кадрами в секунду</mark> в <mark>60</mark> или даже в <mark>120</mark>{" "}
          для дальнейшей обработки или воспроизведения контента,{" "}
          <i style={{opacity: "0.5"}}>
            правда н@#&я, если большинство видеохостингов всё равно примут видео максимум
            с 60 кадрами в секунду
          </i>
          , то можно воспользоваться различными сторонними утилитами. Первым по списку
          пойдет <mark className="app">Flowframes</mark>. У данной программы существует
          как <a href="https://nmkd.itch.io/flowframes">бесплатная</a> версия, для
          скачивания которого нужно нажать на странице{" "}
          <mark className="ui">Download Now</mark> и в модальном окне нажать на{" "}
          <mark className="ui">No thanks, just take me to the downloads</mark>, так и{" "}
          <a href="https://www.patreon.com/n00mkrad">платная</a>, которая обновляется чаще
          и имеет больше функций.
        </p>
        <YouTubeVideo
          caption="FlowFrames"
          link="H8ISNjzDULw"
        />
        <p>
          В качестве альтернативы можно воспользоваться чуть менее популярным{" "}
          <mark className="app">FrameGUI</mark>.
        </p>
        <YouTubeVideo
          caption="FrameGUI"
          link="Axz_KwiqNmc"
        />
        <p>
          Также в <mark className="app">Topaz Video AI</mark> есть функция для увеличения
          количества кадров в секунду с выбором нескольких моделей для различных
          экспериментов, чтобы выбрать более подходящий результат.
        </p>
        <YouTubeVideo
          caption="Topaz Video AI"
          link="591MqOooDAE"
        />
      </DetailsSummary>{" "}
      <DetailsSummary
        tag="дублирующиеся фреймы, аниме"
        title="Как и чем можно удалить повторяющиеся кадры в видео?"
      >
        <p>
          Когда вы обрабатываете запись видеоигры, аниме или контент с плавающим значением{" "}
          <mark>FPS</mark>, то наверное вы сталкивались с тем, что кадры иногда
          дублируются и это может мешать плавности вашей композиции. Для исправления этого
          неприятного эффекта нужно удалить дублирующиеся кадры. Это можно сделать
          несколькими способами.
        </p>
        <Divider>Удаляем через Duplicate Frame Remover</Divider>
        <p>
          Из <mark className="app">Adobe After Effects</mark> дублирующиеся кадры можно
          убрать с помощью стороннего плагина{" "}
          <a href="https://aescripts.com/duplicate-frame-remover/">
            Duplicate Frame Remover
          </a>
          . Из настроек есть несколько параметров.
        </p>
        <ul>
          <li>
            <mark className="ui">Threshold</mark> - чем больше его значение, тем чаще
            будет удаляться дублирующиеся кадры.
          </li>
          <li>
            <mark className="ui">Use Region of Interest</mark> - алгоритм обнаружения, в
            зависимости от включенной опции, будет обрабатываться в пределах{" "}
            <mark className="ui">Region of Interest</mark>, указанный вами, чтобы
            исключить ложные срабатывания.
          </li>
          <li>
            <mark className="ui">Retime to original length</mark> - возвращает исходную
            длину слоя с включением встроенных режимов интерполяции кадров:{" "}
            <mark className="ui">Pixel Motion</mark> или{" "}
            <mark className="ui">Frame Mix</mark>.
          </li>
        </ul>
        <YouTubeVideo
          caption="Duplicate Frame Remover 3 - Quick Start Tutorial"
          link="yg0vJmgCG5U"
        />
        <p>
          Для удобства при дальнейшей работе рекомендую отрендерить обработанный через
          плагин видео и заменить его в проекте. Таким образом вы избавите себя от
          повторных рендеров слоя, из которого вы удалили повторяющиеся кадры.
        </p>
        <Divider>Используем Shutter Encoder для удаления дублирующихся кадров</Divider>
        <p>
          В <mark className="app">Shutter Encoder</mark> есть опция, которая анализирует
          повторяющиеся кадры и удаляет их при конвертации. После импорта вашего исходника
          выберите формат для вывода и во вкладке{" "}
          <mark className="ui">Advanced features</mark> включите параметр{" "}
          <mark className="ui">Remove duplicate frames</mark>. Затем укажите нужный путь
          для вывода файла и нажмите на <mark className="ui">Start function</mark>.
        </p>
        <ImageFigure
          caption="Shutter Encoder"
          imgSrc="images/shutter_encoder_remove_duplicate_frames.png"
          imgTitle="Включение удаления дублирующихся кадров"
          styleClass="figure_macos-dark"
        />
        <Divider>Удаляем дублирующиеся кадры через FFmpeg</Divider>
        <p>
          Если вы не боитесь командной строки и согласны воспользоваться им, чтобы
          исправить ваш исходник, то вам нужно загрузить и установить{" "}
          <mark className="app">FFmpeg</mark> на ваше устройство.{" "}
          <mark className="app">FFmpeg</mark> - утилита командной строки для
          конвертирования и преобразования различных видео файлов.
        </p>
        <ContentSwitcher
          macContent={
            <div>
              <AdditionWarning>
                В этой инструкции <mark className="app">FFmpeg</mark> будет
                устанавливаться через сторонний пакетный менеджер{" "}
                <mark className="app">Homebrew</mark>. Прежде чем выполнять команду для
                установки <mark className="app">FFmpeg</mark> - убедитесь в том, что{" "}
                <mark className="app">Homebrew</mark> установлен в вашей системе.{" "}
                <a href="https://brew.sh/">Что ещё за Homebrew?</a>
              </AdditionWarning>
              <p>
                Для установки <mark className="app">FFmpeg</mark> на устройство с{" "}
                <mark>macOS</mark> - достаточно выполнить команду{" "}
                <mark className="code">brew install ffmpeg</mark>.
              </p>
            </div>
          }
          windowsContent={
            <div>
              <p>
                Для быстрой установки <mark className="app">FFmpeg</mark> выполните
                команду <mark className="code">winget install Gyan.FFmpeg</mark>. Для
                корректной установки, возможно, потребуются права администратора.
              </p>
              <AdditionWarning>
                <ul>
                  <li>
                    Если в вашей сборке <mark>Windows</mark> была вырезана утилита{" "}
                    <mark className="app">winget</mark>, то{" "}
                    <a href="https://github.com/microsoft/winget-cli/releases">
                      установите его вручную
                    </a>
                    .
                  </li>
                  <li>
                    Если вы работаете из под ограниченной учётной записи, то вы можете
                    распаковать <mark className="app">FFmpeg</mark> в удобную вам папку и
                    работать из под неё, перейдя в нужный каталог с исполнительным файлом
                    в командной строке. Скачать портативную версию{" "}
                    <mark className="app">FFmpeg</mark> можно на сайте{" "}
                    <a href="https://www.gyan.dev/ffmpeg/builds/">Gyan.Dev</a>.
                  </li>
                </ul>
              </AdditionWarning>
            </div>
          }
        />
        <p>
          После корректной установки и прописывания утилиты в переменную среду вы можете
          воспользоваться им, не указывая полный путь до исполняемого файла{" "}
          <mark className="app">FFmpeg</mark>. Чтобы убрать повторяющиеся кадры в вашем
          видео - скопируйте в терминал команду ниже и выполните её.{" "}
          <b>
            <u>Не забудьте</u>
          </b>{" "}
          подменить значения на нужные.
        </p>
        <code>
          ffmpeg -i INPUT_VIDEO_NAME.mp4 -vf &quot;mpdecimate,setpts=N/FRAME_RATE/TB&quot;
          OUTPUT_VIDEO_NAME.mp4
        </code>
        <ul>
          <li>
            Вместо <mark>INPUT_VIDEO_NAME.mp4</mark> введите абсолютный или относительный
            путь до вашего видео.
            <AdditionInfo>
              <ul>
                <li>
                  <mark className="word">Абсолютный путь</mark> - полный путь до от
                  корневого раздела файловой системы. Например:{" "}
                  <mark className="path">C:/Users/aechat/Downloads/your_video.mp4</mark>.
                </li>
                <li>
                  <mark className="word">Относительный путь</mark> - путь относительно
                  раздела в котором вы сейчас находитесь. Например, если вы находитесь в{" "}
                  <mark className="path">C:/Users/aechat</mark>, а ваш файл{" "}
                  <mark className="file">your_video.mp4</mark> находится в папке{" "}
                  <mark className="path">Downloads</mark>, то вам нужно указать{" "}
                  <mark className="path">Downloads/your_video.mp4</mark>.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            Вместо <mark>FRAME_RATE</mark> введите нужное количество <mark>FPS</mark>.
          </li>
          <li>
            Вместо <mark>OUTPUT_VIDEO_NAME.mp4</mark> введите любое название и контейнер
            для результата конвертации.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="антишум, denoiser, денойз, неат видео"
        title="Чем я могу хорошо подавить шумы на видео?"
      >
        <p>
          Если видео было снято в условиях плохой освещенности и с высоким значением{" "}
          <mark>ISO</mark>, то скорее всего вы столкнётесь с цифровым шумом - дефектом
          изображения, возникающий при съемке из-за несовершенства технологий сенсоров
          камер фотоаппаратов, видеокамер и телефонов, а также из-за фотонной природы
          света. Такой шум часто портит однотонные поверхности - небо, кожу и участки
          теней. Полностью от такого шума избавиться сложно, но можно его существенно
          подавить с помощью различных инструментов и плагинов.
        </p>
        <Divider>Уменьшаем цифровой шум через сторонние плагины</Divider>
        <p>
          Первым в списке из эффективных плагинов для уменьшения шума и мерцаний от
          искусственного освещения находится <mark className="plugin">Neat Video</mark>.
          Он довольно гибко настраивается, подстраивается под различный шум и даже
          поддерживает <mark>GPU-ускорение</mark>.
        </p>
        <YouTubeVideo
          caption="Neat Video"
          link="mwSqzxApy-E"
        />
        <p>
          В качестве альтернативы можно попробовать применить{" "}
          <mark className="plugin">Denoiser III</mark>, который находится в пакете
          плагинов <mark className="plugin">Magic Bullet Suite</mark> от{" "}
          <mark>Red Giant</mark>.
        </p>
        <YouTubeVideo
          caption="Denoiser III"
          link="PXCElU7HcX8"
        />
        <p>
          <mark>Boris FX</mark> тоже не отстаёт от инструментов для подавления цифрового
          шума. В пакете плагинов <mark className="plugin">Boris FX Continuum</mark>
          можно найти два де-нойзера: <mark className="plugin">BCC DeNoise OBS</mark> на
          основе алгоритмов и более свежий <mark className="plugin">BCC+DeNoise ML</mark>,
          основанный на машинном обучении.
        </p>
        <YouTubeVideo
          caption="BCC DeNoise ML"
          link="L1PeaTa13H4"
        />
        <p>
          Этот список сторонних эффектов для шумоподавления заканчивает{" "}
          <mark className="plugin">DE:Noise</mark> от <mark>Re:Vision Effects</mark>.
        </p>
        <YouTubeVideo
          caption="DE:Noise"
          link="tGIXeddCPQM"
        />
        <Divider>Подавляем шумы стандартными средствами After Effects</Divider>
        <p>
          Если вы не хотите использовать сторонние плагины в своём проекте - вы можете
          воспользоваться встроенным эффектом <mark className="plugin">Reduce Grain</mark>
          .
        </p>
        <YouTubeVideo
          caption="Reduce Grain"
          link="FmSTOXu2V6I"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="транскрибация, виспер, whisper, speech to text, речь в текст, субтитры"
        title="Как сгенерировать автоматические субтитры из речи и применить их в мою композицию?"
      >
        <p>
          В наше время популярности вертикальных видео, таких как{" "}
          <mark className="word">Reels</mark>, <mark className="word">Shorts</mark> или{" "}
          <mark className="word">тиктоки</mark>, у пользователей{" "}
          <mark className="app">Adobe After Effects</mark> часто возникает вопрос -{" "}
          <mark className="quote">
            как сделать автоматические субтитры, если я не хочу лезть в Premiere Pro?
          </mark>
          . В <mark className="app">Adobe After Effects</mark>, к сожалению, нет нативной
          возможности генерировать текст из речи, а также нельзя импортировать{" "}
          <mark className="file">SRT</mark> файлы без танцев с бубнами. В этой статье мы
          воспользуемся сторонними средствами для решения этой задачи.
        </p>
        <Divider>Генерируем речь в текст с помощью Subtitle Edit</Divider>
        <AdditionWarning>
          Демонстрируемая программа <mark className="app">Subtitle Edit</mark> для
          редактирования и генерации субтитров доступна только для устройств на{" "}
          <mark>Windows</mark>. Пользователи устройств на <mark>macOS</mark> могут
          воспользоваться альтернативами в виде <mark className="app">MacWhisper</mark>{" "}
          или <mark className="app">Tero Subtitler</mark>.
        </AdditionWarning>
        <p>
          Для начала вам необходимо загрузить <mark className="app">Subtitle Edit</mark>{" "}
          из{" "}
          <a href="https://github.com/SubtitleEdit/subtitleedit/releases">
            страницы релизов на GitHub
          </a>
          , а затем установить программу как обычно. После открытия{" "}
          <mark className="app">Whisper</mark> нам нужно открыть в ней видео или аудио -
          для этого просто перетащите файл в правый нижний угол окна программы.
        </p>
        <ImageFigure
          caption="Subtitle Edit"
          imgSrc="images/subtitle_edit_import.png"
          imgTitle="Импорт видео или аудио в Subtitle Edit"
          styleClass="figure_windows-light"
        />
        <AdditionInfo>
          Если у вас установлен <mark className="app">MPC-HC</mark> или{" "}
          <mark className="app">VLC</mark>, то рекомендую установить этот проигрыватель в
          программе <mark className="app">Subtitle Edit</mark> как стандартный. Это можно
          сделать в <mark className="ui">Options &gt; Settings &gt; Video Player</mark>.
        </AdditionInfo>
        <p>
          Затем перейдите в <mark className="ui">Video</mark> и нажмите на{" "}
          <mark className="ui">Audio to text (Whisper)</mark> или{" "}
          <mark className="ui">Audio to text (Vosk/Kaldi)</mark>. В этой статье будет
          рассматриваться генерация через <mark>Whisper</mark>. После открытия окна вас
          попросят установить <mark className="app">FFmpeg</mark>, а затем{" "}
          <mark>Purfview&apos;s Faster Whisper XXL</mark>, с чем нужно согласиться.
        </p>
        <ImageFigure
          caption="Subtitle Edit"
          imgSrc="images/subtitle_edit_video_audio-to-text.png"
          imgTitle="Функция для генерации субтитров"
          styleClass="figure_windows-light"
        />
        <AdditionInfo>
          <ul>
            <li>
              Если вы сталкиваетесь с проблемами при загрузке - попробуйте использовать{" "}
              <mark className="app">VPN</mark>.
            </li>
            <li>
              Если после установки программа предложит скачать{" "}
              <mark className="ui">Whisper.cpp</mark> - лучше отказаться от его
              скачивания, нажав <mark className="ui">No</mark> в диалоговом окне, так как
              он кривовато работает. После отказа нужно загрузить альтернативный движок{" "}
              <mark>Whisper</mark> для распознавания речи -{" "}
              <mark>Purfview&apos;s Faster Whisper</mark>. Для этого в окне в параметре{" "}
              <mark className="ui">Engine</mark> выберите параметр{" "}
              <mark className="ui">Purfview&apos;s Faster Whisper</mark> и подтвердите
              загрузку.
              <ImageFigure
                caption="Subtitle Edit"
                imgSrc="images/subtitle_edit_change_engine.png"
                imgTitle="Изменение движка распознавания речи"
                styleClass="figure_windows-light"
              />
            </li>
          </ul>
        </AdditionInfo>
        <p>
          Далее нам нужно скачать сам языковой пакет. Для этого рядом с{" "}
          <mark className="ui">Choose Model</mark> нажмите на три точки. В открывшемся
          окне вы можете выбрать любую модель, например <mark>large-v3</mark> или{" "}
          <mark>large-v2</mark>, чтобы вы могли перевести русскоязычную речь в текст с
          относительно хорошей точностью.
        </p>
        <AdditionInfo>
          Чем меньше весит модель, тем быстрее она работает, но при этом может ухудшаться
          точность распознавания речи. Также скорость работы транскрибации зависит от
          мощности вашей видеокарты и скорости чтения жёсткого диска.
        </AdditionInfo>
        <ImageFigure
          caption="Subtitle Edit"
          imgSrc="images/subtitle_edit_download_models.png"
          imgTitle="Загрузка моделей распознавания речи"
          styleClass="figure_windows-light"
        />
        <p>
          Когда модель будет загружена, выберите язык вашего аудио и нажмите{" "}
          <mark className="ui">Generate</mark> - это запустит процесс преобразования речи
          в текст.
        </p>
        <ImageFigure
          caption="Subtitle Edit"
          imgSrc="images/subtitle_edit_change_language_generate.png"
          imgTitle="Изменение языка и начало генерации текста из речи"
          styleClass="figure_windows-light"
        />
        <p>
          После генерации вы можете отредактировать сгенерированные субтитры в{" "}
          <mark className="app">Subtitle Edit</mark> или сразу сохранить их в формате{" "}
          <mark className="file">SRT</mark> для дальнейшей обработки в{" "}
          <mark className="app">Adobe After Effects</mark>. Сохранить ваши субтитры можно
          с помощью комбинации клавиш <mark className="key">Ctrl + S</mark>. В открывшемся
          окне для сохранения файла - укажите название файла, путь для сохранения и, при
          необходимости, формат файла <mark className="file">SRT</mark>.
        </p>
        <Divider>Импортируем файл субтитров в композицию</Divider>
        <p>
          После того как вы сохранили и получили <mark className="file">SRT</mark> файл -
          его нужно импортировать в <mark className="app">Adobe After Effects</mark>. Как
          сказано в начале - стандартными средствами{" "}
          <mark className="app">Adobe After Effects</mark> такой файл субтитров вы не
          сможете импортировать, но никто не запрещал использовать сторонние способы. Для
          этого понадобится стороннее расширение{" "}
          <a href="https://aescripts.com/subtitle-pro/">Subtitle Pro</a>, с помощью
          которого можно импортировать <mark className="file">SRT</mark> файлы как
          текстовые слои в композицию <mark className="app">Adobe After Effects</mark>.
          Если вы корректно установили <mark className="plugin">Subtitle Pro</mark>, то он
          должен появиться в <mark className="ui">Window &gt; Extensions</mark>.
        </p>
        <AdditionWarning>
          Для корректной работы расширения рекомендуется установить чекбокс у параметра{" "}
          <mark className="ui">Allow Scripts to Write Files and Access Network</mark> в
          настройках <mark className="app">Adobe After Effects</mark> -{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Scripting & Expressions</mark>.
        </AdditionWarning>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/subtitlepro_opening.png"
          imgTitle="Открытие расширения Subtitle Pro"
          styleClass="figure_windows-light"
        />
        <p>
          В открывшемся окне расширения <mark className="plugin">Subtitle Pro</mark>{" "}
          нажмите на <mark className="ui">Import</mark> и выберите{" "}
          <mark className="file">SRT</mark>, который вы ранее сохранили. Затем откройте
          или выберите в <mark className="ui">Project</mark> нужную композицию, куда вы
          хотите применить субтитры и нажмите на <mark className="ui">Apply</mark>.
        </p>
        <ImageFigure
          caption="Subtitle Pro"
          imgSrc="images/aftereffects/subtitlepro_import_apply.png"
          imgTitle="Импорт и применение импортированных субтитров"
          styleClass="figure_windows-dark"
        />
        <p>
          После нажатия на <mark className="ui">Apply</mark> вам предложат применить
          различные стили для ваших субтитров. Но к сожалению - не все стили могут
          работать корректно, поэтому рекомендую выбрать{" "}
          <mark className="ui">Classic 01</mark>. В любом случае вы можете позже изменить
          слой на свой лад.
        </p>
        <ImageFigure
          caption="Subtitle Pro"
          imgSrc="images/aftereffects/subtitlepro_select_style.png"
          imgTitle="Выбор стиля субтитров"
          styleClass="figure_windows-light"
        />
        <p>
          После применения в вашей композиции появятся несколько новых слоёв. Контент для
          субтитров хранится в маркерах, поэтому вы можете изменить текст, нажав два раза
          по нему, а также передвинуть и указать точку начала и конца вашего текста.
        </p>
        <VideoFigure
          caption="Adobe After Effects"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/edit_subtitlepro_text.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="кеинг, клинап, убрать фон, keying, зеленый фон, бекграунд зелёнка, синий бэкграунд"
        title="Как и чем можно отделить объект от однотонного фона?"
      >
        <p>
          Предположим, что вы получили или скачали исходники объекта или персонажа на
          зелёном или синем фоне. Чтобы быстро убрать однотонный фон, нам нужно
          воспользоваться инструментами для кенига. Пользоваться{" "}
          <mark className="plugin">Rotobrush</mark> в контексте удаления однотонного фона
          лучше не стоит, так как это только увеличит время работы и результат может в
          принципе не понравиться.
        </p>
        <Divider>Удаляем однотонный фон стандартными средствами After Effects</Divider>
        <AdditionInfo>
          Если вы хотите потренироваться с кеингом зелёного фона - скачайте любое видео из{" "}
          <a href="https://www.youtube.com/playlist?list=PLB62ktMZylCyHxubuonbeZ5VWIYPJMY9J">
            этого плейлиста
          </a>{" "}
          и экспериментируйте.
        </AdditionInfo>
        <p>
          В стандартной поставке <mark className="app">Adobe After Effects</mark> есть
          пресет{" "}
          <mark className="file">Keylight + Key Cleaner + Advanced Spill Suppressor</mark>
          , который закрывает большинство задач по быстрому удалению фона.
        </p>
        <YouTubeVideo
          caption="Keylight + Key Cleaner + Advanced Spill Suppressor"
          link="tK_Z1dYgtxs"
        />
        <p>
          Если у вашего слоя действительно полностью однотонный фон, то вы можете
          воспользоваться эффектом <mark className="plugin">Linear Color Key</mark>, если
          результат не сильно важен в пользу производительности сцены.
        </p>
        <YouTubeVideo
          caption="Linear Color Key"
          link="8RjOe6cO-cY"
        />
        <p>
          Если вы столкнулись с достаточно сложной ситуацией, когда у слоя имеется
          однотонный фон, но объект, который нужно вырезать, почти сливается с ним.{" "}
          <mark className="plugin">Extract</mark>, <mark className="key">Color Key</mark>{" "}
          и подобные эффекты в таком случае вряд ли помогут, так как они забирают с собой
          лишние детали, а прибегать к использованию{" "}
          <mark className="plugin">Rotobrush</mark> не хочется. Поэтому в качестве
          альтернативы вы можете попробовать встроенный эффект{" "}
          <mark className="plugin">Paint Bucket</mark> для заливки однотонного фона в
          более контрастный цвет, а затем прокеить слой любым способом, например
          описанными выше.
        </p>
        <YouTubeVideo
          caption="Paint Bucket Keying"
          link="D7jueRoMt_Q"
        />
        <Divider>Убираем однотонный фон сторонними плагинами</Divider>
        <p>
          Из сторонних инструментов для удаления цветного фона любой сложности можно
          выделить <mark className="plugin">Primatte Keyer</mark>, поставляющийся в пакет
          плагинов <mark className="plugin">Red Giant VFX Suite</mark>.
        </p>
        <YouTubeVideo
          caption="Getting Started with Primatte Keyer"
          link="zYARqiWTArU"
        />
        <p>
          Если вам результат от работы плагина выше не нравится, то попробуйте
          воспользоваться <mark className="plugin">BCC Primatte Studio</mark>, который
          поставляется в стороннем пакете{" "}
          <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <YouTubeVideo
          caption="BCC Primatte Studio"
          link="AaKTHKspAkQ"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="ротобраш, повермейт"
        title="Как я могу отделить объект от фона, если фон не однотонный и сложен для кеинга?"
      >
        <p>
          В век технологий существует много различных инструментов для отделения объекта
          от фона в сложных ситуациях. Например, когда у оператора не было возможности
          снять объект на однотонном фоне, а вырезать объект на пост-обработке нужно.
        </p>
        <Divider>Выделяем объект с помощью встроенного Rotobrush</Divider>
        <p>
          В базовой поставке <mark className="app">Adobe After Effects</mark> давно
          существует прекрасный инструмент <mark className="plugin">Rotobrush</mark>{" "}
          <mark className="key">Alt + W</mark>, который позволяет вырезать объект от фона
          любой сложности. С относительно недавних пор Adobe обновили этот инструмент до
          версии 3.0, в которой улучшили работу ротоскопирования объектов с помощью
          ИИ-моделей и выдаёт довольно хорошие результаты при правильном использовании
          инструмента.
        </p>
        <YouTubeVideo
          caption="Rotobrush"
          link="eoOIrdb_0ko"
        />
        <Divider>Используем сторонние инструменты для ротоскопирования</Divider>
        <p>
          Если результат от <mark className="plugin">Rotobrush</mark> вам не нравится, то
          вы можете воспользоваться сторонним плагином{" "}
          <mark className="plugin">Boris FX Silhouette</mark> в котором есть инструмент{" "}
          <mark className="plugin">Power Matte</mark>.
        </p>
        <YouTubeVideo
          caption="Power Matte in Silhouette"
          link="3pdkJ1BPEg0"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="depth scanner, сканер глубины"
        title="Как и чем я могу сгенерировать карту глубины из видео?"
      >
        <AdditionDanger>
          Все перечисленные способы в этой статье{" "}
          <b>
            <u>очень требовательны</u>
          </b>{" "}
          к мощности видеокарты, объёму видеопамяти и оперативной памяти. Также
          рекомендуется использовать видеокарты от <mark>NVIDIA</mark> для работы, так как
          все эти инструменты используют ядра <mark>CUDA</mark>.
        </AdditionDanger>
        <Divider>Генерируем карту глубины в Adobe After Effects</Divider>
        <p>
          Иногда у вас может возникнуть задача сгенерировать карту глубины из видео,
          например для размытия или затемнения фона, а также для применения различных
          эффектов, которые требуют карту глубины. В{" "}
          <mark className="app">Adobe After Effects</mark> сделать это можно с помощью
          стороннего плагина <mark className="plugin">Depth Scanner</mark>. На выбор есть
          множество настроек по качеству обработки, типу работы, а также выбор различных
          моделей для анализа глубины у слоя.
        </p>
        <YouTubeVideo
          caption="Depth Scanner Plugin Tutorial"
          link="OLV8Q93KKHQ"
        />
        <p>
          В качестве альтернативного плагина вы можете воспользоваться{" "}
          <mark className="plugin">Quick Depth</mark>. Он работает похожим образом, как и
          предыдущий плагин.
        </p>
        <YouTubeVideo
          caption="Introduction Quick Depth 3"
          link="2BvqTIPNVxY"
        />
        <p>
          Также в <mark className="plugin">BorisFX Continuum</mark> с версии{" "}
          <mark>2025.5</mark> и новее добавили{" "}
          <mark className="plugin">BCC+ Depth Map ML</mark>. С его помощью тоже можно
          генерировать карту глубины и делать с помощью этой карты различные эффекты.
        </p>
        <YouTubeVideo
          caption="Instant AI Depth Maps with Continuum"
          link="OVLxRFsnqM8"
        />
        <Divider>Генерируем карту глубины через Depth Anything V2</Divider>
        <p>
          Если вам неудобно работать с этими плагинами для создания карт глубины -
          попробуйте <mark className="app">Depth Anything V2</mark>, который работает
          отдельно от <mark className="app">Adobe After Effects</mark>. С помощью него
          можно генерировать карту глубины как для картинок, так и для видео. Для
          генерации карты глубины для видео больше подойдёт{" "}
          <a href="https://github.com/DepthAnything/Video-Depth-Anything">
            Video Depth Anything
          </a>
          , но в этой статье он рассматриваться не будет, так как{" "}
          <mark className="app">Depth Anything V2</mark> более универсален.
        </p>
        <AdditionWarning>
          Все действия в статье проделываются в операционной системе <mark>Windows</mark>.
          На <mark>macOS</mark> установка <mark className="app">Python</mark> и
          зависимостей для работы <mark className="app">Depth Anything V2</mark> может
          отличаться.
        </AdditionWarning>
        <p>
          Прежде чем скачать и развернуть у себя{" "}
          <mark className="app">Depth Anything V2</mark> - вам нужно установить{" "}
          <mark className="app">Python</mark> версии <mark>3.11.9</mark>. Для того чтобы
          скачать его - перейдите{" "}
          <a href="https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe">
            по этой ссылке
          </a>{" "}
          и подтвердите при необходимости скачивание. Затем откройте установщик,
          установите возле параметра <mark className="ui">Add python.exe to PATH</mark>{" "}
          чекбокс, а потом нажмите на <mark className="ui">Install Now</mark> и ожидайте
          успешной установки. После установки <mark className="app">Python</mark>{" "}
          рекомендую перезагрузить устройство, чтобы переменная среда с{" "}
          <mark className="app">Python</mark> применилась.
        </p>
        <ImageFigure
          caption="Python 3.11.9 (64-bit) Setup"
          imgSrc="images/install_python_3119.png"
          imgTitle="Установка Python 3.11.9"
          styleClass="figure_windows-light"
        />
        <p>
          После установки <mark className="app">Python</mark> нужно скачать сам{" "}
          <mark className="app">Depth Anything V2</mark>. Для этого откройте страницу с{" "}
          <a href="https://github.com/DepthAnything/Depth-Anything-V2">
            репозиторием на GitHub
          </a>
          , нажмите на <mark className="ui">Code</mark> и в контекстном меню нажмите на{" "}
          <mark className="ui">Download ZIP</mark>.
        </p>
        <ImageFigure
          caption="GitHub"
          imgSrc="images/depth_anything_clone_repo.png"
          imgTitle="Клонирование репозитория Depth Anything"
          styleClass="figure_windows-dark"
        />
        <p>
          После успешного скачивания архива с репозиторием - распакуйте его. Для
          корректной распаковки архива рекомендую использовать{" "}
          <mark className="app">WinRAR</mark>. После распаковки архива - откройте
          командную строку и перейдите внутрь распакованной папки с помощью команды{" "}
          <mark className="code">cd диск:/путь/до/файла</mark>. После открытия папки -
          выполните команду <mark className="code">pip install -r requirements.txt</mark>.
          Она установит нужные зависимости для корректной работы данной утилиты.
        </p>
        <AdditionWarning>
          <ul>
            <li>
              На более свежих версиях <mark className="app">Python</mark> у вас могут не
              установиться корректно некоторые нужные зависимости без танцев с бубнами. В
              этой статье используется <mark className="app">Python</mark> версии{" "}
              <mark>3.11</mark>, так как у автора на <mark>3.13</mark> не мог корректно
              установиться <mark>gradio</mark>.
            </li>
            <li>
              Учтите, что в зависимостях устанавливается <mark>Torch</mark> без поддержки{" "}
              <mark>CUDA</mark>, поэтому обработка с помощью видеокарты может не работать
              и будет выполняться на процессоре. Для того, чтобы генерация карты глубины
              работала корректно с помощью вашей видеокарты - нужно удалить существующие
              зависимости с помощью команды{" "}
              <mark className="code">pip uninstall torch torchvision -y</mark>, а затем
              установить те же зависимости, но из другого места -{" "}
              <mark className="code">
                pip install torch torchvision --index-url
                https://download.pytorch.org/whl/cu121
              </mark>
              .
              <li>
                Если у вас видеокарта <mark>Geforce GTX 1000 серии</mark>, то попробуйте
                выполнить{" "}
                <mark className="code">
                  pip install torch torchvision --index-url
                  https://download.pytorch.org/whl/cu118
                </mark>
                , если у вас не заведется.
              </li>
            </li>
            <li>
              Если вы работаете с другими инструментами, работающие с{" "}
              <mark className="app">Python</mark>, например{" "}
              <mark className="app">Stable Diffusion</mark> - советую установить
              зависимости в отдельную виртуальную среду внутри папки с{" "}
              <mark className="app">Depth Anything V2</mark>.{" "}
              <a href="https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/">
                Подробнее...
              </a>
            </li>
          </ul>
        </AdditionWarning>
        <p>
          После успешной установки зависимостей, то есть если у вас не выбило никакую
          ошибку при их загрузке и установке - вам нужно скачать модели для обработки. Их
          несколько -{" "}
          <a href="https://huggingface.co/depth-anything/Depth-Anything-V2-Small/resolve/main/depth_anything_v2_vits.pth?download=true">
            Depth-Anything-V2-Small
          </a>
          ,{" "}
          <a href="https://huggingface.co/depth-anything/Depth-Anything-V2-Base/resolve/main/depth_anything_v2_vitb.pth?download=true">
            Depth-Anything-V2-Base
          </a>{" "}
          и{" "}
          <a href="https://huggingface.co/depth-anything/Depth-Anything-V2-Large/resolve/main/depth_anything_v2_vitl.pth?download=true">
            Depth-Anything-V2-Large
          </a>
          . Вы можете скачать все или только определенную. После скачивания эти модели
          нужно расположить внутри распакованной папки с репозиторием{" "}
          <mark className="app">Depth Anything V2</mark> в подпапку{" "}
          <mark className="path">checkpoints</mark>. По умолчанию её нет, поэтому его
          нужно создать самостоятельно.
        </p>
        <p>
          После установки моделей для работы с{" "}
          <mark className="app">Depth Anything V2</mark> - вы можете начать пользоваться
          им с помощью командной строки. Команда для начала генерации чем-то похожа на{" "}
          <mark className="app">FFmpeg</mark>. В команде ниже нужно будет заменить
          несколько параметров в зависимости от того, что вам нужно.
        </p>
        <ul>
          <li>
            Для генерации карты глубины для <mark className="image">изображения</mark>{" "}
            используется скрипт <mark className="file">run.py</mark>. Для его запуска
            нужно передать несколько входных значений.
            <CodeSnippet>
              {`python .\\run.py --encoder МОДЕЛЬ --img-path ДИСК:\\ПУТЬ\\ДО\\ИСХОДНОГО_ФАЙЛА\\С.РАСШИРЕНИЕМ --outdir ДИСК:\\ПУТЬ\\ДЛЯ\\СОХРАНЕНИЯ\\ --grayscale --pred-only`}
            </CodeSnippet>
          </li>
          <li>
            Для генерации карты глубины для <mark className="video">видео</mark>{" "}
            используется скрипт <mark className="file">run_video.py</mark>. Для его
            запуска нужно передать несколько входных значений.
            <CodeSnippet>
              {`python .\\run_video.py --encoder МОДЕЛЬ --video-path ДИСК:\\ПУТЬ\\ДО\\ИСХОДНОГО_ФАЙЛА\\С.РАСШИРЕНИЕМ --outdir ДИСК:\\ПУТЬ\\ДЛЯ\\СОХРАНЕНИЯ\\ --grayscale --pred-only`}
            </CodeSnippet>
          </li>
          <li>
            <ul>
              <li>
                Вместо <mark className="code">МОДЕЛЬ</mark> вам нужно будет вписать одно
                из трёх значений.
                <ul>
                  <li>
                    <mark className="code">vits</mark> - будет использоваться модель{" "}
                    <mark className="file">Depth-Anything-V2-Small</mark> для генерации
                    глубины.
                  </li>
                  <li>
                    <mark className="code">vitb</mark> - будет использоваться модель{" "}
                    <mark className="file">Depth-Anything-V2-Base</mark> для генерации
                    глубины.
                  </li>
                  <li>
                    <mark className="code">vitl</mark> - будет использоваться модель{" "}
                    <mark className="file">Depth-Anything-V2-Large</mark> для генерации
                    глубины.
                  </li>
                </ul>
              </li>
              <li>
                Вместо{" "}
                <mark className="code">ДИСК:\ПУТЬ\ДО\ИСХОДНОГО_ФАЙЛА\С.РАСШИРЕНИЕМ</mark>{" "}
                вам нужно будет указать <mark className="word">полный</mark> или{" "}
                <mark className="word">относительный</mark> путь до нужного вам видео.
              </li>
              <li>
                Вместо <mark className="code">ДИСК:\ПУТЬ\ДЛЯ\СОХРАНЕНИЯ\</mark> вам нужно
                будет указать <mark className="word">полный</mark> или{" "}
                <mark className="word">относительный</mark> путь для сохранения
                полученного файла.
              </li>
              <li>
                Вы можете указать необязательный аргумент{" "}
                <mark className="code">--grayscale</mark>, который даёт вам карту глубины
                в чёрно-белом варианте. Без этого аргумента вы получите файл с
                сине-красным оттенком, будто тепловизор.
              </li>
              <li>
                Вы можете указать необязательный аргумент{" "}
                <mark className="code">--pred-only</mark>, который сохранит только карту
                глубины. Без этого аргумента вы получите{" "}
                <mark className="word">side-by-side</mark> видео, где слева будет карта
                глубины, а справа - оригинальный файл.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          После успешного выполнения скрипта вы получите в нужном месте файл с картой
          глубины в соответствии с заданными вами параметрами. Его вы можете использовать
          в <mark className="app">Adobe After Effects</mark> или где-нибудь ещё.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="удалить цвет, убрать фон, кеинг, экстракт, анмульт, унмульт"
        title="Как и чем можно вырезать белый или чёрный цвет у слоя?"
      >
        <p>
          Для удаления чёрного и белого фона есть встроенный эффект{" "}
          <mark className="plugin">Extract</mark>, который входит в стандартную поставку{" "}
          <mark className="app">Adobe After Effects</mark>. С помощью него можно вырезать
          светлые и тёмные тона по яркостной шкале. Этот эффект хорошо подходит для
          отделения от фона простых объектов. Но! Если вы попытаетесь использовать его,
          например, на композиции с эффектом взрыва или сложными частицами - вы получите
          неприятную кашу.
        </p>
        <YouTubeVideo
          caption="Extract"
          link="v7pqZ9gtn8I"
        />
        <p>
          Если результат от стандартного эффекта не удовлетворяет вас (как раз из-за
          каши), то можно воспользоваться сторонним эффектом{" "}
          <mark className="plugin">uni.unmult</mark>, который поставляется в пакет
          плагинов <mark className="plugin">Red Giant Universe</mark>. Он достаточно
          хорошо убирает тёмные или светлые оттенки, если включен параметр{" "}
          <mark className="ui">Invert</mark>. Плагин делает слой прозрачным, что позволяет
          применить футаж поверх любой композиции.{" "}
        </p>
        <AdditionWarning>
          С некоторыми футажами может появиться ощущение, что слой слишком прозрачный, чем
          хотелось бы. В качестве костыльного способа можно просто продублировать нужный
          слой с применённым эффектом и привязать их друг к другу, если необходимо.
        </AdditionWarning>
        <YouTubeVideo
          caption="Red Giant Universe Unmult"
          link="GGjIu0CZ1M4"
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
          caption="How to Use Luma Mattes"
          link="ltrGC0kDFic"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="tracking, камера трекер, трекинг, мокка"
        title="Как и чем можно прицепить слой к объекту на видео?"
      >
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
              раскройте <mark className="ui">Auto-Scale</mark> и установите приемлемое для
              вас значение <mark className="ui">Maximum Scale</mark>. Слишком большие
              значения в <mark className="ui">Smoothness</mark> могут превратить вашу
              картинку в непонятное желе. Экспериментируйте с умом!
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
          caption="Motion Tracking"
          link="tqWWhChc8RA"
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
          caption="3D Camera Tracker"
          link="yaT3YwIK-BI"
        />
        <p>
          Если результат от способов выше не понравился, то не время унывать. В
          стандартной поставке <mark className="app">Adobe After Effects</mark> есть
          прекрасный инструмент для планарного трекинга под названием{" "}
          <mark className="plugin">Mocha AE</mark>. Он будет несколько урезанней, нежели
          его полноценная версия под названием <mark className="plugin">Mocha Pro</mark>,
          которую надо устанавливать отдельно, но базовые вещи для наложения слоя с
          движением на исходное видео выполнить может.
        </p>
        <YouTubeVideo
          caption="Mocha AE For Beginners"
          link="be_8uRcyiEs"
        />
        <AdditionInfo>
          Если у вас слой после переноса трекинга из <mark className="plugin">Mocha</mark>{" "}
          куда то улетает - проверьте разрешение слоя, который вы собираетесь разместить и
          сравните его с разрешением вашей композиции. Если они отличаются - слой так и
          будет улетать. Для исправления этого недочёта - примените{" "}
          <a href="files/Mocha_data_rescale_import.ffx">пресет по этой ссылке</a> от{" "}
          <a href="https://t.me/Pavelusha">@Pavelusha</a> на слой, на котором добавлен{" "}
          <mark className="plugin">Corner Pin</mark>. В применённом пресете вам нужно
          выбрать в <mark className="ui">Source Layer</mark> тот слой, на котором тречили
          данные. При правильном использовании ваша вставляемая картинка переместится куда
          надо.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="креате нульс фром патч, создание нулей из пути, create nulls from path"
        title="Как мне сделать точки у шейпового слоя управляемыми с помощью 'нулевых слоёв'?"
      >
        <p>
          Предположим, что вы создали некий шейповый слой или маску и вы хотите
          анимировать этот слой через Path. Но через некоторое время вы понимаете, что
          дёргание Path порой бывает неудобным и муторным.
        </p>
        <p>
          Для упрощения анимации масок и фигурных слоёв в базовой поставке{" "}
          <mark className="app">Adobe After Effects</mark> добавлен разработчиками скрипт{" "}
          <mark className="file">Create Nulls From Path.jsx</mark>, который создаёт нули
          для контроля точек фигуры. Его можно открыть с помощью{" "}
          <mark className="ui">Window &gt; Create Nulls From Path.jsx</mark> в конце
          выпадающего меню.
        </p>
        <YouTubeVideo
          caption="Animating with Create Nulls From Path"
          link="Unnvx0alhyw"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="stroke, строук, автотрейс, авто-трассировка"
        title="Как сделать обводку слоя?"
      >
        <p>
          Есть два быстрых способа для создания обводки: через{" "}
          <mark className="ui">Auto-trace</mark> и через{" "}
          <mark className="ui">Layer Style</mark>.
        </p>
        <Divider>Создаём обводку с помощью Layer Style</Divider>
        <p>
          Начнём с первого способа - через <mark className="ui">Layer Style</mark>. Для
          этого вам нужно выделить ваш слой в окне предпросмотра или в таймлайне, нажать{" "}
          <mark className="key">ПКМ</mark> и выбрать в контекстном меню{" "}
          <mark className="ui">Layer Style &gt; Stroke</mark>. После этого вы можете
          раскрыть свойства обводки и изменить ему цвет, прозрачность или размер.
        </p>
        <VideoFigure
          caption="Создание обводки через Layer Style"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/stroke_layer-style.mp4"
        />
        <Divider>Создаём обводку с помощью авто-трассировки</Divider>
        <p>
          Второй способ, через <mark className="ui">Auto-Trace</mark>, будет чуть
          посложнее. Вам нужно будет создать маску с помощью функции авто-трассировки. Для
          этого вам нужно выделить слой, перейти в{" "}
          <mark className="ui">Layer &gt; Auto-Trace</mark>. В новом окне вы можете
          выбрать диапазон работы авто-трассировки: создать маску только с текущего кадра
          или в пределах рабочей области, то есть создать маску покадрово. Затем у нас
          сгенерируется маска на новом слое. Также можно выбрать на основе чего создавать
          трассировку: из альфа-канала, яркости или определённого цвета. Вы можете
          применить маску сразу на выделенный слой, убрав в окне чекбокс с параметра{" "}
          <mark className="ui">Apply to new layer</mark>. После настройки просто нажмите
          на кнопку <mark className="ui">OK</mark> и примените эффект{" "}
          <mark className="plugin">Stroke</mark> на слой с созданной маской.
        </p>
        <VideoFigure
          caption="Создание обводки через Auto-Trace и эффекта Stroke"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/stroke_auto-trace.mp4"
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
      <DetailsSummary
        tag="морфинг фигур"
        title="Как и чем сделать анимацию толщины variable-шрифта?"
      >
        <p>
          Для анимации шрифта от тонкого начертания до жирного используется техника
          морфинга фигур. В видео ниже создаются два текстовых слоя, расположенных друг на
          друге, из которых создают шейповый слой и делают анимацию движения Path. За счёт
          этого получается красивая и быстрая анимация смены толщины текста.
        </p>
        <YouTubeVideo
          caption="Smooth Typo Transition from Bold Text to Thin Text"
          link="yyDAFSC2qDo"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="персонажная анимация, дюик, паппет тулс, рабберхос, лимбер, чарактер тул"
        title="Какими средствами и плагинами обычно делают анимацию 2D-персонажей?"
      >
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
          caption="Сравнение популярных плагинов для персонажной анимации"
          link="AcEIT03Mrzk"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="биты, create audio from keyframes, ключи из аудио"
        title="Как мне быстро расставить ключи и маркеры под бит, желательно автоматически?"
      >
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
          В <mark className="app">Adobe After Effects</mark> вы можете сгенерировать ключи
          с помощью <mark className="key">ПКМ</mark> по слою с аудиофайлом и нажатия на{" "}
          <mark className="ui">Keyframe Assistant &gt; Convert Audio to Keyframes</mark>.
        </p>
        <ImageFigure
          caption="Генерация ключей из аудиодорожки"
          imgSrc="images/aftereffects/convert_audio_to_keyframes.png"
          imgTitle="Генерация ключей из аудиодорожки"
          styleClass="figure_windows-dark"
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
          caption="Как пользоваться Sound Keys в Adobe After Effects"
          link="uqKFsIHu-DA"
        />
        <p>
          Хоть <mark className="plugin">Sound Keys</mark> и даёт хороший результат за счёт
          возможности гибкой настройки, но с помощью него нельзя автоматически поставить
          маркеры на композиции под биты. На помощь приходит ещё один сторонний плагин -{" "}
          <mark className="plugin">Beat Edit</mark>, который как раз и выполняет эту
          задачу.
        </p>
        <YouTubeVideo
          caption="Как создавать маркеры с помощью Beat Edit"
          link="JGVLRcjp7ss"
        />
        <AdditionInfo>
          Плагины, приведённые в этой статье можно скачать из канала{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> или из канала{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="unprecompose, распрекомпозить, раскомпозить"
        title="Как распаковать созданную прекомпозицию?"
      >
        <p>
          Бывают случаи, когда вы сделали несколько прекомпозиций, а потом внезапно вам
          понадобилось их распаковать. И порой не хочется заходить в каждую композицию,
          прожимать <mark className="key">Ctrl + A</mark> для выделения всех слоёв,{" "}
          <mark className="key">Ctrl + C</mark> для копирования слоёв, переходить в
          родительскую композицию и нажимать на <mark className="key">Ctrl + V</mark>,
          особенно когда надо сделать так с большой кучей композиций.
        </p>
        <p>
          Для решения этой нудной проблемы был создан бесплатный<sup>1</sup> плагин{" "}
          <a href="https://aescripts.com/un-precompose/">Un-precompose</a>. После его
          установки он появится в <mark className="ui">Layer &gt; Un-precompose</mark>.
          Чтобы эта кнопка работала - нужно выделить композиции, которые вы хотите
          распаковать.
        </p>
        <AdditionInfo>
          <sup>1</sup> Чтобы скачать скрипт - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с плагином,
          установите цену <mark>0</mark> в <mark className="ui">Name Your Own Price</mark>
          , добавьте его в корзину и подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
        <VideoFigure
          caption="Распаковка нескольких прекомпозиций с помощью Un-precompose"
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/unprecompose_demonstration.mp4"
        />
        <AdditionWarning>
          Прежде чем распаковывать таким образом композиции, учтите, что ссылки внутри
          эффектов и внутри выражений, например ссылка на слой в{" "}
          <mark className="plugin">Displacement Map</mark>, могут слететь.
        </AdditionWarning>
        <Divider>Используем AEUX</Divider>
        <p>
          Несмотря на то, что главное предназначение <mark className="plugin">AEUX</mark>{" "}
          - переносить макеты из <mark className="app">Figma</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>, в нём есть и несколько
          инструментов для работы с композициями. Через него можно распаковать выделенные
          композиции на таймлайне с помощью кнопки <mark className="ui">Un-Precomp</mark>.
        </p>
        <ImageFigure
          caption="AEUX"
          imgSrc="images/aftereffects/aeux_un-precomp.png"
          imgTitle="Un-Precomp в AEUX"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Скачать <mark className="plugin">AEUX</mark> вы можете на странице релизов в{" "}
          <a href="https://github.com/google/AEUX/releases">GitHub</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="декомпозить текст, текст в слои"
        title="Как разбить текстовый слой на отдельные слои с буквами, словами или строками?"
      >
        <p>
          Для быстрого разделения текстового слоя на буквы или строки существует сторонний
          скрипт <a href="https://aescripts.com/decomposetext/">DecomposeText</a>
          <sup>1</sup>. С помощью него можно сгенерировать из одного текстового слоя сразу
          несколько слоёв с отдельными буквами для более точной анимации текста.
        </p>
        <AdditionInfo>
          <sup>1</sup> Чтобы скачать скрипт - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с плагином,
          установите цену <mark>0</mark> в <mark className="ui">Name Your Own Price</mark>
          , добавьте его в корзину и подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
        <VideoFigure
          caption="Разделяем текстовый слой на слова с помощью DecomposeText"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/decomposetext.mp4"
        />
        <AdditionWarning>
          Скрипт не поддерживает текст, созданный как <mark>Paragraph Text</mark>. Для
          этого вам нужно будет его конвертировать в <mark>Point Text</mark>, выбрав
          инструмент <mark className="ui">Text</mark> и нажав на{" "}
          <mark className="key">ПКМ</mark> по текстовому слою в предпросмотре. В
          открывшемся контекстном меню нужно выбрать{" "}
          <mark className="ui">Convert to Point Text</mark>.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary
        tag="компсеттер, rd:compsetter"
        title="Как изменить параметры у нескольких композиций одновременно?"
      >
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
          caption="Демонстрация работы rd: Comp Setter"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/rd_compsetter_demonstration.mp4"
        />
        <p>Вот и всё, теперь ваши выделенные композиции приведены к общему виду.</p>
      </DetailsSummary>
      <DetailsSummary
        tag="аджастмент леер, корректирующий слой не для всех слоёв"
        title="Как применить Adjustment Layer только на конкретные слои?"
      >
        <p>
          Изначально в <mark className="app">Adobe After Effects</mark>, к сожалению, нет
          возможности применить корректирующий слой только на определённые слои под ним. В
          таком случае нужные слои надо переносить на другое место по иерархии в таймлайне
          или городить костыли в виде масок.
        </p>
        <p>
          В этой статье мы будем <mark className="word">костылить</mark> с помощью масок.
          Для этого нам понадобится сторонний эффект{" "}
          <mark className="plugin">Supercomp</mark>, поставляемый в пакете плагинов{" "}
          <mark className="plugin">VFX Suite</mark> от <mark>Red Giant</mark>. В нём нам
          нужно обесцветить наши слои и сделать их супер яркими, чтобы сделать из них
          маску.
        </p>
        <VideoFigure
          caption="Демонстрация работы Supercomp для создания маски"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/supercomp_demonstration.mp4"
        />
        <p>
          Если вы не хотите ставить <mark className="plugin">VFX Suite</mark>, то вы
          можете создать маску просто создав прекомпозицию из нужных слоёв и накинуть на
          них <mark className="plugin">Fill</mark> или обесцветить и сделать их ярче.
        </p>
        <AdditionWarning>
          Со сложными слоями такой способ может не прокатить, экспериментируйте с умом.
        </AdditionWarning>
        <VideoFigure
          caption="Создание самодельных масок для дальнейшей работы"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/supercomp_without_plugins.mp4"
        />
      </DetailsSummary>
    </div>
  );
};

export default AEActions;
