import React, {useState} from "react";
import {Modal, Upload, message} from "antd";
import {saveAs} from "file-saver";
import {inflate} from "pako";
import {motion} from "framer-motion";
import {CloseRounded, UploadFileRounded} from "@mui/icons-material";

const TgsToJsonModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [jsonData, setJsonData] = useState<unknown>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const fileData = await file.arrayBuffer();

      const decompressed = inflate(new Uint8Array(fileData));

      const json = JSON.parse(new TextDecoder().decode(decompressed));

      setJsonData(json);
      message.success("Файл успешно конвертирован!");
    } catch (error) {
      console.error("Ошибка при обработке файла:", error);
      message.error("Не удалось конвертировать файл!");
    }

    return false;
  };

  const downloadJson = () => {
    if (jsonData) {
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
        type: "application/json",
      });
      saveAs(blob, "Sticker.json");
    }
  };

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.025,
          transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        }}
        whileTap={{scale: 0.95, opacity: 0.5}}
        className="modal-open-button"
        style={{marginInline: "auto"}}
        onClick={() => setIsModalOpen(true)}
      >
        Открыть конвертер из TGS в JSON
      </motion.button>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={700}
        closeIcon={null}
        centered
      >
        <div className="modal">
          <div className="modal-header">
            <div className="modal-header-title">Конвертер .tgs в .json</div>
            <button
              className="modal-header-close"
              onClick={() => setIsModalOpen(false)}
            >
              <CloseRounded />
            </button>
          </div>
          <div className="modal-content">
            <Upload.Dragger
              name="file"
              accept=".tgs"
              beforeUpload={handleFileUpload}
              showUploadList={false}
              style={{
                marginInline: "10px",
                marginBlockStart: "12px",
                width: "calc(100% - 20px)",
              }}
            >
              <div style={{display: "flex", gap: "10px"}}>
                <UploadFileRounded />
                Перетащите .tgs файл сюда или нажмите на поле для выбора
              </div>
            </Upload.Dragger>
            {jsonData ? (
              <motion.button
                style={{marginBlock: "10px"}}
                whileHover={{
                  scale: 0.975,
                  transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                }}
                whileTap={{scale: 0.95, opacity: 0.5}}
                className="modal-open-button"
                onClick={downloadJson}
              >
                Скачать переконвертированный JSON
              </motion.button>
            ) : null}
            <p className="modal-message">
              Конвертация идёт локально на вашем устройстве. Результат и качество
              конвертации не гарантируется.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TgsToJsonModal;
