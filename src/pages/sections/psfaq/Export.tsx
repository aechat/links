import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PSExport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/Export.tsx" />
      <DetailsSummary title="Какие параметры экспорта нужно установить для загрузки в социальные сети?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сохранить слои отдельными файлами?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сохранить последовательность фото в анимационный .gif?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PSExport;
