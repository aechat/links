import React from "react";

import DetailsSummary from "../../../components/DetailsSummary";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

/* FIXME: Еще вопрос, как остановить действие выражения wiggle на определенном кадре? */

const AEExprActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aeexpr/ExprActions.tsx" />
      <DetailsSummary title="Как задать случайное движение объекта или значения?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как я могу зациклить Wiggle?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как зациклить анимацию, созданную с помощью ключевых кадров?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать Slider Control со значением больше, чем миллион?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать так, чтобы текстовый слой со счётчиком не дёргался при изменении значения?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
    </div>
  );
};

export default AEExprActions;
