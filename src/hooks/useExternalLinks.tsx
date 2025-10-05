import {CloseRounded} from "@mui/icons-material";

import {Modal} from "antd";

import React, {useCallback, useEffect, useState} from "react";

export const useExternalLinkHandler = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;

    const anchor = target.closest("a[href]");

    if (anchor) {
      const href = anchor.getAttribute("href");

      if (href && /^https?:\/\//.test(href)) {
        event.preventDefault();
        setTargetUrl(href);
        setModalVisible(true);
      }
    }
  }, []);

  const handleOk = useCallback(() => {
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noreferrer");
    }

    setModalVisible(false);
    setTargetUrl(null);
  }, [targetUrl]);

  const handleCancel = useCallback(() => {
    setModalVisible(false);
    setTargetUrl(null);
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

  const ExternalLinkModal = (
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
            <div className="modal-header-title">{targetUrl}</div>
            <button
              className="modal-header-close"
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

  return {handleLinkClick, ExternalLinkModal};
};
