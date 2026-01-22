import React, {useCallback, useEffect, useState} from "react";

import {CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";

import modalStyles from "../components/modals/Modal.module.scss";

export const useExternalLinkHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [targetUrl, setTargetUrl] = useState<string | undefined>();

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    const anchor = target.closest("a[href]");

    if (anchor) {
      const href = anchor.getAttribute("href");

      if (href && /^https?:\/\//.test(href)) {
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
              className={modalStyles["modal-header-close"]}
              onClick={handleCancel}
            >
              <CloseRounded />
            </button>
          </div>
          <p>Вы уверены, что хотите перейти по внешней ссылке?</p>
          <div className="flexible-links">
            <button onClick={handleOk}>Перейти</button>
          </div>
        </div>
      </div>
    </Modal>
  );

  return {ExternalLinkModal, handleLinkClick};
};
