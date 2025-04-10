import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
import ContentSwitcher from "../../../components/features/ContentFilter";
import {Divider} from "antd";

const AEPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Performance.tsx" />
      <DetailsSummary
        tag="тормозит, жуткие лаги, медленно работает, низкая скорость работы программы, оптимизация, производительность, применение эффектов, системные требования, артефакты, искажения"
        title="Почему у меня, б%@#ь, лагает е&#!%й After Effects, с$%а?"
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
          рекомендации для адекватной работы программы следующие.
        </p>
        <Divider>Рекомендуемые системные требования</Divider>
        <ContentSwitcher
          macContent={
            <div>
              <ul>
                <li>
                  Для корректной установки и запуска программы требуется установленная
                  операционная система минимум <mark>macOS Monterey</mark> (12.X.X) или
                  новее.
                  <AdditionWarning>
                    <ul>
                      <li>
                        {" "}
                        Поддержка <mark>macOS Big Sur</mark> (11.X) прекращена, вы можете
                        установить последнюю версию{" "}
                        <mark className="app">After Effects</mark> для вас -{" "}
                        <mark>23.6</mark>.
                      </li>
                      <li>
                        <mark className="app">After Effects</mark> версий{" "}
                        <mark>2024</mark> и новее не поддерживают запуск через{" "}
                        <mark className="app">Rosetta</mark>. Таким образом старые версии
                        сторонних плагинов, которые были адаптированы для процессоров на{" "}
                        <mark>Intel</mark> не будут работать на <mark>Apple Silicon</mark>
                        . Для решения проблемы откатитесь до <mark>23.6</mark> или найдите
                        обновления для сторонних плагинов с поддержкой процессоров{" "}
                        <mark>Apple Silicon</mark>.{" "}
                        <a href="https://helpx.adobe.com/ru/after-effects/kb/after-effects-apple-silicon.html">
                          Подробнее...
                        </a>
                      </li>
                    </ul>
                  </AdditionWarning>
                </li>
                <li>
                  <mark className="app">After Effects</mark> можно запустить на
                  устройствах Mac с процессором <mark>Intel</mark> минимум 6-го поколения
                  с поддержкой инструкций <mark>AVX2</mark>.
                  <AdditionWarning>
                    На старых устройствах, по типу <mark>Mac Pro 2013</mark>, у вас не
                    получится установить <mark className="app">After Effects</mark> версий
                    24.X и новее. Вы можете установить последнюю версию{" "}
                    <mark className="app">After Effects</mark> для вас - <mark>23.6</mark>
                    .
                  </AdditionWarning>
                  Но с развитием технологий, сейчас рекомендуется использовать устройство
                  на базе процессоров <mark>Apple Silicon</mark> минимум <mark>M1</mark>{" "}
                  или его более производительных производных, как <mark>M1 Pro</mark>,{" "}
                  <mark>M1 Max</mark> и прочие. Они более производительнее и
                  энергоэффективнее, чем устройства на базе <mark>Intel</mark>.
                </li>
                <li>
                  Требуется и рекомендуется иметь минимум <mark>16 гигабайт</mark>{" "}
                  оперативной памяти на вашем устройстве.
                  <AdditionWarning>
                    Если в комплектации вашего Mac-устройства только{" "}
                    <mark>8 гигабайт</mark> оперативной памяти или ниже, то скорее всего в
                    сложных проектах вы будете часто сталкиваться с нехваткой оперативной
                    памяти и ошибками по типу <mark className="ui">Out of Memory</mark>.
                  </AdditionWarning>
                </li>
              </ul>
            </div>
          }
          windowsContent={
            <div>
              <ul>
                <li>
                  Для корректной установки и запуска программы требуется{" "}
                  <mark>Windows 10</mark>
                  (64-битная) версии <mark>22H2</mark> или <mark>Windows 11</mark> версии
                  минимум <mark>21H2</mark>, желательно <mark>23H2</mark> или{" "}
                  <mark>24H2</mark>. Также рекомендуется обновить пакеты{" "}
                  <a href="https://github.com/abbodi1406/vcredist/releases">
                    Microsoft Visual C++ Redistributable
                  </a>{" "}
                  до последних версий во избежание проблем с загрузкой сторонних эффектов
                  и плагинов.
                  <AdditionWarning>
                    <ul>
                      <li>
                        С ноября 2025 поддержка <mark>Windows 10</mark> версии{" "}
                        <mark>22H2</mark> закончится и, <i>предварительно</i>, свежие
                        версии <mark className="app">After Effects</mark> от{" "}
                        <mark>2026</mark> будут недоступны к установке.{" "}
                        <i style={{opacity: 0.5}}>
                          Почему предварительно? Потому что <mark>Adobe</mark> прекратила
                          выпуск новых версий <mark>After Effects</mark> для{" "}
                          <mark>Windows 7</mark> и <mark>Windows 8.1</mark> (для него
                          раньше, в одно время с отключением поддержки
                          &quot;семёрки&quot;) после их официальной поддержки{" "}
                          <mark>Майкрософтом</mark> и есть причина подозревать в скорой
                          отключении поддержки &quot;устаревшей&quot; операционной системы
                          в ближайшее время.
                        </i>
                      </li>
                      <li>
                        На <mark>Windows 10</mark> версии <mark>21H2</mark> и ниже вы не
                        сможете установить <mark className="app">After Effects 2024</mark>
                        . Для решения проблемы - обновите систему до более свежего билда.
                        Если у вас стоит редакция <mark>LTSC</mark> - переустановите
                        систему с нуля или установите последнюю версию{" "}
                        <mark className="app">After Effects</mark> для вас -{" "}
                        <mark>23.6</mark>.
                      </li>
                    </ul>
                  </AdditionWarning>
                </li>
                <li>
                  <mark>Процессор Intel</mark> - требуется минимум 6-ое поколение
                  семейства любого семейства, рекомендуется 11-ое поколение или новее
                  семейства <mark>i7</mark> или <mark>i9</mark>.
                  <br />
                  <span style={{fontSize: "0.7rem"}}>Или</span> <mark>Процессор AMD</mark>{" "}
                  - требуется минимум Ryzen серии 1000 пятого семейства, рекомендуется
                  серия 5000 или новее седьмого или девятого семейства.
                  <AdditionWarning>
                    Для <mark className="app">After Effects 2024</mark> и новее требуется
                    процессор с поддержкой инструкций <mark>AVX2</mark>. Если у вашего
                    процессора нет таких инструкций, то для вас последняя версия программы
                    - <mark>23.6</mark>, более свежую вы не сможете поставить.{" "}
                    <a
                      href="https://www.youtube.com/watch?v=1IAwkEdRZZw"
                      style={{opacity: "0.5"}}
                    >
                      Иначе вы наткнётесь на ошибку 0xc0000142.
                    </a>
                  </AdditionWarning>
                </li>
                <li>
                  Для запуска и простых действий в программе требуется минимум{" "}
                  <mark>16 гигабайт</mark>
                  оперативной памяти. Для комфортной работы - минимум{" "}
                  <mark>32 гигабайт</mark> оперативной памяти или более.
                  <AdditionInfo>
                    Для того, чтобы реже сталкиваться с ошибками про нехватку оперативной
                    памяти - рекомендуется настроить <a href="#4.7">файл подкачки</a>.
                  </AdditionInfo>
                </li>
                <li>
                  Для комфортной работы с эффектами, которые поддерживают GPU-ускорение,
                  требуется видеокарта <mark>NVIDIA</mark> минимум{" "}
                  <mark>4 гигабайта</mark> видеопамяти. Также рекомендуется установить
                  свежие драйвера на видеокарту, желательно редакции{" "}
                  <mark>NVIDIA Studio Driver</mark> для более стабильной работы с
                  монтажными программами.
                  <AdditionInfo>
                    Загрузить драйвера <mark>NVIDIA Studio</mark> вы можете на{" "}
                    <a href="https://www.nvidia.com/en-us/geforce/drivers/">
                      официальной странице загрузки драйверов
                    </a>
                    . На странице укажите текущую модель вашей видеокарты, операционную
                    систему и не забудьте указать в{" "}
                    <mark className="ui">Download Type</mark> значение{" "}
                    <mark>Studio Driver</mark>.
                  </AdditionInfo>
                  <AdditionWarning>
                    Видеокарты от <mark>AMD</mark> не рекомендуются для работы с
                    монтажными программами из-за отсутствия CUDA-ядер и некоторых
                    ограничений и приколов. Вы можете переключиться на{" "}
                    <mark className="ui">Mercury Software Only</mark> для рендера на
                    процессоре в <mark className="ui">Project Manager</mark>, который
                    открывается по комбинации клавиш{" "}
                    <mark className="key">Ctrl + Shift + Alt + K</mark>.
                  </AdditionWarning>
                </li>
                <li>
                  Ещё важную роль в производительности программы может играть накопитель,
                  на котором установлена система и{" "}
                  <mark className="app">After Effects</mark>, а также на котором лежат
                  ваши исходники. Если вы с <mark>M.2 SSD</mark> особых проблем не
                  почувствуете, то при работе с исходниками с <mark>HDD</mark>, особенно
                  медленных и потрёпанных жизнью, могут начаться проблемы. Если у вас есть{" "}
                  <mark>SSD</mark> с большим объёмом памяти - следует перенести весь
                  проект туда и продолжить работу, используя его.
                </li>
              </ul>
            </div>
          }
        />
        <Divider>Типичные ошибки пользователя и их влияние на производительность</Divider>
        <p>
          Предположим, что ваше устройство прекрасно соответствует системным требованиям,
          вы открываете программу и начинаете работу. В проекте вы начинаете создавать
          композиции, импортировать различные графические исходники при необходимости,
          постепенно накидывая в композиции кучу различных эффектов. И как раз в этом и
          кроется проблема, что большинство пользователей не обращают внимание на свой
          проект и что они накрутили. Почему?
        </p>
        <ul>
          <li>
            Довольно часто пользователи скачивают различные файлы, пережатые непонятно во
            что и импортируют в <mark className="app">After Effects</mark>, а потом через
            некоторое время замечают некоторые проблемы: артефакты, баги или вообще
            снижение производительности при банальных действиях с композицией. Если вы
            скачали видео в формате <mark className="file">.mp4</mark> или в любом другом
            из интернета, то вам необходимо переконвертировать его в срочном порядке в
            монтажный кодек, например <mark className="video">Apple Prores 422</mark> или{" "}
            <mark className="video">DNxHR</mark> через{" "}
            <mark className="app">Media Encoder</mark>,{" "}
            <mark className="app">Shutter Encoder</mark>,{" "}
            <mark className="app">Handbrake</mark> или{" "}
            <mark className="app">MKVToolNix</mark>.{" "}
            <a href="#5.1">Подробнее про рекомендуемый пайплайн импорта...</a>
            <AdditionInfo>
              <ul>
                <li>
                  Это делать нужно каждый раз, прежде чем импортировать файлы в{" "}
                  <mark className="app">After Effects</mark>, полученные через YouTube или
                  другие подобные площадки. <mark className="app">After Effects</mark> не
                  всегда корректно отрабатывает подобные исходники, потому что площадки
                  изменяют стандарт <mark className="video">H.264</mark> под себя и такие
                  исходники плохо крутятся программой. После перекодирования исходников вы
                  обезопасите себя от внезапных артефактов и глюков при работе с{" "}
                  <mark className="app">After Effects</mark>. После конвертации уже
                  перекодированные исходники вы можете импортировать в ваш проект или
                  заменить файлы в окне <mark className="ui">Project</mark>, нажав{" "}
                  <mark className="key">ПКМ</mark> по исходнику и выбрать{" "}
                  <mark className="ui">Replace Footage &gt; File</mark>.{" "}
                </li>
                <li>
                  Если ваше видео закодировано с переменным FPS (узнать об этом можно
                  через <mark className="app">MediaInfo</mark>), то такие файлы также
                  нужно перекодировать через выше названные утилиты в постоянный
                  (Constant) FPS.
                </li>
                <li>
                  Подробнее о типах кодеков и их области применения вы можете посмотреть в{" "}
                  <a href="https://www.youtube.com/watch?v=MprgQSTqL9E">
                    видео от VideoSmile
                  </a>
                  .
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            Чтобы исключить проблемы с звуком, аудио-файлы тоже следует
            переконвертировать, например в <mark className="file">.wav</mark>. Звуковые
            файлы могут проигрываться рывками, замедленно или с другими звуковыми багами.
            Переконвертировать аудио можно также через{" "}
            <mark className="app">Media Encoder</mark>,{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">EZ CD Audio Converter</mark>.
          </li>
          <li>
            Пользователи обычно в <mark className="app">After Effects</mark> применяют
            различные эффекты для придания композиции уникальности, но часто забывают о
            требованиях эффектов и сторонних плагинов к ресурсам устройства. И понеслась -
            вешают три разных вида свечения, различные шейки, цветокоррекцию и приправляют
            нагруженными частицами. И пользователь ещё удивляется, почему время экспорта
            слишком большое. Чтобы проанализировать время рендера того или иного слоя, вы
            можете воспользоваться функцией <mark className="ui">Render Time</mark>, речь
            о которой пойдет позже.
            <AdditionWarning>
              <ul>
                <li>
                  Старайтесь{" "}
                  <b>
                    <u>не устанавливать</u>
                  </b>{" "}
                  кучу плагинов и расширений в <mark className="app">After Effects</mark>{" "}
                  не разобравшись, нужно ли оно вам или нет. Также постарайтесь{" "}
                  <b>
                    <u>не мешать в вашей композиции кучу эффектов</u>
                  </b>{" "}
                  с одинаковой сутью, но из разных пакетов, например{" "}
                  <mark className="plugin">BCC Camera Shake</mark> и{" "}
                  <mark className="plugin">uni.shake</mark>. Некоторые эффекты могут
                  конфликтовать друг с другом, если они лежат на одном слое или нарушена
                  очерёдность расположения эффектов. Напомню, что по очередности эффектов
                  на переднем плане будет самый последний эффект в окне{" "}
                  <mark className="ui">Effect Controls</mark>.
                </li>
                <li>
                  Не все эффекты и сторонние плагины в{" "}
                  <mark className="app">After Effects</mark> поддерживают{" "}
                  <mark>GPU-ускорение</mark>. Эффекты, которые не поддерживают{" "}
                  <mark>GPU-ускорение</mark>, могут конфликтовать по скорости рендера с
                  теми эффектами, которые наоборот его поддерживают.
                </li>
              </ul>
            </AdditionWarning>
          </li>
          <li>
            Иногда проблемы с производительностью программы могут возникнуть из-за шрифтов
            в проекте. Да, такое бывает, когда вы используете кривой шрифт и даже не
            догадываетесь об этом. Для решения этой проблемы достаточно заменить шрифт на
            аналогичный или скачать его из другого источника.
          </li>
        </ul>
        <Divider>Отключаем Idle-кэширование для снижения нагрузки</Divider>
        <p>
          Если у вас лагает интерфейс программы и вам сложно в ней выполнять какие-либо
          действия, то скорее всего вы не заметили, что по умолчанию в{" "}
          <mark className="app">After Effects</mark> версии <mark>2022</mark> и новее
          включена функция <mark className="ui">Cache Frames When Idle</mark>. Данная
          функция начинает кэширование композиции, когда вы ничего не делаете.
        </p>
        <p>
          Часто на слабых устройствах эта функция заставляет тормозить программу и
          систему, особенно если у вас много эффектов, поэтому рекомендую его отключить.
          Для этого достаточно прожать комбинацию клавиш{" "}
          <mark className="key">Alt + Shift + I</mark> или выключить его в{" "}
          <mark className="ui">Composition &gt; Preview</mark>.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/disable_idle_cache.png"
          imgTitle="Отключение автоматического кэширования предпросмотра при бездействии"
          styleClass="figure_windows-light"
        />
        <Divider>Анализируем время рендера слоёв</Divider>
        <p>
          В <mark className="app">After Effects</mark> версии <mark>2022</mark> и новее
          добавили функционал <mark className="ui">Render Time</mark>, позволяющий увидеть
          время рендера того или иного эффекта в ваших слоях. С помощью него можно
          проанализировать производительность вашего проекта и по возможности
          оптимизировать его, заменив эффекты на более лёгкие или убрать их. Внизу окна с
          таймлайном пишется общее время рендера текущего кадра, вычисляя время рендера
          всех слоев.
        </p>
        <AdditionInfo>
          Чтобы включить отображение времени рендера того или иного слоя, нажмите на
          иконку улитки в левом нижнем углу окна таймлайна или включите колонку{" "}
          <mark className="ui">Render Time</mark> в пункте{" "}
          <mark className="ui">Columns</mark>, нажав <mark className="key">ПКМ</mark> по
          столбцам.
        </AdditionInfo>
        <ImageFigure
          caption="Timeline"
          imgSrc="images/aftereffects/view_render_time.png"
          imgTitle="Смотрим время рендера слоя"
          styleClass="figure_windows-dark"
        />
        <Divider>Поясняем за дисковый кэш</Divider>
        <p>{/* FIXME:  */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="ускорить, увеличить скорость рендера"
        title="Как заставить программу использовать всю мощь компьютера?"
      >
        <p>
          Предположим, что вы только-только купили новое устройство и вы хотите его
          отжарить по полной в <mark className="app">After Effects</mark>. Наша с вами
          любимая программа обычно работает не в полную силу, так как потребляет некоторые
          ресурсы тогда, когда ему это действительно необходимо, и это абсолютно
          нормально. Но всё же есть несколько способов, как немного ускорить работу
          программы и позволить программе использовать ресурсы вашего устройства по
          полной.
        </p>
        <Divider>Настраиваем Multi-frame Render</Divider>
        <p>
          С помощью функции <mark className="ui">Multi-Frame Rendering</mark> вы сможете
          приказать программе использовать весь потенциал процессора за счёт рендера
          нескольких кадров одновременно. В новых версиях{" "}
          <mark className="app">After Effects</mark> функция{" "}
          <mark className="ui">Multi-Frame Rendering</mark> включена по умолчанию. В{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark>
          можно ограничить использование процессора на вашем компьютере, для того, чтобы
          дать другим программам на вашем компе немного мощности при многокадровом
          рендере.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/mfr_settings.png"
          imgTitle="Настройка ограничения процессора при многокадровом рендере"
          styleClass="figure_windows-dark"
        />
        <AdditionWarning>
          <ul>
            <li>
              Использование <mark className="ui">Multi-Frame Rendering</mark> может
              привести к увеличению потребления оперативной памяти и есть риск чаще видеть
              ошибку <mark>Out of Memory</mark>. Для этого либо отключите{" "}
              <mark className="ui">Multi-Frame Rendering</mark>, либо ограничьте
              использование оперативной памяти, увеличив значение{" "}
              <mark className="ui">RAM reserved for other applications</mark> в
              настройках. Также Если у вас устройство на <mark>Windows</mark> -{" "}
              <a href="#4.8">настройте файл подачки</a> и установите программу{" "}
              <a href="https://github.com/henrypp/memreduct/releases">Mem Reduct</a> для
              периодической очистки оперативной памяти.
            </li>
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
          </ul>
        </AdditionWarning>
        <Divider>Про использование видеокарты</Divider>
        <p>
          Поговорим про видеокарту. Даже если вы и купили условный <mark>RTX 5090</mark> и
          прям акцентируете на это внимание при описании вашей проблемы с
          производительностью, то программе будет на это пофиг. Абсолютно. Всем по
          барабану насколько у вас мощная видеокарта, пока у{" "}
          <mark className="app">After Effects</mark> до сих пор отсутствует полная
          поддержка <mark>GPU-ускорения</mark>.
        </p>
        <AdditionWarning>
          Вы, конечно, можете использовать встроенные и сторонние эффекты с поддержкой{" "}
          <mark>GPU-ускорения</mark>, например из пакета{" "}
          <mark className="plugin">Boris FX Sapphire</mark> или{" "}
          <mark className="plugin">Red Giant</mark>. Если вы примените эффект, который не
          поддерживает <mark>GPU-ускорение</mark>, то толк от видеокарты начнёт пропадать,
          так как сначала будет рендериться несколько эффектов через <mark>GPU</mark>, а
          потом уже на <mark>CPU</mark> и увеличит время рендера. Или программа вовсе
          начнёт рендерить эффекты принудительно через <mark>CPU</mark>, если{" "}
          <mark>GPU-эффекту</mark> мешает какой-то другой эффект.
        </AdditionWarning>
        <p>
          Для того, чтобы посмотреть только те эффекты, которые поддерживают{" "}
          <mark>GPU-ускорение</mark>, нужно с помощью контекстного меню в окне{" "}
          <mark className="ui">Effects & Presets</mark>, включить пункт{" "}
          <mark className="ui">Show GPU Capable Effects Only</mark>. После включения этого
          параметра вы заметите, насколько сильно сократится список ваших эффектов.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/show_gpu_capable_effects_only.png"
          imgTitle="Включение отображение только тех эффектов, которые поддерживают GPU-ускорение"
          styleClass="figure_windows-dark"
        />
        <p>
          Рядом с названием плагинов обычно отображаются значки, которые показывают
          максимальную поддержку битности цветов (8, 16 или 32 бит) и иногда показывается
          вторая иконка рядом с битностью, которая показывает, что этот эффект
          поддерживает <mark>GPU-ускорение</mark>.
        </p>
        <AdditionInfo>
          Если эффект поддерживает только 8 бит на цветовой канал, а в менеджере проекта
          вы выставите 16 или 32 бита, то при применении такого эффекта выскочит
          предупреждение, показывающая что при использовании большей битности в проекте -
          эффект может сократить вам цветовой охват и может некорректно работать с HDR
          исходниками.
        </AdditionInfo>
        <ImageFigure
          caption="Effects & Presets"
          imgSrc="images/aftereffects/effect_icons.png"
          imgTitle="Иконки рядом с эффектами"
          styleClass="figure_windows-dark"
        />
        <Divider>Различия в работе между After Effects и Premiere Pro</Divider>
        <p>
          У некоторых людей возникает ещё странный вопрос, мол почему видеокарта в{" "}
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
          Функция автоматического кэширования кадров текущей композиции во время простоя
          была добавлена в <mark className="app">After Effects</mark> версии{" "}
          <mark>2022</mark> и новее, и включена по умолчанию. Эта функция может часто
          мешать комфортной работе с проектом на слабых компьютерах или с нагруженными
          эффектами, нагружая системные компоненты лишний раз и заполняя оперативную
          память. Благо в Adobe додумались ввести параметр для отключения кэширования в
          простое.
        </p>
        <p>
          Для отключения автоматического кэширования при бездействии пользователя,
          перейдите в <mark className="ui">Composition &gt; Preview</mark> и выключите
          галочку <mark className="ui">Cache Frames When Idle</mark> или прожмите
          комбинацию клавиш <mark className="key">Alt + Shift + I</mark>.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/disable_idle_cache.png"
          imgTitle="Отключение автоматического кэширования предпросмотра при бездействии"
          styleClass="figure_windows-light"
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
          caption="Preferences"
          imgSrc="images/aftereffects/change_time_idle_cache.png"
          imgTitle="Изменение времени для автоматического кэширования при бездействии"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта? Как мне переключить рендер на процессор?">
        <p>
          Несмотря на то, что в окне менеджера проекта можно включить видеокарту,
          программа не будет использовать его во многих случаях, особенно когда вы
          применяете CPU-эффекты вместе с GPU-эффектами. Рендер на процессоре, или же
          включенный пункт <mark className="ui">Mercury Software Only</mark> в менеджере
          проекта, может уменьшить количество возможных артефактов и багов после экспорта
          вашего проекта, нежели при использовании <mark>псевдо-GPU-ускорения</mark>.
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
          caption="Project Manager"
          imgSrc="images/aftereffects/project_manager_mercury.png"
          imgTitle="Переключение типа рендера"
          styleClass="figure_windows-dark"
        />
        <ul>
          <li>
            <mark className="ui">Mercury Software Only</mark> позволяет{" "}
            <mark className="app">After Effects</mark> реже прибегать к использованию
            видеокарты и использовать в большинстве случаев рендеринг на процессоре. Также
            при использовании рендеринга на процессоре качество изображения может быть
            лучше в некоторых мелочах.
            <AdditionInfo>
              При включенном <mark className="ui">Mercury Software Only</mark>{" "}
              какой-нибудь сторонний эффект всё же может просчитаться через{" "}
              <mark>GPU</mark> при необходимости, например{" "}
              <mark className="plugin">Depth Scanner</mark>. Обычно это поведение можно
              изменить в настройках стороннего плагина.
            </AdditionInfo>
          </li>
          <li>
            <mark className="ui">Mercury GPU Acceleration (CUDA или OpenCL)</mark>{" "}
            использует процессор и видеокарту, но видеокарта никогда не будет
            гарантированна использоваться во всех случаях, она будет использоваться только
            при необходимости самой программой.
            <AdditionWarning>
              На видеокартах с малым объёмом <mark>VRAM</mark> лучше не использовать
              данный вариант рендеринга, так как вы можете часто сталкиваться с ошибкой{" "}
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
          или лучшую сторону, но зачастую остаётся неизменным. Иногда при рендеринге на
          процессоре просчёт может пройти быстрее, чем при использовании{" "}
          <mark className="ui">Mercury GPU Acceleration</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="замедленное превью, слоумо, растянутое аудио"
        title="Предпросмотр идёт как-будто в slow-motion, что делать?"
      >
        <p>
          Скорее всего вы пытаетесь проиграть предпросмотр в реальном времени - эффекты и
          видео-исходники вряд ли смогут так быстро обрабатывать кадры на лету, чтобы оно
          игралось спокойно и без запинок. В окне <mark className="ui">Info</mark> обычно
          отображается текущий FPS предпросмотра и дополнительная информация о рендеринге
          и проигрывании кадров из памяти.
        </p>
        <ImageFigure
          caption="Info"
          imgSrc="images/aftereffects/info_non-realtime.png"
          imgTitle="Предпросмотр не в реальном времени"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы устранить это стандартное поведение программы - вам нужно закэшировать
          предпросмотр, прежде чем его воспроизводить. Для этого откройте окно{" "}
          <mark className="ui">Preview</mark> и прожмите две опции:{" "}
          <mark className="ui">Cache Before Playback</mark> и{" "}
          <mark className="ui">If caching, play caching frames</mark>.
        </p>
        <ImageFigure
          caption="Preview"
          imgSrc="images/aftereffects/preview_caching.png"
          imgTitle="Включение кэширования предпросмотра"
          styleClass="figure_windows-dark"
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
          caption="Preview"
          imgSrc="images/aftereffects/preview_change_fps.png"
          imgTitle="Изменение частоты кадров предпросмотра"
          styleClass="figure_windows-dark"
        />
        <p>
          Если у вас возникают проблемы с записью кэша на жёсткий диск, то вы можете
          отключить опцию кэширования на жёсткий диск в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark>, убрав
          чекбокс из пункта <mark className="ui">Enable Disk Cache</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/disable_disk_cache.png"
          imgTitle="Отключение дискового кэша"
          styleClass="figure_windows-dark"
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
          caption="Preferences"
          imgSrc="images/aftereffects/audio_hardware_settings.png"
          imgTitle="Настройки звукового выхода"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
    </div>
  );
};
export default AEPerformance;
