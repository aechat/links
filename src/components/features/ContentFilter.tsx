import {Apple, WindowSharp} from "@mui/icons-material";
import React, {ReactNode, useEffect, useState} from "react";

/**
 * пропсы компонента переключения контента
 */

interface ContentSwitcherProps {
  /** контент для windows */

  windowsContent: ReactNode;

  /** контент для macos */

  macContent: ReactNode;
}

/**
 * компонент для переключения контента между windows и macos
 * @param windowsContent - контент для windows
 * @param macContent - контент для macos
 * @returns компонент с возможностью переключения контента
 */

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({
  windowsContent,
  macContent,
}) => {
  const [isWindows, setIsWindows] = useState(true);

  /*
   * определяет операционную систему по useragent
   * @returns true если система windows, false если macos
   */

  const detectOperatingSystem = (): boolean => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    return !(
      userAgent.includes("mac") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad")
    );
  };

  /*
   * переключает отображаемый контент
   */

  const toggleContent = (): void => {
    setIsWindows(!isWindows);
  };

  // определение операционной системы при монтировании компонента

  useEffect(() => {
    setIsWindows(detectOperatingSystem());
  }, []);

  return (
    <div>
      <div className="change_os">
        {isWindows ? (
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <WindowSharp />
            <div>
              Информация указана для устройств на{" "}
              <b>
                <u>Windows</u>
              </b>
              .
            </div>
          </div>
        ) : (
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <Apple />
            <div>
              Информация указана для устройств на{" "}
              <b>
                <u>macOS</u>
              </b>
              .
            </div>
          </div>
        )}
        <button
          aria-label={isWindows ? "Показать для macOS" : "Показать для Windows"}
          onClick={toggleContent}
        >
          {isWindows ? "Показать для macOS" : "Показать для Windows"}
        </button>
      </div>
      {isWindows ? windowsContent : macContent}
    </div>
  );
};
export default ContentSwitcher;
