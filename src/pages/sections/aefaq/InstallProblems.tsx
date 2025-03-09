import React from "react";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";

const AEInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/InstallProblems.tsx" />
      <DetailsSummary
        title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?"
        tag="как установить, куда устанавливать, установка, распаковка, инструкция, плагины, шаблоны, пресеты, скрипты, расширения, пакеты, плагины, луты"
      >
        <p>
          Обычно установка большинства плагинов универсальна, поэтому следуйте
          рекомендациям ниже.
        </p>
        <AdditionWarning>
          Прежде чем использовать <mark className="file">.aep</mark> или пакеты для{" "}
          <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> или подобных расширений - убедитесь,
          что они полностью распакованы из архива и расположены в пути не длиннее 256
          символов без кириллицы!
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
                  Если вы попытаетесь открыть лишь один <mark className="file">.aep</mark>{" "}
                  файл из архива без его полной распаковки, то вы столкнетесь с тем, что{" "}
                  <mark className="app">After Effects</mark> не сможет найти все
                  необходимые файлы для проекта.
                </li>
                <li>
                  Чтобы избежать ошибок про отсутствующие файлы и разноцветной заглушки -
                  распакуйте полностью архив с шаблоном с помощью архиватора, а затем
                  открывайте проект из уже распакованной папки.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            Если в архиве находится <mark className="file">.atom</mark>, то такие файлы
            устанавливаются путём <mark>drag&apos;n&apos;drop</mark> в окно расширения{" "}
            <mark className="plugin">AtomX</mark>.
          </li>
          <li>
            Если в архиве находится <mark className="file">.mbr</mark>, то такие файлы
            устанавливаются путём <mark>drag&apos;n&apos;drop</mark> в окно расширения{" "}
            <mark className="plugin">Motion Bro</mark>.
          </li>
        </ul>
        <ContentSwitcher
          windowsContent={
            <div>
              <ul>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">.exe</mark>, то обычно в нём содержится
                  автоматический установщик плагина. Если в записи указано, что данный
                  установщик является репаком - в таком случае после его установки плагин
                  будет уже активирован, никаких лишних телодвижений после установки
                  делать не надо.
                  <AdditionWarning>
                    При использовании установщиков убедитесь в том, что у вас{" "}
                    <mark className="app">After Effects</mark> установлен в стандартном
                    расположении <mark className="path">C:\Program Files\Adobe\</mark>, а
                    не в другом месте или разделе. В противном случае устанавливаемый
                    плагин может установиться в другом месте и может не отобразиться и
                    корректно работать в программе.
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
                        <mark className="app">After Effects</mark> и наоборот. Уточняйте в
                        документации устанавливаемого плагина, для каких версий{" "}
                        <mark className="app">After Effects</mark> он предназначен.
                      </li>
                    </ul>
                  </AdditionInfo>
                  <AdditionDanger>
                    Плагины формата <mark className="file">.plugin</mark> не подходят для
                    устройств на Windows, так как такие файлы предназначены для устройств
                    на macOS.
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
                          Windows&apos;кого фрейма.
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
                        вашей операционной системы, то есть чуть ниже Windows&apos;кого
                        фрейма.
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
                  указаниям программы.
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
                        , если вы его не применяли.
                      </li>
                      <li>
                        <a
                          download
                          href="files/Enable Extensions Adobe.reg"
                        >
                          REG-патч
                        </a>{" "}
                        нужно применить лишь один раз, он универсален. В дальнейшем при
                        установке подобных расширений файл для внесений записей в реестр
                        системы не нужно снова открывать.{" "}
                        <a
                          download
                          href="files/Enable Extensions Adobe.reg"
                        >
                          REG-патч
                        </a>{" "}
                        включает debug-режим в <mark className="app">After Effects</mark>{" "}
                        для корректного открытия и работы сторонних расширений,
                        установленные из просторов интернета.
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
                        доступ в интернет, то перейдите в{" "}
                        <mark className="ui">
                          Edit &gt; Preferences &gt; Scripting & Expressions
                        </mark>{" "}
                        и установите чекбокс у пункта{" "}
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
                      нажмите <mark className="key">ПКМ</mark> и выберите в контекстном
                      меню пункт <mark className="ui">Установить</mark> или{" "}
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
          macContent={
            <div>
              <AdditionDanger>
                Если в архиве находится папка <mark className="path">_MACOSX</mark>, то в
                нём нет никаких полезных файлов, установщиков и плагинов, которые
                предназначены именно для устройств macOS. Это скрытая системная папка,
                которая иногда создаётся операционной системой, в которой хранятся
                метаданные и информация о файловой системе. В нём нет ничего интересного
                для пользователя.
              </AdditionDanger>
              <ul>
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
                        По умолчанию в macOS вы не сможете без танцев с бубном открыть
                        установщики от неподтверждённых разработчиков. Чтобы обойти этот
                        запрет - нужно изменить настройки безопасности операционной
                        системы. Подробнее об этом вы можете прочитать на{" "}
                        <a href="https://support.apple.com/ru-ru/102445">сайте Apple</a> и
                        на{" "}
                        <a href="https://www.iphones.ru/iNotes/pochemu-mac-ne-razreshaet-ustanavlivat-prilozheniya-ne-iz-app-store-05-15-2020">
                          iPhones.ru
                        </a>
                        .
                      </li>
                      <li>
                        Не все установщики могут открыться на вашей версии macOS и вы
                        можете столкнуться с ошибкой{" "}
                        <mark className="ui">
                          Не удаётся открыть программу &quot;XXXXXX&quot;
                        </mark>
                        . Для решения проблемы достаточно найти более свежий установщик
                        или откатить при желании и возможности ваше устройство на более
                        старую версию macOS.
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
                        <mark className="app">After Effects</mark> и наоборот. Уточняйте в
                        документации устанавливаемого плагина, для каких версий{" "}
                        <mark className="app">After Effects</mark> он предназначен.
                      </li>
                    </ul>
                  </AdditionInfo>
                  <AdditionDanger>
                    Плагины формата <mark className="file">.aex</mark> не подходят для
                    устройств на macOS, так как такие файлы предназначены для устройств на
                    Windows.
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
                          программой, а не вашей операционной системы, то есть чуть ниже
                          macOS&apos;ного фрейма.
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
                        вашей операционной системы, то есть чуть ниже Windows&apos;кого
                        фрейма.
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
                  . После того как вы установите расширение, откройте терминал и введите
                  команды ниже, их можно скопировать одним нажатием. Если терминал не
                  выдал никакие ошибки, то вы можете спокойно открыть{" "}
                  <mark className="app">After Effects</mark> и проверить работоспособность
                  установленного расширения.
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
                        <mark className="app">After Effects</mark> для корректного
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
                        доступ в интернет, то перейдите в{" "}
                        <mark className="ui">
                          Edit &gt; Preferences &gt; Scripting & Expressions
                        </mark>{" "}
                        и установите чекбокс у пункта{" "}
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
        />
        <AdditionInfo>
          Если у вас остались вопросы или до сих пор сталкиваетесь с проблемами при
          установке - обратитесь к нам в{" "}
          <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        title="В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое и как такие файлы корректно распаковать?"
        tag="части архива, парт, распаковка, rar, zip"
      >
        <p>
          Данные файлы с пометкой <mark>.part1</mark>, <mark>.part2</mark> и далее по
          списку - это лишь части одного и того же архива. Архивы поделены на 2 или на 4
          Гб из-за ограничений <mark className="app">Telegram</mark> на размер загружаемых
          файлов. Чтобы корректно распаковать нужный архив - нужно загрузить все файлы на
          ваш компьютер, а затем распаковать с помощью программ-архиваторов.
        </p>
        <AdditionWarning>
          Если вы не распакуете архив полностью, то у вас могут быть проблемы с установкой
          или использованием в программах.
        </AdditionWarning>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                Для Windows есть два популярных архиватора, которые умеют работать с
                многотомными архивами. Это{" "}
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
                link="1OVwQS0uHhk"
                caption="Распаковка многотомного архива"
              />
            </div>
          }
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
                  gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
                  alignItems: "center",
                }}
              >
                <ImageFigure
                  styleClass="figure_macos-light"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                  imgTitle="Распаковка через контекстное меню"
                  caption="Распаковка через контекстное меню"
                />
                <ImageFigure
                  styleClass="figure_macos-light"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-window.gif"
                  imgTitle="Распаковка с помощью открытого окна keka"
                  caption="Распаковка с помощью открытого окна keka"
                />
                <ImageFigure
                  styleClass="figure_macos-light"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-dock.gif"
                  imgTitle="Распаковка через иконку keka в Dock-меню"
                  caption="Распаковка через иконку keka в Dock-меню"
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
        />
      </DetailsSummary>
      <DetailsSummary
        title='"Не удаётся найти "..\install\helper.exe". Проверьте, правильно ли указано имя и повторите попытку", "Обнаружены угрозы", куда-то пропадают файлы плагинов и программ или как отключить Windows Defender?'
        tag="выключить дефендер, отрубить антивирус, вирусы, ложное срабатывание, хелпер, ошибка 24, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы"
      >
        <p>
          Когда вы устанавливаете пиратские версии программ, часто можно услышать жалобы
          на то, что встроенный антивирус Windows удаляет файлы, утверждая, что они
          содержат вирусы и приводят смешные скриншоты про реакцию антивируса. Если вы уж
          встали на путь пиратства - то ложные срабатывания встроенного{" "}
          <mark className="app">Windows Defender</mark> должны стать нормой для вас.
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
          который распаковывает дистрибутивы Adobe из-за того, что в нём находится галочка
          &quot;реклама&quot; и помечает это как <mark>Contrebrew.A!ml</mark>,{" "}
          <mark>Adware</mark> или иначе. Такое иногда может быть и на дистрибутивах от{" "}
          <mark>m0nkrus</mark> или аналогичных репакеров.
        </p>
        <p>
          Для того, чтобы нормально установить программы, плагины или вас бесит ложное
          срабатывание встроенного антивируса - вам следует отключить{" "}
          <mark className="app">Windows Defender</mark> на время. Если вы доверяете
          источникам, откуда вы устанавливаете программы, то вы можете отключить{" "}
          <mark className="app">Windows Defender</mark> навсегда.
        </p>
        <YouTubeVideo
          link="blwRAOQUjsM"
          caption="Как отключить Защитник Windows 11"
        />
        <p>
          Если вы хотите оставить включенным <mark className="app">Windows Defender</mark>
          , но не хотите чтобы файлы программ удалялись, то внесите папки с нужным софтом
          в белый лист для обнаружений.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Система Windows защитила ваш компьютер" или как отключить Windows Smartscreen?'>
        <p>
          <mark className="app">Windows Smartscreen</mark> - это некий фильтр программ,
          скачанных с интернета и часто он помечает <mark className="file">.exe</mark>{" "}
          файлы как подозрительные. Поэтому и приостанавливает запуск исполняемых файлов.
          Чтобы запустить такой файл, вам нужно нажать на{" "}
          <mark className="ui">Подробнее</mark> и на{" "}
          <mark className="ui">Выполнить в любом случае</mark>.
        </p>
        <p>
          Но бывают такие случаи, что после нажатия на{" "}
          <mark className="ui">Подробнее</mark> ничего не выводится. В таком случае вам
          нужно отключить <mark className="app">Windows Smartscreen</mark> в параметрах{" "}
          <mark className="app">Защитника Windows</mark>.
        </p>
        <YouTubeVideo
          link="HxlxS1Mdyp0"
          caption="Как отключить Windows Smartscreen"
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
      <DetailsSummary title='Перед установкой репака от KpoJluK, я забыл убрать галочку с пункта "Реклама". Как избавиться от последствий?'>
        <p>
          По умолчанию в репаках от <mark>KpoJluk</mark> включена галочка
          &quot;Реклама&quot;, поэтому можно случайно нарваться на установку{" "}
          <mark>me.fo</mark> или <mark>hi.ru</mark> в качестве стартовой страницы браузера
          или на установку <mark className="app">Яндекс.Браузера</mark>. К счастью все эти
          &quot;нововведения&quot; можно удалить через{" "}
          <mark className="app">Панель управления</mark>.
        </p>
        <p>
          В следующий раз не забывайте убирать галочку с пункта &quot;Реклама&quot;. Если
          вы хотите поставить себе автоматический &quot;убиратель галочек&quot; при
          установке, воспользуйтесь программой{" "}
          <a href="https://unchecky.com/">Unchecky</a>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Зачем мне советуют не менять расположение After Effects при установке? А если у меня нет места на жёстком диске?">
        <p>
          Установка программ от Adobe не на стандартный раздел, то есть на раздел отличный
          от <mark className="path">C:\Program Files\Adobe</mark> влечёт за собой
          несколько проблем пользователю на задницу.
        </p>
        <ul>
          <li>
            Плагины, которые распространяются в установщиках могут не установить себя там,
            где вы указали путь установки <mark className="app">After Effects</mark>.
            Например, если вы установили программу на{" "}
            <mark className="path">D:\Adobus</mark>, то при установке условного{" "}
            <mark className="plugin">Magic Bullet Suite</mark> вы его не увидите в{" "}
            <mark className="app">After Effects</mark>. А всё почему? Правильно, потому
            что установщик плагина завязан на типичных для Adobe расположениях и не
            подразумевает тот факт, что пользователю придёт в голову установить{" "}
            <mark className="app">After Effects</mark> не на стандартном расположении.
          </li>
          <li>
            Продолжая первый пункт: распаковывая скрипты, плагины или пресеты в
            расположениях, которые указаны в{" "}
            <a href="/aefaq#2.1">типичных инструкциях по установке</a> также есть риск,
            что вы их тоже не увидите в программе.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> и{" "}
            <mark className="app">Premiere Pro</mark> вряд ли подключатся к{" "}
            <mark className="app">After Effects</mark>, если они установлены на разных
            директориях или не на стандартном месте.
          </li>
        </ul>
        <p>
          Чтобы исправить всё эти приколы, нужно переустановить{" "}
          <mark className="app">After Effects</mark> по нормальному, не меняя раздел при
          установке. Часто установка программы не на стандартный раздел пользователем
          происходит из-за того, что у него мало места на системном разделе. И вследствие
          этого совершает ошибку, установив программу на другое расположение. Советую
          почистить диск с помощью <mark className="app">cleanmgr</mark> и сжать место
          через <mark className="copy">compact /s /c /a /i /f /exe:lzx</mark>.
        </p>
        <p>
          Если вы действительно хотите перенести программы на другой раздел, то
          воспользуйтесь функцией символьных ссылок, или же{" "}
          <mark className="app">Symlink</mark> в операционной системе Windows. Если вы
          боитесь командной строки, воспользуйтесь различными программами с интерфейсом
          для создания символьных ссылок, например{" "}
          <a href="https://github.com/arnobpl/SymlinkCreator">Symlink Creator</a>.
        </p>
        <AdditionWarning>
          Используйте эту функцию с осторожностью! Стабильная работа программ при
          использовании символьных ссылок не гарантируется.
        </AdditionWarning>
        <YouTubeVideo
          link="VaupaCuluJA"
          caption="Как сделать символическую ссылку в Windows на файл и папку"
        />
      </DetailsSummary>
      <DetailsSummary title="Установил плагин с помощью установщика, а я его не вижу в After Effects">
        <p>
          А вот и следствие игнорирования совета выше. Переместите плагины вручную из
          папок, в которые они распаковались в папку с установленной вами программы на
          другом разделе. Или всё-таки переустановите программу на стандартное
          расположение или воспользуйтесь функцией символьных ссылок.
        </p>
        <AdditionWarning>
          Используйте функцию символьных ссылок с осторожностью! Стабильная работа
          программ при использовании этой функции не гарантируется.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Установил After Effects и Media Encoder, но они не видят друг друга и не подключаются. Как это исправить?">
        <p>
          Функция Dynamic Link позволяет синхронизировать композиции из{" "}
          <mark className="app">After Effects</mark> и очередь рендера в{" "}
          <mark className="app">Media Encoder</mark>. Но не всегда их получается
          подружить.
        </p>
        <p>
          Иногда <mark className="app">After Effects</mark> при попытке отправить
          композицию на очередь рендера в <mark className="app">Media Encoder</mark>{" "}
          выдаёт просьбу мол &quot;чувак, установи Media Encoder, а то ты его не
          установил&quot;, хотя эта программа вроде как установлена. Для того, чтобы
          программы видели друг друга - вам нужно соблюсти два условия:
        </p>
        <ul>
          <li>
            Убедитесь в том, что вы установили <mark className="app">After Effects</mark>{" "}
            и <mark className="app">Media Encoder</mark> одного &quot;года&quot;. Если вы,
            например, установили <mark className="app">After Effects 2022</mark> и{" "}
            <mark className="app">Media Encoder 2019</mark> - они никогда не увидят друг
            друга, так как программы жёстко привязаны к &quot;году&quot;.
          </li>
          <li>
            Если вы установили <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Media Encoder</mark> одного года, но они всё ещё не
            видят друг друга - убедитесь в том, что вы установили обе программы в место по
            умолчанию, не на другом разделе, отличном от <mark className="path">C:\</mark>
            .
          </li>
        </ul>
        <AdditionInfo>
          Если у вас мало места на системном диске или вы хотите перенести программы от
          Adobe на другой раздел - воспользуйтесь функцией символьных ссылок.
        </AdditionInfo>
        <p>
          Обычно при соблюдении этих двух условий программы видят друг друга и спокойно
          отправляются композиции из <mark className="app">After Effects</mark> в{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <p>
          Также в редких случаях при использовании патча <mark>GenP</mark> функция{" "}
          <mark className="plugin">Dynamic Link</mark> может работать криво. Поэтому
          попробуйте удалить ваши программы Adobe и установить репаки от{" "}
          <mark>KpoJluK</mark> или <mark>m0nkrus</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Этот проект содержит ошибки выражений или This project contains an expression error">
        <p>
          Чаще всего это происходит из-за двух факторов: язык программы и язык
          программирования, указываемый в настройках проекта.
        </p>
        <p>
          Если у вас установлен <mark className="app">After Effects</mark> на языке,
          отличном от английского - попробуйте сменить язык на английский. Делается это
          достаточно просто.
        </p>
        <AdditionDanger>
          При смене языка программы программа сбрасывает настройки пользователя (плагины
          останутся, не переживайте), так как они привязаны к используемому вами языку.
        </AdditionDanger>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                Для быстрой смены языка программы на английский - просто создайте пустой
                текстовый документ <mark className="file">ae_force_english.txt</mark>. В
                текстовый файл ничего прописывать не надо. Созданный пустой текстовый
                документ переместите в папку{" "}
                <mark className="path">%USERPROFILE%/Documents</mark>, а затем
                перезапустите <mark className="app">After Effects</mark>. После этого у
                вас программа станет на английском языке.
              </p>
              <p>
                Создать пустой текстовый документ можно с помощью команды ниже в командной
                строке Windows.
              </p>
              <AdditionWarning>
                Через <mark className="app">PowerShell</mark> эта команда не будет
                работать, используйте <mark className="app">cmd</mark>.
              </AdditionWarning>
              <code>
                echo.{">"}&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
              </code>
              <AdditionWarning>
                Альтернативный способ ниже работает только с версиями программы 24.x и
                новее, зато универсален для обеих систем.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Ctrl + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
                <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                caption="Включение вида Debug Database View"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">After Effects</mark>.
              </p>
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                caption="Установка английского языка в консоли"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">After Effects</mark>.
              </AdditionInfo>
              <AdditionDanger>
                После таких способов смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановите программу сразу на английском
                языке.
              </AdditionDanger>
            </div>
          }
          macContent={
            <div>
              <AdditionWarning>
                Приведённый ниже способ работает только с версиями программы 24.x и новее.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Ctrl + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
                <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                caption="Включение вида Debug Database View"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">After Effects</mark>.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                caption="Установка английского языка в консоли"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">After Effects</mark>.
              </AdditionInfo>
              <AdditionDanger>
                После таких способов смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановите программу сразу на английском
                языке.
              </AdditionDanger>
            </div>
          }
        />
        <p>
          Если смена языка программы вам не помогла, попробуйте сменить язык
          программирования для выражений. Для этого откройте ваш проект и откройте{" "}
          <mark className="ui">Project Manager</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark>. Затем перейдите во вкладку{" "}
          <mark className="ui">Expressions</mark> и выберите в пункте{" "}
          <mark className="ui">Expressions Engine</mark> другой движок, отличный от
          текущего.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_expression_language.png"
          imgTitle="Изменяем движок выражений"
          caption="Project Settings"
        />
      </DetailsSummary>
      <DetailsSummary title="Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again">
        <p>
          На вашем устройстве отсутствует программа Adobe Creative Cloud, но не спешите
          его устанавливать, особенно если используете репаки от <mark>KpoJluK</mark> или{" "}
          <mark>m0nkrus</mark>.
        </p>
        <p>
          Если вы пытаетесь установить расширение с помощью{" "}
          <a href="https://zxpinstaller.com/">ZXP Installer от ELEMENTS Storage Media</a>,
          то откажитесь от него в пользу{" "}
          <a href="https://aescripts.com/learn/zxp-installer/">
            ZXP Installer от aescripts
          </a>{" "}
          или ручной распаковки <mark className="file">.zxp</mark> файла в нужное место.
        </p>
      </DetailsSummary>
      <DetailsSummary title="В названиях установщиков плагинов увидел обозначения Adobe, OFX или другое. Так для каких программ предназначены плагины?">
        <p>
          Обычно в названии установочных файлов указывается для каких программ
          устанавливается плагин.
        </p>
        <ul>
          <li>
            <mark>AE</mark>, <mark>PR</mark>, <mark>PS</mark> или <mark>Adobe</mark> -
            такие плагины устанавливаются в программы от Adobe. Иногда, если в названии
            имеется суффикс <mark>AE</mark>, то он может устанавливаться и для{" "}
            <mark className="app">After Effects</mark> и для{" "}
            <mark className="app">Premiere Pro</mark>. Суффикс <mark>PS</mark> означает,
            что плагин будет установлен для <mark className="app">Photoshop</mark>.
          </li>
          <li>
            <mark>OFX</mark> - такие плагины устанавливаются для программ с поддержкой
            плагинов формата OpenFX. К ним относятся{" "}
            <mark className="app">Davinci Resolve</mark>,{" "}
            <mark className="app">Vegas Pro</mark>, <mark className="app">Nuke</mark> и{" "}
            <a href="https://ru.wikipedia.org/wiki/OpenFX#%D0%A5%D0%BE%D1%81%D1%82%D1%8B">
              далее по списку
            </a>
            . Такие плагины не подойдут для <mark className="app">After Effects</mark> и
            для <mark className="app">Premiere Pro</mark>, так как они не поддерживают
            стандарт OpenFX.
          </li>
          <li>
            <mark>Standalone</mark> - плагин ни от кого не зависит и запускается как
            обычное приложение. Таких плагинов мало, один из таких является{" "}
            <mark className="plugin">Mocha Pro</mark>.
          </li>
          <li>
            <mark>Репак от ...</mark> или <mark>Repack by ...</mark> - перепакованный
            установщик плагина, в котором обычно за пользователя уже всё активировано. В
            некоторых установщиках важно следить за галочками, а то вдруг установите
            что-то лишнее.
          </li>
          <li>
            <mark>CE</mark> - маркировка от группы релизеров <mark>Team V.R.</mark>,
            которая расшифровывается как <mark>Corporate Edition</mark>. Таким образом они
            помечают, что такие дистрибутивы достаточно просто установить без всяких
            лишних действий по активации плагинов. То есть это для них как синоним к слову
            &quot;репак&quot;.
          </li>
        </ul>
        <AdditionInfo>
          Плагины, распространяющиеся в установщиках будут устанавливаться в стандартные
          папки программ. Поэтому лучше не менять путь установки приложений от Adobe или
          других монтажных программ, чтобы не ныть о том, что плагин не появился в нужной
          программе.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        title="Я не доверяю репакам и автоматчиеским установщикам, но установить программы от Adobe хочется. Какие есть ещё варианты?"
        tag="генп, genp, ручная активация"
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
            <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Premiere Pro</mark> могут не увидеть друг друга. После
            обновления программ от Adobe может не всегда работать патч, для этого нужно
            периодически обновлять сам <mark className="app">GenP</mark>.
          </li>
        </ul>
        <AdditionDanger>
          Если вы хотите &quot;переехать&quot; с репаков или у вас уже установлены
          какие-то приложения от Adobe на вашем устройстве, то перед активацией через{" "}
          <mark className="app">GenP</mark> лучше удалите все приложения от Adobe во
          избежание различных проблем при активации. Удалить приложения от Adobe вы можете
          через{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems">
            Adobe Creative Cloud Cleaner Tool
          </a>{" "}
          или с помощью любой другой программы для удаления программ, например{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </AdditionDanger>
        <p>
          Предположим, что ваша система уже чиста от Adobe или вы только-только
          переустановили Windows. Для начала вам нужно загрузить{" "}
          <a href="https://creativecloud.adobe.com/apps/download/creative-cloud?locale=en">
            Adobe Creative Cloud
          </a>{" "}
          с официального сайта и установить его как обычную программу. Далее нам требуется
          войти в аккаунт: вы можете создать новый или войти в уже существующий.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/creative_cloud_main_menu.png"
          imgTitle="Главное окно Creative Cloud"
          caption="Adobe Creative Cloud"
        />
        <p>
          После успешного входа нам нужно отключить автоматические обновления и автозапуск{" "}
          <mark className="app">Creative Cloud</mark> во избежание различных &quot;детских
          неожиданностей&quot;. Для этого вам нужно нажать на изображение вашего профиля в
          правом верхнем углу и в меню выбрать <mark className="ui">Установки</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/creative_cloud_open_settings.png"
          imgTitle="Открытие настроек Creative Cloud"
          caption="Adobe Creative Cloud"
        />
        <p>
          В открывшемся окне отключаем три пункта про автозапуск и авто обновление
          приложений в разделе <mark className="ui">Общие</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/creative_cloud_settings.png"
          imgTitle="Пункты для отключения обновлений и автозапуска Creative Cloud"
          caption="Adobe Creative Cloud"
        />
        <AdditionInfo>
          По вашему желанию вы можете выбрать английский язык для новых приложений по
          умолчанию в разделе <mark className="ui">Приложения</mark> или изменить язык{" "}
          <mark className="app">After Effects</mark> вручную после установки.
        </AdditionInfo>
        <p>
          После изменения настроек и перед применением патча обязательно закрываем
          приложение <mark className="app">Creative Cloud</mark>. Далее нам нужно скачать
          сам <mark className="app">GenP</mark> с темы{" "}
          <a href="https://www.reddit.com/r/genP/">/r/genp</a> на Reddit.
        </p>
        <AdditionWarning>
          Если ссылка на скачивание не работает, то обычно ниже прикладываются ссылки на
          зеркало скачивания. Перед скачиванием, распаковкой и дальнейшем использованием{" "}
          <mark className="app">GenP</mark>, отключите ваш антивирус на время.
        </AdditionWarning>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/reddit_genp.png"
          imgTitle="Скачиваем GenP из Reddit"
          caption="Браузер"
        />
        <p>
          После успешной загрузки архива нам нужно распаковать его в любом удобном месте,
          а затем открыть <mark className="app">AdobeGenP.exe</mark> в папке{" "}
          <mark className="path">Source</mark>. Если вас при первом открытии спросят{" "}
          <mark>
            Do you wish to elevate GenP to Trustedlnstaller to allow for patching of
            XD/UWP apps?
          </mark>
          , на что мы любезно отвечаем <mark className="ui">No</mark>.
        </p>
        <p>
          Внизу интерфейса <mark className="app">GenP</mark> есть несколько кнопок. Нам
          нужно нажать на кнопку <mark className="ui">Search</mark> и подождать до
          появления двух файлов для <mark className="app">Creative Cloud</mark>.{" "}
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/patching_creative_cloud.png"
          imgTitle="Патчим Creative Cloud"
          caption="Adobe GenP"
        />
        <p>
          Их мы выделяем и нажимаем на кнопку <mark className="ui">Patch</mark> и ждём
          успешного патча.
        </p>
        <p>
          После патча <mark className="app">Creative Cloud</mark>, нам нужно в него зайти
          и начать скачивать оттуда программы. После установки{" "}
          <mark className="app">After Effects</mark> и остального софта -{" "}
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
          от Adobe и работать в них. В противном случае пересмотрите инструкцию, обновите{" "}
          <mark className="app">GenP</mark> или всё-таки поборойте свою паранойю насчёт
          репаков.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title='При установке любого пакета Red Giant выскакивает "This installer application has been moved. It must be run from its original folder containing a packages directory. The installer will now exit."'
        tag="trapcode, mbl, magic bullet, vfx suite, universe, юниверс, трапкод, партикуляр, мбл"
      >
        <p>
          Вы пытаетесь установить плагины от <mark className="plugin">Red Giant</mark>, не
          распаковав архив полностью. При использовании стандартного просмотрщика архивов
          в Windows 10/11 и при открытии в нём любого <mark className="file">.exe</mark>{" "}
          файла - остальные файлы-зависимости не будут распакованы, поэтому и установщик
          не видит файлы для распаковки.
        </p>
        <p>
          Чтобы установить плагины от Red Giant корректно - вам нужно распаковать
          полностью архив или использовать{" "}
          <a
            href="https://www.rarlab.com/download.htm"
            title="Официальный сайт WinRAR"
          >
            WinRAR
          </a>
          . Он умеет распаковывать весь архив в временную папку при открытии{" "}
          <mark className="file">.exe</mark>, <mark className="file">.msi</mark> и
          подобных установочных файлов.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Код ошибки 1 или 501 при установке After Effects">
        <p>
          У вас было криво установлено в системе приложение{" "}
          <mark className="app">Adobe Creative Cloud</mark>. Очистите остатки от него с
          помощью{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>{" "}
          или любой другой программы по удалению программ, например{" "}
          <mark className="app">Revo Uninstaller</mark> и повторите попытку установки
          заново.
        </p>
        <p>
          Если очистка с помощью <mark className="app">Adobe Creative Cleaner Tool</mark>{" "}
          не помогла, почистите папку{" "}
          <mark className="path">C:\Program Files (x86)\Common Files\Adobe</mark> и{" "}
          <mark className="path">C:\Program Files\Adobe</mark> от лишних хвостов.
        </p>
      </DetailsSummary>
      <DetailsSummary title='Код ошибки 21 при установке After Effects или "операционная система не соответствует минимальным требованиям для этой программы установки"'>
        <p>
          Вы пытаетесь установить <mark className="app">After Effects 2024</mark> или
          новее на Windows 10 сборки 21H2 или старее. Если у вас стоит сборка LTSC,
          поздравляю - новее сборки, чем 21H2 для вас нет, переустанавливайте систему на
          редакцию Home или Pro. Или установите более старые сборки{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <AdditionInfo>
          Текущую сборку Windows вы можете посмотреть открыв{" "}
          <mark className="app">winver</mark>.
        </AdditionInfo>
        <p>
          Для решения этой проблемы прочтите{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            системные требования After Effects
          </a>{" "}
          и найдите раздел про минимальную требуемую операционную систему. На момент
          написания этого пункта требуется минимум Windows 10 22H2 или Windows 11 21H2.
          Затем откройте раздел с обновлениями Windows и обновите систему до максимально
          возможной версии, или установите 22H2 поверх существующей Windows 10.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Установил плагин, но при его применении вылазают красные кресты или надписи про отсутствие лицензии"
        tag="плагин не активирован, license failed, красный крест"
      >
        <p>
          Скорее всего вы проигнорировали инструкцию по установке или неправильно ею
          воспользовались. Попробуйте начать установку и активацию плагина с самого
          начала.
        </p>
        <p>
          В редких случаях источник, откуда вы скачали плагин, может дать нерабочий
          вариант. Для этого найдите нужный плагин из другого источника, например из
          самого первого пункта этой страницы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Чую, что у меня программа работает неправильно, но переустанавливать программу я не хочу. Как сбросить все настройки After Effects?"
        tag="креатив клауд клинер, удаление adobe, очистка от хвостов"
      >
        <p>
          Перед запуском программы из ярлыка, зажмите модификаторы{" "}
          <mark className="key">Ctrl + Alt + Shift</mark> на клавиатуре одновременно и не
          отпуская клавиши, откройте ярлык запуска программы левой кнопкой мыши. После
          этого у вас должно открыться окно{" "}
          <mark className="ui">Startup Repair Options</mark>, где вы можете запустить
          программу в безопасном режиме, отключить плагины или сбросить настройки
          программы.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/startup_repair_options.png"
          imgTitle="Окно для решения проблем при запуске программы"
          caption="After Effects"
        />
        <p>
          Для сброса всех настроек нужно нажать на прекрасную кнопочку{" "}
          <mark className="ui">Reset Preferences</mark>. Диалога подтверждения удаления
          настроек не будет, поэтому заранее сохраните ваши настройки. Обычно они
          находятся в <mark className="path">%AppData%\Adobe\After Effects\XX.X</mark>.
        </p>
        <p>
          Если вы все ещё сталкиваетесь с какими-то трудностями при работе с программой -
          попробуйте накатить ту же версию, что у вас установлена поверх. Либо просто
          переустановите <mark className="app">After Effects</mark> с нуля.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Настало время переустановки. Как мне полностью удалить After Effects и остальные продукты от Adobe?">
        <p>
          Если вы хотите переустановить или забыть о программах Adobe раз и навсегда, то
          можно сделать это двумя способами, а лучше объединить их.
        </p>
        <ul>
          <li>
            Через <mark className="app">Adobe Creative Cloud Cleaner Tool</mark>, который
            можно скачать{" "}
            <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
              по этой ссылке
            </a>
            . Это консольная утилита, не требующая установки. Инструкция по использованию
            указана как раз на странице рядом с кнопкой загрузки.
          </li>
          <li>
            Через <mark className="app">Revo Uninstaller</mark> или подобный софт, который
            чистит хвосты после удаления. Не все подобные программы могут полностью
            удалить Adobe, но смогут удалить большую часть зависимостей. По желанию можно
            почистить реестр после удаления, например с помощью{" "}
            <mark className="app">Vit Registry Fix</mark>.
          </li>
        </ul>
      </DetailsSummary>
    </div>
  );
};
export default AEInstallProblems;
