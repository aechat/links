import {motion} from "framer-motion";

import React, {useEffect, useRef, useState} from "react";

import {Helmet} from "react-helmet-async";

interface Subtitle {
  start: number;
  end: number;
  text: string;
}

const NotFound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);

  const [currentSubtitle, setCurrentSubtitle] = useState<string>("Пустота");
  useEffect(() => {
    audioRef.current = new Audio("/files/404.mp3");

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
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Ошибка воспроизведения аудио:", error);
        });
      }
    };
    window.addEventListener("click", handlePlayAudio);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      window.removeEventListener("click", handlePlayAudio);
    };
  }, []);
  useEffect(() => {
    const updateSubtitle = () => {
      if (!audioRef.current) {
        return;
      }

      const currentTime = audioRef.current.currentTime;

      const current = subtitles.find(
        (sub) => currentTime >= sub.start && currentTime <= sub.end
      );

      if (current && current.text !== currentSubtitle) {
        setCurrentSubtitle(current.text);
      } else if (!current && currentSubtitle !== "Пустота") {
        setCurrentSubtitle("Пустота");
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateSubtitle);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateSubtitle);
      }
    };
  }, [subtitles, currentSubtitle]);

  return (
    <motion.main
      animate={{scale: 1, opacity: 1}}
      className="not-found error"
      exit={{scale: 0.5, opacity: 0}}
      initial={{scale: 0.5, opacity: 0}}
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
          style={{maxWidth: "450px", margin: "15px"}}
        >
          <div className="error-content">
            <div className="error-title">Страница не найдена</div>
            <div className="error-message">
              <div className="flexible-links">
                <button
                  onClick={() => {
                    window.location.reload();
                    window.location.href = "/";
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
