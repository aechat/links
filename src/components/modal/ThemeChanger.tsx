import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {Modal, Slider, Tooltip} from "antd";
import {
  CloseRounded,
  DarkModeRounded,
  FormatColorFillOutlined,
  HideSourceRounded,
  LightModeRounded,
  RestartAlt,
} from "@mui/icons-material";
import {motion} from "framer-motion";

/**
 * тип темы оформления
 * @typedef {"light" | "dark" | "system"} Theme
 */

type Theme = "light" | "dark" | "system";

/**
 * интерфейс контекста темы
 * @interface ThemeContextProps
 */

interface ThemeContextProps {
  /** текущая тема */

  theme: Theme;

  /** функция установки темы */

  setTheme: (theme: Theme) => void;

  /** оттенок акцентного цвета */

  accentHue: number;

  /** функция установки оттенка */

  setAccentHue: (hue: number) => void;

  /** насыщенность акцентного цвета */

  saturateRatio: number;

  /** функция установки насыщенности */

  setSaturateRatio: (ratio: number) => void;
}

/**
 * контекст темы
 */

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

/**
 * провайдер темы
 * @param {Object} props - пропсы компонента
 * @param {React.ReactNode} props.children - дочерние элементы
 * @returns {JSX.Element} провайдер темы
 */

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

  /*
   * устанавливает тему
   * @param {Theme} newTheme - новая тема
   */

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  /*
   * устанавливает оттенок акцентного цвета
   * @param {number} hue - новый оттенок
   */

  const setAccentHue = (hue: number) => {
    setAccentHueState(hue);
    localStorage.setItem("accentHue", hue.toString());
  };

  /*
   * устанавливает насыщенность акцентного цвета
   * @param {number} ratio - новая насыщенность
   */

  const setSaturateRatio = (ratio: number) => {
    setSaturateRatioState(ratio);
    localStorage.setItem("saturateRatio", ratio.toString());
  };

  /*
   * обновляет тему и стили
   */

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

/**
 * хук для работы с темой
 * @returns {ThemeContextProps} контекст темы
 * @throws {Error} если хук используется вне ThemeProvider
 */

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

/**
 * кнопка переключения темы
 * @returns {JSX.Element} кнопка переключения темы
 */

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

/**
 * пропсы для модального окна темы
 * @interface ThemeModalProps
 */

interface ThemeModalProps {
  /** флаг видимости модального окна */

  isModalOpen: boolean;

  /** функция закрытия модального окна */

  closeModal: () => void;
}

/**
 * модальное окно настроек темы
 * @param {ThemeModalProps} props - пропсы компонента
 * @returns {JSX.Element} модальное окно настроек темы
 */

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
            <motion.button
              className={
                theme === "light" ? "theme-button theme-button-selected" : "theme-button"
              }
              whileHover={{
                scale: 0.975,
                transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
              }}
              whileTap={{scale: 0.95, opacity: 0.5}}
              onClick={() => setTheme("light")}
            >
              <LightModeRounded />
              Светлая
            </motion.button>
            <motion.button
              className={
                theme === "dark" ? "theme-button theme-button-selected" : "theme-button"
              }
              whileHover={{
                scale: 0.975,
                transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
              }}
              whileTap={{scale: 0.95, opacity: 0.5}}
              onClick={() => setTheme("dark")}
            >
              <DarkModeRounded />
              Тёмная
            </motion.button>
            <motion.button
              className={
                theme === "system" ? "theme-button theme-button-selected" : "theme-button"
              }
              whileHover={{
                scale: 0.975,
                transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
              }}
              whileTap={{scale: 0.95, opacity: 0.5}}
              onClick={() => setTheme("system")}
            >
              <HideSourceRounded />
              Системная
            </motion.button>
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
        </div>
        <div className="modal-content">
          <div className="theme-title">Насыщенность акцентного цвета</div>
          <div className="theme-slider">
            <Slider
              max={1.25}
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
