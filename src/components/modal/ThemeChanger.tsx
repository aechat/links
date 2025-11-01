import {
  CloseRounded,
  DarkModeRounded,
  FormatColorFillOutlined,
  HideSourceRounded,
  LightModeRounded,
  RestartAlt,
} from "@mui/icons-material";

import {Modal, Slider, Tooltip} from "antd";

import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

type Theme = "light" | "dark" | "system";
interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  accentHue: number;
  setAccentHue: (hue: number) => void;
  saturateRatio: number;
  setSaturateRatio: (ratio: number) => void;
  maxWidth: number;
  setMaxWidth: (width: number) => void;
  isAnimationDisabled: boolean;
  setIsAnimationDisabled: (disabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeState, setThemeState] = useState<Theme>("system");

  const [accentHueState, setAccentHueState] = useState<number>(210);

  const [saturateRatioState, setSaturateRatioState] = useState<number>(1);

  const [maxWidthState, setMaxWidthState] = useState<number>(1175);

  const [isAnimationDisabledState, setIsAnimationDisabledState] =
    useState<boolean>(false);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const savedTheme = (localStorage.getItem("theme") as Theme) || "system";

      const savedAccentHue = parseInt(localStorage.getItem("accentHue") ?? "210", 10);

      const savedSaturateRatio = parseFloat(localStorage.getItem("saturateRatio") ?? "1");

      const savedMaxWidth = parseInt(localStorage.getItem("maxWidth") ?? "1175", 10);

      const savedIsAnimationDisabled =
        localStorage.getItem("isAnimationDisabled") === "true";
      setThemeState(savedTheme);
      setAccentHueState(savedAccentHue);
      setSaturateRatioState(savedSaturateRatio);
      setMaxWidthState(savedMaxWidth);
      setIsAnimationDisabledState(savedIsAnimationDisabled);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  const setAccentHue = (hue: number) => {
    setAccentHueState(hue);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("accentHue", hue.toString());
    }
  };

  const setSaturateRatio = (ratio: number) => {
    setSaturateRatioState(ratio);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("saturateRatio", ratio.toString());
    }
  };

  const setIsAnimationDisabled = (disabled: boolean) => {
    setIsAnimationDisabledState(disabled);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("isAnimationDisabled", disabled.toString());
    }
  };

  const updateTheme = () => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.style.setProperty("--accent-hue", accentHueState.toString());
    root.style.setProperty("--saturate-ratio", saturateRatioState.toString());
    root.style.setProperty("--max-width", `${maxWidthState}px`);
    root.classList.toggle("no-spoiler-animation", isAnimationDisabledState);

    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkMode = themeState === "dark" || (themeState === "system" && isSystemDark);
    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
    window.dispatchEvent(new CustomEvent("accentHueChanged"));
  };
  useEffect(
    () => updateTheme(),
    [
      themeState,
      accentHueState,
      saturateRatioState,
      maxWidthState,
      isAnimationDisabledState,
    ]
  );
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleSystemThemeChange = () => themeState === "system" && updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [themeState]);

  const contextValue = useMemo(
    () => ({
      theme: themeState,
      setTheme,
      accentHue: accentHueState,
      setAccentHue,
      saturateRatio: saturateRatioState,
      setSaturateRatio,
      maxWidth: maxWidthState,
      setMaxWidth: (width: number) => {
        setMaxWidthState(width);

        if (typeof localStorage !== "undefined") {
          localStorage.setItem("maxWidth", width.toString());
        }
      },
      isAnimationDisabled: isAnimationDisabledState,
      setIsAnimationDisabled,
    }),
    [
      themeState,
      accentHueState,
      saturateRatioState,
      maxWidthState,
      isAnimationDisabledState,
    ]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export const ThemeToggleButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="icon"
        onClick={openModal}
      >
        <FormatColorFillOutlined />
      </button>
      <ThemeModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
};
interface ThemeModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ThemeModal: React.FC<ThemeModalProps> = ({isModalOpen, closeModal}) => {
  const {
    theme,
    setTheme,
    accentHue,
    setAccentHue,
    saturateRatio,
    setSaturateRatio,
    maxWidth,
    setMaxWidth,
    isAnimationDisabled,
    setIsAnimationDisabled,
  } = useTheme();

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  const allowedPaths = ["/aefaq", "/prfaq", "/psfaq", "/aeexpr", "/rules"];

  const showWidthSelector =
    allowedPaths.some((path) => currentPath.startsWith(path)) && windowWidth >= 1000;

  return (
    <Modal
      destroyOnClose
      closeIcon={null}
      footer={null}
      open={isModalOpen}
      width={450}
      onCancel={closeModal}
    >
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header-title">Оформление</div>
            <button
              className="modal-header-close"
              onClick={closeModal}
            >
              <CloseRounded />
            </button>
          </div>
          <div className="theme-title">Цветовая схема</div>
          <div className="theme-selector">
            <button
              className={
                theme === "light" ? "theme-button theme-button-selected" : "theme-button"
              }
              onClick={() => setTheme("light")}
            >
              <LightModeRounded />
              Светлая
            </button>
            <button
              className={
                theme === "dark" ? "theme-button theme-button-selected" : "theme-button"
              }
              onClick={() => setTheme("dark")}
            >
              <DarkModeRounded />
              Тёмная
            </button>
            <button
              className={
                theme === "system" ? "theme-button theme-button-selected" : "theme-button"
              }
              onClick={() => setTheme("system")}
            >
              <HideSourceRounded />
              Системная
            </button>
          </div>
          {showWidthSelector && (
            <>
              <div className="theme-title">Максимальная ширина контента</div>
              <div className="theme-selector">
                <button
                  className={
                    maxWidth === 1000
                      ? "theme-button theme-button-selected"
                      : "theme-button"
                  }
                  onClick={() => setMaxWidth(1000)}
                >
                  Маленькая<sup>1000px</sup>
                </button>
                <button
                  className={
                    maxWidth === 1175
                      ? "theme-button theme-button-selected"
                      : "theme-button"
                  }
                  onClick={() => setMaxWidth(1175)}
                >
                  Средняя<sup>1175px</sup>
                </button>
                <button
                  className={
                    maxWidth === 1400
                      ? "theme-button theme-button-selected"
                      : "theme-button"
                  }
                  onClick={() => setMaxWidth(1400)}
                >
                  Большая<sup>1400px</sup>
                </button>
              </div>
            </>
          )}
          <div className="theme-title">Анимация раскрытия спойлеров</div>
          <div className="theme-selector">
            <button
              className={
                !isAnimationDisabled
                  ? "theme-button theme-button-selected"
                  : "theme-button"
              }
              onClick={() => setIsAnimationDisabled(false)}
            >
              Включена
            </button>
            <button
              className={
                isAnimationDisabled
                  ? "theme-button theme-button-selected"
                  : "theme-button"
              }
              onClick={() => setIsAnimationDisabled(true)}
            >
              Выключена
            </button>
          </div>
          <div className="theme-title">
            Оттенок акцентного цвета
            <Tooltip title="Сбросить оттенок">
              <button
                className="theme-reset-button"
                onClick={() => setAccentHue(210)}
              >
                <RestartAlt />
              </button>
            </Tooltip>
          </div>
          <div className="theme-slider">
            <Slider
              max={360}
              min={0}
              value={accentHue}
              onChange={(value) => setAccentHue(value)}
            />
          </div>
          <div className="theme-title">
            Насыщенность акцентного цвета
            <Tooltip title="Сбросить насыщенность">
              <button
                className="theme-reset-button"
                onClick={() => setSaturateRatio(1)}
              >
                <RestartAlt />
              </button>
            </Tooltip>
          </div>
          <div className="theme-slider">
            <Slider
              max={1}
              min={0}
              step={0.025}
              value={saturateRatio}
              onChange={(value) => setSaturateRatio(value)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export {ThemeModal};
