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

  const [loadedCount, setLoadedCount] = useState(0);
  useEffect(() => {
    if (loadedCount === sections.length) {
      setIsPageLoaded(true);
      generateAnchorId();
    }
  }, [loadedCount, sections.length]);
  useEffect(() => {
    const loadSections = async () => {
      for (const section of sections) {
        await new Promise<void>((resolve) => {
          setVisibleSections((prev) => [...prev, section.key]);
          setTimeout(resolve, 10);
        });
      }
    };
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
            href="aeexprfaq.svg"
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
          transition={{duration: 0.5, type: "spring", ease: [0.075, 0.82, 0.165, 1]}}
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
              {sections.map(({key, title, component: Component, id}) =>
                visibleSections.includes(key) ? (
                  <div
                    key={key}
                    id={id}
                  >
                    <Suspense
                      fallback={
                        <div style={{height: "75vh"}}>
                          <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            style={{
                              padding: "20px",
                              display: "flex",
                              marginBlock: "20px",
                              flexDirection: "row",
                              alignItems: "center",
                              flexWrap: "wrap",
                              gap: "15px",
                              justifyContent: "center",
                            }}
                            transition={{
                              duration: 0.5,
                              ease: [0.075, 0.82, 0.165, 1],
                              delay: 1,
                            }}
                          >
                            <CircularProgress sx={{color: "var(--accent)"}} />
                            <motion.p
                              initial={{opacity: 0}}
                              animate={{opacity: 0.5}}
                              transition={{
                                duration: 1,
                                ease: [0.075, 0.82, 0.165, 1],
                              }}
                              style={{
                                margin: "10px",
                                fontSize: "0.875rem",
                                maxWidth: "400px",
                              }}
                            >
                              {
                                [
                                  "Всё ещё грузим полезную информацию",
                                  "Интересный факт: в After Effects можно выполнять арифметические операции с помощью знаков сложения и вычитания, умножения и деления",
                                  "Убедитесь в том, что ваше устройство подключено к Интернету",
                                  "Секция всё ещё грузится, наберитесь терпения",
                                  "Надеемся, что код сайта не поломался",
                                  "Попробуйте перезагрузить страницу, если секция всё ещё грузится",
                                  "Интересный факт: в After Effects имеется ограничение размера в 30 тысяч пикселей на каждую ось",
                                  "Пока секции грузятся, дам совет: в любой непонятной ситуации - делай прекомпоз",
                                  "Прочтите заклинание 'фастус информейтус лоадинг', если секция слишком долго грузится",
                                  "Когда-нибудь секция загрузится и все будут жить счастливо...",
                                ][Math.floor(Math.random() * 10)]
                              }
                            </motion.p>
                          </motion.div>
                        </div>
                      }
                    >
                      <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                          ease: [0.075, 0.82, 0.165, 1],
                          delay: 0.1,
                        }}
                        onAnimationComplete={() => setLoadedCount((prev) => prev + 1)}
                      >
                        <Divider
                          style={{
                            color: "var(--text-color)",
                            textTransform: "uppercase",
                            fontWeight: "800",
                          }}
                          orientation="right"
                        >
                          {title}
                        </Divider>
                        <Component />
                      </motion.div>
                    </Suspense>
                  </div>
                ) : null
              )}
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
