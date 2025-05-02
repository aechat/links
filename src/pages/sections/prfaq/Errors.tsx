import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import ContentSwitcher from "../../../components/features/ContentFilter";
import HostsAdobeModal from "../../../components/features/HostsAdobe";
import {Divider} from "antd";

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
      <DetailsSummary
        tag="слетела лицензия, красное окно, не запускается, впн, файл хостс, блокировка доступа в интернет"
        title='"This unlicensed Adobe app is not genuine and will be disabled soon", "Unlicensed Adobe apps may expose your device to increased security risks", "This app will disable in X days" или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?'
      >
        <p>
          Пользователь, работающий в <mark className="word">народной</mark> версии{" "}
          <mark className="app">Premiere Pro</mark> или в любой другой программе от{" "}
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
              <mark className="app">Premiere Pro</mark> проходило с учетом ваших настроек
              брандмауэра или вовсе блокировались.
            </li>
            <li>
              Если вы наоборот используете лицензионную версию{" "}
              <mark className="app">Premiere Pro</mark>, то вам нужно будет поддерживать{" "}
              <mark className="word">VPN-соединение</mark> к другой стране во время
              использования программы, так как <mark>Adobe</mark> блокирует доступ к своим
              ресурсам пользователям РФ и из-за этого может выскакивать данная ошибка, так
              как не может сверить лицензии.
            </li>
          </ul>
        </AdditionInfo>
        <ContentSwitcher
          macContent={
            <div>
              <p>
                Если вы не используете различные средства обхода блокировок или{" "}
                <mark className="app">VPN</mark>, то скорее всего{" "}
                <mark className="app">Premiere Pro</mark> как-то смог достучаться до
                интернета. Для блокировки доступа определённым программам к интернету на
                устройствах с <mark>macOS</mark> можно воспользоваться программой{" "}
                <a href="https://radiosilenceapp.com/">Radio Silence</a>. После установки
                и активации этой программы перейдите во вкладку{" "}
                <mark className="ui">Network Monitor</mark> и в ней запретите программам
                от <mark>Adobe</mark>, которые лезут в сеть, доступ в интернет, нажав на
                кнопку <mark className="ui">Block</mark> рядом с названием программы.
              </p>
              <ImageFigure
                caption="Radio Silence"
                imgSrc="images/network_radio_silence.png"
                imgTitle="Блокируем доступ в интернет программам на примере Premiere Pro"
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
                    Если файл <mark className="file">hosts</mark> в этой директории
                    отсутствует, то создайте его без расширения.
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
                Во второй вкладке нужно указать путь до исполняемого файла программы вручную
                или через кнопку <mark className="ui">Обзор</mark>, а затем снова нажать
                на <mark className="ui">Далее</mark>. Путь должен выглядеть как{" "}
                <mark className="path">
                  C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Support Files\Adobe
                  Premiere Pro.exe
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
      <DetailsSummary title="Ошибка при запуске приложения 0xc0000142">
        <p>
          Скорее всего вы пытаетесь запустить приложение на устройстве с процессором без
          поддержки инструкций <mark>AVX2</mark>. В{" "}
          <a href="https://helpx.adobe.com/ru/premiere-pro/system-requirements.html">
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
          <mark className="app">Premiere Pro</mark> версии <mark>23.6</mark>. Это будет
          последняя поддерживаемая для вас версия программы. Либо обновите процессор на
          вашем устройстве.
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
          <mark className="app">Premiere Pro</mark> в репаке от <mark>KpoJluk</mark> или
          вручную по{" "}
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
