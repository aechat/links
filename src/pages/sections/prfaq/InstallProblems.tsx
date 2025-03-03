import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";

const PRInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/InstallProblems.tsx" />
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <p>
          Обычно установка большинства плагинов универсальна, поэтому следуйте
          рекомендациям ниже.
        </p>
        <AdditionWarning>
          Прежде чем использовать <mark className="file">.prproj</mark>,{" "}
          <mark className="file">.aep</mark> и <mark className="file">.mogrt</mark>{" "}
          шаблоны или пакеты для <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> или подобных расширений - убедитесь,
          что они полностью распакованы и расположены в пути не длиннее 256 символов без
          кириллицы!
        </AdditionWarning>
        <ul>
          <li>
            Если в архиве находится файл <mark className="file">.prproj</mark>, то такой
            файл проект просто импортируются в ваш проект с помощью{" "}
            <mark className="ui">File &gt; Import</mark> или{" "}
            <mark className="key">Ctrl+I</mark> и никуда не устанавливаются.
          </li>
          <li>
            Если в архиве находится файл <mark className="file">.aep</mark>, то для
            импорта таких проектов требуется установленный{" "}
            <mark className="app">After Effects</mark>. Их можно импортировать в ваш
            проект с помощью <mark className="ui">File &gt; Import</mark> или{" "}
            <mark className="key">Ctrl+I</mark>. Композиция из{" "}
            <mark className="app">After Effects</mark> в{" "}
            <mark className="app">Premiere Pro</mark> будет работать через{" "}
            <mark className="plugin">Dynamic Link</mark>.
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
                  Если в архиве находится файл <mark className="file">.mogrt</mark>, то
                  такие шаблоны устанавливаются в панели{" "}
                  <mark className="ui">Graphics Templates</mark> с помощью кнопки{" "}
                  <mark className="ui">Install Motion Graphics template</mark>.
                  <ImageFigure
                    styleClass="figure_windows-dark"
                    imgSrc="images/premierepro/install_mogrt.png"
                    imgTitle="Установка mogrt-шаблонов"
                    caption="Graphics Templates"
                  />
                  Также файлы <mark className="file">.mogrt</mark> можно расположить в
                  стандартную папку локальных шаблонов, которая находится по пути{" "}
                  <mark className="path">
                    %AppData%/Adobe/Common/Motion Graphics Templates/
                  </mark>{" "}
                  и они появятся в окне <mark className="ui">Graphics Templates</mark>.
                  <AdditionWarning>
                    При использовании некоторых шаблонов формата{" "}
                    <mark className="file">.mogrt</mark> может потребоваться установленный
                    в системе <mark className="app">After Effects</mark>. Если эта
                    программа у вас уже установлена, но{" "}
                    <mark className="app">Premiere Pro</mark> выбивает ошибку о том, что
                    программу нужно установить - убедитесь в том, что вы установили{" "}
                    <mark className="app">Premiere Pro</mark> и{" "}
                    <mark className="app">After Effects</mark> в стандартном расположении{" "}
                    <mark className="path">C:\Program Files\Adobe\</mark>.
                  </AdditionWarning>
                </li>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">.exe</mark>, то обычно в нём содержится
                  установщик. Если в записи указано, что данный установщик является
                  репаком - в таком случае после его установки плагин будет уже
                  активирован, никаких лишних телодвижений после установки делать не надо.
                  <AdditionWarning>
                    При использовании установщиков убедитесь в том, что у вас{" "}
                    <mark className="app">Premiere Pro</mark> установлен в стандартном
                    расположении <mark className="path">C:\Program Files\Adobe\</mark>, не
                    на другом месте или разделе. В противном случае устанавливаемый плагин
                    установится в другом месте и не будет отображаться в вашем{" "}
                    <mark className="app">Premiere Pro</mark>.
                  </AdditionWarning>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.prm</mark> или{" "}
                  <mark className="file">.aex</mark>, то такие плагины обычно
                  распаковываются в общую папку плагинов:{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  .
                  <AdditionWarning>
                    Учтите, что не все плагины формата <mark className="file">.aex</mark>{" "}
                    поддерживаются в <mark className="app">Premiere Pro</mark>, так как по
                    большей части плагины такого формата были предназначены для{" "}
                    <mark className="app">After Effects</mark> и не всегда имеет
                    &quot;обратную совместимость&quot; с{" "}
                    <mark className="app">Premiere Pro</mark>.
                  </AdditionWarning>
                </li>
                <li>
                  Если в архива находится файл <mark className="file">.prfpset</mark>, то
                  такие файлы пресетов устанавливается следующим образом.
                  <ul>
                    <li>
                      Откройте окно <mark className="ui">Effects & Presets</mark> и
                      нажмите на три полоски в заголовке этого окна, а затем выберите
                      пункт <mark className="ui">Import Presets</mark>.
                      <AdditionInfo>
                        При необходимости вы можете создать новую папку для ваших новых
                        пресетов, нажав на кнопку{" "}
                        <mark className="ui">New Presets Bin</mark> и назвать её как вашей
                        душе удобно.
                      </AdditionInfo>
                      <ImageFigure
                        styleClass="figure_windows-dark"
                        imgSrc="images/premierepro/import_presets.png"
                        imgTitle="Установка пресетов в Premiere Pro"
                        caption="Premiere Pro"
                      />
                    </li>
                    <li>
                      В открывшемся окне выберите файл пресетов формата{" "}
                      <mark className="file">.prfpset</mark>.
                    </li>
                    <li>
                      После выбора файла с пресетами ваши импортированные пресеты появятся
                      в окне <mark className="ui">Effects</mark> в папке{" "}
                      <mark className="path">Presets</mark>.
                      <AdditionInfo>
                        Все ваши пресеты хранятся в одном общем файле пресетов под
                        названием{" "}
                        <mark className="file">
                          Effect Presets and Custom Items.prfpset
                        </mark>
                        , которая находится в{" "}
                        <mark className="path">
                          C:\Users\%UserName%\Documents\Adobe\Premiere
                          Pro\XX.X\Profile-XXXXXX\
                        </mark>
                        . Этот файл редактировать вне{" "}
                        <mark className="app">Premiere Pro</mark> не стоит, но его можно
                        скопировать и перенести в другое место, чтобы в случае
                        необходимости восстановить пресеты из файла.
                      </AdditionInfo>
                    </li>
                  </ul>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.cube</mark>,{" "}
                  <mark className="file">.itx</mark>, <mark className="file">.look</mark>{" "}
                  или <mark className="file">.lut</mark>, то такие файлы распаковываются в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Support
                    Files\Lumetri\LUTs\Creative
                  </mark>
                  , а затем используются в окне
                  <mark className="plugin">Lumetri Color</mark> в вкладке{" "}
                  <mark className="ui">Creative</mark>.
                  <AdditionInfo>
                    Чтобы открыть окно для цветокоррекции через Lumetri, то перейдите в{" "}
                    <mark className="ui">Window</mark> и выберите{" "}
                    <mark className="ui">Lumetri Color</mark>.
                  </AdditionInfo>
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.zxp</mark>, то
                  такие расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">
                    ZXP Installer от aescripts
                  </a>
                  .
                  <AdditionDanger>
                    Пожалуйста, не используйте{" "}
                    <a href="https://zxpinstaller.com/">
                      ZXP Installer от ELEMENTS Storage Media
                    </a>
                    , если вы используете версии программ от Adobe, отвязанные от
                    приложения <mark className="app">Creative Cloud</mark>. Данный{" "}
                    <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам
                    выдавать ошибку <strong>-193</strong> до тех пор, пока вы не
                    установите программу <mark className="app">Creative Cloud</mark>, а он
                    же может вам поломать уже установленные программы.
                  </AdditionDanger>
                  Если вы не хотите устанавливать стороннее ПО для установки{" "}
                  <mark className="file">.zxp</mark>, то вы можете переименовать файл{" "}
                  <mark className="file">.zxp</mark> в <mark className="file">.zip</mark>{" "}
                  и распаковать его как обычный архив. Содержимое свежераспакованного
                  файла нужно поместить в папку{" "}
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
                  <AdditionInfo>
                    <ul>
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
                        включает debug-режим в <mark className="app">Premiere Pro</mark>{" "}
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
                    </ul>
                  </AdditionInfo>
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
          macContent={<div>{/* TODO: дописать */}</div>}
        />
      </DetailsSummary>
      <DetailsSummary
        title="В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое и как такие файлы корректно распаковать?"
        tag="части архива, парт, распаковка, rar, zip"
      >
        <p>
          Данные файлы с пометкой <mark>.part1</mark>, <mark>.part2</mark> и далее по
          списку - это лишь части одного и того же архива. Архивы поделены на 2 или на 4
          Гб из-за ограничений Telegram на размер загружаемых файлов. Чтобы корректно
          распаковать нужный архив - нужно загрузить все файлы на ваш компьютер, а затем
          распаковать с помощью программ-архиваторов.
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
          <a href="https://t.me/s/premtemp">PremTemp</a>,{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> - вы
          принимаете на себя все риски и берёте ответственность за использование
          нелегальных материалов. Мы не можем принимать вбросы по типу{" "}
          <mark className="quote">
            ой в складе, саду или премтемпе одни вирусы водятся
          </mark>{" "}
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
          файл <mark className="file">helper.exe</mark> в репаках от KpoJluk, который
          распаковывает дистрибутивы Adobe из-за того, что в нём находится галочка
          &quot;реклама&quot; и помечает это как <mark>Contrebrew.A!ml</mark>,{" "}
          <mark>Adware</mark> или иначе. Такое иногда может быть и на дистрибутивах от
          m0nkrus или аналогичных репакеров.
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
          По умолчанию в репаках от KpoJluk включена галочка &quot;Реклама&quot;, поэтому
          можно случайно нарваться на установку <mark>me.fo</mark> или <mark>hi.ru</mark>{" "}
          в качестве стартовой страницы браузера или на установку{" "}
          <mark className="app">Яндекс.Браузера</mark>. К счастью все эти
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
      <DetailsSummary title="Зачем мне советуют не менять расположение Premiere Pro при установке? А если у меня нет места на жёстком диске?">
        <p>
          Установка программ от Adobe не на стандартный раздел, то есть на раздел отличный
          от <mark className="path">C:\Program Files\Adobe</mark> влечёт за собой
          несколько проблем пользователю на задницу.
        </p>
        <ul>
          <li>
            Плагины, которые распространяются в установщиках могут не установить себя там,
            где вы указали путь установки <mark className="app">Premiere Pro</mark>.
            Например, если вы установили программу на{" "}
            <mark className="path">D:\Adobus</mark>, то при установке условного{" "}
            <mark className="plugin">Magic Bullet Suite</mark> вы его не увидите в{" "}
            <mark className="app">Premiere Pro</mark>. А всё почему? Правильно, потому что
            установщик плагина завязан на типичных для Adobe расположениях и не
            подразумевает тот факт, что пользователю придёт в голову установить{" "}
            <mark className="app">Premiere Pro</mark> не на стандартном расположении.
          </li>
          <li>
            Продолжая первый пункт: распаковывая скрипты, плагины или пресеты в
            расположениях, которые указаны в{" "}
            <a href="/prfaq#2.1">типичных инструкциях по установке</a> также есть риск,
            что вы их тоже не увидите в программе.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> и{" "}
            <mark className="app">After Effects</mark> вряд ли подключатся к{" "}
            <mark className="app">Premiere Pro</mark>, если они установлены на разных
            директориях или не на стандартном месте.
          </li>
        </ul>
        <p>
          Чтобы исправить всё эти приколы, нужно переустановить{" "}
          <mark className="app">Premiere Pro</mark> по нормальному, не меняя раздел при
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
      <DetailsSummary title="Установил плагин с помощью установщика, а я его не вижу в Premiere Pro">
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
      <DetailsSummary title="Установил Premiere Pro и Media Encoder, но они не видят друг друга и не подключаются. Как это исправить?">
        <p>
          Функция Dynamic Link позволяет синхронизировать композиции из{" "}
          <mark className="app">Premiere Pro</mark> и очередь рендера в{" "}
          <mark className="app">Media Encoder</mark>. Но не всегда их получается
          подружить.
        </p>
        <p>
          Иногда <mark className="app">Premiere Pro</mark> при попытке отправить секвенцию
          на очередь рендера в <mark className="app">Media Encoder</mark> выдаёт просьбу
          мол &quot;чувак, установи Media Encoder, а то ты его не установил&quot;, хотя
          эта программа вроде как установлена. Для того, чтобы программы видели друг друга
          - вам нужно соблюсти два условия:
        </p>
        <ul>
          <li>
            Убедитесь в том, что вы установили <mark className="app">Premiere Pro</mark> и{" "}
            <mark className="app">Media Encoder</mark> одного &quot;года&quot;. Если вы,
            например, установили <mark className="app">Premiere Pro 2022</mark> и{" "}
            <mark className="app">Media Encoder 2019</mark> - они никогда не увидят друг
            друга, так как программы жёстко привязаны к &quot;году&quot;.
          </li>
          <li>
            Если вы установили <mark className="app">Premiere Pro</mark> и{" "}
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
          отправляются композиции из <mark className="app">Premiere Pro</mark> в{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <p>
          Также в редких случаях при использовании патча GenP функция Dynamic Link может
          работать криво. Поэтому попробуйте удалить ваши программы Adobe и установить
          репаки от KpoJluK или m0nkrus.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Установил VST-плагины, но они не отображаются в Premiere Pro"
        tag="вст, аудио плагины, звук, изотоп, izotope, vst3"
      >
        <p>
          Предположим, что вы недавно установили новые VST-плагины для обработки звука, но
          они не появились автоматически в <mark className="app">Premiere Pro</mark>. Это
          нормально, потому что такие плагины программой при запуске не ищутся
          автоматически.
        </p>
        <p>
          Чтобы вручную начать поиск таких плагинов, откройте{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio</mark> и нажмите на кнопку{" "}
          <mark className="ui">Manage Audio Plug-ins</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/edit_audio_manage_audio_plugins.png"
          imgTitle="Окно Preferences с открытым разделом Audio"
          caption="Preferences"
        />
        <p>
          Затем в открывшемся окне вы можете начать сканирование плагинов с помощью кнопки{" "}
          <mark className="ui">Scan for Plug-ins</mark>, пересканировать уже существующие
          плагины или добавить новую папку, где хранятся ваши VST-плагины. После
          сканирования плагинов вы сможете ими воспользоваться в{" "}
          <mark className="ui">Track Mixer</mark> или где-нибудь ещё.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/audio_plugin_manager.png"
          imgTitle="Менеджер аудио-плагинов"
          caption="Audio Plug-in Manager"
        />
      </DetailsSummary>
      <DetailsSummary title='Код ошибки 21 при установке Premiere Pro или "операционная система не соответствует минимальным требованиям для этой программы установки"'>
        <p>
          Вы пытаетесь установить <mark className="app">Premiere Pro 2024</mark> или новее
          на Windows 10 сборки 21H2 или старее. Если у вас стоит сборка LTSC, поздравляю -
          новее сборки, чем 21H2 для вас нет, переустанавливайте систему на редакцию Home
          или Pro. Или установите более старые сборки{" "}
          <mark className="app">Premiere Pro</mark>.
        </p>
        <AdditionInfo>
          Текущую сборку Windows вы можете посмотреть открыв{" "}
          <mark className="app">winver</mark>.
        </AdditionInfo>
        <p>
          Для решения этой проблемы прочтите{" "}
          <a href="https://helpx.adobe.com/ru/premiere-pro/system-requirements.html">
            системные требования Premiere Pro
          </a>{" "}
          и найдите раздел про минимальную требуемую операционную систему. На момент
          написания этого пункта требуется минимум Windows 10 22H2 или Windows 11 21H2.
          Затем откройте раздел с обновлениями Windows и обновите систему до максимально
          возможной версии, или установите 22H2 поверх существующей Windows 10.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PRInstallProblems;
