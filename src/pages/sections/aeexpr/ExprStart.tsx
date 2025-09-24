import React from "react";

import {ContentFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import {Divider} from "antd";

import {useExternalLinks} from "../../../hooks/useExternalLinks";

const AEExprStart: React.FC = () => {
  useExternalLinks();

  return (
    <div className="faq-content">
      <DetailsSummary title="Для чего нужны выражения и в каких случаях их используют?">
        <p>
          <mark className="word">Выражения</mark>,{" "}
          <mark className="word">экспрешены</mark> или{" "}
          <mark className="word">expressions</mark> — полезная функция в{" "}
          <mark className="app">Adobe After Effects</mark>, с помощью которой можно задать
          анимацию или трансформацию свойств через <mark>JavaScript</mark> или{" "}
          <mark>ExtendScript (устаревший)</mark>. Проще говоря, это короткий фрагмент
          кода, «прикреплённый» к конкретному свойству слоя: он вычисляется на каждом
          кадре и подставляет нужное значение вместо множества ключей. В отличие от
          скриптов формата <mark className="file">JSX</mark> и{" "}
          <mark className="file">JSXBIN</mark>, которые управляют всем проектом, выражения
          работают именно с выбранным свойством. Например, если вы хотите, чтобы яркость
          изображения плавно мерцала, достаточно прописать выражение{" "}
          <mark className="code">wiggle(ЗначениеЧастоты, ЗначениеАмплитуды)</mark>— и{" "}
          <mark className="app">Adobe After Effects</mark> сам будет менять значение
          яркости по заданной формуле.
        </p>
        <p>
          Отчасти синтаксис <mark>JavaScript</mark>, используемый в{" "}
          <mark className="app">Adobe After Effects</mark>, похож на синтаксис, который вы
          могли видеть в браузерных скриптах. Однако есть различия в обращении к
          свойствам, циклах и поддержке некоторых функций. Очевидно, что{" "}
          <mark className="code">console.log(&quot;Hello, aeexprfaq!&quot;)</mark> в{" "}
          выражениях работать не будет.
        </p>
        {/* Помимо выражений, для <mark className="app">Adobe After Effects</mark> можно
          писать скрипты форматов <mark className="file">JSX</mark> и{" "}
          <mark className="file">JSXBIN</mark>. Однако принцип их работы немного отличается:
          скрипт управляет приложением и выполняет цепочку действий (например, создаёт слои,
          меняет порядок, правит текст), а выражение каждый кадр вычисляет значение
          конкретного свойства. На этой странице рассматриваются именно выражения, а случаи
          со скриптами разбираться не будут. */}
        <Divider>Как включить режим написания выражений?</Divider>
        <p>
          Чтобы включить режим работы и написания выражения для свойства слоя в{" "}
          <mark className="app">Adobe After Effects</mark>, достаточно кликнуть по иконке
          секундомера с зажатой клавишей <mark className="key">Alt</mark>. После этого
          откроется поле для ввода кода выражения.
        </p>
        <ContentFigure
          caption="Включение режима написания выражений для Source Text"
          src="images/aftereffects/enable_expression_property.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          Вы также можете включить режим отображения графика скорости или значений,
          который отображает текущее значение или скорость вашего выражения, с помощью
          соответствующей кнопки.
        </p>
        {/* TODO: приложить скриншот */}
        <p>Чтобы временно отключить выражение, нажмите на...</p>
        {/* TODO: приложить скриншот */}
      </DetailsSummary>
      <DetailsSummary title="С чего бы начать обучение написанию выражений?">
        <p>
          <mark className="word">Выражения</mark> требуют от пользователя{" "}
          <mark className="app">Adobe After Effects</mark> уверенного владения программой
          и готовности немного разбираться в коде.{" "}
          {/* Нужны ли базовые знания программирования для составления выражений? */}
        </p>
        <p>
          Есть ресурсы с подборкой уже готовых выражений для практического применения.
        </p>
        <div className="flexible-links">
          <a href="https://vk.com/ae_exp">AEExpressions в VK</a>
        </div>
      </DetailsSummary>
      <DetailsSummary title="Можно ли использовать различные LLM-модели для генерации выражений, например с помощью ChatGPT?">
        <p>И да, и нет.</p>
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Где можно редактировать код вне Adobe After Effects?">
        <p>
          Иногда бывают случаи, когда вам не хочется использовать{" "}
          <mark className="app">Adobe After Effects</mark> из-за неудобного редактора
          выражений или из-за отсутствия возможности применять сохранённые выражения.
        </p>
        <p>
          Для этого прекрасно подойдет <mark className="app">Visual Studio Code</mark> из
          которого вы можете отправлять код выражения на выделенный слой с помощью
          стороннего расширения.
        </p>
        {/* FIXME:  */}
      </DetailsSummary>
    </div>
  );
};

export default AEExprStart;
