import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ArticleMedia} from "../../../components/content/ArticleMedia";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PsImport: React.FC = () => {
  return (
    <div className="article-content">
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
          том, что открываемый документ не имеет цветового профиля. Ладно если бы это окно
          один раз открывалось, но нет — оно появляется чуть ли не при открытии каждого
          файла. В этой статье рассмотрим, что такое цветовые профили и как отключить это
          надоедливое предупреждение.
        </p>
        <ArticleMedia
          caption="Missing Profile"
          src="legacy/photoshop/missing_profile.png"
          type="image"
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
          <mark className="key">Ctrl + Shift + K</mark> или найти соответствующую кнопку в{" "}
          <mark className="select">«Edit»</mark>.
        </p>
        <ArticleMedia
          caption="Photoshop"
          src="legacy/photoshop/open_color_settings.png"
          type="image"
        />
        <p>
          Далее в открывшемся окне нужно убрать все чекбоксы у параметров{" "}
          <mark className="select">«Profile Mismatches»</mark> и{" "}
          <mark className="select">«Missing Profiles»</mark>, а затем нажать на{" "}
          <mark className="select">«OK»</mark> для сохранения настроек.
        </p>
        <Addition type="warning">
          Отключая данные чекбоксы, вы соглашаетесь на то, что можете столкнуться с
          искажениями цветов при редактировании того или иного изображения, если явно не
          указывать цветовой профиль.
        </Addition>
        <ArticleMedia
          caption="Color Settings"
          src="legacy/photoshop/disable_ask_color_when_opening.png"
          type="image"
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

export default PsImport;
