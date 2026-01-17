import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PRActions: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        anchor="upscale-video-photo"
        tag="апскейл, topaz, улучшение качества, резкость, цветокоррекция, нейросети"
        title="Какими средствами можно улучшить качество исходников?"
      >
        <p>
          В последнее время появилось множество инструментов с использованием
          искусственного интеллекта, которые могут помочь вам улучшить качество видео. Все
          описанные методы работают локально на вашем устройстве, поэтому для их
          корректной работы потребуется производительная видеокарта и мощный процессор.
        </p>
        <Addition type="info">
          Интерфейс и действия в приведённых ниже видео могут отличаться в зависимости от
          версии программы или плагина.
        </Addition>
        <Divider>Улучшаем качество видео</Divider>
        <p>
          Если вы хотите повысить качество исходного материала прямо в{" "}
          <mark className="app">Adobe Premiere Pro</mark>, попробуйте применить к слою
          эффект <mark className="plugin">BCC+UpRes ML</mark>, который входит в сторонний
          пакет <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <ContentFigure
          caption="BCC UpRes ML"
          src="_gHNqhHfeck"
          type="youtube"
        />
        <p>
          В качестве альтернативы можно посоветовать программу{" "}
          <mark className="app">Topaz Video AI</mark>. Она позволяет улучшить качество
          видео за счёт различных алгоритмов и моделей. Однако стоит учесть, что хороший
          результат не всегда может получиться с первой попытки, поэтому не стоит бояться
          экспериментировать с настройками. Программа распространяется как отдельное
          приложение, плагин для <mark className="app">Adobe Premiere Pro</mark>{" "}
          отсутствует.
        </p>
        <ContentFigure
          caption="Topaz Video AI"
          src="zbX7x8Oo_Uc"
          type="youtube"
        />
        <Addition type="info">
          Скачать программу <mark className="app">Topaz Video AI</mark>, а также пакет
          плагинов <mark className="plugin">Boris FX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </Addition>
        <Divider>Улучшаем качество фотографий</Divider>
        <p>
          Для улучшения качества изображений прямо в{" "}
          <mark className="app">Adobe Premiere Pro</mark> можно использовать способы,
          описанные в статье ранее.
        </p>
        <p>
          Если вы хотите улучшить изображение без использования{" "}
          <mark className="app">Adobe Premiere Pro</mark>, попробуйте воспользоваться{" "}
          <mark className="app">Topaz Photo AI</mark> или{" "}
          <mark className="app">Topaz Gigapixel AI</mark>. Задачи у них похожи, но
          результаты обработки могут сильно отличаться, поэтому иногда приходится
          использовать обе программы.{" "}
          <a href="https://www.topazlabs.com/pai-vs-gp">Чем эти программы отличаются?</a>
        </p>
        <Addition type="warning">
          Для <mark className="app">Topaz Photo AI</mark> понадобится около{" "}
          <mark>50 ГБ</mark> свободного места на жёстком диске, а для{" "}
          <mark className="app">Topaz Gigapixel AI</mark> — около <mark>20 ГБ</mark>. И
          это без учёта будущих обновлений.
        </Addition>
        <ContentFigure
          caption="Intro to Photo AI"
          src="J6vDYRvjbGY"
          type="youtube"
        />
        <p>
          Если вы ищете бесплатный аналог <mark className="app">Topaz AI</mark> — обратите
          внимание на <mark className="app">Upscayl</mark>. Эта программа также использует
          нейросетевые модели для улучшения качества изображений. Скачать её можно{" "}
          <a href="https://upscayl.org/">по этой ссылке</a>.
        </p>
        <ContentFigure
          caption="Upscayl"
          src="https://github.com/upscayl/upscayl/assets/25067102/ad2453b1-3c5a-4eb2-b992-4cf10e6a49f5"
          theme="dark"
          type="video"
          variant="mac"
        />
        <p>
          В качестве альтернативы можно использовать{" "}
          <mark className="app">Benvista PhotoZoom</mark> — программу с историей, уходящей
          корнями в 2003 год. В последних версиях в неё добавили нейросетевые модели, хотя
          работать можно и без них. Благодаря собственным алгоритмам программа порой даёт
          результат даже лучше, чем упомянутые выше инструменты, при этом занимает совсем
          немного места на диске.
        </p>
        <ContentFigure
          caption="Benvista Photozoom"
          src="woDDQ0xnt84"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="frame-interpolation"
        tag="слоумо, twixtor, topaz, ретаймер, time remapping, flowframes, интерполяция кадров, замедление движения, плавное движение"
        title="Какими средствами можно замедлить видео или сделать его более плавным?"
      >
        <p>
          Иногда возникает необходимость сделать видео максимально плавным, особенно если
          исходник снят с низкой частотой кадров. С этой задачей отлично справляются
          современные инструменты интерполяции, которые создают дополнительные кадры на
          основе существующих, сглаживая движение и убирая рывки.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Интерполяция кадров в видео низкого качества, особенно с резкими движениями
              или низкой частотой кадров, может привести к появлению артефактов и ещё
              больше ухудшить картинку.
            </li>
            <li>
              Прежде чем замедлять аниме, записи игрового процесса или видео с переменной
              частотой кадров, стоит{" "}
              <a href="#delete-duplicate-frames">избавиться от дублирующихся кадров</a>.
              Так вы обеспечите более стабильную работу алгоритмов интерполяции и
              добьётесь более плавного замедления.
            </li>
          </ul>
        </Addition>
        <Addition type="info">
          Интерфейс и действия в приведённых ниже видео могут отличаться в зависимости от
          версии программы или плагина.
        </Addition>
        <Divider>Плавно замедляем видео в Adobe Premiere Pro</Divider>
        <p>
          Замедлить видео можно стандартными средствами{" "}
          <mark className="app">Adobe Premiere Pro</mark>, но результат будет не таким
          хорошим, как хотелось бы. Для этого выделите нужный клип, нажмите{" "}
          <mark className="key">Ctrl + R</mark> и растяните видео на нужную длину. В
          параметре <mark className="select">«Time Interpolation»</mark> можно выбрать три
          типа интерполяции: <mark className="select">«Frame Sampling»</mark>,{" "}
          <mark className="select">«Frame Blending»</mark> или{" "}
          <mark className="select">«Optical Flow»</mark>.
        </p>
        <ContentFigure
          caption="How to Use Optical Flow"
          src="JemBgoF3K6Q"
          type="youtube"
        />
        <p>
          Если результат встроенных режимов кажется недостаточно плавным, можно прибегнуть
          к сторонним эффектам. Самый известный среди них —{" "}
          <mark className="plugin">RE:Vision Twixtor</mark>. Этот плагин хорошо
          справляется с интерполяцией кадров как для целых видео, так и для отдельных
          слоёв.
        </p>
        <ContentFigure
          caption="Twixtor"
          src="20Smtrzt3m4"
          type="youtube"
        />
        <p>
          В качестве альтернативы можно попробовать эффект{" "}
          <mark className="plugin">BCC+Retimer ML</mark> из пакета{" "}
          <mark className="plugin">Boris FX Continuum</mark>. Он использует алгоритмы
          искусственного интеллекта для создания дополнительных кадров и обеспечивает
          более мягкое движение по сравнению с{" "}
          <mark className="plugin">RE:Vision Twixtor</mark>.
        </p>
        <ContentFigure
          caption="BCC Retimer ML"
          src="YraSxOpy1Qg"
          type="youtube"
        />
        <Divider>«Уплавняем» видео вне Adobe Premiere Pro</Divider>
        <p>
          Если стоит задача увеличить частоту кадров, например, с <mark>24 FPS</mark> до{" "}
          <mark>60 FPS</mark> или даже <mark>120 FPS</mark> для дальнейшей обработки или
          более плавного воспроизведения, можно обойтись без{" "}
          <mark className="app">Adobe Premiere Pro</mark> и воспользоваться программой{" "}
          <mark className="app">Flowframes</mark>. У этой утилиты есть{" "}
          <a href="https://nmkd.itch.io/flowframes">бесплатная версия</a>
          <sup>1</sup> и <a href="https://www.patreon.com/n00mkrad">платная</a> с
          расширенным функционалом.
        </p>
        <Addition type="info">
          <sup>1</sup> Для бесплатного скачивания утилиты нажмите на странице{" "}
          <mark className="select">«Download Now»</mark>, а в модальном окне —{" "}
          <mark className="select">«No thanks, just take me to the downloads»</mark>.
          После этого вас перенаправят на страницу загрузки, где вы можете скачать{" "}
          <mark className="app">Flowframes</mark> бесплатно.
        </Addition>
        <ContentFigure
          caption="FlowFrames"
          src="H8ISNjzDULw"
          type="youtube"
        />
        <p>
          В качестве альтернативы можно попробовать менее популярную программу{" "}
          <mark className="app">FrameGUI</mark>.
        </p>
        <ContentFigure
          caption="FrameGUI"
          src="Axz_KwiqNmc"
          type="youtube"
        />
        <p>
          Также в <mark className="app">Topaz Video AI</mark> есть функция увеличения
          частоты кадров с несколькими моделями на выбор, что позволяет экспериментировать
          для получения наилучшего результата.
        </p>
        <ContentFigure
          caption="Topaz Video AI"
          src="591MqOooDAE"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="delete-duplicate-frames"
        tag="дубликаты кадров, аниме, удаление кадров, обработка видео, ffmpeg, shutter encoder"
        title="Как и чем можно удалить повторяющиеся кадры из видео?"
      >
        <p>
          При обработке записей игрового процесса, аниме или любого контента с переменной
          частотой кадров вы, вероятно, сталкивались с дублированием кадров, что мешает
          плавности движения. Чтобы это исправить, повторяющиеся кадры нужно удалить. Это
          можно сделать несколькими способами.
        </p>
        <Divider>Удаляем дубликаты через Shutter Encoder</Divider>
        <p>
          В <mark className="app">Shutter Encoder</mark> есть опция, которая позволяет
          конвертеру анализировать и удалять повторяющиеся кадры из видео. После импорта
          исходника выберите формат для вывода, а затем во вкладке{" "}
          <mark className="select">«Advanced features»</mark> включите параметр{" "}
          <mark className="select">«Remove duplicate frames»</mark>. После этого укажите
          путь сохранения и нажмите <mark className="select">«Start function»</mark>.
        </p>
        <ContentFigure
          caption="Shutter Encoder"
          imgTitle="Включение удаления дублирующихся кадров"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/shutter_encoder_remove_duplicate_frames.png"
          theme="dark"
          type="image"
          variant="mac"
        />
        <Divider>Удаление дубликатов через FFmpeg</Divider>
        <p>
          Если вы не боитесь командной строки и готовы ей воспользоваться, можно исправить
          исходник с помощью <mark className="app">FFmpeg</mark> — мощной утилиты для
          конвертации и обработки видео. Сначала её нужно установить на ваше устройство.
        </p>
        <ContentFilter
          macContent={
            <>
              <Addition type="warning">
                В этой инструкции <mark className="app">FFmpeg</mark> устанавливается
                через пакетный менеджер <mark className="app">Homebrew</mark>. Прежде чем
                выполнять команду, убедитесь, что <mark className="app">Homebrew</mark>{" "}
                установлен в вашей системе.{" "}
                <a href="https://brew.sh/">Что ещё за Homebrew?</a>
              </Addition>
              <p>
                Для установки <mark className="app">FFmpeg</mark> на <mark>macOS</mark>{" "}
                достаточно выполнить в терминале команду{" "}
                <mark className="code">brew install ffmpeg</mark>.
              </p>
            </>
          }
          windowsContent={
            <>
              <p>
                Для быстрой установки <mark className="app">FFmpeg</mark> выполните
                команду <mark className="code">winget install Gyan.FFmpeg</mark>. Для её
                выполнения могут потребоваться права администратора.
              </p>
              <Addition type="warning">
                <ul>
                  <li>
                    Если в вашей сборке <mark>Windows</mark> утилита{" "}
                    <mark className="app">winget</mark> отсутствует,{" "}
                    <a href="https://github.com/microsoft/winget-cli/releases">
                      установите её вручную
                    </a>
                    .
                  </li>
                  <li>
                    Если вы работаете под ограниченной учётной записью, можно скачать
                    портативную версию <mark className="app">FFmpeg</mark> с сайта{" "}
                    <a href="https://www.gyan.dev/ffmpeg/builds/">Gyan.Dev</a>,
                    распаковать её в удобную папку и работать из неё, перейдя в нужный
                    каталог в командной строке.
                  </li>
                </ul>
              </Addition>
            </>
          }
        />
        <p>
          После корректной установки <mark className="app">FFmpeg</mark> и добавления его
          в системные переменные окружения вы сможете пользоваться утилитой, не указывая
          полный путь к исполняемому файлу. Чтобы убрать повторяющиеся кадры, скопируйте в
          терминал команду ниже, не забыв заменить значения на свои.
        </p>
        <code>
          ffmpeg -i INPUT_VIDEO_NAME.mp4 -vf &quot;mpdecimate,setpts=N/FRAME_RATE/TB&quot;
          OUTPUT_VIDEO_NAME.mp4
        </code>
        <ul>
          <li>
            <p>
              Вместо <mark>INPUT_VIDEO_NAME.mp4</mark> введите абсолютный или
              относительный путь к вашему видео.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  <mark className="word">Абсолютный путь</mark> — это полный путь от корня
                  диска, например:{" "}
                  <mark className="path">C:/Users/aechat/Downloads/your_video.mp4</mark>.
                </li>
                <li>
                  <mark className="word">Относительный путь</mark> — это путь от текущей
                  папки, в которой вы выполняете команду. Например, если вы находитесь в{" "}
                  <mark className="path">C:/Users/aechat</mark>, а файл лежит в папке{" "}
                  <mark className="path">Downloads</mark>, относительный путь будет{" "}
                  <mark className="path">Downloads/your_video.mp4</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            Вместо <mark>FRAME_RATE</mark> введите целевую частоту кадров, например,{" "}
            <mark>29.97</mark> или <mark>60</mark>.
          </li>
          <li>
            Вместо <mark>OUTPUT_VIDEO_NAME.mp4</mark> введите директорию, имя и расширение
            для итогового файла.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="уменьшить шум, denoiser, денойзер, неат видео, шумоподавление, чистка видео"
        title="Чем можно подавить шумы на видео?"
      >
        <p>
          Если видео было снято при плохом освещении и с высоким <mark>ISO</mark>, вы,
          скорее всего, столкнётесь с цифровым шумом. Этот дефект возникает из-за
          особенностей работы сенсоров камер и самой природы света. Шум особенно заметен
          на однотонных поверхностях: небе, коже, стенах и в тенях. Полностью от него
          избавиться сложно, но его можно существенно подавить с помощью специальных
          инструментов.
        </p>
        <Divider>Подавляем шумы стандартными средствами</Divider>
        <p>
          Если вы не хотите заморачиваться со сторонними плагинами, но хотите немного
          подавить шум на видео — воспользуйтесь встроенным эффектом{" "}
          <mark className="plugin">VR De-Noise</mark>.
        </p>
        <ContentFigure
          caption="VR De-Noise"
          src="hr7qFhh6Y5g"
          type="youtube"
        />
        <Divider>Подавляем шумы с помощью сторонних плагинов</Divider>
        <p>
          Если результат от стандартного эффекта вас не устраивает, попробуйте
          воспользоваться одним из самых эффективных плагинов для уменьшения шума и
          мерцания от искусственного света — <mark className="plugin">Neat Video</mark>.
        </p>
        <ContentFigure
          caption="Neat Video"
          src="DYKBQF7eIUo"
          type="youtube"
        />
        <p>
          В качестве альтернативы для подавления шумов можно попробовать{" "}
          <mark className="plugin">Denoiser III</mark> из пакета{" "}
          <mark className="plugin">Red Giant Magic Bullet Suite</mark>.
        </p>
        <ContentFigure
          caption="Denoiser III"
          src="PXCElU7HcX8"
          type="youtube"
        />
        <p>
          Также в стороннем пакете <mark className="plugin">Boris FX Continuum</mark> есть
          два денойзера: <mark className="plugin">BCC DeNoise OBS</mark> на основе
          «классических» алгоритмов и более современный{" "}
          <mark className="plugin">BCC+DeNoise ML</mark>, основанный на машинном обучении.
        </p>
        <ContentFigure
          caption="BCC DeNoise ML"
          src="L1PeaTa13H4"
          type="youtube"
        />
        <p>
          Ну и куда же без <mark className="plugin">RE:Vision Effects</mark> с их{" "}
          <mark className="plugin">DE:Noise</mark>.
        </p>
        <ContentFigure
          caption="DE:Noise"
          src="tGIXeddCPQM"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="кеинг, клинап, убрать фон, keying, зеленый фон, бекграунд зелёнка, синий бэкграунд, удаление фона, хромакей"
        title="Какими средствами обычно удаляют зелёный или синий фон?"
      >
        <p>
          Допустим, у вас есть видеоматериал с объектом или персонажем на зелёном фоне,
          который требуется удалить. Для этого существует множество инструментов и техник,
          которые помогут вам справиться с этой задачей.
        </p>
        <Addition type="info">
          Если вы хотите потренироваться в кеинге — скачайте любое видео из{" "}
          <a href="https://www.youtube.com/playlist?list=PLB62ktMZylCyHxubuonbeZ5VWIYPJMY9J">
            этого плейлиста
          </a>{" "}
          и экспериментируйте.
        </Addition>
        <Divider>Удаляем однотонный фон стандартными средствами</Divider>
        <p>
          В <mark className="app">Adobe Premiere Pro</mark> легко убрать зелёный фон,
          используя встроенный эффект <mark className="plugin">Ultra Key</mark>.
        </p>
        <ContentFigure
          caption="Ultra Key"
          src="c_P8s3r1dXE"
          type="youtube"
        />
        <Divider>Удаляем однотонный фон сторонними плагинами</Divider>
        <Addition type="info">
          Плагины ниже демонстрируются в <mark className="app">Adobe After Effects</mark>.
          Все эти действия можно повторить и в{" "}
          <mark className="app">Adobe Premiere Pro</mark>, принцип работы мало чем
          отличается.
        </Addition>
        <p>
          Из сторонних инструментов для удаления цветного фона любой сложности можно
          выделить <mark className="plugin">Primatte Keyer</mark> из пакета{" "}
          <mark className="plugin">Red Giant VFX Suite</mark>.
        </p>
        <ContentFigure
          caption="Getting Started with Primatte Keyer"
          src="zYARqiWTArU"
          type="youtube"
        />
        <p>
          Если результат работы плагина выше не нравится, есть{" "}
          <mark className="plugin">BCC Primatte Studio</mark> из пакета{" "}
          <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <ContentFigure
          caption="BCC Primatte Studio"
          src="AaKTHKspAkQ"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="биты, create audio from keyframes, ключи из аудио"
        title="Как быстро расставить маркеры под бит, желательно автоматически?"
      >
        <p>
          Если у вас есть аудиофайл, особенно с чётко выраженными битами, вам будет
          довольно легко сгенерировать ключи на основе звуковой волны.
        </p>
        <Addition type="info">
          Если вам нужно извлечь биты и отделить их от остальной музыки — воспользуйтесь
          программой{" "}
          <a href="https://github.com/stemrollerapp/stemroller/releases">StemRoller</a>.
        </Addition>
        <p>
          Чтобы быстро расставить маркеры, на помощь приходит сторонний плагин{" "}
          <mark className="plugin">Beat Edit</mark>, который как раз и выполняет эту
          задачу.
        </p>
        <ContentFigure
          caption="Как создавать маркеры с помощью Beat Edit"
          src="JGVLRcjp7ss"
          type="youtube"
        />
        <Addition type="info">
          Плагин, приведённый в этой статье, можно скачать из канала{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="транскрибация, subtitle, речь в текст, speech to text, сгенерировать субтитры, автоматические субтитры, генерация субтитров"
        title="Как сделать автоматические субтитры для видео?"
      >
        <p>
          В <mark className="app">Adobe Premiere Pro</mark> с версии <mark>2022</mark> и
          новее добавили поддержку автоматического перевода речи в текст. Работает как на
          лицензионных, так и на «народных» версиях.
        </p>
        <Addition type="info">
          <ul>
            <li>
              На «народных» версиях обычно языковые пакеты не поставляются вместе с
              дистрибутивом, чтобы не раздувать размер установщика. Их можно загрузить
              отдельно по запросу <mark className="copy">Speech To Text</mark> именно для
              вашей версии <mark className="app">Adobe Premiere Pro</mark>.
              <Addition type="info">
                Языковые пакеты вы можете скачать в канале{" "}
                <a href="https://t.me/+Qd9xu7A4TeIwNzY6">
                  склад стройматериалов (Windows)
                </a>{" "}
                по хештегу <mark className="tag">#speechtotext</mark> или в канале{" "}
                <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> по
                поиску <mark className="tag">Speech To Text</mark>.
              </Addition>
            </li>
            <li>
              Если вы установите языковой пакет, который предназначен для версии{" "}
              <mark className="app">Adobe Premiere Pro</mark>, отличной от вашей, вы
              просто зря займёте место на диске, а язык не установится, и программа будет
              постоянно предлагать его скачать. То есть, если у вас установлен{" "}
              <mark className="app">Adobe Premiere Pro</mark> версии <mark>24.6</mark>, а
              языковой пакет, который вы скачали и установили, предназначен для{" "}
              <mark>24.1</mark>, то в вашей версии программы он попросту не появится.
              <Addition type="info">
                Информацию о текущей сборке программы вы можете узнать в{" "}
                <mark className="select">«Help» → «About Premiere Pro»</mark>.
              </Addition>
            </li>
            <li>
              Языковые пакеты могут не установиться корректно, если{" "}
              <mark className="app">Adobe Premiere Pro</mark> расположен в нестандартном
              пути установки, то есть отличном от{" "}
              <mark className="path">C:\Program Files\Adobe</mark>.
            </li>
          </ul>
        </Addition>
        <Divider>Генерируем субтитры из речи в Premiere Pro</Divider>
        <p>
          Предположим, вы установили языковые пакеты для вашей версии{" "}
          <mark className="app">Adobe Premiere Pro</mark> и хотите начать транскрибацию.
          Для этого откройте окно <mark className="select">«Text»</mark> через меню{" "}
          <mark className="select">«Window»</mark>. Затем во вкладке{" "}
          <mark className="select">«Transcribe»</mark> нажмите на три точки в углу и
          выберите функцию <mark className="select">«Generate static transcript»</mark>.
        </p>
        <ContentFigure
          caption="Text"
          imgTitle="Начало генерации текста на основе речи"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/text_generate_static_transcript.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В открывшемся окне выберите язык, на котором говорит голос из аудио, параметр
          разделения дикторов (делить или не делить) и дополнительные параметры. После
          выбора настроек нажмите на <mark className="select">«Transcribe»</mark> для
          начала транскрибации.
        </p>
        <ContentFigure
          caption="Generate static transcript"
          imgTitle="Настройки генерации текста на основе речи"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/generate_transcribe_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Через некоторое время вы получите расшифровку аудио. На основе этих данных можно
          создать субтитры, выбрав в меню{" "}
          <mark className="select">«Create Captions»</mark>, отредактировать их или
          перемещаться по таймлайну к нужным фразам.
        </p>
        <ContentFigure
          caption="Text"
          imgTitle="Создание субтитров на основе генерации текста"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/create_captions_from_transcribe.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Генерируем речь в текст с помощью Subtitle Edit</Divider>
        <Addition type="warning">
          Демонстрируемая программа <mark className="app">Subtitle Edit</mark> для
          редактирования и генерации субтитров доступна только для устройств на{" "}
          <mark>Windows</mark>. Пользователи устройств на <mark>macOS</mark> могут
          воспользоваться альтернативами в виде <mark className="app">MacWhisper</mark>{" "}
          или <mark className="app">Tero Subtitler</mark>.
        </Addition>
        <p>
          Сначала скачайте <mark className="app">Subtitle Edit</mark> со{" "}
          <a href="https://github.com/SubtitleEdit/subtitleedit/releases">
            страницы релизов на GitHub
          </a>
          , а затем установите программу. После запуска перетащите видео или аудио в окно
          программы.
        </p>
        <ContentFigure
          caption="Subtitle Edit"
          imgTitle="Импорт видео или аудио в Subtitle Edit"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/subtitle_edit_import.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          Если у вас установлен <mark className="app">MPC-HC</mark> или{" "}
          <mark className="app">VLC</mark>, рекомендую установить этот проигрыватель в
          программе <mark className="app">Subtitle Edit</mark> как стандартный. Это можно
          сделать в{" "}
          <mark className="select">«Options» → «Settings» → «Video Player»</mark>.
        </Addition>
        <p>
          Затем перейдите в <mark className="select">«Video»</mark> и выберите{" "}
          <mark className="select">«Audio to text (Whisper)»</mark> или{" "}
          <mark className="select">«Audio to text (Vosk/Kaldi)»</mark>. В этой статье
          будет рассматриваться генерация через <mark>Whisper</mark>. При первом запуске
          программа предложит установить <mark className="app">FFmpeg</mark> и движок{" "}
          <mark className="app">Purfview&apos;s Faster Whisper</mark>, с чем нужно
          согласиться.
        </p>
        <ContentFigure
          caption="Subtitle Edit"
          imgTitle="Функция для генерации субтитров"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/subtitle_edit_video_audio-to-text.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          <ul>
            <li>
              Если вы сталкиваетесь с проблемами при загрузке — попробуйте использовать{" "}
              <mark className="app">VPN</mark>.
            </li>
            <li>
              Если после установки программа предложит скачать{" "}
              <mark className="select">«Whisper.cpp»</mark> — лучше отказаться от его
              скачивания, нажав <mark className="select">«No»</mark> в диалоговом окне,
              так как он работает нестабильно. Вместо него следует установить{" "}
              <mark>Purfview&apos;s Faster Whisper</mark>. Для этого в окне в параметре{" "}
              <mark className="select">«Engine»</mark> выберите{" "}
              <mark className="select">«Purfview&apos;s Faster Whisper»</mark> и
              подтвердите загрузку.
              <ContentFigure
                caption="Subtitle Edit"
                imgTitle="Изменение движка распознавания речи"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/subtitle_edit_change_engine.png"
                theme="light"
                type="image"
                variant="windows"
              />
            </li>
          </ul>
        </Addition>
        <p>
          Далее нужно скачать языковую модель. Для этого рядом с{" "}
          <mark className="select">«Choose model»</mark> нажмите на три точки. В
          открывшемся окне вы можете выбрать любую модель, например <mark>large-v3</mark>{" "}
          или <mark>large-v2</mark>, чтобы перевести русскоязычную речь в текст с
          относительно хорошей точностью.
        </p>
        <Addition type="info">
          Чем меньше весит модель, тем быстрее она работает, но при этом может ухудшаться
          точность распознавания речи. Скорость транскрибации также зависит от мощности
          вашей видеокарты и скорости чтения жёсткого диска.
        </Addition>
        <ContentFigure
          caption="Subtitle Edit"
          imgTitle="Загрузка моделей распознавания речи"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/subtitle_edit_download_models.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Когда модель загрузится, выберите язык аудио и нажмите{" "}
          <mark className="select">«Generate»</mark> — это запустит процесс преобразования
          речи в текст.
        </p>
        <ContentFigure
          caption="Subtitle Edit"
          imgTitle="Изменение языка и начало генерации текста из речи"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/subtitle_edit_change_language_generate.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          После генерации вы можете отредактировать субтитры в{" "}
          <mark className="app">Subtitle Edit</mark> или сразу сохранить их в формате{" "}
          <mark className="file">SRT</mark> для дальнейшей обработки. Сохранить субтитры
          можно с помощью комбинации клавиш <mark className="key">Ctrl + S</mark>.
        </p>
        <Divider>Импортируем файл субтитров в секвенцию</Divider>
        <p>
          После сохранения файла вернитесь в{" "}
          <mark className="app">Adobe Premiere Pro</mark>. В окне{" "}
          <mark className="select">«Text»</mark> нажмите на три точки, перейдите во
          вкладку <mark className="select">«Captions»</mark>, нажмите{" "}
          <mark className="select">«Import captions from file»</mark> и укажите путь к
          сохранённым субтитрам.
        </p>
        <ContentFigure
          caption="Text"
          imgTitle="Импорт субтитров в Adobe Premiere Pro"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/import_captions_from_file.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Затем в открывшемся модальном окне выберите тип субтитров, вариант, с которого
          их начинать, и нажмите <mark className="select">«OK»</mark>.
        </p>
        <ContentFigure
          caption="New caption track"
          imgTitle="Создание новой дорожки субтитров"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/premierepro/new_caption_track.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После этого сгенерированные субтитры из{" "}
          <mark className="app">Subtitle Edit</mark> попадут в ваш проект. Их можно
          отредактировать в окне <mark className="select">«Text»</mark> во вкладке{" "}
          <mark className="select">«Captions»</mark>. При необходимости вы можете
          применить к ним различные стили с помощью сторонних плагинов{" "}
          <mark className="plugin">Submachine</mark> или{" "}
          <mark className="plugin">Captioneer</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем разделить голос человека от музыки?">
        <p>
          Современные технологии позволяют разделить голос и{" "}
          <mark className="word">инструментал</mark> на разные дорожки с помощью ИИ.
          Онлайн-сервисы часто имеют ограничения для бесплатных пользователей, поэтому
          рассмотрим локальные программы.
        </p>
        <p>
          <mark className="app">StemRoller</mark> — одна из самых адекватных локальных
          программ для разделения трека на 4 или 6 дорожек (биты, инструментал, бас и
          голос). Скачать её можно{" "}
          <a href="https://www.stemroller.com/">по этой ссылке</a> для устройств на{" "}
          <mark>Windows</mark> и <mark>macOS</mark>.
        </p>
        <p>
          После распаковки архива откройте программу и перетащите в неё аудиофайл. После
          обработки результат будет сохранён в папку, указанную в настройках.
        </p>
        <ContentFigure
          caption="StemRoller"
          imgTitle="Главная страница StemRoller"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/stemroller_interface.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Скорость обработки аудиофайла зависит от мощности вашего устройства и обычно
          занимает 2–3 минуты. Если вы сталкиваетесь с трудностями в обработке, попробуйте
          переключить обработку на процессор в настройках программы.
        </Addition>
        <p>
          Если же вам всё-таки нужен онлайн-сервис для разделения музыки и голоса, можете
          воспользоваться <a href="https://vocalremover.org/ru/">Vocalremover</a>. Он
          предлагает бесплатную обработку одного файла в день.
        </p>
        <Addition type="warning">
          После обработки сразу сохраните аудиофайлы, чтобы их не потерять. Сервис не
          предусматривает возможность восстановления файлов после закрытия или смены
          страницы.
        </Addition>
      </DetailsSummary>
    </div>
  );
};

export default PRActions;
