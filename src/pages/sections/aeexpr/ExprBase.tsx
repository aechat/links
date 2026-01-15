import React from "react";

import CodeSnippet from "../../../components/content/CodeSnippet";
import DetailsSummary from "../../../components/content/DetailsSummary";

import {
  commentExample,
  formatExample,
  wiggleOnlyX,
  wiggleOnlyY,
  wiggleOnlyZ,
} from "./ExpressionExample";

const AeExprBase: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary title="Что такое переменные и функции?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Как обратиться к нужному атрибуту того или иного слоя?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Для чего нужны контроллеры, какие они бывают и как ими пользоваться?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Для чего нужны условия и циклы?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Для чего нужен index?">{/* FIXME: */}</DetailsSummary>
      <DetailsSummary title="Для чего нужен value?">{/* FIXME: */}</DetailsSummary>
      <DetailsSummary title="Для чего нужен time?">{/* FIXME: */}</DetailsSummary>
      <DetailsSummary title="Для чего нужны комментарии в коде выражений? Код внутри комментариев может выполняться?">
        {/* FIXME: */}
        <p>
          <mark className="word">Комментарии</mark> - необязательный участок кода, в
          которую можно записать различную полезную информацию для себя или для тех, кто
          планирует воспользоваться вашим выражением. Всё, что вы напишите внутри
          комментариев - будет игнорироваться и не будет выполняться.
        </p>
        <CodeSnippet>{commentExample}</CodeSnippet>
      </DetailsSummary>
      <DetailsSummary
        tag="wiggle по X Y Z, задать значение для одного элемента массива"
        title="Как применить действие выражения только для одной оси?"
      >
        <p>
          Бывают случаи, когда вам нужно применить значение какой-либо переменной или
          функции только к одному элементу в массиве, например в положении или якорной
          точке. Обычно у положения, если их не делить через{" "}
          <mark className="select">Separate Dimensions</mark>, есть два или три элемента в
          массиве. Они представлены как <mark>оси X и Y</mark>, если слой в двумерном
          пространстве, или <mark>оси X, Y и Z</mark>, если слой - в трёхмерном.
        </p>
        <p>
          Например, если вам нужно применить <mark className="code">wiggle()</mark> только
          для <mark>оси X, Y или Z</mark>, то вам достаточно написать одно из простых
          выражений в последнюю строку редактора, где вместо значений <mark>freq</mark> и{" "}
          <mark>amp</mark> вы можете вставить свои или заменить{" "}
          <mark className="code">wiggle()</mark> на свою переменную. Значение{" "}
          <mark className="code">value[0]</mark>,<mark className="code">value[1]</mark>{" "}
          или <mark className="code">value[2]</mark> возвращают то значение, которое вы
          записываете в атрибуте положения.
        </p>
        <CodeSnippet>{wiggleOnlyX}</CodeSnippet>
        <CodeSnippet>{wiggleOnlyY}</CodeSnippet>
        <CodeSnippet>{wiggleOnlyZ}</CodeSnippet>
        <p>
          Если у атрибута можно записать только одно значение, то достаточно
          воспользоваться <mark className="code">value</mark> к тому значению, которое вам
          нужно. <mark className="code">value</mark> возвращает число, поэтому с ним можно
          выполнять различные математические операции, по типу умножения или вычитания.
        </p>
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Как я могу отформатировать текст в строке?">
        <p>
          С помощью форматирования строки вы можете преобразовать текст как обычную
          строку, но с подставленными значениями переменных. Это можно сделать двумя
          способами.
        </p>
        <ul>
          <li>Через $ и обратную кавычку - </li>
          <li>Через конкатенацию - </li>
        </ul>
        <CodeSnippet>{formatExample}</CodeSnippet>
      </DetailsSummary>
      <DetailsSummary title="Как сделать Checkbox Control, который выключает или включает действие выражения?">
        {/* FIXME: */}
      </DetailsSummary>
    </div>
  );
};

export default AeExprBase;
