import React, {Suspense, lazy, useEffect, useState} from "react";
import {Breadcrumb, Divider} from "antd";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet-async";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
import SupportDonut from "../components/modal/SupportDonut";
import CopyToClipboard from "../components/features/CopyToClipboard";
import {CircularProgress} from "@mui/material";
import {generateAnchorId} from "../components/DetailsSummary";
import {AdditionDanger, AdditionWarning} from "../components/Additions";

const AEExprStart = lazy(() => import("./sections/aeexprfaq/Start"));

const AEExprBase = lazy(() => import("./sections/aeexprfaq/Base"));

const AEExprLinking = lazy(() => import("./sections/aeexprfaq/Linking"));

const AEExprActions = lazy(() => import("./sections/aeexprfaq/Actions"));

const AEExprErrors = lazy(() => import("./sections/aeexprfaq/Errors"));

const AEExpressionPage = () => {
  useEffect(() => {
    CopyToClipboard.enableAutoCopy();
  }, []);

  const sections = [
    {key: "1", title: "С чего начать?", id: "start", component: AEExprStart},
    {key: "2", title: "База всех баз", id: "base", component: AEExprBase},
    {key: "3", title: "Ссылки и привязки", id: "linking", component: AEExprLinking},
    {key: "4", title: "Как и чем?", id: "actions", component: AEExprActions},
    {key: "5", title: "Ошибки и предупреждения", id: "errors", component: AEExprErrors},
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
          <title>aeexprfaq@aechat</title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="icons/aeexprfaq.svg"
          />
          <meta
            name="description"
            content="Ответы на частые вопросы о выражениях в After Effects"
          />
          <meta
            name="keywords"
            content="чат, ссылки, After Effects, шаблоны After Effects, AETemp, Adobe, советы After Effects, FAQ After Effects, склад стройматериалов, помощь, видеомонтаж, графический дизайн, видеоэффекты, спецэффекты, анимация, 3D-моделирование, motion graphics, композитинг, цветокоррекция, Adobe Premiere, Photoshop, Illustrator, Media Encoder, плагины After Effects, видеопроизводство, рендеринг, обучение, видеоуроки, монтаж видео, создание видео, редактирование видео, графика, видеоконтент, пост-продакшн, filmmaking, кино, телевидение, спецэффекты для фильмов, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, видеореклама, обучающие видео, видеокурсы, видеоуроки, курсы по анимации, туториалы по видеомонтажу, уроки по цветокоррекции, советы по ускорению After Effects, оптимизация, исправление ошибок, видеографика, motion design, инфографика, 3D-анимация, видеоклипы, рекламные ролики, видеопрезентации"
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            property="og:url"
            content="https://aechat.ru/"
          />
          <meta
            property="og:title"
            content="aeexprfaq@aechat"
          />
          <meta
            property="og:description"
            content="Ответы на частые вопросы о выражениях в After Effects"
          />
        </Helmet>
        <Header title="aeexprfaq" />
        <motion.main
          className="main"
          initial={{x: 100, y: 0, opacity: 0}}
          animate={{x: 0, y: 0, opacity: 1}}
          exit={{x: 0, y: 50, opacity: 0}}
          transition={{
            duration: 0.3,
            ease: [0.25, 0, 0, 1],
          }}
        >
          <div className="faq-container-flex">
            <div className="faq-container">
              <div className="faq-title">
                <h1>aeexprfaq</h1>
                <Breadcrumb
                  items={[
                    {
                      title: (
                        <Link to="/aeexprfaq">FaQ по выражениям в After Effects</Link>
                      ),
                      menu: {
                        items: [
                          {title: <Link to="/aefaq">FaQ по Adobe After Effects</Link>},
                          {
                            title: <Link to="/prfaq">FaQ по Adobe Premiere Pro</Link>,
                          },
                          {
                            title: <Link to="/psfaq">FaQ по Adobe Photoshop</Link>,
                          },
                        ],
                      },
                    },
                  ]}
                />
              </div>
              <SupportDonut />
              <AdditionDanger>
                На текущий момент данная страница ещё не полностью готова. В пунктах могут
                быть ошибки, неполная или непроверенная информация касательно работы
                выражений.
              </AdditionDanger>
              <AdditionWarning>
                Данная страница не является полноценным курсом по написанию выражений в{" "}
                <mark className="app">After Effects</mark>. Мнение автора и мнение
                читателя могут отличаться. Примеры выражений выполняются на движке{" "}
                <mark>JavaScript</mark>, его можно изменить в настройках проекта.
              </AdditionWarning>
              <Suspense
                fallback={
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
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
                    initial={{opacity: 0}}
                    animate={isSectionsLoaded ? {opacity: 1} : {}}
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
                            style={{
                              color: "var(--text-color)",
                              textTransform: "uppercase",
                              fontWeight: "800",
                            }}
                            orientation="right"
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
                title="aechat"
                initialYear={2023}
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
