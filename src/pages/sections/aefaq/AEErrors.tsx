import React from "react";

import {Divider} from "antd";

import DetailsSummary from "../../../components/DetailsSummary";

import Addition from "../../../components/Addition";

import {ContentFigure} from "../../../components/ContentFigure";

import ContentFilter from "../../../components/features/ContentFilter";

import HostsAdobeModal from "../../../components/features/HostsAdobe";

const AEErrors: React.FC = () => {
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
          src="images/adobe_the_unlicensed_app.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Divider>Проверяем наличие VPN-соединения</Divider>
        <p>
          Для начала проверьте, не используете ли вы виртуальную частную сеть. С ростом
          популярности подключений через <mark className="app">VPN</mark>, пользователи
          всё чаще сталкиваются с ошибкой отсутствия лицензии, так как{" "}
          <mark className="app">Adobe After Effects</mark> после подключения к частной
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
          <mark className="app">Adobe After Effects</mark> снова, окно должно перестать
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
                    src="images/network_radio_silence.png"
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
                    src="images/firewall_radio_silence.png"
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
                src="images/check_windows_proxy.png"
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
                src="images/disable_windows_proxy.png"
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
                    src="images/open_wf_msc.png"
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
                    src="images/firewall_main_page.png"
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
                    src="images/firewall_creating_rule.png"
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
                    src="images/firewall_rule_type.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  На второй вкладке укажите путь к исполняемому файлу программы —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\AfterFX.exe
                  </mark>{" "}
                  и снова нажмите <mark className="select">«Далее»</mark>.
                  <ContentFigure
                    caption="Мастер создания правила для нового входящего подключения"
                    imgTitle="Выбор программы для блокировки"
                    src="images/firewall_select_app.png"
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
                    src="images/firewall_blocking.png"
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
                    src="images/firewall_select_profile.png"
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
                    src="images/firewall_naming.png"
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
                src="images/oneclickfirewall_aftereffects.png"
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
      <DetailsSummary
        tag="out of memory, after effects has unexpectedly run out of memory and cannot complete this export, either decrease the memory requirements for the rendering frame or install more ram, нехватка озу, выделенный объем памяти превышает внутреннее ограничение, рекомендуется снизить требования к памяти для рендеринга этого кадра, предупреждение о нехватке памяти, unable to allocate enough memory, оперативная память, ошибка памяти, 23::40, не проигрывается предпросмотр, зацикливается превью"
        title="Как избавиться от «Out of Memory», «Unable to allocate enough memory to render the current frame», «Low memory warning. RAM use has been extended for previews» и похожих ошибок?"
      >
        <p>
          Поздравляю, вы встретились с первым «боссом» в{" "}
          <mark className="app">Adobe After Effects</mark>. Эти ошибки и предупреждения
          возникают, когда программе банально не хватает оперативной памяти для работы над
          вашими проектами. Часто это происходит из-за слишком «тяжёлых» эффектов,
          использования видео с немонтажными кодеками или неверных настроек программы и
          операционной системы.
        </p>
        <p>
          Советы в этой статье помогут вам минимизировать типичные проблемы с нехваткой
          оперативной памяти и «тормозами» программы, однако не могут полностью исключить
          их появление в будущем.
        </p>
        <ul>
          <li>
            Для начала стоит закрыть другие ресурсоёмкие программы при работе в{" "}
            <mark className="app">Adobe After Effects</mark>, например браузер или другую
            монтажную программу.
          </li>
          <li>
            Убедитесь, что вы не используете исходники со слишком большим разрешением,
            например, <mark>4K</mark>. Чем выше разрешение слоя и композиции, тем больше
            требуется оперативной памяти. Если вы используете исходники из интернета,
            особенно с видеохостингов, — стоит попробовать их конвертировать через{" "}
            <a href="https://www.shutterencoder.com/">Shutter Encoder</a> в монтажный
            кодек, например в <mark className="video">Apple ProRes 422</mark>, а затем
            заменить в проекте. Так вы дополнительно обезопасите себя от различных багов.{" "}
            <a href="#4.1">Как это сделать?</a>
          </li>
          <li>
            Убедитесь, что вы не перегрузили проект множеством ресурсоёмких эффектов,
            например <mark className="plugin">Deep Glow</mark>, эффектами из пакетов{" "}
            <mark className="plugin">Red Giant</mark> или{" "}
            <mark className="plugin">Boris FX</mark>. Некоторые эффекты могут
            конфликтовать друг с другом и потреблять слишком много оперативной памяти.
          </li>
          <li>
            Если вы используете несколько композиций с ресурсоёмкими эффектами, попробуйте
            создать для них прокси. Это также сократит время на повторный рендеринг, если
            вы не планируете вносить в эти композиции дальнейшие изменения.
            <Addition type="info">
              Чтобы создать прокси, найдите нужную композицию в окне{" "}
              <mark className="select">«Project»</mark>, нажмите{" "}
              <mark className="key">ПКМ</mark> и выберите{" "}
              <mark className="select">«Create Proxy» → «Movie»</mark>. В очереди
              рендеринга выберите подходящий формат и запустите генерацию. После успешного
              рендеринга прокси автоматически подключится к композиции. Отключить его
              можно через то же контекстное меню:{" "}
              <mark className="select">«Set Proxy» → «None»</mark>.
            </Addition>
          </li>
          <li>
            Попробуйте очистить кэш и оперативную память с помощью{" "}
            <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>.
            <ContentFigure
              caption="Очистка кэша и оперативной памяти"
              imgTitle="Очистка кэша и оперативной памяти"
              src="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Если у вас включена функция{" "}
            <mark className="select">«Multi-Frame Rendering»</mark>, попробуйте временно
            её отключить. Для этого перейдите в{" "}
            <mark className="select">
              «Edit» → «Preferences» → «Memory & Performance»
            </mark>
            , снимите флажок{" "}
            <mark className="select">«Enable Multi-frame Rendering»</mark> и повторите
            попытку рендеринга.
            <ContentFigure
              caption="Preferences"
              imgTitle="Переключение функции Multi-Frame Rendering"
              src="images/aftereffects/checkbox_multiframe-render.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Проверьте параметр{" "}
            <mark className="select">«RAM reserved for other applications»</mark> в{" "}
            <mark className="select">
              «Edit» → «Preferences» → «Memory & Performance»
            </mark>
            . Многие путают его назначение: он отвечает не за то, сколько памяти получат
            программы <mark className="company">Adobe</mark>, а за то, сколько останется
            для сторонних приложений. Если оставить слишком большое значение, то для{" "}
            <mark className="company">Adobe</mark> может не хватать оперативной памяти.
            Чтобы выделить максимум для <mark className="company">Adobe</mark>, установите{" "}
            <mark>0</mark> в этом параметре — программа сама подставит минимально
            допустимое значение.
            <ContentFigure
              caption="Preferences"
              imgTitle="Настройка параметра RAM reserved for other applications"
              src="images/aftereffects/ram_reserved_for_other_applications.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Проверьте, что в настройках проекта не установлена глубина цвета{" "}
            <mark>16</mark> или <mark>32 бит на канал</mark>. Для этого откройте{" "}
            <mark className="select">«Project Settings»</mark> с помощью комбинации клавиш{" "}
            <mark className="key">Ctrl + Alt + Shift + K</mark>, перейдите во вкладку{" "}
            <mark className="select">«Color»</mark> и в параметре{" "}
            <mark className="select">«Depth»</mark> снизьте битность проекта, чтобы
            облегчить работу с ним.
            <ContentFigure
              caption="Project Settings"
              imgTitle="Изменение битности в проекте"
              src="images/aftereffects/change_bit_depth.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Если у вас мало оперативной памяти, докупите её, если это возможно. В
            сегодняшних реалиях для комфортной работы в{" "}
            <mark className="app">Adobe After Effects</mark> требуется минимум{" "}
            <mark>32 ГБ</mark> ОЗУ.
            <Addition type="info">
              В <mark className="app">Adobe After Effects</mark> версии <mark>25.2</mark>{" "}
              и новее добавили функцию воспроизведения предпросмотра напрямую из дискового
              кэша, без загрузки кадров в ОЗУ. Это может быть полезно, если у вас мало
              оперативной памяти. Опция включена по умолчанию, если активен дисковый кэш.
              Управлять ей можно в{" "}
              <mark className="select">
                «Edit» → «Preferences» → «Media & Disk Cache» → «Enable Preview from Disk
                Cache»
              </mark>
              . Для этой функции желательно использовать быстрый SSD.
            </Addition>
          </li>
        </ul>
        <ContentFilter
          windowsContent={
            <div>
              <li>
                <a href="#6.5">Попробуйте настроить файл подкачки</a>. В качестве{" "}
                <mark className="select">«исходного размера»</mark> установите значение от{" "}
                <mark className="copy">1024</mark> МБ, а в качестве{" "}
                <mark className="select">«максимального»</mark> —{" "}
                <mark className="copy">65536</mark> (64 ГБ),{" "}
                <mark className="copy">131072</mark> (128 ГБ) или больше. После настройки
                система создаст файл подкачки, который сможет динамически расширяться в
                зависимости от заданных вами параметров.
              </li>
              <li>
                Установите программу{" "}
                <a href="https://github.com/henrypp/memreduct/releases">Mem Reduct</a> и
                настройте автоматическую очистку оперативной памяти при достижении{" "}
                <mark>90%</mark> заполнения. Эта утилита работает эффективнее, если у вас
                включён файл подкачки.
              </li>
              <li>
                Если файл подкачки включён и вы уверены, что проблема не в программе, —
                проверьте планки оперативной памяти с помощью{" "}
                <a href="https://www.memtest86.com/">MemTest86</a> или поменяйте их
                местами в слотах материнской платы.
              </li>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="gpu, vram, видеокарта, нехватка видеопамяти, gpu acceleration, ошибка графического процессора, this is likely because your gpu is out of memory, обнаружена ошибка которая связана с эффектами на этом кадре использующими графический процессор, вероятно это вызвано нехваткой памяти графического процессора"
        title="Что делать с ошибкой «After Effects has encountered a failure related to GPU-enabled effects»?"
      >
        <p>
          Эта ошибка указывает на то, что видеопамять вашей видеокарты заполнена, и
          эффект, использующий аппаратное ускорение, не может обработать кадр. Такое часто
          происходит, если у вас видеокарта с объёмом видеопамяти менее <mark>4 ГБ</mark>.
        </p>
        <ul>
          <li>
            Для начала стоит проанализировать свой проект и попробуйте поочерёдно
            отключать эффекты, которые могут вызывать сбой.
          </li>
          <li>
            Попробуйте освободить видеопамять, перезагрузив компьютер или перезапустив
            драйвер видеокарты с помощью комбинации клавиш{" "}
            <mark className="key">Ctrl + Win + Shift + B</mark>.
          </li>
          <li>
            Попробуйте настроить проект на программный рендеринг без аппаратного
            ускорения, то есть с использованием только процессора. Для этого откройте
            настройки проекта комбинацией клавиш{" "}
            <mark className="key">Ctrl + Alt + Shift + K</mark>, во вкладке{" "}
            <mark className="select">«Video Rendering and Effects»</mark> выберите{" "}
            <mark className="select">«Mercury Software Only»</mark>. После изменения
            настроек рекомендуется перезапустить программу.
            <ContentFigure
              caption="Project Settings"
              imgTitle="Переключение рендеринга на процессор"
              src="images/aftereffects/set_render_on_cpu.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <Addition type="info">
              Параметры рендеринга показаны на примере связки «процессор{" "}
              <mark className="company">AMD</mark> + видеокарта{" "}
              <mark className="company">NVIDIA</mark>».
              <ul>
                <li>
                  <mark className="select">«Mercury GPU Acceleration (CUDA)»</mark> —
                  программа <u>по возможности</u> будет использовать видеокарту NVIDIA для
                  обработки композиций. Однако это происходит не всегда, так как не все
                  эффекты оптимизированы для работы с GPU.
                </li>
                <li>
                  <mark className="select">«Mercury GPU Acceleration (OpenCL)»</mark> —
                  аналогично предыдущему параметру, но для видеокарт AMD и встроенной
                  графики Intel.
                </li>
                <li>
                  <mark className="select">«Mercury Software Only»</mark> — программа
                  будет обрабатывать композиции преимущественно с помощью процессора, но
                  может принудительно задействовать видеокарту, если это потребуется для
                  работы конкретного эффекта.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="25::56, 37::102, attempted to render a frame with an unsupported frame size, the frame size must be between 1 and 30000 pixels for both width and height, please check layer dimensions and the output from any effects that may be modifying layer content, cannot allocate buffer, motion tile, cc repetile, buffer size, pixel limit, мозаика движения, невозможно выделить для эффекта буфер величиной более 30000 пикселей в любом направлении"
        title="Что означает «Effect cannot allocate a buffer larger than 30000 pixels in either dimension»?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> размер слоя не может быть
          больше <mark>30000</mark> пикселей по ширине или высоте, и это ограничение
          обойти нельзя. Эта ошибка часто появляется из-за эффектов, которые увеличивают
          фактическое разрешение слоя, — например,{" "}
          <mark className="plugin">Motion Tile</mark> или{" "}
          <mark className="plugin">CC Repetile</mark>. Если исходное разрешение и так
          большое, например <mark>16384×16384</mark>, любое дополнительное расширение
          может превысить лимит.
        </p>
        <p>
          Чтобы исправить эту ошибку, найдите эффект, который увеличивает изображение, и
          либо временно отключите его, либо измените его параметры.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="please install the following effects to restore these references, данный проект содержит ссылку на отсутствующий эффект, установите следующий эффект чтобы восстановить эту ссылку, отсутствуют эффекты, ошибка эффектов, установка плагинов, менеджер эффектов, effect may have caused to quit, if you want you can disable this effect now, to re-enable it later select manager effects from effects menu options, приложение неожиданно завершило работу, эффект мог привести к неожиданному завершению работы приложения, если вы хотите этот эффект можно отключить сейчас, чтобы включить его позже выберите управление эффектами в пункте меню эффекты, effect manager, сбой эффекта, отключение эффекта, crash, plugin error"
        title="Что делать с «This project contains references to missing effects»?"
      >
        <p>
          Это предупреждение означает, что в проекте используются эффекты, которые не
          установлены или были отключены на вашем устройстве. Вы можете продолжить работу
          с проектом, но не сможете видеть, рендерить и настраивать эти эффекты.
        </p>
        <ContentFigure
          caption="Warning"
          imgTitle="Предупреждение об отсутствующих эффектах"
          src="images/aftereffects/missing_effects_warning.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Проблема возникает по двум основным причинам: либо эффект действительно не
          установлен, либо он был случайно отключён после сбоя программы.
        </p>
        <Divider>Устанавливаем недостающие эффекты</Divider>
        <p>
          Для решения проблемы установите недостающие эффекты из списка, указанного в
          предупреждении, и перезапустите <mark className="app">Adobe After Effects</mark>
          . Иногда название эффекта может отличаться в зависимости от версии плагина или
          программы, поэтому его придётся заменить вручную.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Большинство популярных плагинов для{" "}
              <mark className="app">Adobe After Effects</mark> вы можете найти в каналах{" "}
              <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a>{" "}
              или <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a>.
            </li>
            <li>
              Перед установкой сторонних плагинов, распространяемых через установщики,
              убедитесь, что <mark className="app">Adobe After Effects</mark> установлена
              по стандартному пути. Иначе плагины могут не отобразиться в программе.
            </li>
          </ul>
        </Addition>
        <Divider>Включаем случайно отключённые эффекты</Divider>
        <p>
          С версии <mark>23.4</mark> в <mark className="app">Adobe After Effects</mark>{" "}
          появилась возможность отключать эффекты с помощью{" "}
          <mark className="select">«Effect Manager»</mark>. Когда какой-то эффект вызывает
          сбой, программа предлагает его выключить. Если вы согласились, плагин останется
          неактивным, пока его не включить вручную.
        </p>
        <p>
          Для повторного включения эффекта откройте{" "}
          <mark className="select">«Effect Manager»</mark>. Попасть туда можно через меню{" "}
          <mark className="select">«Effect»</mark>, панель{" "}
          <mark className="select">«Effect Controls»</mark> или{" "}
          <mark className="select">«Effects & Presets»</mark>, выбрав в выпадающем списке{" "}
          <mark className="select">«Manage Effects»</mark>.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Открытие менеджера эффектов"
          src="images/aftereffects/effects_presets_manage_effects.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В открывшемся окне по умолчанию показываются только сторонние эффекты, а
          отключённые отображаются первыми. Если нужно отобразить стандартные эффекты —
          уберите чекбокс с{" "}
          <mark className="select">«Only Show Third-Party Effects»</mark>. Чтобы снова
          включить эффект, поставьте флажок рядом с ним, нажмите{" "}
          <mark className="select">«OK»</mark> и перезапустите{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ContentFigure
          caption="Effect Manager"
          imgTitle="Менеджер эффектов"
          src="images/aftereffects/effect_manager.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="этот эффект может замедлить предпросмотр и экспорт так как он не оптимизирован для мультикадрового рендера, mfr warning"
        title="Что означает «This effect may slow down Preview and Export as it is optimized Multi-Frame Render» при применении эффекта?"
      >
        <p>
          Это предупреждение сообщает, что используемый эффект не поддерживает технологию{" "}
          <mark className="select">«Multi-Frame Rendering»</mark>, так как его версия ещё
          не адаптирована для работы с ней. Рекомендуется проверить наличие обновлений у
          разработчика. Вы можете продолжить работать с этим эффектом, однако при
          рендеринге могут возникать ошибки.
        </p>
        <p>
          Если это предупреждение или жёлтый треугольник рядом с названием эффекта вас
          раздражает, а обновлять плагин нет возможности или желания, вы можете избавиться
          от предупреждения, отключив многокадровый рендеринг. Для этого перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Memory & Performance»</mark>{" "}
          и снимите флажок с{" "}
          <mark className="select">«Enable Multi-frame Rendering»</mark>.
        </p>
        <Addition type="warning">
          Отключение многокадрового рендеринга может снизить скорость обработки
          предпросмотра и экспорта, так как программа будет рендерить кадры
          последовательно, а не параллельно.
        </Addition>
        <ContentFigure
          caption="Preferences"
          imgTitle="Переключение функции Multi-Frame Rendering"
          src="images/aftereffects/checkbox_multiframe-render.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="этот проект содержит ошибки выражений, движок выражений, expression engine"
        title="Что делать с ошибкой «This project contains an expression error»?"
      >
        <p>
          Чаще всего это предупреждение появляется по трём причинам. Первая — вы открыли
          проект или применили пресет, созданный в английской локализации, в программе с
          русской. Большинство выражений пишутся именно под английскую версию. Вторая —
          выражение написано под старый или новый движок выражений, и проблему легко
          решить, переключив движок в настройках проекта. Третья — само выражение содержит
          ошибки из-за невнимательности автора. В этой статье разберём, как решить
          проблему с первыми двумя случаями.
        </p>
        <Divider>Меняем язык программы</Divider>
        <p>
          Если у вас установлен <mark className="app">Adobe After Effects</mark> на языке,
          отличном от английского, попробуйте сменить его на английский.
        </p>
        <Addition type="danger">
          <ul>
            <li>
              При смене языка пользовательские настройки сбросятся, так как они привязаны
              к языку интерфейса. Вам придётся заново настраивать рабочие области и
              некоторые параметры. Сторонние плагины при этом останутся.
            </li>
            <li>
              После смены языка названия стандартных пресетов и рабочих областей могут
              остаться на русском. Их можно переименовать вручную или переустановить
              программу, сразу выбрав английский язык при установке.
            </li>
          </ul>
        </Addition>
        <ContentFilter
          macContent={
            <div>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark>{" "}
                и новее.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Чтобы это сделать — сначала
                нажмите <mark className="key">Command + F12</mark>. В открывшемся окне
                нажмите на иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <ContentFigure
                caption="Включение Debug Database View"
                imgTitle="Включение Debug Database View"
                src="images/aftereffects/console_debug-database-view.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ContentFigure
                caption="Установка английского языка в консоли"
                imgTitle="Установка английского языка в консоли"
                src="images/aftereffects/set_language_console.png"
                theme="dark"
                type="image"
                variant="windows"
              />
            </div>
          }
          windowsContent={
            <div>
              <Divider>Меняем язык с помощью текстового файла</Divider>
              <p>
                Для быстрой смены языка на английский достаточно создать пустой текстовый
                файл с названием <mark className="file">ae_force_english.txt</mark> и
                поместить его в папку «Документы», находящийся в директории{" "}
                <mark className="path">%USERPROFILE%\Documents</mark>. В сам файл ничего
                писать не нужно. После этого перезапустите{" "}
                <mark className="app">Adobe After Effects</mark>, если он был открыт.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы быстро открыть папку «Документы», нажмите{" "}
                    <mark className="key">Win + R</mark>, введите{" "}
                    <mark className="path">%USERPROFILE%\Documents</mark> и нажмите{" "}
                    <mark className="key">Enter</mark>.
                  </li>
                  <li>
                    Если лень создавать файл вручную, можно сделать это командой{" "}
                    <mark className="code">
                      echo.&gt;&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
                    </mark>{" "}
                    в <mark className="app">cmd</mark>. Учтите, что при использовании{" "}
                    <mark className="app">PowerShell</mark> эта команда не сработает.
                  </li>
                </ul>
              </Addition>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark>{" "}
                и новее.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Чтобы это сделать — сначала
                нажмите <mark className="key">Ctrl + F12</mark>. В открывшемся окне
                нажмите на иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <ContentFigure
                caption="Включение Debug Database View"
                imgTitle="Включение Debug Database View"
                src="images/aftereffects/console_debug-database-view.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ContentFigure
                caption="Установка английского языка в консоли"
                imgTitle="Установка английского языка в консоли"
                src="images/aftereffects/set_language_console.png"
                theme="dark"
                type="image"
                variant="windows"
              />
            </div>
          }
        />
        <Divider>Меняем движок выражений</Divider>
        <p>
          Если смена языка не помогла, попробуйте сменить движок выражений. Откройте{" "}
          <mark className="select">«Project Settings»</mark> с помощью комбинации клавиш
          <mark className="key">Ctrl + Alt + Shift + K</mark> и перейдите во вкладку{" "}
          <mark className="select">«Expressions»</mark>. В параметре{" "}
          <mark className="select">«Expressions Engine»</mark> выберите другой движок. Это
          может помочь, если выражение в проекте было создано для другого синтаксиса.
        </p>
        <ContentFigure
          caption="Project Settings"
          imgTitle="Изменение движка выражений"
          src="images/aftereffects/change_expression_language.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Divider>Ищем проблемное выражение</Divider>
        <p>
          Если ошибки с выражениями всё ещё остаются, посмотрите, на что именно «ругается»
          программа. Чаще всего это связано со ссылками на несуществующие слои или
          параметры. В предупреждении, которое отображается в окне предпросмотра
          композиции, есть несколько кнопок: они позволяют переключаться между проблемными
          выражениями, выделять параметр с ошибкой, открывать поле для редактирования, а
          также показывать текст ошибки.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Чтобы раскрыть только параметры со встроенными выражениями, выделите слой и
              дважды нажмите <mark className="key">E</mark>. Если слой не будет выделен —
              раскроются все параметры с выражениями у всех слоёв в композиции.
            </li>
            <li>
              Чтобы посмотреть полностью ошибку, нажмите на иконку треугольника в
              раскрытом параметре с проблемным выражением.
            </li>
          </ul>
        </Addition>
        <ContentFigure
          caption="Ищем проблемные выражения"
          src="images/aftereffects/find_expressions_with_errors.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="advanced 3d, classic 3d, расширенный 3d, вылетает при попытке использовать адвансед 3д, 3d рендеринг, драйверы видеокарты"
        title="Что делать с ошибкой «Advanced 3D plug-in generated an unexpected exception»?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                В <mark className="app">Adobe After Effects</mark> версии{" "}
                <mark>24.1</mark> и новее появился новый движок для трёхмерного
                рендеринга. Иногда он может работать некорректно и выдавать ошибку при его
                использовании. Причины такого поведения могут быть разными: от простого
                бага, который решается запуском{" "}
                <mark className="app">Adobe After Effects</mark> от имени администратора,
                до отсутствия поддержки движка вашим устройством.
              </p>
              <ul>
                <li>
                  <p>
                    Если ваш графический процессор есть в{" "}
                    <a href="https://helpx.adobe.com/after-effects/using/advanced-3d-renderer.html">
                      списке поддерживаемых
                    </a>
                    , но при попытке использовать{" "}
                    <mark className="plugin">Advanced 3D</mark> программа вылетает,
                    попробуйте запустить её от имени администратора с помощью контекстного
                    меню ярлыка. Чтобы не делать это каждый раз вручную — установите
                    флажок{" "}
                    <mark className="select">
                      «Запускать эту программу от имени администратора»
                    </mark>{" "}
                    в свойствах ярлыка.
                  </p>
                  <ContentFigure
                    caption="Настройка запуска от имени администратора"
                    src="images/aftereffects/open_ae_as_admin.mp4"
                    theme="dark"
                    type="video"
                    variant="windows"
                  />
                </li>
                <li>
                  Если запуск от имени администратора не помог, обновите драйверы
                  видеокарты — желательно до версии{" "}
                  <mark className="app">NVIDIA Studio Driver</mark> для более стабильной
                  работы в творческих приложениях.
                  <Addition type="info">
                    Загрузить драйверы <mark className="app">NVIDIA Studio</mark> можно на{" "}
                    <a href="https://www.nvidia.com/en-eu/geforce/drivers/">
                      официальном сайте NVIDIA
                    </a>
                    . На странице укажите модель видеокарты, операционную систему и в поле{" "}
                    <mark className="select">«Download Type»</mark> выберите{" "}
                    <mark className="select">«Studio Driver»</mark>.
                  </Addition>
                </li>
                <li>
                  Если и обновление драйверов не помогло, обновите программу до более
                  свежей версии.
                  <Addition type="info">
                    У меня, автора статьи, на ранних сборках{" "}
                    <mark className="app">Adobe After Effects</mark> версии{" "}
                    <mark>2024</mark> движок <mark className="plugin">Advanced 3D</mark>{" "}
                    не запускался, выдавая указанную в статье ошибку, однако после
                    нескольких обновлений программы он начал работать корректно.
                  </Addition>
                </li>
                <li>
                  Если ни запуск от имени администратора, ни обновление драйверов и
                  программы не дали результата — вероятно, ваша видеокарта не
                  соответствует{" "}
                  <a href="https://helpx.adobe.com/after-effects/using/advanced-3d-renderer.html">
                    системным требованиям для Advanced 3D
                  </a>
                  . Если вам всё же нужно работать с трёхмерными слоями — переключите
                  движок на <mark className="plugin">Classic 3D</mark> в окне
                  предпросмотра или в настройках композиции во вкладке{" "}
                  <mark className="select">«3D Renderer»</mark>.
                  <ContentFigure
                    caption="Composition Settings"
                    imgTitle="Изменение 3D-рендерера"
                    src="images/aftereffects/change_3d_renderer.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                </li>
              </ul>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="c4d, синема 4д, cineware, 3d рендеринг, ошибка рендера, render failed, cineware server suite failed to acquire renderer port and path, server commands not available, сервер cineware, чтобы использовать средство рендеринга необходимо установить cinema 4d, 5027::12"
        title="Что делать с «Cinema 4D must be installed in order to use the Cinema 4D renderer»?"
      >
        <p>
          Если вы используете репак <mark className="app">Adobe After Effects</mark> от{" "}
          <mark className="user">KpoJluK</mark>, эта ошибка может возникать из-за того,
          что в его дистрибутивах <mark className="app">Adobe After Effects</mark> версий{" "}
          <mark>2020</mark> и выше отсутствует{" "}
          <mark className="plugin">Cinema 4D Lite</mark>. Это сделано для уменьшения
          размера установщика, но из-за этого теряется возможность импорта{" "}
          <mark className="file">C4D</mark> файлов, некорректно работает плагин{" "}
          <mark className="plugin">Cineware</mark> и нельзя включить соответствующий
          движок рендеринга.
        </p>
        <p>
          Чтобы это исправить, нужно установить полноценную{" "}
          <mark className="app">Maxon Cinema 4D</mark> той версии, которую требует ваша
          версия <mark className="app">Adobe After Effects</mark>. Обычно в тексте ошибки
          указывается, какую версию <mark className="app">Cinema 4D</mark> нужно
          установить.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Например, если в ошибке указано, что нужна{" "}
              <mark className="app">Cinema 4D 2023</mark>, то ставьте любую подверсию{" "}
              <mark>2023.X.X</mark>. Версии <mark>2024.X.X</mark> в таком случае не
              подойдут.
            </li>
            <li>
              Если вы установили нужную версию <mark className="app">Cinema 4D</mark>, но
              программы всё равно «не видят» друг друга, убедитесь, что они установлены в
              стандартном расположении на диске <mark className="path">C:\</mark>.
            </li>
          </ul>
        </Addition>
        <Addition type="info">
          <ul>
            <li>
              Если у вас установлен <mark className="app">Adobe After Effects</mark> через{" "}
              <mark className="app">Adobe Creative Cloud</mark>, вам достаточно установить{" "}
              <mark className="plugin">Cinema 4D</mark> оттуда:{" "}
              <mark className="select">
                «Приложения» → «After Effects» → «Подключаемые модули» → «Cinema 4D» →
                «Установить»
              </mark>
              .
            </li>
            <li>
              В репаках от <mark className="user">m0nkrus</mark> и некоторых других
              релизеров <mark className="app">Cinema 4D Lite</mark> обычно не вырезан.
              Уточняйте этот момент в описании сборки.
            </li>
          </ul>
        </Addition>
        <Divider>
          Список совместимости версий Maxon Cinema 4D и Adobe After Effects
        </Divider>
        <Addition type="info">
          Чтобы посмотреть текущую версию <mark className="app">Adobe After Effects</mark>
          , откройте <mark className="select">«Help» → «About After Effects»</mark>.
        </Addition>
        <ul>
          <li>
            <mark className="app">Adobe After Effects 25.1+</mark> требует{" "}
            <mark className="app">Cinema 4D 2025.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects 24.1-25.0</mark> требует{" "}
            <mark className="app">Cinema 4D 2024.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects 23.1-23.6</mark> требует{" "}
            <mark className="app">Cinema 4D 2023.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects 22.X-23.0</mark> требует{" "}
            <mark className="app">Cinema 4D R25.X.X</mark>.
            <Addition type="warning">
              <mark className="app">Cinema 4D R26.X.X</mark> и новее несовместимы с{" "}
              <mark className="app">Adobe After Effects</mark> ниже <mark>23.1</mark>.
            </Addition>
          </li>
          <li>
            <mark className="app">Adobe After Effects 17.X-18.X (2020-2021)</mark> требует{" "}
            <mark className="app">Cinema 4D R21.X.X</mark>. Путь к установленной программе
            можно указать в настройках движка <mark className="plugin">Cineware</mark>.
            <div
              style={{
                display: "grid",
                gap: "10px",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                alignItems: "center",
              }}
            >
              <ContentFigure
                caption="Composition Settings"
                imgTitle="Composition Settings"
                src="images/aftereffects/composition_settings_3drenderer_cinema4d.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <ContentFigure
                caption="Choose CINEMA 4D Installation"
                imgTitle="Choose CINEMA 4D Installation"
                src="images/aftereffects/cinema4d_renderer_options.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <ContentFigure
                caption="Choose CINEMA 4D Installation"
                imgTitle="Choose CINEMA 4D Installation"
                src="images/aftereffects/choose_cinema4d_installation.png"
                theme="dark"
                type="image"
                variant="windows"
              />
            </div>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="advanced 3d is not supported by the current hardware, расширенный 3d не поддерживается текущим оборудованием, аппаратное ускорение, display acceleration disabled, драйверы видеокарты"
        title="Что означает «Display acceleration disabled» в правом верхнем углу предпросмотра?"
      >
        <p>
          Это предупреждение указывает, что программа по какой-то причине не может
          использовать аппаратное ускорение видеокарты. Если вы недавно переустанавливали{" "}
          <mark>Windows</mark> и ставили <mark className="app">Adobe After Effects</mark>{" "}
          с нуля — скорее всего, вы просто забыли установить драйверы для видеокарты.
        </p>
        <Divider>Устанавливаем или обновляем драйверы</Divider>
        <ul>
          <li>
            <mark className="company">NVIDIA</mark> - попробуйте установить драйверы
            редакции <mark className="app">NVIDIA Studio</mark>. Загрузить их можно с{" "}
            <a href="https://www.nvidia.com/en-eu/geforce/drivers/">официального сайта</a>
            . На странице укажите модель видеокарты, ОС и в поле{" "}
            <mark className="select">«Тип загрузки»</mark> выберите{" "}
            <mark>Studio Driver</mark>.
          </li>
          <li>
            <mark className="company">Intel</mark> - найдите и скачайте подходящий драйвер{" "}
            <a href="https://www.intel.com/content/www/us/en/search.html#sort=relevancy&f:@tabfilter=[Downloads]&f:@stm_10385_en=[Graphics]&f:downloadtype=[Drivers]">
              на официальном сайте
            </a>{" "}
            или воспользуйтесь{" "}
            <a href="https://www.intel.com/content/www/us/en/support/detect.html">
              автоматическим установщиком
            </a>
            .
            <Addition type="warning">
              <mark className="company">Intel</mark> может блокировать доступ к сайту для
              пользователей из Российской Федерации.
            </Addition>
          </li>
          <li>
            <mark className="company">AMD</mark> - воспользуйтесь{" "}
            <a href="https://www.amd.com/ru/support/download/drivers.html">
              автоматическим установщиком с официального сайта
            </a>
            .
          </li>
        </ul>
        <p>
          После установки драйверов перезагрузите компьютер и снова откройте{" "}
          <mark className="app">Adobe After Effects</mark>. Если драйвера установились
          корректно, надпись должна исчезнуть.
        </p>
        <Divider>Проверяем совместимость оборудования с программой</Divider>
        <p>
          В редких случаях новая версия <mark className="app">Adobe After Effects</mark>{" "}
          может не поддерживать вашу видеокарту. Или наоборот — слишком свежие драйверы
          могут вызывать проблемы. Обычно о проблемах с совместимостью сообщается в окне{" "}
          <mark className="select">«System Compatibility Report»</mark> при запуске
          программы, если оно не было выключено в настройках программы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="отключение планирования gpu, аппаратное ускорение, сбой драйвера, hardware decoding"
        title="При работе в программе пропадает изображение на мониторе, как будто перезагружается драйвер видеокарты. Как это исправить?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <Divider>Отключаем аппаратное ускорение</Divider>
              <p>
                Попробуйте отключить аппаратное ускорение в параметрах системы. Для этого
                откройте <mark className="app">Параметры</mark> с помощью комбинации
                клавиш <mark className="key">Win + I</mark>, перейдите в раздел{" "}
                <mark className="select">«Система» → «Дисплей» → «Графика»</mark>.
                Откройте{" "}
                <mark className="select">«Дополнительные графические параметры»</mark> и
                отключите опцию{" "}
                <mark className="select">«Планирование GPU с аппаратным ускорением»</mark>
                . После этого перезагрузите устройство и продолжите работу.
              </p>
              <ContentFigure
                caption="Параметры"
                imgTitle="Отключение планирования GPU"
                src="images/disable_gpu_planning.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <Divider>Отключаем аппаратное декодирование исходников</Divider>
              <p>
                Если зависания встречаются только при работе с исходниками видео —
                попробуйте отключить аппаратное декодирование в настройках программы. Для
                этого перейдите в{" "}
                <mark className="select">«Edit» → «Preferences» → «Import»</mark>, снимите
                флажок{" "}
                <mark className="select">«Enable hardware accelerated decoding»</mark> и
                перезапустите программу.
              </p>
              <ContentFigure
                caption="Preferences"
                imgTitle="Отключение аппаратного декодирования в настройках"
                src="images/aftereffects/disable_hardware_accelerated_decoding.png"
                theme="dark"
                type="image"
                variant="windows"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="сапфир, красный экран, ошибка плагина, red screen, plugin error"
        title="Почему появляется красный экран и пропадают параметры у эффектов из пакета Boris FX Sapphire?"
      >
        <p>
          Скорее всего, вы столкнулись с багом «народного»{" "}
          <mark className="plugin">Boris FX Sapphire</mark> версии <mark>2024.5</mark> или{" "}
          <mark>2024.51</mark> в виде репака от <mark className="user">KpoJluK</mark>.
          Из-за него вы не можете настраивать эффекты, так как их параметры не
          отображаются. Проблема решается откатом на версию <mark>2024.4</mark> от{" "}
          <mark className="user">KpoJluK</mark> или установкой более свежих версий
          плагинов в виде репаков от <mark className="user">Team V.R.</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="сапфир, вылет при запуске, совместимость, crash fix"
        title="Как избавиться от вылетов Adobe Media Encoder после установки плагина Boris FX Sapphire?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Это известный баг, который мешает запуску{" "}
                <mark className="app">Adobe Media Encoder</mark> при наличии плагинов{" "}
                <mark className="plugin">Boris FX Sapphire</mark>. В новых версиях его
                исправили, но если вы столкнулись с этой проблемой, просто включите{" "}
                <mark className="select">«режим совместимости с Windows 8»</mark> в
                свойствах ярлыка <mark className="app">Adobe Media Encoder</mark>.
              </p>
              <p>
                Для этого откройте свойства ярлыка, перейдите во вкладку{" "}
                <mark className="select">«Совместимость»</mark> и поставьте галочку{" "}
                <mark className="select">
                  «Запускать программу в режиме совместимости с: Windows 8»
                </mark>
                . После этого программа не должна вылетать при запуске.
              </p>
              <ContentFigure
                caption="Настройка режима совместимости"
                src="images/compatibility_media_encoder.mp4"
                theme="dark"
                type="video"
                variant="windows"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="красный экран, синий экран, ошибка плагина, red screen, blue screen, plugin error"
        title="Как избавиться от красного или синего экрана при использовании Twixtor?"
      >
        <p>
          Обычно заливка слоя красным или синим цветом обычно связана с ошибками при
          работе с <mark className="plugin">Twixtor</mark>.
        </p>
        <ul>
          <li>
            «Синяя заливка» означает, что вы вышли за пределы длительности исходного
            видео, и плагин не понимает, что отображать. Чтобы это исправить, увеличьте
            скорость клипа или расширьте диапазон исходника на таймлайне.
          </li>
          <li>
            «Красная заливка» может указывать на то, что эффект{" "}
            <mark className="plugin">Twixtor</mark> применён не первым в списке эффектов.
            Переместите его на самый верх или используйте на отдельном корректирующем
            слое.
          </li>
          <li>
            Если вы всё ещё сталкиваетесь с проблемой «красной заливки» и у вас установлен{" "}
            <mark className="plugin">Twixtor</mark> версии <mark>8.X.X</mark>, попробуйте
            установить <mark className="plugin">Twixtor</mark> версии <mark>7.X.X</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="roto brush, ротобраш, баг версии cc 2019"
        title="Почему я не могу выделить объект при использовании Roto Brush?"
      >
        <p>
          Скорее всего, вы столкнулись со старым багом{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>CC 2019</mark>,
          если используете репак от <mark className="user">KpoJluK</mark>. Проблема
          решается откатом программы до версии <mark>CC 2018</mark>, установкой{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>2019</mark> в виде
          сборки от <mark className="user">m0nkrus</mark> или установкой более свежей
          версии программы от любого репакера.
        </p>
        <p>
          В более редких случаях вы можете столкнуться с невозможностью выделить объект
          из-за использования исходного материала с переменной частотой кадров. Такие
          исходники рекомендуется преобразовать в стабильную частоту кадров, например{" "}
          <mark>30</mark> или <mark>60</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="file is damaged, unable to import, файл поврежден, ошибка импорта, автосохранение, project corruption, bad format or not readable, недопустимый формат или чтение невозможно, ошибка с файлом"
        title="Что делать с «File is damaged» или «Unable to import file as project»?"
      >
        <p>
          Если вчера проект открывался, а сегодня — нет, возможно, программа была закрыта
          экстренно или в системе произошёл сбой, например, упала в <mark>BSOD</mark>. В
          таком случае восстановить проект будет крайне сложно, но шансы есть.
        </p>
        <ul>
          <li>
            Попробуйте найти автосохранения проекта и открыть их. Обычно они находятся в
            папке рядом с файлом проекта или в директории, указанной в настройках
            автосохранения.
            <Addition type="info">
              <ul>
                <li>
                  Параметры автосохранения настраиваются в{" "}
                  <mark className="select">«Edit» → «Preferences» → «Auto-Save»</mark>.
                  Там можно задать расположение файлов и указать время, после которого
                  будет выполнено автосохранение.
                </li>
                <li>
                  Учтите, что при нажатии <mark className="key">Ctrl + S</mark> таймер
                  автосохранения сбрасывается. Рекомендуется установить в параметре{" "}
                  <mark className="select">«Save Every»</mark> значение от <mark>1</mark>{" "}
                  до <mark>3</mark> минут.
                </li>
                <li>
                  Автосохранение не сработает, если проект ни разу не был сохранён.
                  Сохраняйте файл проекта сразу после его создания.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            Если файлов автосохранений нет или они слишком старые — примите
            соболезнования. В следующий раз позаботьтесь о своих нервах и{" "}
            <a href="#3.9">
              создавайте резервные копии или настройте облачное хранилище с поддержкой
              отката файлов
            </a>
            .
          </li>
          <li>
            В редких случаях файл может оказаться не битым, но не может спокойно
            открыться, если свободного места на дисковом разделе крайне мало. Так как
            операционная система может не предупредить о малом объёме свободной дисковой
            памяти на разделах, вы могли упустить такую мелочь и можете столкнуться с
            невозможностью открытия проекта в{" "}
            <mark className="app">Adobe After Effects</mark>. Для решения этой проблемы
            вам достаточно почистить систему от накопившегося мусора, хотя бы почистив
            кэши, и повторить попытку открытия проекта снова.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="дисковый кэш, нехватка места, please make more space available or go to media & disk cache preferences to change the folder or maximium disk cache size"
        title="Что означает «Your disk cache folder is on a drive that does not have enough avaiable space to safely store the full amount specified in your preferences»?"
      >
        <p>
          В этом предупреждении прямо говорится, что на диске, где хранится кэш, не
          хватает места. Чтобы решить эту проблему — достаточно освободить место в
          разделе, на котором у вас расположен кэш.
        </p>
        <ContentFigure
          caption="Warning"
          imgTitle="Предупреждение о недостаточном свободном месте на диске"
          src="images/aftereffects/low_diskcache_space_warning.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если нет возможности освободить место, откройте{" "}
          <mark className="select">«Edit» → «Preferences» → «Media & Disk Cache»</mark>. В
          этом разделе настроек можно уменьшить максимальный размер кэша в{" "}
          <mark className="select">«Maximum Disk Cache Size»</mark>, изменить его
          расположение через <mark className="select">«Choose Folder»</mark> или полностью
          отключить, сняв флажок с <mark className="select">«Enable Disk Cache»</mark>.
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Настройка дискового кэша"
          src="images/aftereffects/preferences-media_and_disk_cache.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="дисковый кэш, папка кэша, disk cache, cache folder, cache error, please check your settings in media and disk cache preferences"
        title="Что делать с «Error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory»?"
      >
        <p>
          Эта ошибка указывает, что путь к папке кэша, указанный в настройках, не найден.
          Это предупреждение не является критической ошибкой — вы можете проигнорировать
          его и продолжить работу. Обычно это происходит при переносе настроек с другого
          компьютера или при отключении диска, на котором хранился кэш. В таком случае
          программа сбрасывает путь на системную папку временных файлов.
        </p>
        <p>
          Чтобы настроить расположение дискового кэша, перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Media & Disk Cache»</mark> и
          укажите нужную директорию.{" "}
          <i style={{opacity: "0.5"}}>
            Или просто отключите дисковый кэш, сняв флажок с{" "}
            <mark className="select">«Enable Disk Cache»</mark>.
          </i>
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Настройка дискового кэша"
          src="images/aftereffects/preferences-media_and_disk_cache.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="unicode, ошибка кодировки, локализация, кириллица в путях, сброс настроек, unicode error, баг версии"
        title="Что делать с ошибками «Не удалось выполнить преобразование символов Unicode» или «Не удалось загрузить псевдоэффекты»?"
      >
        <p>
          Если вы запускаете <mark className="app">Adobe After Effects</mark> с русской
          локализацией, то можете столкнуться с этой проблемой. Она встречалась на старых
          версиях и на версии <mark>24.4</mark> (позже её исправили). Решение —
          переустановить <mark className="app">Adobe After Effects</mark> на английском
          языке. Если не хотите менять язык, обновитесь до более свежей версии или
          откатитесь на более старую.
        </p>
        <p>
          Если вы используете другую версию{" "}
          <mark className="app">Adobe After Effects</mark> или английскую локализацию, то
          причин может быть много. Иногда может помочь{" "}
          <a href="https://community.adobe.com/t5/after-effects-discussions/faq-how-to-reset-trash-preferences-in-after-effects/td-p/10634342">
            сброс настроек
          </a>
          . Общий совет: старайтесь не использовать кириллицу в путях к файлам, их
          названиях и названиях слоёв.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="vfr, переменная частота кадров, интерпретация видео, frame rate, 17::19, 17::18"
        title="Что делать с ошибкой «Error: overflow converting ratio denominators»?"
      >
        <p>
          Эта ошибка может появляться по разным причинам, чаще всего на старых версиях{" "}
          <mark className="app">Adobe After Effects</mark>. Универсального решения, к
          сожалению, нет, но можно попробовать минимизировать появление этой проблемы.
        </p>
        <ul>
          <li>
            Ошибка может быть связана с исходниками, особенно с переменной частотой
            кадров. Если в окне <mark className="select">«Project»</mark> значение частоты
            кадров выглядит как <mark>29.841</mark> — стоит интерпретировать или
            перекодировать футаж в «ровную» частоту кадров, например <mark>30 FPS</mark>,
            через <mark className="app">Shutter Encoder</mark>.{" "}
            <mark className="app">Adobe After Effects</mark> не любит плавающие значения
            частоты кадров.
            <Addition type="info">
              Для интерпретации футажа выделите его в окне{" "}
              <mark className="select">«Project»</mark> и нажмите{" "}
              <mark className="key">Ctrl + Alt + G</mark>.
            </Addition>
          </li>
          <li>
            Если замена исходников не помогла, проверьте, нет ли на слоях масок. Иногда
            помогает их пересоздание.
          </li>
          <li>
            Попробуйте создать новый проект и импортировать в него композиции из
            проблемного файла, а затем продолжить работы.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag='ротобраш, несоответствие частоты кадров либо не найден видеоряд с полями, для достижения оптимального результата операций "кисть для ротоскопии" и "уточнить края" необходимо задать частоту кадров композиции в соответствии с источником слоя, for best roto brush & refine edge results set the composition to fps to match the layer source, will not render correctly because the source frame rate changed from to fps roto brush, frame rate mismatch, частота кадров, интерлейсинг, поля, interlace'
        title="Из-за чего появляется «Frame rate mismatch, or footage with fields found» при использовании Roto Brush?"
      >
        <p>
          Это предупреждение возникает по двум причинам: несоответствие частоты кадров
          исходника и композиции или наличие чересстрочной развёртки у исходника. Работать
          с такими файлами можно, но лучше устранить проблему для корректной работы{" "}
          <mark className="plugin">Roto Brush</mark>.
        </p>
        <Addition type="info">
          Из-за ошибки в русской локализации{" "}
          <mark className="app">Adobe After Effects</mark> предупреждение формулируется
          как «не найден видеоряд с полями», тогда как в оригинале говорится, что поля как
          раз найдены.
        </Addition>
        <Divider>Решаем проблемы с частотой кадров</Divider>
        <ul>
          <li>
            <p>
              Обычно предупреждение о несоответствии частоты кадров подсказывает, какую
              частоту нужно выставить для композиции. Например, если исходное видео имеет{" "}
              <mark>50 FPS</mark>, а композиция — <mark>30</mark>, программа предложит
              настроить её на <mark>50 FPS</mark>.
            </p>
            <p>
              Чтобы изменить частоту кадров, откройте настройки композиции с помощью{" "}
              <mark className="key">Ctrl + K</mark> или через меню{" "}
              <mark className="select">«Composition» → «Composition Settings»</mark>. В
              поле <mark className="select">«Frame Rate»</mark> укажите ту же частоту, что
              у исходника, и нажмите <mark className="select">«OK»</mark>. После этого
              предупреждение должно исчезнуть.
            </p>
            <ContentFigure
              caption="Composition Settings"
              imgTitle="Вкладка Basic в настройках композиции"
              src="images/aftereffects/composition_settings_basic.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Если вы не хотите менять частоту кадров композиции, в которой используется
            исходник, создайте на его основе прекомпозицию с той же частотой кадров.
          </li>
          <li>
            Если вы не хотите менять частоту кадров композиции — перекодируйте исходник в
            нужное значение через <mark className="app">Shutter Encoder</mark> и замените
            его в проекте с помощью{" "}
            <mark className="select">«Replace Footage» → «File»</mark>. Для изменения
            частоты кадров используйте вкладку{" "}
            <mark className="select">«Advanced features»</mark>.
            <ContentFigure
              caption="Shutter Encoder"
              src="images/shutter_encoder_convert_to_constant_fps.mp4"
              theme="dark"
              type="video"
              variant="mac"
            />
          </li>
          <li>
            Если вы не хотите конвертировать исходник — интерпретируйте его частоту
            кадров. Для этого выделите файл в окне{" "}
            <mark className="select">«Project»</mark>, нажмите{" "}
            <mark className="key">Ctrl + Alt + G</mark>, чтобы открыть окно{" "}
            <mark className="select">«Interpret Footage»</mark>, и в разделе{" "}
            <mark className="select">«Frame Rate»</mark> выберите{" "}
            <mark className="select">«Conform to frame rate»</mark> и задайте значение,
            совпадающее с частотой кадров нужной композиции.
            <ContentFigure
              caption="Interpret Footage"
              imgTitle="Интерпретация футажа"
              src="images/aftereffects/interpret_footage_main.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="ошибка инициализации заливки с учетом содержимого"
        title="Из-за чего может появляться «Content-Aware Fill Error: Initialization Failed»?"
      >
        <p>
          Эта ошибка при использовании <mark className="plugin">Content-Aware Fill</mark>{" "}
          может возникать по разным причинам. Проблему можно минимизировать,
          воспользовавшись способами, описанными в статье.
        </p>
        <ul>
          <li>
            Убедитесь, что путь к вашему проекту формата <mark className="file">AEP</mark>{" "}
            или исходнику не содержит кириллицы и нестандартные символы. Используйте
            только латиницу.
          </li>
          <li>
            Если вы используете исходники, хранящиеся на внешнем жёстком диске —
            попробуйте переместить их на внутренний диск вашего устройства, указать новый
            путь через <mark className="select">«Replace Footage»</mark> и повторить
            попытку заливки заново.
          </li>
          <li>
            <p>
              Попробуйте открыть настройки{" "}
              <mark className="plugin">Content-Aware Fill</mark>, поочерёдно включите и
              выключите различные параметры, а затем попробуйте обработку заново. Для
              этого откройте окно <mark className="select">«Content-Aware Fill»</mark>{" "}
              через <mark className="select">«Window»</mark> и в контекстном меню выберите{" "}
              <mark className="select">«Content-Aware Fill Settings»</mark>.
            </p>
            <ContentFigure
              caption="Adobe After Effects"
              imgTitle="Открываем настройки Content-Aware Fill"
              src="images/aftereffects/open_content-aware_fill_settings.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <p>
              В окне настроек включите и отключите различные параметры, затем верните их
              предыдущие значения. Этот приём иногда помогает модулю заработать корректно.
            </p>
            <ContentFigure
              caption="Content-Aware Fill Settings"
              imgTitle="Настройки Content-Aware Fill"
              src="images/aftereffects/content-aware_fill_settings.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Иногда проблема может быть в неверно установленном цветовом профиле проекта.
            Проверьте настройки цветового пространства во вкладке{" "}
            <mark className="select">«Color»</mark> в{" "}
            <mark className="select">«Project Settings»</mark>, который открывается
            комбинацией клавиш <mark className="key">Ctrl + Alt + Shift + K</mark>.
            Попробуйте установить для{" "}
            <mark className="select">«Working Color Space»</mark> значение{" "}
            <mark className="select">«None»</mark>.
            <ContentFigure
              caption="Project Settings"
              imgTitle="Изменение цветового профиля"
              src="images/aftereffects/change_working_color_space.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="3d camera tracker, размер слоя должен соответствовать композиции и использовать значения трансформирования по умолчанию, сброс трансформации, pre-compose, precompose"
        title="Из-за чего появляется «Layer must match Composition and use default transform values»?"
      >
        <p>
          При работе с <mark className="plugin">3D Camera Tracker</mark> слой, который вы
          хотите проанализировать, не должен иметь изменений в позиции, масштабе, повороте
          и других свойствах. Чтобы сбросить все изменения трансформации, нажмите{" "}
          <mark className="key">ПКМ</mark> по слою, раскройте контекстное меню{" "}
          <mark className="select">«Transform»</mark> и выберите{" "}
          <mark className="key">«Reset»</mark>.
        </p>
        <ContentFigure
          caption="Timeline"
          imgTitle="Сбрасываем трансформацию у слоя"
          src="images/aftereffects/reset_layer_transform.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если вы по какой-то причине не хотите сбрасывать трансформацию слоя — выделите
          его и создайте прекомпозицию с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Shift + C</mark>. При создании предварительной
          композиции выберите опцию{" "}
          <mark className="select">«Move all attributes into the new composition»</mark>.
          После этого применяйте <mark className="plugin">3D Camera Tracker</mark> уже к
          новой композиции и начните анализ.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="3d camera tracker, analysis solve failed, ошибка анализа, трекинг камеры, camera tracking error"
        title="Что делать с ошибками «Analysis Solve Failed» или «Unable to solve camera for this frame»?"
      >
        <p>
          Если при использовании <mark className="plugin">3D Camera Tracker</mark> вы
          сталкиваетесь с этими ошибками, причины могут быть разными.
        </p>
        <ul>
          <li>
            Если у исходника слабый контраст, накрутите его с помощью{" "}
            <mark className="plugin">Curves</mark> или{" "}
            <mark className="plugin">Brightness & Contrast</mark> и повторите анализ.
          </li>
          <li>
            Если исходник снят со статичной камерой, этот способ трекинга не подойдёт.{" "}
            <mark className="plugin">3D Camera Tracker</mark> отслеживает движение камеры
            в пространстве по изображению и не сможет построить трек, если камера не
            движется.
          </li>
          <li>
            Если у оператора на момент записи видео сильно тряслись руки, сначала
            выполните стабилизацию исходника с помощью эффекта{" "}
            <mark className="plugin">Warp Stabilizer</mark>, а уже потом запускайте анализ
            камеры. Трекер может и проанализирует точки, но результат может вас не
            удовлетворить из-за низкого качества самого исходника после стабилизации.
          </li>
          <li>
            Если вы пытаетесь проанализировать длинное видео, попробуйте разбить его на
            части. Возможно, на каком-то отрезке камера движется слишком резко, что и
            вызывает ошибку.
          </li>
          <li>
            Попробуйте изменить <mark className="select">«Solve Method»</mark> на другой
            или включить опцию <mark className="select">«Detailed Analysis»</mark> во
            вкладке <mark className="select">«Advanced»</mark> в настройках эффекта.
            <ContentFigure
              caption="Effect Controls"
              imgTitle="Включение детального анализа"
              src="images/aftereffects/detailed_analysis-3d_camera_tracker.png"
              theme="dark"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Если вы уверены, что с исходником всё в порядке, попробуйте перекодировать его
            в монтажный кодек и заменить в проекте с помощью{" "}
            <mark className="select">«Replace Footage»</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="совместимость системы, драйверы, плагины, startup & repair"
        title="Из-за чего появляется окно «System Compatibility Report» при запуске программы?"
      >
        <p>
          В этом окне обычно отображаются возможные проблемы совместимости железа с
          программой из-за устаревших или слишком новых версий драйверов, а также
          критические баги плагинов. Не паникуйте — это не ошибка, а предупреждение. Чтобы
          продолжить запуск программы, нажмите на{" "}
          <mark className="select">«Continue with known issues»</mark>.
        </p>
        <ContentFigure
          caption="System Compatibility Report"
          imgTitle="Окно с отчётом о совместимости"
          src="images/aftereffects/system_compatibility_report.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Если вы знаете о причинах несовместимости и готовы работать с некоторыми
          ограничениями, например отсутствие возможности включить{" "}
          <mark className="select">«Draft 3D»</mark>, это окно можно отключить. Для этого
          перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Startup & Repair»</mark> и
          снимите флажок{" "}
          <mark className="select">«Show System Compatibility Issues»</mark>.
        </p>
        <Addition type="info">
          В старых версиях <mark className="app">Adobe After Effects</mark> этот параметр
          находится в разделе <mark className="select">«General»</mark>.
        </Addition>
        <ContentFigure
          caption="Preferences"
          imgTitle="Отключение отчёта о совместимости"
          src="images/aftereffects/show_system_compatibility_issues.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="неподдерживаемое устройство, avx2, ошибка запуска, требования к процессору"
        title="Что делать с ошибкой «0xc0000142» при запуске приложения?"
      >
        <p>
          Эта ошибка возникает, если вы пытаетесь запустить{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>24.1</mark> или
          новее на процессоре без поддержки инструкций <mark>AVX2</mark>. В{" "}
          <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
            системных требованиях Adobe After Effects последних версий
          </a>{" "}
          указано, что для работы требуется процессор{" "}
          <mark className="company">Intel</mark> не ниже 6-го поколения или{" "}
          <mark className="company">AMD Ryzen</mark> серии 1000 и новее.
        </p>
        <p>
          На практике программу можно установить на более старое железо, если процессор
          поддерживает инструкции <mark>AVX2</mark>. Это значит, что{" "}
          <mark className="app">Adobe After Effects</mark> не установится на системах с
          процессорами <mark className="company">Intel</mark> 3-го поколения или старше, а
          также на более ранних процессорах <mark className="company">AMD</mark>.
        </p>
        <p>
          Если ваше устройство не поддерживает <mark>AVX2</mark>, решение простое —
          установите <mark className="app">Adobe After Effects</mark> версии{" "}
          <mark>23.6</mark> или ниже. Либо обновите процессор, если это возможно.
        </p>
        <p>
          В редких случаях процессор может поддерживать инструкции <mark>AVX2</mark>, но
          они могут быть каким-то образом отключены в системе. Посмотрите настройки вашего{" "}
          <mark>BIOS</mark> или попробуйте ввести команду{" "}
          <mark className="code">bcdedit /set xsavedisable 0</mark> в командной строке от
          имени администратора и перезагрузить компьютер. Чтобы снова отключить{" "}
          <mark>AVX2</mark>, введите команду{" "}
          <mark className="code">bcdedit /set xsavedisable 1</mark> и перезагрузите
          устройство.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="отсутствует visual c++"
        title="Что делать с ошибками об отсутствии «MSVCP140.dll», «api-ms-win-crt-runtime-l1-1-0.dll» и похожих?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Скорее всего, вы забыли установить или обновить пакеты{" "}
                <a href="https://github.com/abbodi1406/vcredist/releases/">
                  Microsoft Visual C++ Redistributable
                </a>
                . Если установка пакетов не помогла, попробуйте обновить вашу операционную
                систему хотя бы до <mark>Windows 10</mark> версии <mark>22H2</mark> или
                новее.
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="d3dcompiler_47.dll, библиотека, отсутствует dll"
        title="Что делать с ошибкой «Не найден файл D3DCompiler_47.dll»?"
      >
        {" "}
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Распакуйте архив{" "}
                <a
                  download
                  href="files/D3DCompiler_47.zip"
                >
                  D3DCompiler_47.zip
                </a>
                , откройте папку, соответствующую архитектуре вашей системы, и скопируйте
                оттуда <mark className="file">DLL</mark> файл в директорию с установленной
                программой, по умолчанию это{" "}
                <mark className="path">
                  C:\Program Files\Adobe\Adobe After Effects 20XX
                </mark>
                .
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="ray-traced 3d, 3d рендеринг, устаревший проект"
        title="Из-за чего появляется «Warning: A rendering plug-in was not found. The default rendering plug-in will be substituted»?"
      >
        <p>
          Это предупреждение появляется при открытии старого проекта с использованием
          трёхмерного движка <mark className="plugin">Ray-Traced 3D</mark> в новых версиях{" "}
          <mark className="app">Adobe After Effects</mark>. Данный движок был удалён
          начиная с версии <mark>2020</mark>, поэтому открыть такой проект без
          дополнительных манипуляций не получится.
        </p>
        <p>
          <mark className="plugin">Ray-Traced 3D</mark> впервые появился в{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>CS6</mark>. Чтобы
          корректно открыть проект с этим устаревшим движком, используйте{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>2019</mark> или
          более раннюю, но не ниже <mark>CS6</mark>.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default AEErrors;
