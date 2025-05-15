import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {VideoFigure} from "../../../components/ContentFigure";

const AEExprStart: React.FC = () => (
  <div className="faq-content">
    <GithubUpdateInfo filePath="src/pages/sections/aeexprfaq/Start.tsx" />
    <DetailsSummary title="Для чего нужны выражения и в каких случаях их используют?">
      <p>
        <mark className="word">Выражения</mark>, <mark className="word">экспрешены</mark>{" "}
        или <mark className="word">expressions</mark> - полезная функция в{" "}
        <mark className="app">Adobe After Effects</mark>, с помощью которой можно задать
        анимацию или трансформацию свойств через <mark>JavaScript</mark> или{" "}
        <mark>ExtendScript (устаревший)</mark>. В отличие от скриптов формата{" "}
        <mark className="file">.jsx</mark> и <mark className="file">.jsxbin</mark>,
        которые управляют всем проектом, выражения работают с конкретным свойством.
        Например, если вы хотите, чтобы яркость изображения плавно мерцала, то вам
        достаточно прописать выражение{" "}
        <mark className="code">wiggle(ЗначениеЧастоты, ЗначениеАмплитуды)</mark>, и{" "}
        <mark className="app">Adobe After Effects</mark> сам будет менять значение яркости
        по заданной формуле.
      </p>
      <p>
        Отчасти синтаксис <mark>JavaScript</mark>, используемый в{" "}
        <mark className="app">Adobe After Effects</mark> похож с синтаксисом, который вы
        могли видеть в браузерных скриптах. Однако у них есть различия по ссылкам на
        свойства, циклам и поддержке некоторых функций. Очевидно, что{" "}
        <mark className="code">console.log(&quot;Hello, aeexprfaq!&quot;)</mark> в{" "}
        <mark className="word">выражениях</mark> работать не будет.
      </p>
      <p>
        Также помимо <mark className="word">выражений</mark> - для{" "}
        <mark className="app">Adobe After Effects</mark> можно писать{" "}
        <mark className="word">скрипты</mark> форматов <mark className="file">.jsx</mark>{" "}
        и <mark className="file">.jsxbin</mark>, однако их принцип работы немного
        отличается от обычных выражений, которые применяются в определенному свойству слоя
        в композиции.
      </p>
    </DetailsSummary>
    <DetailsSummary title="Как включить режим выражения для нужного параметра слоя?">
      <p>
        Для включения режима работы и написания выражения для какого-нибудь свойства слоя
        в <mark className="app">Adobe After Effects</mark> - достаточно кликнуть по иконке
        секундомера с зажатым <mark className="key">Alt</mark>. После этого откроется поле
        для ввода кода <mark className="word">выражения</mark>.
      </p>
      <VideoFigure
        caption="Включение режима написания выражений для Source Text"
        styleClass="figure_windows-dark"
        videoSrc="images/aftereffects/enable_expression_property.mp4"
      />
      <p>
        Также вы можете включить режим отображения графика скорости или значений, которые
        возвращает ваше <mark className="word">выражение</mark> с помощью соответствующей
        кнопки.
      </p>
      <p>
        Для того, чтобы временно выключить <mark className="word">выражение</mark>,
        нажмите на...
      </p>
    </DetailsSummary>
    <DetailsSummary title="С чего я могу начать обучение по выражениям? Нужны ли базовые знания программирования для составления выражений?">
      <p>
        <mark className="word">Выражения</mark> требуют от пользователя{" "}
        <mark className="app">Adobe After Effects</mark> уверенного использования
        программой и небольшого желания вникать в код.
      </p>
      <div className="flexible-links">
        <a href="https://vk.com/ae_exp">AEExpressions в VK</a>
      </div>
    </DetailsSummary>
    <DetailsSummary title="Можно ли использовать различные LLM-модели для генерации выражений, например с помощью ChatGPT?">
      <p>{/* FIXME: */}</p>
    </DetailsSummary>
    <DetailsSummary title="Мне не нравится писать код внутри встроенного редактора в After Effects. Какие есть ещё варианты из редакторов?">
      <p>123</p>
    </DetailsSummary>
  </div>
);
export default AEExprStart;
