import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import ContentSwitcher from "../../../components/features/ContentFilter";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {Divider} from "antd";

const AEFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/FromNewbies.tsx" />
      <DetailsSummary
        tag="для новичка, первый раз, только открыл афтер"
        title="Я первый раз установил и открыл After Effects, с чего бы мне начать обучение?"
      >
        <p>
          Если вы только начинаете свой путь в мире композитинга и никогда не работали с
          программами, такими как <mark className="app">After Effects</mark>, то мы
          рекомендуем вам пройти курс{" "}
          <a href="https://www.youtube.com/playlist?list=PLcN7xY5E2wrmIU__8uNIHglZTyZ29RMIM">
            Основы After Effects от Ильи Зернова
          </a>
          . Данный курс поможет вам освоить интерфейс программы и научиться работать с
          ключевыми кадрами, титрами и эффектами.
        </p>
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
          Если вы уже знакомы с интерфейсом, но всё ещё чувствуете себя неуверенно,
          советую изучить каналы на YouTube из списка ниже, которые помогут вам прокачать
          свои навыки.
        </p>
        <div className="flexible-links">
          <a href="https://www.youtube.com/@TutoView">Tutorial View+</a>
          <a href="https://www.youtube.com/@BenMarriott">Ben Marriott</a>
          <a href="https://www.youtube.com/@AEPlug">AEPlug</a>
          <a href="https://www.youtube.com/@JakeInMotion">Jake In Motion</a>
          <a href="https://www.youtube.com/@SmertimbaGraphics/videos">
            Smertimba Graphics
          </a>
        </div>
        <p>
          Также я могу порекомендовать несколько отличных курсов, как бесплатных, так и
          платных.
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
        <p style={{textAlign: "center", fontSize: "0.95rem", fontWeight: "700"}}>
          Надеюсь, вы найдёте что-то полезное для себя. Удачи в ваших начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="сленг, жаргон, сокращения, словосочетания, говор"
        title="Не понимаю термины от других пользователей After Effects, проясните!"
      >
        <p>
          Когда пользователь только начинает изучать{" "}
          <mark className="app">After Effects</mark> - у него может возникнуть
          недопонимания в процессе общения с другими пользователями программы. Это
          нормально, у каждой сферы есть свой сленг и местные понятия. В этом списке мы
          собрали часто используемые термины и слова.
        </p>
        <ul>
          <li>
            <mark className="word">Аджастмент</mark> - это корректирующий слой, который в
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
            <mark className="word">Альфа-канал</mark> - это четвёртый канал в цветовой
            модели RGBA. Когда мы говорим об альфа-канале, чаще всего имеем в виду
            прозрачность, которую можно наложить на изображение. Например,{" "}
            <mark className="file">.png</mark> поддерживает множество уровней
            прозрачности, позволяя создавать изображения с плавными переходами от
            полностью прозрачного до полностью непрозрачного. В отличие от этого,{" "}
            <mark className="image">GIF</mark> поддерживает только бинарную прозрачность,
            что означает, что изображение может быть либо полностью прозрачным, либо
            полностью непрозрачным, без плавных затуханий. Если вы хотите сохранить видео
            с прозрачностью, вам подойдут контейнеры <mark className="file">.mov</mark>,{" "}
            <mark className="file">.avi</mark> или <mark className="file">.webm</mark>, в
            которые вы можете закодировать видео с кодеком, который поддерживает
            альфа-канал. Однако, будьте осторожны с <mark className="file">.mp4</mark>: в
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
            <mark className="word">Автотрейс</mark> - функция, которая помогает
            автоматически создавать маски для слоя, основываясь на его краях. Чтобы
            воспользоваться этой функцией, просто перейдите в{" "}
            <mark className="ui">Layer &gt; Auto-Trace</mark>, предварительно выделив
            нужный слой.
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
            Когда говорят о чём-то <mark className="word">борисовском</mark>,{" "}
            <mark className="word">сапфировском</mark> или{" "}
            <mark className="word">континуумовском</mark>, то обычно собеседник имеет в
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
            <mark className="word">Векторная графика</mark> или{" "}
            <mark className="word">вектор</mark> - форма представления изображения с
            помощью математических формул и геометрических объектов (линии, кривые,
            многоугольники). Отличительная особенность такого типа изображений -
            детализация не падает при увеличении масштаба холста.
            <AdditionInfo>
              Если вы нажмёте на <mark className="ui">Continuously Rasterize</mark> у слоя
              - при увеличении предпросмотра вы никогда не добьётесь &quot;векторного
              предпросмотра&quot;. Это происходит потому, что{" "}
              <mark className="app">After Effects</mark> всегда растрирует предпросмотр в
              соответствии с заданным в настройках разрешением композиции.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Растровая графика</mark> - файл изображения или видео
            состоящее из цветных пикселей. Чем выше разрешение, тем лучше качество.
          </li>
          <li>
            <mark className="word">Ватермарк</mark>, <mark className="word">вотерка</mark>{" "}
            или <mark className="word">водяной знак</mark> - некая защита от копирования
            недобросовестными заказчиками. Чаще всего лепится полупрозрачным текстовым
            слоем с ником или именем исполнителя.
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
            <mark className="word">Говорящая голова</mark> - формат видео в котором, как
            правило, присутствует только диктор, снятый крупным планом.
          </li>
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
            <mark className="word">Инфлюкс</mark> - сторонний плагин{" "}
            <mark className="plugin">Autokroma Influx</mark>, позволяющий импортировать в{" "}
            <mark className="app">After Effects</mark> неподдерживаемые типы файлов,
            например <mark className="file">.mkv</mark> или{" "}
            <mark className="file">.flv</mark>.
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
            <mark className="word">Кодек</mark> - программа или библиотека, которая
            кодирует или декодирует данные видео. С помощью кодеков компьютер понимает как
            ему работать с различными форматами видео-файлов. Существует несколько типов
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
                вывести такой файл из <mark className="app">After Effects</mark>, вам
                нужно выбрать <mark className="file">Quicktime</mark> из списка доступных
                кодеков для вывода.{" "}
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
                      стоит их перекодировать в монтажный кодек, например в{" "}
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
                кодеки от Google в контейнере <mark className="file">.webm</mark> с
                возможностью вывода с альфа-каналом. Видео с таким кодеком обычно
                используются для размещения на веб-страницах. За счёт своих алгоритмов
                сжатия видео с кодеком <mark className="video">VP9</mark> или{" "}
                <mark className="video">AV1</mark> имеют гораздо меньший вес по сравнению
                с видео в кодеке <mark className="video">H.264</mark> или{" "}
                <mark className="video">H.265</mark>.
                <AdditionInfo>
                  Из <mark className="app">After Effects</mark> файлы с таким кодеком
                  стандартными средствами вывести не получится, для этого нужно перегнать
                  ваше видео через конвертер, например{" "}
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
            <mark className="file">.mp4</mark>, <mark className="file">.mov</mark> или{" "}
            <mark className="file">.mkv</mark>.
          </li>
          <li>
            <mark className="word">Коллект файл</mark> - функция{" "}
            <mark className="ui">Collect Files</mark> для сборки всех файлов, используемые
            в вашем проекте <mark className="app">After Effects</mark> в одну папку. Эту
            папку вы можете заархивировать и отправить другому человеку или перенести в
            другое место, например на внешний жёсткий диск.
            <AdditionInfo>
              Данная функция находится в{" "}
              <mark className="ui">File &gt; Dependencies &gt; Collect Files</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Композиция</mark> или{" "}
            <mark className="word">композ</mark> - некая сцена вашего проекта в{" "}
            <mark className="app">After Effects</mark>. В композиции обычно собирают некую
            сцену с слоями, фигурами, эффектами или видео-файлами. У каждой композиции
            есть частота кадров, разрешение и соотношение пикселя.
            <AdditionInfo>
              Чтобы открыть окно настроек композиции - используйте комбинацию клавиш{" "}
              <mark className="key">Ctrl + K</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Компсеттер</mark> - бесплатный сторонний JSX-скрипт{" "}
            <a href="https://github.com/msongz/rd_CompSetter">rd_CompSetter</a> для
            одновременного изменения параметров нескольких композиций.
            <AdditionInfo>
              Инструкцию по установке сторонних плагинов и скриптов вы можете найти в{" "}
              <a href="#2.1">пункте 2.1</a>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Кубик</mark> - индикация у слоя, отвечающая на вопрос
            &quot;слой или эффект находится в трёхмерном пространстве?&quot;. С такими
            слоями можно взаимодействовать в 3D пространстве, например управлять камерой
            или положение по одной из трёх осей.
          </li>
          <li>
            <mark className="word">Могрт</mark> или <mark className="word">Mogrt</mark> -
            шаблон анимационного дизайна, который создаётся в{" "}
            <mark className="app">After Effects</mark>, чтобы использовать в дальнейшем в
            проектах, созданные в <mark className="app">Premiere Pro</mark>.
          </li>
          <li>
            <mark className="word">Мокка</mark> или <mark className="word">моча</mark> -
            плагин <mark className="plugin">Boris FX Mocha</mark>, которая используется
            для трекинга и привязки объектов. Данный плагин включён в базовую поставку{" "}
            <mark className="app">After Effects</mark>, но в урезанном виде. Для
            разблокировки некоторых функций требуется полная версия{" "}
            <mark className="plugin">Boris FX Mocha Pro</mark>.{" "}
            <a href="https://support.Boris FX.com/hc/en-us/articles/10232625711117-I-use-Mocha-AE-what-is-the-difference-between-Mocha-AE-and-Mocha-Pro-Do-I-need-Mocha-Pro">
              О различиях между AE и Pro...
            </a>
          </li>
          <li>
            <mark className="word">Морфинг</mark> - название техники для плавного
            превращения одной фигуры в другую, часто применяется с фигурными слоями.
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
            <mark className="word">Моушен блюр</mark> - размытие в движении. С помощью
            него можно сделать плавное движение объекта. Это можно сделать с помощью
            включения <mark className="ui">Motion Blur</mark> у слоя или применив эффект{" "}
            <mark className="plugin">CC Force Motion Blur</mark>.
          </li>
          <li>
            <mark className="word">Мультифрейм рендер</mark> или{" "}
            <mark className="word">MFR</mark> - относительно свежая функция{" "}
            <mark className="ui">Multi Frame Render</mark>, добавленная в{" "}
            <mark className="app">After Effects 2022</mark>, призванная ускорить время
            рендера за счёт рендера несколько кадров одновременно. Для раскрытия
            потенциала этой функции требуется многоядерный процессор.
          </li>
          <li>
            <mark className="word">Нулевой объект</mark> или{" "}
            <mark className="word">нуль</mark> - пустой объект, который используется для
            расположения контроллеров или манипуляторов. Полезен при привязке нескольких
            объектов в одно целое.{" "}
          </li>
          <li>
            <mark className="word">Одинаковый год</mark> - часто встречается в контексте
            вопроса &quot;у тебя точно одинаковые версии программ от Adobe стоят?&quot;.
            Данный вопрос задаётся в случае когда пользователь, например, не может
            подсоединить <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Media Encoder</mark> между собой.
            <AdditionWarning>
              Программы <mark className="app">After Effects</mark>,
              <mark className="app">Premiere Pro</mark> и
              <mark className="app">Media Encoder</mark> разных годов, например{" "}
              <mark>2020</mark>, <mark>2018</mark>и <mark>2022</mark> не совместимы друг с
              другом.
            </AdditionWarning>
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
            <mark className="word">Перекодируй видос</mark> - призыв к процессу
            конвертации исходников в монтажный кодек, чаще всего через{" "}
            <mark className="app">Media Encoder</mark> или{" "}
            <mark className="app">Shutter Encoder</mark>.
          </li>
          <li>
            <mark className="word">Перелинкуй исходники</mark> - переподключение
            потерянных файлов в вашем проекте. Это делается с помощью{" "}
            <mark className="key">ПКМ</mark> по потерянным исходникам в окне{" "}
            <mark className="ui">Project</mark> и выбора пункта{" "}
            <mark className="ui">Replace Footage</mark>.
            <AdditionInfo>
              Если остальные потерянные исходники находятся в одной папке, то они
              автоматически подключатся после указания первого потерянного файла.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Плагин</mark> - подключаемые, обычно встроенные или
            сторонние эффекты с расширением <mark className="file">.aex</mark> для{" "}
            <mark>Windows</mark> или <mark className="file">.plugin</mark> для{" "}
            <mark>macOS</mark>. Часто применяется с выражением &quot;где скачать?&quot;.
          </li>
          <li>
            <mark className="word">Плейхед</mark> - вертикальная временная метка,
            показывающая где находится точка текущего кадра в предпросмотре.
          </li>
          <li>
            <mark className="word">Превью</mark> или{" "}
            <mark className="word">предпросмотр</mark> - то, что вы видите на вашем экране
            в окне, где отображается предварительный вывод вашей композиций.
          </li>
          <li>
            <mark className="word">Зайди в окно превью</mark> - вам предлагают открыть
            окно с настройками предварительного просмотра с помощью{" "}
            <mark className="ui">Window &gt; Preview</mark>. Обычно в таких случаях у
            пользователя стоят кривые настройки FPS (видео из-за этого идёт слишком быстро
            или медленно) или плохое качество предпросмотра (Auto или Quarter вместо
            Full).
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
            <mark className="word">Пресет</mark> - заготовленный набор эффектов формата{" "}
            <mark className="file">.ffx</mark> для дальнейшего применения. Может
            сохраняться вместе с анимацией по ключам.
            <AdditionWarning>
              Не все пресеты, созданные сторонними пользователями могут корректно работать
              с вашим проектом, иногда их надо отредактировать под свои нужды.
            </AdditionWarning>
          </li>
          <li>
            <mark className="word">Прокси</mark> - урезанная в качестве (зависит от того,
            в каком кодеке и разрешении пользователь создаст прокси) и более
            производительная копия исходника для монтажа за счёт использования монтажного
            кодека. Его нужно создавать, если вы имеете проблемы с производительностью
            проекта из-за большого разрешения или когда нужна более стабильная работа с
            проектом. Прокси можно создать прямо в{" "}
            <mark className="app">After Effects</mark> или с помощью сторонних программ,
            например <mark className="app">Media Encoder</mark>,{" "}
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
                  <mark className="app">After Effects</mark> можно в окне{" "}
                  <mark className="ui">Project</mark>, выбрав нужный файл, нажав по нему{" "}
                  <mark className="key">ПКМ</mark> и выбрав{" "}
                  <mark className="ui">Set Proxy &gt; File</mark>.
                </li>
                <li>
                  По умолчанию, если у исходника или композиции имеется прокси, то в
                  финальный рендер попадает оригинальный файл. Это поведение можно
                  изменить в окне <mark className="ui">Render Settings</mark>, выбрав в
                  пункте <mark className="ui">Proxy Use</mark> значение{" "}
                  <mark className="ui">Use All Proxies</mark>.
                </li>
              </ul>
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
            <mark className="word">Ракета</mark> - окно{" "}
            <mark className="ui">Project Settings</mark> в котором обычно меняется
            цветовое пространство проекта или настраивается использование GPU.
            <AdditionInfo>
              Данное окно открывается с помощью комбинации клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Редьюс</mark> - функция{" "}
            <mark className="ui">Reduce Project</mark> которая облегчает ваш проект за
            счёт удаления всех объектов, кроме выбранной композиции в окне{" "}
            <mark className="ui">Project</mark>. Сделать это можно с помощью{" "}
            <mark className="ui">File &gt; Dependencies &gt; Reduce Project</mark>.
            <AdditionWarning>
              Если вы первый раз пользуетесь этой функцией - создайте на крайний случай
              копию файла вашего проекта, вдруг эта функция удалит не те файлы, как
              планировалось.
            </AdditionWarning>
            Также существует пункт <mark className="ui">Remove Unused Footage</mark> для
            удаления неиспользованных исходников в вашем проекте.
          </li>
          <li>
            <mark className="word">Рендер</mark> - процесс генерации кадров и дальнейшей
            их упаковки в нужный контейнер и кодек. Часто используется в контексте вывода
            композиции в видео или изображение.
          </li>
          <li>
            <mark className="word">Референс</mark> - синоним к словам{" "}
            <mark className="word">пример</mark> и <mark className="word">образец</mark>.
            Используется для иллюстрации анимации, вдохновения или согласования своего
            видения с заказчиком.
          </li>
          <li>
            <mark className="word">Ромбик</mark>, <mark className="word">ключ</mark> или{" "}
            <mark className="word">кейфрейм</mark> - ключевые кадры или же метки, на
            основе которых создаётся движения того или иного параметра слоя. Данные метки
            указывают на то, как будет выглядеть анимированный элемент в конкретный момент
            времени.
          </li>
          <li>
            <mark className="word">Ротобраш</mark> - стандартный инструмент в{" "}
            <mark className="app">After Effects</mark> для выделения движущегося объекта в
            кадре. Часто используется для создания обводки вокруг объекта или отделения от
            фона.
          </li>
          <li>
            <mark className="word">Ротоскоп</mark> - процесс разделения сцены или кадра на
            несколько слоёв.
          </li>
          <li>
            <mark className="word">Семплы</mark> - часто применяется в 3D-плагинах или в
            настройке размытия в движении. Чем больше семплов, тем лучше картинка, но хуже
            производительность.
          </li>
          <li>
            <mark className="word">Скрипт</mark> - файлы формата{" "}
            <mark className="file">.jsx</mark> или
            <mark className="file">.jsxbin</mark>, выполняющее определённые инструкции или
            действия. Могут быть встроенными или сторонними. Если у вас есть навыки в
            программировании скриптов - вы можете создать свой скрипт, выполняющую нужную
            вам задачу. <a href="#2.1">Как установить сторонние скрипты?</a>
          </li>
          <li>
            <mark className="word">Солид</mark> - слой с заданным цветом. Часто
            применяется как фон или как инициализатор 3D-эффектов, например{" "}
            <mark className="plugin">Trapcode Particular</mark>.
          </li>
          <li>
            <mark className="word">Солнышко</mark> или{" "}
            <mark className="word">звёздочка</mark> - пункт{" "}
            <mark className="ui">Continuously Rasterize</mark> для уменьшения
            &quot;пикселей&quot; у векторных объектов.
            <AdditionInfo>
              При включенной опции <mark className="ui">Continuously Rasterize</mark> у
              слоя - при увеличении предпросмотра вы никогда не добьётесь &quot;векторного
              предпросмотра&quot;. Это происходит потому, что{" "}
              <mark className="app">After Effects</mark> всегда растрирует предпросмотр в
              соответствии с заданным в настройках разрешением композиции.
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
            <mark className="word">Топик стартер</mark> - человек, который изначально
            задал вопрос или поднял определённую тему в чате.
          </li>
          <li>
            <mark className="word">Трансформ</mark> - настройка или анимация базовых
            свойств слоя, например положение или размер. Иногда означает встроенный эффект{" "}
            <mark className="plugin">Transform</mark>.
          </li>
          <li>
            <mark className="word">Элемент 3Д</mark> - сторонний плагин{" "}
            <mark className="plugin">Element 3D</mark> от VideoCopilot, позволяющий
            создавать 3D-сцены в композициях <mark className="app">After Effects</mark>.
          </li>
          <li>
            <mark className="word">Трекинг</mark> - механизм определения местоположения
            движущегося объекта для дальнейшей его привязки к другому объекту. Часто
            применяется для замены экранов мониторов или биллбордов на видео.
          </li>
          <li>
            <mark className="word">Туториал</mark> - обучающее видео о том, как
            пользоваться программой или как использовать определённый эффект или плагин.
            Такие видео помогают новичку ориентироваться в интерфейсе программы и иногда
            раскрывают некоторые хитрости при создании эффектов.
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
            <mark className="word">Хоткей</mark> - сокращение от &quot;горячие
            клавиши&quot;, означает некую комбинацию клавиш, которые должен знать
            пользователь для выполнения нужного действия.
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
            <mark className="word">Шаблон</mark> - некий заготовок проекта или пресета для
            уменьшения времени создания композиций или поиска вдохновения.
          </li>
          <li>
            <mark className="word">Шейп</mark> - от английского{" "}
            <mark className="word">shape</mark>, означает слой с фигурой.
          </li>
          <li>
            <mark className="word">Эдиты</mark> - обычно это видео под музыку, за основу
            которого берутся кадры из фильмов, аниме или игр. Часто распространён на
            YouTube и TikTok с очень сильным разбросом по качеству изготовления таких
            видео. И иногда порой нарезку со вспышками тоже называют эдитами, что
            абсурдно.
          </li>
          <li>
            <mark className="word">Экстеншен</mark> - расширения, часто запакованные в{" "}
            <mark className="file">.zxp</mark>. После установки таких расширений - они
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
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="хоткеи, горячие клавиши, шорткаты, ускорение работы"
        title="А есть список популярных комбинаций клавиш для работы в After Effects?"
      >
        <p>
          Горячие клавиши могут помочь ускорить ваш рутинный процесс нахождения нужной
          функции программы, поэтому ниже приведены популярные у многих пользователей
          комбинации.
        </p>
        <AdditionInfo>
          В таблице приведены комбинации для устройств на <mark>Windows</mark>. На{" "}
          <mark>macOS</mark> <mark className="key">Ctrl</mark> равен{" "}
          <mark className="key">Command</mark>, а <mark className="key">Alt</mark> равен{" "}
          <mark className="key">Option</mark>.
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
                Открыть <mark className="file">.aep</mark> проект, с которым вы в
                последний раз работали
              </td>
              <td>
                <mark className="key">Ctrl + Alt + Shift + P</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть или выполнить недавно использованный скрипт формата{" "}
                <mark className="file">.jsx</mark> или{" "}
                <mark className="file">.jsxbin</mark>
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
                <mark className="file">.ffx</mark> на выделенный слой
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
                <mark className="key">+</mark> или <mark className="key">-</mark>
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
        <AdditionInfo>
          Более подробный список комбинаций клавиш вы можете прочесть{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/keyboard-shortcuts-reference.html">
            на официальном сайте Adobe
          </a>{" "}
          или в окне <mark className="ui">Keyboard Shortcuts</mark>. Всего шорткатов
          достаточно много, но по моему мнению, те что указаны тут - чаще всего используют
          в повседневных задачах.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="что нового, фишки, обновления, апдейты"
        title="Где я могу узнать об нововведениях в обновлениях After Effects?"
      >
        <p>
          Обычно на сайте <mark>Adobe</mark> в день выхода публичной стабильной версии
          выкладываются основные нововведения. Это сделано для того, чтобы каждый прохожий
          не спрашивал из каждого угла <mark className="quote">А что обновилось то?</mark>
          . Ещё время от времени <mark>Adobe</mark> выкладывает на сайт список выявленных
          неполадок и старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/after-effects/using/whats-new.html">
            Что нового в After Effects последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки в After Effects
          </a>
        </div>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">After Effects</mark>, а также сторонние плагины, чтобы
          исключить возможные проблемы при дальнейшем использовании программы. Многие баги
          старых версий исправляются в более новых, например утечка ОЗУ или смещение кадра
          при экспорте.
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
              <mark className="app">After Effects</mark> с указанием английского языка в
              установщике. Или достаточно просто переустановить программу сразу на
              английском языке, предварительно почистив все &quot;хвосты&quot;.
            </li>
          </ul>
        </AdditionDanger>
        <ContentSwitcher
          macContent={
            <div>
              <Divider>Меняем язык с помощью консоли программы</Divider>
              <AdditionWarning>
                Этот способ смены языка работает только с{" "}
                <mark className="app">After Effects</mark> версии <mark>24.x</mark> и
                новее.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Command + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
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
                - перезапускаем <mark className="app">After Effects</mark>.
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
                <mark className="app">After Effects</mark>.
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
                нужное место - перезапустите <mark className="app">After Effects</mark>,
                если он у вас был запущен. Теперь программа должна запустится на
                английском языке и ошибка в проекте должна пропасть.
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
                Этот способ смены языка работает только с{" "}
                <mark className="app">After Effects</mark> версии <mark>24.x</mark> и
                новее.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Ctrl + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
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
                - перезапускаем <mark className="app">After Effects</mark>.
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
                <mark className="app">After Effects</mark>.
              </AdditionInfo>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title="В каком случае нужно использовать After Effects, а в каком - Premiere Pro?">
        <p>
          Начнём сразу с того, что эти две программы используются для совершенно разных
          целей. В <mark className="app">After Effects</mark> конечно можно смонтировать
          двухчасовой ролик, а в <mark className="app">Premiere Pro</mark> - сделать всю
          работу по композингу. Но это всё звучит как полнейший бред до такой степени, что
          некоторые пользователи до сих пор почему-то используют программы не для того,
          для чего они созданы. Давайте разъясним, для чего нужно использовать{" "}
          <mark className="app">After Effects</mark>, а для чего{" "}
          <mark className="app">Premiere Pro</mark>.
        </p>
        <ul>
          <li>
            В <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Premiere Pro</mark> можно делать короткие видеоролики до
            одной минуты, а также вешать на них различные эффекты. Обе программы отлично
            подойдут для создания <mark className="word">рилсов</mark> и{" "}
            <mark className="word">тиктоков</mark>, а также создания различных анонсов,
            анимированных афиш, баннеров и коротких
            <mark className="word">эдитов</mark>.
          </li>
          <li>
            В <mark className="app">Premiere Pro</mark> можно создавать видеоролики с
            использованием моушен-дизайна с нуля, но работа с анимацией в этой программе
            реализована настолько неудобно, что уж проще сделать моушен-дизайн в{" "}
            <mark className="app">After Effects</mark>, а затем вывести оттуда композиции
            и импортировать их в <mark className="app">Premiere Pro</mark>.
          </li>
          <li>
            <mark className="app">After Effects</mark> - программа не для создания очень
            длинных видеороликов, так как работает с памятью и исходниками совершенно по
            другому, в отличие от <mark className="app">Premiere Pro</mark>. Даже если вы
            и выполните всю работу по созданию длинного видеоролика в{" "}
            <mark className="app">After Effects</mark> (представлю, сколько нервов уйдет
            из-за <mark>Out of Memory</mark>), то время и скорость рендера вас явно не
            впечатлит. Лучше соберите проект изначально в{" "}
            <mark className="app">Premiere Pro</mark> и выдёргивайте только нужные кусочки
            для дальнейшего редактирования в <mark className="app">After Effects</mark>{" "}
            или создавайте короткие композиции и выводите их частями, а потом склеивайте
            их в <mark className="app">Premiere Pro</mark>.
            <AdditionDanger>
              В <mark className="app">After Effects</mark> можно делать композиции длиной
              максимум до трёх часов, но крайне не рекомендуется делать их с такой длиной.
            </AdditionDanger>
          </li>
          <li>
            <mark className="app">After Effects</mark> не годится для обработки звука и
            голоса, несмотря на наличие нескольких встроенных эффектов, например{" "}
            <mark className="plugin">Echo</mark> или{" "}
            <mark className="plugin">Reverb</mark>. Для этого хорошо подходит{" "}
            <mark className="app">Premiere Pro</mark> или{" "}
            <mark className="app">Audition</mark> за счёт удобной работы с несколькими
            аудиодорожками и поддержкой VST-плагинов.
          </li>
          <li>
            В <mark className="app">Premiere Pro</mark> можно и нужно делать длинные
            видеоролики, например подкасты, фильмы, короткометражки или сериалы. Если вы
            хотите использовать <mark className="app">After Effects</mark> в длинном видео
            - импортируйте кусочек вашего видео, например с помощью{" "}
            <mark className="ui">Replace with After Effects Composition</mark> и после
            редактирования экспортируйте оттуда композиции в монтажный кодек, например в{" "}
            <mark className="video">Apple Prores 4444</mark>. Затем замените нужный кусок
            на то, что вы экспортировали из <mark className="app">After Effects</mark> и
            продолжайте работу дальше в <mark className="app">Premiere Pro</mark>.
            <AdditionWarning>
              Не рекомендуется частое использование функции <mark>Dynamic Link</mark>, так
              как на больших проектах его работа может быть крайне нестабильна и может
              вызывать проблемы при финальном экспорте.
            </AdditionWarning>
          </li>
          <li>
            <mark className="app">Premiere Pro</mark> не очень подходит для композитинга и
            создания эффектов уровня фильмов от Marvel.{" "}
            <mark className="app">After Effects</mark> лучше подходит для редактирования
            сложных сцен и применения различных спецэффектов, так как он даёт гораздо
            больший простор воображению для создания 3D-сцен и поддерживает больше
            сторонних эффектов и плагинов для генерации эффектов с нуля, например{" "}
            <mark className="plugin">Trapcode Particular</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="очистить всю память и кэш диска"
        title="Как очистить кэш предпросмотра и зачем это надо делать?"
      >
        <p>
          Регулярная очистка кэша может помочь вам избавиться от случаев, когда в процессе
          работы над проектом появляются непонятные артефакты и нежелательные кадры в
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
              попробуйте <a href="#4.7">настроить файл подкачки</a>, если у вас устройство
              на <mark>Windows</mark>.
            </li>
            <li>
              При желании вы можете создать свою комбинацию клавиш для быстрой очистки
              оперативной памяти и дискового кэша в{" "}
              <mark className="ui">Edit &gt; Keyboard Shortcuts</mark>. По умолчанию в{" "}
              <mark className="app">After Effects</mark> предусмотрена комбинация только
              для очистки оперативной памяти -{" "}
              <mark className="key">Ctrl + Alt + / (на Numpad)</mark>.
            </li>
            <li>
              Если у вас достаточно много оперативной памяти на вашем устройстве и
              производительный процессор, который быстро обрабатывает ваши композиции, то
              вы можете отключить дисковый кэш в настройках программы. Для этого перейдите
              в <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark>{" "}
              и уберите галочку с пункта <mark className="ui">Enable Disk Cache</mark>.
              Это позволит программе меньше обращаться к дисковому накопителю и меньше
              сталкиваться с багами работы дискового кэша.
            </li>
          </ul>
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Почему у меня предпросмотр проигрывается в плохом качестве?">
        <Divider>Проверяем разрешение предпросмотра</Divider>
        <p>
          Скорее всего вы забыли переключить качество предпросмотра в окне{" "}
          <mark className="ui">Preview</mark>. Для изменения качества выставьте значение{" "}
          <mark className="ui">Resolution</mark> на <mark className="ui">Full</mark> или
          на удобное вам значение.
        </p>
        <AdditionInfo>
          Если в <mark className="ui">Resolution</mark> стоит значение{" "}
          <mark className="ui">Auto</mark>, то предпросмотр будет проигрываться в том
          разрешении, которое вы указали там, где отображается ваша композиция.
        </AdditionInfo>
        <ImageFigure
          caption="Preview"
          imgSrc="images/aftereffects/change_resolution_preview.png"
          imgTitle="Изменение предпросмотра в окне Preview"
          styleClass="figure_windows-dark"
        />
        <p>
          Также стоит проверить разрешение в окне <mark className="ui">Composition</mark>.
          Список с выбором разрешения отображается в нижней границе окна предпросмотра.
        </p>
        <VideoFigure
          caption="After Effects"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_resolution_comppreview.mp4"
        />
        <Divider>Включаем Continuously Rasterize для нужных слоёв</Divider>
        <p>
          Если вы импортировали векторный файл, например <mark className="file">.ai</mark>{" "}
          из <mark className="app">Adobe Illustrator</mark>, то вам нужно включить{" "}
          <mark className="ui">Continuously Rasterize</mark>. Это позволит программе при
          любом взаимодействии с слоем уменьшить эффект пикселизации за счёт того, что
          программа будет каждый раз растрировать этот слой до нужного разрешения.
        </p>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/enable_continuously_rasterize.png"
          imgTitle="Включаем Continuously Rasterize"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          При включенной опции <mark className="ui">Continuously Rasterize</mark> могут
          быть побочные явления, например разрывы слоя при использовании{" "}
          <mark className="plugin">Puppet Tool</mark>.
        </AdditionWarning>
        <Divider>Остальные случаи ошибок пользователя</Divider>
        <p>
          А вообще, часто бывают случаи, когда пользователь сам устанавливает в настройках
          композиции низкое разрешение, например <mark>256x128</mark>, а потом удивляется,
          почему он видит пиксели. Чтобы изменить разрешение вашей композиции, откройте
          окно настроек композиции с помощью комбинации клавиш{" "}
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
          Есть ещё отдельная категория лиц, которая считает, что в{" "}
          <mark className="app">After Effects</mark> есть возможность отображения
          предпросмотра без потери качества при приближении, как в{" "}
          <mark className="app">Adobe Illustrator</mark>, если в композиции есть векторные
          слои. Нет, это так не работает, <mark className="app">After Effects</mark> не
          является векторным редактором графики. Он показывает и растрирует все ваши слои
          под то разрешение, которое указано в настройках вашей композиции.
        </p>
        <AdditionInfo>
          Исключение, где вы можете увеличить предпросмотр без потери качества больше чем
          на <mark>100%</mark> - это включение <mark className="plugin">Draft 3D</mark> с
          опцией <mark className="ui">Extended Preview</mark>. Такой способ будет работать
          только тогда, когда в композиции есть векторные слои или 3D-модели. При экспорте
          вы получите файл с разрешением, которая указана в настройках композиции.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="замедленное превью, слоумо, растянутое аудио, slow motion, лагает"
        title="Почему у меня предпросмотр проигрывается ускоренно, замедленно или с тормозами?"
      >
        <p>
          Вариантов такого поведения много, начиная от банальной невнимательности
          пользователя, заканчивая кривыми исходниками.
        </p>
        <Divider>Проверяем FPS в окне Preview</Divider>
        <p>
          Проверьте окно <mark className="ui">Preview</mark>. Вполне вероятно, что вы
          установили там значение <mark>FPS</mark>, отличное от того, что у вас
          установлено в композиции. Для этого откройте окно Preview с помощью{" "}
          <mark className="ui">Window &gt; Preview</mark> и укажите в <mark>FPS</mark>{" "}
          значение <mark className="ui">Auto</mark>.
        </p>
        <ImageFigure
          caption="Preview"
          imgSrc="images/aftereffects/change_preview_fps.png"
          imgTitle="Изменение предпросмотра в окне Preview"
          styleClass="figure_windows-dark"
        />
        <Divider>Смотрим предпросмотр из кэша без реал-тайма</Divider>
        <p>
          Лагать предпросмотр может из-за того, что пытаетесь проиграть предпросмотр в
          реальном времени - эффекты и видео-исходники вряд ли смогут так быстро
          обрабатывать кадры на лету, чтобы оно игралось спокойно и без запинок.
        </p>
        <AdditionInfo>
          Для отображения количества <mark>FPS</mark> в предпросмотре можно
          воспользоваться окном <mark className="ui">Info</mark>. В нём отображается
          текущий <mark>FPS</mark> предпросмотра и дополнительная информация о рендеринге
          и проигрывании кадров из памяти.
        </AdditionInfo>
        <ImageFigure
          caption="Info"
          imgSrc="images/aftereffects/info_non-realtime.png"
          imgTitle="Предпросмотр не в реальном времени"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы устранить такое стандартное поведение программы - вам нужно включить
          параметр, который говорит программе команду{" "}
          <mark>закэшировать предпросмотр, прежде чем его воспроизводить</mark>. Чтобы
          включить кэширование предпросмотра перед его воспроизведением - нужно открыть
          окно <mark className="ui">Preview</mark> и прожать в ней две опции -{" "}
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
        <Divider>Смотрим настройки аудио-выхода</Divider>
        <p>
          В некоторых случаях бывают ситуации, когда из-за смены аудио-выхода, например
          при подключении беспроводных наушников -{" "}
          <mark className="app">After Effects</mark> не может нормально синхронизировать
          картинку и звук и предпросмотр идёт как-бы с замедлением. В таких случаях нужно
          изменить аудиовыход на другой в <mark className="ui">Default Output</mark>,
          уменьшить значение <mark className="ui">Latency</mark> до минимального в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark>. В крайнем
          случае можно попробовать обновить звуковые драйвера в вашей системе.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/audio_hardware_settings.png"
          imgTitle="Настройки звукового выхода"
          styleClass="figure_windows-dark"
        />
        <Divider>Разбираемся с кривыми исходниками</Divider>
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
      </DetailsSummary>
      <DetailsSummary title="Почему у меня отсутствует звук при проигрывании предпросмотра?">
        <Divider>Проверяем аудиовыход</Divider>
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники или
          внешний монитор с колонками, то вполне вероятно что у вас сбились настройки
          звука. Вам следует проверить настройки аудиовыхода в настройках программы, для
          этого нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark> и указать
          в пункте <mark className="ui">Default Output</mark> нужный вам аудиовыход.
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
          <mark className="app">After Effects</mark> нужно включить галочку{" "}
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
          переконвертируйте его в формат <mark className="file">.wav</mark>, а затем
          замените аудио в проекте. Если аудио запаковано вместе с видео файлом -
          переконвертируйте его в монтажный кодек, например, через{" "}
          <mark className="app">Shutter Encoder</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как убрать пикселизацию предпросмотра при перемещении временной метки?">
        <p>
          По умолчанию в <mark className="app">After Effects</mark> включена функция
          адаптивного разрешения, которая изменяет качество предпросмотра при перемещении{" "}
          <mark className="word">плейхеда</mark>. Если вас эта функция раздражает - его
          можно отключить. Для этого нажмите на иконку молнии{" "}
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
      <DetailsSummary title="Я работал над проектом, но его ни разу не сохранял. Вдруг After Effects вылетел. Возможно ли в таком случае восстановить проект?">
        <p>
          Нет, <mark className="app">After Effects</mark> не создаёт авто-сохранения или
          какие-нибудь файлы проекта, если изначально проект не был сохранён. В следующий
          раз перед началом работы - сразу сохраните файл проекта и периодически нажимайте
          на <mark className="key">Ctrl + S</mark> для сохранения ваших изменений.
        </p>
        <AdditionInfo>
          Чтобы не попасть в просак, если при работе файл проекта повредится - заранее{" "}
          <a href="#4.1">настройте бэкап файлов в облачном хранилище или локально</a>.
        </AdditionInfo>
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
      <DetailsSummary title="Почему я не могу изменить режимы наложения у 3D слоёв?">
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
          в параметрах эффекта можно включить прозрачность. Для этого найдите пункт{" "}
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
        tag="тру комп дупликатор, композиция, прекомпоз, копирование, 🦅 независимость 🦅"
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
          количества копий, обновлением выражений, дублированием футажей или группировкой
          в одну папку - воспользуйтесь бесплатным<sup>*</sup> скриптом{" "}
          <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>{" "}
          на aescripts.
        </p>
        <AdditionInfo>
          <sup>*</sup>Чтобы скачать скрипт - зарегистрируйтесь на сайте{" "}
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
      <DetailsSummary title="Почему первый кадр в композиции начинается не с нулевой секунды?">
        <p>
          Скорее всего вы при создании прекомпозиции указали галочку в пункте{" "}
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
          videoSrc={"images/aftereffects/convert_to_paragraph_text.mp4"}
        />
      </DetailsSummary>
      <DetailsSummary title="Чем отличается однонодовая камера от двунодовой?">
        <p>
          При создании камеры в <mark className="app">After Effects</mark> можно
          наткнуться на настройку типа камеры: <mark>One-Node</mark> и{" "}
          <mark>Two-Node</mark>. Да, они действительно отличаются в плане способов
          перемещения и поворота камеры.
        </p>
        <ul>
          <li>
            <mark>One-Node</mark> работает как физическая камера, которая перемещается
            независимо от выбранной точки.
          </li>
          <li>
            <mark>Two-Node</mark> смотрит на заданную точку и сама камера будет
            поворачивать в сторону <mark>Point of Interest</mark>. Данный тип камер
            полезен для создания параллакс-эффекта.
          </li>
        </ul>
        <YouTubeVideo
          caption="Техники с 3D камерами в After Effects"
          link="zgMHWFolli8"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем отличается Mocha AE от Mocha Pro?">
        <p>
          В стандартную поставку <mark className="app">After Effects</mark> входит
          встроенный плагин для трекинга различных объектов{" "}
          <mark className="plugin">Mocha AE</mark>. Но у него функционал, по сравнению с
          Pro-версией, несколько урезан.
        </p>
        <p>
          В встроенной <mark className="plugin">Mocha AE</mark> вы не сможете
          стабилизировать видео, делать клин-ап (удалять объекты), использовать магнитное
          лассо и прочее. <mark className="plugin">Mocha Pro</mark> же лишена этих
          ограничений, а также можно вставить в <mark className="app">Premiere Pro</mark>{" "}
          и другие программы.
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
          с шрифтом всё в порядке, например в <mark className="app">Photoshop</mark> всё
          работает отлично, то скорее всего вы столкнулись с редким багом, который может
          встретиться на абсолютно любой версии <mark className="app">After Effects</mark>
          . К сожалению, не все шрифты, прекрасно работающие в{" "}
          <mark className="app">Photoshop</mark> и{" "}
          <mark className="app">Illustrator</mark> будут прекрасно работать и в{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <p>
          Суть бага заключается в том, что при смене начертания шрифта,{" "}
          <mark className="app">After Effects</mark> почему-то оставляет на некоторых
          буквах предыдущий вариант шрифта. Или просто сбрасывает стиль до{" "}
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
            другой формат, например из <mark className="file">.ttf</mark> в{" "}
            <mark className="file">.otf</mark> или наоборот. Вполне возможно, что тот, кто
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
      <DetailsSummary title="Я где-то слышал про секретные настройки программы. Как их открыть и полезны ли они?">
        <p>
          Разработчики из <mark>Adobe</mark> оставили некоторые функции от любопытных лиц
          и поместила их в отдельную категорию <mark className="ui">Secret</mark>, только
          вот не учли одно &quot;но&quot;. Они не оставили там ничего интересного, прям
          совсем.
        </p>
        <p>
          Для того, чтобы открыть &quot;секретные настройки&quot; в{" "}
          <mark className="app">After Effects</mark> - нужно открыть любой пункт настроек
          в <mark className="ui">Edit &gt; Preferences</mark> с зажатой клавишей{" "}
          <mark className="key">Shift</mark>. После этого у вас откроется окно{" "}
          <mark className="ui">Preferences</mark>, в котором появится пункт{" "}
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
          В последних версиях <mark className="app">After Effects</mark> там находятся
          всего лишь три настройки. Иногда отключение кэширование слоя и автоматическая
          очистка кадров может вам помочь, если вы испытываете проблемы с переполнением
          оперативной памяти при экспорте композиции.
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
            <mark>X</mark> любое число от <mark>0</mark> (выключено) до <mark>99999</mark>{" "}
            - автоматически очищать каждый выбранный кадр при рендере последовательности
            изображений.
          </li>
          <li>
            <mark className="ui">Ignore Sequence Rendering Errors</mark> позволяет
            программе забить болт на ошибки при рендере последовательности изображений. В
            повседневной практике пункт бесполезен, имхо.
          </li>
        </ul>
      </DetailsSummary>
    </div>
  );
};
export default AEFromNewbies;
