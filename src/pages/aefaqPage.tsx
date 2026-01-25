import React, {useState} from "react";

import {
  BrokenImageOutlined,
  ErrorOutlineRounded,
  HelpCenterOutlined,
  InputRounded,
  InstallDesktopRounded,
  PsychologyAltOutlined,
  SpeedRounded,
  TouchAppOutlined,
  TravelExploreRounded,
  VideoSettingsRounded,
} from "@mui/icons-material";
import {Divider} from "antd";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";

import {generateAnchorId} from "../components/content/DetailsSummary";
import {SearchInPage, SearchProvider} from "../components/features/SearchEngine";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import PageIntro from "../components/layout/PageIntro";
import {useAnchorValidation} from "../hooks/useAnchorValidation";
import {useCopyToClipboard} from "../hooks/useCopyToClipboard";
import {useSmartCopy} from "../hooks/useSmartCopy";

import AEActions from "./sections/aefaq/AEActions";
import AEErrors from "./sections/aefaq/AEErrors";
import AEExport from "./sections/aefaq/AEExport";
import AEExportProblems from "./sections/aefaq/AEExportProblems";
import AEFromNewbies from "./sections/aefaq/AEFromNewbies";
import AEImport from "./sections/aefaq/AEImport";
import AEInstallProblems from "./sections/aefaq/AEInstallProblems";
import AEInterface from "./sections/aefaq/AEInterface";
import AEPerformance from "./sections/aefaq/AEPerformance";
import AEWhereFind from "./sections/aefaq/AEWhereFind";

const AEFAQ = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useCopyToClipboard();
  useSmartCopy(isPageLoaded);
  const sections = [
    {
      component: AEWhereFind,
      icon: <TravelExploreRounded />,
      id: "where-find",
      key: "1",
      title: "Ищем полезности",
    },
    {
      component: AEInstallProblems,
      icon: <InstallDesktopRounded />,
      id: "install-problems",
      key: "2",
      title: "Проблемы с установкой",
    },
    {
      component: AEFromNewbies,
      icon: <HelpCenterOutlined />,
      id: "from-newbies",
      key: "3",
      title: "Вопросы от новичков",
    },
    {
      component: AEImport,
      icon: <InputRounded />,
      id: "import",
      key: "4",
      title: "Импорт",
    },
    {
      component: AEInterface,
      icon: <TouchAppOutlined />,
      id: "interface",
      key: "5",
      title: "Интерфейс",
    },
    {
      component: AEPerformance,
      icon: <SpeedRounded />,
      id: "performance",
      key: "6",
      title: "Производительность",
    },
    {
      component: AEActions,
      icon: <PsychologyAltOutlined />,
      id: "actions",
      key: "7",
      title: "Как и чем?",
    },
    {
      component: AEErrors,
      icon: <ErrorOutlineRounded />,
      id: "errors",
      key: "8",
      title: "Ошибки и предупреждения",
    },
    {
      component: AEExport,
      icon: <VideoSettingsRounded />,
      id: "export",
      key: "9",
      title: "Рендер и экспорт",
    },
    {
      component: AEExportProblems,
      icon: <BrokenImageOutlined />,
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
        text="aefaq"
      />
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>aefaq@aechat</title>
          <meta
            content="Ответы на частые вопросы от пользователей Adobe After Effects"
            name="description"
          />
          <meta
            content="aefaq@aechat"
            itemProp="name"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe After Effects"
            itemProp="description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            itemProp="image"
          />
          <meta
            content="aechat, aefaq, after effects, telegram, чат, аефак, ссылки, плагины, шаблоны, утилиты, faq, ae, design, motion design, видеомонтаж"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/aefaq"
            property="og:url"
          />
          <meta
            content="aefaq@aechat"
            property="og:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe After Effects"
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
            content="aefaq@aechat"
            name="twitter:title"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe After Effects"
            name="twitter:description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="aefaq" />
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
                <h1>aefaq</h1>
              </div>
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

export default AEFAQ;
