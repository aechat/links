import React, {useCallback, useEffect, useState} from "react";

import {CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";

import modalStyles from "../components/modals/Modal.module.scss";

import {useRipple} from "./useRipple";

const isGithubRawFromLinksRepo = (href: string): boolean => {
  try {
    const url = new URL(href);

    const parts = url.pathname.toLowerCase().split("/").filter(Boolean);

    const [owner, repo] = parts;

    return (
      url.hostname === "github.com" &&
      owner === "aechat" &&
      repo === "links" &&
      url.pathname.toLowerCase().includes("/raw/")
    );
  } catch {
    return false;
  }
};

export const useExternalLinkHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [targetUrl, setTargetUrl] = useState<string | undefined>();

  const ripple = useRipple<HTMLButtonElement>();

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    const anchor = target.closest("a[href]");

    if (anchor) {
      if (anchor.hasAttribute("download")) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (href && /^https?:\/\//.test(href) && !isGithubRawFromLinksRepo(href)) {
        event.preventDefault();
        setTargetUrl(href);
        setIsModalOpen(true);
      }
    }
  }, []);

  const handleOk = useCallback(() => {
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noreferrer");
    }

    setIsModalOpen(false);
    setTargetUrl(undefined);
  }, [targetUrl]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
    setTargetUrl(undefined);
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

  const ExternalLinkModal = (
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
            <div className={modalStyles["modal-header-title"]}>{targetUrl}</div>
            <button
              className={modalStyles["modal-header-button"]}
              onClick={handleCancel}
              onMouseDown={ripple.onMouseDown}
            >
              <CloseRounded />
            </button>
          </div>
          <p>Вы уверены, что хотите перейти по внешней ссылке?</p>
          <div className="flexible-links">
            <button
              onClick={handleOk}
              onMouseDown={ripple.onMouseDown}
            >
              Перейти
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );

  return {ExternalLinkModal, handleLinkClick};
};
