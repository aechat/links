import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {YouTubeVideo} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/ContentFilter";
import {Divider} from "antd";

const PRTips: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Tips.tsx" />
      <DetailsSummary title="Как мне сделать историю изменений файлов и в случае чего - откатываться до предыдущих версий проекта?">
        <p>
          Вы, наверное, не раз натыкались на случаи, когда сделали какую-то правку, а
          клиенту это не понравилось и нужно откатиться на раннюю версию проекта. Или{" "}
          <mark className="file">.prproj</mark> файл внезапно сломался и не открывается,
          прям как назло.
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
                caption="How to Set up & Use Time Machine to Backup your Mac"
                link="Gx76i28c150"
              />
            </div>
          }
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
                caption="История файлов в Windows 10"
                link="IIgxtSnURoA"
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
          <mark className="ui">SourceTree</mark> или{" "}
          <mark className="app">SourceGit</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="рекомендация, топ, борисфх, твикстор, рсмб, юниверс, мбл, mbl"
        title="Какие плагины и инструменты мне стоит поставить в первую очередь для программы?"
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
          Сторонние плагины и расширения в какой-то степени могут ускорить и
          автоматизировать вашу рутинную работу с кадрами и шотами. Ниже приведу список
          популярных плагинов.
        </p>
        <Divider>Для совместимости с чужими проектами</Divider>
        <ul>
          <li>
            <mark className="plugin">Boris FX Sapphire</mark> и{" "}
            <mark className="plugin">Boris FX Continuum</mark> - сборники эффектов и
            различных переходов.
          </li>
          <li>
            <mark className="plugin">Magic Bullet Suite</mark>,{" "}
            <mark className="plugin">VFX Suite</mark> и{" "}
            <mark className="plugin">Universe</mark> - ещё один сборник различных эффектов
            и переходов.
          </li>
          <li>
            <mark className="plugin">Boris FX Mocha Pro</mark> - плагин для планарного
            трекинга различных объектов.
          </li>
          <li>
            <mark className="plugin">Film Impact Premium Transitions</mark> и{" "}
            <mark className="plugin">Film Impact Premium Effects</mark> - сборник
            различных эффектов и переходов.
          </li>
          <li>
            <mark className="plugin">FXHome Ignite Pro</mark> - плагин для добавления
            визуальных эффектов и переходов.
          </li>
          <li>
            <mark className="plugin">Twixtor</mark> и <mark className="plugin">RSMB</mark>{" "}
            - плагины для плавного замедления клипа и добавления размытия в движении.
          </li>
        </ul>
        <Divider>Полезные инструменты</Divider>
        <li>
          <mark className="plugin">Excalibur</mark> - панель для быстрого применения
          различных переходов, эффектов и выполнения различных действий. Вызывается по
          умолчанию через комбинацию клавиш <mark className="key">Alt + Space</mark>, но
          можно переназначить на другую комбинацию в настройках плагина. Данный плагин
          считается аналогом <mark className="plugin">FX Console</mark> из{" "}
          <mark className="app">After Effects</mark> для{" "}
          <mark className="app">Premiere Pro</mark>.
        </li>
        <li>
          <mark className="plugin">AtomX</mark>, <mark className="plugin">MotionBro</mark>
          , <mark className="plugin">Premiere Composer</mark> и похожие плагины с
          различными паками помогут ускорить работу за счёт быстрого применения
          разнообразных эффектов и переходов.
          <AdditionWarning>
            Учтите, что при применении некоторых переходов у вас может снизиться
            производительность проекта.
          </AdditionWarning>
        </li>
        <li>
          <mark className="app">Nobe OmniScope</mark> - программа, подключаемая к{" "}
          <mark className="app">Premiere Pro</mark> для отображения спектрограммы вашего
          видео. Похож на <mark className="plugin">Lumetri Scopes</mark>, только лучше.
        </li>
        <Divider>Синхронизация дорожек c разных камер</Divider>
        <ul>
          <li>
            <mark className="app">PluralEyes</mark> - программа от Red Giant для
            синхронизации всех аудио и видео, снятые с разных камер.
            <AdditionWarning>
              Для данной программы поддержка прекращена. Программой пользоваться можно, но
              обновляться она уже не будет.{" "}
              <a href="https://support.maxon.net/hc/en-us/articles/7389361453340-PluralEyes-Limited-Maintenance-Mode">
                Подробнее...
              </a>
            </AdditionWarning>
          </li>
          <li>
            <mark className="app">Syncaila</mark> или же{" "}
            <mark className="app">Синкайла</mark> - отечественный продукт для
            синхронизации многокамерной съёмки. Доступна пробная версия на 20 дней, по
            истечении которого будет доступна синхронизация только 20 клипов на двух
            дорожках.
            <AdditionInfo>
              Приобрести полную версию <mark className="app">Syncaila</mark> можно на{" "}
              <a href="https://syncaila.com/ru#section-p7">официальном сайте</a>.
            </AdditionInfo>
          </li>
        </ul>
        <Divider>Создание субтитров</Divider>
        <ul>
          <li>
            <mark className="app">Subtitle Edit</mark> - сторонняя программа для
            редактирования и генерации субтитров из звука с помощью технологий{" "}
            <mark>Whisper</mark> и <mark>Vosk/Kaldi</mark>.
          </li>
          <li>
            <mark className="plugin">Submachine</mark> - плагин для создания анимированных
            субтитров, как в &quot;тиктоках&quot; и &quot;рилсах&quot;. Перед
            использованием плагина лучше уделить 20 минут и{" "}
            <a href="https://youtu.be/xYidiPvc_LY">
              посмотреть официальное обучающее видео по его использованию
            </a>
            .
            <AdditionDanger>
              Данный плагин на <mark className="app">Premiere Pro</mark> версий{" "}
              <mark>24.2</mark> и <mark>24.2.1</mark> работает кривовато. Рекомендуется
              обновить программу до последней версии или откатиться до <mark>24.1</mark>.
            </AdditionDanger>
          </li>
          <li>
            <mark className="plugin">Captioneer</mark> - аналог предыдущего в списке
            плагина, с помощью него тоже можно создавать анимированные субтитры и
            применять на них стили из <mark className="file">.mogrt</mark> файлов.
          </li>
        </ul>
        <Divider>Обработка звука</Divider>
        <AdditionInfo>
          <mark className="app">Premiere Pro</mark> поддерживает любые VST3-плагины,
          поэтому вы можете своими любимыми эффектами для обработки звука, если вы
          работали ранее в DAW-программах и хотите перенести эффекты оттуда.
        </AdditionInfo>
        <ul>
          <li>
            <mark className="plugin">iZotope RX</mark>,{" "}
            <mark className="plugin">iZotope Nectar</mark> и{" "}
            <mark className="plugin">iZotope Ozone</mark> - плагины для обработки звука,
            восстановления голоса и мастеринга.
          </li>
          <li>
            <mark className="plugin">FabFilter Bundle</mark> - сборник различных плагинов
            для обработки звука.
          </li>
          <li>
            <mark className="plugin">Antares Auto-Tune</mark> - знаменитый плагин для
            коррекции голоса.
          </li>
        </ul>
        <Divider>Ретушь</Divider>
        <ul>
          <li>
            <mark className="plugin">BeautyBox</mark> - плагин для ретуширования и
            сглаживания кожи у человека на видео с сохранением естественного вида.
          </li>
        </ul>
        <Divider>Цветокоррекция и шумоподавление</Divider>
        <ul>
          <li>
            <mark className="plugin">FilmConvert</mark> - плагин для применения различных
            фильтров для имитации плёнки.
          </li>
          <li>
            <mark className="plugin">Magic Bullet Looks</mark> - плагин для применения
            художественной цветокоррекции.
          </li>
          <li>
            <mark className="plugin">Neat Video</mark> - плагин для шумоподавления и
            уменьшения мерцания на видео.
          </li>
        </ul>
        <Divider>Остальное</Divider>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="previews, ускорение времени рендера, уменьшение перепросчёта, пререндер, prerender"
        title="Как сократить время повторного экспорта, если заказчик попросил внести небольшие правки?"
      >
        <p>
          Если вы хотите сократить время рендера при небольших правках от заказчика, то вы
          можете вывести видео из <mark className="app">Premiere Pro</mark> с файлами от
          пре-рендера.
        </p>
        <p>
          Для начала нужно подготовить проект под его использование: нужно открыть
          настройки секвенции, перейдя в
          <mark className="ui">Sequence &gt; Sequence Settings</mark> и в разделе{" "}
          <mark className="ui">Video Previews</mark> указать нужный нам кодек для
          пре-рендера. В нашем случае мы укажем{" "}
          <mark className="video">Apple Prores 422</mark>, но вы можете выбрать любой
          другой.
        </p>
        {/* FIXME: написать про файлы previews!! */}
        {/* 
        <figure>
          <img
            loading="lazy"
            src="source/sequence_settings_video_previews_premiere_pro.png"
            alt="Настройка кодека для Video Preview"
            title="Настройка кодека для Video Preview"
          />
          <figcaption>Настройка кодека для Video Preview</figcaption>
        </figure>
        <div className="warning">
          Выбор кодека в Video Previews должен совпадать с выбором кодека для финального
          рендера, чтобы эта фишка сработала. Если вы выбрали, например, кодек
          <mark className="video">Apple Prores 4444</mark> для Video Previews, то для
          финального рендера вы должны также выбрать
          <mark className="video">Apple Prores 4444</mark>. Если вы забыли, какой кодек вы
          выбрали для Video Previews, то выберите пресет
          <mark className="ui">Match Sequence Preview Settings</mark>. Данный пресет будет
          работать, если вы сделали пре-рендер хотя бы одного клипа или участка таймлайна.
          <figure>
            <img
              loading="lazy"
              src="source/match_sequence_preview_settings_premierepro.png"
              alt="Пресет Match Sequence Preview Settings"
              title="Пресет Match Sequence Preview Settings"
            />
            <figcaption>Пресет Match Sequence Preview Settings</figcaption>
          </figure>
        </div> */}
      </DetailsSummary>
      <DetailsSummary title="Какой компьютер или ноутбук стоит взять для работы в Premiere Pro?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какая версия Premiere Pro наиболее стабильная, наименее лагучая и какую мне лучше всего поставить?">
        <AdditionInfo>
          Перед установкой <mark className="app">Premiere Pro</mark> обратите внимание на{" "}
          <a href="https://helpx.adobe.com/ru/premiere-pro/system-requirements.html">
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
          <mark className="quote">а версию премьера какую лучше скачать под мой пк</mark>,
          то вам не стоит надеяться на то, что существует какая-то чудо-версия{" "}
          <mark className="app">Premiere Pro</mark>, которая якобы будет быстро работать
          на вашем железе. Выбор версии программы слабо влияет на общую
          производительность. Также устанавливая слишком старый софт, вы лишаете себя
          новых функций и возможного улучшения пользовательского опыта, при этом получив
          малый профит.
        </AdditionInfo>
        <p>
          <b>
            <u>Ни одна версия</u>
          </b>{" "}
          <mark className="app">Premiere Pro</mark>{" "}
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
            <mark className="app">Premiere Pro</mark> на момент чтения этого пункта.
          </li>
          <li>
            Если вам нужна более откатанная и стабильная, а также относительно современная
            версия программы - установите версию <mark>23.6</mark> (2023) или{" "}
            <mark>24.1</mark> (2024). От пользователей, сидящих на этих версиях, мы
            слышали меньше всего жалоб на возможные приколы работы программы.
          </li>
          <li>
            Если процессор у вашего устройства не поддерживает инструкции{" "}
            <mark>AVX2</mark>, то вы можете установить максимум версию <mark>23.6</mark>{" "}
            (2023).
            <AdditionWarning>
              Если вы попытаетесь обойти требования по установке и запустите программу
              версии <mark>2024</mark> или новее на неподдерживаемом процессоре, то скорее
              всего вы нарвётесь на ошибку <mark className="code">0xc0000142</mark> при
              запуске. Обойти это нельзя, придётся раскошелиться на новый процессор с
              поддержкой инструкций <mark>AVX2</mark>.
            </AdditionWarning>
          </li>
          <li>
            Если вы используете устройство на <mark>Windows 7</mark> или{" "}
            <mark>Windows 8.1</mark> - установите версию <mark>13.1</mark> (2019) или{" "}
            <mark>12.1</mark> (2018). Более свежую версию программы вы не сможете
            установить из-за отсутствия официальной поддержки этих операционных систем
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
          <mark className="app">Premiere Pro</mark> вы всегда можете посмотреть на
          официальном сайте Adobe.
        </p>{" "}
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/premiere-pro/using/whats-new.html">
            Что нового в Premiere Pro последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/premiere-pro/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/premiere-pro/kb/known-issues.html">
            Выявленные неполадки в Premiere Pro
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
          сторонних плагинов, например <mark className="plugin">Boris FX Continuum</mark>,
          на новых версиях <mark className="app">Premiere Pro</mark>, бытуют ложные слухи
          о том что{" "}
          <mark className="quote">
            ой, версия примьера XX.X очень логучая и вылитает на маих видосах!!1!
          </mark>{" "}
          и вводят остальных пользователей в заблуждение.
        </AdditionInfo>
      </DetailsSummary>
    </div>
  );
};

export default PRTips;
