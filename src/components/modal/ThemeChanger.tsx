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
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeState, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );

  const [accentHueState, setAccentHueState] = useState<number>(() =>
    parseInt(localStorage.getItem("accentHue") ?? "210", 10)
  );

  const [saturateRatioState, setSaturateRatioState] = useState<number>(() =>
    parseFloat(localStorage.getItem("saturateRatio") ?? "1")
  );

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const setAccentHue = (hue: number) => {
    setAccentHueState(hue);
    localStorage.setItem("accentHue", hue.toString());
  };

  const setSaturateRatio = (ratio: number) => {
    setSaturateRatioState(ratio);
    localStorage.setItem("saturateRatio", ratio.toString());
  };

  const updateTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--accent-hue", accentHueState.toString());
    root.style.setProperty("--saturate-ratio", saturateRatioState.toString());

    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkMode = themeState === "dark" || (themeState === "system" && isSystemDark);
    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
  };
  useEffect(() => updateTheme(), [themeState, accentHueState, saturateRatioState]);
  useEffect(() => {
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
    }),
    [themeState, accentHueState, saturateRatioState]
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
      <button onClick={openModal}>
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
  const {theme, setTheme, accentHue, setAccentHue, saturateRatio, setSaturateRatio} =
    useTheme();

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
        <div className="modal-header">
          <div className="modal-header-title">Оформление</div>
          <button
            className="modal-header-close"
            onClick={closeModal}
          >
            <CloseRounded />
          </button>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
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
        </div>
        <div className="modal-content">
          <div className="theme-title">Оттенок акцентного цвета</div>
          <div className="theme-slider">
            <Slider
              max={360}
              min={0}
              style={{flex: "1 1 auto", width: "100%"}}
              value={accentHue}
              onChange={(value) => setAccentHue(value)}
            />
            <Tooltip title="Сбросить оттенок">
              <button
                style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
                onClick={() => setAccentHue(210)}
              >
                <RestartAlt />
              </button>
            </Tooltip>
          </div>
          <div className="theme-title">Насыщенность акцентного цвета</div>
          <div className="theme-slider">
            <Slider
              max={1.5}
              min={0}
              step={0.025}
              style={{flex: "1 1 auto", width: "100%"}}
              value={saturateRatio}
              onChange={(value) => setSaturateRatio(value)}
            />
            <Tooltip title="Сбросить насыщенность">
              <button
                style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
                onClick={() => setSaturateRatio(1)}
              >
                <RestartAlt />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export {ThemeModal};
