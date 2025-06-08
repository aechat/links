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

  const [currentSubtitle, setCurrentSubtitle] = useState<string>("404");
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
      } else if (!current && currentSubtitle !== "404") {
        setCurrentSubtitle("404");
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
      animate={{x: 0, opacity: 1}}
      className="not-found error"
      exit={{x: -50, opacity: 0}}
      initial={{x: 100, opacity: 0}}
      transition={{duration: 0.5, ease: [0.25, 0, 0, 1]}}
    >
      <Helmet>
        <title>notfound@aechat</title>
      </Helmet>
      <div className="error-container">
        <div className="error-backtitle">{currentSubtitle}</div>
        <div
          className="modal"
          style={{maxWidth: "250px", margin: "15px"}}
        >
          <div className="modal-header">
            <div className="modal-header-title">Страница не найдена</div>
          </div>
          <div className="modal-content">
            <motion.button
              className="modal-open-button"
              style={{marginBlock: "10px"}}
              whileHover={{
                scale: 0.975,
                transition: {duration: 0.5, ease: [0.25, 0, 0, 1]},
              }}
              whileTap={{scale: 0.95, opacity: 0.5}}
              onClick={() => {
                window.location.reload();
                window.location.href = "/";
              }}
            >
              На главную
            </motion.button>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default NotFound;
