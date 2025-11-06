import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ContentFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import ContentFilter from "../../../components/features/ContentFilter";

const AEInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="как установить, куда распаковать, забыли положить, плагины, шаблоны, пресеты, скрипты, расширения, луты, архивы, installation guide"
        title="В архиве или под записью нет инструкции по установке. Куда что кидать?"
      >
        <p>
          Обычно большинство дополнительных материалов устанавливается одинаково — всё
          зависит от типа файла. Однако некоторые шаги могут отличаться в зависимости от
          операционной системы. В этой статье мы расскажем, как устанавливать разные типы
          файлов для <mark className="app">Adobe After Effects</mark> и использовать их в
          программе.
        </p>
        <Addition type="info">
          Сторонние плагины и расширения, будь то лицензионные или «народные», в
          большинстве случаев без проблем устанавливаются как на официальную, так и на
          «народную» версию <mark className="app">Adobe After Effects</mark>. Способы
          проверки лицензии программы и сторонних дополнений обычно не пересекаются.
        </Addition>
        <Addition type="warning">
          Прежде чем использовать проекты формата <mark className="file">AEP</mark> или
          пакеты для <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> или подобных расширений, убедитесь,
          что архив с проектом или пакетом полностью распакован, а его содержимое
          находится в директории, путь к которой не содержит кириллических символов и не
          превышает 256 символов.
        </Addition>
        <Divider>Универсальные инструкции для разных типов файлов</Divider>
        <ul>
          <li>
            Проекты формата <mark className="file">AEP</mark> открываются как обычные
            проекты в <mark className="app">Adobe After Effects</mark>: двойным кликом,
            через <mark className="select">«File» → «Open Project»</mark> или сочетанием
            клавиш <mark className="key">Ctrl + O</mark>. Чтобы импортировать такой файл в
            свой проект, воспользуйтесь командой{" "}
            <mark className="select">«File» → «Import» → «File»</mark> или сочетанием{" "}
            <mark className="key">Ctrl + I</mark>.
            <Addition type="info">
              <ul>
                <li>
                  Прежде чем открывать проект формата <mark className="file">AEP</mark>,
                  полностью распакуйте архив и открывайте проект уже из распакованной
                  папки. Так вы убережёте себя от появления разноцветных «плейсхолдеров» и
                  ошибок, связанных с отсутствием файлов.
                </li>
                <li>
                  Если попытаться открыть только файл <mark className="file">AEP</mark>{" "}
                  без полной распаковки архива,{" "}
                  <mark className="app">Adobe After Effects</mark> не сможет найти все
                  необходимые для проекта файлы.
                </li>
                <li>
                  В большинстве случаев рядом с файлом шаблона есть туториал, объясняющий,
                  как им пользоваться. Он может находиться в папке{" "}
                  <mark className="path">Help</mark>,{" "}
                  <mark className="path">Tutorial</mark> или в корне архива.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            Пакеты шаблонов формата <mark className="file">ATOM</mark> устанавливаются
            перетаскиванием файла в окно расширения <mark className="plugin">AtomX</mark>.
            <Addition type="warning">
              <mark className="plugin">AtomX</mark> версии <mark>3.0.9</mark> может не
              импортировать пакеты, выдавая ошибку{" "}
              <mark className="danger">«Connection Failure»</mark> или просить код для
              активации. Для решения этой проблемы попробуйте установить{" "}
              <mark className="plugin">AtomX</mark> версии <mark>3.0.8</mark> и повторить
              попытку импорта пакета.
            </Addition>
          </li>
          <li>
            Пакеты шаблонов формата <mark className="file">MBR</mark> устанавливаются
            перетаскиванием в окно расширения <mark className="plugin">Motion Bro</mark>.
          </li>
        </ul>
        <ContentFilter
          macContent={
            <div>
              <ul>
                <li>
                  Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                  <mark className="file">7Z</mark> или <mark className="file">RAR</mark> —
                  его необходимо распаковать с помощью архиватора для дальнейшей работы с
                  его содержимым. Это можно сделать с помощью{" "}
                  <mark className="app">keka</mark> или{" "}
                  <mark className="app">The Unarchiver</mark>. Для распаковки многотомного
                  архива, то есть, если в названии архивов есть{" "}
                  <mark className="file">PART1</mark>, <mark className="file">PART2</mark>{" "}
                  и так далее, нужно запустить распаковку только первой части — остальные
                  подхватятся автоматически. Другие части архива не нужно трогать без
                  острой необходимости, если вы не знаете, что с ними делать.
                  <Addition type="info">
                    Загрузить <mark className="app">keka</mark> можно по{" "}
                    <a href="https://www.keka.io/ru/">этой ссылке</a>, а{" "}
                    <mark className="app">The Unarchiver</mark> — по{" "}
                    <a href="https://theunarchiver.com/">этой</a>.
                  </Addition>
                  <ContentFigure
                    caption="Распаковка через контекстное меню"
                    imgTitle="Распаковка через контекстное меню"
                    src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                    theme="light"
                    type="image"
                    variant="mac"
                  />
                  <Addition type="info">
                    <ul>
                      <li>
                        Многотомные архивы создаются для того, чтобы файл можно было
                        спокойно передать, обойдя ограничения на максимальный размер в{" "}
                        <mark className="app">Telegram</mark> или другом сервисе.
                      </li>
                      <li>
                        Если вы хотите сделать <mark className="app">keka</mark>{" "}
                        архиватором по умолчанию, то вам понадобится установить{" "}
                        <a href="https://www.keka.io/defaultapp/">kekaExternalHelper</a>.
                        Подробная инструкция расположена в{" "}
                        <a href="https://github.com/aonez/Keka/wiki/Default-application">
                          вики на GitHub
                        </a>
                        .
                      </li>
                    </ul>
                  </Addition>
                  <Addition type="warning">
                    Если в архиве находится папка <mark className="path">_MACOSX</mark>,
                    то в ней нет никаких полезных файлов, установщиков и плагинов, которые
                    предназначены именно для устройств <mark>Mac</mark>. Это скрытая
                    системная папка, которую иногда создаёт <mark>macOS</mark>, в ней
                    хранятся метаданные и информация о файловой системе. Внутри данной
                    директории нет ничего интересного для пользователя, поэтому смело
                    игнорируйте её.
                  </Addition>
                </li>
                <li>
                  Чтобы установить пакет формата <mark className="file">DMG</mark>,{" "}
                  <mark className="file">APP</mark> или <mark className="file">PKG</mark>{" "}
                  — достаточно открыть такой файл двойным кликом и следовать инструкциям
                  установщика.
                  <Addition type="info">
                    <ul>
                      <li>
                        По умолчанию в <mark>macOS</mark> вы не сможете без «танцев с
                        бубном» открыть установщики от неподтверждённых разработчиков.
                        Чтобы обойти этот запрет, нужно изменить настройки безопасности
                        операционной системы. Подробнее об этом вы можете прочитать на{" "}
                        <a href="https://support.apple.com/ru-ru/102445">сайте Apple</a>,
                        на{" "}
                        <a href="https://www.iphones.ru/iNotes/pochemu-mac-ne-razreshaet-ustanavlivat-prilozheniya-ne-iz-app-store-05-15-2020">
                          iPhones.ru
                        </a>{" "}
                        или в{" "}
                        <a href="https://appstorrent.ru/200-mistakes.html">
                          решениях проблем с установкой на appstorrent
                        </a>
                        .
                      </li>
                      <li>
                        Если вы сталкиваетесь с ошибкой{" "}
                        <mark className="danger">
                          «Не удаётся открыть программу „AppName”»
                        </mark>
                        , попробуйте открыть её через <mark className="key">ПКМ</mark>,
                        выбрав в контекстном меню{" "}
                        <mark className="select">«Открыть»</mark>.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Плагины формата <mark className="file">PLUGIN</mark> распаковываются в
                  общую папку плагинов —{" "}
                  <mark className="path">
                    /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  . Обычно установленные плагины находятся в окне{" "}
                  <mark className="select">«Effects & Presets»</mark> и могут вызываться с
                  помощью <mark className="plugin">FX Console</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        В редких случаях плагин может вызываться из другого места в
                        интерфейсе программы — читайте приложенную документацию к
                        устанавливаемому плагину.
                      </li>
                      <li>
                        Если вы хотите, чтобы плагин отображался только в конкретной
                        версии <mark className="app">Adobe After Effects</mark> —
                        распакуйте его в папку{" "}
                        <mark className="path">
                          /Applications/Adobe After Effects 20XX/Plug-Ins
                        </mark>
                        , где <mark>20XX</mark> — год вашей версии программы.
                      </li>
                      <li>
                        Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                        <mark className="app">Adobe After Effects</mark> и наоборот.
                        Уточняйте в документации к устанавливаемому плагину, для каких
                        версий <mark className="app">Adobe After Effects</mark> он
                        предназначен.
                      </li>
                    </ul>
                  </Addition>
                  <Addition type="danger">
                    Плагины формата <mark className="file">AEX</mark> не подходят для
                    устройств на <mark>macOS</mark>, так как они предназначены для
                    устройств на <mark>Windows</mark>.
                  </Addition>
                </li>
                <li>
                  Пресеты формата <mark className="file">FFX</mark> распаковываются в
                  стандартную папку для них —{" "}
                  <mark className="path">
                    /Applications/Adobe After Effects 20XX/Presets
                  </mark>
                  . Установленные пресеты будут находиться в окне{" "}
                  <mark className="select">«Effects & Presets»</mark> в папке{" "}
                  <mark className="path">Animation Presets</mark> и могут вызываться с
                  помощью <mark className="plugin">FX Console</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        В папке с пресетами вы можете создать собственную папку или
                        расположить скачанные пресеты в уже существующих.
                      </li>
                      <li>
                        Как альтернативу, можно распаковать пресеты в папку пользователя{" "}
                        <mark className="path">
                          ~/Documents/Adobe/After Effects 20XX/User Presets
                        </mark>
                        .
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Скрипты формата <mark className="file">JSX</mark> распаковываются в
                  стандартную папку скриптов —{" "}
                  <mark className="path">
                    /Applications/Adobe After Effects 20XX/Scripts
                  </mark>
                  . После установки они появятся в контекстном меню{" "}
                  <mark className="select">«File» → «Scripts»</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        Как альтернативу, вы можете установить скрипт с помощью{" "}
                        <mark className="select">
                          «File» → «Scripts» → «Install Script File»
                        </mark>
                        . В открывшемся окне укажите путь до нужного файла.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а лишь запустить его один
                        раз — нажмите на <mark className="select">«Run Script File»</mark>{" "}
                        в контекстном меню{" "}
                        <mark className="select">«File» → «Scripts»</mark>. В открывшемся
                        окне укажите путь к нужному скрипту, и он будет запущен до
                        перезапуска программы или до закрытия окна пользователем.
                      </li>
                      <li>
                        Если вы хотите закрепить окно скрипта{" "}
                        <mark className="file">JSX</mark> в рабочем пространстве —
                        перенесите его в дочернюю папку{" "}
                        <mark className="path">ScriptUI Panels</mark>. Полный путь в таком
                        случае должен быть таким:{" "}
                        <mark className="path">
                          /Applications/Adobe After Effects 20XX/Scripts/ScriptUI Panels
                        </mark>
                        . После этого нужный вам скрипт переместится в меню{" "}
                        <mark className="select">«Window»</mark> и будет располагаться в
                        самом низу списка, а также появится возможность прикрепить его к
                        рабочему пространству.
                        <Addition type="info">
                          Для прикрепления окна в рабочее пространство программы держитесь
                          за заголовок с названием скрипта, который создаёт программа, а
                          не операционная система.
                        </Addition>
                      </li>
                      <li>
                        При желании вы можете назначить комбинацию клавиш для открытия
                        нужного скрипта <mark className="file">JSX</mark> в{" "}
                        <mark className="select">«Keyboard Shortcuts»</mark>.
                        <Addition type="warning">
                          После перемещения скрипта <mark className="file">JSX</mark> в
                          дочернюю папку <mark className="path">ScriptUI Panels</mark> —
                          вы не сможете открывать его с помощью комбинаций клавиш,
                          заданных в <mark className="select">«Keyboard Shortcuts»</mark>,
                          но сможете закрепить его в рабочем пространстве.
                        </Addition>
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Скрипты формата <mark className="file">JSXBIN</mark> распаковываются в
                  стандартную папку для скриптов с интерфейсом —{" "}
                  <mark className="path">
                    /Applications/Adobe After Effects 20XX/Scripts/ScriptUI Panels
                  </mark>
                  . После установки они появятся в контекстном меню{" "}
                  <mark className="select">«Window»</mark> в самом конце списка.
                  <Addition type="info">
                    <ul>
                      <li>
                        Как альтернативу, вы можете установить скрипт с помощью{" "}
                        <mark className="select">
                          «File» → «Scripts» → «Install ScriptUI Panel»
                        </mark>
                        . В открывшемся окне укажите путь до нужного файла.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а лишь запустить его один
                        раз — нажмите на <mark className="select">«Run Script File»</mark>{" "}
                        в контекстном меню{" "}
                        <mark className="select">«File» → «Scripts»</mark>. В открывшемся
                        окне укажите путь к нужному скрипту, и он будет запущен до
                        перезапуска программы или до закрытия окна пользователем.
                      </li>
                      <li>
                        Для прикрепления окна в рабочее пространство программы держитесь
                        за заголовок с названием скрипта, который создаёт программа, а не
                        операционная система.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Расширения формата <mark className="file">ZXP</mark> можно установить
                  двумя способами: с использованием{" "}
                  <mark className="app">ZXP Installer от aescripts</mark> или ручной
                  распаковкой расширения в нужную директорию. После корректной установки
                  установленные расширения появятся в{" "}
                  <mark className="select">«Window» → «Extensions»</mark> и будут работать
                  в своём новом окне, который вы можете прикрепить в своё рабочее
                  пространство.
                  <Addition type="info">
                    <ul>
                      <li>
                        Расширения такого формата являются кросс-платформенными: они
                        работают как в <mark>Windows</mark>, так и в <mark>macOS</mark>.
                      </li>
                      <li>
                        Прежде чем устанавливать расширение такого формата — убедитесь в
                        том, что используемая вами версия{" "}
                        <mark className="app">Adobe After Effects</mark> его поддерживает,
                        иначе он может не появиться в списке расширений.
                      </li>
                      <li>
                        Если расширение просит включить разрешение на запись файлов и
                        доступ в интернет, перейдите в{" "}
                        <mark className="select">
                          «After Effects» → «Preferences» → «Scripting & Expressions»
                        </mark>{" "}
                        и установите флажок у параметра{" "}
                        <mark className="select">
                          «Allow Scripts to Write Files and Access Network»
                        </mark>
                        .
                      </li>
                      <li>
                        Иногда в архиве может быть уже распакованный{" "}
                        <mark className="file">ZXP</mark>. Это можно понять по наличию
                        папок <mark className="path">META-INF</mark> и{" "}
                        <mark className="path">CSXS</mark> внутри папки с названием
                        расширения.
                      </li>
                    </ul>
                  </Addition>
                  <ul>
                    <li>
                      Чтобы установить расширение через{" "}
                      <mark className="app">ZXP Installer</mark> — его нужно загрузить с{" "}
                      <a href="https://aescripts.com/learn/zxp-installer/">
                        официального сайта aescripts
                      </a>{" "}
                      и установить, следуя инструкциям установщика. После установки
                      утилиты откройте его, а затем переместите файл{" "}
                      <mark className="file">ZXP</mark> прямо в окно{" "}
                      <mark className="app">ZXP Installer</mark>. Затем нажмите на{" "}
                      <mark className="select">«Install»</mark> и дождитесь окончания
                      установки.
                      <Addition type="danger">
                        Пожалуйста, не используйте{" "}
                        <a href="https://zxpinstaller.com/">
                          ZXP Installer от ELEMENTS Storage Media
                        </a>
                        , если вы используете версии программ от
                        <mark className="company">Adobe</mark>, которые отвязаны от
                        приложения <mark className="app">Adobe Creative Cloud</mark>. Этот{" "}
                        <a href="https://zxpinstaller.com/">ZXP Installer</a> будет
                        выдавать вам ошибку <mark className="danger">-193</mark> до тех
                        пор, пока вы не установите{" "}
                        <mark className="app">Adobe Creative Cloud</mark>, а он, в свою
                        очередь, может повредить уже установленные программы.
                      </Addition>
                    </li>
                    <li>
                      <p>
                        Если вы не хотите устанавливать сторонние программы для таких
                        расширений, выполните шаги ниже.
                      </p>
                      <ul>
                        <li>
                          Переименуйте файл <mark className="file">ZXP</mark> в{" "}
                          <mark className="file">ZIP</mark> и распакуйте его как обычный
                          архив.
                        </li>
                        <li>
                          Переместите содержимое распакованного архива в папку{" "}
                          <mark className="path">
                            /Library/Application Support/Adobe/CEP/extensions
                          </mark>
                          <Addition type="info">
                            Если такой папки нет — создайте её вручную через контекстное
                            меню <mark className="app">Finder</mark>.
                          </Addition>
                        </li>
                        <li>
                          <p>
                            Откройте <mark className="app">Терминал</mark> и введите
                            команды ниже — они активируют debug-режим, необходимый для
                            корректной работы вручную установленных расширений.
                          </p>
                          <code style={{fontSize: "0.875em"}}>
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
                          </code>
                          <Addition type="info">
                            <ul>
                              <li>
                                Эти команды нужно ввести только один раз — при последующих
                                установках дополнительных расширений повторять их не
                                требуется.
                              </li>
                              <li>
                                Если вы пропустите этот шаг, расширения будут отображаться
                                в списке, но при попытке их открыть ничего не произойдёт.
                              </li>
                            </ul>
                          </Addition>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Файлы для цветокоррекции форматов <mark className="file">CUBE</mark>,{" "}
                  <mark className="file">ITX</mark>, <mark className="file">LOOK</mark>{" "}
                  или <mark className="file">LUT</mark> распаковываются в{" "}
                  <mark className="path">
                    /Applications/Adobe After Effects 20XX/Adobe After Effects
                    20XX.app/Contents/Lumetri/LUTs
                  </mark>
                  . Чтобы добраться до папки{" "}
                  <mark className="path">Contents/Lumetri/LUTs</mark> — выделите и нажмите{" "}
                  <mark className="key">ПКМ</mark> по ярлыку{" "}
                  <mark className="app">Adobe After Effects 20XX</mark> в директории{" "}
                  <mark className="path">/Applications/Adobe After Effects 20XX</mark>, а
                  затем выберите{" "}
                  <mark className="select">«Показать содержимое пакета»</mark> в
                  контекстном меню. Для изменений файлов внутри пакета потребуются права
                  администратора. Файлы для цветокоррекции можно будет использовать в
                  эффекте <mark className="plugin">Lumetri Color</mark>.
                  <ul>
                    <li>
                      Если вы распакуете файлы в <mark className="path">Technical</mark>,
                      где обычно располагаются входные <mark className="file">LUT</mark>{" "}
                      для проявки изображения с камеры, например для преобразования между
                      цветовыми пространствами, то они появятся в параметре{" "}
                      <mark className="select">«Input LUT»</mark> во вкладке{" "}
                      <mark className="select">«Basic Correction»</mark>.
                    </li>
                    <li>
                      Если вы распакуете файлы в <mark className="path">Creative</mark>,
                      где располагаются файлы для стилизации изображения уже после базовой
                      цветокоррекции, то они появятся в параметре{" "}
                      <mark className="select">«Look»</mark> во вкладке{" "}
                      <mark className="select">«Creative»</mark>.
                    </li>
                    <li>
                      В <mark className="path">Legacy</mark> располагаются устаревшие
                      файлы для цветокоррекции для совместимости со старыми проектами в{" "}
                      <mark className="app">Adobe After Effects</mark> и не используются
                      программой в последних версиях. При необходимости вы можете
                      скопировать нужные файлы цветокоррекции оттуда в папку{" "}
                      <mark className="path">Creative</mark> или{" "}
                      <mark className="path">Technical</mark>.
                    </li>
                  </ul>
                  <ContentFigure
                    caption="Как установить LUT в Adobe After Effects на MacBook"
                    src="WyZ32cYLkpg"
                    type="youtube"
                  />
                </li>
                <li>
                  Файлы для цветокоррекции форматов <mark className="file">RGX</mark>,{" "}
                  <mark className="file">LS3</mark> или{" "}
                  <mark className="file">MBLOOK</mark> устанавливаются с помощью кнопки
                  импорта во вкладке <mark className="select">«Looks»</mark> стороннего
                  расширения <mark className="plugin">Magic Bullet Looks</mark>.
                  <ContentFigure
                    caption="Magic Bullet Looks"
                    imgTitle="Импорт пресетов для Magic Bullet Looks"
                    src="images/import_magic_bullet_looks.png"
                    theme="dark"
                    type="image"
                    variant="mac"
                  />
                </li>
                <li>
                  Шрифты форматов <mark className="file">TTF</mark> или{" "}
                  <mark className="file">OTF</mark> устанавливаются стандартными
                  средствами операционной системы. Установленные шрифты будут отображаться
                  во всех программах, поддерживающих сторонние шрифты, в том числе и в{" "}
                  <mark className="app">Adobe After Effects</mark>. Это можно сделать
                  несколькими способами.
                  <ul>
                    <li>
                      Запустите приложение <mark className="app">Шрифты</mark>, выделите
                      нужные файлы шрифтов и перенесите их в открытое окно программы.
                    </li>
                    <li>
                      Дважды кликните на файл шрифта и в открывшемся окне нажмите кнопку{" "}
                      <mark className="select">«Установить»</mark>.
                    </li>
                    <li>
                      Используйте сторонний менеджер для установки, организации и
                      активации нужных шрифтов, например{" "}
                      <mark className="app">FontBase</mark>,{" "}
                      <mark className="app">Typeface</mark> или{" "}
                      <mark className="app">RightFont</mark>.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          }
          windowsContent={
            <div>
              <ul>
                <li>
                  Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                  <mark className="file">7Z</mark> или <mark className="file">RAR</mark> —
                  его необходимо распаковать с помощью архиватора для дальнейшей работы с
                  его содержимым. Это можно сделать с помощью{" "}
                  <mark className="app">WinRAR</mark> или{" "}
                  <mark className="app">7-Zip</mark>, однако многотомные архивы всё же
                  рекомендуется распаковывать именно через{" "}
                  <mark className="app">WinRAR</mark> во избежание непредвиденных ошибок.
                  Для распаковки многотомного архива, то есть, если в названии архивов
                  есть <mark className="file">PART1</mark>,{" "}
                  <mark className="file">PART2</mark> и так далее, нужно запустить
                  распаковку только первой части — остальные подхватятся автоматически.
                  Другие части архива не нужно трогать без острой необходимости, если вы
                  не знаете, что с ними делать.
                  <ContentFigure
                    caption="Распаковка многотомного архива"
                    src="1OVwQS0uHhk"
                    type="youtube"
                  />
                  <Addition type="info">
                    <ul>
                      <li>
                        <mark className="app">WinRAR</mark> можно загрузить по{" "}
                        <a href="https://www.rarlab.com/download.htm">этой ссылке</a>, а{" "}
                        <mark className="app">7-Zip</mark> — по{" "}
                        <a href="https://www.7-zip.org/download.html">этой</a>.{" "}
                        <i style={{opacity: 0.5}}>
                          Надеюсь, вы в курсе, как обойти 40-дневное «ограничение» у{" "}
                          <mark className="app">WinRAR</mark>.
                        </i>
                      </li>
                      <li>
                        Многотомные архивы создаются для того, чтобы файл можно было
                        спокойно передать, обойдя ограничения на максимальный размер в{" "}
                        <mark className="app">Telegram</mark> или другом сервисе.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Для того чтобы установить программу или плагин, поставляющийся в формате
                  исполняемого файла <mark className="file">EXE</mark> или{" "}
                  <mark className="file">MSI</mark> — достаточно его открыть двойным
                  кликом и следовать инструкциям установщика.
                  <Addition type="info">
                    <ul>
                      <li>
                        Перед установкой плагинов с помощью установщика рекомендуется
                        закрыть <mark className="app">Adobe After Effects</mark> для
                        корректной установки.
                      </li>
                      <li>
                        Если в записи указано, что установщик является репаком — после его
                        установки программа или плагин уже будет «народно» активирован,
                        никаких дополнительный действий для активации делать не нужно.
                      </li>
                    </ul>
                  </Addition>
                  <Addition type="danger">
                    <ul>
                      <li>
                        При использовании установщиков убедитесь, что{" "}
                        <mark className="app">Adobe After Effects</mark> установлен в
                        стандартном расположении{" "}
                        <mark className="path">C:\Program Files\Adobe\</mark>, а не в
                        другом месте или на другом разделе. В противном случае
                        устанавливаемый плагин может установиться не туда, из-за чего не
                        будет отображаться и корректно работать в программе.
                      </li>
                      <li>
                        Если вы доверяете источнику, откуда вы скачали установщик — для
                        корректной установки отключите полностью или на время ваше{" "}
                        <mark className="app">антивирусное ПО</mark> во избежание проблем
                        при установке из-за отсутствия нужных файлов.{" "}
                        <a href="#2.2">Подробнее...</a>
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Плагины формата <mark className="file">AEX</mark> распаковываются в
                  общую папку плагинов —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  . Обычно установленные плагины находятся в окне{" "}
                  <mark className="select">«Effects & Presets»</mark> и могут вызываться с
                  помощью <mark className="plugin">FX Console</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        В редких случаях плагин может вызываться из другого места в
                        программе — читайте приложенную документацию к устанавливаемому
                        плагину.
                      </li>
                      <li>
                        Если вы хотите, чтобы плагин отображался только в конкретной
                        версии <mark className="app">Adobe After Effects</mark> —
                        распакуйте его в папку{" "}
                        <mark className="path">
                          C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                          Files\Plug-ins
                        </mark>
                        , где <mark>20XX</mark> — год вашей версии программы.
                      </li>
                      <li>
                        Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                        <mark className="app">Adobe After Effects</mark> и наоборот.
                        Уточняйте в документации к устанавливаемому плагину, для каких
                        версий <mark className="app">Adobe After Effects</mark> он
                        предназначен.
                      </li>
                    </ul>
                  </Addition>
                  <Addition type="danger">
                    Плагины формата <mark className="file">PLUGIN</mark> не подходят для
                    устройств на <mark>Windows</mark>, так как они предназначены для
                    устройств на <mark>macOS</mark>.
                  </Addition>
                </li>
                <li>
                  Пресеты формата <mark className="file">FFX</mark> распаковываются в
                  стандартную папку для них —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Presets
                  </mark>
                  . Установленные пресеты будут находиться в окне{" "}
                  <mark className="select">«Effects & Presets»</mark> в папке{" "}
                  <mark className="path">Animation Presets</mark> и могут вызываться с
                  помощью <mark className="plugin">FX Console</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        В папке с пресетами вы можете создать папку со своим названием или
                        расположить скачанные пресеты в уже существующих.
                      </li>
                      <li>
                        Если у вас нет доступа для записи файлов в системные директории,
                        вы можете распаковать пресеты в папку пользователя{" "}
                        <mark className="path">
                          C:\Users\%UserName%\Documents\Adobe\After Effects 20XX\User
                          Presets
                        </mark>
                        .
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Пресеты форматов <mark className="file">GP</mark>,{" "}
                  <mark className="file">EFFECT</mark> или{" "}
                  <mark className="file">TRANSITION</mark> относятся к пакету сторонних
                  плагинов <mark className="plugin">Boris FX Sapphire</mark> и
                  импортируются через браузер пресетов или с помощью ручной распаковки
                  пресетов в стандартную директорию. Импортированные пресеты можно будет
                  использовать с помощью <mark className="select">«Load Preset»</mark> в
                  контроллере каждого эффекта.
                  <ul>
                    <li>
                      Чтобы импортировать файлы через браузер пресетов — примените на слой
                      любой эффект, относящийся к{" "}
                      <mark className="app">Boris FX Sapphire</mark>. После применения —
                      нажмите на <mark className="select">«Load Preset»</mark> в
                      контроллере эффекта. В открывшемся окне перейдите в{" "}
                      <mark className="select">«File» → «Import Preset»</mark> и выберите
                      нужный файл.
                    </li>
                    <li>
                      Если вы хотите импортировать файлы пресетов без использования{" "}
                      <mark className="select">«Preset Browser»</mark>, переместите их в
                      стандартную директорию для них —{" "}
                      <mark className="path">
                        C:\ProgramData\BorisFX\Sapphire\Sapphire\presets
                      </mark>
                      .
                    </li>
                  </ul>
                </li>
                <li>
                  Пресеты форматов <mark className="file">BSP</mark>,{" "}
                  <mark className="file">BAP</mark> или <mark className="file">BCP</mark>{" "}
                  относятся к пакету сторонних плагинов{" "}
                  <mark className="plugin">Boris FX Continuum</mark>.
                  <ul>
                    <li>
                      Чтобы применить пресет к эффекту из этого пакета — просто нажмите на{" "}
                      <mark className="select">«Load»</mark> в его контроллере и укажите
                      путь до файла.
                    </li>
                    <li>
                      Чтобы файлы появились в браузере пресетов, который открывается
                      нажатием на <mark className="select">«FX Browser»</mark> —
                      распакуйте их в{" "}
                      <mark className="path">
                        C:\ProgramData\BorisFX\Continuum\XX\Presets
                      </mark>
                      . В этой директории будет много подпапок, которые относятся к
                      определённой категории и эффекту — распакуйте пресет в необходимое
                      вам место.
                    </li>
                  </ul>
                </li>
                <li>
                  Скрипты формата <mark className="file">JSX</mark> распаковываются в
                  стандартную папку скриптов —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts
                  </mark>
                  . После установки они появятся в контекстном меню{" "}
                  <mark className="select">«File» → «Scripts»</mark>
                  <Addition type="info">
                    <ul>
                      <li>
                        Как альтернативу, вы можете установить скрипт с помощью{" "}
                        <mark className="select">
                          «File» → «Scripts» → «Install Script File»
                        </mark>
                        . В открывшемся окне укажите путь до нужного файла.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а лишь запустить его один
                        раз — нажмите на <mark className="select">«Run Script File»</mark>{" "}
                        в контекстном меню{" "}
                        <mark className="select">«File» → «Scripts»</mark>. В открывшемся
                        окне укажите путь к нужному скрипту, и он будет запущен до
                        перезапуска программы или до закрытия окна пользователем.
                      </li>
                      <li>
                        Если вы хотите закрепить окно скрипта{" "}
                        <mark className="file">JSX</mark> в рабочем пространстве —
                        перенесите его в дочернюю папку{" "}
                        <mark className="path">ScriptUI Panels</mark>. Полный путь в таком
                        случае должен быть таким:{" "}
                        <mark className="path">
                          C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                          Files\Scripts\ScriptUI Panels
                        </mark>
                        . После этого нужный вам скрипт переместится в меню{" "}
                        <mark className="select">«Window»</mark> и будет располагаться в
                        самом низу списка, а также появится возможность прикрепить его к
                        рабочему пространству.
                        <Addition type="info">
                          Для прикрепления окна в рабочее пространство программы держитесь
                          за заголовок с названием скрипта, который создаёт программа, а
                          не операционная система.
                        </Addition>
                      </li>
                      <li>
                        При желании вы можете назначить комбинацию клавиш для открытия
                        нужного скрипта <mark className="file">JSX</mark> в{" "}
                        <mark className="select">«Keyboard Shortcuts»</mark>.
                        <Addition type="warning">
                          После перемещения скрипта <mark className="file">JSX</mark> в
                          дочернюю папку <mark className="path">ScriptUI Panels</mark> —
                          вы не сможете открывать его с помощью комбинаций клавиш,
                          заданных в <mark className="select">«Keyboard Shortcuts»</mark>,
                          но сможете закрепить его в рабочем пространстве.
                        </Addition>
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Скрипты формата <mark className="file">JSXBIN</mark> распаковываются в
                  стандартную папку <mark className="path">ScriptUI Panels</mark> —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Scripts\ScriptUI Panels
                  </mark>
                  . После установки они появятся в контекстном меню{" "}
                  <mark className="select">«Window»</mark> в самом конце списка.
                  <Addition type="info">
                    <ul>
                      <li>
                        Как альтернативу, вы можете установить скрипт с помощью{" "}
                        <mark className="select">
                          «File» → «Scripts» → «Install ScriptUI Panel»
                        </mark>
                        . В открывшемся окне укажите путь до нужного файла.
                      </li>
                      <li>
                        Если вы не хотите устанавливать скрипт, а лишь запустить его один
                        раз — нажмите на <mark className="select">«Run Script File»</mark>{" "}
                        в контекстном меню{" "}
                        <mark className="select">«File» → «Scripts»</mark>. В открывшемся
                        окне укажите путь к нужному скрипту, и он будет запущен до
                        перезапуска программы или до закрытия окна пользователем.
                      </li>
                      <li>
                        Для прикрепления окна в рабочее пространство программы держитесь
                        за заголовок с названием скрипта, который создаёт программа, а не
                        операционная система.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Расширения формата <mark className="file">ZXP</mark> можно установить
                  двумя способами: с использованием{" "}
                  <mark className="app">ZXP Installer от aescripts</mark> или ручной
                  распаковкой расширения в нужную директорию. После корректной установки
                  установленные расширения появятся в{" "}
                  <mark className="select">«Window» → «Extensions»</mark> и будут работать
                  в своём новом окне, который вы можете прикрепить в своё рабочее
                  пространство.
                  <Addition type="info">
                    <ul>
                      <li>
                        Расширения такого формата являются кросс-платформенными: они
                        работают как в <mark>Windows</mark>, так и в <mark>macOS</mark>.
                      </li>
                      <li>
                        Прежде чем устанавливать расширение такого формата — убедитесь в
                        том, что используемая вами версия{" "}
                        <mark className="app">Adobe After Effects</mark> его поддерживает,
                        иначе он может не появиться в списке расширений.
                      </li>
                      <li>
                        Если расширение просит включить разрешение на запись файлов и
                        доступ в интернет, перейдите в{" "}
                        <mark className="select">
                          «Edit» → «Preferences» → «Scripting & Expressions»
                        </mark>{" "}
                        и установите флажок у параметра{" "}
                        <mark className="select">
                          «Allow Scripts to Write Files and Access Network»
                        </mark>
                        .
                      </li>
                      <li>
                        Иногда в архиве может быть уже распакованный{" "}
                        <mark className="file">ZXP</mark>. Это можно понять по наличию
                        папок <mark className="path">META-INF</mark> и{" "}
                        <mark className="path">CSXS</mark> внутри папки с названием
                        расширения.
                      </li>
                    </ul>
                  </Addition>
                  <ul>
                    <li>
                      Чтобы установить расширение через{" "}
                      <mark className="app">ZXP Installer</mark> — его нужно загрузить с{" "}
                      <a href="https://aescripts.com/learn/zxp-installer/">
                        официального сайта aescripts
                      </a>{" "}
                      и установить, следуя инструкциям установщика. После установки
                      утилиты откройте его, а затем переместите файл{" "}
                      <mark className="file">ZXP</mark> прямо в окно{" "}
                      <mark className="app">ZXP Installer</mark>. Затем нажмите на{" "}
                      <mark className="select">«Install»</mark> и дождитесь окончания
                      установки.
                      <Addition type="danger">
                        Пожалуйста, не используйте{" "}
                        <a href="https://zxpinstaller.com/">
                          ZXP Installer от ELEMENTS Storage Media
                        </a>
                        , если вы используете версии программ от
                        <mark className="company">Adobe</mark>, которые отвязаны от
                        приложения <mark className="app">Adobe Creative Cloud</mark>. Этот{" "}
                        <a href="https://zxpinstaller.com/">ZXP Installer</a> будет
                        выдавать вам ошибку <mark className="danger">-193</mark> до тех
                        пор, пока вы не установите{" "}
                        <mark className="app">Adobe Creative Cloud</mark>, а он, в свою
                        очередь, может повредить уже установленные программы.
                      </Addition>
                    </li>
                    <li>
                      <p>
                        Если вы не хотите использовать сторонние программы для установки
                        расширений, выполните шаги ниже.
                      </p>
                      <ul>
                        <li>
                          Переименуйте файл <mark className="file">ZXP</mark> в{" "}
                          <mark className="file">ZIP</mark> и распакуйте его как обычный
                          архив. Прежде чем менять название, убедитесь, что в проводнике
                          включено{" "}
                          <a href="https://remontka.pro/show-file-extensions-windows-11/">
                            отображение расширений файлов
                          </a>
                          .
                        </li>
                        <li>
                          Переместите содержимое распакованного архива в папку{" "}
                          <mark className="path">
                            C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
                          </mark>
                          .
                          <Addition type="info">
                            Если папка отсутствует — создайте её вручную через контекстное
                            меню проводника или с помощью команды{" "}
                            <mark className="code">
                              mkdir &quot;C:\Program Files (x86)\Common
                              Files\Adobe\CEP\extensions&quot;
                            </mark>
                            .
                          </Addition>
                        </li>
                        <li>
                          Скачайте и откройте, подтвердив слияние записей,{" "}
                          <a
                            download
                            href="files/Enable Extensions Adobe.reg"
                          >
                            файл реестра, включающий debug-режим
                          </a>{" "}
                          для <mark className="app">Adobe After Effects</mark>. Это
                          необходимо, чтобы вручную установленные расширения корректно
                          запускались.
                          <Addition type="info">
                            <ul>
                              <li>
                                Применять этот файл достаточно один раз — при последующих
                                установках повторять действие не нужно.
                              </li>
                              <li>
                                Если вы пропустите этот шаг, расширения будут отображаться
                                в списке, но не откроются при запуске.
                              </li>
                            </ul>
                          </Addition>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Файлы для цветокоррекции форматов <mark className="file">CUBE</mark>,{" "}
                  <mark className="file">ITX</mark>, <mark className="file">LOOK</mark>{" "}
                  или <mark className="file">LUT</mark> распаковываются в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Lumetri\LUTs\
                  </mark>
                  . Файлы для цветокоррекции можно будет использовать в эффекте{" "}
                  <mark className="plugin">Lumetri Color</mark>.
                  <ul>
                    <li>
                      Если вы распакуете файлы в <mark className="path">Technical</mark>,
                      где обычно располагаются входные <mark className="file">LUT</mark>{" "}
                      для проявки изображения с камеры, например для преобразования между
                      цветовыми пространствами, то они появятся в параметре{" "}
                      <mark className="select">«Input LUT»</mark> во вкладке{" "}
                      <mark className="select">«Basic Correction»</mark>.
                    </li>
                    <li>
                      Если вы распакуете файлы в <mark className="path">Creative</mark>,
                      где располагаются файлы для стилизации изображения уже после базовой
                      цветокоррекции, то они появятся в параметре{" "}
                      <mark className="select">«Look»</mark> во вкладке{" "}
                      <mark className="select">«Creative»</mark>.
                    </li>
                    <li>
                      В <mark className="path">Legacy</mark> располагаются устаревшие
                      файлы для цветокоррекции для совместимости со старыми проектами в{" "}
                      <mark className="app">Adobe After Effects</mark> и не используются
                      программой в последних версиях. При необходимости вы можете
                      скопировать нужные файлы цветокоррекции оттуда в папку{" "}
                      <mark className="path">Creative</mark> или{" "}
                      <mark className="path">Technical</mark>.
                    </li>
                  </ul>
                </li>
                <li>
                  Файлы для цветокоррекции форматов <mark className="file">RGX</mark>,{" "}
                  <mark className="file">LS3</mark> или{" "}
                  <mark className="file">MBLOOK</mark> устанавливаются с помощью кнопки
                  импорта во вкладке <mark className="select">«Looks»</mark> стороннего
                  расширения <mark className="plugin">Magic Bullet Looks</mark>.
                  <ContentFigure
                    caption="Magic Bullet Looks"
                    imgTitle="Импорт пресетов для Magic Bullet Looks"
                    src="images/import_magic_bullet_looks.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  Шрифты форматов <mark className="file">TTF</mark> или{" "}
                  <mark className="file">OTF</mark> устанавливаются стандартными
                  средствами операционной системы. Установленные шрифты будут отображаться
                  во всех программах, поддерживающие сторонние шрифты, в том числе и в{" "}
                  <mark className="app">Adobe After Effects</mark>. Это можно сделать
                  несколькими способами.
                  <ul>
                    <li>
                      Откройте файл шрифта двойным щелчком и в открывшемся окне нажмите
                      кнопку <mark className="select">«Установить»</mark> в левом верхнем
                      углу.
                    </li>
                    <li>
                      Если у вас есть целый набор шрифтов и вы не хотите открывать каждый
                      файл по отдельности, просто распакуйте архив со шрифтами в любую
                      папку. После этого выделите нужные шрифты, нажмите{" "}
                      <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
                      <mark className="select">«Установить»</mark> или{" "}
                      <mark className="select">«Установить для всех пользователей»</mark>.
                    </li>
                    <li>
                      Распакуйте файлы шрифтов в{" "}
                      <mark className="path">C:\Windows\Fonts</mark>. Это позволит
                      установить шрифты для всех пользователей системы.
                      <Addition type="info">
                        Если у вас нет прав администратора, вы можете распаковать файлы
                        шрифтов в папку{" "}
                        <mark className="path">
                          %LOCALAPPDATA%\Microsoft\Windows\Fonts
                        </mark>
                        . В таком случае шрифты будут установлены только для вашей учётной
                        записи.
                      </Addition>
                    </li>
                    <li>
                      Используйте сторонний менеджер для установки, организации и
                      активации нужных шрифтов, например{" "}
                      <mark className="app">Corel Font Manager</mark>,{" "}
                      <mark className="app">FontExpert</mark> или{" "}
                      <mark className="app">FontBase</mark>.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          }
        />
        <Addition type="info">
          Если у вас остались вопросы или вы до сих пор сталкиваетесь с проблемами при
          установке — обратитесь к нам в{" "}
          <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика, выключить дефендер, отрубить антивирус, ложное срабатывание, хелпер, ошибка 24, вирусы, трояны, проверьте правильно ли указано имя и повторите попытку, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы, операция не была успешно завершена так как файл содержит вирус или потенциально нежелательную программу, обнаружены угрозы, куда-то пропадают файлы плагинов и программ, operation did not complete successfully because the file contains a virus or potentially unwanted software, windows cannot find helper.exe, make sure you typed the name correctly and then try again, 0x800700E1"
        title="«Не удаётся найти „..\install\helper.exe“» или как отключить Windows Defender и Windows Smartscreen?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                При установке «народного» программного обеспечения{" "}
                <mark className="app">антивирусное ПО</mark>, установленное на вашем
                устройстве, может сработать на модификацию оригинальных файлов, удаляя{" "}
                «пролеченные» файлы и классифицируя их как{" "}
                <mark className="warning">«HackTool:Win32/Crack!MTB»</mark> или присваивая
                другие обозначения — в том числе как «троян». Это нормально — в таком
                случае паниковать не нужно.
              </p>
              <p>
                Ошибка <mark className="danger">«helper.exe не найден»</mark> при открытии
                репака <mark className="app">Adobe</mark> от{" "}
                <mark className="user">KpoJluK</mark> возникает из-за того, что{" "}
                <mark className="app">антивирусное ПО</mark> удаляет этот файл во время
                распаковки дистрибутива — потому что он содержит чекбокс{" "}
                <mark className="select">«Реклама»</mark> и файлы для подмены активации
                приложения — и помечает его как{" "}
                <mark className="warning">«Contrebrew.A!ml»</mark>,{" "}
                <mark className="warning">«Adware»</mark>,{" "}
                <mark className="warning">«Adload»</mark>,{" "}
                <mark className="warning">«HackTool»</mark> или иначе. Иногда файлы могут
                удаляться <mark className="app">антивирусным ПО</mark> и из дистрибутивов
                от <mark className="user">m0nkrus</mark> или других «релизеров», а также
                при распаковке различных плагинов и файлов из интернета — даже если они
                действительно не содержат <mark className="app">вредоносного ПО</mark>.
              </p>
              <p>
                Если вы доверяете <a href="#1.1">нашим источникам</a> и тем, откуда вы
                скачали файлы, то во избежание проблем с установкой программ или плагинов
                рекомендуется — на время или полностью — отключить{" "}
                <mark className="app">антивирусное ПО</mark>, установленное на вашем
                устройстве. В противном случае не предъявляйте администраторам претензии,
                основанные на вашей паранойе, — покупайте программы за свои деньги. В этой
                статье в качестве примера <mark className="app">антивирусного ПО</mark>{" "}
                будет выступать стандартный <mark className="app">Windows Defender</mark>,
                поставляемый в операционную систему «из коробки».
              </p>
              <Addition type="info">
                Способы отключения и удаления{" "}
                <mark className="app">Windows Defender</mark>, описанные в этой статье,
                могут незначительно отличаться в зависимости от вашей установленной версии{" "}
                <mark>Windows</mark>.
              </Addition>
              <Divider>Отключаем Windows Defender на время</Divider>
              <p>
                Если вы готовы взять на себя риски, связанные с установкой программного
                обеспечения неофициальными способами, то для нормальной установки
                программ, плагинов или другого содержимого необходимо временно отключить
                встроенный антивирус <mark className="app">Windows Defender</mark> или
                любой другой, установленный на вашем устройстве.
              </p>
              <ContentFigure
                caption="Как отключить Защитник Windows 11"
                src="blwRAOQUjsM"
                type="youtube"
              />
              <Divider>Или удаляем Windows Defender с корнем</Divider>
              <p>
                Если вас раздражают ложные срабатывания или вы хотите отключить{" "}
                <mark className="app">Windows Defender</mark> раз и навсегда, то вы можете
                сделать это с помощью нескольких утилит из списка ниже.
              </p>
              <div className="flexible-links">
                <a href="https://win10tweaker.ru/forum/topic/defenderkiller">
                  DefenderKiller
                </a>
                <a href="https://github.com/ionuttbara/windows-defender-remover/releases">
                  Defender Remover
                </a>
                <a href="https://winaero.com/disable-or-enable-windows-defender-in-windows-10#Disable_Microsoft_Defender_with_Winaero_Tweaker">
                  Winaero Tweaker
                </a>
                <a href="https://www.sordum.org/9480/defender-control-v2-1/">
                  Defender Control
                </a>
              </div>
              <Addition type="danger">
                Полное удаление <mark className="app">Windows Defender</mark>{" "}
                рекомендуется только опытным пользователям <mark>Windows</mark>, которые
                полностью осознают возможные последствия и используют альтернативные
                средства защиты — например собственную бдительность, сторонние антивирусы
                или регулярное резервное копирование данных. Если вы не слишком уверенный
                пользователь и не уверены в своих действиях, лучше ограничиться временным
                отключением антивируса или добавлением нужных файлов и папок в исключения.
              </Addition>
              <Addition type="warning">
                <mark className="app">Windows Defender</mark> может вернуться после
                установки крупного обновления, например при переходе с{" "}
                <mark>Windows 11</mark> версии <mark>24H2</mark> на{" "}
                <mark>Windows 11</mark> версии <mark>25H2</mark>. Чтобы от него
                избавиться, просто повторите процесс удаления.
              </Addition>
              <Divider>Вносим исключения для Windows Defender</Divider>
              <p>
                Если вы не хотите отключать или удалять{" "}
                <mark className="app">Windows Defender</mark> с вашего устройства, то
                можете добавить папку <mark className="path">C:\Program Files\Adobe</mark>
                , а также <mark className="path">%TEMP%</mark> в список исключений вашего
                антивируса. После настройки исключений начните установку программы как
                обычно.
              </p>
              <Addition type="info">
                Если директория <mark className="path">C:\Program Files\Adobe</mark>{" "}
                отсутствует, создайте её самостоятельно.
              </Addition>
              <ContentFigure
                caption="Windows Defender — как восстановить файлы и запретить их удаление"
                src="ET94_dv3f8c"
                type="youtube"
              />
              <Divider>Убираем «палки в колёсах» от Windows Smartscreen</Divider>
              <p>
                Иногда при открытии установочного файла вам может помешать предупреждение{" "}
                <mark className="select">«Система Windows защитила ваш компьютер»</mark>{" "}
                по центру экрана. Его обычно вызывает{" "}
                <mark className="app">Windows Smartscreen</mark> — фильтр файлов от{" "}
                <mark>Microsoft</mark>, скачанных из интернета, и он часто помечает{" "}
                <mark className="file">EXE</mark> как подозрительные, поэтому и
                приостанавливает их запуск. Чтобы запустить такой файл, вам нужно нажать
                на <mark className="select">«Подробнее»</mark>, а затем на{" "}
                <mark className="select">«Выполнить в любом случае»</mark>. Но иногда
                после нажатия на <mark className="select">«Подробнее»</mark> ничего не
                выводится. В таком случае вам нужно отключить{" "}
                <mark className="app">Windows Smartscreen</mark> в параметрах{" "}
                <mark className="app">«Защитника Windows»</mark>.
              </p>
              <ContentFigure
                caption="Как отключить Windows Smartscreen"
                src="HxlxS1Mdyp0"
                type="youtube"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="символьные ссылки, symlink, нет места на диске, нестандартный путь установки, проблемы с плагинами, installation path, some products require host applications which are not installed on this computer"
        title="Почему из каждого угла советуют не менять путь для установки программы?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Часто в различных чатах, в том числе в нашем{" "}
                <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>, пользователи
                сталкиваются с одной и той же проблемой: нужное дополнение не появляется в
                программе, хотя установка выполнена строго по{" "}
                <a href="#2.1">инструкциям</a>. Причина часто кроется в одной детали: если{" "}
                <mark className="app">Adobe After Effects</mark> установлен в
                нестандартную директорию, многие установщики просто не обнаружат
                программу.
              </p>
              <p>
                Установка <mark className="app">Adobe After Effects</mark> в нестандартную
                папку, например в <mark className="path">D:\MyApps</mark>, нередко
                приводит к проблемам при установке сторонних дополнений. Большинство
                инсталляторов, такие как <mark className="plugin">Red Giant</mark>,{" "}
                <mark className="plugin">Universe</mark> или{" "}
                <mark className="plugin">FX Console</mark>, ориентированы на распаковку
                файлов в стандартных директориях для{" "}
                <mark className="company">Adobe</mark> и не проверяют фактическое место
                установки программы. В результате плагины могут не установиться, а
                установщик сообщит об ошибке, как будто{" "}
                <mark className="app">Adobe After Effects</mark> отсутствует, хотя на
                самом деле он установлен.
              </p>
              <p>
                Ситуация осложняется, когда инсталлятор, например{" "}
                <mark className="plugin">Red Giant</mark>, ищет на диске любую совместимую
                программу: если в стандартных папках он находит, например,{" "}
                <mark className="app">DaVinci Resolve</mark>, которая поддерживает формат
                плагинов <mark>OpenFX</mark>, а{" "}
                <mark className="app">Adobe After Effects</mark> установлен в другом
                месте, эффекты будут установлены только для программ с поддержкой формата{" "}
                <mark>OFX</mark>, а <mark className="app">Adobe After Effects</mark>{" "}
                останется без них.
              </p>
              <p>
                Проблемы могут возникнуть не только с дополнениями, но и при
                взаимодействии между программами от <mark className="company">Adobe</mark>
                . Если <mark className="app">Adobe After Effects</mark>,{" "}
                <mark className="app">Adobe Media Encoder</mark> и{" "}
                <mark className="app">Adobe Premiere Pro</mark> установлены в
                нестандартные директории, они могут не связаться друг с другом. Например,{" "}
                <mark className="app">Adobe After Effects</mark> не сможет отправить
                композицию на рендеринг в <mark className="app">Adobe Media Encoder</mark>
                , сообщив, что программа не установлена, хотя это не так.
              </p>
              <Divider>Как устранить эту проблему в будущем?</Divider>
              <p>
                Чтобы избавиться от подобных проблем, нужно переустановить{" "}
                <mark className="app">Adobe After Effects</mark> «по-человечески» — то
                есть не менять местоположение программы при установке. Для этого
                достаточно удалить текущую версию с помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>{" "}
                или любого другого деинсталлятора, например{" "}
                <mark className="app">Revo Uninstaller</mark>. При необходимости перед
                удалением можно скопировать папки <mark className="path">Plug-Ins</mark>,{" "}
                <mark className="path">Presets</mark> и{" "}
                <mark className="path">Scripts</mark> из установленной программы в удобное
                место — для резервного копирования и последующего восстановления файлов
                дополнений. Затем запустите установщик{" "}
                <mark className="app">Adobe After Effects</mark> и начните его установку,
                не меняя директорию установки программы.
              </p>
              <p>
                Но, к сожалению, в качестве аргумента на вопрос{" "}
                <mark className="quote">
                  «А зачем вы, собственно, установили After Effects на другой раздел?»
                </mark>{" "}
                часто слышится{" "}
                <mark className="quote">
                  «А у меня на разделе, где установлена Windows, мало места!»
                </mark>
                , и пользователь, у которого проблемы с установкой плагинов, не хочет идти
                верным путём. Но и для таких случаев есть хорошие новости: в этой статье
                разберём, как навести порядок в <mark>Windows</mark> или корректно
                перенести программу на другой раздел — так, чтобы система считала её
                установленной в стандартной директории.
              </p>
              <Divider>Очищаем системный раздел от мусора</Divider>
              <p>
                Если вы согласны переустановить{" "}
                <mark className="app">Adobe After Effects</mark> на стандартный раздел, но
                у вас мало места — попробуйте почистить систему от разного хлама. Это
                можно сделать разными способами: стандартными средствами, сторонними
                программами или вручную, предварительно проанализировав всю систему. После
                очистки системы от мусора начните процесс переустановки{" "}
                <mark className="app">Adobe After Effects</mark> в стандартное место и
                наслаждайтесь корректной работой сторонних плагинов.
              </p>
              <ul>
                <li>
                  Систему от мусора стандартными средствами можно почистить с помощью
                  служебной программы <mark className="code">cleanmgr.exe</mark>, которую
                  можно открыть из окна <mark className="app">«Выполнить»</mark>. В ней
                  вам нужно указать нужный раздел с системой и нажать{" "}
                  <mark className="select">«ОК»</mark>. Эта утилита проанализирует систему
                  на наличие накопившихся обновлений <mark>Windows</mark>, старых точек
                  восстановления и хлама, который можно выборочно удалить.
                </li>
                <li>
                  Автоматически почистить систему от мусора можно и с помощью сторонних
                  программ, таких как <mark className="app">Auslogics BoostSpeed</mark>,{" "}
                  <mark className="app">Reg Organizer</mark>,{" "}
                  <mark className="app">Dism++</mark>,{" "}
                  <mark className="app">Kerish Doctor</mark> или{" "}
                  <mark className="app">CCleaner</mark>.
                  <Addition type="warning">
                    Используйте подобные утилиты с осторожностью, иначе рискуете удалить
                    важные файлы. Эти утилиты предназначены для более продвинутых
                    пользователей, которые понимают, что делают.
                  </Addition>
                </li>
                <li>
                  Если вы хотите проанализировать ваш системный раздел и посмотреть, какая
                  директория занимает слишком много места, вам помогут программы вроде{" "}
                  <mark className="app">WizTree</mark>,{" "}
                  <mark className="app">WinDirStat</mark> или{" "}
                  <mark className="app">JDiskReport</mark>. С их помощью вы можете
                  просканировать все директории, узнать размер каждой папки или файла и
                  при необходимости удалить ненужное.
                </li>
              </ul>
              <Divider>Сжимаем пространство на диске</Divider>
              <p>
                В <mark>Windows</mark> есть функция сжатия операционной системы или целого
                раздела. Она может помочь в тех случаях, когда в вашем устройстве
                установлен накопитель со слишком малым объёмом памяти, и его не хватает
                даже для базовых программ и утилит. Этой функцией можно воспользоваться с
                помощью <mark className="app">командной строки Windows</mark> или{" "}
                <mark className="app">PowerShell</mark>.
              </p>
              <Addition type="danger">
                Используйте функцию сжатия файлов с осторожностью и только если у вашего
                устройства имеется производительный процессор и быстрый накопитель.
                Использование <mark>NTFS-сжатия</mark> на медленном накопителе может
                привести к замедлению работы системы в целом.
              </Addition>
              <ul>
                <li>
                  Чтобы сжать только операционную систему, воспользуйтесь командой{" "}
                  <mark className="code">compact /compactos:always</mark> и дождитесь
                  окончания операции. Обычно сжатие системы освобождает примерно{" "}
                  <mark>3–5 ГБ</mark> дискового пространства, которое можно занять
                  установкой <mark className="app">Adobe After Effects</mark>.
                  <Addition type="info">
                    Текущее состояние сжатия <mark>Windows</mark> можно узнать с помощью
                    команды <mark className="code">compact /compactos:query</mark>.
                  </Addition>
                </li>
                <li>
                  Чтобы сжать нужный раздел, воспользуйтесь командой{" "}
                  <mark className="code">compact /s /c /a /i /f /exe:lzx</mark>,
                  предварительно перейдя в нужный раздел с помощью команды{" "}
                  <mark className="code">cd</mark>.
                  <Addition type="warning">
                    Если вы начнёте сжатие в корневом каталоге, есть риск нарваться на
                    синий экран смерти. Вместо этого лучше перейдите в каждый раздел из
                    корневого каталога, а затем начните сжатие с помощью ранее упомянутой
                    команды. Она начнёт сжатие файлов в текущем и во вложенных каталогах.
                  </Addition>
                </li>
              </ul>
              <Divider>Разбираемся с дисковыми разделами</Divider>
              <p>
                Иногда при покупке нового ноутбука или устройства на <mark>Windows</mark>{" "}
                с рук на нём уже зачем-то размечен один диск на два раздела — системный и
                пользовательский, то есть поделён на <mark className="path">C:\</mark> и{" "}
                <mark className="path">D:\</mark>. Диск делят якобы для удобства, но на
                деле разделение одного диска на несколько может привести к снижению его
                производительности — особенно если диск один и на нём установлена
                операционная система. Также разделы часто делят в соотношении примерно{" "}
                <mark>30 (системный) к 70 (пользовательский)</mark>, что нередко приводит
                к ситуациям, когда пользователь устанавливает программы не на стандартный
                раздел, а затем сталкивается с проблемами при установке дополнительных
                материалов.
              </p>
              <p>
                Если это ваш случай, я бы порекомендовал разобраться с текущими разделами
                и, по возможности, объединить их в один. Для просмотра разделов дисков вы
                можете воспользоваться стандартной утилитой{" "}
                <mark className="app">diskmgmt.msc</mark>, которую можно открыть через
                окно <mark className="app">«Выполнить»</mark> комбинацией{" "}
                <mark className="key">Win + R</mark>. Прежде чем объединять разделы,
                перенесите файлы из удаляемого раздела в другой — то есть из{" "}
                <mark className="path">D:\</mark> в <mark className="path">C:\</mark>, —
                затем удалите ненужный раздел и за счёт освободившегося места расширьте
                системный. Также можно воспользоваться сторонними утилитами, например{" "}
                <mark className="app">AOMEI Partition Assistant</mark>, где такие действия
                выполняются гораздо проще.
              </p>
              <Addition type="info">
                Подробнее про объединение разделов стандартными и сторонними средствами
                написано в статье на{" "}
                <a href="https://remontka.pro/merge-disk-partitions-windows/">
                  remontka.pro
                </a>
                .
              </Addition>
              <Divider>
                Переносим программы на другой раздел с помощью символьных ссылок
              </Divider>
              <Addition type="danger">
                Используйте функцию переноса программ с помощью символьных ссылок{" "}
                <b>
                  <u>только в крайнем случае</u>
                </b>
                , когда у вас нет возможности разобраться с разделами или почистить
                систему от мусора. Стабильная работа программ при использовании символьных
                ссылок{" "}
                <b>
                  <u>не гарантируется!</u>
                </b>
              </Addition>
              <p>
                Если вы действительно хотите перенести программы на другой раздел, можно
                воспользоваться механизмом символьных ссылок. С их помощью можно указать
                системе, что нужная директория находится в другом месте, но при этом всё
                будет выглядеть так, будто она по-прежнему расположена в стандартной
                папке.
              </p>
              <p>
                <mark className="word">Символьная ссылка</mark> или{" "}
                <mark className="word">Symlink</mark> — это специальный тип ярлыка на
                уровне файловой системы, который перенаправляет доступ к одному пути на
                другой. Обычно символьные ссылки применяют для переноса тяжёлых программ,
                кэшей, библиотек и других редко редактируемых данных на другой раздел или
                диск — например, если на <mark className="path">C:\</mark> заканчивается
                место, а <mark className="path">D:\</mark> пустой.
              </p>
              <Addition type="info">
                Если не хотите использовать командную строку — попробуйте инструменты с
                интерфейсом:{" "}
                <a href="https://github.com/arnobpl/SymlinkCreator">Symlink Creator</a>{" "}
                или{" "}
                <a href="https://sourceforge.net/projects/symlink-manager/">
                  Symlink Manager
                </a>
                .
              </Addition>
              <ContentFigure
                caption="Как сделать символическую ссылку в Windows на файл и папку"
                src="VaupaCuluJA"
                type="youtube"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="в настоящее время невозможно установить, ошибка установки, installation error, error code, avx2, системные требования"
        title="Код ошибки 1, 501, 176, 195, 21 или другие при установке Adobe After Effects"
      >
        <Divider>Исправляем ошибку 1 или 501</Divider>
        <p>
          Обычно ошибка <mark>1</mark> или <mark>501</mark> возникает из-за того, что у
          вас повреждено приложение <mark className="app">Adobe Creative Cloud</mark> или
          были некорректно удалены предыдущие программы от{" "}
          <mark className="company">Adobe</mark>, а потом вы установили «народные» версии
          программ. Чтобы это исправить — попробуйте очистить остатки предыдущих установок
          с помощью{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner Tool
          </a>{" "}
          или любого другого деинсталлятора, например{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </p>
        <Divider>Исправляем ошибку 176</Divider>
        <ContentFilter
          macContent={
            <div>
              <p>
                Скорее всего, до установки более новых версий{" "}
                <mark className="app">Adobe After Effects</mark> вы пользовались другими
                программами <mark className="app">Adobe</mark>. Для решения проблемы
                попробуйте удалить папку{" "}
                <mark className="path">/Library/Application Support/Adobe/caps</mark>, а
                затем повторить попытку установки.
              </p>
            </div>
          }
          windowsContent={
            <div>
              <p>
                Скорее всего, до установки более новых версий{" "}
                <mark className="app">Adobe After Effects</mark> вы пользовались другими
                программами <mark className="app">Adobe</mark>. Для решения проблемы
                попробуйте удалить папку{" "}
                <mark className="path">
                  C:\Program Files (x86)\Common Files\Adobe\caps
                </mark>
                , а затем повторить попытку установки.
              </p>
            </div>
          }
        />
        <Divider>
          Исправляем ошибку 195 — «Требуется процессор, поддерживающий инструкции Advanced
          Vector Extensions 2 (AVX2)»
        </Divider>
        <p>
          Если вы столкнулись с этой ошибкой при установке программы — это означает, что
          ваш процессор не поддерживает инструкции <mark>AVX2</mark>, необходимые для
          корректной работы последних версий{" "}
          <mark className="app">Adobe After Effects</mark>. Чтобы устранить проблему —
          обновите устройство или процессор на более современный либо установите более
          старую версию программы, например <mark>23.6</mark> (2023) или <mark>24.0</mark>{" "}
          (2024).
        </p>
        <Divider>
          Исправляем ошибку 21 — «Операционная система не соответствует минимальным
          требованиям для этой программы установки»
        </Divider>
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Скорее всего, вы пытаетесь установить{" "}
                <mark className="app">Adobe After Effects</mark> версии <mark>2024</mark>{" "}
                или новее на устаревшую сборку <mark>Windows</mark>. В таком случае есть
                только два решения.
              </p>
              <ul>
                <li>
                  <p>
                    Если планируете установить свежую версию{" "}
                    <mark className="app">Adobe After Effects</mark>, перейдите на{" "}
                    <mark>Windows 11</mark>. Систему можно обновить поверх предыдущей
                    версии с помощью образа <mark className="file">ISO</mark> — без потери
                    данных, настроек и приложений. В{" "}
                    <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
                      системных требованиях After Effects
                    </a>{" "}
                    обычно указана минимальная версия операционной системы, необходимая
                    для корректного запуска программы.
                  </p>
                  <Addition type="info">
                    <ul>
                      <li>
                        Последняя версия <mark className="app">Adobe After Effects</mark>,
                        поддерживающая <mark>Windows 7</mark> и <mark>Windows 8.1</mark> —{" "}
                        <mark>2019 (16.X)</mark>.
                      </li>
                      <li>
                        Последняя версия <mark className="app">Adobe After Effects</mark>,
                        поддерживающая <mark>Windows 10</mark> версии{" "}
                        <mark>LTSC 21H2</mark> — <mark>2023 (23.X)</mark>.
                      </li>
                    </ul>
                  </Addition>
                  <p>
                    Проверить текущую сборку <mark>Windows</mark> можно с помощью команды{" "}
                    <mark className="app">winver</mark> в окне{" "}
                    <mark className="app">Выполнить</mark>, которое открывается
                    комбинацией клавиш <mark className="key">Win + R</mark>.
                  </p>
                  <div className="flexible-links">
                    <a href="https://www.microsoft.com/ru-ru/software-download/windows11">
                      Обновиться до Windows 11
                    </a>
                  </div>
                  <p>
                    Если загрузка с сайта <mark className="company">Microsoft</mark> не
                    работает или вам нужен образ <mark className="file">ISO</mark> для
                    записи на USB-накопитель — воспользуйтесь ссылками ниже.
                  </p>
                  <div className="flexible-links">
                    <a href="https://files.rg-adguard.net/category">
                      Скачать оригинальные файлы Microsoft на rg-adguard.net
                    </a>
                    <a href="https://www.comss.ru/download/page.php?id=2572">
                      Скачать оригинальные образы Windows 10 на Comss
                    </a>
                    <a href="https://www.comss.ru/download/page.php?id=9234">
                      Скачать оригинальные образы Windows 11 на Comss
                    </a>
                    <a href="https://nnmclub.to/forum/tracker.php?pid=10412851">
                      Сборки Windows от SanLex на NNM-Club
                    </a>
                  </div>
                </li>
                <li>
                  Если вы не желаете обновлять или переустанавливать систему, то можете
                  установить более старую версию{" "}
                  <mark className="app">Adobe After Effects</mark>, например{" "}
                  <mark>23.6</mark> (2023) или <mark>15.1</mark> (2018). В таком случае
                  установка пройдёт корректно.
                </li>
              </ul>
            </div>
          }
        />
        <Addition type="info">
          Другие решения по кодам ошибок при установке вы можете найти на{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html">
            сайте Adobe
          </a>{" "}
          или на различных интернет-форумах.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика, повреждённые файлы, ошибка установки, installation error, многотомный архив, проблемы при скачивании из telegram"
        title="«Некоторые установочные файлы были повреждены. Загрузите свежую копию и повторите установку»"
      >
        <p>
          Данная ошибка возникает, когда вы пытаетесь открыть установщик репака от{" "}
          <mark className="user">KpoJIuK</mark>, а он оказывается повреждённым и не может
          корректно распаковаться. Часто это происходит из-за некорректных действий
          пользователя или срабатывания антивирусной программы на вашем устройстве с{" "}
          <mark>Windows</mark>.
        </p>
        <Divider>Как избавиться от этой ошибки?</Divider>
        <ul>
          <li>
            Для начала убедитесь, что вы полностью скачали файл. Довольно часто веб-версия{" "}
            <mark className="app">Telegram</mark> загружает установочные файлы с ошибками.{" "}
            {(() => {
              const userAgent = navigator.userAgent.toLowerCase();

              const isIOS = /iphone|ipad/.test(userAgent);

              const isAndroid = /android/.test(userAgent);

              const isMacOS = /macintosh|mac os x/.test(userAgent);

              if (isIOS) {
                return (
                  <>
                    Чтобы корректно скачивать подобные файлы, рекомендую использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии, которое можно установить из{" "}
                    <a href="https://telegram.org/dl/ios">App Store</a>.
                  </>
                );
              }

              if (isAndroid) {
                return (
                  <>
                    Чтобы корректно скачивать подобные файлы, рекомендую использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии, которое можно установить по{" "}
                    <a href="https://telegram.org/android">этой ссылке</a>.
                  </>
                );
              }

              if (isMacOS) {
                return (
                  <>
                    Чтобы корректно скачивать подобные файлы, рекомендую воспользоваться
                    десктопной версией <mark className="app">Telegram</mark> вместо
                    веб-версии, которую можно скачать по{" "}
                    <a href="https://macos.telegram.org/">этой ссылке</a>.
                  </>
                );
              }

              return (
                <>
                  Чтобы корректно скачивать подобные файлы, рекомендую воспользоваться
                  десктопной версией <mark className="app">Telegram</mark> вместо
                  веб-версии, которую можно скачать по{" "}
                  <a href="https://desktop.telegram.org/">этой ссылке</a>.
                </>
              );
            })()}
            <Addition type="info">
              Если вы полностью скачали файл из канала{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и
              уверены, что проблема не на вашей стороне, — сообщите об этом в комментариях
              под постом.
            </Addition>
          </li>
          <li>
            Если вы скачали репак, запакованный в многотомный архив — убедитесь, что вы
            скачали все части архива. Если хоть одна часть репака будет повреждена — архив
            может не открыться.
            <Addition type="info">
              Чтобы распаковать такой архив, достаточно начать распаковку первой части —
              остальные подхватятся автоматически. Для распаковки таких архивов рекомендую
              воспользоваться <mark className="app">WinRAR</mark>.
            </Addition>
          </li>
          <li>
            Если архив не хочет нормально распаковываться через{" "}
            <mark className="app">7-Zip</mark> или другой архиватор, попробуйте
            распаковать его с помощью <mark className="app">WinRAR</mark> — обычно это
            решает проблему.
          </li>
          <li>
            Иногда корректному открытию установщика может мешать антивирусное ПО, которое
            «вставляет палки в колёса», принимая за вирус файлы, распаковывающиеся во
            временную директорию. В таком случае{" "}
            <a href="#2.2">рекомендуется его отключить</a> — разумеется, на свой страх и
            риск.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика, файл hosts, нет доступа"
        title="«rsload.net заблокирован в hosts» или «The hosts file does not exist or is not accessible»"
      >
        <p>
          Данная ошибка чаще всего возникает из-за того, что в вашей системе по какой-то
          причине отсутствует файл <mark className="file">HOSTS</mark>. Чтобы решить эту
          проблему — проверьте содержимое директории{" "}
          <mark className="path">%WinDir%\System32\Drivers\etc</mark>. Если в нём нет
          файла <mark className="file">HOSTS</mark> — создайте его самостоятельно,
          например с помощью <mark className="app">Блокнота</mark>, и переместите
          созданный файл без расширения в эту папку.{" "}
          <a href="https://support.microsoft.com/ru-ru/topic/%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-hosts-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-c2a43f9d-e176-c6f3-e4ef-3500277a6dae">
            Подробнее на сайте Microsoft...
          </a>
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="репак от кролика, реклама, adware, нежелательные изменения"
        title="Забыл убрать галочку с рекламой при установке репака от KpoJIuK. Как избавиться от последствий?"
      >
        <p>
          По умолчанию в репаках от <mark className="user">KpoJluK</mark> включена галочка{" "}
          <mark className="select">«Реклама»</mark>, поэтому можно случайно нарваться на
          установку ненужного <mark>me.fo</mark> или <mark>hi.ru</mark> в качестве
          стартовой страницы браузера или на установку{" "}
          <mark className="app">Яндекс.Браузера</mark>. К счастью, все эти нововведения
          можно удалить через <mark className="app">Панель управления</mark> или любым
          другим удобным для вас способом, например через{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </p>
        <p>
          В следующий раз не забывайте убирать чекбокс{" "}
          <mark className="select">«Реклама»</mark> при установке репаков от{" "}
          <mark className="user">KpoJluK</mark>. Если вы хотите, чтобы рекламные чекбоксы
          снимались автоматически при установке, — попробуйте воспользоваться программой{" "}
          <a href="https://unchecky.com/">Unchecky</a>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="ошибка запуска, хвосты от неудачного удаления, переустановка, adobe cc"
        title="«Приложение Adobe Creative Cloud, необходимое для устранения проблемы, отсутствует или повреждено...» при запуске программы"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Такая ошибка может возникнуть, если вы когда-то установили{" "}
                <mark className="app">Adobe Creative Cloud</mark> рядом с «народными»
                версиями программ, из которых его предварительно вырезали. А затем решили
                удалить само приложение <mark className="app">Adobe Creative Cloud</mark>,
                оставив за собой нежелательные «хвосты».
              </p>
              <p>
                Решение довольно простое: удалите все приложения от{" "}
                <mark className="company">Adobe</mark> и установите их заново — это
                поможет избавиться от лишних зависимостей, связанных с{" "}
                <mark className="app">Adobe Creative Cloud</mark>. Да, вы не ослышались.
                Чтобы полностью очистить систему от программ{" "}
                <mark className="company">Adobe</mark> — воспользуйтесь консольной
                утилитой{" "}
                <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                  Adobe Creative Cloud Cleaner
                </a>{" "}
                или любым другим деинсталлятором, например{" "}
                <mark className="app">Revo Uninstaller</mark>.
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="genp, активация, патч, активация приложений из creative cloud"
        title="Я не доверяю репакам, но установить программы от Adobe хочется. Какие есть ещё варианты?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Если вы по каким-то причинам опасаетесь, что при установке репаков от{" "}
                <mark className="user">KpoJluK</mark>,{" "}
                <mark className="user">m0nkrus</mark> или других релизеров на компьютер
                может попасть нежелательное ПО, вы можете активировать программы от{" "}
                <mark className="company">Adobe</mark> вручную с помощью утилиты{" "}
                <mark className="app">GenP</mark>.
              </p>
              <ul>
                <li>
                  Из плюсов — можно устанавливать и обновлять программы, загружать
                  бесплатные плагины напрямую из{" "}
                  <mark className="app">Adobe Creative Cloud</mark>, а также ставить
                  публичные бета-версии, чтобы опробовать нововведения до того, как они
                  появятся в стабильном релизе.
                </li>
                <li>
                  Из минусов — возможные проблемы с{" "}
                  <mark className="plugin">Dynamic Link</mark>, когда{" "}
                  <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere Pro</mark> не «видят» друг друга.
                  Патч также может перестать работать после обновлений приложений от{" "}
                  <mark className="company">Adobe</mark>, и придётся искать новую версию{" "}
                  <mark className="app">GenP</mark>. Функции, использующие генерацию
                  контента на базе <mark className="app">Adobe Firefly</mark>, тоже
                  недоступны — как и в других «народных» версиях.
                </li>
              </ul>
              <Addition type="warning">
                <ul>
                  <li>
                    Если вы хотите «переехать» с репаков или у вас уже установлены
                    какие-то приложения от <mark className="company">Adobe</mark>, перед
                    активацией через <mark className="app">GenP</mark> лучше удалить их, а
                    также почистить записи в брандмауэре и файле{" "}
                    <mark className="file">HOSTS</mark> во избежание конфликтов. Сделать
                    это можно с помощью{" "}
                    <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                      Adobe Creative Cloud Cleaner Tool
                    </a>{" "}
                    или любого другого деинсталлятора, например{" "}
                    <mark className="app">Revo Uninstaller</mark>.
                  </li>
                  <li>
                    Во избежание проблем во время работы <mark className="app">GenP</mark>{" "}
                    рекомендуется <a href="#2.2">отключить</a>{" "}
                    <mark className="app">антивирусное ПО</mark>, установленное на вашем
                    устройстве.
                  </li>
                </ul>
              </Addition>
              <Addition type="info">
                Действия, описанные в этой статье, могут немного отличаться в зависимости
                от версии <mark className="app">Adobe Creative Cloud</mark> и{" "}
                <mark className="app">GenP</mark>.
              </Addition>
              <Divider>Устанавливаем и разбираемся с Adobe Creative Cloud</Divider>
              <ul>
                <li>
                  Прежде чем искать и применять <mark className="app">GenP</mark>, нужно
                  скачать <mark className="app">Adobe Creative Cloud</mark> с{" "}
                  <a href="https://www.adobe.com/download/creative-cloud">
                    официального сайта
                  </a>{" "}
                  и установить его как обычную программу. При установке войдите в свой
                  аккаунт <mark className="company">Adobe</mark> или создайте новый.
                  <Addition type="warning">
                    Не устанавливайте флажок напротив параметра{" "}
                    <mark className="select">
                      «Установите службу Adobe Genuine Service (AGS)»
                    </mark>
                    : его установка, наоборот, усугубит ситуацию с активацией программ от{" "}
                    <mark className="company">Adobe</mark>.
                  </Addition>
                  <ContentFigure
                    caption="Установка Adobe Creative Cloud"
                    src="images/creative_cloud_install.mp4"
                    theme="dark"
                    type="video"
                    variant="windows"
                  />
                </li>
                <li>
                  После успешной установки{" "}
                  <mark className="app">Adobe Creative Cloud</mark> перед вами появится
                  главное меню, но скачивать оттуда приложения пока рано: сам{" "}
                  <mark className="app">Adobe Creative Cloud</mark> ещё не пропатчен для
                  корректной установки программ. Иначе вам предложат оформить пробную
                  версию, которая нам не подходит.
                  <ContentFigure
                    caption="Adobe Creative Cloud"
                    imgTitle="Главное меню Creative Cloud"
                    src="images/creative_cloud_main_menu.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  <p>
                    После входа в <mark className="app">Adobe Creative Cloud</mark> сразу
                    же отключите его автозапуск и автоматические обновления, чтобы
                    избежать сюрпризов в дальнейшем.
                  </p>
                  <p>
                    Для этого нажмите на изображение профиля в правом верхнем углу и
                    выберите <mark className="select">«Установки»</mark>. В открывшемся
                    окне отключите три параметра, связанные с автозапуском и
                    автообновлением, в разделе <mark className="select">«Общие»</mark>.
                  </p>
                  <ContentFigure
                    caption="Adobe Creative Cloud"
                    imgTitle="Открытие установок Creative Cloud"
                    src="images/creative_cloud_open_settings.mp4"
                    theme="light"
                    type="video"
                    variant="windows"
                  />
                  <Addition type="info">
                    При желании вы можете установить английский язык для новых приложений
                    по умолчанию — это настраивается в разделе{" "}
                    <mark className="select">«Приложения»</mark>. Также можно изменить
                    язык <mark className="app">Adobe After Effects</mark>{" "}
                    <a href="#3.6">вручную</a> уже после установки.
                  </Addition>
                </li>
                <li>
                  После внесения нужных изменений обязательно полностью закройте{" "}
                  <mark className="app">Adobe Creative Cloud</mark> перед запуском{" "}
                  <mark className="app">GenP</mark>.
                </li>
              </ul>
              <Divider>Разбираемся с GenP</Divider>
              <ul>
                <li>
                  <p>
                    Далее нужно скачать сам <mark className="app">GenP</mark> с сайта{" "}
                    <a href="https://gen.paramore.su/#downloads">gen.paramore.su</a>. На
                    сайте есть три варианта: загрузить готовый образ{" "}
                    <mark className="app">GenP</mark> для быстрого запуска, скачать
                    исходники с утилитами для самостоятельной сборки или воспользоваться{" "}
                    <mark className="file">TORRENT</mark>-файлом.
                  </p>
                  <Addition type="info">
                    Ранее <mark className="app">GenP</mark> распространялся через{" "}
                    <mark className="app">Reddit</mark>, однако сабреддит{" "}
                    <mark>r/genp</mark> был заблокирован за нарушение авторских прав.
                  </Addition>
                  <p>
                    Поскольку основная аудитория программ от{" "}
                    <mark className="company">Adobe</mark>, как правило, не хочет
                    разбираться с ручной компиляцией патчера, выберем вариант{" "}
                    <mark className="select">«Binary»</mark>. После этого начнётся
                    скачивание архива.
                  </p>
                  <ContentFigure
                    caption="Скачивание GenP"
                    src="images/download_genp.mp4"
                    theme="dark"
                    type="video"
                    variant="windows"
                  />
                  <Addition type="info">
                    Если ваш браузер выдаёт предупреждение о вирусе в скачиваемом файле —
                    разрешите загрузку вручную или уберите из имени файла расширение,
                    добавленное браузером.
                  </Addition>
                </li>
                <li>
                  <p>
                    После загрузки распакуйте архив и запустите файл{" "}
                    <mark className="app">GenP-vX.Y.Z.exe</mark>.
                  </p>
                  <p>
                    В открывшемся окне <mark className="app">GenP</mark> нажмите{" "}
                    <mark className="select">«Search»</mark>, чтобы найти{" "}
                    <mark className="app">Adobe Creative Cloud</mark>, а затем —{" "}
                    <mark className="select">«Patch»</mark>.
                  </p>
                  <ContentFigure
                    caption="Применение патча для Adobe Creative Cloud"
                    src="images/apply_genp_first_patch.mp4"
                    theme="dark"
                    type="video"
                    variant="windows"
                  />
                </li>
                <li>
                  <p>
                    После применения первого патча можно устанавливать приложения из{" "}
                    <mark className="app">Adobe Creative Cloud</mark>.
                  </p>
                  <ContentFigure
                    caption="Установка приложений в Adobe Creative Cloud"
                    src="images/creative_cloud_install_apps.mp4"
                    theme="dark"
                    type="video"
                    variant="windows"
                  />
                  <Addition type="warning">
                    По умолчанию <mark className="app">Adobe Creative Cloud</mark>{" "}
                    устанавливает приложения на языке, на котором локализована ваша
                    операционная система. Вы можете изменить язык программ{" "}
                    <a href="https://helpx.adobe.com/ru/creative-cloud/apps/manage-apps/creative-cloud-apps/change-language-for-creative-cloud-apps.html">
                      перед установкой
                    </a>{" "}
                    или поменять его для <mark className="app">Adobe After Effects</mark>{" "}
                    уже <a href="#3.6">после установки</a>.
                  </Addition>
                </li>
                <li>
                  После установки нужных вам приложений снова откройте{" "}
                  <mark className="app">GenP</mark>, запустите поиск кнопкой{" "}
                  <mark className="select">«Search»</mark> и ещё раз примените патч через{" "}
                  <mark className="select">«Patch»</mark> — на этот раз уже для
                  установленных программ. После этого ими можно пользоваться.
                </li>
              </ul>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="какую версию надо скачать для связки, совместимость версий, dynamic link, premiere pro, media encoder, мажорная версия, релиз"
        title="Обязательно ли точное совпадение версий смежных программ от Adobe для их совместной работы?"
      >
        <p>
          У многих пользователей возникает вопрос:{" "}
          <mark className="quote">
            «Какую версию нужно устанавливать для связки AE, PR и ME?»
          </mark>{" "}
          — особенно если это первая установка нескольких программ от{" "}
          <mark className="company">Adobe</mark>. Разберёмся, что означают цифры в версиях
          программ и на какие из них действительно стоит обращать внимание.
        </p>
        <Divider>Разбираемся с нумерацией версий</Divider>
        <p>
          При установке программ важно обращать внимание на «версию-год», например{" "}
          <mark>2025</mark>, и на первые два числа в номере версии: мажорную версию и
          релиз-поинт. Всё, что идёт после, — это номера патча и билда, которые можно
          игнорировать. Они не влияют на работу{" "}
          <mark className="plugin">Dynamic Link</mark> в рамках одного релизного цикла.
        </p>
        <p>
          Предположим, вы видите установщики:{" "}
          <mark className="app">Adobe After Effects 2025</mark> версии{" "}
          <mark>25.3.2.2</mark>, <mark className="app">Adobe Premiere Pro 2025</mark> —{" "}
          <mark>25.3.0.84</mark> и <mark className="app">Adobe Media Encoder 2025</mark> —{" "}
          <mark>25.3.0.73</mark>. Может показаться, что из-за разницы в последних цифрах
          они не смогут «увидеть» друг друга, однако это не так. Программы этих версий
          будут спокойно работать и взаимодействовать между собой.
        </p>
        <p>
          Более того, точное совпадение релиз-поинта не всегда обязательно, если
          установлена одна и та же мажорная версия. Например, связка из{" "}
          <mark className="app">Adobe After Effects 2025</mark> версии <mark>25.3</mark>,{" "}
          <mark className="app">Adobe Premiere Pro 2025</mark> версии <mark>25.1</mark> и{" "}
          <mark className="app">Adobe Media Encoder 2025</mark> версии <mark>25.0</mark>{" "}
          будет работать без особых проблем. Однако всё же лучше устанавливать программы
          одного релиз-поинта, например <mark>25.3</mark> — это поможет избежать возможных
          сложностей.
        </p>
        <p>
          Но если одна из программ окажется версией предыдущего релизного цикла, например{" "}
          <mark>24.6</mark> (2024), а вторая — <mark>25.3</mark> (2025), они не смогут
          «увидеть» друг друга, поскольку их мажорные версии не совпадают. Обратной
          совместимости в таком случае нет, и <mark className="plugin">Dynamic Link</mark>{" "}
          просто не будет работать с ними.
        </p>
        <Divider>А что делать со сторонними плагинами?</Divider>
        <p>
          Что касается сторонних плагинов с «версией-годом» в названии, то они не всегда
          должны строго соответствовать версии{" "}
          <mark className="app">Adobe After Effects</mark>. Чаще всего такие плагины
          работают и на релизах двухлетней давности. Например, если установить{" "}
          <mark className="plugin">Boris FX Sapphire 2025</mark> на{" "}
          <mark className="app">Adobe After Effects 2023</mark>, всё будет работать
          корректно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="не подключается dynamic link, программы не видят друг друга, динамик линк, aegp plugin aedynamiclinkserver: adobe media encoder is not installed, please download and install it to use this feature, failed to connect to adobe media encoder, медиа енкодер"
        title="Установил Adobe Media Encoder и Adobe Premiere Pro, но Adobe After Effects почему-то их не видит"
      >
        <p>
          Функция <mark className="plugin">Dynamic Link</mark> позволяет синхронизировать
          композиции из <mark className="app">Adobe After Effects</mark> в{" "}
          <mark className="app">Adobe Premiere Pro</mark> на таймлайне и отправлять их в
          очередь рендера <mark className="app">Adobe Media Encoder</mark>. Но не всегда
          удаётся их «подружить». Иногда <mark className="app">Adobe After Effects</mark>{" "}
          при попытке отправить композицию в очередь рендера в{" "}
          <mark className="app">Adobe Media Encoder</mark> может попросить установить{" "}
          <mark className="app">Adobe Media Encoder</mark>, хотя эта программа вроде бы
          уже есть в системе. Чтобы программы «видели» друг друга, необходимо соблюсти
          несколько условий.
        </p>
        <ContentFigure
          caption="Исправляем Dynamic Link"
          src="LvvjQbY1jgw"
          type="youtube"
        />
        <ul>
          <li>
            Убедитесь, что вы установили <mark className="app">Adobe After Effects</mark>,{" "}
            <mark className="app">Adobe Premiere Pro</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark> одной «версии-года». Если,
            например, установлены <mark className="app">Adobe After Effects 2025</mark>,{" "}
            <mark className="app">Adobe Premiere Pro 2024</mark> и{" "}
            <mark className="app">Adobe Media Encoder 2023</mark>, — они никогда не смогут
            взаимодействовать через <mark className="plugin">Dynamic Link</mark>, так как
            версии релизного цикла различаются.
          </li>
        </ul>
        <ContentFilter
          windowsContent={
            <div>
              <ul>
                <li>
                  Если установлены <mark className="app">Adobe After Effects</mark>,{" "}
                  <mark className="app">Adobe Premiere Pro</mark> и{" "}
                  <mark className="app">Adobe Media Encoder</mark> одного релизного цикла,
                  но они всё равно не «видят» друг друга — проверьте, установлены ли они в
                  директорию по умолчанию, а не на другой диск, отличный от{" "}
                  <mark className="path">C:\</mark>.
                  <Addition type="info">
                    Если на системном разделе не хватает места или вы хотите перенести
                    программы от <mark className="company">Adobe</mark> на другой раздел —
                    воспользуйтесь{" "}
                    <a href="https://www.youtube.com/watch?v=VaupaCuluJA">
                      функцией создания символьных ссылок
                    </a>
                    .
                  </Addition>
                </li>
              </ul>
              <p>
                Если условия соблюдены, программы должны увидеть друг друга. В редких
                случаях, даже при выполнении всех требований, связь может не установиться
                по следующим причинам.
              </p>
              <ul>
                <li>
                  Если вы используете <mark className="app">GenP</mark> для активации
                  программ — он может работать некорректно. Попробуйте полностью удалить
                  все программы с помощью{" "}
                  <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                    Adobe Creative Cloud Cleaner Tool
                  </a>{" "}
                  или любого стороннего деинсталлятора, например{" "}
                  <mark className="app">Revo Uninstaller</mark>, а затем установите репаки
                  от <mark className="user">KpoJluK</mark> или{" "}
                  <mark className="user">m0nkrus</mark>.
                </li>
                <li>
                  Если вы уже используете репаки от <mark className="user">KpoJluK</mark>{" "}
                  или <mark className="user">m0nkrus</mark> — попробуйте просто
                  перезагрузить устройство. Возможно, процессы, отвечающие за{" "}
                  <mark className="plugin">Dynamic Link</mark>, дали сбой и не уведомили
                  об этом.{" "}
                  <i style={{opacity: "0.5"}}>Или просто переустановите программы.</i>
                </li>
              </ul>
              <p>
                Однако, если вам нужно только экспортировать композиции из{" "}
                <mark className="app">Adobe After Effects</mark>, всё же рекомендуется не
                использовать <mark className="app">Adobe Media Encoder</mark> без острой
                необходимости — в последних версиях{" "}
                <mark className="app">Adobe After Effects</mark> уже есть вполне хороший
                инструментарий для экспорта в популярные форматы. Если нужного вам формата
                нет в списке экспорта, вы можете сконвертировать полученное видео с
                помощью стороннего ПО — например,{" "}
                <mark className="app">Shutter Encoder</mark>.
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="непонятные обозначения, adobe, ae, pr, ps, lr, ofx, ce, davinci, vegas, repack, standalone, офх, адоб, репак, стандалон"
        title="Как понять, для какой программы предназначен установщик плагина?"
      >
        <p>
          Обычно в названии установочных файлов указывается, для каких программ
          предназначен плагин. Это сделано, чтобы не перепутать файлы для нужных вам
          программ и установить их правильно.
        </p>
        <ul>
          <li>
            <mark className="word">AE</mark>, <mark className="file">AEX</mark>,{" "}
            <mark className="word">PR</mark> или <mark className="word">Adobe</mark> —
            плагины установятся в <mark className="app">Adobe After Effects</mark> или{" "}
            <mark className="app">Adobe Premiere Pro</mark>.
            <Addition type="info">
              <ul>
                <li>
                  Иногда плагины с припиской <mark className="word">AE</mark> или{" "}
                  <mark className="word">AEX</mark> могут устанавливаться как в{" "}
                  <mark className="app">Adobe After Effects</mark>, так и в{" "}
                  <mark className="app">Adobe Premiere Pro</mark>.
                </li>
                <li>
                  Плагины, распространяющиеся в виде установщиков, устанавливаются в
                  стандартные папки программ. Перед установкой убедитесь, что программы от{" "}
                  <mark className="company">Adobe</mark> установлены в стандартное
                  расположение — это поможет избежать ситуаций, когда плагин не появляется
                  в нужной программе.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="word">PS</mark>, <mark className="word">LR</mark> — плагины
            установятся в <mark className="app">Adobe Photoshop</mark> или{" "}
            <mark className="app">Adobe Lightroom</mark>.
          </li>
          <li>
            <mark className="word">OFX</mark> или <mark className="word">OpenFX</mark> —
            плагин установится для программ, поддерживающих стандарт формата{" "}
            <mark className="copy">OpenFX</mark>. К ним относятся{" "}
            <mark className="app">DaVinci Resolve</mark>,{" "}
            <mark className="app">Vegas Pro</mark>, <mark className="app">Nuke</mark> и{" "}
            <a href="https://ru.wikipedia.org/wiki/OpenFX#%D0%A5%D0%BE%D1%81%D1%82%D1%8B">
              остальные
            </a>
            .
            <Addition type="warning">
              Такой тип плагинов не совместим с продуктами{" "}
              <mark className="company">Adobe</mark>, так как их программы не поддерживают
              стандарт плагинов <mark className="copy">OpenFX</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">AVX</mark> — плагин установится для программ от{" "}
            <mark className="company">Avid</mark>.
            <Addition type="warning">
              Такой тип плагинов не совместим с программами от{" "}
              <mark className="company">Adobe</mark> и с программами, поддерживающими
              стандарт <mark className="copy">OpenFX</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Standalone</mark> или <mark className="word">SAL</mark>{" "}
            — плагин, который может работать как самостоятельная программа и не зависит от
            других приложений, например <mark className="plugin">Boris FX Mocha Pro</mark>{" "}
            или <mark className="plugin">Boris FX Optics</mark>.
          </li>
          <li>
            <mark className="word">Репак от ...</mark> или{" "}
            <mark className="word">Repack by ...</mark> — перепакованный установщик
            плагина, который устанавливает его в нужное место. Обычно такие плагины уже
            активированы, если не указано иное.
            <Addition type="warning">
              При запуске таких установщиков стоит быть внимательным к чекбоксам — есть
              риск установить в систему ненужные программы.
            </Addition>
          </li>
          <li>
            <mark className="word">CE</mark> — маркировка от группы релизеров{" "}
            <mark className="user">Team V.R.</mark>, расшифровывающаяся как{" "}
            <mark>Corporate Edition</mark>. Так обозначаются дистрибутивы, которые можно
            установить без дополнительных действий по активации. По сути, это маркировка{" "}
            <mark className="word">репака</mark>.
            <Addition type="warning">
              Однако такие установщики не всегда содержат полностью «пролечённый» продукт
              — некоторые эффекты могут остаться без «патченной» лицензии.
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="плагин не активирован, license failed, красный крест, почему при его применении появляются красные кресты, непонятные наложения, надписи про отсутствие лицензии"
        title="Почему эффект, который я хочу применить к слою, накладывает какие-то кресты или надписи про активацию?"
      >
        <p>
          Чаще всего такие наложения говорят об одном — у вас отсутствует действительная
          активация для применённого плагина. Скорее всего, вы проигнорировали инструкцию
          по установке «народной» версии того или иного стороннего плагина или неправильно
          ею воспользовались.
        </p>
        <p>
          В редких случаях источник, откуда вы скачали плагин, может предоставить
          нерабочий вариант. В этом случае найдите нужный плагин из другого источника,
          например из <a href="#1.1">самой первой статьи</a> на этой странице.
        </p>
        <p>
          Если вы экспортируете композицию с помощью{" "}
          <mark className="app">Adobe Media Encoder</mark> — откажитесь от него в пользу
          экспорта напрямую из <mark className="app">Adobe After Effects</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="ошибка 25::3, try reinstalling or contacting the plug-in developer, предупреждение, сбой загрузки, плагин не загружается, visual c++, сбой загрузки следующих подключаемых модулей, переустановите эти модули, ошибка, невозможно применить эффект, не удалось выполнить его инициализацию, попытайтесь переустановить подключаемый модуль или обратитесь к его разработчику, plug-in generated an unexpected exception"
        title="«Warning: The following plugins have failed to load. Please reinstall these plugins» при запуске программы или «Error: This effect cannot be applied because it cannot be initialized» при применении какого-нибудь эффекта"
      >
        <p>
          Эти предупреждения и ошибки могут появляться по разным причинам: повреждённые
          пакеты файлов, устаревшая система или отсутствие поддержки плагинов программой.
        </p>
        <ContentFilter
          windowsContent={
            <div>
              <ul>
                <li>
                  Если вы недавно установили плагины, но не можете их использовать в
                  проекте, убедитесь, что установщик или сами файлы{" "}
                  <mark className="file">AEX</mark> были загружены полностью и без ошибок.
                </li>
                <li>
                  Некоторые плагины могут не запуститься из-за отсутствия пакетов{" "}
                  <mark className="app">Microsoft C++ Visual Redistributable</mark>.
                  Обновите существующие библиотеки или установите недостающие с помощью{" "}
                  <a href="https://github.com/abbodi1406/vcredist/releases/">
                    репака VisualCppRedist AIO от abbodi1406
                  </a>
                  , затем перезагрузите компьютер и повторно откройте проект.
                </li>
                <li>
                  Проверьте версию вашей операционной системы — она должна соответствовать
                  системным требованиям. Если вы запускаете, например,{" "}
                  <mark className="app">Adobe After Effects</mark> версии{" "}
                  <mark>2024</mark> на <mark>Windows 10</mark> сборки <mark>1809</mark>,
                  могут возникать ошибки даже со встроенными эффектами. В этом случае
                  обновите систему до последней доступной сборки через{" "}
                  <mark className="file">ISO</mark>. Узнать текущую сборку можно через{" "}
                  <mark className="app">winver</mark>.
                </li>
                <li>
                  В редких случаях в <mark>Windows</mark> могут повредиться системные
                  файлы. Для восстановления системы выполните<sup>1</sup> в командной
                  строке несколько команд: <mark className="code">sfc /scannow</mark>,{" "}
                  <mark className="code">dism /online /cleanup-image /restorehealth</mark>{" "}
                  и <mark className="code">chkdsk /f /r</mark>.
                  <Addition type="info">
                    <sup>1</sup> Если после этого система автоматически не восстановилась,
                    скачайте образ <mark className="file">ISO</mark> операционной системы{" "}
                    <mark>Windows</mark> и обновитесь поверх установленной версии. Версию
                    системы можно узнать через <mark className="app">winver</mark>.
                  </Addition>
                </li>
                <li>
                  Иногда сторонние плагины могут не запускаться, потому что не подходят
                  под вашу версию <mark className="app">Adobe After Effects</mark>. Они
                  могут быть как устаревшими, так и слишком новыми для текущей сборки
                  программы.
                </li>
                <li>
                  Если не работают даже стандартные плагины, а переустановка{" "}
                  <mark className="app">Visual C++</mark> не помогает — переустановите{" "}
                  <mark className="app">Adobe After Effects</mark> начисто. Перед этим
                  очистите систему от остатков программы с помощью{" "}
                  <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                    Adobe Creative Cloud Cleaner Tool
                  </a>{" "}
                  или любого другого деинсталлятора, например{" "}
                  <mark className="app">Revo Uninstaller</mark>.
                </li>
              </ul>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="ошибка 48::72, запуск новых версий программ на старых версиях windows 7 и 8.1"
        title="Что делать с ошибкой «Точка входа в процедуру не найдена в библиотеке Kernel32.dll» или «Couldn't not find entry point main entry point for .aex»?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Скорее всего, вы пытаетесь запустить{" "}
                <mark className="app">Adobe After Effects</mark> или применить плагины на
                неподдерживаемой операционной системе — например, на{" "}
                <mark>Windows 7</mark> или на старой сборке <mark>Windows 10</mark>, такой
                как <mark>1607</mark> или <mark>1809</mark>. Некоторые «репакеры» убирают
                проверку требований к версии операционной системы, чтобы программа
                установилась без ошибок. Однако они не учитывают, что при работе на
                устаревшей системе могут возникнуть различные проблемы. В следующий раз
                обязательно прочитайте{" "}
                <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
                  системные требования
                </a>{" "}
                для нужной версии программы, прежде чем его устанавливать.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Последняя версия <mark className="app">Adobe After Effects</mark>,
                    поддерживающая <mark>Windows 7</mark> и <mark>Windows 8.1</mark> —{" "}
                    <mark>2019 (16.X)</mark>.
                  </li>
                  <li>
                    Последняя версия <mark className="app">Adobe After Effects</mark>,
                    поддерживающая <mark>Windows 10</mark> версии <mark>LTSC 21H2</mark> —{" "}
                    <mark>2023 (23.X)</mark>.
                  </li>
                </ul>
              </Addition>
              <p>
                Эти ошибки решаются обновлением операционной системы до последней
                доступной версии. Посмотреть текущую сборку <mark>Windows</mark> можно с
                помощью команды <mark className="app">winver</mark> в окне{" "}
                <mark className="app">Выполнить</mark>, которое открывается комбинацией
                клавиш <mark className="key">Win + R</mark>.
              </p>
              <div className="flexible-links">
                <a href="https://www.microsoft.com/ru-ru/software-download/windows11">
                  Обновиться до Windows 11
                </a>
              </div>
              <p>
                Если скачивание с сайта <mark className="company">Microsoft</mark> не
                работает или вам нужен образ <mark className="file">ISO</mark> для записи
                на USB — воспользуйтесь ссылками ниже.
              </p>
              <div className="flexible-links">
                <a href="https://files.rg-adguard.net/category">
                  Скачать оригинальные файлы Microsoft на rg-adguard.net
                </a>
                <a href="https://www.comss.ru/download/page.php?id=2572">
                  Скачать оригинальные образы Windows 10 на Comss
                </a>
                <a href="https://www.comss.ru/download/page.php?id=9234">
                  Скачать оригинальные образы Windows 11 на Comss
                </a>
                <a href="https://nnmclub.to/forum/tracker.php?pid=10412851">
                  Сборки Windows от SanLex на NNM-Club
                </a>
              </div>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="дубликаты плагинов, конфликт эффектов, на диске существует копия подключаемого модуля эффекта, во избежание конфликтов закройте after effects после чего удалите или переместите более раннюю или ненужную версию"
        title="«Warning: there are duplicated effect plug-ins installed on your drive. To avoid problems, quit After Effects and move or delete the older or unneeded version»"
      >
        <p>
          Это предупреждение означает, что одни и те же плагины установлены в нескольких
          директориях. <mark className="app">Adobe After Effects</mark> рекомендует
          удалить дубликаты, чтобы избежать сбоев, и указывает, где именно они находятся.
          Чтобы устранить проблему, достаточно открыть любую из указанных папок и удалить
          один из файлов, предварительно закрыв программу.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Некоторые плагины уже установлены"
          src="images/aftereffects/duplicated_effect_plug-ins_installed.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="rosetta, розетта, старые плагины на новом маке, apple silicon, следующие установленные подключаемые модули не совместимы с используемой версией, в существующих проектах они будут отображаться как отсутствующие их применение невозможно, чтобы использовать эти подключаемые модули, запустите на компьютере mac с процессором intel, to use these plugins run on an intel-based mac computer, to run in a compatible mode choose get info in the application context menu and enable open using rosetta"
        title="«The following plugins are installed, but not yet compatible with this version of After Effects. They will show as missing in existing projects and cannot be applied» после установки плагинов"
      >
        <ContentFilter
          macContent={
            <div>
              <p>
                В этом окне сообщается, что вы установили плагин, который не поддерживает
                вашу версию <mark className="app">Adobe After Effects</mark>. Чаще всего
                это происходит, если вы установили на <mark>Mac</mark> с новыми
                процессорами <mark>Apple Silicon</mark> старый плагин, адаптированный для{" "}
                <mark>Mac</mark> на <mark className="company">Intel</mark>. У новых
                процессоров другая архитектура, поэтому старые программы и плагины
                несовместимы без прослойки <mark className="app">Rosetta</mark>. У этого
                предупреждения есть две вариации — в зависимости от того, какая версия{" "}
                <mark className="app">Adobe After Effects</mark> у вас установлена.
              </p>
              <Addition type="warning">
                При использовании <mark className="app">Adobe After Effects</mark> через
                слой эмуляции <mark className="app">Rosetta</mark> производительность
                программы может снизиться.
              </Addition>
              <Addition type="info">
                <ul>
                  <li>
                    <mark className="app">Rosetta</mark> — это слой эмуляции, позволяющий
                    запускать на <mark>Mac</mark> с <mark>Apple Silicon</mark> программы,
                    разработанные для <mark>Mac</mark> на{" "}
                    <mark className="company">Intel</mark>.
                  </li>
                  <li>
                    <mark>Apple Silicon</mark> — линейка процессоров от{" "}
                    <mark className="company">Apple</mark> на архитектуре <mark>ARM</mark>
                    . Под этим названием имеются в виду все <mark>Mac</mark> с
                    процессорами <mark>M-серии</mark> — будь то <mark>M1</mark>,{" "}
                    <mark>M2 Pro</mark> и другие.
                  </li>
                </ul>
              </Addition>
              <Divider>
                «To run After Effects in a compatible mode, choose &quot;Get Info&quot; in
                the application context menu and enable &quot;Open using Rosetta&quot;»
              </Divider>
              <p>
                В этом случае вам немного повезло: вы можете запустить<sup>1</sup>{" "}
                программу со старыми плагинами в режиме совместимости с помощью{" "}
                <mark className="app">Rosetta</mark>. Для этого откройте меню{" "}
                <mark className="select">«Help»</mark> и выберите пункт{" "}
                <mark className="select">«Open using Rosetta»</mark>. После этого{" "}
                <mark className="app">Adobe After Effects</mark> перезапустится в режиме
                совместимости, и старые плагины снова станут доступны в проектах.
              </p>
              <Addition type="danger">
                <ul>
                  <li>
                    <sup>1</sup> Запустить программу в режиме совместимости можно лишь с
                    оговоркой: <mark className="app">Adobe After Effects</mark>, начиная с
                    версии <mark>24.0</mark>, больше не поддерживает эмуляцию через{" "}
                    <mark className="app">Rosetta</mark>. То есть в этих версиях нельзя
                    открыть сборку программы для <mark className="company">Intel</mark> на
                    процессорах <mark>Apple Silicon</mark>. Если вы видите этот текст в
                    окне предупреждения, но в меню <mark className="select">«Help»</mark>{" "}
                    у вас отсутствует кнопка{" "}
                    <mark className="select">«Open using Rosetta»</mark>, скорее всего,{" "}
                    <mark className="company">Adobe</mark> просто не убрала старую
                    подсказку. Последняя версия, в которой ещё можно открыть{" "}
                    <mark className="app">Adobe After Effects</mark> через{" "}
                    <mark className="app">Rosetta</mark>, — <mark>23.6</mark>.
                  </li>
                  <li>
                    Плагины, адаптированные исключительно под <mark>Apple Silicon</mark>,
                    могут не работать в режиме совместимости с помощью{" "}
                    <mark className="app">Rosetta</mark>.
                  </li>
                </ul>
              </Addition>
              <Divider>
                «To use these plugins, run After Effects on an Intel-based Mac computer»
              </Divider>
              <p>
                А в этом случае всё уже серьёзнее: <mark className="company">Adobe</mark>{" "}
                убрала поддержку <mark>Rosetta</mark> в последних версиях{" "}
                <mark className="app">Adobe After Effects</mark>, начиная с{" "}
                <mark>24.0</mark>. Поэтому плагины, созданные для <mark>Mac</mark> на{" "}
                <mark className="company">Intel</mark>, больше не смогут работать в режиме
                совместимости. В такой ситуации у вас остаются три варианта.
              </p>
              <ul>
                <li>
                  В окне предупреждения будет показан список недоступных плагинов.
                  Попробуйте найти их свежие версии в интернете, установить и затем заново
                  открыть <mark className="app">Adobe After Effects</mark>.
                </li>
                <li>
                  Если нужные плагины давно не обновлялись или недоступны для{" "}
                  <mark>Mac</mark> на <mark>Apple Silicon</mark>, откатитесь на версию{" "}
                  <mark className="app">Adobe After Effects</mark> <mark>23.6</mark> — в
                  ней ещё доступна возможность запуска через{" "}
                  <mark className="app">Rosetta</mark> на старых <mark>Mac</mark> с{" "}
                  <mark className="company">Intel</mark>.
                </li>
                <li>
                  Или найдите у себя старый <mark>Mac</mark> на процессоре{" "}
                  <mark className="company">Intel</mark> — и работайте на нём.
                </li>
              </ul>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="trapcode, mbl, magic bullet, vfx suite, universe, юниверс, трапкод, партикуляр, мбл, red giant, packages directory, ошибка установки, распаковать архив"
        title="«This installer application has been moved. It must be run from its original folder containing a packages directory. The installer will now exit.» при установке любого пакета от Red Giant"
      >
        <p>
          Скорее всего, вы пытаетесь установить плагины от{" "}
          <mark className="plugin">Red Giant</mark>, не распаковав архив полностью. При
          использовании стандартного просмотрщика архивов в <mark>Windows 10 или 11</mark>{" "}
          и при запуске из него файла <mark className="file">EXE</mark> остальные
          файлы-зависимости остаются внутри архива. В результате установщик не может найти
          нужные данные и выдаёт ошибку.
        </p>
        <p>
          Чтобы установка прошла корректно, распакуйте весь архив заранее или используйте{" "}
          <a
            href="https://www.rarlab.com/download.htm"
            title="Официальный сайт WinRAR"
          >
            WinRAR
          </a>
          . <mark className="app">WinRAR</mark> умеет временно извлекать весь архив при
          открытии установочных файлов вроде <mark className="file">EXE</mark> или{" "}
          <mark className="file">MSI</mark>, даже если вы открыли их напрямую из архива.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="red giant, maxon, активация, unlicensed, нет лицензии, redgiant activation service unlocker, please launch the maxon app and sign in to your account, in order to keep using this product without interruption, please activate a license, trapcode particular, magic bullet looks, vfx suite, universe"
        title="«Red Giant is unlicensed» при применении любого плагина от Maxon"
      >
        <p>
          Эта ошибка возникает из-за того, что у вас не активированы плагины от{" "}
          <mark className="company">Red Giant</mark>. Если вы недавно устанавливали
          «народную» версию, то скорее всего, вы пропустили важный пункт в инструкции.
          Пользователи часто забывают запустить{" "}
          <mark className="app">RedGiant Activation Service Unlocker.exe</mark> после
          установки — и в итоге получают сообщение об отсутствии лицензии.
        </p>
        <p>
          Чтобы это исправить, запустите указанный файл из архива или записи — или
          перечитайте инструкцию к релизу. Если предупреждение появится снова, повторно
          примените активатор или установите более старую версию плагинов — например,{" "}
          <mark>2024.1</mark> или более раннюю.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="red giant, team v.r., активатор, ошибка 5, отказано в доступе, access denied, deletefile, red giant service, select action - an error occurred while trying to replace the existing file: deletefile failed; code 5. access denied"
        title="«Виберiть дiю — виникла помилка при спробi замiни iснуючого файлу: DeleteFile збiй; код 5. Отказано в доступi» при применении активатора от Team V.R. для пакетов Red Giant"
      >
        <p>
          Эта ошибка означает, что активатор не может перезаписать какой-то файл, потому
          что он у вас открыт в фоновом режиме. В вашем окне ошибки должен отобразиться
          полный путь до «виновника торжества» — скорее всего, это будет висящий в фоне{" "}
          <mark className="app">Red Giant Service.exe</mark>.
        </p>
        <p>
          Чтобы корректно применить активатор, закройте проблемный сервис с помощью{" "}
          <mark className="app">Диспетчера задач</mark>, завершив процесс{" "}
          <mark className="app">Red Giant Service.exe</mark> во вкладке{" "}
          <mark className="select">«Подробности» (Windows 10 или 11 21H2)</mark> или{" "}
          <mark className="select">«Сведения» (Windows 11 22H2+)</mark>. После завершения
          проблемного процесса, повторите попытку активации с помощью{" "}
          <mark className="select">«Спробувати знову»</mark> — она должна пройти
          нормально.
        </p>
        <ContentFigure
          caption="Диспетчер задач"
          imgTitle="Завершаем процесс Red Giant Service.exe"
          src="images/kill_redgiantservice.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="element 3d, video copilot, vc, лицензия, активация, install license file, use your vc download account to generate a license for this computer"
        title="«Generate License» при применении Element 3D"
      >
        <p>
          В этом окне вам нужно предоставить файл лицензии с расширением{" "}
          <mark className="file">LICENSE</mark> с помощью кнопки{" "}
          <mark className="select">«Install License File»</mark>. Если файл лицензии не
          принимается, то, скорее всего, вы не прочли полностью инструкцию по активации{" "}
          «народной» версии этого плагина. Обычно там указано, что для корректного
          принятия файла с лицензией нужно подменить файл плагина на тот, что предоставлен
          в записи, откуда вы скачали плагин. Тогда файл с активацией применится
          корректно, и вы сможете наконец-то начать работу с этим плагином.
        </p>
        <ContentFigure
          caption="Element License"
          imgTitle="Окно для установки лицензии"
          src="images/aftereffects/generate_license_element3d.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="мокка про, mocha pro, boris fx, team v.r., лицензия, license, активация"
        title="«No interactive license in use» при открытии Mocha Pro"
      >
        <p>
          Эта ошибка об отсутствии лицензии может появляться в последних релизах{" "}
          <mark className="plugin">Mocha Pro</mark>, распространяемых в виде репаков от{" "}
          <mark className="user">Team V.R.</mark>. Чтобы быстро избавиться от неё, нажмите{" "}
          <mark className="select">«License»</mark> рядом с эффектом{" "}
          <mark className="plugin">Mocha Pro</mark> в окне{" "}
          <mark className="select">«Effects Controls»</mark>, а затем закройте открывшееся
          окно лицензирования плагина. После этого попробуйте запустить основное окно
          плагина, оно больше не должно вызывать предупреждения об активации.
        </p>
        <ContentFigure
          caption="Effects Controls"
          imgTitle="Открытие окна лицензирования Mocha Pro"
          src="images/aftereffects/select_license_in_mocha_pro.png"
          theme="dark"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="zxp, zxp installer, ошибка -193, error -193, creative cloud, extension manager, расширения, aescripts"
        title="«Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again» при использовании ZXP Installer"
      >
        <p>
          Эта ошибка прямо указывает на то, что на вашем устройстве отсутствует программа{" "}
          <mark className="app">Adobe Creative Cloud</mark>. Если вы пытаетесь установить
          какое-либо расширение формата <mark className="file">ZXP</mark> с помощью{" "}
          <a href="https://zxpinstaller.com/">ZXP Installer от ELEMENTS Storage Media</a>{" "}
          — откажитесь от него в пользу{" "}
          <a href="https://aescripts.com/learn/zxp-installer/">
            ZXP Installer от aescripts
          </a>{" "}
          или ручной распаковки расширения в нужное место. При этом{" "}
          <mark className="app">Adobe Creative Cloud</mark> устанавливать не нужно, если
          вы используете репаки от <mark className="user">KpoJluK</mark> или{" "}
          <mark className="user">m0nkrus</mark>.
        </p>
        <Addition type="info">
          Более подробную информацию об установке дополнительных материалов вы можете
          прочитать в <a href="#2.1">статье 2.1</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="обновление и перенос, перенести плагины расширения и пресеты, новая версия афтера, хочу обновить программу, update, плагины, скрипты, настройки, сохранить настройки"
        title="Как обновить программу, не потеряв при этом плагины и прочий установленный контент?"
      >
        <p>
          Обновление программы — вещь хорошая: разработчики добавляют новые функции и
          исправляют старые баги. У некоторых пользователей часто возникает вопрос, как
          правильно провести эту процедуру и нужно ли что-то делать дополнительно после
          установки новой версии <mark className="app">Adobe After Effects</mark>.
          Существует два вида обновлений — между версиями «одного года» и между «разными
          годами».
        </p>
        <Addition type="info">
          Под «годом» обычно подразумевается мажорная версия в названии программы,
          например <mark className="app">Adobe After Effects 2023</mark> или{" "}
          <mark className="app">Adobe Media Encoder 2025</mark>.
        </Addition>
        <Divider>Что произойдёт с моими проектами после обновления программы?</Divider>
        <p>
          Проекты, созданные в предыдущих версиях, будут автоматически сконвертированы
          новой версией программы. Перед этим она покажет окно{" "}
          <mark className="warning">
            «This project must be converted from version XX.X.X»
          </mark>
          . Исходный файл при этом не изменится. Не забудьте сохранить новую версию
          проекта по завершении процесса.
        </p>
        <Divider>Обновление между версиями «одного года»</Divider>
        <p>
          Чтобы перейти на новую версию <mark className="app">Adobe After Effects</mark> в
          пределах «одного года», например с <mark>24.0</mark> на <mark>24.6</mark>,
          достаточно запустить установщик и выполнить стандартное обновление. Он
          перезапишет только её основные файлы, не затрагивая ваши дополнения. После этой
          процедуры вам не придётся вручную переносить плагины и пресеты со старой версии
          программы в новую.
        </p>
        <p>
          При первом запуске после обновления{" "}
          <mark className="app">Adobe After Effects</mark> появится диалоговое окно с
          предложением импортировать настройки с предыдущей версии. В нём достаточно
          выбрать нужную версию, и этот процесс начнётся автоматически.
        </p>
        <ContentFigure
          caption="Adobe After Effects"
          imgTitle="Диалог переноса настроек со старой версии в более новую"
          src="images/aftereffects/migrate_settings.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          Если вы случайно закрыли окно с предложением переноса настроек, его можно
          открыть снова в{" "}
          <mark className="select">
            «Edit» → «Preferences» → «Startup & Repair» → «Migrate Previous Version
            Preferences»
          </mark>
          . В старых версиях <mark className="app">Adobe After Effects</mark> эта кнопка
          находится в разделе <mark className="select">«General»</mark>.
        </Addition>
        <Divider>Обновление с «одного года» на другой</Divider>
        <ContentFilter
          windowsContent={
            <div>
              <p>
                Если вы решили обновиться с «одного года» на другой — например, с{" "}
                <mark>23.6</mark> на <mark>25.2</mark>, — вам потребуется вручную
                перенести плагины, пресеты и другие дополнения. При установке версии
                «другого года» старая программа не удаляется автоматически и остаётся на
                вашем устройстве. При необходимости вы сможете удалить её позже.
              </p>
              <Divider>Что нужно сохранить на всякий случай?</Divider>
              <Addition type="danger">
                Копируйте только те файлы и папки, которые вы добавляли сами. Не трогайте
                стандартные файлы, чтобы случайно не нарушить работу новой версии
                программы после замены файлов.
              </Addition>
              <ul>
                <li>
                  Сторонние плагины формата <mark className="file">AEX</mark> из
                  директории{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Plug-ins
                  </mark>
                  .
                  <Addition type="info">
                    При желании вы можете перенести сторонние плагины из папки с
                    программой в общую —{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                    </mark>
                    . После этого они будут работать во всех поддерживаемых версиях{" "}
                    <mark className="app">Adobe After Effects</mark>, и при будущих
                    обновлениях их не придётся перемещать.
                  </Addition>
                  <Addition type="warning">
                    Не трогайте и не перемещайте директории{" "}
                    <mark className="path">(AdobePSL)</mark>,{" "}
                    <mark className="path">Cineware by Maxon</mark>,{" "}
                    <mark className="path">Effects</mark>,{" "}
                    <mark className="path">Extensions</mark>,{" "}
                    <mark className="path">Format</mark> и{" "}
                    <mark className="path">Keyframe</mark> без острой необходимости: в них
                    находятся стандартные плагины.
                  </Addition>
                </li>
                <li>
                  Пресеты формата <mark className="file">FFX</mark> из директорий{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 2025\Support Files\Presets
                  </mark>{" "}
                  и{" "}
                  <mark className="path">
                    C:\Users\%UserName%\Documents\Adobe\After Effects 20XX\User Presets
                  </mark>
                  .
                </li>
                <li>
                  Скрипты форматов <mark className="file">JSX</mark> и{" "}
                  <mark className="file">JSXBIN</mark> из директорий{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts
                  </mark>{" "}
                  и{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Scripts\ScriptUI Panels
                  </mark>
                  .
                </li>
                <li>
                  Пользовательские файлы для цветокоррекции из директории{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Lumetri
                  </mark>
                  .
                </li>
              </ul>
              <Divider>Что не обязательно сохранять?</Divider>
              <ul>
                <li>
                  Плагины формата <mark className="file">AEX</mark>, установленные в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  , переносить не нужно — они автоматически отображаются во всех
                  поддерживаемых версиях <mark className="app">Adobe After Effects</mark>.
                </li>
                <li>
                  Не стоит трогать файлы комплексных плагинов, например{" "}
                  <mark className="plugin">Boris FX Sapphire</mark> или{" "}
                  <mark className="plugin">Magic Bullet Suite</mark>, если вы не знаете,
                  что с ними делать.
                </li>
                <li>
                  Расширения формата <mark className="file">ZXP</mark> также не требуют
                  переноса — они размещаются в своей общей директории и доступны во всех
                  поддерживаемых версиях <mark className="app">Adobe After Effects</mark>.
                </li>
                <li>
                  Файлы проектов и исходники, над которыми вы работали. Они никуда не
                  пропадут после обновления.
                </li>
              </ul>
              <Divider>А есть способ обновления попроще?</Divider>
              <Addition type="danger">
                Способ обновления, описанный ниже, не гарантирует <mark>100%</mark>{" "}
                стабильной работы новой версии{" "}
                <mark className="app">Adobe After Effects</mark>, поэтому все действия вы
                выполняете на свой страх и риск. Если после такого обновления возникнут
                проблемы, выполните чистую установку программы, предварительно удалив
                предыдущие версии с помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>{" "}
                или любого другого деинсталлятора, например{" "}
                <mark className="app">Revo Uninstaller</mark>.
              </Addition>
              <p>
                Чтобы обновиться с сохранением плагинов и пресетов, нужно переименовать
                папку старой версии программы. Так установщик новой версии «подумает»,
                будто она уже установлена, и предложит перезаписать файлы. Для этого
                откройте директорию с программами <mark className="company">Adobe</mark>,{" "}
                обычно это <mark className="path">C:\Program Files\Adobe</mark>. Затем
                продублируйте папку старой версии, уберите из имени приставку{" "}
                <mark>«- копия»</mark> и измените год на нужный. Например, при переходе с{" "}
                <mark>23.6</mark> на <mark>25.2</mark> нужно переименовать{" "}
                <mark className="path">Adobe After Effects 2023</mark> в{" "}
                <mark className="path">Adobe After Effects 2025</mark>.
              </p>
              <p>
                После переименования запустите установщик новой версии и убедитесь, что он
                «увидел» продублированную папку и предлагает установку в неё. Выберите
                язык и нажмите <mark className="select">«Продолжить»</mark>. По завершении{" "}
                <mark className="app">Adobe After Effects</mark> предложит перенести
                настройки из предыдущих версий — согласитесь.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    После обновления <mark className="app">Adobe After Effects</mark> не
                    забудьте также обновить{" "}
                    <mark className="app">Adobe Premiere Pro</mark> и{" "}
                    <mark className="app">Adobe Media Encoder</mark>, чтобы связь между
                    программами работала корректно.
                  </li>
                  <li>
                    Если некоторые старые плагины или расширения перестали работать в
                    новой версии <mark className="app">Adobe After Effects</mark>, удалите
                    их и установите более свежие.
                  </li>
                </ul>
              </Addition>
              <Divider>Если что-то пошло не так при таком обновлении</Divider>
              <p>
                Если после обновления «поверх» программа не запускается или работает
                нестабильно, придётся выполнить чистую установку. В этом случае сохраните
                резервные копии важных дополнений или просто запишите их список, чтобы
                затем установить всё заново.
              </p>
              <p>
                После этого удалите старые версии с помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>{" "}
                или другого деинсталлятора, например{" "}
                <mark className="app">Revo Uninstaller</mark>. Затем выполните чистую
                установку программы и постепенно возвращайте нужные дополнения в
                директорию <mark className="app">Adobe After Effects</mark>, после чего
                можно начинать работу.
              </p>
              <Addition type="warning">
                При копировании файлов из резервной копии в директорию программы не
                заменяйте новые стандартные файлы старыми, чтобы избежать проблем со
                стабильностью.
              </Addition>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        tag="безопасный режим, reset preferences, safe mode, установка поверх, нестабильно, сброс настроек, startup repair options, переустановка поверх, чистая установка"
        title="Что делать, если программа начала работать нестабильно, а переустанавливать с нуля не хочется?"
      >
        <p>
          Иногда при работе с <mark className="app">Adobe After Effects</mark> со временем
          вы можете заметить, что программа начинает вести себя странно: появляются ошибки
          «на ровном месте» или инструменты перестают работать как положено. Чтобы это
          исправить, попробуйте сбросить пользовательские настройки или установить текущую
          версию поверх уже установленной.
        </p>
        <ContentFilter
          windowsContent={
            <div>
              <Divider>Сброс настроек при запуске</Divider>
              <p>
                Чтобы быстро сбросить все настройки{" "}
                <mark className="app">Adobe After Effects</mark>, запустите программу с
                ярлыка, как обычно, но с зажатыми клавишами{" "}
                <mark className="key">Ctrl + Alt + Shift</mark>. После этого должно
                открыться окно <mark className="select">«Startup Repair Options»</mark>,
                где можно включить безопасный режим, отключить плагины в менеджере
                эффектов или сбросить настройки.
              </p>
              <Addition type="info">
                В старых версиях <mark className="app">Adobe After Effects</mark> при
                запуске с нажатыми клавишами{" "}
                <mark className="key">Ctrl + Alt + Shift</mark> появляется более простое
                окно с вопросом, нужно ли сбросить настройки.
              </Addition>
              <ContentFigure
                caption="Adobe After Effects"
                imgTitle="Окно для решения проблем при запуске программы"
                src="images/aftereffects/startup_repair_options.png"
                theme="dark"
                type="image"
                variant="windows"
              />
              <p>
                Чтобы сбросить все настройки, нажмите{" "}
                <mark className="select">«Reset Preferences»</mark>. Подтверждения
                удаления не будет, поэтому при необходимости заранее сохраните свои
                настройки. Обычно они хранятся по пути{" "}
                <mark className="path">%APPDATA%\Adobe\After Effects\XX.X</mark>.
              </p>
              <Divider>Переустановка программы поверх</Divider>
              <p>
                Если проблемы в работе программы сохраняются, попробуйте установить ту же
                версию <mark className="app">Adobe After Effects</mark> поверх текущей.
                Для этого откройте установщик программы и выполните установку так, как
                будто вы обновляете программу. При таком «обновлении» текущие настройки и
                дополнительные никуда не пропадут.
              </p>
              <Divider>Или всё же переустанавливаем программу с нуля</Divider>
              <p>
                Если и установка текущей версии поверх не помогла — выполните полную
                переустановку программы, предварительно удалив предыдущие установки с
                помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>{" "}
                или любого другого деинсталлятора, например{" "}
                <mark className="app">Revo Uninstaller</mark>. По желанию после удаления
                программы вы можете почистить реестр <mark>Windows</mark>, например с
                помощью <mark className="app">Vit Registry Fix</mark>, или
                проанализировать оставшиеся директории с помощью{" "}
                <mark className="app">WizTree</mark> (
                <mark className="path">%APPDATA%</mark>,{" "}
                <mark className="path">Program Files</mark> или{" "}
                <mark className="path">%USERPROFILE%/Documents</mark>).
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <Addition type="info">
        Некоторые решения проблем, которые могут у вас возникнуть после установки
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
          «Ошибки и предупреждения»
        </a>
        .
      </Addition>
    </div>
  );
};

export default AEInstallProblems;
