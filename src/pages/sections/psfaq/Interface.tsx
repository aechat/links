import React from "react";

import DetailsSummary from "../../../components/DetailsSummary";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const PSInterface: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/Interface.tsx" />
      <DetailsSummary title="Как отключить стартовое окно с последними открытыми проектами при запуске?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать фон программы светлее или темнее?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса программы?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PSInterface;
