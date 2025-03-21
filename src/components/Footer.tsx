import {Modal} from "antd";
import React from "react";
import {CloseRounded, GitHub} from "@mui/icons-material";
interface FooterProps {
  title: string;
  initialYear: number;
}

const Footer: React.FC<FooterProps> = ({title, initialYear}) => {
  const currentYear = new Date().getFullYear();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="footer">
      <p className="footer__copyright">
        <button onClick={showModal}>
          {title} &copy; {initialYear} - {currentYear} {"// "}
          m1sh3r
        </button>
      </p>
      <Modal
        open={isModalOpen}
        closeIcon={null}
        width={700}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <div className="modal">
          <div className="modal-header">
            <div className="modal-header-title">О сайте</div>
            <button
              className="modal-header-close"
              onClick={handleCancel}
            >
              <CloseRounded />
            </button>
          </div>
          <div className="modal-content">
            <p>
              Идея сайта заключалась в том, чтобы минимизировать надоедливые вопросы по
              программам Adobe и направить людей на альтернативные чаты, если возникли
              вопросы по другим программам.{" "}
              <i>Надеюсь, что мы с этой задачей справились.</i>
            </p>
            <p>
              Контент на сайте наполнялся благодаря команде администраторов и участников{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/joinchat/F1DdXtG9LephYWUy"
              >
                AEChat
              </a>
              .
            </p>
            <p className="modal-message">
              При копировании контента, пожалуйста, ссылайтесь на первоисточник, мы
              старались не просто так. В каждом пункте можно скопировать ссылку, нажав на
              кнопку справа.
            </p>
            <div className="flexible-links">
              <a
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/aechat/links"
              >
                <GitHub />
                Открыть страницу на GitHub
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </footer>
  );
};
export default Footer;
