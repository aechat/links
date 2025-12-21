import {Divider} from "antd";

import React from "react";

import Addition from "../../../components/content/Addition";

import {ContentFigure} from "../../../components/content/ContentFigure";

import DetailsSummary from "../../../components/content/DetailsSummary";

const PSInterface: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary title="Как отключить стартовое окно с последними открытыми проектами при запуске?">
        <p>
          Если вас раздражает окно с недавними открытыми проектами или оно у вас грузится
          достаточно долго - его можно отключить в настройках. Для этого перейдите в
          настройки <mark className="select">«Edit» → «Preferences» → «General»</mark> и
          уберите чекбокс напротив параметра{" "}
          <mark className="select">«Auto show the Home Screen»</mark>, а затем нажмите на{" "}
          <mark className="select">«OK»</mark> в правой части окна.
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Отключаем домашний экран при запуске программы"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/disable_show_home_screen.png"
          theme="light"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary title="Как сделать фон программы светлее или темнее?">
        <p>
          В <mark className="app">Adobe Photoshop</mark> с давних пор доступна возможность
          сделать фон всего интерфейса более тёмным или светлым. Для изменения цветовой
          схемы - перейдите в настройки{" "}
          <mark className="select">«Edit» → «Preferences» → «Interface»</mark> и в{" "}
          <mark className="select">«Color Theme»</mark> выберите нужное вам значение.
          После выбора новой цветовой схемы - не забудьте нажать на{" "}
          <mark className="select">«OK»</mark>.
        </p>
        <ContentFigure
          caption="Preferences"
          imgTitle="Выбор цветовой схемы"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/change_color_theme.png"
          theme="light"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary title="Как прикрепить нужное окно в рабочее пространство?">
        {/* TODO: написать ещё отдельную статью по аналогии как расположить по списку или поставить несколько окон во вкладки  */}
        {/* FIXME:  */}
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса программы?">
        {/* FIXME: */}
      </DetailsSummary>
      <DetailsSummary title="Как изменить картинку во время запуска программы?">
        <Addition type="danger">
          Действия с заменой файлов программы{" "}
          <b>
            <u>вы делаете на свой страх и риск!</u>
          </b>{" "}
          После обновления программы ваша картинка перезапишется на исходную. Инструкция
          действительна только для устройств на <mark>Windows</mark>.
        </Addition>
        <p>
          При запуске <mark className="app">Adobe Photoshop</mark> вы часто видите
          какую-либо картинку, задуманной <mark className="company">Adobe</mark> и
          наверное задумывались, что неплохо бы её заменить на свою. Да, такое можно
          сделать с помощью махинаций с <mark className="file">DAT</mark> файлами,
          располагающиеся в папке <mark className="path">Resources</mark> в директории с
          установленной программой. Для этого нам пригодится утилита{" "}
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
        <ContentFigure
          caption="Копируем папку ресурсов для извлечения"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/copy_resources_to_extract.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          Затем перейдите внутрь <mark className="path">PSCC2018Icon</mark> и откройте
          скрипт <mark className="file">EXTRACT.CMD</mark>. Он начнёт извлечение картинок
          из этих файлов в новую папку <mark className="path">Work</mark>, в котором будут
          храниться изображения маленького и большого разрешения. После распаковки
          ресурсов - нужно перейти в <mark className="path">Work</mark>, а в нём - в
          подпапку <mark className="path">Low</mark> и найти изображение{" "}
          <mark className="image">SPLASHBACKGROUND_S0.PNG</mark>. Отредактировать этот
          файл вы можете в любом редакторе изображений, хоть в том же{" "}
          <mark className="app">Adobe Photoshop</mark>. При сохранении нужно просто не
          менять размер изображения и сохранить его также в{" "}
          <mark className="image">PNG</mark>.
        </p>
        <ContentFigure
          caption="Извлекаем ресурсы Photoshop"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/extract_resources.mp4"
          theme="dark"
          type="video"
          variant="windows"
        />
        <p>
          В качестве примера я заменю стандартное изображение на изображение автомобиля{" "}
          <mark>Ford Focus</mark> и сохраню его в <mark className="image">PNG</mark> в той
          же директории, куда были распакованы картинки интерфейса{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ContentFigure
          caption="Пример модификации изображения при загрузке Adobe Photoshop"
          imgTitle="Изменённое изображение при открытии программы"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/custom_splash_example.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Divider>Запаковываем ресурсы и заменяем их</Divider>
        <p>
          После редактирования и замены стартового изображения в{" "}
          <mark className="path">Work\Low</mark> - их нужно обратно запаковать с помощью
          скрипта <mark className="file">PACK.CMD</mark> в папке{" "}
          <mark className="path">PSCC2018Icon</mark> в директории с утилитой. После
          упаковки - папка <mark className="path">Resources</mark> вновь появится в{" "}
          <mark className="path">Work</mark>. Его нужно будет переместить с заменой в
          директорию с <mark className="app">Adobe Photoshop</mark>, обычно это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe Photoshop 20XX</mark>.
        </p>
        <ContentFigure
          caption="Замена файлов и открытие программы с уже изменённой плашкой"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/pack_resource_and_start_with_custom_splash.mp4"
          theme="dark"
          type="video"
          variant="windows"
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
