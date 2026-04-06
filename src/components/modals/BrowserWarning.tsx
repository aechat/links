import React from "react";

import {useRipple} from "../../hooks/useRipple";
import {withSelectionHaptic} from "../../utils/haptics";

import styles from "./BrowserWarning.module.scss";

interface BrowserWarningProperties {
  onClose: (dontShowAgain: boolean) => void;
  open: boolean;
}

const BrowserWarning: React.FC<BrowserWarningProperties> = ({onClose, open}) => {
  const [dontShowAgain, setDontShowAgain] = React.useState(false);

  const handleClose = () => {
    onClose(dontShowAgain);
  };

  const ripple = useRipple<HTMLButtonElement>({haptic: "soft"});

  const handleDontShowAgainChange = withSelectionHaptic(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDontShowAgain(event.target.checked);
    }
  );

  if (!open) {
    return;
  }

  return (
    <div className={styles["noscript-container"]}>
      <div className={styles["noscript-modal"]}>
        <div className={styles["noscript-title"]}>
          <h1>А где свежесть?</h1>
        </div>
        <p>
          Похоже, что вы используете устаревшую версию браузера. Попробуйте обновить его
          до последней версии или загрузить другой по ссылкам ниже.
        </p>
        <div className={styles["noscript-links"]}>
          {" "}
          <a
            className={styles["link-chrome"]}
            href="https://www.google.com/chrome/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt=""
              height="20"
              src="/icons/Google_Chrome.svg"
              width="20"
            />
            <span>Google Chrome</span>
          </a>
          <a
            className={styles["link-firefox"]}
            href="https://www.firefox.com/ru/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt=""
              height="20"
              src="/icons/Firefox_logo.svg"
              width="20"
            />
            <span>Mozilla Firefox</span>
          </a>
          <a
            className={styles["link-yandex"]}
            href="https://browser.yandex.ru/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt=""
              height="20"
              src="/icons/Yandex_Browser.svg"
              width="20"
            />
            <span>Яндекс.Браузер</span>
          </a>
        </div>
        <p>
          Вы можете продолжить просмотр, но учтите, что в устаревшей версии браузера
          некоторые функции сайта могут работать некорректно.
        </p>
        <div className="flexible-links">
          <button
            onClick={handleClose}
            onMouseDown={ripple.onMouseDown}
          >
            Продолжить
          </button>
        </div>
        <label className="warning-dismiss-option">
          <input
            checked={dontShowAgain}
            type="checkbox"
            onChange={handleDontShowAgainChange}
          />
          Больше не показывать
        </label>
      </div>
    </div>
  );
};

export default BrowserWarning;
