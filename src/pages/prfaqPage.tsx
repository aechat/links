import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";

import {Divider} from "antd";
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
  useCopyToClipboard();
  useSmartCopy(isPageLoaded);
  const sections = [
    {
      component: PRWhereFind,
      id: "where-find",
      key: "1",
      title: "Ищем полезности",
    },
    {
      component: PRInstallProblems,
      id: "install-problems",
      key: "2",
      title: "Проблемы с установкой",
    },
    {
      component: PRFromNewbies,
      id: "from-newbies",
      key: "3",
      title: "Вопросы от новичков",
    },
    {component: PRImport, id: "import", key: "4", title: "Импорт"},
    {component: PRInterface, id: "interface", key: "5", title: "Интерфейс"},
    {
      component: PRPerformance,
      id: "performance",
      key: "6",
      title: "Производительность",
    },
    {component: PRActions, id: "actions", key: "7", title: "Как и чем?"},
    {
      component: PRErrors,
      id: "errors",
      key: "8",
      title: "Ошибки и предупреждения",
    },
    {component: PRExport, id: "export", key: "9", title: "Рендер и экспорт"},
    {
      component: PRExportProblems,
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
            content="https://aechat.ru/icons/aechat.png"
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
            content="https://aechat.ru/icons/aechat.png"
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
            content="https://aechat.ru/icons/aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="prfaq" />
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
                <h1>prfaq</h1>
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
