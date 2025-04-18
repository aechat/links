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

const PRInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/InstallProblems.tsx" />
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <p>
          Обычно установка большинства дополнительных материалов универсальна, поэтому
          следуйте инструкциям ниже.
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
                        <mark className="ui">
                          Не удаётся открыть программу &quot;XXXXXX&quot;
                        </mark>
                        . Для решения проблемы достаточно найти более свежий установщик
                        или откатить при желании и возможности ваше устройство на более
                        старую версию <mark>macOS</mark>.
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                {/* <li>
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
                        <mark className="ui">Effects</mark> и могут вызываться с
                        помощью <mark className="plugin">FX Console</mark>. В редких
                        случаях плагин может в программе вызываться из другого места -
                        читайте приложенную документацию к устанавливаемому плагину.
                      </li>
                      <li>
                        Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                        <mark className="app">Premiere Pro</mark> и наоборот. Уточняйте в
                        документации устанавливаемого плагина, для каких версий{" "}
                        <mark className="app">Premiere Pro</mark> он предназначен.
                      </li>
                    </ul>
                  </AdditionInfo>
                  <AdditionDanger>
                    Плагины формата <mark className="file">.aex</mark> не подходят для
                    устройств на <mark>macOS</mark>, так как такие файлы предназначены для
                    устройств на <mark>Windows</mark>.
                  </AdditionDanger>
                </li> */}
                <li>
                  <p>
                    Если в архиве находится файл <mark className="file">.mogrt</mark>, то
                    такие шаблоны устанавливаются в панели{" "}
                    <mark className="ui">Graphics Templates</mark> с помощью кнопки{" "}
                    <mark className="ui">Install Motion Graphics template</mark>. Либо
                    можно перенести файлы формата <mark className="file">.mogrt</mark>{" "}
                    прямо в окно <mark className="ui">Graphics Templates</mark> с помощью{" "}
                    <mark className="word">Drag-n-Drop</mark>.
                  </p>
                  <ImageFigure
                    caption="Graphics Templates"
                    imgSrc="images/premierepro/install_mogrt.png"
                    imgTitle="Установка mogrt-шаблонов"
                    styleClass="figure_macos-dark"
                  />{" "}
                  <AdditionInfo>
                    <p>
                      <mark className="file">.mogrt</mark> файл по своей сути - архив,
                      внутри которого обычно находятся два-три файла, которые формируют
                      сам анимационный шаблон. Такие шаблоны можно создавать в{" "}
                      <mark className="app">After Effects</mark> и{" "}
                      <mark className="app">Premiere Pro</mark>.
                    </p>
                    <ul>
                      <li>
                        <mark className="file">definition.json</mark> - файл, в котором
                        находятся ссылки, контроллеры и прочая техническая информация
                        шаблона для его корректной работы.
                      </li>
                      <li>
                        <mark className="file">project.aegraphics</mark> - файл, где
                        хранится вся заготовленная анимация. Стандартными средствами{" "}
                        <mark className="app">Premiere Pro</mark> анимацию нельзя
                        отредактировать, но такой проект можно открыть в{" "}
                        <mark className="app">After Effects</mark> и при необходимости
                        внести свои правки там, а затем конвертировать обратно в{" "}
                        <mark className="file">.mogrt</mark>.
                      </li>
                      <li>
                        <mark className="file">thumb.jpg</mark> - статичная обложка для
                        анимационного шаблона для предварительного просмотра в окне{" "}
                        <mark className="ui">Graphics Templates</mark>.
                      </li>
                    </ul>
                  </AdditionInfo>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              {/* TODO: дописать */}
            </div>
          }
          windowsContent={
            <div>
              <ul>
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
                {/* <li>
                  Если в архиве находится файл <mark className="file">.prm</mark> или{" "}
                  <mark className="file">.aex</mark>, то такие плагины обычно
                  распаковываются в общую папку плагинов -{" "}
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
                </li> */}

                <li>
                  <p>
                    Если в архиве находится файл <mark className="file">.mogrt</mark>, то
                    такие шаблоны устанавливаются в панели{" "}
                    <mark className="ui">Graphics Templates</mark> с помощью кнопки{" "}
                    <mark className="ui">Install Motion Graphics template</mark>. Либо
                    можно перенести файлы формата <mark className="file">.mogrt</mark>{" "}
                    прямо в окно <mark className="ui">Graphics Templates</mark> с помощью{" "}
                    <mark className="word">Drag-n-Drop</mark>.
                  </p>
                  <ImageFigure
                    caption="Graphics Templates"
                    imgSrc="images/premierepro/install_mogrt.png"
                    imgTitle="Установка mogrt-шаблонов"
                    styleClass="figure_windows-dark"
                  />
                  <p>
                    Также файлы <mark className="file">.mogrt</mark> можно расположить в
                    стандартную папку локальных шаблонов, которая находится по пути{" "}
                    <mark className="path">
                      %AppData%/Adobe/Common/Motion Graphics Templates/
                    </mark>{" "}
                    и они появятся в окне <mark className="ui">Graphics Templates</mark>.
                  </p>
                  <AdditionInfo>
                    <p>
                      <mark className="file">.mogrt</mark> файл по своей сути - архив,
                      внутри которого обычно находятся два-три файла, которые формируют
                      сам анимационный шаблон. Такие шаблоны можно создавать в{" "}
                      <mark className="app">After Effects</mark> и{" "}
                      <mark className="app">Premiere Pro</mark>.
                    </p>
                    <ul>
                      <li>
                        <mark className="file">definition.json</mark> - файл, в котором
                        находятся ссылки, контроллеры и прочая техническая информация
                        шаблона для его корректной работы.
                      </li>
                      <li>
                        <mark className="file">project.aegraphics</mark> - файл, где
                        хранится вся заготовленная анимация. Стандартными средствами{" "}
                        <mark className="app">Premiere Pro</mark> анимацию нельзя
                        отредактировать, но такой проект можно открыть в{" "}
                        <mark className="app">After Effects</mark> и при необходимости
                        внести свои правки там, а затем конвертировать обратно в{" "}
                        <mark className="file">.mogrt</mark>.
                      </li>
                      <li>
                        <mark className="file">thumb.jpg</mark> - статичная обложка для
                        анимационного шаблона для предварительного просмотра в окне{" "}
                        <mark className="ui">Graphics Templates</mark>.
                      </li>
                    </ul>
                    <p>
                      Часто пользователи, которые пользуются стандартным проводником{" "}
                      <mark>Windows</mark> как основным средством работы с архивами
                      зачем-то заходят внутрь <mark className="file">.mogrt</mark> файла и
                      не могут понять, что с этими файлами делать. Содержимое{" "}
                      <mark className="file">.mogrt</mark> без острой необходимости не
                      нужно открывать. Архив с такими файлами нужно распаковать через{" "}
                      <mark className="app">WinRAR</mark> или{" "}
                      <mark className="app">7-zip</mark>, чтобы их спокойно можно было
                      импортировать в <mark className="app">Premiere Pro</mark>, согласно
                      инструкции выше.
                    </p>
                  </AdditionInfo>
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
                        caption="Premiere Pro"
                        imgSrc="images/premierepro/import_presets.png"
                        imgTitle="Установка пресетов в Premiere Pro"
                        styleClass="figure_windows-dark"
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
                  , а затем используются в окне{" "}
                  <mark className="plugin">Lumetri Color</mark> в вкладке{" "}
                  <mark className="ui">Creative</mark>.
                  <AdditionInfo>
                    <ul>
                      <li>
                        Чтобы открыть окно для цветокоррекции через Lumetri, то перейдите
                        в <mark className="ui">Window</mark> и выберите{" "}
                        <mark className="ui">Lumetri Color</mark>.
                      </li>
                      <li>
                        {/* FIXME: дописать */}
                        Если вы не хотите перемещать данный файл в директорию с различными
                        LUT, то откройте список выбора LUT в{" "}
                        <mark className="app">Premiere Pro</mark> и нажмите на{" "}
                        <mark className="ui">Browse</mark>. В открывшемся окне выберите
                        нужный файл для цветокоррекции.
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
        />
      </DetailsSummary>
      <DetailsSummary
        tag="выключить дефендер, отрубить антивирус, ложное срабатывание, хелпер, ошибка 24, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы, операция не была успешно завершена так как файл содержит вирус или потенциально нежелательную программу, 0x800700E1"
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
          <mark className="app">Symlink</mark> в операционной системе <mark>Windows</mark>
          . Если вы боитесь командной строки, воспользуйтесь различными программами с
          интерфейсом для создания символьных ссылок, например{" "}
          <a href="https://github.com/arnobpl/SymlinkCreator">Symlink Creator</a>.
        </p>
        <AdditionWarning>
          Используйте эту функцию с осторожностью! Стабильная работа программ при
          использовании символьных ссылок не гарантируется.
        </AdditionWarning>
        <YouTubeVideo
          caption="Как сделать символическую ссылку в Windows на файл и папку"
          link="VaupaCuluJA"
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
          мол{" "}
          <mark className="quote">
            чувак, установи Media Encoder, а то ты его не установил
          </mark>
          , хотя эта программа вроде как установлена. Для того, чтобы программы видели
          друг друга - вам нужно соблюсти два условия.
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
          Также в редких случаях при использовании патча <mark>GenP</mark> функция{" "}
          <mark>Dynamic Link</mark> может работать криво. Поэтому попробуйте удалить ваши
          программы Adobe и установить репаки от <mark>KpoJluK</mark> или{" "}
          <mark>m0nkrus</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again">
        <p>
          На вашем устройстве отсутствует программа{" "}
          <mark className="app">Adobe Creative Cloud</mark>. Но не спешите его
          устанавливать, особенно если используете репаки от <mark>KpoJluK</mark> или{" "}
          <mark>m0nkrus</mark>. Если вы пытаетесь установить расширение с помощью{" "}
          <a href="https://zxpinstaller.com/">ZXP Installer от ELEMENTS Storage Media</a>,
          то откажитесь от него в пользу{" "}
          <a href="https://aescripts.com/learn/zxp-installer/">
            ZXP Installer от aescripts
          </a>{" "}
          или ручной распаковки <mark className="file">.zxp</mark> файла в нужное место.
        </p>
        <AdditionInfo>
          Более подробную информацию про установку дополнительных материалов вы можете
          прочитать в <a href="#2.1">пункте 2.1</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="В названиях установщиков плагинов увидел обозначения Adobe, OFX или другое. Так для каких программ предназначены плагины?">
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
            программы от Adobe, например <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Premiere Pro</mark>,{" "}
            <mark className="app">Photoshop</mark> и{" "}
            <mark className="app">Lightroom</mark>.
            <AdditionInfo>
              <ul>
                <li>
                  Иногда плагины с припиской <mark className="word">AE</mark> могут
                  устанавливаться и в <mark className="app">After Effects</mark>, и в{" "}
                  <mark className="app">Premiere Pro</mark>.
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
              Такие плагины не подойдут для <mark className="app">After Effects</mark> и
              для <mark className="app">Premiere Pro</mark>, так как они не поддерживают
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
        tag="вст, аудио плагины, звук, изотоп, izotope, vst3"
        title="Установил VST-плагины, но они не отображаются в Premiere Pro"
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
          caption="Preferences"
          imgSrc="images/premierepro/edit_audio_manage_audio_plugins.png"
          imgTitle="Окно Preferences с открытым разделом Audio"
          styleClass="figure_windows-dark"
        />
        <p>
          Затем в открывшемся окне вы можете начать сканирование плагинов с помощью кнопки{" "}
          <mark className="ui">Scan for Plug-ins</mark>, пересканировать уже существующие
          плагины или добавить новую папку, где хранятся ваши VST-плагины. После
          сканирования плагинов вы сможете ими воспользоваться в{" "}
          <mark className="ui">Track Mixer</mark> или где-нибудь ещё.
        </p>
        <ImageFigure
          caption="Audio Plug-in Manager"
          imgSrc="images/premierepro/audio_plugin_manager.png"
          imgTitle="Менеджер аудио-плагинов"
          styleClass="figure_windows-dark"
        />
      </DetailsSummary>
      <DetailsSummary title='Код ошибки 21 при установке Premiere Pro или "операционная система не соответствует минимальным требованиям для этой программы установки"'>
        <p>
          Вы пытаетесь установить <mark className="app">Premiere Pro 2024</mark> или новее
          на <mark className="app">Windows 10</mark> сборки <mark>21H2</mark> или старее.
          Если у вас стоит редакция <mark>LTSC</mark>, поздравляю - новее сборки, чем{" "}
          <mark>21H2</mark> для вас нет, переустанавливайте систему на редакцию{" "}
          <mark>Home</mark> или <mark>Pro</mark>. Или установите более старые сборки{" "}
          <mark className="app">Premiere Pro</mark>.
        </p>
        <AdditionInfo>
          Текущую сборку <mark>Windows</mark> вы можете посмотреть открыв{" "}
          <mark className="app">winver</mark>.
        </AdditionInfo>
        <p>
          Для решения этой проблемы прочтите{" "}
          <a href="https://helpx.adobe.com/ru/premiere-pro/system-requirements.html">
            системные требования Premiere Pro
          </a>{" "}
          и найдите раздел про минимальную требуемую операционную систему. На момент
          написания этого пункта требуется минимум <mark>Windows 10</mark> версии{" "}
          <mark>22H2</mark> или
          <mark>Windows 11</mark> версии <mark>21H2</mark>. Затем откройте раздел с
          обновлениями <mark>Windows</mark> и обновите систему до максимально возможной
          версии, или установите <mark>22H2</mark> поверх существующей{" "}
          <mark>Windows 10</mark>.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PRInstallProblems;
