import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionWarning} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/ContentFilter";
import HostsAdobeModal from "../../../components/features/HostsAdobe";

const PSErrors: React.FC = () => (
  <div className="faq-content">
    <GithubUpdateInfo filePath="src/pages/sections/psfaq/Errors.tsx" />
    <DetailsSummary title="Рабочий диск заполнен или Scratch Disk Full">
      <p>{/* FIXME: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title='"Для доступа к функциям на базе технологии Firefly в приложениях Adobe у вас должны быть установлены подлинные приложения Adobe", "Проверьте своё подключение к интернету и повторите попытку" или "Could not complete your request because of a program error"'>
      <p>
        Вы пытаетесь использовать функцию генеративной заливки для создания или коррекции
        изображения. На &quot;народных&quot; версиях функции, которые используют Adobe
        Firefly недоступны, так как у вас отсутствует подписка на Creative Cloud.
      </p>
      <p>
        Решения два: либо вы оформляете подписку на Creative Cloud, либо заменяйте Firefly
        на интеграцию <mark className="app">Stable Diffusion</mark> в{" "}
        <mark className="app">Photoshop</mark> через плагин{" "}
        <a href="https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases">
          Auto-Photoshop-StableDiffusion
        </a>
        .
      </p>
      <p>
        Если вы пытаетесь использовать инструмент <mark className="ui">Remove Tool</mark>{" "}
        и у вас выскакивает ошибка{" "}
        <mark>Could not complete your request because of a program error</mark>, то вам
        нужно переключить режим заливки на <mark className="ui">Generative AI Off</mark>.
      </p>
      <ImageFigure
        caption="Photoshop"
        imgSrc="images/photoshop/disable_generative_ai_removetool.png"
        imgTitle="Отключаем генеративную заливку при использовании инструмента Remove Tool"
        styleClass="figure_windows-light"
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
          корректно работают с правилами в <mark className="file">hosts</mark> и системном
          брандмауэре. Соответственно клиентами они игнорируются и пускают доступ к
          интернету программам.
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
          Ваш антивирус съел какие-то файлы для корректной подмены активации, ссылаясь на
          то, что это якобы вирус. Для устранения этого - отключите антивирус или внесите
          папку с программами Adobe в белый лист антивируса, а затем переустановите
          программу.
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
              Для блокировки доступа определённым программам к интернету на устройствах с{" "}
              <mark>macOS</mark> можно воспользоваться программой{" "}
              <a href="https://radiosilenceapp.com/">Radio Silence</a>. После установки и
              активации этой программы перейдите в вкладку{" "}
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
              После проделанных действий <mark className="app">Photoshop</mark> и
              остальные программы от Adobe не должен стучаться в сеть и выдавать ошибку об
              отсутствии лицензии. Ниже показано, как в итоге примерно должна выглядеть у
              вас вкладка <mark className="ui">Firewall</mark> после отлова процессов
              Adobe, лезущие в интернет.
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
              Если вы хотите использовать одновременно <mark className="app">VPN</mark> и{" "}
              <mark className="app">Photoshop</mark>, то изучите настройки вашего
              <mark className="app">VPN-клиента</mark>. Возможно, там есть пункт про
              раздельное туннелирование или список исключений, не позволяющий прогонять
              трафик программы через <mark className="app">VPN</mark>.
            </p>
            <p>
              Если вы не используете <mark className="app">VPN</mark> на устройстве с{" "}
              <mark>Windows</mark>, то попробуйте отредактировать файл{" "}
              <mark className="file">hosts</mark>. Для этого вам нужно перейти в{" "}
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
    <DetailsSummary title='"Приложение Adobe Creative Cloud, необходимое для устранения проблемы отсутствует или повреждено..."?'>
      <p>
        Вы зачем-то установили приложение <mark className="app">Creative Cloud</mark>{" "}
        рядом с пиратскими программами, у которых вырезан модуль{" "}
        <mark className="app">Creative Cloud</mark>. А потом само приложение{" "}
        <mark className="app">Creative Cloud</mark> удалили, оставив за собой
        нежелательные хвосты.
      </p>
      <p>
        Решение довольно простое - снесите приложения и поставьте их заново, чтобы лишние
        зависимости программ от <mark className="app">Creative Cloud</mark> почистились.
        Да, вы не ослышались. Для очистки системы от некоторых или всех программ от Adobe
        можно воспользоваться консольной утилитой{" "}
        <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
          Adobe Creative Cloud Cleaner
        </a>
        .
      </p>
    </DetailsSummary>
  </div>
);

export default PSErrors;
