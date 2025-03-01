import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";

const AEPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Performance.tsx" />
      <DetailsSummary
        title="Почему у меня, б%@#ь, лагает е&#!%й After Effects, с$%а?"
        tag="тормозит, лаги, медленно, скорость работы, оптимизация, производительность"
      >
        <p>
          Здесь по этому вопросу можно рассуждать долго и бесконечно. Тут нельзя назвать
          конкретную причину этого магического явления, так как всё обычно упирается в
          действия пользователя или в железо его устройства.
        </p>
        <p>
          Для начала, пожалуйста, проверьте ваше устройство на соответствие{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            системным требованиям
          </a>{" "}
          для <mark className="app">After Effects</mark>. На момент написания этого пункта
          для адекватной работы требуется минимум 16 Гб ОЗУ (для более комфортной работы -
          минимум 32 Гб ОЗУ) и процессор от Intel минимум 8-го поколения или AMD Ryzen
          минимум 1000 серии.
        </p>
        <AdditionWarning>
          С <mark className="app">After Effects 2024</mark> и новее требуются процессоры с
          поддержкой инструкций AVX2. Если у вашего процессора нет таких инструкций, то
          для вас последняя версия программы - <mark>23.6</mark>, более свежую вы не
          сможете поставить.{" "}
          <del style={{opacity: "0.5"}}>Иначе наткнётесь на ошибку 0xc0000142.</del>
        </AdditionWarning>
        <p>
          Предположим, что ваше устройство прекрасно соответствует системным требованиям и
          вы начинаете работу, постепенно накидывая в композиции кучу различных эффектов и
          непонятные исходники из &quot;интернетов&quot;. И как раз из-за этого вся
          производительность может упасть, особенно если вы используете сторонние плагины
          из пакетов от <mark>Boris FX</mark> или <mark>Red Giant</mark>.{" "}
          <mark className="app">After Effects</mark> не любит, когда вы накидываете кучу
          эффектов, называя свою композицию &quot;эдитом&quot;, или когда пайплайн по
          импорту нарушен.
        </p>
        <p>
          Постарайтесь{" "}
          <b>
            <u>не устанавливать</u>
          </b>{" "}
          кучу плагинов и расширений в <mark className="app">After Effects</mark>, а также{" "}
          <b>
            <u>не мешать в проекте кучу эффектов</u>
          </b>{" "}
          с одинаковой сутью, но из разных пакетов, например{" "}
          <mark className="plugin">BCC Camera Shake</mark> и{" "}
          <mark className="plugin">uni.shake</mark>. Иногда неверная очерёдность эффектов
          может привести к непредвиденным результатам, а также к снижению
          производительности.
        </p>
        <p>
          Довольно часто пользователи скачивают различные файлы, пережатые непонятно во
          что и импортируют в <mark className="app">After Effects</mark>, а потом через
          некоторое время замечают некоторые проблемы: артефакты, баги или вообще снижение
          производительности при банальных действиях с композицией.
        </p>
        <ul>
          <li>
            Если вы скачали видео в формате <mark className="file">.mp4</mark> из
            интернета, то вам необходимо переконвертировать его в срочном порядке в
            монтажный кодек, например <mark className="video">Apple Prores 422</mark> или{" "}
            <mark className="video">DNxHR</mark> через{" "}
            <mark className="app">Media Encoder</mark> или{" "}
            <mark className="app">Shutter Encoder</mark>. Это делать нужно каждый раз,
            прежде чем импортировать файлы в <mark className="app">After Effects</mark>,
            полученные через YouTube или другие подобные площадки.{" "}
            <mark className="app">After Effects</mark> не всегда корректно отрабатывает
            подобные исходники, потому что площадки изменяют стандарт{" "}
            <mark className="video">H.264</mark> под себя и такие исходники плохо крутятся
            программой.
          </li>
          <li>
            Если ваше видео закодировано с переменным FPS (узнать об этом можно через{" "}
            <mark className="app">MediaInfo</mark>), то такие файлы нужно
            переконвертировать через выше названные утилиты в постоянный (Constant) FPS.
          </li>
          <li>
            Также чтобы исключить проблемы с звуком - аудио-файлы тоже следует
            переконвертировать, например в <mark className="file">.wav</mark>, ведь оно
            может проигрываться рыками, замедленно или с другими звуковыми багами.
            Переконвертировать аудио можно также через{" "}
            <mark className="app">Media Encoder</mark>,{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">EZ CD Audio Converter</mark>.
          </li>
        </ul>
        <p>
          Подробнее о типах кодеков и их области применения вы можете посмотреть в видео
          от <a href="https://www.youtube.com/@VideoSmile">VideoSmile</a> ниже.
        </p>
        <YouTubeVideo
          link="MprgQSTqL9E"
          caption="Типы кодеков и их применение"
        />
        <p>
          Если у вас лагает интерфейс программы и вам сложно в ней выполнять какие-либо
          действия, то скорее всего вы не заметили, что по умолчанию в{" "}
          <mark className="app">After Effects</mark> 2022 и новее включена функция{" "}
          <mark className="ui">Cache Frames When Idle</mark>. Эта функция начинает
          кэширование композиции, когда вы ничего не делаете. Часто на слабых устройствах
          эта функция заставляет тормозить программу и систему, особенно если у вас много
          эффектов, поэтому рекомендую его отключить. Для этого достаточно прожать
          комбинацию клавиш <mark className="key">Alt + Shift + I</mark> или выключить его
          в <mark className="ui">Composition &gt; Preview</mark>.
        </p>
        <p>
          Иногда проблемы с производительностью программы могут возникнуть из-за шрифтов в
          проекте. Да, такое бывает, когда вы используете кривой шрифт и даже не
          догадываетесь об этом. Для решения этой проблемы достаточно заменить шрифт на
          аналогичный или скачать его из другого источника.
        </p>
        <p>
          Также в <mark className="app">After Effects</mark> с версий 2022 и новее
          добавили функционал <mark className="ui">Render Time</mark>, позволяющий увидеть
          время рендера того или иного эффекта в ваших слоях. С помощью него можно
          проанализировать производительность вашего проекта и по возможности
          оптимизировать его, заменив эффекты на более лёгкие или убрав их. Также внизу
          пишется общее время рендера текущего кадра, вычисляя время рендера всех слоев.
        </p>
        <AdditionInfo>
          Чтобы включить отображение времени рендера того или иного слоя, нажмите на
          иконку улитки в левом нижнем углу окна таймлайна или включите колонку{" "}
          <mark className="ui">Render Time</mark> в пункте{" "}
          <mark className="ui">Columns</mark>, нажав <mark className="key">ПКМ</mark> по
          столбцам.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/view_render_time.png"
          imgTitle="Смотрим время рендера слоя"
          caption="Timeline"
        />
        <p>
          Ещё важную роль в производительности программы играет накопитель, на котором
          установлена программа и на котором лежат исходники. Если вы с{" "}
          <mark>M.2 SSD</mark> особых проблем не почувствуете, то при работе с исходниками
          с <mark>HDD</mark>, особенно медленных и потрёпанных жизнью, могут начаться
          проблемы. Если у вас есть <mark>SSD</mark> с большим объёмом памяти - следует
          перенести весь проект туда и продолжить работу, используя его.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как заставить программу использовать всю мощь компьютера?">
        <p>
          Предположим, что вы только-только купили новый процессор и хотите его отжарить,
          а <mark className="app">After Effects</mark> делает это не охотно, то с помощью
          функции <mark className="ui">Multi-Frame Rendering</mark> вы сможете заставить
          программу использовать весь потенциал процессора за счёт рендера нескольких
          кадров одновременно.
        </p>
        <p>
          В новых версиях <mark className="app">After Effects</mark> функция{" "}
          <mark>Multi-Frame Rendering</mark> по умолчанию и в настройках можно ограничить
          использование процессора на вашем компьютере, для того, чтобы дать другим
          программам на вашем компе немного мощности.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/mfr_settings.png"
          imgTitle="Настройка ограничения процессора при многокадровом рендере"
          caption="Preferences"
        />
        <AdditionWarning>
          <ul>
            <li>
              Пожалуйста,{" "}
              <b>
                <u>не путайте значения</u>
              </b>{" "}
              и{" "}
              <b>
                <u>внимательно прочтите пункт настройки</u>
              </b>
              . Значение <mark>10%</mark> означает, что{" "}
              <mark className="app">After Effects</mark> будет использовать{" "}
              <mark>90%</mark> использования процессора и оставит <mark>10%</mark> для
              остальных программ. Если вы установите значение <mark>70%</mark>, то вы
              отдадите программе всего лишь <mark>30%</mark> мощности.
            </li>
            <li>
              Использование <mark className="ui">Multi-Frame Rendering</mark> может
              привести к увеличению потребления оперативной памяти и есть риск чаще видеть
              ошибку <mark>Out of Memory</mark>. Для этого либо отключите{" "}
              <mark className="ui">Multi-Frame Rendering</mark>, либо ограничьте
              использование оперативной памяти, увеличив значение{" "}
              <mark className="ui">RAM reserved for other applications</mark> в
              настройках. Также{" "}
              <a href="https://remontka.pro/fail-podkachki-windows/">
                настройте файл подкачки
              </a>
              , если у вас устройство на Windows и установите программу{" "}
              <a href="https://github.com/henrypp/memreduct/releases">Mem Reduct</a> для
              периодической очистки ОЗУ.
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Поговорим про видеокарту. Даже если вы и купили условный <mark>RTX 5090</mark>,
          то программе будет на это пофиг. Абсолютно. Компании Adobe без разницы несколько
          у вас мощная видеокарта, пока у <mark className="app">After Effects</mark> до
          сих пор нет полной поддержки GPU-ускорения. Конечно, вы можете использовать
          сторонние эффекты с поддержкой GPU-ускорения, например из пакета{" "}
          <mark className="plugin">Boris FX Sapphire</mark> или{" "}
          <mark className="plugin">Red Giant</mark>. Но если вы примените эффект, который
          не поддерживает GPU-ускорение, то толк от видеокарты начинает пропадать.
        </p>
        <p>
          Включить отображение только тех эффектов, которые поддерживают GPU-ускорение,
          можно с помощью контекстного меню в окне{" "}
          <mark className="ui">Effects & Presets</mark>, включив пункт{" "}
          <mark className="ui">Show GPU Capable Effects Only</mark>. После включения этого
          параметра вы заметите, насколько сильно сократится список ваших эффектов.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/show_gpu_capable_effects_only.png"
          imgTitle="Включение отображение только тех эффектов, которые поддерживают GPU-ускорение"
          caption="After Effects"
        />
        <p>
          Рядом с названием плагинов обычно отображаются значки, которые показывают
          максимальную поддержку битности цветов (8, 16 или 32 бит) и иногда показывается
          вторая иконка рядом с битностью, которая показывает, что этот эффект
          поддерживает GPU-ускорение.
        </p>
        <AdditionInfo>
          Если эффект поддерживает только 8 бит на цветовой канал, а в менеджере проекта
          вы выставите 16 или 32 бита, то при применении такого эффекта выскочит
          предупреждение, показывающая что при использовании большей битности в проекте -
          эффект может сократить вам цветовой охват и может некорректно работать с HDR
          исходниками.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/effect_icons.png"
          imgTitle="Иконки рядом с эффектами"
          caption="Effects & Presets"
        />
        <p>
          У некоторых возникает ещё странный вопрос, мол почему видеокарта в{" "}
          <mark className="app">Premiere Pro</mark> используется чаще, чем в{" "}
          <mark className="app">After Effects</mark>? Ответ прост,{" "}
          <mark className="app">Premiere Pro</mark> является программой для нелинейного
          монтажа и обычно от него ожидают больше производительность и работу с
          исходниками в режиме реального времени, порой забивая на качество результата. А{" "}
          <mark className="app">After Effects</mark> в первую очередь - программа для
          композитинга и создания эффектов, от него ожидают качество, пусть и с маленькой
          производительностью. Да, <mark className="app">After Effects</mark> стараются
          время от времени как-то оптимизировать и где-то улучшить производительность, но
          высокой скорости работы от программы ждать не надо. Программы хоть и схожи по
          задаче редактирования видео, но подходы их реализации разительно отличаются.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как отключить автоматическое кэширование предпросмотра при бездействии?">
        <p>
          Функция автоматического кэширования кадров во время простоя была добавлена в{" "}
          <mark className="app">After Effects</mark> версии 2022 и новее, а также включена
          по умолчанию. Но эта функция часто мешает комфортной работе с проектом на слабых
          компьютерах или с нагруженными эффектами, нагружая системные компоненты лишний
          раз и заполняя оперативную память. Благо в Adobe додумались ввести параметр для
          отключения кэширования в простое.
        </p>
        <p>
          Для отключения автоматического кэширования при бездействии пользователя,
          перейдите в <mark className="ui">Composition &gt; Preview</mark> и выключите
          галочку <mark className="ui">Cache Frames When Idle</mark> или прожмите
          комбинацию клавиш <mark className="key">Alt + Shift + I</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/disable_idle_cache.png"
          imgTitle="Отключение автоматического кэширования предпросмотра при бездействии"
          caption="After Effects"
        />
        <p>
          Если вы не хотите отключать эту функцию, но хотите изменить время, после
          которого начнётся автоматического кэширования, то перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Previews</mark>. В пункте{" "}
          <mark className="ui">Idle Delay Before Caching Starts</mark> вы можете указать
          любое число от <mark>2</mark> до <mark>15</mark>.
        </p>
        <AdditionInfo>
          Чуть ниже этого пункта можно настроить область кэширования и направление
          кэширования: вокруг временной метки, от временной метки или от начала рабочей
          области.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_time_idle_cache.png"
          imgTitle="Изменение времени для автоматического кэширования при бездействии"
          caption="Preferences"
        />
      </DetailsSummary>
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта? Как мне переключить рендер на процессор?">
        <p>
          Несмотря на то, что в окне менеджера проекта можно включить видеокарту,
          программа не будет использовать его во многих случаях, особенно когда вы
          применяете CPU-эффекты вместе с GPU-эффектами. Рендер на процессоре (или же при
          включенном пункте <mark className="ui">Mercury Software Only</mark>) может
          уменьшить количество возможных артефактов и багов после экспорта вашего проекта,
          нежели при использовании псевдо-GPU-ускорения.
        </p>
        <p>
          Для изменения, на чём выполнять рендеринг, нужно перейти в{" "}
          <mark className="ui">Project Manager</mark>. Его можно открыть комбинацией
          клавиш <mark className="key">Ctrl + Alt + Shift + K</mark>. В вкладке{" "}
          <mark className="ui">Video Rendering and Effects</mark> можно выбрать то, что
          нам нужно, а именно <mark className="ui">Mercury Software Only</mark> для
          включения рендера на процессоре.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/project_manager_mercury.png"
          imgTitle="Переключение типа рендера"
          caption="Project Manager"
        />
        <ul>
          <li>
            <mark className="ui">Mercury Software Only</mark> позволяет{" "}
            <mark className="app">After Effects</mark> реже прибегать к использованию
            видеокарты и использовать в большинстве случаев рендеринг на процессоре.
            <AdditionInfo>
              При включенном <mark className="ui">Mercury Software Only</mark>{" "}
              какой-нибудь сторонний эффект всё же может просчитаться через GPU при
              необходимости, например <mark className="plugin">Depth Scanner</mark>.
              Обычно это поведение можно изменить в настройках стороннего плагина.
            </AdditionInfo>
          </li>
          <li>
            <mark className="ui">Mercury GPU Acceleration (CUDA или OpenCL)</mark>{" "}
            использует процессор и видеокарту, но видеокарта никогда не будет
            гарантированна использоваться во всех случаях, она будет использоваться только
            при необходимости самой программой.
            <AdditionWarning>
              На видеокартах с малым объёмом VRAM лучше не использовать этот пункт, ибо
              будете часто сталкиваться с ошибкой{" "}
              <mark>
                After Effects has encountered a failure related to GPU-enabled effects
                from this frame
              </mark>
              .
            </AdditionWarning>
          </li>
        </ul>
        <p>
          При включенном пункте <mark className="ui">Mercury Software Only</mark>, то есть
          при рендере на процессоре, время просчёта композиций может измениться в худшую
          сторону, но зачастую остаётся неизменным. Иногда при рендеринге на процессоре
          просчёт может пройти быстрее, чем при использовании{" "}
          <mark className="ui">Mercury GPU Acceleration</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Предпросмотр идёт как-будто в slow-motion, что делать?"
        tag="замедленное превью, слоумо, растянутое аудио"
      >
        <p>
          Скорее всего вы пытаетесь проиграть предпросмотр в реальном времени - эффекты и
          видео-исходники вряд ли смогут так быстро обрабатывать кадры на лету, чтобы оно
          игралось спокойно и без запинок. В окне <mark className="ui">Info</mark> обычно
          отображается текущий FPS предпросмотра и дополнительная информация о рендеринге
          и проигрывании кадров из памяти.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/info_non-realtime.png"
          imgTitle="Предпросмотр не в реальном времени"
          caption="Info"
        />
        <p>
          Чтобы устранить это стандартное поведение программы - вам нужно закэшировать
          предпросмотр, прежде чем его воспроизводить. Для этого откройте окно{" "}
          <mark className="ui">Preview</mark> и прожмите две опции:{" "}
          <mark className="ui">Cache Before Playback</mark> и{" "}
          <mark className="ui">If caching, play caching frames</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/preview_caching.png"
          imgTitle="Включение кэширования предпросмотра"
          caption="Preview"
        />
        <ul>
          <li>
            Включение чекбокса у <mark className="ui">Cache Before Playback</mark>{" "}
            позволит программе закэшировать предпросмотр, прежде чем воспроизвести его.
            Повторное нажатие на кнопку воспроизведения остановит кэширование.
          </li>
          <li>
            Включение чекбокса у{" "}
            <mark className="ui">If caching, play caching frames</mark> позволит
            остановить кэширование предпросмотра и проиграть те кадры, которые уже
            закэшировались при повторном нажатии на кнопку воспроизведения.
          </li>
        </ul>
        <p>
          Если вы используете в проекте видео-исходники, скачанные из интернета, то скорее
          всего они были закодированы в неприятный для{" "}
          <mark className="app">After Effects</mark> кодек и плохо проигрываются
          программой. Для решения проблемы - достаточно перекодировать ваши исходники в
          монтажный кодек, например <mark className="video">Apple Prores 422</mark> через
          конвертер, например <mark className="app">Shutter Encoder</mark>. После
          конвертации - импортируйте исходники снова и попытайтесь воспроизвести
          предпросмотр снова.
        </p>
        <p>
          Если ваши видео-исходники играются плавно, но вы испытываете проблемы только со
          звуком - стоит попробовать вывести аудио из видео отдельным файлом и
          перекодировать его в <mark className="file">.wav</mark>, а затем импортировать
          его в программу заново.
        </p>
        <p>
          Иногда бывает такое, что вы случайно изменили{" "}
          <mark className="ui">Frame Rate</mark> в окне{" "}
          <mark className="ui">Preview</mark> и композиция проигрывается либо быстро, либо
          замедленно. Для этого в пункте <mark className="ui">Frame Rate</mark> установите
          значение <mark className="ui">Auto</mark>. Это позволит программе воспроизводить
          предпросмотр в соответствии с частотой кадров в настройках композиции.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/preview_change_fps.png"
          imgTitle="Изменение частоты кадров предпросмотра"
          caption="Preview"
        />
        <p>
          Если у вас возникают проблемы с записью кэша на жёсткий диск, то вы можете
          отключить опцию кэширования на жёсткий диск в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark>, убрав
          чекбокс из пункта <mark className="ui">Enable Disk Cache</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/disable_disk_cache.png"
          imgTitle="Отключение дискового кэша"
          caption="Preferences"
        />
        <p>
          В редких случаях бывают ситуации, когда вы переключились между звуковыми
          выходами, например, подключили беспроводные наушники. Из-за внезапной смены
          аудио-выхода <mark className="app">After Effects</mark> не может нормально
          синхронизировать картинку и звук. В таких случаях рекомендуется обновить
          звуковые драйвера или изменить аудиовыход на другой в{" "}
          <mark className="ui">Default Output</mark> и уменьшить значение{" "}
          <mark className="ui">Latency</mark> до минимального в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/audio_hardware_settings.png"
          imgTitle="Настройки звукового выхода"
          caption="Preferences"
        />
      </DetailsSummary>
    </div>
  );
};
export default AEPerformance;
