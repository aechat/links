import React, {useState} from "react";

import {Divider} from "antd";
import {motion, useIsPresent} from "framer-motion";
import {Helmet} from "react-helmet-async";

import Addition from "../components/content/Addition";
import {generateAnchorId} from "../components/content/DetailsSummary";
import {SearchInPage, SearchProvider} from "../components/features/SearchEngine";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import {useLoading} from "../context/LoadingContext";
import {useAnchorValidation} from "../hooks/useAnchorValidation";
import {useCopyToClipboard} from "../hooks/useCopyToClipboard";
import {useSmartCopy} from "../hooks/useSmartCopy";

import AeExprActions from "./sections/aeexpr/ExprActions";
import AeExprBase from "./sections/aeexpr/ExprBase";
import AeExprErrors from "./sections/aeexpr/ExprErrors";
import AeExprLinking from "./sections/aeexpr/ExprLinking";
import AeExprStart from "./sections/aeexpr/ExprStart";

const AeExprPage = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const {setIsLoading} = useLoading();

  const isPresent = useIsPresent();

  useCopyToClipboard();
  useSmartCopy(isPageLoaded);

  const sections = [
    {
      component: AeExprStart,
      id: "start",
      key: "1",
      title: "Начинаем «выражаться»",
    },
    {component: AeExprBase, id: "base", key: "2", title: "Основы синтаксиса"},
    {
      component: AeExprLinking,
      id: "linking",
      key: "3",
      title: "Ссылки и привязки",
    },
    {
      component: AeExprActions,
      id: "actions",
      key: "4",
      title: "Примеры выражений",
    },
    {
      component: AeExprErrors,
      id: "errors",
      key: "5",
      title: "Ошибки и предупреждения",
    },
  ];

  useAnchorValidation(sections, isPageLoaded);

  return (
    <div className="page">
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

            if (isPresent) {
              setIsLoading(false);
            }
          }}
        >
          <div className="article-container-flex">
            <div className="article-container">
              <div className="article-title">
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

export default AeExprPage;
