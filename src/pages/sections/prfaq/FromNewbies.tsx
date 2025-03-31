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
          Горячие клавиши могут меняться в зависимости от версии программы. Посмотреть
          клавиши, которые назначены у вас для определённого действия, вы можете с помощью
          окна настроек комбинаций клавиш, которая находится в{" "}
          <mark className="ui">Edit &gt; Keyboard Shortcuts</mark> и открывается с помощью{" "}
          <mark className="key">Ctrl + Alt + K</mark>. Более подробный список комбинаций
          клавиш вы можете прочесть{" "}
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
              <td>Инструмент Track Select Forward Tool</td>
              <td>
                <mark className="key">A</mark>
              </td>
            </tr>
            <tr>
              <td>Инструмент ripple edit tool</td>
              <td>
                <mark className="key">B</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент Rolling Edit Tool</td>
              <td>
                <mark className="key">N</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент Rate Stretch Tool</td>
              <td>
                {" "}
                <mark className="key">R</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент razor tool</td>
              <td>
                <mark className="key">C</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент slip tool</td>
              <td>
                <mark className="key">Y</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент slide tool</td>
              <td>
                <mark className="key">U</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент pen tool</td>
              <td>
                <mark className="key">P</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент руки (hand tool)</td>
              <td>
                <mark className="key">H</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент zoom tool</td>
              <td>
                <mark className="key">Z</mark>
              </td>
            </tr>
            <tr>
              <td>инструмент type tool</td>
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
              <td>создать новый проект.</td>
              <td>
                <mark className="key">Ctrl + Alt + N</mark>
              </td>
            </tr>
            <tr>
              <td>создать новую секвенцию.</td>
              <td>
                <mark className="key">Ctrl + N</mark>
              </td>
            </tr>
            <tr>
              <td>
                создать новую папку в окне <mark className="ui">Project</mark>.
              </td>
              <td>
                <mark className="key">Ctrl + /</mark>
              </td>
            </tr>
            <tr>
              <td>открыть файл проекта.</td>
              <td>
                <mark className="key">Ctrl + O</mark>
              </td>
            </tr>
            <tr>
              <td>закрыть окно интерфейса.</td>
              <td>
                <mark className="key">Ctrl + W</mark>
              </td>
            </tr>
            <tr>
              <td>закрыть проект из таймлайна.</td>
              <td>
                <mark className="key">Ctrl + Shift + W</mark>
              </td>
            </tr>
            <tr>
              <td>сохранить проект.</td>
              <td>
                <mark className="key">Ctrl + S</mark>
              </td>
            </tr>
            <tr>
              <td>сохранить проект как другой формат.</td>
              <td>
                <mark className="key">Ctrl + Shift + S</mark>
              </td>
            </tr>
            <tr>
              <td>сохранить проект как копию.</td>
              <td>
                <mark className="key">Ctrl + Alt + S</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Import</mark> для импорта различных
                файлов в ваш проект.
              </td>
              <td>
                <mark className="key">Ctrl + I</mark>
              </td>
            </tr>
            <tr>
              <td>
                перейти во вкладку <mark className="ui">Export</mark> для экспорта
                секвенции.
              </td>
              <td>
                <mark className="key">Ctrl + M</mark>
              </td>
            </tr>
            <tr>
              <td>
                отправить секвенцию в <mark className="app">Adobe Media Encoder</mark> для
                дальнейшего экспорта.
              </td>
              <td>
                <mark className="key">Alt + Shift + M</mark>
              </td>
            </tr>
            <tr>
              <td>открыть окно свойств для выделенного файла.</td>
              <td>
                <mark className="key">Ctrl + Shift + H</mark>
              </td>
            </tr>
            <tr>
              <td>
                закрыть <mark className="app">Premiere Pro</mark>.
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
              <td>отменить какое-либо действие.</td>
              <td>
                <mark className="key">Ctrl + Z</mark>
              </td>
            </tr>
            <tr>
              <td>вернуть ранее отменённое действие.</td>
              <td>
                <mark className="key">Ctrl + Shift + Z</mark>
              </td>
            </tr>
            <tr>
              <td>вырезать выделенное и расположить к себе в буфер обмена.</td>
              <td>
                <mark className="key">Ctrl + X</mark>
              </td>
            </tr>
            <tr>
              <td>скопировать выделенное в буфер обмена.</td>
              <td>
                <mark className="key">Ctrl + C</mark>
              </td>
            </tr>
            <tr>
              <td>вставить из буфера обмена.</td>
              <td>
                <mark className="key">Ctrl + V</mark>
              </td>
            </tr>
            <tr>
              <td>вставить из буфера обмена вставкой.</td>
              <td>
                <mark className="key">Ctrl + Shift + V</mark>
              </td>
            </tr>
            <tr>
              <td>вставить скопированные аттрибуты клипа.</td>
              <td>
                <mark className="key">Ctrl + Alt + V</mark>
              </td>
            </tr>
            <tr>
              <td>удалить выделенное.</td>
              <td>
                <mark className="key">Delete</mark>
              </td>
            </tr>
            <tr>
              <td>ripple delete</td>
              <td>
                <mark className="key">Shift + Delete</mark>
              </td>
            </tr>
            <tr>
              <td>продублировать выделенное.</td>
              <td>
                <mark className="key">Ctrl + Shift + /</mark>
              </td>
            </tr>
            <tr>
              <td>выделить все.</td>
              <td>
                <mark className="key">Ctrl + A</mark>
              </td>
            </tr>
            <tr>
              <td>убрать выделение.</td>
              <td>
                <mark className="key">Ctrl + Shift + A</mark>
              </td>
            </tr>
            <tr>
              <td>найти.</td>
              <td>
                <mark className="key">Ctrl + F</mark>
              </td>
            </tr>
            <tr>
              <td>открыть файл Edit original</td>
              <td>
                <mark className="key">Ctrl + E</mark>
              </td>
            </tr>
            <tr>
              <td>открыть окно настроек комбинаций клавиш.</td>
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
              <td>создать субклип make subclip</td>
              <td>
                <mark className="key">Ctrl + U</mark>
              </td>
            </tr>
            <tr>
              <td>открыть окно модификации аудиоканалов у выделенного клипа.</td>
              <td>
                <mark className="key">Shift + G</mark>
              </td>
            </tr>
            <tr>
              <td>audio gain</td>
              <td>
                <mark className="key">G</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно редактирования скорости и его интерполяции для выделенного
                клипа.
              </td>
              <td>
                <mark className="key">Ctrl + R</mark>
              </td>
            </tr>
            <tr>
              <td>вставить клип.</td>
              <td>
                <mark className="key">, (Б)</mark>
              </td>
            </tr>
            <tr>
              <td>перезаписать клип на таймлайне.</td>
              <td>
                <mark className="key">. (Ю)</mark>
              </td>
            </tr>
            <tr>
              <td>связать нужные клипы друг с другом.</td>
              <td>
                <mark className="key">Ctrl + L</mark>
              </td>
            </tr>
            <tr>
              <td>сгрупиировать клипы</td>
              <td>
                <mark className="key">Ctrl + G</mark>
              </td>
            </tr>
            <tr>
              <td>разгрупировать клипы</td>
              <td>
                <mark className="key">Ctrl + Shift + G</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>секвенция (sequence)</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>начать пререндер части секвенции, где имеется красная полоска.</td>
              <td>
                <mark className="key">Enter</mark>
              </td>
            </tr>
            <tr>
              <td>match frame</td>
              <td>
                <mark className="key">F</mark>
              </td>
            </tr>
            <tr>
              <td>reverse match frame</td>
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
              <td>применить видеопереход</td>
              <td>
                <mark className="key">Ctrl + D</mark>
              </td>
            </tr>
            <tr>
              <td>применить аудиопереход.</td>
              <td>
                <mark className="key">Ctrl + Shift + D</mark>
              </td>
            </tr>
            <tr>
              <td>Apply Default Transitions to Selections</td>
              <td>
                <mark className="key">Shift + D</mark>
              </td>
            </tr>
            <tr>
              <td>lift</td>
              <td>
                <mark className="key">; (Ж)</mark>
              </td>
            </tr>
            <tr>
              <td>Extract</td>
              <td>
                <mark className="key">&apos; (Э)</mark>
              </td>
            </tr>
            <tr>
              <td>уменьшить таймлайн</td>
              <td>
                <mark className="key">-</mark>
              </td>
            </tr>
            <tr>
              <td>увеличить таймлайн</td>
              <td>
                <mark className="key">=</mark>
              </td>
            </tr>
            <tr>
              <td>перейти к следующему gap в секвенции.</td>
              <td>
                <mark className="key">Shift + ; (Ж)</mark>
              </td>
            </tr>
            <tr>
              <td>перейти к предыдущему gap в секвенции.</td>
              <td>
                <mark className="key">Ctrl + Shift + ; (Ж)</mark>
              </td>
            </tr>
            <tr>
              <td>включить или выключить магнит в таймлайне</td>
              <td>
                <mark className="key">S</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>маркеры</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>пометить начало рабочей области</td>
              <td>
                <mark className="key">I</mark>
              </td>
            </tr>
            <tr>
              <td>пометить конец рабочей области</td>
              <td>
                <mark className="key">O</mark>
              </td>
            </tr>
            <tr>
              <td>пометить рабочую область от начала и до конца выделенного клипа</td>
              <td>
                <mark className="key">X</mark>
              </td>
            </tr>
            <tr>
              <td>пометить рабочую область в пределах выделенных клипов</td>
              <td>
                <mark className="key">/</mark>
              </td>
            </tr>
            <tr>
              <td>переместить плейхед в начало рабочей области</td>
              <td>
                <mark className="key">Shift + I</mark>
              </td>
            </tr>
            <tr>
              <td>переместить плейхед в конец рабочей области</td>
              <td>
                <mark className="key">Shift + O</mark>
              </td>
            </tr>
            <tr>
              <td>убрать выделение начала и конца рабочей области</td>
              <td>
                <mark className="key">Ctrl + Shift + X</mark>
              </td>
            </tr>
            <tr>
              <td>добавить маркер</td>
              <td>
                <mark className="key">M</mark>
              </td>
            </tr>
            <tr>
              <td>перейти к следующему маркеру от плейхеда</td>
              <td>
                <mark className="key">Shift + M</mark>
              </td>
            </tr>
            <tr>
              <td>перейти к предыдущему маркеру от плейхеда</td>
              <td>
                <mark className="key">Ctrl + Shift + M</mark>
              </td>
            </tr>
            <tr>
              <td>удалить выделенные маркеры</td>
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
        <Divider>графика (graphics and titles)</Divider>
        <table>
          <thead>
            <tr>
              <th>Действие</th>
              <th style={{minWidth: "40%"}}>Комбинация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>создать новый слой с текстом</td>
              <td>
                <mark className="key">Ctrl + T</mark>
              </td>
            </tr>
            <tr>
              <td>создать новый слой с квадратом</td>
              <td>
                <mark className="key">Ctrl + Alt + R</mark>
              </td>
            </tr>
            <tr>
              <td>создать новый слой с эллипсом</td>
              <td>
                <mark className="key">Ctrl + Alt + E</mark>
              </td>
            </tr>
            <tr>
              <td>выделить следующий слой от плейхеда</td>
              <td>
                <mark className="key">Ctrl + Alt + ]</mark>
              </td>
            </tr>
            <tr>
              <td>выделить предыдущий слой от плейхеда</td>
              <td>
                <mark className="key">Ctrl + Alt + [</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>window окна</Divider>
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
                открыть окно <mark className="ui">Project</mark>
              </td>
              <td>
                <mark className="key">Shift + 1</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Source Monitor</mark>
              </td>
              <td>
                <mark className="key">Shift + 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Timeline</mark>
              </td>
              <td>
                <mark className="key">Shift + 3</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Program Monitor</mark>
              </td>
              <td>
                <mark className="key">Shift + 4</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Effect Controls</mark>
              </td>
              <td>
                <mark className="key">Shift + 5</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Audio Track Mixer</mark>
              </td>
              <td>
                <mark className="key">Shift + 6</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Effects</mark>
              </td>
              <td>
                <mark className="key">Shift + 7</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Media Browser</mark>
              </td>
              <td>
                <mark className="key">Shift + 8</mark>
              </td>
            </tr>
            <tr>
              <td>
                открыть окно <mark className="ui">Audio Clip Mixer</mark>
              </td>
              <td>
                <mark className="key">Shift + 9</mark>
              </td>
            </tr>
            <tr>
              <td>сбросить рабочее пространство до последнего сохранённого состояния</td>
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
              <td>начать экспорт текущего кадра</td>
              <td>
                <mark className="key">Ctrl + Shift + E</mark>
              </td>
            </tr>
            <tr>
              <td>разрезать клип после плейхеда</td>
              <td>
                <mark className="key">W</mark>
              </td>
            </tr>
            <tr>
              <td>разрезать клип до плейхеда</td>
              <td>
                <mark className="key">Q</mark>
              </td>
            </tr>
            <tr>
              <td>extend next edit to playhead</td>
              <td>
                <mark className="key">Shift + W</mark>
              </td>
            </tr>
            <tr>
              <td>extend previous edit to playhead</td>
              <td>
                <mark className="key">Shift + Q</mark>
              </td>
            </tr>
            <tr>
              <td>trim next edit to playhead</td>
              <td>
                <mark className="key">Ctrl + Alt + W</mark>
              </td>
            </tr>
            <tr>
              <td>trim previous edit to playhead</td>
              <td>
                <mark className="key">Ctrl + Alt + Q</mark>
              </td>
            </tr>
            <tr>
              <td>раскрыть окно, под которым расположен курсор, на весь экран</td>
              <td>
                <mark className="key">`</mark>, <mark className="key">~</mark> или{" "}
                <mark className="key">Ё</mark>
              </td>
            </tr>
            <tr>
              <td>проиграть предпросмотр в пределах рабочей области</td>
              <td>
                <mark className="key">Ctrl + Shift + Space</mark>
              </td>
            </tr>
            <tr>
              <td>начать проигрывание предпросмотра</td>
              <td>
                <mark className="key">Space</mark>
              </td>
            </tr>
            <tr>
              <td>выделить текущий клип под плейхедом</td>
              <td>
                <mark className="key">D</mark>
              </td>
            </tr>
            <tr>
              <td>
                проиграть предпросмотр назад. shuttle left
                <AdditionInfo>
                  Многократное нажатие ускореяет проигрывание, с модификатором{" "}
                  <mark className="key">Shift</mark>, наоборот, замедляет.
                </AdditionInfo>
              </td>
              <td>
                <mark className="key">J</mark>
              </td>
            </tr>
            <tr>
              <td>
                проиграть предпросмотр вперёд. shuttle right
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
              <td>остановить shuttle</td>
              <td>
                <mark className="key">K</mark>
              </td>
            </tr>
            <tr>
              <td>перейти на предыдущий кадр</td>
              <td>
                <mark className="key">Стрелка влево</mark>
              </td>
            </tr>
            <tr>
              <td>перейти на следующий кадр</td>
              <td>
                <mark className="key">Стрелка вправо</mark>
              </td>
            </tr>
          </tbody>
        </table>
        {/* FIXME: по возможности дописать ещё */}
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
      <DetailsSummary
        title="Куда пропали эффекты из папки Obsolete в новых версиях программы?"
        tag="вернуть устаревшие эффекты, восстановить встроенные пресеты"
      >
        <p>
          Adobe признала встроенные эффекты, пресеты и переходы, которые были в папке{" "}
          <mark className="path">Obsolete</mark> слишком устаревшими и решила их удалить в
          новых версиях. Проекты, которые были созданы в более старых версиях{" "}
          <mark className="app">Premiere Pro</mark>, могут работать спокойно, но применить
          новые эффекты из окна <mark className="ui">Effects & Presets</mark> уже не
          получится.
        </p>
        <div className="flexible-links">
          <a href="https://community.adobe.com/t5/premiere-pro-beta-discussions/now-released-obsolete-effects-transitions-and-presets-removed/td-p/14703879">
            Решение об удалении устаревших эффектов и чем их заменить в дальнейшем
          </a>
        </div>
        <p>
          К счастью, эти эффекты всё ещё можно восстановить в новых версиях{" "}
          <mark className="app">Premiere Pro</mark>. Для этого нужно скачать{" "}
          <a
            href="files/Obsolete Effects.prfpset"
            download
          >
            нужный пресет
          </a>{" "}
          и импортировать его в <mark className="app">Premiere Pro</mark> в соответствии с{" "}
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
