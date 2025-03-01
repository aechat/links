import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {VideoFigure} from "../../../components/ContentFigure";

const AEExprStart: React.FC = () => (
  <div className="faq-content">
    <GithubUpdateInfo filePath="src/pages/sections/aeexprfaq/Start.tsx" />
    <DetailsSummary title="Для чего вообще нужны выражения?">
      <p>
        <mark>Выражения</mark> или же <mark>expression</mark> - это некая сводка правил,
        согласно которому должно высчитываться то или иное значение. В{" "}
        <mark className="app">After Effects</mark> вычисления выражений происходит с
        помощью языка программирования <mark>JavaScript</mark>, но он здесь не такой же,
        как для браузеров.
      </p>
      <AdditionInfo>
        В старых версиях <mark className="app">After Effects</mark> использовался свой
        скриптовый язык - <mark>ExtendScript</mark>. Сейчас он считается устаревшим, но на
        него всё ещё можно перейти в настройках проекта. На этой странице будут
        затрагиваться примеры с использованием только <mark>JavaScript</mark> в настройках
        проекта.
      </AdditionInfo>
      <p>
        С помощью выражений вы можете задать случайное движение объекту, связать свойства
        того или иного параметра, вычислить значение согласно заданным условиям или просто
        отформатировать текст. Вариаций для использования выражений множество, но в
        некоторых случаях можно обойтись без них.{" "}
      </p>
      {/* TODO: написать!! */}
    </DetailsSummary>
    <DetailsSummary title="Как включить режим написания выражения для конкретного параметра?">
      <p>
        Для того, чтобы включить выражение для какого-нибудь параметра, просто нажмите на
        иконку секундомера с зажатым <mark className="key">Alt</mark>. После активации
        режима выражений для конкретного параметра вы сможете писать код внутри текстового
        поля.
      </p>
      <VideoFigure
        styleClass="figure_windows-dark"
        videoSrc="images/aftereffects/enable_expressions.mp4"
        caption="After Effects"
      />
    </DetailsSummary>
    <DetailsSummary title="Как отобразить результат выражения в графике скорости?">
      <p>
        Чтобы включить график скорости результата выражения вам нужно нажать на
        соответствующую иконку в атрибуте поля ввода выражений.
      </p>
      {/* TODO: написать!! */}
    </DetailsSummary>
    <DetailsSummary title="Как удалить выражения сразу в нескольких слоях?">
      <p>{/* FIXME: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Что можно посмотреть и почитать про выражения в After Effects?">
      <p>{/* FIXME: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Мне не нравится редактировать выражения внутри After Effects. Есть ли варианты редактирования в стороннем редакторе кода?">
      <p>
        Если вам не удобно писать по каким-то причинам выражение внутри самого{" "}
        <mark className="app">After Effects</mark>, то вы можете воспользоваться{" "}
        <mark className="app">VS Code</mark> для написания в нём выражений и отправки из
        него прямиком на выделенный параметр в <mark className="app">After Effects</mark>.
      </p>
      <p>
        Скачать <mark className="app">VS Code</mark> можно{" "}
        <a href="https://code.visualstudio.com/download">из официального сайта</a>.
      </p>
      <p>
        После установки данного редактора, нам нужно отправиться в список расширений.
        Открыть его можно с помощью комбинации клавиш{" "}
        <mark className="key">Ctrl + Shift + X</mark>. Оттуда нам нужно скачать несколько
        расширений:{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=AlexMunteanu.adobe-dev-utils">
          Adobe Development Utils
        </a>{" "}
        для отправки выражения прямиком в <mark className="app">After Effects</mark> и{" "}
        необязательное расширение{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=hennamann.jsx">
          ExtendScript
        </a>{" "}
        для подсветки синтаксиса старого движка <mark>ExtendScript</mark>.
      </p>
      <AdditionInfo>
        Первое расширение ставить нужно обязательно, если вы хотите прямиком из{" "}
        <mark className="app">VS Code</mark> отправлять выражение на выделенный параметр
        слоя в <mark className="app">After Effects</mark>, а второе расширение вы можете
        установить по вашему желанию.
      </AdditionInfo>
      {/* FIXME: написать!! */}
    </DetailsSummary>
    <DetailsSummary
      title="Можно ли использовать GPT и аналогичные чат-боты для генерации выражений?"
      tag="ии, искуственный интеллект, чатгпт, нейросети"
    >
      {/* TODO: показать примеры промптов и дать советы какие лучше модели юзать */}
      <p>
        Мнение по этому вопросу у всех будет разное. Моё мнение - и да, и нет.{" "}
        <mark>Нейросети</mark>, или же <mark>различные языковые модели (LLM)</mark> -
        достаточно хороший инструмент,{" "}
        <b>
          <u>но не панацея</u>
        </b>
        , для генерации и редактирования различных скриптов и выражений или ускорения
        различной рутины с текстом для <mark className="app">After Effects</mark>.
      </p>
      <AdditionWarning>
        Языковые модели очень плохо ладят с интерфейсом различных программ от Adobe,
        поэтому на них надеяться в повседневном использовании вне написания выражений не
        надо.
      </AdditionWarning>
      <p>
        Не смотря на то, что язык выражений в какой-то степени схож с стандартным
        JavaScript, который мы видим в браузерах, он имеет свои особенности. Прежде чем
        писать запрос различным чат-ботам для создания выражения - уточните, что вы
        собираетесь использовать код в <mark className="app">After Effects</mark> и
        приготовьтесь к тому, что вам нужно будет часто давать текст ошибки, чтобы его
        устранить.
      </p>
      <AdditionInfo>
        Если вы планируете использовать ссылки на какие-то параметры или контролеры -
        обязательно укажите в своём промпте об этом или накидайте черновой вариант того,
        что вы хотите видеть в качестве результата и попросите языковую модель исправить
        различные ошибки по синтаксису.
      </AdditionInfo>
    </DetailsSummary>
  </div>
);
export default AEExprStart;
