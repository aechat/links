import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {Divider} from "antd";

const PRFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/FromNewbies.tsx" />
      <DetailsSummary
        title="Первый раз установил Premiere Pro, с чего бы мне начать обучение?"
        tag="для новичка, первый раз, только открыл"
      >
        <p>
          Если вы только начинаете свой путь в монтаже или никогда не использовали{" "}
          <mark className="app">Premiere Pro</mark> как основной инструмент и хотите
          разобраться в интерфейсе и его возможностях, то посмотрите плейлист{" "}
          <a href="https://www.youtube.com/watch?v=Wi-AalXwilg&list=PLcN7xY5E2wrmIlv6SNF2xacsryFtGIfXK&pp=iAQB">
            Азбука Premiere Pro
          </a>{" "}
          от{" "}
          <a href="https://www.youtube.com/channel/UCmLY17yagzLy6GRiI1nVBow">
            Ильи Зернова
          </a>
          .
        </p>
        <AdditionInfo>
          Курс был записан в <mark className="app">Premiere Pro</mark> версии 2019.
          Некоторые функции могут чуть отличаться от вашей текущей версии программы.
        </AdditionInfo>
        <YouTubeVideo
          link="Wi-AalXwilg"
          caption="Азбука Premiere Pro"
        />
        <p>
          Также при желании вы можете отдельно посмотреть курс по работе с вкладкой{" "}
          <mark className="plugin">Lumetri Color</mark> в{" "}
          <mark className="app">Premiere Pro</mark> для цветокоррекции различных футажей и
          исходников от <a href="https://www.youtube.com/@Bolharov">Романа Болгарова</a>.
        </p>
        <YouTubeVideo
          link="xqRnW1T_pNk"
          caption="Цветокоррекция в Lumetri"
        />
        <p>
          Если вы уже уверенно монтируете в <mark className="app">Premiere Pro</mark>, и
          хотите узнать что-то новое, то рекомендую заглянуть на каналы ниже.
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
        <p style={{textAlign: "center", fontSize: "0.95rem", fontWeight: "700"}}>
          Надеюсь, вы найдёте что-то полезное для себя. Удачи в ваших начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Не понимаю термины от других пользователей Premiere Pro, проясните!"
        tag="сленг, жаргон, сокращения, словосочетания, говор"
      >
        <p></p>
        {/* FIXME: написать!! по аналогии как с терминами в аефаке */}
      </DetailsSummary>
      <DetailsSummary
        title="А есть список популярных комбинаций клавиш для работы в Premiere Pro?"
        tag="хоткеи, горячие клавиши, шорткаты, ускорение работы"
      >
        <p>
          Шорткаты могут помочь ускорить ваш рутинный процесс нахождения нужной функции
          программы, поэтому ниже приведены популярные у многих пользователей комбинации.
        </p>
        <AdditionWarning>
          Горячие клавиши могут меняться в зависимости от версии программы. То, что
          назначено у вас, вы можете увидеть с помощью окна настроек комбинаций клавиш,
          которая находится в <mark className="ui">Edit &gt; Keyboard Shortcuts</mark> и
          открывается с помощью <mark className="key">Ctrl + Alt + K</mark>. Более
          подробный список комбинаций клавиш вы можете прочесть{" "}
          <a href="https://helpx.adobe.com/ru/premiere-pro/using/keyboard-shortcuts.html">
            на официальном сайте Adobe
          </a>
          .
        </AdditionWarning>
        <AdditionInfo>
          В таблице приведены комбинации для устройств на Windows. На macOS{" "}
          <mark className="key">Ctrl</mark> равен <mark className="key">Command</mark>, а{" "}
          <mark className="key">Alt</mark> равен <mark className="key">Option</mark>.
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
              <td>Инструмент Track Select Backward Tool</td>
              <td>
                <mark className="key">Shift + A</mark>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            <mark className="key">Shift + A</mark>: инструмент Track Select Backward Tool.
          </li>
          <li>
            <mark className="key">A</mark>: инструмент Track Select Forward Tool.
          </li>
          <li>
            <mark className="key">B</mark>: инструмент ripple edit tool
          </li>
          <li>
            <mark className="key">N</mark>: инструмнт Rolling Edit Tool.
          </li>
          <li>
            <mark className="key">R</mark>: инструмент Rate Stretch Tool.
          </li>
          <li>
            <mark className="key">C</mark>: инструмент razor tool
          </li>
          <li>
            <mark className="key">Y</mark>: инструмент slip tool
          </li>
          <li>
            <mark className="key">U</mark>: инструмент slide tool
          </li>
          <li>
            <mark className="key">P</mark>: инструмент pen tool
          </li>
          <li>
            <mark className="key">H</mark>: инструмент руки, позволяет перемещать мышкой
            таймлайн и предпросмотр, а также некоторые элементы интерфейса.
          </li>
          <li>
            <mark className="key">Z</mark>: инструмент zoom tool
          </li>
          <li>
            <mark className="key">T</mark>: инструмент type tool
          </li>
        </ul>
        <Divider>Работа с файлами и проектом (file)</Divider>
        <ul>
          <li>
            <mark className="key">Ctrl + Alt + N</mark>: создать новый проект.
          </li>
          <li>
            <mark className="key">Ctrl + N</mark>: создать новую секвенцию.
          </li>
          <li>
            <mark className="key">Ctrl + /</mark>: создать новую папку в окне{" "}
            <mark className="ui">Project</mark>.
          </li>
          <li>
            <mark className="key">Ctrl + O</mark>: открыть файл проекта.
          </li>
          <li>
            <mark className="key">Ctrl + W</mark>: закрыть окно интерфейса.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + W</mark>: закрыть проект из таймлайна.
          </li>
          <li>
            <mark className="key">Ctrl + S</mark>: сохранить проект.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + S</mark>: сохранить проект как другой
            формат.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + S</mark>: сохранить проект как копию.
          </li>
          <li>
            <mark className="key">Ctrl + I</mark>: открыть окно{" "}
            <mark className="ui">Import</mark> для импорта различных файлов в ваш проект.
          </li>
          <li>
            <mark className="key">Ctrl + M</mark>: перейти во вкладку{" "}
            <mark className="ui">Export</mark> для экспорта секвенции.
          </li>
          <li>
            <mark className="key">Alt + Shift + M</mark>: отправить секвенцию в{" "}
            <mark className="app">Adobe Media Encoder</mark> для дальнейшего экспорта.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + H</mark>: открыть окно свойств для
            выделенного файла.
          </li>
          <li>
            <mark className="key">Ctrl + Q</mark>: закрыть{" "}
            <mark className="app">Premiere Pro</mark>.
          </li>
          <Divider>edit</Divider>
          <li>
            <mark className="key">Ctrl + Z</mark>: отменить какое-либо действие.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + Z</mark>: вернуть ранее отменённое
            действие.
          </li>
          <li>
            <mark className="key">Ctrl + X</mark>: вырезать выделенное и расположить к
            себе в буфер обмена.
          </li>
          <li>
            <mark className="key">Ctrl + C</mark>: скопировать выделенное в буфер обмена.
          </li>
          <li>
            <mark className="key">Ctrl + V</mark>: вставить из буфера обмена.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + V</mark>: вставить из буфера обмена
            вставкой.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + V</mark>: вставить скопированные аттрибуты
            клипа.
          </li>
          <li>
            <mark className="key">Delete</mark>: удалить выделенное.
          </li>
          <li>
            <mark className="key">Shift + Delete</mark>: ripple delete
          </li>
          <li>
            <mark className="key">Ctrl + Shift + /</mark>: продублировать выделенное.
          </li>
          <li>
            <mark className="key">Ctrl + A</mark>: выделить все.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + A</mark>: убрать выделение.
          </li>
          <li>
            <mark className="key">Ctrl + F</mark>: найти.
          </li>
          <li>
            <mark className="key">Ctrl + E</mark>: открыть файл Edit original
          </li>
          <li>
            <mark className="key">Ctrl + Alt + K</mark>: открыть окно настроек комбинаций
            клавиш.
          </li>
          <Divider>клипы (clip)</Divider>
          <li>
            <mark className="key">Ctrl + U</mark>: создать субклип make subclip
          </li>
          <li>
            <mark className="key">Shift + G</mark>: открыть окно модификации аудиоканалов
            у выделенного клипа.
          </li>
          <li>
            <mark className="key">G</mark>: audio gain
          </li>
          <li>
            <mark className="key">Ctrl + R</mark>: открыть окно редактирования скорости и
            его интерполяции для выделенного клипа.
          </li>
          <li>
            <mark className="key">, (Б)</mark>: вставить клип.
          </li>
          <li>
            <mark className="key">. (Ю)</mark>: перезаписать клип на таймлайне.
          </li>
          <li>
            <mark className="key">Ctrl + L</mark>: связать нужные клипы друг с другом.
          </li>
          <li>
            <mark className="key">Ctrl + G</mark>: сгрупиировать клипы
          </li>
          <li>
            <mark className="key">Ctrl + Shift + G</mark>: разгрупировать клипы
          </li>
          <Divider>секвенция (sequence)</Divider>
          <li>
            <mark className="key">Enter</mark>: начать пререндер части секвенции, где
            имеется красная полоска.
          </li>
          <li>
            <mark className="key">F</mark>: match frame
          </li>
          <li>
            <mark className="key">Shift + R</mark>: reverse match frame
          </li>
          <li>
            <mark className="key">E</mark>: extend selected edit to playhead
          </li>
          <li>
            <mark className="key">Ctrl + D</mark>: применить видеопереход
          </li>
          <li>
            <mark className="key">Ctrl + Shift + D</mark>: применить аудиопереход.
          </li>
          <li>
            <mark className="key">Shift + D</mark>: Apply Default Transitions to
            Selections
          </li>
          <li>
            <mark className="key">; (Ж)</mark>: lift
          </li>
          <li>
            <mark className="key">&apos; (Э)</mark>: Extract
          </li>
          <li>
            <mark className="key">-</mark>: уменьшить таймлайн
          </li>
          <li>
            <mark className="key">=</mark>: увеличить таймлайн
          </li>
          <li>
            <mark className="key">Shift + ; (Ж)</mark>: перейти к следующему gap в
            секвенции.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + ; (Ж)</mark>: перейти к предыдущему gap в
            секвенции.
          </li>
          <li>
            <mark className="key">S</mark>: включить или выключить магнит в таймлайне
          </li>
          <Divider>маркеры</Divider>
          <li>
            <mark className="key">I</mark>: пометить начало рабочей области.
          </li>
          <li>
            <mark className="key">O</mark>: пометить конец рабочей области.
          </li>
          <li>
            <mark className="key">X</mark>: пометить рабочую область от начала и до конца
            выделенного клипа.
          </li>
          <li>
            <mark className="key">/</mark>: пометить рабочую область в пределах выделенных
            клипов.
          </li>
          <li>
            <mark className="key">Shift + I</mark>: переместить плейхед в начало рабочей
            области.
          </li>
          <li>
            <mark className="key">Shift + O</mark>: переместить плейхед в конец рабочей
            области.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + X</mark>: убрать выделение начала и конца
            рабочей области.
          </li>
          <li>
            <mark className="key">M</mark>: добавить маркер.
          </li>
          <li>
            <mark className="key">Shift + M</mark>: перейти к следующему маркеру от
            плейхеда.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + M</mark>: перейти к предыдущему маркеру
            от плейхеда.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + M</mark>: удалить выделенные маркеры
            <AdditionWarning>
              Дополнительно зажав <mark className="key">Shift</mark> вы удалите все
              маркеры у секвенции.
            </AdditionWarning>
          </li>
          <Divider>графика (graphics and titles)</Divider>
          <li>
            <mark className="key">Ctrl + T</mark>: создать новый слой с текстом.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + R</mark>: создать новый слой с квадратом.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + E</mark>: создать новый слой с эллипсом.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + ]</mark>: выделить следующий слой от
            плейхеда.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + [</mark>: выделить предыдущий слой от
            плейхеда.
          </li>
          <Divider>window окна</Divider>
          <li>
            <mark className="key">Shift + 1</mark>: открыть окно{" "}
            <mark className="ui">Project</mark>.
          </li>
          <li>
            <mark className="key">Shift + 2</mark>: открыть окно{" "}
            <mark className="ui">Source Monitor</mark>
          </li>
          <li>
            <mark className="key">Shift + 3</mark>: открыть окно{" "}
            <mark className="ui">Timeline</mark>.
          </li>
          <li>
            <mark className="key">Shift + 4</mark>: открыть окно{" "}
            <mark className="ui">Program Monitor</mark>.
          </li>
          <li>
            <mark className="key">Shift + 5</mark>: открыть окно{" "}
            <mark className="ui">Effect Controls</mark>.
          </li>
          <li>
            <mark className="key">Shift + 6</mark>: открыть окно{" "}
            <mark className="ui">Audio Track Mixer</mark>.
          </li>
          <li>
            <mark className="key">Shift + 7</mark>: открыть окно{" "}
            <mark className="ui">Effects</mark>.
          </li>
          <li>
            <mark className="key">Shift + 8</mark>: открыть окно{" "}
            <mark className="ui">Media Browser</mark>.
          </li>
          <li>
            <mark className="key">Shift + 9</mark>:{" "}
            <mark className="ui">Audio Clip Mixer</mark>.
          </li>
          <li>
            <mark className="key">Alt + Shift + 0</mark>: сбросить рабочее пространство до
            последнего сохранённого состояния.
            <AdditionInfo>
              Чтобы сохранить ваше рабочее пространство, нужно...
              {/* FIXME: */}
            </AdditionInfo>
          </li>
          <li>
            <mark className="key">Ctrl + Alt + A</mark>: добавить дорожку с Captions.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + C</mark>: добавить новый сегмент субтитров
            в таймлайне.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + C</mark>: сделать выравнивание текста по
            центру.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + E</mark>: начать экспорт текущего кадра.
          </li>
          <li>
            <mark className="key">W</mark>: разрезать клип после плейхеда.
          </li>
          <li>
            <mark className="key">Q</mark>: разрезать клип до плейхеда.
          </li>
          <li>
            <mark className="key">Shift + W</mark>: extend next edit to playhead
          </li>
          <li>
            <mark className="key">Shift + Q</mark>: extend previous edit to playhead.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + W</mark>: trim next edit to playhead
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Q</mark>: trim previous edit to playhead
          </li>
          <li>
            <mark className="key">`</mark>, <mark className="key">~</mark> или{" "}
            <mark className="key">Ё</mark>: раскрыть окно, под которым расположен курсор,
            на весь экран.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + Space</mark>: проиграть предпросмотр в
            пределах рабочей области.
          </li>
          <li>
            <mark className="key">Space</mark>: начать проигрывание предпросмотра.
          </li>
          <li>
            <mark className="key">D</mark>: выделить текущий клип под плейхедом.
          </li>
          <li>
            <mark className="key">J</mark>: проиграть предпросмотр назад. shuttle left
            <AdditionInfo>
              Многократное нажатие ускореяет проигрывание, с модификатором{" "}
              <mark className="key">Shift</mark>, наоборот, замедляет.
            </AdditionInfo>
          </li>
          <li>
            <mark className="key">L</mark>: проиграть предпросмотр вперёд. shuttle right
            <AdditionInfo>
              Многократное нажатие ускореяет проигрывание, с модификатором{" "}
              <mark className="key">Shift</mark>, наоборот, замедляет.
            </AdditionInfo>
          </li>
          <li>
            <mark className="key">K</mark>: остановить shuttle
          </li>
          <li>
            <mark className="key">Стрелка влево</mark>
          </li>
          : перейти на предыдущий кадр.
          <li>
            <mark className="key">Стрелка вправо</mark>: перейти на следующий кадр.
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
        </ul>
        {/* FIXME: по возможности дописать ещё и переверстать под таблицу */}
      </DetailsSummary>
      <DetailsSummary
        title="Где я могу узнать об нововведениях в обновлениях Premiere Pro?"
        tag="что нового, фишки, обновления, апдейт"
      >
        <p>
          Обычно на сайте Adobe в день выхода публичной стабильной версии выкладываются
          основные нововведения. Это сделано для того, чтобы каждый прохожий не спрашивал
          из каждого угла <mark>&quot;А что обновилось то?&quot;</mark>. Ещё время от
          времени Adobe выкладывает на сайт список выявленных неполадок и старается
          приложить к ним временное решение.
        </p>
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
        <p>
          Мы советуем время от времени обновлять <mark className="app">Premiere Pro</mark>
          , а также сторонние плагины, чтобы исключить возможные проблемы при дальнейшем
          использовании программы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Почему мне с каждого угла советуют поставить английский язык программы и как это сделать?"
        tag="изменить язык, смена языка, установка английской версии"
      >
        <p>
          В <mark className="app">Premiere Pro</mark>, аналогично как и с{" "}
          <mark className="app">After Effects</mark>, вы можете наткнуться на различные
          баги и приколы при использовании сторонних шаблонов,{" "}
          <mark className="file">.mogrt</mark> или пресетов. Создатели подобного рода
          контента не рассчитывают на то, что вы будете использовать другую локализацию{" "}
          <mark className="app">Premiere Pro</mark>, отличную от английского.
        </p>
        <p>
          Для быстрой смены языка программы вам нужно открыть консоль с помощью комбинации
          клавиш <mark className="key">Ctrl + F12</mark> и переключиться на режим
          отображения <mark className="ui">Debug Database View</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/console_debug-database-view.png"
          imgTitle="Включение вида Debug Database View"
          caption="Включение вида Debug Database View"
        />
        <p>
          Затем в строке поиска нам нужно написать{" "}
          <mark className="copy">ApplicationLanguage</mark> или найти этот пункт вручную.
          В строке с одноимённым параметром пишем <mark className="copy">en_US</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/set_language_console.png"
          imgTitle="Установка английского языка в консоли"
          caption="Установка английского языка в консоли"
        />
        <p>
          После ввода значения - перезагрузите программу и вы сможете насладиться
          англоязычным интерфейсом программы.
        </p>{" "}
        <AdditionInfo>
          Чтобы вернуть язык, который был установлен по умолчанию - достаточно убрать
          значение из этого параметра и снова перезапустить{" "}
          <mark className="app">Premiere Pro</mark>.
        </AdditionInfo>
        <AdditionDanger>
          После таких способов смены языка названия стандартных пресетов и рабочих
          областей могут остаться на русском языке. Их можно будет переименовать вручную
          или удалить, а затем поставить поверх дистрибутив{" "}
          <mark className="app">Premiere Pro</mark> с указанием английского языка в
          установщике. Ну или просто переустановите программу сразу на английском языке.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary
        title="Что такое Nest, как их создать и распаковывать?"
        tag="нест, unnest, вложенный таймлайн, вложенные клипы, прекомпоз"
      >
        <p>
          <mark>Nest</mark> - функция объединения нескольких клипов или слоев в одну
          секвенцию, которая затем может быть использована как единый элемент в таймлайне.
          Это бывает полезным для организации материала или применения эффектов к группе
          клипов одновременно.
        </p>
        <p>
          Для создания <mark>Nest</mark> нужно выделить нужные клипы, нажать на{" "}
          <mark className="key">ПКМ</mark> и выбрать пункт{" "}
          <mark className="ui">Nest</mark>. После этого откроется окно в которое вы можете
          вписать название новой секвенции.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/creating_nest.mp4"
          caption="Premiere Pro"
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
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/unnesting_nest.mp4"
          caption="Premiere Pro"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Для чего нужны A1 и V1 слева от клипов на таймлайне?"
        tag="выделение, вставка клипов"
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
          или включая оба пункта - вы сможете импортировать и видео и аудиодорожку на
          таймлайн.
        </p>
        <YouTubeVideo
          link="BOW2Fr7SKo0"
          caption="How to add video and audio to the timeline in Premiere Pro"
        />
        <p>
          А вот <mark className="ui">A1</mark>, <mark className="ui">A2</mark>,{" "}
          <mark className="ui">A3</mark> и <mark className="ui">V1</mark>,{" "}
          <mark className="ui">V2</mark>, <mark className="ui">V3</mark>, или же{" "}
          <mark className="ui">Track Targeting</mark> отвечают за выделение клипов и
          вставку видео и аудиодорожек на таймлайн.
        </p>
        <YouTubeVideo
          link="pzQnzaRm2OY"
          caption="Shortcuts for the timeline in Premiere Pro - track targeting"
        />
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
          В старых версиях <mark className="app">Premiere Pro</mark> вместо{" "}
          <mark className="ui">Fit to Frame</mark> была кнопка{" "}
          <mark className="ui">Set to Frame Size</mark>.
        </AdditionInfo>
        <YouTubeVideo
          link="dKTWbkPfcmE"
          caption="Чем отличается Scale to Frame size от Set to Frame size?"
        />
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
          styleClass="figure_macos-dark"
          videoSrc="images/premierepro/restore_missing.mp4"
          caption="Видео из Telegram-канала @nano_tutorials"
        />
      </DetailsSummary>
      <DetailsSummary title="Хочу перевести голос в субтитры, но загрузка падает в бесконечность. Почему функция транскрибации не работает?">
        <p>
          На &quot;народных&quot; версиях <mark className="app">Premiere Pro</mark>{" "}
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
          <mark className="app">Premiere Pro</mark> он предназначен! Версию{" "}
          <mark className="app">Premiere Pro</mark> вы можете узнать в{" "}
          <mark className="ui">Help &gt; About Premiere Pro</mark>. Если вы установите
          языковой пакет для другой версии, отличной от вашей - вы не сможете использовать
          функцию транскрибации речи в текст.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary title="Почему у меня отсутствует звук при проигрывании предпросмотра?">
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники или
          внешний монитор с колонками, то вполне вероятно что у вас сбились настройки
          звука. Вам следует проверить настройки аудиовыхода в настройках программы, для
          этого нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark> и указать
          в пункте <mark className="ui">Default Output</mark> нужный вам аудиовыход.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/set_audio_output.png"
          imgTitle="Установка аудиовыхода"
          caption="Preferences"
        />
        <AdditionInfo>
          Иногда в некоторых случаях необходимо будет в пункте{" "}
          <mark className="ui">Default Input</mark> указать{" "}
          <mark className="ui">No Input</mark>, так как иногда микрофоны, внезапно, могут
          мешать нормальному предпросмотру в <mark className="app">Premiere Pro</mark>.
        </AdditionInfo>
        {/* TODO: дописать ещё возможные варианты */}
      </DetailsSummary>
    </div>
  );
};
export default PRFromNewbies;
