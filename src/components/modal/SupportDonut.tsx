import {CloseRounded, CoffeeRounded} from "@mui/icons-material";

import {Modal} from "antd";

import {motion} from "framer-motion";

import React, {useState} from "react";

interface SupportDonutProps {
  wide?: boolean;
}

const SupportDonut: React.FC<SupportDonutProps> = ({wide}) => {
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
        className="modal-support-header-button"
        onClick={openDonateModal}
      >
        <CoffeeRounded />
        {wide ? <span>Поддержать проект</span> : null}
      </button>
      <Modal
        centered
        closeIcon={null}
        footer={null}
        open={isDonateModalOpen}
        onCancel={closeDonateModal}
      >
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-title">Поддержать проект</div>
              <button
                className="modal-header-close"
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
                className="modal-support-button modal-support-button--sber"
                onClick={() => setIsSberModalOpen(true)}
              >
                Сбербанк
              </button>
              <Modal
                centered
                className="modal--support"
                closeIcon={null}
                footer={null}
                open={isSberModalOpen}
                onCancel={closeSberModal}
              >
                <div className="modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="modal-header-title">Поддержать на Сбербанк</div>
                      <button
                        className="modal-header-close"
                        onClick={closeSberModal}
                      >
                        <CloseRounded />
                      </button>
                    </div>
                    <p>
                      Вы можете перевести из любого банка по номеру банковской карты любую
                      сумму.
                    </p>
                    <mark className="modal-support-account-number modal-support-account-number--sber">
                      2202202357342488
                    </mark>
                    <p className="modal-support-recipient-info">
                      Нажмите на номер карты, чтобы скопировать его в буфер обмена
                      <br />
                      Получатель: <mark>Михаил Денисович Ф.</mark>
                    </p>
                  </div>
                </div>
              </Modal>
              <button
                className="modal-support-button modal-support-button--yoomoney"
                onClick={() => setIsYoomoneyModalOpen(true)}
              >
                ЮMoney
              </button>
              <Modal
                centered
                className="modal--support"
                closeIcon={null}
                footer={null}
                open={isYoomoneyModalOpen}
                onCancel={closeYoomoneyModal}
              >
                <div className="modal">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="modal-header-title">Поддержать на ЮMoney</div>
                      <button
                        className="modal-header-close"
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
                        <motion.mark className="modal-support-account-number modal-support-account-number--yoomoney">
                          410016763684808
                        </motion.mark>
                        <p className="modal-support-recipient-info">
                          Нажмите, чтобы скопировать или пополните баланс автору с помощью{" "}
                          <a
                            className="modal-support-yoomoney-link"
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
