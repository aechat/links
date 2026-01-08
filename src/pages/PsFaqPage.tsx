import React, {useState} from "react";

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

import PsActions from "./sections/psfaq/PsActions";
import PsErrors from "./sections/psfaq/PsErrors";
import PsExport from "./sections/psfaq/PsExport";
import PsExportProblems from "./sections/psfaq/PsExportProblems";
import PsFromNewbies from "./sections/psfaq/PsFromNewbies";
import PsImport from "./sections/psfaq/PsImport";
import PsInstallProblems from "./sections/psfaq/PsInstallProblems";
import PsInterface from "./sections/psfaq/PsInterface";
import PsPerformance from "./sections/psfaq/PsPerformance";
import PsWhereFind from "./sections/psfaq/PsWhereFind";

const PsFaqPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useCopyToClipboard();
  useSmartCopy(isPageLoaded);

  const sections = [
    {
      component: PsWhereFind,
      id: "where-find",
      key: "1",
      title: "Ищем полезности",
    },
    {
      component: PsInstallProblems,
      id: "install-problems",
      key: "2",
      title: "Проблемы с установкой",
    },
    {
      component: PsFromNewbies,
      id: "from-newbies",
      key: "3",
      title: "Вопросы от новичков",
    },
    {component: PsImport, id: "import", key: "4", title: "Импорт"},
    {component: PsInterface, id: "interface", key: "5", title: "Интерфейс"},
    {
      component: PsPerformance,
      id: "performance",
      key: "6",
      title: "Производительность",
    },
    {
      component: PsActions,
      id: "actions",
      key: "7",
      title: "Как и чем?",
    },
    {
      component: PsErrors,
      id: "errors",
      key: "8",
      title: "Ошибки и предупреждения",
    },
    {component: PsExport, id: "export", key: "9", title: "Рендер и экспорт"},
    {
      component: PsExportProblems,
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

export default PsFaqPage;
