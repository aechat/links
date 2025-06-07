import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/ContentFilter";
import {Divider} from "antd";

const PSInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/InstallProblems.tsx" />
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <p>
          Обычно установка большинства файлов в{" "}
          <mark className="app">Adobe Photoshop</mark> универсальна, поэтому следуйте
          инструкциям ниже.
        </p>
        <ul>
          <li>
            Если в архиве находится файл <mark className="file">.atn</mark>, то для
            установки вам нужно открыть окно <mark className="ui">Actions</mark> с помощью
            комбинации клавиш <mark className="key">Alt + F9</mark>, нажать на три полоски
            в углу открывшегося окна и нажать на кнопку{" "}
            <mark className="ui">Load Actions</mark>. Далее вам предложат выбрать нужный
            файл. После выбора файла действий оно у вас отобразится в окне{" "}
            <mark className="ui">Actions</mark> и вы сможете применять их в своих
            проектах.
          </li>
          <li>
            Если в архиве находится файл <mark className="file">.abr</mark>, то для
            установки кистей нужно открыть окно кистей в{" "}
            <mark className="ui">Window &gt; Brushes</mark>. В открывшемся окне нажмите на
            три полоски в углу и выберите <mark className="ui">Import Brushes</mark>. В
            проводнике выберите нужный файл с набором кистей.
            {/* FIXME: */}
          </li>
          <li>
            Если в архиве находится файл <mark className="file">.psd</mark>, то такие
            файлы открываются как обычный проект в{" "}
            <mark className="app">Adobe Photoshop</mark>. Их также можно импортировать в
            уже существующий проект через <mark className="ui">File &gt; Import</mark>.
          </li>
          <li>
            Если в архиве находится AI, EPS, JPG, PNG, PDF, SVG, то...
            {/* FIXME: */}
          </li>
        </ul>
        <ContentSwitcher
          macContent={
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  Если в архиве находится файл <mark className="file">.zxp</mark>, то
                  такие расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">
                    ZXP Installer от aescripts
                  </a>
                  . Прежде чем устанавливать расширение такого формата, убедитесь в том,
                  что ваша версия <mark className="app">Adobe After Effects</mark> его
                  поддерживает. После того как вы установите расширение, откройте терминал
                  и введите команды ниже, их можно скопировать одним нажатием. Если
                  терминал не выдал никакие ошибки, то вы можете спокойно открыть{" "}
                  <mark className="app">Adobe After Effects</mark> и проверить
                  работоспособность установленного расширения.
                  <AdditionDanger>
                    Пожалуйста, не используйте{" "}
                    <a href="https://zxpinstaller.com/">
                      ZXP Installer от ELEMENTS Storage Media
                    </a>
                    , если вы используете версии программ Adobe, которые отвязаны от
                    приложения <mark className="app">Creative Cloud</mark>. Данный{" "}
                    <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам
                    выдавать ошибку <strong>-193</strong> до тех пор, пока вы не
                    установите программу <mark className="app">Creative Cloud</mark>, а он
                    же может вам поломать уже установленные программы. Для решения
                    проблемы воспользуйтесь{" "}
                    <a href="https://aescripts.com/learn/zxp-installer/">
                      ZXP Installer от aescripts
                    </a>{" "}
                    или ручной установкой расширений.
                  </AdditionDanger>
                  <AdditionInfo>
                    <ul>
                      <li>
                        Если вы не хотите устанавливать стороннее ПО для установки{" "}
                        <mark className="file">.zxp</mark>, то вы можете переименовать
                        файл <mark className="file">.zxp</mark> в{" "}
                        <mark className="file">.zip</mark> и распаковать его как обычный
                        архив. Содержимое свежераспакованного файла нужно поместить в
                        папку{" "}
                        <mark className="path">
                          ~/Library/Application Support/Adobe/CEP/extensions
                        </mark>{" "}
                        и после этого ввести команды, которые были расположены чуть ниже в
                        терминал.
                        <code style={{fontSize: "0.8em"}}>
                          defaults write com.adobe.CSXS.5 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.6 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.7 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.8 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.9 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.10 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.11 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.12 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.13 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.14 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.15 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.16 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.17 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.18 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.19 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.20 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.21 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.22 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.23 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.24 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.25 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.26 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.27 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.28 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.29 PlayerDebugMode 1<br />
                          defaults write com.adobe.CSXS.30 PlayerDebugMode 1<br />
                        </code>
                      </li>
                      <li>
                        Команды выше достаточно ввести один раз, в дальнейшем при
                        установке подобных расширений команды для терминала вводить не
                        нужно. Эти команды включают debug-режим в{" "}
                        <mark className="app">Adobe After Effects</mark> для корректного
                        открытия и работы сторонних расширений, установленные из просторов
                        интернета.
                      </li>
                      <li>
                        Иногда в архиве может быть уже распакованный{" "}
                        <mark className="file">.zxp</mark> архив. Это можно понять по
                        наличию папок <mark className="path">META-INF</mark> и{" "}
                        <mark className="path">CSXS</mark> внутри папки с названием
                        расширения.
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
              </ul>
            </div>
          }
          windowsContent={
            <div>
              <ul>
                <li>
                  Если в архиве находится файл формата <mark className="ui">.ccx</mark>,
                  то вам нужно переименовать этот файл в <mark className="ui">.zip</mark>{" "}
                  и распаковать его. Папку с распакованным содержимым вам нужно
                  переместить в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
                  </mark>
                  .
                </li>
                <li></li>
                <li></li>
                <li>
                  Если в архиве находится файл <mark className="file">.zxp</mark>, то
                  такие расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">
                    ZXP Installer от aescripts
                  </a>
                  . Для установки требуется просто перенести{" "}
                  <mark className="file">.zxp</mark> файл в окно{" "}
                  <mark className="app">ZXP Installer</mark> для установки и следовать
                  указаниям программы. Прежде чем устанавливать расширение такого формата,
                  убедитесь в том, что ваша версия{" "}
                  <mark className="app">Adobe After Effects</mark> его поддерживает.
                  <AdditionDanger>
                    Пожалуйста, не используйте{" "}
                    <a href="https://zxpinstaller.com/">
                      ZXP Installer от ELEMENTS Storage Media
                    </a>
                    , если вы используете версии программ Adobe, которые отвязаны от
                    приложения <mark className="app">Creative Cloud</mark>. Данный{" "}
                    <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам
                    выдавать ошибку <strong>-193</strong> до тех пор, пока вы не
                    установите программу <mark className="app">Creative Cloud</mark>, а он
                    же может вам поломать уже установленные программы. Для решения
                    проблемы воспользуйтесь{" "}
                    <a href="https://aescripts.com/learn/zxp-installer/">
                      ZXP Installer от aescripts
                    </a>{" "}
                    или ручной установкой расширений.
                  </AdditionDanger>
                  <AdditionInfo>
                    <ul>
                      <li>
                        Если вы не хотите устанавливать стороннее ПО для установки{" "}
                        <mark className="file">.zxp</mark>, то вы можете переименовать
                        файл <mark className="file">.zxp</mark> в{" "}
                        <mark className="file">.zip</mark> и распаковать его как обычный
                        архив. Содержимое свежераспакованного файла нужно поместить в
                        папку{" "}
                        <mark className="path">
                          C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
                        </mark>{" "}
                        (если такой папки нет - создайте) и после этого нужно применить{" "}
                        <a
                          download
                          href="files/Enable Extensions Adobe.reg"
                        >
                          REG-патч
                        </a>
                        , открыв его и подтвердив слияние записей реестра.
                      </li>
                      <li>
                        <a
                          download
                          href="files/Enable Extensions Adobe.reg"
                        >
                          REG-патч
                        </a>{" "}
                        нужно применить лишь один раз, он универсален для всех расширений
                        формата <mark className="file">.zxp</mark>. В дальнейшем при
                        установке подобных расширений файл для внесений записей в реестр
                        системы не нужно снова открывать.{" "}
                        <a
                          download
                          href="files/Enable Extensions Adobe.reg"
                        >
                          REG-патч
                        </a>{" "}
                        включает debug-режим в{" "}
                        <mark className="app">Adobe After Effects</mark> для корректного
                        открытия и работы сторонних расширений, установленные из просторов
                        интернета.
                      </li>
                      <li>
                        Иногда в архиве может быть уже распакованный{" "}
                        <mark className="file">.zxp</mark> архив. Это можно понять по
                        наличию папок <mark className="path">META-INF</mark> и{" "}
                        <mark className="path">CSXS</mark> внутри папки с названием
                        расширения.
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
              </ul>
            </div>
          }
        />
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="части архива, парт, распаковка, rar, zip"
        title="В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое и как такие файлы корректно распаковать?"
      >
        <p>
          Данные файлы с пометкой <mark>.part1</mark>, <mark>.part2</mark> и далее по
          списку - это лишь части одного и того же архива. Архивы поделены на 2 или на 4
          ГБ из-за ограничений <mark className="app">Telegram</mark> на размер загружаемых
          файлов. Чтобы корректно распаковать нужный архив - нужно загрузить все файлы на
          ваш компьютер, а затем распаковать с помощью программ-архиваторов.
        </p>
        <AdditionWarning>
          Если вы не распакуете архив полностью, то у вас могут быть проблемы с установкой
          или использованием в программах.
        </AdditionWarning>
        <ContentSwitcher
          macContent={
            <div>
              <p>
                Для распаковки архивов, в том числе и многотомных, вы можете использовать{" "}
                <a
                  href="https://www.keka.io/ru/"
                  title="Официальный сайт keka"
                >
                  keka
                </a>
                . Он поддерживает кучу различных форматов архивов для распаковки, например{" "}
                <mark className="file">.zip</mark> <mark className="file">.7z</mark>,{" "}
                <mark className="file">.rar</mark>, <mark className="file">.tar</mark> и{" "}
                <mark className="file">.iso</mark>. После установки этой программы вы
                можете распаковать скачанный архив различными способами, как на{" "}
                <a href="https://github.com/aonez/Keka/wiki/Extracting-with-Keka#how-to-extract-supported-files">
                  примерах
                </a>{" "}
                ниже.
              </p>
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
                  alignItems: "center",
                }}
              >
                <ImageFigure
                  caption="Распаковка через контекстное меню"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                  imgTitle="Распаковка через контекстное меню"
                  styleClass="figure_macos-light"
                />
                <ImageFigure
                  caption="Распаковка с помощью открытого окна keka"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-window.gif"
                  imgTitle="Распаковка с помощью открытого окна keka"
                  styleClass="figure_macos-light"
                />
                <ImageFigure
                  caption="Распаковка через иконку keka в Dock-меню"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-dock.gif"
                  imgTitle="Распаковка через иконку keka в Dock-меню"
                  styleClass="figure_macos-light"
                />
              </div>
              <p>
                Также вы можете установить данную утилиту как программу для распаковки
                архивов по умолчанию, установив{" "}
                <a href="https://www.keka.io/defaultapp/">kekaExternalHelper</a>.
                Подробная инструкция расположена в{" "}
                <a href="https://github.com/aonez/Keka/wiki/Default-application">
                  Wiki на GitHub
                </a>
                .
              </p>
            </div>
          }
          windowsContent={
            <div>
              <p>
                Для устройств на <mark>Windows</mark> есть два популярных архиватора,
                которые умеют работать с многотомными архивами. Это{" "}
                <a
                  href="https://www.rarlab.com/download.htm"
                  title="Официальный сайт WinRAR"
                >
                  WinRAR
                </a>{" "}
                и{" "}
                <a
                  href="https://www.7-zip.org/"
                  title="Официальный сайт 7-Zip"
                >
                  7-Zip
                </a>
                . Но для <mark className="file">.rar</mark> файлов всё-таки лучше подойдёт{" "}
                <a
                  href="https://www.rarlab.com/download.htm"
                  title="Официальный сайт WinRAR"
                >
                  WinRAR
                </a>
                . Для распаковки многотомного архива достаточно лишь открыть первую часть
                и начать распаковку, например с помощью <mark>drag&apos;n&apos;drop</mark>{" "}
                в нужное место или кнопки <mark className="ui">Распаковать</mark>.
              </p>
              <YouTubeVideo
                caption="Распаковка многотомного архива"
                link="1OVwQS0uHhk"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="выключить дефендер, отрубить антивирус, ложное срабатывание, хелпер, ошибка 24, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы, операция не была успешно завершена так как файл содержит вирус или потенциально нежелательную программу, operation did not complete successfully because the file contains a virus or potentially unwanted software, 0x800700E1"
        title='"Не удаётся найти "..\install\helper.exe". Проверьте, правильно ли указано имя и повторите попытку", "Обнаружены угрозы", куда-то пропадают файлы плагинов и программ или как отключить Windows Defender и Windows Smartscreen?'
      >
        <p>
          Когда вы устанавливаете пиратские версии программ, часто можно услышать жалобы
          на то, что встроенный <mark className="app">антивирус Windows</mark> удаляет
          файлы, утверждая, что они содержат вирусы и приводят смешные скриншоты про
          реакцию антивируса. Если вы уж встали на путь пиратства - то ложные срабатывания
          встроенного <mark className="app">Windows Defender</mark> должны стать нормой
          для вас.
        </p>
        <AdditionDanger>
          Устанавливая содержимое на ваше устройство из каналов{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> - вы
          принимаете на себя все риски и берёте ответственность за использование
          нелегальных материалов. Мы не можем принимать вбросы по типу{" "}
          <mark className="quote">ой в складе, саду или аетемпе одни вирусы водятся</mark>{" "}
          на полном серьёзе без внятных доказательств. Ложное срабатывание антивируса
          также не является доказательством действительного наличия зловредов в том или
          ином архиве или программе. Если вы доверяете нашим источникам - отключайте
          антивирусное ПО при установке программ и плагинов, либо не предъявляйте
          претензии на основе вашей паранои и оформляйте покупку софта за свои кровные.
        </AdditionDanger>
        <p>
          Обычно антивирусы ложно срабатывают на замену оригинальных файлов, чтобы
          подсунуть псевдо-лицензию и помечают такое действие как{" "}
          <mark>HackTool:Win32/Crack!MTB</mark> или иначе. Ещё антивирус может сожрать
          файл <mark className="file">helper.exe</mark> в репаках от <mark>KpoJluk</mark>,
          который распаковывает дистрибутивы Adobe из-за того, что в нём находится галочка{" "}
          <mark className="ui">реклама</mark> и помечает это как{" "}
          <mark>Contrebrew.A!ml</mark>, <mark>Adware</mark> или иначе. Такое иногда может
          быть и на дистрибутивах от <mark>m0nkrus</mark> или аналогичных репакеров.
        </p>
        <Divider>Отключаем стандартный антивирус на время</Divider>
        <p>
          Если вы готовы взять на себя риски, связанные с установкой программного
          обеспечения неофициальными способами, то для нормальной установки программ,
          плагинов или другого содержимого - необходимо временно отключить встроенный
          антивирус <mark className="app">Windows Defender</mark> или любой другой,
          установленный на вашем устройстве.
        </p>
        <YouTubeVideo
          caption="Как отключить Защитник Windows 11"
          link="blwRAOQUjsM"
        />
        <Divider>Вносим исключения для Windows Defender</Divider>
        <p>
          Если вы не хотите отключать или удалять{" "}
          <mark className="app">Windows Defender</mark> с вашего устройства, то вы можете
          добавить папку <mark className="path">C:\Program Files\Adobe</mark>, а также
          добавить <mark className="path">%Temp%</mark> в список исключений вашего
          антивируса. После настроек исключений - начните установку программы как обычно.
        </p>
        <AdditionInfo>
          Если директория <mark className="path">C:\Program Files\Adobe</mark> отсутствует
          - создайте его сами.
        </AdditionInfo>
        <YouTubeVideo
          caption="Windows Defender - как восстановить файлы и запретить их удаление"
          link="ET94_dv3f8c"
        />
        <Divider>...или удаляем Windows Defender с корнями</Divider>
        <p>
          Если вы доверяете источникам, откуда вы скачиваете и устанавливаете программы,
          или вас бесят ложные срабатывания от{" "}
          <mark className="app">Windows Defender</mark>, то вы можете удалить его навсегда
          с помощью различных утилит.
        </p>
        <ul>
          <li>
            С помощью <mark className="app">Defender Remover</mark>, доступный на{" "}
            <a href="https://github.com/ionuttbara/windows-defender-remover/releases">
              GitHub
            </a>
            .
          </li>
          <li>
            С помощью <mark className="app">Winaero Tweaker</mark>.{" "}
            <a href="https://winaero.com/disable-or-enable-windows-defender-in-windows-10#Disable_Microsoft_Defender_with_Winaero_Tweaker">
              Подробнее...
            </a>
          </li>
        </ul>
        <AdditionWarning>
          <mark className="app">Windows Defender</mark> может вернуться к вам после
          установки крупного обновления, например при переходе с <mark>Windows 11</mark>{" "}
          версии <mark>24H2</mark> на <mark>Windows 11</mark> версии <mark>25H2</mark>.
          Для его удаления и отключения в системе - просто повторите процесс сноса заново.
        </AdditionWarning>
        <Divider>Вынимаем палки из колёс от Windows Smartscreen</Divider>
        <p>
          Иногда при открытии установочного файла вам может помешать предупреждение{" "}
          <mark className="ui">Система Windows защитила ваш компьютер</mark> по центру
          экрана. Его обычно вызывает <mark className="app">Windows Smartscreen</mark> -
          фильтр файлов от <mark>Microsoft</mark>, скачанных с интернета и он часто
          помечает <mark className="file">.exe</mark> файлы как подозрительные. Поэтому и
          приостанавливает запуск исполняемых файлов. Чтобы запустить такой файл, вам
          нужно нажать на <mark className="ui">Подробнее</mark> и на{" "}
          <mark className="ui">Выполнить в любом случае</mark>. Но иногда бывают такие
          случаи, что после нажатия на <mark className="ui">Подробнее</mark> ничего не
          выводится. В таком случае вам нужно отключить{" "}
          <mark className="app">Windows Smartscreen</mark> в параметрах{" "}
          <mark className="app">Защитника Windows</mark>.
        </p>
        <YouTubeVideo
          caption="Как отключить Windows Smartscreen"
          link="HxlxS1Mdyp0"
        />
      </DetailsSummary>
      <DetailsSummary title='Выскакивает "Некоторые установочные файлы были повреждены. Загрузите свежую копию и повторите установку" при открытии репака от KpoJluK'>
        <p>
          Вы не докачали <mark className="file">.exe</mark> файл до конца или прервали его
          скачивание. В таком случае перекачайте файл и попробуйте открыть его еще раз.
          Иногда при скачивании репака или при распаковке архива ваш антивирус может
          вставить палки в колёса. Поэтому при скачивании, распаковки или открытии репака
          вам нужно отключить на время ваш антивирус.
        </p>
        <AdditionInfo>
          Если вы полностью скачали файл с канала{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и вы уверены,
          что проблема не на вашей стороне - сообщите об этом в комментариях под постом.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title='Выскакивает "rsload.net заблокирован в hosts" при открытии репака от KpoJluK'>
        <p>
          Такое бывает, если в вашей системе отсутствует файл{" "}
          <mark className="file">hosts</mark>. Для этого вам нужно создать пустой
          текстовый документ с названием <mark className="file">hosts</mark> без
          расширения <mark className="file">.txt</mark>. Затем нужно открыть этот файл и
          вписать строки, в зависимости от вашей системы{" "}
          <a href="https://support.microsoft.com/ru-ru/topic/%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-hosts-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-c2a43f9d-e176-c6f3-e4ef-3500277a6dae">
            (подробнее на сайте Microsoft)
          </a>
          .
        </p>
        <p>
          Как только вы создали файл <mark className="file">hosts</mark> и внесли нужные
          строки - вам нужно переместить этот файл в путь{" "}
          <mark className="path">%WinDir%\System32\Drivers\etc</mark>. После перемещения
          попробуйте открыть репак снова и начать установку. Такая ошибка должна
          исчезнуть.
        </p>
      </DetailsSummary>
      <DetailsSummary title='Перед установкой репака от KpoJluK, я забыл убрать галочку "Реклама". Как избавиться от последствий?'>
        <p>
          По умолчанию в репаках от <mark>KpoJluk</mark> включена галочка
          &quot;Реклама&quot;, поэтому можно случайно нарваться на установку{" "}
          <mark>me.fo</mark> или <mark>hi.ru</mark> в качестве стартовой страницы браузера
          или на установку <mark className="app">Яндекс.Браузера</mark>. К счастью все эти
          &quot;нововведения&quot; можно удалить через{" "}
          <mark className="app">Панель управления</mark>.
        </p>
        <p>
          В следующий раз не забывайте убирать галочку с параметра &quot;Реклама&quot;.
          Если вы хотите поставить себе автоматический &quot;убиратель галочек&quot; при
          установке, воспользуйтесь программой{" "}
          <a href="https://unchecky.com/">Unchecky</a>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="символьные ссылки, symlink, нестандартное расположение программы, установил на диск D:\, some products require host applications which are not installed on this computer"
        title="Я установил плагин с помощью установщика, но в программе он не появился. Да и зачем люди из каждого угла советуют не менять путь для установки Adobe Photoshop? А если у меня нет места на жёстком диске?"
      >
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="в настоящее время невозможно установить, операционная система не соответствует минимальным требованиям для этой программы установки"
        title="Код ошибки 1, 501, 176, 21 или другие при установке Adobe Photoshop"
      >
        <Divider>Исправляем ошибку 1 или 501</Divider>
        <p>
          Обычно ошибка <mark>1</mark> и <mark>501</mark> возникает из-за того, что у вас
          повреждено приложение <mark className="app">Adobe Creative Cloud Cleaner</mark>{" "}
          или были криво удалены предыдущие программы от <mark>Adobe</mark>. Чтобы
          исправить это - очистите остатки предыдущих установок с помощью{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>{" "}
          или <mark className="app">Revo Uninstaller</mark>.
        </p>
        <Divider>Исправляем ошибку 176</Divider>
        <ContentSwitcher
          macContent={
            <div>
              <p>
                Скорее всего вы до установки более новых версий{" "}
                <mark className="app">Adobe Photoshop</mark> пользовались другими
                программами <mark>Adobe</mark>. Для решения - попробуйте удалить папку{" "}
                <mark className="path">~/Library/Application Support/Adobe/caps</mark>, а
                затем повторить попытку установки нужной программы.
              </p>
            </div>
          }
          windowsContent={
            <div>
              <p>
                Скорее всего вы до установки более новых версий{" "}
                <mark className="app">Adobe Photoshop</mark> пользовались другими
                программами <mark>Adobe</mark>. Для решения - попробуйте удалить папку{" "}
                <mark className="path">
                  C:\Program Files (x86)\Common Files\Adobe\caps
                </mark>
                , а затем повторить попытку установки нужной программы.
              </p>
            </div>
          }
        />
        <Divider>
          Исправляем ошибку 21 - &quot;Операционная система не соответствует минимальным
          требованиям для этой программы установки&quot;
        </Divider>
        <p>
          Скорее всего вы пытаетесь установить{" "}
          <mark className="app">Adobe Photoshop</mark> версии <mark>2024</mark> или новее
          на несвежую сборку <mark>Windows</mark>. В таком случае у вас есть только два
          выхода, по какому пути идти - решать только вам.
        </p>
        <ul>
          <li>
            Если вы хотите установить свежую версию{" "}
            <mark className="app">Adobe Photoshop</mark>, то вам нужно обновить вашу
            систему до <mark>Windows 10</mark> сборки <mark>22H2</mark> или установить{" "}
            <mark>Windows 11</mark>. Обычно в{" "}
            <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
              системных требованиях Photoshop
            </a>{" "}
            указывается минимальная версия операционной системы.
            <AdditionInfo>
              <ul>
                <li>
                  Текущую сборку <mark>Windows</mark> вы можете посмотреть в{" "}
                  <mark className="app">winver</mark>.
                </li>
                <li>
                  Если у вас стоит <mark>Windows 10</mark> редакции <mark>LTSC</mark>, то
                  сборку новее <mark>21H2</mark> вы не сможете установить. Вам нужно будет
                  переустановить систему на редакцию <mark>Home</mark> или{" "}
                  <mark>Pro</mark>.{" "}
                  <i style={{opacity: "0.5"}}>
                    Или поэкспериментировать с редакцией <mark>LTSC для IoT</mark>.
                  </i>
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            Если вы не желаете обновлять или переустанавливать систему, то вы можете
            установить более старую версию <mark className="app">Adobe Photoshop</mark>,
            например <mark>23.6</mark> (2023) или <mark>15.1</mark> (2018). В таком случае
            установщик выполнит установку корректно.
          </li>
        </ul>
        <AdditionInfo>
          Остальные решения по кодам ошибок при установке вы можете найти на{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/troubleshoot-download-install-logs.html">
            сайте Adobe
          </a>{" "}
          или на различных форумах в интернете.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again">
        <p>
          Данная ошибка прямым указывает на то, что на вашем устройстве отсутствует
          программа <mark className="app">Adobe Creative Cloud</mark>. Если вы пытаетесь
          установить какое-либо <mark className="file">.zxp</mark> расширение с помощью{" "}
          <a href="https://zxpinstaller.com/">ZXP Installer от ELEMENTS Storage Media</a>,
          то откажитесь от него в пользу{" "}
          <a href="https://aescripts.com/learn/zxp-installer/">
            ZXP Installer от aescripts
          </a>{" "}
          или ручной распаковки файла в нужное место. И{" "}
          <mark className="app">Adobe Creative Cloud</mark> устанавливать не нужно,
          особенно если вы используете репаки от <mark>KpoJluK</mark> или{" "}
          <mark>m0nkrus</mark>.
        </p>
        <AdditionInfo>
          Более подробную информацию про установку дополнительных материалов вы можете
          прочитать в <a href="#2.1">статье 2.1</a>.
        </AdditionInfo>
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
      <DetailsSummary
        tag="креатив клауд клинер, удаление адоба, очистка от хвостов"
        title="Как я могу полностью удалить Adobe Photoshop и остальные продукты от Adobe на моем устройстве?"
      >
        <p>
          Если вы хотите переустановить или забыть о программах <mark>Adobe</mark> раз и
          навсегда, то вы можете сделать это двумя способами.
        </p>
        <ul>
          <li>
            Через <mark className="app">Adobe Creative Cloud Cleaner Tool</mark>, который
            можно скачать{" "}
            <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
              по этой ссылке
            </a>
            . Это консольная утилита, не требующая установки и не требует дополнительной
            активации. Инструкция по использованию указана на странице рядом с кнопкой для
            загрузки утилиты.
          </li>
          <li>
            В качестве альтернативы вы можете удалить программы через{" "}
            <mark className="app">Revo Uninstaller</mark> или подобный софт, который
            чистит хвосты после удаления. Не все подобные программы могут полностью
            удалить <mark>Adobe</mark>, но смогут удалить большую часть зависимостей. По
            желанию вы можете почистить реестр <mark>Windows</mark> после удаления,
            например с помощью <mark className="app">Vit Registry Fix</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <AdditionInfo>
        Некоторые решения проблем, которые у вас могут возникнуть после установки
        дополнительных материалов или во время использования программы, находятся в общем
        разделе{" "}
        <a
          href="#errors"
          onClick={(e) => {
            e.preventDefault();

            const target = document.getElementById("errors");
            if (target) {
              const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

              const padding = Math.min(
                10 + (14 - 10) * ((window.innerWidth - 320) / (768 - 320)),
                14
              );

              const y =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                padding;
              window.scrollTo({top: y, behavior: "smooth"});
            }
          }}
        >
          Ошибки и предупреждения
        </a>
        .
      </AdditionInfo>
    </div>
  );
};

export default PSInstallProblems;
