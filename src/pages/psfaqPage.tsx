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

import PSActions from "./sections/psfaq/PSActions";

import PSErrors from "./sections/psfaq/PSErrors";

import PSExport from "./sections/psfaq/PSExport";

import PSExportProblems from "./sections/psfaq/PSExportProblems";

import PSFromNewbies from "./sections/psfaq/PSFromNewbies";

import PSImport from "./sections/psfaq/PSImport";

import PSInstallProblems from "./sections/psfaq/PSInstallProblems";

import PSInterface from "./sections/psfaq/PSInterface";

import PSPerformance from "./sections/psfaq/PSPerformance";

import PSWhereFind from "./sections/psfaq/PSWhereFind";

const PSFAQ = () => {
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
      component: PSWhereFind,
    },
    {
      key: "2",
      title: "Проблемы с установкой",
      id: "install-problems",
      component: PSInstallProblems,
    },
    {
      key: "3",
      title: "Вопросы от новичков",
      id: "from-newbies",
      component: PSFromNewbies,
    },
    {key: "4", title: "Импорт", id: "import", component: PSImport},
    {key: "5", title: "Интерфейс", id: "interface", component: PSInterface},
    {
      key: "6",
      title: "Производительность",
      id: "performance",
      component: PSPerformance,
    },
    {
      key: "7",
      title: "Как и чем?",
      id: "actions",
      component: PSActions,
    },
    {
      key: "8",
      title: "Ошибки и предупреждения",
      id: "errors",
      component: PSErrors,
    },
    {key: "9", title: "Рендер и экспорт", id: "export", component: PSExport},
    {
      key: "10",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: PSExportProblems,
    },
  ];

  return (
    <div className="page">
      <PageIntro
        isLoaded={isPageLoaded}
        text="psfaq"
      />
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>psfaq@aechat</title>
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Photoshop"
            name="description"
          />
          <meta
            content="aechat, psfaq, photoshop, telegram, чат, псфак, ссылки, плагины, шаблоны, утилиты, faq, ps, design"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/psfaq"
            property="og:url"
          />
          <meta
            content="psfaq@aechat"
            property="og:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Photoshop"
            property="og:description"
          />
        </Helmet>
        <Header title="psfaq" />
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
                <h1>psfaq</h1>
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
                title="aechat & dwchat"
              />
            </div>
          </div>
        </motion.main>
        <SearchInPage sections={sections} />
      </SearchProvider>
    </div>
  );
};

export default PSFAQ;
