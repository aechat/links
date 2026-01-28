import React from "react";

import DetailsSummary from "../../../components/content/DetailsSummary";

const PsExportProblems: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="colors-change-on-save"
        title="Почему при сохранении в JPG или PNG меняются цвета?"
      >
      </DetailsSummary>
    </div>
  );
};

export default PsExportProblems;
