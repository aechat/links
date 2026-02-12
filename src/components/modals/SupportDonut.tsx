import React, {useState} from "react";

import {CloseRounded, CoffeeRounded} from "@mui/icons-material";
import {Modal} from "antd";

import {useCopyToClipboard} from "../../hooks/useCopyToClipboard";

import modalStyles from "./Modal.module.scss";

interface SupportDonutProperties {
  wide?: boolean;
}

const SupportDonut: React.FC<SupportDonutProperties> = ({wide}) => {
  const {copyElementContent} = useCopyToClipboard();

  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const [isSberModalOpen, setIsSberModalOpen] = useState(false);

  const [isYoomoneyModalOpen, setIsYoomoneyModalOpen] = useState(false);

  const openDonateModal = () => setIsDonateModalOpen(true);

  const closeDonateModal = () => setIsDonateModalOpen(false);

  const closeSberModal = () => setIsSberModalOpen(false);

  const closeYoomoneyModal = () => setIsYoomoneyModalOpen(false);

  return (
    <>
      <button
        className={modalStyles["modal-support-header-button"]}
        onClick={openDonateModal}
      >
        <CoffeeRounded />
        {wide ? <span>Поддержать проект</span> : undefined}
      </button>
      <Modal
        centered
        closeIcon={false}
        footer={<></>}
        open={isDonateModalOpen}
        onCancel={closeDonateModal}
      >
        <div className={modalStyles["modal"]}>
          <div className={modalStyles["modal-content"]}>
            <div className={modalStyles["modal-header"]}>
              <div className={modalStyles["modal-header-title"]}>Поддержать проект</div>
              <button
                className={modalStyles["modal-header-close"]}
                onClick={closeDonateModal}
              >
                <CloseRounded />
              </button>
            </div>
            <p>
              Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать
              его, то вы можете поддержать меня любой суммой и любым удобным вам способом.
            </p>
            <div className="flexible-links">
              <button
                className={modalStyles["modal-support-button"]}
                onClick={() => setIsSberModalOpen(true)}
              >
                Сбербанк
              </button>
              <Modal
                centered
                className={modalStyles["modal--support"]}
                closeIcon={false}
                footer={<></>}
                open={isSberModalOpen}
                onCancel={closeSberModal}
              >
                <div className={modalStyles["modal"]}>
                  <div className={modalStyles["modal-content"]}>
                    <div className={modalStyles["modal-header"]}>
                      <div className={modalStyles["modal-header-title"]}>
                        Поддержать на Сбербанк
                      </div>
                      <button
                        className={modalStyles["modal-header-close"]}
                        onClick={closeSberModal}
                      >
                        <CloseRounded />
                      </button>
                    </div>
                    <p>
                      Вы можете перевести из любого банка по номеру банковской карты любую
                      сумму.
                    </p>
                    <mark
                      className={modalStyles["modal-support-account-number"]}
                      onClick={(event) => copyElementContent(event.currentTarget)}
                    >
                      2202202357342488
                    </mark>
                    <p className={modalStyles["modal-support-recipient-info"]}>
                      Нажмите на номер карты, чтобы скопировать его в буфер обмена
                      <br />
                      Получатель: <mark>Михаил Денисович Ф.</mark>
                    </p>
                  </div>
                </div>
              </Modal>
              <button
                className={modalStyles["modal-support-button"]}
                onClick={() => setIsYoomoneyModalOpen(true)}
              >
                ЮMoney
              </button>
              <Modal
                centered
                className={modalStyles["modal--support"]}
                closeIcon={false}
                footer={<></>}
                open={isYoomoneyModalOpen}
                onCancel={closeYoomoneyModal}
              >
                <div className={modalStyles["modal"]}>
                  <div className={modalStyles["modal-content"]}>
                    <div className={modalStyles["modal-header"]}>
                      <div className={modalStyles["modal-header-title"]}>
                        Поддержать на ЮMoney
                      </div>
                      <button
                        className={modalStyles["modal-header-close"]}
                        onClick={closeYoomoneyModal}
                      >
                        <CloseRounded />
                      </button>
                    </div>
                    <p>Для пополнения кошелька вам нужно проделать несколько действий:</p>
                    <ul>
                      <li>Зайдите в приложение своего банка.</li>
                      <li>
                        Откройте раздел <mark className="select">«Платежи»</mark> и
                        найдите в нём категорию{" "}
                        <mark className="select">«Электронные кошельки»</mark> или{" "}
                        <mark className="select">«Финансы»</mark>. Обычно в этих разделах
                        можно найти <mark>ЮMoney</mark>. Также вы можете воспользоваться
                        поиском вашего банка.
                      </li>
                      <li>
                        Нажмите на номер кошелька снизу, он скопируется в буфер обмена.
                        Вставьте этот номер в поле{" "}
                        <mark className="select">«Номер кошелька»</mark> приложения вашего
                        банка и введите любую сумму. После этого - подтвердите перевод.
                        <mark
                          className={modalStyles["modal-support-account-number"]}
                          onClick={(event) => copyElementContent(event.currentTarget)}
                        >
                          410016763684808
                        </mark>
                        <p className={modalStyles["modal-support-recipient-info"]}>
                          Нажмите, чтобы скопировать или пополните баланс автору с помощью{" "}
                          <a
                            className={modalStyles["modal-support-yoomoney-link"]}
                            href="https://yoomoney.ru/to/410016763684808"
                          >
                            этой ссылки
                          </a>
                          .
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Modal>
            </div>
            <p>
              Также, если вы хотите сделать ресурс ещё лучше — вы можете поделиться своими
              замечаниями и идеями через бота{" "}
              <a
                href="https://t.me/aechatru_bot"
                rel="noreferrer"
                target="_blank"
              >
                @aechatru_bot
              </a>
              .
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SupportDonut;
