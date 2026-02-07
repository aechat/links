import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import {
  CloseRounded,
  DarkModeRounded,
  FormatColorFillOutlined,
  HideSourceRounded,
  LightModeRounded,
  RestartAlt,
} from "@mui/icons-material";
import {Modal, Slider, Switch, Tooltip} from "antd";

import modalStyles from "./Modal.module.scss";
import styles from "./ThemeChanger.module.scss";

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

  useLayoutEffect(() => {
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

  const calculateIsDarkMode = (theme: Theme, isSystemDark: boolean): boolean => {
    return theme === "dark" || (theme === "system" && isSystemDark);
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

    const isDarkMode = calculateIsDarkMode(themeState, isSystemDark);

    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
    globalThis.dispatchEvent(new CustomEvent("accentHueChanged"));
  };

  useLayoutEffect(
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

interface ThemeToggleButtonProperties {
  className?: string;
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProperties> = ({className}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className={className}
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

interface ThemeOptionButtonProperties {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const ThemeOptionButton: React.FC<ThemeOptionButtonProperties> = ({
  children,
  isSelected,
  onClick,
}) => (
  <button
    className={`${styles["theme-button"]} ${isSelected ? styles["theme-button-selected"] : ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

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
      closeIcon={false}
      footer={<></>}
      open={isModalOpen}
      width={450}
      onCancel={closeModal}
    >
      <div className={modalStyles["modal"]}>
        <div className={modalStyles["modal-content"]}>
          <div className={modalStyles["modal-header"]}>
            <div className={modalStyles["modal-header-title"]}>Оформление</div>
            <button
              className={modalStyles["modal-header-close"]}
              onClick={closeModal}
            >
              <CloseRounded />
            </button>
          </div>
          <div className={styles["theme-title"]}>Цветовая схема</div>
          <div className={styles["theme-selector"]}>
            <ThemeOptionButton
              isSelected={theme === "light"}
              onClick={() => setTheme("light")}
            >
              <LightModeRounded />
              Светлая
            </ThemeOptionButton>
            <ThemeOptionButton
              isSelected={theme === "dark"}
              onClick={() => setTheme("dark")}
            >
              <DarkModeRounded />
              Тёмная
            </ThemeOptionButton>
            <ThemeOptionButton
              isSelected={theme === "system"}
              onClick={() => setTheme("system")}
            >
              <HideSourceRounded />
              Системная
            </ThemeOptionButton>
          </div>
          {showWidthSelector && (
            <>
              <div className={styles["theme-title"]}>Максимальная ширина контента</div>
              <div className={styles["theme-selector"]}>
                <ThemeOptionButton
                  isSelected={maxWidth === 1000}
                  onClick={() => setMaxWidth(1000)}
                >
                  Маленькая<sup>1000px</sup>
                </ThemeOptionButton>
                <ThemeOptionButton
                  isSelected={maxWidth === 1175}
                  onClick={() => setMaxWidth(1175)}
                >
                  Средняя<sup>1175px</sup>
                </ThemeOptionButton>
                <ThemeOptionButton
                  isSelected={maxWidth === 1400}
                  onClick={() => setMaxWidth(1400)}
                >
                  Большая<sup>1400px</sup>
                </ThemeOptionButton>
              </div>
            </>
          )}
          {showSpoilerAnimationSelector && (
            <div className={styles["theme-toggle"]}>
              <span className={styles["theme-title"]}>Анимация раскрытия спойлеров</span>
              <Switch
                checked={!isAnimationDisabled}
                onChange={(checked) => setIsAnimationDisabled(!checked)}
              />
            </div>
          )}
          {isWinter && (
            <div className={styles["theme-toggle"]}>
              <span className={styles["theme-title"]}>
                {isNewYearPeriod ? "Новогоднее настроение" : "Анимация снега"}
              </span>
              <Switch
                checked={isSnowfallEnabled}
                onChange={(checked) => setIsSnowfallEnabled(checked)}
              />
            </div>
          )}
          <div className={styles["theme-title"]}>
            Оттенок акцентного цвета
            <Tooltip title="Сбросить оттенок">
              <button
                className={styles["theme-reset-button"]}
                onClick={() => setAccentHue(210)}
              >
                <RestartAlt />
              </button>
            </Tooltip>
          </div>
          <div className={styles["theme-slider"]}>
            <Slider
              max={360}
              min={0}
              value={temporaryHue}
              onAfterChange={setAccentHue}
              onChange={setTemporaryHue}
            />
          </div>
          <div className={styles["theme-title"]}>
            Насыщенность акцентного цвета
            <Tooltip title="Сбросить насыщенность">
              <button
                className={styles["theme-reset-button"]}
                onClick={() => setSaturateRatio(1)}
              >
                <RestartAlt />
              </button>
            </Tooltip>
          </div>
          <div className={styles["theme-slider"]}>
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
