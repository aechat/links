import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import ContentSwitcher from "../../../components/features/ContentFilter";


const PRFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="для новичка, курсы, туториалы, только открыл премьер"
        title="Я первый раз установил и открыл программу, с чего бы мне начать обучение?"
      >
        <p>
          Если вы только начинаете свой путь в монтаже или никогда не использовали{" "}
          <mark className="app">Adobe Premiere Pro</mark> как основной инструмент и хотите
          разобраться в интерфейсе и его возможностях, то посмотрите плейлист{" "}
          <a href="https://www.youtube.com/watch?v=Wi-AalXwilg&list=PLcN7xY5E2wrmIlv6SNF2xacsryFtGIfXK&pp=iAQB">
            Азбука Adobe Premiere Pro
          </a>{" "}
          от{" "}
          <a href="https://www.youtube.com/channel/UCmLY17yagzLy6GRiI1nVBow">
            Ильи Зернова
          </a>
          .
        </p>
        <AdditionInfo>
          Курс был записан в <mark className="app">Adobe Premiere Pro</mark> версии{" "}
          <mark>2019</mark>. Некоторые функции могут чуть отличаться от вашей текущей
          версии программы.
        </AdditionInfo>
        <YouTubeVideo
          caption="Азбука Adobe Premiere Pro"
          link="Wi-AalXwilg"
        />
        <p>
          Также при желании вы можете отдельно посмотреть курс по работе с вкладкой{" "}
          <mark className="plugin">Lumetri Color</mark> в{" "}
          <mark className="app">Adobe Premiere Pro</mark> для цветокоррекции различных
          футажей и исходников от{" "}
          <a href="https://www.youtube.com/@Bolharov">Романа Болгарова</a>.
        </p>
        <YouTubeVideo
          caption="Цветокоррекция в Lumetri"
          link="xqRnW1T_pNk"
        />
        <p>
          Если вы уже уверенно монтируете в{" "}
          <mark className="app">Adobe Premiere Pro</mark>, и хотите узнать что-то новое,
          то рекомендую заглянуть на каналы ниже.
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
            textAlign: "center",
            fontSize: "0.95rem",
            fontWeight: "700",
          }}
        >
          Надеюсь, вы найдёте что-то полезное для себя. Удачи в ваших начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="сленг, жаргон, сокращения, словосочетания, говор"
        title="Какие популярные термины есть у пользователей программы?"
      >
        <p></p>
        {/* FIXME: написать!! по аналогии как с терминами в аефаке */}
      </DetailsSummary>
      <DetailsSummary
        tag="хоткеи, горячие клавиши, шорткаты, ускорение работы"
        title="А есть список популярных комбинаций клавиш?"
      >
        <p>
          Шорткаты могут помочь ускорить ваш рутинный процесс нахождения нужной функции
          программы, поэтому ниже приведены популярные у многих пользователей комбинации.
        </p>
        <AdditionWarning>
          Горячие клавиши могут меняться в зависимости от версии программы. Посмотреть
          клавиши, которые назначены у вас для определённого действия, вы можете с помощью
          окна настроек комбинаций клавиш, которая находится в{" "}
          <mark className="ui">Edit &gt; Keyboard Shortcuts</mark> и открывается с помощью{" "}
          <mark className="key">Ctrl + Alt + K</mark>. Более подробный список комбинаций
          клавиш вы можете прочесть{" "}
          <a href="https://helpx.adobe.com/premiere-pro/using/keyboard-shortcuts.html">
            на официальном сайте Adobe
          </a>
          .
        </AdditionWarning>
        <AdditionInfo>
          В таблице приведены комбинации для устройств на <mark>Windows</mark>. На{" "}
          <mark>macOS</mark> <mark className="key">Ctrl</mark> равен{" "}
          <mark className="key">Command</mark>, а <mark className="key">Alt</mark> равен{" "}
          <mark className="key">Option</mark>.
        </AdditionInfo>
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
              <td>Инструмент выделения</td>
              <td>
                <mark className="key">V</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент выделения клипов правее курсора (Track Select Forward Tool)
              </td>
              <td>
                <mark className="key">A</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент выделения клипов левее курсора (Track Select Backward Tool)
              </td>
              <td>
                <mark className="key">Shift + A</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент для подрезки начала и конца клипа, смещая остальные (Ripple
                Edit Tool)
              </td>
              <td>
                <mark className="key">B</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент изменения соотношения длины двух клипов (Rolling Edit Tool)
              </td>
              <td>
                <mark className="key">N</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент удлинения или укорачивания клипа (Rate Stretch Tool)</td>
              <td>
                <mark className="key">R</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент резки клипов (Razor Tool)</td>
              <td>
                <mark className="key">C</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент смещения клипа, оставляя его по точке начала и конца на месте
                (Slip Tool)
              </td>
              <td>
                <mark className="key">Y</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент смещения клипа, оставляя его на месте в таймлайне (Slide Tool)
              </td>
              <td>
                <mark className="key">U</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент пера для рисования масок или создания фигур (Pen Tool)</td>
              <td>
                <mark className="key">P</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент руки для перемещения некоторых частей интерфейса (Hand Tool)
              </td>
              <td>
                <mark className="key">H</mark>
              </td>
            </tr>
            <tr>
              <td>
                Инструмент лупы для увеличения или уменьшения предпросмотра (Zoom Tool)
              </td>
              <td>
                <mark className="key">Z</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент создания и редактирования текста (Type Tool)</td>
              <td>
                <mark className="key">T</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Работа с файлами и проектом (file)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Создание нового проекта</td>
              <td>
                <mark className="key">Ctrl + Alt + N</mark>
              </td>
            </tr>
            <tr>
              <td>Создание новой секвенции</td>
              <td>
                <mark className="key">Ctrl + N</mark>
              </td>
            </tr>
            <tr>
              <td>
                Создание новой папки в окне <mark className="ui">Project</mark>
              </td>
              <td>
                <mark className="key">Ctrl + /</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть диалог открытия проекта</td>
              <td>
                <mark className="key">Ctrl + O</mark>
              </td>
            </tr>
            <tr>
              <td>Закрыть то или иное окно интерфейса</td>
              <td>
                <mark className="key">Ctrl + W</mark>
              </td>
            </tr>
            <tr>
              <td>Закрыть текущий проект, открытый в таймлайне</td>
              <td>
                <mark className="key">Ctrl + Shift + W</mark>
              </td>
            </tr>
            <tr>
              <td>Сохранить текущий проект</td>
              <td>
                <mark className="key">Ctrl + S</mark>
              </td>
            </tr>
            <tr>
              <td>Сохранить проект в другом месте</td>
              <td>
                <mark className="key">Ctrl + Shift + S</mark>
              </td>
            </tr>
            <tr>
              <td>Сохранить текущий проект как копию</td>
              <td>
                <mark className="key">Ctrl + Alt + S</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Import</mark> для импорта различных
                файлов в ваш проект
              </td>
              <td>
                <mark className="key">Ctrl + I</mark>
              </td>
            </tr>
            <tr>
              <td>
                Переход во вкладку <mark className="ui">Export</mark> для экспорта
                секвенции
              </td>
              <td>
                <mark className="key">Ctrl + M</mark>
              </td>
            </tr>
            <tr>
              <td>
                Отправить секвенцию в <mark className="app">Adobe Media Encoder</mark> для
                дальнейшего экспорта
              </td>
              <td>
                <mark className="key">Alt + Shift + M</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть <mark className="ui">Media File Properties</mark> для выделенного
                файла
              </td>
              <td>
                <mark className="key">Ctrl + Shift + H</mark>
              </td>
            </tr>
            <tr>
              <td>
                Закрыть <mark className="app">Adobe Premiere Pro</mark>
              </td>
              <td>
                <mark className="key">Ctrl + Q</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>edit</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Отменить какое-либо действие</td>
              <td>
                <mark className="key">Ctrl + Z</mark>
              </td>
            </tr>
            <tr>
              <td>Вернуть ранее отменённое действие</td>
              <td>
                <mark className="key">Ctrl + Shift + Z</mark>
              </td>
            </tr>
            <tr>
              <td>Вырезать выделенное и поместить в буфер обмена.</td>
              <td>
                <mark className="key">Ctrl + X</mark>
              </td>
            </tr>
            <tr>
              <td>Скопировать выделенное в буфер обмена</td>
              <td>
                <mark className="key">Ctrl + C</mark>
              </td>
            </tr>
            <tr>
              <td>Вставить из буфера обмена</td>
              <td>
                <mark className="key">Ctrl + V</mark>
              </td>
            </tr>
            <tr>
              <td>Вставить из буфера обмена вставкой</td>
              <td>
                <mark className="key">Ctrl + Shift + V</mark>
              </td>
            </tr>
            <tr>
              <td>
                Вставить скопированные аттрибуты клипа, например положение или масштаб
              </td>
              <td>
                <mark className="key">Ctrl + Alt + V</mark>
              </td>
            </tr>
            <tr>
              <td>Удалить выделенный объект</td>
              <td>
                <mark className="key">Delete</mark>
              </td>
            </tr>
            <tr>
              <td>
                Удалить выделенный клип и сдвинуть остальные на его место (Ripple Delete)
              </td>
              <td>
                <mark className="key">Shift + Delete</mark>
              </td>
            </tr>
            <tr>
              <td>
                Продублировать выделенные объекты в окне{" "}
                <mark className="ui">Project</mark>
              </td>
              <td>
                <mark className="key">Ctrl + Shift + /</mark>
              </td>
            </tr>
            <tr>
              <td>Выделить всё</td>
              <td>
                <mark className="key">Ctrl + A</mark>
              </td>
            </tr>
            <tr>
              <td>Убрать выделение</td>
              <td>
                <mark className="key">Ctrl + Shift + A</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно поиска
                <AdditionInfo>
                  Работа поиска зависит от выделенного окна{" "}
                  <mark className="ui">Project</mark> или{" "}
                  <mark className="ui">Timeline</mark>
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Ctrl + F</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть файл в сторонней программе (Edit Original)
                <AdditionInfo>
                  Открытие выделенного файла в сторонней программе зависит от настроенных
                  зависимостей для каждого расширения в настройках вашей системы. Это
                  может быть видеопроигрыватель или графический редактор.
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Ctrl + E</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть окно настроек комбинаций клавиш</td>
              <td>
                <mark className="key">Ctrl + Alt + K</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>клипы (clip)</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Создать субклип (Make Subclip)</td>
              <td>
                <mark className="key">Ctrl + U</mark>
              </td>
            </tr>
            <tr>
              <td>Открыть окно модификации выделенного клипа (Modify Clip)</td>
              <td>
                <mark className="key">Shift + G</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть диалог нормализации громкости выделенного клипа (Audio Gain)
              </td>
              <td>
                <mark className="key">G</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно редактирования скорости и его интерполяции для выделенного
                клипа (Clip Speed / Duration)
              </td>
              <td>
                <mark className="key">Ctrl + R</mark>
              </td>
            </tr>
            <tr>
              <td>
                Вставить клип из <mark className="ui">Source Monitor</mark> или{" "}
                <mark className="ui">Project</mark>
              </td>
              <td>
                <mark className="key">, (Б)</mark>
              </td>
            </tr>
            <tr>
              <td>
                Перезаписать клип на таймлайне тем, что открыто в{" "}
                <mark className="ui">Source Monitor</mark> или выделено в{" "}
                <mark className="ui">Project</mark>
              </td>
              <td>
                <mark className="key">. (Ю)</mark>
              </td>
            </tr>
            <tr>
              <td>Связать нужные клипы друг с другом (Link)</td>
              <td>
                <mark className="key">Ctrl + L</mark>
              </td>
            </tr>
            <tr>
              <td>Сгруппировать клипы (Group)</td>
              <td>
                <mark className="key">Ctrl + G</mark>
              </td>
            </tr>
            <tr>
              <td>Разгруппировать клипы (Ungroup)</td>
              <td>
                <mark className="key">Ctrl + Shift + G</mark>
              </td>
            </tr>
          </tbody>
        </table>
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
                Начать пререндер части секвенции, где имеется красная полоска (Render
                Effects In to Out)
                <AdditionInfo>
                  При желании вы можете настроить комбинацию клавиш, например на{" "}
                  <mark className="key">Shift + Enter</mark>, для действия{" "}
                  <mark>Render In to Out</mark>, который делает пререндер части секвенции,
                  где имеется жёлтая и красная полоска
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Enter</mark>
              </td>
            </tr>
            <tr>
              <td>(Match Frame)</td>
              <td>
                <mark className="key">F</mark>
              </td>
            </tr>
            <tr>
              <td>(Reverse Match Frame)</td>
              <td>
                <mark className="key">Shift + R</mark>
              </td>
            </tr>
            <tr>
              <td>extend selected edit to playhead</td>
              <td>
                <mark className="key">E</mark>
              </td>
            </tr>
            <tr>
              <td>Применить стандартный переход</td>
              <td>
                <mark className="key">Ctrl + D</mark>
              </td>
            </tr>
            <tr>
              <td>Применить стандартный аудиопереход</td>
              <td>
                <mark className="key">Ctrl + Shift + D</mark>
              </td>
            </tr>
            <tr>
              <td>
                Применить стандартные переходы для выделенных клипов
                <AdditionInfo>
                  Изменить переход по умолчанию можно нажатием{" "}
                  <mark className="key">ПКМ</mark> по нужному переходу в окне{" "}
                  <mark className="ui">Effects</mark>
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">Shift + D</mark>
              </td>
            </tr>
            <tr>
              <td>Уменьшить масштабирование таймлайна</td>
              <td>
                <mark className="key">-</mark>
              </td>
            </tr>
            <tr>
              <td>Увеличить масштабирование таймлайна</td>
              <td>
                <mark className="key">=</mark>
              </td>
            </tr>
            <tr>
              <td>Включить или выключить Snap</td>
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
              <td>Пометить начало рабочей области</td>
              <td>
                <mark className="key">I</mark>
              </td>
            </tr>
            <tr>
              <td>Пометить конец рабочей области</td>
              <td>
                <mark className="key">O</mark>
              </td>
            </tr>
            <tr>
              <td>
                Пометить рабочую область от начала и до конца вокруг выделенного клипа
              </td>
              <td>
                <mark className="key">X</mark>
              </td>
            </tr>
            <tr>
              <td>Пометить рабочую область в пределах выделенных клипов</td>
              <td>
                <mark className="key">/</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед в начало рабочей области</td>
              <td>
                <mark className="key">Shift + I</mark>
              </td>
            </tr>
            <tr>
              <td>Переместить плейхед в конец рабочей области</td>
              <td>
                <mark className="key">Shift + O</mark>
              </td>
            </tr>
            <tr>
              <td>Убрать выделение начала и конца рабочей области</td>
              <td>
                <mark className="key">Ctrl + Shift + X</mark>
              </td>
            </tr>
            <tr>
              <td>Добавить маркер</td>
              <td>
                <mark className="key">M</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к следующему маркеру от плейхеда</td>
              <td>
                <mark className="key">Shift + M</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти к предыдущему маркеру от плейхеда</td>
              <td>
                <mark className="key">Ctrl + Shift + M</mark>
              </td>
            </tr>
            <tr>
              <td>Удалить выделенные маркеры</td>
              <td>
                <mark className="key">Ctrl + Alt + M</mark>
                <AdditionWarning>
                  Дополнительно зажав <mark className="key">Shift</mark> вы удалите все
                  маркеры у секвенции.
                </AdditionWarning>
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
              <td>Создать новый слой с текстом (New Text Layer)</td>
              <td>
                <mark className="key">Ctrl + T</mark>
              </td>
            </tr>
            <tr>
              <td>Выделить следующий слой от плейхеда</td>
              <td>
                <mark className="key">Ctrl + Alt + ]</mark>
              </td>
            </tr>
            <tr>
              <td>Выделить предыдущий слой от плейхеда</td>
              <td>
                <mark className="key">Ctrl + Alt + [</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Работа с окном (Window)</Divider>
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
                Открыть окно <mark className="ui">Project</mark>
              </td>
              <td>
                <mark className="key">Shift + 1</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Source Monitor</mark>
              </td>
              <td>
                <mark className="key">Shift + 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Timeline</mark>
              </td>
              <td>
                <mark className="key">Shift + 3</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Program Monitor</mark>
              </td>
              <td>
                <mark className="key">Shift + 4</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Effect Controls</mark>
              </td>
              <td>
                <mark className="key">Shift + 5</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Audio Track Mixer</mark>
              </td>
              <td>
                <mark className="key">Shift + 6</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Effects</mark>
              </td>
              <td>
                <mark className="key">Shift + 7</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Media Browser</mark>
              </td>
              <td>
                <mark className="key">Shift + 8</mark>
              </td>
            </tr>
            <tr>
              <td>
                Открыть окно <mark className="ui">Audio Clip Mixer</mark>
              </td>
              <td>
                <mark className="key">Shift + 9</mark>
              </td>
            </tr>
            <tr>
              <td>Сбросить рабочее пространство до последнего сохранённого состояния</td>
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
              <td>добавить дорожку с Captions</td>
              <td>
                <mark className="key">Ctrl + Alt + A</mark>
              </td>
            </tr>
            <tr>
              <td>добавить новый сегмент субтитров в таймлайне</td>
              <td>
                <mark className="key">Ctrl + Alt + C</mark>
              </td>
            </tr>
            <tr>
              <td>сделать выравнивание текста по центру</td>
              <td>
                <mark className="key">Ctrl + Shift + C</mark>
              </td>
            </tr>
            <tr>
              <td>Начать экспорт текущего кадра</td>
              <td>
                <mark className="key">Ctrl + Shift + E</mark>
              </td>
            </tr>
            <tr>
              <td>Разрезать клип после плейхеда</td>
              <td>
                <mark className="key">W</mark>
              </td>
            </tr>
            <tr>
              <td>Разрезать клип до плейхеда</td>
              <td>
                <mark className="key">Q</mark>
              </td>
            </tr>
            <tr>
              <td>Разрезать выделенный клип пополам по плейхеду</td>
              <td>Ctrl + K</td>
            </tr>
            <tr>
              <td>Разрезать все клипы пополам по плейхеду, кроме заблокированных</td>
              <td>Ctrl + Shift + K</td>
            </tr>
            <tr>
              <td>Extend Next Edit To Playhead</td>
              <td>
                <mark className="key">Shift + W</mark>
              </td>
            </tr>
            <tr>
              <td>Extend Previous Edit To Playhead</td>
              <td>
                <mark className="key">Shift + Q</mark>
              </td>
            </tr>
            <tr>
              <td>Trim Next Edit To Playhead</td>
              <td>
                <mark className="key">Ctrl + Alt + W</mark>
              </td>
            </tr>
            <tr>
              <td>Trim Previous Edit To Playhead</td>
              <td>
                <mark className="key">Ctrl + Alt + Q</mark>
              </td>
            </tr>
            <tr>
              <td>Раскрыть окно, под которым расположен курсор, на весь экран</td>
              <td>
                <mark className="key">`</mark>, <mark className="key">~</mark> или{" "}
                <mark className="key">Ё</mark>
              </td>
            </tr>
            <tr>
              <td>Проиграть предпросмотр в пределах рабочей области</td>
              <td>
                <mark className="key">Ctrl + Shift + Space</mark>
              </td>
            </tr>
            <tr>
              <td>Начать проигрывание предпросмотра</td>
              <td>
                <mark className="key">Space</mark>
              </td>
            </tr>
            <tr>
              <td>
                Выделить текущий клип под плейхедом, если у вас выключен{" "}
                <mark className="ui">Select Follow Playhead</mark>
              </td>
              <td>
                <mark className="key">D</mark>
              </td>
            </tr>
            <tr>
              <td>
                Проиграть предпросмотр назад (Shuttle Left)
                <AdditionInfo>
                  Многократное нажатие ускоряет проигрывание, с модификатором{" "}
                  <mark className="key">Shift</mark>, наоборот, замедляет.
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">J</mark>
              </td>
            </tr>
            <tr>
              <td>
                Проиграть предпросмотр вперёд (Shuttle Right)
                <AdditionInfo>
                  Многократное нажатие ускореяет проигрывание, с модификатором{" "}
                  <mark className="key">Shift</mark>, наоборот, замедляет.
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">L</mark>
              </td>
            </tr>
            <tr>
              <td>Остановить Shuttle</td>
              <td>
                <mark className="key">K</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на предыдущий кадр</td>
              <td>
                <mark className="key">Стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>Перейти на следующий кадр</td>
              <td>
                <mark className="key">Стрелка вправо</mark>
              </td>
            </tr>
          </tbody>
        </table>
        {/* FIXME: по возможности дописать ещё */}
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
            применять на них стили из <mark className="file">MOGRT</mark> файлов.
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
        {/* TODO: дописать!!1! */}
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        tag="что нового, фишки, обновления, апдейты, патчноуты"
        title="Где я могу узнать о нововведениях в обновлениях программы?"
      >
        <p>
          Обычно на сайте <mark>Adobe</mark> в день выхода публичной стабильной версии
          выкладываются основные нововведения. Это сделано для того, чтобы каждый прохожий
          не спрашивал из каждого угла <mark className="quote">А что обновилось то?</mark>
          . Ещё время от времени <mark>Adobe</mark> выкладывает на сайт список выявленных
          неполадок и старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/premiere-pro/using/whats-new.html">
            Что нового в Adobe Premiere Pro последних выпусков
          </a>
          <a href="https://helpx.adobe.com/premiere-pro/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/premiere-pro/kb/known-issues.html">
            Выявленные неполадки в Adobe Premiere Pro
          </a>
        </div>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">Adobe Premiere Pro</mark>, а также сторонние плагины,
          чтобы исключить возможные проблемы при дальнейшем использовании программы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="изменить язык, смена языка, установка английской версии"
        title="Почему мне с каждого угла советуют поставить английский язык программы и как это сделать?"
      >
        <p>
          В <mark className="app">Adobe Premiere Pro</mark>, аналогично как и с{" "}
          <mark className="app">Adobe After Effects</mark>, вы можете наткнуться на
          различные баги и приколы при использовании сторонних шаблонов,{" "}
          <mark className="file">MOGRT</mark> или пресетов. Создатели подобного рода
          контента не рассчитывают на то, что вы будете использовать другую локализацию{" "}
          <mark className="app">Adobe Premiere Pro</mark>, отличную от английского.
        </p>
        <p>
          Для быстрой смены языка программы вам нужно открыть консоль с помощью комбинации
          клавиш <mark className="key">Ctrl + F12</mark> и переключиться на режим
          отображения <mark className="ui">Debug Database View</mark>.
        </p>
        <ImageFigure
          caption="Включение вида Debug Database View"
          imgSrc="images/premierepro/console_debug-database-view.png"
          imgTitle="Включение вида Debug Database View"
          styleClass="figure_windows-dark"
        />
        <p>
          Затем в строке поиска нам нужно написать{" "}
          <mark className="copy">ApplicationLanguage</mark> или найти этот параметр
          вручную. В строке с одноимённым параметром пишем{" "}
          <mark className="copy">en_US</mark>.
        </p>
        <ImageFigure
          caption="Установка английского языка в консоли"
          imgSrc="images/premierepro/set_language_console.png"
          imgTitle="Установка английского языка в консоли"
          styleClass="figure_windows-dark"
        />
        <p>
          После ввода значения - перезагрузите программу и вы сможете насладиться
          англоязычным интерфейсом программы.
        </p>
        <AdditionInfo>
          Чтобы вернуть язык, который был установлен по умолчанию - достаточно убрать
          значение из этого параметра и снова перезапустить{" "}
          <mark className="app">Adobe Premiere Pro</mark>.
        </AdditionInfo>
        <AdditionDanger>
          После таких способов смены языка названия стандартных пресетов и рабочих
          областей могут остаться на русском языке. Их можно будет переименовать вручную
          или удалить, а затем поставить поверх дистрибутив{" "}
          <mark className="app">Adobe Premiere Pro</mark> с указанием английского языка в
          установщике. Ну или просто переустановите программу сразу на английском языке.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary
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
                от <mark>512 ГБ</mark> и более.
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
          <mark className="ui">Nest</mark>. После этого откроется окно в которое вы можете
          вписать название новой секвенции.
        </p>
        <VideoFigure
          caption="Adobe Premiere Pro"
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/creating_nest.mp4"
        />
        <p>
          А чтобы распаковать <mark>Nest</mark> или же наложить на таймлайн
          &quot;распакованную&quot; секвенцию - найдите нужную секвенцию в окне{" "}
          <mark className="ui">Project</mark>, отключите функцию{" "}
          <mark className="ui">
            Insert and overwrite sequences as nests or individual clips
          </mark>{" "}
          и перетяните секвенцию прямо на таймлайн. Старый <mark>Nest</mark> можно удалить
          без всяких проблем.
        </p>
        <VideoFigure
          caption="Adobe Premiere Pro"
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/unnesting_nest.mp4"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="выделение, вставка клипов"
        title="Для чего нужны A1 и V1 слева от клипов на таймлайне?"
      >
        <p>
          Вы, наверное, не раз замечали параметры слева от ваших клипов, но не всегда
          понимали, для чего они созданы. Это кнопки{" "}
          <mark className="ui">Source Patching</mark> и{" "}
          <mark className="ui">Track Targeting</mark>. Самые крайние левые{" "}
          <mark className="ui">V1</mark> и <mark className="ui">A1</mark>, или же{" "}
          <mark className="ui">Source Patching</mark> отвечают за импорт футажей. Отключая
          либо <mark className="ui">A1</mark> либо <mark className="ui">V1</mark> - вы
          отключаете возможность импорта либо аудиодорожки, либо видеодорожки. Отключая
          или включая оба параметра - вы сможете импортировать и видео и аудиодорожку на
          таймлайн.
        </p>
        <YouTubeVideo
          caption="How to add video and audio to the timeline in Adobe Premiere Pro"
          link="BOW2Fr7SKo0"
        />
        <p>
          А вот <mark className="ui">A1</mark>, <mark className="ui">A2</mark>,{" "}
          <mark className="ui">A3</mark> и <mark className="ui">V1</mark>,{" "}
          <mark className="ui">V2</mark>, <mark className="ui">V3</mark>, или же{" "}
          <mark className="ui">Track Targeting</mark> отвечают за выделение клипов и
          вставку видео и аудиодорожек на таймлайн.
        </p>
        <YouTubeVideo
          caption="Shortcuts for the timeline in Adobe Premiere Pro - track targeting"
          link="pzQnzaRm2OY"
        />
      </DetailsSummary>
      <DetailsSummary title="Продублировал секвенцию на таймлайне, но копия зависит от оригинала. Как сделать Nest независимыми друг от друга?">
        <p>{/* FIXME: опять новые пункты писать ну емае */}</p>
      </DetailsSummary>
      <DetailsSummary title='Чем отличается "Scale to Frame Size" от "Fill Frame" и "Fit to Frame"?'>
        <p>
          Использование разных способов подгонки изображения под размер вашей секвенции
          может сказаться на качестве изображения.
        </p>
        <ul>
          <li>
            <mark className="ui">Scale to Frame Size</mark> изменяет разрешение клипа под
            размер вашей секвенции, при этом оставляет значение{" "}
            <mark className="ui">Scale</mark> на 100% и меньше нагружает ресурсы ПК.
            <AdditionWarning>
              Если вы уменьшите клип, записанный в <mark>4K</mark> под секвенцию{" "}
              <mark>1080p</mark> через <mark className="ui">Scale to Frame Size</mark>, то
              вы заметите, что качество просядет. Также это касается и увеличения клипов.
            </AdditionWarning>
          </li>
          <li>
            <mark className="ui">Fill Frame</mark> подгоняет значение{" "}
            <mark className="ui">Scale</mark> под самую большую сторону вашей секвенции и
            клип не теряет в качестве.
          </li>
          <li>
            <mark className="ui">Fit to Frame</mark> подгоняет размер клипа под ближайшую
            сторону вашей секвенции через значение <mark className="ui">Scale</mark>.
          </li>
        </ul>
        <AdditionInfo>
          В старых версиях <mark className="app">Adobe Premiere Pro</mark> вместо{" "}
          <mark className="ui">Fit to Frame</mark> была кнопка{" "}
          <mark className="ui">Set to Frame Size</mark>.
        </AdditionInfo>
        <YouTubeVideo
          caption="Чем отличается Scale to Frame size от Set to Frame size?"
          link="dKTWbkPfcmE"
        />
      </DetailsSummary>
      <DetailsSummary
        tag="вернуть устаревшие эффекты, восстановить встроенные пресеты"
        title="Куда пропали эффекты из папки Obsolete в новых версиях программы?"
      >
        <p>
          Adobe признала встроенные эффекты, пресеты и переходы, которые были в папке{" "}
          <mark className="path">Obsolete</mark> слишком устаревшими и решила их удалить в
          новых версиях. Проекты, которые были созданы в более старых версиях{" "}
          <mark className="app">Adobe Premiere Pro</mark>, могут работать спокойно, но
          применить новые эффекты из окна <mark className="ui">Effects & Presets</mark>{" "}
          уже не получится.
        </p>
        <div className="flexible-links">
          <a href="https://community.adobe.com/t5/premiere-pro-beta-discussions/now-released-obsolete-effects-transitions-and-presets-removed/td-p/14703879">
            Решение об удалении устаревших эффектов и чем их заменить в дальнейшем
          </a>
        </div>
        <p>
          К счастью, эти эффекты всё ещё можно восстановить в новых версиях{" "}
          <mark className="app">Adobe Premiere Pro</mark>. Для этого нужно скачать{" "}
          <a
            download
            href="files/Obsolete Effects.prfpset"
          >
            нужный пресет
          </a>{" "}
          и импортировать его в <mark className="app">Adobe Premiere Pro</mark> в
          соответствии с{" "}
          <a href="#2.1">инструкцией по установке дополнительного контента</a>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вернуть звуковую или видео дорожку на таймлайн?">
        <p>
          Для возвращения недостающей части у вашего исходника вам нужно выделить клип, а
          затем нажать на кнопку <mark className="key">F</mark>. Затем уберите{" "}
          <mark className="ui">Source patching for inserts and overwrites</mark> в той
          дорожке, в котором вы потеряли видео или аудио. После этого нажмите на{" "}
          <mark className="key">.</mark> или <mark className="key">Ю</mark>.
        </p>
        <VideoFigure
          caption="Видео из Telegram-канала @nano_tutorials"
          styleClass="figure_macos-dark"
          videoSrc="images/premierepro/restore_missing.mp4"
        />
      </DetailsSummary>
      <DetailsSummary title="Хочу перевести голос в субтитры, но загрузка чего-то падает в бесконечность. Почему функция транскрибации не работает?">
        <p>
          На &quot;народных&quot; версиях <mark className="app">Adobe Premiere Pro</mark>{" "}
          загрузка языковых моделей для транскрибации речи в текст недоступна, поэтому их
          нужно устанавливать вручную.
        </p>
        <AdditionInfo>
          Языковые пакеты вы можете скачать в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> по
          хештегу <mark className="tag">#speechtotext</mark> или в канале{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> по поиску{" "}
          <mark className="tag">Speech To Text</mark>.
        </AdditionInfo>
        <AdditionDanger>
          Устанавливая языковой пакет - смотрите, для какой версии{" "}
          <mark className="app">Adobe Premiere Pro</mark> он предназначен! Версию{" "}
          <mark className="app">Adobe Premiere Pro</mark> вы можете узнать в{" "}
          <mark className="ui">Help &gt; About Adobe Premiere Pro</mark>. Если вы
          установите языковой пакет для другой версии, отличной от вашей - вы не сможете
          использовать функцию транскрибации речи в текст.
        </AdditionDanger>
        <p>
          После установки языкового пакета - создайте субтитры с помощью{" "}
          <mark className="ui">Generate static transcript</mark>.
        </p>
        <ImageFigure
          caption="Text"
          imgSrc="images/premierepro/text_generate_static_transcript.png"
          imgTitle="Начало генерации текста на основе речи"
          styleClass="figure_windows-dark"
        />
        <p>
          В открывшемся окне выберите язык, на котором говорит голос из аудио и нажмите на{" "}
          <mark className="ui">Transcribe</mark>.
        </p>
        <ImageFigure
          caption="Generate static transcript"
          imgSrc="images/premierepro/generate_transcribe_settings.png"
          imgTitle="Настройки генерации текста на основе речи"
          styleClass="figure_windows-dark"
        />
        <p>
          После этого подождите некоторое время и вы получите какую-никакую расшифровку
          текста для аудио. На основе этих данных вы можете создать субтитры, выбрав в
          трёх точках <mark className="ui">Create Captions</mark>, подредактировать их или
          перемещаться в тот промежуток времени, в котором диктор говорит определённую
          фразу.
        </p>
      </DetailsSummary>
      </DetailsSummary>
      <DetailsSummary title="Почему у меня отсутствует звук при проигрывании предпросмотра?">
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники или
          внешний монитор с колонками, то вполне вероятно что у вас сбились настройки
          звука. Вам следует проверить настройки аудиовыхода в настройках программы, для
          этого нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark> и указать
          в параметре <mark className="ui">Default Output</mark> нужный вам аудиовыход.
        </p>
        <ImageFigure
          caption="Preferences"
          imgSrc="images/premierepro/set_audio_output.png"
          imgTitle="Установка аудиовыхода"
          styleClass="figure_windows-dark"
        />
        <AdditionInfo>
          Иногда в некоторых случаях необходимо будет в параметре{" "}
          <mark className="ui">Default Input</mark> указать{" "}
          <mark className="ui">No Input</mark>, так как иногда микрофоны, внезапно, могут
          мешать нормальному предпросмотру в{" "}
          <mark className="app">Adobe Premiere Pro</mark>.
        </AdditionInfo>
        {/* TODO: дописать ещё возможные варианты */}
      </DetailsSummary>
      <DetailsSummary title="Как отключить выделение объекта на таймлайне при перемещении временной метки?">
        <p>
          Функцию выделения клипа при перемещении временной метки можно отключить, убрав
          галочку с <mark className="ui">Select Follow Playhead</mark> в{" "}
          <mark className="ui">Sequence</mark>. Выделение клипа зависит от выбранных
          дорожек с помощью <mark>Track Targeting</mark>.
        </p>
        {/* TODO: показать скриншот включения этой опции */}
        <AdditionInfo>
          <ul>
            <li>
              Выделение клипов зависит от выбранных дорожек с помощью{" "}
              <mark className="ui">Track Targeting</mark>.
            </li>
            <li>
              Выделить текущий клип под плейхедом, если у вас выключен{" "}
              <mark className="ui">Select Follow Playhead</mark> можно с помощью клавиши{" "}
              <mark className="key">D</mark>.
            </li>
          </ul>
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Куда пропала настройка Timeline в Preferences?">
        <p>
          В настройках раздел <mark className="ui">Timeline</mark> может отсутствовать на
          некоторых &quot;народных&quot; версиях{" "}
          <mark className="app">Adobe Premiere Pro</mark> и его можно вернуть простым
          способом - входом в аккаунт Adobe.
        </p>
        <AdditionInfo>
          После входа в аккаунт Adobe псевдо-лицензия не слетит, не переживайте.
        </AdditionInfo>
        <p>
          Для входа в аккаунт перейдите в <mark className="ui">Help</mark> и нажмите на{" "}
          <mark className="ui">Sign In</mark>. Затем в появившемся окне проведите
          процедуру входа в аккаунт, а затем попробуйте открыть настройки снова и
          убедитесь в том, что там появился раздел <mark className="ui">Timeline</mark>.
        </p>
      </DetailsSummary>
      <AdditionInfo>
        Ответы на некоторые возникающие вопросы, связанные с интерфейсом, находятся в
        другом разделе -{" "}
        <a
          href="#interface"
          onClick={(e) => {
            e.preventDefault();

            const target = document.getElementById("interface");

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
          Интерфейс
        </a>
        .
      </AdditionInfo>
    </div>
  );
};

export default PRFromNewbies;
