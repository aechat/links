import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

import {
  CloseRounded,
  DarkModeRounded,
  FormatColorFillOutlined,
  HideSourceRounded,
  LightModeRounded,
  RestartAlt,
} from "@mui/icons-material";
import {Modal, Slider, Tooltip} from "antd";

type Theme = "light" | "dark" | "system";
interface ThemeContextProperties {
  accentHue: number;
  isAnimationDisabled: boolean;
  isSnowfallEnabled: boolean;
  maxWidth: number;
  saturateRatio: number;
  setAccentHue: (hue: number) => void;
  setIsAnimationDisabled: (disabled: boolean) => void;
  setIsSnowfallEnabled: (enabled: boolean) => void;
  setMaxWidth: (width: number) => void;
  setSaturateRatio: (ratio: number) => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}
const ThemeContext = createContext<ThemeContextProperties | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeState, setThemeState] = useState<Theme>("system");
  const [accentHueState, setAccentHueState] = useState<number>(210);
  const [saturateRatioState, setSaturateRatioState] = useState<number>(1);
  const [maxWidthState, setMaxWidthState] = useState<number>(1175);
  const [isAnimationDisabledState, setIsAnimationDisabledState] =
    useState<boolean>(false);
  const [isSnowfallEnabled, setIsSnowfallEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
      const savedAccentHue = Number.parseInt(
        localStorage.getItem("accentHue") ?? "210",
        10
      );
      const savedSaturateRatio = Number.parseFloat(
        localStorage.getItem("saturateRatio") ?? "1"
      );
      const savedMaxWidth = Number.parseInt(
        localStorage.getItem("maxWidth") ?? "1175",
        10
      );
      const savedIsAnimationDisabled =
        localStorage.getItem("isAnimationDisabled") === "true";

      setThemeState(savedTheme);
      setAccentHueState(savedAccentHue);
      setSaturateRatioState(savedSaturateRatio);
      setMaxWidthState(savedMaxWidth);
      setIsAnimationDisabledState(savedIsAnimationDisabled);

      const isWinter = [0, 1, 11].includes(new Date().getMonth());

      if (isWinter) {
        const snowfallSaved = localStorage.getItem("isSnowfallEnabled");

        if (snowfallSaved === null) {
          setIsSnowfallEnabled(true);
        } else {
          setIsSnowfallEnabled(snowfallSaved === "true");
        }
      } else {
        setIsSnowfallEnabled(false);
      }
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
  const setSnowfallEnabled = (enabled: boolean) => {
    setIsSnowfallEnabled(enabled);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("isSnowfallEnabled", enabled.toString());
    }
  };
  const updateTheme = () => {
    if (globalThis.window === undefined) {
      return;
    }

    const root = document.documentElement;

    root.style.setProperty("--accent-hue", accentHueState.toString());
    root.style.setProperty("--saturate-ratio", saturateRatioState.toString());
    root.style.setProperty("--max-width", `${maxWidthState}px`);
    root.classList.toggle("no-spoiler-animation", isAnimationDisabledState);
    const isSystemDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = themeState === "dark" || (themeState === "system" && isSystemDark);

    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
    globalThis.dispatchEvent(new CustomEvent("accentHueChanged"));
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
    if (globalThis.window === undefined) {
      return;
    }

    const handleSystemThemeChange = () => themeState === "system" && updateTheme();
    const mediaQuery = globalThis.window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [themeState]);
  const contextValue = useMemo(
    () => ({
      accentHue: accentHueState,
      isAnimationDisabled: isAnimationDisabledState,
      isSnowfallEnabled: isSnowfallEnabled,
      maxWidth: maxWidthState,
      saturateRatio: saturateRatioState,
      setAccentHue,
      setIsAnimationDisabled,
      setIsSnowfallEnabled: setSnowfallEnabled,
      setMaxWidth: (width: number) => {
        setMaxWidthState(width);

        if (typeof localStorage !== "undefined") {
          localStorage.setItem("maxWidth", width.toString());
        }
      },
      setSaturateRatio,
      setTheme,
      theme: themeState,
    }),
    [
      themeState,
      accentHueState,
      saturateRatioState,
      maxWidthState,
      isAnimationDisabledState,
      isSnowfallEnabled,
    ]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProperties => {
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

interface ThemeModalProperties {
  closeModal: () => void;
  isModalOpen: boolean;
}
const ThemeModal: React.FC<ThemeModalProperties> = ({closeModal, isModalOpen}) => {
  const {
    accentHue,
    isAnimationDisabled,
    isSnowfallEnabled,
    maxWidth,
    saturateRatio,
    setAccentHue,
    setIsAnimationDisabled,
    setIsSnowfallEnabled,
    setMaxWidth,
    setSaturateRatio,
    setTheme,
    theme,
  } = useTheme();
  const [temporaryHue, setTemporaryHue] = useState(accentHue);
  const [temporarySaturate, setTemporarySaturate] = useState(saturateRatio);

  useEffect(() => {
    setTemporaryHue(accentHue);
  }, [accentHue]);
  useEffect(() => {
    setTemporarySaturate(saturateRatio);
  }, [saturateRatio]);
  const [windowWidth, setWindowWidth] = useState(
    globalThis.window === undefined ? 0 : globalThis.window.innerWidth
  );

  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    const handleResize = () => setWindowWidth(globalThis.window.innerWidth);

    globalThis.window.addEventListener("resize", handleResize);

    return () => globalThis.window.removeEventListener("resize", handleResize);
  }, []);
  const currentPath =
    globalThis.window === undefined ? "" : globalThis.window.location.pathname;
  const pagesWithSpoilerAnimation = ["/aefaq", "/prfaq", "/psfaq", "/aeexpr"];
  const pagesWithWidthSelector = [...pagesWithSpoilerAnimation, "/rules"];
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const isNewYearPeriod = (month === 11 && day >= 25) || (month === 0 && day <= 7);
  const isWinter = [0, 1, 11].includes(month);
  const showSpoilerAnimationSelector = pagesWithSpoilerAnimation.some((path) =>
    currentPath.startsWith(path)
  );
  const showWidthSelector =
    pagesWithWidthSelector.some((path) => currentPath.startsWith(path)) &&
    windowWidth >= 1000;

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
          {showSpoilerAnimationSelector && (
            <>
              <div className="theme-title">Анимация раскрытия спойлеров</div>
              <div className="theme-selector">
                <button
                  className={
                    isAnimationDisabled === false
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
            </>
          )}
          {isWinter && (
            <>
              <div className="theme-title">
                {isNewYearPeriod ? "Новогоднее настроение" : "Анимация снега"}
              </div>
              <div className="theme-selector">
                <button
                  className={
                    isSnowfallEnabled
                      ? "theme-button theme-button-selected"
                      : "theme-button"
                  }
                  onClick={() => setIsSnowfallEnabled(true)}
                >
                  {isNewYearPeriod ? "Включено" : "Включена"}
                </button>
                <button
                  className={
                    isSnowfallEnabled
                      ? "theme-button"
                      : "theme-button theme-button-selected"
                  }
                  onClick={() => setIsSnowfallEnabled(false)}
                >
                  {isNewYearPeriod ? "Выключено" : "Выключена"}
                </button>
              </div>
            </>
          )}
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
              value={temporaryHue}
              onAfterChange={setAccentHue}
              onChange={setTemporaryHue}
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
              value={temporarySaturate}
              onAfterChange={setSaturateRatio}
              onChange={setTemporarySaturate}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export {ThemeModal};
