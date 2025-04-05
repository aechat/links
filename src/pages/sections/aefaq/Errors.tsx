import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import ContentSwitcher from "../../../components/features/ContentFilter";
import HostsAdobeModal from "../../../components/features/HostsAdobe";
import {Divider} from "antd";

const AEErrors: React.FC = () => {
  return (
    <div className="faq-content">
      <AdditionDanger>
        Пожалуйста, не ленитесь и внимательно прочтите ошибку, которую выдаёт программа. В
        большинстве случаев в описании ошибки уже содержится причина и возможное решение
        проблемы. Если возникают трудности с чтением ошибки или предупреждения на
        английском интерфейсе программы -{" "}
        <a href="https://translate.yandex.ru/">воспользуйтесь переводчиком</a>.
      </AdditionDanger>
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Errors.tsx" />
      <DetailsSummary title='Ошибка 23::40, окно "Out of Memory", "After Effects has unexpectedly run out of memory and cannot complete this export" или "Low memory warning. RAM use has been extended for previews"'>
        <p>
          Поздравляю, вы встретились с первым боссом в{" "}
          <mark className="app">After Effects</mark>. Эти ошибки и предупреждения
          возникают из-за того, что у вас банально не хватает оперативной памяти для
          реализации ваших проектов. Часто это происходит из-за того что вы используете
          слишком нагруженные эффекты, не монтажный кодек у видео-исходников или
          неправильно настроили программу и операционную систему.
        </p>
        <AdditionWarning>
          При появлении данных ошибок убедитесь в том, вы соблюдаете пункты ниже. Если
          хотя бы один пункт нарушен - постарайтесь исправить это в своём проекте.
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
              вкладку <mark className="ui">Color</mark>. В пункте{" "}
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
            <a href="https://remontka.pro/fail-podkachki-windows/">
              Настройте файл подкачки
            </a>
            , если у вас устройство на <mark>Windows</mark>. Советую установить значение
            от <mark className="copy">4096</mark> до <mark className="copy">65536</mark>{" "}
            или <mark className="copy">131072</mark>. В таком случае система будет
            создавать файл подкачки с изначальным размером в <mark>4 Гб</mark>, который
            динамически может расширяться до <mark>64 Гб</mark> или <mark>128 Гб</mark>, в
            большинстве случаев этого хватит.
            <AdditionWarning>
              Нередко можно встретить мнение в интернете, что файл подкачки лучше
              отключать, мол он вредит вашему жёсткому диску. Отчасти это верно, но мы
              крайне{" "}
              <b>
                <u>не рекомендуем</u>
              </b>{" "}
              вам следовать этому вредному совету, так как вы можете заработать себе
              проблем на задницу. Не забывайте, что <mark>Windows</mark> при отключенном
              файле подкачки не сможет выгрузить в жёсткий диск неиспользуемую оперативную
              память, поэтому при выключенном файле подкачки вы будете часто видеть ошибки{" "}
              <mark className="ui">Out of Memory</mark> и даже можете столкнуться с
              ошибкой <mark className="ui">В системе недостаточно памяти</mark>, которую
              выдаёт сама операционная система. Также при отключенном файле подкачки вы
              можете столкнуться с вылетом программ в фоне и даже с чёрным экраном,
              который решается только перезагрузкой системы.
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
            прочитали описание настройки и оставили программам Adobe 1 Гб ОЗУ, а
            оставшуюся часть памяти - на другие программы. Для того чтобы выделить всю
            возможную память для программ Adobe, установите значение <mark>0</mark> в
            пункте <mark className="ui">RAM reserved for other applications</mark>. После
            нажатия на <mark className="key">Enter</mark> программа сама установит нужное
            значение.
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
            Ну и самое главное: если у вас мало оперативной памяти на вашем устройстве -
            докупите ещё и установите в материнскую плату, если возможно. В нынешних
            реалиях для комфортной работы в <mark className="app">After Effects</mark>{" "}
            требуется минимум <mark>32 Гб</mark> оперативной памяти.
          </li>
        </ul>
        <AdditionInfo>
          В <mark className="app">After Effects</mark> версии <mark>25.2</mark> и новее
          добавили функцию проигрывания предпросмотра напрямую из жёсткого диска, минуя
          оперативную память. Это может быть полезно, если у вас малое количество
          оперативной памяти. Если у вас не отключен дисковый кэш, то эта опция уже
          включена по умолчанию, а включить или выключить его можно в{" "}
          <mark className="ui">
            Edit &gt; Preferences &gt; Media & Disk Cache &gt; Enable Preview from Disk
            Cache
          </mark>
          . При использовании данной опции желательно использовать быстрый твердотельный
          накопитель.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="After Effects has encountered a failure related to GPU-enabled effects from this frame. This is likely because your GPU is out of memory.">
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
          Подробнее о каждом пункте на примере использования устройства на связке
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
              аналогично предыдущему пункту, но на встроенном видеочипе процессора.
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
      <DetailsSummary title="Cached preview needs 2 or more frames for playback">
        <p>
          Данная ошибка может выскочить по двум причинам: из-за переполненного кэша и
          оперативной памяти или из-за банальной невнимательности пользователя программы.
        </p>
        <p>
          В первом случае пользователю надо почистить кэш{" "}
          <mark className="app">After Effects</mark>. Для этого ему нужно зайти в{" "}
          <mark className="ui">Edit &gt; Purge &gt; All Memory & Disk Cache</mark> и
          нажать на <mark className="ui">OK</mark>. После этого попробуйте закэшировать
          предпросмотр снова.
        </p>
        <ImageFigure
          caption="Очистка кэша и освобождение оперативной памяти"
          imgSrc="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          imgTitle="Очистка кэша и освобождение оперативной памяти"
          styleClass="figure_windows-light"
        />
        <AdditionInfo>
          Иногда может быть такое, что применяемый эффект может заставить держать ваш
          компьютер в страхе, поэтому он и не может нормально обработать кадры для
          предпросмотра. Если у вас есть возможность - найдите эффект, который мешает
          нормальному рендеру и замените его на похожий.
        </AdditionInfo>
        <p>
          Если очистка кэша не помогла, то проверьте длину вашей рабочей области. Может вы
          упустили тот факт, что вы случайным образом сократили его до одного кадра,
          поэтому и отображается эта ошибка.
        </p>
        <ImageFigure
          caption="Одна из причин ошибки - маленькая рабочая область"
          imgSrc="images/aftereffects/low_work-area.png"
          imgTitle="Маленькая рабочая область"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы это исправить - перейдите в начало вашей композиции (
          <mark className="key">Home</mark>) и нажмите на <mark className="key">B</mark>,
          а затем перейдите в конец вашей композиции (<mark className="key">End</mark>) и
          нажмите на <mark className="key">N</mark>. Таким образом вы расширите вашу
          рабочую область от начала до конца вашей композиции и эта ошибка должна
          исчезнуть.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Unable to allocate enough memory to render the current frame (XXXX x XXXX @ X bpc). Either decrease the memory requirements for the rendering frame, or install more RAM">
        <p>
          Вы создали каким-то образом (с помощью{" "}
          <mark className="plugin">Motion Tile</mark>,{" "}
          <mark className="plugin">CC Repetile</mark> или другим способом) настолько
          большое изображение, что ваш компьютер не переваривает. Или установили высокую
          битность ( <mark>16 бит</mark> или <mark>32 бит</mark>) в настройках проекта. Ну
          или вы просто применили эффект, который потребляет слишком много оперативной
          памяти.
        </p>
        <p>
          В описании ошибки буквально есть решение проблемы - нужно уменьшить требования к
          генерируемому кадру проекта. Это означает что вам нужно убрать ресурсоёмкие
          эффекты, понизить битность цвета в <mark className="ui">Project Manager</mark> и
          банально освободить оперативную память, например через{" "}
          <mark className="ui">Edit &gt; Purge</mark> или{" "}
          <mark className="app">Mem Reduct</mark>.
        </p>
        <p>
          Иногда может помочь{" "}
          <a href="https://remontka.pro/fail-podkachki-windows/">
            настройка файла подкачки
          </a>{" "}
          в вашей системе, если у вас устройство на <mark>Windows</mark>. Советую
          установить значение от <mark className="copy">4096</mark> до{" "}
          <mark className="copy">65536</mark> (будет создаваться файл подкачки с
          изначальным размером в <mark>4 Гб</mark>, который динамически может расширяться
          до <mark>64 Гб</mark>), в большинстве случаев этого хватает.
        </p>
        <AdditionInfo>
          Если у вас мало оперативной памяти и советы выше не помогают - вряд ли что-то
          можно сделать, не переделывая весь проект. В таком случае советую докупить
          больше оперативной памяти. В нынешних реалиях для комфортной работы в{" "}
          <mark className="app">After Effects</mark> требуется минимум 32 Гб ОЗУ.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Effect cannot allocate a buffer larger than 30000 pixels in either dimension">
        <p>
          Данная ошибка появляется, когда вы создали каким-то образом слишком большое
          изображение, например через <mark className="plugin">Motion Tile</mark> или{" "}
          <mark className="plugin">CC Repetile</mark>. Текст ошибки указывает на то, что
          размер слоя на выходе не может превышать больше чем 30000 пикселей на одну ось.
        </p>
        <AdditionInfo>
          30000 пикселей у слоя на каждую ось - это максимальное значение для{" "}
          <mark className="app">After Effects</mark>. Данное ограничение нельзя обойти.
        </AdditionInfo>
        <p>
          Для решения этой проблемы уменьшите разрешение вашего слоя любыми удобными для
          вас способами или настройте эффекты так, чтобы они не генерировали слишком
          большое разрешение у слоя.
        </p>
      </DetailsSummary>
      <DetailsSummary title="This effect may slow down Preview and Export as it is optimized Multi-Frame Render">
        <p>
          Данное предупреждение указывает вас на то, что вы используете старую версию
          плагина, которую ещё не адаптировали под новую функцию{" "}
          <mark>Multi-Frame Render</mark>. В таком случае рекомендуется обновить
          используемый плагин, если разработчик всё ещё обновляет свой плагин или просто
          проигнорируйте данное предупреждение.
        </p>
        <p>
          Если эта ошибка вас раздражает или у вас нет возможности/желания обновлять
          используемый плагин - вы можете отключить предупреждение, отключив функцию
          многокадрового рендера в настройках <mark className="app">After Effects</mark>.
          Для этого вам нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark> и
          убрать галочку с <mark className="ui">Enable Multi-frame Render</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/checkbox_multiframe-render.png"
          imgTitle="Переключение работы функции Multi-Frame Render"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="слетела лицензия, красное окно, не запускается, впн, файл хостс, блокировка доступа в интернет"
        title='"This unlicensed Adobe app is not genuine and will be disabled soon", "Unlicensed Adobe apps may expose your device to increased security risks", "This app will disable in X days" или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?'
      >
        <p>Программа от Adobe решила достучаться в интернет. Причин может быть четыре.</p>
        <ul>
          <li>
            Вы забыли отключить <mark className="app">VPN</mark>. С наплывом блокировок
            различных ресурсов на территории СНГ пользователи стали часто пользоваться
            обходами, да вот забыли что не все <mark className="app">VPN-клиенты</mark>
            корректно работают с правилами в <mark className="file">hosts</mark> и
            системном брандмауэре. Соответственно клиентами они игнорируются и пускают
            доступ к интернету программам.
          </li>
          <li>
            Если вы не пользуетесь <mark className="app">VPN</mark>, то возможно, что во
            время установки программ от Adobe что-то не прописалось в файл{" "}
            <mark className="file">hosts</mark> или кто-то удалил оттуда строки.
          </li>
          <li>
            Возможно в вашей системе затесалась служба{" "}
            <mark className="app">Adobe Genuine Software</mark>, которая осталась от
            установки версии из <mark className="app">Creative Cloud</mark>. Попробуйте
            отключить службу{" "}
            <mark className="app">Adobe Genuine Software Monitor Service</mark> через
            программу <mark className="app">services.msc</mark>.
          </li>
          <li>
            Ваш антивирус съел какие-то файлы для корректной подмены активации, ссылаясь
            на то, что это якобы вирус. Для устранения этого - отключите антивирус или
            внесите папку с программами Adobe в белый лист антивируса, а затем
            переустановите программу.
          </li>
        </ul>
        <ImageFigure
          caption="Adobe"
          imgSrc="images/adobe_the_unlicensed_app.png"
          imgTitle="Сообщение об отсутствии лицензии"
          styleClass="figure_windows-light"
        />
        <ContentSwitcher
          macContent={
            <div>
              <p>
                Для блокировки доступа определённым программам к интернету на устройствах
                с <mark>macOS</mark> можно воспользоваться программой{" "}
                <a href="https://radiosilenceapp.com/">Radio Silence</a>. После установки
                и активации этой программы перейдите в вкладку{" "}
                <mark className="ui">Network Monitor</mark>. В этой же вкладке запретите
                программам от Adobe, которые лезут в сеть, доступ в интернет, нажав на
                кнопку <mark className="ui">Block</mark>.
              </p>
              <ImageFigure
                caption="Radio Silence"
                imgSrc="images/network_radio_silence.png"
                imgTitle="Блокируем доступ в интернет программам на примере Premiere Pro"
                styleClass="figure_macos-dark"
              />
              <p>
                После проделанных действий <mark className="app">After Effects</mark> и
                остальные программы от Adobe не должен стучаться в сеть и выдавать ошибку
                об отсутствии лицензии. Ниже показано, как в итоге примерно должна
                выглядеть у вас вкладка <mark className="ui">Firewall</mark> после отлова
                процессов Adobe, лезущие в интернет.
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
              <p>
                Если вы хотите использовать одновременно <mark className="app">VPN</mark>{" "}
                и <mark className="app">After Effects</mark>, то изучите настройки вашего
                <mark className="app">VPN-клиента</mark>. Возможно, там есть пункт про
                раздельное туннелирование или список исключений, не позволяющий прогонять
                трафик программы через <mark className="app">VPN</mark>.
              </p>
              <p>
                Если вы не используете <mark className="app">VPN</mark> на устройстве с
                установленной операционной системе <mark>Windows</mark>, то попробуйте
                отредактировать файл <mark className="file">hosts</mark>. Для этого вам
                нужно перейти в{" "}
                <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопировать
                файл <mark className="path">hosts</mark> в любое удобное место, открыть
                любой текстовый редактор, например <mark className="app">Notepad++</mark>{" "}
                или <mark className="app">VS Code</mark>, и внести строки из кнопки для
                открытия модального окна чуть ниже в конец файла. Затем сохраните
                отредактированный файл и перенесите его обратно в{" "}
                <mark className="path">C:\Windows\System32\drivers\etc\hosts</mark> с
                заменой. Также попробуйте скрипт{" "}
                <a href="https://github.com/ph33nx/WinMasterBlocker">WinMasterBlocker</a>{" "}
                для автоматического внесения правил блокировки доступа в интернет в
                брандмауэр.
              </p>
              <HostsAdobeModal />
              <AdditionWarning>
                Для изменения системных файлов требуются права администратора.
              </AdditionWarning>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title='"Не удалось выполнить преобразование символов Unicode" или "Не удалось загрузить псевдоэффекты" при запуске After Effects'>
        <p>
          Если вы попытаетесь запустить <mark className="app">After Effects</mark> с
          русской локализацией, то вы можете столкнуться с данной проблемой. Она
          встречается на старых версиях и на версии <mark>24.4</mark>, которую позже
          исправили. Для решения данной проблемы нужно переустановить{" "}
          <mark className="app">After Effects</mark> на английский язык. Если вы не хотите
          менять язык, то вам нужно обновиться до более свежей версии программы или
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
      <DetailsSummary title="Красный или синий экран при использовании Twixtor">
        <p>
          Синяя заливка по всему размеру слоя показывает, что вы каким-то образом ушли за
          пределы вашего видео и плагин не понимает, что ему отобразить. Для решения
          синего экрана - уменьшите скорость клипа или расширьте диапазон отображения
          исходника.
        </p>
        <p>
          Красная заливка показывает, что вы установили{" "}
          <mark className="plugin">Twixtor</mark> по очередности не первым по списку
          применённых эффектов. Для решения - просто поставьте эффект первым по списку или
          примените <mark className="plugin">Twixtor</mark> на корректирующий слой.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Красный экран при использовании Boris FX Sapphire">
        <p>
          Это редкий и неприятный баг пиратской{" "}
          <mark className="plugin">Boris FX Sapphire</mark> версий 2024.5X в виде репаков
          от <mark>KpoJluk</mark>. Вместе с этим багом у вас пропадают все переключатели и
          настройки у применённых эффектов.
        </p>
        <p>
          Для решения этой проблемы установите более поздние релизы от{" "}
          <mark>Team V.R.</mark> или откатитесь на ранние версии репаков от{" "}
          <mark>KpoJluk</mark>.
        </p>
        <AdditionInfo>
          Скачать популярные репаки плагинов и программ можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title='"File is damaged", "Unable to import file (НАЗВАНИЕ_ФАЙЛА.XYZ) as project (bad format or not readable)" или "Error with file"'>
        <p>
          Если вы открыли проект, прекрасно работавший вчера, но вдруг сегодня он перестал
          открываться, то поздравляю. Возможно, вы экстренно завершили процесс с
          программой или компьютер упал в BSOD. В таком случае восстановить проект будет
          крайне проблематично.
        </p>
        <ul>
          <li>
            Попробуйте найти авто-сохранения проекта и открыть их, а затем продолжить
            работу с них. Обычно файлы авто-сохранений находятся рядом с файлом проекта.
          </li>
          <li>
            Если файла авто-сохранения нет, или там находятся очень старые файлы, то снова
            примите мои соболезнования. В следующий раз позаботьтесь о своих нервах и
            создавайте резервные копии проекта или настройте облачное хранилище с
            поддержкой отката файлов, например{" "}
            <a href="https://360.yandex.ru/">Яндекс.Диск</a>.
          </li>
        </ul>
        <AdditionInfo>
          Интересный факт: при нажатии на <mark className="key">Ctrl + S</mark>, таймер
          автоматического авто-сохранения сбрасывается. Также файлы авто-сохранений не
          создаются, если у вас изначально не был сохранён проект. Поэтому рекомендуем
          выработать привычку сохранять файл проекта сразу же после открытия{" "}
          <mark className="app">After Effects</mark> и установить минимальное время для
          авто-сохранений в настройках программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Auto-Save</mark> и укажите
          значение <mark className="ui">Save every</mark> от 1 до 3 минут.
        </AdditionInfo>
        <p>
          В редких случаях файл может оказаться не битым, но не может спокойно открыться,
          если свободного места на дисковом разделе крайне мало. Так как операционная
          система <mark>Windows</mark> не всегда предупреждает о малом объёме свободной
          дисковой памяти на разделах, вы могли упустить такую мелочь и можете столкнуться
          с невозможностью открытия проекта в <mark className="app">After Effects</mark>.
          Для решения этой проблемы вам достаточно почистить систему от накопившегося
          мусора, хотя бы удалив файлы из папки <mark className="path">%Temp%</mark> и
          повторить попытку открытия проекта снова.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"This project must be converted from version XX.X.X (Windows/macOS). The original file will be unchanged" при открытии проекта'>
        <AdditionInfo>Данное окно является предупреждением, а не ошибкой.</AdditionInfo>
        <p>
          Вы открыли проект, созданный в более ранней версии{" "}
          <mark className="app">After Effects</mark> в более свежей версии программы. В
          таком случае программа сама переконвертирует исходный файл проекта для работы с
          более новой версией <mark className="app">After Effects</mark>. Исходный файл
          проекта не будет затронут и каким-либо образом изменён. Такое часто бывает при
          обновлении с версии на версию и в этом нет ничего страшного.
        </p>
        <AdditionWarning>
          После конвертации файла проекта программой - не забудьте сохранить проект с
          помощью комбинации клавиш <mark className="key">Ctrl + S</mark>.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title='"The file you are attempting to open was created with After Effects version XX.X.X (Windows/macOS) and cannot be opened with this version" при открытии проекта'>
        <p>
          Вы пытаетесь открыть проект, созданный в более поздней версии{" "}
          <mark className="app">After Effects</mark>, чем та, что у вас установлена. У вас
          нет другого выхода, кроме как просить пользователей более новой версии{" "}
          <mark className="app">After Effects</mark> сохранить проект под более старую
          версию программы или всё же обновить <mark className="app">After Effects</mark>{" "}
          до последней версии.
        </p>
        <AdditionWarning>
          Учтите, что свежие версии программы уже не позволяют сохранить проекты для
          версии <mark>18.X</mark> или <mark>22.X</mark>, для этого нужно городить цепочку
          из установленных нескольких версий на вашем компьютере и перегонять по цепочке.
        </AdditionWarning>
        <p>
          Чтобы конвертировать файл проекта для старой версии{" "}
          <mark className="app">After Effects</mark> вам нужно перейти в{" "}
          <mark className="ui">File</mark>, в контекстном меню выбрать{" "}
          <mark className="ui">Save As</mark> и выбрать минимально возможную версию для
          конвертации.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/file_save_as.png"
          imgTitle="Сохранение проекта под более старую версию"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Your disk cache folder is on a drive that does not have enough avaiable space to safely store the full amount specified in your preferences. Please make more space available or go to Media & Disk Cache preferences to change the folder or maximium disk cache size">
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
          <mark className="app">After Effects</mark>. Для этого перейдите в{" "}
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
      <DetailsSummary title="After Effects error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory. Please check your settings in Media and Disk Cache Preferences">
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
      <DetailsSummary title="Error: overflow converting ratio denominators (17::19) или (17::18)">
        <p>
          Данная ошибка может выскочить по совершенно разным причинам и чаще всего на
          старых версиях <mark className="app">After Effects</mark>. Причин и решений
          может быть множество, но универсального решения, к сожалению, нет.
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
            <mark className="app">After Effects</mark> не очень любит нестандартные
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
      <DetailsSummary title='"Cinema 4D must be installed in order to use the Cinema 4D renderer" или "Cineware Server Suite failed to acquire renderer port and path. Server commands not available" или "Cinema 4D: Render Failed"'>
        <p>
          Если у вас установлен <mark className="app">After Effects</mark> от{" "}
          <mark>KpoJluK</mark>, то эта ошибка вознает из-за того, что в его дистрибутивах
          c версий <mark>2020</mark> и выше не поставляется плагин{" "}
          <mark className="plugin">Cineware</mark> и{" "}
          <mark className="plugin">Cinema 4D</mark>. Это было сделано для уменьшения веса
          программы, но таким образом отваливается возможность импорта проектов формата{" "}
          <mark className="file">.c4d</mark> и включения соответствующего движка
          3D-рендера. Чтобы решить эту проблему - достаточно установить полноценную{" "}
          <mark className="app">Maxon Cinema 4D</mark> нужной версии на ваше устройство,
          которую просит ваша версия <mark className="app">After Effects</mark>. Обычно в
          такой ошибке указывается, какую версию <mark className="app">Cinema 4D</mark>{" "}
          нужно установить.
        </p>
        <AdditionWarning>
          <ul>
            <li>
              Если в этой ошибке <mark className="app">After Effects</mark> пишет, что
              нужно установить, например <mark className="app">Cinema 4D</mark> версии{" "}
              <mark>2023</mark> - то нужно ставить именно любую версию{" "}
              <mark>2023.X.X</mark>! Версии <mark>2024.X.X</mark>. или <mark>25.X.X</mark>{" "}
              в таком случае не подойдут.
            </li>
            <li>
              <mark className="app">Cinema 4D</mark> версий <mark>26.X.X</mark> не
              подойдут для версий <mark className="app">After Effects</mark> ниже{" "}
              <mark>23.1</mark>, так как Adobe не включала в поддержку эту версию.
            </li>
            <li>
              Если вы установили <mark className="app">Cinema 4D</mark> для вашей версии{" "}
              <mark className="app">After Effects</mark>, но программы всё ещё не видят
              друг друга, то убедитесь в том, что обе программы установлены на стандартном
              расположении установки и в разделе <mark className="path">C:\</mark>, а не
              на другом.
            </li>
          </ul>
        </AdditionWarning>
        <Divider>
          Список соответствия версий Maxon Cinema 4D с версиями After Effects для
          корректной работы
        </Divider>
        <ul>
          <li>
            <mark className="app">After Effects 25.1 и новее</mark> требует{" "}
            <mark className="app">Cinema 4D 2025.X.X</mark>.
          </li>
          <li>
            <mark className="app">After Effects 24.1 - 25.0</mark> требует{" "}
            <mark className="app">Cinema 4D 2024.X.X</mark>.
          </li>
          <li>
            <mark className="app">After Effects 23.1 - 23.6</mark> требует{" "}
            <mark className="app">Cinema 4D 2023.X.X</mark>.
          </li>
          <li>
            <mark className="app">After Effects 22.x - 23.0</mark> требует{" "}
            <mark className="app">Cinema 4D 25.X.X</mark>.
          </li>
          <li>
            <mark className="app">After Effects 17.x (2020)</mark> и{" "}
            <mark className="app">After Effects 18.x (2021)</mark> требует{" "}
            <mark className="app">Cinema 4D R21.X.X.</mark>. Путь до установленных
            программ вы можете настроить в настройках 3D-рендера.
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
        <AdditionInfo>
          Если у вас установлен <mark className="app">After Effects</mark> из{" "}
          <mark className="app">Creative Cloud</mark>, то вам достаточно установить{" "}
          <mark className="plugin">Cinema 4D</mark> оттуда:{" "}
          <mark className="ui">
            Установленные приложения &gt; After Effects &gt; Подключаемые модули &gt;
            Cinema 4D &gt; Установить
          </mark>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title='"Frame rate mismatch, or footage with fields found. For best Roto Brush & Refine Edge results, set the composition to XX fps to match the layer source" при использовании Rotobrush'>
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
      <DetailsSummary title="Content Aware Fill Error: Initialization Failed">
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
          <mark className="ui">None</mark> или любое другое в пункте{" "}
          <mark className="ui">Working Color Space</mark>.
        </p>
        <ImageFigure
          caption="Project Settings"
          imgSrc="images/aftereffects/change_working_color_space.png"
          imgTitle="Изменение цветового профиля"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title='"Layer must match Composition and use default transform values" при использовании 3D Camera Tracker'>
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
            <mark className="app">After Effects</mark>.
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
          например устаревшие драйвера или плагины с каким-то критическим багом.
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
          этом разделе отключите галочку с пункта{" "}
          <mark className="ui">Show System Compatibility Issues</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/aftereffects/show_system_compatibility_issues.png"
          imgTitle="Отключаем предупреждения о несовместимости оборудования с программой"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          В старых версиях <mark className="app">After Effects</mark> этот пункт находится
          в разделе <mark className="ui">General</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="расширенный 3d, вылетает, адвансед 3д"
        title='"Advanced 3D is not supported by the current software", "Advanced 3D plug-in generated an unexpected exception" или программа вылетает при попытке использовать новый движок 3D-рендера'
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
          <mark className="app">After Effects</mark> от имени администратора. Чтобы каждый
          раз не прожимать кнопку{" "}
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
          <mark className="app">After Effects</mark> при попытке использовать{" "}
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
      <DetailsSummary title="Ошибка при запуске приложения 0xc0000142">
        <p>
          Вы пытаетесь запустить приложение на устройстве с процессором без поддержки
          инструкций <mark>AVX2</mark>. В{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            нынешних системных требованиях для After Effects
          </a>{" "}
          указано, что требуется процессор от Intel минимум 6 поколения, например, i7-6700
          или свежее, или процессор от AMD серии минимум 1000, например, Ryzen 5 1600 или
          свежее. У процессора, установленный в вашем устройстве, обязательно должна быть
          поддержка инструкций <mark>AVX2</mark>.
        </p>
        <AdditionInfo>
          На сайте Adobe пишется следующее: версии 24.х и более поздние нельзя установить
          в системах с процессорами Intel® 3-го поколения или более ранних версий (а
          также в системах с более ранними процессорами AMD).
        </AdditionInfo>
        <p>
          Решение достаточно простое: вы можете установить{" "}
          <mark className="app">After Effects</mark> версии 23.6. Это будет последняя
          поддерживаемая для вас версия программы. Либо обновите процессор на вашем
          устройстве.
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
      <DetailsSummary title="Ошибка про отсутствие MSVCP140.dll, api-ms-win-crt-runtime-l1-1-0.dll или аналогичные">
        <p>
          Вы забыли установить{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">
            Microsoft Visual C++ Redistributable
          </a>
          , который можно установить перед установкой After Effects в репаке от{" "}
          <mark>KpoJluk</mark> или вручную из{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">этой ссылки</a>. Или
          обновите вашу систему до последней версии, хотя бы до <mark>Windows 10</mark>{" "}
          версии <mark>22H2</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Точка входа в процедуру не найдена в библиотеке Kernel32.dll", "Couldn not find entry point main entry point for XXXXX.aex (48::72)" или я не могу запустить программу, хотя пакеты Visual C++ Redistributable установлены'>
        <p>
          Скорее всего пытаетесь запустить <mark className="app">After Effects</mark> на
          неподдерживаемой операционной системе. Такое бывает, когда{" "}
          <mark>Windows 10</mark> слишком старой сборки или вы пытаетесь запустить свежую
          версию программы на <mark>Windows 7</mark> или <mark>Windows 8.1</mark>. В
          следующий раз прочтите{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            системные требования
          </a>{" "}
          по нужной версии <mark className="app">After Effects</mark> и постарайтесь их
          соблюдать.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              Посмотреть текущую сборку <mark>Windows</mark> можно с помощью{" "}
              <mark className="app">winver</mark>.
            </li>
            <li>
              Последняя поддерживаемая версия <mark className="app">After Effects</mark>{" "}
              для <mark>Windows 7</mark> или <mark>Windows 8.1</mark> - это{" "}
              <mark>After Effects 2019</mark> (16.X).
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
      <DetailsSummary title="After Effects warning: A rendering plug-in was not found. The default rendering plug-in will be substituted. “Ray-Traced 3D”">
        <p>
          Данное предупреждение появляется, когда вы пытаетесь открыть очень старый проект
          с использованием движка <mark className="plugin">Ray-Traced 3D</mark> в новых
          версиях <mark className="app">After Effects</mark>. Его вырезали в{" "}
          <mark className="app">After Effects 2020</mark> и новее, а это обозначает, что
          вы не сможете там открыть проект без танцев с бубном.
        </p>
        <p>
          Чтобы корректно открыть проект с использованием устаревшего{" "}
          <mark className="plugin">Ray-Traced 3D</mark> - вам нужно открыть его в любой
          версии 2019 года или старше, в котором этот движок доживал последние дни.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Warning: This project uses fonts that are not currently available on this computer. Font substitution will occur until the originals become available" при открытии проекта'>
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
          <mark className="app">After Effects</mark> не понимает, как ему нужно
          использовать.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"This project contains references to missing effects. Please install the following effects to restore these references" при открытии проекта'>
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
          <mark className="app">After Effects</mark>, а затем перезапустите программу,
          если она была открыта.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              В редких случаях бывает такое, что эффект в зависимости от версии плагина
              или <mark className="app">After Effects</mark> могут переименоваться,
              поэтому вам нужно их будет заменить вручную.
            </li>
            <li>
              Прежде чем устанавливать сторонние плагины - убедитесь в том, что{" "}
              <mark className="app">After Effects</mark> стоит на стандартном
              расположении. Иначе плагины установятся в другое место, а в{" "}
              <mark className="app">After Effects</mark> они не появятся.
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
      <DetailsSummary title='"After Effects warning: The following plugins have failed to load. Please reinstall these plugins" при запуске программы или "After Effects Error: This effect cannot be applied because it cannot be initialized. Try reinstalling or contacting the plug-in developer (25::3)" при применении эффекта'>
        <p>
          Данные предупреждения и ошибки могут появиться по разным причинам: битые пакеты
          файлов, несвежая система или отсутствие текущей поддержки плагинов программой.
        </p>
        <ul>
          <li>
            Если вы недавно установили плагины и не можете их применить в своем проекте:
            убедитесь в том, что установщик плагинов или сами{" "}
            <mark className="file">.aex</mark> файлы были загружены полностью и не
            возникали проблемы при скачивании.
          </li>
          <li>
            Некоторые плагины могут не загрузиться из-за недостающих пакетов{" "}
            <mark className="app">Microsoft C++ Visual Redistributable</mark>. Для решения
            проблемы попробуйте обновить все пакеты или установить недостающие с помощью{" "}
            <a href="https://github.com/abbodi1406/vcredist/releases/">
              репака от abbodi1406
            </a>
            , перезагрузите компьютер и попробуйте запустить проект с плагинами, которые
            до этого не могли загрузиться.
          </li>
          <li>
            В редких случаях в <mark>Windows</mark> могут сломаться какие-либо системные
            файлы. Для быстрого лечения системы вы можете выполнить команды{" "}
            <mark className="code">sfc /scannow</mark> и{" "}
            <mark className="code">dism /Online /Cleanup-Image /RestoreHealth</mark>, а
            также <mark className="code">chkdsk /f /r</mark> для проверки вашего диска в
            командной строке.
            <AdditionInfo>
              Если ваша система не может восстановиться после выполнения этих команд, то
              вы можете скачать <mark className="file">.iso</mark> образ системы и
              обновиться до неё поверх существующей. Текущий билд вашей системы можно
              узнать с помощью <mark className="app">winver</mark>.
            </AdditionInfo>
          </li>
          <li>
            Также сторонние плагины могут не загрузиться из-за того, что они не подходят
            под вашу текущую версию <mark className="app">After Effects</mark>. Плагины
            либо слишком свежие, либо слишком старые по отношению к вашей версии{" "}
            <mark className="app">After Effects</mark>.
          </li>
          <li>
            Если стандартные плагины не работают и не применяются, а обновление пакетов{" "}
            <mark className="app">Microsoft C++ Visual Redistributable</mark> не помогает,
            то пришла пора переустанавливать <mark className="app">After Effects</mark> с
            нуля. Перед переустановкой - не забудьте почистить систему от хвостов
            установленной программы с помощью{" "}
            <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
              Adobe Creative Cloud Cleaner
            </a>
            .
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="After Effects warning: there are duplicated effect plug-ins installed on your drive. To avoid problems, quit After Effects and move or delete the older or unneeded version">
        <p>
          Данное предупреждение показывает, что вы установили одинаковые плагины, но в
          разных местах. <mark className="app">After Effects</mark> рекомендует удалить
          дублирующиеся плагины, чтобы избежать каких-либо проблем и указывает путь к ним.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/duplicated_effect_plug-ins_installed.png"
          imgTitle="Предупреждение о дублирующихся плагинах"
          styleClass="figure_windows-dark"
        />
        <p>
          Для решения проблемы достаточно перейти по одному из путей и удалить оттуда
          файл, предварительно закрыв <mark className="app">After Effects</mark>. После
          удаления плагина вы больше не будете сталкиваться с данным предупреждением при
          открытии программы.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Приложение Adobe Creative Cloud, необходимое для устранения проблемы отсутствует или повреждено..." при запуске программы'>
        <p>
          Вы зачем-то установили приложение <mark className="app">Creative Cloud</mark>{" "}
          рядом с пиратскими программами, у которых вырезан модуль{" "}
          <mark className="app">Creative Cloud</mark>. А потом само приложение{" "}
          <mark className="app">Creative Cloud</mark> удалили, оставив за собой
          нежелательные хвосты.
        </p>
        <p>
          Решение довольно простое - снесите приложения и поставьте их заново, чтобы
          лишние зависимости программ от <mark className="app">Creative Cloud</mark>{" "}
          почистились. Да, вы не ослышались. Для очистки системы от некоторых или всех
          программ от Adobe можно воспользоваться консольной утилитой{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>
          .
        </p>
      </DetailsSummary>
      <DetailsSummary title="Вылетает Adobe Media Encoder после установки плагинов Boris FX Sapphire">
        <p>
          Это довольно популярный баг, который мешает нормальному запуску{" "}
          <mark className="app">Media Encoder</mark> при наличии установленных в системе
          плагинов <mark className="plugin">Boris FX Sapphire</mark>. В более поздних
          версиях плагинов и программ это исправили, но если вы с таким столкнулись - вам
          достаточно просто указать{" "}
          <mark className="ui">режим совместимости с Windows 8</mark> в свойствах ярлыка
          программы.
        </p>
        <p>
          Для этого открываем свойства ярлыка, переходим в вкладку{" "}
          <mark className="ui">Совместимость</mark> и нажимаем галочку рядом с пунктом{" "}
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
        tag="cti stuck, плейхед зависает, не работает зум"
        title="Почему метка воспроизведения на таймлайне иногда останавливается?"
      >
        <p>
          Предположим, что вы начали кэширование предпросмотра и в какой-то момент у вас
          полоса текущего времени предпросмотра внезапно останавливается. Дополнительно
          при этом может зависнуть сам предпросмотр, то есть не реагировать на увеличение
          или на перемещение плейхеда. Данный баг относительно новый и может появиться на
          любой версии программы, даже на чистой и лицензионной.
        </p>
        <p>
          Баг <u>может</u> возникнуть из-за одновременно открытых{" "}
          <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Premiere Pro</mark>, а также при использовании{" "}
          <mark className="plugin">Dynamic Link</mark>. Также баг может возникнуть на
          совершенно чистой установке <mark className="app">After Effects</mark> без
          сторонних плагинов и скриптов.
        </p>
        <AdditionWarning>
          Приведённые ниже способы{" "}
          <u>
            <b>не являются панацеей</b>
          </u>{" "}
          для решения этой проблемы и позволяют лишь исключить часть проблем при
          воспроизведении и кэшировании предпросмотра.
        </AdditionWarning>
        <p>
          Для возможного решения проблемы попробуйте установить значение{" "}
          <mark>false</mark> рядом с пунктом{" "}
          <mark className="ui">PreviewPlaybackOptimization</mark> в консоли. Чтобы это
          сделать - откройте консоль с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + F12</mark>, установите вид отображения{" "}
          <mark className="ui">Debug Database View</mark> и уберите чекбокс напротив{" "}
          <mark className="ui">PreviewPlaybackOptimization</mark>. После этого
          перезагрузите программу и попробуйте закэшировать и проиграть предпросмотр
          заново.
        </p>
        <ImageFigure
          caption="After Effects"
          imgSrc="images/aftereffects/disable_previewplaybackoptimization.png"
          imgTitle="Отключение оптимизации предпросмотра"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
    </div>
  );
};
export default AEErrors;
