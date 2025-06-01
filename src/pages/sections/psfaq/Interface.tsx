import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

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
      <DetailsSummary title="Как изменить картинку во время запуска программы?">
        <AdditionDanger>
          Действия с заменой файлов программы{" "}
          <b>
            <u>вы делаете на свой страх и риск!</u>
          </b>{" "}
          После обновления программы ваша картинка перезапишется на исходную. Инструкция
          действительна только для устройств на <mark>Windows</mark>.
        </AdditionDanger>
        <p>
          При запуске <mark className="app">Adobe Photoshop</mark> вы часто видите
          какую-либо картинку, задуманной <mark>Adobe</mark> и наверное задумывались, что
          неплохо бы её заменить на свою. Да, такое можно сделать с помощью махинаций с{" "}
          <mark className="file">DAT</mark> файлами, располагающиеся в папке{" "}
          <mark className="path">Resources</mark> в директории с установленной программой.
          Для этого нам пригодится утилита{" "}
          <mark className="app">Photoshop Splash Screen Extractor</mark> от{" "}
          <mark>Pronama</mark>, которую можно загрузить{" "}
          <a
            download
            href="files/Photoshop Splash Screen Extractor.rar"
          >
            этой ссылке
          </a>{" "}
          и распаковать его с помощью архиватора, например{" "}
          <mark className="app">WinRAR</mark>, в удобном вам месте. Также существует и{" "}
          <a href="https://psccicon.azurewebsites.net/">онлайн-версия</a> данной утилиты.
        </p>
        <Divider>Распаковываем ресурсы программы</Divider>
        <p>
          После распаковки утилиты - вам нужно перейти в папку с установленным{" "}
          <mark className="app">Adobe Photoshop</mark>, обычно это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe Photoshop 20XX</mark> и
          скопировать оттуда папку <mark className="path">Resource</mark> в папку{" "}
          <mark className="path">PSCC2018Icon</mark>.
        </p>
        <VideoFigure
          caption="Копируем папку ресурсов для извлечения"
          styleClass="figure_windows-dark"
          videoSrc="images/photoshop/copy_resources_to_extract.mp4"
        />
        <p>
          Затем перейдите внутрь <mark className="path">PSCC2018Icon</mark> и откройте
          скрипт <mark className="file">Extract.cmd</mark>. Он начнёт извлечение картинок
          из этих файлов в новую папку <mark className="path">Work</mark>, в котором будут
          храниться изображения маленького и большого разрешения. После распаковки
          ресурсов - нужно перейти в <mark className="path">Work</mark>, а в нём - в
          подпапку <mark className="path">Low</mark> и найти изображение{" "}
          <mark className="image">SplashBackground_s0.png</mark>. Отредактировать этот
          файл вы можете в любом редакторе изображений, хоть в том же{" "}
          <mark className="app">Adobe Photoshop</mark>. При сохранении нужно просто не
          менять размер изображения и сохранить его также в{" "}
          <mark className="image">PNG</mark>.
        </p>
        <VideoFigure
          caption="Извлекаем ресурсы Photoshop"
          styleClass="figure_windows-dark"
          videoSrc="images/photoshop/extract_resources.mp4"
        />
        <p>
          В качестве примера я заменю стандартное изображение на изображение автомобиля{" "}
          <mark>Ford Focus</mark> и сохраню его в <mark className="image">PNG</mark> в той
          же директории, куда были распакованы картинки интерфейса{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ImageFigure
          caption="Пример модификации изображения при загрузке Adobe Photoshop"
          imgSrc="images/photoshop/custom_splash_example.png"
          imgTitle="Изменённое изображение при открытии программы"
          styleClass="figure_windows-light"
        />
        <Divider>Запаковываем ресурсы и заменяем их</Divider>
        <p>
          После редактирования и замены стартового изображения в{" "}
          <mark className="path">Work\Low</mark> - их нужно обратно запаковать с помощью
          скрипта <mark className="file">Pack.cmd</mark> в папке{" "}
          <mark className="path">PSCC2018Icon</mark> в директории с утилитой. После
          упаковки - папка <mark className="path">Resources</mark> вновь появится в{" "}
          <mark className="path">Work</mark>. Его нужно будет переместить с заменой в
          директорию с <mark className="app">Adobe Photoshop</mark>, обычно это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe Photoshop 20XX</mark>.
        </p>
        <VideoFigure
          caption="Замена файлов и открытие программы с уже изменённой плашкой"
          styleClass="figure_windows-dark"
          videoSrc="images/photoshop/pack_resource_and_start_with_custom_splash.mp4"
        />
        <p>
          После успешной замены файлов - можно запустить программу и наслаждаться своим
          шедевром, который вы сотворили.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PSInterface;
