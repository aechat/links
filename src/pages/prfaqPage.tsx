import {Divider} from "antd";

import {motion} from "framer-motion";

import React, {useEffect, useState} from "react";

import {Helmet} from "react-helmet-async";

import PageIntro from "../components/PageIntro";

import {generateAnchorId} from "../components/DetailsSummary";

import {useCopyToClipboard} from "../hooks/useCopyToClipboard";

import {useAnchorScroll} from "../hooks/useAnchorScroll";

import Footer from "../components/Footer";

import Header from "../components/Header";

import SupportDonut from "../components/modal/SupportDonut";

import {SearchInPage, SearchProvider} from "../components/search";

import Addition from "../components/Addition";

import PRActions from "./sections/prfaq/PRActions";

import PRErrors from "./sections/prfaq/PRErrors";

import PRExport from "./sections/prfaq/PRExport";

import PRExportProblems from "./sections/prfaq/PRExportProblems";

import PRFromNewbies from "./sections/prfaq/PRFromNewbies";

import PRImport from "./sections/prfaq/PRImport";

import PRInstallProblems from "./sections/prfaq/PRInstallProblems";

import PRInterface from "./sections/prfaq/PRInterface";

import PRPerformance from "./sections/prfaq/PRPerformance";

import PRWhereFind from "./sections/prfaq/PRWhereFind";

const PRFAQ = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useAnchorScroll(isPageLoaded);

  const {enableAutoCopy} = useCopyToClipboard();
  useEffect(() => {
    enableAutoCopy();
  }, [enableAutoCopy]);

  const sections = [
    {
      key: "1",
      title: "Ищем полезности",
      id: "where-find",
      component: PRWhereFind,
    },
    {
      key: "2",
      title: "Проблемы с установкой",
      id: "install-problems",
      component: PRInstallProblems,
    },
    {
      key: "3",
      title: "Вопросы от новичков",
      id: "from-newbies",
      component: PRFromNewbies,
    },
    {key: "4", title: "Импорт", id: "import", component: PRImport},
    {key: "5", title: "Интерфейс", id: "interface", component: PRInterface},
    {
      key: "6",
      title: "Производительность",
      id: "performance",
      component: PRPerformance,
    },
    {key: "7", title: "Как и чем?", id: "actions", component: PRActions},
    {
      key: "8",
      title: "Ошибки и предупреждения",
      id: "errors",
      component: PRErrors,
    },
    {key: "9", title: "Рендер и экспорт", id: "export", component: PRExport},
    {
      key: "10",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: PRExportProblems,
    },
  ];

  return (
    <div className="page">
      <PageIntro
        isLoaded={isPageLoaded}
        text="prfaq"
      />
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>prfaq@aechat</title>
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Premiere Pro"
            name="description"
          />
          <meta
            content="prfaq@aechat"
            itemProp="name"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Premiere Pro"
            itemProp="description"
          />
          <meta
            content="https://aechat.ru/icons/prfaq@aechat.png"
            itemProp="image"
          />
          <meta
            content="aechat, prfaq, premiere pro, telegram, чат, прфак, ссылки, плагины, шаблоны, утилиты, faq, pr, design, motion design, видеомонтаж"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/prfaq"
            property="og:url"
          />
          <meta
            content="prfaq@aechat"
            property="og:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Premiere Pro"
            property="og:description"
          />
          <meta
            content="https://aechat.ru/icons/prfaq@aechat.png"
            property="og:image"
          />
          <meta
            content="summary_large_image"
            name="twitter:card"
          />
          <meta
            content="prfaq@aechat"
            name="twitter:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Premiere Pro"
            name="twitter:description"
          />
          <meta
            content="https://aechat.ru/icons/prfaq@aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="prfaq" />
        <motion.main
          animate={{x: 0, y: 0, opacity: 1}}
          className="main"
          exit={{x: 0, y: 50, opacity: 0}}
          initial={{x: 0, y: 0, opacity: 0}}
          transition={{
            duration: 0.3,
            ease: [0.25, 0, 0, 1],
          }}
          onAnimationComplete={() => {
            setIsPageLoaded(true);
            generateAnchorId();
          }}
        >
          <div className="faq-container-flex">
            <div className="faq-container">
              <div className="faq-title">
                <h1>prfaq</h1>
              </div>
              <SupportDonut />
              <Addition type="danger">
                Эта страница всё ещё находится в процессе разработки. Следите за
                обновлениями!
              </Addition>
              {sections.map((section) => (
                <div
                  key={section.key}
                  id={section.id}
                >
                  <Divider
                    orientation="right"
                    style={{
                      color: "var(--text-color)",
                      textTransform: "uppercase",
                      fontWeight: "600",
                    }}
                  >
                    {section.title}
                  </Divider>
                  <section.component />
                </div>
              ))}
              <Footer
                initialYear={2023}
                title="aechat"
              />
            </div>
          </div>
        </motion.main>
        <SearchInPage sections={sections} />
      </SearchProvider>
    </div>
  );
};

export default PRFAQ;
