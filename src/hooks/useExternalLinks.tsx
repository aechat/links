import React, {useCallback, useState} from "react";

import {CloseRounded} from "@mui/icons-material";
import {Modal} from "antd";

import modalStyles from "../components/modals/Modal.module.scss";
import {getExternalLinkHref} from "../utils/linkTargets";

import {useEnterKeyConfirm} from "./useEnterKeyConfirm";
import {useRipple} from "./useRipple";

export const useExternalLinkHandler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [targetUrl, setTargetUrl] = useState<string | undefined>();

  const ripple = useRipple<HTMLButtonElement>();

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTargetUrl(undefined);
  }, []);

  const handleLinkClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const href = getExternalLinkHref(event.target);

    if (href) {
      event.preventDefault();
      setTargetUrl(href);
      setIsModalOpen(true);
    }
  }, []);

  const handleOk = useCallback(() => {
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noreferrer");
    }

    closeModal();
  }, [closeModal, targetUrl]);

  const handleCancel = closeModal;

  useEnterKeyConfirm(isModalOpen, handleOk);

  const ExternalLinkModal = (
    <Modal
      centered
      closeIcon={false}
      footer={<></>}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <div className={modalStyles["modal"]}>
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
        <div className={modalStyles["modal-content"]}>
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
