import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";
import ContentSwitcher from "../../../components/features/ContentFilter";
import HostsAdobeModal from "../../../components/features/HostsAdobe";

const PRErrors: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Errors.tsx" />
      <DetailsSummary title="This effect requires GPU Acceleration при применении эффекта">
        <p>
          Скорее всего у вас отключено ускорение на основе видеокарты в настройках
          проекта. Некоторые эффекты могут напрочь отказывать работать на{" "}
          <mark className="ui">Mercury Playback Engine Software Only</mark> и требовать
          ускорение на видеокарте.
        </p>
        <p>
          Для настройки типа рендеринга перейдите в{" "}
          <mark className="ui">File &gt; Project Settings &gt; General</mark> и в пункте{" "}
          <mark className="ui">Renderer</mark> установите значение{" "}
          <mark className="ui">Mercury Playback Engine GPU Acceleration</mark>. Если у вас
          отсутствует какой-либо пункт для ускорения на видеокарте, то попробуйте обновить
          драйвера на ваш видеочип.
        </p>
        <ImageFigure
          caption="Premiere Pro"
          imgSrc="images/premierepro/set_render_on_gpu.png"
          imgTitle="Установка рендеринга на GPU"
          styleClass="figure_windows-dark"
        />
        <p>
          В редких случаях эффект, требующий GPU-ускорения может конфликтовать с
          остальными эффектами, применённые на клипе и выдавать похожую ошибку. Для этого
          отключите все эффекты, а затем выявляйте виновника торжества с помощью
          постепенного включения тех или иных эффектов.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Media Offline или медиаданные в автономном режиме">
        <p>
          Эта ошибка часто возникает, если вы удалили исходники из диска, перенесли их или
          открыли чужой проект, не распаковав его из архива полностью. Оно может
          появляться в разных воплощениях - в качестве окна о потерянных исходниках при
          запуске проекта или в качестве плейсхолдера с красной заливкой.
        </p>
        <ImageFigure
          caption="Premiere Pro"
          imgSrc="images/premierepro/медиаданные_в_автономном_режиме.png"
          imgTitle="Медиаданные в авнономном режиме"
          styleClass="figure_windows-dark"
        />
        <p>
          Чтобы переподключить &quot;потеряшек&quot;, перейдите в{" "}
          <mark className="ui">File</mark> и выберите пункт{" "}
          <mark className="ui">Link Media</mark>. В открывшемся окне вы увидите список
          потерявшихся исходников. Вы можете выделить нужный и указать ему путь, нажав на{" "}
          <mark className="ui">Locate</mark>.
        </p>
        <AdditionInfo>
          Нажав на кнопку <mark className="ui">Search</mark> в окне для указания пути,
          программа попытается найти все потерянные файлы во вложенных папках текущего
          пути. Если вы не помните где потеряли ваши файлы, откройте корень вашего диска,
          нажмите на кнопку поиска и подождите некоторое время. Также если вы укажете путь
          только одному файлу, рядом с которым лежат такие же &quot;потеряшки&quot;, то и
          остальные исходники вместе с ним подключатся автоматически.
        </AdditionInfo>
        <ImageFigure
          caption="Media Offline"
          imgSrc="images/premierepro/missing_media.png"
          imgTitle="Отсутствующие медиафайлы"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title='Вылезло "System Compatibility Report" при запуске Premiere Pro'>
        <AdditionInfo>
          Когда вы видите это окно при запуске - не надо паниковать. Это не является
          ошибкой или серьёзной проблемой, но исправлять причину её появления нам в любом
          случае нужно. Запустить программу можно как обычно, нажав на{" "}
          <mark className="ui">Continue with known issues</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="System Compatibility Report"
          imgSrc="images/premierepro/system_compatibility_report.png"
          imgTitle="Предупреждение о несовместимости оборудования с программой"
          styleClass="figure_windows-dark"
        />
        <p>
          В данном окне обычно пишутся возможные проблемы с использованием программы,
          например устаревшие драйвера или плагины с каким-то критическим багом.
        </p>
        <p>
          Если вы в курсе о причинах некой несовместимости и вы согласны работать дальше с
          некими ограничениями, лишь бы не видеть это окно при запуске - вы можете
          отключить это окно, программа даёт это сделать.
        </p>
        <p>
          Для отключения этого окна перейдите в настройки программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; General</mark>. Затем в этом
          разделе отключите галочку с пункта{" "}
          <mark className="ui">Show System Compatibility Issues</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/premierepro/show_system_compatibility_issues.png"
          imgTitle="Отключаем предупреждения о несовместимости оборудования с программой"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title="Ошибка при запуске приложения 0xc0000142">
        <p>
          Вы пытаетесь запустить приложение на устройстве с процессором без поддержки
          инструкций AVX2. В{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            нынешних системных требованиях для After Effects
          </a>{" "}
          указано, что требуется процессор от Intel минимум 6 поколения, например, i7-6700
          или свежее, или процессор от AMD серии минимум 1000, например, Ryzen 5 1600 или
          свежее. У процессора, установленный в вашем устройстве, обязательно должна быть
          поддержка инструкций AVX2.
        </p>
        <AdditionInfo>
          На сайте Adobe пишется следующее: версии 24.х и более поздние нельзя установить
          в системах с процессорами Intel® 3-го поколения или более ранних версий (а
          также в системах с более ранними процессорами AMD).
        </AdditionInfo>
        <p>
          Решение достаточно простое: вы можете установить{" "}
          <mark className="app">Premiere Pro</mark> версии 23.6. Это будет последняя
          поддерживаемая для вас версия программы. Либо обновите процессор на вашем
          устройстве.
        </p>
        <p>
          Бывают редкие случаи, когда процессор действительно поддерживает инструкции
          AVX2, но он каким-то образом выключен в вашей системе. Для этого вам нужно
          попробовать ввести команду ниже в командную строку от имени администратора и
          перезагрузить устройство.
        </p>
        <code>bcdedit /set xsavedisable 0</code>
        <AdditionInfo>
          Чтобы снова отключить AVX2, введите команду{" "}
          <mark className="code">bcdedit /set xsavedisable 1</mark> и снова перезагрузите
          устройство.
        </AdditionInfo>
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
            обходами, да вот забыли что не все VPN-клиенты корректно работают с правилами
            в <mark className="file">hosts</mark> и системном брандмауэре. Соответственно
            клиентами они игнорируются и пускают доступ к интернету программам.
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
                с macOS можно воспользоваться программой{" "}
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
                После проделанных действий <mark className="app">Premiere Pro</mark> и
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
                Если вы хотите использовать одновременно VPN и{" "}
                <mark className="app">Premiere Pro</mark>, то изучите настройки вашего
                VPN-клиента. Возможно, там есть пункт про раздельное туннелирование или
                список исключений, не позволяющий прогонять трафик программы через VPN.
              </p>
              <p>
                Если вы не используете VPN на устройстве с Windows, то попробуйте
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
      <DetailsSummary
        tag="premiere pro не удалось найти совместимые видеомодули воспроизведения, обновите видеодрайверы и запустите приложение повторно"
        title='"Premiere Pro could not find any capable video play modules. Please update your video display drivers and start again" при запуске программы'
      >
        <p>
          Данная ошибка может появиться после установки{" "}
          <mark className="app">Premiere Pro</mark> версии <mark>25.2</mark> в вариации
          репака от <mark>Kp0JluK</mark> и почему-то на устройствах с видеокартой от{" "}
          <mark>NVIDIA</mark>. Если вы уверены в том, что у вас уже обновлены драйвера на
          видеокарту, то попробуйте установить этот же релиз повторно, то есть произвести
          двойную установку. То есть установите <mark className="app">Premiere Pro</mark>{" "}
          первый раз, а затем просто откройте установщик и снова произведите установку уже
          поверх установленного приложения.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Вылетает Premiere Pro и Media Encoder после установки плагинов Boris FX Sapphire">
        <p>
          Это довольно популярный баг, который мешает нормальному запуску{" "}
          <mark className="app">Premiere Pro</mark> и{" "}
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
    </div>
  );
};

export default PRErrors;
