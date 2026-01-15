import React from "react";

interface BrowserWarningProperties {
  onClose: (dontShowAgain: boolean) => void;
  open: boolean;
}
const BrowserWarning: React.FC<BrowserWarningProperties> = ({onClose, open}) => {
  const [dontShowAgain, setDontShowAgain] = React.useState(false);
  const handleClose = () => {
    onClose(dontShowAgain);
  };

  if (!open) {
    return null;
  }

  return (
    <div className="noscript-container">
      <div className="noscript-modal">
        <div className="noscript-title">
          <h1>А где свежесть?</h1>
        </div>
        <p>
          Похоже, что вы используете устаревшую версию браузера. Попробуйте обновить его
          до последней версии или загрузить другой по ссылкам ниже.
        </p>
        <div className="noscript-links">
          {" "}
          <a
            className="link-chrome"
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
            className="link-firefox"
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
            className="link-yandex"
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
          <button onClick={handleClose}>Продолжить</button>
        </div>
        <label
          style={{
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            fontSize: "0.9rem",
            gap: "8px",
            margin: "15px",
            opacity: "0.75",
          }}
        >
          <input
            checked={dontShowAgain}
            type="checkbox"
            onChange={(e) => setDontShowAgain(e.target.checked)}
          />
          Больше не показывать
        </label>
      </div>
    </div>
  );
};

export default BrowserWarning;
