import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/Addition";

import {ImageFigure} from "../../../components/ContentFigure";

import DetailsSummary from "../../../components/DetailsSummary";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const PSImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/PSImport.tsx" />
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
