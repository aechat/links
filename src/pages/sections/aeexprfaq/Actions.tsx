import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionInfo} from "../../../components/Additions";
import {VideoFigure} from "../../../components/ContentFigure";
import CodeSnippet from "../../../components/features/CodeSnippet";

const AEExprActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aeexprfaq/Actions.tsx" />
      <DetailsSummary
        title="Как задать тряску у слоя?"
        tag="шейк, покачивание, случайное положение, причина тряски"
      >
        <p>
          Для задания случайного покачивания слоя в{" "}
          <mark className="app">After Effects</mark> есть встроенная функция{" "}
          <mark className="code">wiggle()</mark>. Данная функция принимает на себя два
          значения: частота и амплитуда.
        </p>
        <CodeSnippet language="javascript">{`wiggle(5, 10)`}</CodeSnippet>
        <p>
          В функцию вместо числа можно передать переменную или ссылку на какой-нибудь
          объект.
        </p>
        <CodeSnippet language="javascript">{`let x = 5;
let y = 10;

wiggle(x, y)`}</CodeSnippet>
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Как зациклить анимацию, которая была создана с помощью ключевых кадров?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Как мне сделать "прыгучую" анимацию нужного параметра?'>
        <p>
          {/* FIXME: про bouncy текста или положения. можно привести в пример motion tools pro где это есть */}
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как я могу сделать слайдер с значением больше миллиона?">
        <p>
          К сожалению, в <mark className="app">After Effects</mark> нет возможности
          поставить значение в <mark className="plugin">Slider Control</mark> больше чем{" "}
          <mark>1 000 000</mark> как в плюс, так и в минус (в итоге получается диапазон в
          два миллиона). Если вы анимируете счётчик от нуля до какого-то значения, то вы
          можете просто умножить значение слайдера на нужный коэффициент, например на 10
          или 25, чтобы получилось нужное вам значение.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/limit_million.mp4"
          caption="Умножение счётчика на нужный коэффициент"
        />
        <AdditionInfo>
          Для избавления от плавающей запятой можно использовать функцию{" "}
          <mark className="copy">Math.round</mark> и засунуть в него значение переменной.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как сделать так, чтобы мой счётчик не дёргался при анимации числа?">
        <p>{/* FIXME: написать про monospace шрифт через поворот */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как я могу отключить выражение в нужном месте через Checkbox Control?">
        <p>
          Вы можете создать выражение с конструкцией <mark>if/else</mark>, которое будет
          работать в зависимости от выполненного условия. В данном случае нам нужно
          сделать вывод значение при включенном и выключенном{" "}
          <mark>Checkbox Controller</mark>.
        </p>
        <p>
          Для начала создайте контроллер, в котором вы будете применять{" "}
          <mark>Checkbox Controller</mark>.
        </p>
        {/* FIXME: написать!! */}
      </DetailsSummary>
    </div>
  );
};
export default AEExprActions;
