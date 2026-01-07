import React, {useEffect, useState} from "react";

import {Divider} from "antd";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";

import Addition from "../components/content/Addition";
import {generateAnchorId} from "../components/content/DetailsSummary";
import {SearchInPage, SearchProvider} from "../components/features/SearchEngine";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PageIntro from "../components/layout/PageIntro";
import {useAnchorValidation} from "../hooks/useAnchorValidation";
import {useCopyToClipboard} from "../hooks/useCopyToClipboard";
import {useSmartCopy} from "../hooks/useSmartCopy";

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

  useCopyToClipboard();
  useSmartCopy(isPageLoaded);

  const sections = [
    {
      component: PSWhereFind,
      id: "where-find",
      key: "1",
      title: "Ищем полезности",
    },
    {
      component: PSInstallProblems,
      id: "install-problems",
      key: "2",
      title: "Проблемы с установкой",
    },
    {
      component: PSFromNewbies,
      id: "from-newbies",
      key: "3",
      title: "Вопросы от новичков",
    },
    {component: PSImport, id: "import", key: "4", title: "Импорт"},
    {component: PSInterface, id: "interface", key: "5", title: "Интерфейс"},
    {
      component: PSPerformance,
      id: "performance",
      key: "6",
      title: "Производительность",
    },
    {
      component: PSActions,
      id: "actions",
      key: "7",
      title: "Как и чем?",
    },
    {
      component: PSErrors,
      id: "errors",
      key: "8",
      title: "Ошибки и предупреждения",
    },
    {component: PSExport, id: "export", key: "9", title: "Рендер и экспорт"},
    {
      component: PSExportProblems,
      id: "export-problems",
      key: "10",
      title: "Проблемы при экспорте",
    },
  ];

  useAnchorValidation(sections, isPageLoaded);

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
            content="psfaq@aechat"
            itemProp="name"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Photoshop"
            itemProp="description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            itemProp="image"
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
          <meta
            content="https://aechat.ru/icons/aechat.png"
            property="og:image"
          />
          <meta
            content="summary_large_image"
            name="twitter:card"
          />
          <meta
            content="psfaq@aechat"
            name="twitter:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe Photoshop"
            name="twitter:description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="psfaq" />
        <motion.main
          animate={{opacity: 1, x: 0, y: 0}}
          className="main"
          exit={{opacity: 0, x: 0, y: 50}}
          initial={{opacity: 0, x: 0, y: 0}}
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
                      fontWeight: "600",
                      textTransform: "uppercase",
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
