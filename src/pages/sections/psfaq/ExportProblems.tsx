import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PSExportProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/ExportProblems.tsx" />
      <DetailsSummary title="Пока этот раздел нечем забить, поэтому пусть тут будет плейсхолдер">
        <p>Тут ничего нет, можете не читать.</p>
      </DetailsSummary>
    </div>
  );
};

export default PSExportProblems;
