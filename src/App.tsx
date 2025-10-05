import {ConfigProvider, Modal} from "antd";

import {AnimatePresence} from "framer-motion";

import React, {Suspense, lazy, useEffect, useState} from "react";

import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import themeConfig from "./styles/ant_theme";

import LoadingAnimation from "./components/LoadingAnimation";

import useDynamicFavicon from "./hooks/useDynamicFavicon";

import faviconSvg from "/icons/favicon.svg?raw";

import aefaqSvg from "/icons/aefaq.svg?raw";

import prfaqSvg from "/icons/prfaq.svg?raw";

import psfaqSvg from "/icons/psfaq.svg?raw";

import aeexprfaqSvg from "/icons/aeexprfaq.svg?raw";

const Links = lazy(() => import("./pages/linksPage"));

const ChatRules = lazy(() => import("./pages/chatRules"));

const NotFound = lazy(() => import("./pages/notFound"));

const AEFAQ = lazy(() => import("./pages/aefaqPage"));

const PRFAQ = lazy(() => import("./pages/prfaqPage"));

const PSFAQ = lazy(() => import("./pages/psfaqPage"));

const AEExpressionPage = lazy(() => import("./pages/aeexprPage"));

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

  return null;
};
declare global {
  interface Window {
    ym: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

const trackPageView = (path: string) => {
  if (typeof window === "object" && window.ym) {
    window.ym(96346999, "hit", path);
  }
};

const SafariWarningModal = ({
  open,
  onClose,
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
      footer={null}
      open={open}
      title={null}
      width={450}
    >
      <div className="modal">
        <div className="error-content">
          <div className="error-title">⚠ Предупреждение для Safari</div>
          <div
            className="error-message"
            style={{textAlign: "left"}}
          >
            <p>
              В браузере <mark className="app">Safari</mark> при чтении некоторых статаей
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
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontSize: "0.9rem",
              opacity: "0.75",
              margin: "15px",
            }}
          >
            <input
              checked={dontShowAgain}
              type="checkbox"
              onChange={(e) => setDontShowAgain(e.target.checked)}
            />
            Претензий не имею, больше не показывать
          </label>
        </div>
      </div>
    </Modal>
  );
};

const ErrorFallback = ({error}: {error: Error}) => (
  <div className="error-container">
    <div className="error-backtitle">Ошибка</div>
    <div
      className="modal"
      style={{maxWidth: "450px", margin: "15px"}}
    >
      <div className="error-content">
        <div className="error-title">Ошибка: {error.message}</div>
        <div className="error-message">
          <p>Попробуйте перезагрузить страницу для получения свежих данных.</p>
          <div className="flexible-links">
            <button onClick={() => (window.location.href = "/")}>На главную</button>
            <button onClick={() => window.location.reload()}>Обновить страницу</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class ErrorBoundary extends React.Component<
  {children: React.ReactNode},
  {hasError: boolean; error: Error | null}
> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = {hasError: false, error: null};
  }
  static getDerivedStateFromError(error: Error) {
    return {hasError: true, error};
  }
  render() {
    if (this.state.hasError && this.state.error) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

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

  const [showSafariWarning, setShowSafariWarning] = useState(false);

  const [appReady, setAppReady] = useState(false);
  useEffect(() => {
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

    if (isWebKit && isFaqPage) {
      const warningDismissed = localStorage.getItem("safariWarningDismissed") === "true";

      if (!warningDismissed) {
        const lastShown = localStorage.getItem("safariWarningLastShown");

        const now = new Date().getTime();

        const time = 60 * 60 * 1000;

        if (!lastShown || now - parseInt(lastShown, 10) >= time) {
          shouldShowWarning = true;
        }
      }
    }

    if (shouldShowWarning) {
      setAppReady(false);
      setShowSafariWarning(true);
    } else {
      setShowSafariWarning(false);
      setAppReady(true);
    }
  }, [location.pathname]);
  useEffect(() => {
    const path = window.location.pathname;

    if (path.endsWith("/index.html")) {
      window.location.replace("/");
    } else if (path.endsWith(".html")) {
      window.location.replace(path.replace(/\.html$/, ""));
    } else {
      trackPageView(path);
    }
  }, [location]);

  return (
    <ConfigProvider theme={themeConfig}>
      <ErrorBoundary>
        <SafariWarningModal
          open={showSafariWarning}
          onClose={(dontShowAgain) => {
            if (dontShowAgain) {
              localStorage.setItem("safariWarningDismissed", "true");
            } else {
              localStorage.setItem(
                "safariWarningLastShown",
                new Date().getTime().toString()
              );
            }

            setShowSafariWarning(false);
            setAppReady(true);
          }}
        />
        {appReady && (
          <Suspense fallback={<LoadingAnimation />}>
            <AnimatePresence
              mode="wait"
              onExitComplete={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "instant",
                  });
                }, 50);
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
                  element={<AEFAQ />}
                  path="/aefaq"
                />
                <Route
                  element={<PRFAQ />}
                  path="/prfaq"
                />
                <Route
                  element={<PSFAQ />}
                  path="/psfaq"
                />
                <Route
                  element={<AEExpressionPage />}
                  path="/aeexpr"
                />
                <Route
                  element={<ChatRules />}
                  path="/rules"
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
      </ErrorBoundary>
    </ConfigProvider>
  );
};
