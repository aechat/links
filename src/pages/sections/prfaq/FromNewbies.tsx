import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PRFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/FromNewbies.tsx" />
      <DetailsSummary title="Первый раз установил Premiere Pro, с чего бы мне начать обучение?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Не понимаю термины от других пользователей Premiere Pro, проясните!">
        <p>{/* FIXME: написать!! по аналогии как с терминами в аефаке */}</p>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных комбинаций клавиш для работы в Premiere Pro?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Где я могу узнать об нововведениях в Premiere Pro?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем мне с каждого угла советуют поставить английский язык программы и как мне это сделать?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как найти нужный эффект на английском языке, если у меня стоит русский язык в Premiere Pro?">
        <p>
          {/* предположим что пользователь не хочет менять язык. про колхозный способ двойного языка и про таблицу эффектов */}
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вернуть звуковую или видео дорожку на таймлайн?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRFromNewbies;
