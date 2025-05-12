import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {Divider} from "antd";

const PRActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Actions.tsx" />
      <DetailsSummary title="Чем бы мне улучшить качество исходников?">
        <p>
          В наше время существует множество различных способов для улучшения качества
          видеоматериалов с помощью искусственного интеллекта. Все эти методы обычно
          предполагают локальную обработку материалов на вашем компьютере, поэтому
          мощность компьютера играет важную роль: если у вас слабый ПК или
          непроизводительная видеокарта - могут возникнуть проблемы с производительностью.
        </p>
        <p>
          Одним из хороших плагинов для <mark className="app">Adobe Premiere Pro</mark> по
          улучшению качества могу назвать <mark className="plugin">BCC UpRes ML</mark> в
          пакете плагинов <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <YouTubeVideo
          caption="BCC UpRes ML"
          link="_gHNqhHfeck"
        />
        <p>
          Далее могу посоветовать программу <mark className="app">Topaz Video AI</mark>.
          Она позволяет улучшить качество видео за счёт различных алгоритмов и моделей.
          Если у вас есть достаточно времени для экспериментов - можно добыть из плохого
          исходника вполне себе хорошее качество изображения. Программа распространяется
          как Standalone, плагин для <mark className="app">Adobe Premiere Pro</mark>{" "}
          отсутствует.
        </p>
        <YouTubeVideo
          caption="Topaz Video AI"
          link="zbX7x8Oo_Uc"
        />
        <AdditionInfo>
          Скачать программу <mark className="app">Topaz Video AI</mark>, а также пакет
          плагинов <mark className="plugin">Boris FX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="слоумо, твикстор, топаз, ретаймер, тайм ремапинг, плавное замедление, флоуфреймс"
        title="Чем можно плавно замедлить видео?"
      >
        <p>
          Бывают случаи, когда перед монтажёром встаёт задача сделать видео более
          медленным, сохраняя плавность движения и избегая рывков. Особенно это актуально,
          если исходный материал имеет невысокий фреймрейт.
        </p>
        <p>
          Для достижения плавного замедления мы рассмотрим популярные инструменты и
          программы, которые могут помочь интерполировать уже существующие кадры. Это
          позволит добавить дополнительные кадры в видео, а значит появляется возможность
          замедлять видео без заметных рывков.
        </p>
        <p>
          Первым плагином для <mark className="app">Adobe Premiere Pro</mark> в этом
          списке является <mark className="plugin">Twixtor</mark>. Он вышел достаточно
          давно, хорошо зарекомендовал себя в монтаже и имеет много настроек.
        </p>
        <YouTubeVideo
          caption="Twixtor"
          link="20Smtrzt3m4"
        />
        <p>
          С относительно недавних пор в <mark className="plugin">Boris FX Continuum</mark>{" "}
          тоже добавили некий аналог <mark className="plugin">Twixtor</mark> на основе ИИ.
          Называется <mark className="plugin">BCC Retimer ML</mark> и в сравнении с{" "}
          <mark className="plugin">Twixtor</mark> выдаёт гораздо лучшие результаты.
        </p>
        <YouTubeVideo
          caption="BCC Retimer ML"
          link="YraSxOpy1Qg"
        />
        <p>
          Если вы не хотите замедлять видео в{" "}
          <mark className="app">Adobe Premiere Pro</mark> или если плагины вызывают
          различные ошибки при рендере, то можно воспользоваться сторонними программами.
          Например, с помощью программы <mark className="app">FlowFrames</mark> можно
          создать копию вашего видео с повышенной частотой кадров через интерполирование и
          сохранить его на вашем диске для дальнейшей работы.
        </p>
        <YouTubeVideo
          caption="FlowFrames"
          link="H8ISNjzDULw"
        />
        <p>
          Или с помощью <mark className="app">FrameGUI</mark>.
        </p>
        <YouTubeVideo
          caption="FrameGUI"
          link="Axz_KwiqNmc"
        />
        <p>
          Ну или замедлить через <mark className="app">Topaz Video AI</mark>. В этой
          программе также можно улучшить качество исходников за счёт искусственного
          интеллекта.
        </p>
        <YouTubeVideo
          caption="Topaz Video AI"
          link="591MqOooDAE"
        />
        <AdditionInfo>
          Действия на видео, приведённые выше, могут отличаться в зависимости от версии
          программы или плагина. Некоторые плагины или программы вы можете скачать в
          канале <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> по
          хештегам <mark className="tag">#twixtor</mark>,{" "}
          <mark className="tag">#continuum</mark> или <mark className="tag">#topaz</mark>.
        </AdditionInfo>
        <p>
          Стандартными средствами <mark className="app">Adobe Premiere Pro</mark> тоже
          можно замедлить видео, правда результат будет не таким хорошим, как хотелось бы.
          Для этого выделите нужный клип, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + R</mark> и растяните видео на нужную длину. В
          параметре <mark className="ui">Time Interpolation</mark> можно выбрать три типа
          интерполяции: <mark className="ui">Frame Sampling</mark>,{" "}
          <mark className="ui">Frame Blending</mark> или{" "}
          <mark className="ui">Optical Flow</mark>.
        </p>
        <YouTubeVideo
          caption="How to Use Optical Flow"
          link="JemBgoF3K6Q"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем можно хорошо подавить шумы на видео?">
        <p>
          Когда вы снимаете видео в условиях низкой освещенности или с высоким ISO - вы
          неизбежно столкнётесь с цифровым шумом, дефектом изображения, возникающий при
          съемке из-за несовершенства матрицы (сенсора) камеры. Цифровой шум - это
          избыточный сигнал, который появляется на изображении, когда матрица камеры
          пытается уловить источники света. Особенно он заметен на однотонных поверхностях
          - небо, кожа и в участках теней.
        </p>
        <p>
          Полностью избавиться от шумов и мерцаний на видео сложно, но с помощью различных
          инструментов и плагинов можно существенно уменьшить их проявление. Одним из
          наиболее эффективных плагинов для подавления шумов могу назвать{" "}
          <mark className="plugin">Neat Video</mark>.
        </p>
        <YouTubeVideo
          caption="Neat Video"
          link="DYKBQF7eIUo"
        />
        <p>
          У Red Giant тоже есть свой де-нойзер под названием{" "}
          <mark className="plugin">Denoiser III</mark>, который находится в пакете
          плагинов <mark className="plugin">Magic Bullet Suite</mark>.
        </p>
        <YouTubeVideo
          caption="Denoiser III"
          link="PXCElU7HcX8"
        />
        <p>
          И Boris FX тоже не отстаёт от инструментов для подавления шумов. В пакете
          плагинов <mark className="plugin">Boris FX Continuum</mark> можно найти два
          де-нойзера - <mark className="plugin">BCC DeNoise OBS</mark> на основе
          алгоритмов и относительно новый <mark className="plugin">BCC+DeNoise ML</mark>,
          основанный на машинном обучении.{" "}
        </p>
        <YouTubeVideo
          caption="BCC DeNoise ML"
          link="L1PeaTa13H4"
        />
        <p>
          Ну и куда же без Re:Vision Effects с их <mark className="plugin">DE:Noise</mark>
          .
        </p>
        <YouTubeVideo
          caption="DE:Noise"
          link="tGIXeddCPQM"
        />
        <p>
          Если вам не хочется заморачиваться с сторонними плагинами, но хотите немного
          подавить шум на видео - воспользуйтесь встроенным эффектом{" "}
          <mark className="plugin">VR De-Noise</mark>.
        </p>
        <YouTubeVideo
          caption="VR De-Noise"
          link="hr7qFhh6Y5g"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="кеинг, клинап, убрать фон"
        title="Какими средствами обычно удаляют зелёный или синий фон?"
      >
        <p>
          Допустим, у вас есть видеоматериал с объектом или персонажем на зелёном фоне,
          который требуется удалить. Для этого существует множество инструментов и техник,
          которые помогут вам справиться с этой задачей.
        </p>
        <AdditionInfo>
          Если вы хотите потренироваться с кеингом зелёного фона - скачайте любое видео из{" "}
          <a href="https://www.youtube.com/playlist?list=PLB62ktMZylCyHxubuonbeZ5VWIYPJMY9J">
            этого плейлиста
          </a>{" "}
          и экспериментируйте.
        </AdditionInfo>
        <p>
          В <mark className="app">Adobe Premiere Pro</mark> легко убрать зелёный фон,
          используя встроенный эффект
          <mark className="file">Ultra Key</mark>.
        </p>
        <YouTubeVideo
          caption="Ultra Key"
          link="c_P8s3r1dXE"
        />
        <AdditionInfo>
          Плагины ниже демонстрируются в <mark className="app">Adobe After Effects</mark>.
          Все эти действия можно повторить и в{" "}
          <mark className="app">Adobe Premiere Pro</mark>, принцип работы мало чем
          отличается.
        </AdditionInfo>
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
          Если результат от работы плагина выше не нравится - есть{" "}
          <mark className="plugin">BCC Primatte Studio</mark>, поставляющийся в пакете{" "}
          <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <YouTubeVideo
          caption="BCC Primatte Studio"
          link="AaKTHKspAkQ"
        />
      </DetailsSummary>
      <DetailsSummary title="Как мне быстро расставить маркеры под бит, желательно автоматически?">
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
          Чтобы быстро расставить маркеты приходит сторонний плагин{" "}
          <mark className="plugin">Beat Edit</mark>, который как раз и выполняет эту
          задачу.
        </p>
        <YouTubeVideo
          caption="Как создавать маркеры с помощью Beat Edit"
          link="JGVLRcjp7ss"
        />
        <AdditionInfo>
          Плагин, приведённый в этой статье можно скачать из канала{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="транскрибация, subtitle, речь в текст, speech to text"
        title="Как сделать автоматические субтитры для видео?"
      >
        <p>
          В <mark className="app">Adobe Premiere Pro</mark> с версии 2022 и новее добавили
          поддержку автоматического перевода текста в речь. Работает как и на лицензионных
          версиях, так и на &quot;народных&quot;.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              На <mark className="word">народных</mark> версиях обычно языковые пакеты не
              поставляются вместе с дистрибутивом, чтобы не раздувать размер установщика.
              Их можно загрузить отдельно по запросу{" "}
              <mark className="copy">Speech To Text</mark> именно для вашей версии{" "}
              <mark className="app">Adobe Premiere Pro</mark>.
              <AdditionInfo>
                Языковые пакеты вы можете скачать в канале{" "}
                <a href="https://t.me/+Qd9xu7A4TeIwNzY6">
                  склад стройматериалов (Windows)
                </a>{" "}
                по хештегу <mark className="tag">#speechtotext</mark> или в канале{" "}
                <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> по
                поиску <mark className="tag">Speech To Text</mark>.
              </AdditionInfo>
            </li>
            <li>
              Если вы установите языковой пакет, который предназначен для версии{" "}
              <mark className="app">Adobe Premiere Pro</mark>, отличной от вашей - вы
              просто забьёте ваше устройство лишним весом, а язык не будет установлен и
              будет постоянно просить его скачать в программе. То есть, если у вас
              установлен <mark className="app">Adobe Premiere Pro</mark> версии{" "}
              <mark>24.6</mark>, а языковой пакет, который вы скачали и установили -
              предназначен для <mark>24.1</mark>, то в вашей версии программы он попросту
              не появится.
              <AdditionInfo>
                Информацию о текущей сборке программы вы можете узнать в{" "}
                <mark className="ui">Help &gt; About Premiere Pro</mark>.
              </AdditionInfo>
            </li>
            <li>
              Языковые пакеты могут не установиться корректно, если{" "}
              <mark className="app">Adobe Premiere Pro</mark> расположен в нестандартном
              пути установки, то есть отличном от{" "}
              <mark className="path">C:\Program Files\Adobe</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <Divider>Генерируем субтитры из речи в Premiere Pro</Divider>
        <p>
          Предположим, что вы уже установили языковые пакеты для конкретно вашей версии{" "}
          <mark className="app">Adobe Premiere Pro</mark> и нужно приступить к
          транскрибации аудио файла и созданию субтитров. Для этого откройте окно{" "}
          <mark className="ui">Text</mark> через контекстное меню в{" "}
          <mark className="ui">Window</mark>. Затем в открывшемся окне в вкладке{" "}
          <mark className="ui">Transcribe</mark> нажмите на три точки в углу и выберите
          функцию <mark className="ui">Generate static transcript</mark>.
        </p>
        <ImageFigure
          caption="Text"
          imgSrc="images/premierepro/text_generate_static_transcript.png"
          imgTitle="Начало генерации текста на основе речи"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне выберите язык, на котором говорит голос из аудио, параметр
          разделения дикторов (делить или не делить) и дополнительные параметры, которые
          доступны при некоторых факторах.
        </p>
        <ImageFigure
          caption="Generate static transcript"
          imgSrc="images/premierepro/generate_transcribe_settings.png"
          imgTitle="Настройки генерации текста на основе речи"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого подождите некоторое время и вы получите какую-никакую расшифровку
          текста для аудио. На основе этих данных вы можете создать субтитры, выбрав в
          трёх точках <mark className="ui">Create Captions</mark>, подредактировать их или
          перемещаться в тот промежуток времени, в котором диктор говорит определённую
          фразу.
        </p>
        <ImageFigure
          caption="Text"
          imgSrc="images/premierepro/create_captions_from_transcribe.png"
          imgTitle="Создание субтитров на основе генерации текста"
          styleClass="figure_windows-dark"
        />
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
          Затем перейдите в <mark className="ui">Video</mark> и выберите параметр{" "}
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
          <mark className="file">.srt</mark> для дальнейшей обработки в{" "}
          <mark className="app">Adobe After Effects</mark>. Сохранить ваши субтитры можно
          с помощью комбинации клавиш <mark className="key">Ctrl + S</mark>. В открывшемся
          окне для сохранения файла - укажите название файла, путь для сохранения и, при
          необходимости, формат файла <mark className="file">.srt</mark>.
        </p>
        <Divider>Импортируем файл субтитров в секвенцию</Divider>
        <p>
          После сохранения файла нам нужно перейти обратно в{" "}
          <mark className="app">Adobe Premiere Pro</mark>. В программе нужно вернуться к
          окну <mark className="ui">Text</mark> и нажать на три точки в правом верхнем
          углу. Далее нужно перейти во вкладку <mark className="ui">Captions</mark>,
          нажать на кнопку <mark className="ui">Import captions from file</mark> и указать
          путь до наших недавно сохранённых субтитров.
        </p>
        <ImageFigure
          caption="Text"
          imgSrc="images/premierepro/import_captions_from_file.png"
          imgTitle="Импорт субтитров в Adobe Premiere Pro"
          styleClass="figure_windows-dark"
        />
        <p>
          Затем в открывшемся модальном окне выберите тип субтитров и вариант, от чего
          начинать субтитры, а затем нажмите на <mark className="ui">OK</mark>.
        </p>
        <ImageFigure
          caption="New caption track"
          imgSrc="images/premierepro/new_caption_track.png"
          imgTitle="Создание новой дорожки субтитров"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого сгенерированные субтитры из{" "}
          <mark className="app">Subtitle Edit</mark> попадут в ваш проект{" "}
          <mark className="app">Adobe Premiere Pro</mark>. Субтитры можно отредактировать
          в дальнейшем в окне <mark className="ui">Text</mark> во вкладке{" "}
          <mark className="ui">Captions</mark>. При необходимости вы можете применить
          различные стили на ваши субтитры с помощью сторонних плагинов{" "}
          <mark className="plugin">Submachine</mark> или{" "}
          <mark className="plugin">Captioneer</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем разделить голос человека от музыки?">
        <p>
          В век различных технологий по обработке звука обычному пользователю наконец-то
          стала доступна возможность разделить голос и &quot;инструментал&quot; на разные
          дорожки с помощью искусственного интеллекта. Онлайн-сервисы здесь рассматривать
          даже не хочется, так как часто они предлагают &quot;очень смешные&quot; условия
          для бесплатных пользователей: либо один файл в день, либо только для
          прослушивания без дальнейшего скачивания.
        </p>
        <p>
          <mark className="app">StemRoller</mark>, наверное, самая адекватная и локальная
          программа для разделения трека на 4 или 6 дорожек (биты, инструментал, бас и
          голос). Скачать его можно{" "}
          <a href="https://www.stemroller.com/">по этой ссылке</a> для устройств на{" "}
          <mark>Windows</mark> и <mark>macOS</mark>.
        </p>
        <p>
          После распаковки архива с программой, его можно открыть и спокойно закинуть в
          него свой аудио-файл. После обработки ваше аудио будет расположено в папку,
          которая указана в настройках программы. Также его можно открыть, нажав на
          элемент очереди файлов.
        </p>
        <ImageFigure
          caption="StemRoller"
          imgSrc="images/stemroller_interface.png"
          imgTitle="Главная страница StemRoller"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Скорость обработки аудио-файла зависит от мощности вашего устройства, обычно оно
          максимум занимает 2-3 минуты. Если вы сталкиваетесь с трудностями в обработке,
          то попробуйте переключить обработку на процессоре в настройках программы.
        </AdditionWarning>
        <p>
          Если же вам всё-таки нужен онлайн-сервис для разделения музыки от голоса, то вы
          можете воспользоваться <a href="https://vocalremover.org/ru/">Vocalremover</a>.
          Сервис предлагает пользователям без подписки обработку одного аудио-файла в
          день.
        </p>
        <AdditionWarning>
          После обработки сразу сохраните обработанные аудио-файлы, чтобы их не потерять.
          Сервис не предусматривает возможность восстановления аудио-файлов после закрытия
          или смены страницы.
        </AdditionWarning>
      </DetailsSummary>
    </div>
  );
};

export default PRActions;
