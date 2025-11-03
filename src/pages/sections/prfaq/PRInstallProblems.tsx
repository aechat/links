import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ContentFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import ContentFilter from "../../../components/features/ContentFilter";

const PRInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="как установить, куда устанавливать, установка, распаковка, инструкция, плагины, шаблоны, пресеты, скрипты, расширения, пакеты, луты, архивы, zip, rar"
        title="В архиве или под записью нет инструкции по установке. Куда что кидать?"
      >
        <p>
          Обычно большинство дополнительных материалов устанавливается одинаково — всё
          зависит от типа файла. Однако некоторые шаги могут отличаться в зависимости от
          операционной системы. В этой статье мы расскажем, как устанавливать разные типы
          файлов для <mark className="app">Adobe Premiere Pro</mark> и использовать их в
          программе.
        </p>
        <Addition type="info">
          Сторонние плагины и расширения, будь то лицензионные или «народные», в
          большинстве случаев без проблем устанавливаются как на официальную, так и на
          «народную» версию <mark className="app">Adobe Premiere Pro</mark>. Способы
          проверки лицензии программы и сторонних дополнений обычно не пересекаются.
        </Addition>
        <Addition type="warning">
          Прежде чем использовать шаблоны формата <mark className="file">PRPROJ</mark>,{" "}
          <mark className="file">AEP</mark>, <mark className="file">MOGRT</mark> или
          пакеты для <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> или подобных расширений, убедитесь,
          что архив с проектом или пакетом полностью распакован, а его содержимое
          находится в директории, путь к которой не содержит кириллических символов и не
          превышает 256 символов.
        </Addition>
        <Divider>Универсальные инструкции для разных типов файлов</Divider>
        <ul>
          <li>
            Проекты формата <mark className="file">PRPROJ</mark> открываются как обычные
            проекты в <mark className="app">Adobe Premiere Pro</mark>: двойным кликом,
            через <mark className="select">«File» → «Open Project»</mark> или сочетанием
            клавиш <mark className="key">Ctrl + O</mark>. Чтобы импортировать такой файл в
            свой проект, воспользуйтесь командой{" "}
            <mark className="select">«File» → «Import»</mark> или сочетанием{" "}
            <mark className="key">Ctrl + I</mark>.
            <Addition type="info">
              <ul>
                <li>
                  Прежде чем открывать проект формата <mark className="file">PRPROJ</mark>
                  , полностью распакуйте архив и открывайте проект уже из распакованной
                  папки. Так вы убережёте себя от появления ошибок, связанных с
                  отсутствием файлов, например{" "}
                  <mark className="warning">«Медиаданные в автономном режиме»</mark>.
                </li>
                <li>
                  Если попытаться открыть только файл <mark className="file">PRPROJ</mark>{" "}
                  без полной распаковки архива,{" "}
                  <mark className="app">Adobe Premiere Pro</mark> не сможет найти все
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
            Если в архиве находится файл <mark className="file">AEP</mark>, для импорта
            таких проектов необходим установленный{" "}
            <mark className="app">Adobe After Effects</mark>. Их можно импортировать в
            свой проект через <mark className="select">«File» → «Import»</mark> или{" "}
            <mark className="key">Ctrl + I</mark>. Композиция из{" "}
            <mark className="app">Adobe After Effects</mark> в{" "}
            <mark className="app">Adobe Premiere Pro</mark> будет работать через{" "}
            <mark className="plugin">Dynamic Link</mark>
            <sup>1</sup>.
            <Addition type="warning">
              <ul>
                <li>
                  <sup>1</sup> Прежде чем импортировать <mark className="file">AEP</mark>,
                  убедитесь, что у вас установлены{" "}
                  <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere Pro</mark> одного года выпуска.
                  Например, <mark className="app">Adobe After Effects 2025</mark> и{" "}
                  <mark className="app">Adobe Premiere Pro 2024</mark> не смогут
                  взаимодействовать через <mark className="plugin">Dynamic Link</mark>,
                  так как их релизные циклы различаются.
                </li>
                <li>
                  Если <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere Pro</mark> установлены в рамках
                  одного релизного цикла, но всё равно не «видят» друг друга — проверьте,
                  установлены ли они в директорию по умолчанию, а не на другой диск,
                  отличный от <mark className="path">C:\</mark>.
                </li>
              </ul>
            </Addition>
            <Addition type="info">
              <ul>
                <li>
                  Прежде чем импортировать проект формата{" "}
                  <mark className="file">AEP</mark>, полностью распакуйте архив и
                  импортируйте проект уже из распакованной папки. Так вы убережёте себя от
                  появления разноцветных «плейсхолдеров» и ошибок, связанных с отсутствием
                  файлов.
                </li>
                <li>
                  Если попытаться импортировать только файл{" "}
                  <mark className="file">AEP</mark> без полной распаковки архива,{" "}
                  <mark className="app">Adobe Premiere Pro</mark> не сможет найти все
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
                  <mark className="app">Keka</mark> или{" "}
                  <mark className="app">The Unarchiver</mark>. Для распаковки многотомного
                  архива, то есть, если в названии архивов есть{" "}
                  <mark className="file">PART1</mark>, <mark className="file">PART2</mark>{" "}
                  и так далее, нужно запустить распаковку только первой части — остальные
                  подхватятся автоматически. Другие части архива не нужно трогать без
                  острой необходимости, если вы не знаете, что с ними делать.
                  <Addition type="info">
                    Загрузить <mark className="app">Keka</mark> можно по{" "}
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
                        Если вы хотите сделать <mark className="app">Keka</mark>{" "}
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
                  Плагины формата <mark className="file">PLUGIN</mark> или{" "}
                  <mark className="file">BUNDLE</mark> распаковываются в общую папку
                  плагинов —{" "}
                  <mark className="path">
                    /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  . Обычно установленные плагины находятся в окне{" "}
                  <mark className="select">«Effects»</mark> и могут вызываться с помощью{" "}
                  <mark className="plugin">Excalibur</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        В редких случаях плагин может вызываться из другого места в
                        интерфейсе программы — читайте приложенную документацию к
                        устанавливаемому плагину.
                      </li>
                      <li>
                        Если вы хотите, чтобы плагин отображался только в конкретной
                        версии <mark className="app">Adobe Premiere Pro</mark> —
                        распакуйте его в папку{" "}
                        <mark className="path">
                          /Applications/Adobe Premiere Pro 20XX/Plug-Ins
                        </mark>
                        , где <mark>20XX</mark> — год вашей версии программы.
                      </li>
                      <li>
                        Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                        <mark className="app">Adobe Premiere Pro</mark> и наоборот.
                        Уточняйте в документации к устанавливаемому плагину, для каких
                        версий <mark className="app">Adobe Premiere Pro</mark> он
                        предназначен.
                      </li>
                    </ul>
                  </Addition>
                  <Addition type="warning">
                    Учтите, что не все плагины формата{" "}
                    <mark className="file">PLUGIN</mark> поддерживаются в{" "}
                    <mark className="app">Adobe Premiere Pro</mark>, так как по большей
                    части они предназначены для{" "}
                    <mark className="app">Adobe After Effects</mark> и не всегда имеют
                    обратную совместимость с{" "}
                    <mark className="app">Adobe Premiere Pro</mark>.
                  </Addition>
                  <Addition type="danger">
                    Плагины формата <mark className="file">AEX</mark> не подходят для
                    устройств на <mark>macOS</mark>, так как они предназначены для
                    устройств на <mark>Windows</mark>.
                  </Addition>
                </li>
                <li>
                  <p>
                    Если в архиве находится файл <mark className="file">MOGRT</mark>,
                    такие шаблоны устанавливаются в панели{" "}
                    <mark className="select">«Essential Graphics»</mark> с помощью кнопки{" "}
                    <mark className="select">«Install Motion Graphics template»</mark>.
                    Также можно перенести файлы формата{" "}
                    <mark className="file">MOGRT</mark> прямо в это окно перетаскиванием.
                  </p>
                  <ContentFigure
                    caption="Essential Graphics"
                    imgTitle="Установка mogrt-шаблонов"
                    src="images/premierepro/install_mogrt.png"
                    theme="dark"
                    type="image"
                    variant="mac"
                  />
                  <p>
                    Также файлы <mark className="file">MOGRT</mark> можно поместить в
                    стандартную папку локальных шаблонов по пути{" "}
                    <mark className="path">
                      /Library/Application Support/Adobe/Common/Motion Graphics Templates
                    </mark>
                    , и они появятся в окне{" "}
                    <mark className="select">«Essential Graphics»</mark>.
                  </p>
                  <Addition type="info">
                    <p>
                      <mark className="file">MOGRT</mark>-файл — по своей сути архив,
                      внутри которого обычно лежат два-три файла, формирующие анимационный
                      шаблон. Такие шаблоны можно создавать в{" "}
                      <mark className="app">Adobe After Effects</mark> и{" "}
                      <mark className="app">Adobe Premiere Pro</mark>.
                    </p>
                    <ul>
                      <li>
                        <mark className="file">DEFINITION.JSON</mark> — файл, в котором
                        содержатся ссылки, контроллеры и другая техническая информация для
                        корректной работы шаблона.
                      </li>
                      <li>
                        <mark className="file">PROJECT.AEGRAPHICS</mark> — файл, где
                        хранится вся заготовленная анимация. Стандартными средствами{" "}
                        <mark className="app">Adobe Premiere Pro</mark> её нельзя
                        отредактировать, но такой проект можно открыть в{" "}
                        <mark className="app">Adobe After Effects</mark>, при
                        необходимости внести правки, а затем конвертировать обратно в{" "}
                        <mark className="file">MOGRT</mark>.
                      </li>
                      <li>
                        <mark className="file">THUMB.JPG</mark> — статичная обложка
                        шаблона для предварительного просмотра в окне{" "}
                        <mark className="select">«Essential Graphics»</mark>.
                      </li>
                    </ul>
                  </Addition>
                  <Addition type="warning">
                    Для использования некоторых шаблонов формата{" "}
                    <mark className="file">MOGRT</mark> может потребоваться установленный
                    в системе <mark className="app">Adobe After Effects</mark>. Если эта
                    программа у вас уже установлена, но{" "}
                    <mark className="app">Adobe Premiere Pro</mark> выдаёт ошибку о
                    необходимости её установки, возможно, для связки двух программ
                    потребуется <mark className="app">Adobe Creative Cloud</mark>.
                  </Addition>
                </li>
                <li>
                  Пресеты формата <mark className="file">PRFPSET</mark> устанавливаются
                  следующим образом:
                  <ul>
                    <li>
                      Откройте окно <mark className="select">«Effects»</mark>, нажмите на
                      иконку с тремя полосками в его заголовке, а затем — на кнопку{" "}
                      <mark className="select">«Import Presets»</mark>.
                      <Addition type="info">
                        В папке с пресетами вы можете создать собственную папку или
                        расположить скачанные пресеты в уже существующих.
                      </Addition>
                      <ContentFigure
                        caption="Adobe Premiere Pro"
                        imgTitle="Установка пресетов в Adobe Premiere Pro"
                        src="images/premierepro/import_presets.png"
                        theme="dark"
                        type="image"
                        variant="windows"
                      />
                    </li>
                    <li>
                      В открывшемся окне выберите файл пресетов формата{" "}
                      <mark className="file">PRFPSET</mark>.
                    </li>
                    <li>
                      После выбора файла импортированные пресеты появятся в окне{" "}
                      <mark className="select">«Effects»</mark> в папке{" "}
                      <mark className="path">Presets</mark>.
                      <Addition type="info">
                        Все ваши пресеты хранятся в одном общем файле{" "}
                        <mark className="file">
                          Effect Presets and Custom Items.prfpset
                        </mark>
                        , который находится по пути{" "}
                        <mark className="path">
                          ~/Documents/Adobe/Premiere Pro/XX.X/Profile-XXXXXX
                        </mark>
                        . Этот файл не стоит редактировать вне{" "}
                        <mark className="app">Adobe Premiere Pro</mark>, но его можно
                        скопировать и перенести в другое место, чтобы в случае
                        необходимости восстановить пресеты.
                      </Addition>
                    </li>
                  </ul>
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
                        <mark className="app">Adobe Premiere Pro</mark> его поддерживает,
                        иначе он может не появиться в списке расширений.
                      </li>
                      <li>
                        Если расширение просит включить разрешение на запись файлов и
                        доступ в интернет, перейдите в{" "}
                        <mark className="select">
                          «Premiere Pro» → «Preferences» → «Control Surface»
                        </mark>{" "}
                        и установите флажок у параметра{" "}
                        <mark className="select">
                          «Allow Extensions to write to files and access network»
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
                  <p>
                    Аудиоплагины формата <mark className="file">VST</mark> или{" "}
                    <mark className="file">VST3</mark> можно устанавливать в любом месте
                    системы, однако рекомендуется хранить их в общей папке:{" "}
                    <mark className="path">/Library/Audio/Plug-Ins/VST</mark> — для{" "}
                    <mark className="file">VST</mark> или{" "}
                    <mark className="path">/Library/Audio/Plug-Ins/VST3</mark> — для{" "}
                    <mark className="file">VST3</mark>. Иногда плагины распространяются в
                    виде установщиков и автоматически распаковываются в нужные каталоги.
                  </p>
                  <p>
                    Однако сами по себе эти плагины в программе не появятся.{" "}
                    <mark className="app">Adobe Premiere Pro</mark> не ищет их
                    автоматически при запуске, поэтому сканирование нужно запускать
                    вручную. Чтобы просканировать аудиоплагины, перейдите в{" "}
                    <mark className="select">«Preferences» → «Audio»</mark> и нажмите
                    кнопку <mark className="select">«Manage Audio Plug-Ins»</mark>. В
                    открывшемся окне выберите{" "}
                    <mark className="select">«Scan for Plug-Ins»</mark>, чтобы программа
                    обнаружила плагины, установленные в системе.
                  </p>
                  <ContentFigure
                    caption="Preferences"
                    src="images/premierepro/install_vst3.mp4"
                    theme="dark"
                    type="video"
                    variant="mac"
                  />
                  <p>
                    При необходимости можно добавить собственную папку с плагинами с
                    помощью кнопки <mark className="select">«Add»</mark> в разделе{" "}
                    <mark className="select">«VST Plug-In Folders»</mark>, если
                    автоматический поиск не нашёл нужные файлы.
                  </p>
                  <p>
                    После сканирования плагины появятся в списке установленных, и вы
                    сможете использовать их в{" "}
                    <mark className="select">«Track Mixer»</mark> или других разделах
                    программы.
                  </p>
                </li>
                <li>
                  Файлы для цветокоррекции форматов <mark className="file">CUBE</mark>,{" "}
                  <mark className="file">ITX</mark>, <mark className="file">LOOK</mark>{" "}
                  или <mark className="file">LUT</mark> распаковываются в{" "}
                  <mark className="path">
                    /Applications/Adobe Premiere Pro 20XX/Adobe Premiere Pro
                    20XX.app/Contents/Lumetri/LUTs
                  </mark>
                  . Чтобы добраться до папки{" "}
                  <mark className="path">Contents/Lumetri/LUTs</mark> — выделите и нажмите{" "}
                  <mark className="key">ПКМ</mark> по ярлыку{" "}
                  <mark className="app">Adobe Premiere Pro 20XX</mark> в директории{" "}
                  <mark className="path">/Applications/Adobe Premiere Pro 20XX</mark>, а
                  затем выберите{" "}
                  <mark className="select">«Показать содержимое пакета»</mark> в
                  контекстном меню. Для изменений файлов внутри пакета потребуются права
                  администратора. Файлы для цветокоррекции можно будет использовать в
                  эффекте <mark className="plugin">Lumetri Color</mark>.
                  <ul>
                    <li>
                      Если вы поместите файлы в папку{" "}
                      <mark className="path">Technical</mark>, где обычно располагаются
                      входные <mark className="file">LUT</mark> для проявки изображения с
                      камеры, например для преобразования между цветовыми пространствами,
                      то они появятся в параметре{" "}
                      <mark className="select">«Input LUT»</mark> во вкладке{" "}
                      <mark className="select">«Basic Correction»</mark>.
                    </li>
                    <li>
                      Если вы поместите файлы в папку{" "}
                      <mark className="path">Creative</mark>, где располагаются файлы для
                      стилизации изображения уже после базовой цветокоррекции, то они
                      появятся в параметре <mark className="select">«Look»</mark> во
                      вкладке <mark className="select">«Creative»</mark>.
                    </li>
                    <li>
                      В <mark className="path">Legacy</mark> располагаются устаревшие
                      файлы для цветокоррекции для совместимости со старыми проектами в{" "}
                      <mark className="app">Adobe Premiere Pro</mark> и не используются
                      программой в последних версиях. При необходимости вы можете
                      скопировать нужные файлы цветокоррекции оттуда в папку{" "}
                      <mark className="path">Creative</mark> или{" "}
                      <mark className="path">Technical</mark>.
                    </li>
                  </ul>
                  <Addition type="info">
                    <ul>
                      <li>
                        Чтобы открыть панель <mark className="app">Lumetri Color</mark>,
                        перейдите в <mark className="select">«Window»</mark> и выберите{" "}
                        <mark className="select">«Lumetri Color»</mark>.
                      </li>
                      <li>
                        Если вы хотите использовать файл для цветокоррекции один раз,
                        выберите в <mark className="select">«Input LUT»</mark> или{" "}
                        <mark className="select">«Look»</mark> значение{" "}
                        <mark className="select">«Browse»</mark> и укажите путь к файлу.
                      </li>
                    </ul>
                  </Addition>
                  <ContentFigure
                    caption="Как использовать файлы цветокоррекции в Adobe Premiere Pro"
                    src="_mg31FMwrxc"
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
                  <mark className="app">Adobe Premiere Pro</mark>. Это можно сделать
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
                        закрыть <mark className="app">Adobe Premiere Pro</mark> для
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
                        <mark className="app">Adobe Premiere Pro</mark> установлен в
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
                  Плагины форматов <mark className="file">PRM</mark> или{" "}
                  <mark className="file">AEX</mark> распаковываются в общую папку плагинов
                  —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  . Обычно установленные плагины находятся в окне{" "}
                  <mark className="select">«Effects»</mark> и могут вызываться с помощью{" "}
                  <mark className="plugin">Excalibur</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        В редких случаях плагин может вызываться из другого места в
                        программе — читайте приложенную документацию к устанавливаемому
                        плагину.
                      </li>
                      <li>
                        Если вы хотите, чтобы плагин отображался только в конкретной
                        версии <mark className="app">Adobe Premiere Pro</mark> —
                        распакуйте его в папку{" "}
                        <mark className="path">
                          C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Plug-ins
                        </mark>
                        , где <mark>20XX</mark> — год вашей версии программы.
                      </li>
                      <li>
                        Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                        <mark className="app">Adobe Premiere Pro</mark> и наоборот.
                        Уточняйте в документации к устанавливаемому плагину, для каких
                        версий <mark className="app">Adobe Premiere Pro</mark> он
                        предназначен.
                      </li>
                    </ul>
                  </Addition>
                  <Addition type="warning">
                    Учтите, что не все плагины формата <mark className="file">AEX</mark>{" "}
                    поддерживаются в <mark className="app">Adobe Premiere Pro</mark>, так
                    как по большей части они предназначены для{" "}
                    <mark className="app">Adobe After Effects</mark> и не всегда имеют
                    обратную совместимость с{" "}
                    <mark className="app">Adobe Premiere Pro</mark>.
                  </Addition>
                </li>
                <li>
                  <p>
                    Если в архиве находится файл <mark className="file">MOGRT</mark>,
                    такие шаблоны устанавливаются в панели{" "}
                    <mark className="select">«Essential Graphics»</mark> с помощью кнопки{" "}
                    <mark className="select">«Install Motion Graphics template»</mark>.
                    Также можно перенести файлы формата{" "}
                    <mark className="file">MOGRT</mark> прямо в это окно перетаскиванием.
                  </p>
                  <ContentFigure
                    caption="Essential Graphics"
                    imgTitle="Установка mogrt-шаблонов"
                    src="images/premierepro/install_mogrt.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                  <p>
                    Также файлы <mark className="file">MOGRT</mark> можно поместить в
                    стандартную папку локальных шаблонов по пути{" "}
                    <mark className="path">
                      %AppData%/Adobe/Common/Motion Graphics Templates/
                    </mark>
                    , и они появятся в окне{" "}
                    <mark className="select">«Essential Graphics»</mark>.
                  </p>
                  <Addition type="warning">
                    Стандартный <mark className="app">Проводник Windows</mark> некорректно
                    обрабатывает архивы, в которых лежат файлы{" "}
                    <mark className="file">MOGRT</mark>. Для корректного открытия и
                    распаковки таких архивов используйте{" "}
                    <mark className="app">WinRAR</mark> или{" "}
                    <mark className="app">7-Zip</mark>.
                  </Addition>
                  <Addition type="info">
                    <p>
                      <mark className="file">MOGRT</mark>-файл — по своей сути архив,
                      внутри которого обычно лежат два-три файла, формирующие анимационный
                      шаблон. Такие шаблоны можно создавать в{" "}
                      <mark className="app">Adobe After Effects</mark> и{" "}
                      <mark className="app">Adobe Premiere Pro</mark>.
                    </p>
                    <ul>
                      <li>
                        <mark className="file">DEFINITION.JSON</mark> — файл, в котором
                        содержатся ссылки, контроллеры и другая техническая информация для
                        корректной работы шаблона.
                      </li>
                      <li>
                        <mark className="file">PROJECT.AEGRAPHICS</mark> — файл, где
                        хранится вся заготовленная анимация. Стандартными средствами{" "}
                        <mark className="app">Adobe Premiere Pro</mark> её нельзя
                        отредактировать, но такой проект можно открыть в{" "}
                        <mark className="app">Adobe After Effects</mark>, при
                        необходимости внести правки, а затем конвертировать обратно в{" "}
                        <mark className="file">MOGRT</mark>.
                      </li>
                      <li>
                        <mark className="file">THUMB.JPG</mark> — статичная обложка
                        шаблона для предварительного просмотра в окне{" "}
                        <mark className="select">«Essential Graphics»</mark>.
                      </li>
                    </ul>
                    <p>
                      Часто пользователи, которые работают с архивами через стандартный
                      Проводник <mark>Windows</mark>, зачем-то заходят внутрь{" "}
                      <mark className="file">MOGRT</mark>-файла и не могут понять, что
                      делать с его содержимым. Содержимое{" "}
                      <mark className="file">MOGRT</mark>-файла не нужно открывать без
                      острой необходимости. Архив с такими файлами нужно распаковать через{" "}
                      <mark className="app">WinRAR</mark> или{" "}
                      <mark className="app">7-Zip</mark>, чтобы их можно было спокойно
                      импортировать в <mark className="app">Adobe Premiere Pro</mark> по
                      инструкции выше.
                    </p>
                  </Addition>
                  <Addition type="warning">
                    Для использования некоторых шаблонов формата{" "}
                    <mark className="file">MOGRT</mark> может потребоваться установленный
                    в системе <mark className="app">Adobe After Effects</mark>. Если эта
                    программа у вас уже установлена, но{" "}
                    <mark className="app">Adobe Premiere Pro</mark> выдаёт ошибку о
                    необходимости её установки, убедитесь, что вы установили{" "}
                    <mark className="app">Adobe Premiere Pro</mark> и{" "}
                    <mark className="app">Adobe After Effects</mark> в стандартную
                    директорию <mark className="path">C:\Program Files\Adobe\</mark>.
                  </Addition>
                </li>
                <li>
                  Пресеты формата <mark className="file">PRFPSET</mark> устанавливаются
                  следующим образом:
                  <ul>
                    <li>
                      Откройте окно <mark className="select">«Effects»</mark>, нажмите на
                      иконку с тремя полосками в его заголовке, а затем — на кнопку{" "}
                      <mark className="select">«Import Presets»</mark>.
                      <Addition type="info">
                        В папке с пресетами вы можете создать папку со своим названием или
                        расположить скачанные пресеты в уже существующих.
                      </Addition>
                      <ContentFigure
                        caption="Adobe Premiere Pro"
                        imgTitle="Установка пресетов в Adobe Premiere Pro"
                        src="images/premierepro/import_presets.png"
                        theme="dark"
                        type="image"
                        variant="windows"
                      />
                    </li>
                    <li>
                      В открывшемся окне выберите файл пресетов формата{" "}
                      <mark className="file">PRFPSET</mark>.
                    </li>
                    <li>
                      После выбора файла импортированные пресеты появятся в окне{" "}
                      <mark className="select">«Effects»</mark> в папке{" "}
                      <mark className="path">Presets</mark>.
                      <Addition type="info">
                        Все ваши пресеты хранятся в одном общем файле{" "}
                        <mark className="file">
                          Effect Presets and Custom Items.prfpset
                        </mark>
                        , который находится по пути{" "}
                        <mark className="path">
                          C:\Users\%UserName%\Documents\Adobe\Premiere
                          Pro\XX.X\Profile-XXXXXX\
                        </mark>
                        . Этот файл не стоит редактировать вне{" "}
                        <mark className="app">Adobe Premiere Pro</mark>, но его можно
                        скопировать и перенести в другое место, чтобы в случае
                        необходимости восстановить пресеты.
                      </Addition>
                    </li>
                  </ul>
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
                  Расширения формата <mark className="file">ZXP</mark> можно установить
                  двумя способами: с использованием{" "}
                  <mark className="app">ZXP Installer от aescripts</mark> или вручную.
                  После корректной установки они появятся в меню{" "}
                  <mark className="select">«Window» → «Extensions»</mark> и будут работать
                  в отдельном окне, которое можно прикрепить к рабочему пространству.
                  <Addition type="info">
                    <ul>
                      <li>
                        Расширения такого формата являются кросс-платформенными: они
                        работают как в <mark>Windows</mark>, так и в <mark>macOS</mark>.
                      </li>
                      <li>
                        Прежде чем устанавливать расширение такого формата — убедитесь в
                        том, что используемая вами версия{" "}
                        <mark className="app">Adobe Premiere Pro</mark> его поддерживает,
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
                      и установить, следуя инструкциям. После установки утилиты откройте
                      его, а затем переместите файл <mark className="file">ZXP</mark>{" "}
                      прямо в окно <mark className="app">ZXP Installer</mark>. Затем
                      нажмите на <mark className="select">«Install»</mark> и дождитесь
                      окончания установки.
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
                        расширений, выполните следующие шаги.
                      </p>
                      <ul>
                        <li>
                          Переименуйте файл <mark className="file">ZXP</mark> в{" "}
                          <mark className="file">ZIP</mark> и распакуйте его как обычный
                          архив. Перед этим убедитесь, что в проводнике включено{" "}
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
                          Скачайте и запустите, подтвердив слияние с реестром,{" "}
                          <a
                            download
                            href="files/Enable Extensions Adobe.reg"
                          >
                            файл реестра, включающий debug-режим
                          </a>{" "}
                          для <mark className="app">Adobe Premiere Pro</mark>. Это
                          необходимо, чтобы установленные вручную расширения запускались
                          корректно.
                          <Addition type="info">
                            <ul>
                              <li>
                                Этот файл достаточно применить один раз — при последующих
                                установках повторять это действие не придётся.
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
                  <p>
                    Аудиоплагины формата <mark className="file">VST</mark> или{" "}
                    <mark className="file">VST3</mark> можно устанавливать в любом месте
                    системы, однако рекомендуется хранить их в общей папке:{" "}
                    <mark className="path">C:\Program Files\Common Files\VST</mark> — для{" "}
                    <mark className="file">VST</mark> или{" "}
                    <mark className="path">C:\Program Files\Common Files\VST3</mark> — для{" "}
                    <mark className="file">VST3</mark>. Иногда плагины распространяются в
                    виде установщиков и автоматически распаковываются в нужные каталоги.
                  </p>
                  <p>
                    Однако сами по себе эти плагины в программе не появятся.{" "}
                    <mark className="app">Adobe Premiere Pro</mark> не ищет их
                    автоматически при запуске, поэтому сканирование нужно запускать
                    вручную. Чтобы просканировать аудиоплагины, перейдите в{" "}
                    <mark className="select">«Edit» → «Preferences» → «Audio»</mark> и
                    нажмите кнопку <mark className="select">«Manage Audio Plug-Ins»</mark>
                    . В открывшемся окне выберите{" "}
                    <mark className="select">«Scan for Plug-Ins»</mark>, чтобы программа
                    обнаружила плагины, установленные в системе.
                  </p>
                  <ContentFigure
                    caption="Preferences"
                    src="images/premierepro/install_vst3.mp4"
                    theme="dark"
                    type="video"
                    variant="windows"
                  />
                  <p>
                    При необходимости можно добавить собственную папку с плагинами с
                    помощью кнопки <mark className="select">«Add»</mark> в разделе{" "}
                    <mark className="select">«VST Plug-In Folders»</mark>, если
                    автоматический поиск не нашёл нужные файлы.
                  </p>
                  <p>
                    После сканирования плагины появятся в списке установленных, и вы
                    сможете использовать их в{" "}
                    <mark className="select">«Track Mixer»</mark> или других разделах
                    программы.
                  </p>
                </li>
                <li>
                  Файлы для цветокоррекции форматов <mark className="file">CUBE</mark>,{" "}
                  <mark className="file">ITX</mark>, <mark className="file">LOOK</mark>{" "}
                  или <mark className="file">LUT</mark> распаковываются в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Support
                    Files\Lumetri\LUTs\
                  </mark>
                  . Файлы для цветокоррекции можно будет использовать в эффекте{" "}
                  <mark className="plugin">Lumetri Color</mark>. В этой директории есть
                  три папки: <mark className="path">Technical</mark>,{" "}
                  <mark className="path">Creative</mark> и{" "}
                  <mark className="path">Legacy</mark>.
                  <ul>
                    <li>
                      Если вы распакуете файлы в <mark className="path">Technical</mark>,
                      где обычно располагаются входные <mark className="file">LUT</mark>{" "}
                      (например, для преобразования цветовых пространств), то они появятся
                      в параметре <mark className="select">«Input LUT»</mark> во вкладке{" "}
                      <mark className="select">«Basic Correction»</mark>.
                    </li>
                    <li>
                      Если вы распакуете файлы в <mark className="path">Creative</mark>,
                      где располагаются файлы для стилизации изображения после базовой
                      цветокоррекции, то они появятся в параметре{" "}
                      <mark className="select">«Look»</mark> во вкладке{" "}
                      <mark className="select">«Creative»</mark>.
                    </li>
                    <li>
                      В <mark className="path">Legacy</mark> находятся устаревшие файлы
                      для цветокоррекции для совместимости со старыми проектами в{" "}
                      <mark className="app">Adobe Premiere Pro</mark> и в последних
                      версиях программы не используются. При необходимости вы можете
                      скопировать нужные файлы цветокоррекции из неё в{" "}
                      <mark className="path">Creative</mark> или{" "}
                      <mark className="path">Technical</mark>.
                    </li>
                  </ul>
                  <Addition type="info">
                    <ul>
                      <li>
                        Чтобы открыть панель Lumetri Color, перейдите в{" "}
                        <mark className="select">«Window»</mark> и выберите{" "}
                        <mark className="select">«Lumetri Color»</mark>.
                      </li>
                      <li>
                        Если вы хотите использовать файл для цветокоррекции один раз,
                        выберите в <mark className="select">«Input LUT»</mark> или{" "}
                        <mark className="select">«Look»</mark> значение{" "}
                        <mark className="select">«Browse»</mark> и выберите нужный файл.
                      </li>
                    </ul>
                  </Addition>
                  <ContentFigure
                    caption="Как использовать файлы цветокоррекции в Adobe Premiere Pro"
                    src="yrrW-V8bO_I"
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
                    variant="windows"
                  />
                </li>
                <li>
                  Шрифты форматов <mark className="file">TTF</mark> или{" "}
                  <mark className="file">OTF</mark> устанавливаются стандартными
                  средствами операционной системы. Установленные шрифты будут отображаться
                  во всех программах, поддерживающие сторонние шрифты, в том числе и в{" "}
                  <mark className="app">Adobe Premiere Pro</mark>. Это можно сделать
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
        title="«Не удаётся найти „..\install\helper.exe“» или как отключить Защитник Windows и Windows SmartScreen?"
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
        />
      </DetailsSummary>
      <DetailsSummary
        tag="в настоящее время невозможно установить, операционная система не соответствует минимальным требованиям для этой программы установки"
        title="Код ошибки 1, 501, 176, 195, 21 или другие при установке Adobe Premiere Pro"
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
                <mark className="app">Adobe Premiere Pro</mark> пользовались другими
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
                <mark className="app">Adobe Premiere Pro</mark> пользовались другими
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
          последних версий <mark className="app">Adobe Premiere Pro</mark>. Для решения
          проблемы обновите процессор или установите более старую версию программы,
          например <mark>23.6</mark> или <mark>24.0</mark>.
        </p>
        <Divider>
          Исправляем ошибку 21 - &quot;Операционная система не соответствует минимальным
          требованиям для этой программы установки&quot;
        </Divider>
        <p>
          Скорее всего вы пытаетесь установить{" "}
          <mark className="app">Adobe Premiere Pro</mark> версии <mark>2024</mark> или
          новее на несвежую сборку <mark>Windows</mark>. В таком случае у вас есть только
          два выхода, по какому пути идти - решать только вам.
        </p>
        <ul>
          <li>
            Если вы хотите установить свежую версию{" "}
            <mark className="app">Adobe Premiere Pro</mark>, то вам нужно обновить вашу
            систему до <mark>Windows 10</mark> сборки <mark>22H2</mark> или установить{" "}
            <mark>Windows 11</mark>. Обычно в{" "}
            <a href="https://helpx.adobe.com/premiere-pro/system-requirements.html">
              системных требованиях Premiere Pro
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
            установить более старую версию <mark className="app">Adobe Premiere Pro</mark>
            , например <mark>23.6</mark> (2023) или <mark>15.1</mark> (2018). В таком
            случае установщик выполнит установку корректно.
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
      <DetailsSummary
        tag="непонятные обозначения, adobe, ae, pr, ps, lr, ofx, ce, davinci, vegas, repack, standalone, офх, адоб, репак, стандалон"
        title="Как понять для какой программы предназначен установщик плагина?"
      >
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
        tag="символьные ссылки, symlink, нет места на жёстком диске, установил плагин с помощью установщика, зачем люди из каждого угла советуют не менять путь для установки, нестандартное расположение программы, установил на диск D:\, some products require host applications which are not installed on this computer"
        title="Почему недавно установленный плагин не появился в моей программе?"
      >
        <AdditionInfo>
          Вся информация в этой статье относится к устройствам с установленной
          операционной системой <mark>Windows</mark>.
        </AdditionInfo>
        <p>
          Часто в различных чатах возникает вопрос о проблемах при установке того или
          иного стороннего плагина или расширения, даже если тот, кто пишет, полностью
          следует всем инструкциям, но забыл об одной маленькой детали. У него{" "}
          <mark className="app">Adobe Premiere Pro</mark> установлен на другом разделе.
          Почему эта мелочь является одной из главных проблем при установке плагинов?
        </p>
        <ul>
          <li>
            Изначальная установка <mark className="app">Adobe Premiere Pro</mark> в
            нестандартную директорию, например на <mark className="path">D:\MyApps</mark>,
            может привести к проблемам при установке сторонних плагинов. Большинство
            установочных пакетов, таких как <mark className="plugin">Red Giant</mark> или{" "}
            <mark className="plugin">Premiere Composer</mark>, не смогут корректно
            установиться в нужное место. Это происходит из-за того, что большинство
            установщиков плагинов запрограммированы на распаковку в стандартные директории{" "}
            <mark>Adobe</mark> и не проверяют действительное расположение{" "}
            <mark className="app">Adobe Premiere Pro</mark> в системе. Когда{" "}
            <mark className="app">Adobe Premiere Pro</mark> находится в нестандартном
            месте, плагины не могут быть установлены корректно или обнаружены
            установщиком, даже если программа установлена в системе.
            <AdditionInfo>
              Особенно это касается комплексных плагинов вроде{" "}
              <mark className="plugin">Red Giant</mark> и{" "}
              <mark className="plugin">Universe</mark>, которые определяют целевые
              директории установки исходя из наличия поддерживающих хостов в системе. Если
              у вас установлен монтажный хост, который поддерживает формат плагинов{" "}
              <mark>OpenFX</mark>, например <mark className="app">Davinci Resolve</mark>,
              и он стоит на стандартной директории, а{" "}
              <mark className="app">Adobe Premiere Pro</mark> стоит на другой, то
              установщик распакует файлы только для <mark>OFX-хоста</mark>, а для{" "}
              <mark className="app">Adobe Premiere Pro</mark> - ничего, потому что он не
              обнаружил <mark className="app">Adobe Premiere Pro</mark> в стандартной
              директории.
            </AdditionInfo>
          </li>
          <li>
            Даже при установке скриптов, расширений и пресетов в стандартные директории,
            указанные в <a href="#2.1">универсальных инструкциях</a> - тоже существует
            вероятность того, что <mark className="app">Adobe Premiere Pro</mark> их не
            обнаружит.
          </li>
          <li>
            Если вы устанавливаете <mark className="app">Adobe Premiere Pro</mark>,{" "}
            <mark className="app">Adobe Media Encoder</mark> и{" "}
            <mark className="app">Adobe Premiere Pro</mark> в нестандартные директории, то
            это может вызвать проблемы с взаимодействием друг с другом. Программы могут не
            обнаружить друг друга, даже если они установлены на вашем устройстве.
            Например, при попытке экспортировать композицию из{" "}
            <mark className="app">Adobe Premiere Pro</mark> в{" "}
            <mark className="app">Adobe Media Encoder</mark>, первая программа может
            сообщить об отсутствии <mark className="app">Adobe Media Encoder</mark>,
            несмотря на его наличие в системе.
          </li>
        </ul>
        <p>
          Чтобы избавиться от подобных проблем - вам нужно переустановить{" "}
          <mark className="app">Adobe Premiere Pro</mark> по-человечески, то есть не
          менять местоположение программы при установке. Но, к сожалению, часто в качестве
          аргумента на вопрос{" "}
          <mark className="quote">
            А зачем вы собственно установили Premiere Pro на другой раздел?
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
          Если вы согласны переустановить <mark className="app">Adobe Premiere Pro</mark>{" "}
          на стандартный раздел, но у вас мало места, то попробуйте почистить систему от
          разного хлама. Это можно сделать разными способами, например стандартными
          средствами, сторонними программами или руками, предварительно проанализировав
          всю систему. После очистки системы от мусора - начните процесс переустановки{" "}
          <mark className="app">Adobe Premiere Pro</mark> на стандартное место и
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
            <mark className="app">Adobe Premiere Pro</mark>.
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
        tag="плагин не активирован, license failed, красный крест, почему при его применении появляются красные кресты, непонятные наложения, надписи про отсутствие лицензии"
        title="Почему эффект, который я хочу применить на слой, накладывает какие-то кресты или надписи про активацию?"
      >
        <p>
          Чаще всего такие наложения твердят об одном - у вас отстутвует действительная
          активация для применённого плагина. Скорее всего вы проигнорировали инструкцию
          по установке <mark className="word">народной</mark> версии того или иного
          стороннего плагина или неправильно ею воспользовались.
        </p>
        <p>
          В редких случаях источник, откуда вы скачали плагин, может дать нерабочий
          вариант. Для этого найдите нужный плагин из другого источника, например из{" "}
          <a href="#1.1">самой первой статьи</a> на этой странице.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="trapcode, mbl, magic bullet, vfx suite, universe, юниверс, трапкод, партикуляр, мбл"
        title='"This installer application has been moved. It must be run from its original folder containing a packages directory. The installer will now exit." при установке любого пакета от Red Giant'
      >
        <p>
          Скорее всего пытаетесь установить плагины от{" "}
          <mark className="plugin">Red Giant</mark>, предварительно не распаковав архив
          полностью. При использовании стандартного просмотрщика архивов в{" "}
          <mark>Windows 10 или 11</mark> и при открытии в нём любого{" "}
          <mark className="file">EXE</mark> файла - остальные файлы-зависимости не будут
          распакованы. Поэтому установщик не видит файлы для распаковки и выдаёт данную
          ошибку.
        </p>
        <p>
          Чтобы установить плагины от <mark className="plugin">Red Giant</mark> корректно
          - вы должны распаковать полностью архив или использовать{" "}
          <a
            href="https://www.rarlab.com/download.htm"
            title="Официальный сайт WinRAR"
          >
            WinRAR
          </a>{" "}
          при открытии <mark className="file">EXE</mark> файла из под нераспакованного
          архива. Он умеет распаковывать весь архив в временную папку при открытии{" "}
          <mark className="file">EXE</mark>, <mark className="file">MSI</mark> и подобных
          установочных файлов.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="please launch the maxon app and sign in to your account, in order to keep using this product without interruption, please activate a license, trapcode particular, magic bullet looks, vfx suite, universe"
        title='"Red Giant is unlicensed" при применении любого плагина от Maxon'
      >
        <p>
          Данная ошибка возникает из-за того что у вас не активированы плагины от{" "}
          <mark>Red Giant</mark>. Если вы недавно установили{" "}
          <mark className="word">народную</mark> версию программы - скорее всего вы не
          прочитали инструкцию по установке полностью и пропустили важный пункт. Дело в
          том, что пользователи часто забывают открывать{" "}
          <mark className="app">RedGiant Activation Service Unlocker.exe</mark> после
          установки плагинов, а потом натыкаются на ошибку об отсутствии лицензии.
        </p>
        <p>
          Чтобы исправить ошибку об отсутствии лицензии - откройте вышеупомянутый файл из
          записи или архива, или перечитайте инструкцию приложенную к релизу ещё раз. Если
          данное предупреждение появляется снова через время - примените{" "}
          <mark className="app">патч</mark> повторно или установите старые версии
          плагинов, например <mark>2024.1</mark> или старше.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="Select action - an error occurred while trying to replace the existing file: DeleteFile failed; code 5. Access denied"
        title='"Виберiть дiю - виникла помилка при спробi замiни iснуючого файлу: DeleteFile збiй; код 5. Отказано в доступе" при применении активатора для пакетов Red Giant от Team V.R.'
      >
        <p>
          В данной ошибке показывается, что активатор не может перезаписать какой-то файл
          из-за того что он у вас открыт в фоне. В вашем окне ошибки должен отобразиться
          полный путь до виновника торжества - скорее всего это будет висящий в фоне{" "}
          <mark className="app">Red Giant Service</mark>.
        </p>
        <p>
          Чтобы корректно применить активатор - закройте проблемный сервис с помощью{" "}
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
        tag="не подключается dynamic link, программы не видят друг друга, динамик линк, aegp plugin aedynamiclinkserver: adobe media encoder is not installed, please download and install it to use this feature, failed to connect to adobe media encoder, медиа енкодер"
        title="Установил Adobe Media Encoder, но Adobe Premiere Pro почему-то не видит его"
      >
        <p>
          Функция Dynamic Link позволяет синхронизировать композиции из{" "}
          <mark className="app">Adobe Premiere Pro</mark> и очередь рендера в{" "}
          <mark className="app">Adobe Media Encoder</mark>. Но не всегда их получается
          подружить.
        </p>
        <p>
          Иногда <mark className="app">Adobe Premiere Pro</mark> при попытке отправить
          секвенцию на очередь рендера в <mark className="app">Adobe Media Encoder</mark>{" "}
          выдаёт просьбу мол{" "}
          <mark className="quote">
            чувак, установи Media Encoder, а то ты его не установил
          </mark>
          , хотя эта программа вроде как установлена. Для того, чтобы программы видели
          друг друга - вам нужно соблюсти два условия.
        </p>
        <ul>
          <li>
            Убедитесь в том, что вы установили{" "}
            <mark className="app">Adobe Premiere Pro</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark> одного &quot;года&quot;. Если
            вы, например, установили <mark className="app">Adobe Premiere Pro 2022</mark>{" "}
            и <mark className="app">Adobe Media Encoder 2019</mark> - они никогда не
            увидят друг друга, так как программы жёстко привязаны к &quot;году&quot;.
          </li>
          <li>
            Если вы установили <mark className="app">Adobe Premiere Pro</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark> одного года, но они всё ещё
            не видят друг друга - убедитесь в том, что вы установили обе программы в место
            по умолчанию, не на другом разделе, отличном от{" "}
            <mark className="path">C:\</mark>.
          </li>
        </ul>
        <AdditionInfo>
          Если у вас мало места на системном диске или вы хотите перенести программы от
          Adobe на другой раздел - воспользуйтесь функцией символьных ссылок.
        </AdditionInfo>
        <p>
          Обычно при соблюдении этих двух условий программы видят друг друга и спокойно
          отправляются секвенции из <mark className="app">Adobe Premiere Pro</mark> в{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <p>
          Также в редких случаях при использовании патча <mark>GenP</mark> функция{" "}
          <mark>Dynamic Link</mark> может работать криво. Поэтому попробуйте удалить ваши
          программы Adobe и установить репаки от <mark>KpoJluK</mark> или{" "}
          <mark>m0nkrus</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="вст, аудио плагины, звук, изотоп, izotope, vst3"
        title="Установил VST-плагины, но они не отображаются в Adobe Premiere Pro"
      >
        <p>
          Предположим, что вы недавно установили новые{" "}
          <mark className="plugin">VST-плагины</mark> для обработки звука, но они не
          появились автоматически в <mark className="app">Adobe Premiere Pro</mark>. Это
          нормально, потому что такие плагины программой при запуске не ищутся
          автоматически.
        </p>
        <p>
          Чтобы вручную начать поиск таких плагинов, откройте{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio</mark> и нажмите на кнопку{" "}
          <mark className="ui">Manage Audio Plug-ins</mark>.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/premierepro/edit_audio_manage_audio_plugins.png"
          imgTitle="Окно Preferences с открытым разделом Audio"
          styleClass="figure_windows-dark"
        />
        <p>
          Затем в открывшемся окне вы можете начать сканирование плагинов с помощью кнопки{" "}
          <mark className="ui">Scan for Plug-ins</mark>, пересканировать уже существующие
          плагины или добавить новую папку, где хранятся ваши{" "}
          <mark className="plugin">VST-плагины</mark>. После сканирования плагинов вы
          сможете ими воспользоваться в <mark className="ui">Track Mixer</mark> или
          где-нибудь ещё.
        </p>
        <ImageFigure
          caption="Audio Plug-in Manager"
          imgSrc="images/premierepro/audio_plugin_manager.png"
          imgTitle="Менеджер аудио-плагинов"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="генп, genp, ручная активация"
        title="Я не доверяю репакам, но установить программы от Adobe хочется. Какие есть ещё варианты?"
      >
        <p>
          Если вы параноик и боитесь, что при установке репаков в ваш компьютер ворвётся{" "}
          <mark className="word">барабашка</mark> с троянами и прочей бякой, то вы можете
          активировать программы от Adobe вручную через <mark className="app">GenP</mark>.
        </p>
        <ul>
          <li>
            Из плюсов этого способа: активируя Adobe через{" "}
            <mark className="app">GenP</mark>, вы можете устанавливать, обновлять
            программы, а также устанавливать бесплатные плагины напрямую из{" "}
            <mark className="app">Creative Cloud</mark>. Также вы можете устанавливать
            бета-версии, если вы хотите потыкать нововведения, которые ещё не выкатили в
            публичный релиз.
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
        </p>
        <AdditionInfo>
        </AdditionInfo>
        <p>
          </a>{" "}
        </p>
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

export default PRInstallProblems;
