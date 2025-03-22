import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import {VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {Divider} from "antd";

const AETips: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Tips.tsx" />
      <DetailsSummary
        title="Как мне сделать историю изменений файлов и откатываться до предыдущих версий проекта в случае необходимости?"
        tag="бекап, резервное копирование, возврат, вернуть, восстановить, облачное хранилище, облако, яндекс диск, журнал файлов"
      >
        <p>
          Вы, наверное, не раз натыкались на случаи, когда сделали какую-то правку, а
          клиенту это не понравилось и нужно откатиться на раннюю версию проекта. Или{" "}
          <mark className="file">.aep</mark> файл внезапно сломался и не открывается, прям
          как назло.
        </p>
        <p>
          Если вы бы настроили функцию резервного копирования файлов заранее перед началом
          создания и редактирования ваших проектов - ваши нервы были бы целее, а мозг бы
          убедился в том, что бэкапы - штука полезная и не нужно про них забывать.
        </p>
        <p>
          Начнём по порядку: обсудим сохранение резервных копий в облачных хранилищах. В
          популярных облачных хранилищах имеется функция восстановления файлов при их
          изменении на сервере и сервис позволяет сохранить старую копию файла на ваше
          устройство. Ниже приведены ссылки на документацию по использованию этой функции
          в некоторых популярных сервисах облачного хранилища.
        </p>
        <AdditionWarning>
          У каждого сервиса свой срок хранения истории файлов, уточняйте это в вашем
          тарифном плане.
        </AdditionWarning>
        <div className="flexible-links">
          <a href="https://yandex.ru/support/yandex-360/customers/disk/desktop/windows/ru/version-control">
            История изменения файла в Яндекс.Диск
          </a>
          <a href="https://support.google.com/drive/answer/2409045?hl=ru&co=GENIE.Platform%3DDesktop">
            Журнал файлов в Google Drive
          </a>
          <a href="https://help.dropbox.com/ru-ru/delete-restore/version-history-overview">
            Журнал версий файлов в Dropbox
          </a>
          <a href="https://help.mega.io/ru/files-folders/restore-delete/file-version-history">
            Как управлять версиями файлов в Mega?
          </a>
          <a href="https://support.microsoft.com/ru-ru/office/%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D1%8B%D0%B4%D1%83%D1%89%D0%B5%D0%B9-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D1%85%D1%80%D0%B0%D0%BD%D1%8F%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%B2-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893">
            Восстановление предыдущей версии файла в OneDrive
          </a>
        </div>
        <AdditionInfo>
          Если вы используете другое облачное хранилище - найдите информацию об истории
          файлов в вашем сервисе самостоятельно в сети Интернет.
        </AdditionInfo>
        <p>
          В Windows и macOS есть функция локального резервного копирования файлов, которую
          необходимо включить. Обычно для работы этой функции нужен внешний накопитель.
        </p>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                В Windows функция бэкапа файлов называется &quot;История файлов&quot;,
                которая создаёт копии файлов на другую директорию.
              </p>
              <AdditionInfo>
                Для работы данной функции заранее укажите диск, на который вы планируете
                сохранять копии файлов в разделе <mark className="ui">Смена диска</mark>.
              </AdditionInfo>
              <YouTubeVideo
                link="IIgxtSnURoA"
                caption="История файлов в Windows 10"
              />
              <p>
                В настройках этой функции можно установить интервал сохранения от 10 минут
                до одного раза в день. Также можно задать срок хранения от одного месяца
                до двух лет, по истечении которого система автоматически удалит старые
                резервные копии из указанной директории.
              </p>
              <AdditionInfo>
                По умолчанию функция &quot;История файлов&quot; копирует только из
                стандартных папок <mark className="path">Библиотеки</mark>,{" "}
                <mark className="path">Рабочий стол</mark>,{" "}
                <mark className="path">Контакты</mark> и{" "}
                <mark className="path">Избранное</mark>. Если вам нужно установить свои
                папки, откуда нужно копировать файлы - зайдите в параметры и перейдите в
                нужный раздел:
                <ul>
                  <li>
                    На Windows 11 - откройте проводник, выберите нужную папку и нажмите на{" "}
                    <mark className="key">ПКМ</mark>. Затем в контекстном меню нажмите на{" "}
                    <mark className="ui">Добавить в библиотеку</mark>. Вы можете выбрать
                    уже существующую библиотеку или создать новую.
                    <AdditionWarning>
                      Если у вас нет пункта{" "}
                      <mark className="ui">Добавить в библиотеку</mark> в контекстном меню
                      - включите их отображение в параметрах папок.{" "}
                      <a href="https://remontka.pro/manage-libraries-windows/">
                        Подробнее...
                      </a>
                    </AdditionWarning>
                  </li>
                </ul>
              </AdditionInfo>
            </div>
          }
          macContent={
            <div>
              <p>
                В macOS функция бэкапа файлов называется{" "}
                <mark className="app">Time Machine</mark>, которая создаёт снапшот вашей
                системы и файлов каждый час или по нажатию кнопки создания бэкапа.
              </p>
              <AdditionWarning>
                Для работы данной функции нужен внешний накопитель, желательно с объёмом
                от 512 Гб и более.
              </AdditionWarning>
              <YouTubeVideo
                link="Gx76i28c150"
                caption="How to Set up & Use Time Machine to Backup your Mac"
              />
            </div>
          }
        />
        <p>
          Самый крайний способ для контроля версий ваших файлов, если у вас нет желания
          работать с облачными хранилищами или если у вас отсутствует внешний жёсткий диск
          - это работа с <mark className="app">Git</mark>. Для новичков этот инструмент
          будет сложновато использовать, но я не могу о нём не рассказать.
        </p>
        <p>
          <mark className="app">Git</mark> - это консольная утилита для контроля версий
          ваших файлов, можно отслеживать изменения и фиксировать их, а затем при
          необходимости откатываться. Доступен для многих операционных систем, в том числе{" "}
          <a href="https://git-scm.com/downloads/win">Windows</a> и{" "}
          <a href="https://git-scm.com/downloads/mac">macOS</a>. Изначально этот
          инструмент был создан для работы с версиями текстовых файлов, но можно работать
          и с версиями изображений, видео, файлов проекта и прочими файлами. Если вам не
          нравится консольная версия <mark className="app">Git</mark> - можно
          воспользоваться <mark className="app">GitHub Desktop</mark>,{" "}
          <mark className="app">SourceTree</mark> или{" "}
          <mark className="app">SourceGit</mark>.
        </p>
        <AdditionInfo>
          Если вы хотите быстро сохранить проект под другим названием - используйте
          комбинацию клавиш <mark className="key">Ctrl + Alt + Shift + S</mark>. Данная
          комбинация сохранит проект с тем же названием и добавит число в конце по
          иерархии. Если вы 25 раз выполните эту комбинацию клавиш, то у вас создадутся 25
          файлов с разными числами по возрастанию в папке, где был изначально создан
          проект.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        title="Какие плагины мне стоит поставить в первую очередь для программы?"
        tag="рекомендация, топ, твикстор, рсмб, мбл, борисфх, трапкод, флоу, тру комп дупликатор, юниверс, mbl"
      >
        <AdditionWarning>
          Сразу хочу{" "}
          <b>
            <u>предупредить</u>
          </b>
          : пожалуйста, не надо скачивать и устанавливать в программу все плагины мира
          подряд. Для начала разберитесь с тем, что вам действительно нужно.
        </AdditionWarning>
        <p>
          Плагины - вещь действительно интересная и полезная, особенно когда оно ускоряет
          работу за счёт автоматизации рутинных задач. Вот мой личный список плагинов,
          которые я ставлю при каждой установке.
        </p>
        <Divider>Для совместимости с чужими проектами</Divider>
        <ul>
          <li>
            <mark className="plugin">Boris FX Sapphire</mark> и{" "}
            <mark className="plugin">Boris FX Continuum</mark> - база из всех баз.
            Особенно популярен у <del>мамкиных</del> эдиторов, они без него жить не могут.
          </li>
          <li>
            <mark className="plugin">Boris FX Mocha Pro</mark> - расширенная версия
            стандартного плагина <mark className="plugin">Mocha AE</mark>.
          </li>
          <li>
            Плагины от Red Giant: <mark className="plugin">Magic Bullet Suite</mark>,{" "}
            <mark className="plugin">Trapcode Suite</mark>,{" "}
            <mark className="plugin">VFX Suite</mark> и{" "}
            <mark className="plugin">Universe</mark> - сборник плагинов для цветокора,
            частиц и различных эффектов. Особенно хорош{" "}
            <mark className="plugin">Primatte Keyer</mark> и{" "}
            <mark className="plugin">Supercomp</mark> для решения повседневных задач по
            композингу.
          </li>
          <li>
            <mark className="plugin">Element 3D от VideoCopilot</mark> - даже после выхода
            Advanced 3D - этот плагин не теряет актуальности в плане импорта 3D-моделей в
            вашу композицию.
          </li>
          <li>
            <mark className="plugin">Deep Glow</mark> - даёт хорошее свечение, но неплохо
            замедляет скорость экспорта. Если производительность проекта вам очень важна -
            замените его на более простые решения.
          </li>
          <li>
            <mark className="plugin">Twixtor</mark> и <mark className="plugin">RSMB</mark>{" "}
            - плагины для плавного замедления и интерполяции соседних кадров.
          </li>
          <li>
            <mark className="plugin">Crates Light Wrap</mark> - создаёт контурный свет для
            объекта за счёт размытия указанного фонового слоя в параметрах плагина.
          </li>
        </ul>
        <Divider>Полезные инструменты</Divider>
        <ul>
          <li>
            <mark className="plugin">FXConsole от VideoCopilot</mark> - всплывающая
            панелька для быстрого поиска и применения эффектов и пресетов.
          </li>
          <li>
            <mark className="plugin">Flow</mark> - расширение для быстрого применения
            интерполяции ключей. Если создать свои пресеты, которыми часто пользуешься в
            анимации - ускоришь свою рутинную работу в несколько раз.
          </li>
          <li>
            <mark className="plugin">Motion Tools Pro</mark> - набор инструментов для
            анимации. Полностью настраиваемый.
          </li>
          <li>
            <mark className="plugin">kBar</mark> - полностью настраиваемая панель для
            прикрепления различных действий на кнопки, например: применение готовых
            выражений, применение пресетов и эффектов, открытие различных меню в программе
            и многое другое.
          </li>
          <li>
            <mark className="plugin">Keystone</mark> - инструмент для манипуляций над
            ключевыми кадрами и слоями на таймлайне: растягивание, смещение, выравнивание
            и много чего другого.
          </li>
          <li>
            <mark className="plugin">Newton</mark> - плагин для создания физического
            поведения 2D-объектов.
          </li>
          <li>
            <mark className="plugin">True Comp Duplicator</mark> - скрипт для дублирования
            композиций с нужными параметрами.
          </li>
          <li>
            <mark className="plugin">rd_compsetter</mark> - скрипт для одновременного
            изменения параметров нескольких композиций.
          </li>
          <li>
            <mark className="plugin">Workflower</mark> - плагин для организации слоёв на
            таймлайне, позволяет делать папки со слоями без прекомпоза.
            <AdditionDanger>
              Не рекомендуется передавать проект с использованием этого плагина другим
              лицам, у которых не установлен этот плагин. Иначе столкнётесь с неожиданными
              результатами.
            </AdditionDanger>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        title="Хочу обновиться с одного года программы на другой. Как мне перенести плагины без танцев с бубнами?"
        tag="обновление, перенос плагинов, новая версия"
      >
        <AdditionDanger>
          Данный способ обновления не гарантирует 100% стабильность работы новой версии
          программы, поэтому обновляйтесь таким способом на свой страх и риск. Если после
          такого способа обновления вы столкнулись с трудностями в работе - переустановите
          программу начисто, предварительно удалив предыдущие версии с помощью{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>{" "}
          или любой другой программы по удалению программ, например{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </AdditionDanger>
        <p>
          Прежде чем обновить программу без потери плагинов - вам нужно переименовать
          папку установленной программы в{" "}
          <mark className="path">C:\Program Files\Adobe</mark>. Для этого дублируем
          исходную папку с программой, убираем приставку <mark>- копия</mark> и меняем
          номер года на нужный.
        </p>
        <AdditionInfo>
          Если вы обновляетесь, например, с 2022 на 2025 - вы должны переименовать новую
          дублированную папку в <mark className="file">Adobe After Effects 2025</mark>.
        </AdditionInfo>
        <p>
          После успешного переименования папки - откройте установщик новой версии
          программы. Она должна увидеть продублированную папку и предложить установить в
          неё. Далее выбираем нужный язык программы и нажимаем на{" "}
          <mark className="ui">Продолжить</mark>. После установки новая версия программы
          предложит вам перенести настройки со старой версии, с чем мы и соглашаемся.
          После успешного запуска программы проверьте - всё ли на месте и продолжайте
          работу как ни в чём не бывало.
        </p>
        <AdditionInfo>
          Если вы обновляетесь между версиями &quot;одного года&quot;, например из{" "}
          <mark>24.1</mark> в <mark>24.6</mark>, то действия выше проделывать не нужно.
          При запуске новой версии, в данном случае <mark>24.6</mark>, вам предложат
          перенести настройки пользователя. Плагины, скрипты и пресеты в таком случае
          останутся в новой версии.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        title="Как сократить время повторного экспорта, если заказчик попросил внести небольшие правки?"
        tag="прокси, proxy composition, ускорение времени рендера, уменьшение перепросчёта, пререндер, prerender"
      >
        <p>
          В <mark className="app">After Effects</mark> можно создавать прокси для нужных
          композиций, чтобы не пересчитывать сложные композиции заново, если вы не
          планируете их дальше редактировать. Это бывает очень полезно, если из-за сложных
          композиций вы сталкиваетесь с трудностями при экспорте или медленным рендером.
        </p>
        <p>
          Для создания прокси нужно перейти в окно <mark className="ui">Project</mark>,
          выбрать композицию с которым вы испытываете проблемы, нажать{" "}
          <mark className="key">ПКМ</mark> и выбрать{" "}
          <mark className="ui">Create Proxy &gt; Movie</mark>. После нажатия вас отправят
          в очередь экспорта. Далее в нём нужно открыть пункт{" "}
          <mark className="ui">Render Settings &gt; Custom</mark> и поставить везде
          наивысшие настройки (или выбрать пресет{" "}
          <mark className="ui">Best Settings</mark>), чтобы после создания прокси ничего
          не пропало и не ухудшилось. Если прокси автоматически не установилось для
          композиции - сделайте это вручную через{" "}
          <mark className="ui">Set Proxy &gt; File</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/create_comp_proxy.mp4"
          caption="Создание прокси для композиций"
        />
        <AdditionInfo>
          Для создания прокси лучше указать формат QuickTime в кодеке{" "}
          <mark className="video">Apple Prores 422</mark> или{" "}
          <mark className="video">Apple Prores 4444</mark>, если композиция содержит
          альфа-канал.
        </AdditionInfo>
        <p>
          В финальном экспорте не забудьте указать{" "}
          <mark className="ui">Use All Proxies</mark> в{" "}
          <mark className="ui">Render Settings</mark>. После этого попробуйте
          экспортировать композицию заново с использованием прокси.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/use_all_proxies.mp4"
          caption="Настройка использования прокси в финальном рендере"
        />
      </DetailsSummary>
      <DetailsSummary title="Какой компьютер или ноутбук стоит взять для работы в After Effects?">
        <AdditionInfo>
          Приведённая ниже информация несёт лишь рекомендательный характер по выбору и не
          призывает брать какое-либо устройство. Конечный выбор нового устройства остаётся
          за читателем, проконсультируйтесь с специалистами в технических чатах, которые
          вы можете найти на главной странице сайта.
        </AdditionInfo>
        <p>
          Для начала определитесь, какая операционная система вам лучше подходит, для
          каких целей вы собираетесь брать устройство и на какой бюджет.
        </p>
        <Divider>Если вы хотите устройство на Windows</Divider>
        <ul>
          <li>
            Если у вас относительно небольшой бюджет до 500-1000$ и вы не часто
            путешествуете вне вашего места проживания - вам хватит стационарного
            компьютера, можно даже взять <mark>б/у</mark>. Собирать стационарный компьютер
            желательно на связке <mark>процессор Intel и видеокарта NVIDIA</mark> или{" "}
            <mark>процессор AMD и видеокарта NVIDIA</mark>. Для комфортного минимума
            хватит процессора <mark>i5-12400</mark>, <mark>i7-7700</mark> или{" "}
            <mark>R5 3600</mark>, <mark>R7 5800</mark>. В качестве видеокарты для
            комфортного минимума в работе с 3D-софтом, по типу{" "}
            <mark className="app">Blender</mark> хватит любой видеокарты от NVIDIA от 6-8
            Гб VRAM, например модели <mark>GTX 1660</mark> или <mark>RTX 3060/12</mark>.
            <AdditionWarning>
              <ul>
                <li>
                  Процессоры от Intel лучше подходят для работы с видеоисходниками за счёт{" "}
                  <a href="https://www.pugetsystems.com/labs/articles/what-h-264-and-h-265-hardware-decoding-is-supported-in-premiere-pro-2120/">
                    встроенного видеочипа, который декодирует различные видеокодеки
                  </a>
                  , но AMD тоже хороши за счёт своей производительности по ядрам, если
                  создаёте композиции с нуля.
                </li>
                <li>
                  Ни в коем случае не стоит брать процессор от Intel без видеочипа, то
                  есть с суффиксом <mark>F</mark> в конце наименования.
                </li>
                <li>
                  Видеокарты от AMD не очень хорошо подходят под серьёзную работу в
                  монтаже и 3D-редакторах из-за отсутствия ядер <mark>CUDA</mark>, лучше
                  посмотрите в сторону NVIDIA.
                </li>
              </ul>
            </AdditionWarning>
          </li>
          <li>
            Если вам нужна мобильность, часто путешествуете вне вашего места проживания
            или нет стационарного компьютера, то на ноутбук придётся немного больше
            раскошелиться, ведь оно будет единственной вашей рабочей машиной. А
            соответственно вам нужен комфорт при работе. В таком случае рассмотрите
            линейку ноутбуков <mark className="copy">ASUS Vivobook Pro</mark>,{" "}
            <mark className="copy">ASUS Zenbook</mark>,{" "}
            <mark className="copy">Lenovo Legion</mark>,{" "}
            <mark className="copy">HUAWEI MateBook X Pro</mark> или{" "}
            <mark className="copy">MSI CreatorPro</mark>.
          </li>
          <li>
            Если у вас уже дома есть стационарный мощный компьютер и вы хотите брать
            ноутбук для редактирования небольших правок или быстрой сборки проекта на
            начальном этапе, пока вы находитесь вне дома: рассмотрите варианты{" "}
            <mark className="copy">ASUS Vivobook 16X</mark> на процессорах минимум{" "}
            <mark>AMD Ryzen 7 серии</mark> или <mark>Intel Core i7</mark> без дискретной
            видеокарты, <mark className="copy">Lenovo IdeaPad Gaming 3</mark> на
            дискретной <mark>RTX 3050</mark> или <mark className="copy">MSI Katana</mark>{" "}
            на <mark>Intel Core i7</mark>.
            <AdditionInfo>
              Смотреть на ноутбуки с дискретной видеокартой от NVIDIA, по типу{" "}
              <mark>RTX 4050</mark> или <mark>RTX 3050</mark> нужно с осторожностью.
              Иногда бюджетные ноутбуки с дискретной видеокартой слабенькие по
              процессорной части, а также могут быть урезаны по теплопакету, то есть
              выдавать меньше мощности, чем заявлено. Поэтому иногда проще взять ноутбук с
              более мощным процессором на встроенном видеочипе.
              <br />
              <br />
              Вы же помните, что <mark className="app">After Effects</mark> редко
              использует видеокарту?
            </AdditionInfo>
          </li>
        </ul>
        <Divider>Если вы хотите устройство на macOS</Divider>
        <ul>
          <li>
            Если вы хотите взять первый ноутбук от Apple или переехать с MacBook на
            процессорах Intel, то рассмотрите в сторону MacBook Air или Pro на процессоре{" "}
            <mark>Apple Silicon M1</mark> с минимум 16 Гб оперативной памяти. Работа с 8
            Гб ОЗУ будет тяжеловата, даже несмотря на то, что macOS распределяет
            оперативную память по своему через <mark>Unified Memory</mark>.
          </li>
          <li>
            Если вы не часто путешествуете или ноутбуки оказались для вас дорогими:
            рассмотрите Mac Mini на процессоре <mark>Apple M4</mark>. Также советуем брать
            комплектацию с минимум 16 Гб ОЗУ.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="Какая версия After Effects наиболее стабильная, наименее лагучая и какую мне лучше всего поставить?">
        <AdditionInfo>
          Перед установкой <mark className="app">After Effects</mark> обратите внимание на{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            рекомендуемые системные требования к программе
          </a>
          !
        </AdditionInfo>
        <p>
          Этот холивар будет вечным. Мнение по поводу{" "}
          <mark className="word">стабильности</mark> и{" "}
          <mark className="word">лагучести</mark> у всех разное на этот счёт, как и
          железо, на котором пользователи работают. Соответственно отзывы у разных
          пользователей кардинально отличаются и сложно из таких сообщений сделать
          правильный вывод. Выбор версии для работы может зависеть от многих факторов и
          области использования.
        </p>
        <AdditionInfo>
          Если вы задаёте себе вопрос{" "}
          <mark className="quote">а версию ае какую лучше скачать под мой пк</mark>, то
          вам не стоит надеяться на то, что существует какая-то чудо-версия{" "}
          <mark className="app">After Effects</mark>, которая якобы будет быстро работать
          на вашем железе. Выбор версии программы слабо влияет на общую
          производительность. Также устанавливая слишком старый софт, вы лишаете себя
          новых функций и возможного улучшения пользовательского опыта, при этом получив
          малый профит.
        </AdditionInfo>
        <p>
          <b>
            <u>Ни одна версия</u>
          </b>{" "}
          <mark className="app">After Effects</mark>{" "}
          <b>
            <u>не может считаться эталонным</u>
          </b>
          , поэтому рекомендации на момент написания этого пункта следующие.
        </p>
        <Divider>Рекомендации по выбору версии</Divider>
        <ul>
          <li>
            Если вы не часто работаете в программе, любите новые функции и стабильность
            для вас не в приоритете, то вы можете установить последнюю версию{" "}
            <mark className="app">After Effects</mark> на момент чтения этого пункта.
          </li>
          <li>
            Если вам нужна более откатанная и стабильная, а также относительно современная
            версия программы - установите версию <mark>23.6</mark> (2023),{" "}
            <mark>24.1</mark> (2024) или <mark>24.6</mark> (2024). От пользователей,
            сидящих на этих версиях, мы слышали меньше всего жалоб на возможные приколы
            работы программы.
          </li>
          <li>
            Если процессор у вашего устройства не поддерживает инструкции{" "}
            <mark>AVX2</mark>, то вы можете установить максимум версию <mark>23.6</mark>{" "}
            (2023).
            <AdditionWarning>
              Если вы попытаетесь обойти требования по установке и запустите программу
              версии <mark>2024</mark> или новее на{" "}
              <a href="https://www.youtube.com/watch?v=1IAwkEdRZZw">
                неподдерживаемом процессоре
              </a>
              , то скорее всего вы нарвётесь на ошибку{" "}
              <mark className="code">0xc0000142</mark> при запуске. Обойти это нельзя,
              придётся раскошелиться на новый процессор с поддержкой инструкций{" "}
              <mark>AVX2</mark>.
            </AdditionWarning>
          </li>
          <li>
            Если вы используете устройство на <mark>Windows 7</mark> или{" "}
            <mark>Windows 8.1</mark> - установите версию <mark>16.1</mark> (2019) или{" "}
            <mark>15.1</mark> (2018). Более свежую версию программы вы не сможете
            установить из-за окончания официальной поддержки этих операционных систем
            компанией Adobe.
            <AdditionWarning>
              <ul>
                <li>
                  Если вы попытаетесь обойти требования по установке или запустить
                  программу на старой операционной системе, то вероятность запустить
                  программу крайне мала, ибо вы нарветесь на различные ошибки при запуске.
                </li>
                <li>
                  Если у вас программа более свежей версии всё же запустилась на
                  неподдерживаемой ОС, то стабильная работа программы{" "}
                  <b>
                    <u>НЕ ГАРАНТИРУЕТСЯ!</u>
                  </b>
                </li>
              </ul>
            </AdditionWarning>
          </li>
        </ul>
        <p>
          Список обновлений и исправлений в версиях{" "}
          <mark className="app">After Effects</mark> вы всегда можете посмотреть на
          официальном сайте Adobe.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/after-effects/using/whats-new.html">
            Что нового в After Effects последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки в After Effects
          </a>
        </div>
        <AdditionInfo>
          <b>
            <u>
              Пожалуйста, не забывайте своевременно обновлять сторонние плагины и
              поддерживать вашу операционную систему в хорошем состоянии!
            </u>
          </b>{" "}
          Из-за того что существуют пользователи, которые сидят на устаревших версиях
          сторонних плагинов, например <mark className="plugin">Boris FX Sapphire</mark>,
          на новых версиях <mark className="app">After Effects</mark>, бытуют ложные слухи
          о том что{" "}
          <mark className="quote">
            ой, версия афтыра XX.X очень логучая и вылитает на маих эдитах!!1!
          </mark>{" "}
          и вводят остальных пользователей в заблуждение.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Для чего нужен файл подкачки в Windows и почему его не стоит отключать?">
        <p>
          <mark className="word">Файл подкачки</mark> или же{" "}
          <mark className="file">pagefile.sys</mark> - это специальный файл, который
          служит виртуальным расширением оперативной памяти устройства. Когда системе не
          хватает физической оперативной памяти при выполнении ресурсоёмких задач, она
          начинает использовать файл подкачки для временного хранения данных. По
          умолчанию, если <mark className="file">pagefile.sys</mark> не отключен в вашей
          сборке <mark>Windows</mark>, система автоматически управляет размером файла
          подкачки, однако часто делает это не очень эффективно - поэтому рекомендуем
          настроить его параметры вручную.
        </p>
        <p>
          При отключении файла подкачки в программе{" "}
          <mark className="app">After Effects</mark> могут возникнуть различные ошибки,
          такие как{" "}
          <mark className="ui">
            After Effects has unexpectedly run out of memory and cannot complete this
            export
          </mark>
          , <mark className="ui">Out of Memory</mark> или{" "}
          <mark className="ui">
            Low memory warning. RAM use has been extended for previews
          </mark>
          . Кроме того, при нехватке оперативной памяти и отсутствии файла подкачки
          возможны вылеты приложений, появление сообщения об ошибке{" "}
          <mark className="ui">В системе недостаточно памяти</mark> или даже чёрный экран,
          который лечится перезагрузой компьютера.
        </p>
        <p>
          Чтобы настроить размер файла подкачки в вашей системе или включить его -
          следуйте инструкции ниже в зависимости от операционной системы.
        </p>
        <Divider>Инструкция для Windows 10 и 11</Divider>
        <ul>
          <li>
            Откройте окно <mark className="app">Выполнить</mark> с помощью комбинации
            клавиш <mark className="key">Win + R</mark>.
          </li>
          <li>
            Введите в поле <mark className="ui">Открыть</mark> команду{" "}
            <mark className="code">SystemPropertiesAdvanced.exe</mark> и нажмите на{" "}
            <mark className="key">Enter</mark>{" "}
            <b>
              <u>два</u>
            </b>{" "}
            раза. Таким образом вы откроете окно{" "}
            <mark className="ui">Свойства системы</mark> и сразу перейдете в{" "}
            <mark className="ui">Параметры быстродействия</mark>.
          </li>
          <li>
            В окне <mark className="ui">Параметры быстродействия</mark> выберите вкладку{" "}
            <mark className="ui">Дополнительно</mark>.
          </li>
          <li>
            В вкладке <mark className="ui">Дополнительно</mark> нажмите на{" "}
            <mark className="ui">Изменить</mark> в разделе{" "}
            <mark className="ui">Виртуальная память</mark>.
          </li>
          <li>
            Если у вас стоит чекбокс возле пункта{" "}
            <mark className="ui">Автоматически выбирать объем файла подкачки</mark> -
            уберите его.
          </li>
          <li>
            Выберите раздел, на котором у вас стоит система. Если у раздела стоит пункт{" "}
            <mark className="ui">Без файла подкачки</mark> или{" "}
            <mark className="ui">Размер по выбору системы</mark> - измените на{" "}
            <mark className="ui">Указать размер</mark>.
            <AdditionInfo>
              Для файла подкачки нужно выбрать раздел с самым производительным диском,
              установленный на вашем устройстве. Установка файла подкачки на раздел с
              медленным диском может ухудшить пользовательский опыт работы с{" "}
              <mark className="app">After Effects</mark> и <mark>Windows</mark> в целом.
            </AdditionInfo>
          </li>
          <li>
            Укажите исходный (минимальный) и максимальный размер файла подкачки. После
            ввода значений - не забудьте нажать на <mark className="ui">Задать</mark> для
            сохранения значений, а затем нажмите на <mark className="ui">ОК</mark> внизу
            окна.
            <AdditionInfo>
              <ul>
                <li>
                  Минимальный размер файла подкачки вы можете установить от{" "}
                  <mark>2048</mark> до любого значения.
                </li>
                <li>
                  Максимальный размер файла подкачки лучше поставить по следующей формуле:{" "}
                  <mark>
                    текущий объем оперативной памяти вашего устройства, умноженное на 2
                    или на 3
                  </mark>
                  . Если вы не можете определиться с окончательным размером, установите
                  значение <mark className="copy">65536</mark> или{" "}
                  <mark className="copy">131072</mark>. Убедитесь в том, что вы сможете
                  поддерживать свободное пространство на выбранном разделе для файла
                  подкачки!
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            <b>
              <u>Перезагрузите</u>
            </b>{" "}
            ваше устройство. Теперь у вас активирован файл подкачки в соответствии с
            заданными настройками.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        title="Как я могу создать свой пресет с своими эффектами на слое и передать другому человеку?"
        tag="presets, ffx, пресеты"
      >
        <p>
          <mark className="word">Пресеты</mark> - это набор эффектов с заданными
          пользователем настройками, которые можно сохранить, поделиться с другими
          пользователями и применять их в своих проектах.
        </p>
        <p>
          Чтобы создать пресет из нужных эффектов, примените их на какой-нибудь слой, а
          затем выделите применённые эффекты в окне{" "}
          <mark className="ui">Effects Control</mark>. Затем откройте{" "}
          <mark className="ui">Effects & Presets</mark> рядом с окном{" "}
          <mark className="ui">Effects Control</mark> и в его заголовке окна нажмите на
          три полоски. В контекстном меню выберите{" "}
          <mark className="ui">Save Animation Preset</mark> и в новом окне укажите нужный
          путь и название для сохранения пресета.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/save_animation_preset.mp4"
          caption="Создание пресета"
        />
        <p>
          Теперь, когда у вас есть сохранённый пресет, им можно поделиться с другими
          пользователями. Получатель может спокойно установить пресеты, следуя{" "}
          <a href="#2.1">инструкции по установке</a>, а затем применять их в программе из
          папки <mark className="path">Animation Presets</mark> из окна{" "}
          <mark className="ui">Effects & Presets</mark> или с помощью{" "}
          <mark className="plugin">FX Console</mark>.
        </p>
        <AdditionWarning>
          Прежде чем делиться какими-либо пресетами - уточните для получателя, для какой
          версии <mark className="app">After Effects</mark> они предназначены, для какого
          разрешения проекта или соотношения сторон и, при необходимости, укажите, какие
          сторонние плагины и их версии должны быть установлены для корректной работы
          ваших пресетов.
        </AdditionWarning>
      </DetailsSummary>
    </div>
  );
};
export default AETips;
