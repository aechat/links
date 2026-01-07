import React, {useEffect, useRef, useState} from "react";

import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";

interface Subtitle {
  end: number;
  start: number;
  text: string;
}

const NotFound = () => {
  const audioReference = useRef<HTMLAudioElement | null>(null);

  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);

  const [currentSubtitle, setCurrentSubtitle] = useState<string>("Пустота");

  useEffect(() => {
    audioReference.current = new Audio("/files/404.mp3");

    const fetchSubtitles = async () => {
      try {
        const response = await fetch("/files/404.json");

        const json = await response.json();

        setSubtitles(json);
      } catch (error) {
        console.error("Ошибка загрузки субтитров:", error);
      }
    };

    fetchSubtitles();

    const handlePlayAudio = () => {
      if (audioReference.current) {
        audioReference.current.play().catch((error) => {
          console.error("Ошибка воспроизведения аудио:", error);
        });
      }
    };

    globalThis.addEventListener("click", handlePlayAudio);

    return () => {
      if (audioReference.current) {
        audioReference.current.pause();
        audioReference.current.currentTime = 0;
      }

      globalThis.removeEventListener("click", handlePlayAudio);
    };
  }, []);
  useEffect(() => {
    const updateSubtitle = () => {
      if (!audioReference.current) {
        return;
      }

      const currentTime = audioReference.current.currentTime;

      const current = subtitles.find(
        (sub) => currentTime >= sub.start && currentTime <= sub.end
      );

      if (current && current.text !== currentSubtitle) {
        setCurrentSubtitle(current.text);
      } else if (!current && currentSubtitle !== "Пустота") {
        setCurrentSubtitle("Пустота");
      }
    };

    if (audioReference.current) {
      audioReference.current.addEventListener("timeupdate", updateSubtitle);
    }

    return () => {
      if (audioReference.current) {
        audioReference.current.removeEventListener("timeupdate", updateSubtitle);
      }
    };
  }, [subtitles, currentSubtitle]);

  return (
    <motion.main
      animate={{opacity: 1, scale: 1}}
      className="not-found error"
      exit={{opacity: 0, scale: 0.5}}
      initial={{opacity: 0, scale: 0.5}}
      transition={{duration: 0.75, ease: [0.25, 0, 0, 1]}}
    >
      <Helmet>
        <title>notfound@aechat</title>
        <meta
          content="Страница не найдена"
          name="description"
        />
        <meta
          content="notfound@aechat"
          itemProp="name"
        />
        <meta
          content="Страница не найдена"
          itemProp="description"
        />
        <meta
          content="https://aechat.ru/icons/favicon.svg"
          itemProp="image"
        />
        <meta
          content="404, not found, aechat, страница не найдена"
          name="keywords"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://aechat.ru/404"
          property="og:url"
        />
        <meta
          content="notfound@aechat"
          property="og:title"
        />
        <meta
          content="Страница не найдена"
          property="og:description"
        />
        <meta
          content="https://aechat.ru/icons/favicon.svg"
          property="og:image"
        />
        <meta
          content="summary_large_image"
          name="twitter:card"
        />
        <meta
          content="notfound@aechat"
          name="twitter:title"
        />
        <meta
          content="Страница не найдена"
          name="twitter:description"
        />
        <meta
          content="https://aechat.ru/icons/favicon.svg"
          name="twitter:image"
        />
      </Helmet>
      <div className="error-container">
        <div className="error-backtitle">{currentSubtitle}</div>
        <div
          className="modal"
          style={{margin: "15px", maxWidth: "450px"}}
        >
          <div className="error-content">
            <div className="error-title">Страница не найдена</div>
            <div className="error-message">
              <div className="flexible-links">
                <button
                  onClick={() => {
                    globalThis.location.reload();
                    globalThis.location.href = "/";
                  }}
                >
                  На главную
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default NotFound;
