import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";

const PRInterface: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Interface.tsx" />
      <DetailsSummary title="Как сделать двойной язык интерфейса?">
        <p>
          Если вы не хотите кардинально менять язык программы, то вы можете установить
          &quot;двойной язык&quot; интерфейса. Для этого откройте консоль с помощью
          комбинации клавиш <mark className="key">Ctrl + F12</mark> и переключитесь на
          режим отображения <mark className="ui">Debug Database View</mark>. Далее найдите
          пункты <mark className="ui">ApplicationLanguage</mark> и{" "}
          <mark className="ui">ApplicationLanguageBilingual</mark> и укажите значения{" "}
          <mark className="copy">ru_RU</mark> и <mark className="copy">true</mark>{" "}
          соответственно. После этого перезагрузите программу и теперь во многих пунктах
          интерфейса у вас будет русский язык и в скобках будет эквивалент на английском
          языке.
        </p>
        <ImageFigure
          caption="Premiere Pro"
          imgSrc="images/premierepro/set_double_language.png"
          imgTitle="Установка двойного языка"
          styleClass="figure_windows-dark"
        />
        <AdditionDanger>
          Не рекомендуется использовать двойной язык на постоянной основе, так как
          основной язык программы останется русским, а соответственно баги русской
          локализации <mark className="app">Premiere Pro</mark> никуда не денутся от вас.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary title="Куда пропало окно Essential Graphics?">
        <p>
          В <mark className="app">Premiere Pro</mark> версий 2025 и новее панель{" "}
          <mark className="ui">Essential Graphics</mark> убрали и перенесли часть
          функционала в новое окно <mark className="ui">Graphics Templates</mark>. Открыть
          его можно в контекстном меню <mark className="ui">Window</mark>.
        </p>
        <p>
          Из нового окна <mark className="ui">Graphics Templates</mark> вы до сих пор
          можете импортировать <mark className="file">.mogrt</mark> файлы прямиком в ваш
          проект и редактировать их в новом окне <mark className="ui">Properties</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title='Куда пропала кнопка "Set to Frame Size"?'>
        <p>
          В <mark className="app">Premiere Pro</mark> версии 2025{" "}
          <mark className="ui">Set to Frame Size</mark> заменили на{" "}
          <mark className="ui">Fit to Frame</mark>. Данная функция увеличивает значение{" "}
          <mark className="ui">Scale</mark> до тех пор, пока не упрётся в ближайшую
          сторону по высоте или ширине вашей секвенции.
        </p>
        <p>
          Вместе с этим обновлением добавили новую функцию{" "}
          <mark className="ui">Fill Frame</mark>, работающий также через{" "}
          <mark className="ui">Scale</mark>, но подгоняет значение под самую большую
          сторону вашей секвенции.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить вид отсчёта времени на таймлайне?">
        <p>
          По умолчанию в <mark className="app">Premiere Pro</mark> текущее время
          отображается в формате <mark>ЧЧ:ММ:СС:Кадр</mark>, но иногда хочется поменять
          вариант отображения на что-то другое.
        </p>
        <p>
          Для изменения формата отображения текущего времени, нажмите на{" "}
          <mark className="key">ПКМ</mark> по отображению текущего времени и выберите
          нужный вам тип вывода.
        </p>
        {/* TODO: приложить скриншот */}
        <p>
          Если вы хотите передвинуть временную метку меньше чем на кадр, чтобы подрезать
          аудио, то вам нужно включить режим отображения аудио-времени. Для этого нажмите
          на три полоски в заголовке окна с таймлайном и нажмите на
          <mark className="ui">Show Audio Units</mark>. Убрать можно аналогичным образом.
        </p>
        {/* TODO: приложить скриншот */}
      </DetailsSummary>
      <DetailsSummary
        tag="панель эффектов, фх консоль, экскалибур"
        title="Есть ли аналог FX Console для Premiere Pro?"
      >
        <p>
          Да, есть, и называется{" "}
          <a href="https://knightsoftheeditingtable.com/excalibur">Excalibur</a>. С
          помощью него можно применять различные эффекты, пресеты и переходы с помощью
          всплывающего меню, а также выполнять некоторые команды.
        </p>
        <ImageFigure
          caption="Premiere Pro"
          imgSrc="https://images.squarespace-cdn.com/content/v1/5d090703bfcf6300017faaa8/1605797292871-IKNJ3QIJPGK2TFMMBIIY/web_01_fx.gif?format=750w"
          imgTitle="Демонстрация работы Excalibur"
          styleClass="figure_macos-light"
        />
        <AdditionInfo>
          По умолчанию для открытия всплывающего окна указана комбинация клавиш{" "}
          <mark className="key">Alt + Space</mark>. Комбинацию клавиш можно поменять в
          настройках плагина.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Пропала визуализация аудиодорожек на таймлайне, как их вернуть?">
        <p>
          Это довольно частый и неприятный баг, возникающий при использовании{" "}
          <mark className="app">Premiere Pro</mark>. Обычно это лечится очисткой кэша{" "}
          <mark className="file">.peak</mark> файлов.
        </p>
        <p>
          Для очистки кэша и файлов предпросмотра перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media Cache</mark> и нажмите на{" "}
          <mark className="ui">Delete</mark> возле пункта{" "}
          <mark className="ui">Remove Media Cache Files</mark>. Или очистите кэш вручную в{" "}
          <mark className="path">%Temp%</mark> и папке проекта.
        </p>
        <p>
          После очистки кэша предпросмотр аудио-файлов должен появиться автоматически.
          Если это не происходит - попробуйте принудительно отрендерить кэш с помощью{" "}
          <mark className="ui">Sequence &gt; Render Audio</mark>.
        </p>
        {/* TODO: приложить скриншот */}
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
          некоторых &quot;народных&quot; версиях <mark className="app">Premiere Pro</mark>{" "}
          и его можно вернуть простым способом - входом в аккаунт Adobe.
        </p>
        <AdditionInfo>
          После входа в аккаунт Adobe псевдо-лицензия не слетит, не переживайте.
        </AdditionInfo>
        <p>
          Для входа в аккаунт перейдите в <mark className="ui">Help</mark> и выберите
          пункт <mark className="ui">Sign In</mark>. Затем в появившемся окне проведите
          процедуру входа в аккаунт, а затем попробуйте открыть настройки снова и
          убедитесь в том, что там появился раздел <mark className="ui">Timeline</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса программы?">
        <AdditionDanger>
          Для <mark className="app">Premiere Pro</mark> версий 25.X данная инструкция
          неактуальна, после включения пункта в консоли - в настройках ничего не будет.
        </AdditionDanger>
        <p>
          Вы, наверное, не раз натыкались на различные скриншоты, где у пользователей
          изменён цветовой акцент в интерфейсе программы. В версиях от 2017 до 2024 можно
          включить возможность изменения акцента через консоль. Для этого нажмите на
          комбинацию клавиш <mark className="key">Ctrl + F12</mark>. Затем введите команду
          ниже в консоль в режиме <mark className="ui">Console View</mark> и нажмите на{" "}
          <mark className="key">Enter</mark>.
        </p>
        <code>debug.set Enable_Theme_Colorizing=true</code>
        <AdditionInfo>
          Режимы отображения консоли можно изменить нажав на три полоски в заголовке окна.
          Также этот пункт можно найти и в режиме отображения{" "}
          <mark className="ui">Debug Database View</mark>.
        </AdditionInfo>
        <ImageFigure
          caption="Console"
          imgSrc="images/premierepro/console_theme_colorizing.png"
          imgTitle="Включение возможности изменения акцента интерфейса"
          styleClass="figure_windows-dark"
        />
        <p>
          Далее, после включения возможности изменять цвет, перейдите в{" "}
          <mark className="app">Edit &gt; Preferences &gt; Appearance</mark> и...
        </p>
        {/* TODO: показать пункт и скриншот в настройках */}
        <p>
          В открывшейся цветовой палитре вы можете указать любой цвет, какой захотите.
          Желательно выбрать тот цвет, который будет хорошо выделяться на фоне остального
          интерфейса.
        </p>
        <AdditionWarning>
          Не рекомендую ставить тёмные, а также слишком насыщенные оттенки, ибо вы можете
          плохо различать некоторые элементы интерфейса.
        </AdditionWarning>
        {/* TODO: показать цветовую палитру при настройке */}
      </DetailsSummary>
    </div>
  );
};

export default PRInterface;
