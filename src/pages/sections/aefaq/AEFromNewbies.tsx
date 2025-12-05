import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ContentFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import ContentFilter from "../../../components/features/ContentFilter";

import EasingEditor from "../../../components/features/EasingEditor";

const AEFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        anchor="get-started"
        tag="для новичка, курсы, туториалы, уроки, базовый курс"
        title="Я первый раз открыл программу. С чего бы мне начать обучение?"
      >
        <Addition type="warning">
          <ul>
            <li>
              Учтите, что большинство авторов курсов и каналов на{" "}
              <mark className="app">YouTube</mark> работают в английской версии программы.
              Чтобы избежать проблем с локализацией, рекомендуется{" "}
              <a href="#3.6">изменить язык программы на английский</a>, если у вас
              установлена русская версия. Это поможет избежать путаницы с переводом
              названий эффектов или элементов интерфейса.
            </li>
            <li>
              Если вы предпочитаете работать с русской локализацией{" "}
              <mark className="app">Adobe After Effects</mark>, вам могут пригодиться
              таблицы перевода <a href="#1.6">эффектов</a> и <a href="#1.7">пресетов</a>.
            </li>
            <li>
              Не стоит всерьёз полагаться на <mark className="app">ChatGPT</mark>,{" "}
              <mark className="app">DeepSeek</mark> или другие текстовые нейросети при
              обучении работе в <mark className="app">Adobe After Effects</mark>. Они
              часто придумывают несуществующие функции программы или указывают не на те
              элементы интерфейса.
            </li>
          </ul>
        </Addition>
        <Divider>Курсы для начинающих</Divider>
        <ul>
          <li>
            Если вы только начинаете свой путь в мире композитинга и никогда не работали с
            программами вроде <mark className="app">Adobe After Effects</mark>, рекомендую
            пройти курс{" "}
            <a href="https://www.youtube.com/playlist?list=PLcN7xY5E2wrmIU__8uNIHglZTyZ29RMIM">
              «Основы After Effects» от Ильи Зернова
            </a>
            . Этот курс поможет вам освоить интерфейс программы и научиться работать с
            ключевыми кадрами, титрами и эффектами.
            <ContentFigure
              caption="Основы After Effects от Ильи Зернова"
              src="nogR7eyhYug"
              type="youtube"
            />
          </li>
          <li>
            В качестве альтернативы вы можете пройти{" "}
            <a href="https://www.youtube.com/playlist?list=PLrsq-o51mMFE4ez9Q4qmkyoXZ_lYsyZNi">
              мини-курс «After Effects для начинающих» от VideoSmile
            </a>
            . При прохождении этого курса вы научитесь работать с различными эффектами,
            создавать анимацию текста, а также использовать маски и инструмент{" "}
            <mark className="plugin">Roto Brush</mark> для вырезания объектов в кадре.
            <ContentFigure
              caption="After Effects для начинающих"
              src="ZTrELWgEtUI"
              type="youtube"
            />
          </li>
          <li>
            Если вы владеете английским на уровне комфортного понимания речи, рекомендую к
            просмотру плейлист{" "}
            <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib">
              «Learn Adobe After Effects» от Gareth David Studio
            </a>
            . Автор подробно разбирает основные функции программы и демонстрирует
            различные примеры работы.
            <ContentFigure
              caption="What is Adobe After Effects?"
              src="FuJMHF510mc"
              type="youtube"
            />
          </li>
          <li>
            Если вы уже знакомы с интерфейсом программы, но всё ещё чувствуете себя
            неуверенно, попробуйте изучить каналы на <mark className="app">YouTube</mark>{" "}
            из списка ниже — они помогут прокачать ваши навыки.
            <div className="flexible-links">
              <a href="https://www.youtube.com/@TutoView/videos">Tutorials View+</a>
              <a href="https://www.youtube.com/@BenMarriott/videos">Ben Marriott</a>
              <a href="https://www.youtube.com/@AEPlug/videos">AEPlug</a>
              <a href="https://www.youtube.com/@JakeInMotion/videos">Jake In Motion</a>
              <a href="https://www.youtube.com/@SmertimbaGraphics/videos">
                Smertimba Graphics
              </a>
              <a href="https://www.youtube.com/@SonduckFilm/videos">SonduckFilm</a>
              <a href="https://youtube.com/@ollyspin/videos">olly</a>
              <a href="https://youtube.com/@mapal/videos">Mapal</a>
              <a href="https://www.youtube.com/@motionbyscott/videos">Motion By Scott</a>
              <a href="https://www.youtube.com/@MotionXP/videos">MotionXP</a>
            </div>
          </li>
          <li>
            И не забываем про дополнительный список как бесплатных, так и платных
            комплексных курсов по <mark className="app">Adobe After Effects</mark>,
            затрагивающий разные области применения программы.
            <div className="flexible-links">
              <a href="https://cloudlessons.ru/v/410/">
                «Супер After Effects» от VideoSmile
              </a>
              <a href="https://volnitsa.zenclass.ru/public/course/4b9a6429-5c06-4f91-a73b-312bc57b9e35">
                «Быстрый вход в After Effects» от Вольницы
              </a>
              <a href="https://volnitsa.zenclass.ru/public/course/9221df49-3262-444e-b269-8b3bfd496de2">
                «SUPER SILA FOREVER» от Вольницы
              </a>
              <a href="https://sabatovsky.com/after">
                «After Effects от новичка до специалиста» от Сабатовского
              </a>
              <a href="https://www.profileschool.ru/category/video/course_adobe_after_effects_base">
                «After Effects базового уровня» от Никиты Чеснокова
              </a>
            </div>
          </li>
        </ul>
        <Divider>Принципы анимации</Divider>
        <ContentFigure
          caption="12 принципов анимации"
          src="LcoDiK2a_oM"
          type="youtube"
        />
        <div className="flexible-links">
          <a href="https://www.youtube.com/playlist?list=PLC1VMnkSWzhyvstYWgvctvjTjKICAXWZD">
            «Принципы анимации» от ANIMATION CLUB
          </a>
          <a href="https://www.youtube.com/watch?v=VvjtQ_ewuQY">
            Основные принципы анимации на примерах в After Effects (Часть 1)
          </a>
          <a href="https://www.youtube.com/watch?v=eoX9_9AuxUc">
            Основные принципы анимации на примерах в After Effects (Часть 2)
          </a>
        </div>
        <Divider>Подборка туториалов на разные темы</Divider>
        <ul>
          <li>
            Если вы сталкиваетесь с трудностями при работе с графиками скорости и
            значения, а также с <mark className="select">«Graph Editor»</mark>, посмотрите
            подробное объяснение этого инструмента от{" "}
            <a href="https://www.youtube.com/@JakeInMotion">Jake In Motion</a>.
            <ContentFigure
              caption="Туториал по графикам скорости, который вам может пригодиться"
              src="7pOCtlrrE3Y"
              type="youtube"
            />
          </li>
          <li>
            Если вы хотите повторить трендовые ролики с плавным ускорением и замедлением —
            так называемым «speed ramp», то данный эффект делается с помощью изменения
            скорости в параметре <mark className="select">«Time Remapping»</mark>.
            <Addition type="info">
              Чтобы включить <mark className="select">«Time Remapping»</mark> у
              выделенного слоя, нажмите комбинацию клавиш{" "}
              <mark className="key">Ctrl + Alt + T</mark>.
            </Addition>
            <ContentFigure
              caption="Плавно изменяющаяся скорость"
              src="_kcfkuNwd3M"
              type="youtube"
            />
          </li>
          <li>
            Цветокоррекция помогает задать нужное настроение или стиль композиции. Для
            этого можно использовать <mark className="plugin">Lumetri Color</mark> или
            отдельные инструменты из раздела{" "}
            <mark className="path">Color Correction</mark> из стандартной поставки
            программы.
            <div className="flexible-links">
              <a href="https://helpx.adobe.com/after-effects/using/color-correction-effects.html">
                Эффекты для цветокоррекции
              </a>
              <a href="https://helpx.adobe.com/after-effects/using/color-basics.html">
                Основы цветокоррекции от Adobe
              </a>
            </div>
            <ContentFigure
              caption="Цветокоррекция с помощью Lumetri Color"
              src="y4fuhIPxmJg"
              type="youtube"
            />
          </li>
        </ul>
        <Divider>Подборка туториалов для «тикток-эдитов»</Divider>
        <Addition type="warning">
          Прежде чем углубляться в <mark className="word">«эдиторство»</mark> и учиться
          применять разные эффекты, рекомендуется всё же освоить базовый функционал{" "}
          <mark className="app">Adobe After Effects</mark>. Без фундаментальных знаний
          многие тонкости работы с инструментами могут быть вам непонятны, ведь не все
          «эдиторы» подробно объясняют процесс, а просто демонстрируют его.{" "}
        </Addition>
        <ul>
          <li>
            Если вам регулярно попадаются «эдиты» в <mark className="app">TikTok</mark>,{" "}
            <mark className="app">YouTube Shorts</mark> или{" "}
            <mark className="app">
              Instagram<sup>1</sup> Reels
            </mark>{" "}
            и хочется попробовать создать что-то подобное — обратите внимание на обучающие
            видео на каналах ниже.
            <div className="flexible-links">
              <a href="https://www.youtube.com/@Tozel./videos">Tozel</a>
              <a href="https://www.youtube.com/@rdylt09/videos">rdylt09</a>
              <a href="https://www.youtube.com/@theayzedit/videos">The Ayz Edit</a>
              <a href="https://www.youtube.com/@yaniksksks/videos">Yaniksksks</a>
              <a href="https://www.youtube.com/@imduong2k6/videos">imduong2k6</a>
              <a href="https://www.youtube.com/@Victoriaaep/videos">Victoria.aep</a>
              <a href="https://www.youtube.com/@creativegraphicz/videos">
                Creative Graphicz
              </a>
              <a href="https://www.youtube.com/@ReverseStark/videos">ReverseStark</a>
            </div>
            <Addition type="danger">
              <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark>{" "}
              признаны экстремистскими организациями и запрещены на территории Российской
              Федерации.
            </Addition>
          </li>
          <li>
            В «эдитах» нередко используют эффект тряски камеры. Его можно реализовать
            разными способами — например, с помощью стандартного выражения{" "}
            <mark className="code">wiggle(freq, amp)</mark> или сторонних эффектов{" "}
            <mark className="plugin">S_Shake</mark> и{" "}
            <mark className="plugin">Twitch</mark>
            <sup>1</sup>.
            <Addition type="danger">
              <sup>1</sup> Автор статьи не рекомендует применять{" "}
              <mark className="plugin">Twitch</mark> в новых проектах, так как он морально
              устарел и не поддерживает{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>. В качестве замены
              лучше подходит <mark className="plugin">S_Shake</mark> из пакета{" "}
              <mark className="plugin">Boris FX Sapphire</mark> со стилем{" "}
              <mark className="select">«Twitchy»</mark>.
            </Addition>
            <ContentFigure
              caption="Как добавить эффект тряски камеры без сторонних эффектов"
              src="rT1rOj3BBCE"
              type="youtube"
            />
          </li>
          <li>
            Ещё один популярный эффект для динамичных сцен — частицы. Их можно создавать с
            помощью стандартных генераторов, таких как{" "}
            <mark className="plugin">CC Particle World</mark>, или через сторонние
            инструменты, например <mark className="plugin">Trapcode Particular</mark>.
            <ContentFigure
              caption="Создание частиц с помощью Trapcode Particular"
              src="GgIbELgZLLI"
              type="youtube"
            />
          </li>
          <li>
            Для придания объектам свечения используют различные эффекты — от стандартного{" "}
            <mark className="plugin">Glow</mark> до сторонних{" "}
            <mark className="plugin">S_Glow</mark>,{" "}
            <mark className="plugin">Deep Glow</mark> и других.
            <Addition type="warning">
              Учтите, что эффект свечения очень требователен к ресурсам и может серьёзно
              снизить производительность проекта.
            </Addition>
            <ContentFigure
              caption="Glow"
              src="t40ZTEBr_M0"
              type="youtube"
            />
          </li>
          <li>
            Блики от объектива применяются для усиления реалистичности сцены. В реальности
            они возникают из-за отражения света от поверхностей объектов, диафрагмы или
            многократных отражений между линзами. Повторить этот эффект можно стандартным{" "}
            <mark className="plugin">Lens Flare</mark>, сторонними инструментами{" "}
            <mark className="plugin">Optical Flares</mark>,{" "}
            <mark className="plugin">S_LensFlare</mark> или даже комбинацией различных
            эффектов размытия и искажения.
            <ContentFigure
              caption="S_LensFlare"
              src="-yD3MxlR78c"
              type="youtube"
            />
          </li>
          <li>
            На популярных видеоплощадках вроде <mark className="app">TikTok</mark> и{" "}
            <mark className="app">YouTube Shorts</mark> нередко используют спорные приёмы
            «улучшения» качества через цветокоррекцию: применяют эффекты{" "}
            <mark className="plugin">Sharpen</mark> и{" "}
            <mark className="plugin">Unsharpen Mask</mark> с чрезмерными значениями,
            завышают контраст и насыщенность, а затем называют видео <mark>4K</mark>, хотя
            фактическое разрешение меньше.{" "}
            <i style={{opacity: "0.5"}}>
              Пожалуйста, не доводите до максимума значения эффектов{" "}
              <mark className="plugin">Unsharpen Mask</mark> и{" "}
              <mark className="plugin">Sharpen</mark> в погоне за «качеством» — после
              таких «улучшений» результат обычно выглядит так себе.
            </i>
            <ContentFigure
              caption="HOW TO: Make A 4K Color Correction"
              src="d9ESpD7vc2Y"
              type="youtube"
            />
          </li>
        </ul>
        <p>
          Надеюсь, вы найдёте в этой статье что-то полезное для себя. Удачи в ваших
          начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="basic-layer-types"
        tag="слои, базовые слои, adjustment layer, image sequence, null object, shape layer, solid layer, text layer, корректирующий слой, нулевой объект, нуль, секвенция изображений, сплошная заливка, слой фигура, текст"
        title="Какие базовые виды слоёв существуют и для чего они нужны?"
      >
        <p>
          <mark className="word">Слой</mark> — это отдельная дорожка на таймлайне, которая
          может быть определённого типа: текст, видео или фигура. В{" "}
          <mark className="app">Adobe After Effects</mark>, в отличие от программ для
          нелинейного монтажа вроде <mark className="app">Adobe Premiere Pro</mark>,
          каждый слой занимает отдельную дорожку. Каждому слою вы можете задать свой цвет
          метки для лучшего ориентирования в таймлайне.
        </p>
        <ContentFigure
          caption="Timeline"
          imgTitle="Пример таймлайна композиции в Adobe After Effects"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/timeline_example.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Порядок слоёв на таймлайне влияет на то, как они перекрываются: верхний слой
          всегда отображается поверх нижнего. Для трёхмерных слоёв это правило отличается
          — наложение определяется положением по оси Z, кроме случаев когда на обычный
          двумерный слой применили эффект, работающий в трёхмерном пространстве (например,{" "}
          <mark className="plugin">Trapcode Particular</mark> или{" "}
          <mark className="plugin">Element 3D</mark>).
        </p>
        <Divider>Создание слоёв</Divider>
        <p>
          Чтобы создать слой, перейдите в <mark className="select">«Layer» → «New»</mark>{" "}
          или нажмите <mark className="key">ПКМ</mark> по пустому месту на таймлайне и
          выберите <mark className="select">«New»</mark>. В выпадающем меню выберите
          нужный тип слоя. Также можно создать слой из изображения или видео, перетащив
          его на таймлайн из окна <mark className="select">«Project»</mark>.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Создание слоёв"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/create_layers.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Какие виды слоёв существуют?</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> слои делятся на несколько
          типов. У каждого свои функции, свойства и настройки. Для большинства свойств
          можно использовать выражения, нажав на иконку{" "}
          <mark className="select">«секундомера»</mark> с зажатой клавишей{" "}
          <mark className="key">Alt</mark>.
        </p>
        <ul>
          <li>
            <mark className="select">«Слои-исходники»</mark> — импортированные в проект{" "}
            <mark className="image">фото</mark>, <mark className="audio">аудио</mark>,{" "}
            <mark className="video">видео</mark> и{" "}
            <mark className="image">секвенции изображений</mark>.
          </li>
          <li>
            <mark className="select">«Функциональные слои»</mark> — к ним относятся{" "}
            <mark className="select">«Camera»</mark>,{" "}
            <mark className="select">«Light Layer»</mark> и{" "}
            <mark className="select">«Null Object»</mark>.
          </li>
          <li>
            <mark className="select">«Solid Layer»</mark> и{" "}
            <mark className="select">«Adjustment Layer»</mark>, на которые можно применять
            эффекты. При создании они появляются в окне{" "}
            <mark className="select">«Project»</mark> в папке{" "}
            <mark className="path">Solids</mark>.
          </li>
          <li>
            <mark className="select">«Синтетические слои»</mark> — слои, которые содержат
            визуальные элементы, не основанные на импортированных файлах. К ним относятся{" "}
            <mark className="select">«Text Layer»</mark>,{" "}
            <mark className="select">«Camera»</mark>,{" "}
            <mark className="select">«Light Layer»</mark> и{" "}
            <mark className="select">«Shape Layer»</mark>.
          </li>
          <li>
            Слои <mark className="select">«композиций»</mark> и{" "}
            <mark className="select">«прекомпозиций»</mark>.
          </li>
          <li>
            <mark className="select">«Трёхмерные объекты»</mark>, нативный импорт которых
            стал доступен с помощью <mark className="plugin">Advanced 3D</mark> в{" "}
            <mark className="app">Adobe After Effects</mark> версии <mark>24.1</mark> и
            новее.
            <Addition type="info">
              Для импорта <mark className="select">«трёхмерных объектов»</mark> в старых
              версиях <mark className="app">Adobe After Effects</mark> используйте
              сторонние плагины, например <mark className="plugin">Element 3D</mark>.
            </Addition>
          </li>
        </ul>
        <Divider>Композиция</Divider>
        <p>
          <mark className="select">«Composition»</mark> — это ваш рабочий холст, а также
          своего рода контейнер, в котором вы можете расположить свои слои. Каждая
          композиция имеет собственный таймлайн. Чтобы создать новую пустую композицию —
          нажмите на комбинацию клавиш <mark className="key">Ctrl + N</mark>.
        </p>
        <p>
          Для того чтобы изменить настройки открытой композиции на таймлайне — нажмите{" "}
          <mark className="key">Ctrl + K</mark> или перейдите в{" "}
          <mark className="select">«Composition» → «Composition Settings»</mark>. Изменить
          настройки композиции можно и в окне <mark className="select">«Project»</mark>:
          выделите нужную композицию, нажмите <mark className="key">ПКМ</mark> по ней и
          выберите <mark className="select">«Composition Settings»</mark>.
        </p>
        <p>
          После открытия настроек композиции нас встречает вкладка{" "}
          <mark className="select">«Basic»</mark>. В ней можно задать имя композиции,
          настроить её размер — ширину и высоту в пикселях, а также зафиксировать
          соотношение сторон<sup>1</sup>. Ещё можно настроить частоту кадров<sup>2</sup>,
          соотношение сторон пикселя<sup>3</sup>, стартовый таймкод<sup>4</sup>,
          продолжительность<sup>5</sup>, разрешение<sup>6</sup> и фон композиции
          <sup>7</sup>.
        </p>
        <ContentFigure
          caption="Composition Settings"
          imgTitle="Вкладка Basic в настройках композиции"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/composition_settings_basic.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Учтите, что при экспорте не все кодеки поддерживают нечётное количество пикселей
          в размере той композиции, которую вы хотите экспортировать.
        </Addition>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> При включённом{" "}
              <mark className="select">«Lock Aspect Ratio»</mark> изменение одной стороны
              будет автоматически менять и вторую — в соответствии с соотношением сторон.
            </li>
            <li>
              <sup>2</sup> Настройка <mark className="select">«Drop Frame»</mark> и{" "}
              <mark className="select">«Non-Drop Frame»</mark> доступна только при
              некоторых значениях частоты кадров с плавающей точкой, например{" "}
              <mark>29,97</mark> или <mark>59,94</mark>.
              <ul>
                <li>
                  <mark className="select">«Drop Frame»</mark> — это способ нумерации, при
                  котором иногда пропускаются номера кадров, но сами кадры при этом не
                  теряются. Это делается для того, чтобы таймкод точно совпадал с реальным
                  временем. Потому что, например, <mark>29,97</mark> кадров в секунду —
                  это не ровно <mark>30</mark>, и со временем смещение накапливается.
                  Чтобы избежать расхождений, через определённые интервалы пропускают
                  несколько номеров кадров в счётчике — включают пропуск кадров.
                </li>
                <li>
                  <mark className="select">«Non-Drop Frame»</mark> — нумерация кадров идёт
                  без пропусков. В таком случае со временем таймкод может расходиться с
                  реальным временем видео.
                </li>
              </ul>
            </li>
            <li>
              <sup>3</sup> <mark className="select">«Pixel Aspect Ratio»</mark> отвечает
              за соотношение сторон пикселя. В большинстве современных видео пиксели
              квадратные — их ширина равна высоте, и изменение этого соотношения сейчас
              встречается редко. Однако в некоторых видеоформатах, например{" "}
              <mark className="video">DV PAL</mark>, пиксели прямоугольные — то есть
              ширина и высота не равны. При необходимости вы можете включить предпросмотр
              с коррекцией под неквадратный пиксель: откройте контекстное меню окна
              предпросмотра композиции и включите{" "}
              <mark className="select">«Pixel Aspect Ratio Correction»</mark>.
            </li>
            <li>
              <sup>4</sup> При создании прекомпозиции, если включить{" "}
              <mark className="select">
                «Adjust composition duration to the time span of the selected layers»
              </mark>
              , новая композиция начнёт отсчёт с момента появления самого раннего слоя и
              обрежет ненужную длину, которая не попала в диапазон длительности выделенных
              слоёв. Например, если вы выделили три слоя: первый начинается на второй
              секунде, второй — на четвёртой, а третий заканчивается на седьмой, то новая
              прекомпозиция будет иметь длину ровно 5 секунд и начнётся не с{" "}
              <mark>00:00:00:00</mark>, а с <mark>00:00:02:00</mark> — с момента появления
              самого раннего слоя в родительской композиции.
            </li>
            <li>
              <sup>5</sup> По умолчанию в <mark className="app">Adobe After Effects</mark>{" "}
              продолжительность выражается в формате <mark>ЧЧ:ММ:СС:КК</mark>, где{" "}
              <mark>Ч</mark> — часы, <mark>М</mark> — минуты, <mark>С</mark> — секунды,{" "}
              <mark>К</mark> — кадры. При желании вы можете изменить формат времени на
              отображение количества кадров, нажав <mark className="key">ЛКМ</mark> по
              таймкоду на таймлайне с зажатым <mark className="key">Ctrl</mark>.
            </li>
            <li>
              <sup>6</sup> Параметр <mark className="select">«Resolution»</mark> влияет
              только на разрешение рендеринга — так же, как если бы вы изменяли значение
              качества в окне предпросмотра. В этом параметре доступны привычные значения:{" "}
              <mark className="select">«Full»</mark>,{" "}
              <mark className="select">«Half»</mark>,{" "}
              <mark className="select">«Third»</mark>,{" "}
              <mark className="select">«Quarter»</mark> и{" "}
              <mark className="select">«Custom»</mark>, в котором можно указать значение
              каждого пикселя по горизонтали и вертикали, который нужно отрендерить для
              предпросмотра.
            </li>
            <li>
              <sup>7</sup> Настройка цвета фона в настройках композиции влияет только на
              цвет подложки в окне предпросмотра. Чтобы действительно добавить фон в
              композицию — создайте <mark className="select">«Solid Layer»</mark>, задайте
              ему нужный цвет и расположите его самым последним слоем по иерархии
              наложения.
            </li>
          </ul>
        </Addition>
        <p>
          Во вкладке <mark className="select">«Advanced»</mark> вы можете настроить
          размытие в движении более детально, указав значения угла<sup>1</sup> и фазы
          затвора<sup>2</sup>, количества семплов<sup>3</sup>, а также якорную точку
          <sup>4</sup> самой композиции при изменении её размера. В этом разделе также
          есть два полезных параметра, связанные с{" "}
          <mark className="select">«Preserve»</mark>
          <sup>5</sup>.
        </p>
        <ContentFigure
          caption="Composition Settings"
          imgTitle="Вкладка Advanced в настройках композиции"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/composition_settings_advanced.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> <mark className="select">«Shutter Angle»</mark> или{" "}
              <mark className="select">«угол затвора»</mark> — степень размытия движущихся
              объектов. Чем больше <mark className="select">«угол затвора»</mark>, тем
              сильнее размывается изображение при движении.
            </li>
            <li>
              <sup>2</sup> <mark className="select">«Shutter Phase»</mark> или{" "}
              <mark className="select">«фаза затвора»</mark> — параметр, который задаёт
              смещение момента начала «виртуального затвора» по времени относительно
              текущего кадра при создании размытия движения.
            </li>
            <li>
              <sup>3</sup> <mark className="select">«Samples Per Frame»</mark> или{" "}
              <mark className="select">«количество семплов размытия на кадр»</mark> — чем
              больше значение, тем меньше будет «лесенок» у следов движущегося объекта.
            </li>
            <li>
              <sup>4</sup> Изменение <mark className="select">«Anchor»</mark> влияет на
              положение ваших слоёв при изменении размера ширины или высоты композиции.
              Если, например, указать левый нижний угол, то композиция начнёт изменять
              размер относительно этой точки, а все ваши слои будут стоять относительно
              этой якорной точки. По умолчанию все слои при изменении размера композиции
              остаются в центре.
            </li>
            <li>
              <sup>5</sup>{" "}
              <mark className="select">
                «Preserve frame rate when nested or in render queue
              </mark>{" "}
              сохраняет заданную частоту кадров композиции при вложении в другую.{" "}
              <mark className="select">«Preserve resolution when nested»</mark> сохраняет
              разрешение (<mark className="select">«Full»</mark>
              <mark className="select">«Half»</mark>,{" "}
              <mark className="select">«Third»</mark>,{" "}
              <mark className="select">«Quarter»</mark> или{" "}
              <mark className="select">«Custom»</mark>), указанное в окне предпросмотра
              или настройках композиции, при вложении в другую композицию.{" "}
              <a href="https://www.youtube.com/watch?v=ko1Uua-2znU">Подробнее...</a>
            </li>
          </ul>
        </Addition>
        <p>
          Во вкладке <mark className="select">«3D Renderer»</mark> вы можете изменить
          движок для рендера трёхмерных слоёв и, при возможности, настроить его параметры.
          Учтите, что <mark className="plugin">Advanced 3D</mark> и{" "}
          <mark className="plugin">Cinema 4D</mark> многое не поддерживают из привычных
          действий, как <mark className="plugin">Classic 3D</mark>. Например — отсутствует
          поддержка режимов наложения, размытия в движении, невозможность применения
          некоторых эффектов и прочее.
        </p>
        <ContentFigure
          caption="Composition Settings"
          imgTitle="Вкладка 3D Renderer в настройках композиции"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/composition_settings_3d_renderer.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          При необходимости композицию можно «зафиксировать и отрендерить», чтобы не
          просчитывать её заново каждый раз, если вы не планируете больше её
          редактировать. Для этого выделите нужную композицию в окне{" "}
          <mark className="select">«Project»</mark>, нажмите по ней{" "}
          <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
          <mark className="select">«Create Proxy» → «Movie»</mark>. После этого программа
          отправит вас в <mark className="select">«Render Queue»</mark>, где можно задать
          нужные настройки рендера. Чтобы сохранить качество, рекомендую выбрать{" "}
          <mark className="select">«QuickTime»</mark> с кодеком{" "}
          <mark className="video">Apple ProRes 422</mark> или{" "}
          <mark className="video">Apple ProRes 4444</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Если вы хотите, чтобы при финальном рендере использовались прокси-файлы
              вместо повторного просчёта оригинальной композиции, в параметре{" "}
              <mark className="select">«Proxy Use»</mark> настроек{" "}
              <mark className="select">«Render Settings»</mark> установите значение{" "}
              <mark className="select">«Use All Proxies»</mark>.
            </li>
            <li>
              Чтобы временно отключить прокси, нажмите на иконку квадрата слева от
              названия композиции в окне <mark className="select">«Project»</mark>. А
              чтобы полностью отвязать прокси-файл — нажмите{" "}
              <mark className="key">ПКМ</mark> по композиции и выберите{" "}
              <mark className="select">«Set Proxy» → «None»</mark>.
            </li>
          </ul>
        </Addition>
        <ContentFigure
          caption="Создание прокси для композиции"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/create_comp_proxy.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Divider>Предварительная композиция</Divider>
        <p>
          <mark className="select">«Pre-comp»</mark> — это дочерняя композиция, которая
          создаётся на основе выделенных слоёв родительской композиции. Чтобы её создать,
          выделите нужные слои на таймлайне и нажмите{" "}
          <mark className="key">Ctrl + Shift + C</mark>. В появившемся окне можно выбрать
          один из двух способов вложения.
        </p>
        <ContentFigure
          caption="Pre-compose"
          imgTitle="Диалог при создании предварительной композиции"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/pre-compose.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <ul>
          <li>
            <mark className="select">
              «Leave all attributes in &apos;Composition Name&apos;»
            </mark>{" "}
            — создать прекомпозицию, параметры которой (разрешение, частота кадров) будут
            основаны на исходном файле, а не на родительской композиции. Все свойства,
            атрибуты и эффекты при этом останутся в родительской композиции. Например,
            если на таймлайн с частотой <mark>60 FPS</mark> вы добавили видеофайл с
            частотой <mark>25 FPS</mark> и создали прекомпоз с этой опцией, то новая
            композиция тоже будет иметь частоту <mark>25 FPS</mark>.
            <Addition type="warning">
              Данная опция доступна только тогда, когда выделен один слой, а также если
              этот слой имеет <mark className="select">«Source»</mark>, например слой с{" "}
              <mark className="video">видео</mark>, <mark className="image">фото</mark>{" "}
              или <mark className="audio">аудио</mark>.
            </Addition>
          </li>
          <li>
            <mark className="select">«Move all attributes into the new composition»</mark>{" "}
            — перемещает выделенный слой или слои со всеми свойствами, атрибутами и
            эффектами в новую композицию, которая создаётся с параметрами родительской.
            <ul>
              <li>
                <mark className="select">
                  «Adjust composition duration to the time span of the selected layers»
                </mark>{" "}
                — обрезает новую композицию под общую длительность выделенных слоёв.
                <Addition type="warning">
                  Учтите: при включённом параметре значение стартового таймкода будет
                  изменено на таймкод начала первого выделенного слоя. При необходимости
                  вы можете позже изменить стартовый таймкод в настройках созданной
                  композиции.
                </Addition>
              </li>
            </ul>
          </li>
          <li>
            <mark className="select">«Open New Composition»</mark> — откроет созданную
            прекомпозицию на таймлайне.
          </li>
        </ul>
        <Addition type="info">
          Для прекомпозиций иногда бывает полезно включать{" "}
          <mark className="select">«Collapse Transformation»</mark>. Эта опция позволяет
          предварительной композиции вести себя как набор слоёв с сохранением всей их
          чёткости, трёхмерных параметров и анимаций, как будто вы слои вовсе не
          «прекомпозили».{" "}
          <a href="https://www.youtube.com/watch?v=Ns41v75th_I&t=358s">Подробнее...</a>
        </Addition>
        <Divider>Сплошная заливка</Divider>
        <p>
          <mark className="select">«Solid Layer»</mark> — объект с однотонным цветом,
          обычно соответствующий размерам композиции. Он часто используется как фон или
          как «инициатор» для трёхмерных эффектов, таких как{" "}
          <mark className="plugin">Element 3D</mark>,{" "}
          <mark className="plugin">Trapcode Particular</mark>,{" "}
          <mark className="plugin">Trapcode Form</mark> или{" "}
          <mark className="plugin">CC Particle World</mark>. Кроме того,{" "}
          <mark className="select">«Solid Layer»</mark> может служить простым фоном — это
          особенно полезно, когда некоторые эффекты, например переходы из{" "}
          <mark className="plugin">AtomX</mark> или{" "}
          <mark className="plugin">Motion Bro</mark>, работают некорректно с
          прозрачностью.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Чтобы создать <mark className="select">«Solid Layer»</mark> — нажмите
              комбинацию клавиш <mark className="key">Ctrl + Y</mark>.
            </li>
            <li>
              Чтобы настроить размер, цвет и другие параметры такого слоя — нажмите
              комбинацию клавиш <mark className="key">Ctrl + Shift + Y</mark>.
            </li>
          </ul>
        </Addition>
        <ContentFigure
          caption="Как создать фон и изменить цвет заливки"
          src="e-g1y4p8Jc0"
          type="youtube"
        />
        <Addition type="warning">
          <ul>
            <li>
              Если применённый вами эффект работает в собственном трёхмерном пространстве
              — не стоит преобразовывать слой-«инициатор» в{" "}
              <mark className="select">«3D Layer»</mark>. Чтобы изменить его вид или
              положение, используйте <mark className="select">«Camera»</mark> или, если
              возможно, создавайте <mark className="select">«Null Object»</mark> для
              параметров положения объекта.
            </li>
            <li>
              Чтобы определить, использует ли эффект своё трёхмерное пространство,
              обратите внимание на его название в{" "}
              <mark className="select">«Effects & Controls»</mark> — рядом должна
              отображаться иконка <mark className="select">«кубика»</mark>.
            </li>
          </ul>
        </Addition>
        <Divider>Видео, аудио, изображения и секвенции изображений</Divider>
        <p>
          Слои с <mark className="video">видео</mark>,{" "}
          <mark className="audio">аудио</mark> и{" "}
          <mark className="image">изображениями</mark> относятся к импортируемым объектам.
          Их добавляют в проект через <mark className="select">«File» → «Import»</mark>{" "}
          или с помощью <mark className="key">Ctrl + I</mark>.
        </p>
        <ul>
          <li>
            <mark className="select">«Video»</mark> — слой, содержащий футаж с
            видеодорожкой в формате <mark className="video">MP4</mark>,{" "}
            <mark className="video">MOV</mark>, <mark className="video">AVI</mark> и
            прочие. Такие файлы могут содержать звуковую дорожку или быть без неё.
            <Addition type="warning">
              <ul>
                <li>
                  <mark className="app">Adobe After Effects</mark> поддерживает не все
                  кодеки и контейнеры. Если видео не импортируется — его нужно
                  перекодировать в подходящий формат, например{" "}
                  <mark className="video">Apple ProRes 422</mark> с помощью{" "}
                  <mark className="app">Shutter Encoder</mark> или использовать сторонний
                  плагин <mark className="plugin">Autokroma Influx</mark>.
                </li>
                <li>
                  <mark className="app">Adobe After Effects</mark> не работает с
                  несколькими звуковыми дорожками в одном файле — он «увидит» только
                  первую. Остальные нужно извлечь, например, с помощью{" "}
                  <mark className="app">Handbrake</mark> или{" "}
                  <mark className="app">MKVToolNix</mark>, и импортировать в композицию
                  отдельно.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="select">«Still»</mark> — слой, содержащее растровое или
            векторное<sup>4</sup> изображение: <mark className="image">JPEG</mark>,{" "}
            <mark className="image">PNG</mark>,{" "}
            <mark className="image">
              HEIF<sup>1</sup>
            </mark>
            ,{" "}
            <mark className="image">
              RAW<sup>2</sup>
            </mark>
            ,{" "}
            <mark className="image">
              PSD<sup>3</sup>
            </mark>
            ,{" "}
            <mark className="image">
              AI<sup>4</sup>
            </mark>
            ,{" "}
            <mark className="image">
              EPS<sup>4</sup>
            </mark>
            , <mark className="image">EXR</mark> и другие.
            <Addition type="warning">
              <sup>1</sup> В <mark>Windows</mark> для импорта файлов{" "}
              <mark className="image">HEIF/HEIC</mark> необходимо установить{" "}
              <a href="#4.5">соответствующие кодеки</a>.
            </Addition>
            <Addition type="info">
              <ul>
                <li>
                  <sup>2</sup> <mark className="image">RAW</mark> — необработанные
                  изображения, создаваемые камерой или смартфоном в режиме{" "}
                  <mark>RAW</mark>. Формат зависит от производителя:{" "}
                  <mark className="image">DNG</mark>, <mark className="image">CR3</mark>,{" "}
                  <mark className="image">NEF</mark>, <mark className="image">ARW</mark>,{" "}
                  <mark className="image">RAF</mark> и т. д.
                </li>
                <li>
                  При импорте <mark className="image">RAW</mark> может открыться модуль{" "}
                  <mark className="plugin">Camera RAW</mark> — аналог{" "}
                  <mark className="app">Adobe Lightroom</mark> внутри{" "}
                  <mark className="app">Adobe After Effects</mark>. Старые версии{" "}
                  <mark className="plugin">Camera RAW</mark> могут не поддерживать новые
                  камеры.
                </li>
                <li>
                  Чтобы повторно открыть <mark className="plugin">Camera RAW</mark> после
                  импорта, выделите нужный файл в окне{" "}
                  <mark className="select">«Project»</mark>, нажмите{" "}
                  <mark className="key">Ctrl + Alt + G</mark>, чтобы открыть окно{" "}
                  <mark className="select">«Interpret Footage»</mark>, и кликните{" "}
                  <mark className="select">«More Options»</mark>.
                </li>
                <li>
                  <mark className="image">RAW</mark> часто бывает в высоком разрешении,
                  что может серьёзно нагрузить проект — особенно при применении эффектов.
                  Лучше предварительно обработать такие изображения в{" "}
                  <mark className="app">Adobe Photoshop</mark> или{" "}
                  <mark className="app">Adobe Lightroom</mark>, сохранить в{" "}
                  <mark className="image">TIFF</mark> с меньшим разрешением и только потом
                  использовать в <mark className="app">After Effects</mark>.
                </li>
              </ul>
            </Addition>
            <Addition type="info">
              <sup>3</sup> <mark className="image">PSD</mark> из{" "}
              <mark className="app">Adobe Photoshop</mark> можно импортировать как целое{" "}
              <mark className="image">изображение</mark> или послойно.
              <Addition type="warning">
                Если <mark className="image">PSD</mark> сохранён в цветовом режиме,
                отличном от <mark>RGB</mark>, — послойный импорт в{" "}
                <mark className="app">Adobe After Effects</mark> будет недоступен.{" "}
                <a href="#4.8">Подробнее...</a>
              </Addition>
            </Addition>
            <Addition type="info">
              <ul>
                <li>
                  <sup>4</sup> При импорте векторных изображений включите параметр{" "}
                  <mark className="select">«Continuously Rasterize»</mark> у слоя. Эта
                  функция позволяет масштабировать графику без потери качества, адаптируя
                  её под разрешение композиции. Однако при её использовании возможны
                  побочные эффекты — например, разрывы при применении{" "}
                  <mark className="plugin">Puppet Tool</mark>.
                </li>
                <li>
                  Некоторые считают, что включённый{" "}
                  <mark className="select">«Continuously Rasterize»</mark> позволяет
                  увеличивать предпросмотр без потери качества, как в{" "}
                  <mark className="app">Adobe Illustrator</mark>. На деле это не так:{" "}
                  <mark className="app">Adobe After Effects</mark> — растровый редактор,
                  он не может отобразить больше пикселей, чем указано в настройках
                  композиции.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="select">«Image Sequence»</mark> — стопка кадров из
            изображений поддерживаемых форматов, импортируемая как покадровое видео без
            звука. Такой тип слоя полезен для импорта покадрово отрендеренных проектов из
            какого-нибудь 3D-софта, например, <mark className="app">Blender</mark> или{" "}
            <mark className="app">Cinema 4D</mark>.
            <ContentFigure
              caption="Импорт секвенции изображений"
              src="efHrVdCsX-4"
              type="youtube"
            />
            <Addition type="info">
              <ul>
                <li>
                  Чтобы импортировать нужные изображения как секвенцию, откройте окно{" "}
                  <mark className="select">«Import»</mark> с помощью комбинации клавиш{" "}
                  <mark className="key">Ctrl + I</mark>, выделите первый кадр в папке с
                  отрендеренными кадрами и выберите внизу опцию{" "}
                  <mark className="select">«PNG Sequence»</mark> в разделе{" "}
                  <mark className="select">«Sequence Settings»</mark>, где вместо{" "}
                  <mark>PNG</mark> — ваш формат изображений.
                </li>
                <li>
                  Чтобы изменить <mark>FPS</mark> после импорта секвенции, воспользуйтесь
                  функцией <mark className="select">«Interpret Footage»</mark>. Чтобы её
                  открыть — выделите нужную секвенцию в окне{" "}
                  <mark className="select">«Project»</mark> и нажмите комбинацию клавиш{" "}
                  <mark className="key">Ctrl + Alt + G</mark>. В открывшемся окне вы
                  можете изменить параметр <mark className="select">«Frame Rate»</mark>.
                </li>
                <li>
                  Чтобы задать значение <mark className="select">«Frame Rate»</mark> по
                  умолчанию при импорте секвенций — откройте настройки программы{" "}
                  <mark className="select">«Edit» → «Preferences» → «Import»</mark> и в
                  разделе <mark className="select">«Sequence Footage»</mark> задайте
                  нужное значение <mark className="select">«Frames per second»</mark>. Оно
                  будет применяться ко всем новым секвенциям. Уже импортированные это не
                  затронет.
                </li>
                <li>
                  Если вы хотите импортировать секвенции с разными сценами или ракурсами —
                  лучше разделить их по папкам и импортировать как отдельные{" "}
                  <mark className="word">«шоты»</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="select">«Audio»</mark> — слой, содержащий только
            аудиодорожку. Для изменения громкости используется параметр{" "}
            <mark className="select">«Audio Levels»</mark>. Чтобы увидеть форму волны —
            нажмите дважды <mark className="key">L</mark>.
            <Addition type="warning">
              <ul>
                <li>
                  Некоторые форматы аудио, например <mark className="audio">OGG</mark> —
                  не поддерживаются. Их нужно конвертировать в{" "}
                  <mark className="audio">WAV</mark> или{" "}
                  <mark className="audio">MP3</mark>.
                </li>
                <li>
                  <mark className="app">Adobe After Effects</mark> не предназначен для
                  серьёзной работы со звуком, не смотря на наличие эффектов в разделе{" "}
                  <mark className="path">Audio Effects</mark>. Для этого лучше
                  использовать <mark className="app">Adobe Audition</mark> или{" "}
                  <mark className="app">Adobe Premiere Pro</mark>.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <Divider>Текст</Divider>
        <p>
          <mark className="select">«Text Layer»</mark> — это слой с редактируемым текстом.
          У него есть два типа: <mark className="select">«Point Text»</mark> и{" "}
          <mark className="select">«Paragraph Text»</mark>. Каждый из них используется для
          разных целей. Вы можете{" "}
          <a href="https://www.youtube.com/watch?v=-PS2Yl-IzTQ">
            анимировать Source Text
          </a>{" "}
          — менять сам текст на ключевых кадрах,{" "}
          <a href="https://www.youtube.com/watch?v=_CEpgznn-XU">
            запустить текст по Path
          </a>{" "}
          с помощью маски или{" "}
          <a href="https://www.youtube.com/watch?v=IJ3QHNQSJg8">
            использовать текстовые аниматоры
          </a>
          .
        </p>
        <p>
          Шрифт, его размер, обводка, межстрочные и межбуквенные интервалы, лигатуры и
          другие параметры внешнего вида настраиваются в окне{" "}
          <mark className="select">«Character»</mark>. Выравнивание, отступы и расстояние
          между абзацами — в окне <mark className="select">«Paragraph»</mark>.
        </p>
        <Addition type="info">
          Начиная с <mark className="app">Adobe After Effects</mark> версии{" "}
          <mark>23.4</mark>, большинство этих параметров доступно в окне{" "}
          <mark className="select">«Properties»</mark>.
        </Addition>
        <ul>
          <li>
            <mark className="select">«Point Text»</mark> — используется, когда не важны
            ограничения по ширине или высоте. Его название говорит само за себя: текст
            задаётся от одной точки и чаще всего идёт в одну строку. Подходит для
            заголовков, коротких примечаний и вставок. Поддерживает только выравнивание по
            левому, правому краю и по центру — выравнивание по ширине невозможно, так как
            у такого текста нет фиксированной рамки.
            <ContentFigure
              caption="Создание Point Text"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/aftereffects/create_point_text.mp4"
              theme="dark"
              type="video"
              variant="windows"
            />
          </li>
          <li>
            <mark className="select">«Paragraph Text»</mark> — подходит, когда нужно
            вписать текст в конкретную «коробку» (ограничить ширину и/или высоту). Часто
            используется для встраивания текста в фигуры, например прямоугольники.
            Поддерживает все типы выравнивания, включая выравнивание по ширине —
            настраивается в <mark className="select">«Paragraph»</mark>.
            <ContentFigure
              caption="Создание Paragraph Text"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/aftereffects/create_paragraph_text.mp4"
              theme="dark"
              type="video"
              variant="windows"
            />
          </li>
        </ul>
        <p>
          Один тип текстового слоя можно преобразовать в другой. Для этого выберите
          инструмент <mark className="select">«Text»</mark>, затем — нужный слой, кликните
          по нему <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Convert to Point Text»</mark> или{" "}
          <mark className="select">«Convert to Paragraph Text»</mark> — в зависимости от
          того, что у вас сейчас.
        </p>
        <ContentFigure
          caption="Конвертация Point Text в Paragraph Text"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/convert_to_paragraph_text.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          Также текст можно писать горизонтально и вертикально. Для этого есть инструменты{" "}
          <mark className="select">«Horizontal Text Tool»</mark> (по умолчанию) и{" "}
          <mark className="select">«Vertical Text Tool»</mark>. Вертикальный текст чаще
          используется в азиатских языках, но может пригодиться и для латиницы или
          кириллицы — например, для создания <mark>monospace-like</mark> шрифта. Это
          полезно для анимации счётчиков, чтобы текст не прыгал.
        </p>
        <ContentFigure
          caption="Как сделать текст моноширинным"
          src="__-rPlFfRow"
          type="youtube"
        />
        <Divider>Слой-фигура</Divider>
        <p>
          <mark className="select">«Shape Layer»</mark> — слой, содержащий какую-либо
          форму. Фигуры могут быть разных типов:{" "}
          <mark className="select">«Rectangle»</mark>,{" "}
          <mark className="select">«Rounded Rectangle»</mark>,{" "}
          <mark className="select">«Ellipse»</mark>,{" "}
          <mark className="select">«Polygon»</mark> или{" "}
          <mark className="select">«Star»</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Фигуры можно создавать инструментом для создания фигур{" "}
              <mark className="key">Q</mark> или с помощью{" "}
              <mark className="select">«Pen Tool»</mark>.
            </li>
            <li>
              Путь маски и фигурного слоя взаимозаменяемы: их можно копировать и вставлять
              друг в друга.
            </li>
          </ul>
        </Addition>
        <ContentFigure
          caption="Слои-фигуры для начинающих"
          src="98ro7x3kl8A"
          type="youtube"
        />
        <Divider>Маска</Divider>
        <p>
          <mark className="select">«Mask»</mark> — область, в которой слой будет виден или
          не виден, в зависимости от типа маски и её настроек. Маска ограничена только
          этим слоем и перемещается вместе с ним. Её часто используют для выделения или
          скрытия частей изображения, а также для создания эффектов с плавной анимацией
          появления или исчезновения объектов.
        </p>
        <Addition type="info">
          Маски можно создавать инструментом для создания фигур{" "}
          <mark className="key">Q</mark> или с помощью{" "}
          <mark className="select">«Pen Tool»</mark>, предварительно выделив слой.
        </Addition>
        <ContentFigure
          caption="Полное руководство для начинающих по созданию масок"
          src="WMmWIc88HDA"
          type="youtube"
        />
        <p>
          Также в качестве масок могут выступать сами слои. В{" "}
          <mark className="app">Adobe After Effects</mark> есть полезная функция{" "}
          <mark className="select">«Track Matte»</mark>, реализацию которого{" "}
          <a href="https://helpx.adobe.com/after-effects/using/track-mattes-and-traveling-mattes.html">
            обновили
          </a>{" "}
          в версии <mark>2023</mark> и новее.
        </p>
        <ContentFigure
          caption="Почему тебе нужны Mattes в After Effects"
          src="VWkS1vcs0Wk"
          type="youtube"
        />
        <Divider>Корректирующий слой</Divider>
        <p>
          <mark className="select">«Adjustment Layer»</mark> — довольно мощный инструмент.
          С его помощью можно выполнить цветокоррекцию, добавить цифровой шум, заставить
          трястись всю композицию или внести различные искажения. Эффекты, применённые к
          такому слою, будут влиять только на те слои, которые расположены ниже него на
          таймлайне.
        </p>
        <Addition type="warning">
          Не все эффекты могут корректно применяться на{" "}
          <mark className="select">«Adjustment Layer»</mark>, если в композиции
          отсутствует фон, созданный через <mark className="select">«Solid Layer»</mark> и
          размещённый под <mark className="select">«Adjustment Layer»</mark>.
        </Addition>
        <ContentFigure
          caption="Используем корректирующие слои в Adobe After Effects"
          src="rgMKGFWWqjA"
          type="youtube"
        />
        <p>
          По сути, роль <mark className="select">«Adjustment Layer»</mark> может выполнять
          почти любой объект на таймлайне — достаточно включить для него соответствующую
          через контекстное меню в <mark className="select">«Layer»</mark>,{" "}
          <mark className="key">ПКМ</mark> или с помощью соответствующего переключателя на
          таймлайне.
        </p>
        <ContentFigure
          caption="Демонстрация работы корректирующего слоя"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/enable_adjustment_layer_mode.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Divider>Нулевой объект</Divider>
        <p>
          <mark className="select">«Null Object»</mark> — невидимый манипулятор для
          объектов, слоёв или параметров эффекта. Он часто применяется для создания
          зависимости между управляющими и управляемыми элементами. К нулевому объекту
          можно привязать сразу несколько слоёв — например, для их вращения вокруг
          определённой оси. Для этого можно воспользоваться лассо в столбце{" "}
          <mark className="select">«Parent & Link»</mark>
          <sup>1</sup> или <mark className="word">выражениями</mark>.
        </p>
        <Addition type="info">
          <sup>1</sup> Если вы скрыли отображение этого столбца на таймлайне — нажмите{" "}
          <mark className="key">F4</mark> или <mark className="key">ПКМ</mark> по
          заголовкам столбцов и выберите{" "}
          <mark className="select">«Columns» → «Parent & Link»</mark>.
        </Addition>
        <ContentFigure
          caption="Тебе НУЖНО использовать нулевые слои в Adobe After Effects"
          src="8ei_cj6A2Gg"
          type="youtube"
        />
        <Addition type="warning">
          Не стоит путать колонки <mark className="select">«Parent & Link»</mark> с{" "}
          <mark className="select">«Track Matte»</mark>, несмотря на то, что у обоих
          столбцов есть лассо для указания ссылки на нужный слой. Часто новички не смотрят
          на название нужной колонки, а потом удивляются, почему у них программа работает
          не так, как они хотят.
        </Addition>
        <Divider>Файлы Photoshop</Divider>
        <p>
          <mark className="file">PSD</mark> — файлы изображений, создаваемые и
          редактируемые в <mark className="app">Adobe Photoshop</mark>.{" "}
          <mark className="app">Adobe After Effects</mark> поддерживает импорт таких
          файлов в проект как целое изображение, так и послойно<sup>1</sup>. При этом
          наличие установленного <mark className="app">Adobe Photoshop</mark> в системе не
          требуется.
        </p>
        <Addition type="warning">
          <sup>1</sup> <mark className="image">PSD</mark>, сохранённые в режиме{" "}
          <mark>CMYK</mark>, не поддерживают послойный импорт слоёв в проект. Чтобы это
          исправить — измените цветовой режим файла на <mark>RGB</mark>.{" "}
          <a href="#4.8">Как?</a>
        </Addition>
        <ContentFigure
          caption="Импорт и анимация PSD в Adobe After Effects"
          src="e1ZJfivOloM"
          type="youtube"
        />
        <Addition type="info">
          Чтобы быстро открыть программу для редактирования{" "}
          <mark className="image">PSD</mark>, выделите слой и нажмите комбинацию клавиш{" "}
          <mark className="key">Ctrl + E</mark>. Какая программа откроется — зависит от
          настроек ассоциаций файлов в вашей операционной системе. Если вы не меняли эти
          настройки вручную, с большой долей вероятности откроется{" "}
          <mark className="app">Adobe Photoshop</mark>, если он установлен.
        </Addition>
        <Divider>Слой направляющей</Divider>
        <p>
          <mark className="select">«Guide Layer»</mark> — атрибут, который превращает слой
          в «комментарий», видимый только в предпросмотре и не рендерящийся при экспорте
          <sup>1</sup>. Его можно использовать для технических оверлеев — например, для
          отображения границ перекрытий интерфейса <mark className="app">TikTok</mark>,{" "}
          <mark className="app">YouTube Shorts</mark>, или для передачи нужной информации
          другому пользователю проекта, чтобы тот мог внести правки позже.
        </p>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> Данное поведение можно изменить в{" "}
              <mark className="select">«Render Settings»</mark>, изменив значение
              параметра <mark className="select">«Guide Layers»</mark> на{" "}
              <mark className="select">«Current Settings»</mark>.
            </li>
            <li>
              Чтобы включить этот атрибут — откройте{" "}
              <mark className="select">«Layer»</mark> или нажмите{" "}
              <mark className="key">ПКМ</mark> по слою и выберите в контекстном меню{" "}
              <mark className="select">«Guide Layer»</mark>.
            </li>
          </ul>
        </Addition>
        <ContentFigure
          caption="Как использовать Guide Layers"
          src="_rxq8Pa9WdQ"
          type="youtube"
        />
        <Divider>Скрытые слои</Divider>
        <p>
          <mark className="select">«Shy Layer»</mark> — атрибут, который задаётся слою,
          если его нужно скрыть из таймлайна. При этом сам слой из композиции не исчезает
          и отображается, как и прежде. Такой атрибут полезен для организации слоёв и при
          создании шаблонов — он помогает скрыть некоторые слои от лишних глаз, но при
          этом никак не защищает их от удаления.
        </p>
        <ContentFigure
          caption="Как спрятать слои?"
          src="Bw3snjRq2kE"
          type="youtube"
        />
        <Divider>Статьи о слоях от Adobe</Divider>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/creating-layers.html">
            Создание слоев
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layers.html">
            Управление слоями
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/selecting-arranging-layers.html">
            Выделение и упорядочивание слоев
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layer-properties.html">
            Свойства слоя
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/creating-editing-text-layers.html">
            Создание и работа с текстовыми слоями
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/creating-shapes-masks.html">
            Создание фигур и масок
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/preparing-importing-still-images.html">
            Подготовка и импорт статичных изображений
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/effects-animation-presets-overview.html">
            Применение эффектов и пресетов на слои
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/blending-modes-layer-styles.html">
            Режимы наложения
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/overview-shape-layers-paths-vector.html">
            Растровые и векторные изображения
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layer-markers-composition-markers.html">
            Маркеры слоя и маркеры композиции
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/precomposing-nesting-pre-rendering.html">
            Создание прекомпозиций и пререндеринг
          </a>
        </div>
        <Addition type="info">
          Чтобы открыть нужную статью на русском языке - добавьте{" "}
          <mark className="copy">/ru</mark> в ссылку после <mark>helpx.adobe.com</mark>.
          Учтите, что статьи, переведённые на другие языки, могут быть переведены
          некорректно или иметь устаревшую информацию.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="3d-layer-types"
        tag="3d, слои, трёхмерные слои, 3d layer, 3d object, camera, light, источник света, камера, трёхмерные модели, cineware"
        title="Что нужно знать о трёхмерных слоях?"
      >
        <Divider>Трёхмерный слой</Divider>
        <p>
          <mark className="select">«3D Layer»</mark> — это двумерный слой, который может
          перемещаться и вращаться в трёхмерном пространстве. Он взаимодействует с
          камерами и источниками света, но сам остаётся плоским. В роли трёхмерного слоя
          может выступать картинка, фигура, текст, слой-заливка и другие типы слоёв. Не
          стоит путать с <mark className="select">«3D Object»</mark>.
        </p>
        <p>
          Трёхмерные слои могут пересекаться и отбрасывать тени — но только если между
          ними нет ничего, что мешает этому взаимодействию. Препятствием может быть не
          только обычный двумерный слой, но и некоторые другие, даже если они сами
          трёхмерные: <mark className="select">«Adjustment Layer»</mark>; слой с
          применённым <mark className="select">«Layer Styles»</mark>; прекомпозиция с
          эффектом, маской (в любом режиме, кроме <mark className="select">«None»</mark>)
          или <mark className="select">«Track Matte»</mark>; а также трёхмерная
          прекомпозиция без включённого{" "}
          <mark className="select">«Collapse Transformations»</mark>.
        </p>
        <ContentFigure
          caption="Трёхмерные слои в Adobe After Effects"
          src="7NFsxeG-sWY"
          type="youtube"
        />
        <Addition type="warning">
          Слои, расположенные на одном уровне по оси Z, могут конфликтовать между собой и
          вызывать артефакты — например, мерцание или разрывы изображения. Чтобы избежать
          этого, старайтесь смещать их хотя бы на один пиксель друг от друга.
        </Addition>
        <Divider>Трёхмерные модели</Divider>
        <p>
          <mark className="select">«3D Object»</mark> — объёмные модели форматов{" "}
          <mark className="file">FBX</mark>, <mark className="file">OBJ</mark>,{" "}
          <mark className="file">GLB</mark> или <mark className="file">GLTF</mark>, импорт
          которых стал возможен в <mark className="app">Adobe After Effects</mark> версии{" "}
          <mark>24.1</mark> и новее с помощью <mark className="plugin">Advanced 3D</mark>.
          Такие модели можно создать в любом популярном 3D-редакторе, например{" "}
          <mark className="app">Blender</mark>, <mark className="app">Cinema 4D</mark> или{" "}
          <mark className="app">Substance 3D Painter</mark>.
        </p>
        <ContentFigure
          caption="Работаем с 3D-моделями из Substance Painter в Adobe After Effects"
          src="qPOkGR7Ek2I"
          type="youtube"
        />
        <Addition type="info">
          Если вы используете <mark className="app">Adobe After Effects</mark> версии ниже{" "}
          <mark>24.0</mark> — используйте сторонний плагин{" "}
          <mark className="plugin">Element 3D</mark> для импорта моделей формата{" "}
          <mark className="file">OBJ</mark> и <mark className="file">E3D</mark>.
        </Addition>
        <Divider>Камера</Divider>
        <p>
          <mark className="select">«Camera»</mark> — слой, который служит виртуальным
          объективом для вашей сцены, определяя ракурс, глубину резкости и поле зрения для
          всех слоёв, работающих в трёхмерном пространстве. Камера не будет работать с
          двумерными слоями, если на нём не применён эффект работающий в трёхмерном
          пространстве.
        </p>
        <ContentFigure
          caption="Техники с камерой в Adobe After Effects"
          src="zgMHWFolli8"
          type="youtube"
        />
        <p>
          В окне <mark className="select">«Camera Settings»</mark> для камеры можно
          выбрать тип<sup>1</sup>, задать имя и пресет, изменить значения угла обзора
          <sup>2</sup> и размера плёнки<sup>3</sup>. Если включить{" "}
          <mark className="select">«Enable Depth of Field»</mark>, станет доступна
          настройка расстояния до точки фокусировки<sup>4</sup>, апертуры<sup>5</sup>,
          диафрагмы
          <sup>6</sup> и уровня размытия<sup>7</sup>. При необходимости можно также
          изменить метрическую систему<sup>8</sup>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Чтобы открыть параметры этого слоя — выделите слой с камерой и нажмите{" "}
              <mark className="key">Ctrl + Shift + Y</mark>.
            </li>
            <li>
              Также свойства камеры можно анимировать на таймлайне, раскрыв вкладку{" "}
              <mark className="select">«Camera Options»</mark> у слоя.
            </li>
          </ul>
        </Addition>
        <ContentFigure
          caption="Camera Settings"
          imgTitle="Настройки камеры"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/camera_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          Учтите, что не все параметры камеры доступны в движках рендера{" "}
          <mark className="plugin">Advanced 3D</mark> и{" "}
          <mark className="plugin">Cinema 4D</mark>, например,{" "}
          <mark className="select">«Depth of Field»</mark>.
        </Addition>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> У камеры может быть два типа:{" "}
              <mark className="select">«One-Node»</mark> и{" "}
              <mark className="select">«Two-Node»</mark>.
              <ul>
                <li>
                  <mark className="select">«One-Node Camera»</mark> или{" "}
                  <mark className="select">«одноузловая камера»</mark> работает как
                  физическая камера: перемещается независимо от точки фокуса и вращается
                  вокруг себя.
                </li>
                <li>
                  <mark className="select">«Two-Node Camera»</mark> или{" "}
                  <mark className="select">«двухузловая камера»</mark> имеет точку обзора
                  и ориентируется относительно{" "}
                  <mark className="select">«Point of Interest»</mark>. Такой тип полезен
                  при создании параллакс-эффекта.
                </li>
                <li>
                  Для любого типа камеры можно включить автоориентацию: выделите камеру,
                  нажмите <mark className="key">Ctrl + Alt + O</mark> и выберите нужный
                  параметр. Если выбрать{" "}
                  <mark className="select">«Orient Towards Point of Interest»</mark> —{" "}
                  <mark className="select">«одноузловая камера»</mark> превратится в{" "}
                  <mark className="select">«двухузловую»</mark>. Если выбрать{" "}
                  <mark className="select">«Off»</mark> или{" "}
                  <mark className="select">«Orient Along Path»</mark>, наоборот —{" "}
                  <mark className="select">«двухузловая»</mark> станет{" "}
                  <mark className="select">«одноузловой»</mark>.
                </li>
              </ul>
            </li>
            <li>
              <sup>2</sup> Параметры <mark className="select">«Zoom»</mark>,{" "}
              <mark className="select">«Angle of View»</mark> и{" "}
              <mark className="select">«Focal Length»</mark> связаны между собой.{" "}
              <mark className="select">«Focal Length»</mark> — это фокусное расстояние
              объектива: чем оно меньше, тем шире{" "}
              <mark className="select">«Angle of View»</mark> и больше объектов попадает в
              кадр. Чем больше фокусное расстояние, тем меньше угол обзора, объекты
              кажутся ближе, а перспектива сжимается.{" "}
              <mark className="select">«Zoom»</mark> — это итоговое увеличение, напрямую
              зависящее от этих двух параметров. Настраивая один из них, вы влияете на
              оптику всей виртуальной камеры.
            </li>
            <li>
              <sup>3</sup> <mark className="select">«Film Size»</mark> — размер условной
              плёнки. Изменение этого параметра влияет на{" "}
              <mark className="select">«Zoom»</mark> и{" "}
              <mark className="select">«Angle of View»</mark>.
            </li>
            <li>
              <sup>4</sup> <mark className="select">«Focus Distance»</mark> — расстояние
              до точки фокусировки. Его можно привязать к нужному слою: кликните по нему{" "}
              <mark className="key">ПКМ</mark> и выберите{" "}
              <mark className="select">«Camera» → «Link Focus Distance to Layer»</mark>.
            </li>
            <li>
              <sup>5</sup> <mark className="select">«Aperture»</mark> — отвечает за
              размытие: чем больше апертура, тем сильнее размываются объекты вне фокуса.
              Изменение этого значения автоматически скорректирует{" "}
              <mark className="select">«F-Stop»</mark> в противоположную сторону.
            </li>
            <li>
              <sup>6</sup> <mark className="select">«F-Stop»</mark> — также отвечает за
              размытие: чем меньше значение, тем сильнее эффект. При его изменении{" "}
              <mark className="select">«Aperture»</mark> тоже изменится — обратно
              пропорционально.
            </li>
            <li>
              <sup>7</sup> <mark className="select">«Blur Level»</mark> регулирует степень
              размытия. Фактически это дополнительный коэффициент действия параметров{" "}
              <mark className="select">«Aperture»</mark> и{" "}
              <mark className="select">«F-Stop»</mark>.
            </li>
            <li>
              <sup>8</sup> В <mark className="select">«Units»</mark> можно изменить
              метрическую систему — на миллиметры, дюймы или пиксели. В{" "}
              <mark className="select">«Measure Film Size»</mark> задаётся, по какой оси
              измерять размер плёнки: горизонтально, вертикально или по диагонали.
            </li>
          </ul>
        </Addition>
        <p>
          Если раскрыть слой камеры на таймлайне, вы увидите дополнительные параметры,
          связанные с визуальными эффектами диафрагмы<sup>1</sup> и пересветами
          <sup>2</sup>.
        </p>
        <ContentFigure
          caption="Timeline"
          imgTitle="Свойства камеры на таймлайне"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/camera_options_on_timeline.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> Параметры, начинающиеся с{" "}
              <mark className="select">«Iris»</mark>, задают форму и поведение боке. Но не
              все эффекты, работающие в трёхмерном пространстве отзываются на эти
              настройки.
              <ul>
                <li>
                  <mark className="select">«Iris Shape»</mark> — форма лепестков
                  диафрагмы, видимых в ярких бликах. Значения, отличные от{" "}
                  <mark className="select">«Fast Rectangle»</mark>, требуют больше
                  ресурсов и могут замедлить рендер, зато обеспечивают более реалистичное
                  размытие. При использовании{" "}
                  <mark className="select">«Fast Rectangle»</mark> некоторые параметры
                  ниже не работают.
                </li>
                <li>
                  <mark className="select">«Iris Rotation»</mark> — угол поворота
                  лепестков.
                </li>
                <li>
                  <mark className="select">«Iris Roundness»</mark> — сглаженность углов
                  лепестков: от почти треугольных до идеально округлых.
                </li>
                <li>
                  <mark className="select">«Iris Aspect Ratio»</mark> — соотношение сторон
                  фигуры диафрагмы. Можно растянуть или сплющить форму.
                </li>
                <li>
                  <mark className="select">«Iris Diffraction Fringe»</mark> — имитация
                  световой дифракции на бликах. До значения <mark>200</mark> эффект почти
                  незаметен, но при <mark>500</mark> становится выраженным.
                </li>
              </ul>
            </li>
            <li>
              <sup>2</sup> Параметры, начинающиеся с{" "}
              <mark className="select">«Highlight»</mark>, отвечают за усиление яркости и
              насыщенности светлых участков изображения. Работают только при включённом{" "}
              <mark className="select">«Depth of Field»</mark>, но при этом значение
              размытия может оставаться нулевым.
              <ul>
                <li>
                  <mark className="select">«Highlight Gain»</mark> — усиливает яркость
                  самых светлых участков размытия.
                </li>
                <li>
                  <mark className="select">«Highlight Threshold»</mark> — определяет порог
                  яркости, с которого начинают работать{" "}
                  <mark className="select">«Highlight Gain»</mark> и{" "}
                  <mark className="select">«Highlight Saturation»</mark>. По умолчанию
                  установлено значение <mark>255</mark>; пока вы не снизите этот порог,
                  остальные два параметра не окажут никакого эффекта.
                </li>
                <li>
                  <mark className="select">«Highlight Saturation»</mark> — регулирует
                  насыщенность самых ярких размытых участков.
                </li>
              </ul>
            </li>
          </ul>
        </Addition>
        <p>
          В настройках <mark className="app">Adobe After Effects</mark> можно включить
          управление камерой с помощью мыши при зажатой <mark className="key">Alt</mark>,
          а также использовать клавиши <mark className="key">1</mark>,{" "}
          <mark className="key">2</mark> и <mark className="key">3</mark> для выбора
          инструментов навигации камеры, и <mark className="key">4</mark>,{" "}
          <mark className="key">5</mark> и <mark className="key">6</mark> — для
          переключения типов инструментов для трёхмерных объектов в окне предпросмотра.
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Настройки в 3D"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/edit_preferences_3d.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <ul>
          <li>
            <mark className="key">1</mark> — инструмент вращения по орбите вокруг курсора,
            сцены или <mark className="select">«Point of Interest»</mark>.
          </li>
          <li>
            <mark className="key">2</mark> — инструмент панорамирования от курсора или
            поворота <mark className="select">«Point of Interest»</mark>.
          </li>
          <li>
            <mark className="key">3</mark> — инструмент панорамирования по оси Z
            относительно курсора, от вида камеры или от{" "}
            <mark className="select">«Point of Interest»</mark>.
          </li>
        </ul>
        <Addition type="info">
          <mark className="key">Shift + 1 / 2 / 3</mark> — быстро переключает инструменты
          между указанными режимами.
        </Addition>
        <ul>
          <li>
            <mark className="key">4</mark> — инструмент перемещения трёхмерного объекта.
          </li>
          <li>
            <mark className="key">5</mark> — инструмент масштабирования трёхмерного
            объекта.
          </li>
          <li>
            <mark className="key">6</mark> — инструмент поворота трёхмерного объекта.
          </li>
        </ul>
        <Addition type="info">
          Чтобы вернуть универсальный манипулятор, выберите его на{" "}
          <mark className="select">панели инструментов</mark> или нажмите{" "}
          <mark className="key">Shift + V</mark>.
          <ContentFigure
            caption="Tools"
            imgTitle="Выбор универсального манипулятора"
            // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
            src="images/legacy/aftereffects/select_universal_transform_gizmo.png"
            theme="dark"
            type="image"
            variant="windows"
          />
        </Addition>
        <Divider>Источник освещения</Divider>
        <p>
          <mark className="select">«Light Layer»</mark> — слой, который используется для
          создания света в композиции и влияет на трёхмерные объекты. Он позволяет
          освещать слои и отбрасывать от них тени, но не влияет на двумерные слои. Для
          источника света можно настроить его тип<sup>1</sup>, цвет<sup>2</sup>,
          интенсивность<sup>3</sup>, угол освещения<sup>4</sup> и плавность затухания
          конуса<sup>5</sup>, дальность действия<sup>6</sup>, а также работу с тенями
          <sup>7</sup>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Чтобы создать источник освещения — нажмите комбинацию клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + L</mark>.
            </li>
            <li>
              Для настройки цвета, интенсивности и других параметров — используйте{" "}
              <mark className="key">Ctrl + Shift + Y</mark>.
            </li>
          </ul>
        </Addition>
        <ContentFigure
          caption="Light Settings"
          imgTitle="Настройка источника света"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/light_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> <mark className="select">«Light Type»</mark> — тип источника
              освещения.{" "}
              <ul>
                <li>
                  <mark className="select">«Parallel»</mark> — направленный,
                  неограниченный источник света, имитирующий солнце: лучи идут строго
                  параллельно и словно приходят «из бесконечности».
                </li>
                <li>
                  <mark className="select">«Spot»</mark> (по умолчанию) — свет от
                  источника в виде конуса, как у фонарика или сценического прожектора. Для
                  такого типа доступны настройки угла конуса<sup>4</sup> и плавного
                  рассеивания<sup>5</sup>.
                </li>
                <li>
                  <mark className="select">«Point»</mark> — всенаправленный точечный свет,
                  как от обычной лампочки.
                </li>
                <li>
                  <mark className="select">«Ambient»</mark> — заполняющий свет, не
                  создающий теней.
                </li>
                <li>
                  <mark className="select">«Environment»</mark> — создаёт освещение,
                  отражения и тени за счёт карты <mark className="image">HDRI</mark>.
                  <Addition type="warning">
                    Этот тип освещения доступен только при работе с движком{" "}
                    <mark className="plugin">Advanced 3D</mark>.
                  </Addition>
                </li>
              </ul>
            </li>
            <li>
              <sup>2</sup> <mark className="select">«Color»</mark> — настройка цвета
              источника освещения. Чем темнее цвет, тем ниже будет яркость самого
              источника — вполне логично.
            </li>
            <li>
              <sup>3</sup> <mark className="select">«Intensity»</mark> — мощность
              источника освещения. Значения могут быть практически любыми. Отрицательные
              значения «вычитают» свет других источников.
            </li>
            <li>
              <sup>4</sup> <mark className="select">«Cone Angle»</mark> — угол вершины
              конуса. Чем больше значение, тем шире распространяется свет.
            </li>
            <li>
              <sup>5</sup> <mark className="select">«Cone Feather»</mark> — сглаживает
              края светового конуса. При больших значениях{" "}
              <mark className="select">«Intensity»</mark> эффект может быть незаметен.
            </li>
            <li>
              <sup>6</sup> <mark className="select">«Falloff»</mark> — параметр,
              отвечающий за постепенное снижение{" "}
              <mark className="select">«Intensity»</mark> в зависимости от расстояния.{" "}
              <mark className="select">«Radius»</mark> задаёт область, в пределах которой
              свет остаётся постоянным, а{" "}
              <mark className="select">«Falloff Distance»</mark> — длину, после которой
              свет начинает постепенно затухать.
              <ul>
                <li>
                  <mark className="select">«None»</mark> — интенсивность света не зависит
                  от расстояния.
                </li>
                <li>
                  <mark className="select">«Smooth»</mark> — плавное уменьшение яркости в
                  пределах заданных дистанции и радиуса.
                </li>
                <li>
                  <mark className="select">«Inverse Square Clamped»</mark> — интенсивность
                  убывает обратно пропорционально квадрату расстояния до источника.
                </li>
              </ul>
            </li>
            <li>
              <sup>7</sup> <mark className="select">«Casts Shadows»</mark> — включает
              возможность для источника света отбрасывать тени. Чтобы слой принимал тень,
              у него должен быть активен параметр{" "}
              <mark className="select">«Accepts Shadows»</mark> (включён по умолчанию).
              Чтобы слой сам отбрасывал тень, у него должен быть включён параметр{" "}
              <mark className="select">«Casts Shadows»</mark> (по умолчанию отключён).
            </li>
          </ul>
        </Addition>
        <Divider>Файлы Maxon Cinema 4D</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> можно импортировать проекты
          формата <mark className="file">C4D</mark>, созданные в{" "}
          <mark className="app">Maxon Cinema 4D</mark>, с помощью{" "}
          <mark className="plugin">Cineware</mark> — эффекта и технологии интеграции,
          обеспечивающей связь между этими двумя программами.
        </p>
        <Addition type="warning">
          Если вы используете репак <mark className="app">Adobe After Effects</mark> от{" "}
          <mark className="user">KpoJluK</mark> или версию с вырезанным модулем{" "}
          <mark className="plugin">Cinema 4D Lite</mark> — установите полноценную{" "}
          <mark className="app">Maxon Cinema 4D</mark>, иначе вы столкнетесь с тем, что вы
          не сможете импортировать проекты формата <mark className="file">C4D</mark>.{" "}
          <a href="#8.9">Подробнее...</a>
        </Addition>
        <ContentFigure
          caption="Cineware"
          src="qFVQrxWvOjw"
          type="youtube"
        />
        <Divider>Статьи о слоях от Adobe</Divider>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/3d-layers.html">
            Трёхмерные слои и модели
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/cameras-lights-points-interest.html">
            Камеры, освещение и точки обзора
          </a>
        </div>
      </DetailsSummary>
      <DetailsSummary
        tag="сленг, жаргон, терминология, понятия, сокращения, глоссарий"
        title="Какие популярные термины есть у пользователей программы?"
      >
        <p>
          Когда пользователь только начинает изучать{" "}
          <mark className="app">Adobe After Effects</mark>, у него может возникнуть
          недопонимание в процессе общения с другими людьми. Это нормально: у каждой сферы
          есть свой сленг. В этой статье собраны часто используемые термины и слова.
        </p>
        <Divider>Базовые понятия и интерфейс</Divider>
        <ul>
          <li>
            <mark className="word">Композиция</mark>, или{" "}
            <mark className="word">композ</mark>, — сцена вашего проекта. В композиции
            обычно собирают слои, фигуры и видеофайлы, а также применяют к ним эффекты. У
            каждой композиции есть своя частота кадров, разрешение, длительность и другие
            параметры.
            <Addition type="info">
              Чтобы открыть настройки композиции, используйте комбинацию клавиш{" "}
              <mark className="key">Ctrl + K</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Превью</mark>, или{" "}
            <mark className="word">предпросмотр</mark>, — то, что вы видите в окне, где
            отображается ваша композиция.
          </li>
          <li>
            <mark className="word">«Зайди в окно превью»</mark> — вам предлагают открыть
            окно с настройками проигрывания предпросмотра{" "}
            <mark className="select">«Window» → «Preview»</mark>, чтобы убедиться, что всё
            настроено корректно. Бывает, что у пользователя выставлены неправильные
            значения частоты кадров, из-за чего предпросмотр воспроизводится слишком
            быстро или медленно, либо выбрано низкое качество:{" "}
            <mark className="select">«Auto»</mark> или{" "}
            <mark className="select">«Quarter»</mark> вместо{" "}
            <mark className="select">«Full»</mark>.
          </li>
          <li>
            <mark className="word">Плейхед</mark>, или{" "}
            <mark className="word">CTI (Current Time Indicator)</mark>, — вертикальная
            временная метка, показывающая, на каком кадре вы находитесь в предпросмотре.
          </li>
          <li>
            <mark className="word">Ромбик</mark>, <mark className="word">ключ</mark>, или{" "}
            <mark className="word">кейфрейм</mark>, — ключевые кадры, то есть метки, на
            основе которых создаётся движение параметра. Они указывают, как должен
            выглядеть анимированный элемент в конкретный момент времени.
          </li>
          <li>
            <mark className="word">Часы</mark>, или{" "}
            <mark className="word">секундомер</mark>, — элемент интерфейса на таймлайне
            или в панели управления эффектом, с помощью которого добавляются ключевые
            кадры.
            <Addition type="info">
              Если нажать на секундомер с зажатым <mark className="key">Alt</mark>,
              включится режим работы с выражениями. Выключается он так же.
            </Addition>
          </li>
          <li>
            <mark className="word">Хоткей</mark>, или{" "}
            <mark className="word">горячие клавиши</mark>, — комбинация клавиш для
            быстрого выполнения определённого действия.
          </li>
          <li>
            <mark className="word">Ракета</mark> — окно{" "}
            <mark className="select">«Project Settings»</mark>, в котором обычно меняют
            цветовое пространство проекта или настраивают использование видеокарты.
            <Addition type="info">
              Это окно открывается комбинацией клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Разрешение</mark>, или{" "}
            <mark className="word">резолюшен</mark>, — количество пикселей по ширине и
            высоте. Иногда используется в контексте качества предпросмотра:{" "}
            <mark className="select">«Full»</mark>, <mark className="select">«Half»</mark>
            , <mark className="select">«Third»</mark> или{" "}
            <mark className="select">«Quarter»</mark>.
            <Addition type="info">
              Если у вас есть композиция с разрешением <mark>1280×720</mark>, а в{" "}
              <mark className="select">«Render Settings»</mark> вы указали{" "}
              <mark className="select">«Resize»</mark> до <mark>3840×2160</mark>, вы
              просто растянете видео с <mark>720p</mark> до <mark>4K</mark> без
              фактического улучшения качества. Композиция не будет рендериться сразу в{" "}
              <mark>4K</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Прокси</mark> — копия исходника, созданная для
            повышения производительности. Её качество зависит от кодека и разрешения.
            Прокси стоит использовать, если возникают проблемы с производительностью из-за
            высокого разрешения исходников или требуется более стабильная работа. Прокси
            можно создать прямо в <mark className="app">Adobe After Effects</mark> или с
            помощью сторонних программ, например{" "}
            <mark className="app">Adobe Media Encoder</mark> или{" "}
            <mark className="app">Shutter Encoder</mark>. Также прокси можно применять к
            композициям, чтобы сократить время повторного рендеринга, если вы не
            планируете вносить в них изменения.
            <Addition type="info">
              <ul>
                <li>
                  Переключаться между прокси и оригиналом можно в окне{" "}
                  <mark className="select">«Project»</mark>, нажав на квадратный флажок
                  слева от имени файла.
                </li>
                <li>
                  Если вы создали прокси в другой программе, назначить его можно так: в
                  окне <mark className="select">«Project»</mark> выберите файл, нажмите{" "}
                  <mark className="key">ПКМ</mark> и выберите{" "}
                  <mark className="select">«Set Proxy» → «File»</mark>.
                </li>
                <li>
                  По умолчанию в финальный рендеринг попадает оригинальный файл. Это
                  поведение можно изменить в{" "}
                  <mark className="select">«Render Settings»</mark>, указав в параметре{" "}
                  <mark className="select">«Proxy Use»</mark> значение{" "}
                  <mark className="select">«Use All Proxies»</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="word">Рендер</mark> — процесс обработки кадров и, при
            необходимости, их упаковки в нужный контейнер с выбранным кодеком. Обычно
            используется в контексте экспорта композиции в видеофайл или изображение.
          </li>
          <li>
            <p>
              <mark className="word">Редьюс</mark> — функция{" "}
              <mark className="select">«Reduce Project»</mark>, которая облегчает проект,
              удаляя из него всё, кроме выбранной композиции и всех связанных с ней
              элементов. Находится в{" "}
              <mark className="select">«File» → «Dependencies» → «Reduce Project»</mark>.
              Похожая команда, <mark className="select">«Remove Unused Footage»</mark>,
              удаляет только неиспользуемые в проекте исходники.
            </p>
            <Addition type="warning">
              Если вы пользуетесь этой функцией впервые, на всякий случай создайте копию
              проекта — вдруг она удалит что-то лишнее.
            </Addition>
          </li>
          <li>
            <mark className="word">Коллект</mark> — функция{" "}
            <mark className="select">«Collect Files»</mark>, которая собирает все файлы,
            используемые в проекте, в одну папку. Эту папку можно заархивировать и
            отправить другому человеку или перенести на другой диск.
            <Addition type="info">
              Функция находится в{" "}
              <mark className="select">«File» → «Dependencies» → «Collect Files»</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">«Перелинкуй исходники»</mark> — призыв переподключить
            потерянные файлы. Для этого нажмите <mark className="key">ПКМ</mark> по
            потерянному исходнику в окне <mark className="select">«Project»</mark>,
            выберите <mark className="select">«Replace Footage» → «File»</mark> или
            нажмите <mark className="key">Ctrl + H</mark>.
            <Addition type="info">
              <ul>
                <li>
                  Чтобы отобразить только потерянные файлы в окне{" "}
                  <mark className="select">«Project»</mark>, введите в поиск ключевое
                  слово <mark className="copy">Missing Footage</mark>.
                </li>
                <li>
                  Если остальные потерянные исходники находятся в той же папке, они
                  подключатся автоматически после указания первого файла.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="word">«Перекодируй видос»</mark> — призыв конвертировать
            исходники в монтажный кодек, например{" "}
            <mark className="video">Apple ProRes 422</mark>, через{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">Adobe Media Encoder</mark>.
          </li>
        </ul>
        <Divider>Работа со слоями и эффектами</Divider>
        <ul>
          <li>
            <mark className="word">Аджастмент</mark> — корректирующий слой,{" "}
            <mark className="select">«Adjustment Layer»</mark>. Он позволяет применять
            эффекты ко всем слоям, расположенным ниже на таймлайне. Такой слой часто
            используют для общей цветокоррекции или других эффектов, влияющих на всю
            сцену.
            <Addition type="info">
              Чтобы создать такой слой, нажмите{" "}
              <mark className="key">Ctrl + Alt + Y</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Солид</mark> — слой сплошной заливки заданного цвета,{" "}
            <mark className="select">«Solid Layer»</mark>. Часто применяется как фон или
            «инициатор» для трёхмерных эффектов вроде{" "}
            <mark className="plugin">Trapcode Particular</mark> или{" "}
            <mark className="plugin">Mettle Flux</mark>.
          </li>
          <li>
            <mark className="word">Шейп</mark> — слой с фигурой,{" "}
            <mark className="select">«Shape Layer»</mark>. Это может быть как произвольная
            форма, так и стандартная: квадрат, эллипс или «звезда».
          </li>
          <li>
            <mark className="word">Маска</mark> — ограничивающая область на слое, через
            которую проявляется эффект или сам слой.
          </li>
          <li>
            <mark className="word">Патч</mark>, <mark className="word">path</mark>, или{" "}
            <mark className="word">путь</mark>, — линия или кривая, которая образует
            фигуру или маску.
            <Addition type="info">
              Путь маски и фигурного слоя взаимозаменяемы: их можно копировать и вставлять
              друг в друга.
            </Addition>
          </li>
          <li>
            <mark className="word">Прекомпоз</mark> — дочерняя композиция, созданная из
            выделенных слоёв родительской. Создаётся с помощью{" "}
            <mark className="key">Ctrl + Shift + C</mark>. Чаще всего используется для
            группировки объектов в один слой.
            <Addition type="info">
              В любой непонятной ситуации — используйте прекомпоз. Часто помогает.
            </Addition>
          </li>
          <li>
            <mark className="word">Трансформ</mark> — базовые свойства слоя: положение,
            масштаб, поворот и прочие. Иногда означает встроенный эффект{" "}
            <mark className="plugin">Transform</mark>.
          </li>
          <li>
            <mark className="word">Овершут</mark> — приём в анимации, при котором объект
            слегка «проскакивает» свою конечную точку, а затем возвращается назад. Такой
            эффект создаёт реалистичное, «пружинящее» движение и имитирует инерцию.
            <Addition type="warning">
              Некоторые свойства, например положение (если не разделено через{" "}
              <mark className="select">«Separate Dimensions»</mark>), не поддерживают{" "}
              <mark className="word">овершут</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Моушен-блюр</mark> — размытие в движении. С его помощью
            можно сделать движение объекта более плавным и естественным. Включается
            переключателем <mark className="select">«Motion Blur»</mark> у слоя или
            применяется как эффект <mark className="plugin">CC Force Motion Blur</mark>.
          </li>
          <li>
            <mark className="word">Стесняшка</mark>, <mark className="word">шляпка</mark>{" "}
            или <mark className="word">медуза</mark> — иконка и функция{" "}
            <mark className="select">«Shy»</mark>. Если у слоя отмечен этот атрибут, его
            можно легко скрыть на таймлайне, но он останется видимым в композиции.
          </li>
          <li>
            <mark className="word">Решётка</mark> — индикатор{" "}
            <mark className="select">«Guide Layer»</mark>. Такой слой виден только в
            предпросмотре и не попадает в финальный рендеринг. Используется для заметок
            или технических разметок.
          </li>
          <li>
            <mark className="word">Кубик</mark> — индикатор, который переводит слой в
            трёхмерное пространство. С такими слоями можно работать в 3D: менять положение
            по трём осям, поворачивать объект в пространстве или управлять камерой.
          </li>
          <li>
            <mark className="word">Солнышко</mark>, или{" "}
            <mark className="word">звёздочка</mark>, — иконка, которая выполняет два
            разных действия в зависимости от типа слоя:{" "}
            <mark className="select">«Continuously Rasterize»</mark> для сглаживания
            векторных объектов или{" "}
            <mark className="select">«Collapse Transformation»</mark> для
            слоёв-композиций.
            <Addition type="info">
              При включённой опции{" "}
              <mark className="select">«Continuously Rasterize»</mark> увеличение масштаба
              предпросмотра не даст «векторной» чёткости, так как{" "}
              <mark className="app">Adobe After Effects</mark> всегда растрирует
              изображение под разрешение композиции.
            </Addition>
          </li>
          <li>
            <mark className="word">Тайлинг</mark> — эффект бесшовной плитки, который можно
            использовать для заполнения пустоты, например при имитации тряски камеры.
            Обычно делается с помощью эффектов <mark className="plugin">CC Repetile</mark>{" "}
            или <mark className="plugin">Motion Tile</mark>.
          </li>
          <li>
            <mark className="word">Тайм-ремапинг</mark> — изменение скорости видео в
            определённых промежутках времени. Делается с помощью встроенной функции{" "}
            <mark className="select">«Time Remapping»</mark>, которая включается
            комбинацией клавиш <mark className="key">Ctrl + Alt + T</mark> или сторонних
            плагинов вроде <mark className="plugin">Twixtor</mark>.
          </li>
          <li>
            <mark className="word">Улитка</mark>, <mark className="word">спираль</mark>{" "}
            или <mark className="word">лассо</mark> — инструмент для привязки свойства
            одного слоя к другому.
            <Addition type="info">
              Если этого инструмента нет на таймлайне, включите его:{" "}
              <mark className="key">ПКМ</mark> по заголовкам столбцов →{" "}
              <mark className="select">«Columns» → «Parent & Link»</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Усики</mark> — манипуляторы для управления кривыми в
            редакторе графиков <mark className="select">«Graph Editor»</mark>, траекторией
            движения объекта в окне предпросмотра композиции или углами фигуры.
          </li>
          <li>
            <mark className="word">Выражения</mark>,{" "}
            <mark className="word">expressions</mark> или{" "}
            <mark className="word">экспрешены</mark> — код на языке, похожем на{" "}
            <mark>JavaScript</mark>, который используется для управления параметрами или
            вычисления значений. Часто применяется для создания сложных анимаций или
            привязки свойств друг к другу.
            <Addition type="info">
              Чтобы активировать режим редактирования выражения, нажмите на{" "}
              <mark className="select">секундомер</mark> нужного параметра, зажав{" "}
              <mark className="key">Alt</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Шейк</mark>, или <mark className="word">вигл</mark>, —
            случайное движение или тряска слоя, часто по осям X и Y. Этот эффект популярен
            в <mark className="word">эдитах</mark>. Под «виглом» обычно подразумевают
            встроенную функцию выражения <mark className="code">wiggle(freq, amp)</mark>.
          </li>
          <li>
            <mark className="word">Автотрейс</mark> — функция, которая автоматически
            создаёт маски по контурам объекта. Вызывается через{" "}
            <mark className="select">«Layer» → «Auto-Trace»</mark>.
          </li>
          <li>
            <mark className="word">Морфинг</mark> — приём плавного превращения одной
            фигуры в другую.
          </li>
          <li>
            <mark className="word">Кеинг</mark> — процедура удаления однородного фона (как
            правило, зелёного или синего) из видео или изображения.
          </li>
          <li>
            <mark className="word">Клинап</mark> — процедура удаления ненужных объектов в
            кадре. Делается встроенным инструментом{" "}
            <mark className="plugin">Content-Aware Fill</mark>, сторонним плагином{" "}
            <mark className="plugin">Mocha Pro</mark> или другими методами.
          </li>
          <li>
            <mark className="word">Нулевой объект</mark>,{" "}
            <mark className="word">Null Object</mark> или{" "}
            <mark className="word">нуль</mark> — невидимый вспомогательный слой, который
            используется для управления другими слоями или в качестве «носителя»
            контроллеров.
          </li>
          <li>
            <mark className="word">Ротобраш</mark>, или{" "}
            <mark className="word">Roto Brush</mark>, — стандартный инструмент программы
            для выделения движущегося объекта в кадре.
          </li>
          <li>
            <mark className="word">Ротоскопинг</mark> — процесс покадрового отделения
            объекта от фона.
          </li>
          <li>
            <mark className="word">Трекинг</mark> — отслеживание движения объекта для
            последующей привязки к нему другого объекта. Часто применяется для замены
            экранов на видео.
          </li>
        </ul>
        <Divider>Инструменты</Divider>
        <ul>
          <li>
            Если вы слышите <mark className="word">«борисовский»</mark>,{" "}
            <mark className="word">«сапфировский»</mark> или{" "}
            <mark className="word">«континуумовский»</mark>, то обычно собеседник имеет в
            виду плагины от компании <mark className="company">Boris FX</mark>, в
            частности пакеты <mark className="plugin">Sapphire</mark> и{" "}
            <mark className="plugin">Continuum</mark>. Например,{" "}
            <mark className="word">«сапфировский шейк»</mark> — это эффект{" "}
            <mark className="plugin">S_Shake</mark>, а{" "}
            <mark className="word">«континуумовский блюр»</mark> —{" "}
            <mark className="plugin">BCC Lens Blur</mark>.
          </li>
          <li>
            <mark className="word">«Максоновский»</mark>, или{" "}
            <mark className="word">«редгиантовский»</mark>, — подразумеваются плагины от
            компаний <mark className="company">Maxon</mark> и{" "}
            <mark className="company">Red Giant</mark>, например{" "}
            <mark className="plugin">Trapcode Particular</mark> или{" "}
            <mark className="plugin">Universe</mark>.
          </li>
          <li>
            <mark className="word">Могрт</mark>, или <mark className="word">MOGRT</mark>,
            — шаблон анимационного дизайна, который создаётся в{" "}
            <mark className="app">Adobe After Effects</mark> для дальнейшего использования
            в <mark className="app">Adobe Premiere Pro</mark>.
          </li>
          <li>
            <mark className="word">Мокка</mark>, или <mark className="word">моча</mark>, —
            плагин <mark className="plugin">Boris FX Mocha</mark> для трекинга. В{" "}
            <mark className="app">Adobe After Effects</mark> поставляется урезанная версия{" "}
            <mark className="plugin">Mocha AE</mark>; полная называется{" "}
            <mark className="plugin">Mocha Pro</mark>.
            <Addition type="info">
              О различиях <mark className="plugin">Mocha AE</mark> и{" "}
              <mark className="plugin">Mocha Pro</mark> вы можете прочитать на{" "}
              <a href="https://support.borisfx.com/hc/en-us/articles/10232625711117-I-use-Mocha-AE-what-is-the-difference-between-Mocha-AE-and-Mocha-Pro-Do-I-need-Mocha-Pro">
                официальном сайте Boris FX
              </a>
              .
            </Addition>
          </li>
          <li>
            <mark className="word">Элемент 3D</mark> — сторонний плагин{" "}
            <mark className="plugin">Element 3D</mark> от{" "}
            <mark className="company">VideoCopilot</mark> для работы с трёхмерными
            моделями.
          </li>
          <li>
            <mark className="word">Инфлюкс</mark> — сторонний плагин{" "}
            <mark className="plugin">Autokroma Influx</mark>, позволяющий импортировать в
            проект неподдерживаемые форматы файлов, например{" "}
            <mark className="video">MKV</mark> или <mark className="video">FLV</mark>.
          </li>
          <li>
            <mark className="word">Плагин</mark> — подключаемый эффект в виде файла,
            обычно с расширением <mark className="file">AEX</mark> для{" "}
            <mark>Windows</mark> или <mark className="file">PLUGIN</mark> для{" "}
            <mark>macOS</mark>. Часто используется с вопросом «где скачать?».
            <Addition type="info">
              Инструкцию по установке плагинов вы можете найти в{" "}
              <a href="#2.1">статье 2.1</a>.
            </Addition>
          </li>
          <li>
            <mark className="word">Пресет</mark> — готовый набор эффектов в формате{" "}
            <mark className="file">FFX</mark>. Может сохраняться вместе с анимацией.
            <Addition type="info">
              Инструкцию по установке пресетов вы можете найти в{" "}
              <a href="#2.1">статье 2.1</a>.
            </Addition>
            <Addition type="warning">
              Не все сторонние пресеты будут корректно работать в вашем проекте; иногда их
              нужно адаптировать.
            </Addition>
          </li>
          <li>
            <mark className="word">Скрипт</mark> — файл формата{" "}
            <mark className="file">JSX</mark> или <mark className="file">JSXBIN</mark>,
            выполняющий определённые действия.
            <Addition type="info">
              Инструкцию по установке скриптов вы можете найти в{" "}
              <a href="#2.1">статье 2.1</a>.
            </Addition>
          </li>
          <li>
            <mark className="word">Экстеншен</mark>, или{" "}
            <mark className="word">extension</mark>, — расширение, упакованное в формате{" "}
            <mark className="file">ZXP</mark>. После установки появляется в меню{" "}
            <mark className="select">«Window» → «Extensions»</mark>.
            <Addition type="info">
              Инструкцию по установке расширений вы можете найти в{" "}
              <a href="#2.1">статье 2.1</a>.
            </Addition>
          </li>
          <li>
            <mark className="word">Дупликатор</mark> — обычно имеется в виду бесплатный
            скрипт{" "}
            <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>
            . Он используется для создания независимых дубликатов композиций.
            <Addition type="info">
              Чтобы скачать его, нужно зарегистрироваться на сайте{" "}
              <a href="https://aescripts.com">aescripts</a>, на странице плагина указать
              цену <mark>0</mark> и оформить заказ.
            </Addition>
          </li>
          <li>
            <mark className="word">Компсеттер</mark> — бесплатный скрипт{" "}
            <a href="https://aescripts.com/rd-compsetter/">rd: CompSetter</a> для
            пакетного изменения параметров нескольких композиций.
          </li>
        </ul>
        <Divider>Сокращения и сленг</Divider>
        <ul>
          <li>
            <mark className="word">ЕМНИП</mark> — сокращение от «если мне не изменяет
            память».
          </li>
          <li>
            <mark className="word">КТТС</mark> — сокращение от «как только, так сразу».
          </li>
          <li>
            <mark className="word">ASAP</mark>, или <mark className="word">АСАП</mark>, —
            сокращение от «as soon as possible», или «как можно скорее».
          </li>
          <li>
            <mark className="word">Топикстартер</mark>, или{" "}
            <mark className="word">ТС</mark>, — пользователь, который задал вопрос или
            начал обсуждение.
          </li>
        </ul>
        <Divider>Технические термины и форматы</Divider>
        <ul>
          <li>
            <mark className="word">Альфа-канал</mark> — четвёртый канал в цветовой модели{" "}
            <mark>RGBA</mark>, отвечающий за прозрачность. Например,{" "}
            <mark className="file">PNG</mark> поддерживает множество уровней прозрачности,
            а <mark className="image">GIF</mark> — только полную прозрачность или её
            отсутствие. Чтобы сохранить видео с прозрачностью, подойдут контейнеры{" "}
            <mark className="video">MOV</mark>, <mark className="video">AVI</mark> или{" "}
            <mark className="video">WEBM</mark> с кодеком, поддерживающим альфа-канал.
            <Addition type="info">
              Если хотите узнать больше об альфа-канале,{" "}
              <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB">
                загляните на Википедию
              </a>
              .
            </Addition>
          </li>
          <li>
            <mark className="word">Битрейт</mark> — скорость передачи данных в видеофайле,
            обычно измеряется в <mark>Мбит/с</mark>. Он определяет, насколько сильно сжат
            поток данных. Чем выше битрейт, тем лучше качество видео, особенно в
            динамичных сценах.
            <Addition type="info">
              Если у исходного видео битрейт <mark>10 Мбит/с</mark>, а при экспорте вы
              укажете <mark>50 Мбит/с</mark> — качество не улучшится. Вы просто увеличите
              размер файла.
            </Addition>
            <Divider>Виды битрейта</Divider>
            <ul>
              <li>
                <mark className="word">CBR (Constant Bitrate)</mark>, или{" "}
                <mark className="word">постоянный битрейт</mark>, — кодирование, при
                котором битрейт остаётся неизменным на протяжении всего файла. Размер
                файла легко предсказать. Подходит для монтажа, но неэффективен для
                соцсетей из-за большого размера.
              </li>
              <li>
                <mark className="word">VBR (Variable Bitrate)</mark>, или{" "}
                <mark className="word">переменный битрейт</mark>, — кодирование, при
                котором кодек сам регулирует битрейт в зависимости от сложности сцены.
                Плохо подходит для монтажа, но хорошо — для финального экспорта и
                публикации в интернете.
              </li>
              <li>
                <mark className="word">Квантование (Constant Quality)</mark> — метод
                сжатия, при котором уровень качества остаётся постоянным на протяжении
                всего видео. Чем меньше значение <mark className="word">CQ</mark>, тем
                лучше качество, но больше размер. Обычно значения <mark>23</mark> хватает
                для большинства случаев.
                <Addition type="info">
                  Чтобы экспортировать композицию с использованием{" "}
                  <mark className="word">CQ</mark>, используйте сторонний плагин{" "}
                  <mark className="plugin">Voukoder Classic</mark> или конвертируйте видео
                  через <mark className="app">Shutter Encoder</mark>.
                </Addition>
              </li>
              <li>
                <mark className="word">Lossless</mark> — кодирование без потерь.
                Используется редко, когда важна полная идентичность с оригиналом.
                <Addition type="warning">
                  Длинная композиция, закодированная без потерь, может занять почти всё
                  дисковое пространство.
                </Addition>
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Кодек</mark> — программа или библиотека, которая
            кодирует и декодирует видеоданные. Кодеки делятся на{" "}
            <mark className="word">монтажные</mark> и{" "}
            <mark className="word">потоковые (delivery)</mark>. Использовать видео с
            потоковыми кодеками для монтажа не рекомендуется во избежание различных
            проблем и артефактов при работе с ними.
            <Divider>Монтажные кодеки</Divider>
            <ul>
              <li>
                <mark className="video">Apple ProRes</mark> — индустриальный стандарт для
                монтажа. <mark className="video">Apple ProRes 422</mark> чаще всего
                применяют на этапе редактирования, а{" "}
                <mark className="video">Apple ProRes 4444</mark> — для экспорта с
                альфа-каналом.
                <Addition type="info">
                  У каждого варианта данного кодека — <mark>422</mark>,{" "}
                  <mark>422 LT</mark> или <mark>4444</mark> — свой фиксированный битрейт.
                  Ручная настройка не предусмотрена.{" "}
                  <a href="https://ru.wikipedia.org/wiki/Apple_ProRes#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B2_%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B0_ProRes">
                    Подробнее...
                  </a>
                </Addition>
              </li>
              <li>
                <mark className="video">DNxHD</mark> /{" "}
                <mark className="video">DNxHR</mark> — монтажные кодеки от{" "}
                <mark className="company">Avid</mark>, аналог{" "}
                <mark className="video">Apple ProRes</mark>.
              </li>
              <li>
                <mark className="video">GoPro Cineform</mark> — ещё один популярный
                монтажный кодек, поддерживает альфа-канал.
              </li>
            </ul>
            <Divider>Потоковые (delivery) кодеки</Divider>
            <ul>
              <li>
                <mark className="video">H.264</mark> /{" "}
                <mark className="video">H.265 (HEVC)</mark> — самые популярные кодеки для
                распространения видео в интернете. Обеспечивают хорошее соотношение
                качества и размера.
                <Addition type="danger">
                  <ul>
                    <li>
                      <b>
                        <u>Крайне не рекомендуется</u>
                      </b>{" "}
                      использовать для монтажа видео из интернета, закодированные этими
                      кодеками. Такие кодеки предназначены только для финального вывода.
                      При монтаже скачанных с <mark className="app">YouTube</mark> видео
                      вы можете получить артефакты или «зелёный экран», так как монтажная
                      программа не всегда может корректно с ними работать.
                    </li>
                    <li>
                      Прежде чем использовать видео из интернета для монтажа, их стоит
                      перекодировать в монтажный кодек, например{" "}
                      <mark className="video">Apple ProRes 422</mark>.{" "}
                      <a href="#import-pipeline">Подробнее...</a>
                    </li>
                    <li>
                      «Проблема зелёного экрана» часто встречается при работе с «кривыми»
                      исходниками в <mark className="video">H.264</mark> или при
                      использовании видеокарт от <mark className="company">AMD</mark>.
                      Иногда для решения проблемы достаточно отключить аппаратное
                      ускорение декодирования в{" "}
                      <mark className="select">«Edit» → «Preferences» → «Import»</mark>,
                      если вы не хотите перекодировать исходники.
                    </li>
                  </ul>
                </Addition>
              </li>
              <li>
                <mark className="video">VP9</mark> / <mark className="video">AV1</mark> —
                кодеки от Google в контейнере <mark className="video">WEBM</mark>, часто
                используются для веб-страниц. Поддерживают альфа-канал.
                <Addition type="info">
                  Экспортировать в эти кодеки из{" "}
                  <mark className="app">Adobe After Effects</mark> можно только с
                  использованием сторонних конвертеров, например{" "}
                  <mark className="app">Shutter Encoder</mark>.
                </Addition>
              </li>
              <li>
                <mark className="video">MPEG</mark> — устаревший кодек. Раньше его
                использовали для записи видео на <mark>DVD</mark> и <mark>Blu-ray</mark>.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Контейнер</mark> — формат файла, в котором содержатся
            видео- и аудиодорожки, например <mark className="video">MP4</mark>,{" "}
            <mark className="video">MOV</mark> или <mark className="file">MKV</mark>.
          </li>
          <li>
            <mark className="word">Абсолютный путь</mark> — это полный путь до файла,
            начиная с корневого диска. Пример:{" "}
            <mark className="path">C:/Users/aechat/Downloads/your_video.mp4</mark>.
          </li>
          <li>
            <mark className="word">Относительный путь</mark> — это путь от текущей
            директории, в которой вы находитесь. Если вы сейчас в{" "}
            <mark className="path">C:/Users/aechat</mark>, а файл находится в папке{" "}
            <mark className="path">Downloads</mark>, относительный путь будет таким:{" "}
            <mark className="path">Downloads/your_video.mp4</mark>.
          </li>
          <li>
            <mark className="word">Векторная графика</mark>, или{" "}
            <mark className="word">вектор</mark>, — изображение, описанное с помощью
            математических формул. Его отличительная особенность — возможность
            масштабирования без потери качества.
            <Addition type="info">
              В <mark className="app">Adobe After Effects</mark> даже при включённом{" "}
              <mark className="select">«Continuously Rasterize»</mark> вы не сможете
              бесконечно приближать предпросмотр без пикселизации, так как программа
              всегда растрирует изображение под разрешение композиции.
            </Addition>
          </li>
          <li>
            <mark className="word">Растровая графика</mark> — изображение или видео,
            состоящее из цветных пикселей. Чем выше разрешение, тем лучше качество.
          </li>
          <li>
            <mark className="word">Семплы</mark> — количество выборок. Часто применяется в
            плагинах, использующие трёхмерное пространство или в настройках размытия в
            движении. Чем больше семплов, тем лучше картинка, но ниже производительность.
          </li>
          <li>
            <mark className="word">Мультифрейм-рендер</mark>, или{" "}
            <mark className="word">MFR</mark>, — функция{" "}
            <mark className="select">«Multi-Frame Rendering»</mark>, появившаяся в{" "}
            <mark className="app">Adobe After Effects</mark> версии <mark>2022</mark> и
            новее. Она ускоряет финальный рендер, обрабатывая сразу несколько кадров
            параллельно.
            <Addition type="warning">
              Использование <mark className="select">«Multi-Frame Rendering»</mark> может
              привести к увеличению потребления оперативной памяти и есть риск чаще видеть
              ошибку <mark className="warning">«Out of Memory»</mark>.
            </Addition>
          </li>
        </ul>
        <Divider>Производственные термины</Divider>
        <ul>
          <li>
            <mark className="word">Ватермарк</mark>, <mark className="word">вотерка</mark>{" "}
            или <mark className="word">водяной знак</mark> — полупрозрачная надпись или
            логотип, которую ставят с целью указать первоисточник и защитить от
            копирования.
          </li>
          <li>
            <mark className="word">Сейф-зона</mark>,{" "}
            <mark className="word">Safe Area</mark> или{" "}
            <mark className="word">безопасная зона</mark> — рамки внутри кадра, которые
            помогают размещать ключевые элементы так, чтобы они были видны на большинстве
            экранов. Такие зоны актуальны для вертикальных видео, так как интерфейс
            соцсети может перекрывать часть контента.
            <Addition type="info">
              Чтобы включить отображение безопасных зон, нажмите на иконку{" "}
              <mark className="select">«Choose grid and guide options»</mark> под окном
              предпросмотра и выберите{" "}
              <mark className="select">«Title / Action Safe»</mark>
              .
              <ContentFigure
                caption="Composition"
                imgTitle="Включение безопасных зон в предпросмотре"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/aftereffects/enable_action_safe.png"
                theme="dark"
                type="image"
                variant="windows"
              />
            </Addition>
          </li>
          <li>
            <mark className="word">Говорящая голова</mark> — формат видео, в котором
            присутствует только диктор, снятый крупным планом.
          </li>
          <li>
            <mark className="word">Грейдинг</mark> — цветокоррекция. Делится на базовую
            (выравнивание по цвету и яркости) и финальную (стилизация, точечные правки).
          </li>
          <li>
            <mark className="word">Глитч</mark> или <mark className="word">glitch</mark> —
            <mark className="word">Глитч</mark>, или <mark className="word">glitch</mark>,
            — визуальный эффект, имитирующий цифровой сбой или артефакт.
          <li>
            <mark className="word">Ванфрейм-эффект</mark> — эффект, который применяется
            всего на один кадр, обычно с использованием{" "}
            <mark className="select">«Adjustment Layer»</mark>. Часто используется для{" "}
            <mark className="word">глитчей</mark> или вспышек.
          </li>
          <li>
            <mark className="word">Плашка</mark> — графический элемент, поверх которого
            размещают текст.
          </li>
          <li>
            <mark className="word">Рыба</mark> — черновой вариант видео с примерным
            монтажом, без финальной цветокоррекции и звука. Делается для оценки темпа и
            общей структуры.
          </li>
          <li>
            <mark className="word">Шот</mark> или <mark className="word">футаж</mark> —
            <mark className="word">Шот</mark>, или <mark className="word">футаж</mark>, —
          </li>
          <li>
            <mark className="word">Референс</mark> или <mark className="word">реф</mark> —
            <mark className="word">Референс</mark>, или <mark className="word">реф</mark>,
            — синоним слов «пример» и «образец». Используется для иллюстрации анимации или
          </li>
          <li>
            <mark className="word">Шаблон</mark> — готовый проект или пресет, который
            ускоряет работу. Некоторые сторонние шаблоны могут быть слишком требовательны
            к ресурсам; в таких случаях проще сделать «самоделку», то есть собственный
            шаблон для личного пользования.
          </li>
          <li>
            <mark className="word">Переходы</mark> или{" "}
            <mark className="word">Переходы</mark>, или{" "}
            <mark className="word">транзишены</mark>, — визуальные эффекты для стилизации
          </li>
          <li>
            <mark className="word">Туториал</mark> — обучающее видео о том, как
            пользоваться программой или как использовать определённый эффект или плагин.
            Такие видео помогают новичку ориентироваться в интерфейсе программы и иногда
            раскрывают некоторые хитрости при создании эффектов.
          </li>
          <li>
            <mark className="word">Эдиты</mark> — как правило, видео под музыку на основе
            кадров из фильмов, аниме или игр. Часто встречаются на{" "}
            <mark className="app">YouTube</mark> и <mark className="app">TikTok</mark>.
          </li>
          <li>
            <mark className="word">Рилсы</mark> или <mark className="word">шортсы</mark> —
            <mark className="word">Рилсы</mark>, или <mark className="word">шортсы</mark>,
            — короткие вертикальные видеоролики формата <mark>9:16</mark>, публикующиеся в{" "}
              Instagram<sup>1</sup>
            </mark>{" "}
            или <mark className="app">YouTube</mark>. Вокруг этого формата регулярно кипят
            споры о ценах, особенно когда речь заходит о «рилсах за 300 рублей». Это
            вызывает негодование у профессионалов, так как дешёвые предложения
            обесценивают труд, а заказчики всё чаще ждут шедевр за копейки.
            <Addition type="danger">
              <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark>{" "}
              признаны экстремистскими организациями и запрещены на территории Российской
              Федерации.
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="shortcuts"
        tag="хоткеи, горячие клавиши, шорткаты, keyboard shortcuts, hotkeys"
        title="Есть ли список популярных комбинаций клавиш?"
      >
        <p>
          Горячие клавиши помогают ускорить рутинные процессы. В таблицах ниже собраны
          популярные комбинации.
        </p>
        <Addition type="info">
          <ul>
            <li>
              В таблице приведены комбинации для <mark>Windows</mark>. В зависимости от
              версии программы и платформы, на которой вы работаете, комбинации клавиш
              могут отличаться.
            </li>
            <li>
              Более подробный список комбинаций клавиш можно найти{" "}
              <a href="https://helpx.adobe.com/after-effects/using/keyboard-shortcuts-reference.html">
                на официальном сайте Adobe
              </a>
              , посмотреть в{" "}
              <a href="https://www.youtube.com/watch?v=i6eFTDS2rvI">видео от AEPlug</a>{" "}
              или изучить в меню{" "}
              <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>.
            </li>
          </ul>
        </Addition>
        <Divider>Работа с файлами и проектом</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Создать новый проект и закрыть текущий
                <Addition type="info">
                  Если открытый проект не был сохранён, программа предложит это сделать.
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + Alt + N</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть окно создания новой композиции</td>
              <td>
                <mark className="key">Ctrl + N</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть системное окно импорта файлов</td>
              <td>
                <mark className="key">Ctrl + I</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть проект</td>
              <td>
                <mark className="key">Ctrl + O</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть последний проект, с которым вы работали</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + P</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть или выполнить недавно использованный скрипт</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + D</mark>
              </td>
            </tr>
            <tr>
              <td>Сохранить проект</td>
              <td>
                <mark className="key">Ctrl + S</mark>
              </td>
            </tr>
            <tr>
              <td>Сохранить проект как...</td>
              <td>
                <mark className="key">Ctrl + Shift + S</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инкрементное сохранение (сохранить копию с новым номером)
                <Addition type="info">
                  При каждом нажатии в папке проекта будет создаваться новая копия с
                  возрастающим числом в названии.
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + S</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Выбор инструментов</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Инструмент выделения (Selection Tool)</td>
              <td>
                <mark className="key">V</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент «Рука» (Hand Tool)
                <Addition type="info">
                  Зажмите <mark className="key">Пробел</mark>, чтобы временно активировать
                  инструмент.
                </Addition>
              </td>
              <td>
                <mark className="key">H</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент «Перо» (Pen Tool)
                <Addition type="info">
                  <ul>
                    <li>Если выделен обычный слой, инструмент будет рисовать маску.</li>
                    <li>Если выделен слой-фигура, он будет рисовать фигуру.</li>
                  </ul>
                </Addition>
              </td>
              <td>
                <mark className="key">G</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент «Текст» (Text Tool)
                <Addition type="info">
                  Многократное нажатие переключает между горизонтальным и вертикальным
                  написанием.
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + T</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент «Опорная точка» (Pan Behind / Anchor Point Tool)</td>
              <td>
                <mark className="key">Y</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент для создания фигур и масок
                <Addition type="info">
                  Многократное нажатие на <mark className="key">Q</mark> переключает между
                  прямоугольником, эллипсом, многоугольником и звездой.
                </Addition>
              </td>
              <td>
                <mark className="key">Q</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент «Кисть» (Brush Tool)
                <Addition type="info">
                  Многократное нажатие переключает между кистью, штампом и ластиком.
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + B</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент «Лупа» (Zoom Tool)
                <Addition type="info">
                  С зажатым <mark className="key">Alt</mark> выполняется уменьшение.
                </Addition>
              </td>
              <td>
                <mark className="key">Z</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент поворота (Rotation Tool)</td>
              <td>
                <mark className="key">W</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент «Кисть для ротоскопии» (Roto Brush Tool)</td>
              <td>
                <mark className="key">Alt + W</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент «Камера» (Camera Tool)
                <Addition type="info">
                  Многократное нажатие переключает между режимами работы камеры.
                </Addition>
              </td>
              <td>
                <mark className="key">C</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент «Марионетка» (Puppet Pin Tool)
                <Addition type="info">
                  Многократное нажатие переключает между разными инструментами марионетки.
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + P</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Отображение свойств слоя</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Показать/скрыть применённые эффекты</td>
              <td>
                <mark className="key">E</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть свойства с выражениями</td>
              <td>
                Дважды <mark className="key">E</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть уровень громкости (Audio Levels)</td>
              <td>
                <mark className="key">L</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть форму волны (Waveform)</td>
              <td>
                Дважды <mark className="key">L</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть опорную точку (Anchor Point)</td>
              <td>
                <mark className="key">A</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть маски (Masks)</td>
              <td>
                <mark className="key">M</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть положение (Position)</td>
              <td>
                <mark className="key">P</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть поворот (Rotation)</td>
              <td>
                <mark className="key">R</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть масштаб (Scale)</td>
              <td>
                <mark className="key">S</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть прозрачность (Opacity)</td>
              <td>
                <mark className="key">T</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть все свойства с ключевыми кадрами</td>
              <td>
                <mark className="key">U</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть все изменённые свойства (даже без ключей)</td>
              <td>
                Дважды <mark className="key">U</mark>
              </td>
            </tr>
            <tr>
              <td>
                Добавить свойство к уже открытым, не скрывая их
                <Addition type="info">
                  Например, <mark className="key">S</mark>, затем{" "}
                  <mark className="key">Shift + P</mark>, затем{" "}
                  <mark className="key">Shift + R</mark> покажут одновременно масштаб,
                  положение и поворот.
                </Addition>
              </td>
              <td>
                Модификатор <mark className="key">Shift</mark>
              </td>
            </tr>
            <tr>
              <td>
                Добавить ключевой кадр для свойства, не открывая его
                <Addition type="info">
                  Например, <mark className="key">Alt + Shift + P</mark> добавит ключ для
                  положения.
                </Addition>
              </td>
              <td>
                Модификатор <mark className="key">Alt + Shift</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Работа с ключевыми кадрами на таймлайне</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Снять выделение со всех ключевых кадров</td>
              <td>
                <mark className="key">Shift + F2</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть/закрыть редактор графика скорости</td>
              <td>
                <mark className="key">Shift + F3</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к предыдущему ключевому кадру/маркеру</td>
              <td>
                <mark className="key">J</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к следующему ключевому кадру/маркеру</td>
              <td>
                <mark className="key">K</mark>
              </td>
            </tr>
            <tr>
              <td>Применить интерполяцию «Easy Ease»</td>
              <td>
                <mark className="key">F9</mark>
              </td>
            </tr>
            <tr>
              <td>Применить интерполяцию «Easy Ease In»</td>
              <td>
                <mark className="key">Shift + F9</mark>
              </td>
            </tr>
            <tr>
              <td>Применить интерполяцию «Easy Ease Out»</td>
              <td>
                <mark className="key">Ctrl + Shift + F9</mark>
              </td>
            </tr>
            <tr>
              <td>Применить интерполяцию «Hold»</td>
              <td>
                <mark className="key">Ctrl + Alt + H</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть выделенные ключи на 1 кадр влево</td>
              <td>
                <mark className="key">Alt + стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть выделенные ключи на 1 кадр вправо</td>
              <td>
                <mark className="key">Alt + стрелка вправо</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть выделенные ключи на 10 кадров влево</td>
              <td>
                <mark className="key">Alt + Shift + стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть выделенные ключи на 10 кадров вправо</td>
              <td>
                <mark className="key">Alt + Shift + стрелка вправо</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть диалог «Keyframe Interpolation»</td>
              <td>
                <mark className="key">Ctrl + Alt + K</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть диалог «Keyframe Velocity»</td>
              <td>
                <mark className="key">Ctrl + Shift + K</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Работа со слоями на таймлайне</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Переместить плейхед к началу выделенного слоя</td>
              <td>
                <mark className="key">I</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед к концу выделенного слоя</td>
              <td>
                <mark className="key">O</mark>
              </td>
            </tr>
            <tr>
              <td>Выделить все слои</td>
              <td>
                <mark className="key">Ctrl + A</mark>
              </td>
            </tr>
            <tr>
              <td>Снять выделение со всех слоёв</td>
              <td>
                <mark className="key">F2</mark> или{" "}
                <mark className="key">Ctrl + Shift + A</mark>
              </td>
            </tr>
            <tr>
              <td>Создать прекомпозицию из выделенных слоёв</td>
              <td>
                <mark className="key">Ctrl + Shift + C</mark>
              </td>
            </tr>
            <tr>
              <td>Дублировать слой</td>
              <td>
                <mark className="key">Ctrl + D</mark>
              </td>
            </tr>
            <tr>
              <td>Удалить все эффекты у выделенных слоёв</td>
              <td>
                <mark className="key">Ctrl + Shift + E</mark>
              </td>
            </tr>
            <tr>
              <td>Применить последний использованный пресет</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + F</mark>
              </td>
            </tr>
            <tr>
              <td>Разделить выделенный слой на две части</td>
              <td>
                <mark className="key">Ctrl + Shift + D</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть/скрыть панель «Effect Controls»</td>
              <td>
                <mark className="key">F3</mark>
              </td>
            </tr>
            <tr>
              <td>Расположить слой в центре композиции</td>
              <td>
                <mark className="key">Ctrl + Home</mark>
              </td>
            </tr>
            <tr>
              <td>Установить опорную точку по центру слоя</td>
              <td>
                <mark className="key">Ctrl + Alt + Home</mark>
              </td>
            </tr>
            <tr>
              <td>Растянуть слой под высоту композиции</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + G</mark>
              </td>
            </tr>
            <tr>
              <td>Растянуть слой под ширину композиции</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + H</mark>
              </td>
            </tr>
            <tr>
              <td>Включить/выключить «Time Remapping»</td>
              <td>
                <mark className="key">Ctrl + Alt + T</mark>
              </td>
            </tr>
            <tr>
              <td>Обратить проигрывание слоя (Time-Reverse Layer)</td>
              <td>
                <mark className="key">Ctrl + Alt + R</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть настройки выделенного слоя
                <Addition type="info">
                  Работает для <mark className="select">«Null Object»</mark>,{" "}
                  <mark className="select">«Light Layer»</mark>,{" "}
                  <mark className="select">«Solid Layer»</mark> и{" "}
                  <mark className="select">«Adjustment Layer»</mark>.
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + Shift + Y</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить начало слоя к плейхеду</td>
              <td>
                <mark className="key">[</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить конец слоя к плейхеду</td>
              <td>
                <mark className="key">]</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 1 кадр влево</td>
              <td>
                <mark className="key">Alt + PgUp</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 10 кадров влево</td>
              <td>
                <mark className="key">Alt + Shift + PgUp</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 1 кадр вправо</td>
              <td>
                <mark className="key">Alt + PgDown</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 10 кадров вправо</td>
              <td>
                <mark className="key">Alt + Shift + PgDown</mark>
              </td>
            </tr>
            <tr>
              <td>Обрезать начало слоя до плейхеда</td>
              <td>
                <mark className="key">Alt + [</mark>
              </td>
            </tr>
            <tr>
              <td>Обрезать конец слоя до плейхеда</td>
              <td>
                <mark className="key">Alt + ]</mark>
              </td>
            </tr>
            <tr>
              <td>Опустить слой ниже по иерархии</td>
              <td>
                <mark className="key">Ctrl + [</mark>
              </td>
            </tr>
            <tr>
              <td>Поднять слой выше по иерархии</td>
              <td>
                <mark className="key">Ctrl + ]</mark>
              </td>
            </tr>
            <tr>
              <td>Переключить режим наложения слоя</td>
              <td>
                <mark className="key">Shift и + </mark> или{" "}
                <mark className="key">Shift и -</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Создание слоёв</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Создать слой-заливку «Solid Layer»</td>
              <td>
                <mark className="key">Ctrl + Y</mark>
              </td>
            </tr>
            <tr>
              <td>Создать корректирующий слой «Adjustment Layer»</td>
              <td>
                <mark className="key">Ctrl + Alt + Y</mark>
              </td>
            </tr>
            <tr>
              <td>Создать нулевой объект «Null Object»</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + Y</mark>
              </td>
            </tr>
            <tr>
              <td>Создать пустой текстовый слой</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + T</mark>
              </td>
            </tr>
            <tr>
              <td>Создать камеру</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + C</mark>
              </td>
            </tr>
            <tr>
              <td>Создать источник света</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + L</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Работа с таймлайном и композицией</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Установить начало рабочей области</td>
              <td>
                <mark className="key">B</mark>
              </td>
            </tr>
            <tr>
              <td>Установить конец рабочей области</td>
              <td>
                <mark className="key">N</mark>
              </td>
            </tr>
            <tr>
              <td>
                Задать длительность рабочей области под выделеные слои
                <Addition type="info">
                  Если ни один слой не будет выделен, рабочая область будет выделена по
                  всей длине композиции.
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + Alt + B</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к началу рабочей области</td>
              <td>
                <mark className="key">Shift + Home</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к концу рабочей области</td>
              <td>
                <mark className="key">Shift + End</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к началу композиции</td>
              <td>
                <mark className="key">Home</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к концу композиции</td>
              <td>
                <mark className="key">End</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на 1 кадр назад</td>
              <td>
                <mark className="key">PgUp</mark> или{" "}
                <mark className="key">Ctrl + стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на 1 кадр вперёд</td>
              <td>
                <mark className="key">PgDown</mark> или{" "}
                <mark className="key">Ctrl + стрелка вправо</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на 10 кадров назад</td>
              <td>
                <mark className="key">Shift + PgUp</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на 10 кадров вперёд</td>
              <td>
                <mark className="key">Shift + PgDown</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть настройки композиции</td>
              <td>
                <mark className="key">Ctrl + K</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть окно «Project Settings»</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + K</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть линейки</td>
              <td>
                <mark className="key">Ctrl + R</mark>
              </td>
            </tr>
            <tr>
              <td>Обрезать композицию по рабочей области</td>
              <td>
                <mark className="key">Ctrl + Shift + X</mark>
              </td>
            </tr>
            <tr>
              <td>Увеличить/уменьшить масштаб таймлайна</td>
              <td>
                <mark className="key"> + </mark> или <mark className="key">-</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к определённому времени на таймлайне</td>
              <td>
                <mark className="key">Alt + Shift + J</mark>
              </td>
            </tr>
            <tr>
              <td>Поставить маркер на таймлайне</td>
              <td>
                <mark className="key">* (на Numpad)</mark>
                <Addition type="info">
                  Если у вас клавиатура без цифрового блока, можно переназначить эту
                  клавишу в <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>.
                </Addition>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Работа с окном предпросмотра</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Показать/скрыть границы слоёв, контроллеры и пути движения
                <Addition type="info">
                  Настроить отображение некоторых наложений можно в окне{" "}
                  <mark className="select">«View Options»</mark> (
                  <mark className="key">Ctrl + Alt + U</mark>).
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + Shift + H</mark>
              </td>
            </tr>
            <tr>
              <td>
                Показать/скрыть сетку
                <Addition type="info">
                  Настроить сетку можно в{" "}
                  <mark className="select">
                    «Edit» → «Preferences» → «Grids & Guides»
                  </mark>
                  .
                </Addition>
              </td>
              <td>
                <mark className="key">Ctrl + &apos;</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть направляющие</td>
              <td>
                <mark className="key">Ctrl + ;</mark>
              </td>
            </tr>
            <tr>
              <td>Включить/выключить привязку к направляющим</td>
              <td>
                <mark className="key">Ctrl + Shift + ;</mark>
              </td>
            </tr>
            <tr>
              <td>Показать/скрыть безопасные зоны</td>
              <td>
                <mark className="key">&apos;</mark>
              </td>
            </tr>
            <tr>
              <td>Увеличить/уменьшить масштаб предпросмотра</td>
              <td>
                <mark className="key">.</mark> или <mark className="key">,</mark>
              </td>
            </tr>
            <tr>
              <td>
                Начать/остановить воспроизведение предпросмотра
                <Addition type="info">
                  При включённом кэшировании первое нажатие запускает просчёт, второе —
                  принудительно начинает воспроизведение уже просчитанных кадров.
                </Addition>
              </td>
              <td>
                <mark className="key">Пробел</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Прочее</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Открыть окно «Preferences»</td>
              <td>
                <mark className="key">Ctrl + Alt + ;</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть редактор горячих клавиш</td>
              <td>
                <mark className="key">Ctrl + Alt + &apos;</mark>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
      <DetailsSummary
        tag="рекомендация, топ плагинов, твикстор, рсмб, мбл, борисфх, трапкод, флоу, тру комп дупликатор, юниверс, mbl, plugins, скрипты, расширения, установка"
        title="Какие дополнения стоит установить в первую очередь?"
      >
        <p>
          <mark className="plugin">Плагины</mark> — это компоненты формата{" "}
          <mark className="file">AEX</mark> или <mark className="file">PLUGIN</mark>,
          которые расширяют возможности <mark className="app">Adobe After Effects</mark>.
          Нередко к ним ошибочно относят расширения формата{" "}
          <mark className="file">ZXP</mark> и скрипты форматов{" "}
          <mark className="file">JSX</mark> и <mark className="file">JSXBIN</mark>,
          которые также разберём в этой статье.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Плагины формата <mark className="file">AEX</mark> устанавливаются на
              устройства с <mark>Windows</mark>, а <mark className="file">PLUGIN</mark> —
              на устройства с <mark>macOS</mark>. Данные форматы не являются
              кроссплатформенными.
            </li>
            <li>
              Пожалуйста, не устанавливайте все плагины и скрипты со всего мира в
              программу: это может снизить его производительность. Прежде чем ставить тот
              или иной инструмент — подумайте, действительно ли он вам понадобится в
              работе.
            </li>
            <li>Рекомендации автора статьи могут не совпадать с вашим мнением.</li>
          </ul>
        </Addition>
        <Addition type="info">
          Большинство плагинов из статьи можно найти в каналах{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">«Яблоневый сад» (macOS)</a>.
        </Addition>
        <Divider>Для совместимости с чужими проектами</Divider>
        <ul>
          <li>
            <mark className="plugin">Boris FX Sapphire</mark> и{" "}
            <mark className="plugin">Boris FX Continuum</mark> — пакеты популярных
            эффектов от <mark className="company">Boris FX</mark>, которые дополняют
            скудный стандартный набор инструментов.
          </li>
          <li>
            <mark className="plugin">Boris FX Mocha Pro</mark> — расширенная версия
            стандартного плагина для трекинга <mark className="plugin">Mocha AE</mark> без
            ограничений.
          </li>
          <li>
            Пакеты от <mark className="company">Red Giant</mark>:{" "}
            <mark className="plugin">Magic Bullet Suite</mark> (включает в себя
            полюбившийся многим <mark className="plugin">Looks</mark>),{" "}
            <mark className="plugin">Trapcode Suite</mark>,{" "}
            <mark className="plugin">VFX Suite</mark> и{" "}
            <mark className="plugin">Universe</mark>. Из ключевых эффектов из этих пакетов
            можно выделить <mark className="plugin">Primatte Keyer</mark> и{" "}
            <mark className="plugin">Supercomp</mark> для композитинга, а также{" "}
            <mark className="plugin">Trapcode Particular</mark> для создания частиц и{" "}
            <mark className="plugin">Sound Keys</mark> для генерации ключей из аудио.
          </li>
          <li>
            <mark className="plugin">Element 3D</mark> от{" "}
            <mark className="company">VideoCopilot</mark> — используется для импорта
            трёхмерных моделей в форматах <mark className="file">OBJ</mark>,{" "}
            <mark className="file">C4D</mark>
            <sup>1</sup> и <mark className="file">E3D</mark>.
            <Addition type="warning">
              <sup>1</sup> Для импорта моделей <mark className="file">C4D</mark> требуется
              установленная <mark className="app">Maxon Cinema 4D</mark>.
            </Addition>
          </li>
          <li>
            <mark className="plugin">Twixtor</mark> и <mark className="plugin">RSMB</mark>{" "}
            от <mark className="company">RE:VisionFX</mark> — для плавного замедления и
            создания размытия в движении.
          </li>
          <li>
            <mark className="plugin">Deep Glow</mark> — создаёт красивое свечение, но
            может сильно замедлить рендеринг.
            <Addition type="warning">
              <ul>
                <li>
                  Первая и вторая версии <mark className="plugin">Deep Glow</mark>{" "}
                  несовместимы между собой, поскольку{" "}
                  <mark className="plugin">Deep Glow</mark> и{" "}
                  <mark className="plugin">Deep Glow 2</mark> считаются отдельными
                  плагинами. При этом обе версии можно установить одновременно.
                </li>
                <li>
                  Если вы не планируете использовать обе версии — перенесите параметры из
                  старой версии эффекта в новую в старых проектах. Начиная с{" "}
                  <mark className="plugin">Deep Glow 2</mark> версии <mark>1.1</mark>, в
                  комплект поставляется скрипт{" "}
                  <mark className="file">DEEP GLOW UPGRADER.JSX</mark>, который находит в
                  проекте первую версию <mark className="plugin">Deep Glow</mark> и
                  заменяет её на <mark className="plugin">Deep Glow 2</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="plugin">Saber</mark> от{" "}
            <mark className="company">VideoCopilot</mark> — бесплатный плагин для создания
            неоновой обводки.
          </li>
          <li>
            <mark className="plugin">loopFlow</mark> — оживляет статичные изображения:
            текущую воду, клубящийся дым или огонь.
          </li>
          <li>
            <mark className="plugin">AutoFill</mark> — плагин для создания эффекта
            «проявления» объекта.
            <Addition type="warning">
              Первая и вторая версии <mark className="plugin">AutoFill</mark> также
              несовместимы между собой.
            </Addition>
          </li>
          <li>
            <mark className="plugin">Twitch</mark> от{" "}
            <mark className="company">VideoCopilot</mark> — устаревший
            <sup>1</sup> плагин для создания эффекта тряски, который до сих пор популярен
            у «эдиторов».
            <Addition type="danger">
              <sup>1</sup> Автор статьи не рекомендует использовать этот эффект в новых
              проектах, так как он «морально устарел» и не поддерживает{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>. В качестве замены
              лучше подходит <mark className="plugin">S_Shake</mark> из пакета{" "}
              <mark className="plugin">Boris FX Sapphire</mark> со стилем{" "}
              <mark className="select">«Twitchy»</mark>.
            </Addition>
          </li>
          <li>
            <mark className="plugin">Displacer Pro</mark> — бесплатный плагин для создания
            искажений и переходов.
          </li>
          <li>
            <mark className="plugin">Pixel Sorter 2 / 3</mark> — плагин для создания
            эффектов «сортировки пикселей» и различных искажений.
          </li>
          <li>
            <mark className="plugin">Mettle Flux</mark>,{" "}
            <mark className="plugin">Mettle FreeForm Pro</mark> и{" "}
            <mark className="plugin">Mettle Mantra</mark> — инструменты для создания
            фрактальных волн, искажений и работы с 360-градусным видео.
          </li>
        </ul>
        <Divider>Полезные инструменты</Divider>
        <ul>
          <li>
            <mark className="plugin">Auto Crop 3</mark> — плагин для кадрирования
            композиции по размеру слоёв.
          </li>
          <li>
            <mark className="plugin">Flow</mark> — расширение для быстрого применения
            готовых кривых анимации. Позволяет ускорить рутинную работу в несколько раз.
          </li>
          <li>
            <mark className="plugin">FX Console</mark> от{" "}
            <mark className="company">VideoCopilot</mark> — всплывающая панель для
            быстрого поиска и применения эффектов.
          </li>
          <li>
            <mark className="plugin">Guides</mark> от{" "}
            <mark className="user">Rendertom</mark> — расширяет возможности работы с
            направляющими.
          </li>
          <li>
            <mark className="plugin">kBar</mark> — настраиваемая панель, на кнопки которой
            можно назначить любые действия: применение эффектов, выражений, запуск
            скриптов и т. д.
          </li>
          <li>
            <mark className="plugin">Keystone</mark> — инструмент для манипуляций с
            ключевыми кадрами: растягивание, смещение, выравнивание.
          </li>
          <li>
            <mark className="plugin">Motion Tools Pro</mark> — настраиваемый набор
            инструментов для анимации.
          </li>
          <li>
            <mark className="plugin">Newton</mark> — плагин для симуляции физики двумерных
            объектов.
          </li>
          <li>
            <mark className="plugin">rd: CompSetter</mark> — скрипт для пакетного
            изменения параметров нескольких композиций.
          </li>
          <li>
            <mark className="plugin">True Comp Duplicator</mark> — скрипт для создания
            независимых дубликатов композиций.
          </li>
          <li>
            <mark className="plugin">Workflower</mark> — плагин для организации слоёв на
            таймлайне. Позволяет создавать папки со слоями без прекомпозиции.
            <Addition type="danger">
              Не рекомендуется передавать проект с{" "}
              <mark className="plugin">Workflower</mark> тем, у кого этот плагин не
              установлен, — это может привести к непредсказуемым результатам.
            </Addition>
          </li>
        </ul>
        <Divider>Технические плагины</Divider>
        <ul>
          <li>
            <mark className="plugin">Autokroma Influx</mark> — плагин для импорта
            неподдерживаемых форматов, например <mark className="video">WEBM</mark>,{" "}
            <mark className="video">MKV</mark> или <mark className="video">FLV</mark>.
          </li>
          <li>
            <mark className="plugin">Cyclops</mark> — плагин для экспорта композиции
            вместе со всеми границами слоёв и направляющими, как в предпросмотре.
          </li>
          <li>
            <mark className="plugin">Paint & Stick</mark> — связывает{" "}
            <mark className="app">Adobe After Effects</mark> с{" "}
            <mark className="app">Adobe Photoshop</mark> для покадровой обработки слоя.
          </li>
          <li>
            <mark className="plugin">Pseudo Effect Maker</mark> — инструмент для создания
            удобных контроллеров для ваших эффектов или выражений.
          </li>
          <li>
            <mark className="plugin">Voukoder</mark> и{" "}
            <mark className="plugin">Autokroma AfterCodecs</mark> — плагины для экспорта
            композиций в <mark className="video">H.264</mark> и другие форматы, которые
            работают лучше стандартного экспортёра. Что из них лучше, решать вам.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="update-what-new"
        tag="что нового, фишки, обновления, апдейты, патчноуты, changelog, список изменений"
        title="Где я могу узнать о нововведениях в обновлениях программы?"
      >
        <p>
          Обычно в день выхода новой стабильной версии{" "}
          <mark className="app">Adobe After Effects</mark>, разработчики публикуют на
          своём сайте список нововведений. Это делается для того, чтобы каждый не
          спрашивал из-за каждого угла:{" "}
          <mark className="quote">«А что обновилось-то?»</mark>. Также{" "}
          <mark className="company">Adobe</mark> время от времени выкладывает списки
          выявленных неполадок и временные решения для них.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/whats-new.html">
            Что нового в After Effects
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/known-issues-after-effects.html">
            Известные проблемы в After Effects
          </a>
        </div>
        <p>
          А вообще, рекомендуется время от времени обновлять{" "}
          <mark className="app">Adobe After Effects</mark> и сторонние плагины. Многие
          баги старых версий, например утечка оперативной памяти или смещение кадра при
          экспорте, исправляются в более новых.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="switch-language"
        tag="изменить язык программы, смена языка, установка английской версии, english version, локализация"
        title="Почему все советуют ставить английскую версию программы и как это сделать?"
      >
        <p>
          Установив английскую версию программы, вы убережёте себя от возможных ошибок с
          выражениями или некорректной работы сторонних плагинов. Многие из них просто не
          «дружат» с языками интерфейса, отличными от английского.
        </p>
        <p>
          Кроме того, искать обучающие материалы станет проще: почти все туториалы
          записаны именно с использованием английской локализацией программы. А ещё вы
          быстрее будете находить нужные эффекты в самой программе — в русской локализации
          названия некоторых из них переведены порой нелогично.
        </p>
        <Addition type="danger">
          <ul>
            <li>
              При смене языка <mark className="app">Adobe After Effects</mark> сбросит
              пользовательские настройки, так как они привязаны к языку интерфейса. При
              этом сторонние плагины, скрипты и пресеты останутся на месте.
            </li>
            <li>
              После смены языка описанным ниже способом названия стандартных пресетов и
              рабочих областей могут остаться на русском языке. Чтобы это исправить —
              лучше переустановите программу «с нуля», выбрав английский язык в
              установщике.
            </li>
          </ul>
        </Addition>
        <ContentFilter
          macContent={
            <div>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark>{" "}
                и новее.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Чтобы это сделать — сначала
                нажмите <mark className="key">Command + F12</mark>. В открывшемся окне
                нажмите на иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <ContentFigure
                caption="Включение Debug Database View"
                imgTitle="Включение Debug Database View"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/aftereffects/console_debug-database-view.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ContentFigure
                caption="Установка английского языка в консоли"
                imgTitle="Установка английского языка в консоли"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/aftereffects/set_language_console.png"
                theme="dark"
                type="image"
                variant="windows"
              />
            </div>
          }
          windowsContent={
            <div>
              <Divider>Меняем язык с помощью текстового файла</Divider>
              <p>
                Для быстрой смены языка на английский достаточно создать пустой текстовый
                файл с названием <mark className="file">ae_force_english.txt</mark> и
                поместить его в папку «Документы», находящийся в директории{" "}
                <mark className="path">%USERPROFILE%\Documents</mark>. В сам файл ничего
                писать не нужно. После этого перезапустите{" "}
                <mark className="app">Adobe After Effects</mark>, если он был открыт.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы быстро открыть папку «Документы», нажмите{" "}
                    <mark className="key">Win + R</mark>, введите{" "}
                    <mark className="path">%USERPROFILE%\Documents</mark> и нажмите{" "}
                    <mark className="key">Enter</mark>.
                  </li>
                  <li>
                    Если лень создавать файл вручную, можно сделать это командой{" "}
                    <mark className="code">
                      echo.&gt;&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
                    </mark>{" "}
                    в <mark className="app">cmd</mark>. Учтите, что при использовании{" "}
                    <mark className="app">PowerShell</mark> эта команда не сработает.
                  </li>
                </ul>
              </Addition>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark>{" "}
                и новее.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Чтобы это сделать — сначала
                нажмите <mark className="key">Ctrl + F12</mark>. В открывшемся окне
                нажмите на иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <ContentFigure
                caption="Включение Debug Database View"
                imgTitle="Включение Debug Database View"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/aftereffects/console_debug-database-view.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ContentFigure
                caption="Установка английского языка в консоли"
                imgTitle="Установка английского языка в консоли"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/aftereffects/set_language_console.png"
                theme="dark"
                type="image"
                variant="windows"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="purge"
        tag="очистка кэша, purge, disk cache, память"
        title="Как очистить кэш и зачем это нужно делать?"
      >
        <p>
          Регулярная очистка кэша помогает избавиться от артефактов в предпросмотре, а
          также может решить проблему с ошибкой{" "}
          <mark className="warning">«Out of Memory»</mark>. Чтобы быстро очистить кэш,
          перейдите в{" "}
          <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark> и
          нажмите <mark className="select">«OK»</mark>. После этого предпросмотр нужно
          будет кэшировать заново.
        </p>
        <ContentFigure
          caption="Очистка кэша и оперативной памяти"
          imgTitle="Очистка кэша и оперативной памяти"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <ContentFilter
          windowsContent={
            <div>
              <Addition type="info">
                <ul>
                  <li>
                    Если очистка кэша не помогает избавиться от ошибки{" "}
                    <mark className="warning">«Out of Memory»</mark>, попробуйте{" "}
                    <a href="#6.5">настроить файл подкачки</a>.
                  </li>
                  <li>
                    Вы можете назначить горячую клавишу для очистки кэша в{" "}
                    <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>. По
                    умолчанию есть комбинация только для очистки оперативной памяти:{" "}
                    <mark className="key">Ctrl + Alt + / (Num)</mark>.
                  </li>
                  <li>
                    Если у вас много оперативной памяти и производительный процессор —
                    отключите дисковый кэш в{" "}
                    <mark className="select">
                      «Edit» → «Preferences» → «Media & Disk Cache»
                    </mark>
                    , сняв галочку <mark className="select">«Enable Disk Cache»</mark>.
                    Это позволит программе реже обращаться к накопителю.
                  </li>
                </ul>
              </Addition>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="disable idle caching, выключить кэширование при простое, очень тормозит и зависает программа при выполнении какого-нибудь действия после небольшой паузы"
        title="Как отключить автоматическое кэширование предпросмотра при бездействии?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> версии <mark>2022</mark> и
          новее по умолчанию включено автоматическое кэширование кадров во время простоя.
          На слабых компьютерах или при использовании ресурсоёмких эффектов это может
          вызывать дискомфорт, излишне нагружая систему и заполняя оперативную память.
          Неудивительно, что из-за такого поведения программы некоторые «староверы» до сих
          пор ворчат, мол,{" "}
          <mark className="quote">
            «раньше было лучше, а сейчас всё лагает на ровном месте!!1!»
          </mark>
          . Благо, в <mark className="company">Adobe</mark> при внедрении этой функции
          предусмотрели возможность её отключения.{" "}
          <i style={{opacity: "0.5"}}>И не все об этом в курсе.</i>
        </p>
        <Divider>Отключаем кэширование в простое</Divider>
        <p>
          Для отключения автоматического кэширования при бездействии перейдите в{" "}
          <mark className="select">«Composition» → «Preview»</mark> и снимите флажок{" "}
          <mark className="select">«Cache Frames When Idle»</mark> или нажмите комбинацию
          клавиш <mark className="key">Alt + Shift + I</mark>.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Отключение автоматического кэширования предпросмотра при бездействии"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/disable_idle_cache.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Divider>Настраиваем функцию кэширования в простое</Divider>
        <p>
          Если вы не хотите отключать эту функцию, но хотите изменить время, после
          которого начнётся автоматическое кэширование, — перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Previews»</mark>. В параметре{" "}
          <mark className="select">«Idle Delay Before Caching Starts»</mark> вы можете
          указать любое число от <mark>2</mark> до <mark>15</mark> секунд.
        </p>
        <Addition type="info">
          Чуть ниже этого параметра можно настроить область и направление кэширования:{" "}
          <mark>«вокруг временной метки»</mark>, <mark>«от временной метки»</mark> или{" "}
          <mark>«от начала рабочей области»</mark>.
        </Addition>
        <ContentFigure
          caption="Preferences"
          imgTitle="Изменение времени для автоматического кэширования при бездействии"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_time_idle_cache.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="configure-backup"
        tag="бекап, бэкап, возврат, вернуть, восстановить, облачное хранилище, облако, яндекс диск, журнал файлов, история изменений, откат проекта"
        title="Как настроить резервное копирование, чтобы возвращаться к предыдущим версиям проекта?"
      >
        <p>
          Бывают ситуации, когда после внесённых изменений клиенту результат не нравится и
          нужно вернуться к предыдущей версии. Или, например, файл проекта{" "}
          <mark className="file">AEP</mark> неожиданно повредился после сбоя. Если заранее
          позаботиться о резервном копировании, таких проблем можно избежать. Есть два
          варианта: в облачном хранилище или локально.
        </p>
        <Addition type="info">
          Чтобы быстро сохранить копию открытого проекта под новым именем — воспользуйтесь
          комбинацией <mark className="key">Ctrl + Alt + Shift + S</mark>. Эта команда
          сохранит проект с тем же названием, добавив в конец порядковый номер.
        </Addition>
        <Divider>Создаём резервные копии в облачном хранилище</Divider>
        <p>
          Один из самых простых способов резервного копирования — использовать облачное
          хранилище с включённой автоматической синхронизацией. У популярных сервисов,
          например <mark className="app">Яндекс.Диск</mark>,{" "}
          <mark className="app">Google Drive</mark>, <mark className="app">Dropbox</mark>{" "}
          есть клиенты для <mark>Windows</mark> и <mark>macOS</mark>, которые
          синхронизируют указанные вами папки автоматически.
        </p>
        <p>
          Во многих таких сервисах доступна история версий — она позволяет вернуть старую
          копию файла, если вы что-то случайно удалили или перезаписали. Учтите, что у
          каждого сервиса есть свой срок хранения истории версий файлов — уточняйте это в
          вашем тарифном плане.
        </p>
        <div className="flexible-links">
          <a href="https://yandex.ru/support/yandex-360/customers/disk/desktop/windows/ru/version-control">
            История изменений файла в Яндекс.Диске
          </a>
          <a href="https://support.google.com/drive/answer/2409045?hl=ru&co=GENIE.Platform%3DDesktop">
            Журнал версий в Google Диске
          </a>
          <a href="https://help.dropbox.com/ru-ru/delete-restore/version-history-overview">
            Журнал версий файлов в Dropbox
          </a>
          <a href="https://help.mega.io/ru/files-folders/restore-delete/file-version-history">
            Как управлять версиями файлов в Mega
          </a>
          <a href="https://support.microsoft.com/ru-ru/office/%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D1%8B%D0%B4%D1%83%D1%89%D0%B5%D0%B9-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D1%85%D1%80%D0%B0%D0%BD%D1%8F%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%B2-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893">
            Восстановление предыдущей версии файла в OneDrive
          </a>
        </div>
        <Divider>Создаём локальные резервные копии стандартными средствами ОС</Divider>
        <p>
          Если вариант с облачным хранилищем не подходит, можно организовать систему
          резервного копирования локально. И в <mark>Windows</mark>, и в{" "}
          <mark>macOS</mark> есть встроенные функции для этого. Обычно для их работы
          требуется отдельный накопитель.
        </p>
        <ContentFilter
          macContent={
            <div>
              <p>
                В <mark>macOS</mark> эта функция называется{" "}
                <mark className="app">Time Machine</mark>. Она создаёт «снимки» вашей
                системы и файлов каждый час или по нажатию кнопки.
              </p>
              <Addition type="warning">
                Для работы <mark className="app">Time Machine</mark> нужен внешний
                накопитель, желательно объёмом от <mark>512 ГБ</mark>.
              </Addition>
              <ContentFigure
                caption="How to Set up & Use Time Machine to Backup your Mac"
                src="Gx76i28c150"
                type="youtube"
              />
            </div>
          }
          windowsContent={
            <div>
              <p>
                В <mark>Windows</mark> эта функция называется{" "}
                <mark className="app">«История файлов»</mark>. Она создаёт копии файлов в
                другой папке или на другом диске. С её помощью можно восстановить
                удалённый или предыдущую версию файла.
              </p>
              <Addition type="info">
                Для работы этой функции нужно заранее указать диск для сохранения копий.
              </Addition>
              <ContentFigure
                caption="История файлов в Windows 11 и Windows 10"
                src="xDFQEx9gylc"
                type="youtube"
              />
              <p>
                В параметрах можно задать, как часто сохраняются резервные копии — от
                каждых 10 минут до одного раза в день — и сколько они будут храниться: от
                месяца до двух лет. По истечении этого срока старые версии файлов
                удаляются автоматически.
              </p>
              <Addition type="info">
                <p>
                  По умолчанию <mark className="app">«История файлов»</mark> копирует
                  только стандартные папки <mark className="path">«Библиотеки»</mark>,{" "}
                  <mark className="path">«Рабочий стол»</mark> и прочие. Чтобы добавить
                  свои папки, их нужно добавить в библиотеку.
                </p>
              </Addition>
            </div>
          }
        />
        <Divider>Альтернативные варианты контроля версий</Divider>
        <p>
          В качестве альтернативы можно воспользоваться системой контроля версий{" "}
          <mark className="app">Git</mark> (доступен для{" "}
          <a href="https://git-scm.com/downloads/win">Windows</a> и{" "}
          <a href="https://git-scm.com/downloads/mac">macOS</a>). Если решите использовать{" "}
          <mark className="app">Git</mark> для отслеживания изменений в проекте,
          рекомендую графические клиенты <mark className="app">SourceGit</mark> или{" "}
          <mark className="app">SourceTree</mark>. Вы сможете вручную фиксировать
          состояние папки проекта и при необходимости возвращаться к предыдущим версиям.
          Однако такой инструмент не слишком удобен в сфере видеопроизводства, так как{" "}
          <mark className="app">Git</mark> изначально создавался для работы с кодом.
        </p>
        <ContentFigure
          caption="Объясняем на пальцах про Git"
          src="G4f9OH4IQE8"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="вылет, краш, восстановление, не сохранил, автосохранение, autosave"
        title="Я работал над проектом, но ни разу его не сохранял. Программа «вылетела». Можно ли восстановить проект?"
      >
        <p>
          Нет. <mark className="app">Adobe After Effects</mark> не создаёт автосохранения,
          если проект изначально не был сохранён. В следующий раз перед началом работы
          сразу сохраните файл проекта и периодически нажимайте{" "}
          <mark className="key">Ctrl + S</mark>.
        </p>
        <Addition type="info">
          Чтобы не попасть впросак, если файл проекта повредится — заранее{" "}
          <a href="#3.9">настройте резервное копирование проектов</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="разница, сравнение, after effects vs premiere pro, пайплайн, выбор программы"
        title="В каких случаях нужно использовать Adobe After Effects, а в каких — Adobe Premiere Pro?"
      >
        <p>
          Эти две программы предназначены для разных задач. В{" "}
          <mark className="app">Adobe After Effects</mark> теоретически можно смонтировать
          двухчасовой фильм, а в <mark className="app">Adobe Premiere Pro</mark> —
          заняться композитингом. Однако такой подход неэффективен. Разберёмся, когда
          какую программу использовать.
        </p>
        <ContentFigure
          caption="Когда нужно использовать Adobe Premiere Pro и Adobe After Effects"
          src="xxDdL455rAo"
          type="youtube"
        />
        <ul>
          <li>
            Обе программы подходят для создания коротких видеороликов до одной минуты с
            применением различных эффектов — например,{" "}
            <mark className="video">«рилсов»</mark>,{" "}
            <mark className="video">«тиктоков»</mark>, анимационных афиш, баннеров или
            коротких <mark className="video">«эдитов»</mark>.
          </li>
          <li>
            Теоретически <mark className="app">Adobe Premiere Pro</mark> позволяет делать
            моушен-дизайн, но реализация создании анимации там крайне неудобна. Проще
            создать нужную анимацию в <mark className="app">Adobe After Effects</mark>,
            экспортировать композицию и импортировать её в{" "}
            <mark className="app">Adobe Premiere Pro</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> не рассчитан на сборку
            длинных видеороликов — он иначе работает с памятью и файлами по сравнению с{" "}
            <mark className="app">Adobe Premiere Pro</mark>. Даже при полной сборке
            проекта в <mark className="app">Adobe After Effects</mark> вы можете
            столкнуться с ошибками вроде <mark className="warning">«Out of Memory»</mark>{" "}
            и долгим рендером. Для длинных проектов, подкастов, фильмов или сериалов лучше
            использовать <mark className="app">Adobe Premiere Pro</mark> или другую
            программу для нелинейного монтажа — например,{" "}
            <mark className="app">DaVinci Resolve</mark>.
            <Addition type="info">
              При необходимости вы можете импортировать нужный фрагмент из секвенции в{" "}
              <mark className="app">Adobe After Effects</mark> с помощью{" "}
              <mark className="select">«Replace with After Effects Composition»</mark>,
              затем экспортировать его в <mark className="video">Apple ProRes 4444</mark>{" "}
              и заменить исходный участок в{" "}
              <mark className="app">Adobe Premiere Pro</mark>.
            </Addition>
            <Addition type="warning">
              <ul>
                <li>
                  Не рекомендуется часто использовать{" "}
                  <mark className="plugin">Dynamic Link</mark>, особенно в крупных
                  проектах — это может привести к неожиданным проблемам на этапе
                  финального экспорта.
                </li>
                <li>
                  В <mark className="app">Adobe After Effects</mark> можно создавать
                  композиции до трёх часов, но этого стоит избегать. Вы только усложните
                  себе работу из-за неправильно выстроенного пайплайна.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> не предназначен для
            полноценной обработки аудио. Несмотря на наличие эффектов вроде{" "}
            <mark className="plugin">Echo</mark> или{" "}
            <mark className="plugin">Reverb</mark>, работать со звуком удобнее в{" "}
            <mark className="app">Adobe Premiere Pro</mark> или{" "}
            <mark className="app">Adobe Audition</mark>. Эти программы поддерживают
            многодорожечную обработку и <mark className="plugin">VST-плагины</mark>. При
            необходимости звук можно экспортировать из них и импортировать обратно в
            композицию <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            <mark className="app">Adobe Premiere Pro</mark> не подходит для сложного
            композитинга и создания визуальных эффектов с нуля. В этом плане{" "}
            <mark className="app">Adobe After Effects</mark> предлагает больше
            возможностей: поддержка трёхмерных сцен, работа со сторонними эффектами и
            плагинами (например, <mark className="plugin">Trapcode Particular</mark>)
            делают его более подходящим для таких задач.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="replace-footage"
        tag="replace footage, замена файла, перелинковать"
        title="Как заменить один исходник другим?"
      >
        <p>
          Иногда при работе с проектом в <mark className="app">Adobe After Effects</mark>{" "}
          возникает необходимость заменить импортированный исходник другим файлом —
          например, версией, перекодированной в монтажный кодек, или просто другим видео.
          Это можно сделать несколькими способами.
        </p>
        <Divider>Замена через Replace Footage</Divider>
        <p>
          Найдите в окне <mark className="select">«Project»</mark> исходник, который нужно
          заменить. Нажмите на него <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark>. В открывшемся окне
          укажите новый файл. Старый исходник будет заменён на новый во всех композициях,
          где он использовался.
        </p>
        <ContentFigure
          caption="Project"
          imgTitle="Замена исходника в проекте"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/replace_footage.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Замена с зажатым Alt</Divider>
        <p>
          Чтобы заменить исходник с помощью <mark className="key">Alt</mark>, сначала
          импортируйте футаж, которым планируете выполнить замену. Затем выделите нужный
          слой на таймлайне и перетащите новый футаж из{" "}
          <mark className="select">«Project»</mark> на него, удерживая{" "}
          <mark className="key">Alt</mark>. Исходник будет заменён только для выделенного
          файла.
        </p>
        <ContentFigure
          caption="Замена футажей с помощью клавиши Alt"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/replace_footage_alt.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="keyframe-types"
        tag="графики скорости, ключи, кейфрейм, keyframe, graph editor, speed graph, value graph, интерполяция, анимация, кривые скорости"
        title="Что такое ключевые кадры и для чего они нужны?"
      >
        <p>
          <mark className="word">Ключевые кадры</mark>, или{" "}
          <mark className="word">кейфреймы</mark>, — это важный элемент, с помощью
          которого строится любая анимация. Они задают начальное и конечное состояние
          объекта или эффекта: например, где он должен появиться и где исчезнуть.
        </p>
        <p>
          Чтобы установить ключевой кадр для параметра, нажмите на иконку секундомера
          рядом со свойством на панели таймлайна или в{" "}
          <mark className="select">«Effect Controls»</mark>. Дополнительные ключевые кадры
          создаются автоматически, если изменить значение свойства в текущей позиции
          индикатора времени.
        </p>
        <ContentFigure
          caption="Установка ключевых кадров"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/position_keyframing.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          По умолчанию при создании ключевых кадров задаётся линейная анимация. Чтобы
          сделать движение живее и динамичнее, можно добавить плавные ускорения и
          замедления. Для этого используется{" "}
          <mark className="select">«Graph Editor»</mark> — инструмент для детальной
          настройки скорости анимации, который открывается комбинацией клавиш{" "}
          <mark className="key">Shift + F3</mark>. Он позволяет управлять скоростью
          изменения параметров между ключевыми кадрами.
        </p>
        <p>
          Чтобы включить возможность изменения графика скорости, выделите нужные ключи и
          нажмите <mark className="key">F9</mark> для применения{" "}
          <mark className="select">«Easy Ease»</mark> или{" "}
          <mark className="key">Ctrl + Alt + K</mark> для открытия окна{" "}
          <mark className="select">«Keyframe Interpolation»</mark>, где можно выбрать тип
          интерполяции для выделенных ключевых кадров.
        </p>
        <Divider>Типы интерполяции</Divider>
        <p>
          <mark className="word">Интерполяция</mark> — это математический способ, которым
          программа рассчитывает промежуточные состояния объекта между{" "}
          <mark className="word">ключевыми кадрами</mark> для создания плавных переходов.
        </p>
        <p>
          <mark className="word">Ключевые кадры</mark> задают конкретные значения
          параметров в определённые моменты времени, а интерполяция определяет, как эти
          значения будут изменяться между ними. В{" "}
          <mark className="app">Adobe After Effects</mark> есть два типа интерполяции
          ключевых кадров: <mark className="select">«Temporal Interpolation»</mark> и{" "}
          <mark className="select">«Spatial Interpolation»</mark>.
        </p>
        <ul>
          <li>
            <p>
              <mark className="select">«Temporal Interpolation»</mark> или же{" "}
              <mark className="select">«Временная интерполяция»</mark> отвечает за
              скорость изменения свойства во времени.
            </p>
            <Addition type="info">
              Примеры интерполяции демонстрируются в режиме отображения{" "}
              <mark className="select">«Value Graph»</mark>.
            </Addition>
            <ul>
              <li>
                <mark className="select">«Linear»</mark> — движение с постоянной,
                неизменной скоростью. На графиках значения и скорости она отображается
                прямой линией. На таймлайне обозначается значком ромба.
                <ContentFigure
                  caption="Линейная интерполяция"
                  // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                  src="images/legacy/aftereffects/temporal_linear.png"
                  theme="dark"
                  type="image"
                  variant="windows"
                />
              </li>
              <li>
                <mark className="select">«Bezier»</mark> — предоставляет максимальный
                контроль над анимацией, позволяя вручную регулировать кривые ускорения и
                замедления с помощью независимых манипуляторов с обеих сторон ключевого
                кадра. В отличие от <mark className="select">«Auto Bezier»</mark> и{" "}
                <mark className="select">«Continuous Bezier»</mark>, направление каждого
                манипулятора задаётся отдельно, что позволяет точно управлять скоростью и
                формой движения. На таймлайне отображается значком песочных часов.
                <ContentFigure
                  caption="Интерполяция по Безье"
                  // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                  src="images/legacy/aftereffects/temporal_bezier.mp4"
                  theme="dark"
                  type="video"
                  variant="windows"
                />
                <Addition type="info">
                  Быстро переключиться между <mark className="select">«Bezier»</mark> и{" "}
                  <mark className="select">«Continuous Bezier»</mark> можно, двигая
                  манипуляторы с зажатой клавишей <mark className="key">Alt</mark> в{" "}
                  <mark className="select">«Graph Editor»</mark>.
                </Addition>
              </li>
              <li>
                <mark className="select">«Continuous Bezier»</mark> — похожа на предыдущий
                тип, но манипуляторы соединены, что сглаживает кривую с обеих сторон
                ключевого кадра и позволяет избежать резких «изломов» на графике скорости.
                Изменяя их, вы влияете на форму графика значения или траектории движения
                по обе стороны от ключевого кадра. Этот тип интерполяции — один из самых
                популярных при создании анимации. На таймлайне отображается значком
                песочных часов.
                <ContentFigure
                  caption="Интерполяция по «продолжающемуся» Безье"
                  // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                  src="images/legacy/aftereffects/temporal_continuous_bezier.mp4"
                  theme="dark"
                  type="video"
                  variant="windows"
                />
              </li>
              <li>
                <mark className="select">«Auto Bezier»</mark> — автоматическая
                интерполяция между ключевыми кадрами. Используется редко, так как в
                большинстве случаев анимация всё равно корректируется вручную.
                <Addition type="info">
                  Чтобы быстро установить <mark className="select">«Auto Bezier»</mark>,
                  нажмите на ключевой кадр с зажатой клавишей{" "}
                  <mark className="key">Alt</mark> в{" "}
                  <mark className="select">«Graph Editor»</mark>. На таймлайне
                  отображается значком круга.
                </Addition>{" "}
                <ContentFigure
                  caption="Интерполяция автоматического Безье"
                  // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                  src="images/legacy/aftereffects/temporal_auto_bezier.mp4"
                  theme="dark"
                  type="video"
                  variant="windows"
                />
              </li>
              <li>
                <p>
                  <mark className="select">«Hold»</mark> — тип временной интерполяции, при
                  котором значение параметра остаётся неизменным до следующего ключевого
                  кадра, а затем мгновенно переключается на новое. Такой способ подходит
                  для создания слайд-шоу или резких смен состояний, когда объект должен
                  внезапно появляться или исчезать. На таймлайне отображается значком
                  квадрата.
                </p>
                <ContentFigure
                  caption="Интерполяция «задержки»"
                  // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                  src="images/legacy/aftereffects/temporal_hold.mp4"
                  theme="dark"
                  type="video"
                  variant="windows"
                />
              </li>
            </ul>
          </li>
          <li>
            <p>
              <mark className="select">«Spatial Interpolation»</mark> или{" "}
              <mark className="select">«Пространственная интерполяция»</mark> отвечает за
              форму траектории движения объекта в пространстве, например для свойства{" "}
              <mark className="select">«Position»</mark>.
            </p>
            <ul>
              <li>
                <mark className="select">«Linear»</mark> — объект движется по прямой линии
                между ключевыми кадрами.
              </li>
              <li>
                <mark className="select">«Bezier»</mark> — позволяет создавать произвольно
                изогнутые траектории. Манипуляторы Безье с обеих сторон ключевого кадра
                независимы, что даёт полный контроль над формой пути.
              </li>
              <li>
                <mark className="select">«Continuous Bezier»</mark> — создаёт плавную
                кривую в точке ключа. Манипуляторы Безье взаимосвязаны, что позволяет
                избежать резких углов и «изломов» на траектории движения.
              </li>
              <li>
                <mark className="select">«Auto Bezier»</mark> — автоматически создаёт
                плавную, сглаженную траекторию между ключевыми кадрами, однако такой
                способ интерполяции используется редко.
              </li>
            </ul>
            <p>
              Для свойств, поддерживающих этот тип интерполяции, дополнительно доступен
              параметр <mark className="select">«Rove Across Time»</mark>, если
              установлено три ключевых кадра или больше. Этот параметр делает скорость
              изменения значения равномерной на всём пути через помеченные ключи, убирая
              замедления в промежуточных точках. Кроме того, при перемещении начального
              или конечного ключа по временной шкале промежуточные ключевые кадры будут
              автоматически перераспределяться, сохраняя равномерность движения.
            </p>
          </li>
        </ul>
        <Divider>Типы графиков для анимации</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> есть два типа графика, на
          основе которых строится анимация: <mark className="select">«Value Graph»</mark>{" "}
          и <mark className="select">«Speed Graph»</mark>.
        </p>
        <ul>
          <li>
            <mark className="select">«Value Graph»</mark> (график значения). По оси X —
            время, по оси Y — значение параметра, от меньшего к большему. Например, для
            свойства <mark className="select">«Position»</mark>
            <sup>1</sup> это будут координаты в пикселях в каждый момент времени. Уклон
            кривой отражает скорость: чем он круче, тем быстрее меняется значение.
            <Addition type="info">
              <sup>1</sup> С помощью <mark className="select">«Value Graph»</mark> нельзя
              редактировать график у параметров, представленных массивом из нескольких
              значений, например <mark className="select">«Anchor Point»</mark> или{" "}
              <mark className="select">«Position»</mark>. Чтобы отредактировать график для{" "}
              <mark className="select">«Position»</mark> по отдельности, нажмите{" "}
              <mark className="key">ПКМ</mark> по параметру{" "}
              <mark className="select">«Position»</mark> и выберите{" "}
              <mark className="select">«Separate Dimensions»</mark> в контекстном меню.
              Если вы не хотите разделять оси, используйте{" "}
              <mark className="select">«Speed Graph»</mark>.
            </Addition>
          </li>
          <li>
            <mark className="select">«Speed Graph»</mark> (график скорости). По оси Y
            отображается скорость изменения параметра (например, в пикселях в секунду). Он
            показывает, насколько быстро меняется значение между ключевыми кадрами.
            Редактируя <mark className="select">«Speed Graph»</mark>, вы управляете именно
            темпом и плавностью анимации, не затрагивая сами значения свойства.
          </li>
        </ul>
        <p>
          Чтобы изменить режим отображения графика, нажмите на иконку{" "}
          <mark className="select">«Choose graph type and options»</mark> в нижней части
          окна <mark className="select">«Graph Editor»</mark>, а затем выберите нужный вам
          тип.
        </p>
        <ContentFigure
          caption="Изменение вида графика скорости"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_graph_view.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          При необходимости вы можете включить параметр{" "}
          <mark className="select">«Auto-Select Graph Type»</mark> для автоматического
          выбора типа графика: если <mark className="select">«Value Graph»</mark> не
          сможет отредактировать скорость, программа автоматически переключится на{" "}
          <mark className="select">«Speed Graph»</mark>. Параметр{" "}
          <mark className="select">«Show Reference Graph»</mark> отобразит второй тип
          графика позади основного для наглядности.
        </p>
        <Divider>Интерактивная демонстрация «Graph Editor»</Divider>
        <p>
          Ниже — интерактивный пример работы <mark className="select">«Value Graph»</mark>{" "}
          и <mark className="select">«Speed Graph»</mark>, имитирующий редактор графиков в
          режиме временной интерполяции <mark className="select">«Bezier»</mark>, как в{" "}
          <mark className="app">Adobe After Effects</mark>. Его можно настраивать, двигать
          манипуляторы и смотреть, как меняется анимация в реальном времени.
        </p>
        <Addition type="warning">
          Манипуляторы в <mark className="select">«Speed Graph»</mark> ограничены по
          высоте, чтобы избежать некорректных скачков и слишком больших значений в{" "}
          <mark className="select">«Value Graph»</mark>.
        </Addition>
        <EasingEditor />
      </DetailsSummary>
      <DetailsSummary
        tag="интерполяция, лишнее движение, одинаковые ключи, graph editor, keyframe interpolation"
        title="Почему между ключевыми кадрами с одинаковым значением всё равно есть анимация?"
      >
        <Divider>Проверяем график скорости</Divider>
        <p>
          Скорее всего, вы меняли расстояние между ключами, и график скорости «сломался».
          Чтобы посмотреть график, выделите свойство и нажмите{" "}
          <mark className="key">Shift + F3</mark>. В моём примере у первого и второго
          ключа одинаковое значение, но между ними всё равно идёт анимация из-за изгиба
          кривой скорости.
        </p>
        <ContentFigure
          caption="Speed Graph"
          imgTitle="Пример с проблемной интерполяцией"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/problematic_interpolation.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Меняем интерполяцию ключевых кадров</Divider>
        <p>
          Чтобы убрать нежелательную анимацию, отредактируйте график скорости или измените
          тип интерполяции. Чтобы задать линейную скорость, выделите ключевые кадры и
          нажмите <mark className="key">Ctrl + Alt + K</mark>. В открывшемся окне{" "}
          <mark className="select">«Keyframe Interpolation»</mark> в параметре{" "}
          <mark className="select">«Temporal Interpolation»</mark> выберите{" "}
          <mark className="select">«Linear»</mark> или{" "}
          <mark className="select">«Hold»</mark>. После этого лишняя анимация между
          ключами должна исчезнуть.
        </p>
        <ContentFigure
          caption="Keyframe Interpolation"
          imgTitle="Изменение интерполяции ключевых кадров"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_keyframe_interpolation.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-laggy"
        tag="лагает превью, замедленное, ускоренное, тормозит, слоумо, растянутое аудио"
        title="Почему предпросмотр может воспроизводиться рывками или ускоренно?"
      >
        <p>
          Часто пользователи <mark className="app">Adobe After Effects</mark> жалуются на
          различные проблемы при воспроизведении предпросмотра, в частности, на
          необъяснимые «тормоза», замедленный или ускоренный предпросмотр. В этой статье
          мы разберем популярные причины и способы их решения.
        </p>
        <Divider>Кэшируем предпросмотр перед воспроизведением</Divider>
        <p>
          Часто предпросмотр тормозит, потому что{" "}
          <mark className="app">Adobe After Effects</mark> по умолчанию пытается
          воспроизводить видео в реальном времени и не успевает просчитывать эффекты. В
          отличие от классических нелинейных редакторов, таких как{" "}
          <mark className="app">Adobe Premiere Pro</mark> или{" "}
          <mark className="app">DaVinci Resolve</mark>,{" "}
          <mark className="app">Adobe After Effects</mark> изначально не предназначен для
          полноценного предпросмотра в реальном времени — поэтому кадры следует кэшировать
          заранее.
        </p>
        <p>
          Текущий <mark>FPS</mark> предпросмотра отображается в окне{" "}
          <mark className="select">«Info»</mark>. Если он ниже, чем <mark>FPS</mark>{" "}
          композиции (например, <mark>22,787/25</mark>), значит, воспроизведение идёт не в
          реальном времени.
        </p>
        <ContentFigure
          caption="Info"
          imgTitle="Предпросмотр не в реальном времени"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/info_non-realtime.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Чтобы это исправить, включите кэширование перед воспроизведением. Для этого
          откройте окно <mark className="select">«Window» → «Preview»</mark> и установите
          флажки <mark className="select">«Cache Before Playback»</mark> и{" "}
          <mark className="select">«If caching, play cached frames»</mark>. Теперь при
          первом нажатии на <mark className="key">Space</mark> программа сначала
          просчитает кадры, а затем воспроизведёт их из кэша. Повторное нажатие на{" "}
          <mark className="key">Space</mark> прервёт процесс кэширования и сразу начнёт
          воспроизводить кадры, которые уже были закэшированы.
        </p>
        <ContentFigure
          caption="Preview"
          imgTitle="Включение кэширования предпросмотра"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/preview_caching.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Проверяем частоту кадров предпросмотра</Divider>
        <p>
          Иногда предпросмотр воспроизводится ускоренно или замедленно из-за неверной
          настройки частоты кадров в окне <mark className="select">«Preview»</mark>, так
          как значение <mark className="select">«Frame Rate»</mark> можно довольно легко
          случайно изменить колёсиком мыши. Убедитесь, что для параметра{" "}
          <mark className="select">«Frame Rate»</mark> установлено значение{" "}
          <mark className="select">«Auto»</mark>.
        </p>
        <Addition type="info">
          Значение <mark className="select">«Frame Rate»</mark> работает следующим
          образом: если вы установили значение <mark>30</mark> для{" "}
          <mark className="select">«Frame Rate»</mark>, а у самой композиции тоже{" "}
          <mark>30 FPS</mark>, то изменений в скорости вы не заметите. Однако если
          изменить частоту кадров композиции, например, на <mark>60</mark>, а{" "}
          <mark className="select">«Frame Rate»</mark> в{" "}
          <mark className="select">«Preview»</mark> оставить прежним, то воспроизведение
          будет в два раза медленнее. Если установить значение{" "}
          <mark className="select">«Auto»</mark>, скорость будет автоматически
          подстраиваться под <mark>FPS</mark> композиции.
        </Addition>
        <ContentFigure
          caption="Preview"
          imgTitle="Изменение FPS предпросмотра"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_preview_fps.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Проверяем устройство для вывода звука</Divider>
        <p>
          Если вы недавно меняли устройство вывода звука, например, подключили наушники,
          то программа может не справляться с синхронизацией аудио, из-за чего
          предпросмотр «заикается». Попробуйте изменить аудиовыход или уменьшить значение{" "}
          <mark className="select">«Latency»</mark> в{" "}
          <mark className="select">«Edit» → «Preferences» → «Audio Hardware»</mark>.
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Настройки звукового выхода"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/audio_hardware_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Разбираемся с «кривыми» исходниками</Divider>
        <p>
          Если вы работаете с видео или аудио, скачанными из интернета, есть вероятность,
          что они закодированы в «неудобный» для{" "}
          <mark className="app">Adobe After Effects</mark> формат. Файлы{" "}
          <mark className="file">MP4</mark> часто содержат нестабильные свойства —
          например, переменную частоту кадров или непредсказуемые алгоритмы сжатия, что
          особенно характерно для геймплейных записей или видео с{" "}
          <mark className="app">YouTube</mark>. Особенно это касается{" "}
          <mark className="video">H.264</mark> и <mark className="video">H.265</mark>: они
          отлично подходят для просмотра, но плохо ведут себя при монтаже. Постоянная
          декомпрессия этих кодеков приводит к появлению «артефактов» на превью и
          «тормозам» в работе эффектов, из-за чего{" "}
          <mark className="app">Adobe After Effects</mark> начинает «задыхаться».
        </p>
        <p>
          Аудио в формате <mark className="audio">MP3</mark> тоже может создавать
          проблемы: часть трека может неожиданно пропадать на таймлайне, а звук —
          искажаться или рассинхронизироваться с видео.
        </p>
        <ContentFigure
          caption="Пример артефактов проблемного аудио"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/audio_artifacts.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          Чтобы избежать подобных проблем, рекомендуется заранее перекодировать файлы в
          рабочие форматы: для видео — например,{" "}
          <mark className="video">Apple ProRes 422</mark> или{" "}
          <mark className="video">Apple ProRes 4444</mark>, для аудио —{" "}
          <mark className="audio">WAV</mark>, а затем импортировать их в проект или
          заменять ими уже добавленные исходники. Сделать это можно через{" "}
          <mark className="app">Shutter Encoder</mark> — бесплатную программу для
          конвертации файлов на основе <mark className="app">FFmpeg</mark>.{" "}
          <a href="#import-pipeline">Подробнее...</a>
        </p>
        <ContentFilter
          windowsContent={
            <div>
              <Divider>Разбираемся с драйверами</Divider>
              <p>
                Иногда драйверы, например для видеокарты, могут обновиться автоматически
                без вашего ведома и начать работать некорректно с вашей версией{" "}
                <mark className="app">Adobe After Effects</mark>.
              </p>
              <p>
                В таком случае попробуйте откатить проблемный драйвер и{" "}
                <a href="https://remontka.pro/disable-driver-auto-update-windows-10/">
                  отключить их автоматическое обновление
                </a>
                , чтобы подобные ситуации не повторялись. Если у вас установлена
                видеокарта от <mark className="company">NVIDIA</mark>, рекомендуется
                загрузить и установить драйвер редакции{" "}
                <mark className="app">«NVIDIA Studio»</mark> с{" "}
                <a href="https://www.nvidia.com/en-eu/geforce/drivers/">
                  официального сайта NVIDIA
                </a>
                . На странице укажите модель вашей видеокарты, операционную систему и в
                поле <mark className="select">«Download Type»</mark> выберите{" "}
                <mark className="select">«Studio Driver»</mark>.
              </p>
            </div>
          }
        />
      </DetailsSummary>
        <p>
          Иногда звук при предпросмотре может внезапно пропасть, если вы случайно что-то
          нажали. Сначала проверьте окно <mark className="select">«Preview»</mark>,
          переключатель аудио на слое и саму аудиодорожку — возможно, звук был случайно
          отключен соответствующей кнопкой.
        </p>
        <ContentFigure
          caption="Preview"
          imgTitle="Включение звука в окне Preview"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/toggle_audio_preview.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          По умолчанию <mark className="app">Adobe After Effects</mark> отключает звук,
          если предпросмотр идёт не в реальном времени. Чтобы это исправить, снимите
          галочку{" "}
          <mark className="select">«Mute Audio When Preview Is Not Real-time»</mark> в
          настройках <mark className="select">«Edit» → «Preferences» → «Previews»</mark>.
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Настройка звука для предпросмотра"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/mute_audio_when_preview_is_not_real-time.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <ContentFilter
          windowsContent={
            <div>
              <Divider>Разбираемся с драйверами</Divider>
              <p>
                Иногда драйверы, например видеокарты, могут обновиться автоматически без
                вашего ведома, после чего начать работать некорректно с вашей версией{" "}
                <mark className="app">Adobe After Effects</mark>.
              </p>
              <p>
                В таком случае попробуйте откатить проблемный драйвер и{" "}
                <a href="https://remontka.pro/disable-driver-auto-update-windows-10/">
                  отключить их автоматическое обновление
                </a>
                , чтобы подобные ситуации не повторялись. Если у вас установлена
                видеокарта от <mark className="company">NVIDIA</mark>, рекомендуется
                загрузить и установить драйвер редакции{" "}
                <mark className="app">NVIDIA Studio</mark> с{" "}
                <a href="https://www.nvidia.com/en-eu/geforce/drivers/">
                  официального сайта NVIDIA
                </a>
                . На странице укажите модель вашей видеокарты, операционную систему и в
                поле <mark className="select">«Download Type»</mark> выберите{" "}
                <mark className="select">«Studio Driver»</mark>.
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="cached-preview-needs-2-or-more-frames-for-playback"
        tag="для воспроизведения кэшированного предпросмотра требуется 2 или более кадров, не проигрывается предпросмотр, зацикливается превью, идёт по кругу"
        title="«Cached preview needs 2 or more frames for playback» или как избавиться от зацикливания предпросмотра?"
      >
        <p>
          Часто зацикливание предпросмотра, даже если он не до конца закэширован, означает
          лишь одно — программе попросту не хватает оперативной памяти для корректного
          просмотра. Это особенно заметно, если вы пытаетесь воспроизвести тяжёлую сцену.
          Чтобы минимизировать последствия такого поведения, стоит оптимизировать проект
          или изменить настройки системы и программы.
        </p>
        <Divider>Проверяем длину рабочей области</Divider>
        <p>
          Первым делом проверьте длину рабочей области на таймлайне. Возможно, вы случайно
          сократили её до одного кадра — именно поэтому и возникает ошибка. Программа не
          может запустить предпросмотр, если в рабочей области всего один кадр, что
          логично: любая анимация должна содержать как минимум два.
        </p>
        <ContentFigure
          caption="Одна из причин ошибки — слишком короткая рабочая область"
          imgTitle="Короткая рабочая область"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/low_work-area.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Чтобы это исправить, расширьте рабочую область, переместив метку текущего
          времени и установив её начало клавишей <mark className="key">B</mark>, а конец —
          клавишей <mark className="key">N</mark>. Если требуется, чтобы рабочая область
          охватывала всю композицию или выделенный слой, нажмите{" "}
          <mark className="key">Ctrl + Alt + B</mark>.
        </p>
        <Divider>Очищаем кэш и проверяем память</Divider>
        <p>
          Если рабочая область больше двух кадров, а предпросмотр всё равно зациклен —
          проблема, скорее всего, в переполненном кэше или нехватке оперативной памяти.
        </p>
        <ul>
          <li>
            Попробуйте очистить кэш через{" "}
            <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>.
            После очистки рендеринг предпросмотра должен пройти нормально.
            <ContentFigure
              caption="Очистка кэша и оперативной памяти"
              imgTitle="Очистка кэша и оперативной памяти"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/aftereffects/edit_purge_all-memory-and-disk-cache.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Проверьте, сколько оперативной памяти вы выделили программе. Для этого
            перейдите в{" "}
            <mark className="select">
              «Edit» → «Preferences» → «Memory & Performance»
            </mark>{" "}
            и посмотрите на значение{" "}
            <mark className="select">«RAM reserved for other applications»</mark>. Если вы
            неправильно поняли описание и оставили программам{" "}
            <mark className="company">Adobe</mark> слишком мало памяти, это может вызвать
            проблемы с проигрыванием предпросмотра. Чтобы выделить максимум ОЗУ, поставьте{" "}
            <mark>0</mark> в поле{" "}
            <mark className="select">«RAM reserved for other applications»</mark>.
            Программа сама подставит минимальное корректное значение памяти для других
            приложений.
            <ContentFigure
              caption="Preferences"
              imgTitle="Настройка параметра RAM reserved for other applications"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/aftereffects/ram_reserved_for_other_applications.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Закройте другие ресурсоёмкие программы, например браузер,{" "}
            <mark className="app">Blender</mark>,{" "}
            <mark className="app">Adobe Premiere Pro</mark> или другие.
          </li>
          <li>
            <ContentFilter
              windowsContent={
                <p>
                  Попробуйте <a href="#6.5">настроить файл подкачки</a>. В качестве
                  минимального и максимального размера установите значения от{" "}
                  <mark className="copy">1024</mark> до{" "}
                  <mark className="copy">65536</mark> или{" "}
                  <mark className="copy">131072</mark>. После настройки система создаст
                  файл подкачки с начальным размером <mark>1 ГБ</mark>, который сможет
                  динамически расширяться до <mark>64–128 ГБ</mark> в зависимости от ваших
                  настроек.
                </p>
              }
            />
          </li>
        </ul>
        <Divider>Разбираемся с эффектами</Divider>
        <p>
          Иногда корректному рендерингу мешает какой-нибудь эффект. Попробуйте найти
          «виновника», поочерёдно отключая эффекты на слоях в композиции. Чаще всего
          проблемы вызывают большое количество «эдиторских» эффектов или обилие
          ресурсоёмких эффектов цветокоррекции. В поиске поможет столбец{" "}
          <mark className="select">«Render Time»</mark>. С его помощью можно выявить самые
          «тяжёлые» эффекты и при необходимости заменить их более лёгкими аналогами или
          вовсе удалить.
        </p>
        <Addition type="info">
          Чтобы включить отображение времени рендеринга, нажмите на иконку улитки в левом
          нижнем углу таймлайна или активируйте колонку{" "}
          <mark className="select">«Render Time»</mark> через меню{" "}
          <mark className="select">«Columns»</mark>.
        </Addition>
        <ContentFigure
          caption="Timeline"
          imgTitle="Смотрим время рендера слоя"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/view_render_time.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Используем дисковый кэш для предпросмотра</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> версии <mark>25.2</mark> и
          новее появилась новая функция воспроизведения предпросмотра напрямую из
          дискового кэша. Она позволяет проигрывать превью прямо с диска, не загружая
          кадры в оперативную память. Эта опция может спасти, когда даже файл подкачки не
          помогает.
        </p>
        <p>
          Для активации перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Media & Disk Cache»</mark>,
          поставьте галку <mark className="select">«Enable Disk Cache»</mark> и
          активируйте параметр{" "}
          <mark className="select">«Enable Preview from Disk Cache»</mark>. Размер кэша{" "}
          <mark className="select">«Maximum Disk Cache Size»</mark> должен быть не меньше{" "}
          <mark>100 ГБ</mark>, так как программа любит пожирать много дискового
          пространства.
        </p>
        <Addition type="info">
          Для комфортной работы с дисковым кэшем нужен быстрый накопитель. Можете купить
          дешёвый <mark>SSD</mark> на <mark>256–512 ГБ</mark> и использовать его
          специально для кэша.
        </Addition>
        <ContentFigure
          caption="Preferences"
          imgTitle="Включение воспроизведения предпросмотра из дискового кэша"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/enable_preview_from_disk_cache.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-low-resolution"
        tag="плохое качество предпросмотра, пиксели, низкое разрешение"
        title="Что делать, если предпросмотр выглядит пиксельным или размытым?"
      >
        <p>
          Чтобы устранить проблемы с качеством предпросмотра, для начала проверьте
          разрешение в окне <mark className="select">«Composition»</mark> и установите
          значение <mark className="select">«Full»</mark>. Список с выбором качества
          находится под окном предпросмотра или в настройках композиции.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_resolution_comppreview.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          Если там всё в порядке, но при воспроизведении качество всё равно падает — стоит
          проверить настройки разрешения в окне <mark className="select">«Preview»</mark>.
          Выставьте в этом окне для параметра <mark className="select">«Resolution»</mark>{" "}
          значение <mark className="select">«Full»</mark>.
        </p>
        <ContentFigure
          caption="Preview"
          imgTitle="Изменение качества в окне Preview"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_resolution_preview.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          Если в <mark className="select">«Resolution»</mark> стоит{" "}
          <mark className="select">«Auto»</mark>, качество предпросмотра будет меняться в
          зависимости от значения, указанного в окне предпросмотра композиции или в его
          настройках.
        </Addition>
        <p>
          Если предпросмотр остаётся размытым и пиксельным даже при качестве{" "}
          <mark className="select">«Full»</mark>, убедитесь, что его масштаб не превышает{" "}
          <mark>100%</mark>, а у самой композиции достаточно высокое разрешение. Изменить
          его можно в настройках композиции сочетанием клавиш{" "}
          <mark className="key">Ctrl + K</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="vector-low-resolution"
        tag="векторные изображения, предпросмотр в плохом качестве, пиксели, низкое разрешение"
        title="Почему векторный слой выглядит пиксельным?"
      >
        <p>
          Начнём с того, что <mark className="app">Adobe After Effects</mark> — это
          программа для композитинга, работающая с растровой графикой. Её механика
          отличается от векторных редакторов вроде{" "}
          <mark className="app">Adobe Illustrator</mark>, которые постоянно пересчитывают
          вектор под разрешение монитора, создавая иллюзию «бесконечной» детализации при
          увеличении предпросмотра.
        </p>
        <p>
          В <mark className="app">Adobe After Effects</mark> же при создании композиции вы
          задаёте её разрешение в пикселях, и всё, что в неё помещается, ограничено этим
          разрешением. Поэтому при увеличении масштаба предпросмотра более чем на{" "}
          <mark>100%</mark> вы всегда будете видеть пиксели, потому что увеличиваете уже
          отрендеренное растровое изображение, даже если в проекте есть векторные слои.
        </p>
        <Divider>А как же тогда работают «векторные» слои?</Divider>
        <p>
          «Векторность» проявляется не при увеличении предпросмотра, а при трансформации
          самого слоя. Например, при изменении свойства{" "}
          <mark className="select">«Scale»</mark> слой заново пересчитывается и остаётся
          чётким относительно разрешения композиции. За это отвечает свойство{" "}
          <mark className="select">«Continuously Rasterize»</mark>. Для текстовых и
          фигурных слоёв оно включено по умолчанию, а для импортированных векторных
          файлов, например <mark className="file">AI</mark>, его нужно активировать
          вручную, чтобы они сохраняли качество при масштабировании слоя.
        </p>
        <ContentFigure
          caption="Timeline"
          imgTitle="Включение Continuously Rasterize"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/enable_continuously_rasterize.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="warning">
          При включённой опции <mark className="select">«Continuously Rasterize»</mark>{" "}
          могут возникнуть артефакты — например, разрывы слоя при использовании{" "}
          <mark className="plugin">Puppet Tool</mark>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="adaptive-resolution"
        tag="адаптивное разрешение, пиксели, adaptive resolution, fast previews"
        title="Почему при перемещении объектов или временной метки качество предпросмотра падает?"
      >
        <p>
          По умолчанию в <mark className="app">Adobe After Effects</mark> включена функция
          адаптивного разрешения: при перемещении плейхеда или слоя качество предпросмотра
          временно снижается для быстрого рендера кадра. Если эта функция вас раздражает,
          её можно отключить — для этого нажмите на{" "}
          <mark className="select">«Fast Previews»</mark> под окном предпросмотра и
          выберите <mark className="select">«Off (Final Quality)»</mark>.
        </p>
        <ContentFigure
          caption="Timeline"
          imgTitle="Отключение адаптивного разрешения"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/disable_adaptive_resolution.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="grow-bounds"
        tag="grow bounds, нарастить границы, обрезается эффект, края слоя"
        title="Применяю эффект, например Glow, но он обрезается по границе слоя. Как это исправить?"
      >
        <p>
          Некоторые эффекты работают только в пределах размера слоя, из-за чего их
          действие может обрезаться по краям. Например: если ваша основная композиция
          имеет размер <mark>1920×1080</mark>, а слой, на который вы применяете эффект,
          меньше, то эффект будет ограничен размером этого слоя.
        </p>
        <Divider>Расширяем границы с помощью Grow Bounds</Divider>
        <p>
          Чтобы это исправить, попробуйте применить стандартный эффект{" "}
          <mark className="plugin">Grow Bounds</mark> перед всеми остальными эффектами и
          укажите, на сколько пикселей нужно «нарастить» границы.
        </p>
        <ContentFigure
          caption="Применение Grow Bounds"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/apply_grow_bounds.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Addition type="warning">
          Иногда стандартный <mark className="plugin">Grow Bounds</mark> может не помочь.
          В таком случае попробуйте использовать{" "}
          <mark className="plugin">Grow Bounds</mark> из пакета{" "}
          <mark className="plugin">Red Giant Trapcode Suite</mark>.
        </Addition>
        <Divider>Разбираемся с краями у эффекта Saber</Divider>
        <p>
          Если вы применили <mark className="plugin">Saber</mark> на слой, размер которого
          меньше размера композиции (например, на слой-фигуру), то{" "}
          <mark className="plugin">Grow Bounds</mark> впринципе не поможет. Для решения
          проблемы создайте <mark className="select">«Solid Layer»</mark> размером с
          композицию и примените <mark className="plugin">Saber</mark> на него. Затем в
          настройках эффекта в разделе <mark className="select">«Customize Core»</mark>{" "}
          выберите <mark className="select">«Layer Masks»</mark> и привяжите маску с
          вашего исходного слоя к маске на слое с <mark className="plugin">Saber</mark>.
        </p>
        <ContentFigure
          caption="Timeline"
          imgTitle="Привязка масок для Saber"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/linking_masks_for_saber.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="missing-blending-modes"
        tag="blending modes, classic 3d, cinema 4d, 3d renderer, 3д рендер, track matte"
        title="Почему пропадают режимы наложения и Track Matte, когда я перевожу слой в 3D?"
      >
        <p>
          Скорее всего, у вас включён рендер-движок{" "}
          <mark className="plugin">Advanced 3D</mark>, который стал использоваться по
          умолчанию, начиная с <mark className="app">Adobe After Effects</mark> версии{" "}
          <mark>24.1</mark>, или <mark className="plugin">Cinema 4D</mark>. При
          использовании таких движков режимы наложения, эффекты и прочие функции могут
          быть недоступны. Чтобы вернуть их работу, нужно переключиться на рендер{" "}
          <mark className="plugin">Classic 3D</mark>.
        </p>
        <p>
          Для этого откройте настройки композиции с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + K</mark>, перейдите во вкладку{" "}
          <mark className="select">«3D Renderer»</mark> и установите для параметра{" "}
          <mark className="select">«Renderer»</mark> значение{" "}
          <mark className="plugin">Classic 3D</mark>. В этой же вкладке можно найти список
          поддерживаемых функций для каждого движка и ознакомиться с ним.
        </p>
        <ContentFigure
          caption="Composition Settings"
          imgTitle="Изменение 3D-рендерера"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_3d_renderer.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="missing-casts-shadows"
        tag="расширенный 3д"
        title="Почему у меня не активна функция «Casts Shadows» при использовании Advanced 3D?"
      >
        {/* FIXME: если эта функция появится в стабильном релизе - обновить статью */}
        <p>
          В стабильной версии <mark className="app">Adobe After Effects</mark> на момент
          написания статьи нельзя включить тени для источников света, так как эта функция
          ещё не реализована.
        </p>
        <p>
          Если вы смотрите обучающее видео, в котором автор включает{" "}
          <mark className="select">«Casts Shadows»</mark>, то, скорее всего, у него
          установлена бета-версия <mark className="app">Adobe After Effects</mark>, где
          эта функция уже{" "}
          <a href="https://helpx.adobe.com/after-effects/using/enable-lights-to-cast-shadows.html">
            доступна
          </a>
          .
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="прозрачность, чёрный фон, unmult, extract, blending modes"
        title="Почему у слоя не исчезает фон при использовании режимов наложения?"
      >
        <p>
          Убедитесь, что слой, к которому вы применяете режим наложения, расположен выше
          тех слоёв, с которыми он должен взаимодействовать. Режимы наложения у слоя не
          будут работать, если под ним в иерархии таймлайна ничего нет.
        </p>
        <p>
          Если вы хотите просто убрать чёрный фон у слоя, воспользуйтесь стандартным
          эффектом <mark className="plugin">Extract</mark> или{" "}
          <mark className="plugin">Unmult</mark>, который доступен в последней публичной
          бете <mark className="app">Adobe After Effects</mark> или сторонним{" "}
          <mark className="plugin">uni.unmult</mark> из пакета{" "}
          <mark className="plugin">Red Giant Universe</mark>.
        </p>
        {/* FIXME: исправить "публичную бету" на стабильную версию, если этот эффект доедет до релиза */}
        <ContentFigure
          caption="Red Giant Universe Unmult"
          src="GGjIu0CZ1M4"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="saber-transparency"
        tag="прозрачность, saber, альфа-канал, composite settings, transparent"
        title="Как сделать прозрачный фон у слоя с эффектом Saber?"
      >
        <p>
          По умолчанию <mark className="plugin">Saber</mark> рендерится на чёрном фоне.
          Чтобы сделать фон прозрачным — в настройках эффекта раскройте раздел{" "}
          <mark className="select">«Render Settings»</mark>, найдите параметр{" "}
          <mark className="select">«Composite Settings»</mark> и выберите значение{" "}
          <mark className="select">«Transparent»</mark>.{" "}
          <i style={{opacity: "0.5"}}>И режимы наложения больше не понадобятся.</i>
        </p>
        <Addition type="info">
          Чтобы включить сетку прозрачности — нажмите на кнопку{" "}
          <mark className="select">«Toggle Transparency Grid»</mark> в окне предпросмотра.
        </Addition>
        <ContentFigure
          caption="Включение прозрачности в Saber"
          imgTitle="Включение прозрачности в Saber"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/transparent_saber.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="composition-independent"
        tag="true comp duplicator, прекомпоз, копирование, независимость, дубликат, продублировал композицию на таймлайне но копия зависит от оригинала"
        title="Как сделать дубликаты композиций независимыми друг от друга?"
      >
        <p>
          Копируя композицию на таймлайне с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + D</mark>, вы создаёте лишь ещё одну ссылку на ту же
          самую композицию, а не создаёте новую за счёт другой. Поэтому изменения в
          «дубликате» отражаются и в оригинале. Чтобы сделать композиции действительно
          независимыми, их нужно дублировать в окне{" "}
          <mark className="select">«Project»</mark>.
        </p>
        <ContentFigure
          caption="Правильное дублирование композиции"
          src={"images/aftereffects/duplicate_composition.mp4"}
          theme="dark"
          type="video"
          variant="windows"
        />
        <Addition type="info">
          Если вам нужно сделать несколько копий с вложенными композициями, обновить
          выражения или сгруппировать их в одну папку, воспользуйтесь бесплатным
          <sup>1</sup> скриптом{" "}
          <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>.
          <ul>
            <li>
              <sup>1</sup> Чтобы скачать скрипт, зарегистрируйтесь на{" "}
              <a href="https://aescripts.com">aescripts</a>, на странице плагина
              установите цену <mark>0</mark> и оформите заказ. Ссылка на скачивание
              появится{" "}
              <a href="https://aescripts.com/downloadable/customer/products/">
                в вашем профиле
              </a>
              .
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="composition-unpack"
        tag="unprecompose, распрекомпозить, раскомпозить"
        title="Как «распаковать» прекомпозицию?"
      >
        <p>
          Бывают случаи, когда вы создали несколько прекомпозиций, а затем вам внезапно
          понадобилось их «распаковать» обратно. Заходить в каждую, выделять все слои,
          копировать, возвращаться в основную композицию и вставлять — долго и муторно,
          особенно если прекомпозиций много. Однако такие действия можно автоматизировать.
        </p>
        <Addition type="warning">
          Учтите, что при распаковке могут «слететь» выражения и ссылки на слои в
          эффектах, например ссылка на слой в эффекте{" "}
          <mark className="plugin">Displacement Map</mark>.
        </Addition>
        <Divider>Используем Un-PreCompose</Divider>
        <p>
          Для решения этой проблемы был создан бесплатный<sup>1</sup> скрипт{" "}
          <a href="https://aescripts.com/un-precompose/">Un-PreCompose</a>. После
          установки он появится в меню{" "}
          <mark className="select">«Layer» → «Un-PreCompose»</mark>. Чтобы кнопка стала
          активной, нужно выделить на таймлайне прекомпозиции, которые вы хотите
          распаковать.
        </p>
        <Addition type="info">
          <sup>1</sup> Чтобы скачать скрипт бесплатно, зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, на странице плагина установите
          цену <mark>0</mark> в поле <mark className="select">«Name Your Own Price»</mark>
          , добавьте его в корзину и оформите заказ. Ссылка на скачивание появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>
          .
        </Addition>
        <ContentFigure
          caption="Распаковка нескольких прекомпозиций с помощью Un-precompose"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/unprecompose_demonstration.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Divider>Используем AEUX</Divider>
        <p>
          С помощью расширения <mark className="plugin">AEUX</mark>, который был создан
          для переноса макетов из <mark className="app">Figma</mark>, тоже можно
          «распаковать» выделенные композиции с помощью кнопки{" "}
          <mark className="select">«Un-Precomp»</mark> в разделе{" "}
          <mark className="select">«Groups»</mark>.
        </p>
        <Addition type="info">
          Скачать <mark className="plugin">AEUX</mark> можно на странице релизов в{" "}
          <a href="https://github.com/google/AEUX/releases">GitHub</a>.
        </Addition>
        <ContentFigure
          caption="AEUX"
          imgTitle="Un-Precomp в AEUX"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/aeux_un-precomp.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="перевернуть очерёдность, обратный порядок, инверсия, нумерация"
        title="Как инвертировать порядок слоёв на таймлайне?"
      >
        <p>
          Если нужно изменить порядок слоёв так, чтобы последний стал первым, а остальные
          развернулись в обратной последовательности — выделите первый слой, затем,
          удерживая <mark className="key">Shift</mark>, кликните по последнему слою. После
          этого нажмите <mark className="key">Ctrl + X</mark>, а затем{" "}
          <mark className="key">Ctrl + V</mark>.
        </p>
        <ContentFigure
          caption="Инвертирование порядка слоёв"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/invert_layer_numeration.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="не видно слой, за кадром, перемещение, плейхед, скобки"
        title="Переместил слой из одной композиции в другую, но он оказался за пределами видимости. Как его вернуть?"
      >
        <p>
          Чтобы переместить начало слоя к текущему положению плейхеда, нажмите{" "}
          <mark className="key">[</mark>. Чтобы переместить конец слоя к плейхеду, нажмите{" "}
          <mark className="key">]</mark>.
        </p>
        <ContentFigure
          caption="Перемещение слоёв к плейхеду"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/move_layers_around_playhead.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="composition-crop"
        tag="обрезка, auto crop, region of interest, размер композиции"
        title="Как кадрировать композицию?"
      >
        <p>
          Кадрировать композицию в <mark className="app">Adobe After Effects</mark> можно
          разными способами — вручную или автоматически по краям находящихся в ней слоёв.
        </p>
        <Divider>Используем Auto Crop 3</Divider>
        <p>
          Для автоматического кадрирования композиции по границам её содержимого можно
          воспользоваться сторонним плагином <mark className="plugin">Auto Crop 3</mark>.
        </p>
        <p>
          После успешной установки плагин появится в двух местах: в меню{" "}
          <mark className="select">«Layer» → «Auto Crop»</mark> — для быстрого
          кадрирования композиции по краям всех слоёв, а также в меню{" "}
          <mark>«Window» → «Auto Crop.jsxbin»</mark> — для дополнительных действий.
        </p>
        <ContentFigure
          caption="Открываем Auto Crop"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/auto_crop_execute.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <ul>
          <li>
            При нажатии <mark className="select">«Auto Crop»</mark> в{" "}
            <mark className="select">«Layer»</mark> или в окне скрипта композиция будет
            кадрирована по краям всех слоёв в текущий момент предпросмотра. При этом не
            учитывается вся область анимации по длительности.
          </li>
          <li>
            При нажатии <mark className="select">«Crop Duration»</mark> в окне скрипта
            композиция кадрируется по всей длительности анимации. Например, если вы
            анимируете падение шарика — скрипт кадрирует композицию так, чтобы вся
            анимация полностью помещалась в кадр.
          </li>
          <li>
            В <mark className="select">«Preferences»</mark> окна скрипта можно вынести
            дополнительные опции — например, добавить внутренние отступы или расширить
            область кадрирования.
          </li>
        </ul>
        <Divider>Используем «Region of Interest»</Divider>
        <p>
          Если точность до пикселя не важна, композицию можно быстро обрезать с помощью{" "}
          <mark className="select">«Region of Interest»</mark>. Для этого нажмите на
          соответствующую иконку в окне предпросмотра и начните рисовать рамку.
        </p>
        <p>
          Когда область будет нарисована, перейдите в меню{" "}
          <mark className="select">«Composition»</mark> и выберите{" "}
          <mark className="select">«Crop Comp to Region of Interest»</mark>. Композиция
          тут же обрежется по границам нарисованной области.
        </p>
        <ContentFigure
          caption="Кадрирование с помощью Region of Interest"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/crop_comp_to_region_of_interest.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="start timecode, начальный таймкод, начало композиции, ноль, 00:00:00:00"
        title="Почему первый кадр в композиции начинается не с нулевой секунды?"
      >
        <p>
          Скорее всего, при создании прекомпозиции вы оставили включённой опцию{" "}
          <mark className="select">
            «Adjust composition duration to the time span of the selected layers»
          </mark>
          . Эта опция устанавливает начальный таймкод новой композиции равным времени
          появления самого раннего из выделенных слоёв.
        </p>
        <p>
          Чтобы это исправить, откройте настройки композиции с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + K</mark> и в поле{" "}
          <mark className="select">«Start Timecode»</mark> укажите{" "}
          <mark>00:00:00:00</mark>.
        </p>
        <ContentFigure
          caption="Composition Settings"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/change_start_timecode.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="point text, paragraph text, точечный текст, блочный текст, justify"
        title="Почему не все параметры выравнивания текста доступны в окне Paragraph?"
      >
        <p>
          Если вы создаёте текстовый слой простым кликом по композиции, вы создаёте{" "}
          <mark className="select">«Point Text»</mark> без фиксированных границ. В этом
          случае выравнивание по ширине не имеет смысла. Чтобы стали доступны все
          параметры выравнивания, нужно создать текстовый блок типа{" "}
          <mark className="select">«Paragraph Text»</mark>, «рисуя» рамку с зажатой{" "}
          <mark className="key">ЛКМ</mark>.
        </p>
        <ContentFigure
          caption="Создание Paragraph Text"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/create_paragraph_text.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          Вы также можете преобразовать уже существующий точечный текст в блочный — для
          этого выберите инструмент <mark className="select">«Text»</mark>, нажмите{" "}
          <mark className="key">ПКМ</mark> по слою и выберите в контекстном меню{" "}
          <mark className="select">«Convert to Paragraph Text»</mark>.
        </p>
        <ContentFigure
          caption="Преобразование точечного текста в блочный"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/convert_to_paragraph_text.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="сравнение, разница, трекинг, mocha, мока, моча"
        title="Чем отличается Mocha AE от Mocha Pro?"
      >
        <p>
          В стандартную поставку <mark className="app">Adobe After Effects</mark> входит
          встроенный плагин для трекинга <mark className="plugin">Mocha AE</mark>. Его
          функциональность, по сравнению с <mark className="plugin">Mocha Pro</mark>,
          урезана. В <mark className="plugin">Mocha AE</mark> нельзя стабилизировать
          видео, удалять объекты, использовать магнитное лассо и другие продвинутые
          инструменты. <mark className="plugin">Mocha Pro</mark> лишена этих ограничений.
        </p>
        <Addition type="info">
          Подробнее о различиях можно прочитать на{" "}
          <a href="https://borisfx.com/blog/mocha-ae-vs-mocha-pro-what-are-the-differences">
            официальном сайте Boris FX
          </a>
          .
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="font, баг, слетает шрифт, неправильный стиль"
        title="Почему начертание шрифта иногда само меняется?"
      >
        <p>
          Предположим, вы решили написать какой-нибудь текст определённым шрифтом. Но вот
          незадача — шрифт при наборе почему-то меняется. Если вы уверены, что с самим
          шрифтом всё в порядке (например, в <mark className="app">Adobe Photoshop</mark>{" "}
          он работает без проблем), скорее всего вы столкнулись с редким багом, который
          может проявиться в любой версии <mark className="app">Adobe After Effects</mark>
          . К сожалению, не все шрифты, отлично работающие в{" "}
          <mark className="app">Adobe Photoshop</mark> и{" "}
          <mark className="app">Adobe Illustrator</mark>, будут так же корректно работать
          в <mark className="app">Adobe After Effects</mark> — из-за его особенностей.
        </p>
        <p>
          Суть бага в том, что при смене начертания программа почему-то сохраняет для
          некоторых букв старый стиль или вовсе сбрасывает шрифт на{" "}
          <mark className="select">«Times New Roman»</mark>. Такой «багованный» шрифт
          также не реагирует на кнопки <mark className="select">«Bold»</mark> и{" "}
          <mark className="select">«Italic»</mark>.
        </p>
        <ContentFigure
          caption="Проблема некорректного начертания на примере Cascadia Mono"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/font-reset_bug.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <Addition type="warning">
          Приведённые ниже способы{" "}
          <u>
            <b>не являются панацеей</b>
          </u>{" "}
          и лишь помогают исключить некоторые проблемы.
        </Addition>
        <ul>
          <li>
            Попробуйте переконвертировать шрифт в другой формат (например, из{" "}
            <mark className="file">TTF</mark> в <mark className="file">OTF</mark> или
            наоборот). Возможно, файл шрифта был создан с ошибками.
          </li>
          <li>
            Скачайте нужный шрифт из другого источника — например, с{" "}
            <a href="https://fonts.google.com/">Google Fonts</a>, предварительно удалив
            старый.
          </li>
          <li>
            Если это не помогло, попробуйте переключить рендер на процессор в{" "}
            <mark className="select">«Project Settings»</mark> и очистить кэш через{" "}
            <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>,
            а потом написать текст заново.
          </li>
          <li>
            Если шрифт работает нормально, но сбрасывается при попытке написать на
            кириллице — убедитесь, что он действительно поддерживает кириллицу. В
            противном случае найдите похожий шрифт с поддержкой кириллицы.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="multiple-instances"
        tag="несколько экземпляров, multiple instances, два окна, запуск, одновременно"
        title="Как открыть несколько копий программы и работать в разных проектах одновременно?"
      >
        <Addition type="danger">
          Запуск нескольких копий <mark className="app">Adobe After Effects</mark> может
          существенно увеличить нагрузку на ресурсы устройства.
        </Addition>
        <p>
          Иногда возникает ситуация: один проект рендерится, а в это время нужно открыть
          другой и внести правки. По умолчанию{" "}
          <mark className="app">Adobe After Effects</mark> не позволяет запускать
          несколько экземпляров, но это ограничение можно обойти.
        </p>
        <ContentFilter
          macContent={
            <div>
              <p>
                Чтобы открыть ещё один экземпляр, перейдите в папку с программой, нажмите{" "}
                <mark className="key">ПКМ</mark> по иконке{" "}
                <mark className="app">Adobe After Effects</mark> и выберите{" "}
                <mark className="select">«Показать содержимое пакета»</mark>. Затем
                откройте <mark className="path">Contents/MacOS</mark> и дважды щёлкните по
                исполняемому файлу <mark className="app">Adobe After Effects</mark>.
                Откроется терминал, а вместе с ним — ещё одна копия программы, в которой
                вы можете открыть другой проект и работать с ними.
              </p>
              <ContentFigure
                caption="Как открыть несколько экземпляров Adobe After Effects"
                src="k1x1goE2F10"
                type="youtube"
              />
            </div>
          }
          windowsContent={
            <div>
              <p>
                Чтобы снять это ограничение, добавьте ключ{" "}
                <mark className="code">-m</mark> в свойства ярлыка. Для этого откройте
                свойства ярлыка <mark className="app">Adobe After Effects</mark>,
                перейдите в конец строки <mark className="select">«Объект»</mark>,
                поставьте пробел и допишите <mark className="code">-m</mark>. После этого
                нажмите <mark className="select">«Применить»</mark> и закройте свойства
                ярлыка. Теперь этот ярлык позволит запускать несколько копий программы, в
                которых вы можете открыть разные проекты и работать с ними.
              </p>
              <ContentFigure
                caption="Включение возможности открытия нескольких экземпляров"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/aftereffects/enable_multiple_ae_instances.mp4"
                theme="dark"
                type="video"
                variant="windows"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="secret-settings"
        tag="secret, preferences, отладка, скрытые настройки, disable layer cache"
        title="Что такое «секретные» настройки и как их открыть?"
      >
        <p>
          Разработчики оставили некоторые функции, спрятав их в «секретном» разделе{" "}
          <mark className="select">«Secret»</mark>. Правда, ничего особенно интересного
          для обычного пользователя там нет. Чтобы открыть секретные настройки, откройте
          любой раздел настроек <mark className="select">«Edit» → «Preferences»</mark>,
          удерживая клавишу <mark className="key">Shift</mark>. В появившемся окне слева
          появится раздел <mark className="select">«Secret»</mark>.
        </p>
        <Addition type="warning">
          Клавиша <mark className="key">Shift</mark> должна быть зажата до тех пор, пока
          окно с настройками не откроется.
        </Addition>
        <ContentFigure
          caption="Preferences"
          imgTitle="Секретные настройки"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/aftereffects/secret_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В последних версиях <mark className="app">Adobe After Effects</mark> там
          находится всего три настройки. Иногда отключение кэширования слоёв и
          автоматическая очистка кадров могут помочь, если вы сталкиваетесь с
          переполнением оперативной памяти при рендеринге.
        </p>
        <Addition type="danger">
          Изменение этих параметров может повлиять на стабильность программы. Настраивайте
          эти параметры на свой страх и риск.
        </Addition>
        <ul>
          <li>
            <mark className="select">«Disable Layer Cache»</mark> — отключает кэширование
            слоёв.
          </li>
          <li>
            <mark className="select">«Purge Every X Frames During Make Movie»</mark> —
            автоматически очищает память через каждый заданный параметр кадров при
            рендеринге.
          </li>
          <li>
            <mark className="select">«Ignore Sequence Rendering Errors»</mark> — позволяет
            программе игнорировать ошибки при рендеринге секвенций.
          </li>
        </ul>
      </DetailsSummary>
      <Addition type="info">
        Ответы на некоторые вопросы, связанные с интерфейсом, находятся в разделе{" "}
        <a href="#interface">«Интерфейс»</a>.
      </Addition>
    </div>
  );
};

export default AEFromNewbies;
