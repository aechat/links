import React from "react";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const AeExprLinking: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="link-properties"
        title="Как присвоить значение свойства из другого слоя к нужному?"
      ></DetailsSummary>
    </div>
  );
};

export default AeExprLinking;
