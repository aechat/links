import {CloseRounded, CoffeeRounded} from "@mui/icons-material";

import {Modal} from "antd";

import {motion} from "framer-motion";

import React, {useState} from "react";

import Addition from "../Addition";

const SupportDonut: React.FC = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const [isSberModalOpen, setIsSberModalOpen] = useState(false);

  const [isYoomoneyModalOpen, setIsYoomoneyModalOpen] = useState(false);

  const showDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  const handleCloseSberModal = () => {
    setIsSberModalOpen(false);
  };

  const handleCloseYoomoneyModal = () => {
    setIsYoomoneyModalOpen(false);
  };

  return (
    <>
      <div className="support">
        <button
          className="modal-page-button"
          style={{
            filter: "saturate(1.25)",
          }}
          onClick={showDonateModal}
        >
          <CoffeeRounded />
          Поддержать сайт
        </button>
      </div>
      <Modal
        centered
        closeIcon={null}
        footer={null}
        open={isDonateModalOpen}
        onCancel={handleCloseDonateModal}
      >
        <div className="modal">
          <div className="modal-header">
            <div className="modal-header-title">Поддержать сайт</div>
            <button
              className="modal-header-close"
              onClick={handleCloseDonateModal}
            >
              <CloseRounded />
            </button>
          </div>
          <div className="modal-content">
            <p>
              Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать
              его, то вы можете поддержать меня любой суммой и любым удобным вам способом.
            </p>
            <div className="flexible-links">
              <button
                className="support-button-sber"
                onClick={() => setIsSberModalOpen(true)}
              >
                Сбербанк
              </button>
              <Modal
                centered
                className="support-modal"
                closeIcon={null}
                footer={null}
                open={isSberModalOpen}
                onCancel={handleCloseSberModal}
              >
                <div className="modal">
                  <div className="modal-header">
                    <div className="modal-header-title">Поддержать на Сбербанк</div>
                    <button
                      className="modal-header-close"
                      onClick={handleCloseSberModal}
                    >
                      <CloseRounded />
                    </button>
                  </div>
                  <div className="modal-content">
                    <p>
                      Вы можете перевести из любого банка по номеру банковской карты любую
                      сумму.
                    </p>
                    <motion.mark
                      className="copy-cardnumber-sber"
                      style={{marginInline: "10px"}}
                    >
                      2202202357342488
                    </motion.mark>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "0.8rem",
                        opacity: "0.75",
                      }}
                    >
                      Нажмите на номер карты, чтобы скопировать его в буфер обмена
                      <br />
                      Получатель: <mark>Михаил Денисович Ф.</mark>
                    </p>
                  </div>
                </div>
              </Modal>
              <button
                className="support-button-yoomoney"
                onClick={() => setIsYoomoneyModalOpen(true)}
              >
                ЮMoney
              </button>
              <Modal
                centered
                className="support-modal"
                closeIcon={null}
                footer={null}
                open={isYoomoneyModalOpen}
                onCancel={handleCloseYoomoneyModal}
              >
                <div className="modal">
                  <div className="modal-header">
                    <div className="modal-header-title">Поддержать на ЮMoney</div>
                    <button
                      className="modal-header-close"
                      onClick={handleCloseYoomoneyModal}
                    >
                      <CloseRounded />
                    </button>
                  </div>
                  <div className="modal-content">
                    <p>Для пополнения кошелька вам нужно проделать несколько действий:</p>
                    <ul>
                      <li>Зайдите в приложение своего банка.</li>
                      <li>
                        Откройте раздел <mark className="select">Платежи</mark> и найдите
                        в нём категорию{" "}
                        <mark className="select">Электронные кошельки</mark> или{" "}
                        <mark className="select">Финансы</mark>. Обычно в этих разделах
                        можно найти <mark>ЮMoney</mark>. Также вы можете воспользоваться
                        поиском вашего банка.
                      </li>
                      <li>
                        Нажмите на номер кошелька снизу, он скопируется в буфер обмена.
                        Вставьте этот номер в поле{" "}
                        <mark className="select">Номер кошелька</mark> приложения вашего
                        банка и введите любую сумму. После этого - подтвердите перевод.
                        <motion.mark className="copy-cardnumber-yoomoney">
                          410016763684808
                        </motion.mark>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: "0.8rem",
                            opacity: "0.75",
                          }}
                        >
                          Нажмите, чтобы скопировать или пополните баланс автору с помощью{" "}
                          <a
                            href="https://yoomoney.ru/to/410016763684808"
                            style={{
                              color: "var(--accent)",
                              fontWeight: 700,
                              textDecoration: "underline",
                            }}
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
          </div>
        </div>
      </Modal>
      <Addition type="info">
        Содержание этой страницы периодически обновляется и предоставляется «как есть».
        Информация в статьях может быть неполной, устаревшей или неточной. Мнение автора и
        читателя может не совпадать. Если вы хотите сделать ресурс ещё лучше — поделитесь
        своими замечаниями и идеями через бота{" "}
        <a href="https://t.me/aechatru_bot">@aechatru_bot</a>.
      </Addition>
    </>
  );
};

export default SupportDonut;
