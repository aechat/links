import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";
import HostsAdobeModal from "../../../components/content/HostsAdobe";

const PsErrors: React.FC = () => (
  <div className="article-content">
    <DetailsSummary
      anchor="unlicensed-app"
      tag="bitte lies und akzeptiere die nutzungsbedingungen von adobe, door niet-gelicentieerde adobe-apps kan je apparaat worden blootgesteld aan extra beveilligingsrisico's, bu lisanssiz adobe uygulamasi orijinal olmadigindan yakinda devre disi birakilacak, deze app is gedeactiveerd, deze app wordt over dagen gedeactiveerd, deze niet-gelicentieerde adobe-app is degeactiveerd, dieses nicht lizenzierte adobe-programm wurde deaktiviert, dieses produkt wurde deaktiviert, cette application a ete desactivee, cette application adobe asns license a ete desactivee, profitez de sur les applications adobe authentiques, verhoog je productiviteit met legitieme adobe-apps, start your free trial of app, take advantage of discounts up to 40% off on genuine adobe replacement apps, this app has been disabled, this app will disable in days, this unlicensed adobe app is not genuine and will be disabled soon, unlicensed adobe apps may expose your device to increased security risks, vpn, white and red window, white screen, we can't verify your subscription status, we can't reach the adobe servers, this may be because you're not connected to the internet, error code 12014, sorry this app is not available, to continue using this app check your internet connection firewall or ad blocker settings, блокировка доступа в интернет, впн, виртуальная частная сеть, файл хостс, не запускается, не удается проверить статус вашей подписки, не удается подключиться к серверам adobe, возможно у вас отстутствует подключение к интернету, код ошибки 12015, начните использовать бесплатную пробную версию, окно с красной полоской при запуске, пустое окно, слетела лицензия, белое и красное окно, белый экран, the unlicensed adobe app, adobe genuine, hosts, ошибка лицензии, красное окно"
      title="Как избавиться от «The unlicensed Adobe app has been disabled»?"
    >
      <p>
        Пользователи «народных» версий программ <mark className="company">Adobe</mark>{" "}
        иногда сталкиваются с ошибкой проверки лицензии. Она проявляется в виде небольшого
        окна на белом фоне с красной полосой сверху, а в редких случаях сопровождается
        полностью пустым белым окном или внезапным завершением работы программы. В этой
        статье мы разберём несколько способов, как от него избавиться. Стоит учитывать,
        что эффективность каждого метода может различаться у разных пользователей.
      </p>
      <ArticleMedia
        caption="Adobe"
        src="legacy/adobe_the_unlicensed_app.png"
        type="image"
      />
      <Divider>Проверяем наличие VPN-соединения</Divider>
      <p>
        Для начала проверьте, не используете ли вы виртуальную частную сеть. С ростом
        популярности подключений через <mark className="app">VPN</mark> пользователи всё
        чаще сталкиваются с ошибкой лицензии, так как{" "}
        <mark className="app">Adobe Photoshop</mark> после подключения к такой сети может
        получить доступ в интернет. В результате окно с сообщением о проблеме может
        внезапно появиться на языке той страны, к которой вы подключены.
      </p>
      <p>
        Проблема в том, что многие VPN-клиенты заставляют систему игнорировать правила
        брандмауэра и изменения в файле <mark className="file">HOSTS</mark>, из-за чего
        программы, которым ранее был заблокирован доступ в интернет, снова получают его.
        Если вы подключены к частной сети, разорвите соединение и запустите{" "}
        <mark className="app">Adobe Photoshop</mark> снова, тогда окно должно исчезнуть.
      </p>
      <p>
        Если окно с ошибкой лицензии всё равно появляется, попробуйте полностью отключить
        интернет. Если при отключённом интернете сообщение не появляется, стоит проверить
        настройки сетевых соединений на устройстве.
      </p>
      <ContentFilter
        macContent={
          <>
            <Divider>Правим файл hosts</Divider>
            <p>
              Один из способов решения проблемы — отредактировать файл{" "}
              <mark className="file">HOSTS</mark>. Для этого перейдите в директорию{" "}
              <mark className="path">/private/etc</mark>, скопируйте файл{" "}
              <mark className="file">HOSTS</mark> в любое удобное место, откройте его в
              текстовом редакторе, например <mark className="app">TextEdit</mark> или{" "}
              <mark className="app">nano</mark>, и добавьте в конец файла строки из блока
              ниже. Затем сохраните файл и верните его в исходную папку с заменой.
            </p>
            <HostsAdobeModal />
            <ContentFigure
              caption="Как отредактировать файл Hosts на Mac"
              src="VcDYAbH6U_c"
              type="youtube"
            />
            <Divider>Блокируем доступ с помощью Radio Silence</Divider>
            <p>
              Если внесение адресов в <mark className="file">HOSTS</mark> вам не помогло,
              то попробуйте воспользоваться программой{" "}
              <a href="https://radiosilenceapp.com/">Radio Silence</a> для блокировки
              доступа в интернет нужным приложениям. После установки и активации этой
              программы перейдите во вкладку{" "}
              <mark className="select">«Network Monitor»</mark> и в ней запретите
              программам от <mark className="company">Adobe</mark>, которые лезут в сеть,
              доступ в интернет, нажав на кнопку <mark className="select">«Block»</mark>{" "}
              рядом с названием программы.
            </p>
            <ArticleMedia
              caption="Radio Silence"
              src="legacy/network_radio_silence.png"
              type="image"
            />
            <p>
              После проделанных действий, указанные вами программы от{" "}
              <mark className="company">Adobe</mark> не должны стучаться в сеть и выдавать
              ошибку об отсутствии лицензии. Ниже показано, как в итоге примерно должна
              выглядеть вкладка <mark className="select">«Firewall»</mark> после отлова
              процессов Adobe, лезущие в интернет.
            </p>
            <ArticleMedia
              caption="Radio Silence"
              src="legacy/firewall_radio_silence.png"
              type="image"
            />
          </>
        }
        windowsContent={
          <>
            <Divider>Проверяем настройки вашего VPN-клиента</Divider>
            <p>
              Если вы не хотите отключаться от виртуальной частной сети, проверьте
              настройки вашего VPN-клиента: возможно, в нём есть функция раздельного
              туннелирования или возможность внести программы{" "}
              <mark className="company">Adobe</mark> в список исключений, чтобы трафик для
              них учитывал правила брандмауэра или блокировался.
            </p>
            <Divider>Проверяем настройки прокси в системе</Divider>
            <p>
              Некоторые VPN-клиенты могут изменять системные настройки прокси-сервера,
              устанавливая собственный адрес, что мешает корректной работе правил
              брандмауэра. Чтобы проверить настройки прокси, откройте{" "}
              <mark className="app">Параметры</mark> комбинацией клавиш{" "}
              <mark className="key">Win + I</mark>, перейдите в{" "}
              <mark className="select">«Сеть и Интернет» → «Прокси-сервер»</mark> и
              проверьте параметр{" "}
              <mark className="select">«Использовать прокси-сервер»</mark>.
            </p>
            <ContentFigure
              caption="Параметры"
              imgTitle="Проверяем прокси"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/check_windows_proxy.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <p>
              Если прокси включён, нажмите <mark className="select">«Изменить»</mark> и
              отключите его.
            </p>
            <ContentFigure
              caption="Параметры"
              imgTitle="Отключаем прокси"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/disable_windows_proxy.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <Divider>Правим файл hosts</Divider>
            <p>
              Если вы не используете VPN-клиенты, стоит перейти к другим способам решения
              проблемы — блокировке доступа программ в интернет. Первый из них —
              редактирование файла <mark className="file">HOSTS</mark>. Для этого
              перейдите в папку{" "}
              <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопируйте
              файл <mark className="file">HOSTS</mark> в удобное место, откройте его в
              текстовом редакторе, например <mark className="app">Notepad++</mark>, и
              добавьте в конец файла строки из блока ниже. Затем сохраните файл и верните
              его в исходную папку с заменой.
            </p>
            <HostsAdobeModal />
            <ArticleMedia
              caption="Как редактировать файл hosts"
              src="wHhay41ocsc"
              type="youtube"
            />
            <Divider>Создаём новые правила в брандмауэре Защитника Windows</Divider>
            <Addition type="warning">
              Прежде чем создавать правила в брандмауэре, убедитесь, что он включён. При
              выключенном брандмауэре правила блокировки не будут применяться.{" "}
              <a href="https://www.youtube.com/watch?v=goqsVsTMeRU">Как его включить?</a>
            </Addition>
            <Addition type="info">
              Если вы устанавливали репаки от <mark className="user">KpoJluK</mark> или{" "}
              <mark className="user">m0nkrus</mark>, то правила для блокировки доступа
              программ в интернет уже могут быть созданы в брандмауэре.
            </Addition>
            <p>
              После открытия монитора брандмауэра перейдите в раздел правил для входящих
              подключений в левой части окна.
            </p>
            <ArticleMedia
              caption="Монитор брандмауэра Защитника Windows в режиме повышенной безопасности"
              src="legacy/firewall_main_page.png"
              type="image"
            />
            <p>
              Затем в правой части интерфейса найдите кнопку{" "}
              <mark className="select">«Создать правило»</mark> и нажмите на него.
            </p>
            <ArticleMedia
              caption="Монитор брандмауэра Защитника Windows в режиме повышенной безопасности"
              src="legacy/firewall_creating_rule.png"
              type="image"
            />
            <p>
              После нажатия на кнопку создания нового правила в брандмауэре у вас
              откроется новое окно с пятью вкладками. В первой вкладке оставьте значение{" "}
              <mark className="select">«Для программы»</mark> и нажмите на{" "}
              <mark className="select">«Далее»</mark>.
            </p>
            <ArticleMedia
              caption="Мастер создания правила для нового входящего подключения"
              src="legacy/firewall_rule_type.png"
              type="image"
            />
            <p>
              Во второй вкладке нужно указать путь до исполняемого файла программы вручную
              или через кнопку <mark className="select">«Обзор»</mark>, а затем снова
              нажать на <mark className="select">«Далее»</mark>. Путь должен выглядеть как{" "}
              <mark className="path">
                C:\Program Files\Adobe\Adobe Photoshop 20XX\Support Files\Photoshop.exe
              </mark>
              .
            </p>
            <ArticleMedia
              caption="Мастер создания правила для нового входящего подключения"
              src="legacy/firewall_select_app.png"
              type="image"
            />
            <p>
              Для действия нового правила нам, очевидно, нужно установить параметр{" "}
              <mark className="select">«Блокировать подключение»</mark>.
            </p>
            <ArticleMedia
              caption="Мастер создания правила для нового входящего подключения"
              src="legacy/firewall_blocking.png"
              type="image"
            />
            <p>
              Во вкладке <mark className="select">«Профили»</mark> нужно оставить три
              чекбокса включенными и опять нажать на{" "}
              <mark className="select">«Далее»</mark>.
            </p>
            <ArticleMedia
              caption="Мастер создания правила для нового входящего подключения"
              src="legacy/firewall_select_profile.png"
              type="image"
            />
            <p>
              Далее назовите своё новое правило любым именем. Можно просто написать
              название программы и нажать на <mark className="select">«Готово»</mark>.
              После этого правило будет создано, а указанная программа теперь не должна
              стучаться в интернет.
            </p>
            <ArticleMedia
              caption="Мастер создания правила для нового входящего подключения"
              src="legacy/firewall_naming.png"
              type="image"
            />
            <Addition type="info">
              Возможно подобные действия нужно провернуть и к{" "}
              <mark>правилам для исходящего подключения</mark> по аналогичной схеме.
            </Addition>
            <Divider>
              Используем OneClickFirewall для быстрой блокировки интернета программе
            </Divider>
            <p>
              Если вы не хотите возиться с созданием правил вручную, воспользуйтесь
              утилитой <mark className="app">OneClickFirewall</mark>. Она добавляет в
              контекстное меню ярлыков две команды:{" "}
              <mark className="select">«Block Internet Access»</mark> для блокировки
              доступа в интернет и{" "}
              <mark className="select">«Restore Internet Access»</mark> для его
              восстановления. Загрузить утилиту можно на{" "}
              <a href="https://winaero.com/download-oneclickfirewall/">
                официальном сайте WinAero
              </a>
              .
            </p>
            <ArticleMedia
              caption="Рабочий стол"
              src="legacy/oneclickfirewall_photoshop.png"
              type="image"
            />
            <Divider>Проверяем, не «навредил» ли антивирус</Divider>
            <p>
              В редких случаях антивирус может удалять файлы, отвечающие за активацию,
              считая их вредоносными. Если вы не хотите отключать или удалять{" "}
              <mark className="app">Защитник Windows</mark>, добавьте папки с программами{" "}
              <mark className="company">Adobe</mark> в список исключений антивируса, а
              затем переустановите программу вашей версии «поверх» существующей.
            </p>
            <ContentFigure
              caption="Windows Defender: как восстановить файлы и добавить их в исключения"
              src="ET94_dv3f8c"
              type="youtube"
            />
            <Divider>Проверяем установленные службы</Divider>
            <p>
              Если вы переходили с лицензионных версий на «народные», то, скорее всего, не
              полностью очистили систему от предыдущих установок. Из-за этого среди
              неудалённых служб могла остаться{" "}
              <mark className="app">Adobe Genuine Software Integrity Service</mark>,
              которая проверяет легальность использования программ и может вызывать окно
              об отсутствии лицензии. Для решения проблемы достаточно{" "}
              <a href="https://youtu.be/HDVvWyBKizo&t=75">отключить</a> эту службу или
              полностью очистить систему от продуктов{" "}
              <mark className="company">Adobe</mark> с помощью{" "}
              <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                Adobe Creative Cloud Cleaner Tool
              </a>
              .
            </p>
            <Divider>Проверяем, не натворил ли чего антивирус</Divider>
            <p>
              В редких случаях ваш антивирус мог удалить файлы для корректной подмены
              активации, ссылаясь на то, что на вашем устройстве затесался якобы вирус.
              Если вы не хотите отключать или удалять{" "}
              <mark className="app">Windows Defender</mark> с вашего устройства, то вы
              можете добавить нужные папки c программами от{" "}
              <mark className="company">Adobe</mark> в список исключений вашего
              антивируса, а затем установите программу вашей версии поверх
              существующей.{" "}
            </p>
            <ArticleMedia
              caption="Windows Defender - как восстановить файлы и запретить их удаление"
              src="ET94_dv3f8c"
              type="youtube"
            />
          </>
        }
      />
    </DetailsSummary>
    <DetailsSummary
      anchor="fix-stratch-disk-full"
      tag="не удается использовать инструмент, первичный рабочий диск переполнен, scratch disk low, could not initialize photoshop because the scratch disks are full, could not complete your request because the scratch disks are full"
      title="Из-за чего может появляться «Scratch Disk Full»?"
    >
      <p>
        Обычно эта ошибка возникает из-за нехватки места на накопителе. Чтобы её
        устранить, необходимо очистить систему от «цифрового мусора». Поскольку
        <mark className="app">Adobe Photoshop</mark> создает объемные временные файлы, для
        его стабильной работы требуется минимум <mark>20 ГБ</mark> свободного
        пространства, а в идеале — от <mark>100 ГБ</mark> на диске, выбранном в качестве
        рабочего.
      </p>
      <Addition type="info">
        <ul>
          <li>
            <p>
              При необходимости в разделе
              <mark className="select">«Edit» → «Preferences» → «Scratch Disks»</mark>
              можно назначить другой диск<sup>1</sup> для хранения временных данных. По
              умолчанию используется тот же раздел, где установлена программа. Полностью
              отключить функцию рабочего диска невозможно
              <strong>в принципе</strong>.
            </p>
            <ul>
              <li>
                <sup>1</sup> Для быстрой работы кэша крайне рекомендуем использовать SSD.
                Выбор медленного HDD может привести к заметным «тормозам».
              </li>
            </ul>
          </li>
          <li>
            Чтобы сменить рабочий диск до запуска Photoshop, удерживайте клавишу
            <mark className="key">Alt</mark> при открытии приложения.
          </li>
        </ul>
      </Addition>
      <p>
        Самый простой способ избавиться от «хлама» — использовать стандартную утилиту{" "}
        <mark className="code">cleanmgr.exe</mark>, которую можно запустить из окна{" "}
        <mark className="app">«Выполнить»</mark>. Она проанализирует систему и позволит
        выборочно удалить накопившиеся обновления, старые точки восстановления и прочий
        мусор.
      </p>
      <p>
        Для более тщательной очистки подойдут сторонние инструменты, такие как{" "}
        <mark className="app">Auslogics BoostSpeed</mark>,{" "}
        <mark className="app">Reg Organizer</mark> или{" "}
        <mark className="app">CCleaner</mark>, но будьте с ними осторожны: они
        предназначены для опытных пользователей и при неосторожном использовании могут
        удалить важные файлы. Чтобы вручную найти, что именно занимает больше всего места
        на диске, воспользуйтесь анализаторами, такими как{" "}
        <mark className="app">WizTree</mark> или <mark className="app">WinDirStat</mark>.
        Они просканируют все директории и помогут найти и удалить ненужное.
      </p>
      {/* FIXME: написать!! */}
    </DetailsSummary>
    <DetailsSummary title="«Для доступа к функциям на базе технологии Firefly в приложениях Adobe у вас должны быть установлены подлинные приложения Adobe», «Проверьте своё подключение к интернету и повторите попытку» или «Could not complete your request because of a program error»">
      <p>
        Вы пытаетесь использовать функцию генеративной заливки для создания или коррекции
        изображения. На «народных» версиях функции, которые используют{" "}
        <mark className="plugin">Adobe Firefly</mark>, недоступны, так как у вас
        отсутствует подписка на Creative Cloud.
      </p>
      <p>
        Решения два: либо вы оформляете подписку на Creative Cloud, либо заменяете Firefly
        на интеграцию <mark className="app">Stable Diffusion</mark> в{" "}
        <mark className="app">Adobe Photoshop</mark> через плагин{" "}
        <a href="https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases">
          Auto-Photoshop-StableDiffusion
        </a>
        .
      </p>
      <p>
        Если вы пытаетесь использовать инструмент{" "}
        <mark className="select">«Remove Tool»</mark> и у вас выскакивает ошибка{" "}
        <mark className="select">
          «Could not complete your request because of a program error»
        </mark>
        , то вам нужно переключить режим заливки на{" "}
        <mark className="select">«Generative AI Off»</mark>.
      </p>
      <ContentFigure
        caption="Adobe Photoshop"
        imgTitle="Отключаем генеративную заливку при использовании инструмента Remove Tool"
        // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
        src="images/legacy/photoshop/disable_generative_ai_removetool.png"
        theme="light"
        type="image"
        variant="windows"
      />
    </DetailsSummary>
    <DetailsSummary title="Ошибка при запуске приложения «0xc0000142»">
      <p>
        Скорее всего вы пытаетесь запустить приложение на устройстве с процессором без
        поддержки инструкций <mark>AVX2</mark>. В{" "}
        <a href="https://helpx.adobe.com/photoshop/system-requirements.html">
          нынешних системных требованиях для Photoshop
        </a>{" "}
        указано, что требуется любой процессор, в котором обязательно должна быть
        поддержка инструкций <mark>AVX2</mark> и <mark>SSE 4.2</mark>.
      </p>
      <Addition type="info">
        На сайте Adobe пишется следующее: версии <mark>2024</mark> и более поздние нельзя
        установить в системах с процессорами Intel® 3-го поколения или более ранних версий
        (а также в системах с более ранними процессорами AMD).
      </Addition>
      <p>
        Решение достаточно простое: вы можете установить{" "}
        <mark className="app">Adobe Photoshop</mark> версии <mark>25.12</mark>. Это будет
        последняя поддерживаемая для вас версия программы. Либо обновите процессор на
        вашем устройстве.
      </p>
      <p>
        Бывают редкие случаи, когда процессор действительно поддерживает инструкции
        <mark>AVX2</mark>, но он каким-то образом выключен в вашей системе. Для этого вам
        нужно попробовать ввести команду ниже в командную строку от имени администратора и
        перезагрузить устройство.
      </p>
      <code>bcdedit /set xsavedisable 0</code>
      <Addition type="info">
        Чтобы снова отключить <mark>AVX2</mark>, введите команду{" "}
        <mark className="code">bcdedit /set xsavedisable 1</mark> и снова перезагрузите
        устройство.
      </Addition>
    </DetailsSummary>
    <DetailsSummary title="«Приложение Adobe Creative Cloud, необходимое для устранения проблемы отсутствует или повреждено...»">
      <p>
        Вы зачем-то установили приложение{" "}
        <mark className="app">Adobe Creative Cloud</mark> рядом с пиратскими программами,
        у которых вырезан модуль <mark className="app">Adobe Creative Cloud</mark>. А
        потом само приложение <mark className="app">Adobe Creative Cloud</mark> удалили,
        оставив за собой нежелательные хвосты.
      </p>
      <p>
        Решение довольно простое - снесите приложения и поставьте их заново, чтобы лишние
        зависимости программ от <mark className="app">Adobe Creative Cloud</mark>{" "}
        почистились. Да, вы не ослышались. Для очистки системы от некоторых или всех
        программ от <mark className="company">Adobe</mark> можно воспользоваться
        консольной утилитой{" "}
        <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
          Adobe Creative Cloud Cleaner
        </a>
        .
      </p>
    </DetailsSummary>
    <DetailsSummary title="Ошибка про отсутствие «MSVCP140.dll», «api-ms-win-crt-runtime-l1-1-0.dll» или аналогичные">
      <p>
        Скорее всего вы забыли установить или обновить пакеты{" "}
        <a href="https://gitlab.com/stdout12/vcredist/-/releases/">
          Microsoft Visual C++ Redistributable
        </a>
        , которые можно установить перед установкой{" "}
        <mark className="app">Adobe Photoshop</mark> в репаке от{" "}
        <mark className="user">KpoJluK</mark> или вручную по{" "}
        <a href="https://gitlab.com/stdout12/vcredist/-/releases/">этой ссылке</a>.
      </p>
      <p>
        Если установка пакетов не помогла - попробуйте обновить вашу систему до последней
        версии, хотя бы до <mark>Windows 10</mark> версии <mark>22H2</mark>.
      </p>
    </DetailsSummary>
  </div>
);

export default PsErrors;
