import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ContentFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import CodeSnippet from "../../../components/features/CodeSnippet";

import ContentFilter from "../../../components/features/ContentFilter";

const AEActions: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="апскейл, topaz, улучшение качества, резкость, цветокоррекция, нейросети"
        title="Какими средствами можно улучшить качество исходников?"
      >
        <p>
          В последнее время появилось множество инструментов с использованием
          искусственного интеллекта, которые могут помочь вам улучшить качество фото и
          видео. Все описанные методы работают локально на вашем устройстве, поэтому для
          их корректной работы потребуется производительная видеокарта и мощный процессор.
        </p>
        <Addition type="info">
          Интерфейс и действия в приведённых ниже видео могут отличаться в зависимости от
          версии программы или плагина.
        </Addition>
        <Divider>Улучшаем качество видео</Divider>
        <p>
          Начнём с самого популярного запроса — улучшения качества видео. Для этого чаще
          всего используют <mark className="app">Topaz Video AI</mark>, который может
          интегрироваться с <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">DaVinci Resolve</mark>. Однако я бы всё же рекомендовал
          запускать эту программу отдельно, без монтажных программ — так работа с
          исходниками будет стабильнее и удобнее.
        </p>
        <p>
          С помощью <mark className="app">Topaz Video AI</mark> можно заметно повысить
          качество исходного материала и даже сделать видео более плавным. Однако стоит
          учесть, что хороший результат не всегда может получиться с первой попытки,
          поэтому не стоит бояться экспериментировать с настройками.
        </p>
        <ContentFigure
          caption="Topaz Video AI Tutorials Enhancing Low Quality Video"
          src="XBEkVHd2tmw"
          type="youtube"
        />
        <p>
          Если вы хотите повысить качество исходного материала прямо в{" "}
          <mark className="app">Adobe After Effects</mark>, попробуйте применить к слою
          эффект <mark className="plugin">BCC+UpRes ML</mark>, который входит в сторонний
          пакет <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <ContentFigure
          caption="BCC UpRes ML"
          src="fTYcNP8ZdTE"
          type="youtube"
        />
        <p>
          Если вы не хотите использовать сторонние плагины, попробуйте воспользоваться
          стандартным эффектом <mark className="plugin">Detail-preserving Upscale</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ContentFigure
          caption="How to UPSCALE VIDEO to 4K in Adobe After Effects"
          src="PVPapPNciyQ"
          type="youtube"
        />
        <Divider>«Наваливаем» эффекты для цветокоррекции</Divider>
        <p>
          На популярных видеоплощадках, вроде <mark className="app">TikTok</mark> и{" "}
          <mark className="app">YouTube Shorts</mark>, часто применяют спорные методы
          «улучшения» качества с помощью цветокоррекции: используют эффекты{" "}
          <mark className="plugin">Sharpen</mark> и{" "}
          <mark className="plugin">Unsharpen Mask</mark> с «задранными» значениями,
          завышают контраст и насыщенность, а видео при этом называют <mark>4K</mark>,
          хотя на деле оно опубликовано в меньшем разрешении.
        </p>
        <ContentFigure
          caption="HOW TO: Make A 4K Color Correction"
          src="d9ESpD7vc2Y"
          type="youtube"
        />
        <Divider>Улучшаем качество фотографий</Divider>
        <p>
          Для улучшения качества изображений прямо в{" "}
          <mark className="app">Adobe After Effects</mark> можно использовать способы,
          ранее описанные в статье. Если вы хотите улучшить изображение без использования{" "}
          <mark className="app">Adobe After Effects</mark> — попробуйте воспользоваться{" "}
          <mark className="app">Topaz Photo AI</mark> или{" "}
          <mark className="app">Topaz Gigapixel AI</mark>. Задачи у них похожи, но
          результаты обработки могут сильно отличаться, поэтому иногда приходится
          использовать обе программы.{" "}
          <a href="https://www.topazlabs.com/pai-vs-gp">Чем эти программы отличаются?</a>
        </p>
        <Addition type="warning">
          Для <mark className="app">Topaz Photo AI</mark> понадобится около{" "}
          <mark>15 ГБ</mark> свободного места на жёстком диске, а для{" "}
          <mark className="app">Topaz Gigapixel AI</mark> — около <mark>25 ГБ</mark>. И
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
          <mark className="app">Benvista PhotoZoom</mark>, первая версия которой вышла ещё
          в 2005 году. В последних версиях в программу добавили нейросетевые модели, хотя
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
          Прежде чем замедлять аниме, записи игрового процесса или видео с переменной
          частотой кадров, стоит <a href="#7.3">избавиться от дублирующихся кадров</a>.
          Так вы обеспечите более стабильную работу алгоритмов интерполяции и добьётесь
          более плавного замедления.
        </Addition>
        <Addition type="info">
          Интерфейс и действия в приведённых ниже видео могут отличаться в зависимости от
          версии программы или плагина.
        </Addition>
        <Divider>Плавно замедляем видео в Adobe After Effects</Divider>
        <p>
          Замедлить видео можно и стандартными средствами{" "}
          <mark className="app">Adobe After Effects</mark>. Для этого включите{" "}
          <mark className="select">«Time Remapping»</mark> с помощью{" "}
          <mark className="key">Ctrl + Alt + T</mark>, а затем активируйте смешивание
          кадров для слоя:
          <mark className="key">ПКМ</mark> →{" "}
          <mark className="select">
            «Frame Blending» → «Frame Mix» или «Pixel Motion»
          </mark>
          .
        </p>
        <ContentFigure
          caption="Frame Blending и Pixel Motion в Adobe After Effects"
          src="fNINAOwY2IY"
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
          src="EGZCNcQyvrE"
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
        <Divider>«Уплавняем» видео вне Adobe After Effects</Divider>
        <p>
          Если стоит задача увеличить частоту кадров, например, с <mark>24 FPS</mark> до{" "}
          <mark>60 FPS</mark> или даже <mark>120 FPS</mark> для дальнейшей обработки или
          более плавного воспроизведения, можно обойтись без{" "}
          <mark className="app">Adobe After Effects</mark> и воспользоваться программой{" "}
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
        tag="дубликаты кадров, аниме, удаление кадров, обработка видео, ffmpeg, shutter encoder"
        title="Как и чем можно удалить повторяющиеся кадры из видео?"
      >
        <p>
          При обработке записей игрового процесса, аниме или любого контента с переменной
          частотой кадров вы, вероятно, сталкивались с дублированием кадров, что мешает
          плавности движения. Чтобы это исправить, повторяющиеся кадры нужно удалить. Это
          можно сделать несколькими способами.
        </p>
        <Divider>Удаляем с помощью Duplicate Frame Remover</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> дублирующиеся кадры можно
          удалить с помощью скрипта{" "}
          <a href="https://aescripts.com/duplicate-frame-remover/">
            Duplicate Frame Remover
          </a>
          . У него есть несколько параметров.
        </p>
        <ul>
          <li>
            <mark className="select">«Threshold»</mark> — чем выше значение, тем
            агрессивнее скрипт будет искать и удалять похожие кадры.
          </li>
          <li>
            <mark className="select">«Use Region of Interest»</mark> — при включении этой
            опции алгоритм будет работать только в пределах выделенной вами области
            <mark className="select">«Region of Interest»</mark>, что помогает исключить
            ложные срабатывания.
          </li>
          <li>
            <mark className="select">«Retime to original length»</mark> — возвращает слою
            исходную длительность после удаления кадров, используя встроенные режимы
            интерполяции <mark className="select">«Pixel Motion»</mark> или{" "}
            <mark className="select">«Frame Mix»</mark>.
          </li>
        </ul>
        <ContentFigure
          caption="Duplicate Frame Remover 3 - Quick Start Tutorial"
          src="yg0vJmgCG5U"
          type="youtube"
        />
        <p>
          Для удобства дальнейшей работы рекомендую отрендерить обработанное видео и
          заменить им исходник в проекте. Так вы избавитесь от необходимости повторно
          обрабатывать этот слой при каждом финальном рендеринге.
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
          src="images/shutter_encoder_remove_duplicate_frames.png"
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
            <div>
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
            </div>
          }
          windowsContent={
            <div>
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
            </div>
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
            Вместо <mark>INPUT_VIDEO_NAME.mp4</mark> введите абсолютный или относительный
            путь к вашему видео.
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
        tag="denoiser, neat video, обработка и удаление шума, подавление цифрового шума"
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
          В <mark className="app">Adobe After Effects</mark> есть встроенный эффект{" "}
          <mark className="plugin">Remove Grain</mark>, с помощью которого можно подавить
          шумы, не прибегая к сторонним плагинам.
        </p>
        <ContentFigure
          caption="Remove Grain"
          src="FmSTOXu2V6I"
          type="youtube"
        />
        <Divider>Подавляем шумы с помощью сторонних плагинов</Divider>
        <p>
          Если результат от стандартного <mark className="plugin">Remove Grain</mark> вас
          не устраивает, попробуйте воспользоваться одним из самых эффективных плагинов
          для уменьшения шума и мерцания от искусственного света —{" "}
          <mark className="plugin">Neat Video</mark>. Он гибко настраивается, адаптируется
          под разный тип шума и поддерживает аппаратное ускорение с помощью видеокарты.
        </p>
        <ContentFigure
          caption="Neat Video"
          src="mwSqzxApy-E"
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
          два денойзера: <mark className="plugin">BCC DeNoise OBS</mark> использует
          «классические» алгоритмы подавления шума и отлично справляется с простыми
          задачами, а более современный <mark className="plugin">BCC+DeNoise ML</mark>{" "}
          применяет машинное обучение, что позволяет эффективно очищать более сложные
          кадры.
        </p>
        <ContentFigure
          caption="BCC DeNoise ML"
          src="L1PeaTa13H4"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="транскрибация, whisper, речь в текст, speech to text, srt, генерация субтитров, импорт субтитров, автоматический текст"
        title="Как создать автоматические субтитры из речи и применить их в композиции?"
      >
        <p>
          В эпоху вертикальных видео у пользователей{" "}
          <mark className="app">Adobe After Effects</mark>, которым нужно добавлять
          субтитры, часто возникает вопрос:{" "}
          <mark className="quote">
            «Как сделать автоматические субтитры, не открывая Adobe Premiere Pro?»
          </mark>
          . К сожалению, в <mark className="app">Adobe After Effects</mark> нет встроенной
          функции генерации текста из речи и импорта субтитров в формате{" "}
          <mark className="file">SRT</mark>, поэтому для создания субтитров в этой статье
          будут использоваться сторонние инструменты.
        </p>
        <ContentFilter
          macContent={
            <div>
              <Divider>Генерируем речь в текст с помощью сторонних инструментов</Divider>
              <p>
                Для генерации аудио в текст можно воспользоваться утилитами, такими как{" "}
                <mark className="app">MacWhisper</mark> или{" "}
                <mark className="app">Tero Subtitler</mark>. После преобразования речи,
                сохраните файл в формате <mark className="file">SRT</mark>.
              </p>
              <ContentFigure
                caption="Как превратить аудио в текст с помощью MacWhisper?"
                src="strqSTYlIJg"
                type="youtube"
              />
            </div>
          }
          windowsContent={
            <div>
              <Divider>Генерируем речь в текст с помощью Subtitle Edit</Divider>
              <p>
                Для преобразования речи в текст можно воспользоваться утилитой{" "}
                <mark className="app">Subtitle Edit</mark>, которая поддерживает генерацию
                субтитров с помощью <mark className="app">Whisper</mark> и{" "}
                <mark className="app">Vosk/Kaldi</mark>. Сначала скачайте программу со{" "}
                <a href="https://github.com/SubtitleEdit/subtitleedit/releases">
                  страницы релизов на GitHub
                </a>{" "}
                и установите её. После запуска перетащите видео или аудио в окно
                программы.
              </p>
              <ContentFigure
                caption="Subtitle Edit"
                imgTitle="Импорт видео или аудио в Subtitle Edit"
                src="images/subtitle_edit_import.png"
                theme="light"
                type="image"
                variant="windows"
              />
              <Addition type="info">
                Если у вас установлен плеер <mark className="app">MPC-HC</mark> или{" "}
                <mark className="app">VLC</mark>, рекомендую назначить его стандартным для
                проигрывания исходников в настройках:{" "}
                <mark className="select">«Options» → «Settings» → «Video Player»</mark>.
              </Addition>
              <p>
                Затем перейдите в меню <mark className="select">«Video»</mark> и выберите{" "}
                <mark className="select">«Audio to text (Whisper)»</mark> или{" "}
                <mark className="select">«Audio to text (Vosk/Kaldi)»</mark>. В этой
                статье будет использоваться генерация через{" "}
                <mark className="app">Whisper</mark>.
              </p>
              <ContentFigure
                caption="Subtitle Edit"
                imgTitle="Функция для генерации субтитров"
                src="images/subtitle_edit_video_audio-to-text.png"
                theme="light"
                type="image"
                variant="windows"
              />
              <p>
                При первом запуске программа предложит установить{" "}
                <mark className="app">FFmpeg</mark> и движок{" "}
                <mark className="app">Purfview&apos;s Faster Whisper</mark>, с чем нужно
                согласиться. Если программа предложит скачать{" "}
                <mark className="app">Whisper.cpp</mark> — от него лучше отказаться, так
                как он работает нестабильно. Вместо него следует установить{" "}
                <mark className="app">Purfview&apos;s Faster Whisper</mark>. Для этого в
                окне генерации в поле <mark className="select">«Engine»</mark> выберите{" "}
                <mark className="select">«Purfview&apos;s Faster Whisper»</mark> и
                подтвердите загрузку.
              </p>
              <ContentFigure
                caption="Subtitle Edit"
                imgTitle="Изменение движка распознавания речи"
                src="images/subtitle_edit_change_engine.png"
                theme="light"
                type="image"
                variant="windows"
              />
              <p>
                Далее нужно скачать языковую модель. Для этого рядом с{" "}
                <mark className="select">«Choose model»</mark> нажмите на три точки. В
                открывшемся окне выберите подходящую модель, например{" "}
                <mark className="select">«large-v3»</mark> или{" "}
                <mark className="select">«large-v2»</mark> — они обеспечивают хорошую
                точность для русского языка.
              </p>
              <Addition type="info">
                Чем легче модель, тем быстрее она работает, но точность распознавания
                может быть ниже. Скорость обработки также зависит от производительности
                видеокарты и скорости диска.
              </Addition>
              <ContentFigure
                caption="Subtitle Edit"
                imgTitle="Загрузка моделей распознавания речи"
                src="images/subtitle_edit_download_models.png"
                theme="light"
                type="image"
                variant="windows"
              />
              <p>
                Когда модель загрузится, выберите язык аудио и нажмите{" "}
                <mark className="select">«Generate»</mark>, чтобы запустить процесс.
              </p>
              <ContentFigure
                caption="Subtitle Edit"
                imgTitle="Выбор языка и запуск генерации"
                src="images/subtitle_edit_change_language_generate.png"
                theme="light"
                type="image"
                variant="windows"
              />
              <p>
                После генерации вы можете отредактировать субтитры прямо в{" "}
                <mark className="app">Subtitle Edit</mark> или сразу сохранить их в
                формате <mark className="file">SRT</mark> с помощью{" "}
                <mark className="key">Ctrl + S</mark> для дальнейшего импорта в{" "}
                <mark className="app">Adobe After Effects</mark>.
              </p>
            </div>
          }
        />
        <Divider>Импортируем файл субтитров в композицию</Divider>
        <p>
          После того как вы получили файл с субтитрами в формате{" "}
          <mark className="file">SRT</mark>, его нужно импортировать в{" "}
          <mark className="app">Adobe After Effects</mark>. Как уже было сказано ранее —
          стандартными средствами это сделать нельзя, поэтому воспользуемся сторонним
          расширением <a href="https://aescripts.com/subtitle-pro/">Subtitle Pro</a>. Оно
          позволяет импортировать <mark className="file">SRT</mark> как текстовый слой.
          Если вы корректно установили <mark className="plugin">Subtitle Pro</mark>, он
          появится в меню <mark className="select">«Window» → «Extensions»</mark>.
        </p>
        <Addition type="info">
          Для корректной работы расширения рекомендуется в настройках{" "}
          <mark className="select">
            «Edit» → «Preferences» → «Scripting & Expressions»
          </mark>{" "}
          установить флажок у параметра{" "}
          <mark className="select">
            «Allow Scripts to Write Files and Access Network»
          </mark>
          .
        </Addition>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Открытие расширения Subtitle Pro"
          src="images/aftereffects/subtitlepro_opening.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          В окне расширения <mark className="plugin">Subtitle Pro</mark> нажмите на{" "}
          <mark className="select">«Import»</mark> и выберите сохранённый ранее файл{" "}
          <mark className="file">SRT</mark>. Затем откройте нужную композицию, куда вы
          хотите добавить субтитры, и нажмите <mark className="select">«Apply»</mark>.
        </p>
        <ContentFigure
          caption="Subtitle Pro"
          imgTitle="Импорт и применение субтитров"
          src="images/aftereffects/subtitlepro_import_apply.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После нажатия на <mark className="select">«Apply»</mark> расширение предложит
          применить один из стилей для субтитров. К сожалению, не все они работают
          корректно, поэтому рекомендую выбрать{" "}
          <mark className="select">«Classic 01»</mark>. В любом случае вы сможете
          настроить внешний вид текста позже.
        </p>
        <ContentFigure
          caption="Subtitle Pro"
          imgTitle="Выбор стиля для субтитров"
          src="images/aftereffects/subtitlepro_select_style.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          После выбора стиля в вашей композиции появятся новые слои. Текст субтитров
          хранится в маркерах на этих слоях, поэтому его можно легко редактировать двойным
          кликом по маркеру, а также менять длительность и положение каждой фразы.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          src="images/aftereffects/edit_subtitlepro_text.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="кеинг, клинап, удаление фона, зеленый фон, синий фон, хромакей"
        title="Как и чем можно отделить объект от однотонного фона?"
      >
        <p>
          Предположим, у вас есть исходники с объектом или персонажем на зелёном или синем
          фоне. Чтобы быстро убрать такой фон, нужно воспользоваться инструментами для
          кеинга. Использовать <mark className="plugin">Roto Brush</mark> в этом случае не
          стоит: это может занять больше времени, а результат может оказаться хуже.
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
          В стандартной поставке <mark className="app">Adobe After Effects</mark> есть
          пресет{" "}
          <mark className="plugin">
            Keylight + Key Cleaner + Advanced Spill Suppressor
          </mark>
          , который решает большинство задач по быстрому удалению фона. Чтобы выбрать цвет
          для кеинга, нажмите на иконку пипетки рядом со свойством{" "}
          <mark className="select">«Screen Colour»</mark> в эффекте{" "}
          <mark className="plugin">Keylight</mark>.
        </p>
        <ContentFigure
          caption="Keylight + Key Cleaner + Advanced Spill Suppressor"
          src="tK_Z1dYgtxs"
          type="youtube"
        />
        <p>
          Если у вашего слоя действительно равномерный однотонный фон, можно
          воспользоваться эффектом <mark className="plugin">Linear Color Key</mark> — он
          проще и меньше нагружает систему, если высокое качество кеинга не критично.
        </p>
        <ContentFigure
          caption="Linear Color Key"
          src="8RjOe6cO-cY"
          type="youtube"
        />
        <p>
          В сложных ситуациях, когда объект почти сливается с фоном, простые эффекты вроде{" "}
          <mark className="plugin">Extract</mark> или{" "}
          <mark className="plugin">Color Key</mark> вряд ли могут помочь — они удалят
          лишние детали. Да и прибегать к <mark className="plugin">Roto Brush</mark> тоже
          не хочется. В качестве решения этой проблемы можно попробовать залить фон более
          контрастным цветом с помощью встроенного эффекта{" "}
          <mark className="plugin">Paint Bucket</mark>, а затем прокеить слой любым из
          способов, описанных ранее.
        </p>
        <ContentFigure
          caption="Paint Bucket Keying"
          src="D7jueRoMt_Q"
          type="youtube"
        />
        <Divider>Удаляем однотонный фон сторонними плагинами</Divider>
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
          В качестве альтернативы можно попробовать{" "}
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
        tag="roto brush, power matte, ротоскопирование, ротобраш, выделение объекта, сложный фон"
        title="Как отделить объект от неоднородного фона, сложного для кеинга?"
      >
        <p>
          Существует много инструментов для отделения объекта от фона в сложных ситуациях,
          например, когда у оператора не было возможности снять объект на хромакее, а
          вырезать его на постобработке всё равно нужно.
        </p>
        <Divider>Выделяем объект с помощью встроенного Roto Brush</Divider>
        <p>
          В базовой поставке <mark className="app">Adobe After Effects</mark> давно есть
          удобный инструмент <mark className="plugin">Roto Brush</mark>, который
          вызывается сочетанием клавиш <mark className="key">Alt + W</mark> и позволяет
          отделять объект от фона практически любой сложности. В последних версиях{" "}
          <mark className="app">Adobe After Effects</mark> он обновлён до версии{" "}
          <mark>3.0</mark>, добавив алгоритмы с использованием искусственного интеллекта.
          При грамотной работе этот инструмент способен дать действительно впечатляющий
          результат.
        </p>
        <ContentFigure
          caption="Roto Brush"
          src="eoOIrdb_0ko"
          type="youtube"
        />
        <Divider>Используем сторонние инструменты для ротоскопирования</Divider>
        <p>
          Если результат работы <mark className="plugin">Roto Brush</mark> вас не
          устраивает, вы можете воспользоваться сторонним плагином{" "}
          <mark className="plugin">Boris FX Silhouette</mark>, в котором есть инструмент{" "}
          <mark className="plugin">Power Matte</mark>.
        </p>
        <ContentFigure
          caption="Power Matte in Silhouette"
          src="3pdkJ1BPEg0"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="depth scanner, генерация глубины, размытие фона, карта глубины"
        title="Как и чем можно сгенерировать карту глубины из видео?"
      >
        <p>
          Иногда возникает задача сгенерировать карту глубины из видео, например, для
          размытия фона или для применения эффектов, которые её требуют.
        </p>
        <Addition type="danger">
          Все перечисленные в этой статье способы очень требовательны к мощности
          видеокарты, объёму видеопамяти и оперативной памяти. Рекомендуется использовать
          видеокарты от <mark className="company">NVIDIA</mark>, так как все эти
          инструменты используют ядра <mark>CUDA</mark>.
        </Addition>
        <Divider>Генерация карты глубины в Adobe After Effects</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> это можно сделать с помощью
          стороннего плагина <mark className="plugin">Depth Scanner</mark>. На выбор есть
          множество настроек качества, типа обработки и различных моделей для анализа
          глубины.
        </p>
        <ContentFigure
          caption="Depth Scanner Plugin Tutorial"
          src="OLV8Q93KKHQ"
          type="youtube"
        />
        <p>
          В качестве альтернативы можно воспользоваться плагином{" "}
          <mark className="plugin">Quick Depth</mark>. Он работает похожим образом.
        </p>
        <ContentFigure
          caption="Introduction Quick Depth 3"
          src="2BvqTIPNVxY"
          type="youtube"
        />
        <p>
          Также в <mark className="plugin">Boris FX Continuum</mark> версии{" "}
          <mark>2025.5</mark> и новее появился{" "}
          <mark className="plugin">BCC+Depth Map ML</mark>. С его помощью тоже можно
          генерировать карту глубины и использовать её для создания различных эффектов.
        </p>
        <ContentFigure
          caption="Instant AI Depth Maps with Continuum"
          src="OVLxRFsnqM8"
          type="youtube"
        />
        <Divider>Генерация карты глубины через Depth Anything V2</Divider>
        <p>
          Если вам неудобно работать с плагинами, попробуйте{" "}
          <mark className="app">Depth Anything V2</mark> — отдельное приложение, которое
          умеет генерировать карты глубины как для изображений, так и для видео.
        </p>
        <ContentFilter
          windowsContent={
            <div>
              <Addition type="warning">
                На <mark>macOS</mark> процесс установки{" "}
                <mark className="app">Python</mark> и зависимостей может отличаться.
              </Addition>
              <p>
                Перед установкой <mark className="app">Depth Anything V2</mark> нужно
                подготовить окружение, установив <mark className="app">Python</mark>{" "}
                версии <mark>3.11</mark>. Скачать его можно{" "}
                <a href="https://www.python.org/ftp/python/3.11.9/python-3.11.9-amd64.exe">
                  по этой ссылке
                </a>
                .
              </p>
              <p>
                В процессе установки не забудьте отметить галочку{" "}
                <mark className="select">«Add python.exe to PATH»</mark> — это добавит{" "}
                <mark className="app">Python</mark> в переменные среды, после чего нажмите{" "}
                <mark className="select">«Install Now»</mark>. После окончания процесса
                установки, рекомендуется перезагрузить устройство.
              </p>
              <ContentFigure
                caption="Python 3.11.9 (64-bit) Setup"
                imgTitle="Установка Python 3.11.9"
                src="images/install_python_3119.png"
                theme="light"
                type="image"
                variant="windows"
              />
              <p>
                После установки <mark className="app">Python</mark> скачайте сам{" "}
                <mark className="app">Depth Anything V2</mark>. Для этого на странице{" "}
                <a href="https://github.com/DepthAnything/Depth-Anything-V2">
                  репозитория на GitHub
                </a>{" "}
                нажмите <mark className="select">«Code» → «Download ZIP»</mark>.
              </p>
              <ContentFigure
                caption="GitHub"
                imgTitle="Клонирование репозитория Depth Anything"
                src="images/depth_anything_clone_repo.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <p>
                После распаковки архива откройте командную строку{" "}
                <mark className="app">cmd</mark> или{" "}
                <mark className="app">PowerShell</mark> и перейдите в папку с проектом с
                помощью команды <mark className="code">cd диск:\путь\к\папке</mark>. Далее
                выполните <mark className="code">pip install -r requirements.txt</mark> —
                эта команда подтянет все необходимые зависимости.
              </p>
              <Addition type="warning">
                <ul>
                  <li>
                    На более свежих версиях <mark className="app">Python</mark>, например,
                    <mark>3.12</mark> и новее, некоторые зависимости могут не установиться
                    без «танцев с бубном».
                  </li>
                  <li>
                    Учтите, что по умолчанию устанавливается{" "}
                    <mark className="app">Torch</mark> без поддержки <mark>CUDA</mark>, и
                    обработка будет выполняться на процессоре. Чтобы включить ускорение на
                    видеокарте <mark className="company">NVIDIA</mark>, сначала удалите
                    установленный <mark className="app">Torch</mark> с помощью команды{" "}
                    <mark className="code">pip uninstall torch torchvision -y</mark>, а
                    затем установите версию с поддержкой <mark>CUDA</mark> —{" "}
                    <mark className="code">
                      pip install torch torchvision --index-url
                      https://download.pytorch.org/whl/cu121
                    </mark>
                    .
                  </li>
                  <li>
                    Если у вас видеокарта <mark className="company">NVIDIA</mark> серии{" "}
                    <mark>1000</mark> и предыдущая команда не сработала, попробуйте версию
                    для <mark>CUDA 11.8</mark>:{" "}
                    <mark className="code">
                      pip install torch torchvision --index-url
                      https://download.pytorch.org/whl/cu118
                    </mark>
                    .
                  </li>
                  <li>
                    Если вы используете другие инструменты на{" "}
                    <mark className="app">Python</mark> (например,{" "}
                    <mark className="app">Stable Diffusion</mark>), советую устанавливать
                    зависимости в отдельную виртуальную среду, чтобы избежать конфликтов.{" "}
                    <a href="https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/">
                      Подробнее...
                    </a>
                  </li>
                </ul>
              </Addition>
            </div>
          }
        />
        <p>
          После установки зависимостей нужно скачать модели. Их несколько:{" "}
          <a href="https://huggingface.co/depth-anything/Depth-Anything-V2-Small/resolve/main/depth_anything_v2_vits.pth?download=true">
            Small
          </a>
          ,{" "}
          <a href="https://huggingface.co/depth-anything/Depth-Anything-V2-Base/resolve/main/depth_anything_v2_vitb.pth?download=true">
            Base
          </a>{" "}
          и{" "}
          <a href="https://huggingface.co/depth-anything/Depth-Anything-V2-Large/resolve/main/depth_anything_v2_vitl.pth?download=true">
            Large
          </a>
          . Вы можете скачать все или только одну. Скачанные модели формата{" "}
          <mark className="file">PTH</mark> нужно поместить в папку{" "}
          <mark className="path">checkpoints</mark> внутри папки с репозиторием. Если этой
          папки нет — создайте самостоятельно.
        </p>
        <p>
          Теперь можно запускать генерацию с помощью командной строки. После выполнения
          скрипта вы получите файл с картой глубины, который можно использовать в{" "}
          <mark className="app">Adobe After Effects</mark> или других программах.
        </p>
        <ul>
          <li>
            Для генерации карты глубины для изображения используется скрипт{" "}
            <mark className="file">run.py</mark>.
            <CodeSnippet>
              {`python .\\run.py --encoder МОДЕЛЬ --img-path "ПУТЬ\\К\\ФАЙЛУ" --outdir "ПУТЬ\\ДЛЯ\\СОХРАНЕНИЯ" --grayscale --pred-only`}
            </CodeSnippet>
          </li>
          <li>
            Для генерации карты глубины для видео используется скрипт{" "}
            <mark className="file">run_video.py</mark>.
            <CodeSnippet>
              {`python .\\run_video.py --encoder МОДЕЛЬ --video-path "ПУТЬ\\К\\ФАЙЛУ" --outdir "ПУТЬ\\ДЛЯ\\СОХРАНЕНИЯ" --grayscale --pred-only`}
            </CodeSnippet>
          </li>
          <li>
            <p>
              У скриптов есть параметры, которые нужно прописать для настройки обработки
              карты глубины.
            </p>
            <ul>
              <li>
                Вместо <mark className="code">МОДЕЛЬ</mark> укажите{" "}
                <mark className="code">vits</mark> (Small),{" "}
                <mark className="code">vitb</mark> (Base) или{" "}
                <mark className="code">vitl</mark> (Large).
              </li>
              <li>
                Вместо <mark className="code">ПУТЬ\К\ФАЙЛУ</mark> и{" "}
                <mark className="code">ПУТЬ\ДЛЯ\СОХРАНЕНИЯ</mark> укажите соответствующие
                пути. Рекомендуется заключать пути в кавычки.
              </li>
              <li>
                Аргумент <mark className="code">--grayscale</mark> создаёт чёрно-белую
                карту глубины. Без него она будет цветной.
              </li>
              <li>
                Аргумент <mark className="code">--pred-only</mark> сохраняет только карту
                глубины. Без него вы получите видео «бок о бок» (карта глубины слева,
                оригинал справа).
              </li>
            </ul>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="extract, удаление цвета, удаление фона, кеинг, unmult, черный фон, белый фон"
        title="Как и чем можно вырезать белый или чёрный цвет со слоя?"
      >
        <Divider>Отделяем объект с помощью Extract</Divider>
        <p>
          Для удаления чёрного или белого фона используется эффект{" "}
          <mark className="plugin">Extract</mark>, который доступен в стандартной поставке{" "}
          <mark className="app">Adobe After Effects</mark>. Он позволяет вырезать светлые
          и тёмные участки по их яркости и хорошо подходит для отделения простых объектов.
          Но если вы попытаетесь применить его, например, к футажу со взрывом или сложными
          частицами, рискуете получить неприятную «кашу».
        </p>
        <ContentFigure
          caption="Extract"
          src="v7pqZ9gtn8I"
          type="youtube"
        />
        <Divider>Используем сторонние эффекты</Divider>
        <p>
          Если результат работы стандартного эффекта вас не устраивает, можно
          воспользоваться эффектом <mark className="plugin">Unmult</mark> из стороннего
          пакета <mark className="plugin">Red Giant Universe</mark>. Он качественно
          убирает тёмные оттенки, делая слой прозрачным. Для удаления светлых оттенков
          нужно включить параметр <mark className="select">«Invert»</mark>.
        </p>
        <Addition type="warning">
          С некоторыми футажами может возникнуть ощущение, что слой стал слишком
          прозрачным. В качестве «костыля» можно просто продублировать слой с эффектом.
        </Addition>
        <ContentFigure
          caption="Red Giant Universe Unmult"
          src="GGjIu0CZ1M4"
          type="youtube"
        />
        <Divider>Используем режимы наложения</Divider>
        <p>
          Если вы не хотите возиться с эффектами — вы можете просто поместить видео с
          чёрным фоном поверх других слоёв и применить к нему режим наложения{" "}
          <mark className="select">«Screen»</mark>.
        </p>
        <Addition type="warning">
          Учтите, что режимы наложения работают, только если под слоем есть другие видимые
          слои. Добавлять под него чёрный <mark className="select">«Solid Layer»</mark>{" "}
          бессмысленно.
        </Addition>
        <Divider>Используем чёрно-белый слой как маску</Divider>
        <p>
          Если альфа-канал исходника представлен отдельным чёрно-белым слоем, его можно
          использовать как маску с помощью функции{" "}
          <mark className="select">«Track Matte»</mark>.
        </p>
        <ContentFigure
          caption="How to Use Luma Mattes"
          src="ltrGC0kDFic"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="tracking, camera tracker, mocha, отслеживание движения, стабилизация, привязка объекта"
        title="Как и чем можно прикрепить слой к объекту на видео?"
      >
        <p>
          Предположим, что вам нужно прикрепить объект к другому или сделать трекинг. Это
          можно сделать различными инструментами: как стандартными, так и сторонними.
        </p>
        <Divider>Выполняем трекинг объекта стандартными средствами</Divider>
        {/* один слой к движущемуся объекту на другом
          слое */}
        <p>
          В <mark className="app">Adobe After Effects</mark> есть панель{" "}
          <mark className="plugin">Tracker</mark>, отвечающая за функции, которые могут
          быть полезны при трекинге объектов. Её можно открыть через меню{" "}
          <mark className="select">«Window»</mark>. Панель содержит четыре основные
          кнопки.
        </p>
        <ContentFigure
          caption="Tracker"
          imgTitle="Окно Tracker"
          src="images/aftereffects/tracker_window.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <ul>
          <li>
            <mark className="select">«Track Camera»</mark> — применяет эффект{" "}
            <mark className="plugin">3D Camera Tracker</mark>. Полезен, если нужно
            прикрепить объект к плоскости в трёхмерном пространстве сцены.
            <ContentFigure
              caption="3D Camera Tracker"
              src="yaT3YwIK-BI"
              type="youtube"
            />
          </li>
          <li>
            <mark className="select">«Warp Stabilizer»</mark> — применяет эффект
            стабилизации. Он нужен для устранения тряски камеры и эффекта «пьяного
            оператора».
            <ContentFigure
              caption="Warp Stabilizer"
              src="i-WuS2r8750"
              type="youtube"
            />
            <Addition type="warning">
              Эффект стабилизации может сильно обрезать изображение. Чтобы это исправить,
              в настройках эффекта раскройте <mark className="select">«Auto-scale»</mark>{" "}
              и подберите приемлемое значение{" "}
              <mark className="select">«Maximum Scale»</mark>. Слишком большие значения{" "}
              <mark className="select">«Smoothness»</mark> могут превратить картинку в
              «желе».
            </Addition>
          </li>
          <li>
            <mark className="select">«Track Motion»</mark> — то, что нужно для
            отслеживания движения объекта. С его помощью можно прикрепить любой слой к
            движущемуся объекту.
            <Addition type="info">
              Если объект движется слишком быстро, увеличьте область поиска трекера. Если
              же, наоборот, объект движется медленно, а точка трекинга «уходит» в сторону,
              уменьшите область и попробуйте повысить контрастность исходного видео.
            </Addition>
            <ContentFigure
              caption="Track Motion Tutorial"
              src="VGJOLjamPbQ"
              type="youtube"
            />
          </li>
          <li>
            <mark className="select">«Stabilize Motion»</mark> — функция, которая смещает
            само видео, чтобы отслеживаемый объект оставался в центре кадра.
            <ContentFigure
              caption="Object Tracking"
              src="eyWclmjr94k"
              type="youtube"
            />
          </li>
        </ul>
        <Divider>Выполняем трекинг с помощью Mocha</Divider>
        <p>
          Если результаты стандартных инструментов вас не устроили, вы можете
          воспользоваться <mark className="plugin">Mocha</mark> для планарного трекинга. В
          базовую поставку <mark className="app">Adobe After Effects</mark> входит{" "}
          <mark className="plugin">Mocha AE</mark>. Он несколько урезан по сравнению с
          полной версией, <mark className="plugin">Mocha Pro</mark>, но его возможностей
          достаточно для большинства задач.
        </p>
        <ContentFigure
          caption="Mocha AE For Beginners"
          src="be_8uRcyiEs"
          type="youtube"
        />
        <p>
          Если после переноса данных из <mark className="plugin">Mocha</mark> слой
          «улетает», проверьте его разрешение — оно должно совпадать с разрешением
          композиции. Если разрешения отличаются, слой будет смещаться. Чтобы это
          исправить, примените{" "}
          <a href="files/Mocha_data_rescale_import.ffx">этот пресет</a> от{" "}
          <a href="https://t.me/Pavelusha">@Pavelusha</a> на слой с эффектом{" "}
          <mark className="plugin">Corner Pin</mark>. В настройках пресета в поле{" "}
          <mark className="select">«Source Layer»</mark> выберите слой, с которого вы
          тречили данные.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="шейпы, создание нулей, create nulls from path, анимация пути, нуль-объекты, управление контуром"
        title="Как сделать точки контура управляемыми с помощью нуль-объектов?"
      >
        <p>
          Представим, что у вас есть фигура или маска, и хочется анимировать её контур. В{" "}
          <mark className="app">Adobe After Effects</mark> для этого есть встроенный
          скрипт <mark className="file">Create Nulls From Path.jsx</mark>, который создаёт
          отдельные <mark className="select">«Null Layers»</mark> для каждой точки,
          облегчая дальнейшую анимацию. Найти его можно в меню{" "}
          <mark className="select">«Window» → «Create Nulls From Path.jsx»</mark>.
        </p>
        <ContentFigure
          caption="Animating with Create Nulls From Path"
          src="Unnvx0alhyw"
          type="youtube"
        />
        <p>
          Если после создания нулевых объектов они внезапно сместились относительно
          фигуры, проверьте положение самой фигуры — его значение должно быть нулевым.{" "}
          <i style={{opacity: "0.5"}}>
            И не путайте позицию фигуры с позицией слоя, это разные вещи.
          </i>
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          src="images/aftereffects/fix_create_nulls_from_path.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="stroke, автотрейс, auto-trace, обводка текста, трассировка, стили слоя"
        title="Как сделать обводку слоя?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> обводку вокруг слоя можно
          сделать разными способами — какой использовать в проекте, решать только вам.
          Обводка часто используется, чтобы выделить текст или изображение контрастным
          контуром и подчеркнуть объект в кадре.
        </p>
        <Divider>Создаём обводку с помощью стилей слоя</Divider>
        <p>
          Начнём с первого и быстрого способа создания обводки с помощью стилей слоя. Для
          этого выделите слой, нажмите <mark className="key">ПКМ</mark> и в контекстном
          меню выберите <mark className="select">«Layer Style» → «Stroke»</mark>. После
          этого в свойствах слоя появятся настройки обводки, где можно изменить её цвет,
          прозрачность и размер. Данный способ хорошо подходит, если у вашего слоя имеется
          альфа-канал прозрачности, так как такой способ работает с его использованием.
        </p>
        <ContentFigure
          caption="Создание обводки через Layer Style"
          src="images/aftereffects/stroke_layer-style.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Divider>Создаём обводку с помощью автоматической трассировки</Divider>
        <p>
          Второй способ, через <mark className="select">«Auto-Trace»</mark>, немного
          сложнее предыдущего. Для начала нужно создать маску с помощью функции
          автотрассировки. Для этого выделите слой и выберите{" "}
          <mark className="select">«Layer» → «Auto-Trace»</mark>.
        </p>
        <p>
          В появившемся окне можно указать, на основе чего строить контур: альфа-канал,
          яркость или цвет, а также задать диапазон — один кадр или вся рабочая область.
          Если нужно, чтобы маска применилась на текущий слой, снимите флажок{" "}
          <mark className="select">«Apply to new layer»</mark>. После нажатия{" "}
          <mark className="select">«OK»</mark> маска появится на слое, и к нему уже можно
          добавить эффект <mark className="plugin">Stroke</mark> или альтернативы вроде{" "}
          <mark className="plugin">Saber</mark> и{" "}
          <mark className="plugin">Thicc Stroke</mark>.
        </p>
        <Addition type="info">
          Эффект <mark className="plugin">Stroke</mark> автоматически создаст обводку по
          первой маске на слое. Если масок несколько, можно выбрать нужную в настройках
          эффекта.
        </Addition>
        <ContentFigure
          caption="Создание обводки через Auto-Trace и эффект Stroke"
          src="images/aftereffects/stroke_auto-trace.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Divider>Задаём обводку тексту в панели Character</Divider>
        <p>
          Если нужно добавить обводку только для текста, используйте окно{" "}
          <mark className="select">«Character»</mark>. Обводка включается изменением
          параметра <mark className="select">«Set the stroke width»</mark>, а в выпадающем
          списке рядом можно выбрать способ обводки<sup>1</sup>. Цвет обводки задаётся
          дополнительным цветом в палитре, он показывается за основным.
        </p>
        <Addition type="info">
          <sup>1</sup> Значения <mark className="select">«Stroke Over Fill»</mark> и{" "}
          <mark className="select">«Fill Over Stroke»</mark> отвечают за отображение
          обводки поверх или под заливкой.
        </Addition>
        <ContentFigure
          caption="Character"
          src="images/aftereffects/character_stroke.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="морфинг, анимация шрифта, толщина текста, variable fonts"
        title="Как сделать анимацию толщины шрифта?"
      >
        <p>
          Для анимации перехода от тонкого начертания шрифта к жирному используется
          техника морфинга фигур. В видео ниже показано, как создать два текстовых слоя с
          разной толщиной, преобразовать их в слои-фигуры и анимировать свойство контура,
          чтобы получить плавную и красивую анимацию смены толщины текста.
        </p>
        <ContentFigure
          caption="Smooth Typo Transition from Bold Text to Thin Text"
          src="yyDAFSC2qDo"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="персонажная анимация, duik, puppet tool, rubberhose, limber, character tool, риггинг, инструменты для анимации"
        title="Какими средствами обычно делают анимацию персонажей?"
      >
        <p>
          Для персонажной анимации в <mark className="app">Adobe After Effects</mark>{" "}
          используются как встроенные инструменты, так и сторонние решения.
        </p>
        <ul>
          <li>
            <mark className="plugin">Puppet Tool</mark> — простой и удобный инструмент,
            который уже есть в стандартной поставке программы. Он позволяет деформировать
            слой, расставляя «булавки», словно управляя марионеткой.{" "}
            <a href="https://www.youtube.com/watch?v=Vu3RHRnoRM4">Как им пользоваться?</a>
            <Addition type="warning">
              При использовании <mark className="select">«Continuously Rasterize»</mark>{" "}
              возможны разрывы слоя.
            </Addition>
          </li>
          <li>
            <mark className="plugin">Duik</mark> — один из самых известных сторонних
            инструментов для создания персонажной анимации. Распространяется{" "}
            <a href="https://rxlaboratory.org/duik-angela-download/">
              бесплатно на официальном сайте
            </a>
            . В качестве альтернативы можно рассмотреть{" "}
            <mark className="plugin">Rubberhose</mark>,{" "}
            <mark className="plugin">Limber</mark>,{" "}
            <mark className="plugin">Character Tool</mark> и другие.
            <Addition type="warning">
              <mark className="plugin">Duik</mark> на момент написания этой статьи может
              работать нестабильно в <mark className="app">Adobe After Effects</mark>{" "}
              версии <mark>2025</mark>.
            </Addition>
            <ContentFigure
              caption="Сравнение популярных плагинов для персонажной анимации"
              src="AcEIT03Mrzk"
              type="youtube"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="биты, аудио в ключи, синхронизация с аудио, маркеры, ключевые кадры"
        title="Как быстро расставить ключевые кадры и маркеры под бит?"
      >
        <p>
          Иногда возникает необходимость анимировать свойство эффекта под звук, и,
          конечно, хочется сделать это автоматически. Если у вас есть аудиофайл, особенно
          с хорошо выраженными битами, его будет довольно легко использовать для генерации
          ключевых кадров на основе звуковой волны.
        </p>
        <Addition type="info">
          Если вам нужно извлечь биты или отделить вокал от остальной музыки —
          воспользуйтесь бесплатной программой{" "}
          <a href="https://github.com/stemrollerapp/stemroller/releases">StemRoller</a>.
          Для быстрой обработки аудио требуется хорошая видеокарта.
        </Addition>
        <Divider>Генерируем ключи стандартными средствами</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> можно превратить аудио в
          ключевые кадры стандартным способом: <mark className="key">ПКМ</mark> по
          аудиослою →{" "}
          <mark className="select">
            «Keyframe Assistant» → «Convert Audio to Keyframes»
          </mark>
          . Однако у этого метода есть недостаток: чувствительность изменить нельзя, и
          программа создаёт ключевой кадр буквально на каждом кадре слоя.
        </p>
        <ContentFigure
          caption="Генерация ключевых кадров из аудиодорожки"
          imgTitle="Генерация ключевых кадров из аудиодорожки"
          src="images/aftereffects/convert_audio_to_keyframes.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Генерируем ключи на основе аудио сторонними инструментами</Divider>
        <p>
          Если результат конвертации аудио в ключи стандартными средствами вам не
          понравился — лучше использовать сторонние инструменты, например,{" "}
          <mark className="plugin">Sound Keys</mark> из пакета{" "}
          <mark className="plugin">Red Giant Trapcode Suite</mark>. Он даёт хороший
          результат за счёт гибкой настройки, но не умеет ставить маркеры.
        </p>
        <ContentFigure
          caption="Как пользоваться Sound Keys в Adobe After Effects"
          src="uqKFsIHu-DA"
          type="youtube"
        />
        <Divider>Расставляем маркеры</Divider>
        <p>
          Для создания ключей, а самое главное маркеров, на помощь приходит ещё один
          сторонний плагин — <mark className="plugin">Beat Edit</mark>. Он создаёт меньше
          ключевых кадров, что позволяет в дальнейшем легче адаптировать ключи под аудио.
        </p>
        <ContentFigure
          caption="Как создавать маркеры с помощью Beat Edit"
          src="JGVLRcjp7ss"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="decomposetext, разделение текста на слои, текстовые слои"
        title="Как разбить текстовый слой на отдельные слои по буквам, словам или строкам?"
      >
        <p>
          Для быстрого разделения текстового слоя на буквы, слова или строки существует
          сторонний скрипт{" "}
          <a href="https://aescripts.com/decomposetext/">DecomposeText</a>
          <sup>1</sup>. С его помощью из одного текстового слоя можно сгенерировать
          несколько, что позволяет анимировать каждую часть текста отдельно.
        </p>
        <Addition type="info">
          <sup>1</sup> Чтобы скачать скрипт бесплатно, зарегистрируйтесь на{" "}
          <a href="https://aescripts.com">aescripts</a>, на странице плагина установите
          цену <mark>0</mark> в поле <mark className="select">«Name Your Own Price»</mark>
          , добавьте его в корзину и оформите заказ. Ссылка на скачивание появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>
          .
        </Addition>
        <Addition type="warning">
          Скрипт не работает с <mark className="select">«Paragraph Text»</mark>, текстовый
          слой нужно перевести в <mark className="select">«Point Text»</mark>. Для этого
          выберите инструмент <mark className="select">«Text»</mark>, кликните{" "}
          <mark className="key">ПКМ</mark> по текстовому блоку в окне предпросмотра и в
          контекстном меню выберите{" "}
          <mark className="select">«Convert to Point Text»</mark>.
        </Addition>
        <ContentFigure
          caption="Разделение текстового слоя на слова с помощью DecomposeText"
          src="images/aftereffects/decomposetext.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="rd:compsetter, пакетная обработка, настройки композиции, массовое изменение"
        title="Как изменить параметры сразу у нескольких композиций?"
      >
        <p>
          Изменить разрешение, частоту кадров или другие параметры сразу у нескольких
          композиций стандартными средствами нельзя. Для этого придётся воспользоваться
          сторонним скриптом, например{" "}
          <a href="https://aescripts.com/rd-compsetter/">rd: Comp Setter</a>. После
          открытия скрипта, выделите нужные композиции в окне{" "}
          <mark className="select">«Project»</mark>, укажите новые параметры и нажмите{" "}
          <mark className="select">«Apply»</mark>.
        </p>
        <ContentFigure
          caption="Демонстрация работы rd: Comp Setter"
          src="images/aftereffects/rd_compsetter_demonstration.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="корректирующий слой, маскирование эффектов, маски для эффектов, выборочные эффекты, adjustment layer"
        title="Как применить корректирующий слой только к определённым слоям?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> нельзя применить действие
          корректирующего слоя только на определённые слои — он влияет на все, что
          расположены ниже по таймлайну. Обычно проблему решают перестановкой слоёв или
          используют обходные методы вроде создания предварительных композиций или
          использования масок.
        </p>
        <Divider>Используем Red Giant Supercomp</Divider>
        <p>
          Для реализации первого «костыля» с помощью маски, понадобится эффект{" "}
          <mark className="plugin">Supercomp</mark> из пакета{" "}
          <mark className="plugin">Red Giant VFX Suite</mark>. С его помощью нужно создать
          чёрно-белую маску из нужных слоёв, как показано на видео.
        </p>
        <ContentFigure
          caption="Демонстрация создания маски с помощью Supercomp"
          src="images/aftereffects/supercomp_demonstration.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Divider>Работаем с масками</Divider>
        <p>
          Если вы не хотите устанавливать <mark className="plugin">VFX Suite</mark>, можно
          создать маску и без него: для этого сделайте прекомпозицию из нужных слоёв, а
          затем примените к ней эффект <mark className="plugin">Fill</mark> или просто
          обесцветьте её и доведите до максимальной яркости.
        </p>
        <Addition type="warning">
          Учтите, что со сложными слоями этот способ может не сработать. Однако вам никто
          не запрещал экспериментировать с масками на основе яркости или альфа-канала.
        </Addition>
        <ContentFigure
          caption="Создание маски для корректирующего слоя без плагинов"
          src="images/aftereffects/supercomp_without_plugins.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
    </div>
  );
};

export default AEActions;
