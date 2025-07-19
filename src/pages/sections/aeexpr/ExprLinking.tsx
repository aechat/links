import React from "react";

import DetailsSummary from "../../../components/DetailsSummary";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const AEExprLinking: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aeexpr/ExprLinking.tsx" />
      <DetailsSummary title="Как присвоить значение свойства из другого слоя к нужному?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
    </div>
  );
};

export default AEExprLinking;
