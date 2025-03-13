import React, {useState} from "react";
import {saveAs} from "file-saver";
import pako from "pako";

const JsonToTgs: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleConvert = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonData = e.target?.result;
        if (typeof jsonData === "string") {
          const compressedData = pako.gzip(jsonData);

          const blob = new Blob([compressedData], {type: "application/gzip"});
          saveAs(blob, `${file.name}.gz.tgs`);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
      />
      <button
        className="open-modal-button"
        onClick={handleConvert}
      >
        Конвертировать в TGS
      </button>
    </div>
  );
};

export default JsonToTgs;
