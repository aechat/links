import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PsInstallProblems: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <p>
          Обычно установка большинства дополнительных материалов универсальна, но может
          отличаться в зависимости от вашей операционной системы. В этой статье указано
          как установить тот или иной тип файла для{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <Divider>Универсальные инструкции для разных типов файлов</Divider>
        <ul>
          <li>
            Если в архиве находится файл <mark className="image">PSD</mark>, то такие
            файлы открываются как обычный проект в{" "}
            <mark className="app">Adobe Photoshop</mark> через{" "}
            <mark className="select">«File» → «Open»</mark> или открытием из проводника,
            если в системе зависимости были корректно настроены на данный тип файлов.
            <Addition type="info">
              Если вы хотите встроить <mark className="image">PSD</mark> в свой проект -
              просто перенесите файл из проводника в окно с открытым проектом в{" "}
              <mark className="app">Adobe Photoshop</mark> или поместите через{" "}
              <mark className="select">«File» → «Place Embedded»</mark>. Импортированный{" "}
              <mark className="image">PSD</mark> появится как смарт-объект, который можно
              будет отредактировать двойным нажатием по миниатюре в окне{" "}
              <mark className="select">«Layers»</mark>.
            </Addition>
          </li>
          <li>
            Если в архиве находится <mark className="image">AI</mark>,{" "}
            <mark className="image">EPS</mark>, <mark className="image">JPG</mark>,{" "}
            <mark className="image">PNG</mark>, <mark className="image">PDF</mark>,{" "}
            <mark className="image">SVG</mark> или другие файлы изображений, то такие
            файлы открываются как обычные изображения в{" "}
            <mark className="app">Adobe Photoshop</mark> простым перетаскиванием файла в
            окно программы или через <mark className="select">«File» → «Open»</mark>.
            <Addition type="info">
              <p>
                Чтобы поместить изображение в открытый проект - переместите его из
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
                  <mark className="select">«Place Embedded»</mark> будут импортированы как
                  смарт-объект.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            Если в архиве находится файл <mark className="file">ATN</mark>, то для
            установки вам нужно открыть окно <mark className="select">«Actions»</mark> с
            помощью комбинации клавиш <mark className="key">Alt + F9</mark>, нажать на три
            полоски в углу открывшегося окна и нажать на кнопку{" "}
            <mark className="select">«Load Actions»</mark>. Далее вам предложат выбрать
            нужный файл. После выбора файла действий оно у вас отобразится в окне{" "}
            <mark className="select">«Actions»</mark> и вы сможете применять их в своих
            проектах.
            <Addition type="warning">
              Рекомендуется использовать английскую локализацию{" "}
              <mark className="app">Adobe Photoshop</mark> при использовании сторонних{" "}
              <mark className="file">ATN</mark> файлов. В них часто могут быть завязаны
              действия на стандартные слова английской локализации.
            </Addition>
            <ContentFigure
              caption="Photoshop"
              imgTitle="Загрузка действий"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/photoshop/load_actions.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            Если в архиве находится файл <mark className="file">ABR</mark>, то для
            установки кистей нужно открыть окно кистей в{" "}
            <mark className="select">«Window» → «Brushes»</mark>. В открывшемся окне
            нажмите на три полоски в углу и выберите{" "}
            <mark className="select">«Import Brushes»</mark>. В проводнике выберите нужный
            файл с набором кистей.
            <ContentFigure
              caption="Photoshop"
              imgTitle="Импортирование кистей"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/photoshop/import_brushes.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
        </ul>
        <ContentFilter
          macContent={
            <div>
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
                  Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                  <mark className="file">7Z</mark> или <mark className="file">RAR</mark>,
                  то вам необходимо его распаковать с помощью архиватора для дальнейшей
                  работы с ним. Это можно сделать с помощью{" "}
                  <mark className="app">keka</mark> или{" "}
                  <mark className="app">The Unarchiver</mark>.
                  <Addition type="info">
                    <ul>
                      <li>
                        Загрузить <mark className="app">keka</mark> можно по{" "}
                        <a href="https://www.keka.io/ru/">этой ссылке</a>, а{" "}
                        <mark className="app">The Unarchiver</mark> - по{" "}
                        <a href="https://theunarchiver.com/">этой</a>.
                      </li>
                      <li>
                        Для распаковки многотомного архива, то есть если в названии
                        архивов есть <mark className="file">PART1</mark>,{" "}
                        <mark className="file">PART2</mark> и так далее - нужно запустить
                        распаковку только первой части архива, остальные части подхватятся
                        автоматически. Остальные части архива не нужно трогать без острой
                        необходимости, если вы не знаете что с ними делать.
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
                  </Addition>
                  <ContentFigure
                    caption="Распаковка через контекстное меню"
                    imgTitle="Распаковка через контекстное меню"
                    src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                    theme="light"
                    type="image"
                    variant="mac"
                  />
                </li>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">DMG</mark>, <mark className="file">APP</mark> или{" "}
                  <mark className="file">PKG</mark>, то обычно в нём содержится
                  автоматический установщик плагина. Для установки таких файлов нужно
                  следовать инструкциям установщика, например перенести файл из одного
                  места в другое и так далее.
                  <Addition type="info">
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
                        Если вы сталкиваетесь с ошибкой{" "}
                        <mark>«Не удаётся открыть программу „AppName”»</mark> - попробуйте
                        открыть его через <mark className="key">ПКМ</mark>, выбрав в
                        контекстном меню <mark className="select">«Открыть»</mark>.
                      </li>
                    </ul>
                  </Addition>
                </li>
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
                  </Addition>
                </li>
              </ul>
            </div>
          }
          windowsContent={
            <div>
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
                        <mark className="file">PART2</mark> и так далее - нужно запустить
                        распаковку только первой части архива, нажав{" "}
                        <mark className="key">ПКМ</mark> по файлу и выбрать в контекстном
                        меню <mark className="select">«WinRAR» → «Распаковать в...»</mark>
                        . Остальные части подхватятся автоматически и их не нужно трогать
                        без острой необходимости, если вы не знаете что с ними делать.
                      </li>
                      <li>
                        Многотомные архивы создаются для того, чтобы файл можно было
                        спокойно передать, обойдя ограничения максимального размера в{" "}
                        <mark className="app">Telegram</mark> или другого ресурса.
                      </li>
                    </ul>
                  </Addition>
                  <ContentFigure
                    caption="Распаковка многотомного архива"
                    src="1OVwQS0uHhk"
                    type="youtube"
                  />
                </li>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">EXE</mark>, то обычно в нём содержится
                  автоматический установщик плагина. Если в записи указано, что данный
                  установщик является репаком - в таком случае после его установки плагин
                  будет уже активирован, никаких лишних телодвижений после установки
                  делать не надо.
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
                        Перед установкой плагинов с помощью установщика - закройте все
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
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-defender"
        tag="репак от кролика, выключить дефендер, отрубить антивирус, ложное срабатывание, хелпер, ошибка 24, вирусы, трояны, проверьте правильно ли указано имя и повторите попытку, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы, операция не была успешно завершена так как файл содержит вирус или потенциально нежелательную программу, обнаружены угрозы, куда-то пропадают файлы плагинов и программ, operation did not complete successfully because the file contains a virus or potentially unwanted software, windows cannot find helper.exe, make sure you typed the name correctly and then try again, 0x800700E1"
        title="«Не удаётся найти „..\install\helper.exe“» или как отключить Windows Defender и Windows Smartscreen?"
      >
        <ContentFilter
          windowsContent={
            <div>
              <p>
                При установке «народного» программного обеспечения ваш антивирус может
                сработать на модифицированные файлы, удалить их и пометить как{" "}
                <mark className="warning">«HackTool:Win32/Crack!MTB»</mark>,{" "}
                <mark className="warning">«Contrebrew.A!ml»</mark>,{" "}
                <mark className="warning">«Adware»</mark>,{" "}
                <mark className="warning">«Adload»</mark> или даже «троян» и «опаснейший
                вирус». Например, ошибка{" "}
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
            <div>
              <p>
                Скорее всего вы до установки более новых версий{" "}
                <mark className="app">Adobe Photoshop</mark> пользовались другими
                программами <mark className="company">Adobe</mark>. Для решения -
                попробуйте удалить папку{" "}
                <mark className="path">/Library/Application Support/Adobe/caps</mark>, а
                затем повторить попытку установки нужной программы.
              </p>
            </div>
          }
          windowsContent={
            <div>
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
            </div>
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
            Если вы хотите установить свежую версию{" "}
            <mark className="app">Adobe Photoshop</mark>, то вам нужно обновить вашу
            систему до <mark>Windows 10</mark> сборки <mark>22H2</mark> или установить{" "}
            <mark>Windows 11</mark>. Обычно в{" "}
            <a href="https://helpx.adobe.com/photoshop/system-requirements.html">
              системных требованиях Adobe Photoshop
            </a>{" "}
            указывается минимальная версия операционной системы.
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
            <Addition type="info">
              Если вы полностью скачали файл с канала{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и вы
              уверены, что проблема не на вашей стороне - сообщите об этом в комментариях
              под постом.
            </Addition>
          </li>
          <li>
            Если вы скачали репак, запакованный в многотомный архив, которые обычно
            помечаются как <mark className="file">PART1</mark>,{" "}
            <mark className="file">PART2</mark> и так далее по порядку - убедитесь в том,
            что вы скачали все части архива, а также его корректно распаковали.
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
          <mark className="select">«Реклама»</mark>. Если вы хотите сделать так, чтобы у
          вас автоматически убирались рекламные чекбоксы при установке - попробуйте
          воспользоваться программой <a href="https://unchecky.com/">Unchecky</a>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="«Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again» при использовании ZXP Installer">
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
        tag="креатив клауд клинер, удаление адоба, очистка от хвостов"
        title="Как полностью удалить Adobe Photoshop и остальные продукты от Adobe на моем устройстве?"
      >
        <p>
          Если вы хотите переустановить или забыть о программах{" "}
          <mark className="company">Adobe</mark> раз и навсегда, то вы можете сделать это
          двумя способами.
        </p>
        <ul>
          <li>
            Через <mark className="app">Adobe Creative Cloud Cleaner Tool</mark>, который
            можно скачать{" "}
            <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
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
            удалить <mark className="company">Adobe</mark>, но смогут удалить большую
            часть зависимостей. По желанию вы можете почистить реестр <mark>Windows</mark>{" "}
            после удаления, например с помощью{" "}
            <mark className="app">Vit Registry Fix</mark>.
          </li>
        </ul>
        {/* TODO: про почистить руками популярные директории */}
      </DetailsSummary>
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
