import {CircularProgress} from "@mui/material";

import {Breadcrumb, Divider} from "antd";

import {motion} from "framer-motion";

import React, {Suspense, lazy, useEffect, useState} from "react";

import {Helmet} from "react-helmet-async";

import {Link} from "react-router-dom";

import Addition from "../components/Addition";

import {generateAnchorId} from "../components/DetailsSummary";

import CopyToClipboard from "../components/features/CopyToClipboard";

import Footer from "../components/Footer";

import Header from "../components/Header";

import SupportDonut from "../components/modal/SupportDonut";

import {SearchInPage, SearchProvider} from "../components/search";

import GithubUpdateInfo from "../components/features/GithubUpdateInfo";

const AEExprStart = lazy(() => import("./sections/aeexpr/ExprStart"));

const AEExprBase = lazy(() => import("./sections/aeexpr/ExprBase"));

const AEExprLinking = lazy(() => import("./sections/aeexpr/ExprLinking"));

const AEExprActions = lazy(() => import("./sections/aeexpr/ExprActions"));

const AEExprErrors = lazy(() => import("./sections/aeexpr/ExprErrors"));

const AEExpressionPage = () => {
  useEffect(() => {
    CopyToClipboard.enableAutoCopy();
  }, []);

  const sections = [
    {
      key: "1",
      title: "Начинаем выражать выражения",
      id: "start",
      component: AEExprStart,
    },
    {key: "2", title: "Основы синтаксиса", id: "base", component: AEExprBase},
    {
      key: "3",
      title: "Ссылки и привязки",
      id: "linking",
      component: AEExprLinking,
    },
    {
      key: "4",
      title: "Примеры выражений",
      id: "actions",
      component: AEExprActions,
    },
    {
      key: "5",
      title: "Ошибки и предупреждения",
      id: "errors",
      component: AEExprErrors,
    },
  ];

  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const [isSectionsLoaded, setIsSectionsLoaded] = useState(false);
  useEffect(() => {}, [visibleSections.length]);

  const loadSection = async (section: {key: string}) => {
    setVisibleSections((prev) => [...prev, section.key]);
  };

  const loadSections = async () => {
    await Promise.all(sections.map(loadSection));
    setIsSectionsLoaded(true);
  };
  useEffect(() => {
    loadSections();
  }, []);

  return (
    <div className="page">
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>aeexpr@aechat</title>
          <link
            href="icons/aeexpr.svg"
            rel="icon"
            type="image/svg+xml"
          />
          <meta
            content="Ответы на частые вопросы о выражениях в Adobe After Effects"
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
            content="aeexpr@aechat"
            property="og:title"
          />
          <meta
            content="Ответы на частые вопросы о выражениях в Adobe After Effects"
            property="og:description"
          />
        </Helmet>
        <Header title="aeexpr" />
        <motion.main
          animate={{x: 0, y: 0, opacity: 1}}
          className="main"
          exit={{x: 0, y: 50, opacity: 0}}
          initial={{x: 100, y: 0, opacity: 0}}
          transition={{
            duration: 0.3,
            ease: [0.25, 0, 0, 1],
          }}
        >
          <div className="faq-container-flex">
            <div className="faq-container">
              <div className="faq-title">
                <h1>aeexpr</h1>
                <Breadcrumb
                  items={[
                    {
                      title: <Link to="/aeexpr">FAQ по выражениям в After Effects</Link>,
                      menu: {
                        items: [
                          {
                            title: <Link to="/aefaq">FAQ по Adobe After Effects</Link>,
                          },
                          {
                            title: <Link to="/prfaq">FAQ по Adobe Premiere Pro</Link>,
                          },
                          {
                            title: <Link to="/psfaq">FAQ по Adobe Photoshop</Link>,
                          },
                        ],
                      },
                    },
                  ]}
                />
              </div>
              <SupportDonut />
              <GithubUpdateInfo folderPath="src/pages/sections/aeexpr" />
              <Addition type="danger">
                На текущий момент данная страница ещё не полностью готова. В статьях могут
                быть ошибки, неполная или непроверенная информация касательно работы
                выражений. Следите за обновлениями!
              </Addition>
              <Addition type="warning">
                Данная страница{" "}
                <b>
                  <u>не является</u>
                </b>{" "}
                полноценным курсом по написанию выражений в{" "}
                <mark className="app">Adobe After Effects</mark>, а также здесь не будут
                разбираться случаи с написанием скриптов формата{" "}
                <mark className="file">JSX</mark> и <mark className="file">JSXBIN</mark>.
                Примеры выражений выполняются на движке <mark>JavaScript</mark>, его можно
                изменить во вкладке <mark className="select">Expression</mark> окна{" "}
                <mark className="select">Project Manager</mark>, который открывается с
                помощью комбинации клавиш{" "}
                <mark className="key">Ctrl + Alt + Shift + K</mark>.
              </Addition>
              <Suspense
                fallback={
                  <motion.div
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    style={{
                      padding: "20px",
                      display: "flex",
                      marginBlock: "20px",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "90dvh",
                      width: "100%",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0, 0, 1],
                      delay: 1,
                    }}
                  >
                    <CircularProgress sx={{color: "var(--accent)"}} />
                  </motion.div>
                }
              >
                {visibleSections.length > 0 && (
                  <motion.div
                    animate={isSectionsLoaded ? {opacity: 1} : {}}
                    initial={{opacity: 0}}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0, 0, 1],
                    }}
                    onAnimationStart={() => {
                      setIsPageLoaded(true);
                      generateAnchorId();
                    }}
                  >
                    {visibleSections.map((key) => {
                      const section = sections.find((s) => s.key === key);

                      if (!section) {
                        return null;
                      }

                      return (
                        <div
                          key={key}
                          id={section.id}
                        >
                          <Divider
                            orientation="right"
                            style={{
                              color: "var(--text-color)",
                              textTransform: "uppercase",
                              fontWeight: "800",
                            }}
                          >
                            {section.title}
                          </Divider>
                          <section.component />
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </Suspense>
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

export default AEExpressionPage;
