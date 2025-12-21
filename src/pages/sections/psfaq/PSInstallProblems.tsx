import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/content/Addition";

import {ContentFigure} from "../../../components/content/ContentFigure";

import DetailsSummary from "../../../components/content/DetailsSummary";

import ContentFilter from "../../../components/content/ContentFilter";

const PSInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <p>
          Обычно установка большинства файлов в{" "}
          <mark className="app">Adobe Photoshop</mark> универсальна, поэтому следуйте
          инструкциям ниже.
        </p>
        <ul>
          <li>
            Если в архиве находится файл <mark className="file">ATN</mark>, то для
            установки вам нужно открыть окно <mark className="ui">Actions</mark> с помощью
            комбинации клавиш <mark className="key">Alt + F9</mark>, нажать на три полоски
            в углу открывшегося окна и нажать на кнопку{" "}
            <mark className="ui">Load Actions</mark>. Далее вам предложат выбрать нужный
            файл. После выбора файла действий оно у вас отобразится в окне{" "}
            <mark className="ui">Actions</mark> и вы сможете применять их в своих
            проектах.
          </li>
          <li>
            Если в архиве находится файл <mark className="file">ABR</mark>, то для
            установки кистей нужно открыть окно кистей в{" "}
            <mark className="ui">Window &gt; Brushes</mark>. В открывшемся окне нажмите на
            три полоски в углу и выберите <mark className="ui">Import Brushes</mark>. В
            проводнике выберите нужный файл с набором кистей.
            {/* FIXME: */}
          </li>
          <li>
            Если в архиве находится файл <mark className="file">PSD</mark>, то такие файлы
            открываются как обычный проект в <mark className="app">Adobe Photoshop</mark>.
            Их также можно импортировать в уже существующий проект через{" "}
            <mark className="ui">File &gt; Import</mark>.
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
                  Если в архиве находится файл <mark className="file">ZXP</mark>, то такие
                  расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">
                    ZXP Installer от aescripts
                  </a>
                  . Прежде чем устанавливать расширение такого формата, убедитесь в том,
                  что ваша версия <mark className="app">Adobe Photoshop</mark> его
                  поддерживает. После того как вы установите расширение, откройте терминал
                  и введите команды ниже, их можно скопировать одним нажатием. Если
                  терминал не выдал никакие ошибки, то вы можете спокойно открыть{" "}
                  <mark className="app">Adobe Photoshop</mark> и проверить
                  работоспособность установленного расширения.
                  <AdditionDanger>
                    Пожалуйста, не используйте{" "}
                    <a href="https://zxpinstaller.com/">
                      ZXP Installer от ELEMENTS Storage Media
                    </a>
                    , если вы используете версии программ <mark>Adobe</mark>, которые
                    отвязаны от приложения <mark className="app">Creative Cloud</mark>.
                    Данный <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам
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
                        <mark className="file">ZXP</mark>, то вы можете переименовать файл{" "}
                        <mark className="file">ZXP</mark> в{" "}
                        <mark className="file">ZIP</mark> и распаковать его как обычный
                        архив. Содержимое свежераспакованного файла нужно поместить в
                        папку{" "}
                        <mark className="path">
                          ~/Library/Application Support/Adobe/CEP/extensions
                        </mark>{" "}
                        и после этого ввести команды, которые были расположены чуть ниже в
                        терминал.
                        <code style={{fontSize: "0.8em"}}>
                          defaults write com.adobe.CSXS.5 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.6 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.7 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.8 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.9 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.10 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.11 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.12 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.13 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.14 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.15 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.16 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.17 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.18 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.19 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.20 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.21 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.22 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.23 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.24 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.25 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.26 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.27 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.28 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.29 PlayerDebugMode 1
                          <br />
                          defaults write com.adobe.CSXS.30 PlayerDebugMode 1
                          <br />
                        </code>
                      </li>
                      <li>
                        Команды выше достаточно ввести один раз, в дальнейшем при
                        установке подобных расширений команды для терминала вводить не
                        нужно. Эти команды включают debug-режим в{" "}
                        <mark className="app">Adobe Photoshop</mark> для корректного
                        открытия и работы сторонних расширений, установленные из просторов
                        интернета.
                      </li>
                      <li>
                        Иногда в архиве может быть уже распакованный{" "}
                        <mark className="file">ZXP</mark> архив. Это можно понять по
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
                  Если в архиве находится файл <mark className="file">ZXP</mark>, то такие
                  расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">
                    ZXP Installer от aescripts
                  </a>
                  . Для установки требуется просто перенести{" "}
                  <mark className="file">ZXP</mark> файл в окно{" "}
                  <mark className="app">ZXP Installer</mark> для установки и следовать
                  указаниям программы. Прежде чем устанавливать расширение такого формата,
                  убедитесь в том, что ваша версия{" "}
                  <mark className="app">Adobe Photoshop</mark> его поддерживает.
                  <AdditionDanger>
                    Пожалуйста, не используйте{" "}
                    <a href="https://zxpinstaller.com/">
                      ZXP Installer от ELEMENTS Storage Media
                    </a>
                    , если вы используете версии программ <mark>Adobe</mark>, которые
                    отвязаны от приложения <mark className="app">Creative Cloud</mark>.
                    Данный <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам
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
                        <mark className="file">ZXP</mark>, то вы можете переименовать файл{" "}
                        <mark className="file">ZXP</mark> в{" "}
                        <mark className="file">ZIP</mark> и распаковать его как обычный
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
                        формата <mark className="file">ZXP</mark>. В дальнейшем при
                        установке подобных расширений файл для внесений записей в реестр
                        системы не нужно снова открывать.{" "}
                        <a
                          download
                          href="files/Enable Extensions Adobe.reg"
                        >
                          REG-патч
                        </a>{" "}
                        включает debug-режим в{" "}
                        <mark className="app">Adobe Photoshop</mark> для корректного
                        открытия и работы сторонних расширений, установленные из просторов
                        интернета.
                      </li>
                      <li>
                        Иногда в архиве может быть уже распакованный{" "}
                        <mark className="file">ZXP</mark> архив. Это можно понять по
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
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика, выключить дефендер, отрубить антивирус, ложное срабатывание, хелпер, ошибка 24, проверьте правильно ли указано имя и повторите попытку, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы, операция не была успешно завершена так как файл содержит вирус или потенциально нежелательную программу, обнаружены угрозы, куда-то пропадают файлы плагинов и программ, operation did not complete successfully because the file contains a virus or potentially unwanted software, 0x800700E1"
        title='"Не удаётся найти "..\install\helper.exe" или как отключить Windows Defender и Windows Smartscreen?'
      >
        <p>
          Обычно антивирусы срабатывают на модификацию оригинальных файлов, удаляя{" "}
          <mark className="word">пролеченные файлы</mark> и классифицирует их как{" "}
          <mark>HackTool:Win32/Crack!MTB</mark> или другими обозначениями. Ещё антивирус
          может удалить файл <mark className="file">helper.exe</mark> в репаках от{" "}
          <mark>KpoJluk</mark>, который распаковывает дистрибутивы <mark>Adobe</mark>{" "}
          из-за того, что в нём находится галочка <mark className="ui">Реклама</mark> и
          помечает это как <mark>Contrebrew.A!ml</mark>, <mark>Adware</mark> или иначе.
          Иногда файлы могут удаляться и из дистрибутивов от <mark>m0nkrus</mark> или
          аналогичных репакеров, а также при распаковке различных плагинов и файлов из
          интернета, даже если они действительно не содержат{" "}
          <mark className="app">вредоносного ПО</mark>.
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
        <AdditionDanger>
          <ul>
            <li>
              Скачиваая и устанавливая содержимое на ваше устройство из каналов{" "}
              <a href="https://t.me/s/designworld">Design World</a>,{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a>{" "}
              или <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> - вы
              принимаете все риски и берёте на себя ответственность за использование
              нелегальных материалов.
            </li>
            <li>
              Администрация вышеупомянутых каналов не может принимать на полном серьёзе
              вбросы по типу{" "}
              <mark className="quote">
                ой в складе, саду или аетемпе одни вирусы водятся
              </mark>{" "}
              без внятных доказательств. Ложное срабатывание антивируса или{" "}
              <mark className="app">VirusTotal</mark> не является доказательством
              действительного наличия зловредов в том или ином архиве или программе.
            </li>
            <li>
              Если вы доверяете нашим источникам - отключайте{" "}
              <mark className="app">антивирусное ПО</mark> при установке программ и
              плагинов, либо не предъявляйте претензии на основе вашей паранои и
              оформляйте покупку софта за свои кровные.
            </li>
          </ul>
        </AdditionDanger>
        <Divider>Вносим исключения для Windows Defender</Divider>
        <p>
          Если вы не хотите отключать или удалять{" "}
          <mark className="app">Windows Defender</mark> с вашего устройства, то вы можете
          добавить папку <mark className="path">C:\Program Files\Adobe</mark>, а также
          добавить <mark className="path">%Temp%</mark> в список исключений вашего
          антивируса. После настройки исключений - начните установку программы как обычно.
        </p>
        <AdditionInfo>
          Если директория <mark className="path">C:\Program Files\Adobe</mark> отсутствует
          - создайте его самостоятельно.
        </AdditionInfo>
        <YouTubeVideo
          caption="Windows Defender - как восстановить файлы и запретить их удаление"
          link="ET94_dv3f8c"
        />
        <Divider>Или удаляем Windows Defender с корнями</Divider>
        <p>
          Если вы доверяете источникам, откуда вы скачиваете и устанавливаете программы,
          или вас бесят ложные срабатывания от{" "}
          <mark className="app">Windows Defender</mark>, то вы можете удалить его навсегда
          с помощью различных утилит.
        </p>
        <ul>
          <li>
            С помощью <mark className="app">DefenderKiller</mark>, который можно загрузить
            из{" "}
            <a href="https://win10tweaker.ru/forum/topic/defenderkiller">
              форума Win10Tweaker
            </a>
            .
          </li>
          <li>
            С помощью <mark className="app">Defender Remover</mark> на{" "}
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
          Для того чтобы от него избавиться - просто повторите процесс удаления.
        </AdditionWarning>
        <Divider>Вынимаем палки из колёс от Windows Smartscreen</Divider>
        <p>
          Иногда при открытии установочного файла вам может помешать предупреждение{" "}
          <mark className="ui">Система Windows защитила ваш компьютер</mark> по центру
          экрана. Его обычно вызывает <mark className="app">Windows Smartscreen</mark> -
          фильтр файлов от <mark>Microsoft</mark>, скачанных с интернета и он часто
          помечает <mark className="file">EXE</mark> файлы как подозрительные. Поэтому и
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
      <DetailsSummary
        tag="в настоящее время невозможно установить, операционная система не соответствует минимальным требованиям для этой программы установки"
        title="Код ошибки 1, 501, 176, 195, 21 или другие при установке Adobe Photoshop"
      >
        <Divider>Исправляем ошибку 1 или 501</Divider>
        <p>
          Обычно ошибка <mark>1</mark> и <mark>501</mark> возникает из-за того, что у вас
          повреждено приложение <mark className="app">Adobe Creative Cloud Cleaner</mark>{" "}
          или были криво удалены предыдущие программы от <mark>Adobe</mark>. Чтобы
          исправить это - очистите остатки предыдущих установок с помощью{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
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
          Исправляем ошибку 195 - &quot;Требуется процессор, поддерживающий инструкции
          Advanced Vector Extensions 2 (AVX2)&quot;
        </Divider>
        <p>
          Если вы столкнулись с этой ошибкой при установке, это означает, что ваш
          процессор не поддерживает инструкции <mark>AVX2</mark>, необходимые для
          последних версий <mark className="app">Adobe Photoshop</mark>. Для решения
          проблемы обновите процессор или установите более старую версию программы,
          например <mark>23.6</mark> или <mark>24.0</mark>.
        </p>
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
            <a href="https://helpx.adobe.com/photoshop/system-requirements.html">
              системных требованиях Adobe Photoshop
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
          <a href="https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html">
            сайте Adobe
          </a>{" "}
          или на различных форумах в интернете.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика"
        title='"Некоторые установочные файлы были повреждены. Загрузите свежую копию и повторите установку"'
      >
        <p>
          Данная ошибка возникает когда вы пытаетесь открыть установщик репака от{" "}
          <mark>KpoJIuK</mark>, а он оказывается битым и не может корректно распаковаться.
          Часто это происходит из-за некорректных действий пользователя или срабатывания
          антивирусной программы на вашем устройстве с <mark>Windows</mark>.
        </p>
        <Divider>Как избавиться от этой ошибки?</Divider>
        <ul>
          <li>
            Убедитесь в том, что вы полностью скачали файл. Довольно часто веб-версия{" "}
            <mark className="app">Telegram</mark> загружает установочные файлы с ошибками.{" "}
            {(() => {
              const userAgent = navigator.userAgent.toLowerCase();

              const isIOS = /iphone|ipad/.test(userAgent);

              const isAndroid = /android/.test(userAgent);

              const isMacOS = /macintosh|mac os x/.test(userAgent);

              if (isIOS) {
                return (
                  <>
                    Чтобы корректно скачивать подобные файлы - рекомендую использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии, которое можно установить из{" "}
                    <a href="https://telegram.org/dl/ios">App Store</a>.
                  </>
                );
              }

              if (isAndroid) {
                return (
                  <>
                    Чтобы корректно скачивать подобные файлы - рекомендую использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии, которое можно установить по{" "}
                    <a href="https://telegram.org/android">этой ссылке</a>.
                  </>
                );
              }

              if (isMacOS) {
                return (
                  <>
                    Чтобы корректно скачивать подобные файлы - рекомендую воспользоваться
                    десктопной версией <mark className="app">Telegram</mark> вместо
                    веб-версии, которую можно скачать по{" "}
                    <a href="https://macos.telegram.org/">этой ссылке</a>.
                  </>
                );
              }

              return (
                <>
                  Чтобы корректно скачивать подобные файлы - рекомендую воспользоваться
                  десктопной версией <mark className="app">Telegram</mark> вместо
                  веб-версии, которую можно скачать по{" "}
                  <a href="https://desktop.telegram.org/">этой ссылке</a>.
                </>
              );
            })()}
            <AdditionInfo>
              Если вы полностью скачали файл с канала{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и вы
              уверены, что проблема не на вашей стороне - сообщите об этом в комментариях
              под постом.
            </AdditionInfo>
          </li>
          <li>
            Если вы скачали репак, запакованный в многотомный архив, которые обычно
            помечаются как <mark className="file">PART1</mark>,{" "}
            <mark className="file">PART2</mark> и так далее по порядку - убедитесь в том,
            что вы скачали все части архива, а также его корректно распаковали.
            <AdditionInfo>
              Чтобы распаковать такой архив - достаточно начать распаковку первой части
              архива, остальные части подхватятся автоматически. Для распаковки таких
              архивов рекомендую воспользоваться <mark className="app">WinRAR</mark>.
            </AdditionInfo>
          </li>
          <li>
            Иногда корректному открытию установщика может мешать включенное{" "}
            <mark className="app">антивирусное ПО</mark>, которое вставляет палки в
            колёса, считая файлы, распаковывающиеся во временную директорию как за вирус.
            В таком случае рекомендуется отключить его, конечно же на свой страх и риск.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика"
        title='"rsload.net заблокирован в hosts" или "The hosts file does not exist or is not accessible"'
      >
        <p>
          Данная ошибка чаще всего возникает из-за того, что в вашей системе по какой-то
          неведомой причине отсутствует файл <mark className="file">hosts</mark>. Чтобы
          решить эту проблему - для начала посмотрите содержимое{" "}
          <mark className="path">%WinDir%\System32\Drivers\etc</mark>.
        </p>
        <p>
          Если в этой директории нет файла <mark className="file">hosts</mark> - создайте
          его самостоятельно, например, с помощью <mark className="app">Блокнота</mark> и
          переместите созданный файл без расширения в папку{" "}
          <mark className="path">%WinDir%\System32\Drivers\etc</mark>.{" "}
          <a href="https://support.microsoft.com/ru-ru/topic/%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-hosts-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-c2a43f9d-e176-c6f3-e4ef-3500277a6dae">
            Подробнее на сайте Microsoft...
          </a>
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика"
        title="Забыл убрать галочку с рекламой при установке репака от KpoJIuK. Как избавиться от последствий?"
      >
        <p>
          По умолчанию в репаках от <mark>KpoJluk</mark> включена галочка{" "}
          <mark className="ui">Реклама</mark>, поэтому можно случайно нарваться на
          установку <mark>me.fo</mark> или <mark>hi.ru</mark> в качестве стартовой
          страницы браузера или на установку <mark className="app">Яндекс.Браузера</mark>.
          К счастью все эти нововведения можно удалить через{" "}
          <mark className="app">Панель управления</mark> или любым удобным для вас
          способом.
        </p>
        <p>
          В следующий раз не забывайте убирать галочку <mark className="ui">Реклама</mark>
          . Если вы хотите сделать так, чтобы у вас автоматически убирались рекламные
          чекбоксы при установке - попробуйте воспользоваться программой{" "}
          <a href="https://unchecky.com/">Unchecky</a>.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again" при использовании ZXP Installer'>
        <p>
          Данная ошибка прямым текстом указывает на то, что на вашем устройстве
          отсутствует программа <mark className="app">Adobe Creative Cloud</mark>. Если вы
          пытаетесь установить какое-либо расширение формата{" "}
          <mark className="file">ZXP</mark> с помощью{" "}
          <a href="https://zxpinstaller.com/">ZXP Installer от ELEMENTS Storage Media</a>,
          то откажитесь от него в пользу{" "}
          <a href="https://aescripts.com/learn/zxp-installer/">
            ZXP Installer от aescripts
          </a>{" "}
          или ручной распаковки расширения в нужное место. И даже{" "}
          <mark className="app">Adobe Creative Cloud</mark> устанавливать не нужно, если
          вы используете репаки от <mark>KpoJluK</mark> или <mark>m0nkrus</mark>.
        </p>
        <AdditionInfo>
          Более подробную информацию про установку дополнительных материалов вы можете
          прочитать в <a href="#2.1">статье 2.1</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        tag="креатив клауд клинер, удаление адоба, очистка от хвостов"
        title="Как полностью удалить Adobe Photoshop и остальные продукты от Adobe на моем устройстве?"
      >
        <p>
          Если вы хотите переустановить или забыть о программах <mark>Adobe</mark> раз и
          навсегда, то вы можете сделать это двумя способами.
        </p>
        <ul>
          <li>
            Через <mark className="app">Adobe Creative Cloud Cleaner Tool</mark>, который
            можно скачать{" "}
            <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
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
