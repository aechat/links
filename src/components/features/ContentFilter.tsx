import {Apple, WindowSharp} from "@mui/icons-material";
import React, {ReactNode, useEffect, useState} from "react";

interface ContentSwitcherProps {
  windowsContent: ReactNode;
  macContent: ReactNode;
}

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({
  windowsContent,
  macContent,
}) => {
  const [isWindows, setIsWindows] = useState(true);

  const detectOperatingSystem = (): boolean => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return !(
      userAgent.includes("mac") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad")
    );
  };

  const toggleContent = (): void => {
    setIsWindows(!isWindows);
  };

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
