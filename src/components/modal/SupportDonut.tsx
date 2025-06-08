import React, {useState} from "react";

import {Modal} from "antd";

import {motion} from "framer-motion";

import {CloseRounded, CoffeeRounded, EditRounded} from "@mui/icons-material";

import {AdditionInfo} from "../Additions";

const SupportDonut: React.FC = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isSberModalOpen, setIsSberModalOpen] = useState(false);

  const [isYoomoneyModalOpen, setIsYoomoneyModalOpen] = useState(false);

  const showDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
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
        <motion.button
          className="modal-page-button"
          style={{
            filter: "saturate(0.5) drop-shadow(0 3px 5px var(--shadow))",
          }}
          whileHover={{
            scale: 0.975,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.95, opacity: 0.5}}
          onClick={showEditModal}
        >
          <EditRounded />
          Помочь с редактированием
        </motion.button>
        <motion.button
          className="modal-page-button"
          style={{
            filter: "saturate(1.25) drop-shadow(0 3px 5px var(--shadow))",
          }}
          whileHover={{
            scale: 0.975,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.95, opacity: 0.5}}
          onClick={showDonateModal}
        >
          <CoffeeRounded />
          Поддержать сайт
        </motion.button>
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
              <motion.button
                className="sber"
                whileHover={{
                  scale: 0.975,
                  transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                }}
                whileTap={{scale: 0.95, opacity: 0.5}}
                onClick={() => setIsSberModalOpen(true)}
              >
                Сбербанк
              </motion.button>
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
                      className="sber"
                      style={{marginInline: "10px"}}
                      whileHover={{
                        scale: 0.975,
                        transition: {
                          duration: 0.5,
                          ease: [0.075, 0.82, 0.165, 1],
                        },
                      }}
                      whileTap={{scale: 0.95, opacity: 0.5}}
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
              <motion.button
                className="yoomoney"
                whileHover={{
                  scale: 0.975,
                  transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                }}
                whileTap={{scale: 0.95, opacity: 0.5}}
                onClick={() => setIsYoomoneyModalOpen(true)}
              >
                ЮMoney
              </motion.button>
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
                        Откройте раздел <mark className="ui">Платежи</mark> и найдите в
                        нём категорию <mark className="ui">Электронные кошельки</mark> или{" "}
                        <mark className="ui">Финансы</mark>. Обычно в этих разделах можно
                        найти <mark>ЮMoney</mark>. Также вы можете воспользоваться поиском
                        вашего банка.
                      </li>
                      <li>
                        Нажмите на номер кошелька снизу, он скопируется в буфер обмена.
                        Вставьте этот номер в поле{" "}
                        <mark className="ui">Номер кошелька</mark> приложения вашего банка
                        и введите любую сумму. После этого - подтвердите перевод.
                        <motion.mark
                          className="yoomoney"
                          whileHover={{
                            scale: 0.975,
                            transition: {
                              duration: 0.5,
                              ease: [0.075, 0.82, 0.165, 1],
                            },
                          }}
                          whileTap={{scale: 0.95, opacity: 0.5}}
                        >
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
      <Modal
        centered
        closeIcon={null}
        footer={null}
        open={isEditModalOpen}
        onCancel={handleCloseEditModal}
      >
        <div className="modal">
          <div className="modal-header">
            <div className="modal-header-title">Помочь с редактированием</div>
            <button
              className="modal-header-close"
              onClick={handleCloseEditModal}
            >
              <CloseRounded />
            </button>
          </div>
          <div className="modal-content">
            <p>
              Если вы хотите помочь с наполнением данной страницы и вы имеете
              какой-никакой опыт работы с{" "}
              <a
                href="https://git-scm.com/"
                rel="noreferrer"
                target="_blank"
              >
                Git
              </a>{" "}
              и{" "}
              <a
                href="https://github.com/git-guides"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              , то вы можете{" "}
              <a
                href="https://github.com/aechat/links/fork"
                rel="noreferrer"
                target="_blank"
              >
                создать форк проекта сайта
              </a>{" "}
              и внести свои изменения с помощью{" "}
              <a
                href="https://arduinoplus.ru/git-course/chuzhoi-repozitorii/"
                rel="noreferrer"
                target="_blank"
              >
                Pull Request
              </a>
              .
            </p>
            <p>
              Файлы контента внутри секций находятся по пути{" "}
              <mark className="path">src/pages/sections</mark>, где лежат файлы формата{" "}
              <mark className="file">TSX</mark>. Более подробно о форматировании и
              редактировании указано в файле{" "}
              <a
                href="https://github.com/aechat/links/blob/main/README.md"
                rel="noreferrer"
                target="_blank"
              >
                README.md
              </a>
              .
            </p>
            <AdditionInfo>
              Разделы с частыми вопросами находятся в разработке и иногда обновляются,
              поэтому могут быть неточности в действиях, выводах и тексте. Мнение авторов
              и мнение читателя могут отличаться.
            </AdditionInfo>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SupportDonut;
