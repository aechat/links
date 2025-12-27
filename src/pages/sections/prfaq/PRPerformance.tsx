import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PRPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="тормозит, лаги, медленно, скорость работы, оптимизация, производительность"
        title="Почему у меня, б%@#ь, лагает е&#!%й Adobe Premiere Pro, с$%а?"
      >
      </DetailsSummary>
      <DetailsSummary
        tag="своп, свап, swapfile"
        title="Для чего нужен файл подкачки в Windows и почему его не стоит отключать?"
      >
      </DetailsSummary>
      <DetailsSummary title="Какая версия Adobe Premiere Pro наиболее стабильная, наименее лагучая и какую мне лучше всего поставить?">
      </DetailsSummary>
      <DetailsSummary title="Какой компьютер или ноутбук стоит взять для работы в Premiere Pro?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта? Как мне переключить рендер на процессор?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Предпросмотр идёт как-будто в slow-motion, что делать?">
        {/* FIXME: написать!! */}
      </DetailsSummary>
    </div>
  );
};

export default PRPerformance;
