import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import ContentSwitcher from "../../../components/features/ContentFilter";
import HostsAdobeModal from "../../../components/features/HostsAdobe";
import {Divider} from "antd";

const AEErrors: React.FC = () => {
  return (
    <div className="faq-content">
      <AdditionDanger>
        <p>
          Пожалуйста, не ленитесь и внимательно читайте ошибку, которую выдаёт программа.
          Обычно в большинстве случаев в описании ошибки уже содержится причина и
          возможное решение проблемы.
        </p>
        <ul>
          <li>
            Если у вас возникают трудности с чтением ошибки или предупреждения в
            английском интерфейсе программы -{" "}
            <a href="https://translate.yandex.ru/">воспользуйтесь переводчиком</a>.
          </li>
          <li>
            Если в данном разделе нет вашей ошибки, то воспользуйтесь поисковиком для
            поиска сообщений на различных форумах.
          </li>
        </ul>
      </AdditionDanger>
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Errors.tsx" />
      <DetailsSummary
        tag="предупреждение о нехватке памяти, оперативная память, не проигрывается предпросмотр, зацикливается превью, 23::40, after effects has unexpectedly run out of memory and cannot complete this export"
        title='Из-за чего появляется "Out of Memory" или "Low memory warning. RAM use has been extended for previews" и как это исправить?'
      >
        <p>
          Поздравляю, вы встретились с первым боссом в{" "}
          <mark className="app">Adobe After Effects</mark>. Эти ошибки и предупреждения
          возникают из-за того, что у вас банально не хватает оперативной памяти для
          реализации ваших проектов. Часто это происходит из-за того что вы используете
          слишком нагруженные эффекты, не монтажный кодек у видео-исходников или
          неправильно настроили программу и операционную систему.
        </p>
        <AdditionWarning>
          <p>
            При появлении данных ошибок убедитесь в том, вы соблюдаете условия ниже. Если
            хотя бы одно условие будет нарушено - постарайтесь исправить это в своём
            проекте.
          </p>
          <ul>
            <li>
              Убедитесь в том, что вы не используете исходники с большим разрешением,
              например, больше чем <mark>1080p</mark> или <mark>4K</mark>. Чем выше
              разрешение слоя, тем больше требуется оперативной памяти.
            </li>
            <li>
              Проверьте, что в настройках проекта не установлено значение{" "}
              <mark>16 бит</mark> или <mark>32 бит</mark> в параметрах проекта. Для этого
              откройте <mark className="ui">Project Manager</mark> с помощью комбинации
              клавиш <mark className="key">Ctrl + Alt + Shift + K</mark> и выберите там
              вкладку <mark className="ui">Color</mark>. В параметре{" "}
              <mark className="ui">Depth</mark> вы можете снизить битность проекта, чтобы
              облегчить работу с проектом.
            </li>
            <li>
              Убедитесь в том, что вы не накидали в свой проект различные нагруженные
              эффекты, например от <mark className="plugin">Red Giant</mark> или{" "}
              <mark className="plugin">Boris FX</mark>. Некоторые эффекты могут
              конфликтовать друг с другом и потреблять слишком много оперативной памяти.
            </li>
          </ul>
        </AdditionWarning>
        <p>
          Обычно для решения этой проблемы могут быть полезны некоторые советы,
          перечисленные ниже. Они помогут устранить типичные проблемы с нехваткой
          оперативной памяти и лагами программы, но полностью не исключат их.
        </p>
        <ul>
          <li>
            Очистите кэш программы и оперативную память через{" "}
            <mark className="ui">Edit &gt; Purge &gt; All Memory & Disk Cache</mark>.
          </li>
          <li>
            Если вы используете исходники из интернета, в частности из видео площадок -
            перекодируйте их через программу{" "}
            <a href="https://www.shutterencoder.com/">Shutter Encoder</a> в монтажный
            кодек <mark className="video">Apple Prores 422</mark> или повторно в{" "}
            <mark className="video">H.264</mark>. Таким образом вы ещё можете оградить
            себя от различных багов во время использования подобных исходников.
          </li>
          <li>
            <a href="#4.7">Попробуйте настроить файл подкачки</a>, если у вас устройство
            на <mark>Windows</mark>. В качестве{" "}
            <mark className="word">
              минимального и максимального размера файла подкачки
            </mark>{" "}
            вы можете установить значение от <mark className="copy">2048</mark> до{" "}
            <mark className="copy">65536</mark> или <mark className="copy">131072</mark>.
            В таком случае система создаст файл подкачки с изначальным размером в{" "}
            <mark>2 Гб</mark>, который динамически может расширяться до <mark>64 Гб</mark>{" "}
            или <mark>128 Гб</mark>.
            <AdditionWarning>
              Нередко можно встретить мнение в интернете, а также от горе-сборщиков
              самодельных образов <mark>Windows</mark>, что файл подкачки лучше отключить,
              мол он вредит вашему жёсткому диску. Отчасти это верно, но при использовании
              приложений от <mark>Adobe</mark> мы{" "}
              <b>
                <u>не рекомендуем</u>
              </b>{" "}
              вам следовать этому вредному совету, так как вы можете заработать себе кучу
              проблем. При отключенном файле подкачки вы можете в{" "}
              <mark className="app">Adobe After Effects</mark> столкнуться с различными
              ошибками, например{" "}
              <mark className="ui">
                After Effects has unexpectedly run out of memory and cannot complete this
                export
              </mark>
              , <mark className="ui">Out of Memory</mark> или{" "}
              <mark className="ui">
                Low memory warning. RAM use has been extended for previews
              </mark>
              . Кроме того, при нехватке оперативной памяти и отсутствии файла подкачки
              возможны вылеты приложений, появление сообщения об ошибке{" "}
              <mark className="ui">В системе недостаточно памяти</mark>, различные
              подвисания системы или даже чёрный экран, который лечится только
              перезагрузкой устройства.
            </AdditionWarning>
          </li>
          <li>
            Установите программу{" "}
            <a href="https://github.com/henrypp/memreduct/releases">Mem Reduct</a> для
            периодической очистки оперативной памяти, если у вас устройство на{" "}
            <mark>Windows</mark>, и настройте очистку оперативной памяти при достижении{" "}
            <mark>90%</mark> заполненной памяти.
            <AdditionInfo>
              Программа будет полезна, если у вас включено использование файла подкачки.
            </AdditionInfo>
          </li>
          <li>
            Если у вас включен файл подкачки и вы уверены, что дело не в программе -
            попробуйте проверить ваши плашки оперативной памяти, например проверив их
            через <a href="https://www.memtest86.com/">MemTest86</a> или поменяв их
            местами на материнской плате.
          </li>
          <li>
            Если у вас включена функция <mark>Multi-Frame Render</mark> - попробуйте его
            временно отключить. Для этого перейдите в{" "}
            <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark> и
            уберите галочку с <mark className="ui">Enable Multi-frame Render</mark>, а
            затем повторите попытку рендера предпросмотра.
          </li>
          <li>
            Проверьте настройки в{" "}
            <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark>.
            Если вы туда лезли и что-то настраивали, то есть шанс, что вы неправильно
            прочитали описание настройки и оставили программам <mark>Adobe</mark> 1 Гб
            ОЗУ, а оставшуюся часть памяти - на другие программы. Для того чтобы выделить
            всю возможную память для программ Adobe, установите значение <mark>0</mark> в
            параметре <mark className="ui">RAM reserved for other applications</mark>.
            После нажатия на <mark className="key">Enter</mark> программа сама установит
            нужное значение.
          </li>
          <li>
            Если вы используете несколько композиций с различными эффектами - попробуйте
            создать прокси для них и использовать их в дальнейшем. Заодно таким образом вы
            уменьшите временные затраты на перепросчёт кадров, если вы не планируете
            дальше изменять эти композиции.
            <AdditionInfo>
              Создать прокси для композиций можно в окне{" "}
              <mark className="ui">Project</mark>, найдя нужную композицию и нажав на{" "}
              <mark className="key">ПКМ</mark>. В контекстном меню нужно выбрать{" "}
              <mark className="ui">Create Proxy &gt; Movie</mark>. В окне очереди рендера
              вы можете выбрать любой удобный вам формат для создания прокси и начать его
              генерацию. После успешного рендера - прокси автоматически подключится к
              композиции. Отсоединить композицию от прокси можно через контекстное меню у
              нужной композиции - <mark className="ui">Set Proxy &gt; None</mark>.
            </AdditionInfo>
          </li>
          <li>
            Если у вас мало оперативной памяти на вашем устройстве - докупите ещё и
            установите в материнскую плату, если возможно. В нынешних реалиях для
            комфортной работы в <mark className="app">Adobe After Effects</mark> требуется
            минимум <mark>32 Гб</mark> оперативной памяти.
            <AdditionInfo>
              В <mark className="app">After Effects</mark> версии <mark>25.2</mark> и
              новее добавили функцию проигрывания предпросмотра напрямую из жёсткого
              диска, минуя оперативную память. Это может быть полезно, если у вас малое
              количество оперативной памяти. Если у вас не отключен дисковый кэш, то эта
              опция уже включена по умолчанию, а включить или выключить его можно в{" "}
              <mark className="ui">
                Edit &gt; Preferences &gt; Media & Disk Cache &gt; Enable Preview from
                Disk Cache
              </mark>
              . При использовании данной опции желательно использовать быстрый
              твердотельный накопитель.
            </AdditionInfo>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="видеокарта, гпу, нехватает видеопамяти, врам, vram, This is likely because your GPU is out of memory"
        title='Из-за чего появляется "After Effects has encountered a failure related to GPU-enabled effects from this frame"?'
      >
        <p>
          Данная ошибка указывает на то, что видеопамять вашей видеокарты заполнена и
          эффект, использующий <mark>GPU-ускорение</mark>, задыхается. Такое часто
          происходит, если у вас видеокарта с объёмом видеопамяти меньше чем 4 Гб.
        </p>
        <p>
          В таком случае пользователю надо освободить видеопамять любым способом -
          перезагрузка устройства или &quot;перезагрузка&quot; драйверов видеокарты с
          помощью комбинации клавиш <mark className="key">Ctrl + Win + Shift + B</mark>.
        </p>
        <p>
          В данной ошибке вам прямо советуют переключить рендер с видеокарты на процессор.
          Это можно сделать через окно <mark className="ui">Project Manager</mark>, открыв
          его с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark> и указав{" "}
          <mark className="ui">Mercury Software Only</mark> в вкладке{" "}
          <mark className="ui">Video Rendering and Effects</mark>.
        </p>
        <ImageFigure
          caption="Project Settings"
          imgSrc="images/aftereffects/set_render_on_cpu.png"
          imgTitle="Установка рендера на процессор"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Подробнее о каждом параметре на примере использования устройства на связке
          &quot;процессор AMD и видеокарта NVIDIA&quot;:
          <ul>
            <li>
              <mark className="ui">Mercury GPU Acceleration (CUDA)</mark> - программа{" "}
              <u>возможно</u> будет использовать видеокарту вместе с процессором для
              обработки композиций. Но видеокарта не всегда и не во всех случаях будет
              использоваться, так как не все эффекты программы оптимизированы под работу с
              ним.
            </li>
            <li>
              <mark className="ui">Mercury GPU Acceleration (OpenCL или OpenGL)</mark> -
              аналогично предыдущему параметру, но на встроенном видеочипе процессора.
            </li>
            <li>
              <mark className="ui">Mercury Software only</mark> - программа будет
              преимущественно обрабатывать композиции через процессор, но может
              использовать видеокарту принудительно, если какому-то эффекту будет
              необходимо это сделать.{" "}
            </li>
          </ul>
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="слетела лицензия, красное окно, окно с красной полоской при запуске, не запускается, впн, файл хостс, блокировка доступа в интернет, This unlicensed Adobe app is not genuine and will be disabled soon, Unlicensed Adobe apps may expose your device to increased security risks, This app will disable in days, this app has been disabled"
        title='Как избавиться от "The unlicensed Adobe app has been disabled"?'
      >
        <p>
          Пользователь, работающий в <mark className="word">народной</mark> версии{" "}
          <mark className="app">Adobe After Effects</mark> или в любой другой программе от{" "}
          <mark>Adobe</mark> может столкнуться ошибкой проверки лицензии. Оно
          сопровождается небольшим окном на белом фоне и с красной полосой сверху, а текст
          внутри окна обычно написан на английском языке. Иногда встречаются варианты
          отображения окна об отсутствии лицензии и на другом языке, например на немецком
          или на голландском. Причин для такого поведения &quot;слетевшей&quot; лицензии
          может быть несколько.
        </p>
        <ImageFigure
          caption="Adobe"
          imgSrc="images/adobe_the_unlicensed_app.png"
          imgTitle="Сообщение об отсутствии лицензии"
          styleClass="figure_windows-light"
        />
        <Divider>Проверяем устройство на наличие VPN-соединения</Divider>
        <p>
          В связи с наплывом блокировок различных интернет-ресурсов на территории СНГ -
          большинство пользователей стали пользоваться различными способами обхода,
          например, с помощью <mark className="app">VPN</mark>. И именно из-за
          использования <mark className="word">VPN-соединения</mark> - программа от{" "}
          <mark>Adobe</mark> смогла достучаться в интернет и вывела окно об отсутствии
          лицензии на языке той страны, к которой вы подключились. Почему так происходит?
          При использовании вашего <mark className="app">VPN-клиента</mark> - он
          игнорирует ваши правила соединения, созданные в вашей операционной системе, то
          есть игнорирует стандартный <mark className="app">брандмауэр</mark> и адреса в{" "}
          <mark className="file">hosts</mark>. Для быстрого решения проблемы с активацией
          достаточно отключить текущее <mark className="word">VPN-соединение</mark> и
          пользоваться программами от <mark>Adobe</mark> без него.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Если вы не хотите отключать себя от{" "}
              <mark className="word">VPN-соединения</mark>, то вы можете проверить
              настройки своего <mark className="app">VPN-клиента</mark>. Возможно, в нём
              есть возможность внести программы от <mark>Adobe</mark> или его адреса в
              список исключений соединений для того, чтобы соединение для{" "}
              <mark className="app">Adobe After Effects</mark> проходило с учетом ваших
              настроек брандмауэра или вовсе блокировались.
            </li>
            <li>
              Если вы наоборот используете лицензионную версию{" "}
              <mark className="app">Adobe After Effects</mark>, то вам нужно будет
              поддерживать <mark className="word">VPN-соединение</mark> к другой стране во
              время использования программы, так как <mark>Adobe</mark> блокирует доступ к
              своим ресурсам пользователям РФ и из-за этого может выскакивать данная
              ошибка, так как не может сверить лицензии.
            </li>
          </ul>
        </AdditionInfo>
        <ContentSwitcher
          macContent={
            <div>
              <Divider>Блокируем программе доступ в интернет</Divider>
              <p>
                Если вы не используете различные средства обхода блокировок или{" "}
                <mark className="app">VPN</mark>, то вы можете попробовать отредактировать
                файл <mark className="file">hosts</mark> для блокировки соединения вашего
                устройства к серверам <mark>Adobe</mark>.
              </p>
              <Divider>Правим файл hosts</Divider>
              <p>
                Для редактирования файла <mark className="file">hosts</mark> - вам нужно
                перейти в директорию <mark className="path">/private/etc</mark>, найти и
                скопировать файл <mark className="file">hosts</mark> в любое удобное
                место, открыть любой текстовый редактор, например{" "}
                <mark className="app">TextEdit</mark> или{" "}
                <mark className="app">VS Code</mark>, и внести строки из кнопки для
                открытия модального окна чуть ниже в конец файла. Затем сохраните
                отредактированный файл и перенесите его обратно в{" "}
                <mark className="path">/private/etc</mark> с заменой.
              </p>
              <HostsAdobeModal />
              <AdditionInfo>
                <ul>
                  <li>
                    Если файл <mark className="file">hosts</mark> в этой директории по
                    какой-то причине отсутствует - создайте его самостоятельно без
                    указания расширения файла.
                  </li>
                  <li>
                    Если вы не хотите перемещать туда-сюда файл{" "}
                    <mark className="file">hosts</mark> для редактирования, то вы можете
                    открыть ваш текстовый редактор от имени администратора и спокойно
                    сохранять изменения.
                  </li>
                </ul>
              </AdditionInfo>
              <Divider>Блокируем доступ в интернет с помощью Radio Silence</Divider>
              <p>
                Если внесение адресов в <mark className="file">hosts</mark> вам не
                помогло, то попробуйте воспользоваться программой{" "}
                <a href="https://radiosilenceapp.com/">Radio Silence</a> для блокировки
                доступа в интернет нужным приложениям. После установки и активации этой
                программы перейдите во вкладку <mark className="ui">Network Monitor</mark>{" "}
                и в ней запретите программам от <mark>Adobe</mark>, которые лезут в сеть,
                доступ в интернет, нажав на кнопку <mark className="ui">Block</mark> рядом
                с названием программы.
              </p>
              <ImageFigure
                caption="Radio Silence"
                imgSrc="images/network_radio_silence.png"
                imgTitle="Блокируем доступ в интернет программам на примере Adobe Premiere Pro"
                styleClass="figure_macos-dark"
              />
              <p>
                После проделанных действий, указанные вами программы от <mark>Adobe</mark>{" "}
                не должны стучаться в сеть и выдавать ошибку об отсутствии лицензии. Ниже
                показано, как в итоге примерно должна выглядеть вкладка{" "}
                <mark className="ui">Firewall</mark> после отлова процессов Adobe, лезущие
                в интернет.
              </p>
              <ImageFigure
                caption="Radio Silence"
                imgSrc="images/firewall_radio_silence.png"
                imgTitle="Окно Firewall после блокировки доступа в интернет программам"
                styleClass="figure_macos-dark"
              />
            </div>
          }
          windowsContent={
            <div>
              <Divider>Блокируем программе доступ в интернет</Divider>
              <p>
                Если вы не используете различные средства обхода блокировок или{" "}
                <mark className="app">VPN</mark>, то скорее всего адреса для проверки
                лицензии от <mark>Adobe</mark> обновились и не были вписаны в ваши правила
                блокировки соединения. Это исправляется правкой файла{" "}
                <mark className="file">hosts</mark> или внесением новых правил в{" "}
                <mark className="app">брандмауэре</mark> вашей операционной системы.
              </p>
              <Divider>Правим файл hosts</Divider>
              <p>
                Для редактирования файла <mark className="file">hosts</mark> - вам нужно
                перейти в папку{" "}
                <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопировать
                файл <mark className="path">hosts</mark> в любое удобное место, открыть
                любой текстовый редактор, например <mark className="app">Notepad++</mark>{" "}
                или <mark className="app">VS Code</mark>, и внести строки из кнопки для
                открытия модального окна чуть ниже в конец файла. Затем сохраните
                отредактированный файл и перенесите его обратно в{" "}
                <mark className="path">C:\Windows\System32\drivers\etc\hosts</mark> с
                заменой.
              </p>
              <HostsAdobeModal />
              <AdditionInfo>
                <ul>
                  <li>
                    Если файл <mark className="file">hosts</mark> в этой директории по
                    какой-то причине отсутствует - создайте его самостоятельно без
                    указания расширения файла.
                  </li>
                  <li>
                    Если вы не хотите перемещать туда-сюда файл{" "}
                    <mark className="file">hosts</mark> для редактирования, то вы можете
                    открыть ваш текстовый редактор от имени администратора и спокойно
                    сохранять изменения.
                  </li>
                </ul>
              </AdditionInfo>
              <YouTubeVideo
                caption="Как редактировать файл hosts"
                link="wHhay41ocsc"
              />
              <AdditionWarning>
                <ul>
                  <li>Для изменения системных файлов требуются права администратора.</li>
                  <li>
                    После изменения файла <mark className="file">hosts</mark> желательно
                    перезагрузить ваше устройство.
                  </li>
                </ul>
              </AdditionWarning>
              <Divider>Создаём новые правила в брандмауэре</Divider>
              <p>
                Если правка файла <mark className="file">hosts</mark> вам не помогла и вы
                всё ещё сталкиваетесь с сбоем лицензии, то попробуйте настроить правила
                брандмауэра. Для этого откройте окно{" "}
                <mark className="app">Выполнить</mark> с помощью комбинации клавиш{" "}
                <mark className="key">Win + R</mark>, введите в него{" "}
                <mark className="code">wf.msc</mark> и нажмите на{" "}
                <mark className="key">Enter</mark>. Таким образом вы откроете{" "}
                <mark className="app">монитор брандмауэра</mark>, в котором вы можете
                настроить правила для блокировки доступа в интернет нужной программе.
              </p>
              <AdditionInfo>
                При установке приложений <mark>Adobe</mark> в формате репака от{" "}
                <mark>Kp0JluK</mark> правила в брандмауэре автоматически прописываются при
                установке.
              </AdditionInfo>
              <p>
                После открытия монитора брандмауэра перейдите в раздел правил для входящих
                подключений в левой части окна.
              </p>
              <ImageFigure
                caption="Монитор брандмауэра Защитника Windows в режиме повышенной безопасности"
                imgSrc="images/firewall_main_page.png"
                imgTitle="Список правил брандмауэра"
                styleClass="figure_windows-light"
              />
              <p>
                Затем в правой части интерфейса найдите кнопку{" "}
                <mark className="ui">Создать правило</mark> и нажмите на него.
              </p>
              <ImageFigure
                caption="Монитор брандмауэра Защитника Windows в режиме повышенной безопасности"
                imgSrc="images/firewall_creating_rule.png"
                imgTitle="Окно создания правила брандмауэра"
                styleClass="figure_windows-light"
              />
              <p>
                После нажатия на кнопку создания нового правила в брандмауэре у вас
                откроется новое окно с пятью вкладками. В первой вкладке оставьте значение{" "}
                <mark className="ui">Для программы</mark> и нажмите на{" "}
                <mark className="ui">Далее</mark>.
              </p>
              <ImageFigure
                caption="Мастер создания правила для нового входящего подключения"
                imgSrc="images/firewall_rule_type.png"
                imgTitle="Выбор типа правила брандмауэра"
                styleClass="figure_windows-light"
              />
              <p>
                Во второй вкладке нужно указать путь до исполняемого файла программы
                вручную или через кнопку <mark className="ui">Обзор</mark>, а затем снова
                нажать на <mark className="ui">Далее</mark>. Путь должен выглядеть как{" "}
                <mark className="path">
                  C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                  Files\AfterFX.exe
                </mark>
                .
              </p>
              <ImageFigure
                caption="Мастер создания правила для нового входящего подключения"
                imgSrc="images/firewall_select_app.png"
                imgTitle="Выбор программы для блокировки доступа"
                styleClass="figure_windows-light"
              />
              <p>
                Для действия нового правила нам, очевидно, нужно установить параметр{" "}
                <mark className="ui">Блокировать подключение</mark>.
              </p>
              <ImageFigure
                caption="Мастер создания правила для нового входящего подключения"
                imgSrc="images/firewall_blocking.png"
                imgTitle="Окно настроек брандмауэра"
                styleClass="figure_windows-light"
              />
              <p>
                Во вкладке <mark className="ui">Профили</mark> нужно оставить три чекбокса
                включенными и опять нажать на <mark className="ui">Далее</mark>.
              </p>
              <ImageFigure
                caption="Мастер создания правила для нового входящего подключения"
                imgSrc="images/firewall_select_profile.png"
                imgTitle="Выбор профиля брандмауэра"
                styleClass="figure_windows-light"
              />
              <p>
                Далее назовите своё новое правило любым именем. Можно просто написать
                название программы и нажать на <mark className="ui">Готово</mark>. После
                этого правило будет создано, а указанная программа теперь не должна
                стучаться в интернет.
              </p>
              <ImageFigure
                caption="Мастер создания правила для нового входящего подключения"
                imgSrc="images/firewall_naming.png"
                imgTitle="Выбор имени для правила брандмауэра"
                styleClass="figure_windows-light"
              />
              <AdditionInfo>
                Возможно подобные действия нужно провернуть и к{" "}
                <mark>правилам для исходящего подключения</mark> по аналогичной схеме.
              </AdditionInfo>
              <Divider>Проверяем установленные сервисы на устройстве</Divider>
              <p>
                Если вы переходили с лицензионных версий на{" "}
                <mark className="word">народные</mark>, то скорее всего вы полностью не
                очищали вашу систему от предыдущих установок программ от{" "}
                <mark>Adobe</mark>. Среди не удалённых сервисов в вашей системе мог
                затесаться{" "}
                <mark className="app">Adobe Genuine Software Integrity Service</mark>,
                который проверяет программы на легальное использование и именно он может
                вызвать окно об отсутствии лицензии. Для решения проблемы - достаточно{" "}
                <a href="https://github.com/wangzhenjjcn/AdobeGenp/wiki/Disable-Adobe-Genuine-Software-Integrity-on-Windows">
                  отключить
                </a>{" "}
                этот сервис в <mark className="app">services.msc</mark> или очистить
                систему от программ <mark>Adobe</mark> с помощью{" "}
                <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                  Adobe Creative Cloud Cleaner
                </a>
                .
              </p>
              <Divider>Проверяем, не натворил ли чего антивирус</Divider>
              <p>
                В редких случаях ваш антивирус мог удалить файлы для корректной подмены
                активации, ссылаясь на то, что на вашем устройстве затесался якобы вирус.
                Если вы не хотите отключать или удалять{" "}
                <mark className="app">Windows Defender</mark> с вашего устройства, то вы
                можете добавить нужные папки c программами от <mark>Adobe</mark> в список
                исключений вашего антивируса, а затем установите программу вашей версии
                поверх существующей.{" "}
              </p>
              <YouTubeVideo
                caption="Windows Defender - как восстановить файлы и запретить их удаление"
                link="ET94_dv3f8c"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="для воспроизведения кэшированного предпросмотра требуется 2 или более кадров, не проигрывается предпросмотр, зацикливается превью"
        title='"Cached preview needs 2 or more frames for playback" или почему у меня рендер предпросмотра не завершается до конца и начинает идти по кругу?'
      >
        <p>
          Данная ошибка может выскочить по двум причинам: из-за банальной невнимательности
          пользователя или из-за переполненного кэша программы и оперативной памяти.
        </p>
        <Divider>Проверяем длину рабочей области</Divider>
        <p>
          Первым делом - проверьте длину вашей рабочей области. Может вы упустили тот
          факт, что вы случайным образом сократили его до одного кадра, поэтому и
          отображается эта ошибка. Программе не может начать предпросмотр, если у вас
          рабочая область обрамлена всего лишь одним кадром. Ну как вы себе представляете
          проигрывание композиции всего лишь из одного кадра?
        </p>
        <ImageFigure
          caption="Одна из причин ошибки - маленькая рабочая область"
          imgSrc="images/aftereffects/low_work-area.png"
          imgTitle="Маленькая рабочая область"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы это исправить - удлините рабочую область до нужной длины с помощью{" "}
          <mark className="key">B</mark> и <mark className="key">N</mark>. Если вы хотите
          охватить всю композицию или выделенный слой, установите точки начала и конца
          рабочей области с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + B</mark>. Таким образом она будет
          соответствовать длительности композиции или нужного слоя, и ошибка должна
          исчезнуть.
        </p>
        <Divider>Очищаем кэш и пробуем начать рендер предпросмотра заново</Divider>
        <p>
          Если длина вашей рабочей области больше, чем два кадра, то скорее всего вы
          столкнулись с переполненным кэшем или забитой оперативной памятью. Для
          исправления этой проблемы - достаточно почистить кэш с помощью{" "}
          <mark className="ui">Edit &gt; Purge &gt; All Memory & Disk Cache</mark> и
          нажать на <mark className="ui">OK</mark>. После очистки кэша попробуйте начать
          рендер предпросмотра заново, она должна пройти нормально.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Если очистка кэша не помогает, но раньше всё работало нормально - попробуйте{" "}
              <a href="#4.7">настроить файл подкачки</a>.
            </li>
            <li>
              Иногда может быть такое, что какой-нибудь эффект может мешать корректному
              рендеру, поэтому программа не может нормально обработать кадры для
              предпросмотра. Попробуйте найти виновника из применённых эффектов на слоя
              эффект, который мешает нормальному рендеру, уберите его или замените на
              похожий.
            </li>
          </ul>
        </AdditionInfo>
        <ImageFigure
          caption="Очистка кэша и освобождение оперативной памяти"
          imgSrc="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          imgTitle="Очистка кэша и освобождение оперативной памяти"
          styleClass="figure_windows-light"
        />
        <Divider>Включаем дисковый кэш и предпросмотр из него</Divider>
        <p>
          А если вы сталкиваетесь с тем, что ваш предпросмотр начинает идти по кругу, то
          попробуйте включить новую функцию предпросмотра из дискового кэша. Она доступна
          в <mark className="app">Adobe After Effects</mark> версии <mark>25.2</mark> и
          новее и позволяет проиграть предпросмотр напрямую из дискового кэша, не
          отправляя кадры из него в оперативную память. Чтобы эта функция была
          активирована - вам нужно включить дисковый кэш, который настраивается в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark> и
          включить параметр <mark className="ui">Enable Preview from Disk Cache</mark>.
          После включения этой опции - попробуйте начать кэширование заново и проверьте,
          насколько дольше оно станет проигрываться.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/enable_preview_from_disk_cache.png"
          imgTitle="Включение проигрывания предпросмотра из дискового кэша"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="выделенный объем памяти превышает внутреннее ограничение, рекомендуется снизить требования к памяти для рендеринга этого кадра, невозможно выделить для эффекта буфер величиной более 30000 пикс. в любом направлении, нехватка озу, перекрутил, не проигрывается предпросмотр, зацикливается превью, motion tile, мозаика движения, Either decrease the memory requirements for the rendering frame or install more RAM"
        title='"Unable to allocate enough memory to render the current frame" или "Effect cannot allocate a buffer larger than 30000 pixels in either dimension (25::56)"'
      >
        <p>
          Эти две ошибки обычно возникают из-за неправильных действий пользователя или
          неумения оптимизировать свой проект. В первой ошибке программе не хватает
          ресурсов устройства для рендера кадра, а во второй - пользователь каким-то
          образом создал слишком большой файл по разрешению и упёрся в лимит по пикселям.
        </p>
        <Divider>
          Объясняем причину и решение &quot;Unable to allocate enough memory to render the
          current frame (XXXX x XXXX @ X bpc)&quot;
        </Divider>
        <p>
          В описании этой ошибки указано, что проблема связана с чрезмерными требования и
          программа не может выделить ресурсы при генерации кадра. Чаще всего это
          происходит из-за использования ресурсоёмких эффектов или из-за большой глубины
          цвета, указанная в настройках проекта.
        </p>
        <ul>
          <li>
            Попробуйте отключить все эффекты на время, а затем поочерёдно включить их,
            чтобы определить, какой из них вызывает проблему при рендере кадра.
          </li>
          <li>
            Попробуйте очистить кэши в <mark className="ui">Edit &gt; Purge</mark>,
            освободить оперативную память через <mark className="app">Mem Reduct</mark>{" "}
            для <mark>Windows</mark> или <a href="#4.7">настроить файл подкачки</a>.
          </li>
          <li>
            Попробуйте понизить цветовую глубину. Чтобы это сделать - откройте{" "}
            <mark className="ui">Project Manager</mark> с помощью комбинации клавиш{" "}
            <mark className="key">Ctrl + Alt + Shift + K</mark>, перейдите во вкладку{" "}
            <mark className="ui">Color</mark> и в параметре{" "}
            <mark className="ui">Bit Depth</mark> укажите меньшее значение цветовой
            глубины, например <mark>8 bits per channel</mark>.
          </li>
        </ul>
        <Divider>
          Объясняем причину и решение &quot;Effect cannot allocate a buffer larger than
          30000 pixels in either dimension&quot;
        </Divider>
        <p>
          Ошибка{" "}
          <mark>
            Effect cannot allocate a buffer larger than 30000 pixels in either dimension
          </mark>{" "}
          чаще всего связана с эффектами вроде <mark className="plugin">Motion Tile</mark>{" "}
          или <mark className="plugin">CC Repetile</mark>. Эти эффекты увеличивают
          фактическое разрешение слоя за счёт расширения его границ. Если исходное
          разрешение слоя уже большое, например, <mark>16384x16384</mark>, то любое
          дополнительное расширение может привести к превышению этого лимита.
        </p>
        <p>
          В <mark className="app">Adobe After Effects</mark> размер любого слоя не может
          превышать <mark>30000</mark> пикселей по ширине или высоте и это ограничение
          никак нельзя обойти. Для решения проблемы найдите эффект, который увеличивает
          размеры изображения, и либо временно отключите его, либо уменьшите параметры
          расширения, чтобы итоговое разрешение слоя оставалось в допустимых пределах.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="этот эффект может замедлить предпросмотр и экспорт так как он не оптимизирован для мультикадрового рендера"
        title='Почему появляется "This effect may slow down Preview and Export as it is optimized Multi-Frame Render" при применении эффекта?'
      >
        <p>
          Это предупреждение сообщает, что используемый вами плагин не поддерживает
          технологию <mark>Multi-Frame Render</mark>, поскольку его версия ещё не
          адаптирована для работы с ней. Рекомендуется проверить наличие обновлений у
          разработчика. При этом вы можете спокойно работать с этим эффектом, однако при
          рендеринге могут возникать ошибки.
        </p>
        <p>
          Если это предупреждение или треугольник рядом с названием эффекта в{" "}
          <mark className="ui">Effect Controls</mark> вас раздражает или у вас нет
          возможности или желания обновлять используемый плагин - вы можете отключить
          предупреждение, отключив функцию многокадрового рендера в настройках{" "}
          <mark className="app">Adobe After Effects</mark>. Для этого вам нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark> и
          убрать галочку с <mark className="ui">Enable Multi-frame Render</mark>.
        </p>
        <AdditionWarning>
          Отключение многокадрового рендера может снизить скорость предпросмотра и
          экспорта, так как программа будет обрабатывать кадры последовательно, а не
          параллельно.
        </AdditionWarning>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/checkbox_multiframe-render.png"
          imgTitle="Переключение работы функции Multi-Frame Render"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="этот проект содержит ошибки выражений"
        title='Из-за чего появляется "This project contains an expression error"?'
      >
        <p>
          Чаще всего данная ошибка возникает из-за двух факторов: язык самого{" "}
          <mark className="app">Adobe After Effects</mark> и движок интерпретатора
          выражений, указанный в настройках проекта. Иногда пользователи, использующие
          русскоязычную локализацию <mark className="app">Adobe After Effects</mark>{" "}
          сталкиваются с неожиданной проблемой: открывая чужой проект с выражениями или
          применяя сторонний пресет, программа выдаёт ошибку{" "}
          <mark className="ui">Этот проект содержит ошибки выражений</mark> в окне
          предпросмотра. Причина кроется в языке интерфейса у пользователя - большинство
          выражений пишутся под английскую локализацию или под тот язык, который
          использовал автор проекта или пресета. Или в редких случаях выражение может быть
          написано под старый или новый движок интерпретатора выражений. В этой статье мы
          поговорим, как быстро эту проблему решить.
        </p>
        <Divider>Меняем язык программы</Divider>
        <p>
          Если у вас установлен <mark className="app">Adobe After Effects</mark> на языке,
          отличном от английского - попробуйте сменить язык на английский. Делается это
          достаточно просто.
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
                Этот способ смены языка работает только с{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>24.x</mark>{" "}
                и новее.
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
                Этот способ смены языка работает только с{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>24.X</mark>{" "}
                и новее.
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
        <Divider>Меняем язык интерпретатора выражений</Divider>
        <p>
          Если смена языка программы не помогла избавиться от этой ошибки, то попробуйте
          сменить язык программирования для выражений. Для откройте окно{" "}
          <mark className="ui">Project Manager</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark> и в ней перейдите во вкладку{" "}
          <mark className="ui">Expressions</mark>. В этой вкладке в параметре{" "}
          <mark className="ui">Expressions Engine</mark> выберите другой движок, отличный
          от текущего. Такое бывает, когда выражение в шаблоне создано для другого
          синтаксиса интерпретатора.
        </p>
        <ImageFigure
          caption="Project Settings"
          imgSrc="images/aftereffects/change_expression_language.png"
          imgTitle="Изменяем движок выражений"
          styleClass="figure_windows-dark"
        />
        <p>
          Если вы применили чужой пресет с выражениями на свой слой, но все ещё
          сталкиваетесь с ошибкой после советов выше, то желательно бы посмотреть, на что{" "}
          <mark className="app">Adobe After Effects</mark> ругается. Часто это бывает
          из-за ссылок, которые ведут к несуществующим значениям или параметрам. Чтобы
          посмотреть, на что жалуется <mark className="app">Adobe After Effects</mark> при
          исполнении выражения, нужно выделить слой и нажать два раза на клавишу{" "}
          <mark className="key">E</mark>. Затем рядом с полем выражения нажмите на иконку
          треугольника. В открывшемся окне программа покажет, обо что она споткнулась при
          обработке выражения. Это может вам помочь при дальнейшем анализе проблемы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="расширенный 3d, вылетает, адвансед 3д, advanced 3D is not supported by the current software"
        title='"Advanced 3D plug-in generated an unexpected exception" или программа вылетает при попытке использовать новый движок 3D-рендера'
      >
        <p>
          Вариантов возникновения данной ошибки может быть несколько, начиная устаревшими
          драйверами и простым багом, заканчивая отсутствием поддержки вашей видеокарты
          для корректной работы нового движка рендера. Если ваш графический процессор
          находится в{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html">
            списке поддерживаемых видеокарт
          </a>
          , но при попытке использования <mark className="plugin">Advanced 3D</mark> -{" "}
          программа вылетает или не даёт ею воспользоваться, то попробуйте запустить{" "}
          <mark className="app">Adobe After Effects</mark> от имени администратора. Чтобы
          каждый раз не прожимать кнопку{" "}
          <mark className="ui">Запустить от имени администратора</mark> в контекстном меню
          - установите чекбокс{" "}
          <mark className="ui">Запускать от имени администратора</mark> в свойствах
          ярлыка.
        </p>
        <VideoFigure
          caption="Настройка ярлыка для дальнейшего запуска от имени администратора"
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/open_ae_as_admin.mp4"
        />
        <p>
          Если запуск от администратора вам не помог от вылетающего{" "}
          <mark className="app">Adobe After Effects</mark> при попытке использовать{" "}
          <mark className="plugin">Advanced 3D</mark>, то попробуйте просто обновить
          драйвера на вашу видеокарту, желательно на редакцию{" "}
          <mark>NVIDIA Studio Driver</mark> для более стабильной работы с монтажными
          программами.
        </p>
        <AdditionInfo>
          Загрузить драйвера <mark>NVIDIA Studio</mark> вы можете на{" "}
          <a href="https://www.nvidia.com/en-us/geforce/drivers/">
            официальной странице загрузки драйверов
          </a>
          . На странице укажите текущую модель вашей видеокарты, операционную систему и не
          забудьте указать в <mark className="ui">Download Type</mark> значение{" "}
          <mark>Studio Driver</mark>.
        </AdditionInfo>
        <p>
          Если ни запуск от администратора, ни обновление драйверов на видеокарту не
          помогло, то скорее всего ваша видеокарта не соответствует требованиям и не
          поддерживает функцию <mark className="plugin">Advanced 3D</mark>. Проверьте на
          наличие и соответствие вашей видеокарты в{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html">
            системных требованиях для Advanced 3D
          </a>
          , начните копить на новый графический ускоритель и переключите 3D-движок на{" "}
          <mark className="plugin">Classic 3D</mark> в настройках композиции во вкладке{" "}
          <mark className="ui">3D Renderer</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="синема 4д не работает, c4d, с4д, cinema 4d: render failed, cineware server suite failed to acquire renderer port and path. server commands not available, чтобы использовать средство рендеринга cinema 4d - необходимо установить cinema 4d"
        title='"Cinema 4D must be installed in order to use the Cinema 4D renderer" или ошибка 5027::12'
      >
        <p>
          Если у вас установлен <mark className="app">Adobe After Effects</mark> от{" "}
          <mark>KpoJluK</mark>, то эта ошибка возникает из-за того, что в его
          дистрибутивах c версий <mark>2020</mark> и выше не поставляется{" "}
          <mark className="plugin">Cinema 4D Lite</mark>. Это было сделано для уменьшения
          веса программы, но из-за такого подхода отваливается возможность импорта
          проектов формата <mark className="file">.c4d</mark>, не работает корректно
          плагин <mark className="plugin">Cineware</mark> и нельзя включить
          соответствующий движок 3D-рендера. Чтобы решить эту проблему - достаточно
          установить полноценную <mark className="app">Maxon Cinema 4D</mark> нужной
          версии на ваше устройство, которую просит ваша версия{" "}
          <mark className="app">Adobe After Effects</mark>. Обычно в такой ошибке
          указывается, какую версию <mark className="app">Cinema 4D</mark> нужно
          установить.
        </p>
        <AdditionWarning>
          <ul>
            <li>
              Если в этой ошибке <mark className="app">Adobe After Effects</mark> пишет,
              что нужно установить, например <mark className="app">Cinema 4D</mark> версии{" "}
              <mark>2023</mark> - то нужно ставить именно любую версию{" "}
              <mark>2023.X.X</mark>! Версии <mark>2024.X.X</mark> или <mark>25.X.X</mark>{" "}
              в таком случае не подойдут.
            </li>
            <li>
              <mark className="app">Cinema 4D</mark> версий <mark>26.X.X</mark> не
              подойдут для версий <mark className="app">Adobe After Effects</mark> ниже{" "}
              <mark>23.1</mark>, так как Adobe не включала в поддержку эту версию.
            </li>
            <li>
              Если вы установили <mark className="app">Cinema 4D</mark> для вашей версии{" "}
              <mark className="app">Adobe After Effects</mark>, но программы всё ещё не
              видят друг друга, то убедитесь в том, что обе программы установлены на
              стандартном расположении установки и в разделе{" "}
              <mark className="path">C:\</mark>, а не на другом.
            </li>
          </ul>
        </AdditionWarning>
        <AdditionInfo>
          <ul>
            <li>
              Если у вас установлен <mark className="app">Adobe After Effects</mark> из{" "}
              <mark className="app">Creative Cloud</mark>, то вам достаточно установить{" "}
              <mark className="plugin">Cinema 4D</mark> оттуда:{" "}
              <mark className="ui">
                Установленные приложения &gt; After Effects &gt; Подключаемые модули &gt;
                Cinema 4D &gt; Установить
              </mark>
              .
            </li>
            <li>
              В <mark className="app">Adobe After Effects</mark> от <mark>m0nkrus</mark> и
              некоторых релизеров - <mark className="app">Cinema 4D Lite</mark> обычно не
              вырезан, соответственно подобные манипуляции проводить не надо.
            </li>
          </ul>
        </AdditionInfo>
        <Divider>
          Список соответствия версий Maxon Cinema 4D с версиями After Effects для
          корректной работы
        </Divider>
        <AdditionInfo>
          Чтобы посмотреть текущую версию <mark className="app">Adobe After Effects</mark>
          , установленная на вашем устройстве - перейдите в программе в{" "}
          <mark className="ui">Help &gt; About After Effects</mark>.
        </AdditionInfo>
        <ul>
          <li>
            <mark className="app">Adobe After Effects 25.1 и новее</mark> требует{" "}
            <mark className="app">Cinema 4D 2025.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects 24.1 - 25.0</mark> требует{" "}
            <mark className="app">Cinema 4D 2024.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects 23.1 - 23.6</mark> требует{" "}
            <mark className="app">Cinema 4D 2023.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects 22.x - 23.0</mark> требует{" "}
            <mark className="app">Cinema 4D 25.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects 17.x (2020)</mark> и{" "}
            <mark className="app">Adobe After Effects 18.x (2021)</mark> требует{" "}
            <mark className="app">Cinema 4D R21.X.X.</mark>. Путь до установленных
            программ вы можете настроить в настройках 3D-рендера.
            <div
              style={{
                display: "grid",
                gap: "10px",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                alignItems: "center",
              }}
            >
              <ImageFigure
                caption="Composition Settings"
                imgSrc="images/aftereffects/composition_settings_3drenderer_cinema4d.png"
                imgTitle="Composition Settings"
                styleClass="figure_windows-dark"
              />
              <ImageFigure
                caption="Choose CINEMA 4D Installation"
                imgSrc="images/aftereffects/cinema4d_renderer_options.png"
                imgTitle="Choose CINEMA 4D Installation"
                styleClass="figure_windows-dark"
              />
              <ImageFigure
                caption="Choose CINEMA 4D Installation"
                imgSrc="images/aftereffects/choose_cinema4d_installation.png"
                imgTitle="Choose CINEMA 4D Installation"
                styleClass="figure_windows-dark"
              />
            </div>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="аппаратное ускорение, ускорение отображения отключено"
        title='Вылезло "Display acceleration disabled" в углу окна предпросмотра'
      >
        <p>
          Данное предупреждение указывает на то, что программа по какой-то причине не
          может использовать аппаратное ускорение с помощью дискретной видеокарты или
          встроенного видеочипа в вашем процессоре. Если вы только недавно переустановили{" "}
          <mark>Windows</mark> и установили с нуля{" "}
          <mark className="app">Adobe After Effects</mark>, то скорее всего при настройке
          вашей операционной системы вы забыли установить или обновить драйвера на
          видеокарту вашего устройства.
        </p>
        <Divider>Устанавливаем или обновляем драйвера видеочипа</Divider>
        <ul>
          <li>
            Если вы используете дискретную видеокарту от <mark>NVIDIA</mark>, то
            попробуйте установить драйвера редакции <mark>Studio</mark>. Загрузить
            драйвера <mark>NVIDIA Studio</mark> вы можете из{" "}
            <a href="https://www.nvidia.com/en-us/geforce/drivers/">
              официальной страницы загрузки драйверов
            </a>
            . На странице укажите текущую модель вашей видеокарты, операционную систему и
            не забудьте указать в <mark className="ui">Download Type</mark> значение{" "}
            <mark>Studio Driver</mark>.
          </li>
          <li>
            Если вы используете дискретную видеокарту или процессор со встроенным
            видеоядром от <mark>Intel</mark>, то вы можете найти и загрузить подходящий
            драйвер для своего ускорителя{" "}
            <a href="https://www.intel.com/content/www/us/en/search.html#sort=relevancy&f:@tabfilter=[Downloads]&f:@stm_10385_en=[Graphics]&f:downloadtype=[Drivers]">
              на официальном сайте
            </a>
            . Также вы можете воспользоваться{" "}
            <a href="https://www.intel.com/content/www/us/en/support/detect.html">
              автоматическим установщиков нужных драйверов
            </a>{" "}
            в соответствии от того, что у вас установлено из комплектующих.
            <AdditionWarning>
              <mark>Intel</mark> не пускает на страницу пользователей из Российской
              Федерации. Для того, чтобы загрузить драйвера - воспользуйтесь{" "}
              <mark className="app">VPN</mark>.
            </AdditionWarning>
          </li>
          <li>
            Если вы используете дискретную видеокарту или процессор со встроенным
            видеоядром от <mark>AMD</mark>, то вы можете воспользоваться автоматическим
            установщиком. Его можно{" "}
            <a href="https://www.amd.com/en/support/download/drivers.html">
              загрузить с официального сайта
            </a>
            .
          </li>
        </ul>
        <p>
          После установки драйверов на видеочип - перезагрузите устройство и откройте{" "}
          <mark className="app">Adobe After Effects</mark> снова. При корректной установке
          - данная надпись должна пропасть, а программа должна работать шустрее.
        </p>
        <Divider>
          Разбираемся с совместимостью вашего устройства с текущей версией программы
        </Divider>
        <p>
          В более редких случаях вполне может быть такое, что новая версия{" "}
          <mark className="app">Adobe After Effects</mark> не поддерживает вашу видеокарту
          или драйвера, которые вы давно не обновляли. Или наоборот. Обычно проблемы
          совместимости указываются в окне{" "}
          <mark className="ui">System Compatibility Report</mark> при запуске, если оно
          было вами не отключено в настройках программы.
        </p>
        <AdditionInfo>
          По своему опыту скажу, что когда я использовал <mark>GTX 1060 3 GB</mark> -
          специально сидел на старых версиях драйверов для видеокарты, так как более новые
          на то время у меня вызывали сбои и не выводилась картинка. Соответственно после
          обновлений <mark className="app">After Effects</mark> до версии{" "}
          <mark>2023</mark> и новее - у меня отвалилась поддержка <mark>Draft 3D</mark> и
          не работали некоторые функции ускорения. Спустя время, после того как{" "}
          <mark>NVIDIA</mark> исправила драйвера и видеокарта больше не сбоила - в{" "}
          <mark className="app">After Effects</mark> вернулись <mark>Draft 3D</mark> и
          даже завёлся <mark className="plugin">Advanced 3D</mark>, который, как я думал,
          работает только на видеокартах с <mark>4 гигабайтами</mark> видеопамяти и выше.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="отключение планирования аппаратного ускорения gpu"
        title="При работе в программе у меня пропадает изображение на мониторе, как будто перезагружаются драйвера на видеокарту. Есть ли способы исправить это?"
      >
        <Divider>Отключаем аппаратное ускорение на устройствах с Windows</Divider>
        <p>
          Попробуйте отключить аппаратное ускорение дисплея в{" "}
          <mark className="app">параметрах Windows</mark>. Для этого откройте их с помощью
          комбинации клавиш <mark className="key">Win + I</mark>. Затем нажмите в левом
          углу раздел <mark className="ui">Система</mark>, далее перейдите в{" "}
          <mark className="ui">Дисплей</mark>, затем <mark className="ui">Графика</mark>.
          Раскройте <mark className="ui">Дополнительные графические параметры</mark> и
          уберите чекбокс возле{" "}
          <mark className="ui">Планирование GPU с аппаратным ускорением</mark>. После
          отключения этого параметра - перезагрузите ваше устройство и продолжите работу
          дальше.
        </p>
        <ImageFigure
          caption="Параметры"
          imgSrc="images/disable_gpu_planning.png"
          imgTitle="Отключаем планирование GPU"
          styleClass="figure_windows-dark"
        />
        {/* TODO: найти ещё решения, если найдутся */}
      </DetailsSummary>
      <DetailsSummary
        tag="сапфир"
        title="Почему у меня появляется красный экран и пропадают параметры эффектов из BorisFX Sapphire?"
      >
        <p>
          Скорее всего вы столкнулись с неприятным багом{" "}
          <mark className="word">народной</mark> версии{" "}
          <mark className="plugin">BorisFX Sapphire</mark> версии <mark>2024.5</mark> и{" "}
          <mark>2024.51</mark> в виде репака от <mark>KpoJluK</mark>. Вместе с этим багом
          вы не сможете настроить нужный эффект, так как атрибуты не отображаются.
        </p>
        <p>
          Данная проблема решается откатом версии до <mark>2024.4</mark> от{" "}
          <mark>KpoJluk</mark> или установкой более свежих версий плагинов в виде репака
          от <mark>Team V.R.</mark>.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Скачать популярные плагины и различные программы для устройств на{" "}
              <mark>Windows</mark> вы можете в канале{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
            </li>
            <li>
              Если у вас устройство на <mark>macOS</mark>, то перейдите в{" "}
              <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад</a>.
            </li>
          </ul>
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="сапфир"
        title="Почему вылетает Adobe Media Encoder после установки плагинов Boris FX Sapphire?"
      >
        <p>
          Это довольно популярный баг, который мешает нормальному запуску{" "}
          <mark className="app">Adobe Media Encoder</mark> при наличии установленных в
          системе плагинов <mark className="plugin">Boris FX Sapphire</mark>. В более
          поздних версиях плагинов и программ это исправили, но если вы с таким
          столкнулись - вам достаточно просто указать{" "}
          <mark className="ui">режим совместимости с Windows 8</mark> в свойствах ярлыка
          программы.
        </p>
        <p>
          Для этого открываем свойства ярлыка, переходим в вкладку{" "}
          <mark className="ui">Совместимость</mark> и нажимаем галочку рядом с параметром{" "}
          <mark className="ui">
            Запускать программу в режиме совместимости с Windows 8
          </mark>
          .
        </p>
        <VideoFigure
          caption="Настройка режима совместимости"
          styleClass="figure_windows-dark"
          videoSrc="images/compatibility_media_encoder.mp4"
        />
        <p>
          После проделанных действий программа при запуске не должна вылетать. Если всё
          ещё вылетает, обновите плагины <mark className="plugin">Boris FX Sapphire</mark>{" "}
          до последних версий.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="твикстор"
        title="Почему появляется красный или синий экран при использовании Twixtor на слое?"
      >
        <p>
          Обычно заливка слоя красным или синим цветом может зависеть от кривых действий
          пользователя при использовании <mark className="plugin">Twixtor</mark>.
        </p>
        <ul>
          <li>
            Синяя заливка по всему размеру слоя показывает, что вы каким-то образом ушли
            за пределы вашего видео и плагин не понимает, что ему отобразить. Для решения
            синего экрана - уменьшите скорость клипа или расширьте диапазон отображения
            исходника.
          </li>
          <li>
            Красная заливка показывает, что вы установили{" "}
            <mark className="plugin">Twixtor</mark> по очередности не первым по списку
            применённых эффектов. Для решения - просто поставьте эффект первым по списку
            или примените <mark className="plugin">Twixtor</mark> на корректирующий слой.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="файл поврежден, невозможно импортировать файл, ошибка с файлом, не читается"
        title='"File is damaged", "Unable to import file as project (bad format or not readable)" или "Error with file"'
      >
        <p>
          Если вы открыли проект, прекрасно работавший вчера, но вдруг сегодня он перестал
          открываться, то поздравляю. Возможно, вы экстренно завершили процесс с
          программой или компьютер упал в <mark>BSOD</mark>. В таком случае восстановить
          проект будет крайне проблематично.
        </p>
        <ul>
          <li>
            Попробуйте найти авто-сохранения проекта и открыть их, а затем продолжить
            работу с них. Обычно файлы авто-сохранений находятся рядом с файлом проекта.
          </li>
          <li>
            Если файла авто-сохранения нет, или там находятся очень старые файлы, то снова
            примите мои соболезнования. В следующий раз{" "}
            <a href="#4.1">
              позаботьтесь о своих нервах и создавайте резервные копии проекта или
              настройте облачное хранилище с поддержкой отката файлов
            </a>
            , например <a href="https://360.yandex.ru/">Яндекс.Диск</a>.
          </li>
        </ul>
        <AdditionInfo>
          Интересный факт: при нажатии на <mark className="key">Ctrl + S</mark>, таймер
          автоматического авто-сохранения сбрасывается. Также файлы авто-сохранений не
          создаются, если у вас изначально не был сохранён проект. Поэтому рекомендуем
          выработать привычку сохранять файл проекта сразу же после открытия{" "}
          <mark className="app">Adobe After Effects</mark> и установить минимальное время
          для авто-сохранений в настройках программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Auto-Save</mark> и укажите
          значение <mark className="ui">Save every</mark> от 1 до 3 минут.
        </AdditionInfo>
        <p>
          В редких случаях файл может оказаться не битым, но не может спокойно открыться,
          если свободного места на дисковом разделе крайне мало. Так как операционная
          система <mark>Windows</mark> не всегда предупреждает о малом объёме свободной
          дисковой памяти на разделах, вы могли упустить такую мелочь и можете столкнуться
          с невозможностью открытия проекта в{" "}
          <mark className="app">Adobe After Effects</mark>. Для решения этой проблемы вам
          достаточно почистить систему от накопившегося мусора, хотя бы удалив файлы из
          папки <mark className="path">%Temp%</mark> и повторить попытку открытия проекта
          снова.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="дисковый кэш, не хватает места"
        title="Your disk cache folder is on a drive that does not have enough avaiable space to safely store the full amount specified in your preferences. Please make more space available or go to Media & Disk Cache preferences to change the folder or maximium disk cache size"
      >
        <p>
          В данном предупреждении буквально написано, что не хватает места на разделе, где
          указано хранение дискового кэша. Для решения этой проблемы просто освободите
          место на разделе, где хранится дисковый кэш.
        </p>
        <ImageFigure
          caption="Warning"
          imgSrc="images/aftereffects/low_diskcache_space_warning.png"
          imgTitle="Предупреждение о недостаточном свободном месте на диске"
          styleClass="figure_windows-dark"
        />
        <p>
          Вы можете уменьшить максимальное количество гигабайт для дискового кэша или
          изменить местоположение хранения в настройках{" "}
          <mark className="app">Adobe After Effects</mark>. Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark> и
          уменьшите максимальный размер дискового кэша или укажите другое расположение,
          например на другом диске или внешнем накопителе.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/preferences-media_and_disk_cache.png"
          imgTitle="Настройка дискового кэша"
          styleClass="figure_windows-dark"
        />
        <p style={{fontSize: "0.75rem", opacity: "0.5"}}>
          Или просто отключите дисковый кэш, убрав галочку с{" "}
          <mark className="ui">Enable Disk Cache</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="дисковый кэш отсутствует"
        title="Error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory. Please check your settings in Media and Disk Cache Preferences"
      >
        <AdditionInfo>
          Данное предупреждение не является критической ошибкой, вы можете проигнорировать
          его и работать с программой как прежде.
        </AdditionInfo>
        <p>
          Данная ошибка указывает на то, что настройки кэша в программе ссылаются на
          несуществующий раздел. Обычно это происходит при переносе настроек программы из
          одного компьютера на другой или извлечением раздела, на который было назначено
          дисковое кэширование. Программа в таком случае укажет на системную папку
          временных файлов, ссылаясь на переменные среды операционной системы.
        </p>
        <p>
          Для настройки расположения дискового кэша перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark> и
          укажите свое местоположение. Также в этом разделе вы можете указать максимальный
          размер для дискового кэша или очистить его.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/preferences-media_and_disk_cache.png"
          imgTitle="Настройка дискового кэша"
          styleClass="figure_windows-dark"
        />
        <p style={{fontSize: "0.75rem", opacity: "0.5"}}>
          Или просто отключите дисковый кэш, убрав галочку с{" "}
          <mark className="ui">Enable Disk Cache</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Не удалось выполнить преобразование символов Unicode" или "Не удалось загрузить псевдоэффекты" при запуске After Effects'>
        <p>
          Если вы попытаетесь запустить <mark className="app">Adobe After Effects</mark> с
          русской локализацией, то вы можете столкнуться с данной проблемой. Она
          встречается на старых версиях и на версии <mark>24.4</mark>, которую позже
          исправили. Для решения данной проблемы нужно переустановить{" "}
          <mark className="app">Adobe After Effects</mark> на английский язык. Если вы не
          хотите менять язык, то вам нужно обновиться до более свежей версии программы или
          откатиться до более старой.
        </p>
        <p>
          Если вы сидите на другой версии программы или на английской локализации, то
          причин для появления этой ошибки может быть очень много. Поэтому просто дам
          совет: постарайтесь меньше использовать кириллицу в директориях, файлах и
          названиях слоёв. В некоторых случаях помогает{" "}
          <a href="https://community.adobe.com/t5/after-effects-discussions/faq-how-to-reset-trash-preferences-in-after-effects/td-p/10634342">
            сброс настроек After Effects
          </a>{" "}
          до стандартных, изменение локали в операционной системе или создание новой
          учётной записи пользователя на самом устройстве.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Error: overflow converting ratio denominators (17::19) или (17::18)">
        <p>
          Данная ошибка может выскочить по совершенно разным причинам и чаще всего на
          старых версиях <mark className="app">Adobe After Effects</mark>. Причин и
          решений может быть множество, но универсального решения, к сожалению, нет.
        </p>
        <ul>
          <li>
            Ошибка может возникнуть из-за исходников, в частности из-за его кривого
            фреймрейта. Если у вашего исходника в окне <mark className="ui">Project</mark>{" "}
            значение кадров в секунду выглядит как{" "}
            <mark>{(Math.random() * (40 - 30) + 30).toFixed(3)}</mark>, то вам нужно либо
            интерпретировать, либо перекодировать футаж в <mark>30 к\с</mark> через{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">Handbrake</mark>.{" "}
            <mark className="app">Adobe After Effects</mark> не очень любит нестандартные
            значения кадров в секунду и криво их интерпретирует.
            <AdditionInfo>
              Для интерпретации нужного футажа, выделите его в{" "}
              <mark className="ui">Project</mark> и нажмите на комбинацию клавиш{" "}
              <mark className="key">Ctrl + Alt + G</mark>.
            </AdditionInfo>
          </li>
          <li>
            Если после замены исходников вы всё ещё сталкиваетесь с проблемой, то
            посмотрите, нет ли у вас масок для слоёв в проекте. Иногда может помочь их
            пересоздание.
          </li>
          <li>
            Если вы сталкиваетесь с трудностями при открытии и работе с проектами,
            создайте новый проект и импортируйте туда композиции из проекта, где вылезает
            данная ошибка.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag='Несоответствие частоты кадров либо не найден видеоряд с полями. Для достижения оптимального результата операций "Кисть для ротоскопии" и "Уточнить края" необходимо задать частоту кадров композиции XX в соответствии с источником слоя'
        title='"Frame rate mismatch, or footage with fields found. For best Roto Brush & Refine Edge results, set the composition to XX fps to match the layer source" при использовании Rotobrush'
      >
        <p>
          Данное предупреждение показывается при использовании инструмента{" "}
          <mark className="plugin">Rotobrush</mark> и оповещает пользователя о том, что
          количество кадров в секунду у исходника отличается от указанного количества
          кадров в секунду в настройках композиции. Например, вы используете исходник с
          частотой кадров 50 к/c, а композиция настроена на 30. Программа прямым текстом
          скажет, что нужно поставить верный фреймрейт в настройках композиции и какое
          именно значение, чтобы всё вырезалось верно.
        </p>
        <AdditionInfo>
          Чтобы открыть настройки композиции - нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + K</mark>.
        </AdditionInfo>
        <p>
          Если вы не хотите менять значение FPS в настройках композиции, то для вас есть
          три способа псевдо-решения:
        </p>
        <ul>
          <li>
            Создайте прекомпозицию с нужным исходником, а затем прямо на слое с
            свежесозданной прекомпозицией начинаем делать ротоскопинг через{" "}
            <mark className="plugin">Rotobrush</mark>.
          </li>
          <li>
            Интерпретируйте FPS у исходника. Для этого перейдите в окно Project, найдите
            там ваш исходник и нажмите на него <mark className="key">ПКМ</mark>. Затем в
            контекстном меню выберите{" "}
            <mark className="ui">Interpret Footage &gt; Conform to frame rate</mark>.
          </li>
          <li>
            Просто перекодировать исходник через{" "}
            <a href="https://www.shutterencoder.com/">Shutter Encoder</a> с указанием
            нужного FPS и заменить позже в проекте через{" "}
            <mark className="ui">Replace Footage &gt; File</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="ошибка инициализации заливки с учетом содержимого"
        title='"Content Aware Fill Error: Initialization Failed"'
      >
        <p>
          Данная ошибка может вылезти по совершенно разным причинам. Одна из них -
          кириллица в пути к <mark className="file">.aep</mark> файлу, в названии
          файла-исходника или в названии композиции. Для решения постарайтесь отказаться
          от кириллицы в путях и названиях, а также попробуйте перенести файлы проекта из
          внешнего жёсткого диска на внутренний вашего устройства, если они там
          расположены. После этого попробуйте воспользоваться{" "}
          <mark className="plugin">Content Aware Fill</mark> заново.
        </p>
        <p>
          Иногда ещё такое может произойти из-за неверно установленного цветового профиля
          в настройках проекта. Для этого проверьте ваше цветовое пространство во вкладке{" "}
          <mark className="ui">Color</mark> в <mark className="ui">Project Manager</mark>,
          которое открывается комбинацией клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark>. Затем укажите значение{" "}
          <mark className="ui">None</mark> или любое другое в параметре{" "}
          <mark className="ui">Working Color Space</mark>.
        </p>
        <ImageFigure
          caption="Project Settings"
          imgSrc="images/aftereffects/change_working_color_space.png"
          imgTitle="Изменение цветового профиля"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="размер слоя должен соответствовать композиции и использовать значения трансформирования по умолчанию"
        title='"Layer must match Composition and use default transform values" при использовании 3D Camera Tracker'
      >
        <p>
          Данная ошибка прямым текстом указывает на то, что слой должен быть по размеру
          композиции, а также не быть перемещённым, повёрнут или ещё каким-то образом
          видоизменён.
        </p>
        <p>
          Если вы не хотите или не можете изменить трансформацию и размер слоя, то
          сделайте прекомпозицию через комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + C</mark> с переносом аттрибутов на новую
          композицию, выбрав{" "}
          <mark className="ui">Move all attributes into the new composition</mark>, а
          затем на нём сделайте трекинг.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Analysis Solve Failed" или "Unable to solve camera for this frame" при использовании 3D Camera Tracker'>
        <p>
          Представим, что вы хотите сделать 3D-трекинг с помощью встроенной функции{" "}
          <mark className="plugin">3D Camera Tracker</mark>, но вам мешает либо первая
          ошибка, либо вторая. Такое может выскочить по совершенно разным причинам.
        </p>
        <ul>
          <li>
            Если у вас исходник c слабым контрастом - накрутите контрастности через{" "}
            <mark className="plugin">Curves</mark> или{" "}
            <mark className="plugin">Brightness & Contrast</mark>, а затем повторите
            анализ заново.
          </li>
          <li>
            Если у оператора сильно трясутся руки, попробуйте сначала применить{" "}
            <mark className="plugin">Warp Stabilizer</mark>, а только потом уже создавать
            3D-трекинг.
            <AdditionWarning>
              Трекер может и проанализирует точки, но результат его работы может вас не
              удовлетворить из-за качества самого исходника.
            </AdditionWarning>
          </li>
          <li>
            Если вы пытаетесь проанализировать слишком длинное видео, то попробуйте
            обрезать по кусочкам. Вполне вероятно, что на какой-то секунде камера слишком
            резко двигается и происходит ошибка анализа.
          </li>
          <li>
            Иногда избавлению от ошибки может помочь изменение{" "}
            <mark className="ui">Solve Method</mark> или установка галочки{" "}
            <mark className="ui">Detailed Analysis</mark> в вкладке{" "}
            <mark className="ui">Advanced</mark>.
            <ImageFigure
              caption="Effect Controls"
              imgSrc="images/aftereffects/detailed_analysis-3d_camera_tracker.png"
              imgTitle="Включение детального анализа исходника"
              styleClass="figure_windows-dark"
            />
          </li>
          <li>
            Если вы считаете, что с вашим исходником всё в порядке, то попробуйте
            перекодировать его в монтажный кодек и заменить в проекте. Не всегда
            исходники, полученные из интернета, будут хорошо дружить с{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title='Вылезло "System Compatibility Report" при запуске After Effects'>
        <AdditionInfo>
          Когда вы видите это окно при запуске - не надо паниковать. Это не является
          ошибкой или серьёзной проблемой, но исправлять причину её появления нам в любом
          случае нужно. Запустить программу можно как обычно, нажав на{" "}
          <mark className="ui">Continue with known issues</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="System Compatibility Report"
          imgSrc="images/aftereffects/system_compatibility_report.png"
          imgTitle="Предупреждение о несовместимости оборудования с программой"
          styleClass="figure_windows-dark"
        />
        <p>
          В данном окне обычно пишутся возможные проблемы с использованием программы,
          например устаревшие или, наоборот, слишком свежие драйвера, а также плагины с
          каким-то критическим багом.
        </p>
        <p>
          Если вы в курсе о причинах некой несовместимости и вы согласны работать дальше с
          ограничениями, например отсутствие <mark className="ui">Draft 3D</mark> или с{" "}
          <mark className="ui">Display Acceleration Disabled</mark> в углу экрана, лишь бы
          не видеть это окно при запуске - вы можете отключить это окно, программа даёт
          это сделать.
        </p>
        <p>
          Для отключения этого окна перейдите в настройки программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Startup & Repair</mark>. Затем в
          этом разделе отключите галочку с параметра{" "}
          <mark className="ui">Show System Compatibility Issues</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/show_system_compatibility_issues.png"
          imgTitle="Отключаем предупреждения о несовместимости оборудования с программой"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          В старых версиях <mark className="app">Adobe After Effects</mark> этот параметр
          находится в разделе <mark className="ui">General</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="неподдерживаемое устройство, авх2"
        title="Ошибка при запуске приложения 0xc0000142"
      >
        <p>
          Скорее всего вы пытаетесь запустить приложение на устройстве с процессором без
          поддержки инструкций <mark>AVX2</mark>. В{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            нынешних системных требованиях для After Effects
          </a>{" "}
          указано, что требуется процессор от Intel минимум 6 поколения, например, i7-6700
          или свежее, или процессор от AMD серии минимум 1000, например, Ryzen 5 1600 или
          свежее. У процессора, установленный в вашем устройстве, обязательно должна быть
          поддержка инструкций <mark>AVX2</mark>.
        </p>
        <AdditionInfo>
          На сайте Adobe пишется следующее: версии <mark>24.х</mark> и более поздние
          нельзя установить в системах с процессорами Intel® 3-го поколения или более
          ранних версий (а также в системах с более ранними процессорами AMD).
        </AdditionInfo>
        <p>
          Решение достаточно простое: вы можете установить{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>23.6</mark>. Это
          будет последняя поддерживаемая для вас версия программы. Либо обновите процессор
          на вашем устройстве.
        </p>
        <p>
          Бывают редкие случаи, когда процессор действительно поддерживает инструкции
          <mark>AVX2</mark>, но он каким-то образом выключен в вашей системе. Для этого
          вам нужно попробовать ввести команду ниже в командную строку от имени
          администратора и перезагрузить устройство.
        </p>
        <code>bcdedit /set xsavedisable 0</code>
        <AdditionInfo>
          Чтобы снова отключить <mark>AVX2</mark>, введите команду{" "}
          <mark className="code">bcdedit /set xsavedisable 1</mark> и снова перезагрузите
          устройство.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="отсутствует visual c++"
        title="При запуске появляются ошибки про отсутствие MSVCP140.dll, api-ms-win-crt-runtime-l1-1-0.dll или похожие"
      >
        <p>
          Скорее всего вы забыли установить или обновить пакеты{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">
            Microsoft Visual C++ Redistributable
          </a>
          , которые можно установить перед установкой{" "}
          <mark className="app">Adobe After Effects</mark> в репаке от{" "}
          <mark>KpoJluk</mark> или вручную по{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">этой ссылке</a>.
        </p>
        <p>
          Если установка пакетов не помогла - попробуйте обновить вашу систему до
          последней версии, хотя бы до <mark>Windows 10</mark> версии <mark>22H2</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="запуск новых версий программ на старых версиях windows 7 и 8.1"
        title='"Точка входа в процедуру не найдена в библиотеке Kernel32.dll", "Couldn not find entry point main entry point for XXXXX.aex (48::72)" или я не могу запустить программу, хотя пакеты Visual C++ Redistributable установлены'
      >
        <p>
          Скорее всего пытаетесь запустить{" "}
          <mark className="app">Adobe After Effects</mark> на неподдерживаемой
          операционной системе. Такое бывает, когда <mark>Windows 10</mark> слишком старой
          сборки или вы пытаетесь запустить свежую версию программы на{" "}
          <mark>Windows 7</mark> или <mark>Windows 8.1</mark>. В следующий раз прочтите{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            системные требования
          </a>{" "}
          по нужной версии <mark className="app">Adobe After Effects</mark> и постарайтесь
          их соблюдать.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Посмотреть текущую сборку <mark>Windows</mark> можно с помощью{" "}
              <mark className="app">winver</mark>.
            </li>
            <li>
              Последняя поддерживаемая версия{" "}
              <mark className="app">Adobe After Effects</mark> для <mark>Windows 7</mark>{" "}
              или <mark>Windows 8.1</mark> - это <mark>After Effects 2019</mark> (16.X).
            </li>
          </ul>
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title='"Не найден файл D3DCompiler_47.dll" при запуске программы'>
        <p>
          Для решения этой ошибки при запуске программы - распакуйте архив{" "}
          <a
            download
            href="files/D3DCompiler_47.zip"
          >
            D3DCompiler_47.zip
          </a>
          , откройте папку с архитектурой и возьмите оттуда{" "}
          <mark className="file">.dll</mark> файл. Затем этот файл переместите в
          директорию где установлена программа, по умолчанию это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe After Effects 20XX</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="отсутствует рейтрейсед 3д"
        title="Warning: A rendering plug-in was not found. The default rendering plug-in will be substituted. “Ray-Traced 3D”"
      >
        <p>
          Данное предупреждение появляется, когда вы пытаетесь открыть очень старый проект
          с использованием движка <mark className="plugin">Ray-Traced 3D</mark> в новых
          версиях <mark className="app">Adobe After Effects</mark>. Его вырезали в{" "}
          <mark className="app">Adobe After Effects 2020</mark> и новее, а это обозначает,
          что вы не сможете там открыть проект без танцев с бубном.
        </p>
        <p>
          Чтобы корректно открыть проект с использованием устаревшего{" "}
          <mark className="plugin">Ray-Traced 3D</mark> - вам нужно открыть его в любой
          версии 2019 года или старше, в котором этот движок доживал последние дни.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="предупреждение, в данном проекте используются шрифты которые в настоящий момент недоступны на этом компьютере, замена шрифтов будет выполняться до тех пор пока не станут доступны исходные шрифты"
        title='"Warning: This project uses fonts that are not currently available on this computer. Font substitution will occur until the originals become available" при открытии проекта'
      >
        <AdditionInfo>
          <ul>
            <li>Это окно является предупреждением, а не ошибкой.</li>
            <li>
              Вы можете запустить проект без установленных шрифтов и работать с ним
              спокойно.
            </li>
            <li>
              В композициях с отсутствующим шрифтом вы можете установить другой шрифт
              самостоятельно.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          Данное окно при запуске предупреждает о том, что вы запустили проект с
          использованием шрифта, который не установлен в вашей системе. Для этого
          попросите у автора проекта файл с шрифтом и установите его в соответствии с
          вашей операционной системой. Обычно в этом окне прилагается список отсутствующих
          шрифтов.
        </p>
        <AdditionInfo>
          Если автор проекта не может предоставить шрифт, вам нужно будет поискать его
          вручную в сети Интернет.
        </AdditionInfo>
        <ImageFigure
          caption="Предупреждение об отсутствующих шрифтах в системе"
          imgSrc="images/aftereffects/missing_fonts_warning.png"
          imgTitle="Предупреждение об отсутствующих шрифтах в системе"
          styleClass="figure_windows-dark"
        />
        <p>
          Если вы установили шрифт, а это сообщение никуда не пропало - просто
          переназначьте шрифты на те, что вы недавно установили. Бывает такое, что один и
          тот же шрифт распространяется под разными названиями и{" "}
          <mark className="app">Adobe After Effects</mark> не понимает, как ему нужно
          использовать.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="данный проект содержит ссылку на отсутствующий эффект, установите следующий эффект чтобы восстановить эту ссылку"
        title='"This project contains references to missing effects. Please install the following effects to restore these references" при открытии проекта'
      >
        <p>
          Данное предупреждение указывает на то, что у вас не установлены какие-то
          эффекты, которые используются в проекте. Вы можете продолжить работу с проектом,
          только вы не сможете использовать эффекты, указанные в этом списке, и видеть их
          в предпросмотре.
        </p>
        <ImageFigure
          caption="Warning"
          imgSrc="images/aftereffects/missing_effects_warning.png"
          imgTitle="Предупреждение об отсутствующих эффектах"
          styleClass="figure_windows-dark"
        />
        <p>
          Для решения этой проблемы просто установите эффекты и плагины из этого списка в{" "}
          <mark className="app">Adobe After Effects</mark>, а затем перезапустите
          программу, если она была открыта.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              В редких случаях бывает такое, что эффект в зависимости от версии плагина
              или <mark className="app">Adobe After Effects</mark> могут переименоваться,
              поэтому вам нужно их будет заменить вручную.
            </li>
            <li>
              Прежде чем устанавливать сторонние плагины - убедитесь в том, что{" "}
              <mark className="app">Adobe After Effects</mark> стоит на стандартном
              расположении. Иначе плагины установятся в другое место, а в{" "}
              <mark className="app">Adobe After Effects</mark> они не появятся.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          Иногда многие спрашивают, что за эффекты с приставкой <mark>S_</mark> и{" "}
          <mark>BCC</mark> перед названиями. Это эффекты, которые не являются встроенными
          и поставляются компанией <mark>Boris FX</mark> в пакетах{" "}
          <mark className="plugin">Sapphire</mark> и{" "}
          <mark className="plugin">Continuum</mark>. Их нужно установить отдельно на ваше
          устройство. Аналогично касается и остальных &quot;ненаходов&quot; от{" "}
          <mark>Red Giant</mark> и прочих компаний.
        </p>
      </DetailsSummary>
    </div>
  );
};
export default AEErrors;
