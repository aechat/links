import React from "react";

import DetailsSummary from "../../../components/content/DetailsSummary";

const AeExprActions: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary title="Как задать случайное движение объекта или значения?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Как зациклить «Wiggle»?">{/* FIXME: */}</DetailsSummary>
      <DetailsSummary title="Как зациклить анимацию, созданную с помощью ключевых кадров?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Как сделать «Slider Control» со значением больше, чем миллион?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Как сделать так, чтобы текстовый слой со счётчиком не дёргался при изменении значения?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Как остановить действие выражения wiggle на определенном кадре?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
    </div>
  );
};

export default AeExprActions;
