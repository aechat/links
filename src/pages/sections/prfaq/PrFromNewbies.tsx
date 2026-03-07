import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PrFromNewbies: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="get-started"
        tag="для новичка, курсы, туториалы, только открыл премьер"
        title="Я первый раз установил и открыл программу, с чего бы мне начать обучение?"
      >
        <p>
          Если вы только начинаете свой путь в монтаже или никогда не использовали{" "}
          <mark className="app">Adobe Premiere</mark> в качестве основного инструмента и
          хотите разобраться в интерфейсе и его возможностях, посмотрите плейлист{" "}
          <a href="https://www.youtube.com/playlist?list=PLcN7xY5E2wrmIlv6SNF2xacsryFtGIfXK">
            Азбука Adobe Premiere Pro
          </a>{" "}
          от <a href="https://youtube.com/zernov">Ильи Зернова</a>.
        </p>
        <Addition type="warning">
          Курс был записан в <mark className="app">Adobe Premiere Pro</mark> версии{" "}
          <mark>2019</mark>. Некоторые функции могут отличаться от вашей текущей версии
          программы.
        </Addition>
        <ArticleMedia
          src="Wi-AalXwilg"
          type="youtube"
        />
        <p>
          Если вы уже уверенно монтируете в <mark className="app">Adobe Premiere</mark> и
          хотите узнать что-то новое, рекомендую заглянуть на каналы ниже.
        </p>
        <div className="flexible-links">
          <a href="https://www.youtube.com/@khs_yt">Хохлов Сабатовский</a>
          <a href="https://www.youtube.com/@egorlistopadov">Егор Листопадов</a>
          <a href="https://www.youtube.com/@Profileschool/videos">Profileschool</a>
          <a href="https://www.youtube.com/@pankovskii/playlists">PANKOVSKII</a>
          <a href="https://www.youtube.com/@DmitryKolotilshikov/videos">
            Дмитрий Колотильщиков
          </a>
          <a href="https://www.youtube.com/@VIDEODIM/videos">Как монтировать видео</a>
        </div>
        <p
          style={{
            fontSize: "0.95rem",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Надеюсь, вы найдёте что-то полезное для себя. Удачи в ваших начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="vocabulary"
        tag="сленг, жаргон, сокращения, словосочетания, говор"
        title="Какие популярные термины есть у пользователей программы?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="keyboard-shortcuts"
        tag="хоткеи, горячие клавиши, шорткаты, keyboard shortcuts, hotkeys"
        title="Есть ли список популярных комбинаций клавиш?"
      >
        <p>
          Шорткаты помогают быстрее выполнять нужные функции программы, поэтому ниже
          приведены популярные у многих пользователей комбинации.
        </p>
        <Addition type="warning">
          Горячие клавиши в этой таблице могут отличаться в зависимости от вашей версии
          программы и заданных вами комбинаций. Посмотреть клавиши, которые назначены у
          вас для определённого действия, вы можете с помощью окна настроек комбинаций
          клавиш в <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>.
          Подробный список комбинаций клавиш вы можете найти{" "}
          <a href="https://helpx.adobe.com/premiere/desktop/get-started/keyboard-shortcuts/default-keyboard-shortcuts.html">
            на официальном сайте Adobe
          </a>
          .
        </Addition>
        <ContentFilter
          windowsContent={
            <>
              <Divider>Выбор инструментов</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Selection Tool»</mark> — инструмент
                      выделения клипов и элементов на таймлайне
                    </td>
                    <td>
                      <mark className="key">V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Track Select Forward Tool»</mark> —
                      инструмент выделения клипов правее курсора на таймлайне
                    </td>
                    <td>
                      <mark className="key">A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Track Select Backward Tool»</mark> —
                      инструмент выделения клипов левее курсора на таймлайне
                    </td>
                    <td>
                      <mark className="key">Shift + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ripple Edit Tool»</mark> — инструмент для
                      подрезки начала и конца клипа со сдвигом остальных клипов на
                      таймлайне
                    </td>
                    <td>
                      <mark className="key">B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Rolling Edit Tool»</mark> — инструмент
                      изменения соотношения длины двух клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Rate Stretch Tool»</mark> — инструмент
                      удлинения или укорачивания клипа на таймлайне
                    </td>
                    <td>
                      <mark className="key">R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Razor Tool»</mark> — инструмент резки
                      клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Slip Tool»</mark> — инструмент смещения
                      клипа с сохранением позиции на таймлайне
                    </td>
                    <td>
                      <mark className="key">Y</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Slide Tool»</mark> — инструмент смещения
                      клипа, оставляя его на месте на таймлайне
                    </td>
                    <td>
                      <mark className="key">U</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Pen Tool»</mark> — инструмент пера для
                      рисования масок или создания фигур
                    </td>
                    <td>
                      <mark className="key">P</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Hand Tool»</mark> — инструмент руки для
                      перемещения некоторых частей интерфейса
                    </td>
                    <td>
                      <mark className="key">H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom Tool»</mark> — инструмент лупы для
                      увеличения или уменьшения предпросмотра
                    </td>
                    <td>
                      <mark className="key">Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Type Tool»</mark> — инструмент создания и
                      редактирования текста
                    </td>
                    <td>
                      <mark className="key">T</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Работа с файлами и проектом (File)</Divider>
              <table className="table">
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«New Project»</mark> — создать новый проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Sequence»</mark> — создать новую
                      секвенцию
                    </td>
                    <td>
                      <mark className="key">Ctrl + N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Bin»</mark> — создать новую папку в
                      панели <mark className="select">«Project»</mark>
                      <Addition type="info">
                        Данная комбинация будет работать только в том случае, если панель{" "}
                        <mark className="select">«Project»</mark> в фокусе.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Bin From Selection»</mark> — создать папку
                      из выделенных элементов в окне{" "}
                      <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Open Project»</mark> — открыть проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Close»</mark> — закрыть активную панель
                    </td>
                    <td>
                      <mark className="key">Ctrl + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Close Project»</mark> — закрыть текущий
                      проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save»</mark> — сохранить текущий проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save As»</mark> — сохранить проект под
                      новым именем
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save a Copy»</mark> — сохранить копию
                      проекта под новым именем
                      <Addition type="info">
                        Разница данного действия с{" "}
                        <mark className="select">«Save As»</mark> заключается в том, что{" "}
                        <mark className="select">«Save a Copy»</mark> добавляет слово{" "}
                        <mark className="copy">Copy</mark> в название проекта при
                        сохранении, а <mark className="select">«Save As»</mark> — нет.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Import»</mark> — открыть окно импорта
                      файлов
                    </td>
                    <td>
                      <mark className="key">Ctrl + I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Export Media»</mark> — отправить секвенцию
                      на экспорт прямо из <mark className="app">Adobe Premiere</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Send to Adobe Media Encoder»</mark> —
                      отправить секвенцию на экспорт в{" "}
                      <mark className="app">Adobe Media Encoder</mark>
                    </td>
                    <td>
                      <mark className="key">Alt + Shift + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Get Media File Properties for Selection»
                      </mark>{" "}
                      — открыть панель{" "}
                      <mark className="select">«Media File Properties»</mark> для
                      выделенных файлов
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Exit»</mark> — завершить работу{" "}
                      <mark className="app">Adobe Premiere</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Q</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Редактирование (Edit)</Divider>
              <table className="table">
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Undo»</mark> — отменить последнее действие
                      <Addition type="info">
                        <p>
                          Увеличить объём хранения последних действий можно изменить в
                          поле <mark className="select">«History States»</mark> в
                          контекстном меню панели{" "}
                          <mark className="select">«History» → «Settings»</mark>. По
                          умолчанию установлено значение <mark>32</mark>.
                        </p>
                        <Addition type="warning">
                          История последних действий хранится только в пределах текущей
                          сессии. Если вы завершите работу программы — история не
                          восстановится.
                        </Addition>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Redo»</mark> — вернуть отменённое действие
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Cut»</mark> — вырезать выделенные элементы
                      и поместить их в буфер обмена
                    </td>
                    <td>
                      <mark className="key">Ctrl + X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Copy»</mark> — скопировать выделенные
                      элементы и поместить их в буфер обмена
                    </td>
                    <td>
                      <mark className="key">Ctrl + C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste»</mark> — вставить содержимое из
                      буфера обмена
                    </td>
                    <td>
                      <mark className="key">Ctrl + V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste Insert»</mark> — вставить содержимое
                      из буфера обмена вставкой
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste Attributes»</mark> — вставить
                      скопированные атрибуты клипа
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste To Same Track»</mark> — вставить
                      клип на той же дорожке таймлайна, где он был
                    </td>
                    <td>
                      <mark className="key">Ctrl + V</mark>
                      <Addition type="info">
                        До версии <mark>22.5</mark> данная комбинация клавиш была
                        назначена на действие <mark className="select">«Paste»</mark>,
                        которое работает как{" "}
                        <mark className="select">«Paste To Target Track»</mark>.
                      </Addition>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste Insert To Same Track»</mark> —
                      вставить клип со сдвигом на той же дорожке таймлайна, где он был
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + V</mark>
                      <Addition type="info">
                        До версии <mark>22.5</mark> данная комбинация клавиш была
                        назначена на действие{" "}
                        <mark className="select">«Paste Insert»</mark>, которое работает
                        как <mark className="select">«Paste Insert To Target Track»</mark>
                        .
                      </Addition>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Clear»</mark> — удалить выделенный объект
                    </td>
                    <td>
                      <mark className="key">Delete</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ripple Delete»</mark> — удалить выделенный
                      клип и сдвинуть остальные на его место
                    </td>
                    <td>
                      <mark className="key">Shift + Delete</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Duplicate»</mark> — продублировать
                      выделенные объекты в окне <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + /</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select All»</mark> — выделить всё
                      <Addition type="info">
                        Выделение зависит от состояния фокуса панели, например{" "}
                        <mark className="select">«Timeline»</mark> или{" "}
                        <mark className="select">«Project»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Deselect All»</mark> — убрать выделение
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Find»</mark> — открыть окно поиска
                      <Addition type="info">
                        Работа поиска зависит от состояния фокуса панелей{" "}
                        <mark className="select">«Project»</mark> или{" "}
                        <mark className="select">«Timeline»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + F</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Edit Original»</mark> — открыть выделенный
                      файл в <mark className="select">«Timeline»</mark> или{" "}
                      <mark className="select">«Project»</mark> в сторонней программе
                      <Addition type="info">
                        Открытие выделенного файла в сторонней программе зависит от
                        настроенных зависимостей для каждого расширения файла в настройках
                        вашей системы. Это может быть видеопроигрыватель или графический
                        редактор.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + E</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Клипы (Clip)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Modify Clip» → «Audio Channels»</mark> —
                      открыть настройки аудиоканалов выделенных клипов
                    </td>
                    <td>
                      <mark className="key">Shift + G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Audio Gain»</mark> — открыть окно
                      нормализации громкости аудиодорожки выделенного клипа
                    </td>
                    <td>
                      <mark className="key">G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Speed/Duration...»</mark> — открыть окно
                      редактирования скорости и его интерполяции для выделенных клипов
                    </td>
                    <td>
                      <mark className="key">Ctrl + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Insert»</mark> — вставить клип из панели{" "}
                      <mark className="select">«Source Monitor»</mark> или{" "}
                      <mark className="select">«Project»</mark> на таймлайн
                    </td>
                    <td>
                      <mark className="key">
                        , <span style={{fontWeight: "450", opacity: "0.5"}}>(Б)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Overwrite»</mark> — перезаписать клип на
                      таймлайне тем, что открыто в{" "}
                      <mark className="select">«Source Monitor»</mark> или выделено в{" "}
                      <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">
                        . <span style={{fontWeight: "450", opacity: "0.5"}}>(Ю)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Link»</mark> — связать или отвязать видео
                      и аудио выделенных клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">Ctrl + L</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Group»</mark> — сгруппировать выделенные
                      клипы
                    </td>
                    <td>
                      <mark className="key">Ctrl + G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ungroup»</mark> — разгруппировать
                      выделенные клипы
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + G</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Addition type="info">
                Для действий создания <mark className="select">«Nest»</mark> и{" "}
                <mark className="select">«Make Subsequence»</mark> из выделенных клипов по
                умолчанию нет комбинаций клавиш. Однако вы можете их назначить вручную в
                настройках горячих клавиш, например <mark className="select">«Nest»</mark>{" "}
                на <mark className="key">Ctrl + Shift + U</mark>.
              </Addition>
              <Divider>Секвенция (Sequence)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Render Effects in Work Area»</mark> —
                      начать пререндер участков секвенции, отмеченных красной полосой
                      рендеринга
                      <Addition type="info">
                        При желании вы также можете настроить комбинацию клавиш для
                        действия <mark>Render In to Out</mark>, которое выполняет
                        пререндер участков секвенции, отмеченных жёлтыми и красными
                        полосами рендеринга, например на{" "}
                        <mark className="key">Shift + Enter</mark>.{" "}
                        <a href="#render-bar-colors">Что эти цвета означают?</a>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Enter</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Match Frame»</mark> — синхронизировать
                      выделенный клип с панелью{" "}
                      <mark className="select">«Source Monitor»</mark>.
                      <Addition type="warning">
                        Данное действие не будет выполнено, если в рабочем пространстве не
                        открыт <mark className="select">«Source Monitor»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">F</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Reverse Match Frame»</mark> — переместить
                      индикатор текущего времени на таймлайне к моменту исходника в панели{" "}
                      <mark className="select">«Source»</mark>
                      <Addition type="warning">
                        Данное действие не будет выполнено, если в рабочем пространстве не
                        открыт <mark className="select">«Source Monitor»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Shift + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Next Edit Point»</mark> — перейти к
                      следующей точке склейки клипов от индикатора текущего времени
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное поведение зависит от указанных{" "}
                            <mark className="select">«Track Targeting»</mark> на
                            таймлайне.
                          </li>
                          <li>
                            Действие зависит от состояния фокуса панели{" "}
                            <mark className="select">«Timeline»</mark>.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        ↓ <span style={{fontWeight: "450", opacity: "0.5"}}>(вниз)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Previous Edit Point»</mark> —
                      перейти к предыдущей точке склейки клипов от индикатора текущего
                      времени
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное поведение зависит от указанных{" "}
                            <mark className="select">«Track Targeting»</mark> на
                            таймлайне.
                          </li>
                          <li>
                            Действие зависит от состояния фокуса панели{" "}
                            <mark className="select">«Timeline»</mark>.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        ↑ <span style={{fontWeight: "450", opacity: "0.5"}}>(вверх)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Next Edit Point on Any Track»</mark>{" "}
                      — перейти к следующей точке склейки клипов от индикатора текущего
                      времени на любой дорожке
                      <Addition type="info">
                        Действие зависит от состояния фокуса панели{" "}
                        <mark className="select">«Timeline»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Shift + ↓{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(вниз)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Go to Previous Edit Point on Any Track»
                      </mark>{" "}
                      — перейти к предыдущей точке склейки клипов от индикатора текущего
                      времени на любой дорожке
                      <Addition type="info">
                        Действие зависит от состояния фокуса панели{" "}
                        <mark className="select">«Timeline»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Shift + ↑{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(вверх)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Extend Selected Edit to Playhead»</mark> —
                      продлить выбранный стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Forward»</mark> — подрезать вперёд
                      <Addition type="info">
                        Данное действие будет работать, если выделено начало или конец
                        клипа
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + →{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Backward»</mark> — подрезать назад
                      <Addition type="info">
                        Данное действие будет работать, если выделено начало или конец
                        клипа
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ←{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Forward Many»</mark> — подрезать
                      вперёд на шаг<sup>1</sup>
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное действие будет работать, если выделено начало или конец
                            клипа.
                          </li>
                          <li>
                            <sup>1</sup> По умолчанию в{" "}
                            <mark className="app">Adobe Premiere</mark> настроено на
                            смещение в пределах <mark>5 кадров</mark> или{" "}
                            <mark>100 единиц времени аудио</mark>. Данные значения можно
                            изменить в{" "}
                            <mark className="select">
                              «Edit» → «Preferences» → «Trim»
                            </mark>
                            .
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Shift + →{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Backward Many»</mark> — подрезать
                      назад на шаг<sup>1</sup>
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное действие будет работать, если выделено начало или конец
                            клипа.
                          </li>
                          <li>
                            <sup>1</sup> По умолчанию в{" "}
                            <mark className="app">Adobe Premiere</mark> настроено на
                            смещение в пределах <mark>5 кадров</mark> или{" "}
                            <mark>100 единиц времени аудио</mark>. Данные значения можно
                            изменить в{" "}
                            <mark className="select">
                              «Edit» → «Preferences» → «Trim»
                            </mark>
                            .
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Shift + ←{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Apply Video Transition»</mark> — применить
                      видеопереход
                      <Addition type="info">
                        По умолчанию применяется переход{" "}
                        <mark className="plugin">«Cross Dissolve»</mark>. Вы можете
                        изменить переход на свой, выбрав нужный переход в панели{" "}
                        <mark className="select">«Effects»</mark> и с помощью{" "}
                        <mark className="key">ПКМ</mark> нажать{" "}
                        <mark className="select">
                          «Set Selected as Default Transition»
                        </mark>
                        .
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Apply Audio Transition»</mark> — применить
                      аудиопереход
                      <Addition type="info">
                        По умолчанию применяется переход{" "}
                        <mark className="plugin">«Constant Power»</mark>. Вы можете
                        изменить переход на свой, выбрав нужный переход в панели{" "}
                        <mark className="select">«Effects»</mark> и с помощью{" "}
                        <mark className="key">ПКМ</mark> нажать{" "}
                        <mark className="select">
                          «Set Selected as Default Transition»
                        </mark>
                        .
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Apply Default Transitions to Selection»
                      </mark>{" "}
                      — применить видеопереходы и аудиопереходы для выделенных клипов
                      <Addition type="info">
                        По умолчанию для видео применяется переход{" "}
                        <mark className="plugin">«Cross Dissolve»</mark>, а для аудио —{" "}
                        <mark className="plugin">«Constant Power»</mark>. Вы можете
                        изменить переход на свой, выбрав нужный переход в панели{" "}
                        <mark className="select">«Effects»</mark> и с помощью{" "}
                        <mark className="key">ПКМ</mark> нажать{" "}
                        <mark className="select">
                          «Set Selected as Default Transition»
                        </mark>
                        .
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Shift + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom Out»</mark> — уменьшить
                      масштабирование таймлайна в{" "}
                      <mark className="select">«Timeline»</mark>,{" "}
                      <mark className="select">«Program Monitor»</mark> и{" "}
                      <mark className="select">«Source Monitor»</mark> и содержимого в{" "}
                      <mark className="select">«Project»</mark> и{" "}
                      <mark className="select">«Media Browser»</mark>
                    </td>
                    <td>
                      <mark className="key">-</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom In»</mark> — увеличить
                      масштабирование таймлайна в{" "}
                      <mark className="select">«Timeline»</mark>,{" "}
                      <mark className="select">«Program Monitor»</mark> и{" "}
                      <mark className="select">«Source Monitor»</mark> и содержимого в{" "}
                      <mark className="select">«Project»</mark> и{" "}
                      <mark className="select">«Media Browser»</mark>
                    </td>
                    <td>
                      <mark className="key">=</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Snap»</mark> — переключить привязку клипов
                      и склеек на таймлайне при перемещении или добавлении клипов или
                      склеек
                    </td>
                    <td>
                      <mark className="key">S</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Маркеры</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Mark In»</mark> — поставить точку входа на
                      таймлайне
                    </td>
                    <td>
                      <mark className="key">I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Mark Out»</mark> — поставить точку выхода
                      на таймлайне
                    </td>
                    <td>
                      <mark className="key">O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Mark Clip»</mark> — пометить точки входа и
                      выхода вокруг клипа, находящийся под индикатором текущего времени на
                      таймлайне
                    </td>
                    <td>
                      <mark className="key">X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Mark Selection»</mark> — пометить точки
                      входа и выхода в пределах выделенных клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">/</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to In»</mark> — перейти к точке входа
                      на таймлайне
                    </td>
                    <td>
                      <mark className="key">Shift + I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Out»</mark> — перейти к точке выхода
                      на таймлайне
                    </td>
                    <td>
                      <mark className="key">Shift + O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Clear In and Out»</mark> — убрать точки
                      входа и выхода на таймлайне
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Add Marker»</mark> — добавить маркер
                      выделенному клипу индикатора текущего времени
                      <Addition type="info">
                        Если выделенный клип находится вне позиции индикатора текущего
                        времени или ничего не выделено, маркер установится на секвенцию.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Next Marker»</mark> — перейти к
                      следующему маркеру от индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Shift + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Previous Marker»</mark> — перейти к
                      предыдущему маркеру от индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Clear Selected Marker»</mark> — удалить
                      выделенные маркеры
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + M</mark>
                      <Addition type="warning">
                        Дополнительно, зажав <mark className="key">Shift</mark>, вы
                        удалите все маркеры на секвенции.
                      </Addition>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Графика (Graphics and Titles)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Text»</mark> — создать новый слой с
                      текстом
                    </td>
                    <td>
                      <mark className="key">Ctrl + T</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Rectangle»</mark> — создать новый
                      прямоугольник
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ellipse»</mark> — создать новый эллипс
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Arrange» → «Bring Forward»</mark> —
                      переместить выделенный слой в{" "}
                      <mark className="select">«Graphic»</mark> выше по иерархии
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ]{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(Ъ)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Arrange» → «Send Backward»</mark> —
                      переместить выделенный слой в{" "}
                      <mark className="select">«Graphic»</mark> ниже по иерархии
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + [{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(Х)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select Next Layer»</mark> — выделить
                      следующий слой в <mark className="select">«Graphic»</mark>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Alt + ]{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(Ъ)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select Previous Layer»</mark> — выделить
                      предыдущий слой в <mark className="select">«Graphic»</mark>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Alt + [{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(Х)</span>
                      </mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Работа с окнами (Window)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 1</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Source Monitor»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 2</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Timeline»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 3</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Program Monitor»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 4</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Effect Controls»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 5</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Audio Track Mixer»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 6</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Effects»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 7</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Media Browser»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 8</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Audio Clip Mixer»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 9</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Reset to Saved Layout»</mark> — сбросить
                      рабочее пространство до последнего сохранённого состояния
                    </td>
                    <td>
                      <mark className="key">Alt + Shift + 0</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Прочее</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th style={{minWidth: "40%"}}>Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Add Captions Track»</mark> — добавить
                      дорожку с субтитрами
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Add new caption segment at playhead»
                      </mark>{" "}
                      — добавить новый сегмент субтитров на таймлайне
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Center align text»</mark> — выровнять
                      текст субтитров по центру
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Export Frame»</mark> — экспортировать
                      текущий кадр как изображение
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ripple Trim Next Edit To Playhead»</mark>{" "}
                      — разрезать клип после индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Ripple Trim Previous Edit To Playhead»
                      </mark>{" "}
                      — разрезать клип до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Q</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Add Edit»</mark> — разрезать выделенный
                      клип по индикатору текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Add Edit to All Tracks»</mark> — разрезать
                      клипы по индикатору текущего времени на всех дорожках, кроме
                      заблокированных
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Extend Next Edit To Playhead»</mark> —
                      продлить следующий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Shift + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Extend Previous Edit To Playhead»</mark> —
                      продлить предыдущий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Shift + Q</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Next Edit to Playhead»</mark> —
                      подрезать следующий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Previous Edit to Playhead»</mark> —
                      подрезать предыдущий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Q</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Maximize or Restore Frame Under Cursor»
                      </mark>{" "}
                      — развернуть или восстановить панель под курсором
                    </td>
                    <td>
                      <mark className="key">
                        ` <span style={{fontWeight: "450", opacity: "0.5"}}>(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Maximize or Restore Active Frame»</mark> —
                      развернуть или восстановить активную панель
                    </td>
                    <td>
                      <mark className="key">
                        Shift + `{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Toggle Full Screen»</mark> — включить или
                      выключить полноэкранный режим
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + `{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>Раскрыть программу на весь экран, скрыв заголовок окна</td>
                    <td>
                      <mark className="key">Ctrl + \</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Play In to Out»</mark> — проиграть
                      предпросмотр в пределах рабочей области
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + Space</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Play from Playhead to Out Point»</mark> —
                      проиграть от индикатора текущего времени до точки выхода
                    </td>
                    <td>
                      <mark className="key">Ctrl + Space</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Play In to Out with Preroll/Postroll»
                      </mark>{" "}
                      — проиграть от точки входа до точки выхода с preroll/postroll
                    </td>
                    <td>
                      <mark className="key">Shift + Space</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Play-Stop Toggle»</mark> — начать или
                      остановить воспроизведение предпросмотра
                    </td>
                    <td>
                      <mark className="key">Space</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Selected Clip Start»</mark> —
                      перейти к началу выделенного клипа
                    </td>
                    <td>
                      <mark className="key">Shift + Home</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Selected Clip End»</mark> — перейти
                      к концу выделенного клипа
                    </td>
                    <td>
                      <mark className="key">Shift + End</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select Clip at Playhead»</mark> — выделить
                      текущий клип под индикатором текущего времени
                      <Addition type="info">
                        Работает, если выключен{" "}
                        <mark className="select">«Select Follow Playhead»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shuttle Left»</mark> — проиграть
                      предпросмотр назад
                      <Addition type="info">
                        Многократное нажатие ускоряет проигрывание, с модификатором{" "}
                        <mark className="key">Shift</mark>, наоборот, замедляет.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">J</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shuttle Right»</mark> — проиграть
                      предпросмотр вперёд
                      <Addition type="info">
                        Многократное нажатие ускоряет проигрывание, с модификатором{" "}
                        <mark className="key">Shift</mark>, наоборот, замедляет.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">L</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shuttle Stop»</mark> — остановить
                      перемотку
                    </td>
                    <td>
                      <mark className="key">K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Step Back 1 Frame»</mark> — перейти на
                      предыдущий кадр
                    </td>
                    <td>
                      <mark className="key">
                        ← <span style={{fontWeight: "450", opacity: "0.5"}}>(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Step Forward 1 Frame»</mark> — перейти на
                      следующий кадр
                    </td>
                    <td>
                      <mark className="key">
                        →{" "}
                        <span style={{fontWeight: "450", opacity: "0.5"}}>(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="recommended-plugins"
        tag="рекомендация, топ, борисфх, твикстор, рсмб, юниверс, мбл, mbl"
        title="Какие плагины и инструменты мне стоит поставить в первую очередь для программы?"
      >
        <Addition type="warning">
          Сразу хочу{" "}
          <b>
            <u>предупредить</u>
          </b>
          : пожалуйста, не надо скачивать и устанавливать в программу все плагины мира
          подряд. Для начала разберитесь с тем, что вам действительно нужно.
        </Addition>
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
          <mark className="app">Adobe Premiere</mark>.
        </li>
        <li>
          <p>
            <mark className="plugin">AtomX</mark>,{" "}
            <mark className="plugin">MotionBro</mark>,{" "}
            <mark className="plugin">Premiere Composer</mark> и похожие плагины с
            различными паками помогут ускорить работу за счёт быстрого применения
            разнообразных эффектов и переходов.
          </p>
          <Addition type="warning">
            Учтите, что при применении некоторых переходов у вас может снизиться
            производительность проекта.
          </Addition>
        </li>
        <li>
          <mark className="app">Nobe OmniScope</mark> - программа, подключаемая к{" "}
          <mark className="app">Adobe Premiere</mark> для отображения спектрограммы вашего
          видео. Похож на <mark className="plugin">Lumetri Scopes</mark>, только лучше.
        </li>
        <Divider>Синхронизация дорожек c разных камер</Divider>
        <ul>
          <li>
            <p>
              <mark className="app">PluralEyes</mark> - программа от Red Giant для
              синхронизации всех аудио и видео, снятые с разных камер.
            </p>
            <Addition type="warning">
              Для данной программы поддержка прекращена. Программой пользоваться можно, но
              обновляться она уже не будет.{" "}
              <a href="https://support.maxon.net/hc/en-us/articles/7389361453340-PluralEyes-Limited-Maintenance-Mode">
                Подробнее...
              </a>
            </Addition>
          </li>
          <li>
            <p>
              <mark className="app">Syncaila</mark> или же{" "}
              <mark className="app">Синкайла</mark> - отечественный продукт для
              синхронизации многокамерной съёмки. Доступна пробная версия на 20 дней, по
              истечении которого будет доступна синхронизация только 20 клипов на двух
              дорожках.
            </p>
            <Addition type="info">
              Приобрести полную версию <mark className="app">Syncaila</mark> можно на{" "}
              <a href="https://syncaila.com/ru#section-p7">официальном сайте</a>.
            </Addition>
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
            <p>
              <mark className="plugin">Submachine</mark> - плагин для создания
              анимированных субтитров, как в &quot;тиктоках&quot; и &quot;рилсах&quot;.
              Перед использованием плагина лучше уделить 20 минут и{" "}
              <a href="https://youtu.be/xYidiPvc_LY">
                посмотреть официальное обучающее видео по его использованию
              </a>
              .
            </p>
            <Addition type="danger">
              Данный плагин на <mark className="app">Adobe Premiere Pro</mark> версий{" "}
              <mark>24.2</mark> и <mark>24.2.1</mark> работает кривовато. Рекомендуется
              обновить программу до последней версии или откатиться до <mark>24.1</mark>.
            </Addition>
          </li>
          <li>
            <mark className="plugin">Captioneer</mark> - аналог предыдущего в списке
            плагина, с помощью него тоже можно создавать анимированные субтитры и
            применять на них стили из <mark className="file">MOGRT</mark> файлов.
          </li>
        </ul>
        <Divider>Обработка звука</Divider>
        <Addition type="info">
          <mark className="app">Adobe Premiere</mark> поддерживает любые VST3-плагины,
          поэтому вы можете своими любимыми эффектами для обработки звука, если вы
          работали ранее в DAW-программах и хотите перенести эффекты оттуда.
        </Addition>
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
      </DetailsSummary>
      <DetailsSummary
        anchor="changelog"
        tag="что нового, фишки, обновления, апдейты, патчноуты"
        title="Где я могу узнать о нововведениях в обновлениях программы?"
      >
        <p>
          Обычно на сайте <mark className="company">Adobe</mark> в день выхода публичной
          стабильной версии выкладываются основные нововведения. Это сделано для того,
          чтобы каждый прохожий не спрашивал из каждого угла{" "}
          <mark className="quote">А что обновилось то?</mark>. Ещё время от времени{" "}
          <mark className="company">Adobe</mark> выкладывает на сайт список выявленных
          неполадок и старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/premiere-pro/using/whats-new.html">
            Что нового в Adobe Premiere последних выпусков
          </a>
          <a href="https://helpx.adobe.com/premiere-pro/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/premiere-pro/kb/known-issues.html">
            Выявленные неполадки в Adobe Premiere
          </a>
        </div>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">Adobe Premiere</mark>, а также сторонние плагины, чтобы
          исключить возможные проблемы при дальнейшем использовании программы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="switch-language"
        tag="изменить язык, смена языка, установка английской версии"
        title="Почему мне с каждого угла советуют поставить английский язык программы и как это сделать?"
      >
        <p>
          В <mark className="app">Adobe Premiere</mark>, аналогично как и с{" "}
          <mark className="app">Adobe After Effects</mark>, вы можете наткнуться на
          различные баги и приколы при использовании сторонних шаблонов,{" "}
          <mark className="file">MOGRT</mark> или пресетов. Создатели подобного рода
          контента не рассчитывают на то, что вы будете использовать другую локализацию{" "}
          <mark className="app">Adobe Premiere</mark>, отличную от английского.
        </p>
        <p>
          Для быстрой смены языка программы вам нужно открыть консоль с помощью комбинации
          клавиш <mark className="key">Ctrl + F12</mark> и переключиться на режим
          отображения <mark className="select">«Debug Database View»</mark>.
        </p>
        <ArticleMedia
          caption="Включение вида Debug Database View"
          src="legacy/premierepro/console_debug-database-view.png"
          type="image"
        />
        <p>
          Затем в строке поиска нам нужно написать{" "}
          <mark className="copy">ApplicationLanguage</mark> или найти этот параметр
          вручную. В строке с одноимённым параметром пишем{" "}
          <mark className="copy">en_US</mark>.
        </p>
        <ArticleMedia
          caption="Установка английского языка в консоли"
          src="legacy/premierepro/set_language_console.png"
          type="image"
        />
        <p>
          После ввода значения - перезагрузите программу и вы сможете насладиться
          англоязычным интерфейсом программы.
        </p>
        <Addition type="info">
          Чтобы вернуть язык, который был установлен по умолчанию - достаточно убрать
          значение из этого параметра и снова перезапустить{" "}
          <mark className="app">Adobe Premiere</mark>.
        </Addition>
        <Addition type="danger">
          После таких способов смены языка названия стандартных пресетов и рабочих
          областей могут остаться на русском языке. Их можно будет переименовать вручную
          или удалить, а затем поставить поверх дистрибутив{" "}
          <mark className="app">Adobe Premiere</mark> с указанием английского языка в
          установщике. Ну или просто переустановите программу сразу на английском языке.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="configure-backup"
        tag="бекап, бэкап, резервное копирование, возврат, вернуть, восстановить, облачное хранилище, облако, яндекс диск, журнал файлов, бэкап, история изменений файлов, откат проекта"
        title="Чем я могу сделать резервные копии файлов и, при необходимости, возвращаться к предыдущим версиям файлов?"
      >
        <p>
          Бывают ситуации, когда после внесённых изменений клиенту результат не подходит,
          и требуется вернуться к предыдущей версии проекта. Или, например,{" "}
          <mark className="file">PRPROJ</mark> файл неожиданно сломался и перестал
          корректно открываться. Если заранее позаботиться о резервном копировании ваших
          файлов - подобных проблем можно было бы избежать, сэкономив время и усилия на
          восстановление данных. Есть два варианта создания резервного копирования - на
          облачном хранилище или локально на вашем устройстве или сервере.
        </p>
        <Addition type="info">
          Если вы хотите быстро сохранить открытый проект под другим названием -
          воспользуйтесь комбинацией клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + S</mark>. Данная команда сохранит
          проект с тем же названием и добавит число в конце по возрастанию.
        </Addition>
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
        <ContentFilter
          macContent={
            <>
              <p>
                В <mark>macOS</mark> функция бэкапа файлов называется{" "}
                <mark className="app">Time Machine</mark>, которая создаёт снапшот вашей
                системы и файлов каждый час или по нажатию кнопки создания бэкапа.
              </p>
              <Addition type="warning">
                Для работы данной функции нужен внешний накопитель, желательно с объёмом
                от <mark>512 ГБ</mark> и более.
              </Addition>
              <ArticleMedia
                src="Gx76i28c150"
                type="youtube"
              />
            </>
          }
          windowsContent={
            <>
              <p>
                В <mark>Windows</mark> стандартная функция бэкапа файлов называется{" "}
                <mark className="app">История файлов</mark>, которая создаёт копии файлов
                на другую директорию. С помощью него вы можете восстановить удалённый файл
                или вернуть предыдущую версию файла в свойствах файла.
              </p>
              <Addition type="info">
                Для работы данной функции заранее укажите диск, на который вы планируете
                сохранять копии файлов в разделе{" "}
                <mark className="select">Смена диска</mark>.
              </Addition>
              <ArticleMedia
                src="xDFQEx9gylc"
                type="youtube"
              />
              <p>
                В настройках этой функции можно установить интервал сохранения от{" "}
                <mark>10 минут</mark> до <mark>одного раза в день</mark>. Также можно
                задать срок хранения от <mark>одного месяца</mark> до{" "}
                <mark>двух лет</mark>, по истечении которого система автоматически удалит
                старые резервные копии из указанной директории.
              </p>
              <Addition type="info">
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
                    <p>
                      На <mark>Windows 11</mark> - откройте проводник, выберите нужную
                      папку и нажмите на <mark className="key">ПКМ</mark>. Затем в
                      контекстном меню нажмите на{" "}
                      <mark className="select">Добавить в библиотеку</mark>. Вы можете
                      выбрать уже существующую библиотеку или создать новую.
                    </p>
                    <Addition type="warning">
                      Если у вас нет кнопки{" "}
                      <mark className="select">Добавить в библиотеку</mark> в контекстном
                      меню - включите их отображение в параметрах папок.{" "}
                      <a href="https://remontka.pro/manage-libraries-windows/">
                        Подробнее...
                      </a>
                    </Addition>
                  </li>
                </ul>
              </Addition>
            </>
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
        <ArticleMedia
          src="G4f9OH4IQE8"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="nest"
        tag="нест, unnest, вложенный таймлайн, вложенные клипы, прекомпоз"
        title="Что такое Nest, как их создать и распаковывать?"
      >
        <p>
          <mark>Nest</mark> - функция объединения нескольких клипов или слоев в одну
          секвенцию, которая затем может быть использована как единый элемент в таймлайне.
          Это бывает полезным для организации материала или применения эффектов к группе
          клипов одновременно.
        </p>
        <p>
          Для создания <mark>Nest</mark> нужно выделить нужные клипы, нажать на{" "}
          <mark className="key">ПКМ</mark> и нажать на кнопку{" "}
          <mark className="select">«Nest»</mark>. После этого откроется окно в которое вы
          можете вписать название новой секвенции.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/creating_nest.mp4"
          type="video"
        />
        <p>
          А чтобы распаковать <mark>Nest</mark> или же наложить на таймлайн
          &quot;распакованную&quot; секвенцию - найдите нужную секвенцию в окне{" "}
          <mark className="select">«Project»</mark>, отключите функцию{" "}
          <mark className="select">
            «Insert and overwrite sequences as nests or individual clips»
          </mark>{" "}
          и перетяните секвенцию прямо на таймлайн. Старый <mark>Nest</mark> можно удалить
          без всяких проблем.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/unnesting_nest.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="render-bar-colors"
        tag="полоса рендеринга, render bar color"
        title="Что означают красные, жёлтые и зелёные полосы вверху таймлайна?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="timeline-track-targeting"
        tag="выделение, вставка клипов"
        title="Для чего нужны A1 и V1 слева от клипов на таймлайне?"
      >
        <p>
          Вы, наверное, не раз замечали параметры слева от ваших клипов, но не всегда
          понимали, для чего они созданы. Это кнопки{" "}
          <mark className="select">«Source Patching»</mark> и{" "}
          <mark className="select">«Track Targeting»</mark>. Самые крайние левые{" "}
          <mark className="select">«V1»</mark> и <mark className="select">«A1»</mark>, или
          же <mark className="select">«Source Patching»</mark> отвечают за импорт футажей.
          Отключая либо <mark className="select">«A1»</mark> либо{" "}
          <mark className="select">«V1»</mark> - вы отключаете возможность импорта либо
          аудиодорожки, либо видеодорожки. Отключая или включая оба параметра - вы сможете
          импортировать и видео и аудиодорожку на таймлайн.
        </p>
        <ArticleMedia
          src="BOW2Fr7SKo0"
          type="youtube"
        />
        <p>
          А вот <mark className="select">«A1»</mark>, <mark className="select">«A2»</mark>
          , <mark className="select">«A3»</mark> и <mark className="select">«V1»</mark>,{" "}
          <mark className="select">«V2»</mark>, <mark className="select">«V3»</mark>, или
          же <mark className="select">«Track Targeting»</mark> отвечают за выделение
          клипов и вставку видео и аудиодорожек на таймлайн.
        </p>
        <ArticleMedia
          src="pzQnzaRm2OY"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="sequence-independent"
        title="Продублировал секвенцию на таймлайне, но копия зависит от оригинала. Как сделать Nest независимыми друг от друга?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="scale-vs-fit"
        title='Чем отличается "Scale to Frame Size" от "Fill Frame" и "Fit to Frame"?'
      >
        <p>
          Использование разных способов подгонки изображения под размер вашей секвенции
          может сказаться на качестве изображения.
        </p>
        <ul>
          <li>
            <p>
              <mark className="select">«Scale to Frame Size»</mark> изменяет разрешение
              клипа под размер вашей секвенции, при этом оставляет значение{" "}
              <mark className="select">«Scale»</mark> на 100% и меньше нагружает ресурсы
              ПК.
            </p>
            <Addition type="warning">
              Если вы уменьшите клип, записанный в <mark>4K</mark> под секвенцию{" "}
              <mark>1080p</mark> через{" "}
              <mark className="select">«Scale to Frame Size»</mark>, то вы заметите, что
              качество просядет. Также это касается и увеличения клипов.
            </Addition>
          </li>
          <li>
            <mark className="select">«Fill Frame»</mark> подгоняет значение{" "}
            <mark className="select">«Scale»</mark> под самую большую сторону вашей
            секвенции и клип не теряет в качестве.
          </li>
          <li>
            <mark className="select">«Fit to Frame»</mark> подгоняет размер клипа под
            ближайшую сторону вашей секвенции через значение{" "}
            <mark className="select">«Scale»</mark>.
          </li>
        </ul>
        <Addition type="info">
          В предыдущих версиях <mark className="app">Adobe Premiere Pro</mark> вместо{" "}
          <mark className="select">«Fit to Frame»</mark> была кнопка{" "}
          <mark className="select">«Set to Frame Size»</mark>.
        </Addition>
        <ArticleMedia
          src="dKTWbkPfcmE"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="missing-obsolete-effects"
        tag="вернуть устаревшие эффекты, восстановить встроенные пресеты"
        title="Куда пропали эффекты из папки Obsolete в новых версиях программы?"
      >
        <p>
          Adobe признала встроенные эффекты, пресеты и переходы, которые были в папке{" "}
          <mark className="path">Obsolete</mark> слишком устаревшими и решила их удалить в
          новых версиях. Проекты, которые были созданы в более старых версиях{" "}
          <mark className="app">Adobe Premiere</mark>, могут работать спокойно, но
          применить новые эффекты из окна{" "}
          <mark className="select">«Effects & Presets»</mark> уже не получится.
        </p>
        <div className="flexible-links">
          <a href="https://community.adobe.com/t5/premiere-pro-beta-discussions/now-released-obsolete-effects-transitions-and-presets-removed/td-p/14703879">
            Решение об удалении устаревших эффектов и чем их заменить в дальнейшем
          </a>
        </div>
        <p>
          К счастью, эти эффекты всё ещё можно восстановить в новых версиях{" "}
          <mark className="app">Adobe Premiere</mark>. Для этого нужно скачать{" "}
          <a
            download
            href="files/Obsolete Effects.prfpset"
          >
            нужный пресет
          </a>{" "}
          и импортировать его в <mark className="app">Adobe Premiere</mark> в соответствии
          с<a href="#how-to-install">инструкцией по установке дополнительного контента</a>
          .
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="restore-track"
        title="Как вернуть звуковую или видео дорожку на таймлайне?"
      >
        <p>
          Для возвращения недостающей части у вашего исходника вам нужно выделить клип, а
          затем нажать на кнопку <mark className="key">F</mark>. Затем уберите{" "}
          <mark className="select">«Source patching for inserts and overwrites»</mark> в
          той дорожке, в котором вы потеряли видео или аудио. После этого нажмите на{" "}
          <mark className="key">.</mark> или <mark className="key">Ю</mark>.
        </p>
        <ArticleMedia
          caption="Видео из Telegram-канала @nano_tutorials"
          src="legacy/premierepro/restore_missing.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-no-audio"
        title="Почему у меня отсутствует звук при проигрывании предпросмотра?"
      >
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники или
          внешний монитор с колонками, то вполне вероятно что у вас сбились настройки
          звука. Вам следует проверить настройки аудиовыхода в настройках программы, для
          этого нужно перейти в{" "}
          <mark className="select">«Edit» → «Preferences» → «Audio Hardware»</mark> и
          указать в параметре <mark className="select">«Default Output»</mark> нужный вам
          аудиовыход.
        </p>
        <ArticleMedia
          caption="Изменяем настройки аудио"
          src="legacy/premierepro/set_audio_output.png"
          type="image"
        />
        <Addition type="info">
          Иногда в некоторых случаях необходимо будет в параметре{" "}
          <mark className="select">«Default Input»</mark> указать{" "}
          <mark className="select">«No Input»</mark>, так как иногда микрофоны, внезапно,
          могут мешать нормальному предпросмотру в{" "}
          <mark className="app">Adobe Premiere</mark>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-selection-follow-playhead"
        title="Как отключить выделение объекта на таймлайне при перемещении временной метки?"
      >
        <p>
          Функцию выделения клипа при перемещении временной метки можно отключить, убрав
          галочку с <mark className="select">«Select Follow Playhead»</mark> в{" "}
          <mark className="select">«Sequence»</mark>. Выделение клипа зависит от выбранных
          дорожек с помощью <mark>Track Targeting</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Выделение клипов зависит от выбранных дорожек с помощью{" "}
              <mark className="select">«Track Targeting»</mark>.
            </li>
            <li>
              Выделить текущий клип под плейхедом, если у вас выключен{" "}
              <mark className="select">«Select Follow Playhead»</mark> можно с помощью
              клавиши <mark className="key">D</mark>.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="timeline-preferences-missing"
        title="Куда пропала настройка Timeline в Preferences?"
      >
        <p>
          В настройках раздел <mark className="select">«Timeline»</mark> может
          отсутствовать на некоторых «народных» версиях{" "}
          <mark className="app">Adobe Premiere</mark> и его можно вернуть простым способом
          — входом в аккаунт <mark className="company">Adobe</mark>.
        </p>
        <Addition type="info">
          После входа в аккаунт Adobe псевдо-лицензия не слетит, не переживайте.
        </Addition>
        <p>
          Для входа в аккаунт перейдите в <mark className="select">«Help»</mark> и нажмите
          на <mark className="select">«Sign In»</mark>. Затем в появившемся окне проведите
          процедуру входа в аккаунт, а затем попробуйте открыть настройки снова и
          убедитесь в том, что там появился раздел{" "}
          <mark className="select">«Timeline»</mark>.
        </p>
      </DetailsSummary>
      <Addition type="info">
        Ответы на некоторые возникающие вопросы, связанные с интерфейсом, находятся в
        другом разделе -{" "}
        <a
          href="#interface"
          onClick={(event_) => {
            event_.preventDefault();

            const target = document.querySelector("#interface");

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
          Интерфейс
        </a>
        .
      </Addition>
    </div>
  );
};

export default PrFromNewbies;
