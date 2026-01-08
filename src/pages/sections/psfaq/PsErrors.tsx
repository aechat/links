import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";
import HostsAdobeModal from "../../../components/content/HostsAdobe";

const PsErrors: React.FC = () => (
  <div className="faq-content">
    <DetailsSummary title="Рабочий диск заполнен или Scratch Disk Full">
      <p>
        В основном данная ошибка возникает по причине нехватки дискового пространства в
        системном разделе. Чтобы устранить эту ошибку - достаточно его почистить от
        различного хлама.
      </p>
      {/* FIXME: написать!! */}
    </DetailsSummary>
    <DetailsSummary title="«Для доступа к функциям на базе технологии Firefly в приложениях Adobe у вас должны быть установлены подлинные приложения Adobe», «Проверьте своё подключение к интернету и повторите попытку» или «Could not complete your request because of a program error»">
      <p>
        Вы пытаетесь использовать функцию генеративной заливки для создания или коррекции
        изображения. На «народных» версиях функции, которые используют{" "}
        <mark className="plugin">Adobe Firefly</mark> недоступны, так как у вас
        отсутствует подписка на Creative Cloud.
      </p>
      <p>
        Решения два: либо вы оформляете подписку на Creative Cloud, либо заменяйте Firefly
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
    <DetailsSummary
      tag="белое окно, белый экран, слетела лицензия, красное окно, окно с красной полоской при запуске, не запускается, впн, файл хостс, блокировка доступа в интернет, this unlicensed adobe app is not genuine and will be disabled soon, unlicensed adobe apps may expose your device to increased security risks, this app will disable in days, this app has been disabled"
      title="Как избавиться от «The unlicensed Adobe app has been disabled»?"
    >
      <p>
        Пользователь, работающий в <mark className="word">народной</mark> версии{" "}
        <mark className="app">Adobe Photoshop</mark> или в любой другой программе от{" "}
        <mark className="company">Adobe</mark> может столкнуться ошибкой проверки
        лицензии. Оно сопровождается небольшим окном на белом фоне и с красной полосой
        сверху, а текст внутри окна обычно написан на английском языке. Иногда встречаются
        варианты отображения окна об отсутствии лицензии и на другом языке, например на
        немецком или на голландском. Причин для такого поведения{" "}
        <mark className="word">слетевшей лицензии</mark> может быть несколько.
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
      <ContentFilter
        macContent={
          <div>
            <Divider>Блокируем программе доступ в интернет</Divider>
            <p>
              Если вы не используете различные средства обхода блокировок или{" "}
              <mark className="app">VPN</mark>, то вы можете попробовать отредактировать
              файл <mark className="file">HOSTS</mark> для блокировки соединения вашего
              устройства к серверам <mark className="company">Adobe</mark>.
            </p>
            <Divider>Правим файл hosts</Divider>
            <p>
              Для редактирования файла <mark className="file">HOSTS</mark> - вам нужно
              перейти в директорию <mark className="path">/private/etc</mark>, найти и
              скопировать файл <mark className="file">HOSTS</mark> в любое удобное место,
              открыть любой текстовый редактор, например{" "}
              <mark className="app">TextEdit</mark> или{" "}
              <mark className="app">VS Code</mark>, и внести строки из кнопки для открытия
              модального окна чуть ниже в конец файла. Затем сохраните отредактированный
              файл и перенесите его обратно в <mark className="path">/private/etc</mark> с
              заменой.
            </p>
            <HostsAdobeModal />
            <Addition type="info">
              <ul>
                <li>
                  Если файл <mark className="file">HOSTS</mark> в этой директории по
                  какой-то причине отсутствует - создайте его самостоятельно без указания
                  расширения файла.
                </li>
                <li>
                  Если вы не хотите перемещать туда-сюда файл{" "}
                  <mark className="file">HOSTS</mark> для редактирования, то вы можете
                  открыть ваш текстовый редактор от имени администратора и спокойно
                  сохранять изменения.
                </li>
              </ul>
            </Addition>
            <Divider>Блокируем доступ в интернет с помощью Radio Silence</Divider>
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
            <ContentFigure
              caption="Radio Silence"
              imgTitle="Блокируем доступ в интернет программам на примере Adobe Premiere Pro"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/network_radio_silence.png"
              theme="dark"
              type="image"
              variant="mac"
            />
            <p>
              После проделанных действий, указанные вами программы от{" "}
              <mark className="company">Adobe</mark> не должны стучаться в сеть и выдавать
              ошибку об отсутствии лицензии. Ниже показано, как в итоге примерно должна
              выглядеть вкладка <mark className="select">«Firewall»</mark> после отлова
              процессов Adobe, лезущие в интернет.
            </p>
            <ContentFigure
              caption="Radio Silence"
              imgTitle="Окно Firewall после блокировки доступа в интернет программам"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/firewall_radio_silence.png"
              theme="dark"
              type="image"
              variant="mac"
            />
          </div>
        }
        windowsContent={
          <div>
            <Divider>Блокируем программе доступ в интернет</Divider>
            <p>
              Если вы не используете различные средства обхода блокировок или{" "}
              <mark className="app">VPN</mark>, то скорее всего адреса для проверки
              лицензии от <mark className="company">Adobe</mark> обновились и не были
              вписаны в ваши правила блокировки соединения. Это исправляется правкой файла{" "}
              <mark className="file">HOSTS</mark>, использованием{" "}
              <mark className="app">OneClickFirewall</mark> или внесением новых правил в{" "}
              <mark className="app">брандмауэре</mark> вашей операционной системы.
            </p>
            <Divider>Правим файл hosts</Divider>
            <p>
              Для редактирования файла <mark className="file">HOSTS</mark> - вам нужно
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
            <Addition type="info">
              <ul>
                <li>
                  Если файл <mark className="file">HOSTS</mark> в этой директории по
                  какой-то причине отсутствует - создайте его самостоятельно без указания
                  расширения файла.
                </li>
                <li>
                  Если вы не хотите перемещать туда-сюда файл{" "}
                  <mark className="file">HOSTS</mark> для редактирования, то вы можете
                  открыть ваш текстовый редактор от имени администратора и спокойно
                  сохранять изменения.
                </li>
              </ul>
            </Addition>
            <ContentFigure
              caption="Как редактировать файл hosts"
              src="wHhay41ocsc"
              type="youtube"
            />
            <Addition type="warning">
              <ul>
                <li>Для изменения системных файлов требуются права администратора.</li>
                <li>
                  После изменения файла <mark className="file">HOSTS</mark> желательно
                  перезагрузить ваше устройство.
                </li>
              </ul>
            </Addition>
            <Divider>Создаём новые правила в брандмауэре</Divider>
            <p>
              Если правка файла <mark className="file">HOSTS</mark> вам не помогла и вы
              всё ещё сталкиваетесь с сбоем лицензии, то попробуйте настроить правила
              брандмауэра. Для этого откройте окно <mark className="app">Выполнить</mark>{" "}
              с помощью комбинации клавиш <mark className="key">Win + R</mark>, введите в
              него <mark className="code">wf.msc</mark> и нажмите на{" "}
              <mark className="key">Enter</mark>. Таким образом вы откроете{" "}
              <mark className="app">монитор брандмауэра</mark>, в котором вы можете
              настроить правила для блокировки доступа в интернет нужной программе.
            </p>
            <Addition type="info">
              При установке приложений <mark className="company">Adobe</mark> в формате
              репака от <mark className="user">KpoJluK</mark> правила в брандмауэре
              автоматически прописываются при установке.
            </Addition>
            <p>
              После открытия монитора брандмауэра перейдите в раздел правил для входящих
              подключений в левой части окна.
            </p>
            <ContentFigure
              caption="Монитор брандмауэра Защитника Windows в режиме повышенной безопасности"
              imgTitle="Список правил брандмауэра"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/firewall_main_page.png"
              theme="light"
              type="image"
              variant="windows"
            />
            <p>
              Затем в правой части интерфейса найдите кнопку{" "}
              <mark className="select">«Создать правило»</mark> и нажмите на него.
            </p>
            <ContentFigure
              caption="Монитор брандмауэра Защитника Windows в режиме повышенной безопасности"
              imgTitle="Окно создания правила брандмауэра"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/firewall_creating_rule.png"
              theme="light"
              type="image"
              variant="windows"
            />
            <p>
              После нажатия на кнопку создания нового правила в брандмауэре у вас
              откроется новое окно с пятью вкладками. В первой вкладке оставьте значение{" "}
              <mark className="select">«Для программы»</mark> и нажмите на{" "}
              <mark className="select">«Далее»</mark>.
            </p>
            <ContentFigure
              caption="Мастер создания правила для нового входящего подключения"
              imgTitle="Выбор типа правила брандмауэра"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/firewall_rule_type.png"
              theme="light"
              type="image"
              variant="windows"
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
            <ContentFigure
              caption="Мастер создания правила для нового входящего подключения"
              imgTitle="Выбор программы для блокировки доступа"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/firewall_select_app.png"
              theme="light"
              type="image"
              variant="windows"
            />
            <p>
              Для действия нового правила нам, очевидно, нужно установить параметр{" "}
              <mark className="select">«Блокировать подключение»</mark>.
            </p>
            <ContentFigure
              caption="Мастер создания правила для нового входящего подключения"
              imgTitle="Окно настроек брандмауэра"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/firewall_blocking.png"
              theme="light"
              type="image"
              variant="windows"
            />
            <p>
              Во вкладке <mark className="select">«Профили»</mark> нужно оставить три
              чекбокса включенными и опять нажать на{" "}
              <mark className="select">«Далее»</mark>.
            </p>
            <ContentFigure
              caption="Мастер создания правила для нового входящего подключения"
              imgTitle="Выбор профиля брандмауэра"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/firewall_select_profile.png"
              theme="light"
              type="image"
              variant="windows"
            />
            <p>
              Далее назовите своё новое правило любым именем. Можно просто написать
              название программы и нажать на <mark className="select">«Готово»</mark>.
              После этого правило будет создано, а указанная программа теперь не должна
              стучаться в интернет.
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
            <Addition type="info">
              Возможно подобные действия нужно провернуть и к{" "}
              <mark>правилам для исходящего подключения</mark> по аналогичной схеме.
            </Addition>
            <Divider>
              Используем OneClickFirewall для быстрой блокировки интернета программе
            </Divider>
            <p>
              Если вы не хотите морочиться с созданием правил в{" "}
              <mark className="app">Брандмауэре Windows</mark> - попробуйте утилиту{" "}
              <mark className="app">OneClickFirewall</mark>. С помощью него вы сможете
              блокировать доступ в интернет нужной программе кнопкой{" "}
              <mark className="select">«Block Internet Access»</mark> в контекстном меню
              ярлыка или наоборот, разрешить кнопкой{" "}
              <mark className="select">«Restore Internet Access»</mark>. Загрузить утилиту
              можно на{" "}
              <a href="https://winaero.com/download-oneclickfirewall/">
                официальном сайте WinAero
              </a>
              .
            </p>
            <ContentFigure
              caption="Рабочий стол"
              imgTitle="Блокируем доступ в интернет через OneClickFirewall"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/oneclickfirewall_photoshop.png"
              theme="dark"
              type="image"
              variant="windows"
            />
            <Divider>Проверяем установленные сервисы на устройстве</Divider>
            <p>
              Если вы переходили с лицензионных версий на{" "}
              <mark className="word">народные</mark>, то скорее всего вы полностью не
              очищали вашу систему от предыдущих установок программ от{" "}
              <mark className="company">Adobe</mark>. Среди не удалённых сервисов в вашей
              системе мог затесаться{" "}
              <mark className="app">Adobe Genuine Software Integrity Service</mark>,
              который проверяет программы на легальное использование и именно он может
              вызвать окно об отсутствии лицензии. Для решения проблемы - достаточно{" "}
              <a href="https://github.com/wangzhenjjcn/AdobeGenp/wiki/Disable-Adobe-Genuine-Software-Integrity-on-Windows">
                отключить
              </a>{" "}
              этот сервис в <mark className="app">services.msc</mark> или очистить систему
              от программ <mark className="company">Adobe</mark> с помощью{" "}
              <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
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
              можете добавить нужные папки c программами от{" "}
              <mark className="company">Adobe</mark> в список исключений вашего
              антивируса, а затем установите программу вашей версии поверх
              существующей.{" "}
            </p>
            <ContentFigure
              caption="Windows Defender - как восстановить файлы и запретить их удаление"
              src="ET94_dv3f8c"
              type="youtube"
            />
          </div>
        }
      />
      <Divider>Проверяем устройство на наличие VPN-соединения</Divider>
      <p>
        В связи с наплывом блокировок различных интернет-ресурсов на территории СНГ -
        большинство пользователей стали пользоваться различными способами обхода,
        например, с помощью <mark className="app">VPN</mark>. И именно из-за использования{" "}
        <mark className="word">VPN-соединения</mark> - программа от{" "}
        <mark className="company">Adobe</mark> смогла достучаться в интернет и вывела окно
        об отсутствии лицензии на языке той страны, к которой вы подключились. Почему так
        происходит? При использовании вашего <mark className="app">VPN-клиента</mark> - он
        игнорирует ваши правила соединения, созданные в вашей операционной системе, то
        есть игнорирует стандартный <mark className="app">брандмауэр</mark> и адреса в{" "}
        <mark className="file">HOSTS</mark>. Для быстрого решения проблемы с активацией
        достаточно отключить текущее <mark className="word">VPN-соединение</mark> и
        пользоваться программами от <mark className="company">Adobe</mark> без него.
      </p>
      <Addition type="info">
        <ul>
          <li>
            Если вы не хотите отключать себя от{" "}
            <mark className="word">VPN-соединения</mark>, то вы можете проверить настройки
            своего <mark className="app">VPN-клиента</mark>. Возможно, в нём есть
            возможность внести программы от <mark className="company">Adobe</mark> или его
            адреса в список исключений соединений для того, чтобы соединение для{" "}
            <mark className="app">Adobe Photoshop</mark> проходило с учетом ваших настроек
            брандмауэра или вовсе блокировались.
          </li>
          <li>
            Если вы наоборот используете лицензионную версию{" "}
            <mark className="app">Adobe Photoshop</mark>, то вам нужно будет поддерживать{" "}
            <mark className="word">VPN-соединение</mark> к другой стране во время
            использования программы, так как <mark className="company">Adobe</mark>{" "}
            блокирует доступ к своим ресурсам пользователям Российской Федерации и из-за
            этого может выскакивать данная ошибка, так как не может сверить лицензии.
          </li>
        </ul>
      </Addition>
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
