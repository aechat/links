import React, {useCallback, useEffect, useState} from "react";

import {CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";

import modalStyles from "../components/modals/Modal.module.scss";

interface TargetArticle {
  id: string;
  title: string;
}

const findTargetDetails = (anchorValue: string): HTMLElement | undefined => {
  const elementById = document.getElementById(anchorValue);

  if (elementById) {
    return elementById.closest("details") || undefined;
  }

  return (
    document.querySelector<HTMLElement>(`details[data-anchor="${anchorValue}"]`) ||
    undefined
  );
};

export const useInternalLinkHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [targetArticle, setTargetArticle] = useState<TargetArticle | undefined>();

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    const anchor = target.closest('a[href^="#"]');

    if (!anchor || anchor.getAttribute("href")!.length <= 1) {
      return;
    }

    const href = anchor.getAttribute("href")!;

    const anchorValue = href.slice(1);

    const targetDetails = findTargetDetails(anchorValue);

    if (!targetDetails) {
      return;
    }

    const currentDetails = (event.currentTarget as HTMLElement).closest("details");

    if (currentDetails === targetDetails) {
      return;
    }

    event.preventDefault();

    const summary = targetDetails.querySelector("summary");

    if (!summary || !summary.id) {
      return;
    }

    const titleElement = summary.querySelector("h2");

    let title = titleElement ? titleElement.textContent : "без названия";

    title = title.replace(/^\d+\.\d+\.\s*/, "");
    setTargetArticle({id: summary.id, title});
    setIsModalOpen(true);
  }, []);

  const handleOk = useCallback(() => {
    if (targetArticle) {
      const targetElement = document.getElementById(targetArticle.id);

      if (targetElement) {
        const details = targetElement.closest("details");

        if (details) {
          globalThis.dispatchEvent(new CustomEvent("close-all-spoilers"));

          setTimeout(() => {
            globalThis.dispatchEvent(
              new CustomEvent("open-spoiler-by-id", {
                detail: {id: targetArticle.id},
              })
            );
          }, 50);
        }
      }
    }

    setIsModalOpen(false);
    setTargetArticle(undefined);
  }, [targetArticle]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
    setTargetArticle(undefined);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleOk();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleOk]);

  const InternalLinkModal = (
    <Modal
      centered
      closeIcon={false}
      footer={<></>}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <div className={modalStyles["modal"]}>
        <div className={modalStyles["modal-content"]}>
          <div className={modalStyles["modal-header"]}>
            <div className={modalStyles["modal-header-title"]}>
              Переход на другую статью
            </div>
            <button
              className={modalStyles["modal-header-close"]}
              onClick={handleCancel}
            >
              <CloseRounded />
            </button>
          </div>
          <p>
            Вы уверены, что хотите перейти к статье <mark>«{targetArticle?.title}»</mark>{" "}
            на этой странице?
          </p>
          <div className="flexible-links">
            <button onClick={handleOk}>Перейти</button>
          </div>
        </div>
      </div>
    </Modal>
  );

  return {handleLinkClick, InternalLinkModal};
};
