import {Divider} from "antd";

import {motion} from "framer-motion";

import React, {useEffect, useState} from "react";

import {Helmet} from "react-helmet-async";

import PageIntro from "../components/PageIntro";

import {generateAnchorId} from "../components/DetailsSummary";

import {useCopyToClipboard} from "../hooks/useCopyToClipboard";

import {useAnchorScroll} from "../hooks/useAnchorScroll";

import {useExternalLinks} from "../hooks/useExternalLinks";

import Footer from "../components/Footer";

import Header from "../components/Header";

import SupportDonut from "../components/modal/SupportDonut";

import {SearchInPage, SearchProvider} from "../components/search";

import GithubUpdateInfo from "../components/features/GithubUpdateInfo";

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

const AEFAQ = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useAnchorScroll(isPageLoaded);
  useExternalLinks();

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
    },
    {
      key: "2",
      title: "Проблемы с установкой",
      id: "install-problems",
      component: AEInstallProblems,
    },
    {
      key: "3",
      title: "Вопросы от новичков",
      id: "from-newbies",
      component: AEFromNewbies,
    },
    {key: "4", title: "Импорт", id: "import", component: AEImport},
    {key: "5", title: "Интерфейс", id: "interface", component: AEInterface},
    {key: "6", title: "Производительность", id: "performance", component: AEPerformance},
    {key: "7", title: "Как и чем?", id: "actions", component: AEActions},
    {key: "8", title: "Ошибки и предупреждения", id: "errors", component: AEErrors},
    {key: "9", title: "Рендер и экспорт", id: "export", component: AEExport},
    {
      key: "10",
      title: "Проблемы при экспорте",
      id: "export-problems",
      component: AEExportProblems,
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
          <link
            href="icons/aefaq.svg"
            rel="icon"
            type="image/svg+xml"
          />
          <meta
            content="Ответы на частые вопросы от пользователей Adobe After Effects"
            name="description"
          />
          <meta
            content="чат, ссылки, After Effects, шаблоны After Effects, AETemp, Adobe, советы After Effects, FAQ After Effects, склад стройматериалов, помощь, видеомонтаж, графический дизайн, видеоэффекты, спецэффекты, анимация, 3D-моделирование, motion graphics, композитинг, цветокоррекция, Adobe Premiere, Photoshop, Illustrator, Media Encoder, плагины After Effects, видеопроизводство, рендеринг, обучение, видеоуроки, монтаж видео, создание видео, редактирование видео, графика, видеоконтент, пост-продакшн, filmmaking, кино, телевидение, спецэффекты для фильмов, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, видеореклама, обучающие видео, видеокурсы, видеоуроки, курсы по анимации, туториалы по видеомонтажу, уроки по цветокоррекции, советы по ускорению After Effects, оптимизация, исправление ошибок, видеографика, motion design, инфографика, 3D-анимация, видеоклипы, рекламные ролики, видеопрезентации"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/"
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
              <GithubUpdateInfo folderPath="src/pages/sections/aefaq" />
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
