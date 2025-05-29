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
      <DetailsSummary
        tag="бекап, резервное копирование, возврат, вернуть, восстановить, облачное хранилище, облако, яндекс диск, журнал файлов, бэкап, история изменений файлов, откат проекта"
        title="Чем я могу сделать резервные копии файлов и, при необходимости, возвращаться к предыдущим версиям файлов?"
      >
        <p>
          Бывают ситуации, когда после внесённых изменений клиенту результат не подходит,
          и требуется вернуться к предыдущей версии проекта. Или, например,{" "}
          <mark className="file">.prproj</mark> файл неожиданно сломался и перестал
          корректно открываться. Если заранее позаботиться о резервном копировании ваших
          файлов - подобных проблем можно было бы избежать, сэкономив время и усилия на
          восстановление данных. Есть два варианта создания резервного копирования - на
          облачном хранилище или локально на вашем устройстве или сервере.
        </p>
        <AdditionInfo>
          Если вы хотите быстро сохранить открытый проект под другим названием -
          воспользуйтесь комбинацией клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + S</mark>. Данная команда сохранит
          проект с тем же названием и добавит число в конце по возрастанию.
        </AdditionInfo>
        <Divider>Создаём резервные копии на облачном хранилище</Divider>
        <p>
          Самый простой способ организовать резервное копирование различных файлов
          проектов - воспользоваться услугами облачного хранилища и настроить
          автоматическую синхронизацию файлов на вашем компьютере с сервером. У популярных
          облачных хранилищ, например <mark>Яндекс.Диск</mark>, <mark>Google Drive</mark>{" "}
          или <mark>Dropbox</mark>, есть собственные клиенты для <mark>Windows</mark> и{" "}
          <mark>macOS</mark> для того, чтобы настроить автоматическую синхронизацию
          указанных вами папок.
        </p>
        <p>
          Также у многих популярных облачных хранилищ есть функция восстановления файлов
          при их изменении на сервере или случайном удалении на вашем устройстве. Это
          бывает очень полезно, если вы случайно перезаписали нужный файл проекта другим
          файлом с одинаковым названием. С помощью истории файлов можно быстро выкачать
          предыдущую версию. Учтите, что у каждого сервиса свой срок хранения истории
          файлов и корзины - уточняйте это в вашем тарифном плане.
        </p>
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
        <Divider>
          Создаём локальные резервные копии файлов стандартными функциями операционной
          системы
        </Divider>
        <p>
          Если вам вариант с облачным хранилищем не подходит по каким-то причинам, то вы
          можете организовать свою локальную систему резервного копирования. В{" "}
          <mark>Windows</mark> и <mark>macOS</mark> есть функция локального резервного
          копирования файлов, которую необходимо включить. Обычно для работы этой функции
          требуется внешний или отдельный накопитель.
        </p>
        <ContentSwitcher
          macContent={
            <div>
              <p>
                В <mark>macOS</mark> функция бэкапа файлов называется{" "}
                <mark className="app">Time Machine</mark>, которая создаёт снапшот вашей
                системы и файлов каждый час или по нажатию кнопки создания бэкапа.
              </p>
              <AdditionWarning>
                Для работы данной функции нужен внешний накопитель, желательно с объёмом
                от <mark>512 Гб</mark> и более.
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
                В <mark>Windows</mark> стандартная функция бэкапа файлов называется{" "}
                <mark className="app">История файлов</mark>, которая создаёт копии файлов
                на другую директорию. С помощью него вы можете восстановить удалённый файл
                или вернуть предыдущую версию файла в свойствах файла.
              </p>
              <AdditionInfo>
                Для работы данной функции заранее укажите диск, на который вы планируете
                сохранять копии файлов в разделе <mark className="ui">Смена диска</mark>.
              </AdditionInfo>
              <YouTubeVideo
                caption="История файлов в Windows 11 и Windows 10"
                link="xDFQEx9gylc"
              />
              <p>
                В настройках этой функции можно установить интервал сохранения от{" "}
                <mark>10 минут</mark> до <mark>одного раза в день</mark>. Также можно
                задать срок хранения от <mark>одного месяца</mark> до{" "}
                <mark>двух лет</mark>, по истечении которого система автоматически удалит
                старые резервные копии из указанной директории.
              </p>
              <AdditionInfo>
                <p>
                  По умолчанию функция <mark className="app">История файлов</mark>{" "}
                  копирует только из стандартных папок{" "}
                  <mark className="path">Библиотеки</mark>,{" "}
                  <mark className="path">Рабочий стол</mark>,{" "}
                  <mark className="path">Контакты</mark> и{" "}
                  <mark className="path">Избранное</mark>. Если вам нужно установить свои
                  папки, откуда нужно копировать файлы - зайдите в параметры и создайте
                  свою библиотеку.
                </p>
                <ul>
                  <li>
                    На <mark>Windows 11</mark> - откройте проводник, выберите нужную папку
                    и нажмите на <mark className="key">ПКМ</mark>. Затем в контекстном
                    меню нажмите на <mark className="ui">Добавить в библиотеку</mark>. Вы
                    можете выбрать уже существующую библиотеку или создать новую.
                    <AdditionWarning>
                      Если у вас нет кнопки{" "}
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
        <Divider>
          Альтернативные варианты контроля версий файлов и их резервного копирования
        </Divider>
        <p>
          В качестве альтернативных вариантов контроля версий и резервного копирования вы
          можете воспользоваться <mark className="app">Git</mark>, который доступен для{" "}
          <a href="https://git-scm.com/downloads/win">Windows</a> и{" "}
          <a href="https://git-scm.com/downloads/mac">macOS</a>, или создать свой сервер с
          помощью любого устройства, будь то <mark>Raspberry Pi</mark> или старый
          компьютер. Здесь особо об этом расписывать не буду, но при всём желании - некую
          часть информации вы можете найти в интернете. Если вы решили контролировать свои
          файлы с помощью <mark className="app">Git</mark>, то советую клиенты{" "}
          <mark className="app">SourceGit</mark> или{" "}
          <mark className="app">SourceTree</mark>.
        </p>
        <YouTubeVideo
          caption="Объясняем на пальцах про Git"
          link="G4f9OH4IQE8"
        />
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
          <mark className="app">Adobe After Effects</mark> для{" "}
          <mark className="app">Adobe Premiere Pro</mark>.
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
          <mark className="app">Adobe Premiere Pro</mark> для отображения спектрограммы
          вашего видео. Похож на <mark className="plugin">Lumetri Scopes</mark>, только
          лучше.
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
              Данный плагин на <mark className="app">Adobe Premiere Pro</mark> версий{" "}
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
          <mark className="app">Adobe Premiere Pro</mark> поддерживает любые VST3-плагины,
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
          можете экспортировать видео из <mark className="app">Adobe Premiere Pro</mark> с
          файлами от пре-рендера.
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
          Перед установкой <mark className="app">Adobe Premiere Pro</mark> обратите
          внимание на{" "}
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
          <mark className="app">Adobe Premiere Pro</mark>, которая якобы будет быстро
          работать на вашем железе. Выбор версии программы слабо влияет на общую
          производительность. Также устанавливая слишком старый софт, вы лишаете себя
          новых функций и возможного улучшения пользовательского опыта, при этом получив
          малый профит.
        </AdditionInfo>
        <p>
          <b>
            <u>Ни одна версия</u>
          </b>{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <b>
            <u>не может считаться эталонным</u>
          </b>
          , поэтому рекомендации на момент написания этой статьи следующие.
        </p>
        <Divider>Рекомендации по выбору версии</Divider>
        <ul>
          <li>
            Если вы не часто работаете в программе, любите новые функции и стабильность
            для вас не в приоритете, то вы можете установить последнюю версию{" "}
            <mark className="app">Adobe Premiere Pro</mark> на момент чтения этой статьи.
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
          <mark className="app">Adobe Premiere Pro</mark> вы всегда можете посмотреть на
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
          на новых версиях <mark className="app">Adobe Premiere Pro</mark>, бытуют ложные
          слухи о том что{" "}
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
