import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import ContentSwitcher from "../../../components/features/ContentFilter";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const AEFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/AEFromNewbies.tsx" />
      <DetailsSummary
        tag="для новичка, курсы, туториалы, только открыл афтер"
        title="Я первый раз установил и открыл программу, с чего бы мне начать обучение?"
      >
        <AdditionDanger>
          <ul>
            <li>
              Будьте готовы к тому, что большинство авторов курсов и каналов на{" "}
              <mark className="app">YouTube</mark> выполняют свои действия в английской
              версии программы, поэтому рекомендую{" "}
              <a href="#3.5">изменить язык на английский</a>, если у вас установлена
              русская локализация во избежание проблем и вопросов про перевод эффектов или
              частей интерфейса.
            </li>
            <li>
              Если вы всё же наотрез отказываетесь от перехода на английскую локализацию -
              при работе с <mark className="app">Adobe After Effects</mark> вам могут
              пригодиться таблицы перевода <a href="#1.6">эффектов</a> и{" "}
              <a href="#1.7">пресетов</a>.
            </li>
          </ul>
        </AdditionDanger>
        <p>
          Если вы только начинаете свой путь в мире композитинга и никогда не работали с
          программами, такими как <mark className="app">Adobe After Effects</mark> -
          рекомендую пройти вам курс{" "}
          <a href="https://www.youtube.com/playlist?list=PLcN7xY5E2wrmIU__8uNIHglZTyZ29RMIM">
            Основы After Effects от Ильи Зернова
          </a>
          . Данный курс поможет вам освоить интерфейс программы и научиться работать с
          ключевыми кадрами, титрами и эффектами.
        </p>
        <Divider>Курсы для начинающих</Divider>
        <YouTubeVideo
          caption="Основы After Effects от Ильи Зернова"
          link="https://www.youtube.com/embed/nogR7eyhYug"
        />
        <p>
          В качестве альтернативы вы можете пройти{" "}
          <a href="https://www.youtube.com/playlist?list=PLrsq-o51mMFE4ez9Q4qmkyoXZ_lYsyZNi">
            мини-курс от VideoSmile для начинающих
          </a>
          . В данном курсе вы научитесь работать с различными эффектами, создавать
          анимацию текста, а также использовать маски и инструмент{" "}
          <mark className="plugin">Rotobrush</mark> для вырезания объектов в кадре.
        </p>
        <YouTubeVideo
          caption="After Effects для начинающих"
          link="ZTrELWgEtUI"
        />
        <p>
          Если вы обладаете английским языком на уровне комфортного прослушивания и
          понимания речи или у вас есть возможность перевести видео на нужный вам язык -
          рекомендую к просмотру плейлист{" "}
          <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib">
            Learn Adobe After Effects от Gareth David Studio
          </a>
          . Автор в своём курсе подробно разбирает основные функции программы и
          демонстрирует различные примеры работы с{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <YouTubeVideo
          caption="What is Adobe After Effects?"
          link="FuJMHF510mc"
        />
        <p>
          Если вы уже знакомы с интерфейсом программы, но вы всё ещё чувствуете себя
          неуверенно - вы можете попробовать изучить каналы на{" "}
          <mark className="app">YouTube</mark> из списка ниже, которые помогут вам
          прокачать свои навыки.
        </p>
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
        <p>
          Ну и не забываем про дополнительный список как бесплатных, так и платных курсов
          по <mark className="app">Adobe After Effects</mark>.
        </p>
        <div className="flexible-links">
          <a href="https://cloudlessons.ru/v/410/">
            &quot;Супер After Effects&quot; от VideoSmile
          </a>
          <a href="https://volnitsa.zenclass.ru/public/course/4b9a6429-5c06-4f91-a73b-312bc57b9e35">
            &quot;Быстрый вход в After Effects&quot; от Вольница
          </a>
          <a href="https://volnitsa.zenclass.ru/public/course/9221df49-3262-444e-b269-8b3bfd496de2">
            &quot;SUPER SILA FOREVER&quot; от Вольница
          </a>
          <a href="https://sabatovsky.com/after">
            &quot;After Effects от новичка до специалиста&quot; от Сабатовского
          </a>
          <a href="https://www.profileschool.ru/category/video/course_adobe_after_effects_base">
            &quot;After Effects базового уровня&quot; от Никиты Чеснокова
          </a>
        </div>
        <Divider>Подборка туториалов на разные темы</Divider>
        <p>
          Если вы сталкиваетесь с трудностями при работе с графиками скорости - посмотрите
          подробное объяснение работы с данным инструментом от{" "}
          <a href="https://www.youtube.com/@JakeInMotion">Jake In Motion</a>.{" "}
        </p>
        <YouTubeVideo
          caption="Туториал по графикам скорости который вам может пригодиться"
          link="7pOCtlrrE3Y"
        />
        <p>
          Также вы могли видеть трендовые ролики с плавным ускорением и замедлением, так
          называемым <mark className="word">speed ramp</mark>. Данный эффект делается с
          помощью изменения скорости в параметре <mark>Time Remapping</mark>.
        </p>
        <AdditionInfo>
          Чтобы включить <mark>Time Remapping</mark> у выделенного слоя - нажмите на
          комбинацию клавиш <mark className="key">Ctrl + Alt + T</mark>.
        </AdditionInfo>
        <YouTubeVideo
          caption="Плавно изменяющаяся скорость"
          link="_kcfkuNwd3M"
        />
        <p>
          Ну и куда же без основ по цветокоррекции, с помощью которого можно создать
          определённый вид или настроение для слоёв в композиции.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/color-correction-effects.html">
            Эффекты для цветокоррекции
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/color-basics.html">
            Основы цветокоррекции от Adobe
          </a>
        </div>
        <YouTubeVideo
          caption="Цветокоррекция с помощью Lumetri Color"
          link="y4fuhIPxmJg"
        />
        <Divider>Подборка туториалов для &quot;тикток-эдиторства&quot;</Divider>
        <AdditionWarning>
          <ul>
            <li>
              Прежде чем лезть в <mark className="word">эдиторство</mark> и учиться
              применять различные эффекты - рекомендуется всё же пройти какой-нибудь
              базовый курс по <mark className="app">Adobe After Effects</mark>. Без
              фундаментальных знаний многие тонкости работы с различными инструментами
              программы могут быть вам не понятны, ведь не все{" "}
              <mark className="word">эдиторы</mark> просто демонстрируют процесс создания
              различных эффектов и не рассказывают как работает их проект.
            </li>
            <li>
              <i style={{opacity: "0.5"}}>
                И, пожалуйста, не лепите в свои композиции{" "}
                <mark className="plugin">Unsharpen Mask</mark> и{" "}
                <mark className="plugin">Sharpen</mark> с выкрученными до максимума
                значениями ради &quot;качества&quot;, ужасно же выглядит. Используйте
                эффекты для цветокоррекции в меру.
              </i>
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Если вы часто видите <mark className="word">эдиты</mark> по какой-нибудь
          тематике в <mark className="app">TikTok</mark>,{" "}
          <mark className="app">YouTube Shorts</mark> или{" "}
          <mark className="app">
            Instagram<sup>1</sup> Reels
          </mark>{" "}
          и вы хотите научиться делать что-то похожее - изучите различные обучающие видео
          из приведённых каналов ниже.
        </p>
        <div className="flexible-links">
          <a href="https://www.youtube.com/@Tozel./videos">Tozel</a>
          <a href="https://www.youtube.com/@rdylt09/videos">rdylt09</a>
          <a href="https://www.youtube.com/@theayzedit/videos">The Ayz Edit</a>
          <a href="https://www.youtube.com/@yaniksksks/videos">Yaniksksks</a>
          <a href="https://www.youtube.com/@imduong2k6/videos">imduong2k6</a>
          <a href="https://www.youtube.com/@Victoriaaep/videos">Victoria.aep</a>
          <a href="https://www.youtube.com/@creativegraphicz/videos">Creative Graphicz</a>
          <a href="https://www.youtube.com/@ReverseStark/videos">ReverseStark</a>
        </div>
        <AdditionDanger>
          <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark> признаны
          экстремистскими организациями и запрещены на территории Российской Федерации.
        </AdditionDanger>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.95rem",
            fontWeight: "700",
          }}
        >
          Надеюсь, вы найдёте что-то полезное для себя. Удачи в ваших начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="сленг, жаргон, сокращения, словосочетания, говор"
        title="Какие популярные термины есть у пользователей программы?"
      >
        <p>
          Когда пользователь только начинает изучать{" "}
          <mark className="app">Adobe After Effects</mark> - у него может возникнуть
          недопонимания в процессе общения с другими пользователями программы. Это
          нормально, у каждой сферы есть свой сленг и местные понятия. В этом списке мы
          собрали часто используемые термины и слова.
        </p>
        <Divider>Базовые понятия и интерфейс</Divider>
        <ul>
          <li>
            <mark className="word">Композиция</mark> или{" "}
            <mark className="word">композ</mark> - некая сцена вашего проекта в{" "}
            <mark className="app">Adobe After Effects</mark>. В композиции обычно собирают
            некую сцену с слоями, фигурами, эффектами или видеофайлами. У каждой
            композиции есть частота кадров, разрешение и соотношение пикселя.
            <AdditionInfo>
              Чтобы открыть окно настроек композиции - используйте комбинацию клавиш{" "}
              <mark className="key">Ctrl + K</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Превью</mark> или{" "}
            <mark className="word">предпросмотр</mark> - то, что вы видите на вашем экране
            в окне, где отображается предварительный вывод вашей композиций.
          </li>
          <li>
            <mark className="word">Плейхед</mark> - вертикальная временная метка,
            показывающая где находится точка текущего кадра в предпросмотре.
          </li>
          <li>
            <mark className="word">Ромбик</mark>, <mark className="word">ключ</mark> или{" "}
            <mark className="word">кейфрейм</mark> - ключевые кадры или же метки, на
            основе которых создаётся движения того или иного параметра слоя. Данные метки
            указывают на то, как будет выглядеть анимированный элемент в конкретный момент
            времени.
          </li>
          <li>
            <mark className="word">Часы</mark> или{" "}
            <mark className="word">секундомер</mark> - элемент интерфейса на таймлайне или
            в панели управления эффектом для добавления ключевых кадров.
            <AdditionInfo>
              Если нажать на секундомер с зажатым <mark className="key">Alt</mark> -
              включится режим работы с выражениями. Выключается аналогичным образом.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Хоткей</mark> - сокращение от &quot;горячие
            клавиши&quot;, означает некую комбинацию клавиш, которые должен знать
            пользователь для выполнения нужного действия.
          </li>
          <li>
            <mark className="word">Ракета</mark> - окно{" "}
            <mark className="ui">Project Settings</mark> в котором обычно меняется
            цветовое пространство проекта или настраивается использование GPU.
            <AdditionInfo>
              Данное окно открывается с помощью комбинации клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Разрешение</mark> или{" "}
            <mark className="word">резолюшен</mark> - количество пикселей в ширину и
            высоту. Иногда используется в контексте выбора качества предпросмотра{" "}
            <mark className="ui">Full</mark>, <mark className="ui">Half</mark>,{" "}
            <mark className="ui">Third</mark> или <mark className="ui">Quarter</mark>
            <AdditionInfo>
              Если у вас есть композиция с разрешением 1280 на 720, а в настройках рендера
              вы поставили <mark className="ui">Resize</mark> до 3840 на 2160 - вы просто
              растянете 720p композицию до 4K без фактического улучшения качества,
              композиция не будет рендериться сразу в 4K.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Прокси</mark> - урезанная в качестве (зависит от того,
            в каком кодеке и разрешении пользователь создаст прокси) и более
            производительная копия исходника для монтажа за счёт использования монтажного
            кодека. Его нужно создавать, если вы имеете проблемы с производительностью
            проекта из-за большого разрешения или когда нужна более стабильная работа с
            проектом. Прокси можно создать прямо в{" "}
            <mark className="app">Adobe After Effects</mark> или с помощью сторонних
            программ, например <mark className="app">Adobe Media Encoder</mark>,{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">Handbrake</mark>. Также прокси можно создавать и для
            композиций с целью уменьшения времени повторного рендера, если вы не
            собираетесь его редактировать дальше.
            <AdditionInfo>
              <ul>
                <li>
                  Использование прокси вместо композиций или исходников можно переключать
                  в окне <mark className="ui">Project</mark>, нажав на квадратный чекбокс
                  слева от нужного файла.
                </li>
                <li>
                  Если вы создали прокси в другой программе, то указать их в{" "}
                  <mark className="app">Adobe After Effects</mark> можно в окне{" "}
                  <mark className="ui">Project</mark>, выбрав нужный файл, нажав по нему{" "}
                  <mark className="key">ПКМ</mark> и выбрав{" "}
                  <mark className="ui">Set Proxy &gt; File</mark>.
                </li>
                <li>
                  По умолчанию, если у исходника или композиции имеется прокси, то в
                  финальный рендер попадает оригинальный файл. Это поведение можно
                  изменить в окне <mark className="ui">Render Settings</mark>, выбрав в
                  параметре <mark className="ui">Proxy Use</mark> значение{" "}
                  <mark className="ui">Use All Proxies</mark>.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Рендер</mark> - процесс генерации кадров и дальнейшей
            их упаковки в нужный контейнер и кодек. Часто используется в контексте вывода
            композиции в видео или изображение.
          </li>
          <li>
            <p>
              <mark className="word">Редьюс</mark> - функция{" "}
              <mark className="ui">Reduce Project</mark> которая облегчает ваш проект за
              счёт удаления всех объектов, кроме выбранной композиции в окне{" "}
              <mark className="ui">Project</mark>. Сделать это можно с помощью{" "}
              <mark className="ui">File &gt; Dependencies &gt; Reduce Project</mark>.
            </p>
            <AdditionWarning>
              Если вы первый раз пользуетесь этой функцией - создайте на крайний случай
              копию файла вашего проекта, вдруг эта функция удалит не те файлы, как
              планировалось.
            </AdditionWarning>
            <p>
              Также существует кнопка <mark className="ui">Remove Unused Footage</mark>{" "}
              для удаления неиспользованных исходников в вашем проекте.
            </p>
          </li>
          <li>
            <mark className="word">Коллект файл</mark> - функция{" "}
            <mark className="ui">Collect Files</mark> для сборки всех файлов, используемые
            в вашем проекте <mark className="app">Adobe After Effects</mark> в одну папку.
            Эту папку вы можете заархивировать и отправить другому человеку или перенести
            в другое место, например на внешний жёсткий диск.
            <AdditionInfo>
              Данная функция находится в{" "}
              <mark className="ui">File &gt; Dependencies &gt; Collect Files</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Перелинкуй исходники</mark> - переподключение
            потерянных файлов в вашем проекте. Это делается с помощью{" "}
            <mark className="key">ПКМ</mark> по потерянным исходникам в окне{" "}
            <mark className="ui">Project</mark> и нажатию кнопки{" "}
            <mark className="ui">Replace Footage</mark> у исходников.
            <AdditionInfo>
              Если остальные потерянные исходники находятся в одной папке, то они
              автоматически подключатся после указания первого потерянного файла.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Зайди в окно превью</mark> - вам предлагают открыть
            окно с настройками предварительного просмотра с помощью{" "}
            <mark className="ui">Window &gt; Preview</mark>. Обычно в таких случаях у
            пользователя стоят кривые настройки FPS (видео из-за этого идёт слишком быстро
            или медленно) или плохое качество предпросмотра (Auto или Quarter вместо
            Full).
          </li>
        </ul>
        <Divider>Работа со слоями и эффектами</Divider>
        <ul>
          <li>
            <mark className="word">Аджастмент леер</mark> - корректирующий слой, который в
            английской версии программы называется{" "}
            <mark className="word">Adjustment Layer</mark>. Этот слой позволяет
            накладывать эффекты на другие слои, находящиеся ниже него в иерархии на
            таймлайне. Это очень удобно, если вы хотите применить эффект поверх всех
            слоёв, например, для цветокоррекции или добавления различных искажений.
            <AdditionInfo>
              Чтобы создать такой слой в проекте - просто нажмите комбинацию клавиш{" "}
              <mark className="key">Ctrl + Alt + Y</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Солид</mark> - слой с заданным цветом. Часто
            применяется как фон или как инициализатор 3D-эффектов, например{" "}
            <mark className="plugin">Trapcode Particular</mark>.
          </li>
          <li>
            <mark className="word">Шейп</mark> - от английского{" "}
            <mark className="word">shape</mark>, означает слой с фигурой.
          </li>
          <li>
            <mark className="word">Маска</mark> - область на изображении или видео, через
            которую проявляется эффект или видимость. По сути - ограничитель. Монтёры
            маскируют не только дефекты, но и реальность.
          </li>
          <li>
            <mark className="word">Патч</mark> или <mark className="word">путь</mark> -
            своеобразная линия или кривая, которая применяется для создания фигуры или
            маски у слоя.
            <AdditionInfo>
              Path маски и фигурного слоя взаимозаменяемые, поэтому вы можете превратить
              слой-фигуру в маску и наоборот с помощью копирования и вставки этих
              аттрибутов.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Прекомпоз</mark> - обычно это дочерняя композиция
            созданная за счёт выделенных объектов из родительской композиции. Создаётся с
            помощью комбинации клавиш <mark className="key">Ctrl + Shift + C</mark>. Чаще
            всего такую композицию создают для группировки кучи объектов, чтобы получился
            в итоге один слой на таймлайне. Новая композиция появится в панели проекта и
            её можно будет использовать в любой другой композиции.
            <AdditionInfo>
              В любой непонятной ситуации - используйте прекомпоз, часто помогает.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Трансформ</mark> - настройка или анимация базовых
            свойств слоя, например положение или размер. Иногда означает встроенный эффект{" "}
            <mark className="plugin">Transform</mark>.
          </li>
          <li>
            <mark className="word">Овершут</mark> - специфический эффект в анимации, при
            котором объект временно превышает целевую позицию перед возвратом к конечному
            значению. Этот приём широко используется для создания реалистичных
            &quot;пружинящих&quot; движений, имитирующих инерцию физических объектов.
            Техническая реализация овершута основана на модификации параметров кривой
            Безье, выходящей за стандартный диапазон.
            <AdditionWarning>
              Некоторые свойства, например положение, которое не разделено через{" "}
              <mark>Separate Dimensions</mark>, не поддерживают овершутинг.
            </AdditionWarning>
          </li>
          <li>
            <mark className="word">Моушен блюр</mark> - размытие в движении. С помощью
            него можно сделать плавное движение объекта. Это можно сделать с помощью
            включения <mark className="ui">Motion Blur</mark> у слоя или применив эффект{" "}
            <mark className="plugin">CC Force Motion Blur</mark>.
          </li>
          <li>
            <mark className="word">Стесняшка</mark>, <mark className="word">шляпка</mark>{" "}
            или <mark className="word">медуза</mark> - функция{" "}
            <mark className="ui">Shy</mark>. Если у слоя помечен такой аттрибут, то такие
            слои можно легко скрыть на таймлайне, при этом такие слои будут видимыми в
            предпросмотре композиции.
          </li>
          <li>
            <mark className="word">Решётка</mark> - индикация у слоя{" "}
            <mark className="ui">Guide Layer</mark>, которая рендерится только в
            предпросмотре композиции и не будет рендериться в финальном файле. Такие файлы
            используются для описания &quot;как работать с данной композицией&quot;.
          </li>
          <li>
            <mark className="word">Кубик</mark> - индикация у слоя, отвечающая на вопрос
            &quot;слой или эффект находится в трёхмерном пространстве?&quot;. С такими
            слоями можно взаимодействовать в 3D пространстве, например управлять камерой
            или положение по одной из трёх осей.
          </li>
          <li>
            <mark className="word">Солнышко</mark> или{" "}
            <mark className="word">звёздочка</mark> - иконка, которая выполняет два разных
            действия в зависимости от того какой у вас тип слоя -{" "}
            <mark className="ui">Continuously Rasterize</mark> для уменьшения
            &quot;пикселей&quot; у векторных объектов или{" "}
            <mark className="ui">Collapse Transformation</mark> для слоёв композиций.
            <AdditionInfo>
              При включенной опции <mark className="ui">Continuously Rasterize</mark> у
              слоя - при увеличении предпросмотра вы никогда не добьётесь &quot;векторного
              предпросмотра&quot;. Это происходит потому, что{" "}
              <mark className="app">Adobe After Effects</mark> всегда растрирует
              предпросмотр в соответствии с заданным в настройках разрешением композиции.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Тайлинг</mark> - зеркальная плитка, которую можно
            использовать для заполнения пустоты при использования эффекта &quot;пьяного
            оператора с трясущимися руками&quot;. Обычно такая плитка делается с помощью
            эффектов <mark className="plugin">CC Repetile</mark> или{" "}
            <mark className="plugin">Motion Tile</mark>.
          </li>
          <li>
            <mark className="word">Тайм-ремапинг</mark> - принцип изменения скорости видео
            в определённых промежутках времени. Делается это с помощью встроенной функции{" "}
            <mark className="ui">Time Remapping</mark>, которая включается с помощью
            комбинации клавиш <mark className="key">Ctrl + Alt + T</mark> или с помощью
            сторонних плагинов, например <mark className="plugin">Twixtor</mark> или{" "}
            <mark className="plugin">BCC Retimer ML</mark>.
          </li>
          <li>
            <mark className="word">Улитка</mark>, <mark className="word">спираль</mark>{" "}
            или <mark className="word">лассо</mark> - инструмент для привязки слоя или его
            параметров к другому слою.
            <AdditionInfo>
              Если вы не видите инструмента для привязки на вашем таймлайне - включите его
              видимость с помощью <mark className="key">ПКМ</mark> по столбцам и выберите{" "}
              <mark className="ui">Columns &gt; Parent & Link</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Усики</mark> - манипуляторы графика скорости в{" "}
            <mark className="ui">Graph Editor</mark>, пути движения в предпросмотре или
            угла у фигуры.
          </li>
          <li>
            <mark className="word">Выражения</mark>,{" "}
            <mark className="word">экспрешен</mark> или{" "}
            <mark className="word">expression</mark> - некая инструкция для движения
            объекта или расчёты некоторых формул. Часто используется для привязки
            контроллера к объекту, значения аттрибутов из одного слоя и другому или просто
            фиксации определённого значения в массиве.
            <AdditionInfo>
              Чтобы активировать режим написания выражений - нажмите на иконку{" "}
              <mark className="ui">секундомера</mark> у нужного параметра с зажатой
              клавишей <mark className="key">Alt</mark>. После этого на таймлайне появится
              текстовое поле куда вы сможете ввести своё выражение.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Шейк</mark> или <mark className="word">вигл</mark> -
            обычно случайное движение слоя или же тряска по позиции X и Y. Этот эффект
            часто встречается в <mark className="word">эдитах</mark> и различных видео.
            Под <mark className="word">виглом</mark> обычно подразумевает тоже самое, но
            только в качестве встроенной функции выражения{" "}
            <mark className="code">wiggle(freq, amp)</mark> для задания случайной анимации
            от исходного значения.
          </li>
          <li>
            <mark className="word">Автотрейс</mark> - функция, которая помогает
            автоматически создавать маски для слоя, основываясь на его краях. Чтобы
            воспользоваться этой функцией, просто перейдите в{" "}
            <mark className="ui">Layer &gt; Auto-Trace</mark>, предварительно выделив
            нужный слой.
          </li>
          <li>
            <mark className="word">Морфинг</mark> - название техники для плавного
            превращения одной фигуры в другую, часто применяется с фигурными слоями.
          </li>
          <li>
            <mark className="word">Кеинг</mark> - процедура удаления однородного или
            однотонного фона из видео или изображения. Часто применяется в контексте
            удаления зелёного или синего фона или отделения объекта от фона.
          </li>
          <li>
            <mark className="word">Клинап</mark> - процедура удаления ненужных объектов на
            видео. Сделать это можно встроенным{" "}
            <mark className="plugin">Content-Aware Fill</mark> или через плагин{" "}
            <mark className="plugin">Mocha Pro</mark>.
          </li>
          <li>
            <mark className="word">Нулевой объект</mark> или{" "}
            <mark className="word">нуль</mark> - пустой объект, который используется для
            расположения контроллеров или манипуляторов. Полезен при привязке нескольких
            объектов в одно целое.{" "}
          </li>
          <li>
            <mark className="word">Ротобраш</mark> - стандартный инструмент в{" "}
            <mark className="app">Adobe After Effects</mark> для выделения движущегося
            объекта в кадре. Часто используется для создания обводки вокруг объекта или
            отделения от фона.
          </li>
          <li>
            <mark className="word">Ротоскоп</mark> - процесс разделения сцены или кадра на
            несколько слоёв.
          </li>
          <li>
            <mark className="word">Трекинг</mark> - механизм определения местоположения
            движущегося объекта для дальнейшей его привязки к другому объекту. Часто
            применяется для замены экранов мониторов или биллбордов на видео.
          </li>
        </ul>
        <Divider>Инструменты</Divider>
        <ul>
          <li>
            <mark className="word">Борисовский</mark>,{" "}
            <mark className="word">сапфировский</mark> или{" "}
            <mark className="word">континуумовский</mark>, то обычно собеседник имеет в
            виду плагины от компании Boris FX, в частности из пакетов{" "}
            <mark className="plugin">Sapphire</mark> и{" "}
            <mark className="plugin">Continuum</mark>. Эти прилагательные часто
            используются вместе с названиями эффектов. Например,{" "}
            <mark className="word">сапфировский шейк</mark> обозначает эффект{" "}
            <mark className="plugin">S_Shake</mark>, а{" "}
            <mark className="word">континуумовский блюр</mark> - это{" "}
            <mark className="plugin">BCC Lens Blur</mark>.
          </li>
          <li>
            <mark className="word">Максоновский</mark> или{" "}
            <mark className="word">редгиантовский</mark> - в таком случае подразумеваются
            плагины от Maxon и Red Giant, например{" "}
            <mark className="plugin">Trapcode Particular</mark> или{" "}
            <mark className="plugin">Universe</mark>.
          </li>
          <li>
            <mark className="word">Могрт</mark> или <mark className="word">Mogrt</mark> -
            шаблон анимационного дизайна, который создаётся в{" "}
            <mark className="app">Adobe After Effects</mark>, чтобы использовать в
            дальнейшем в проектах, созданные в{" "}
            <mark className="app">Adobe Premiere Pro</mark>.
          </li>
          <li>
            <mark className="word">Мокка</mark> или <mark className="word">моча</mark> -
            плагин <mark className="plugin">Boris FX Mocha</mark>, которая используется
            для трекинга и привязки объектов. Данный плагин включён в базовую поставку{" "}
            <mark className="app">Adobe After Effects</mark>, но в урезанном виде. Для
            разблокировки некоторых функций требуется полная версия{" "}
            <mark className="plugin">Boris FX Mocha Pro</mark>.{" "}
            <a href="https://support.Boris FX.com/hc/en-us/articles/10232625711117-I-use-Mocha-AE-what-is-the-difference-between-Mocha-AE-and-Mocha-Pro-Do-I-need-Mocha-Pro">
              О различиях между AE и Pro...
            </a>
          </li>
          <li>
            <mark className="word">Элемент 3Д</mark> - сторонний плагин{" "}
            <mark className="plugin">Element 3D</mark> от VideoCopilot, позволяющий
            создавать 3D-сцены в композициях{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            <mark className="word">Инфлюкс</mark> - сторонний плагин{" "}
            <mark className="plugin">Autokroma Influx</mark>, позволяющий импортировать в{" "}
            <mark className="app">Adobe After Effects</mark> неподдерживаемые типы файлов,
            например <mark className="file">MKV</mark> или{" "}
            <mark className="video">FLV</mark>.
          </li>
          <li>
            <mark className="word">Плагин</mark> - подключаемые, обычно встроенные или
            сторонние эффекты с расширением <mark className="file">AEX</mark> для{" "}
            <mark>Windows</mark> или <mark className="file">PLUGIN</mark> для{" "}
            <mark>macOS</mark>. Часто применяется с выражением &quot;где скачать?&quot;.
          </li>
          <li>
            <mark className="word">Пресет</mark> - заготовленный набор эффектов формата{" "}
            <mark className="file">FFX</mark> для дальнейшего применения. Может
            сохраняться вместе с анимацией по ключам.
            <AdditionWarning>
              Не все пресеты, созданные сторонними пользователями могут корректно работать
              с вашим проектом, иногда их надо отредактировать под свои нужды.
            </AdditionWarning>
          </li>
          <li>
            <mark className="word">Скрипт</mark> - файлы формата{" "}
            <mark className="file">JSX</mark> или
            <mark className="file">JSXBIN</mark>, выполняющее определённые инструкции или
            действия. Могут быть встроенными или сторонними. Если у вас есть навыки в
            программировании скриптов - вы можете создать свой скрипт, выполняющую нужную
            вам задачу. <a href="#2.1">Как установить сторонние скрипты?</a>
          </li>
          <li>
            <mark className="word">Экстеншен</mark> - расширения, часто запакованные в{" "}
            <mark className="file">ZXP</mark>. После установки таких расширений - они
            появятся в <mark className="ui">Window &gt; Extensions</mark>.
            <AdditionInfo>
              Если такие расширения не открываются - убедитесь в том, что вы применили{" "}
              <a
                download
                href="files/Enable Extensions Adobe.reg"
              >
                REG-патч
              </a>{" "}
              для <mark>Windows</mark> или ввели нужные команды для их активации в
              терминале для <mark>macOS</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Дупликатор</mark> - обычно используется в качестве
            обозначения бесплатного стороннего скрипта{" "}
            <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>
            . Он используется для того чтобы дублировать композиции так, чтобы они не были
            зависимы друг от друга.
            <AdditionInfo>
              Чтобы его скачать, вам нужно зарегистрироваться на сайте{" "}
              <a href="https://aescripts.com">aescripts</a> и на странице с плагином
              указать цену <mark>0</mark>. После этого данный плагин появится в ваших
              заказах и вы можете оттуда его скачать.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Компсеттер</mark> - бесплатный сторонний JSX-скрипт{" "}
            <a href="https://github.com/msongz/rd_CompSetter">rd_CompSetter</a> для
            одновременного изменения параметров нескольких композиций.
            <AdditionInfo>
              Инструкцию по установке сторонних плагинов и скриптов вы можете найти в{" "}
              <a href="#2.1">статье 2.1</a>.
            </AdditionInfo>
          </li>
        </ul>
        <Divider>Сокращения и сленг</Divider>
        <ul>
          <li>
            <mark className="word">ЕМНИП</mark> - сокращение от выражения{" "}
            <mark className="word">Если мне не изменяет память</mark>.
          </li>
          <li>
            <mark className="word">КТТС</mark> - сокращение от выражения{" "}
            <mark className="word">Как только, так сразу</mark>.
          </li>
          <li>
            <mark className="word">ASAP</mark> или <mark className="word">АСАП</mark> -
            сокращение от выражения <mark className="word">As soon as possible</mark>, что
            в переводе означает <mark className="word">Как можно скорее</mark>.
          </li>
          <li>
            <mark className="word">Топик стартер</mark> - человек, который изначально
            задал вопрос или поднял определённую тему в чате.
          </li>
          <li>
            <mark className="word">Одинаковый год</mark> - часто встречается в контексте
            вопроса &quot;у тебя точно одинаковые версии программ от Adobe стоят?&quot;.
            Данный вопрос задаётся в случае когда пользователь, например, не может
            подсоединить <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark> между собой.
            <AdditionWarning>
              Программы <mark className="app">Adobe After Effects</mark>,
              <mark className="app">Adobe Premiere Pro</mark> и
              <mark className="app">Adobe Media Encoder</mark> разных годов, например{" "}
              <mark>2020</mark>, <mark>2018</mark>и <mark>2022</mark> не совместимы друг с
              другом.
            </AdditionWarning>
          </li>
        </ul>
        <Divider>Технические термины и форматы</Divider>
        <ul>
          <li>
            <mark className="word">Альфа-канал</mark> - это четвёртый канал в цветовой
            модели RGBA. Когда мы говорим об альфа-канале, чаще всего имеем в виду
            прозрачность, которую можно наложить на изображение. Например,{" "}
            <mark className="file">PNG</mark> поддерживает множество уровней прозрачности,
            позволяя создавать изображения с плавными переходами от полностью прозрачного
            до полностью непрозрачного. В отличие от этого,{" "}
            <mark className="image">GIF</mark> поддерживает только бинарную прозрачность,
            что означает, что изображение может быть либо полностью прозрачным, либо
            полностью непрозрачным, без плавных затуханий. Если вы хотите сохранить видео
            с прозрачностью, вам подойдут контейнеры <mark className="video">MOV</mark>,{" "}
            <mark className="video">AVI</mark> или <mark className="video">WEBM</mark>, в
            которые вы можете закодировать видео с кодеком, который поддерживает
            альфа-канал. Однако, будьте осторожны с <mark className="video">MP4</mark>: в
            него нельзя запаковать альфа-канал, кроме как через устройство на{" "}
            <mark>macOS</mark>, но это уже другая история.
            <AdditionInfo>
              Если хотите узнать больше об альфа-канале, то{" "}
              <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB">
                загляните на Википедию
              </a>
              .
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Битрейт</mark> - это скорость, с которой информация
            передается и обрабатывается в видео файле. Обычно его измеряют в{" "}
            <mark>Кбит/с</mark> или <mark>Мбит/с</mark>. Битрейт в аудио и видео
            показывает, насколько сильно сжат поток данных и определяет, какой размер
            канала нужен для его передачи. Чем выше битрейт, тем лучше качество видео,
            особенно когда на экране быстро движутся объекты.{" "}
            <AdditionInfo>
              Если у вашего исходного видео битрейт составляет <mark>10 Мбит/с</mark>, а
              при экспорте вы укажете <mark>50 Мбит/с</mark>, то качество изображения не
              улучшится. Вы просто увеличите размер файла без реальной пользы.
            </AdditionInfo>
            <Divider>Виды битрейта</Divider>
            <ul>
              <li>
                <mark className="word">CBR (Constant Bitrate)</mark> или{" "}
                <mark className="word">Постоянный битрейт</mark> - вариант кодирования
                данных, когда пользователь выбирает значение битрейта и он сохраняется для
                всего файла. В таком типе кодирования размер получаемого файла будет
                предсказуемым. Хорошо подходит для монтажа, но не очень уместен для
                социальных сетей из-за большого веса по сравнению с кодированием через
                VBR.
              </li>
              <li>
                <mark className="word">VBR (Variable Bitrate)</mark> или{" "}
                <mark className="word">Переменный битрейт</mark> - вариант кодирования
                данных в котором кодек сам выбирает значение битрейта исходя из уровня
                желаемого качества. На разных временных промежутках битрейт может
                изменяться. Плохо подходит для монтажа, но хорошо подходит для передачи
                видео или публикации в социальные сети.
              </li>
              <li>
                <mark className="word">ABR (Adaptive Bitrate)</mark> или{" "}
                <mark className="word">Усреднённый битрейт</mark> - похож по своей сути
                как гибрид CBR и VBR, используется редко.
              </li>
              <li>
                <mark className="word">Квантование</mark> или{" "}
                <mark className="word">Constant Quantization</mark> - это метод сжатия
                видео, с помощью которого уровень качества изображения сохраняется
                постоянным на протяжении всего видео, независимо от его сложности. Чем
                меньше значение <mark>CQ</mark>, тем лучше качество изображения, но больше
                вес. Обычно хватает значения <mark>23</mark> для большинства случаев.
              </li>
              <li>
                <mark className="word">Lossless</mark> - кодирование данных без потерь. В
                повседневных задачах требуется очень редко и используется этот вариант с
                осторожностью. Сжатие без потерь используется, когда важна идентичность
                сжатых данных в сравнении с оригиналом.
                <AdditionWarning>
                  Учтите, что после такого кодирования полученный файл может занять у вас
                  чуть ли не всё дисковое пространство на вашем устройстве.
                </AdditionWarning>
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Кодек</mark> - программа или библиотека, которая
            кодирует или декодирует данные видео. С помощью кодеков компьютер понимает как
            ему работать с различными форматами видеофайлов. Существует несколько типов
            кодеков, в основном их делят на <mark className="word">монтажные</mark> и{" "}
            <mark className="word">не монтажные (delivery) кодеки</mark>. Видео с не
            монтажными кодеками для монтажа ваших композиций использовать не
            рекомендуется, так как они могут плохо крутиться программой.
            <ul>
              <Divider>Монтажные кодеки</Divider>
              <li>
                <mark className="video">Apple Prores</mark> или в простонародье{" "}
                <mark className="video">прорес</mark> - высококачественный кодек, который
                широко используется в качестве формата получения, производства и доставки
                и имеет различные шаблоны кодирования. Некоторых может расстроить большой
                вес файлов с таким кодеком. <mark className="video">Prores 422</mark> чаще
                всего используется в монтаже как исходники или прокси, а{" "}
                <mark className="video">Prores 4444</mark> используется для того чтобы
                импортировать видео с прозрачным фоном без сильной потери качества. Чтобы
                экспортировать такой файл из{" "}
                <mark className="app">Adobe After Effects</mark>, вам нужно выбрать{" "}
                <mark className="file">Quicktime</mark> из списка доступных кодеков для
                вывода.
                <AdditionInfo>
                  В кодеках <mark className="video">Apple Prores</mark> вы не можете
                  настроить битрейт, так как у каждого типа, например <mark>422</mark>,{" "}
                  <mark>422 (LT)</mark> или <mark>4444</mark> имеют различные битрейты по
                  умолчанию.{" "}
                  <a href="https://ru.wikipedia.org/wiki/Apple_ProRes#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B2_%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B0_ProRes">
                    Подробнее...
                  </a>
                </AdditionInfo>
              </li>
              <li>
                <mark className="video">DNxHD</mark> или{" "}
                <mark className="video">DNxHR</mark> - монтажные кодеки от Avid, были
                создан с акцентом на меньший вес после создания такого файла. По своей
                сути похожи как <mark className="video">Apple Prores</mark>.
              </li>
              <li>
                <mark className="video">GoPro Cineform</mark> - также популярен в
                индустрии кино и на телевидении, поддерживает вывод видео с альфа-каналом
                и также имеет меньший вес по сравнению с{" "}
                <mark className="video">Apple Prores 4444</mark>.
              </li>
            </ul>
            <ul>
              <Divider>Не монтажные (delivery) кодеки</Divider>
              <li>
                <mark className="video">H.264</mark>, <mark className="video">H.265</mark>{" "}
                или <mark className="file">HEVC</mark> - популярный кодек для
                распространения видео и публикаций в интернете, для воспроизведения видео
                на различных устройствах. При должном кодировании вы можете получить
                хорошее соотношение качества, веса и совместимости с другими устройствами.{" "}
                <AdditionDanger>
                  <p>
                    <b>
                      <u>Крайне не рекомендуется</u>
                    </b>{" "}
                    использовать для монтажа видео из интернета с данными кодеками!
                  </p>
                  <ul>
                    <li>
                      Такие кодеки предназначены только для вывода. Определённая площадка,
                      например YouTube, может переконвертировать видео по своим
                      алгоритмам, чтобы уместить у себя на своих серверах, но не
                      рассчитывает на то, что пользователь скачает видео из этой площадки
                      и начнёт с ним работать в монтажной программе. Из-за этого при
                      монтаже вы можете получить неожиданные результаты в виде непонятных
                      артефактов или{" "}
                      <mark className="word">проблемы зелёного экрана</mark>, так как
                      монтажная программа не понимает, как с таким файлом работать.
                    </li>
                    <li>
                      Прежде чем использовать видео из популярных площадок для монтажа -
                      стоит их перекодировать в{" "}
                      <mark className="word">монтажный кодек</mark>, например в{" "}
                      <mark className="video">Apple Prores 422</mark>, чтобы не заработать
                      себе головные боли в дальнейшем. <a href="#5.1">Подробнее...</a>
                    </li>
                  </ul>
                </AdditionDanger>
                <AdditionInfo>
                  <mark className="word">Проблема зелёного экрана</mark> часто встречается
                  при использовании кривых исходников в{" "}
                  <mark className="video">H.264</mark> или при использовании видеокарт от
                  AMD. Иногда в таком случае перекодировка не требуется и достаточно
                  отключить{" "}
                  <mark className="ui">Enable hardware accelerated decoding</mark> в{" "}
                  <mark className="ui">Edit &gt; Preferences &gt; Import</mark>
                </AdditionInfo>
              </li>
              <li>
                <mark className="video">VP9</mark> и <mark className="video">AV1</mark> -
                кодеки от Google в контейнере <mark className="video">WEBM</mark> с
                возможностью вывода с альфа-каналом. Видео с таким кодеком обычно
                используются для размещения на веб-страницах. За счёт своих алгоритмов
                сжатия видео с кодеком <mark className="video">VP9</mark> или{" "}
                <mark className="video">AV1</mark> имеют гораздо меньший вес по сравнению
                с видео в кодеке <mark className="video">H.264</mark> или{" "}
                <mark className="video">H.265</mark>.
                <AdditionInfo>
                  Из <mark className="app">Adobe After Effects</mark> файлы с таким
                  кодеком стандартными средствами экспортировать не получится, для этого
                  нужно перегнать ваше видео через конвертер, например{" "}
                  <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
                </AdditionInfo>
              </li>
              <li>
                <mark className="video">MPEG</mark> - устаревший кодек в нынешних реалиях.
                Раньше его использовали для записи фильма или домашних видео на{" "}
                <mark>DVD</mark> или <mark>Blu-ray</mark> диск, чтобы воспроизвести это
                видео с помощью видео проигрывателя или дисковода.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Контейнер</mark> - расширение видео файла, в котором
            содержится само видео в определённом кодеке, например{" "}
            <mark className="video">MP4</mark>, <mark className="video">MOV</mark> или{" "}
            <mark className="file">MKV</mark>.
          </li>
          <li>
            <mark className="word">Векторная графика</mark> или{" "}
            <mark className="word">вектор</mark> - форма представления изображения с
            помощью математических формул и геометрических объектов (линии, кривые,
            многоугольники). Отличительная особенность такого типа изображений -
            детализация не падает при увеличении масштаба холста.
            <AdditionInfo>
              Если вы нажмёте на <mark className="ui">Continuously Rasterize</mark> у слоя
              - при увеличении предпросмотра вы никогда не добьётесь &quot;векторного
              предпросмотра&quot;. Это происходит потому, что{" "}
              <mark className="app">Adobe After Effects</mark> всегда растрирует
              предпросмотр в соответствии с заданным в настройках разрешением композиции.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Растровая графика</mark> - файл изображения или видео
            состоящее из цветных пикселей. Чем выше разрешение, тем лучше качество.
          </li>
          <li>
            <mark className="word">Семплы</mark> - часто применяется в 3D-плагинах или в
            настройке размытия в движении. Чем больше семплов, тем лучше картинка, но хуже
            производительность.
          </li>
          <li>
            <mark className="word">Мультифрейм рендер</mark> или{" "}
            <mark className="word">MFR</mark> - относительно свежая функция{" "}
            <mark className="ui">Multi Frame Render</mark>, добавленная в{" "}
            <mark className="app">Adobe After Effects 2022</mark>, призванная ускорить
            время рендера за счёт рендера несколько кадров одновременно. Для раскрытия
            потенциала этой функции требуется многоядерный процессор.
          </li>
        </ul>
        <Divider>Производственные термины</Divider>
        <ul>
          <li>
            <mark className="word">Ватермарк</mark>, <mark className="word">вотерка</mark>{" "}
            или <mark className="word">водяной знак</mark> - некая защита от копирования
            недобросовестными заказчиками. Чаще всего лепится полупрозрачным текстовым
            слоем с ником или именем исполнителя.
          </li>
          <li>
            <mark className="word">Сейвзона</mark> или{" "}
            <mark className="word">безопасная зона</mark> - накладываемые рамки внутри
            кадра, которые помогают пользователю размещать ключевые элементы так, чтобы
            они гарантированно были видны на большинстве экранов, независимо от их типа
            или настроек. Раньше такие зоны использовались на телевидении, когда края
            изобрежния могли обрезаться за рамкой экрана. Безопасные зоны сейчас стали
            использоваться для создания контента в социальных сетях, например для{" "}
            <mark className="video">Reels</mark>, <mark className="video">Shorts</mark> и
            прочих вертикальных видео, так как интерфейс социальной сети может перекрывать
            контент на вашей композиции. Размещение важной информации с учетом безопасных
            зон помогает избежать таких накладок.
            <AdditionInfo>
              Чтобы включить отображение безопасных зон - нажмите на иконку{" "}
              <mark className="ui">Choose grid and guide options</mark> в окне
              предпросмотра и выберите <mark className="ui">Title / Action Safe</mark> или
              нажмите по этой иконке с зажатым <mark className="key">Alt</mark>.
              <ImageFigure
                caption="Composition"
                imgSrc="images/aftereffects/enable_action_safe.png"
                imgTitle="Включение безопасных зон в предпросмотре"
                styleClass="figure_windows-dark"
              />
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Говорящая голова</mark> - формат видео в котором, как
            правило, присутствует только диктор, снятый крупным планом.
          </li>
          <li>
            <mark className="word">Грейд</mark> - цветокоррекция. Часто делится на
            базовый, где <mark className="word">шоты</mark> выравниваются по яркости и
            цвету или применяют на них <mark className="file">Input LUT</mark> для
            интерпретации <mark className="word">футажа</mark>, и финальный, где стилизуют
            или вносят более точечные правки по цвету.
          </li>
          <li>
            <mark className="word">Глич</mark> или <mark className="word">глитч</mark> - в
            переводе от визуальный эффект, имитирующий цифровой сбой или артефакт. Часто
            используется для стилизации под &quot;хакерское&quot; видео или просто чтобы
            выглядело дерзко.
          </li>
          <li>
            <mark className="word">Ванфреймовый эффект</mark> - эффект, который часто
            применяется всего лишь на один кадр с помощью{" "}
            <mark className="word">Adjustment Layer</mark>. Употребляется в контексте
            применения <mark className="word">глитчей</mark> или яркостных эффектов на
            вашу композицию.
          </li>
          <li>
            <mark className="word">Плашка</mark> - графический элемент, поверх которого
            размещают текст. Например, имя спикера или заголовок темы.
          </li>
          <li>
            <mark className="word">Рыба</mark> - временный черновой ролик с примерным
            монтажом, без финальной цветокоррекции, звука и эффектов. Делается для оценки
            темпа, ритма и общей структуры. Иногда <mark className="word">рыбу</mark>{" "}
            показывают клиенту, но лучше не рисковать.
          </li>
          <li>
            <mark className="word">Шот</mark> или <mark className="word">футаж</mark> -
            отдельный фрагмент видео или сцены.
          </li>
          <li>
            <mark className="word">Референс</mark> или <mark className="word">реф</mark> -
            синоним к словам <mark className="word">пример</mark> и{" "}
            <mark className="word">образец</mark>. Используется для иллюстрации анимации,
            вдохновения или согласования своего видения с заказчиком.
          </li>
          <li>
            <mark className="word">Шаблон</mark> - заготовка проекта или пресета, которая
            помогает сократить время на создание композиций и может служить отправной
            точкой для вдохновения. Некоторые шаблоны могут быть слишком требовательны к
            ресурсам вашего устройства, поэтому иногда проще сделать{" "}
            <mark className="word">самоделку</mark>.{" "}
            <mark className="word">Самоделка</mark> - это шаблон, созданный кем-то для
            личного пользования, который не публиковался в общий доступ.
          </li>
          <li>
            <mark className="word">Переходы</mark> или{" "}
            <mark className="word">транзишены</mark> - визуальные эффекты, используемые
            для соединения двух клипов. Они могут быть простыми, например{" "}
            <mark className="plugin">Linear Wipe</mark>, так и более сложными и
            стилизованными.
          </li>
          <li>
            <mark className="word">Туториал</mark> - обучающее видео о том, как
            пользоваться программой или как использовать определённый эффект или плагин.
            Такие видео помогают новичку ориентироваться в интерфейсе программы и иногда
            раскрывают некоторые хитрости при создании эффектов.
          </li>
          <li>
            <mark className="word">Эдиты</mark> - обычно это видео под музыку, за основу
            которого берутся кадры из фильмов, аниме или игр. Часто распространён на
            YouTube и TikTok с очень сильным разбросом по качеству изготовления таких
            видео. И иногда порой нарезку со вспышками тоже называют эдитами, что
            абсурдно.
          </li>
          <li>
            <mark className="word">Рилсы</mark> или <mark className="word">шорты</mark> -
            короткие видеоролики, публикуемые в социальных сетях{" "}
            <mark className="app">
              Instagram<sup>1</sup>
            </mark>{" "}
            и <mark className="app">YouTube</mark> соответственно. Чаще всего такие видео
            - вертикальные, с хронометражем до одной минуты, хотя бывают и исключения. Это
            формат максимально быстрой подачи: за пару секунд нужно зацепить, удержать и
            донести мысль. Вокруг этого формата регулярно возникает обсуждение цен -
            особенно, когда речь идёт о <mark className="word">рилсах за 300</mark>
            или даже меньше. Это вызывает волну негодования среди тех, кто делает такие
            ролики профессионально: дешёвка обесценивает труд, а заказчики всё чаще ждут{" "}
            <mark className="word">шедевр за копейки</mark>.
            <AdditionDanger>
              <sup>1</sup> <mark className="app">Instagram</mark> и <mark>Meta</mark>{" "}
              признаны экстремистскими организациями и запрещены на территории Российской
              Федерации.
            </AdditionDanger>
          </li>
          <li>
            <mark className="word">Перекодируй видос</mark> - призыв к процессу
            конвертации исходников в <mark className="word">монтажный кодек</mark>, чаще
            всего через <mark className="app">Adobe Media Encoder</mark> или{" "}
            <mark className="app">Shutter Encoder</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="хоткеи, горячие клавиши, шорткаты, ускорение работы"
        title="А есть список популярных комбинаций клавиш?"
      >
        <p>
          Горячие клавиши могут помочь ускорить рутинный процесс нахождения нужной функции
          программы, поэтому в этой статье в таблицах собраны популярные у многих
          пользователей комбинации.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              В таблице приведены комбинации для устройств на <mark>Windows</mark>. На{" "}
              <mark>macOS</mark> <mark className="key">Ctrl</mark> равен{" "}
              <mark className="key">Command</mark>, а <mark className="key">Alt</mark>{" "}
              равен <mark className="key">Option</mark>.
            </li>
            <li>
              Более подробный список комбинаций клавиш вы можете прочесть{" "}
              <a href="https://helpx.adobe.com/after-effects/using/keyboard-shortcuts-reference.html">
                на официальном сайте Adobe
              </a>
              , посмотреть в{" "}
              <a href="https://www.youtube.com/watch?v=i6eFTDS2rvI">видео от AEPlug</a>{" "}
              или изучить в <mark className="ui">Edit &gt; Keyboard Shortcuts</mark>.
            </li>
          </ul>
        </AdditionInfo>
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
                Создать новый проект и закрыть уже открытый
                <AdditionInfo>
                  Если открытый проект перед созданием нового не был сохранён, то
                  программа предложит сохранить изменения
                </AdditionInfo>
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
              <td>Открыть окно системное импорта файлов в ваш проект</td>
              <td>
                <mark className="key">Ctrl + I</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть окно для открытия проекта из проводника</td>
              <td>
                <mark className="key">Ctrl + O</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть <mark className="file">AEP</mark> проект, с которым вы в последний
                раз работали
              </td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + P</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть или выполнить недавно использованный скрипт формата{" "}
                <mark className="file">JSX</mark> или <mark className="file">JSXBIN</mark>
              </td>
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
              <td>Сохранить файл отдельным файлом</td>
              <td>
                <mark className="key">Ctrl + Shift + S</mark>
              </td>
            </tr>
            <tr>
              <td>
                Сохранить проект с тем же названием с добавлением числа по иерархии.
                <AdditionInfo>
                  Если вы 25 раз выполните эту комбинацию клавиш, то у вас создадутся 25
                  файлов с разными числами по возрастанию в папке, где был изначально
                  создан проект
                </AdditionInfo>
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
              <td>Инструмент выделения объектов</td>
              <td>
                <mark className="key">V</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент руки
                <AdditionInfo>
                  Если зажать <mark className="key">Space</mark>, то у вас временно
                  активируется инструмент руки, пока вы не отпустите клавишу
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">H</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент пера
                <AdditionInfo>
                  <ul>
                    <li>
                      Если выделен не шейповый слой, то инструмент будет рисовать маску
                    </li>
                    <li>
                      Если выделен шейповый слой - будет рисовать фигуру, изменить
                      поведение на рисование маски можно в верхней панели
                    </li>
                  </ul>
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">G</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент создания и редактирования текста
                <AdditionInfo>
                  Многократное нажатие на <mark className="key">Ctrl + T</mark> программа
                  будет переключать инструмент между горизонтальным или вертикальным
                  правописанием текста
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Ctrl + T</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент для выбора положения якорной точки</td>
              <td>
                <mark className="key">Y</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент для создания фигуры и масок
                <AdditionInfo>
                  <ul>
                    <li>
                      Многократное нажатие на <mark className="key">Q</mark> программа
                      будет переключать инструмент между созданием прямоугольника,
                      прямоугольника со скругленными углами, эллипсом, многоугольником и
                      звездой
                    </li>
                    <li>
                      Если выделен не шейповый слой, то инструмент будет рисовать маску
                    </li>
                    <li>
                      Если выделен шейповый слой - будет рисовать фигуру, изменить
                      поведение на рисование маски можно в верхней панели
                    </li>
                  </ul>
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Q</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент кисти
                <AdditionInfo>
                  Многократное нажатие на <mark className="key">Ctrl + B</mark> программа
                  будет переключать инструмент между кистью, штампом или ластиком
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Ctrl + B</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент лупы
                <AdditionInfo>
                  С модификатором <mark className="key">Alt</mark> будет выполняться
                  уменьшение предпросмотра
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Z</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент поворота слоя</td>
              <td>
                <mark className="key">W</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент кисти для Rotobrush или уточнения краёв</td>
              <td>
                <mark className="key">Alt + W</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент камеры
                <AdditionInfo>
                  Многократное нажатие переключает между режимами работы с камерой
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">C</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент изменения якорной точки</td>
              <td>
                <mark className="key">Y</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент <mark className="ui">Puppet Tool</mark>
                <AdditionInfo>
                  Многократное нажатие на <mark className="key">Ctrl + P</mark> программа
                  будет переключаться между инструментами{" "}
                  <mark className="ui">Puppet Tool</mark>
                </AdditionInfo>
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
              <td>Раскрыть добавленные эффекты у выделенного слоя</td>
              <td>
                <mark className="key">E</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть параметры у выделенного слоя с применёнными выражениями</td>
              <td>
                Дважды <mark className="key">E</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть параметр громкости у выделенного слоя с аудиодорожкой</td>
              <td>
                <mark className="key">L</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть звуковую волну у выделенного слоя с аудиодорожкой</td>
              <td>
                Дважды <mark className="key">L</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть положение якорной точки у выделенного слоя</td>
              <td>
                <mark className="key">A</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть список масок у выделенного слоя, если они созданы</td>
              <td>
                <mark className="key">M</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть положение объекта у выделенного слоя</td>
              <td>
                <mark className="key">P</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть поворот объекта у выделенного слоя</td>
              <td>
                <mark className="key">R</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть масштаб объекта у выделенного слоя</td>
              <td>
                <mark className="key">S</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть процент прозрачности у выделенного слоя</td>
              <td>
                <mark className="key">T</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть аттрибуты с ключевыми кадрами у выделенного слоя</td>
              <td>
                <mark className="key">U</mark>
              </td>
            </tr>
            <tr>
              <td>
                Раскрыть изменённые аттрибуты эффектов без анимации и аттрибуты с
                ключевыми кадрами у выделенного слоя
              </td>
              <td>
                Дважды <mark className="key">U</mark>
              </td>
            </tr>
            <tr>
              <td>
                Раскрыть нужное свойство, не скрывая предыдущее
                <AdditionInfo>
                  Например, нажав на <mark className="key">S</mark>,{" "}
                  <mark className="key">Shift + P</mark> и{" "}
                  <mark className="key">Shift + R</mark> на выделенном слое, то у вас
                  отобразится одновременно свойство масштаба, положения и поворота. Это
                  будет работать если хотя бы одно свойство будет открыто
                </AdditionInfo>
              </td>
              <td>
                Модификатор <mark className="key">Shift</mark>
              </td>
            </tr>
            <tr>
              <td>
                Добавление ключевого кадра для нужного свойства
                <AdditionInfo>
                  Например, нажав на <mark className="key">Alt + Shift + P</mark> вы
                  добавите ключевой кадр для аттрибута положения
                </AdditionInfo>
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
              <td>Убрать выделение у ключевых кадров и их параметров, но не у слоя</td>
              <td>
                <mark className="key">Shift + F2</mark> или{" "}
                <mark className="key">Ctrl + Alt + Shift + A</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть <mark className="ui">Graph Editor</mark> для редактирования
                графиков скорости
              </td>
              <td>
                <mark className="key">Shift + F3</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед к ближайшему ключевому кадру слева</td>
              <td>
                <mark className="key">J</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед к ближайшему ключевому кадру справа</td>
              <td>
                <mark className="key">K</mark>
              </td>
            </tr>
            <tr>
              <td>
                Задать выделенным ключевым кадрам интерполяцию вида{" "}
                <mark className="word">Easy Ease</mark>
              </td>
              <td>
                <mark className="key">F9</mark>
              </td>
            </tr>
            <tr>
              <td>
                Задать выделенным ключевым кадрам интерполяцию вида{" "}
                <mark className="word">Easy Ease In</mark>
              </td>
              <td>
                <mark className="key">Shift + F9</mark>
              </td>
            </tr>
            <tr>
              <td>
                Задать выделенным ключевым кадрам интерполяцию вида{" "}
                <mark className="word">Easy Ease Out</mark>
              </td>
              <td>
                <mark className="key">Ctrl + Shift + F9</mark>
              </td>
            </tr>
            <tr>
              <td>
                Задать выделенным ключевым кадрам интерполяцию вида{" "}
                <mark className="word">Hold</mark>
              </td>
              <td>
                <mark className="key">Ctrl + Alt + H</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить выделенные ключевые кадры на один кадр левее</td>
              <td>
                <mark className="key">Alt + стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить выделенные ключевые кадры на один кадр правее</td>
              <td>
                <mark className="key">Alt + стрелка вправо</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить выделенные ключевые кадры на десять кадров левее</td>
              <td>
                <mark className="key">Alt + Shift + стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить выделенные ключевые кадры на десять кадров правее</td>
              <td>
                <mark className="key">Alt + Shift + стрелка вправо</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть диалог <mark className="ui">Keyframe Interpolation</mark> для
                изменения интерполяции выделенных ключевых кадров
              </td>
              <td>
                <mark className="key">Ctrl + Alt + K</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть диалог <mark className="ui">Keyframe Velocity</mark> для изменения
                скорости выделенных ключевых кадров
              </td>
              <td>
                <mark className="key">Ctrl + Shift + K</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Работа с слоями на таймлайне</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Перенести плейхед к началу выделенного слоя</td>
              <td>
                <mark className="key">I</mark>
              </td>
            </tr>
            <tr>
              <td>Перенести плейхед к концу выделенного слоя</td>
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
              <td>Убрать выделение со всех слоёв</td>
              <td>
                <mark className="key">Ctrl + Shift + A</mark> или{" "}
                <mark className="key">F2</mark>
              </td>
            </tr>
            <tr>
              <td>Создать прекомпозицию из выделенных слоёв</td>
              <td>
                <mark className="key">Ctrl + Shift + C</mark>
              </td>
            </tr>
            <tr>
              <td>Создать дубликат слоя или ссылку на композицию</td>
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
              <td>
                Применить недавно использованный пресет формата{" "}
                <mark className="file">FFX</mark> на выделенный слой
              </td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + F</mark>
              </td>
            </tr>
            <tr>
              <td>
                Разделить выделенный слой на две части, выделение останется у правой части
                слоя, которая пойдёт по иерархии наверх
              </td>
              <td>
                <mark className="key">Ctrl + Shift + D</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть или скрыть панель <mark className="ui">Effect Controls</mark> для
                выделенного слоя
              </td>
              <td>
                <mark className="key">Ctrl + Shift + T</mark> или{" "}
                <mark className="key">F3</mark>
              </td>
            </tr>
            <tr>
              <td>Расположить слой в центр композиции</td>
              <td>
                <mark className="key">Ctrl + Home</mark>
              </td>
            </tr>
            <tr>
              <td>Установить якорную точку по центру слоя</td>
              <td>
                <mark className="key">Ctrl + Alt + Home</mark>
              </td>
            </tr>
            <tr>
              <td>Растянуть слой и подогнать его положение по под высоту композиции</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + G</mark>
              </td>
            </tr>
            <tr>
              <td>Растянуть слой и подогнать его положение по под ширину композиции</td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + H</mark>
              </td>
            </tr>
            <tr>
              <td>
                Включить <mark className="ui">Time-Remap</mark> у выделенного слоя
              </td>
              <td>
                <mark className="key">Ctrl + Alt + T</mark>
              </td>
            </tr>
            <tr>
              <td>
                Выполнить команду <mark className="ui">Time-Reverse Layer</mark> для
                выделенного слоя
              </td>
              <td>
                <mark className="key">Ctrl + Alt + R</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть настройки выделенного слоя для изменения некоторых параметров.
                Работает для <mark className="ui">Null Object</mark>,{" "}
                <mark className="ui">Light Layer</mark>,{" "}
                <mark className="ui">Solid Layer</mark> и{" "}
                <mark className="ui">Adjustment Layer</mark>
              </td>
              <td>
                <mark className="key">Ctrl + Shift + Y</mark>
              </td>
            </tr>
            <tr>
              <td>Передвинуть слой к плейхеду справа</td>
              <td>
                <mark className="key">[</mark>
              </td>
            </tr>
            <tr>
              <td>Передвинуть слой к плейхеду слева</td>
              <td>
                <mark className="key">]</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 1 кадр назад</td>
              <td>
                <mark className="key">Alt + PgUp</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 10 кадров назад</td>
              <td>
                <mark className="key">Alt + Shift + PgUp</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 1 кадр вперёд</td>
              <td>
                <mark className="key">Alt + PgDown</mark>
              </td>
            </tr>
            <tr>
              <td>Сдвинуть слой на 10 кадров вперёд</td>
              <td>
                <mark className="key">Alt + Shift + PgDown</mark>
              </td>
            </tr>
            <tr>
              <td>Обрезать или продлить слой от плейхеда</td>
              <td>
                <mark className="key">Alt + [</mark>
              </td>
            </tr>
            <tr>
              <td>Обрезать или продлить слой до плейхеда</td>
              <td>
                <mark className="key">Alt + ]</mark>
              </td>
            </tr>
            <tr>
              <td>Опустить слой ниже по иерархии на таймлайне</td>
              <td>
                <mark className="key">Ctrl + [</mark>
              </td>
            </tr>
            <tr>
              <td>Поднять слой выше по иерархии на таймлайне</td>
              <td>
                <mark className="key">Ctrl + ]</mark>
              </td>
            </tr>
            <tr>
              <td>Изменить режим наложения слоя</td>
              <td>
                <mark className="key">Shift и +</mark> или{" "}
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
              <td>Создать Solid Layer</td>
              <td>
                <mark className="key">Ctrl + Y</mark>
              </td>
            </tr>
            <tr>
              <td>Создать Adjustment Layer</td>
              <td>
                <mark className="key">Ctrl + Alt + Y</mark>
              </td>
            </tr>
            <tr>
              <td>Создать Null Object</td>
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
              <td>Установить начало рабочей области для предпросмотра</td>
              <td>
                <mark className="key">B</mark>
              </td>
            </tr>
            <tr>
              <td>Установить конец рабочей области для предпросмотра</td>
              <td>
                <mark className="key">N</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед к началу рабочей области</td>
              <td>
                <mark className="key">Shift + Home</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед к концу рабочей области</td>
              <td>
                <mark className="key">Shift + End</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед к началу композиции</td>
              <td>
                <mark className="key">Home</mark> или{" "}
                <mark className="key">Ctrl + Alt + стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед к концу композиции</td>
              <td>
                <mark className="key">End</mark> или{" "}
                <mark className="key">Ctrl + Alt + стрелка вправо</mark>
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
                <mark className="key">Shift + PgUp</mark> или{" "}
                <mark className="key">Ctrl + Shift + стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на 10 кадров вперёд</td>
              <td>
                <mark className="key">Shift + PgDown</mark> или{" "}
                <mark className="key">Ctrl + Shift + стрелка вправо</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть настройки композиции</td>
              <td>
                <mark className="key">Ctrl + K</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Project Settings</mark>
              </td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + K</mark>
              </td>
            </tr>
            <tr>
              <td>Включить отображение линейки</td>
              <td>
                <mark className="key">Ctrl + R</mark>
              </td>
            </tr>
            <tr>
              <td>Обрезать композицию до начала и конца рабочей области</td>
              <td>
                <mark className="key">Ctrl + Shift + X</mark>
              </td>
            </tr>
            <tr>
              <td>Увеличить или уменьшить размер таймлайна</td>
              <td>
                <mark className="key"> + </mark> или <mark className="key">-</mark>
              </td>
            </tr>
            <tr>
              <td>Поставить маркер на таймлайне в месте, где стоит временная метка</td>
              <td>
                <mark className="key">* (на Numpad)</mark>
                <AdditionInfo>
                  Если у вас клавиатура без цифрового блока справа, то вы можете
                  переназначить эту клавишу на любую другую в{" "}
                  <mark className="ui">Edit &gt; Keyboard Shortcuts</mark>
                </AdditionInfo>
              </td>
            </tr>
            <tr>
              <td>Перейти на предыдущий кадр</td>
              <td>
                <mark className="key">Page Up</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на следующий кадр</td>
              <td>
                <mark className="key">Page Down</mark>
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
                Отображение границы и выделение слоёв, контролёров и путей движения
                объектов
                <AdditionInfo>
                  Убрать или добавить отображение определённых типов слоёв можно в View
                  Options, которое можно вызвать с помощью{" "}
                  <mark className="key">Ctrl + Alt + U</mark>. Следы от движения объектов
                  можно сократить или удлинить в{" "}
                  <mark className="ui">Edit &gt; Preferences &gt; Display</mark>
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Ctrl + Shift + H</mark>
              </td>
            </tr>
            <tr>
              <td>
                Включить отображение сетки
                <AdditionInfo>
                  Цвет и размер сетки можно настроить в{" "}
                  <mark className="ui">Edit &gt; Preferences &gt; Grid & Guides</mark>
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Ctrl + &apos;</mark>
              </td>
            </tr>
            <tr>
              <td>Включить отображение направляющих</td>
              <td>
                <mark className="key">Ctrl + ;</mark>
              </td>
            </tr>
            <tr>
              <td>Включить привязку объектов к направляющим</td>
              <td>
                <mark className="key">Ctrl + Shift + ;</mark>
              </td>
            </tr>
            <tr>
              <td>Включить отображение сетки безопасных зон для телевидения</td>
              <td>
                <mark className="key">&apos;</mark>
              </td>
            </tr>
            <tr>
              <td>Увеличение или уменьшение масштаба предпросмотра</td>
              <td>
                <mark className="key">,</mark> и <mark className="key">.</mark>
              </td>
            </tr>
            <tr>
              <td>
                Начать воспроизведение предпросмотра
                <AdditionInfo>
                  При установленных параметрах{" "}
                  <mark className="ui">Cache Before Playback</mark> и{" "}
                  <mark className="ui">If Caching, play cached frames</mark> в окне{" "}
                  <mark className="ui">Preview</mark> после нажатия на{" "}
                  <mark className="key">Пробел</mark> начнётся кэширование предпросмотра
                  композиции. Чтобы его прервать и начать воспроизведение предпросмотра
                  принудительно, нажмите на <mark className="key">Пробел</mark> ещё раз
                </AdditionInfo>
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
              <td>Открыть окно настроек программы</td>
              <td>
                <mark className="key">Ctrl + Alt + ;</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть окно настроек комбинаций клавиш</td>
              <td>
                <mark className="key">Ctrl + Alt + &apos;</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть окно для перемещения плейхеда к нужному отрезку времени</td>
              <td>
                <mark className="key">Alt + Shift + J</mark>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
      <DetailsSummary
        tag="рекомендация, топ, твикстор, рсмб, мбл, борисфх, трапкод, флоу, тру комп дупликатор, юниверс, mbl"
        title="Какие плагины стоит установить в первую очередь?"
      >
        <p>
          <mark className="plugin">Плагины</mark> - это компонент формата{" "}
          <mark className="file">AEX</mark> или <mark className="file">PLUGIN</mark> в
          зависимости от операционной системы, который подсоединяется к{" "}
          <mark className="app">Adobe After Effects</mark>. Нередко к ним ошибочно относят
          файлы расширений <mark className="file">ZXP</mark>, а также скрипты форматов{" "}
          <mark className="file">JSX</mark> и <mark className="file">JSXBIN</mark>,
          которые также будут разобраны в этой статье.
        </p>
        <AdditionWarning>
          <ul>
            <li>
              Пожалуйста, не надо скачивать и устанавливать в{" "}
              <mark className="app">Adobe After Effects</mark> все плагины мира подряд,
              так как это может привести к снижению производительности программы. Прежде
              чем устанавливать тот или иной инструмент - подумайте, точно ли он вам нужен
              будет в дальнейшем?
            </li>
            <li>
              Рекомендации автора по списку сторонних плагинов может не совпадать с вашим
              мнением.
            </li>
          </ul>
        </AdditionWarning>
        <AdditionInfo>
          Большинство плагинов из статьи вы можете найти в каналах{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a>{" "}
        </AdditionInfo>
        <Divider>Для совместимости с чужими проектами</Divider>
        <ul>
          <li>
            <mark className="plugin">Boris FX Sapphire</mark> и{" "}
            <mark className="plugin">Boris FX Continuum</mark> - пакет популярных эффектов
            от <mark>Boris FX</mark>, которые дополняют ассортимент к скудному набору в
            стандартной поставке <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            <mark className="plugin">Boris FX Mocha Pro</mark> - расширенная версия
            стандартного плагина <mark className="plugin">Mocha AE</mark> без всяких
            ограничений.
          </li>
          <li>
            <mark className="plugin">
              Magic Bullet Suite (включает в себя Looks, который полюбился многим)
            </mark>
            , <mark className="plugin">Trapcode Suite</mark>,{" "}
            <mark className="plugin">VFX Suite</mark> и{" "}
            <mark className="plugin">Universe</mark> - сборник плагинов от{" "}
            <mark className="plugin">Red Giant</mark> для цветокоррекции и создания
            различных эффектов. Из отличных инструментов в этих пакетах могу выделить{" "}
            <mark className="plugin">Primatte Keyer</mark> и{" "}
            <mark className="plugin">Supercomp</mark> для решения повседневных задач по
            композингу, а также <mark className="plugin">Trapcode Particular</mark> для
            создания частиц в трёхмерном пространстве и{" "}
            <mark className="plugin">Trapcode Sound Keys</mark> для создания ключевых
            кадров на основе аудио.
          </li>
          <li>
            <mark className="plugin">Element 3D от VideoCopilot</mark>, использующийся для
            импорта трёхмерных моделей форматов <mark className="file">OBJ</mark>,{" "}
            <mark className="file">
              C4D<sup>1</sup>
            </mark>{" "}
            и <mark className="file">E3D</mark>. Несмотря на то, что существует{" "}
            <mark className="plugin">Advanced 3D</mark> - данный плагин всё ещё
            используется в старых и новых проектах.
            <AdditionWarning>
              <sup>1</sup> Для корректного импорта моделей формата{" "}
              <mark className="file">C4D</mark> требуется установленная полноценная версия{" "}
              <mark className="app">Maxon Cinema 4D</mark>, если модуль{" "}
              <mark className="plugin">Cineware</mark> был вырезан из вашей сборки{" "}
              <mark className="app">Adobe After Effects</mark>.
            </AdditionWarning>
          </li>
          <li>
            <mark className="plugin">Twixtor</mark> и <mark className="plugin">RSMB</mark>{" "}
            - плагины от <mark className="plugin">RE:Vision</mark> для плавного замедления
            и интерполяции соседних кадров слоя.
          </li>
          <li>
            <mark className="plugin">Deep Glow</mark> - создаёт красивое свечение, но
            может сильно замедлить скорость экспорта композиции. Если производительность
            проекта вам очень важна - замените его на более простые решения.
            <AdditionWarning>
              Первая и вторая версия <mark className="plugin">Deep Glow</mark> не имеет
              обратную совместимость в проектах. Если вы не хотите держать две версии
              плагина - перенесите значения старой версии эффекта в новую.
            </AdditionWarning>
          </li>
          <li>
            <mark className="plugin">Saber от VideoCopilot</mark> - бесплатный плагин для
            создания неоновой обводки.
          </li>
          <li>
            <mark className="plugin">loopFlow</mark> - оживляет неподвижные изображения
            текущей воды, клубящегося дыма, летящих частиц или огня с помощью двух масок.
          </li>
          <li>
            <mark className="plugin">AutoFill</mark> - плагин для создания эффекта
            проявления объекта.
            <AdditionWarning>
              Первая и вторая версия <mark className="plugin">AutoFill</mark> не имеет
              обратную совместимость в проектах. Если вы не хотите держать две версии
              плагина - перенесите значения старой версии эффекта в новую.
            </AdditionWarning>
          </li>
          <li>
            <mark className="plugin">Twitch от VideoCopilot</mark> - устаревший плагин для
            создания эффекта тряски, в прошлом был очень популярен в композициях у{" "}
            <mark className="word">эдиторов</mark>.
            <AdditionWarning>
              Автор статьи не рекомендует использовать данный эффект в новых проектах, так
              как он устарел и не поддерживает мультикадровый рендер. В качестве его
              замены лучше всего подходит <mark className="plugin">S_Shake</mark> из
              пакета <mark className="plugin">BorisFX Sapphire</mark> со значением{" "}
              <mark className="ui">Twitchy</mark> в параметре{" "}
              <mark className="ui">Style</mark>.
            </AdditionWarning>
          </li>
          <li>
            <mark className="plugin">Displacer Pro</mark> - бесплатный плагин для создания
            искажений и переходов, дополняет функционал стандартного{" "}
            <mark className="plugin">Displacement Map</mark>.
          </li>
          <li>
            <mark className="plugin">Pixel Sorter 2 / 3</mark> - плагин для создания
            эффектов перемешивания пикселей и различных искажений.
          </li>
          <li>
            <mark className="plugin">Mettle Flux</mark>,{" "}
            <mark className="plugin">Mettle FreeForm Pro</mark> и{" "}
            <mark className="plugin">Mettle Mantra</mark> - инструменты для создания
            красивых фрактальных волн, искажений слоёв и работы с композициями в формате
            360 градусов.
          </li>
          <li>
            <mark className="plugin">FXHome Ignite Pro</mark> - устаревший пакет плагинов
            для применения различных эффектов и переходов. Если данный пакет не установлен
            - некоторые пользователи могут запутаться при открытии проекта с
            использованием эффектов из этого пакета из-за того что названия похожи на
            стандартные и не всегда понятно - относится ли они к{" "}
            <mark className="plugin">Ignite Pro</mark> или нет.
          </li>
          <li>
            <mark className="plugin">omino suite</mark> - устаревшие плагины, содержит в
            себя <mark className="plugin">omino diffusion</mark> и{" "}
            <mark className="plugin">omino snake</mark> и другие, использующиеся в
            некоторых проектах для создания различных эффектов.
          </li>
          <li>
            <mark className="plugin">Crates Light Wrap</mark> - создаёт контурный свет для
            объекта за счёт размытия указанного фонового слоя в параметрах плагина.
          </li>
        </ul>
        <Divider>Полезные инструменты</Divider>
        <ul>
          <li>
            <mark className="plugin">Auto Crop 3</mark> - плагин для кадрирования
            композиции под размеры слоя или его анимации.
          </li>
          <li>
            <mark className="plugin">Flow</mark> - расширение для быстрого применения
            интерполяции ключей. Если создать свои пресеты, которыми вы часто пользуетесь
            в анимации - сможете ускорить свою рутинную работу в несколько раз.
          </li>
          <li>
            <mark className="plugin">FXConsole от VideoCopilot</mark> - всплывающая панель
            для быстрого поиска эффектов и пресетов, а также для их применения на слой.
          </li>
          <li>
            <mark className="plugin">Guides от Rendertom</mark> - добавляет больше
            возможностей для создания и работы с сетками-направляющими.
          </li>
          <li>
            <mark className="plugin">kBar</mark> - полностью настраиваемая панель для
            прикрепления различных действий на кнопки, например: применение готовых
            выражений, применение пресетов и эффектов, открытие различных меню в программе
            и многое другое.
          </li>
          <li>
            <mark className="plugin">Keystone</mark> - инструмент для манипуляций над
            ключевыми кадрами и слоями на таймлайне: растягивание, смещение, выравнивание
            и много чего другого.
          </li>
          <li>
            <mark className="plugin">Motion Tools Pro</mark> - набор инструментов для
            анимации. Полностью настраиваемый.
          </li>
          <li>
            <mark className="plugin">Newton</mark> - плагин для создания физического
            поведения 2D-объектов.
          </li>
          <li>
            <mark className="plugin">rd_compsetter</mark> - скрипт для одновременного
            изменения параметров нескольких композиций.
          </li>
          <li>
            <mark className="plugin">True Comp Duplicator</mark> - скрипт для дублирования
            композиций и вложенных прекомпозиций с нужными параметрами.
          </li>
          <li>
            <mark className="plugin">Workflower</mark> - плагин для организации слоёв на
            таймлайне, позволяет делать папки со слоями без создания предварительной
            композиции.
            <AdditionDanger>
              Не рекомендуется передавать проект с использованием этого плагина другим
              лицам, у которых не установлен этот плагин, иначе другой пользователь может
              столкнуться с неожиданными результатами.
            </AdditionDanger>
          </li>
        </ul>
        <Divider>Технические плагины</Divider>
        <ul>
          <li>
            <mark className="plugin">Autokroma Influx</mark> - плагин для импорта в проект
            неподдерживаемых форматов видео и аудио, например{" "}
            <mark className="video">WEBM</mark>, <mark className="video">MKV</mark> или{" "}
            <mark className="video">FLV</mark>.
          </li>
          <li>
            <mark className="plugin">Cyclops</mark> - позволяет экспортировать композицию
            со всеми границами слоёв, как в предпросмотре программы.
          </li>
          <li>
            <mark className="plugin">Paint Link</mark> - связывает композицию{" "}
            <mark className="app">Adobe After Effects</mark> с{" "}
            <mark className="app">Adobe Photoshop</mark> для дальнейшей обработки кадров.
          </li>
          <li>
            <mark className="plugin">Pseudo Effect Maker</mark> - инструмент для создания
            контроллеров для ваших эффектов или выражений.
          </li>
          <li>
            <mark className="plugin">Voukoder</mark> и{" "}
            <mark className="plugin">Autokroma AfterCodecs</mark> - плагины для экспорта
            композиций в <mark className="video">H.264</mark>, которые работают лучше
            стандартного <mark className="plugin">H.264</mark>. Имеют дополнительные
            настройки по качеству и скорости обработки, что из них лучше - решать вам.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="что нового, фишки, обновления, апдейты, патчноуты"
        title="Где я могу узнать о нововведениях в обновлениях программы?"
      >
        <p>
          Обычно на сайте <mark>Adobe</mark> в день выхода публичной стабильной версии
          выкладываются основные нововведения. Это сделано для того, чтобы каждый прохожий
          не спрашивал из каждого угла <mark className="quote">А что обновилось то?</mark>
          . Ещё время от времени <mark>Adobe</mark> выкладывает на сайт список выявленных
          неполадок и старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/whats-new.html">
            Что нового в After Effects последних выпусков
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки в After Effects
          </a>
        </div>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">Adobe After Effects</mark>, а также сторонние плагины,
          чтобы исключить возможные проблемы при дальнейшем использовании программы.
          Многие баги старых версий исправляются в более новых, например утечка ОЗУ или
          смещение кадра при экспорте.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="изменить язык, смена языка, установка английской версии"
        title="Почему мне с каждого угла советуют поставить английский язык программы и как это сделать без переустановки?"
      >
        <p>
          Установив английскую версию программы - вы обережёте себя от возможных ошибок с
          выражениями или кривой работы сторонних плагинов. Почему? Потому что не все
          выражения и плагины спокойно дружат с языками интерфейса, отличными от
          английского.
        </p>
        <p>
          Также в начале своего пути вам будет гораздо легче найти нужный{" "}
          <mark className="word">туториал</mark> по определённому эффекту на английском
          языке в котором будет продемонстрирована работа английской версии, потому что
          таких видео больше, чем на русском языке. Ещё вам будет легче находить различные
          эффекты в программе без использования таблицы перевода, потому что на русской
          локализации некоторые эффекты максимально нелогично переведены.
        </p>
        <AdditionDanger>
          <ul>
            <li>
              При смене языка программы программа{" "}
              <b>
                <u>сбросит</u>
              </b>{" "}
              пользовательские настройки, так как они привязаны к используемому вами
              языку. Вам надо будет заново настроить рабочие области и некоторые параметры
              программы. После смены языка сторонние плагины останутся и никуда не
              пропадут, не переживайте.
            </li>
            <li>
              После такого способа смены языка, названия стандартных пресетов и рабочих
              областей останутся на русском языке. Их можно будет переименовать вручную
              или удалить, а затем поставить поверх дистрибутив{" "}
              <mark className="app">Adobe After Effects</mark> с указанием английского
              языка в установщике. Или достаточно просто переустановить программу сразу на
              английском языке, предварительно почистив все &quot;хвосты&quot;.
            </li>
          </ul>
        </AdditionDanger>
        <ContentSwitcher
          macContent={
            <div>
              <Divider>Меняем язык с помощью консоли программы</Divider>
              <AdditionWarning>
                Данный способ изменения языка интерфейса работает только в{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark>{" "}
                или новее.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро поменять язык через консоль. Для
                этого нажмите на комбинацию клавиш{" "}
                <mark className="key">Command + F12</mark>. В открывшемся окне у заголовка
                нажимаем три полоски и переключаемся в режим{" "}
                <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                caption="Включение вида Debug Database View"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                styleClass="figure_windows-dark"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">Adobe After Effects</mark>.
              </p>
              <ImageFigure
                caption="Установка английского языка в консоли"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                styleClass="figure_windows-dark"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">Adobe After Effects</mark>.
              </AdditionInfo>
            </div>
          }
          windowsContent={
            <div>
              <Divider>Меняем язык с помощью пустого текстового документа</Divider>
              <p>
                Для быстрой смены языка программы на английский достаточно создать пустой
                текстовый документ <mark className="file">ae_force_english.txt</mark> и
                переместить его в папку документов пользователя, обычно это{" "}
                <mark className="path">%USERPROFILE%/Documents</mark>. В сам текстовый
                файл ничего писать не нужно. После того, как вы поместили текстовый файл в
                нужное место - перезапустите{" "}
                <mark className="app">Adobe After Effects</mark>, если он у вас был
                запущен. Теперь программа должна запустится на английском языке и ошибка в
                проекте должна пропасть.
              </p>
              <AdditionInfo>
                Чтобы быстро открыть папку документов текущего пользователя в{" "}
                <mark className="app">Проводнике</mark> - откройте окно{" "}
                <mark className="app">Выполнить</mark> с помощью комбинации клавиш{" "}
                <mark className="key">Win + R</mark> и введите в него{" "}
                <mark className="path">%USERPROFILE%/Documents</mark>, а затем нажмите на{" "}
                <mark className="key">Enter</mark>.
              </AdditionInfo>
              <p>
                Если вам лень создавать и вручную перемещать файл, то можно создать пустой
                текстовый документ сразу в нужном месте с помощью команды ниже в{" "}
                <mark className="app">командной строке Windows</mark>.
              </p>
              <code>
                echo.{">"}&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
              </code>
              <AdditionWarning>
                Через <mark className="app">PowerShell</mark> эта команда не будет
                работать, используйте <mark className="app">cmd</mark>.
              </AdditionWarning>
              <Divider>Меняем язык с помощью консоли программы</Divider>
              <AdditionWarning>
                Данный способ изменения языка интерфейса работает только в{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark>{" "}
                или новее.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро поменять язык через консоль. Для
                этого нажмите на комбинацию клавиш <mark className="key">Ctrl + F12</mark>
                . В открывшемся окне у заголовка нажимаем три полоски и переключаемся в
                режим <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                caption="Включение вида Debug Database View"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                styleClass="figure_windows-dark"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">Adobe After Effects</mark>.
              </p>
              <ImageFigure
                caption="Установка английского языка в консоли"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                styleClass="figure_windows-dark"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">Adobe After Effects</mark>.
              </AdditionInfo>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="очистить всю память и кэш диска"
        title="Как очистить кэш предпросмотра и зачем это надо делать?"
      >
        <p>
          Регулярная очистка кэша может помочь вам избавиться от случаев, когда в процессе
          работы над проектом появляются непонятные артефакты или нежелательные кадры в
          предпросмотре, а также может помочь решить проблему появления предупреждения{" "}
          <mark>Out of Memory</mark>. Чтобы быстро очистить кэш предпросмотра и дисковый
          кэш - перейдите в <mark className="ui">Edit &gt; Purge</mark>, нажмите на{" "}
          <mark className="ui">All Memory & Disk Cache</mark> и в открывшемся окне нажмите
          на <mark className="ui">OK</mark>. После очистки кэша - предпросмотр нужно
          закэшировать заново.
        </p>
        <ImageFigure
          caption="Очистка кэша и освобождение оперативной памяти"
          imgSrc="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          imgTitle="Очистка кэша и освобождение оперативной памяти"
          styleClass="figure_windows-light"
        />
        <AdditionInfo>
          <ul>
            <li>
              Если очистка кэша не помогает от появления <mark>Out of Memory</mark> -
              попробуйте <a href="#4.5">настроить файл подкачки</a>, если у вас устройство
              на <mark>Windows</mark>.
            </li>
            <li>
              При желании вы можете создать свою комбинацию клавиш для быстрой очистки
              оперативной памяти и дискового кэша в{" "}
              <mark className="ui">Edit &gt; Keyboard Shortcuts</mark>. По умолчанию в{" "}
              <mark className="app">Adobe After Effects</mark> предусмотрена комбинация
              только для очистки оперативной памяти -{" "}
              <mark className="key">Ctrl + Alt + / (на Numpad)</mark>.
            </li>
            <li>
              Если у вас достаточно много оперативной памяти на вашем устройстве и
              производительный процессор, который быстро обрабатывает ваши композиции, то
              вы можете отключить дисковый кэш в настройках программы. Для этого перейдите
              в <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark>{" "}
              и уберите галочку с параметра <mark className="ui">Enable Disk Cache</mark>.
              Это позволит программе меньше обращаться к дисковому накопителю и меньше
              сталкиваться с багами работы дискового кэша.
            </li>
          </ul>
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="бекап, резервное копирование, возврат, вернуть, восстановить, облачное хранилище, облако, яндекс диск, журнал файлов, бэкап, история изменений файлов, откат проекта"
        title="Чем я могу сделать резервные копии файлов и, при необходимости, возвращаться к предыдущим версиям проекта?"
      >
        <p>
          Бывают ситуации, когда после внесённых изменений клиенту результат не подходит,
          и требуется вернуться к предыдущей версии проекта. Или, например,{" "}
          <mark className="file">AEP</mark> файл неожиданно сломался и перестал корректно
          открываться, выбивая ошибку{" "}
          <mark className="ui">Bad format or not readable</mark> или{" "}
          <mark className="ui">File is damaged</mark>. Если заранее позаботиться о
          резервном копировании ваших файлов - подобных проблем можно было бы избежать,
          сэкономив время и усилия на восстановление данных. Есть два варианта создания
          резервного копирования - на облачном хранилище или локально на вашем устройстве
          или сервере.
        </p>
        <AdditionInfo>
          Если вы хотите быстро сохранить открытый проект под другим названием -
          воспользуйтесь комбинацией клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + S</mark>. Данная команда сохранит
          проект с тем же названием и добавит число в конце по возрастанию.
        </AdditionInfo>
        <Divider>Создаём резервные копии на облачном хранилище</Divider>
        <p>
          Самый простой способ организовать резервное копирование различных файлов
          проектов - воспользоваться услугами облачного хранилища и настроить
          автоматическую синхронизацию файлов на вашем компьютере с сервером. У популярных
          облачных хранилищ, например <mark>Яндекс.Диск</mark>, <mark>Google Drive</mark>{" "}
          или <mark>Dropbox</mark>, есть собственные клиенты для <mark>Windows</mark> и{" "}
          <mark>macOS</mark> для того, чтобы настроить автоматическую синхронизацию
          указанных вами папок.
        </p>
        <p>
          Также у многих популярных облачных хранилищ есть функция восстановления файлов
          при их изменении на сервере или случайном удалении на вашем устройстве. Это
          бывает очень полезно, если вы случайно перезаписали нужный файл проекта другим
          файлом с одинаковым названием. С помощью истории файлов можно быстро выкачать
          предыдущую версию. Учтите, что у каждого сервиса свой срок хранения истории
          файлов и корзины - уточняйте это в вашем тарифном плане.
        </p>
        <div className="flexible-links">
          <a href="https://yandex.ru/support/yandex-360/customers/disk/desktop/windows/ru/version-control">
            История изменения файла в Яндекс.Диск
          </a>
          <a href="https://support.google.com/drive/answer/2409045?hl=ru&co=GENIE.Platform%3DDesktop">
            Журнал файлов в Google Drive
          </a>
          <a href="https://help.dropbox.com/ru-ru/delete-restore/version-history-overview">
            Журнал версий файлов в Dropbox
          </a>
          <a href="https://help.mega.io/ru/files-folders/restore-delete/file-version-history">
            Как управлять версиями файлов в Mega?
          </a>
          <a href="https://support.microsoft.com/ru-ru/office/%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D1%8B%D0%B4%D1%83%D1%89%D0%B5%D0%B9-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D1%85%D1%80%D0%B0%D0%BD%D1%8F%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%B2-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893">
            Восстановление предыдущей версии файла в OneDrive
          </a>
        </div>
        <Divider>
          Создаём локальные резервные копии файлов стандартными функциями операционной
          системы
        </Divider>
        <p>
          Если вам вариант с облачным хранилищем не подходит по каким-то причинам, то вы
          можете организовать свою локальную систему резервного копирования. В{" "}
          <mark>Windows</mark> и <mark>macOS</mark> есть функция локального резервного
          копирования файлов, которую необходимо включить. Обычно для работы этой функции
          требуется внешний или отдельный накопитель.
        </p>
        <ContentSwitcher
          macContent={
            <div>
              <p>
                В <mark>macOS</mark> функция бэкапа файлов называется{" "}
                <mark className="app">Time Machine</mark>, которая создаёт снапшот вашей
                системы и файлов каждый час или по нажатию кнопки создания бэкапа.
              </p>
              <AdditionWarning>
                Для работы данной функции нужен внешний накопитель, желательно с объёмом
                от <mark>512 ГБ</mark> и более.
              </AdditionWarning>
              <YouTubeVideo
                caption="How to Set up & Use Time Machine to Backup your Mac"
                link="Gx76i28c150"
              />
            </div>
          }
          windowsContent={
            <div>
              <p>
                В <mark>Windows</mark> стандартная функция бэкапа файлов называется{" "}
                <mark className="app">История файлов</mark>, которая создаёт копии файлов
                на другую директорию. С помощью него вы можете восстановить удалённый файл
                или вернуть предыдущую версию файла в свойствах файла.
              </p>
              <AdditionInfo>
                Для работы данной функции заранее укажите диск, на который вы планируете
                сохранять копии файлов в разделе <mark className="ui">Смена диска</mark>.
              </AdditionInfo>
              <YouTubeVideo
                caption="История файлов в Windows 11 и Windows 10"
                link="xDFQEx9gylc"
              />
              <p>
                В настройках этой функции можно установить интервал сохранения от{" "}
                <mark>10 минут</mark> до <mark>одного раза в день</mark>. Также можно
                задать срок хранения от <mark>одного месяца</mark> до{" "}
                <mark>двух лет</mark>, по истечении которого система автоматически удалит
                старые резервные копии из указанной директории.
              </p>
              <AdditionInfo>
                <p>
                  По умолчанию функция <mark className="app">История файлов</mark>{" "}
                  копирует только из стандартных папок{" "}
                  <mark className="path">Библиотеки</mark>,{" "}
                  <mark className="path">Рабочий стол</mark>,{" "}
                  <mark className="path">Контакты</mark> и{" "}
                  <mark className="path">Избранное</mark>. Если вам нужно установить свои
                  папки, откуда нужно копировать файлы - зайдите в параметры и создайте
                  свою библиотеку.
                </p>
                <ul>
                  <li>
                    На <mark>Windows 11</mark> - откройте проводник, выберите нужную папку
                    и нажмите на <mark className="key">ПКМ</mark>. Затем в контекстном
                    меню нажмите на <mark className="ui">Добавить в библиотеку</mark>. Вы
                    можете выбрать уже существующую библиотеку или создать новую.
                    <AdditionWarning>
                      Если у вас нет кнопки{" "}
                      <mark className="ui">Добавить в библиотеку</mark> в контекстном меню
                      - включите их отображение в параметрах папок.{" "}
                      <a href="https://remontka.pro/manage-libraries-windows/">
                        Подробнее...
                      </a>
                    </AdditionWarning>
                  </li>
                </ul>
              </AdditionInfo>
            </div>
          }
        />
        <Divider>
          Альтернативные варианты контроля версий файлов и их резервного копирования
        </Divider>
        <p>
          В качестве альтернативных вариантов контроля версий и резервного копирования вы
          можете воспользоваться <mark className="app">Git</mark>, который доступен для{" "}
          <a href="https://git-scm.com/downloads/win">Windows</a> и{" "}
          <a href="https://git-scm.com/downloads/mac">macOS</a>, или создать свой сервер с
          помощью любого устройства, будь то <mark>Raspberry Pi</mark> или старый
          компьютер. Здесь особо об этом расписывать не буду, но при всём желании - некую
          часть информации вы можете найти в интернете. Если вы решили контролировать свои
          файлы с помощью <mark className="app">Git</mark>, то советую клиенты{" "}
          <mark className="app">SourceGit</mark> или{" "}
          <mark className="app">SourceTree</mark>.
        </p>
        <YouTubeVideo
          caption="Объясняем на пальцах про Git"
          link="G4f9OH4IQE8"
        />
      </DetailsSummary>
      <DetailsSummary title="Я работал над проектом, но его ни разу не сохранял. Если программа аварийно завершила работу, возможно ли в таком случае восстановить проект?">
        <p>
          Нет, <mark className="app">Adobe After Effects</mark> не создаёт автосохранения
          или какие-нибудь файлы проекта, если изначально проект не был сохранён. В
          следующий раз перед началом работы - сразу сохраните файл проекта и периодически
          нажимайте на <mark className="key">Ctrl + S</mark> для сохранения ваших
          изменений.
        </p>
        <AdditionInfo>
          Чтобы не попасть в просак, если при работе файл проекта повредится - заранее{" "}
          <a href="#4.1">настройте бэкап файлов в облачном хранилище или локально</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="менеджер эффектов, effect may have caused to quit, if you want you can disable this effect now, to re-enable it later select manager effects from effects menu options"
        title="Программа аварийно завершила работу и предложила отключить эффект, который вызывает сбой. Я его отключил, но при последующих запусках он не возвращается обратно. Как его активировать снова?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> версии <mark>23.4</mark> и
          новее была добавлена возможность отключения эффектов, если программа
          подозревает, что именно он вызывает сбой и вылеты. Только вот при отключении
          эффекта через диалоговое окно - он будет отключен до тех пор, пока он не будет
          активирован вручную в <mark className="ui">менеджере эффектов</mark>. То есть
          при следующем запуске <mark className="app">Adobe After Effects</mark> он до сих
          пор будет отключен.
        </p>
        <Divider>Включаем отключенные эффекты</Divider>
        <p>
          Для включения отключенных эффектов - перейдите в{" "}
          <mark className="ui">менеджер эффектов</mark>. В него можно попасть двумя
          способами - из <mark className="ui">Effects Controls</mark> или из{" "}
          <mark className="ui">Effects & Presets</mark>. Для этого нужно открыть
          контекстное меню одного из этих двух окон и выбрать{" "}
          <mark className="ui">Manage Effects</mark>.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/effects_presets_manage_effects.png"
          imgTitle="Открытие менеджера эффектов"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого у вас откроется список с установленными эффектами. По умолчанию в
          этом окне отображаются только сторонние эффекты, а также отсортированы по
          &quot;включено/выключено&quot;, то есть выключенный эффект у вас должен
          отобразиться первым в списке. Чтобы его включить - нажмите на чекбокс возле
          нужного эффекта, нажмите на <mark className="ui">OK</mark> в правом нижнем углу
          окна и перезапустите <mark className="app">Adobe After Effects</mark>.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Чтобы включить отображение стандартных эффектов - уберите чекбокс у
              параметра <mark className="ui">Only Show Third-Party Effects</mark>.
            </li>
            <li>
              Также вы можете отключить или включить все эффекты в этом списке с помощью
              кнопок <mark className="ui">Disable All</mark> или{" "}
              <mark className="ui">Enable All</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <ImageFigure
          caption="Effect Manager"
          imgSrc="images/aftereffects/effect_manager.png"
          imgTitle="Менеджер эффектов"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="В каких случаях нужно использовать Adobe After Effects и Adobe Premiere Pro?">
        <p>
          Эти две программы предназначены для разных задач. В{" "}
          <mark className="app">Adobe After Effects</mark> теоретически можно смонтировать
          двухчасовой ролик, а в <mark className="app">Adobe Premiere Pro</mark> -
          заняться композитингом. Однако подобный подход нецелесообразен, хотя некоторые
          пользователи всё ещё применяют программы не по назначению. В этой статье
          разберёмся, в каких случаях стоит использовать{" "}
          <mark className="app">Adobe After Effects</mark>, а в каких -{" "}
          <mark className="app">Adobe Premiere Pro</mark>.
        </p>
        <ul>
          <li>
            Обе программы подходят для создания коротких видеороликов до одной минуты с
            применением различных эффектов, например <mark className="word">рилсов</mark>,{" "}
            <mark className="word">тиктоков</mark>, анимационных афиш, баннеров или
            коротких <mark className="word">эдитов</mark>.
          </li>
          <li>
            Хоть и в <mark className="app">Adobe Premiere Pro</mark> в теории можно
            сделать моушен-дизайн, реализация анимации в ней максимально неудобна. Проще
            создать нужную анимацию в <mark className="app">Adobe After Effects</mark>,
            экспортировать композицию и импортировать его в{" "}
            <mark className="app">Adobe Premiere Pro</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> не предназначен для создания
            длинных видеороликов, так как иначе работает с памятью и файлами по сравнению
            с <mark className="app">Adobe Premiere Pro</mark>. Даже при полной сборке
            проекта в <mark className="app">Adobe After Effects</mark> вы можете
            столкнуться с ошибками по типу <mark>Out of Memory</mark> и продолжительным
            временем рендера. Если вы хотите собрать длинный проект, подкаст, фильм или
            сериал - лучше используйте <mark className="app">Adobe Premiere Pro</mark> или
            другую программу для нелинейного монтажа, например{" "}
            <mark className="app">Davinci Resolve</mark>.
            <AdditionInfo>
              При необходимости вы можете импортировать нужный фрагмент из секвенции в{" "}
              <mark className="app">Adobe After Effects</mark> с помощью{" "}
              <mark className="ui">Replace with After Effects Composition</mark>, затем
              экспортировать его в <mark className="video">Apple Prores 4444</mark> и
              заменить исходный участок в <mark className="app">Adobe Premiere Pro</mark>.
            </AdditionInfo>
            <AdditionWarning>
              <ul>
                <li>
                  Не рекомендуется часто применять{" "}
                  <mark className="plugin">Dynamic Link</mark>, особенно в крупных
                  проектах - вы можете столкнуться с непонятными проблемами на стадии
                  финального экспорта.
                </li>
                <li>
                  {" "}
                  В <mark className="app">Adobe After Effects</mark> вы можете создавать
                  композиции до трёх часов, но делать это крайне не рекомендуется. Только
                  себе кучу проблем создадите из-за неправильного{" "}
                  <mark className="word">пайплайна</mark>.
                </li>
              </ul>
            </AdditionWarning>
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> не подходит для обработки
            аудио, несмотря на наличие аудиоэффектов, например{" "}
            <mark className="plugin">Echo</mark> или{" "}
            <mark className="plugin">Reverb</mark>. Для работы со звуком лучше
            использовать <mark className="app">Adobe Premiere Pro</mark> или{" "}
            <mark className="app">Adobe Audition</mark>, которые поддерживают
            многодорожечную обработку и <mark className="plugin">VST-плагины</mark>, а
            затем при необходимости экспортировать звук из этих программ и импортировать
            обратно в композицию <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            <mark className="app">Adobe Premiere Pro</mark> не предназначен для сложного
            композитинга и создания визуальных эффектов с нуля.{" "}
            <mark className="app">Adobe After Effects</mark> в этом случае предоставляет
            больше возможностей: поддержка трёхмерных сцен, сторонних эффектов и плагинов,
            таких как <mark className="plugin">Trapcode Particular</mark>, делает его
            более подходящим для таких задач.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="adjustment layer, camera, image sequence, light layer, null object, shape layer, solid layer, text layer, источник освещения, камера, корректирующий слой, нулевой объект, нуль, секвенция изображений, сплошная заливка, слои, слой фигура, текст"
        title="Какие виды слоёв существуют в программе, для чего они используются и как их настроить?"
      >
        <AdditionDanger>
          Данная статья находится на ранней стадии разработки. Следите за обновлениями.
          {/* TODO: исправить и дописать */}
        </AdditionDanger>
        <p>
          <mark className="word">Слой</mark> - отдельная дорожка на таймлайне, которая
          может быть определённого типа, будь то текст, видео или фигура. В{" "}
          <mark className="app">Adobe After Effects</mark>, в отличие от программ для
          нелинейного монтажа, таких как <mark className="app">Adobe Premiere Pro</mark>,
          каждый слой занимает отдельную дорожку.
        </p>
        <p>
          Порядок слоёв на таймлайне определяет их наложение - верхний слой отображается
          поверх нижнего. Если слой переведён в трёхмерном пространство, то обычно
          наложение зависит от оси Z, кроме случаев, когда эффект для трёхмерного
          пространства применён на 2D-слой, например если на{" "}
          <mark className="word">Solid Layer</mark> применён{" "}
          <mark className="plugin">Trapcode Particular</mark> или{" "}
          <mark className="plugin">Element 3D</mark>.
        </p>
        <Divider>Создаём слои</Divider>
        <p>
          Чтобы создать какой-нибудь слой - перейдите в{" "}
          <mark className="ui">Layer &gt; New</mark> или нажмите{" "}
          <mark className="key">ПКМ</mark> по пустому месту на таймлайне и выберите{" "}
          <mark className="ui">New</mark>. В выпадающем меню вы можете выбрать нужный вам
          тип слоя. Для каждого типа слоя в статье будут прилагаться при возможности
          комбинация клавиш для их создания. Также вы можете создать слой с изображением
          или видео, переместив его на таймлайн из окна{" "}
          <mark className="ui">Project</mark>, предварительно импортировав их с помощью{" "}
          <mark className="ui">File &gt; Import</mark> или комбинации клавиш{" "}
          <mark className="key">Ctrl + I</mark>.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/create_layers.png"
          imgTitle="Создание слоёв"
          styleClass="figure_windows-dark"
        />
        <Divider>Какие виды слоёв существуют?</Divider>
        <p>
          По мнению <mark>Adobe</mark> - слои делятся на несколько типов. У каждого слоя
          есть свои функции, свойства, настройки и способы применения в вашей композиции,
          а также аттрибуты, которые к ним можно применить, например{" "}
          <mark className="ui">Guide Layer</mark> или <mark className="ui">Shy</mark>. Для
          большинства свойств можно использовать <mark className="word">выражения</mark>,
          нажав на иконку <mark className="word">секундомера</mark> с зажатой клавишей{" "}
          <mark className="key">Alt</mark>.
        </p>
        <ul>
          <li>
            <mark className="word">Футажи</mark> - импортированные в проект фото, аудио,
            секвенция изображений и видео.
          </li>
          <li>
            <mark className="word">Функциональные слои</mark> - к ним относится камера,
            источник освещения и нулевые объекты.
          </li>
          <li>
            <mark className="word">Слой сплошной заливки</mark> и{" "}
            <mark className="word">корректирующий слой</mark>, на которые можно применять
            различные эффекты и генераторы. При создании таких слоёв они появляются в окне{" "}
            <mark className="ui">Project</mark> в отдельной папке{" "}
            <mark className="path">Solids</mark> как футаж.
            <AdditionInfo>
              Вы можете задать своё название папки, где будут создаваться{" "}
              <mark>Adjustment Layer</mark> и <mark>Solid Layer</mark> в настройках
              программы -{" "}
              <mark className="ui">Edit &gt; Preferences &gt; New Project</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Синтетические слои</mark>, которые содержат какой-либо
            визуальный элемент и которые не основаны на элементе исходного видеоряда. К
            таким относятся <mark className="word">текстовый слой</mark>,{" "}
            <mark className="word">камера</mark>,{" "}
            <mark className="word">источник освещения</mark> и{" "}
            <mark className="word">слой-фигура</mark>. Такие слои нельзя открыть в окне{" "}
            <mark className="ui">Layer</mark> с помощью{" "}
            <mark className="ui">Open Layer</mark> и{" "}
            <mark className="ui">Open Layer Source</mark>, но никто не запрещал их{" "}
            <mark className="word">прекомпозить</mark>.
          </li>
          <li>
            Слои <mark className="word">композиций</mark> и{" "}
            <mark className="word">прекомпозиций</mark>, которые можно расположить на
            таймлайне.
          </li>
          <li>
            Слои с <mark className="word">трёхмерными моделями</mark>, нативный импорт
            которых стал доступен с версии <mark>24.1</mark> и новее с помощью{" "}
            <mark className="plugin">Advanced 3D</mark>.
            <AdditionInfo>
              Для импорта <mark className="word">трёхмерных моделей</mark> в старых
              версиях <mark className="app">Adobe After Effects</mark> ниже{" "}
              <mark>24.0</mark> включительно - воспользуйтесь сторонними плагинами,
              например <mark className="plugin">Element 3D</mark>.
            </AdditionInfo>
          </li>
        </ul>
        <p>{/* TODO:  */}</p>
        <Divider>
          Видео, аудио, изображения, и секвенция изображений (Video, Audio, Image и Image
          Sequence)
        </Divider>
        <p>
          Слои с видео, аудио и картинками в основном относятся к категории импортируемых
          объектов, которые пользователь добавляет в проект через{" "}
          <mark className="ui">File &gt; Import</mark> или комбинации клавиш{" "}
          <mark className="key">Ctrl + I</mark>.
        </p>
        <ul>
          <li>
            <mark className="word">Видео</mark> - естественно любой футаж с видеофайлом,
            будь то <mark className="video">MP4</mark>, <mark className="video">MOV</mark>
            , <mark className="video">AVI</mark> и прочие. Такие файлы могут идти как со
            звуковой дорожкой, так и без него.
            <AdditionWarning>
              <ul>
                <li>
                  Учтите, что <mark className="app">Adobe After Effects</mark>{" "}
                  поддерживает не все кодеки и контейнеры. То есть, если вы получили файл{" "}
                  <mark className="video">MP4</mark> в кодеке{" "}
                  <mark className="video">VP9</mark> или{" "}
                  <mark className="video">MKV</mark> в{" "}
                  <mark className="video">H.264</mark> - вы его импортировать в программу
                  без танцев с бубнами не сможете. В таком случае вам нужно будет либо
                  перекодировать видео в другой кодек с помощью специального софта,
                  например <mark className="app">Shutter Encoder</mark> или{" "}
                  <mark className="app">Adobe Media Encoder</mark>, либо использовать{" "}
                  <mark className="plugin">Autokroma Influx</mark> для импорта
                  неподдерживаемых кодеков.
                </li>
                <li>
                  <mark className="app">Adobe After Effects</mark> не поддерживает работу
                  с несколькими звуковыми дорожками и будет работать с первым попавшимся
                  из видео. Для того чтобы работать с несколькими звуковыми дорожками - их
                  нужно извлечь, например через <mark className="app">Handbrake</mark> или{" "}
                  <mark className="app">MKVToolNix</mark>, а затем импортировать как
                  отдельное аудио в проект.
                </li>
              </ul>
            </AdditionWarning>
          </li>
          <li>
            <mark className="word">Изображения</mark>, которые могут быть как растровыми,
            так и векторными<sup>4</sup> - <mark className="image">JPEG</mark>,{" "}
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
            , <mark className="image">EXR</mark> и прочие.
            <AdditionWarning>
              <sup>1</sup> На устройствах с <mark>Windows 10 или 11</mark> для импорта и
              открытия таких изображений потребуется установить{" "}
              <a href="#5.9">соответствующие кодеки</a>.
            </AdditionWarning>
            <AdditionInfo>
              <ul>
                <li>
                  <sup>2</sup> Под <mark className="image">RAW</mark> подразуемвается
                  необработанное изображение, создаваемое фотоаппаратом или телефоном,
                  снятый в режиме <mark>RAW</mark>. Часто такие изображения имеют разные
                  форматы в зависимости от производителя устройства, с помощью которого
                  было создано изображение, например <mark className="image">DNG</mark>,{" "}
                  <mark className="image">CR3</mark>, <mark className="image">NEF</mark>,{" "}
                  <mark className="image">ARW</mark> или{" "}
                  <mark className="image">RAF</mark>.
                </li>
                <li>
                  При импорте таких изображений в{" "}
                  <mark className="app">Adobe After Effects</mark>, если они не были
                  предварительно обработаны в другой программе и конвертированы, может
                  открыться <mark className="plugin">Camera RAW</mark> - некий аналог{" "}
                  <mark className="app">Adobe Lightroom</mark>, который предназначен для
                  обработки сырых изображений. Старые версии{" "}
                  <mark className="plugin">Camera RAW</mark> могут не поддерживать новые
                  камеры.
                </li>
                <li>
                  Чтобы открыть <mark className="plugin">Camera RAW</mark> повторно уже
                  после импорта изображения - выделите нужное изображение в окне{" "}
                  <mark className="ui">Project</mark>, откройте окно{" "}
                  <mark className="ui">Interpret Footage</mark> с помощью комбинации
                  клавиш <mark className="key">Ctrl + Alt + G</mark> и нажмите на{" "}
                  <mark className="ui">More Options</mark>.
                </li>
                <li>
                  Так как <mark className="image">RAW</mark> изображения часто создаются в
                  довольно большом разрешении - их не очень рекомендуется их использовать
                  в своих композициях, если у вас слабое железо или хотите использовать
                  кучу эффектов. Лучше всё же обработать ваше изображение через условный{" "}
                  <mark className="app">Adobe Photoshop</mark> или{" "}
                  <mark className="app">Adobe Lightroom</mark>, конвертировать в{" "}
                  <mark className="image">TIFF</mark> с меньшим разрешением, а затем
                  работать с ним уже в <mark className="app">Adobe After Effects</mark>.
                </li>
              </ul>
            </AdditionInfo>
            <AdditionInfo>
              <ul>
                <li>
                  <sup>3</sup> Проекты из <mark className="app">Adobe Photoshop</mark> в
                  формате <mark className="image">PSD</mark> могут импортироваться в двух
                  вариантах - как обычное изображение, так и послойно.
                </li>
                <li>
                  Если <mark className="image">PSD</mark> был сохранён в цветовом режиме,
                  отличном от <mark>RGB</mark>, то послойный импорт проекта в{" "}
                  <mark className="app">Adobe After Effects</mark> будет недоступен. Чтобы
                  это исправить - нужно обратно пересохранить проект в режиме{" "}
                  <mark>RGB</mark>. <a href="#5.3">Подробнее...</a>
                </li>
              </ul>
            </AdditionInfo>
            <AdditionWarning>
              <ul>
                <li>
                  <sup>4</sup> При импорте векторных изображений стоит включить{" "}
                  <mark className="ui">Continuously Rasterize</mark>. Эта функция
                  позволяет каждый раз растрировать векторную графику при увеличении её
                  масштаба или трансформации в соответствии с разрешением композиции.
                  Учтите, что при его использовании могут возникать побочные явления,
                  например разрывы слоёв при использовании{" "}
                  <mark className="plugin">Puppet Tool</mark>.
                </li>
                <li>
                  Есть отдельная категория лиц, которая считает, что при включённом{" "}
                  <mark className="ui">Continuously Rasterize</mark> программа даст
                  пользователю возможность увеличения предпросмотра без потери качества,
                  как в <mark className="app">Adobe Illustrator</mark>. К сожалению,{" "}
                  <mark className="app">Adobe After Effects</mark> так не работает из-за
                  того что это растровый редактор графики и не может отобразить больше
                  пикселей, чем то, что указано в настройках композиции.
                </li>
              </ul>
            </AdditionWarning>
          </li>
          <li>
            <mark className="word">Секвенция изображений</mark> - стопка кадров из
            изображений поддерживаемых форматов, импортируемый как покадровое видео без
            звука. Такой тип слоя полезен для импорта покадрово отрендеренных проектов из
            какого-нибудь 3D-софта, например <mark className="app">Blender</mark> или{" "}
            <mark className="app">Cinema 4D</mark>.
            <AdditionInfo>
              <ul>
                <li>
                  Чтобы импортировать нужные вам изображения как секвенцию - откройте окно{" "}
                  <mark className="ui">Import</mark> с помощью комбинации клавиш{" "}
                  <mark className="key">Ctrl + I</mark>, выделите первый кадр в папке с
                  отрендеренными кадрами, и выберите внизу опцию{" "}
                  <mark className="ui">PNG Sequence</mark> в разделе{" "}
                  <mark className="ui">Sequence Settings</mark>, где вместо{" "}
                  <mark>PNG</mark> - ваш формат изображений.
                </li>
                <li>
                  Чтобы изменить <mark>FPS</mark> после импорта секвенции - воспользуйтесь
                  функцией <mark className="ui">Interpret Footage</mark>. Чтобы его
                  открыть - выделите нужную секвенцию в окне{" "}
                  <mark className="ui">Project</mark> и нажмите на комбинацию клавиш{" "}
                  <mark className="key">Ctrl + Alt + G</mark>. В открывшемся окне вы
                  можете изменить значение параметра{" "}
                  <mark className="ui">Frame Rate</mark> на нужное.
                </li>
                <li>
                  Для того чтобы изменить значение <mark>Frame Rate</mark> по умолчанию
                  при импорте секвенции изображений - откройте настройки программы{" "}
                  <mark className="ui">Edit &gt; Preferences &gt; Import</mark> и в
                  разделе <mark className="ui">Sequence Footage</mark> измените значение{" "}
                  <mark className="ui">Frames per second</mark>. После изменения все новые
                  импортированные секвенции будут интерпретированы в соответствии с
                  заданным вами числом кадров в секунду. Секвенции, которые были
                  импортированы до изменения этого значения не будут как-либо изменены.
                </li>
                <li>
                  Если вы хотите импортировать секвенцию с разными сценами или ракурсами -
                  лучше их разделить в отдельные папки, а затем импортировать как
                  отдельные <mark className="word">шоты</mark>.
                </li>
              </ul>
            </AdditionInfo>
            <YouTubeVideo
              caption="Импорт секвенции изображений"
              link="efHrVdCsX-4"
            />
          </li>
          <li>
            <mark className="word">Аудио</mark> - файл со звуковой дорожкой, будь то
            музыка или звуковые эффекты. Для изменения громкости используется параметр{" "}
            <mark className="ui">Audio Levels</mark>, который можно раскрыть с помощью
            клавиши <mark className="key">L</mark> по выделенному слою. Чтобы быстро
            раскрыть визуализацию звуковой волны у слоя - нажмите два раза на{" "}
            <mark className="key">L</mark>.
            <AdditionWarning>
              <ul>
                <li>
                  Некоторые форматы аудио, например <mark className="audio">OGG</mark>, не
                  поддерживаются программой. Чтобы такие файлы импортировать в ваш проект
                  - их нужно конвертировать в другой формат, например{" "}
                  <mark className="audio">WAV</mark> или{" "}
                  <mark className="audio">MP3</mark>.
                </li>
                <li>
                  <mark className="app">Adobe After Effects</mark> не предназначен для
                  работы со звуком, возможности здесь ограничены лишь измененеим громкости
                  и применением нескольких стандартных фильтров, например{" "}
                  <mark className="plugin">Bass & Treble</mark>. Если нужно использовать
                  что-то посерьёзнее - например, <mark>VST-плагины</mark> вроде{" "}
                  <mark className="plugin">iZotope RX</mark> для шумоподавления,
                  реставрации или пространственной обработки - лучше перейдите в другой
                  софт, например <mark className="app">Adobe Audition</mark> или{" "}
                  <mark className="app">Adobe Premiere Pro</mark>.
                </li>
              </ul>
            </AdditionWarning>
          </li>
        </ul>
        <Divider>Композиция (Composition)</Divider>
        <p>
          <mark className="word">Композиция</mark> - это ваш рабочий холст для слоёв, а
          также своего рода контейнер, в котором вы можете расположить свои слои. Каждая
          композиция имеет собственный таймлайн. Чтобы создать новую пустую композицию -
          нажмите на комбинацию клавиш <mark className="key">Ctrl + N</mark>.
        </p>
        <p>
          Для того чтобы изменить настройки открытой композиции на таймлайне - нажмите на
          комбинацию клавиш <mark className="key">Ctrl + K</mark> или перейдите в{" "}
          <mark className="ui">Composition &gt; Composition Settings</mark>. Также
          изменить настройки композиции вы можете и в окне{" "}
          <mark className="ui">Project</mark> - для этого выделите нужную композицию,
          нажмите <mark className="key">ПКМ</mark> по ней и выберите{" "}
          <mark className="ui">Composition Settings</mark>.
        </p>
        <p>
          При открытии настроек композиции нас встречает вкладка{" "}
          <mark className="ui">Basic</mark>. В нём можно задать имя композиции, настроить
          его размер - ширину и высоту в пикселях, а также зафиксировать соотношение
          сторон<sup>1</sup>. Ещё можно настроить частоту кадров<sup>2</sup>, соотношение
          квадратного пикселя<sup>3</sup>, стартовый таймкод<sup>4</sup>,
          продолжительность<sup>5</sup>, разрешение<sup>6</sup> и фон композиции
          <sup>7</sup>.
        </p>
        <ImageFigure
          caption="Composition Settings"
          imgSrc="images/aftereffects/composition_settings_basic.png"
          imgTitle="Вкладка Basic в настройках композиции"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Учтите, что для экспорта не все кодеки поддерживают нечётное количество пикселей
          в размере той композиции, которую вы хотите экспортировать.
        </AdditionWarning>
        <AdditionInfo>
          <ul>
            <li>
              <sup>1</sup> При включенном <mark className="ui">Lock Aspect Ratio</mark> -
              изменение одной стороны будет автоматически менять и вторую в соответствии с
              соотношением сторон.
            </li>
            <li>
              <sup>2</sup> Настройка <mark className="ui">Drop Frame</mark> и{" "}
              <mark className="ui">Non-Drop Frame</mark> доступна только при некоторых
              значениях частоты кадров с плавающим значением, например <mark>29,97</mark>{" "}
              или <mark>59,94</mark>.
              <ul>
                <li>
                  <mark className="ui">Drop Frame</mark> - это способ нумерации, при
                  котором иногда пропускаются номера кадров, но сами кадры при этом не
                  теряются. Это делается для того, чтобы таймкод точно совпадал с реальным
                  временем. Потому что, например, <mark>29,97</mark> кадров в секунду -
                  это не ровно <mark>30</mark>, и со временем смещение копится. Чтобы
                  избежать расхождений, через определённые интервалы пропускают несколько
                  номеров кадров в счётчике - включают пропуск кадров.
                </li>
                <li>
                  <mark className="ui">Non-Drop Frame</mark> - нумерация кадров идёт без
                  пропусков. В таком случае со временем таймкод может расходиться с
                  реальным временем видео.
                </li>
              </ul>
            </li>
            <li>
              <sup>3</sup> <mark className="ui">Pixel Aspect Ratio</mark> отвечает за
              соотношение сторон пикселя. В большинстве современных видео пиксели
              квадратные - их ширина равна высоте, и изменение соотношения сейчас редко
              где встречается. Однако в некоторых форматах видео, например{" "}
              <mark className="video">DV PAL</mark>, пиксели прямоугольные, то есть ширина
              и высота не равны.
              {/* TODO: пересмотреть и добавить про предпросмотр с коррекцией */}
            </li>
            <li>
              <sup>4</sup> При создании прекомпозиции, если включить{" "}
              <mark className="ui">
                Adjust composition duration to the time span of the selected layers
              </mark>{" "}
              - новая композиция начнёт отсчёт с момента появления самого раннего слоя и
              обрежет ненужную длину, которая не попала в диапазон длительности выделенных
              слоёв. Например, если вы выделили три слоя: первый начинается на второй
              секунде, второй - на четвертой, а третий заканчивается на седьмой, то новая
              прекомпозиция будет иметь длину ровно 5 секунд и начнётся не с{" "}
              <mark>00:00:00:00</mark>, а с <mark>00:00:02:00</mark>, то есть с момента
              появления самого раннего слоя в родительской композиции.
            </li>
            <li>
              <sup>5</sup> По умолчанию в <mark className="app">Adobe After Effects</mark>{" "}
              продолжительность выражается в формате <mark>ЧЧ:ММ:СС:КК</mark>, где{" "}
              <mark>Ч</mark> - часы, <mark>М</mark> - минуты, <mark>С</mark> - секунды,{" "}
              <mark>К</mark> - кадры. При желании вы можете изменить формат времени на
              отображение количества кадров, нажав <mark className="key">ЛКМ</mark> по
              таймкоду на таймлайне с зажатым <mark className="key">Ctrl</mark>.
            </li>
            <li>
              <sup>6</sup> Параметр <mark className="ui">Resolution</mark> влияет только
              на разрешение рендеринга, как если вы бы изменяли значение качества в окне
              предпросмотра. В этом параметре доступны те же привычные для пользователя
              значения - <mark className="ui">Full</mark>,{" "}
              <mark className="ui">Half</mark>, <mark className="ui">Third</mark>,{" "}
              <mark className="ui">Quarter</mark> и <mark className="ui">Custom</mark>, в
              котором можно указать значение каждого пикселя по горизонтали и вертикали,
              который нужно отрендерить для предпросмотра.
              {/* TODO: ПРОВЕРИТЬ ЭТОТ ФАКТ С PRESERVE RESOLUTION!!! */}
            </li>
            <li>
              <sup>7</sup> Настройка цвета фона в настройках композиции влияет только на
              цвет подложки в окне предпросмотра. Для того чтобы действительно добавить
              фон в композицию - созадйте <mark className="word">Solid Layer</mark>,
              задайте ему нужный цвет и расположите его самым последним слоем по иерархии
              наложения.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          Во вкладке <mark className="ui">Advanced</mark> вы можете настроить размытие в
          движении более детально, указав значения угла<sup>1</sup> и фазы затвора
          <sup>2</sup>, количества семплов<sup>3</sup>, а также якорную точку<sup>4</sup>{" "}
          самой композиции при его изменении размера. В этом разделе также есть два
          полезных параметра, связанные с{" "}
          <mark className="ui">
            Preserve<sup>5</sup>
          </mark>
          .
        </p>
        <ImageFigure
          caption="Composition Settings"
          imgSrc="images/aftereffects/composition_settings_advanced.png"
          imgTitle="Вкладка Advanced в настройках композиции"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          <ul>
            <li>
              <sup>1</sup> <mark className="ui">Shutter Angle</mark> или{" "}
              <mark className="ui">угол затвора</mark> -{" "}
            </li>
            <li>
              <sup>2</sup> <mark className="ui">Shutter Phase</mark> или{" "}
              <mark className="ui">фаза затвора</mark> -{" "}
            </li>
            <li>
              <sup>3</sup> <mark className="ui">Samples Per Frame</mark> или{" "}
              <mark className="ui">количество семплов размытия на кадр</mark> -{" "}
            </li>{" "}
            {/* TODO: дописать до конца!1! */}
            <li>
              <sup>4</sup> Изменение <mark className="ui">Anchor</mark> влияет на
              положение ваших слоёв при изменении размера ширины или высоты композиции.
              Если, например, указать левый нижний угол, то композиция начнёт изменять
              размер относительно этой точки, а все ваши слои будут стоять относительно
              этой якорной точки. По умолчанию все слои, при изменении размера композиции,
              остаются в центре.
            </li>
            <li>
              <sup>5</sup>{" "}
              <mark className="ui">
                Preserve frame rate when nested or in render queue
              </mark>{" "}
              - сохраняет частоту кадров из другой композиции, если она используется в ней
              или при изменении <mark>FPS</mark> в очереди рендера.{" "}
              <mark className="ui">Preserve resolution when nested</mark> - подгоняет
              разрешение под увеличение, похож на{" "}
              <mark className="ui">Continuously Rasterize</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          Во вкладке <mark className="ui">3D Renderer</mark> вы можете изменить движок для
          рендера трёхмерных слоёв и, при возможности, настроить его параметры.
        </p>
        <ImageFigure
          caption="Composition Settings"
          imgSrc="images/aftereffects/composition_settings_3d_renderer.png"
          imgTitle="Вкладка 3D Renderer в настройках композиции"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Учтите, что <mark className="plugin">Advanced 3D</mark> и{" "}
          <mark className="plugin">Cinema 4D</mark> много чего не поддерживает из
          привычных действий, как в <mark className="plugin">Classic 3D</mark>. Например -
          отсутствует поддержка режимов наложений и поддержки размытия в движении,
          невозможность применения некоторых эффектов и прочего.
        </AdditionWarning>
        <Divider>Предварительная композиция (Pre-compose)</Divider>
        <p>
          <mark className="word">Прекомпозиция</mark>,{" "}
          <mark className="word">промежуточная композиция</mark> или{" "}
          <mark className="word">предварительная композиция</mark> - композиция, созданная
          на основе выделенных слоёв на таймлайне. Для того чтобы создать такую композицию
          - выделите нужные слои и нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + C</mark>. В диалоговом окне вам предложат
          два варианта для создания, а ещё пару дополнительных параметров.
        </p>
        <ul>
          <li>
            <mark className="ui">
              Leave all attributes in &quot;Composition Name&quot;
            </mark>{" "}
            - создать прекомпозицию точно по исходным параметрам выделенного слоя, вплоть
            до размера и оставить все свойства, аттрибуты и эффекты в родительской
            композиции, а сам слой запаковать в новую композицию. Например, если вы
            пытаетесь запрекомпозить <mark className="word">Solid Layer</mark> с
            анимированными свойствами положения - они останутся на временной шкале текущей
            композиции, а внутри новой прекомпозиции слой будет без анимации.
            <AdditionWarning>
              Данная опция доступна только тогда, когда выделен один слой, а также если
              этот слой имеет <mark className="ui">Source</mark>, например слой с видео,
              фото или аудио.
            </AdditionWarning>
          </li>
          <li>
            <mark className="ui">Move all attributes into the new composition</mark> -
            перемещает выделенный слой или слои со всеми свойствами, аттрибутами и
            эффектами в своего рода новый &quot;контейнер&quot;.
            <ul>
              <li>
                <mark className="ui">
                  Adjust composition duration to the time span of the selected layers
                </mark>{" "}
                - обрезает новую композицию под общую длительность выделенных слоёв.
                <AdditionWarning>
                  Учтите, при включенном параметре значение стартового таймкода будет
                  изменено на таймкод начала первого выделенного слоя. При необходимости
                  вы можете позже изменить стартовый таймкод в настройках созданной
                  композиции.
                </AdditionWarning>
              </li>
            </ul>
          </li>
          <li>
            <mark className="ui">Open New Composition</mark> - естественно откроет
            созданную прекомпозицию на таймлайне.
          </li>
        </ul>
        {/* TODO: рассказать про collapse transformation  */}
        <Divider>Текст (Text)</Divider>
        <p>
          <mark className="word">Text Layer</mark> - это слой, который содержит
          редактируемый текст. У текстовых слоёв есть два типа - <mark>Point Text</mark> и{" "}
          <mark>Paragraph Text</mark>. Каждый из этих типов используется для разных целей.
          Вы можете{" "}
          <a href="https://www.youtube.com/watch?v=-PS2Yl-IzTQ">
            анимировать Source Text
          </a>{" "}
          для изменения самого текста на разных ключевых кадрах,{" "}
          <a href="https://www.youtube.com/watch?v=_CEpgznn-XU">пустить текст по Path</a>{" "}
          с помощью маски, а также использовать различные{" "}
          <a href="https://www.youtube.com/watch?v=IJ3QHNQSJg8">текстовые аниматоры</a>.
        </p>
        <p>
          Изменение шрифта, его размера, применение обводки, настройка межстрочного и
          межбуквенного интервала, включение поддержки лигатуров, а также прочие
          параметры, касающиеся внешнего вида текста, настраиваются в окне{" "}
          <mark className="ui">Character</mark>. Выравнивание и выключка, а также
          установка отступа и расстояния между абзацами настраиваются в окне{" "}
          <mark className="ui">Paragraph</mark>.
        </p>
        <AdditionInfo>
          Начиная с <mark className="app">Adobe After Effects</mark> версии{" "}
          <mark>23.4</mark> и новее, большинство этих параметров можно регулировать и в
          окне <mark className="ui">Properties</mark>.
        </AdditionInfo>
        <ul>
          <li>
            <mark>Point Text</mark> используется тогда, когда неважны ограничения по
            ширине или высоте. Поэтому он и переводится дословно - точечный текст, который
            располагается чаще всего с текстом в одну строку. Такой тип текста чаще всего
            используется для заголовков, примечаний и других коротких вставок в одну
            строку. Поддерживает выравнивание только по левому, правому краю и по центру,
            в зависимости от того как вы написали свой текст. Выравнивание по ширине не
            поддерживается, потому что у текста просто нет фиксированных границ.
            <VideoFigure
              caption="Создание Point Text"
              styleClass="figure_windows-dark"
              videoSrc="images/aftereffects/create_point_text.mp4"
            />
          </li>
          <li>
            <mark>Paragraph Text</mark> используется тогда, когда нужно вместить текст в
            определённую &quot;коробку&quot;, то есть ограничить ширину и высоту. Такой
            тип часто используется для внедрения текста в фигуру, будь то прямоугольник
            или квадрат. Такой тип поддерживает все варианты выравнивания текста, включая
            выравнивание по ширине в окне <mark className="ui">Paragraph</mark>.
            <VideoFigure
              caption="Создание Paragraph Text"
              styleClass="figure_windows-dark"
              videoSrc="images/aftereffects/create_paragraph_text.mp4"
            />
          </li>
        </ul>
        <p>
          Текстовый слой одного типа можно преобразовать в другой. Для этого нужно
          обязательно выбрать инструмент <mark className="ui">Text</mark>, выделить нужный
          текстовый слой с помощью <mark className="key">ПКМ</mark> и выбрать{" "}
          <mark className="ui">Convert to Point Text</mark> или{" "}
          <mark className="ui">Convert to Paragraph Text</mark>, в зависимости от того,
          какой у вас сейчас текущий тип текста.
        </p>
        <VideoFigure
          caption="Конвертация Point Text в Paragraph Text"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/convert_to_paragraph_text.mp4"
        />
        <p>
          Также текст может писаться горизонтально и вертикально с помощью инструментов{" "}
          <mark className="ui">Horizontal Text Tool</mark>, который используется по
          умолчанию и <mark className="ui">Vertical Text Tool</mark>. Вертикальное
          написание текста больше актуально для языков азиатских стран, но он может вам
          пригодиться и с привычной латиницей или кириллицей, если вы хотите сделать{" "}
          <mark>monospace-like</mark> шрифт, чтобы при анимации различных счётчиков текст
          не прыгал.
        </p>
        <YouTubeVideo
          caption="Как сделать текст моноширинным"
          link="__-rPlFfRow"
        />
        <Divider>Сплошная заливка (Solid Layer)</Divider>
        <p>{/* FIXME:  */}</p>
        <p>
          <mark className="word">Solid Layer</mark> или{" "}
          <mark className="word">слой-заливка</mark> часто используется как фон или как
          инициализатор различных эффектов, например{" "}
          <mark className="plugin">CC Particle World</mark>,{" "}
          <mark className="plugin">Element 3D</mark>,{" "}
          <mark className="plugin">Trapcode Particular</mark> и прочие.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Чтобы создать <mark className="word">Solid Layer</mark> - нажмите на
              комбинацию клавиш <mark className="key">Ctrl + Y</mark>.
            </li>
            <li>
              Чтобы настроить размер, цвет и другие параметры такого слоя - нажмите на
              комбинацию клавиш <mark className="key">Ctrl + Shift + Y</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <YouTubeVideo
          caption="Как создать фон и изменить цвет заливки"
          link="e-g1y4p8Jc0"
        />
        <AdditionWarning>
          <ul>
            <li>
              Если примененный вами эффект работает в своём трёхмерном пространстве - не
              стоит преобразовывать ваш слой-инициализатор как 3D-слой. Чтобы изменить вид
              или положение слоя - пользуйтесь камерой или, при возможности, создавайте
              манипуляторы для параметров положения объекта.
            </li>
            <li>
              Чтобы понять, использует ли эффект своё трёхмерное пространство - посмотрите
              на его название в <mark className="ui">Effects & Controls</mark>. Рядом с
              ним должна отображаться иконка <mark className="ui">кубика</mark>.
            </li>
          </ul>
          {/* <p>
        <mark className="word">Solid Layer</mark> - слой с однотонным цветом, чаще всего
        чёрного цвета. Обычно он создаётся по размеру композиции и может служить для
        различных целей.
      </p>
      
      <p>
        <mark className="word">Solid Layer</mark> может использоваться как инициализатор
        различных эффектов, созданные для 3D пространства, например{" "}
        <mark className="plugin">Element 3D</mark>,{" "}
        <mark className="plugin">Trapcode Form</mark> или{" "}
        <mark className="plugin">CC Particle World</mark>. Для перемещения в
        пространстве 3D-эффектов обычно используется камера или настройка положения в
        настройках эффекта.
      </p>
      <p>
        <mark className="word">Solid Layer</mark> также может служить обычным однотонным
        фоном. Это бывает полезно, когда некоторые эффекты могут не работать корректно с
        прозрачностью, например переходы из <mark className="plugin">AtomX</mark> или{" "}
        <mark className="ui">Motion Bro</mark>.
      </p>
      <YouTubeVideo
        caption="Solid Layers - Explained"
        link="MCJxSEj2BL4"
      />
      <AdditionWarning>
        Однотонный слой, на котором применены эффекты, работающие в 3D пространстве,
        должен оставаться как 2D-слой, иначе вы получите непонятные искажения
        перспективы. Также не стоит двигать такой слой без острой необходимости.
      </AdditionWarning> */}
        </AdditionWarning>
        <Divider>Источник освещения (Light Layer)</Divider>
        <p>
          <mark className="word">Источник освещения</mark> - это слой, который служит
          источником света для трёхмерных объектов в композиции. Он позволяет освещать
          слои и создавать тени<sup>1</sup>, отбрасываемые слоями.{" "}
          <mark className="word">Light Layer</mark> не распространяется на двумерные слои.
          Чтобы создать такой слой - нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + L</mark>.
        </p>
        <p>
          Чтобы настроить размер, цвет и другие параметры такого слоя - нажмите на
          комбинацию клавиш <mark className="key">Ctrl + Shift + Y</mark>.
        </p>
        <p>{/* TODO: термин источника света  */}</p>
        <ImageFigure
          caption="Light Settings"
          imgSrc="images/aftereffects/light_settings.png"
          imgTitle="Настройка источника света"
          styleClass="figure_windows-dark"
        />
        <Divider>Камера (Camera)</Divider>
        <p>{/* FIXME:  */}</p>
        <p>
          <mark className="word">Камера</mark> - это слой, который служит виртуальным
          объективом для вашей сцены, определяя ракурс, глубину резкости и поле зрения для
          всех слоев, работающих в трёхмерном пространстве. Камера не будет работать с
          двумерными слоями.
        </p>
        <YouTubeVideo
          caption="Техники с 3D камерами в Adobe After Effects"
          link="zgMHWFolli8"
        />
        <p>
          Для камеры в окне <mark className="ui">Camera Settings</mark> вы можете
          настроить тип<sup>1</sup>, задать имя и свой пресет, изменить значение угла
          обзора<sup>2</sup> и размера плёнки<sup>3</sup>. Если включить{" "}
          <mark className="ui">Enable Depth of Field</mark>, то вы сможете настроить
          расстояние до точки фокуса<sup>4</sup>, настроить апертуру<sup>5</sup>,
          диафрагму<sup>6</sup> и процент размытия<sup>7</sup>. Также вы можете при
          необходимости изменить метрическую систему<sup>8</sup>. Чтобы открыть параметры
          данного слоя - выделите слой с камерой и нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + Y</mark>. Также свойства камеры вы можете
          анимировать на таймлайне, раскрыв вкладку{" "}
          <mark className="ui">Camera Options</mark> у слоя.
        </p>
        <ImageFigure
          caption="Camera Settings"
          imgSrc="images/aftereffects/camera_settings.png"
          imgTitle="Настройки камеры"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          Учтите, что не все параметры камеры доступны в движках рендера{" "}
          <mark className="plugin">Advanced 3D</mark> и{" "}
          <mark className="plugin">Cinema 4D</mark>, например{" "}
          <mark className="ui">Depth of Field</mark>.
        </AdditionWarning>
        <AdditionInfo>
          <ul>
            <li>
              <sup>1</sup> У камеры может быть два типа - <mark>One-Node</mark> и{" "}
              <mark>Two-Node</mark>.
              <ul>
                <li>
                  <mark className="word">One-Node Camera</mark> или{" "}
                  <mark className="word">одноузловая камера</mark> работает как физическая
                  камера, которая перемещается независимо от выбранной точки и
                  ориентируется вокруг себя.
                </li>
                <li>
                  <mark className="word">Two-Node Camera</mark> или{" "}
                  <mark className="word">двухузловая камера</mark> имеет точку обзора и
                  ориентируется вокруг <mark>Point of Interest</mark>. Данный тип камер
                  полезен для создания параллакс-эффекта.
                </li>
                <li>
                  При этом каждому типу камеры можно включить свой тип{" "}
                  <a href="https://helpx.adobe.com/after-effects/using/selecting-arranging-layers.html#auto_orientation_options">
                    автоориентации
                  </a>{" "}
                  - для этого нужно выделить камеру, нажать на комбинацию клавиш{" "}
                  <mark className="key">Ctrl + Alt + O</mark> и выбрать нужный параметр.
                  Если выбрать{" "}
                  <mark className="ui">Orient Towards Point of Interest</mark> -{" "}
                  <mark className="word">одноузловая камера</mark> превратится в{" "}
                  <mark className="word">двухузловую</mark>, а если выбрать{" "}
                  <mark className="ui">Off</mark> или{" "}
                  <mark className="ui">Orient Along Path</mark> -{" "}
                  <mark className="word">двухузловая камера</mark> превратится в{" "}
                  <mark className="word">одноузловую</mark>.
                </li>
              </ul>
            </li>
            <li>
              <sup>2</sup> Параметры <mark className="ui">Zoom</mark>,{" "}
              <mark className="ui">Angle of View</mark> и{" "}
              <mark className="ui">Focal Length</mark> неразрывно связаны.{" "}
              <mark className="ui">Focal Length</mark> - это как фокусное расстояние
              объектива: чем оно меньше, тем шире{" "}
              <mark className="ui">Angle of View</mark> и больше объектов попадает в кадр
              с выраженной перспективой. Чем больше фокусное расстояние, тем уже угол
              обзора, объекты кажутся ближе, а перспектива сжимается.{" "}
              <mark className="ui">Zoom</mark> же является общим увеличением, которое
              напрямую зависит от этих двух настроек. По сути, настраивая один из этих
              трёх параметров - вы корректируете оптику виртуальной камеры.
            </li>
            <li>
              <sup>3</sup> <mark className="ui">Film Size</mark> - отвечает за размер
              вообращаемой матрицы или плёнки. Изменение этого значение будет влиять на
              значение <mark className="ui">Zoom</mark> и{" "}
              <mark className="ui">Angle of View</mark>.
            </li>
            <li>
              <sup>4</sup> <mark className="ui">Focus Distance</mark> отвечает за точку
              фокусирования. Фокус камеры можно присоединить к нужному слою с помощью{" "}
              <mark className="key">ПКМ</mark> по нужному слою и выбрать в контекстном
              меню <mark className="ui">Camera &gt; Link Focus Distance to Layer</mark>.
            </li>
            <li>
              <sup>5</sup> <mark className="ui">Aperture</mark> отвечает за размытие. Чем
              больше значение апертуры, тем больше будет размытым план, который находится
              не в фокусе. Если изменить это значение, то{" "}
              <mark className="ui">F-Stop</mark> будет вслед меняться, но в
              противоположную сторону.
            </li>
            <li>
              <sup>6</sup> <mark className="ui">F-Stop</mark> отвечает за размытие. Чем
              меньше значение диафрагмы, тем больше будет размытым план. Если изменить это
              значение, то <mark className="ui">Aperture</mark> будет вслед меняться, но в
              противоположную сторону.
            </li>
            <li>
              <sup>7</sup> <mark className="ui">Blur Level</mark> отвечает, как ни
              странно, за степень размытия. Выполняет в качестве роли коэффициента
              действия <mark className="ui">Aperture</mark> и{" "}
              <mark className="ui">F-Stop</mark>.
            </li>
            <li>
              <sup>8</sup> В <mark className="ui">Units</mark> вы можете изменить
              метрическую систему с милиметров на дюймы или пиксели. В{" "}
              <mark className="ui">Measure Film Size</mark> вы можете изменить как будет
              мериться размер плёнки - горизонтально, вертикально или по диагонали.
            </li>
            {/* TODO: дописать до конца!1! */}
          </ul>
        </AdditionInfo>
        <p>
          Если раскрыть слой камеры на таймлайне, то вы можете обнаружить ещё несколько
          свойств этого объекта, связанные с визуальными настройками диафрагмы<sup>1</sup>{" "}
          и пересветами<sup>2</sup>.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/camera_options_on_timeline.png"
          imgTitle="Свойства камеры на таймлайне"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          <ul>
            <li>
              <sup>1</sup> Свойства камеры, начинающиеся на{" "}
              <mark className="ui">Iris</mark> отвечают за визуальные настройки боке,
              создаваемое камерой. Не все эффекты, работающие в трёхмерном пространстве
              реагируют на изменения этих параметров.
              <ul>
                <li>
                  <mark className="ui">Iris Shape</mark> определяет количество лепестков у
                  диафрагмы, которые будут видны на ярких бликах вне фокуса.
                </li>
                <li>
                  <mark className="ui">Iris Rotation</mark> вращает форму диафрагмы.
                </li>
                <li>
                  <mark className="ui">Iris Roundness</mark> сглаживает углы у лепестков
                  диафрагмы.
                </li>
                <li>
                  <mark className="ui">Iris Aspect Ratio</mark> изменяет соотношение
                  сторон фигуры диафрагмы, то есть позволяет растянуть или сплющить его.
                </li>
                <li>
                  <mark className="ui">Iris Diffraction Fringe</mark> добавляет ореол по
                  краям ярких бликов в боке, имитируя эффект дифракции света. Данное
                  значение изменяется редко, так как мало кто видит разницу при его
                  изменении, и его можно установить до <mark>500</mark>.
                </li>
              </ul>
            </li>
            <li>
              <sup>2</sup> {/* TODO: дописать до конца!1! */}
            </li>
          </ul>
        </AdditionInfo>
        <p>
          В настройках <mark className="app">Adobe After Effects</mark> вы можете включить
          возможность манипулирования камерой с помощью мыши и зажатой{" "}
          <mark className="key">Alt</mark>, а также включить,{" "}
          <i>хотя они и так по умолчанию включены</i>, цифровые клавиши{" "}
          <mark className="key">1</mark>, <mark className="key">2</mark> и{" "}
          <mark className="key">3</mark> для выбора инструмента перемещения камеры и{" "}
          <mark className="key">4</mark>, <mark className="key">5</mark> и{" "}
          <mark className="key">6</mark> для выбора типа манипулятора выделенных слоёв в
          окне предпросмотра.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/edit_preferences_3d.png"
          imgTitle="Настройки в 3D"
          styleClass="figure_windows-dark"
        />
        <ul>
          {/* <mark className="key">1</mark> для выбора инструмента навигации по орбите, <mark className="key">2</mark> для навигации по осям X и Y и{" "}
          <mark className="key">3</mark> для навигации по оси Z и <mark className="key">4</mark>,{" "}
          <mark className="key">5</mark> и <mark className="key">6</mark> для */}
          <li>
            <mark className="key">1</mark> - выбирает инструмент вращения по орбите вокруг
            курсора, сцены или <mark>Point of Interest</mark>.
          </li>
          <li>
            <mark className="key">2</mark> - выбирает инструмент панорамирования от
            курсора или инструмент для поворота <mark>Point of Interest</mark>.
          </li>
          <li>
            <mark className="key">3</mark> -
          </li>
          {/* TODO:  дописать обозначение каждой кнопочки */}
        </ul>
        <AdditionInfo>
          <mark className="key">Shift + 1 / 2 / 3</mark> быстро переключает инструмент
          между описанными вариантами.
        </AdditionInfo>
        <ul>
          <li>
            <mark className="key">4</mark> -
          </li>
          <li>
            <mark className="key">5</mark> -
          </li>
          <li>
            <mark className="key">6</mark> -
          </li>
        </ul>
        <AdditionInfo>
          Чтобы обратно вернуть стандартный универсальный манипулятор - выберите его в{" "}
          <mark className="ui">панели инструментов</mark> или с помощью{" "}
          <mark className="key">Shift + V</mark>, который быстро переключает манипулятор
          между описанными вариантами.
          <ImageFigure
            caption="Tools"
            imgSrc="images/aftereffects/select_universal_transform_gizmo.png"
            imgTitle="Выбор универсального манипулятора"
            styleClass="figure_windows-dark"
          />
        </AdditionInfo>
        <Divider>3D-слой (3D Layer)</Divider>
        <p>{/* FIXME: */}</p>
        {/* слои находящиеся на одном положении по оси Z могут конфликтовать друг с другом и выдавать различные артефакты, например моргание или рваное изображение.  */}
        <Divider>Трёхмерные модели (3D Objects)</Divider>
        <Divider>Нулевой объект (Null Object)</Divider>
        <p>
          <mark className="word">Нулевой объект</mark>,{" "}
          <mark className="word">слой-пустышка</mark> или же{" "}
          <mark className="word">Null Object</mark> - это невидимый манипулятор для
          объектов, слоёв или параметров эффекта. Он часто применяется для создания
          зависимости между управляющими и управляемыми элементами.
        </p>
        <p>
          К нулевому объекту можно прилинковать сразу несколько слоёв, например, для их
          вращения по определённой оси. Для этого можно воспользоваться лассо в столбце{" "}
          <mark className="ui">Parent & Link</mark>.
        </p>
        <AdditionInfo>
          Если вы скрыли отображение столбца на таймлайне, нажмите{" "}
          <mark className="key">F4</mark> или <mark className="key">ПКМ</mark> по
          столбцам, и выбрать <mark className="ui">Columns &gt; Parent & Link</mark>.
        </AdditionInfo>
        <YouTubeVideo
          caption="Тебе НУЖНО использовать нулевые слои в Adobe After Effects"
          link="8ei_cj6A2Gg"
        />
        <AdditionWarning>
          Не стоит путать <mark className="ui">Parent & Link</mark> с{" "}
          <mark className="ui">Track Matte</mark>, несмотря на то, что у обоих столбцов
          есть лассо для указания ссылки на нужный слой. Часто новички не смотрят на
          название нужной колонки, а потом удивляются, почему у них программа работает не
          так, как они хотят.
        </AdditionWarning>
        <Divider>Слой-фигура (Shape Layer)</Divider>
        <p>{/* FIXME:  */}</p>
        <YouTubeVideo
          caption="Слои-фигуры для начинающих"
          link="98ro7x3kl8A"
        />
        <Divider>Корректирующий слой (Adjustment Layer)</Divider>
        <p>
          <mark className="word">Корректирующий слой</mark> или же{" "}
          <mark className="word">Adjustment Layer</mark> - довольно мощный инструмент.
          Технически - это <mark className="word">Solid Layer</mark> с принудительно
          включенным атрибутом <mark className="ui">Adjustment</mark> С помощью него можно
          сделать цветокоррекцию, накинуть цифровой шум, заставить трястись всю композицию
          или просто добавить различные искажения. Эффекты, применённые на таком слое,
          будут работать только поверх слоёв, которые расположены ниже него по порядку на
          таймлайне. Также не все эффекты могут корректно применяться на{" "}
          <mark className="word">Adjustment Layer</mark>, если в композиции нет фона,
          созданного через <mark className="word">Solid Layer</mark>.
        </p>
        <YouTubeVideo
          caption="Используем корректирующие слои в Adobe After Effects"
          link="rgMKGFWWqjA"
        />
        <p>
          По сути, в качестве <mark className="word">корректирующего слоя</mark> может
          выступать почти любой объект на таймлайне - достаточно включить опцию{" "}
          <mark className="ui">Adjustment Layer</mark> для нужного слоя с помощью
          контекстного меню или переключателя на таймлайне.
        </p>
        <VideoFigure
          caption="Демонстрация работы корректирующего слоя"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/enable_adjustment_layer_mode.mp4"
        />
        <p>{/* FIXME:  */}</p>
        <Divider>Файлы Photoshop и Maxon Cinema 4D</Divider>
        <p>{/* FIXME:  */}</p>
        <Divider>Слой направляющей (Guide Layer)</Divider>
        <p>
          <mark className="word">Guide Layer</mark> работает как слой-комментарий, который
          виден только в предпросмотре и не рендерится при экспорте<sup>1</sup>. Его можно
          использовать для технических оверлеев, например для отображения границ
          перекрытий интерфейса <mark>TikTok</mark>, <mark>YouTube Shorts</mark> или для
          послания другому пользователю, чтобы он исправил что-то в дальнейшем. Чтобы
          включить этот атрибут - перейдите в <mark className="ui">Layer</mark> или
          нажмите <mark className="key">ПКМ</mark> по слою и выберите в контекстном меню{" "}
          <mark className="ui">Guide Layer</mark>.
        </p>
        <YouTubeVideo
          caption="Как использовать Guide Layers"
          link="_rxq8Pa9WdQ"
        />
        <AdditionInfo>
          <sup>1</sup> Данное поведение можно изменить в{" "}
          <mark className="ui">Render Settings</mark>, изменив значение параметра{" "}
          <mark className="ui">Guide Layers</mark> на{" "}
          <mark className="ui">Current Settings</mark>.
        </AdditionInfo>
        {/* FIXME: */}
        <Divider>Скрытые слои (Shy Layer)</Divider>
        <p>{/* FIXME: */}</p>
        <YouTubeVideo
          caption="Как спрятать слои?"
          link="Bw3snjRq2kE"
        />
        <p>
          {/* FIXME: сделать так со всеми слоями, которые можно создать по пкм > new  */}
          {/*
    </DetailsSummary>
    <DetailsSummary title="Что такое Adjustment Layer и для чего он нужен?">
    </DetailsSummary>
    </DetailsSummary> */}{" "}
          {/* <DetailsSummary title="Что за решётка у слоя на таймлайне и для чего нужен Guides Layer?">
      <p>
        
      </p>
      <ImageFigure
        caption="Timeline"
        imgSrc="images/aftereffects/guide_layer_example.png"
        imgTitle="Пример использования Guide Layer"
        styleClass="figure_windows-dark"
      />
      <p>
        <mark className="word">Guide Layer</mark> можно включить как для текстовых
        слоёв, так и для композиций, изображений или видео.
      </p>
    </DetailsSummary> */}
        </p>
        <Divider>Статьи о слоях от Adobe</Divider>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/selecting-arranging-layers.html">
            Выделение и упорядочивание слоев
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/blending-modes-layer-styles.html">
            Режимы наложения
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/3d-layers.html">
            Трёхмерные слои
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layer-properties.html">
            Свойства слоя
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/creating-layers.html">
            Создание слоев
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layers.html">
            Управление слоями
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layer-markers-composition-markers.html">
            Маркеры слоя и маркеры композиции
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/cameras-lights-points-interest.html">
            Камеры, освещение и точки обзора
          </a>
        </div>
        <AdditionInfo>
          Чтобы открыть нужную статью на русском языке - добавьте{" "}
          <mark className="copy">/ru</mark> в ссылку после <mark>helpx.adobe.com</mark>.
          Учтите, что статьи, переведённые на другие языки, могут быть криво переведены
          или иметь устаревшую информацию.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="replace footage"
        title="Как заменить футаж другим файлом?"
      >
        <AdditionDanger>
          Данная статья находится на ранней стадии разработки. Следите за обновлениями.
        </AdditionDanger>
        <p>{/* TODO: написать и исправить*/}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="плохое качество предпросмотра, низкое разрешение, пиксели, лагает превью, векторные изображения, замедленное, ускоренное, тормозит, слоумо, растянутое аудио"
        title="Почему предпросмотр проигрывается как-то странно?"
      >
        <p>
          Часто у пользователей есть два вида проблем с проигрыванием предпросмотра - его
          плохое качество или странная скорость воспроизведения. В этой статье разберем
          эти две категории проблем и решим их.
        </p>
        <Divider>Разбираемся с плохим качеством предпросмотра</Divider>
        <p>
          Первым делом стоит проверить разрешение в окне{" "}
          <mark className="ui">Composition</mark>. Список с выбором разрешения
          отображается в нижней границе окна предпросмотра.
        </p>
        <VideoFigure
          caption="Adobe After Effects"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_resolution_comppreview.mp4"
        />
        <p>
          Если там всё хорошо, но при воспроизведении предпросмотра качество начинает
          проседать - скорее всего вы забыли переключить качество предпросмотра в окне{" "}
          <mark className="ui">Preview</mark>. Для изменения качества выставьте значение{" "}
          <mark className="ui">Resolution</mark> на <mark className="ui">Full</mark> или
          на удобное вам значение.
        </p>
        <AdditionInfo>
          Если в <mark className="ui">Resolution</mark> стоит значение{" "}
          <mark className="ui">Auto</mark> - предпросмотр будет проигрываться в том
          разрешении, которое вы указали в окне, где отображается ваша композиция.
        </AdditionInfo>
        <ImageFigure
          caption="Preview"
          imgSrc="images/aftereffects/change_resolution_preview.png"
          imgTitle="Изменение предпросмотра в окне Preview"
          styleClass="figure_windows-dark"
        />
        <Divider>Как убрать пикселизацию у векторных слоёв?</Divider>
        <p>
          Если вы импортировали векторный файл, например <mark className="file">AI</mark>{" "}
          из <mark className="app">Adobe Illustrator</mark> - для слоя нужно включить{" "}
          <mark className="ui">Continuously Rasterize</mark>. Это позволит программе при
          любом взаимодействии с слоем уменьшить эффект пикселизации за счёт того, что
          программа будет каждый раз растрировать этот слой до нужного разрешения в
          композиции, но не сделает слой полностью векторным.
        </p>
        <AdditionWarning>
          При включенной опции <mark className="ui">Continuously Rasterize</mark> могут
          возникнуть побочные явления, например разрывы слоя при использовании{" "}
          <mark className="plugin">Puppet Tool</mark>.
        </AdditionWarning>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/enable_continuously_rasterize.png"
          imgTitle="Включаем Continuously Rasterize"
          styleClass="figure_windows-dark"
        />
        <Divider>
          Остальные случаи невнимательности пользователя с качеством предпросмотра
        </Divider>
        <p>
          А вообще, часто бывают случаи, когда пользователь сам устанавливает для
          композиции низкое разрешение в его настройках, например <mark>256x128</mark>, а
          потом удивляется, почему он видит пиксели. Чтобы изменить разрешение вашей
          композиции, откройте окно настроек композиции с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + K</mark> и в значениях{" "}
          <mark className="ui">Width</mark> и <mark className="ui">Height</mark> укажите
          большее значение, чем было до этого.{" "}
          <i style={{opacity: "0.5"}}>
            Или воспользуйтесь стандартным скриптом{" "}
            <mark className="file">Scale Composition.jsx</mark>, который находится в{" "}
            <mark className="ui">File &gt; Scripts</mark>.
          </i>
        </p>
        <p>
          Есть ещё отдельная категория лиц, которая увеличивает предпросмотр, больше чем
          на <mark>100%</mark> и видит пиксели, забывая о том, что пользователь работает в
          программе для растровой графики. Чтобы быстро уменьшить предпросмотр до{" "}
          <mark>100%</mark> - используйте комбинацию клавиш{" "}
          <mark className="key">Alt + /</mark> для выполнения действия{" "}
          <mark className="ui">Fit up to 100%</mark> или <mark className="key">/</mark>{" "}
          для установки значения увеличения в <mark>100%</mark>.
        </p>
        <p>
          Вдобавок к этому некоторые пользователи думают, что в{" "}
          <mark className="app">Adobe After Effects</mark> есть возможность отображения
          предпросмотра без потери качества при приближении, как в{" "}
          <mark className="app">Adobe Illustrator</mark>, если в композиции есть векторные
          слои. Нет, это так не работает, так как{" "}
          <mark className="app">Adobe After Effects</mark> всё ещё является растровым
          редактором графики, а не векторным. Он показывает и растрирует все ваши слои под
          то разрешение, которое указано в настройках вашей композиции.
        </p>

        <AdditionInfo>
          Исключение, где вы можете увеличить предпросмотр без потери качества больше чем
          на <mark>100%</mark> - это включение <mark className="plugin">Draft 3D</mark> с
          опцией <mark className="ui">Extended Preview</mark>. Такой способ будет работать
          только тогда, когда в композиции есть векторные слои или трёхмерные модели. При
          экспорте вы в любом случае получите файл с разрешением, которая указана в
          настройках композиции.
        </AdditionInfo>
        <Divider>
          Выясняем причины нестандартной скорости воспроизведения предпросмотра
        </Divider>
        <p>
          Первая причина воспроизведения предпросмотра с тормозами - стандартные настройки{" "}
          <mark className="app">Adobe After Effects</mark>, которые позволяют пользователю
          зачем-то проиграть предпросмотр в реальном времени, предварительно не
          закэшировав кадры для воспроизведения. В таком случае эффекты и исходники видео
          вряд ли смогут так быстро обрабатывать кадры на лету, чтобы предпросмотр игрался
          спокойно и без запинок.
        </p>
        <AdditionInfo>
          Для отображения количества <mark>FPS</mark> в предпросмотре можно
          воспользоваться окном <mark className="ui">Info</mark>. В нём отображается
          текущий <mark>FPS</mark> предпросмотра и дополнительная информация о рендеринге
          и проигрывании кадров из памяти.
          <ImageFigure
            caption="Info"
            imgSrc="images/aftereffects/info_non-realtime.png"
            imgTitle="Предпросмотр не в реальном времени"
            styleClass="figure_windows-dark"
          />
        </AdditionInfo>
        <p>
          Чтобы устранить такое стандартное поведение программы - нужно включить
          кэширование предпросмотра перед его воспроизведением. Для этого откройте окно{" "}
          <mark className="ui">Window &gt; Preview</mark> и включите в ней две опции -{" "}
          <mark className="ui">Cache Before Playback</mark> и{" "}
          <mark className="ui">If caching, play caching frames</mark>.
        </p>
        <ImageFigure
          caption="Preview"
          imgSrc="images/aftereffects/preview_caching.png"
          imgTitle="Включение кэширования предпросмотра"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
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
        </AdditionInfo>
        <Divider>Проверяем значение FPS для воспроизведения предпросмотра</Divider>
        <p>
          Иногда бывают случаи, когда предпросмотр проигрывается ускоренно или замедленно
          из-за неверного значения кадров в секунду в окне{" "}
          <mark className="ui">Preview</mark>. Чтобы это исправить - откройте окно{" "}
          <mark className="ui">Window &gt; Preview</mark> и укажите в <mark>FPS</mark>{" "}
          значение <mark className="ui">Auto</mark>. Это позволит воспроизвести
          предпросмотр в соответствии с заданным значением кадров в секунду в настройках
          композиции.
        </p>
        <ImageFigure
          caption="Preview"
          imgSrc="images/aftereffects/change_preview_fps.png"
          imgTitle="Изменение предпросмотра в окне Preview"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Скорость воспроизведения зависит от заданного значения в окне{" "}
          <mark className="ui">Preview</mark> и значения количества кадров в настройках
          композиции. Если, например, у вас композиция в <mark>30 FPS</mark>, то при
          установке значения <mark className="ui">60</mark> - предпросмотр будет
          проигрываться в два раза быстрее обычного, а если <mark className="ui">15</mark>{" "}
          - в два раза меньше обычного.
        </AdditionInfo>
        <Divider>Проверяем аудиовыход</Divider>
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники, то{" "}
          <mark className="app">Adobe After Effects</mark> не может нормально
          синхронизировать картинку и звук, и из-за этого предпросмотр идёт как-бы с
          замедлением или заиканиями. В таких случаях попробуйте изменить аудиовыход на
          другой в <mark className="ui">Default Output</mark>, уменьшить значение{" "}
          <mark className="ui">Latency</mark> до минимального в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark>. В крайнем
          случае можно попробовать обновить звуковые драйвера для вашего устройства.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/audio_hardware_settings.png"
          imgTitle="Настройки звукового выхода"
          styleClass="figure_windows-dark"
        />
        <Divider>Разбираемся с кривыми исходниками</Divider>
        <p>
          Если вы используете в проекте видео, скачанный из просторов интернета, то скорее
          всего они были закодированы в неприятный для{" "}
          <mark className="app">Adobe After Effects</mark> кодек и плохо проигрываются
          программой. Для решения проблемы - достаточно перекодировать ваши исходники в{" "}
          <mark className="word">монтажный кодек</mark>, например{" "}
          <mark className="video">Apple Prores 422</mark> через конвертер, например{" "}
          <mark className="app">Shutter Encoder</mark>. После конвертации - импортируйте
          исходники снова и попытайтесь воспроизвести предпросмотр снова.
        </p>
        <p>
          Если ваши исходники играются плавно, но вы испытываете проблемы только со звуком
          - стоит попробовать экспортировать аудио из видео отдельным файлом и
          перекодировать его в <mark className="audio">WAV</mark>, а затем импортировать
          его в программу заново.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Из-за чего отсутствует звук при проигрывании предпросмотра?">
        <Divider>Проверяем аудиовыход</Divider>
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники или
          внешний монитор с колонками, то вполне вероятно что у вас сбились настройки
          звука. Вам следует проверить настройки аудиовыхода в настройках программы, для
          этого нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark> и указать
          в параметре <mark className="ui">Default Output</mark> нужный вам аудиовыход.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/set_audio_output.png"
          imgTitle="Установка аудиовыхода"
          styleClass="figure_windows-dark"
        />
        <Divider>
          Включаем проигрывание звука при предпросмотре не в реальном времени
        </Divider>
        <p>
          Если вы проигрываете видео не в реальном времени и звук отсутствует (даже если
          он вам и нужен запинающийся и растянутый), то вам в настройках{" "}
          <mark className="app">Adobe After Effects</mark> нужно включить галочку{" "}
          <mark className="ui">Mute Audio When Preview Is Not Real-time</mark> в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Previews</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/mute_audio_when_preview_is_not_real-time.png"
          imgTitle="Выключение Mute Audio When Preview Is Not Real-time"
          styleClass="figure_windows-dark"
        />
        <Divider>Проверяем окно Preview</Divider>
        <p>
          Если советы выше не помогли - проверьте окно <mark className="ui">Preview</mark>
          , включен ли там вывод звука? Если нет, то включите и проиграйте предпросмотр
          снова.
        </p>
        <ImageFigure
          caption="Preview"
          imgSrc="images/aftereffects/toggle_audio_preview.png"
          imgTitle="Включение звука в окне Preview"
          styleClass="figure_windows-dark"
        />
        <Divider>Разбираемся с исходниками звука</Divider>
        <p>
          В редких случаях баги с проигрыванием звука могут возникнуть из-за самого
          исходника звука. Чтобы исключить различные проблемы с воспроизведением аудио -
          переконвертируйте его в формат <mark className="audio">WAV</mark>, а затем
          замените аудио в проекте. Если аудио запаковано вместе с видео файлом -
          переконвертируйте его в <mark className="word">монтажный кодек</mark>, например,
          через <mark className="app">Shutter Encoder</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как убрать пикселизацию предпросмотра при перемещении временной метки или объекта?">
        <p>
          По умолчанию в <mark className="app">Adobe After Effects</mark> включена функция
          адаптивного разрешения, которая изменяет качество предпросмотра при перемещении{" "}
          <mark className="word">плейхеда</mark> или какого-нибудь слоя. Если вас эта
          функция раздражает - его можно отключить. Для этого нажмите на иконку молнии{" "}
          <mark className="ui">Fast Previews</mark> в окне предпросмотра и выберите там
          значение <mark className="ui">Off (Final Quality)</mark>. После отключения{" "}
          <mark className="ui">Adaptive Resolution</mark> - качество предпросмотра при
          перемещении временной метки не должно ухудшаться и будет соответствовать
          выбранному параметру разрешения внизу окна предпросмотра.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/disable_adaptive_resolution.png"
          imgTitle="Отключение адаптивного разрешения"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="У меня есть два ключа с одинаковым значением, но между ними всё равно идёт какая-то анимация. Как её убрать?">
        <Divider>Проверяем график скорости</Divider>
        <p>
          Скорее всего вы ни разу не смотрели на график скорости между двумя ключами,
          особенно после того, как вы изменили длительность между кадрами. Чтобы
          посмотреть на график скорости выделенного параметра - нажмите на комбинацию
          клавиш <mark className="key">Shift + F3</mark>. В этом же графике скорости вы
          сможете подстроить скорость вашей анимации с помощью манипуляторов. В моем
          примере у первого и второго ключа стоит одинаковое значение <mark>100%</mark>,
          но между ними всё равно будет идти анимация из-за изменённого графика скорости.
        </p>
        <ImageFigure
          caption="Speed Graph"
          imgSrc="images/aftereffects/problematic_interpolation.png"
          imgTitle="Пример с проблемной интерполяцией"
          styleClass="figure_windows-dark"
        />
        <Divider>Меняем интерполяцию между кадрами</Divider>
        <p>
          Чтобы убрать анимацию между двумя кадрами - воспользуйтесь манипуляторами для
          изменения скорости в <mark className="ui">Speed Editor</mark> или измените режим
          интерполяции ключевых кадров. Для изменения режима интерполяции - выделите все
          ключи, которые вам нужны и нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + K</mark> для открытия окна{" "}
          <mark className="ui">Keyframe Interpolation</mark>. В открывшемся окне в
          параметре <mark className="ui">Temporal Interpolation</mark> выберите значение{" "}
          <mark className="ui">Linear</mark> или <mark className="ui">Hold</mark>. После
          этого у вас между выделенными ключами не должно быть лишней анимации.
        </p>
        <ImageFigure
          caption="Keyframe Interpolation"
          imgSrc="images/aftereffects/change_keyframe_interpolation.png"
          imgTitle="Изменение интерполяции ключевых кадров"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Применяю эффект, например Glow, но он обрезается по границе слоя. Как расширить действие эффекта?">
        <Divider>Расширяем края с помощью Grow Bounds</Divider>
        <p>
          Некоторые эффекты могут работать только в пределах размера слоя, вследствие чего
          они обрезаются по бокам. Если у вас есть изначальная композиция размером{" "}
          <mark>1920 x 1080</mark>, а слой или вложенная композиция, на который вы
          пытаетесь применить эффект - меньшего размера, то он и будет работать в его
          пределах. Если вы хотите устранить этот неприятный эффект, то вам нужно
          применить стандартный эффект <mark className="plugin">Grow Bounds</mark> до всех
          эффектов. После применения нужно указать количество пикселей, на которое нужно
          фиктивно расширить слой.
        </p>
        <VideoFigure
          caption="Применяем Grow Bounds"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/apply_grow_bounds.mp4"
        />
        <AdditionWarning>
          Иногда стандартный <mark className="plugin">Grow Bounds</mark> может криво
          работать или не помочь вовсе. Вместо него можно применить{" "}
          <mark className="plugin">Grow Bounds</mark> от <mark>Red Giant</mark>,
          находящийся в пакете <mark className="plugin">Trapcode Suite</mark>. Инструкция
          по его использованию не нужна, он работает аналогично как и встроенный{" "}
          <mark className="plugin">Grow Bounds</mark>.
        </AdditionWarning>
        <Divider>Разбираемся с краями у Saber</Divider>
        <p>
          Если вы зачем-то применили эффект <mark className="plugin">Saber</mark> на слой,
          размер которого отличается от размера композиции, например на слой-фигуру или
          прекомпозицию, то вам придётся всё переделывать. В таком случае{" "}
          <mark className="plugin">Grow Bounds</mark> не поможет.
        </p>
        <p>
          Для решения проблемы вам нужно создать <mark>Solid Layer</mark>, размер которого
          должен совпадать с размером композиции, и применить{" "}
          <mark className="plugin">Saber</mark> на него. Затем нужно синхронизировать
          маски - из слоя, из которого вы хотели изначально сделать обводку маской нужно
          прилинковать маску в <mark>Solid Layer</mark>, на котором применён{" "}
          <mark className="plugin">Saber</mark> нужного размера.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/linking_masks_for_saber.png"
          imgTitle="Соединяем маски для Saber"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему пропадают режимы наложения в Mode и Track Matte, когда я перевожу слой в 3D?">
        <p>
          Скорее всего у вас включен движок рендера{" "}
          <mark className="plugin">Advanced 3D</mark> или{" "}
          <mark className="plugin">Cinema 4D</mark>. В них, к сожалению, не поддерживаются
          режимы наложения, как вы бы ни хотели их применить. Для возвращения
          работоспособности функции режимов наложения нужно вернуть движок рендера на{" "}
          <mark className="plugin">Classic 3D</mark>.
        </p>
        <p>
          Для возвращения классического движка рендера - откройте настройки композиции с
          помощью комбинации клавиш <mark className="key">Ctrl + K</mark>, перейдите во
          вкладку <mark className="ui">3D Renderer</mark> и установите в параметре{" "}
          <mark className="ui">Renderer</mark> значение{" "}
          <mark className="plugin">Classic 3D</mark>.
        </p>
        <ImageFigure
          caption="Composition Settings"
          imgSrc="images/aftereffects/change_3d_renderer.png"
          imgTitle="Изменяем движок для рендера 3D-слоёв"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему у слоя не исчезает фон при использовании режимов наложения?">
        <p>
          Убедитесь в том, что по иерархии слой, на котором вы хотите применить режим
          наложения - находится выше, чем слои с фоном или остальными объектами. Режимы
          наложения не будут работать, если под слоем, на котором вы выбрали режим
          наложения, ничего не находится.
        </p>
        <p>
          Если вы хотите убрать фон из слоя - воспользуйтесь{" "}
          <mark className="plugin">Extract</mark> или{" "}
          <mark className="plugin">uni.unmult</mark> из пакета плагинов{" "}
          <mark className="plugin">Red Giant Universe</mark>.
        </p>
        <YouTubeVideo
          caption="Red Giant Universe Unmult"
          link="GGjIu0CZ1M4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как сделать прозрачный фон у слоя с эффектом Saber?">
        <p>
          По умолчанию <mark className="plugin">Saber</mark> рендерится на чёрном фоне, но
          в параметрах эффекта можно включить прозрачность. Для этого найдите параметр{" "}
          <mark className="ui">Render Settings</mark> и раскройте его. Затем найдите
          параметр <mark className="ui">Composite Settings</mark> и выберите в нём
          значение <mark className="ui">Transparent</mark>. После этого слой с{" "}
          <mark className="plugin">Saber</mark> станет прозрачным и вы сможете применять
          его поверх своей композиции или слоёв.{" "}
          <i style={{opacity: "0.5"}}>И режимы наложения не понадобятся.</i>
        </p>
        <ImageFigure
          caption="Включение прозрачности в Saber"
          imgSrc="images/aftereffects/transparent_saber.png"
          imgTitle="Включение прозрачности в Saber"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="тру комп дупликатор, композиция, прекомпоз, копирование, независимость"
        title="Продублировал композицию на таймлайне, но копия зависит от оригинала. Как сделать композиции независимыми друг от друга?"
      >
        <p>
          Копируя композицию с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + D</mark> на таймлайне - вы копируете ссылку на одну
          и ту же композицию, а не создаёте новую. Таким образом изменения в
          &quot;продублированной композиции&quot; будут отражаться и в оригинале. Для
          того, чтобы сделать композиции действительно независимыми - нужно клонировать
          нужную вам композицию в окне <mark className="ui">Project</mark>.
        </p>
        <VideoFigure
          caption="Правильное клонирование композиции"
          styleClass="figure_windows-dark"
          videoSrc={"images/aftereffects/duplicate_composition.mp4"}
        />
        <p>
          Если вам нужно клонировать одну и ту же композицию с указанием нужного
          количества копий, обновлением выражений, дублированием футажей и вложенных
          композиций или группировкой в одну папку - воспользуйтесь бесплатным<sup>1</sup>{" "}
          скриптом{" "}
          <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>{" "}
          на aescripts.
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
      </DetailsSummary>
      <DetailsSummary
        tag="перевернуть очерёдность слоёв"
        title="Как сделать последний слой первым на таймлайне?"
      >
        <p>
          Если вы хотите поменять очерёдность слоёв так, чтобы последний слой стал первый,
          а остальные перевернулись по очерёдности - вам нужно будет выделить первый слой
          от нужной точки и выделить с зажатым <mark className="key">Shift</mark>{" "}
          последний слой до нужной точки, а затем нажать на{" "}
          <mark className="key">Ctrl + X</mark> и потом{" "}
          <mark className="key">Ctrl + V</mark>.
        </p>
        <VideoFigure
          caption="Переворачиваем очерёдность слоёв"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/invert_layer_numeration.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Переместил слой из одной композиции в другую, но оно ушло за пределы моей композиции. Как его вернуть на своё место?">
        <p>
          Чтобы вернуть слой на место после временной метки, нажмите на{" "}
          <mark className="key">[</mark>. Если нужно расположить слой до временной метки -
          нажмите на <mark className="key">]</mark>.
        </p>
        <VideoFigure
          caption="Перемещаем слои по времени вокруг временной метки"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/move_layers_around_playhead.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Как обрезать композицию по краям слоёв, находящиеся в нём?">
        <AdditionDanger>
          Данная статья находится на ранней стадии разработки. Следите за обновлениями.
        </AdditionDanger>
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему первый кадр в композиции начинается не с нулевой секунды?">
        <p>
          Скорее всего вы при создании прекомпозиции указали галочку в параметре{" "}
          <mark className="ui">
            Adjust composition duration to the time span of the selected layers
          </mark>
          . Данная опция делает отсчёт кадров с времени начала самого раннего слоя в
          родительской композиции. То есть, если вы выделили три слоя, первый из них
          начинающийся на второй секунде, а последний на седьмой. А родительская
          композиция длится 10 секунд. Соответственно новая композиция начнёт отсчёт в
          первом кадре со второй секунды.
        </p>
        <p>
          Для установки верного стартового таймкода вам нужно открыть настройки композиции
          с помощью комбинации клавиш <mark className="key">Ctrl + K</mark> и в поле{" "}
          <mark className="ui">Start Timecode</mark> указать нужное значение, например{" "}
          <mark>00:00:00:00</mark>, чтобы отсчёт вёлся с нуля.
        </p>
        <VideoFigure
          caption="Composition Settings"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_start_timecode.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему не все параметры выравнивания текста доступны в окне Paragraph?">
        <p>
          Если вы создаёте текстовый слой простым нажатием на композицию, то вы создаёте
          слой без ограничений на высоту и ширину. В таком случае как вы представляете
          работу выравнивания текста по ширине, если оно явно не задано? Чтобы
          &quot;активировать&quot; оставшиеся четыре параметра выравнивания текста - вам
          нужно изначально создать слой в формате{" "}
          <mark className="ui">Paragraph Text</mark>, зажав{" "}
          <mark className="key">ЛКМ</mark> и нарисовав поле.
        </p>
        <VideoFigure
          caption="Создание Paragraph Text"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/create_paragraph_text.mp4"
        />
        <p>
          Вы также можете переконвертировать уже существующий текст в нужный формат с
          помощью <mark className="ui">Convert to Paragraph Text</mark>, предварительно
          выбрав инструмент <mark className="ui">Text</mark>. После конвертации вы можете
          задать нужную ширину и высоту текстового слоя.
        </p>
        <VideoFigure
          caption="Конвертация текстового слоя в Paragraph Text"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/convert_to_paragraph_text.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем отличается Mocha AE от Mocha Pro?">
        <p>
          В стандартную поставку <mark className="app">Adobe After Effects</mark> входит
          встроенный плагин для трекинга различных объектов{" "}
          <mark className="plugin">Mocha AE</mark>. Но у него функционал, по сравнению с
          Pro-версией, несколько урезан.
        </p>
        <p>
          В встроенной <mark className="plugin">Mocha AE</mark> вы не сможете
          стабилизировать видео, делать клин-ап (удалять объекты), использовать магнитное
          лассо и прочее. <mark className="plugin">Mocha Pro</mark> же лишена этих
          ограничений, а также можно вставить в{" "}
          <mark className="app">Adobe Premiere Pro</mark> и другие программы.
        </p>
        <AdditionInfo>
          Подробнее о различиях между этими версиями вы можете прочитать на{" "}
          <a href="https://support.Boris FX.com/hc/en-us/articles/10232625711117-I-use-Mocha-AE-what-is-the-difference-between-Mocha-AE-and-Mocha-Pro-Do-I-need-Mocha-Pro">
            официальном сайте Boris FX
          </a>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Почему After Effects иногда сам меняет начертание шрифта?">
        <p>
          Предположим, что вы решили написать какой-нибудь текст определённым шрифтом. Но
          вот незадача, шрифт при написании какого-то хрена меняется. Если вы уверены, что
          с шрифтом всё в порядке, например в <mark className="app">Adobe Photoshop</mark>{" "}
          всё работает отлично, то скорее всего вы столкнулись с редким багом, который
          может встретиться на абсолютно любой версии{" "}
          <mark className="app">Adobe After Effects</mark>. К сожалению, не все шрифты,
          прекрасно работающие в <mark className="app">Adobe Photoshop</mark> и{" "}
          <mark className="app">Adobe Illustrator</mark> будут прекрасно работать и в{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <p>
          Суть бага заключается в том, что при смене начертания шрифта,{" "}
          <mark className="app">Adobe After Effects</mark> почему-то оставляет на
          некоторых буквах предыдущий вариант шрифта. Или просто сбрасывает стиль до{" "}
          <mark className="app">Times New Roman</mark>. Также такой багованный шрифт не
          реагирует на кнопки <mark className="ui">Bold</mark> и{" "}
          <mark className="ui">Italic</mark>.
        </p>
        <VideoFigure
          caption="Проблема кривого начертания на примере Cascadia Mono"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/font-reset_bug.mp4"
        />
        <AdditionWarning>
          Приведённые ниже способы{" "}
          <u>
            <b>не являются панацеей</b>
          </u>{" "}
          для решения этой проблемы и позволяют лишь исключить часть проблем при
          использовании конкретного шрифта.
        </AdditionWarning>
        <ul>
          <li>
            Для попытки устранения проблемы попробуйте переконвертировать ваш шрифт в
            другой формат, например из <mark className="file">TTF</mark> в{" "}
            <mark className="file">OTF</mark> или наоборот. Вполне возможно, что тот, кто
            опубликовал шрифт, срукожопил и файл оказался непригоден для использования в
            некоторых программах. Ну или просто скачайте нужный шрифт из другого
            источника, например <a href="https://fonts.google.com/">Google Fonts</a>.
          </li>
          <li>
            Если совет выше не помог, то попробуйте переключить рендер на процессор в{" "}
            <mark className="ui">Project Manager</mark> и почистить кэши программы в{" "}
            <mark className="ui">Edit &gt; Purge &gt; All Memory</mark>.
          </li>
          <li>
            Если ваш шрифт работает прекрасно, но при попытке написать что-то на кириллице
            - сбрасывается, то убедитесь в том, что шрифт действительно поддерживает
            кириллицу. Если шрифт не поддерживает кириллицу, то попробуйте найти на
            просторах интернета ваш шрифт с поддержкой кириллицы или договоритесь с
            заказчиком о смене шрифта в проекте, если это возможно.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="Как открыть несколько экземпляров программы и работать в разных проектах?">
        <AdditionDanger>
          Использование нескольких открытых экземпляров{" "}
          <mark className="app">Adobe After Effects</mark> может привести к увеличению
          потребления оперативной памяти и остальных ресурсов вашего устройства.
          Используйте эту опцию с умом!
        </AdditionDanger>
        <p>
          Иногда возникает ситуация, когда вы закончили работу и поставили свой проект на
          рендер, но в это время нужно открыть другой проект и внести в него правки. А
          сделать вы это не можете, потому что программа занята экспортом другой
          композиции. По умолчанию <mark className="app">Adobe After Effects</mark> не
          позволяет открывать больше одного экземпляра, но разработчики оставили
          возможность запуска нескольких инстанций программы.
        </p>
        <ContentSwitcher
          macContent={
            <div>
              <p>
                Чтобы открыть ещё один экземпляр - нужно перейти в директорию{" "}
                <mark className="path">~/Library/Applications/After Effects 20XX</mark>,
                затем нажать <mark className="key">ПКМ</mark> по{" "}
                <mark className="app">Adobe After Effects 20XX</mark> и выбрать{" "}
                <mark className="ui">Показать содержимое пакета</mark>. После открытия
                содержимого перейдите в <mark className="ui">Contents/MacOS</mark> и
                нажмите два раза по файлу <mark className="app">Adobe After Effects</mark>
                . У вас должна открыться консоль и открыться ещё один экземпляр программы.
              </p>
              <YouTubeVideo
                caption="Как открыть несколько инстанций Adobe After Effects"
                link="k1x1goE2F10"
              />
            </div>
          }
          windowsContent={
            <div>
              <p>
                Чтобы убрать данное ограничение - установите ключ{" "}
                <mark className="code">-m</mark> в конец ярлыка с программой. Для этого
                откройте свойства ярлыка с{" "}
                <mark className="app">Adobe After Effects</mark> и переместите курсор до
                конца в поле <mark className="ui">Объект</mark>. Затем напишите{" "}
                <mark className="code">-m</mark> и нажмите на{" "}
                <mark className="ui">Применить</mark> в правом нижем углу окна. После
                этого вы сможете запускать несколько экземпляров{" "}
                <mark className="app">Adobe After Effects</mark> с помощью этого ярлыка и
                работать с программами как обычно.
              </p>
              <VideoFigure
                caption="Включение возможности открытия нескольких экземпляров Adobe After Effects"
                styleClass="figure_windows-dark"
                videoSrc="images/aftereffects/enable_multiple_ae_instances.mp4"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title="Я где-то слышал про секретные настройки программы. Как их открыть и полезны ли они?">
        <p>
          Разработчики из <mark>Adobe</mark> оставили некоторые функции от любопытных лиц
          и поместила их в отдельную категорию <mark className="ui">Secret</mark>, только
          вот не учли одно &quot;но&quot;. Они не оставили там ничего интересного, прям
          совсем.
        </p>
        <p>
          Для того, чтобы открыть &quot;секретные настройки&quot; в{" "}
          <mark className="app">Adobe After Effects</mark> - нужно открыть любой раздел
          настроек в <mark className="ui">Edit &gt; Preferences</mark> с зажатой клавишей{" "}
          <mark className="key">Shift</mark>. После этого у вас откроется окно{" "}
          <mark className="ui">Preferences</mark>, в котором появится раздел{" "}
          <mark className="ui">Secret</mark>, куда вы можете перейти.
        </p>
        <AdditionWarning>
          Учтите, что клавиша <mark className="key">Shift</mark> должна быть зажата до тех
          пор, пока окно с настройками не откроется.
        </AdditionWarning>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/secret_settings.png"
          imgTitle="Секретные настройки"
          styleClass="figure_windows-dark"
        />
        <p>
          В последних версиях <mark className="app">Adobe After Effects</mark> там
          находятся всего лишь три настройки. Иногда отключение кэширование слоя и
          автоматическая очистка кадров может вам помочь, если вы испытываете проблемы с
          переполнением оперативной памяти при экспорте композиции.
        </p>
        <AdditionWarning>
          Изменение этих параметров может серьёзно сказаться на стабильности программы.{" "}
          <b>
            <u>Выполняйте действия на свой страх и риск.</u>
          </b>
        </AdditionWarning>
        <ul>
          <li>
            <mark className="ui">Disable Layer Cache</mark> - ожидаемо отключает
            кэширование слоёв.
          </li>
          <li>
            <mark className="ui">Purge Every X Frames During Make Movie</mark>, где вместо{" "}
            <mark>X</mark> любое число от <mark>0</mark> до <mark>99999</mark> -
            автоматически очищать каждый выбранный кадр при рендере последовательности
            изображений.
          </li>
          <li>
            <mark className="ui">Ignore Sequence Rendering Errors</mark> позволяет
            программе забить болт на ошибки при рендере последовательности изображений. В
            повседневной практике параметр бесполезен, имхо.
          </li>
        </ul>
      </DetailsSummary>
      <AdditionInfo>
        Ответы на некоторые возникающие вопросы, связанные с интерфейсом, находятся в
        другом разделе -{" "}
        <a
          href="#interface"
          onClick={(e) => {
            e.preventDefault();

            const target = document.getElementById("interface");

            if (target) {
              const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

              const padding = Math.min(
                10 + (14 - 10) * ((window.innerWidth - 320) / (768 - 320)),
                14
              );

              const y =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                padding;
              window.scrollTo({top: y, behavior: "smooth"});
            }
          }}
        >
          Интерфейс
        </a>
        .
      </AdditionInfo>
    </div>
  );
};

export default AEFromNewbies;
