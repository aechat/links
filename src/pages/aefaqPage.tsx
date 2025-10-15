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

import AEWhereFind from "./sections/aefaq/AEWhereFind";

import AEInstallProblems from "./sections/aefaq/AEInstallProblems";

import AEFromNewbies from "./sections/aefaq/AEFromNewbies";

import AEImport from "./sections/aefaq/AEImport";

import AEInterface from "./sections/aefaq/AEInterface";

import AEPerformance from "./sections/aefaq/AEPerformance";

import AEActions from "./sections/aefaq/AEActions";

import AEErrors from "./sections/aefaq/AEErrors";

import AEExport from "./sections/aefaq/AEExport";

import AEExportProblems from "./sections/aefaq/AEExportProblems";

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

const AEFAQ = () => {
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
      component: AEWhereFind,
      icon: <TravelExploreRounded />,
    },
    {
      key: "2",
      title: "Проблемы с установкой",
      id: "install-problems",
      component: AEInstallProblems,
      icon: <InstallDesktopRounded />,
    },
    {
      key: "3",
      title: "Вопросы от новичков",
      id: "from-newbies",
      component: AEFromNewbies,
      icon: <HelpCenterOutlined />,
    },
    {
      key: "4",
      title: "Импорт",
      id: "import",
      component: AEImport,
      icon: <InputRounded />,
    },
    {
      key: "5",
      title: "Интерфейс",
      id: "interface",
      component: AEInterface,
      icon: <TouchAppOutlined />,
    },
    {
      key: "6",
      title: "Производительность",
      id: "performance",
      component: AEPerformance,
      icon: <SpeedRounded />,
    },
    {
      key: "7",
      title: "Как и чем?",
      id: "actions",
      component: AEActions,
      icon: <PsychologyAltOutlined />,
    },
    {
      key: "8",
      title: "Ошибки и предупреждения",
      id: "errors",
      component: AEErrors,
      icon: <ErrorOutlineRounded />,
    },
    {
      key: "9",
      title: "Рендер и экспорт",
      id: "export",
      component: AEExport,
      icon: <VideoSettingsRounded />,
    },
    {
      key: "10",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: AEExportProblems,
      icon: <BrokenImageOutlined />,
    },
  ];

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
        </Helmet>
        <Header title="aefaq" />
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
                <h1>aefaq</h1>
              </div>
              <SupportDonut />
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

export default AEFAQ;
