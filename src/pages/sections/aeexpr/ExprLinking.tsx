import React from "react";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

import DetailsSummary from "../../../components/DetailsSummary";

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
