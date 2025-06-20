import React from "react";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/ContentFilter";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {Divider} from "antd";

const AEInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/InstallProblems.tsx" />
      <DetailsSummary
        tag="как установить, куда устанавливать, установка, распаковка, инструкция, плагины, шаблоны, пресеты, скрипты, расширения, пакеты, луты, архивы, zip, rar"
        title="В архив или под записью забыли положить инструкцию для установки. Куда что кидать?"
      >
        <p>
          Обычно установка большинства дополнительных материалов универсальна, но может
          отличаться в зависимости от вашей операционной системы. В этой статье указано
          как установить тот или иной тип файла для{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <AdditionWarning>
          Прежде чем использовать проекты формата <mark className="file">.aep</mark> или
          пакеты для <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> или подобных расширений - убедитесь,
          что архив с проектом или пакетом полностью распакован и его содержимое
          расположено в директории, путь до которой не превышает 256 символов без
          кириллицы!
        </AdditionWarning>
        <ul>
          <li>
            Если в архиве находится файл <mark className="file">.aep</mark>, то такие
            файлы просто импортируются в ваш проект с помощью{" "}
            <mark className="ui">File &gt; Import</mark> или{" "}
            <mark className="key">Ctrl+I</mark> и никуда не устанавливаются.
            <AdditionInfo>
              <ul>
                <li>
                  Прежде чем открывать проект формата <mark className="file">.aep</mark> -
                  полностью распакуйте архив, с помощью архиватора, а затем открывайте
                  проект из уже распакованной папки. Таким образом вы убережёте себя от
                  разноцветного экрана, как при технических работах на телевидении.
                </li>
                <li>
                  Если вы попытаетесь открыть лишь один <mark className="file">.aep</mark>{" "}
                  файл из архива без его полной распаковки, то вы столкнетесь с тем, что{" "}
                  <mark className="app">Adobe After Effects</mark> не сможет найти все
                  необходимые файлы для проекта.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            Если в архиве находится <mark className="file">.atom</mark>, то такие файлы
            устанавливаются путём <mark>drag&apos;n&apos;drop</mark> в окно расширения{" "}
            <mark className="plugin">AtomX</mark>.
            <AdditionWarning>
              <mark className="plugin">AtomX</mark> версии <mark>3.0.9</mark> может не
              импортировать пакеты, выдавая ошибку <mark>Connection Failure</mark>. Для
              решения этой проблемы установите <mark className="plugin">AtomX</mark>{" "}
              версии <mark>3.0.8</mark> и повторите попытку установки.
            </AdditionWarning>
          </li>
          <li>
            Если в архиве находится <mark className="file">.mbr</mark>, то такие файлы
            устанавливаются путём <mark>drag&apos;n&apos;drop</mark> в окно расширения{" "}
            <mark className="plugin">Motion Bro</mark>.
          </li>
        </ul>
        <ContentSwitcher
          macContent={
            <div>
              <AdditionDanger>
                Если в архиве находится папка <mark className="path">_MACOSX</mark>, то в
                нём нет никаких полезных файлов, установщиков и плагинов, которые
                предназначены именно для устройств <mark>macOS</mark>. Это скрытая
                системная папка, которая иногда создаётся операционной системой, в которой
                хранятся метаданные и информация о файловой системе. В нём нет ничего
                интересного для пользователя.
              </AdditionDanger>
              <ul>
                <li>
                  Если вы скачали архив формата <mark className="file">.zip</mark> или{" "}
                  <mark className="file">.rar</mark>, то вам необходимо его распаковать с
                  помощью архиватора для дальнейшей работы с ним. Это можно сделать с
                  помощью <mark className="app">keka</mark> или{" "}
                  <mark className="app">The Unarchiver</mark>.
                  <AdditionInfo>
                    <ul>
                      <li>
                        Загрузить <mark className="app">keka</mark> можно по{" "}
                        <a href="https://www.keka.io/ru/">этой ссылке</a>, а{" "}
                        <mark className="app">The Unarchiver</mark> - по{" "}
                        <a href="https://theunarchiver.com/">этой</a>.
                      </li>
                      <li>
                        Для распаковки многотомного архива, то есть если в названии
                        архивов есть <mark>.part1</mark>, <mark>.part2</mark> и так далее
                        - нужно запустить распаковку только первой части архива, остальные
                        части подхватятся сами. Остальные части архива не нужно трогать
                        без острой необходимости, если вы не знаете что с ними делать.
                      </li>
                      <li>
                        Многотомные архивы создаются для того, чтобы файл можно было
                        спокойно передать, обойдя ограничения максимального размера в{" "}
                        <mark className="app">Telegram</mark> или другого ресурса.
                      </li>
                      <li>
                        Если вы хотите сделать <mark className="app">keka</mark>{" "}
                        архиватором по умолчанию, то вам нужно будет установить{" "}
                        <a href="https://www.keka.io/defaultapp/">kekaExternalHelper</a>.
                        Подробная инструкция расположена в{" "}
                        <a href="https://github.com/aonez/Keka/wiki/Default-application">
                          Wiki на GitHub
                        </a>
                        .
                      </li>
                    </ul>
                  </AdditionInfo>
                  <ImageFigure
                    caption="Распаковка через контекстное меню"
                    imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                    imgTitle="Распаковка через контекстное меню"
                    styleClass="figure_macos-light"
                  />
                </li>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">.dmg</mark>, <mark className="file">.app</mark>{" "}
                  или <mark className="file">.pkg</mark>, то обычно в нём содержится
                  автоматический установщик плагина. Для установки таких файлов нужно
                  следовать инструкциям установщика, например перенести файл из одного
                  места в другое и так далее.
                  <AdditionInfo>
                    <ul>
                      <li>
                        По умолчанию в <mark>macOS</mark> вы не сможете без танцев с
                        бубном открыть установщики от неподтверждённых разработчиков.
                        Чтобы обойти этот запрет - нужно изменить настройки безопасности
                        операционной системы. Подробнее об этом вы можете прочитать на{" "}
                        <a href="https://support.apple.com/ru-ru/102445">сайте Apple</a> и
                        на{" "}
                        <a href="https://www.iphones.ru/iNotes/pochemu-mac-ne-razreshaet-ustanavlivat-prilozheniya-ne-iz-app-store-05-15-2020">
                          iPhones.ru
                        </a>
                        .
                      </li>
                      <li>
                        Не все установщики могут открыться на вашей версии{" "}
                        <mark>macOS</mark> и вы можете столкнуться с ошибкой{" "}
                        <mark className="ui">Не удаётся открыть программу AppName</mark>.
                        Для решения проблемы достаточно найти более свежий установщик или
                        откатить при желании и возможности ваше устройство на более старую
                        версию <mark>macOS</mark>.
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.plugin</mark>, то
                  такие плагины обычно распаковываются в общую папку плагинов{" "}
                  <mark className="path">
                    ~/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        Обычно установленные плагины находятся в окне{" "}
                        <mark className="ui">Effects & Presets</mark> и могут вызываться с
                        помощью <mark className="plugin">FX Console</mark>. В редких
                        случаях плагин может в программе вызываться из другого места -
                        читайте приложенную документацию к устанавливаемому плагину.
                      </li>
                      <li>
                        Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                        <mark className="app">Adobe After Effects</mark> и наоборот.
                        Уточняйте в документации устанавливаемого плагина, для каких
                        версий <mark className="app">Adobe After Effects</mark> он
                        предназначен.
                      </li>
                    </ul>
                  </AdditionInfo>
                  <AdditionDanger>
                    Плагины формата <mark className="file">.aex</mark> не подходят для
                    устройств на <mark>macOS</mark>, так как такие файлы предназначены для
                    устройств на <mark>Windows</mark>.
                  </AdditionDanger>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.ffx</mark>, то
                  такие пресеты обычно распаковываются в стандартную папку пресетов -{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Presets
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        Установленные пресеты будут находиться в окне{" "}
                        <mark className="ui">Effects & Presets</mark> в папке{" "}
                        <mark className="path">Animation Presets</mark> и могут вызываться
                        с помощью <mark className="plugin">FX Console</mark>.
                      </li>
                      <li>
                        В папке с пресетами вы можете создать свою собственную папку со
                        своим именем или расположить скачанные пресеты в уже существующие.
                      </li>
                      <li>
                        В качестве альтернативы вы можете распаковать пресеты в папку
                        пользователя{" "}
                        <mark className="path">
                          ~/Documents/Adobe/After Effects 20XX/User Presets/
                        </mark>
                        .
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.jsx</mark>, то
                  такие скрипты распаковываются в стандартную папку скриптов -{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Scripts
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        <mark className="file">.jsx</mark> скрипты обычно появляются в
                        контекстном меню <mark className="ui">File &gt; Scripts</mark>.
                      </li>
                      <li>
                        В качестве альтернативы вы можете установить скрипт с помощью{" "}
                        <mark className="ui">
                          File &gt; Scripts &gt; Install Script File
                        </mark>
                        . В открывшемся окне укажите путь до нужного скрипта.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а запустить его только
                        один раз, то вы можете нажать на{" "}
                        <mark className="ui">Run Script File</mark> в{" "}
                        <mark className="ui">File &gt; Scripts</mark>. В открывшемся окне
                        нужно указать путь до нужного скрипта и он будет запущен до
                        перезапуска программы или действия закрытия окна пользователем.
                      </li>
                      <li>
                        Если вы хотите закрепить окно <mark className="file">.jsx</mark>{" "}
                        скрипта в рабочее пространство, то вы можете перенести его в
                        дочернюю папку <mark className="ui">Scripts UI Panels</mark>.
                        Таким образом полный путь должен быть{" "}
                        <mark className="path">
                          ~/Library/Applications/Adobe After Effects 20XX/Scripts/Script
                          UI Panels
                        </mark>
                        . После этого - нужный вам скрипт перенесётся в{" "}
                        <mark className="ui">Window</mark> и будет располагаться в самом
                        низу списка, а также появится возможность прикрепить его к
                        рабочему пространству.
                        <AdditionWarning>
                          Для прикрепления окна в рабочее пространство программы -
                          держитесь за заголовок с названием скрипта, создаваемый
                          программой, а не вашей операционной системы, то есть чуть ниже{" "}
                          фрейма, создаваемого <mark>macOS</mark>.
                        </AdditionWarning>
                      </li>
                      <li>
                        При желании, вы можете назначить комбинацию клавиш для открытия
                        нужного <mark className="file">.jsx</mark> скрипта в{" "}
                        <mark className="ui">Keyboard Shortcuts</mark>.
                        <AdditionWarning>
                          При перемещении <mark className="ui">.jsx</mark> скрипта в
                          дочернюю папку <mark className="path">Script UI Panels</mark>,
                          вы не сможете открывать нужный скрипт, задав ему комбинацию
                          клавиш стандартными средствами. Зато сможете закрепить его в
                          окне вашего рабочего пространства.
                        </AdditionWarning>
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится <mark className="file">.jsxbin</mark> файл, то
                  такие скрипты распаковываются в стандартную папку Script UI Panels -{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Scripts/Script UI
                    Panels
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        <mark className="file">.jsxbin</mark> скрипты обычно появляются в
                        контекстном меню <mark className="ui">Window</mark> в самом конце
                        списка.
                      </li>
                      <li>
                        В качестве альтернативы вы можете установить скрипт с помощью{" "}
                        <mark className="ui">
                          File &gt; Scripts &gt; Install ScriptUI Panel
                        </mark>
                        . В открывшемся окне укажите путь до нужного скрипта.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а запустить его только
                        один раз, то вы можете нажать на{" "}
                        <mark className="ui">Run Script File</mark> в{" "}
                        <mark className="ui">File &gt; Scripts</mark>. В открывшемся окне
                        нужно указать путь до нужного скрипта и он будет запущен до
                        перезапуска программы или действия закрытия окна пользователем.
                      </li>
                      <li>
                        Для прикрепления окна в рабочее пространство программы - держитесь
                        за заголовок с названием скрипта, создаваемый программой, а не
                        вашей операционной системы, то есть чуть ниже фрейма, создаваемого{" "}
                        <mark>Windows</mark>.
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
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
                        Расширения формата <mark className="file">.zxp</mark> обычно
                        появляются в окне{" "}
                        <mark className="ui">Window &gt; Extensions</mark>.
                      </li>
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
                      <li>
                        Если расширение просит включить разрешение на запись файлов и
                        доступ в интернет - перейдите в{" "}
                        <mark className="ui">
                          Edit &gt; Preferences &gt; Scripting & Expressions
                        </mark>{" "}
                        и установите чекбокс у параметра{" "}
                        <mark className="ui">
                          Allow Scripts to Write Files and Access Network
                        </mark>
                        .
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.cube</mark>,{" "}
                  <mark className="file">.itx</mark>, <mark className="file">.look</mark>{" "}
                  или <mark className="file">.lut</mark>, то для распаковки таких файлов
                  вам нужно перейти в{" "}
                  <mark className="path">~/Library/Applications/After Effects 20XX</mark>,
                  затем нажать <mark className="key">ПКМ</mark> по{" "}
                  <mark className="app">Adobe After Effects 20XX</mark> и выбрать{" "}
                  <mark className="ui">Показать содержимое пакета</mark>. После открытия
                  содержимого перейдите в{" "}
                  <mark className="path">Contents/Lumetri/LUTs/Creative</mark> и
                  переместите ваши файлы. Затем эти файлы для цветокоррекции вы можете
                  использовать в эффекте <mark className="plugin">Lumetri Color</mark> в
                  вкладке <mark className="ui">Creative</mark>.
                </li>
                <li>
                  Если в архиве находятся шрифты формата{" "}
                  <mark className="file">.ttf</mark> или{" "}
                  <mark className="file">.otf</mark>, то такие шрифты не распаковываются в
                  папку с программой. Их нужно установить в систему, это можно сделать
                  двумя способами.
                  <ul>
                    <li>
                      Запустите приложение <mark className="app">Шрифты</mark>, затем
                      выберите нужные файлы шрифтов в <mark className="app">Finder</mark>{" "}
                      и просто перетащите их в открытое окно программы.
                    </li>
                    <li>
                      Дважды кликните на файл шрифта в <mark className="app">Finder</mark>{" "}
                      и в появившемся окне нажмите кнопку{" "}
                      <mark className="ui">Установить</mark>.
                    </li>
                  </ul>
                  Также при необходимости вы можете воспользоваться шрифтовыми менеджерами
                  для организации и активации нужных шрифтов только при необходимости,
                  например <mark className="app">FontBase</mark>,{" "}
                  <mark className="app">Typeface</mark> или{" "}
                  <mark className="app">RightFont</mark>.
                </li>
              </ul>
            </div>
          }
          windowsContent={
            <div>
              <ul>
                <li>
                  Если вы скачали архив формата <mark className="file">.zip</mark> или{" "}
                  <mark className="file">.rar</mark>, то вам необходимо его распаковать с
                  помощью архиватора для дальнейшей работы с ним. Это можно сделать с
                  помощью <mark className="app">WinRAR</mark>.
                  <AdditionInfo>
                    <ul>
                      <li>
                        <mark className="app">WinRAR</mark> для устройств на{" "}
                        <mark>Windows</mark> можно загрузить по{" "}
                        <a href="https://www.rarlab.com/download.htm">этой ссылке</a>.{" "}
                        <i style={{opacity: 0.5, fontSize: "0.85em"}}>
                          Надеюсь, что вы в курсе как обойти 40-дневное
                          &quot;ограничение&quot;
                        </i>
                        .
                      </li>
                      <li>
                        Для распаковки многотомного архива, то есть если в названии
                        архивов есть <mark>.part1</mark>, <mark>.part2</mark> и так далее
                        - нужно запустить распаковку только первой части архива, нажав{" "}
                        <mark className="key">ПКМ</mark> по файлу и выбрать в контекстном
                        меню <mark className="ui">WinRAR &gt; Распаковать в...</mark>.
                        Остальные части подхватятся сами и их не нужно трогать без острой
                        необходимости, если вы не знаете что с ними делать.
                      </li>
                      <li>
                        Многотомные архивы создаются для того, чтобы файл можно было
                        спокойно передать, обойдя ограничения максимального размера в{" "}
                        <mark className="app">Telegram</mark> или другого ресурса.
                      </li>
                    </ul>
                  </AdditionInfo>
                  <YouTubeVideo
                    caption="Распаковка многотомного архива"
                    link="1OVwQS0uHhk"
                  />
                </li>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">.exe</mark>, то обычно в нём содержится
                  автоматический установщик плагина. Если в записи указано, что данный
                  установщик является репаком - в таком случае после его установки плагин
                  будет уже активирован, никаких лишних телодвижений после установки
                  делать не надо.
                  <AdditionWarning>
                    <ul>
                      <li>
                        При использовании установщиков убедитесь в том, что у вас{" "}
                        <mark className="app">Adobe After Effects</mark> установлен в
                        стандартном расположении{" "}
                        <mark className="path">C:\Program Files\Adobe\</mark>, а не в
                        другом месте или разделе. В противном случае устанавливаемый
                        плагин может установиться в другом месте и может не отобразиться и
                        корректно работать в программе.
                      </li>
                      <li>
                        Перед установкой плагинов с помощью установщика - закройте все
                        открытые инстанции{" "}
                        <mark className="app">Adobe After Effects</mark> для корректной
                        установки.
                      </li>
                    </ul>
                  </AdditionWarning>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.aex</mark>, то
                  такие плагины обычно распаковываются в общую папку плагинов -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        Обычно установленные плагины находятся в окне{" "}
                        <mark className="ui">Effects & Presets</mark> и могут вызываться с
                        помощью <mark className="plugin">FX Console</mark>. В редких
                        случаях плагин может в программе вызываться из другого места -
                        читайте приложенную документацию к устанавливаемому плагину.
                      </li>
                      <li>
                        Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                        <mark className="app">Adobe After Effects</mark> и наоборот.
                        Уточняйте в документации устанавливаемого плагина, для каких
                        версий <mark className="app">Adobe After Effects</mark> он
                        предназначен.
                      </li>
                    </ul>
                  </AdditionInfo>
                  <AdditionDanger>
                    Плагины формата <mark className="file">.plugin</mark> не подходят для
                    устройств на <mark>Windows</mark>, так как такие файлы предназначены
                    для устройств на <mark>macOS</mark>.
                  </AdditionDanger>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.ffx</mark>, то
                  такие пресеты обычно распаковываются в стандартную папку пресетов -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Presets
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        Установленные пресеты будут находиться в окне{" "}
                        <mark className="ui">Effects & Presets</mark> в папке{" "}
                        <mark className="path">Animation Presets</mark> и могут вызываться
                        с помощью <mark className="plugin">FX Console</mark>.
                      </li>
                      <li>
                        В папке с пресетами вы можете создать свою собственную папку со
                        своим именем или расположить скачанные пресеты в уже существующие.
                      </li>
                      <li>
                        Если у вас нет доступа для записи файлов в системных директориях,
                        то вы можете распаковать пресеты в папку пользователя{" "}
                        <mark className="path">
                          C:\Users\%UserName%\Documents\Adobe\After Effects 20XX\User
                          Presets
                        </mark>
                        .
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.jsx</mark>, то
                  такие скрипты распаковываются в стандартную папку скриптов -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        <mark className="file">.jsx</mark> скрипты обычно появляются в
                        контекстном меню <mark className="ui">File &gt; Scripts</mark>.
                      </li>
                      <li>
                        В качестве альтернативы вы можете установить скрипт с помощью{" "}
                        <mark className="ui">
                          File &gt; Scripts &gt; Install Script File
                        </mark>
                        . В открывшемся окне укажите путь до нужного скрипта.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а запустить его только
                        один раз, то вы можете нажать на{" "}
                        <mark className="ui">Run Script File</mark> в{" "}
                        <mark className="ui">File &gt; Scripts</mark>. В открывшемся окне
                        нужно указать путь до нужного скрипта и он будет запущен до
                        перезапуска программы или действия закрытия окна пользователем.
                      </li>
                      <li>
                        Если вы хотите закрепить окно <mark className="file">.jsx</mark>{" "}
                        скрипта в рабочее пространство, то вы можете перенести его в
                        дочернюю папку <mark className="ui">Scripts UI Panels</mark>.
                        Таким образом полный путь должен быть{" "}
                        <mark className="path">
                          C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                          Files\Scripts\Script UI Panels
                        </mark>
                        . После этого - нужный вам скрипт перенесётся в{" "}
                        <mark className="ui">Window</mark> и будет располагаться в самом
                        низу списка, а также появится возможность прикрепить его к
                        рабочему пространству.
                        <AdditionWarning>
                          Для прикрепления окна в рабочее пространство программы -
                          держитесь за заголовок с названием скрипта, создаваемый
                          программой, а не вашей операционной системы, то есть чуть ниже
                          фрейма, создаваемого <mark>Windows</mark>.
                        </AdditionWarning>
                      </li>
                      <li>
                        При желании, вы можете назначить комбинацию клавиш для открытия
                        нужного <mark className="file">.jsx</mark> скрипта в{" "}
                        <mark className="ui">Keyboard Shortcuts</mark>.
                        <AdditionWarning>
                          При перемещении <mark className="ui">.jsx</mark> скрипта в
                          дочернюю папку <mark className="path">Script UI Panels</mark>,
                          вы не сможете открывать нужный скрипт, задав ему комбинацию
                          клавиш стандартными средствами. Зато сможете закрепить его в
                          окне вашего рабочего пространства.
                        </AdditionWarning>
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится <mark className="file">.jsxbin</mark> файл, то
                  такие скрипты распаковываются в стандартную папку Script UI Panels -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Scripts\Script UI Panels
                  </mark>
                  .
                  <AdditionInfo>
                    <ul>
                      <li>
                        <mark className="file">.jsxbin</mark> скрипты обычно появляются в
                        контекстном меню <mark className="ui">Window</mark> в самом конце
                        списка.
                      </li>
                      <li>
                        В качестве альтернативы вы можете установить скрипт с помощью{" "}
                        <mark className="ui">
                          File &gt; Scripts &gt; Install ScriptUI Panel
                        </mark>
                        . В открывшемся окне укажите путь до нужного скрипта.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а запустить его только
                        один раз, то вы можете нажать на{" "}
                        <mark className="ui">Run Script File</mark> в{" "}
                        <mark className="ui">File &gt; Scripts</mark>. В открывшемся окне
                        нужно указать путь до нужного скрипта и он будет запущен до
                        перезапуска программы или действия закрытия окна пользователем.
                      </li>
                      <li>
                        Для прикрепления окна в рабочее пространство программы - держитесь
                        за заголовок с названием скрипта, создаваемый программой, а не
                        вашей операционной системы, то есть чуть ниже фрейма, создаваемого{" "}
                        <mark>Windows</mark>.
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
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
                      <li>
                        Если расширение просит включить разрешение на запись файлов и
                        доступ в интернет - перейдите в{" "}
                        <mark className="ui">
                          Edit &gt; Preferences &gt; Scripting & Expressions
                        </mark>{" "}
                        и установите чекбокс у параметра{" "}
                        <mark className="ui">
                          Allow Scripts to Write Files and Access Network
                        </mark>
                        .
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.cube</mark>,{" "}
                  <mark className="file">.itx</mark>, <mark className="file">.look</mark>{" "}
                  или <mark className="file">.lut</mark>, то такие файлы распаковываются в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Lumetri\LUTs\Creative
                  </mark>{" "}
                  и затем используются с эффектом{" "}
                  <mark className="plugin">Lumetri Color</mark> в вкладке{" "}
                  <mark className="ui">Creative</mark>.
                </li>
                <li>
                  Если в архиве находятся шрифты формата{" "}
                  <mark className="file">.ttf</mark> или{" "}
                  <mark className="file">.otf</mark>, то такие шрифты не распаковываются в
                  папку с программой. Их нужно установить в саму систему, это можно
                  сделать тремя способами.
                  <ul>
                    <li>
                      Откройте файл шрифта двойным нажатием и в открывшемся окне нажмите в
                      левом верхнем углу кнопку <mark className="ui">Установить</mark>.
                    </li>
                    <li>
                      Если у вас есть целый набор шрифтов и вы не хотите открывать каждый
                      файл по отдельности - просто распакуйте архив с шрифтами в любую
                      папку. После этого выделите нужные шрифты в распакованной папке,
                      нажмите <mark className="key">ПКМ</mark> и нажмите в контекстном
                      меню кнопку <mark className="ui">Установить</mark> или{" "}
                      <mark className="ui">Установить для всех пользователей</mark>.
                    </li>
                    <li>
                      Распакуйте файлы шрифтов в{" "}
                      <mark className="path">C:\Windows\Fonts</mark>. Это позволит
                      установить шрифты для всех пользователей системы.
                      <AdditionInfo>
                        Если у вас нет прав администратора, то вы можете распаковать файлы
                        шрифтов в папку{" "}
                        <mark className="path">
                          %LocalAppData%\Microsoft\Windows\Fonts
                        </mark>
                        . В таком случае шрифты будут установлены только для вашей учётной
                        записи.
                      </AdditionInfo>
                    </li>
                  </ul>
                  Также при необходимости вы можете воспользоваться шрифтовыми менеджерами
                  для организации и активации нужных шрифтов только при необходимости,
                  например <mark className="app">Corel Font Manager</mark>,{" "}
                  <mark className="app">FontExpert</mark> или{" "}
                  <mark className="app">FontBase</mark>.
                </li>
              </ul>
            </div>
          }
        />
        <AdditionInfo>
          Если у вас остались вопросы или до сих пор сталкиваетесь с проблемами при
          установке - обратитесь к нам в{" "}
          <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </AdditionInfo>
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
        title="Я установил плагин с помощью установщика, но в программе он не появился. Да и зачем люди из каждого угла советуют не менять путь для установки Adobe After Effects? А если у меня нет места на жёстком диске?"
      >
        <AdditionInfo>
          Вся информация в этой статье относится к устройствам с установленной
          операционной системой <mark>Windows</mark>.
        </AdditionInfo>
        <p>
          Часто в различных чатах возникает вопрос о проблемах при установке того или
          иного стороннего плагина или расширения, даже если тот, кто пишет, полностью
          следует всем инструкциям, но забыл об одной маленькой детали. У него{" "}
          <mark className="app">Adobe After Effects</mark> установлен на другом разделе.
          Почему эта мелочь является одной из главных проблем при установке плагинов?
        </p>
        <ul>
          <li>
            Изначальная установка <mark className="app">Adobe After Effects</mark> в
            нестандартную директорию, например на <mark className="path">D:\MyApps</mark>,
            может привести к проблемам при установке сторонних плагинов. Большинство
            установочных пакетов, таких как <mark className="plugin">Red Giant</mark> или{" "}
            <mark className="plugin">FX Console</mark>, не смогут корректно установиться в
            нужное место. Это происходит из-за того, что большинство установщиков плагинов
            запрограммированы на распаковку в стандартные директории Adobe и не проверяют
            действительное расположение <mark className="app">Adobe After Effects</mark> в
            системе. Когда <mark className="app">Adobe After Effects</mark> находится в
            нестандартном месте, плагины не могут быть установлены корректно или
            обнаружены установщиком, даже если программа установлена в системе.
            <AdditionInfo>
              Особенно это касается комплексных плагинов вроде{" "}
              <mark className="plugin">Red Giant</mark> и{" "}
              <mark className="plugin">Universe</mark>, которые определяют целевые
              директории установки исходя из наличия поддерживающих хостов в системе. Если
              у вас установлен монтажный хост, который поддерживает формат плагинов{" "}
              <mark>OpenFX</mark>, например <mark className="app">Davinci Resolve</mark>,
              и он стоит на стандартной директории, а{" "}
              <mark className="app">Adobe After Effects</mark> стоит на другой, то
              установщик распакует файлы только для <mark>OFX-хоста</mark>, а для{" "}
              <mark className="app">Adobe After Effects</mark> - ничего, потому что он не
              обнаружил с <mark className="app">Adobe After Effects</mark> в стандартной
              директории.
            </AdditionInfo>
          </li>
          <li>
            Даже при установке скриптов, расширений и пресетов в стандартные директории,
            указанные в <a href="#2.1">универсальных инструкциях</a> - тоже существует
            вероятность того, что <mark className="app">Adobe After Effects</mark> их не
            обнаружит.
          </li>
          <li>
            Если вы устанавливаете <mark className="app">Adobe After Effects</mark>,{" "}
            <mark className="app">Adobe Media Encoder</mark> и{" "}
            <mark className="app">Adobe Premiere Pro</mark> в нестандартные директории, то
            это может вызвать проблемы с взаимодействием друг с другом. Программы могут не
            обнаружить друг друга, даже если они установлены на вашем устройстве.
            Например, при попытке экспортировать композицию из{" "}
            <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark>, первая программа может
            сообщить об отсутствии <mark className="app">Adobe Media Encoder</mark>,
            несмотря на его наличие в системе.
          </li>
        </ul>
        <p>
          Чтобы избавиться от подобных проблем - вам нужно переустановить{" "}
          <mark className="app">Adobe After Effects</mark> по-человечески, то есть не
          менять местоположение программы при установке. Но, к сожалению, часто в качестве
          аргумента на вопрос{" "}
          <mark className="quote">
            А зачем вы собственно установили After Effects на другой раздел?
          </mark>{" "}
          мы слышим{" "}
          <mark className="quote">
            А у меня на разделе, где Windows установлена - мало места!
          </mark>{" "}
          и пользователь, у которого проблемы с установкой - не хочет идти на верный путь.
          Но и для таких случаев есть хорошие новости - в этой статье мы рассмотрим
          варианты как навести порядок в вашей системе на <mark>Windows</mark> или
          корректно перенести программы на другой раздел.
        </p>
        <Divider>Очищаем системный раздел от мусора</Divider>
        <p>
          Если вы согласны переустановить <mark className="app">Adobe After Effects</mark>{" "}
          на стандартный раздел, но у вас мало места, то попробуйте почистить систему от
          разного хлама. Это можно сделать разными способами, например стандартными
          средствами, сторонними программами или руками, предварительно проанализировав
          всю систему. После очистки системы от мусора - начните процесс переустановки{" "}
          <mark className="app">Adobe After Effects</mark> на стандартное место и
          наслаждайтесь корректной работой сторонних плагинов.
        </p>
        <ul>
          <li>
            Систему от мусора стандартными средствами можно почистить с помощью служебной
            программы <mark className="code">cleanmgr.exe</mark>, которая может
            открываться из окна <mark className="app">Выполнить</mark>. В нём вам нужно
            указать нужный раздел с системой и нажать на <mark className="ui">ОК</mark>.
            Данная утилита проанализирует систему от накопившихся обновлений{" "}
            <mark>Windows</mark>, от старых точек восстановления и хлама, который можно
            выборочно удалить.
          </li>
          <li>
            Автоматически почистить систему от мусора можно и с помощью сторонних
            программ, по типу <mark className="app">Auslogics BoostSpeed</mark>,{" "}
            <mark className="app">Reg Organizer</mark>,{" "}
            <mark className="app">Dism++</mark>,{" "}
            <mark className="app">Kerish Doctor</mark> или{" "}
            <mark className="app">CCleaner</mark>.
            <AdditionDanger>
              Используйте подобные утилиты с осторожностью, а то вдруг удалите нужные вам
              файлы. Данные утилиты предназначены для чуть более продвинутых
              пользователей, которые понимают, что делают.
            </AdditionDanger>
          </li>
          <li>
            Если вы хотите проанализировать ваш системный раздел и посмотреть, какая
            директория занимает психологически слишком много места, то вам помогут
            программы, по типу <mark className="app">WizTree</mark>,{" "}
            <mark className="app">WinDirStat</mark> или{" "}
            <mark className="app">JDiskReport</mark>. С помощью них вы можете
            просканировать все директории и узнать размер каждой папки или файла и, при
            необходимости, удалить ненужное.
          </li>
        </ul>
        <Divider>Сжимаем пространство на диске</Divider>
        <p>
          В <mark>Windows</mark> есть функция сжатия операционной системы или вообще
          целого раздела. Она может помочь в тех случаях, когда в вашем устройстве
          установлен накопитель с слишком малым объемом памяти и его не хватает даже для
          базовых программ и утилит. Этой функцией можно воспользоваться с помощью{" "}
          <mark className="app">командной строки Windows</mark> или{" "}
          <mark className="app">PowerShell</mark>.
        </p>
        <AdditionDanger>
          Используйте функцию сжатия файлов с осторожностью и только если у вашего
          устройства имеется производительный процессор и быстрый накопитель.
          Использование <mark className="word">NTFS-сжатия</mark> на медленном накопителе
          может привести к заторможенной работе системы в целом.
        </AdditionDanger>
        <ul>
          <li>
            Чтобы сжать только операционную систему, воспользуйтесь командой{" "}
            <mark className="code">compact /compactos:always</mark> и дождитесь окончания
            операции. Обычно сжатие системы освобождает примерно <mark>3-5 ГБ</mark>{" "}
            дискового пространства, которое можно занять установкой{" "}
            <mark className="app">Adobe After Effects</mark>.
            <AdditionInfo>
              Текущее состояние сжатия <mark>Windows</mark> вы можете узнать с помощью
              команды <mark className="code">compact /compactos:query</mark>
            </AdditionInfo>
          </li>
          <li>
            Чтобы сжать нужный раздел, то нам нужно воспользоваться командой{" "}
            <mark className="code">compact /s /c /a /i /f /exe:lzx</mark>, предварительно
            перейдя в нужный раздел с помощью команды <mark className="code">cd</mark>.
            <AdditionWarning>
              Если вы начнёте сжатие в корневом каталоге, то есть риск нарваться на синий
              экран смерти. Вместо этого лучше перейдите в каждый раздел из корневого
              каталога, а затем начните сжатие с помощью ранее упомянутой команды. Она
              начнёт сжатие файлов в текущем и вложенных каталогах.
            </AdditionWarning>
          </li>
        </ul>
        <Divider>Разбираемся с дисковыми разделами</Divider>
        <p>
          Иногда при покупке нового ноутбука или устройства на <mark>Windows</mark> с рук,
          на нём уже зачем-то размечен один диск на два раздела - системный и
          пользовательский, то есть поделён на <mark className="path">C:\</mark> и{" "}
          <mark className="path">D:\</mark>. Диск делится типа для удобства, но на самом
          деле деление одного диска на несколько разделов может привести к уменьшению его
          производительности, особенно если диск один и на нём установлена операционная
          система. Также разделы зачем-то делят в соотношении примерно{" "}
          <mark>30 на системный : 70 на пользовательский</mark>, что часто приводит к
          ситуациям когда пользователь устанавливает программы не на стандартный раздел, а
          потом получает проблемы при установке дополнительных материалов.
        </p>
        <p>
          Я бы посоветовал разобраться с вашими разделами и при необходимости - объединить
          их в один. Для просмотра разделов ваших дисков вы можете воспользоваться
          стандартной утилитой <mark className="app">diskmgmt.msc</mark>, который можно
          открыть с помощью окна <mark className="app">Выполнить</mark> через{" "}
          <mark className="key">Win + R</mark>. Для объединения разделов нужно перенести
          файлы из одного раздела в другой, то есть из <mark className="path">D:\</mark> в{" "}
          <mark className="path">C:\</mark>, а затем ненужный раздел удалить и за счёт
          освободившегося места - расширить системный.
        </p>
        <AdditionInfo>
          Подробнее про объединение разделов стандартными и сторонними средствами написано
          в статье на{" "}
          <a href="https://remontka.pro/merge-disk-partitions-windows/">remontka.pro</a>.
        </AdditionInfo>
        <Divider>
          Переносим программы на другой раздел с помощью символьных ссылок
        </Divider>
        <AdditionDanger>
          Используйте функцию переноса программ с помощью символьных ссылок{" "}
          <b>
            <u>только в крайнем случае</u>
          </b>
          , когда у вас нет возможности разобраться с разделами или почистить систему от
          мусора. Стабильная работа программ при использовании символьных ссылок{" "}
          <b>
            <u>не гарантируется!</u>
          </b>
        </AdditionDanger>
        <p>
          Если вы действительно хотите перенести программы на другой раздел, то вы можете
          воспользоваться функцией символьных ссылок, или же{" "}
          <mark className="app">Symlink</mark> в операционной системе <mark>Windows</mark>
          . С помощью неё можно заставить программы, находящиеся в другой директории,
          думать как будто они установлены в месте по умолчанию.
        </p>
        <AdditionInfo>
          Если вы боитесь командной строки, то вы можете воспользоваться различными
          инструментами с интерфейсом для создания символьных ссылок, например{" "}
          <a href="https://github.com/arnobpl/SymlinkCreator">Symlink Creator</a> или{" "}
          <a href="https://sourceforge.net/projects/symlink-manager/">Symlink Manager</a>.
        </AdditionInfo>
        <YouTubeVideo
          caption="Как сделать символическую ссылку в Windows на файл и папку"
          link="VaupaCuluJA"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="не подключается dynamic link, динамик линк, aegp plugin aedynamiclinkserver: adobe media encoder is not installed, please download and install it to use this feature, failed to connect to adobe media encoder, медиа енкодер"
        title="Установил Adobe After Effects и Adobe Media Encoder, но они почему-то не видят друг друга"
      >
        <p>
          Функция <mark className="plugin">Dynamic Link</mark> позволяет синхронизировать
          композиции из <mark className="app">Adobe After Effects</mark> и очередь рендера
          в <mark className="app">Adobe Media Encoder</mark>. Но не всегда их получается
          подружить. Иногда <mark className="app">Adobe After Effects</mark> при попытке
          отправить композицию на очередь рендера в{" "}
          <mark className="app">Adobe Media Encoder</mark> выдаёт просьбу, что нужно
          установить <mark className="app">Adobe Media Encoder</mark>, хотя эта программа
          вроде как установлена в системе. Для того, чтобы программы видели друг друга -
          вам нужно соблюсти два условия.
        </p>
        <ul>
          <li>
            Убедитесь в том, что вы установили{" "}
            <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark> одного года. Если вы,
            например, установили <mark className="app">Adobe After Effects 2022</mark> и{" "}
            <mark className="app">Adobe Media Encoder 2019</mark> - они никогда не увидят
            друг друга, так как программы жёстко привязаны к году.
          </li>
          <li>
            Если вы установили <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark> одного года, но они всё ещё
            не видят друг друга - убедитесь в том, что вы установили обе программы в место
            по умолчанию, не на другом разделе, отличном от{" "}
            <mark className="path">C:\</mark>.
            <AdditionInfo>
              Если у вас мало места на системном диске или вы хотите перенести программы
              от <mark>Adobe</mark> на другой раздел - воспользуйтесь функцией создания
              символьных ссылок.
            </AdditionInfo>
          </li>
        </ul>
        <p>
          Если два условия соблюдены - программы должны увидеть друг друга. В редких
          случаях даже при соблюдении условий выше программы до сих пор не могут увидеть
          по следующим причинам.
        </p>
        <ul>
          <li>
            Если вы используете активацию программ с помощью патча <mark>GenP</mark>, то
            она может работать криво. Советуем удалить все программы начисто и установить
            репаки от <mark>KpoJluK</mark> или <mark>m0nkrus</mark>.
          </li>
          <li>
            Если вы используете репаки от <mark>KpoJluK</mark> или <mark>m0nkrus</mark>,
            то попробуйте просто перезагрузить компьютер. Вполне вероятно, что процессы,
            связывающие <mark className="plugin">Dynamic Link</mark>, засбоили и не
            сообщили об этом пользователю.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="в настоящее время невозможно установить, операционная система не соответствует минимальным требованиям для этой программы установки"
        title="Код ошибки 1, 501, 176, 195, 21 или другие при установке Adobe After Effects"
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
                <mark className="app">Adobe After Effects</mark> пользовались другими
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
                <mark className="app">Adobe After Effects</mark> пользовались другими
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
          последних версий <mark className="app">Adobe After Effects</mark>. Для решения
          проблемы обновите процессор или установите более старую версию программы,
          например <mark>23.6</mark> или <mark>24.0</mark>.
        </p>
        <Divider>
          Исправляем ошибку 21 - &quot;Операционная система не соответствует минимальным
          требованиям для этой программы установки&quot;
        </Divider>
        <p>
          Скорее всего вы пытаетесь установить{" "}
          <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark> или
          новее на несвежую сборку <mark>Windows</mark>. В таком случае у вас есть только
          два выхода, по какому пути идти - решать только вам.
        </p>
        <ul>
          <li>
            Если вы хотите установить свежую версию{" "}
            <mark className="app">Adobe After Effects</mark>, то вам нужно обновить вашу
            систему до <mark>Windows 10</mark> сборки <mark>22H2</mark> или установить{" "}
            <mark>Windows 11</mark>. Обычно в{" "}
            <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
              системных требованиях After Effects
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
            установить более старую версию{" "}
            <mark className="app">Adobe After Effects</mark>, например <mark>23.6</mark>{" "}
            (2023) или <mark>15.1</mark> (2018). В таком случае установщик выполнит
            установку корректно.
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
      <DetailsSummary title="В названиях установщиков плагинов увидел обозначения Adobe, OFX или другое. Я запутался - для каких программ предназначены такие плагины?">
        <p>
          Обычно в названии установочных файлов указывается для каких программ
          устанавливается плагин. Это сделано для того, чтобы не перепутать файлы для
          нужных вам программ и установить как надо и куда надо.
        </p>
        <ul>
          <li>
            <mark className="word">AE</mark>, <mark className="word">PR</mark>,{" "}
            <mark className="word">PS</mark>, <mark className="word">LR</mark> или{" "}
            <mark className="word">Adobe</mark> - такие плагины устанавливаются в разные
            программы от Adobe, например <mark className="app">Adobe After Effects</mark>{" "}
            и <mark className="app">Adobe Premiere Pro</mark>,{" "}
            <mark className="app">Adobe Photoshop</mark> и{" "}
            <mark className="app">Adobe Lightroom</mark>.
            <AdditionInfo>
              <ul>
                <li>
                  Иногда плагины с припиской <mark className="word">AE</mark> могут
                  устанавливаться и в <mark className="app">Adobe After Effects</mark>, и
                  в <mark className="app">Adobe Premiere Pro</mark>.
                </li>
                <li>
                  Плагины, распространяющиеся в установщиках будут устанавливаться в
                  стандартные папки программ. Прежде чем устанавливать плагины с помощью
                  установщиков - убедитесь в том, что вы изначально установили программы
                  от <mark>Adobe</mark> в стандартное расположение, не меняя его, чтобы не
                  ныть о том, что плагин не появился в нужной программе.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">OFX</mark> - плагин установится для программ, которые
            поддерживают стандарт формата <mark>OpenFX</mark>. К ним относятся{" "}
            <mark className="app">Davinci Resolve</mark>,{" "}
            <mark className="app">Vegas Pro</mark>, <mark className="app">Nuke</mark> и{" "}
            <a href="https://ru.wikipedia.org/wiki/OpenFX#%D0%A5%D0%BE%D1%81%D1%82%D1%8B">
              остальные
            </a>
            .
            <AdditionWarning>
              Такие плагины не подойдут для{" "}
              <mark className="app">Adobe After Effects</mark> и для{" "}
              <mark className="app">Adobe Premiere Pro</mark>, так как они не поддерживают
              стандарт плагинов <mark>OpenFX</mark>.
            </AdditionWarning>
          </li>
          <li>
            <mark className="word">Standalone</mark> - плагин, работающий как обычная
            программа и может ни от кого не зависеть, например{" "}
            <mark className="plugin">BorisFX Mocha Pro</mark> или{" "}
            <mark className="plugin">BorisFX Optics</mark>.
          </li>
          <li>
            <mark className="word">Репак от ...</mark> или{" "}
            <mark className="word">Repack by ...</mark> - перепакованный установщик
            плагина, который устанавливает плагин куда надо. Обычно такие плагины
            предварительно активированы, если не указано иное.
            <AdditionWarning>
              При открытии таких установщиков стоит быть внимательным с чекбоксами, так
              как есть риск того, что вы можете установить в свою систему явно что-то
              лишнее.
            </AdditionWarning>
          </li>
          <li>
            <mark className="word">CE</mark> - маркировка от группы релизеров{" "}
            <mark>Team V.R.</mark>, которая расшифровывается как{" "}
            <mark>Corporate Edition</mark>. Таким образом они помечают, что такие
            дистрибутивы достаточно просто установить без всяких лишних действий по
            активации плагинов. То есть это для них как синоним к слову &quot;репак&quot;.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="плагин не активирован, license failed, красный крест"
        title="Установил плагин, но почему при его применении появляются красные кресты, непонятные наложения или надписи про отсутствие лицензии?"
      >
        <p>
          При применении эффектов из различных сторонних плагинов вы можете столкнуться с
          ошибкой отсутствия лицензии. Она обычно может сопровождаться разными видами,
          будь то красный крест, надпись или какой-нибудь &quot;красивый&quot; водяной
          знак. Данные ограничения связаны с тем, что скорее всего вы проигнорировали
          инструкцию по установке <mark className="word">народной</mark> версии того или
          иного стороннего плагина или неправильно ею воспользовались. В редких случаях
          источник, откуда вы скачали плагин, может дать нерабочий вариант. Для этого
          найдите нужный плагин из другого источника, например из{" "}
          <a href="#1.1">самой первой статьи</a> на этой странице.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="trapcode, mbl, magic bullet, vfx suite, universe, юниверс, трапкод, партикуляр, мбл"
        title='При установке любого пакета Red Giant появляется ошибка "This installer application has been moved. It must be run from its original folder containing a packages directory. The installer will now exit."'
      >
        <p>
          Скорее всего пытаетесь установить плагины от{" "}
          <mark className="plugin">Red Giant</mark>, предварительно не распаковав архив
          полностью. При использовании стандартного просмотрщика архивов в{" "}
          <mark>Windows 10 или 11</mark> и при открытии в нём любого{" "}
          <mark className="file">.exe</mark> файла - остальные файлы-зависимости не будут
          распакованы. Поэтому установщик не видит файлы для распаковки и выдаёт данную
          ошибку.
        </p>
        <p>
          Чтобы установить плагины от <mark>Red Giant</mark> корректно - вы должны
          распаковать полностью архив или использовать{" "}
          <a
            href="https://www.rarlab.com/download.htm"
            title="Официальный сайт WinRAR"
          >
            WinRAR
          </a>{" "}
          при открытии <mark className="file">.exe</mark> файла из под нераспакованного
          архива. Он умеет распаковывать весь архив в временную папку при открытии{" "}
          <mark className="file">.exe</mark>, <mark className="file">.msi</mark> и
          подобных установочных файлов.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="Select action - an error occurred while trying to replace the existing file: DeleteFile failed; code 5. Access denied"
        title='При применении активатора от Team V.R. для пакетов Red Giant появляется ошибка "Виберiть дiю - виникла помилка при спробi замiни iснуючого файлу: DeleteFile збiй; код 5. Отказано в доступе"'
      >
        <p>
          В данной ошибке показывается, что активатор не может перезаписать какой-то файл
          из-за того что он у вас открыт в фоне. В вашем окне ошибки должен отобразиться
          полный путь до виновника торжества - скорее всего это будет висящий в фоне{" "}
          <mark className="app">Red Giant Service</mark>.
        </p>
        <p>
          Чтобы корректно применить активатор - закройте его с помощью{" "}
          <mark className="app">Диспетчера задач</mark>, завершив процесс{" "}
          <mark className="app">Red Giant Service.exe</mark> во вкладке{" "}
          <mark className="ui">Подробности (Windows 10 или 11 21H2)</mark> или{" "}
          <mark className="ui">Сведения (Windows 11 22H2+)</mark>. После завершения
          проблемного процесса - повторите попытку активации, он должен пройти нормально.
        </p>
        <ImageFigure
          caption="Диспетчер задач"
          imgSrc="images/kill_redgiantservice.png"
          imgTitle="Завершаем процесс Red Giant Service.exe"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="генп, genp, ручная активация"
        title="Я не доверяю репакам и автоматическим установщикам, но установить программы от Adobe хочется. Какие есть ещё варианты?"
      >
        <p>
          Если вы параноик и боитесь, что при установке репаков в ваш компьютер ворвётся
          &quot;барабашка&quot; с троянами и прочей бякой, то вы можете активировать
          программы от Adobe вручную через <mark className="app">GenP</mark>.
        </p>
        <ul>
          <li>
            Из плюсов этого способа: активируя Adobe через{" "}
            <mark className="app">GenP</mark>, вы можете устанавливать, обновлять
            программы, а также устанавливать бесплатные плагины напрямую из Creative
            Cloud. Также вы можете устанавливать бета-версии, если вы хотите потыкать
            нововведения, которые ещё не выкатили в публичный релиз.
          </li>
          <li>
            Из минусов: пользователи часто жалуются на проблемы при использовании{" "}
            <mark className="plugin">Dynamic Link</mark>, то есть{" "}
            <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Premiere Pro</mark> могут не увидеть друг друга.
            После обновления программ от Adobe может не всегда работать патч, для этого
            нужно периодически обновлять сам <mark className="app">GenP</mark>.
          </li>
        </ul>
        <AdditionDanger>
          Если вы хотите &quot;переехать&quot; с репаков или у вас уже установлены
          какие-то приложения от Adobe на вашем устройстве, то перед активацией через{" "}
          <mark className="app">GenP</mark> лучше удалите все приложения от Adobe во
          избежание различных проблем при активации. Удалить приложения от Adobe вы можете
          через{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems">
            Adobe Creative Cloud Cleaner Tool
          </a>{" "}
          или с помощью любой другой программы для удаления программ, например{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </AdditionDanger>
        <p>
          Предположим, что ваша система уже чиста от Adobe или вы только-только
          переустановили <mark>Windows</mark>. Для начала вам нужно загрузить{" "}
          <a href="https://creativecloud.adobe.com/apps/download/creative-cloud?locale=en">
            Adobe Creative Cloud
          </a>{" "}
          с официального сайта и установить его как обычную программу. Далее нам требуется
          войти в аккаунт: вы можете создать новый или войти в уже существующий.
        </p>
        <ImageFigure
          caption="Adobe Creative Cloud"
          imgSrc="images/creative_cloud_main_menu.png"
          imgTitle="Главное окно Creative Cloud"
          styleClass="figure_windows-light"
        />
        <p>
          После успешного входа нам нужно отключить автоматические обновления и автозапуск{" "}
          <mark className="app">Creative Cloud</mark> во избежание различных &quot;детских
          неожиданностей&quot;. Для этого вам нужно нажать на изображение вашего профиля в
          правом верхнем углу и в меню выбрать <mark className="ui">Установки</mark>.
        </p>
        <ImageFigure
          caption="Adobe Creative Cloud"
          imgSrc="images/creative_cloud_open_settings.png"
          imgTitle="Открытие настроек Creative Cloud"
          styleClass="figure_windows-light"
        />
        <p>
          В открывшемся окне отключаем три параметра про автозапуск и авто обновление
          приложений в разделе <mark className="ui">Общие</mark>.
        </p>
        <ImageFigure
          caption="Adobe Creative Cloud"
          imgSrc="images/creative_cloud_settings.png"
          imgTitle="Параметры для отключения обновлений и автозапуска Creative Cloud"
          styleClass="figure_windows-light"
        />
        <AdditionInfo>
          По вашему желанию вы можете выбрать английский язык для новых приложений по
          умолчанию в разделе <mark className="ui">Приложения</mark> или изменить язык{" "}
          <mark className="app">Adobe After Effects</mark> вручную после установки. После
          изменения настроек и перед применением патча обязательно закрываем приложение{" "}
          <mark className="app">Creative Cloud</mark>.
        </AdditionInfo>
        <AdditionDanger>
          Суббреддит <mark>r/genp</mark> был заблокирован по просьбе <mark>Adobe</mark>.
          Будьте осторожны при скачивании <mark className="app">GenP</mark> не из
          проверенных источников.
        </AdditionDanger>
        <div style={{opacity: "0.5"}}>
          <p>
            Далее нам нужно скачать сам <mark className="app">GenP</mark> с темы{" "}
            <a href="https://www.reddit.com/r/genP/">/r/genp</a> на Reddit.
          </p>
          <AdditionWarning>
            Если ссылка на скачивание не работает, то обычно ниже прикладываются ссылки на
            зеркало скачивания. Перед скачиванием, распаковкой и дальнейшем использованием{" "}
            <mark className="app">GenP</mark>, отключите ваш антивирус на время.
          </AdditionWarning>
          <ImageFigure
            caption="Браузер"
            imgSrc="images/reddit_genp.png"
            imgTitle="Скачиваем GenP из Reddit"
            styleClass="figure_windows-dark"
          />
        </div>
        <p>
          После успешной загрузки архива - нужно распаковать его в любом удобном месте, а
          затем открыть <mark className="app">AdobeGenP.exe</mark> в папке{" "}
          <mark className="path">Source</mark>. Если вас при первом открытии спросят{" "}
          <mark>
            Do you wish to elevate GenP to Trustedlnstaller to allow for patching of
            XD/UWP apps?
          </mark>
          - нажмите на <mark className="ui">No</mark>.
        </p>
        <AdditionWarning>
          Интерфейс <mark className="app">GenP</mark>, в зависимости от актуальной версии,
          может незначительно отличаться от того, что демонстрируется в этой статье. Суть
          всех действий остаётся примерно одинаковым.
        </AdditionWarning>
        <p>
          Внизу интерфейса <mark className="app">GenP</mark> есть несколько кнопок. Нам
          нужно нажать на кнопку <mark className="ui">Search</mark> и подождать до
          появления двух файлов для <mark className="app">Creative Cloud</mark>.{" "}
        </p>
        <ImageFigure
          caption="Adobe GenP"
          imgSrc="images/patching_creative_cloud.png"
          imgTitle="Патчим Creative Cloud"
          styleClass="figure_windows-light"
        />
        <p>
          Их мы выделяем и нажимаем на кнопку <mark className="ui">Patch</mark> и ждём
          успешного патча.
        </p>
        <p>
          После патча <mark className="app">Creative Cloud</mark>, нам нужно в него зайти
          и начать скачивать оттуда программы. После установки{" "}
          <mark className="app">Adobe After Effects</mark> и остального софта -{" "}
          <u>не спешите</u> их открывать.
        </p>
        <p>
          После установки нужного софта снова открываем <mark className="app">GenP</mark>{" "}
          и снова нажимаем на кнопку <mark className="ui">Search</mark>. Но уже теперь мы
          выделяем галочки на всех установленных нами приложениях и снова нажимаем на
          кнопку <mark className="ui">Patch</mark>.
        </p>
        <p>
          Если в <mark className="ui">Logs</mark> ничего не указывает на ошибки при
          патчинге, то поздравляю, вы можете теперь запустить свежеустановленные программы
          от <mark>Adobe</mark> и работать в них. В противном случае пересмотрите
          инструкцию, обновите <mark className="app">GenP</mark> или всё-таки поборите
          свою паранойю насчёт репаков.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="предупреждение, сбой загрузки следующих подключаемых модулей, переустановите эти модули, ошибка, невозможно применить эффект, не удалось выполнить его инициализацию, попытайтесь переустановить подключаемый модуль или обратитесь к его разработчику, plug-in generated an unexpected exception"
        title='"Warning: The following plugins have failed to load. Please reinstall these plugins" при запуске программы или "Error: This effect cannot be applied because it cannot be initialized. Try reinstalling or contacting the plug-in developer (25::3)" при применении эффекта'
      >
        <p>
          Данные предупреждения и ошибки могут появиться по разным причинам: битые пакеты
          файлов, несвежая система или отсутствие текущей поддержки плагинов программой.
        </p>
        <ul>
          <li>
            Если вы недавно установили плагины и не можете их применить в своем проекте:
            убедитесь в том, что установщик плагинов или сами{" "}
            <mark className="file">.aex</mark> файлы были загружены полностью и не
            возникали проблемы при скачивании.
          </li>
          <li>
            Некоторые плагины могут не загрузиться из-за недостающих пакетов{" "}
            <mark className="app">Microsoft C++ Visual Redistributable</mark>. Для решения
            проблемы попробуйте обновить все пакеты или установить недостающие с помощью{" "}
            <a href="https://github.com/abbodi1406/vcredist/releases/">
              репака от abbodi1406
            </a>
            , перезагрузите компьютер и попробуйте запустить проект с плагинами, которые
            до этого не могли загрузиться.
          </li>
          <li>
            Проверьте версию вашей установленной операционной системы - она должна
            соответствовать системным требованиям для корректного запуска. Если вы
            попытаетесь запустить свежую версию{" "}
            <mark className="app">Adobe After Effects</mark>, например <mark>2024</mark>,
            на старую версию операционной системы, например <mark>Windows 10</mark> билда{" "}
            <mark>1809</mark>, то можете столкнуться с различными ошибками инициализации
            сторонних и даже встроенных эффектов. В таком случае обновите вашу
            операционную систему до последней на момент чтения статьи версию. Текущий билд
            вашей системы можно узнать с помощью <mark className="app">winver</mark>.
          </li>
          <li>
            В редких случаях в <mark>Windows</mark> могут сломаться какие-либо системные
            файлы. Для быстрого лечения системы вы можете выполнить команды{" "}
            <mark className="code">sfc /scannow</mark> и{" "}
            <mark className="code">dism /Online /Cleanup-Image /RestoreHealth</mark>, а
            также <mark className="code">chkdsk /f /r</mark> для проверки вашего диска в
            командной строке.
            <AdditionInfo>
              Если ваша система не может восстановиться после выполнения этих команд, то
              вы можете скачать <mark className="file">.iso</mark> образ системы и
              обновиться до неё поверх существующей. Текущий билд вашей системы можно
              узнать с помощью <mark className="app">winver</mark>.
            </AdditionInfo>
          </li>
          <li>
            Также сторонние плагины могут не загрузиться из-за того, что они не подходят
            под вашу текущую версию <mark className="app">Adobe After Effects</mark>.
            Плагины либо слишком свежие, либо слишком старые по отношению к вашей версии{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            Если стандартные плагины не работают и не применяются, а обновление пакетов{" "}
            <mark className="app">Microsoft C++ Visual Redistributable</mark> не помогает,
            то пришла пора переустанавливать{" "}
            <mark className="app">Adobe After Effects</mark> с нуля. Перед переустановкой
            - не забудьте почистить систему от хвостов установленной программы с помощью{" "}
            <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
              Adobe Creative Cloud Cleaner
            </a>
            .
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="предупреждение, на диске существует копия подключаемого модуля эффекта, во избежание конфликтов закройте After Effects после чего удалите или переместите более раннюю или ненужную версию"
        title="Warning: there are duplicated effect plug-ins installed on your drive. To avoid problems, quit After Effects and move or delete the older or unneeded version"
      >
        <p>
          Данное предупреждение показывает, что вы установили одинаковые плагины, но в
          разных местах. <mark className="app">Adobe After Effects</mark> рекомендует
          удалить дублирующиеся плагины, чтобы избежать каких-либо проблем и указывает
          путь к ним.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/duplicated_effect_plug-ins_installed.png"
          imgTitle="Предупреждение о дублирующихся плагинах"
          styleClass="figure_windows-dark"
        />
        <p>
          Для решения проблемы достаточно перейти по одному из путей и удалить оттуда
          файл, предварительно закрыв <mark className="app">Adobe After Effects</mark>.
          После удаления плагина вы больше не будете сталкиваться с данным предупреждением
          при открытии программы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="rosetta, розетта, старые плагины на новом маке, to use these plugins run on an intel-based mac computer, to run in a compatible mode choose get info in the application context menu and enable open using rosetta"
        title='"The following plugins are installed, but not yet compatible with this version of After Effects. They will show as missing in existing projects and cannot be applied" после установки плагинов на устройство Mac с Apple Silicon'
      >
        <p>
          В данном окне вам пишут, что вы установили плагин, но он не поддерживает вашу
          версию <mark className="app">Adobe After Effects</mark>. Чаще всего это
          происходит из-за того, что вы установили на устройство <mark>Mac</mark> с новыми
          процессорами <mark>Apple Silicon</mark> старый плагин, который был адаптирован
          для <mark>Mac</mark> на <mark>Intel</mark>. У новых процессоров новая
          архитектура, поэтому старые программы и плагины не совместимы без прослойки{" "}
          <mark className="app">Rosetta</mark>. У данного предупреждения есть две
          вариации, в зависимости от того, какая версия программы у вас установлена.
        </p>
        <AdditionWarning>
          При использовании <mark className="app">Adobe After Effects</mark> через слой
          эмуляции <mark className="app">Rosetta</mark> - производительность программы
          может упасть.
        </AdditionWarning>
        <AdditionInfo>
          <ul>
            <li>
              <mark className="app">Rosetta</mark> - слой эмуляции, которая позволяет
              запускать программы на <mark>Mac</mark> с <mark>Apple Silicon</mark>,
              которые предназначены для <mark>Mac</mark> на <mark>Intel</mark>
            </li>
            <li>
              Под <mark>Apple Silicon</mark> имеются ввиду все <mark>Mac</mark> с
              процессорами <mark>M-серии</mark>, будь то <mark>M1</mark>,{" "}
              <mark>M2 Pro</mark> и прочие.
            </li>
          </ul>
        </AdditionInfo>
        <Divider>
          To run After Effects in a compatible mode, choose &quot;Get Info&quot; in the
          application context menu and enable &quot;Open using Rosetta&quot;
        </Divider>
        <p>
          В данном случаем вам чуть повезло, вы можете открыть<sup>1</sup> программу со
          старыми плагинами в режиме совместимости с помощью{" "}
          <mark className="app">Rosetta</mark>. Для этого перейдите в{" "}
          <mark className="ui">Help</mark> и выберите в нём{" "}
          <mark className="ui">Open using Rosetta</mark>. После этого{" "}
          <mark className="app">Adobe After Effects</mark> перезагрузится в режим
          совместимости и старые плагины должны быть доступны для использования в ваших
          проектах.
        </p>
        <AdditionDanger>
          <ul>
            <li>
              <sup>1</sup> Запустить программу в режиме совместимости вы сможете лишь с
              оговоркой - <mark className="app">Adobe After Effects</mark>, начиная с
              версии <mark>24.0</mark> и новее, больше не поддерживает эмуляцию через{" "}
              <mark className="app">Rosetta</mark>. То есть в этих версиях вы не можете
              открыть версию программы для <mark>Intel</mark> на процессорах{" "}
              <mark>Apple Silicon</mark>. Если вы видите этот текст в вашем
              предупреждении, но в контекстном меню <mark className="ui">Help</mark> у вас
              отсутствует кнопка <mark className="ui">Open using Rosetta</mark>, то,
              скорее всего, <mark>Adobe</mark> забыли убрать этот текст в вашей версии
              программы. Последняя версия, где ещё возможно открыть{" "}
              <mark className="app">Adobe After Effects</mark> в режиме эмуляции через{" "}
              <mark className="app">Rosetta</mark> - это <mark>23.6</mark>.
            </li>
            <li>
              Плагины, которые адаптированы только под <mark>Apple Silicon</mark> могут не
              работать в режиме совместимости с помощью{" "}
              <mark className="app">Rosetta</mark>.
            </li>
          </ul>
        </AdditionDanger>
        <Divider>
          To use these plugins, run After Effects on an Intel-based Mac computer
        </Divider>
        <p>
          В данном случае ситуация ещё плачевнее - <mark>Adobe</mark> убрал поддержку{" "}
          <mark>Rosetta</mark> в последних версиях{" "}
          <mark className="app">Adobe After Effects</mark>, начиная с <mark>24.0</mark>.
          Поэтому плагины, которые были созданы для <mark>Mac</mark> на <mark>Intel</mark>{" "}
          уже не смогут запуститься в режиме совместимости. В таком случае у вас есть три
          варианта.
        </p>
        <ul>
          <li>
            В вашем окне с данным предупреждением будет отображён список с плагинами,
            которые сейчас недоступны. Попробуйте найти более свежие версии перечисленных
            плагинов на просторах интернета, установить их, а затем открыть{" "}
            <mark className="app">Adobe After Effects</mark> заново.
          </li>
          <li>
            Если нужные вам плагины не давно обновлялись или недоступны для{" "}
            <mark>Mac</mark> на <mark>Apple Silicon</mark> - откатите{" "}
            <mark className="app">Adobe After Effects</mark> до версии <mark>23.6</mark>,
            в котором ещё была возможность запуска программы в режиме совместимости со
            старыми <mark>Mac</mark> на <mark>Intel</mark>.
          </li>
          <li>
            Найти у себя среди запылившихся девайсов <mark>Mac</mark> на{" "}
            <mark>Intel</mark> и работать на нём.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="обновление и перенос, перенести плагины и пресеты, новая версия афтера, хочу обновить программу с одной версии на другую"
        title="Как обновить программу, не потеряв при этом плагины и прочий установленный контент?"
      >
        <p>
          <mark className="word">Обновления программы</mark> - это вещь хорошая, так как
          разработчики добавляют различные новые функции и местами исправляют старые баги.
          У некоторых пользователей часто возникает вопрос про то, как правильно
          обновляться и нужно ли что-то делать из дополнительных действий после обновления{" "}
          <mark className="app">Adobe After Effects</mark>. Существует два вида обновлений
          - между <mark className="word">одним годом</mark> и между{" "}
          <mark className="word">разными годами</mark>.
        </p>
        <AdditionInfo>
          Под <mark className="word">годом</mark> обычно подразумевается годовое число в
          названии версии программы, например{" "}
          <mark className="app">Adobe After Effects 2023</mark> или{" "}
          <mark className="app">Adobe Media Encoder 2025</mark>.
        </AdditionInfo>
        <Divider>Переход между версиями одного года</Divider>
        <p>
          При переходе с одной версии <mark className="app">Adobe After Effects</mark> на
          другую в пределах <mark className="word">одного года</mark>, например из{" "}
          <mark>24.0</mark> в <mark>24.6</mark> - ничего из файлов плагинов и пресетов
          переносить не нужно. Установщик в таком случае перезапишет старые файлы
          программы в том расположении, где она была установлена и не затронет
          пользовательские файлы. При запуске новой версии{" "}
          <mark className="app">Adobe After Effects</mark> вам предложат перенести
          настройки пользователя со старой версии программы в новую.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/migrate_settings.png"
          imgTitle="Диалог переноса настроек со старой версии в более новую"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Если вы случайно закрыли окно с вопросом про перенос настроек из старой версии,
          то вы его можете открыть снова в{" "}
          <mark className="ui">
            Edit &gt; Preferences &gt; Startup & Repair &gt; Migrate Previous Version
            Preferences
          </mark>
          . В старых версиях <mark className="app">Adobe After Effects</mark> данная
          кнопка находится в разделе <mark className="ui">General</mark>.
        </AdditionInfo>
        <Divider>Обновление с одного года на другой</Divider>
        <p>
          Если вы решили обновить программу с <mark className="word">одного года</mark> на
          другой, например с <mark>23.6</mark> на <mark>25.2</mark>, то в таком случае уже
          потребуется ручной перенос плагинов и пресетов в новую версию программы.
        </p>
        <AdditionInfo>
          <ul>
            <li>
              При установке программы версии <mark className="word">другого года</mark> -
              старая версия программы останется на вашем устройстве и не будет удалена
              автоматически.
            </li>
            <li>
              Плагины формата <mark className="file">.aex</mark>, установленные в{" "}
              <mark className="path">../Common/7.0/MediaCore</mark> тоже не нужно никуда
              переносить. Там находятся плагины, которые устанавливаются и отображаются
              для всех установленных версий{" "}
              <mark className="app">Adobe After Effects</mark>. При желании вы можете
              сразу устанавливать или перенести большинство сторонних плагинов в эту общую
              папку.
            </li>
            <li>
              Расширения формата <mark className="file">.zxp</mark> не нужно никуда
              переносить - они устанавливаются в общую папку расширений и отображаются во
              всех поддерживаемых расширением версиях{" "}
              <mark className="app">Adobe After Effects</mark>.
            </li>
          </ul>
        </AdditionInfo>
        <AdditionDanger>
          Способ обновления программы, описанный ниже, не гарантирует <mark>100%</mark>{" "}
          стабильность работы новой версии{" "}
          <mark className="app">Adobe After Effects</mark>, поэтому обновляйтесь таким
          способом на свой страх и риск. Если после такого способа обновления вы
          столкнулись с трудностями в работе - переустановите программу начисто,
          предварительно удалив предыдущие версии с помощью{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>{" "}
          или любой другой программы по удалению программ, например{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </AdditionDanger>
        <p>
          Прежде чем обновить программу с сохранением установленных плагинов и пресетов -
          вам нужно переименовать папку старой версии программы так, чтобы установщик
          новой версии думал, что новая версия уже установлена на устройстве и предложит
          перезаписать файлы программы. Для нужно открыть директорию с установленными
          программами от <mark>Adobe</mark>, обычно это{" "}
          <mark className="path">C:\Program Files\Adobe</mark>. Затем нужно продублировать
          папку с старой версией программы, убрать приставку <mark>- копия</mark> в
          названии клона папки и изменить номер года на нужный. Например, если вы
          обновляетесь с <mark>23.6</mark> на <mark>25.2</mark>, то вам нужно будет
          переименовать <mark className="path">Adobe After Effects 2023</mark> в{" "}
          <mark className="path">Adobe After Effects 2025</mark>.
        </p>
        <p>
          После переименования откройте установщик новой версии программы и убедитесь в
          том, что установщик увидел продублированную папку и предлагает установить в неё.
          Далее выбираем нужный язык программы, то есть английский и нажимаем на{" "}
          <mark className="ui">Продолжить</mark>. После установки новая версия{" "}
          <mark className="app">Adobe After Effects</mark> предложит вам перенести
          настройки со старой версии программы, с чем мы и соглашаемся.
        </p>
        <AdditionInfo>
          После обновления <mark className="app">Adobe After Effects</mark> не забудьте
          обновить <mark className="app">Adobe Premiere Pro</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> для корректной работы связи
          между этими программы. Если у вас были установлены слишком старые версии
          определённых плагинов и они перестали работать в новой версии{" "}
          <mark className="app">Adobe After Effects</mark> - найдите и установите более
          свежие версии нужных плагинов, предварительно удалив старые версии.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Чую, что у меня программа работает неправильно, но переустанавливать программу я не хочу. Как сбросить все настройки?">
        <p>
          Для сброса настроек программы вам нужно открыть ярлык программы как обычно, но с
          зажатыми модификаторами <mark className="key">Ctrl + Alt + Shift</mark> на
          клавиатуре одновременно и не отпуская клавиши. После этого у вас должно
          открыться окно <mark className="ui">Startup Repair Options</mark>, где вы можете
          запустить программу в безопасном режиме, отключить плагины или сбросить
          настройки программы.
        </p>
        <ImageFigure
          caption="Adobe After Effects"
          imgSrc="images/aftereffects/startup_repair_options.png"
          imgTitle="Окно для решения проблем при запуске программы"
          styleClass="figure_windows-dark"
        />
        <p>
          Для сброса всех настроек нужно нажать на прекрасную кнопочку{" "}
          <mark className="ui">Reset Preferences</mark>. Диалога подтверждения удаления
          настроек не будет, поэтому заранее сохраните ваши настройки. Обычно они
          находятся в <mark className="path">%AppData%\Adobe\After Effects\XX.X</mark>.
        </p>
        <AdditionInfo>
          В старых версиях <mark className="app">Adobe After Effects</mark> при запуске
          программы с нажатыми модификаторами{" "}
          <mark className="key">Ctrl + Alt + Shift</mark> появляется более простое окно,
          где вас сразу спросят, сбросить ли настройки программы.
        </AdditionInfo>
        <p>
          Если вы все ещё сталкиваетесь с какими-то трудностями при работе с программой -
          попробуйте накатить ту же версию, что у вас установлена поверх. Либо просто
          переустановите <mark className="app">Adobe After Effects</mark> с нуля,
          предварительно удалив хвосты с помощью{" "}
          <mark className="app">Adobe Creative Cloud Cleaner</mark> или{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </p>
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
          <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>
          .
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="креатив клауд клинер, удаление адоба, очистка от хвостов"
        title="Как я могу полностью удалить Adobe After Effects и остальные продукты от Adobe на моем устройстве?"
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
export default AEInstallProblems;
