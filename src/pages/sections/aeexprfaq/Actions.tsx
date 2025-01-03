import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionInfo} from "../../../components/Additions";
import {VideoFigure} from "../../../components/ContentFigure";

const AEExprActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aeexprfaq/Actions.tsx" />
      <DetailsSummary title="Как мне сделать 'прыгучую' анимацию нужного параметра?">
        <p>
          {/* FIXME: про bouncy текста или положения. можно привести в пример motion tools pro где это есть */}
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать слайдер с значением больше миллиона?">
        {/* FIXME: написать!! */}
        <p>
          В <mark className="app">After Effects</mark> нет возможности поставить значение
          в <mark className="plugin">Slider Control</mark> больше чем{" "}
          <mark>1 000 000</mark> как в плюс, так и в минус (в итоге получается диапазон в
          два миллиона). Если вы анимируете счётчик от нуля до какого-то значения, то
          просто умножьте значение слайдера на нужный коэффициент, например на 10 или 25.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/limit_million.mp4"
          caption="Умножение счётчика на нужный коэффициент"
        />
        <AdditionInfo>
          Для избавления от плавающей запятой можно использовать функцию{" "}
          <mark className="copy">Math.round</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как сделать так, чтобы мой счётчик не дёргался при анимации числа?">
        <p>{/* FIXME: написать про monospace шрифт через поворот */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как удалить выражения сразу в нескольких слоях?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEExprActions;
