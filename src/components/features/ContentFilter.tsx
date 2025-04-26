import {Apple, WindowSharp} from "@mui/icons-material";
import React, {ReactNode, useEffect, useState} from "react";
interface ContentSwitcherProps {
  windowsContent: ReactNode; // контент для Windows
  macContent: ReactNode; // контент для macOS
}

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({
  windowsContent,
  macContent,
}) => {
  const [isWindows, setIsWindows] = useState(true);

  // *: определение устройства по userAgent
  const detectOperatingSystem = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (
      userAgent.includes("mac") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad")
    ) {
      setIsWindows(false);
    } else {
      setIsWindows(true);
    }
  };
  useEffect(() => {
    detectOperatingSystem();
  }, []);

  const toggleContent = () => {
    setIsWindows(!isWindows);
  };

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
        <button onClick={toggleContent}>
          {isWindows ? "Показать для macOS" : "Показать для Windows"}
        </button>
      </div>
      {isWindows ? windowsContent : macContent}
    </div>
  );
};
export default ContentSwitcher;
