import React from "react";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

import DetailsSummary from "../../../components/DetailsSummary";

const PSImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/Import.tsx" />
      <DetailsSummary title="Как правильно импортировать RAW изображения?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Мне не нравится новый интерфейс импорта, как вернуть на старый?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему у меня изменяются цвета в просмотрщике фото и в программе?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PSImport;
