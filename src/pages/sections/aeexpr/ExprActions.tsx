import React from "react";

import DetailsSummary from "../../../components/content/DetailsSummary";

const AeExprActions: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="random-motion"
        title="Как задать случайное движение объекта или значения?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="loop-wiggle"
        title="Как зациклить «Wiggle»?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="loop-in-out"
        title="Как зациклить анимацию, созданную с помощью ключевых кадров?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="fix-slider-control"
        title="Как сделать «Slider Control» со значением больше, чем миллион?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="monospace-text"
        title="Как сделать так, чтобы текстовый слой не дёргался при изменении значения?"
      ></DetailsSummary>
      <DetailsSummary
        anchor="stop-wiggle"
        title="Как остановить действие выражения wiggle на определенном кадре?"
      ></DetailsSummary>
    </div>
  );
};

export default AeExprActions;
