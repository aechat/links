import React, {lazy, Suspense, useEffect, useRef, useState} from "react";
import {MetrikaCounter} from "react-metrika";

import {ConfigProvider, message, Modal} from "antd";
import {AnimatePresence} from "framer-motion";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Snowfall from "react-snowfall";

import BrowserWarning from "./components/modals/BrowserWarning";
import modalStyles from "./components/modals/Modal.module.scss";
import {ThemeProvider, useTheme} from "./components/modals/ThemeChanger";
import LoadingAnimation from "./components/ui/LoadingAnimation";
import LoadingContext from "./context/LoadingContext";
import {copyText} from "./hooks/useCopyToClipboard";
import useDynamicFavicon from "./hooks/useDynamicFavicon";
import themeConfig from "./styles/antTheme";
import {getBrowserInfo} from "./utils/browserDetection";
import faviconSvg from "/icons/favicon.svg?raw";
import aefaqSvg from "/icons/aefaq.svg?raw";
import prfaqSvg from "/icons/prfaq.svg?raw";
import psfaqSvg from "/icons/psfaq.svg?raw";
import aeexprfaqSvg from "/icons/aeexprfaq.svg?raw";

const Links = lazy(() => import("./pages/LinksPage"));

const ChatRules = lazy(() => import("./pages/ChatRules"));

const NotFound = lazy(() => import("./pages/NotFound"));

const AeFaqPage = lazy(() => import("./pages/AeFaqPage"));

const PrFaqPage = lazy(() => import("./pages/PrFaqPage"));

const PsFaqPage = lazy(() => import("./pages/PsFaqPage"));

const AeExprPage = lazy(() => import("./pages/AeExprPage"));

const FilesRedirect = () => {
  useEffect(() => {
    document.title = "files@aechat";
    globalThis.location.href = "https://github.com/aechat/links/tree/main/public/files";
  }, []);

  return <></>;
};

const RegFileRedirect = () => {
  useEffect(() => {
    document.title = "regfile@aechat";

    const link = document.createElement("a");

    link.href = "/files/Enable%20Extensions%20Adobe.reg";
    link.download = "Enable Extensions Adobe.reg";
    document.body.append(link);
    link.click();
    link.remove();

    alert(
      "После скачивания откройте файл реестра и подтвердите слияние, нажав «Да». Это необходимо для корректной работы расширений, которые находятся в меню «Window» → «Extensions»."
    );

    history.back();
  }, []);

  return <></>;
};

const RedirectHtml = () => {
  const location = useLocation();

  const path = location.pathname;

  if (path.endsWith(".html")) {
    return (
      <Navigate
        replace
        to={path.replace(/\.html$/, "")}
      />
    );
  }

  return <></>;
};

const SafariWarningModal = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: (dontShowAgain: boolean) => void;
}) => {
  const [dontShowAgain, setDontShowAgain] = React.useState(false);

  const handleClose = () => {
    onClose(dontShowAgain);
  };

  return (
    <Modal
      centered
      closable={false}
      footer={<></>}
      open={open}
      title={undefined}
      width={450}
    >
      <div className={modalStyles["modal"]}>
        <div className="error-content">
          <div className="error-title">⚠ Предупреждение для Safari</div>
          <div
            className="error-message"
            style={{textAlign: "left"}}
          >
            <p>
              В браузере <mark className="app">Safari</mark> при чтении некоторых статей
              данная страница может упасть в ошибку{" "}
              <mark className="danger">«На этой странице произошла ошибка»</mark> из-за
              переполнения памяти.
            </p>
            <p>
              Во избежание проблем рекомендуется открывать данную страницу с Mac или ПК
              через <mark className="app">Chrome</mark> или{" "}
              <mark className="app">Firefox</mark>. Вы можете продолжить работу с сайтом,
              закрыв данное окно.
            </p>
          </div>
          <div className="flexible-links">
            <button onClick={handleClose}>Продолжить</button>
          </div>
          <label
            style={{
              alignItems: "center",
              cursor: "pointer",
              display: "flex",
              fontSize: "0.9rem",
              gap: "8px",
              margin: "15px",
              opacity: "0.75",
            }}
          >
            <input
              checked={dontShowAgain}
              type="checkbox"
              onChange={(event) => setDontShowAgain(event.target.checked)}
            />
            Претензий не имею, больше не показывать
          </label>
        </div>
      </div>
    </Modal>
  );
};

const ErrorFallback = ({error}: {error: Error}) => {
  const isDynamicImportError =
    error.message.includes("dynamically imported module") ||
    (error.cause &&
      typeof error.cause === "object" &&
      "message" in error.cause &&
      (error.cause as Error).message.includes("dynamically imported module"));

  const isTimeoutError = error.message.includes("timed out");

  return (
    <div className="error-container">
      <div className="error-backtitle">Ошибка</div>
      <div
        className={modalStyles["modal"]}
        style={{margin: "15px", maxWidth: "450px"}}
      >
        <div className="error-content">
          <div className="error-title">
            {(() => {
              let errorTitle = "Произошла ошибка";

              if (isDynamicImportError) {
                errorTitle = "Доступна новая версия сайта";
              } else if (isTimeoutError) {
                errorTitle = "Загрузка страницы заняла слишком много времени";
              }

              return errorTitle;
            })()}
          </div>
          <div className="error-message">
            <p>
              {(() => {
                let errorMessage = "Всякое бывает, попробуйте перезагрузить страницу.";

                if (isDynamicImportError) {
                  errorMessage =
                    "Обновите страницу, чтобы получить доступ к последним изменениям.";
                } else if (isTimeoutError) {
                  errorMessage =
                    "Пожалуйста, проверьте ваше интернет-соединение и попробуйте обновить страницу.";
                }

                return errorMessage;
              })()}
            </p>
            {!isDynamicImportError && (
              <p>
                <span
                  style={{cursor: "pointer", fontSize: "0.9rem", opacity: 0.5}}
                  onClick={async () => {
                    const success = await copyText(error.message);

                    if (success) {
                      message.success("Текст ошибки скопирован в буфер обмена");
                    } else {
                      message.error("Не удалось скопировать текст ошибки");
                    }
                  }}
                >
                  {error.message}
                </span>
              </p>
            )}
            <div className="flexible-links">
              {isDynamicImportError === false && (
                <button
                  onClick={() => {
                    if (globalThis.window !== undefined)
                      globalThis.window.location.href = "/";
                  }}
                >
                  На главную
                </button>
              )}
              <button
                onClick={() => {
                  if (globalThis.window !== undefined)
                    globalThis.window.location.reload();
                }}
              >
                Обновить страницу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component<
  {children: React.ReactNode},
  {hasError: boolean; error: Error | undefined}
> {
  constructor(properties: {children: React.ReactNode}) {
    super(properties);
    this.state = {error: undefined, hasError: false};
  }

  static getDerivedStateFromError(error: Error) {
    return {error, hasError: true};
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <ErrorFallback error={this.state.error} />;
    }

    return <>{this.props.children}</>;
  }
}

const SnowfallManager = () => {
  const {accentHue, isSnowfallEnabled, saturateRatio, theme} = useTheme();

  const isSystemDark =
    globalThis.window?.matchMedia &&
    globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDarkMode = theme === "dark" || (theme === "system" && isSystemDark);

  const lightness = isDarkMode ? "75%" : "50%";

  const color = `hsl(${accentHue}, ${saturateRatio * 50}%, ${lightness})`;

  return isSnowfallEnabled ? (
    <Snowfall
      color={color}
      opacity={[0.25, 0.5]}
      radius={[0.5, 1.5]}
      speed={[0.25, 1]}
      style={{
        height: "100vh",
        position: "fixed",
        width: "100vw",
      }}
      wind={[0, 1]}
    />
  ) : (
    <></>
  );
};

export const App = () => {
  const location = useLocation();

  const [svgContent, setSvgContent] = useState(faviconSvg);

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/aefaq")) {
      setSvgContent(aefaqSvg);
    } else if (path.startsWith("/prfaq")) {
      setSvgContent(prfaqSvg);
    } else if (path.startsWith("/psfaq")) {
      setSvgContent(psfaqSvg);
    } else if (path.startsWith("/aeexpr")) {
      setSvgContent(aeexprfaqSvg);
    } else {
      setSvgContent(faviconSvg);
    }
  }, [location.pathname]);

  useDynamicFavicon(svgContent);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [isSafariWarningOpen, setIsSafariWarningOpen] = useState(false);

  const [isOldBrowserWarningOpen, setIsOldBrowserWarningOpen] = useState(false);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    let shouldShowWarning = false;

    const browserInfo = getBrowserInfo();

    if (browserInfo.isLegacy) {
      if (typeof localStorage === "undefined") {
        shouldShowWarning = true;
      } else {
        const warningDismissed =
          localStorage.getItem("oldBrowserWarningDismissed") === "true";

        if (!warningDismissed) {
          const lastShown = localStorage.getItem("oldBrowserWarningLastShown");

          const now = Date.now();

          const time = 24 * 60 * 60 * 1000;

          if (!lastShown || now - Number.parseInt(lastShown, 10) >= time) {
            shouldShowWarning = true;
          }
        }
      }
    }

    setIsOldBrowserWarningOpen(shouldShowWarning);
  }, []);

  const [isAppReady, setIsAppReady] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  const [loadingError, setLoadingError] = useState<Error | undefined>();

  const previousPathname = useRef(location.pathname);

  if (previousPathname.current !== location.pathname) {
    previousPathname.current = location.pathname;
    setIsLoading(true);
  }

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const safetyTimer = setTimeout(() => {
      setLoadingError(new Error("Page loading timed out after 60 seconds."));
    }, 60_000);

    return () => clearTimeout(safetyTimer);
  }, [isLoading]);

  useEffect(() => {
    setLoadingError(undefined);
  }, [location.pathname]);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    let shouldShowWarning = false;

    const isWebKit =
      typeof navigator !== "undefined" &&
      /AppleWebKit|Epiphany|Safari/i.test(navigator.userAgent) &&
      !/Chrome|Chromium|Edg|OPR|Brave/i.test(navigator.userAgent);

    const path = location.pathname;

    const isFaqPage =
      path.startsWith("/aefaq") ||
      path.startsWith("/prfaq") ||
      path.startsWith("/psfaq") ||
      path.startsWith("/aeexpr");

    if (isWebKit && isFaqPage && typeof localStorage !== "undefined") {
      const warningDismissed = localStorage.getItem("safariWarningDismissed") === "true";

      if (!warningDismissed) {
        const lastShown = localStorage.getItem("safariWarningLastShown");

        const now = Date.now();

        const time = 60 * 60 * 1000;

        if (!lastShown || now - Number.parseInt(lastShown, 10) >= time) {
          shouldShowWarning = true;
        }
      }
    }

    if (shouldShowWarning) {
      setIsAppReady(false);
      setIsSafariWarningOpen(true);
    } else {
      setIsSafariWarningOpen(false);
      setIsAppReady(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    const path = globalThis.window.location.pathname;

    if (path.endsWith("/index.html")) {
      globalThis.window.location.replace("/");
    } else if (path.endsWith(".html")) {
      globalThis.window.location.replace(path.replace(/\.html$/, ""));
    }
  }, [location]);

  if (loadingError) {
    return <ErrorFallback error={loadingError} />;
  }

  if (isClient && isOldBrowserWarningOpen) {
    return (
      <BrowserWarning
        open={isOldBrowserWarningOpen}
        onClose={(dontShowAgain) => {
          if (typeof localStorage !== "undefined") {
            if (dontShowAgain) {
              localStorage.setItem("oldBrowserWarningDismissed", "true");
            } else {
              localStorage.setItem("oldBrowserWarningLastShown", Date.now().toString());
            }
          }

          setIsOldBrowserWarningOpen(false);
        }}
      />
    );
  }

  return (
    <ConfigProvider theme={themeConfig}>
      <ThemeProvider>
        <SnowfallManager />
        <MetrikaCounter
          id={96_346_999}
          options={{
            accurateTrackBounce: true,
            clickmap: true,
            trackHash: true,
            trackLinks: true,
            webvisor: true,
          }}
        />
        <ErrorBoundary>
          <SafariWarningModal
            open={isSafariWarningOpen}
            onClose={(dontShowAgain) => {
              if (typeof localStorage !== "undefined") {
                if (dontShowAgain) {
                  localStorage.setItem("safariWarningDismissed", "true");
                } else {
                  localStorage.setItem("safariWarningLastShown", Date.now().toString());
                }
              }

              setIsSafariWarningOpen(false);
              setIsAppReady(true);
            }}
          />
          <LoadingContext.Provider value={{setIsLoading}}>
            <LoadingAnimation isLoading={isLoading && !isSafariWarningOpen} />
            {isAppReady && (
              <Suspense fallback={undefined}>
                <AnimatePresence
                  mode="wait"
                  onExitComplete={() => {
                    if (globalThis.window !== undefined) {
                      setTimeout(() => {
                        globalThis.window.scrollTo({
                          behavior: "instant",
                          top: 0,
                        });
                      }, 50);
                    }
                  }}
                >
                  <Routes
                    key={location.pathname}
                    location={location}
                  >
                    <Route
                      element={<Links />}
                      path="/"
                    />
                    <Route
                      element={<AeFaqPage />}
                      path="/aefaq"
                    />
                    <Route
                      element={<PrFaqPage />}
                      path="/prfaq"
                    />
                    <Route
                      element={<PsFaqPage />}
                      path="/psfaq"
                    />
                    <Route
                      element={<AeExprPage />}
                      path="/aeexpr"
                    />
                    <Route
                      element={<ChatRules />}
                      path="/rules"
                    />
                    <Route
                      element={<FilesRedirect />}
                      path="/files"
                    />
                    <Route
                      element={<RegFileRedirect />}
                      path="/regfile"
                    />
                    <Route
                      element={<RegFileRedirect />}
                      path="/reg"
                    />
                    <Route
                      element={
                        <>
                          <NotFound />
                          <RedirectHtml />
                        </>
                      }
                      path="*"
                    />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            )}
          </LoadingContext.Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </ConfigProvider>
  );
};
