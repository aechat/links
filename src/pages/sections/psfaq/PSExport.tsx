import React from "react";

import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

import DetailsSummary from "../../../components/DetailsSummary";

import {AdditionInfo} from "../../../components/Additions";

import {ImageFigure} from "../../../components/ContentFigure";

const PSExport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/PSExport.tsx" />
      <DetailsSummary title="Какие параметры экспорта нужно установить для загрузки в социальные сети?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="сохранить фото, пнг, жипег, жпг, вебп"
        title="Как экспортировать изображение в JPEG, PNG, WEBP и прочие популярные форматы изображений?"
      >
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="сохранить анимированную гифку"
        title="Как экспортировать последовательность фото в анимацию GIF?"
      >
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="export layers"
        title="Как экспортировать слои отдельными файлами?"
      >
        <p>
          Для сохранения всех слоёв вашего проекта в отдельные файлы, будь то{" "}
          <mark className="image">PSD</mark>, <mark className="image">PNG</mark> или{" "}
          <mark className="image">TIFF</mark> - перейдите в{" "}
          <mark className="ui">File &gt; Export &gt; Layers to Files</mark>.
        </p>
        <ImageFigure
          caption="Adobe Photoshop"
          imgSrc="images/photoshop/layers_to_files.png"
          imgTitle="Кнопка для начала экспорта слоёв в файлы"
          styleClass="figure_windows-light"
        />
        <p>
          В открывшемся окне вы можете указать формат файла и путь к папке, куда вы хотите
          сохранить слои. Для начала процесса сохранения нажмите на{" "}
          <mark className="ui">Run</mark> и ожидайте окончания операции.
        </p>
        <ImageFigure
          caption="Adobe Photoshop"
          imgSrc="images/photoshop/export_layers.png"
          imgTitle="Экспорт слоёв в файлы"
          styleClass="figure_windows-light"
        />
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary
        tag="сохранить видео, мп4, mp4"
        title="Может прозвучит по-идиотски, но как экспортировать из программы видео?"
      >
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary
        tag="legacy export"
        title="Как вернуть старый механизм сохранения файлов?"
      >
        <p>
          В <mark className="app">Adobe Photoshop</mark> с версии <mark>22.4.2</mark>{" "}
          решила немного изменить логику сохранения файлов в окнах{" "}
          <mark className="ui">Save As</mark> и <mark>Export As</mark>. Не всем это
          нововведение может понравилось, так как в новом варианте не было многих форматов
          файлов для сохранения и приходилось пользоваться{" "}
          <mark className="ui">Save As Copy</mark>.
        </p>
        <AdditionInfo>
          Подробнее о командах для сохранения файлов вы можете прочитать на{" "}
          <a href="https://helpx.adobe.com/ru/photoshop/using/saving-images.html">
            сайте Adobe
          </a>
          .
        </AdditionInfo>
        <p>
          К счастью - данное поведение можно вернуть так, как это было в предыдущих
          версиях программы. Для этого перейдите в настройки программы с помощью{" "}
          <mark className="ui">Edit &gt; Preferences &gt; File Handling</mark>. После
          открытия настроек - установите чекбоксы напротив двух параметров:{" "}
          <mark className="ui">Enable Legacy &quot;Save As&quot;</mark> и{" "}
          <mark className="ui">
            Do not append &quot;copy&quot; to filename when saving a copy
          </mark>
          .
        </p>
        {/* TODO: приложить фото */}
        <p>
          Также при желании вы можете включить параметр{" "}
          <mark className="ui">Use Legacy &quot;Export As&quot;</mark> во вкладке{" "}
          <mark className="ui">Export</mark>.
        </p>
        {/* TODO: приложить фото */}
      </DetailsSummary>
    </div>
  );
};

export default PSExport;
