import {Apple, WindowSharp} from "@mui/icons-material";

import React, {ReactNode, useEffect, useState} from "react";

type ContentFilterProps =
  | {windowsContent: ReactNode; macContent?: ReactNode}
  | {windowsContent?: ReactNode; macContent: ReactNode};

const ContentFilter: React.FC<ContentFilterProps> = ({windowsContent, macContent}) => {
  const [isWindowsActive, setIsWindowsActive] = useState(true);

  const detectOperatingSystem = (): boolean => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    return !(
      userAgent.includes("mac") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad")
    );
  };

  useEffect(() => {
    setIsWindowsActive(detectOperatingSystem());
  }, []);

  const hasWindowsContent = windowsContent !== undefined;

  const hasMacContent = macContent !== undefined;

  if (!hasWindowsContent && !hasMacContent) {
    return null;
  }

  let contentToRender: ReactNode = null;
  let infoMessagePrefix: string = "";
  let osName: string = "";
  let osIcon: ReactNode = null;
  let showToggleButton = true;

  if (hasWindowsContent && hasMacContent) {
    contentToRender = isWindowsActive ? windowsContent : macContent;
    infoMessagePrefix = "Информация ниже указана для устройств на ";
    osName = isWindowsActive ? "Windows" : "macOS";
    osIcon = isWindowsActive ? <WindowSharp /> : <Apple />;
  } else if (hasWindowsContent) {
    contentToRender = windowsContent;
    infoMessagePrefix = "Информация ниже указана только для устройств на ";
    osName = "Windows";
    osIcon = <WindowSharp />;
    showToggleButton = false;
  } else if (hasMacContent) {
    contentToRender = macContent;
    infoMessagePrefix = "Информация ниже указана только для устройств на ";
    osName = "macOS";
    osIcon = <Apple />;
    showToggleButton = false;
  }

  return (
    <div>
      {hasWindowsContent || hasMacContent ? (
        <div className="change-os">
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            {osIcon}
            <div>
              {infoMessagePrefix}
              {osName && (
                <b>
                  <u>{osName}</u>
                </b>
              )}
              .
            </div>
          </div>
          {showToggleButton && (
            <button
              aria-label={isWindowsActive ? "Показать для macOS" : "Показать для Windows"}
              onClick={() => setIsWindowsActive(!isWindowsActive)}
            >
              {isWindowsActive ? "Показать для macOS" : "Показать для Windows"}
            </button>
          )}
        </div>
      ) : (
        <div className="change-os">
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <div>
              <b>
                <u>Контент для данной операционной системы не указан.</u>
              </b>
            </div>
          </div>
        </div>
      )}
      {contentToRender}
    </div>
  );
};

export default ContentFilter;
