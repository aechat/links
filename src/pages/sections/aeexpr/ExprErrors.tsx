import React from "react";

import DetailsSummary from "../../../components/content/DetailsSummary";

const AeExprErrors: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="placeholder"
        title="Плейсхолдер для будущих вопросов"
      >
        <p>Да, здесь пока что ничего интересного. Следите за обновлениями.</p>
      </DetailsSummary>
    </div>
  );
};

export default AeExprErrors;
