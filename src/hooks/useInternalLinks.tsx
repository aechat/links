import {CloseRounded} from "@mui/icons-material";

import {Modal} from "antd";

import React, {useCallback, useEffect, useState} from "react";

interface TargetArticle {
  id: string;
  title: string;
}

const getScrollOffsets = () => {
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const PADDING = {
    MIN: 10,
    MAX: 14,
    SCREEN: {
      MIN: 320,
      MAX: 768,
    },
  };

  const padding = Math.min(
    PADDING.MIN +
      (PADDING.MAX - PADDING.MIN) *
        ((window.innerWidth - PADDING.SCREEN.MIN) /
          (PADDING.SCREEN.MAX - PADDING.SCREEN.MIN)),
    PADDING.MAX
  );

  return {headerHeight, padding};
};

export const useInternalLinkHandler = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [targetArticle, setTargetArticle] = useState<TargetArticle | null>(null);

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    const anchor = target.closest('a[href^="#"]');

    if (anchor && anchor.getAttribute("href")!.length > 1) {
      const href = anchor.getAttribute("href")!;

      const targetId = href.substring(1);

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const currentDetails = (event.currentTarget as HTMLElement).closest("details");

        const targetDetails = targetElement.closest("details");

        if (targetDetails && currentDetails !== targetDetails) {
          event.preventDefault();

          const summary = targetDetails.querySelector(".faq-summary");

          const titleElement = summary?.querySelector("h3");
          let title = titleElement ? titleElement.textContent : "без названия";
          title = title.replace(/^\d+\.\d+\.\s*/, "");
          setTargetArticle({id: targetId, title});
          setModalVisible(true);
        }
      }
    }
  }, []);

  const handleOk = useCallback(() => {
    if (targetArticle) {
      const targetElement = document.getElementById(targetArticle.id);

      if (targetElement) {
        const details = targetElement.closest("details");

        if (details) {
          window.dispatchEvent(
            new CustomEvent("open-spoiler-by-id", {detail: {id: targetArticle.id}})
          );
        }
      }
    }

    setModalVisible(false);
    setTargetArticle(null);
  }, [targetArticle]);

  const handleCancel = useCallback(() => {
    setModalVisible(false);
    setTargetArticle(null);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleOk();
      }
    };

    if (modalVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalVisible, handleOk]);

  const InternalLinkModal = (
    <Modal
      centered
      closeIcon={null}
      footer={null}
      open={modalVisible}
      onCancel={handleCancel}
    >
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header-title">Переход на другую статью</div>
            <button
              className="modal-header-close"
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
