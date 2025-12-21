import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/content/Addition";

import {ContentFigure} from "../../../components/content/ContentFigure";

import DetailsSummary from "../../../components/content/DetailsSummary";

import ContentFilter from "../../../components/content/ContentFilter";

import HostsAdobeModal from "../../../components/content/HostsAdobe";

const PRErrors: React.FC = () => {
  return (
    <div className="faq-content">
      <Addition type="danger">
        <ul>
          <li>
            Пожалуйста, не ленитесь и внимательно читайте текст ошибки, которую вам выдаёт
            программа. В большинстве случаев в её описании уже содержится причина и
            возможное решение проблемы.
          </li>
          <li>
            Если у вас возникают трудности с чтением текста на английском языке —{" "}
            <a href="https://translate.yandex.ru/">воспользуйтесь переводчиком</a>.
          </li>
          <li>
            Если в этом разделе нет вашей ошибки — попробуйте найти решение в интернете,
            например на профильных форумах.
          </li>
        </ul>
      </Addition>
      <DetailsSummary
        anchor="unlicensed-app"
        tag="bitte lies und akzeptiere die nutzungsbedingungen von adobe, door niet-gelicentieerde adobe-apps kan je apparaat worden blootgesteld aan extra beveilligingsrisico's, bu lisanssiz adobe uygulamasi orijinal olmadigindan yakinda devre disi birakilacak, deze app is gedeactiveerd, deze app wordt over dagen gedeactiveerd, deze niet-gelicentieerde adobe-app is degeactiveerd, dieses nicht lizenzierte adobe-programm wurde deaktiviert, dieses produkt wurde deaktiviert, cette application a ete desactivee, cette application adobe asns license a ete desactivee, profitez de sur les applications adobe authentiques, verhoog je productiviteit met legitieme adobe-apps, start your free trial of app, take advantage of discounts up to 40% off on genuine adobe replacement apps, this app has been disabled, this app will disable in days, this unlicensed adobe app is not genuine and will be disabled soon, unlicensed adobe apps may expose your device to increased security risks, vpn, white and red window, white screen, блокировка доступа в интернет, впн, виртуальная частная сеть, файл хостс, не запускается, начните использовать бесплатную пробную версию, окно с красной полоской при запуске, пустое окно, слетела лицензия, белое и красное окно, белый экран, the unlicensed adobe app, adobe genuine, hosts, ошибка лицензии, красное окно"
        title="Как избавиться от «The unlicensed Adobe app has been disabled»?"
      >
      <p>
          Пользователи «народных» версий программ <mark className="company">Adobe</mark>{" "}
          иногда могут столкнуться с ошибкой проверки лицензии. Она проявляется как
          небольшое окно на белом фоне с красной полосой сверху, а в редких случаях
          сопровождается полностью пустым белым окном. В этой статье разберём несколько
          способов, как избавиться от такого окна. При этом стоит учитывать, что
          эффективность каждого метода может различаться для разных пользователей.
        </p>
        <ContentFigure
          caption="Adobe"
          imgTitle="Сообщение об отсутствии лицензии"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/adobe_the_unlicensed_app.png"
          theme="light"
          type="image"
          variant="windows"
        />
         <Divider>Проверяем наличие VPN-соединения</Divider>
        <p>
          Для начала проверьте, не используете ли вы виртуальную частную сеть. С ростом
          популярности подключений через <mark className="app">VPN</mark>, пользователи
          всё чаще сталкиваются с ошибкой отсутствия лицензии, так как{" "}
          <mark className="app">Adobe Premiere Pro</mark> после подключения к частной
          сети может получить доступ в интернет. В результате окно с сообщением о проблеме
          с лицензией может появиться внезапно и отображаться на языке той страны, к
          которой вы подключены.
        </p>
        <p>
          Проблема в том, что многие клиенты для подключения к виртуальной частной сети
          заставляют систему игнорировать правила брандмауэра и изменения в{" "}
          <mark className="file">HOSTS</mark>, из-за чего программы, которым ранее был
          заблокирован доступ к интернету, начинают снова получать доступ к нему. Если вы
          подключены к частной сети — разорвите соединение и запустите{" "}
          <mark className="app">Adobe Premiere Pro</mark> снова, окно должно перестать
          появляться.
        </p>
        <p>
          Если окно с отсутствием лицензии всё равно появляется — попробуйте полностью
          отключить интернет. Если при полном отключении интернета сообщение больше не
          появляется, стоит проверить настройки соединений на устройстве.
        </p>
        <ContentFilter
          macContent={
            <div>
              <Divider>Правим файл hosts</Divider>
              <p>
                Один из способов «лечения» этого окна — редактирование файла{" "}
                <mark className="file">HOSTS</mark>. Для этого перейдите в директорию{" "}
                <mark className="path">/private/etc</mark>, скопируйте файл{" "}
                <mark className="file">HOSTS</mark> в любое удобное место, откройте его в
                текстовом редакторе, например, <mark className="app">TextEdit</mark> или{" "}
                <mark className="app">nano</mark>, и добавьте в конец файла строки из
                блока ниже. Затем сохраните файл и перенесите его обратно с заменой.
              </p>
              <HostsAdobeModal />
              <ContentFigure
                caption="Как отредактировать файл Hosts на Mac"
                src="VcDYAbH6U_c"
                type="youtube"
              />
              <Divider>Блокируем доступ с помощью Radio Silence</Divider>
              <p>
                Если редактирование <mark className="file">HOSTS</mark> не помогло,
                попробуйте воспользоваться программой{" "}
                <a href="https://radiosilenceapp.com/">Radio Silence</a>.
              </p>
              <ul>
                <li>
                  После её установки перейдите во вкладку{" "}
                  <mark className="select">«Network Monitor»</mark> и запретите доступ в
                  интернет всем процессам <mark className="company">Adobe</mark>, нажимая
                  кнопку <mark className="select">«Block»</mark> рядом с их названиями.
                  <ContentFigure
                    caption="Radio Silence"
                    imgTitle="Блокировка доступа в интернет на примере Adobe Premiere Pro"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/network_radio_silence.png"
                    theme="dark"
                    type="image"
                    variant="mac"
                  />
                </li>
                <li>
                  После этого заблокированные приложения появятся во вкладке{" "}
                  <mark className="select">«Firewall»</mark> и больше не должны
                  подключаться к сети.
                  <ContentFigure
                    caption="Radio Silence"
                    imgTitle="Список заблокированных приложений во вкладке Firewall"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_radio_silence.png"
                    theme="dark"
                    type="image"
                    variant="mac"
                  />
                </li>
              </ul>
              <Divider>Используем альтернативный способ активации</Divider>
              <p>
                Если вы используете релизы от <mark className="user">MONTER GROUP</mark> —
                попробуйте перейти на метод активации программ с помощью{" "}
                <mark className="app">Adobe Activation Tool</mark>, предварительно удалив
                предыдущие установки программы.
              </p>
            </div>
          }
          windowsContent={
            <div>
              <Divider>Проверяем настройки вашего VPN-клиента</Divider>
              <p>
                Если вы не хотите отключать себя от виртуальной частной сети, проверьте
                настройки вашего клиента: возможно, в нём есть возможность включить
                раздельное туннелирование или внести программы от{" "}
                <mark className="company">Adobe</mark> в список исключений, чтобы
                соединение для них проходило с учётом ваших настроек брандмауэра или вовсе
                блокировалось.
              </p>
              <Divider>Проверяем настройки прокси в системе</Divider>
              <p>
                Некоторые клиенты для подключения к виртуальной частной сети изменяют
                настройку адреса прокси-сервера на собственный, что может мешать
                корректной работе правил в брандмауэре. Чтобы проверить состояние прокси —
                откройте <mark className="app">Параметры</mark> с помощью комбинации
                клавиш <mark className="key">Win + I</mark>, перейдите в{" "}
                <mark className="select">«Сеть и Интернет» → «Прокси-сервер»</mark> и
                проверьте настройку{" "}
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
                Если прокси включен — нажмите на{" "}
                <mark className="select">«Изменить»</mark> и отключите настройку адреса
                собственного сервера.
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
                Если вы не используете клиенты для подключения к виртуальным частным
                сетям, стоит перейти к другим способам «лечения» — блокировке доступа
                программе в интернет. Первый из них — редактирование файла{" "}
                <mark className="file">HOSTS</mark>. Для этого перейдите в папку{" "}
                <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопируйте
                файл <mark className="file">HOSTS</mark> в удобное место, откройте его в
                текстовом редакторе, например, <mark className="app">Notepad++</mark>, и
                добавьте в конец файла строки из блока ниже. Затем сохраните файл и
                перенесите его обратно с заменой.
              </p>
              <HostsAdobeModal />
              <ContentFigure
                caption="Как редактировать файл hosts"
                src="wHhay41ocsc"
                type="youtube"
              />
              <Divider>Создаём новые правила в брандмауэре Защитника Windows</Divider>
              <Addition type="warning">
                Прежде чем вносить правила в брандмауэр — убедитесь, что он включён. При
                отключённом брандмауэре правила блокировки входящих и исходящих соединений
                не будут применяться.{" "}
                <a href="https://www.youtube.com/watch?v=goqsVsTMeRU">
                  Как его включить?
                </a>
              </Addition>
              <Addition type="info">
                Если вы устанавливали репаки от <mark className="user">KpoJluK</mark> или{" "}
                <mark className="user">m0nkrus</mark>, то правила для блокировки доступа в
                интернет программам в брандмауэре могут быть уже созданы.
              </Addition>
              <p>
                Если правка файла <mark className="file">HOSTS</mark> не помогла,
                попробуйте настроить правила соединений в брандмауэре.
              </p>
              <ul>
                <li>
                  Чтобы быстро открыть брандмауэр — откройте окно{" "}
                  <mark className="app">«Выполнить»</mark> с помощью комбинации клавиш{" "}
                  <mark className="key">Win + R</mark>, введите в поле{" "}
                  <mark className="select">«Открыть»</mark> значение{" "}
                  <mark className="code">wf.msc</mark> и нажмите{" "}
                  <mark className="key">Enter</mark>.
                  <ContentFigure
                    caption="Выполнить"
                    imgTitle="Открываем брандмауэр"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/open_wf_msc.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  Перед вами откроется{" "}
                  <mark className="app">Монитор брандмауэра Защитника Windows</mark>. В
                  левой части окна перейдите в раздел{" "}
                  <mark className="select">«Правила для входящих подключений»</mark>.
                  <ContentFigure
                    caption="Монитор брандмауэра Защитника Windows"
                    imgTitle="Список правил брандмауэра"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_main_page.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  В правой части интерфейса нажмите кнопку{" "}
                  <mark className="select">«Создать правило»</mark>.
                  <ContentFigure
                    caption="Монитор брандмауэра Защитника Windows"
                    imgTitle="Окно создания правила брандмауэра"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_creating_rule.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  В открывшемся мастере создания правил на первой вкладке оставьте
                  выбранным <mark className="select">«Для программы»</mark> и нажмите{" "}
                  <mark className="select">«Далее»</mark>.
                  <ContentFigure
                    caption="Мастер создания правила для нового входящего подключения"
                    imgTitle="Выбор типа правила брандмауэра"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_rule_type.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  На второй вкладке укажите путь к исполняемому файлу программы —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Adobe Premiere Pro.exe
                  </mark>{" "}
                  и снова нажмите <mark className="select">«Далее»</mark>.
                  <ContentFigure
                    caption="Мастер создания правила для нового входящего подключения"
                    imgTitle="Выбор программы для блокировки"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_select_app.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  В качестве действия выберите{" "}
                  <mark className="select">«Блокировать подключение»</mark>.
                  <ContentFigure
                    caption="Мастер создания правила для нового входящего подключения"
                    imgTitle="Окно настроек брандмауэра"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_blocking.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  Во вкладке <mark className="select">«Профиль»</mark> оставьте все три
                  флажка включёнными и нажмите <mark className="select">«Далее»</mark>.
                  <ContentFigure
                    caption="Мастер создания правила для нового входящего подключения"
                    imgTitle="Выбор профиля брандмауэра"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_select_profile.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  <p>
                    Задайте новому правилу любое имя, например название программы, и
                    нажмите <mark className="select">«Готово»</mark>. После этого
                    указанная программа больше не должна подключаться к интернету.
                  </p>
                  <ContentFigure
                    caption="Мастер создания правила для нового входящего подключения"
                    imgTitle="Выбор имени для правила брандмауэра"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/firewall_naming.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  Проделайте аналогичные действия и для{" "}
                  <mark className="select">«Правил для исходящего подключения»</mark>.
                </li>
              </ul>
              <Divider>Используем OneClickFirewall для быстрой блокировки</Divider>
              <p>
                Если вы не хотите возиться с созданием правил вручную — попробуйте
                воспользоваться утилитой <mark className="app">OneClickFirewall</mark>.
                Она добавляет в контекстное меню ярлыков две кнопки:{" "}
                <mark className="select">«Block Internet Access»</mark> для блокировки
                доступа в интернет и{" "}
                <mark className="select">«Restore Internet Access»</mark> для
                восстановления. Загрузить утилиту можно на{" "}
                <a href="https://winaero.com/download-oneclickfirewall/">
                  официальном сайте WinAero
                </a>
                .
              </p>
              <ContentFigure
                caption="Рабочий стол"
                imgTitle="Блокировка доступа в интернет через OneClickFirewall"
                // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                src="images/legacy/oneclickfirewall_aftereffects.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <Divider>Проверяем, не «навредил» ли антивирус</Divider>
              <p>
                В редких случаях антивирус может удалить файлы, отвечающие за активацию,
                посчитав их вредоносными. Если вы не хотите отключать или удалять{" "}
                <mark className="app">Защитник Windows</mark>, добавьте папки с
                программами <mark className="company">Adobe</mark> в список исключений
                антивируса, а затем установите программу вашей версии поверх существующей.
              </p>
              <ContentFigure
                caption="Windows Defender: как восстановить файлы и добавить их в исключения"
                src="ET94_dv3f8c"
                type="youtube"
              />
              <Divider>Проверяем установленные службы</Divider>
              <p>
                Если вы переходили с лицензионных версий на «народные», скорее всего, вы
                могли не очистить полностью систему от предыдущих установок. Из-за этого
                среди неудалённых служб могла остаться{" "}
                <mark className="app">Adobe Genuine Software Integrity Service</mark>,
                которая проверяет «легальность» использования программ и может вызывать
                окно об отсутствии лицензии. Для решения проблемы достаточно{" "}
                <a href="https://youtu.be/HDVvWyBKizo&t=75">отключить</a> эту службу или
                полностью очистить систему от продуктов{" "}
                <mark className="company">Adobe</mark> с помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>
                .
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title="Ошибка при запуске приложения 0xc0000142">
        <p>
          Скорее всего вы пытаетесь запустить приложение на устройстве с процессором без
          поддержки инструкций <mark>AVX2</mark>. В{" "}
          <a href="https://helpx.adobe.com/premiere-pro/system-requirements.html">
            нынешних системных требованиях для Premiere Pro
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
          <mark className="app">Adobe Premiere Pro</mark> версии <mark>23.6</mark>. Это
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
      <DetailsSummary title="Ошибка про отсутствие MSVCP140.dll, api-ms-win-crt-runtime-l1-1-0.dll или аналогичные">
        <p>
          Скорее всего вы забыли установить или обновить пакеты{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">
            Microsoft Visual C++ Redistributable
          </a>
          , которые можно установить перед установкой{" "}
          <mark className="app">Adobe Premiere Pro</mark> в репаке от <mark>KpoJluk</mark>{" "}
          или вручную по{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">этой ссылке</a>.
        </p>
        <p>
          Если установка пакетов не помогла - попробуйте обновить вашу систему до
          последней версии, хотя бы до <mark>Windows 10</mark> версии <mark>22H2</mark>.
        </p>
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
          разделе отключите галочку с параметра{" "}
          <mark className="ui">Show System Compatibility Issues</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/premierepro/show_system_compatibility_issues.png"
          imgTitle="Отключаем предупреждения о несовместимости оборудования с программой"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="premiere pro не удалось найти совместимые видеомодули воспроизведения, обновите видеодрайверы и запустите приложение повторно"
        title='"Premiere Pro could not find any capable video play modules. Please update your video display drivers and start again" при запуске программы'
      >
        <p>
          Данная ошибка может появиться после установки{" "}
          <mark className="app">Adobe Premiere Pro</mark> версии <mark>25.2</mark> в
          вариации репака от <mark>KpoJluK</mark> и почему-то на устройствах с видеокартой
          от <mark>NVIDIA</mark>. Если вы уверены в том, что у вас уже обновлены драйвера
          на видеокарту, то попробуйте установить этот же релиз повторно, то есть
          произвести двойную установку. То есть установите{" "}
          <mark className="app">Adobe Premiere Pro</mark> первый раз, а затем просто
          откройте установщик и снова произведите установку уже поверх установленного
          приложения.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Вылетает Premiere Pro и Media Encoder после установки плагинов Boris FX Sapphire">
        <p>
          Это довольно популярный баг, который мешает нормальному запуску{" "}
          <mark className="app">Adobe Premiere Pro</mark> и{" "}
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
    </div>
  );
};

export default PRErrors;
