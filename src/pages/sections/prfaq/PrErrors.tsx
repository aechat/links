import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";
import HostsAdobeModal from "../../../components/content/HostsAdobe";

const PrErrors: React.FC = () => {
  return (
    <div className="article-content">
      <Addition type="danger">
        <ul>
          <li>
            Пожалуйста, не ленитесь и внимательно читайте текст ошибки, который выдаёт
            программа. В большинстве случаев в её описании уже есть и причина, и возможное
            решение проблемы.
          </li>
          <li>
            Если у вас возникают трудности с чтением текста на английском языке,{" "}
            <a href="https://translate.yandex.ru/">воспользуйтесь переводчиком</a>.
          </li>
          <li>
            Если в этом разделе нет вашей ошибки, попробуйте найти решение в интернете,
            например, на профильных форумах.
          </li>
        </ul>
      </Addition>
      <DetailsSummary
        anchor="unlicensed-app"
        tag="bitte lies und akzeptiere die nutzungsbedingungen von adobe, door niet-gelicentieerde adobe-apps kan je apparaat worden blootgesteld aan extra beveilligingsrisico's, bu lisanssiz adobe uygulamasi orijinal olmadigindan yakinda devre disi birakilacak, deze app is gedeactiveerd, deze app wordt over dagen gedeactiveerd, deze niet-gelicentieerde adobe-app is degeactiveerd, dieses nicht lizenzierte adobe-programm wurde deaktiviert, dieses produkt wurde deaktiviert, cette application a ete desactivee, cette application adobe asns license a ete desactivee, profitez de sur les applications adobe authentiques, verhoog je productiviteit met legitieme adobe-apps, start your free trial of app, take advantage of discounts up to 40% off on genuine adobe replacement apps, this app has been disabled, this app will disable in days, this unlicensed adobe app is not genuine and will be disabled soon, unlicensed adobe apps may expose your device to increased security risks, vpn, white and red window, white screen, we can't verify your subscription status, we can't reach the adobe servers, this may be because you're not connected to the internet, error code 12014, sorry this app is not available, to continue using this app check your internet connection firewall or ad blocker settings, блокировка доступа в интернет, впн, виртуальная частная сеть, файл хостс, не запускается, не удается проверить статус вашей подписки, не удается подключиться к серверам adobe, возможно у вас отстутствует подключение к интернету, код ошибки 12015, начните использовать бесплатную пробную версию, окно с красной полоской при запуске, пустое окно, слетела лицензия, белое и красное окно, белый экран, the unlicensed adobe app, adobe genuine, hosts, ошибка лицензии, красное окно"
        title="Как избавиться от «The unlicensed Adobe app has been disabled»?"
      >
        <p>
          Пользователи «народных» версий программ <mark className="company">Adobe</mark>{" "}
          иногда сталкиваются с ошибкой проверки лицензии. Она проявляется в виде
          небольшого окна на белом фоне с красной полосой сверху, а в редких случаях
          сопровождается полностью пустым белым окном. В этой статье разберём несколько
          способов, как от него избавиться. Стоит учитывать, что эффективность каждого
          метода может различаться у разных пользователей.
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
          <mark className="app">Adobe Premiere</mark> после подключения к такой сети может
          получить доступ в интернет. В результате окно с сообщением о проблеме может
          внезапно появиться на языке той страны, к которой вы подключены.
        </p>
        <p>
          Проблема в том, что многие клиенты виртуальной частной сети заставляют систему
          игнорировать правила брандмауэра и изменения в файле{" "}
          <mark className="file">HOSTS</mark>, из-за чего программы, которым ранее был
          заблокирован доступ в интернет, снова получают его. Если вы подключены к частной
          сети, разорвите соединение и запустите{" "}
          <mark className="app">Adobe Premiere</mark> снова, тогда окно должно исчезнуть.
        </p>
        <p>
          Если окно с отсутствием лицензии всё равно появляется, попробуйте полностью
          отключить интернет. Если при полном отключении интернета сообщение больше не
          появляется, стоит проверить настройки соединений на устройстве.
        </p>
        <ContentFilter
          macContent={
            <>
              <Divider>Правим файл hosts</Divider>
              <p>
                Один из способов решения проблемы — редактирование файла{" "}
                <mark className="file">HOSTS</mark>. Для этого перейдите в директорию{" "}
                <mark className="path">/private/etc</mark>, скопируйте файл{" "}
                <mark className="file">HOSTS</mark> в любое удобное место, откройте его в
                текстовом редакторе, например <mark className="app">TextEdit</mark> или{" "}
                <mark className="app">nano</mark>, и добавьте в конец файла строки из
                блока ниже. Затем сохраните файл и перенесите его обратно с заменой.
              </p>
              <HostsAdobeModal />
              <ArticleMedia
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
                  <ArticleMedia
                    caption="Radio Silence"
                    src="legacy/network_radio_silence.png"
                    type="image"
                  />
                </li>
                <li>
                  После этого заблокированные приложения появятся во вкладке{" "}
                  <mark className="select">«Firewall»</mark> и больше не должны
                  подключаться к сети.
                  <ArticleMedia
                    caption="Radio Silence"
                    src="legacy/firewall_radio_silence.png"
                    type="image"
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
            </>
          }
          windowsContent={
            <>
              <Divider>Проверяем настройки вашего VPN-клиента</Divider>
              <p>
                Если вы не хотите отключаться от виртуальной частной сети, проверьте
                настройки вашего клиента: возможно, в нём есть возможность включить
                раздельное туннелирование или внести программы{" "}
                <mark className="company">Adobe</mark> в список исключений, чтобы трафик
                для них учитывал правила брандмауэра или блокировался.
              </p>
              <Divider>Проверяем настройки прокси в системе</Divider>
              <p>
                Некоторые клиенты для подключения к виртуальной частной сети изменяют
                настройку адреса прокси-сервера на собственный, что может мешать
                корректной работе правил в брандмауэре. Чтобы проверить состояние прокси,
                откройте <mark className="app">Параметры</mark> с помощью комбинации
                клавиш <mark className="key">Win + I</mark>, перейдите в{" "}
                <mark className="select">«Сеть и Интернет» → «Прокси-сервер»</mark> и
                проверьте настройку{" "}
                <mark className="select">«Использовать прокси-сервер»</mark>.
              </p>
              <ArticleMedia
                caption="Параметры"
                src="legacy/check_windows_proxy.png"
                type="image"
              />
              <p>
                Если прокси включён, нажмите на <mark className="select">«Изменить»</mark>{" "}
                и отключите настройку адреса собственного сервера.
              </p>
              <ArticleMedia
                caption="Параметры"
                src="legacy/disable_windows_proxy.png"
                type="image"
              />
              <Divider>Правим файл hosts</Divider>
              <p>
                Если вы не используете клиенты для подключения к виртуальным частным
                сетям, стоит перейти к другим способам решения проблемы — блокировке
                доступа программе в интернет. Первый из них — редактирование файла{" "}
                <mark className="file">HOSTS</mark>. Для этого перейдите в папку{" "}
                <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопируйте
                файл <mark className="file">HOSTS</mark> в удобное место, откройте его в
                текстовом редакторе, например <mark className="app">Notepad++</mark>, и
                добавьте в конец файла строки из блока ниже. Затем сохраните файл и
                перенесите его обратно с заменой.
              </p>
              <HostsAdobeModal />
              <ArticleMedia
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
                  <ArticleMedia
                    caption="Выполнить"
                    src="legacy/open_wf_msc.png"
                    type="image"
                  />
                </li>
                <li>
                  Перед вами откроется{" "}
                  <mark className="app">Монитор брандмауэра Защитника Windows</mark>. В
                  левой части окна перейдите в раздел{" "}
                  <mark className="select">«Правила для входящих подключений»</mark>.
                  <ArticleMedia
                    caption="Монитор брандмауэра Защитника Windows"
                    src="legacy/firewall_main_page.png"
                    type="image"
                  />
                </li>
                <li>
                  В правой части интерфейса нажмите кнопку{" "}
                  <mark className="select">«Создать правило»</mark>.
                  <ArticleMedia
                    caption="Монитор брандмауэра Защитника Windows"
                    src="legacy/firewall_creating_rule.png"
                    type="image"
                  />
                </li>
                <li>
                  В открывшемся мастере создания правил на первой вкладке оставьте
                  выбранным <mark className="select">«Для программы»</mark> и нажмите{" "}
                  <mark className="select">«Далее»</mark>.
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_rule_type.png"
                    type="image"
                  />
                </li>
                <li>
                  На второй вкладке укажите путь к исполняемому файлу программы —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Adobe Premiere Pro.exe
                  </mark>{" "}
                  и снова нажмите <mark className="select">«Далее»</mark>.
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_select_app.png"
                    type="image"
                  />
                </li>
                <li>
                  В качестве действия выберите{" "}
                  <mark className="select">«Блокировать подключение»</mark>.
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_blocking.png"
                    type="image"
                  />
                </li>
                <li>
                  Во вкладке <mark className="select">«Профиль»</mark> оставьте все три
                  флажка включёнными и нажмите <mark className="select">«Далее»</mark>.
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_select_profile.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Задайте новому правилу любое имя, например название программы, и
                    нажмите <mark className="select">«Готово»</mark>. После этого
                    указанная программа больше не должна подключаться к интернету.
                  </p>
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_naming.png"
                    type="image"
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
              <ArticleMedia
                caption="Рабочий стол"
                src="legacy/oneclickfirewall_aftereffects.png"
                type="image"
              />
              <Divider>Проверяем, не «навредил» ли антивирус</Divider>
              <p>
                В редких случаях антивирус может удалить файлы, отвечающие за активацию,
                посчитав их вредоносными. Если вы не хотите отключать или удалять{" "}
                <mark className="app">Защитник Windows</mark>, добавьте папки с
                программами <mark className="company">Adobe</mark> в список исключений
                антивируса, а затем установите программу вашей версии поверх существующей.
              </p>
              <ArticleMedia
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
                <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>
                .
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-this-effect-requires-gpu-acceleration"
        tag="gpu acceleration, mercury playback engine, рендеринг, аппаратное ускорение, ошибка гпу, gpu error"
        title="Что делать с ошибкой «This effect requires GPU Acceleration»?"
      >
        <p>
          Скорее всего, у вас по какой-то причине отключено аппаратное ускорение в
          настройках проекта. Некоторые эффекты могут напрочь отказываться работать с{" "}
          <mark className="select">«Mercury Playback Engine Software Only»</mark> и
          требовать ускорения на видеокарте.
        </p>
        <p>
          Для настройки типа рендеринга перейдите в{" "}
          <mark className="select">«File» → «Project Settings» → «General»</mark> и в
          параметре <mark className="select">«Renderer»</mark> установите значение{" "}
          <mark className="select">«Mercury Playback Engine GPU Acceleration»</mark>. Если
          у вас отсутствует какой-либо параметр для ускорения на видеокарте, попробуйте
          обновить драйверы для вашего видеочипа.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/set_render_on_gpu.png"
          type="image"
        />
        <p>
          В редких случаях эффект, требующий <mark>GPU-ускорения</mark>, может
          конфликтовать с остальными эффектами, применёнными к клипу, и выдавать похожую
          ошибку. Для этого отключите все эффекты, а затем выявляйте «виновника торжества»
          с помощью постепенного включения тех или иных эффектов.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-0xc0000142"
        tag="ошибка при запуске приложения, avx2"
        title="Что делать с ошибкой «0xc0000142» при запуске приложения?"
      >
        <p>
          Скорее всего, вы пытаетесь запустить приложение на устройстве с процессором без
          поддержки инструкций <mark>AVX2</mark>. В{" "}
          <a href="https://helpx.adobe.com/premiere-pro/system-requirements.html">
            системных требованиях Premiere
          </a>{" "}
          указано, что требуется процессор от <mark className="company">Intel</mark>{" "}
          минимум 6-го поколения или от <mark className="company">AMD</mark> серии 1000 и
          новее. У процессора, установленного в вашем устройстве, обязательно должна быть
          поддержка инструкций <mark>AVX2</mark>.
        </p>
        <Addition type="info">
          На сайте <mark className="company">Adobe</mark> указано, что версии{" "}
          <mark>24.х</mark> и новее нельзя установить в системах с процессорами{" "}
          <mark className="company">Intel</mark> 3-го поколения или более ранних версий, а
          также с более ранними процессорами <mark className="company">AMD</mark>.
        </Addition>
        <p>
          Решение простое: установите <mark className="app">Adobe Premiere</mark> версии{" "}
          <mark>23.6</mark>. Это будет последняя поддерживаемая для вас версия программы.
          Либо обновите процессор на вашем устройстве.
        </p>
        <p>
          В редких случаях процессор может поддерживать инструкции <mark>AVX2</mark>, но
          они могут быть каким-то образом отключены в системе. Чтобы это проверить,
          введите команду ниже в командную строку от имени администратора и перезагрузите
          устройство.
        </p>
        <code>bcdedit /set xsavedisable 0</code>
        <Addition type="info">
          Чтобы снова отключить <mark>AVX2</mark>, введите команду{" "}
          <mark className="code">bcdedit /set xsavedisable 1</mark> и перезагрузите
          устройство.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-missing-dll-errors"
        tag="отсутствует visual c++"
        title="Что делать с ошибками об отсутствии «MSVCP140.dll», «api-ms-win-crt-runtime-l1-1-0.dll» и похожих?"
      >
        <p>
          Скорее всего, вы забыли установить или обновить пакеты{" "}
          <a href="https://gitlab.com/stdout12/vcredist/-/releases">
            Microsoft Visual C++ Redistributable
          </a>
          . Их можно установить перед инсталляцией{" "}
          <mark className="app">Adobe Premiere</mark> в репаке от{" "}
          <mark className="user">KpoJluK</mark> или вручную по{" "}
          <a href="https://gitlab.com/stdout12/vcredist/-/releases/">этой ссылке</a>.
        </p>
        <p>
          Если установка пакетов не помогла, попробуйте обновить операционную систему до{" "}
          <mark>Windows 10</mark> версии <mark>22H2</mark> или новее.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-system-compatibility-report"
        tag="совместимость системы, драйверы, плагины, предупреждение"
        title="Что делать с окном «System Compatibility Report» при запуске программы?"
      >
        <Addition type="info">
          Когда вы видите это окно при запуске, не паникуйте. Это не ошибка, а
          предупреждение. Запустить программу можно как обычно, нажав на{" "}
          <mark className="select">«Continue with known issues»</mark>.
        </Addition>
        <ArticleMedia
          caption="System Compatibility Report"
          src="legacy/premierepro/system_compatibility_report.png"
          type="image"
        />
        <p>
          В этом окне обычно отображаются возможные проблемы с использованием программы,
          например, устаревшие драйверы или плагины с критическим багом.
        </p>
        <p>
          Если вы знаете о причинах несовместимости и готовы работать с некоторыми
          ограничениями, это окно можно отключить. Для этого перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «General»</mark> и снимите
          флажок с параметра{" "}
          <mark className="select">«Show System Compatibility Issues»</mark>.
        </p>
        <ArticleMedia
          caption="Выключаем проверку совместимости системы"
          src="legacy/premierepro/show_system_compatibility_issues.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-generative-extend-is-not-available"
        tag="сбой генерации расширения, can't generate extension, генеративное расширение недоступно, проверьте подключение к интернету"
        title="Почему появляется «Generative Extend is not available. Please check your internet connection and try again.» при попытке использовать генеративное расширение клипа?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="fix-project-appears-to-be-damaged"
        tag="проект поврежден, невозможно импортировать файл, ошибка с файлом, не читается"
        title="Что делать с «The project appears to be damaged, it cannot be opened»?"
      >
        <p>
          Если вчера проект открывался, а сегодня — нет, возможно, программа была закрыта
          экстренно или в системе произошёл сбой, например, <mark>BSOD</mark>. В таком
          случае восстановить проект будет сложно, но шансы есть.
        </p>
        <ul>
          <li>
            <p>
              Попробуйте найти автосохранения проекта и открыть их. Обычно они находятся
              рядом с файлом проекта.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Советуем настроить интервал автосохранения и количество копий в
                  настройках:{" "}
                  <mark className="select">«Edit» → «Preferences» → «Auto Save»</mark>.
                </li>
                <li>
                  В <mark className="app">Adobe Premiere</mark> версии <mark>24.0</mark> и
                  новее добавлена функция восстановления проектов при аварийном
                  завершении.{" "}
                  <a href="https://helpx.adobe.com/premiere-pro/kb/recovery-mode.html">
                    Подробнее...
                  </a>
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            Если автосохранений нет или они слишком старые, примите соболезнования. В
            следующий раз создавайте резервные копии или настройте облачное хранилище с
            поддержкой отката версий, например{" "}
            <a href="https://360.yandex.ru/">Яндекс.Диск</a>.
          </li>
        </ul>
        <p>
          В редких случаях файл может не открываться, если на диске осталось очень мало
          свободного места. Освободите пространство, удалив ненужные файлы или очистив
          кэш, и попробуйте открыть проект снова.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-video-filter-missing"
        tag="отсутствующий эффект, missing effect"
        title="Что делать с ошибкой «Video Filter missing»?"
      >
        <p>
          {/* TODO: про потерянные плагины как в афтере */}
          Это предупреждение означает, что в проекте используются эффекты, которые не
          установлены на вашем устройстве. Вы можете продолжить работу с проектом, но не
          сможете видеть, рендерить и настраивать эти эффекты. Для решения проблемы
          установите недостающие эффекты и перезапустите{" "}
          <mark className="app">Adobe Premiere</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-could-not-find-any-capable-video-play-modules"
        tag="premiere pro не удалось найти совместимые видеомодули воспроизведения, обновите видеодрайверы и запустите приложение повторно"
        title="«Premiere could not find any capable video play modules. Please update your video display drivers and start again» при запуске программы"
      >
        <p>
          Эта ошибка может появиться после установки{" "}
          <mark className="app">Adobe Premiere</mark> версии <mark>25.2</mark> в вариации
          репака от <mark className="user">KpoJluK</mark>, чаще всего на устройствах с
          видеокартой от <mark className="company">NVIDIA</mark>. Если вы уверены, что у
          вас уже обновлены драйверы, попробуйте установить этот же релиз повторно, то
          есть произвести двойную установку поверх уже установленного приложения.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-crash-by-sapphire"
        tag="сапфир, вылет при запуске, совместимость, crash fix"
        title="Как избавиться от вылетов Adobe Premiere и Adobe Media Encoder после установки Boris FX Sapphire?"
      >
        <p>
          Это известный баг, который мешает нормальному запуску{" "}
          <mark className="app">Adobe Premiere</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> при наличии установленных
          плагинов <mark className="plugin">Boris FX Sapphire</mark>. В более поздних
          версиях плагинов и программ это исправили, но если вы с ним столкнулись, укажите{" "}
          <mark className="select">«режим совместимости с Windows 8»</mark> в свойствах
          ярлыка программы.
        </p>
        <p>
          Для этого откройте свойства ярлыка, перейдите во вкладку{" "}
          <mark className="select">«Совместимость»</mark> и поставьте галочку у параметра{" "}
          <mark className="select">
            «Запускать программу в режиме совместимости с Windows 8»
          </mark>
          .
        </p>
        <ArticleMedia
          caption="Настройка режима совместимости"
          src="legacy/compatibility_media_encoder.mp4"
          type="video"
        />
        <p>
          После этого программа при запуске не должна вылетать. Если всё ещё вылетает,
          обновите плагины <mark className="plugin">Boris FX Sapphire</mark> до последней
          версии.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PrErrors;
