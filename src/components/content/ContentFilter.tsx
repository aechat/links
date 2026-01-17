import React, {ReactNode, useEffect, useState} from "react";

import {Apple, WindowSharp} from "@mui/icons-material";

type ContentFilterProperties =
  | {windowsContent: ReactNode; macContent?: ReactNode}
  | {windowsContent?: ReactNode; macContent: ReactNode};
const ContentFilter: React.FC<ContentFilterProperties> = ({
  macContent,
  windowsContent,
}) => {
  const [isWindowsActive, setIsWindowsActive] = useState(true);

  useEffect(() => {
    const userAgent = globalThis.navigator.userAgent.toLowerCase();
    const isMac =
      userAgent.includes("mac") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad");

    setIsWindowsActive(!isMac);
  }, []);
  const hasWindowsContent = windowsContent !== undefined;
  const hasMacContent = macContent !== undefined;

  if (!hasWindowsContent && !hasMacContent) {
    return null;
  }

  const showToggleButton = hasWindowsContent && hasMacContent;
  let displayForWindows = isWindowsActive;

  if (hasWindowsContent && !hasMacContent) {
    displayForWindows = true;
  } else if (!hasWindowsContent && hasMacContent) {
    displayForWindows = false;
  }

  const osName = displayForWindows ? "Windows" : "macOS";
  const osIcon = displayForWindows ? <WindowSharp /> : <Apple />;
  const infoMessagePrefix = showToggleButton
    ? "Информация ниже указана для устройств на "
    : "Информация ниже указана только для устройств на ";
  const buttonLabel = displayForWindows ? "Показать для macOS" : "Показать для Windows";

  return (
    <>
      <div className="change-os">
        <div className="os-info-container">
          {osIcon}
          <div>
            {infoMessagePrefix}
            <b>
              <u>{osName}</u>
            </b>
            .
          </div>
        </div>
        {showToggleButton && (
          <button
            aria-label={buttonLabel}
            onClick={() => setIsWindowsActive(!isWindowsActive)}
          >
            {buttonLabel}
          </button>
        )}
      </div>
      <div style={{display: displayForWindows ? "block" : "none"}}>{windowsContent}</div>
      <div style={{display: displayForWindows ? "none" : "block"}}>{macContent}</div>
    </>
  );
};

export default ContentFilter;
