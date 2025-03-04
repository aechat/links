import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PSPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/Performance.tsx" />
      <DetailsSummary
        title="Почему у меня, б%@#ь, лагает е&#!%й Photoshop, с$%а?"
        tag="тормозит, лаги, медленно, скорость работы, оптимизация, производительность"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PSPerformance;
