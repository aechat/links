import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import CodeSnippet from "../../../components/content/CodeSnippet";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";
import {getPlatformInfo} from "../../../utils/browserDetection";

const PsInstallProblems: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="how-to-install"
        title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?"
      >
        <p>
          Обычно установка большинства дополнительных материалов универсальна, но может
          отличаться в зависимости от вашей операционной системы. В этой статье указано,
          как установить тот или иной тип файла для{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <Divider>Универсальные инструкции для разных типов файлов</Divider>
        <ul>
          <li>
            <p>
              Если в архиве находится файл <mark className="image">PSD</mark>, такие файлы
              открываются как обычный проект в{" "}
              <mark className="app">Adobe Photoshop</mark> через{" "}
              <mark className="select">«File» → «Open»</mark> или открытием из проводника,
              если в системе зависимости были корректно настроены на данный тип файлов.
            </p>
            <Addition type="info">
              Если вы хотите встроить <mark className="image">PSD</mark> в свой проект,
              просто перенесите файл из проводника в окно с открытым проектом в{" "}
              <mark className="app">Adobe Photoshop</mark> или поместите через{" "}
              <mark className="select">«File» → «Place Embedded»</mark>. Импортированный{" "}
              <mark className="image">PSD</mark> появится как смарт-объект, который можно
              будет отредактировать двойным нажатием по миниатюре в окне{" "}
              <mark className="select">«Layers»</mark>.
            </Addition>
          </li>
          <li>
            <p>
              Если в архиве находится <mark className="image">AI</mark>,{" "}
              <mark className="image">EPS</mark>, <mark className="image">JPG</mark>,{" "}
              <mark className="image">PNG</mark>, <mark className="image">PDF</mark>,{" "}
              <mark className="image">SVG</mark> или другие файлы изображений, то такие
              файлы открываются как обычные изображения в{" "}
              <mark className="app">Adobe Photoshop</mark> простым перетаскиванием файла в
              окно программы или через <mark className="select">«File» → «Open»</mark>.
            </p>
            <Addition type="info">
              <p>
                Чтобы поместить изображение в открытый проект, переместите его из
                проводника, скопируйте изображение и вставьте его с помощью{" "}
                <mark className="key">Ctrl + V</mark> или выберите{" "}
                <mark className="select">
                  «File» → «Place Embedded»<sup>1</sup>
                </mark>{" "}
                и в открытом окне проводника выберите нужный файл.
              </p>
              <ul>
                <li>
                  <sup>1</sup> Изображения, помещённые в проект через{" "}
                  <mark className="select">«Place Embedded»</mark>, будут импортированы
                  как смарт-объект.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              Если в архиве находится файл <mark className="file">ATN</mark>, то для
              установки вам нужно открыть окно <mark className="select">«Actions»</mark> с
              помощью комбинации клавиш <mark className="key">Alt + F9</mark>, нажать на
              три полоски в углу открывшегося окна и нажать на кнопку{" "}
              <mark className="select">«Load Actions»</mark>. Далее вам предложат выбрать
              нужный файл. После выбора файла действий оно у вас отобразится в окне{" "}
              <mark className="select">«Actions»</mark> и вы сможете применять их в своих
              проектах.
            </p>
            <Addition type="warning">
              Рекомендуется использовать английскую локализацию{" "}
              <mark className="app">Adobe Photoshop</mark> при использовании сторонних{" "}
              <mark className="file">ATN</mark> файлов. В них часто могут быть завязаны
              действия на стандартные слова английской локализации.
            </Addition>
            <ArticleMedia
              caption="Photoshop"
              src="legacy/photoshop/load_actions.png"
              type="image"
            />
          </li>
          <li>
            Если в архиве находится файл <mark className="file">ABR</mark>, то для
            установки кистей нужно открыть окно кистей в{" "}
            <mark className="select">«Window» → «Brushes»</mark>. В открывшемся окне
            нажмите на три полоски в углу и выберите{" "}
            <mark className="select">«Import Brushes»</mark>. В проводнике выберите нужный
            файл с набором кистей.
            <ArticleMedia
              caption="Photoshop"
              src="legacy/photoshop/import_brushes.png"
              type="image"
            />
          </li>
        </ul>
        <ContentFilter
          macContent={
            <>
              <ul>
                <li>
                  <Addition type="danger">
                    Если в архиве находится папка <mark className="path">_MACOSX</mark>,
                    то в нём нет никаких полезных файлов, установщиков и плагинов, которые
                    предназначены именно для устройств <mark>macOS</mark>. Это скрытая
                    системная папка, которая иногда создаётся операционной системой, в
                    которой хранятся метаданные и информация о файловой системе. В нём нет
                    ничего интересного для пользователя.
                  </Addition>
                  <p>
                    Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                    <mark className="file">7Z</mark> или <mark className="file">RAR</mark>
                    , то вам необходимо его распаковать с помощью архиватора для
                    дальнейшей работы с ним. Это можно сделать с помощью{" "}
                    <mark className="app">Keka</mark> или{" "}
                    <mark className="app">The Unarchiver</mark>.
                  </p>
                  <Addition type="info">
                    <ul>
                      <li>
                        Загрузить <mark className="app">Keka</mark> можно по{" "}
                        <a href="https://www.keka.io/ru/">этой ссылке</a>, а{" "}
                        <mark className="app">The Unarchiver</mark> — по{" "}
                        <a href="https://theunarchiver.com/">этой</a>.
                      </li>
                      <li>
                        Для распаковки многотомного архива, то есть если в названии
                        архивов есть <mark className="file">PART1</mark>,{" "}
                        <mark className="file">PART2</mark> и так далее, нужно запустить
                        распаковку только первой части архива, остальные части подхватятся
                        автоматически. Остальные части архива не нужно трогать без острой
                        необходимости, если вы не знаете, что с ними делать.
                      </li>
                      <li>
                        Многотомные архивы создаются для того, чтобы файл можно было
                        спокойно передать, обойдя ограничения максимального размера в{" "}
                        <mark className="app">Telegram</mark> или другого ресурса.
                      </li>
                      <li>
                        Если вы хотите сделать <mark className="app">Keka</mark>{" "}
                        архиватором по умолчанию, то вам нужно будет установить{" "}
                        <a href="https://www.keka.io/defaultapp/">KekaExternalHelper</a>.
                        Подробная инструкция расположена в{" "}
                        <a href="https://github.com/aonez/Keka/wiki/Default-application">
                          Wiki на GitHub
                        </a>
                        .
                      </li>
                    </ul>
                  </Addition>
                  <ArticleMedia
                    caption="Распаковка через контекстное меню"
                    src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Если в архиве или в записи находится файл{" "}
                    <mark className="file">DMG</mark>, <mark className="file">APP</mark>{" "}
                    или <mark className="file">PKG</mark>, то обычно в нём содержится
                    автоматический установщик плагина. Для установки таких файлов нужно
                    следовать инструкциям установщика, например перенести файл из одного
                    места в другое и так далее.
                  </p>
                  <Addition type="info">
                    <ul>
                      <li>
                        По умолчанию в <mark>macOS</mark> вы не сможете без танцев с
                        бубном открыть установщики от неподтверждённых разработчиков.
                        Чтобы обойти этот запрет, нужно изменить настройки безопасности
                        операционной системы. Подробнее об этом вы можете прочитать на{" "}
                        <a href="https://support.apple.com/ru-ru/102445">сайте Apple</a> и
                        на{" "}
                        <a href="https://www.iphones.ru/iNotes/pochemu-mac-ne-razreshaet-ustanavlivat-prilozheniya-ne-iz-app-store-05-15-2020">
                          iPhones.ru
                        </a>
                        .
                      </li>
                      <li>
                        Если вы сталкиваетесь с ошибкой{" "}
                        <mark>«Не удаётся открыть программу „AppName”»</mark>, попробуйте
                        открыть его через <mark className="key">ПКМ</mark>, выбрав в
                        контекстном меню <mark className="select">«Открыть»</mark>.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  <p>
                    Если в архиве находится файл <mark className="file">ZXP</mark>, то
                    такие расширения обычно устанавливаются через{" "}
                    <a href="https://aescripts.com/learn/zxp-installer/">
                      ZXP Installer от aescripts
                    </a>
                    . Прежде чем устанавливать расширение такого формата, убедитесь в том,
                    что ваша версия <mark className="app">Adobe Photoshop</mark> его
                    поддерживает. После того как вы установите расширение, откройте
                    терминал и введите команды ниже, их можно скопировать одним нажатием.
                    Если терминал не выдал никакие ошибки, то вы можете спокойно открыть{" "}
                    <mark className="app">Adobe Photoshop</mark> и проверить
                    работоспособность установленного расширения.
                  </p>
                  <Addition type="danger">
                    Пожалуйста, не используйте{" "}
                    <a href="https://zxpinstaller.com/">
                      ZXP Installer от ELEMENTS Storage Media
                    </a>
                    , если вы используете версии программ{" "}
                    <mark className="company">Adobe</mark>, которые отвязаны от приложения{" "}
                    <mark className="app">Adobe Creative Cloud</mark>. Данный{" "}
                    <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам
                    выдавать ошибку <mark className="danger">-193</mark> до тех пор, пока
                    вы не установите программу{" "}
                    <mark className="app">Adobe Creative Cloud</mark>, а он же может вам
                    поломать уже установленные программы. Для решения проблемы
                    воспользуйтесь{" "}
                    <a href="https://aescripts.com/learn/zxp-installer/">
                      ZXP Installer от aescripts
                    </a>{" "}
                    или ручной установкой расширений.
                  </Addition>
                  <Addition type="info">
                    <ul>
                      <li>
                        Если вы не хотите устанавливать стороннее ПО для установки{" "}
                        <mark className="file">ZXP</mark>, то вы можете переименовать файл{" "}
                        <mark className="file">ZXP</mark> в{" "}
                        <mark className="file">ZIP</mark> и распаковать его как обычный
                        архив. Содержимое свежераспакованного файла нужно поместить в
                        папку{" "}
                        <mark className="path">
                          /Library/Application Support/Adobe/CEP/extensions
                        </mark>{" "}
                        и после этого ввести команды, которые были расположены чуть ниже в
                        терминал.
                        <CodeSnippet>
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
                        </CodeSnippet>
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
                  </Addition>
                </li>
              </ul>
            </>
          }
          windowsContent={
            <>
              <ul>
                <li>
                  Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                  <mark className="file">7Z</mark> или <mark className="file">RAR</mark>,
                  то вам необходимо его распаковать с помощью архиватора для дальнейшей
                  работы с ним. Это можно сделать с помощью{" "}
                  <mark className="app">WinRAR</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        <mark className="app">WinRAR</mark> для устройств на{" "}
                        <mark>Windows</mark> можно загрузить по{" "}
                        <a href="https://www.rarlab.com/download.htm">этой ссылке</a>.{" "}
                        <i style={{fontSize: "0.85em", opacity: 0.5}}>
                          Надеюсь, что вы в курсе как обойти 40-дневное «ограничение»
                        </i>
                        .
                      </li>
                      <li>
                        Для распаковки многотомного архива, то есть если в названии
                        архивов есть <mark className="file">PART1</mark>,{" "}
                        <mark className="file">PART2</mark> и так далее, нужно запустить
                        распаковку только первой части архива, нажав{" "}
                        <mark className="key">ПКМ</mark> по файлу и выбрать в контекстном
                        меню <mark className="select">«WinRAR» → «Распаковать в...»</mark>
                        . Остальные части подхватятся автоматически и их не нужно трогать
                        без острой необходимости, если вы не знаете, что с ними делать.
                      </li>
                      <li>
                        Многотомные архивы создаются для того, чтобы файл можно было
                        спокойно передать, обойдя ограничения максимального размера в{" "}
                        <mark className="app">Telegram</mark> или другого ресурса.
                      </li>
                    </ul>
                  </Addition>
                  <ArticleMedia
                    src="1OVwQS0uHhk"
                    type="youtube"
                  />
                </li>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">EXE</mark>, то обычно в нём содержится
                  автоматический установщик плагина. Если в записи указано, что данный
                  установщик является репаком, в таком случае после его установки плагин
                  будет уже активирован, никаких лишних действий после установки делать не
                  надо.
                  <Addition type="warning">
                    <ul>
                      <li>
                        При использовании установщиков убедитесь в том, что у вас{" "}
                        <mark className="app">Adobe Photoshop</mark> установлен в
                        стандартном расположении{" "}
                        <mark className="path">C:\Program Files\Adobe\</mark>, а не в
                        другом месте или разделе. В противном случае устанавливаемый
                        плагин может установиться в другом месте и может не отобразиться и
                        корректно работать в программе.
                      </li>
                      <li>
                        Перед установкой плагинов с помощью установщика закройте все
                        открытые инстанции <mark className="app">Adobe Photoshop</mark>{" "}
                        для корректной установки.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">8BF</mark>,{" "}
                  <mark className="file">8BE</mark> или <mark className="file">8BI</mark>{" "}
                  - то такие плагины обычно распаковываются в папку плагинов программы -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
                  </mark>
                  . Установленные плагины появятся в{" "}
                  <mark className="select">«Plugins»</mark> в горизонтальном меню в
                  верхней части интерфейса программы.
                </li>
                <li>
                  Если в архиве находится файл формата <mark className="file">CCX</mark> -
                  переименуйте этот файл в <mark className="file">ZIP</mark> и распакуйте
                  его в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
                  </mark>
                  . Установленные плагины появятся в{" "}
                  <mark className="select">«Plugins»</mark> в горизонтальном меню в
                  верхней части интерфейса программы.
                </li>
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
                  <Addition type="danger">
                    Пожалуйста, не используйте{" "}
                    <a href="https://zxpinstaller.com/">
                      ZXP Installer от ELEMENTS Storage Media
                    </a>
                    , если вы используете версии программ{" "}
                    <mark className="company">Adobe</mark>, которые отвязаны от приложения{" "}
                    <mark className="app">Adobe Creative Cloud</mark>. Данный{" "}
                    <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам
                    выдавать ошибку <mark className="danger">-193</mark> до тех пор, пока
                    вы не установите программу{" "}
                    <mark className="app">Adobe Creative Cloud</mark>, а он же может вам
                    поломать уже установленные программы. Для решения проблемы
                    воспользуйтесь{" "}
                    <a href="https://aescripts.com/learn/zxp-installer/">
                      ZXP Installer от aescripts
                    </a>{" "}
                    или ручной установкой расширений.
                  </Addition>
                  <Addition type="info">
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
                  </Addition>
                </li>
              </ul>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-defender"
        tag="репак от кролика, выключить дефендер, отрубить антивирус, ложное срабатывание, хелпер, ошибка 24, вирусы, трояны, проверьте правильно ли указано имя и повторите попытку, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы, операция не была успешно завершена так как файл содержит вирус или потенциально нежелательную программу, обнаружены угрозы, куда-то пропадают файлы плагинов и программ, интеллектуальное управление приложениями заблокировало приложение которое может быть небезопасным, приложение заблокировано так как невозможно установить его автора, это не одно из известных нам приложений, приложение может украсть или повредить ваши персональные данных и зашифровать их чтобы вы не могли получить к ним доступ или использовать ваше устройство для атаки на устройства других людей, это приложение частично заблокировано, некоторые функции могут не работать поскольку не удалось подтвердить издателя файла который это приложение попыталось загрузить, угроза помещена в карантин, файлы в карантине находятся в изолированной области где они не могут нанести вред устройству, они будут удалены автоматически, эти угроза или приложение удалены из карантина либо восстановлены на устройстве, угроза удалена или восстановлена, это приложение заблокировано, эта опасная программа выполняет команды злоумышленника, operation did not complete successfully because the file contains a virus or potentially unwanted software, windows cannot find helper.exe, make sure you typed the name correctly and then try again, 0x800700E1"
        title="«Не удаётся найти „..\install\helper.exe“» или как отключить Windows Defender и Windows SmartScreen?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                При установке «народного» программного обеспечения ваш антивирус может
                сработать на модифицированные файлы, удалить их и пометить как{" "}
                <mark className="warning">«HackTool:Win32/Crack!MTB»</mark>,{" "}
                <mark className="warning">«Contrebrew.A!ml»</mark>,{" "}
                <mark className="warning">«Trojan:Win32/Adload!rfn»</mark>,{" "}
                <mark className="warning">«Adware»</mark> или даже якобы «троян» и
                «опаснейший вирус». Например, ошибка{" "}
                <mark className="danger">«helper.exe не найден»</mark> в репаках от{" "}
                <mark className="user">KpoJluK</mark> возникает именно потому, что
                антивирус удаляет этот файл, считая его угрозой из-за чекбокса для
                установки рекламного ПО, который можно убрать перед установкой.
              </p>
              <p>
                Поэтому, если вы доверяете <a href="#1.1">источникам</a>, откуда скачали
                файлы, паниковать не нужно. Просто временно или полностью отключите
                антивирус, чтобы избежать проблем при установке. Это касается не только
                репаков, но и плагинов, и других файлов из интернета — даже если они
                абсолютно безопасны.{" "}
                <i style={{opacity: "0.5"}}>
                  А если не доверяете — не предъявляйте администраторам претензии,
                  основанные на вашей паранойе, а просто купите лицензию.
                </i>
              </p>
              <p>
                В этой статье в качестве примера{" "}
                <mark className="app">антивирусного ПО</mark> будет выступать стандартный{" "}
                <mark className="app">Windows Defender</mark>, поставляемый в операционную
                систему «из коробки», так как именно он чаще всего и «вставляет палки в
                колёса».
              </p>
              <Addition type="info">
                Способы отключения и удаления{" "}
                <mark className="app">Windows Defender</mark>, описанные в этой статье,
                могут отличаться в зависимости от вашей установленной версии{" "}
                <mark>Windows</mark>.
              </Addition>
              <Divider>Отключаем Windows Defender на время</Divider>
              <p>
                Если вы готовы взять на себя риски, связанные с установкой программного
                обеспечения неофициальными способами, то для нормальной установки
                программ, плагинов или другого содержимого необходимо временно отключить
                встроенный антивирус <mark className="app">Windows Defender</mark> или
                любой другой, установленный на вашем устройстве. Обычно для этого хватает
                отключения <mark className="select">«Защиты в реальном времени»</mark>.
              </p>
              <Addition type="warning">
                <mark className="select">«Защита в реальном времени»</mark> в последних
                сборках <mark>Windows</mark> имеет нездоровое свойство самостоятельно
                включаться спустя несколько секунд. Не стесняйтесь отключать её заново.
              </Addition>
              <ArticleMedia
                src="blwRAOQUjsM"
                type="youtube"
              />
              <Divider>Вносим исключения для Windows Defender</Divider>
              <p>
                Если вы не хотите отключать <mark className="app">Windows Defender</mark>{" "}
                или <mark className="select">«Защита в реальном времени»</mark> включается
                раньше, чем вы успеваете запустить установщик — попробуйте добавить папки{" "}
                <mark className="path">C:\Program Files\Adobe</mark>, папку с загруженными
                файлами и <mark className="path">%TEMP%</mark> в исключения антивируса.
                После настройки повторите процесс установки программы.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Если директория <mark className="path">C:\Program Files\Adobe</mark>{" "}
                    отсутствует, создайте её самостоятельно.
                  </li>
                  <li>
                    После завершения установки исключения можно убрать, но рекомендуется
                    оставить в списке хотя бы{" "}
                    <mark className="path">C:\Program Files\Adobe</mark>, чтобы антивирус
                    не повредил файлы приложения.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                src="ET94_dv3f8c"
                type="youtube"
              />
              <p>
                Также вы можете воспользоваться сторонними утилитами для управлениями
                исключений в <mark className="app">Windows Defender</mark>.
              </p>
              <div className="flexible-links">
                <a href="https://www.sordum.org/10636/defender-exclusion-tool-v1-4/">
                  Defender Exclusion Tool
                </a>
              </div>
              <Divider>Убираем «палки в колёсах» от Windows SmartScreen</Divider>
              <p>
                В последних сборках <mark>Windows 11</mark> компания{" "}
                <mark className="company">Microsoft</mark>{" "}
                <del>усилила меры безопасности</del> добавила пользователям проблем,
                внедрив расширенный анализ исполняемых файлов через функцию{" "}
                <mark className="select">«Интеллектуальное управление приложениями»</mark>
                . Она дополняет работу фильтра{" "}
                <mark className="app">Windows SmartScreen</mark>. Из-за этого при запуске
                репаков или сторонних установщиков система может заблокировать файл
                сообщением{" "}
                <mark className="select">
                  «„Интеллектуальное управление приложениями” заблокировало приложение,
                  которое может быть небезопасным»
                </mark>
                .
              </p>
              <p>
                Чтобы отключить эту защиту, перейдите в настройки{" "}
                <mark className="app">Защитника Windows</mark>, откройте раздел{" "}
                <mark className="select">
                  «Управление приложениями и браузером» → «Параметры интеллектуального
                  управления приложениями»
                </mark>{" "}
                и выберите <mark className="select">«Выключить»</mark>
                <sup>1</sup>. После этого препятствий для запуска программ возникнуть не
                должно, особенно если вы уже отключили{" "}
                <mark className="select">«Защиту в реальном времени»</mark>.
              </p>
              <Addition type="info">
                <sup>1</sup> Несмотря на предупреждение о том, что эту функцию нельзя
                вернуть без полной переустановки <mark>Windows</mark>, на базовую защиту{" "}
                <mark className="app">Windows Defender</mark> её отключение не влияет.{" "}
                <i style={{opacity: "0.5"}}>Заодно избавитесь от лишних фильтров.</i>
              </Addition>
              <ArticleMedia
                caption="Отключаем «Интеллектуальное управление приложениями»"
                src="legacy/disable_advanced_smartscreen.mp4"
                type="video"
              />
              <p>
                В <mark>Windows 10</mark> этот фильтр работает аналогично: при запуске
                файла всплывает окно{" "}
                <mark className="select">«Система Windows защитила ваш компьютер»</mark>.
                Так <mark className="app">Windows SmartScreen</mark> реагирует на файлы,
                которые кажутся ему подозрительными.
              </p>
              <p>
                Чтобы запустить такой файл, нажмите{" "}
                <mark className="select">«Подробнее»</mark> в нижней части окна, а затем —{" "}
                <mark className="select">«Выполнить в любом случае»</mark>.
              </p>
              <Addition type="warning">
                Иногда фильтр может остановить вас окном{" "}
                <mark className="select">«Вредоносный файл»</mark>. Обычно это решается
                установкой чекбокса <mark className="select">«Разблокировать»</mark> в
                свойствах файла возле{" "}
                <mark className="select">
                  «Этот файл получен с другого компьютера и, возможно, был заблокирован с
                  целью защиты компьютера»
                </mark>
                .
              </Addition>
              <p>
                Если после нажатия на <mark className="select">«Подробнее»</mark> кнопка
                запуска не появилась — полностью отключите фильтр в параметрах{" "}
                <mark className="app">Защитника Windows</mark>.
              </p>
              <ArticleMedia
                src="HxlxS1Mdyp0"
                type="youtube"
              />
              <Divider>Или удаляем Windows Defender с «корнями»</Divider>
              <p>
                Если внесение исключений не помогло, вас раздражают ложные срабатывания
                или вы хотите отключить <mark className="app">Windows Defender</mark> раз
                и навсегда — воспользуйтесь утилитами из списка ниже.
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
                <p>
                  Полное удаление или отключение{" "}
                  <mark className="app">Windows Defender</mark> рекомендуется только
                  опытным пользователям <mark>Windows</mark>, которые полностью осознают
                  возможные последствия и используют альтернативные средства защиты —
                  например собственную бдительность, сторонние антивирусы или регулярное
                  резервное копирование данных.
                </p>
                <p>
                  Если вы не слишком уверенный пользователь и не уверены в своих
                  действиях, лучше ограничиться временным отключением антивируса или
                  добавлением нужных файлов и папок в исключения.
                </p>
              </Addition>
              <Addition type="warning">
                Удалённый <mark className="app">Windows Defender</mark> может вернуться
                после установки крупного обновления, например при переходе с{" "}
                <mark>Windows 11</mark> версии <mark>24H2</mark> на{" "}
                <mark>Windows 11</mark> версии <mark>25H2</mark>. Чтобы от него
                избавиться, просто повторите процесс удаления.
              </Addition>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="install-adobe-errors-codes"
        tag="в настоящее время невозможно установить, операционная система не соответствует минимальным требованиям для этой программы установки"
        title="Код ошибки 1, 501, 176, 195, 21 или другие при установке Adobe Photoshop"
      >
        <Divider>Исправляем ошибку 1 или 501</Divider>
        <p>
          Обычно ошибка <mark>1</mark> и <mark>501</mark> возникает из-за того, что у вас
          повреждено приложение <mark className="app">Adobe Creative Cloud Cleaner</mark>{" "}
          или были криво удалены предыдущие программы от{" "}
          <mark className="company">Adobe</mark>. Чтобы исправить это - очистите остатки
          предыдущих установок с помощью{" "}
          <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
            Adobe Creative Cloud Cleaner
          </a>{" "}
          или <mark className="app">Revo Uninstaller</mark>.
        </p>
        <Divider>Исправляем ошибку 176</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Скорее всего вы до установки более новых версий{" "}
                <mark className="app">Adobe Photoshop</mark> пользовались другими
                программами <mark className="company">Adobe</mark>. Для решения -
                попробуйте удалить папку{" "}
                <mark className="path">/Library/Application Support/Adobe/caps</mark>, а
                затем повторить попытку установки нужной программы.
              </p>
            </>
          }
          windowsContent={
            <>
              <p>
                Скорее всего вы до установки более новых версий{" "}
                <mark className="app">Adobe Photoshop</mark> пользовались другими
                программами <mark className="company">Adobe</mark>. Для решения -
                попробуйте удалить папку{" "}
                <mark className="path">
                  C:\Program Files (x86)\Common Files\Adobe\caps
                </mark>
                , а затем повторить попытку установки нужной программы.
              </p>
            </>
          }
        />
        <Divider>
          Исправляем ошибку 195 - «Требуется процессор, поддерживающий инструкции Advanced
          Vector Extensions 2 (AVX2)»
        </Divider>
        <p>
          Если вы столкнулись с этой ошибкой при установке, это означает, что ваш
          процессор не поддерживает инструкции <mark>AVX2</mark>, необходимые для
          последних версий <mark className="app">Adobe Photoshop</mark>. Для решения
          проблемы обновите процессор или установите более старую версию программы,
          например <mark>23.6</mark> или <mark>24.0</mark>.
        </p>
        <Divider>
          Исправляем ошибку 21 - «Операционная система не соответствует минимальным
          требованиям для этой программы установки»
        </Divider>
        <p>
          Скорее всего вы пытаетесь установить{" "}
          <mark className="app">Adobe Photoshop</mark> версии <mark>2024</mark> или новее
          на несвежую сборку <mark>Windows</mark>. В таком случае у вас есть только два
          выхода, по какому пути идти - решать только вам.
        </p>
        <ul>
          <li>
            <p>
              Если вы хотите установить свежую версию{" "}
              <mark className="app">Adobe Photoshop</mark>, то вам нужно обновить вашу
              систему до <mark>Windows 10</mark> сборки <mark>22H2</mark> или установить{" "}
              <mark>Windows 11</mark>. Обычно в{" "}
              <a href="https://helpx.adobe.com/photoshop/system-requirements.html">
                системных требованиях Adobe Photoshop
              </a>{" "}
              указывается минимальная версия операционной системы.
            </p>
            <Addition type="info">
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
            </Addition>
          </li>
          <li>
            Если вы не желаете обновлять или переустанавливать систему, то вы можете
            установить более старую версию <mark className="app">Adobe Photoshop</mark>,
            например <mark>23.6</mark> (2023) или <mark>15.1</mark> (2018). В таком случае
            установщик выполнит установку корректно.
          </li>
        </ul>
        <Addition type="info">
          Остальные решения по кодам ошибок при установке вы можете найти на{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html">
            сайте Adobe
          </a>{" "}
          или на различных форумах в интернете.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="about-free-photoshop-with-firefly"
        tag="файрфляй, искуственный интеллект, нейросети, нейронная сеть, генерация изображений, стейбл дифьюжен, stable diffusion, sd"
        title="Где скачать Photoshop с рабочим Firefly? Какие есть аналоги?"
      >
        <p
          style={{
            fontFamily: "Onest, sans-serif",
            fontSize: "5rem",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Нигде!
        </p>
        <p style={{fontWeight: "600", lineHeight: "1.5"}}>
          Для использования <mark className="plugin">Adobe Firefly</mark> в{" "}
          <mark className="app">Adobe Photoshop</mark> оформите подписку Creative Cloud
          или активируйте пробную версию на 14 дней.
        </p>
        <Divider></Divider>
        <p>
          С выходом <mark className="app">Adobe Photoshop 2024</mark> многие начали из
          каждого угла спрашивать, мол{" "}
          <mark>«где народный фш с нейросетью можно скачать?»</mark>. Благодаря таким
          повсеместным вопросам от халявщиков — <mark className="company">Adobe</mark>{" "}
          прикрыл эту функцию с сентября 2023 года для тех, у кого отсутствует подписка{" "}
          <mark>Creative Cloud</mark>.{" "}
          <i style={{opacity: "0.5"}}>Да, перестаньте об этом спрашивать, пожалуйста.</i>
        </p>
        <Addition type="info">
          Источники, распространяющие в интернете{" "}
          <mark className="app">Adobe Photoshop с «генеративной заливкой»</mark> - либо
          распространяют устаревшую бету-версию или патчер-заменятор-файлов от{" "}
          <mark className="user">m0nkrus</mark>, которую тоже исправили давным давно, либо
          предлагают оформить пробную версию на 14 дней. Нам эти варианты не подходят.
        </Addition>
        <p>
          Но не стоит расстраиваться: использовать сторонние плагины и сервисы для
          генерации изображений и <mark className="word">инпеинта</mark> никто не
          запрещал, поэтому об аналогах мы и поговорим.
        </p>
        <Divider>Какие у нас есть варианты?</Divider>
        <ul>
          <li>
            Вы можете развернуть локальный <mark className="app">Stable Diffusion</mark> и
            использовать его в качестве плагина для{" "}
            <mark className="app">Adobe Photoshop</mark>. Данный способ требует хорошей
            видеокарты с объёмом VRAM не менее <mark>8 ГБ</mark>.
          </li>
          <li>
            Либо вы можете воспользоваться различными онлайн-сервисами по генерации
            изображений и редактирования уже существующих. Например,{" "}
            <a href="https://krea.ai">KreaAI</a> или{" "}
            <a href="https://www.recraft.ai/">RecraftAI</a>.
          </li>
          <li>
            Из онлайн-сервисов, заменяющий <mark className="plugin">Adobe Firefly</mark>{" "}
            был популярен плагин <mark className="plugin">Alpaca ML</mark>, но его работа
            была прекращена 25 октября 2024 года, а ссылки на регистрацию и скачивание
            были удалены, поэтому поговорить о нём мы не можем.
          </li>
          <li>
            Ну и крайний способ - оформлять пробную версию на 14 дней и каждый раз
            регистрировать новый аккаунт <mark className="company">Adobe</mark>. Это нам в
            любом случае не подходит, так как в некоторых случаях при активации пробной
            версии с вас попросят данные банковской карты или PayPal.
          </li>
        </ul>
        <p>
          Более подробно поговорим только о самом локальном{" "}
          <mark className="app">Stable Diffusion</mark> и его внедрении в{" "}
          <mark className="app">Adobe Photoshop</mark> через плагин.
        </p>
        <Divider>Связываем Stable Diffusion с Photoshop</Divider>
        <Addition type="warning">
          Действия проделываются на устройстве с операционной системой{" "}
          <mark>Windows</mark>. Способ соединения{" "}
          <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark> на устройствах с <mark>macOS</mark>{" "}
          не проверялся.
        </Addition>
        <p>
          Для начала нам нужно загрузить сам <mark className="app">Stable Diffusion</mark>
          . Это можно сделать с помощью программы{" "}
          <mark className="app">Stability Matrix</mark>, который можно загрузить из{" "}
          <a href="https://github.com/LykosAI/StabilityMatrix/releases">
            страницы релизов на GitHub
          </a>
          . Он доступен для <mark>Windows</mark> и <mark>macOS</mark>.
        </p>
        <Addition type="info">
          Если у вас уже установлен <mark className="app">Stable Diffusion</mark>, то вы
          можете пропустить этап установки и перейти сразу к установке плагинов.
        </Addition>
        <p>
          Программа портативная, то есть может устанавливаться где угодно на вашем
          компьютере и даже на внешнем носителе. Чтобы продолжить настройку - нажмите на{" "}
          <mark className="select">«Continue»</mark>. После перехода к окну{" "}
          <mark className="select">«Analytics»</mark> нажмите на{" "}
          <mark className="select">«Don&apos;t Share Analytics»</mark>.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/first_start_stability_matrix.png"
          type="image"
        />
        <Addition type="info">
          <ul>
            <li>
              Рекомендуется использовать скоростной накопитель для более быстрой загрузки
              моделей для генерации изображений.
            </li>
            <li>
              Рекомендуется иметь не менее <mark>20-30 ГБ</mark> свободного места на
              накопителе, так как среднестатистическая модель Stable Diffusion занимает
              около <mark>4-8 ГБ</mark> в зависимости от типа модели.
            </li>
            <li>
              {" "}
              Если у вас возникают проблемы со скачиванием интерфейсов - попробуйте
              использовать <mark className="app">VPN</mark> во время загрузки.
            </li>
          </ul>
        </Addition>
        <p>
          Далее программа предлагает нам установить любой интерфейс для{" "}
          <mark className="app">Stable Diffusion</mark>. В данной статье я выберу{" "}
          <mark className="select">«Stable Diffusion reForge»</mark>, так как она хорошо
          оптимизирована для слабых видеокарт. Вы же можете выбрать любой другой
          интерфейс, основанный на <mark>Automatic1111</mark> или следовать моему выбору.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/stability_matrix_select_ui.png"
          type="image"
        />
        <p>
          После выбора интерфейса нам предложат скачать популярные модели, но для
          генеративной заливки или расширения изображений они нам не особо подойдут,
          поэтому загрузку моделей мы пока что пропустим, нажав на{" "}
          <mark className="select">«Close»</mark>. После этого начнётся скачивание всего и
          вся, поэтому наберитесь терпения.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/select_popular_models_stability_matrix.png"
          type="image"
        />
        <Addition type="info">
          Если вы столкнулись с ошибкой <mark>«Package Modification Failed»</mark>, то
          повторите попытку установки интерфейса снова, нажав на кнопку{" "}
          <mark className="select">«Add Package»</mark> в вкладке{" "}
          <mark className="select">«Packages»</mark>.
        </Addition>
        <p>
          Более подробно о работе программы и интерфейсе{" "}
          <mark className="app">Stability Matrix</mark> вы можете посмотреть в видео ниже.
        </p>
        <ArticleMedia
          src="Fjl9dAoRqHM"
          type="youtube"
        />
        <p>
          Если у вас установка интерфейса прошла успешно, то время устанавливать плагин
          для соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>. Загрузку моделей для генеративной
          заливки и подобного мы отложим и вернёмся к нему позже.
        </p>
        <Addition type="warning">
          Для загрузки моделей возможно потребуется код API для CivitAI, который надо
          будет ввести в настройках <mark className="app">Stability Matrix</mark>. Его
          можно создать в{" "}
          <a href="https://civitai.com/user/account">настройках вашего профиля</a> после
          регистрации на ресурсе.
        </Addition>
        <p>
          Далее нам нужно запустить сам интерфейс{" "}
          <mark className="app">Stable Diffusion</mark>, нажав на{" "}
          <mark className="select">«Launch»</mark> в странице пакетов. Первый запуск
          интерфейса может продлиться некоторое время, особенно если не установлена ни
          одна модель, так как мы скачивание моделей пропустили. После успешной загрузки
          дополнительных зависимостей у вас откроется локальный сервер и автоматически
          откроется браузер с адресом <a href="http://127.0.0.1:7860/">127.0.0.1:7860</a>.
        </p>
        <p>
          Далее в интерфейсе <mark className="app">Stable Diffusion</mark> мы переходим в
          вкладку <mark className="select">«Extensions»</mark>, чтобы найти там плагин для
          соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ArticleMedia
          caption="Firefox // Stable Diffusion"
          src="legacy/photoshop/select_extensions_sd.png"
          type="image"
        />
        <p>
          В вкладке <mark className="select">«Extensions»</mark> нам нужно перейти в
          вкладку <mark className="select">«Available»</mark> и загрузить список моделей,
          нажав на <mark className="select">«Load from»</mark> в верхней части окна. Затем
          нужно ввести в поиск расширений слово{" "}
          <mark className="company">Adobe Photoshop</mark> и нажать на{" "}
          <mark className="select">«Install»</mark> рядом с{" "}
          <mark className="plugin">Auto-Photoshop-StableDiffusion-Plugin</mark>.
        </p>
        <ArticleMedia
          caption="Firefox // Stable Diffusion"
          src="legacy/photoshop/download_ps_sd_extension.png"
          type="image"
        />
        <p>
          После установки расширения в <mark className="app">Stable Diffusion</mark>{" "}
          вернитесь на вкладку <mark className="select">«Installed»</mark> и нажмите на
          кнопку <mark className="select">«Apply and quit»</mark>. Таким образом вы
          перезагрузите сервер <mark className="app">Stable Diffusion</mark> и активируете
          плагин.
        </p>
        <ArticleMedia
          caption="Firefox // Stable Diffusion"
          src="legacy/photoshop/apply_and_restart_sd.png"
          type="image"
        />
        <p>
          С установкой плагина для <mark className="app">Stable Diffusion</mark> мы
          разобрались, осталось установить плагин для{" "}
          <mark className="app">Adobe Photoshop</mark>. Для этого переходим на{" "}
          <a href="https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases">
            страницу релизов плагина на GitHub
          </a>{" "}
          и выбираем любой удобный вам способ установки плагина. Я же выберу вариант
          установки плагина через распаковку <mark className="file">ZIP</mark> архива и
          скачиваю именно <mark className="file">ZIP</mark> файл. Его нужно распаковать в
          папку{" "}
          <mark className="path">
            C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
          </mark>
          , создав дополнительную папку с любым названием на латинице, чтобы не было хаоса
          в этой папке.
        </p>
        <p>
          Казалось бы, можно уже запускать <mark className="app">Adobe Photoshop</mark> и
          творить чудеса. Но мы всё-таки не установили модели для генерации изображений.
          Для этого вернитесь в <mark className="app">Stability Matrix</mark> и перейдите
          в раздел с моделями.
        </p>
        <p>
          Там нам нужно найти любую вам понравившуюся модель именно с пометкой{" "}
          <mark>Inpainting</mark>. Различные версии можно найти на странице модели.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/download_inpainting_model.png"
          type="image"
        />
        <p>
          Далее нам нужно открыть сам плагин в{" "}
          <mark className="app">Adobe Photoshop</mark>. Для этого переходим в{" "}
          <mark className="select">«Plugins»</mark> и выбираем{" "}
          <mark className="plugin">
            «Auto Photoshop StableDiffusion Plugin» → «Auto-Photoshop-SD»
          </mark>
          .
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/open_sd_plugin_in_ps.png"
          type="image"
        />
        <p>
          В открытом окне плагина мы переходим на вкладку{" "}
          <mark className="select">«Settings»</mark> и выбираем тип интерфейса, в моем
          случае это <mark className="select">«Automatic1111»</mark> и вводим чуть выше
          адрес сервера <mark className="app">Stable Diffusion</mark>, который открывается
          в браузере.
        </p>
        <Addition type="info">
          Если у вас установлен <mark>ComfyUI</mark>, то вы можете оставить стандартную
          галочку и указать другой адрес сервера при необходимости.
        </Addition>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/change_server_sd_settings.png"
          type="image"
        />
        <p>
          Нам может выбить ошибка про отсутствие флага <mark>--api</mark>, который мы не
          вставляли перед запуском <mark className="app">Stable Diffusion</mark>. И
          естественно из-за этого пока не получится подключить{" "}
          <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/forgotten_api_flag.png"
          type="image"
        />
        <p>
          Решается это просто, нам нужно снова вернуться в{" "}
          <mark className="app">Stability Matrix</mark>, открыть настройки запуска,
          пролистать вниз и в поле{" "}
          <mark className="select">«Extra Launch Arguments»</mark> впишите{" "}
          <mark>--api</mark>.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/enter_launch_arguments.png"
          type="image"
        />
        <p>
          После этого перезагрузите сервер <mark className="app">SD</mark>, если он был
          запущен, а затем в <mark className="app">Adobe Photoshop</mark> в вкладке{" "}
          <mark className="select">«Stable Diffusion»</mark> плагина нажмите на кнопку{" "}
          <mark className="select">«Refresh»</mark>. После этого соединение между двумя
          вселенными произойдет корректно и даже появится возможность выбрать модель.
          Установку плагина можно считать завершённым, осталось разобраться с интерфейсом
          плагина.
        </p>
        <Addition type="info">
          Если соединение между двумя вселенными всё ещё не может установиться -
          попробуйте разрешить соединение по порту, на котором работает{" "}
          <mark className="app">Stable Diffusion</mark>, в{" "}
          <mark className="app">брандмауэре Windows</mark>. Возможно он был заблокирован
          для блокировки доступа <mark className="app">Adobe Photoshop</mark> в интернет.
        </Addition>
        <Addition type="warning">
          Перед использованием параметров <mark className="select">«Img2Img»</mark>,{" "}
          <mark className="select">«Outpainting»</mark> или{" "}
          <mark className="select">«Inpainting»</mark> - не забудьте переключиться на
          соответствующую модель, иначе можете наткнуться на неожиданные генерации.
        </Addition>
        <ArticleMedia
          caption="Stable Diffusion в Adobe Photoshop"
          src="legacy/photoshop/sd_in_ps_example.mp4"
          type="video"
        />
        <p>
          Результат генераций без первоначальных настроек может быть ни о чём, но никто не
          запрещал настраивать ваши генерации более детально. Но об этом я не буду
          заострять внимание, ведь информации об{" "}
          <mark className="app">Stable Diffusion</mark> довольно много на просторах
          интернета. А ещё лучше - создать изображения в браузерном интерфейсе (WebUI)
          генератора изображений.
        </p>
        <Addition type="warning">
          Прежде чем использовать плагин для соединения <mark className="app">SD</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark> - интерфейс{" "}
          <mark className="app">Stable Diffusion</mark> нужно каждый раз запускать через{" "}
          <mark className="app">Stability Matrix</mark>, если он не был запущен. Да, это
          может быть не удобно, но куда деваться.
        </Addition>
        <Divider>Firefly в Lightroom для устройств на Android</Divider>
        <p>
          Если вам прям позарез нужно использовать{" "}
          <mark className="company">Adobe Firefly</mark> для одноразового использования,
          то вы можете установить «народную» версию{" "}
          <mark className="app">Adobe Lightroom</mark> для{" "}
          <a href="https://4pda.to/forum/index.php?showtopic=636042">
            устройств на Android
          </a>
          . Почему «одноразовое» использование? Потому что{" "}
          <mark className="company">Adobe Firefly</mark> работает на серверах и для
          пользователей без активной подписки любого плана от{" "}
          <mark className="company">Adobe</mark> предоставляется малое количество
          «генеративных баллов».
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Для работоспособности генеративной заливки для удаления требуется вход в
              аккаунт <mark className="company">Adobe</mark>.
            </li>
            <li>
              Генеративная заливка с помощью{" "}
              <mark className="company">Adobe Firefly</mark> будет работать только для
              удаления объектов без возможности указать свой{" "}
              <mark className="word">промпт</mark>.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="kpojluk-corrupted-install-files"
        tag="репак от кролика"
        title="«Некоторые установочные файлы были повреждены. Загрузите свежую копию и повторите установку»"
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
            <p>
              Убедитесь в том, что вы полностью скачали файл. Довольно часто веб-версия{" "}
              <mark className="app">Telegram</mark> загружает установочные файлы с
              ошибками.{" "}
              {(() => {
                const {isAndroid, isIOS, isMacOS} = getPlatformInfo();

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
                      Чтобы корректно скачивать подобные файлы - рекомендую
                      воспользоваться десктопной версией{" "}
                      <mark className="app">Telegram</mark> вместо веб-версии, которую
                      можно скачать по{" "}
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
            </p>
            <Addition type="info">
              Если вы полностью скачали файл с канала{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и вы
              уверены, что проблема не на вашей стороне - сообщите об этом в комментариях
              под постом.
            </Addition>
          </li>
          <li>
            <p>
              Если вы скачали репак, запакованный в многотомный архив, которые обычно
              помечаются как <mark className="file">PART1</mark>,{" "}
              <mark className="file">PART2</mark> и так далее по порядку - убедитесь в
              том, что вы скачали все части архива, а также его корректно распаковали.
            </p>
            <Addition type="info">
              Чтобы распаковать такой архив - достаточно начать распаковку первой части
              архива, остальные части подхватятся автоматически. Для распаковки таких
              архивов рекомендую воспользоваться <mark className="app">WinRAR</mark>.
            </Addition>
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
        anchor="kpojluk-the-hosts-file-does-not-exist-or-is-not-accessible"
        tag="репак от кролика"
        title="«rsload.net заблокирован в hosts» или «The hosts file does not exist or is not accessible»"
      >
        <p>
          Данная ошибка чаще всего возникает из-за того, что в вашей системе по какой-то
          неведомой причине отсутствует файл <mark className="file">HOSTS</mark>. Чтобы
          решить эту проблему - для начала посмотрите содержимое{" "}
          <mark className="path">%WinDir%\System32\Drivers\etc</mark>.
        </p>
        <p>
          Если в этой директории нет файла <mark className="file">HOSTS</mark> - создайте
          его самостоятельно, например, с помощью <mark className="app">Блокнота</mark> и
          переместите созданный файл без расширения в папку{" "}
          <mark className="path">%WinDir%\System32\Drivers\etc</mark>.{" "}
          <a href="https://support.microsoft.com/ru-ru/topic/%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-hosts-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-c2a43f9d-e176-c6f3-e4ef-3500277a6dae">
            Подробнее на сайте Microsoft...
          </a>
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="kpojiuk-repack-adware"
        tag="репак от кролика"
        title="Забыл убрать галочку с рекламой при установке репака от KpoJIuK. Как избавиться от последствий?"
      >
        <p>
          По умолчанию в репаках от <mark className="user">KpoJluK</mark> включена галочка{" "}
          <mark className="select">«Реклама»</mark>, поэтому можно случайно нарваться на
          установку <mark>me.fo</mark> или <mark>hi.ru</mark> в качестве стартовой
          страницы браузера или на установку <mark className="app">Яндекс.Браузера</mark>.
          К счастью все эти нововведения можно удалить через{" "}
          <mark className="app">Панель управления</mark> или любым удобным для вас
          способом.
        </p>
        <p>
          В следующий раз не забывайте убирать галочку{" "}
          <mark className="select">«Реклама»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="neural-filters-download"
        tag="neural filters"
        title="Где и как скачать нейро-фильтры в Photoshop?"
      >
        <p>
          Вы, наверное, не раз натыкались на то, что вкладка{" "}
          <mark className="select">«Neural Filters»</mark> не доступна на «народных»
          версиях <mark className="app">Adobe Photoshop</mark>. Она не активна по той
          причине, что вы не вошли в аккаунт <mark className="company">Adobe</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/disabled_neural_filters.png"
          type="image"
        />
        <p>
          Чтобы активировать вкладку <mark className="select">«Neural Filters»</mark> вам
          нужно зарегистрировать аккаунт <mark className="company">Adobe</mark> если у вас
          его нет и войти в него. Для этого перейдите в{" "}
          <mark className="select">«Help»</mark> и нажмите на{" "}
          <mark className="select">«Sign In»</mark>. В открывшемся окне произведите вход в
          аккаунт.
        </p>
        <Addition type="info">
          Не переживайте, псевдо-лицензия после входа в аккаунт не слетит. Если после
          нажатия на <mark className="select">«Sign In»</mark> вместо окна входа в аккаунт
          появляется окно об отсутствии интернета, то просто попробуйте включить{" "}
          <mark className="app">VPN</mark>. Обычно они игнорируют правила блокировки
          доступа программе в интернет.
        </Addition>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/help_sign_in.png"
          type="image"
        />
        <p>
          После входа в аккаунт - вкладка <mark className="select">«Neural Filters»</mark>{" "}
          в контекстном меню <mark className="select">«Filter»</mark> станет активной и вы
          сможете загрузить нейро-фильтры, нажав на иконку загрузки рядом с ними.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/download_neural_filters.png"
          type="image"
        />
        <p>
          Но не тут то было, иногда загрузка нейро-фильтров сразу прерывается, не объясняя
          причину. Чтобы это исправить - нужно внести несколько адресов в файл{" "}
          <mark className="file">HOSTS</mark>. Для этого вам нужно перейти в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопировать файл{" "}
          <mark className="path">hosts</mark> в любое удобное место, открыть любой
          текстовый редактор, например <mark className="app">Notepad++</mark> или{" "}
          <mark className="app">VS Code</mark>, и внести строки чуть ниже в конец файла.
          Затем сохраните отредактированный файл и перенесите его обратно в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc\hosts</mark> с заменой и
          перезагрузите <mark className="app">Adobe Photoshop</mark>, если он у вас был
          открыт.
        </p>
        <Addition type="warning">
          Для изменения системных файлов требуются права администратора.
        </Addition>
        <code>
          127.0.0.1 cc-api-data.adobe.io
          <br />
          127.0.0.1 ic.adobe.io
          <br />
          127.0.0.1 genuine.adobe.com
          <br />
          127.0.0.1 prod.adobegenuine.com
          <br />
          127.0.0.1 assets.adobedtm.com
        </code>
        <p>
          После этого загрузка нейро-фильтров должна начаться нормально. Нейро-фильтры
          обычно загружаются в папку{" "}
          <mark className="path">
            %AppData%\Adobe\UXP\PluginsStorage\PHSP\XX\Internal\com.adobe.nfp.gallery\PluginData
          </mark>
          , где <mark>XX</mark> - версия программы, указаная в первой части числа в{" "}
          <mark className="select">«Help» → «About Photoshop»</mark>. Эта информация вам
          пригодится, если вы хотите удалить файлы нейро-фильтров или распаковать их в
          нужную папку из другого источника в интернете.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-zxp-installer-193"
        title="«Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again» при использовании ZXP Installer"
      >
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
          вы используете репаки от <mark className="user">KpoJluK</mark> или{" "}
          <mark className="user">m0nkrus</mark>.
        </p>
        <Addition type="info">
          Более подробную информацию про установку дополнительных материалов вы можете
          прочитать в<a href="#2.1">статье 2.1</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="safe-mode-and-reset"
        tag="безопасный режим, reset preferences, safe mode, установка поверх, нестабильно, сброс настроек, startup repair options, переустановка поверх, чистая установка"
        title="Что делать, если программа начала работать нестабильно, а переустанавливать с нуля не хочется?"
      ></DetailsSummary>
      <Addition type="info">
        Некоторые решения проблем, которые у вас могут возникнуть после установки
        дополнительных материалов или во время использования программы, находятся в общем
        разделе{" "}
        <a
          href="#errors"
          onClick={(event_) => {
            event_.preventDefault();

            const target = document.querySelector("#errors");

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

              window.scrollTo({behavior: "smooth", top: y});
            }
          }}
        >
          Ошибки и предупреждения
        </a>
        .
      </Addition>
    </div>
  );
};

export default PsInstallProblems;
