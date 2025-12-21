import {Divider} from "antd";

import {motion} from "framer-motion";

import React, {useEffect, useState} from "react";

import {Helmet} from "react-helmet-async";

import PageIntro from "../components/PageIntro";

import Addition from "../components/Addition";

import {generateAnchorId} from "../components/DetailsSummary";

import {useCopyToClipboard} from "../hooks/useCopyToClipboard";

import {useSmartCopy} from "../hooks/useSmartCopy";

import Footer from "../components/Footer";

import Header from "../components/Header";

import {SearchInPage, SearchProvider} from "../components/SearchEngine";

import AEExprStart from "./sections/aeexpr/ExprStart";

import AEExprBase from "./sections/aeexpr/ExprBase";

import AEExprLinking from "./sections/aeexpr/ExprLinking";

import AEExprActions from "./sections/aeexpr/ExprActions";

import AEExprErrors from "./sections/aeexpr/ExprErrors";

const AEExpressionPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const {enableAutoCopy} = useCopyToClipboard();
  useEffect(() => {
    enableAutoCopy();
  }, [enableAutoCopy]);
  useSmartCopy(isPageLoaded);

  const sections = [
    {
      key: "1",
      title: "Начинаем «выражаться»",
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

  return (
    <div className="page">
      <PageIntro
        isLoaded={isPageLoaded}
        text="aeexpr"
      />
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>aeexpr@aechat</title>
          <meta
            content="Ответы на частые вопросы о выражениях в Adobe After Effects"
            name="description"
          />
          <meta
            content="aeexpr@aechat"
            itemProp="name"
          />
          <meta
            content="Ответы на частые вопросы о выражениях в Adobe After Effects"
            itemProp="description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            itemProp="image"
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
            content="https://aechat.ru/aeexpr"
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
          <meta
            content="https://aechat.ru/icons/aechat.png"
            property="og:image"
          />
          <meta
            content="summary_large_image"
            name="twitter:card"
          />
          <meta
            content="aeexpr@aechat"
            name="twitter:title"
          />
          <meta
            content="Ответы на частые вопросы о выражениях в Adobe After Effects"
            name="twitter:description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="aeexpr" />
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
                <h1>aeexpr</h1>
              </div>
              <Addition type="warning">
                Эта страница не является полноценным курсом по написанию выражений в{" "}
                <mark className="app">Adobe After Effects</mark>. Примеры выражений
                выполняются на движке <mark className="plugin">JavaScript</mark>. Его
                можно изменить во вкладке <mark className="select">«Expression»</mark>{" "}
                окна <mark className="select">«Project Manager»</mark>, которое
                открывается комбинацией клавиш{" "}
                <mark className="key">Ctrl + Alt + Shift + K</mark>.
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

export default AEExpressionPage;
