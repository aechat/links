import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PSImport: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary title="Как правильно импортировать RAW изображения?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        tag="missing profile, embedded profile mismatch, отсутствие встроенного профиля, несоответствие внедренного профиля, документ не содержит встроенных профилей rgb, the document has an embedded color profile that does not match the current rgb working space"
        title="Почему при импорте изображения появляется «The document does not have an embedded RGB profile»?"
      >
        {/* TODO: */}
        <p>
          При открытии изображения или проекта в{" "}
          <mark className="app">Adobe Photoshop</mark> вы могли наблюдать предупреждение о
          том что открываемый документ не имеет цветовой профиль. Ладно если бы это окно
          один раз открывалось, но нет - оно появляется чуть ли не при открытии каждого
          файла. В этой статье рассмотрим, что такое цветовые профили и как отключить это
          надоедливое предупреждение.
        </p>
        <ContentFigure
          caption="Missing Profile"
          imgTitle="Предупреждение об отсутствии цветового профиля"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/missing_profile.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <Divider>
          Что за «The document has an embedded color profile that does not match the
          current RGB working space»?
        </Divider>
        <Divider>Что за «The document does not have an embedded RGB profile»</Divider>
        <Divider>Что за цветовые профили и с чем их едят?</Divider>
        {/* TODO: */}
        <Divider>Отключаем вопрос при открытии</Divider>
        <p>
          Чтобы убрать данный вопрос при открытии каждого документа в{" "}
          <mark className="app">Adobe Photoshop</mark>, нужно открыть окно{" "}
          <mark className="select">«Color Settings»</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Shift + K</mark> или найти соответствущую кнопку в{" "}
          <mark className="select">«Edit»</mark>.
        </p>
        <ContentFigure
          caption="Photoshop"
          imgTitle="Открытие настроек цветовых профилей"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/open_color_settings.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Далее в открывшемся окне нужно убрать все чекбоксы у параметров{" "}
          <mark className="select">«Profile Missmatches»</mark> и{" "}
          <mark className="select">«Missing Profiles»</mark>, а затем нажать на{" "}
          <mark className="select">«OK»</mark> для сохранения настроек.
        </p>
        <Addition type="warning">
          Отключая данные чекбоксы - вы соглашаетесь на то, что вы можете столкнуться с
          разными искажениями цветов при редактировании того или иного изображения, если
          явно не указывать цветовой профиль.
        </Addition>
        <ContentFigure
          caption="Color Settings"
          imgTitle="Отключаем вопрос при открытии документов"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/disable_ask_color_when_opening.png"
          theme="light"
          type="image"
          variant="windows"
        />
      </DetailsSummary>
      <DetailsSummary title="Мне не нравится новый интерфейс импорта, как вернуть старый?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Почему у меня изменяются цвета в просмотрщике фото и в программе?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
    </div>
  );
};

export default PSImport;
