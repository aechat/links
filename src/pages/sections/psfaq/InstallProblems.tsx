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

const PSInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/InstallProblems.tsx" />
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <p>
          Обычно установка большинства файлов в <mark className="app">Photoshop</mark>{" "}
          универсальна, поэтому следуйте рекомендациям ниже.
        </p>
        <ul>
          <li>
            Если в архиве находится файл <mark className="file">.atn</mark>, то для
            установки вам нужно открыть окно <mark className="ui">Actions</mark> с помощью
            комбинации клавиш <mark className="key">Alt + F9</mark>, нажать на три полоски
            в углу открывшегося окна и выбрать пункт{" "}
            <mark className="ui">Load Actions</mark>. Далее вам предложат выбрать нужный
            файл. После выбора файла действий оно у вас отобразится в окне{" "}
            <mark className="ui">Actions</mark> и вы сможете применять их в своих
            проектах.
          </li>
          <li>
            Если в архиве находится файл формата <mark className="ui">.ccx</mark>, то вам
            нужно переименовать этот файл в <mark className="ui">.zip</mark> и распаковать
            его. Папку с распакованным содержимым вам нужно переместить в{" "}
            <mark className="path">
              C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
            </mark>
            .
          </li>
        </ul>
        <p>{/* FIXME: написать!! */}</p>
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
          <a href="https://t.me/s/designworld">Design World</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> - вы
          принимаете на себя все риски и берёте ответственность за использование
          нелегальных материалов. Мы не можем принимать вбросы по типу{" "}
          <mark className="quote">
            ой в складе, саду или дизайн ворлде одни вирусы водятся
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
      <DetailsSummary title="Зачем мне советуют не менять расположение Photoshop при установке? А если у меня нет места на жёстком диске?">
        <p>{/* FIXME: написать*/}</p>
      </DetailsSummary>
      <DetailsSummary title="Установил плагин с помощью установщика, а я его не вижу в Photoshop">
        <p>{/* FIXME: написать*/}</p>
      </DetailsSummary>
      <DetailsSummary title='Код ошибки 21 при установке Photoshop или "операционная система не соответствует минимальным требованиям для этой программы установки"'>
        <p>
          Вы пытаетесь установить <mark className="app">Photoshop 2024</mark> или новее на
          Windows 10 сборки <mark>21H2</mark> или старее. Если у вас стоит редакция{" "}
          <mark>LTSC</mark>, поздравляю - новее сборки, чем <mark>21H2</mark> для вас нет,
          переустанавливайте систему на редакцию Home или Pro. Или установите более старые
          сборки <mark className="app">Photosohp</mark>.
        </p>
        <AdditionInfo>
          Текущую сборку Windows вы можете посмотреть открыв{" "}
          <mark className="app">winver</mark>.
        </AdditionInfo>
        <p>
          Для решения этой проблемы прочтите{" "}
          <a href="https://helpx.adobe.com/ru/photoshop/system-requirements.html">
            системные требования Photoshop
          </a>{" "}
          и найдите раздел про минимальную требуемую операционную систему. На момент
          написания этого пункта требуется минимум Windows 10 <mark>22H2</mark> или
          Windows 11 <mark>21H2</mark>. Затем откройте раздел с обновлениями Windows и
          обновите систему до максимально возможной версии, или установите{" "}
          <mark>22H2</mark> поверх существующей Windows 10.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PSInstallProblems;
