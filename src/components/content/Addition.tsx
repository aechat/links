import React, {ReactNode} from "react";

import {Tooltip} from "antd";

interface AdditionProperties {
  children: ReactNode;
  type: "info" | "warning" | "danger" | "tldr";
}

const Addition: React.FC<AdditionProperties> = ({children, type}) => {
  let className: string;

  switch (type) {
    case "info": {
      className = "addition-info";
      break;
    }

    case "warning": {
      className = "addition-warning";
      break;
    }

    case "danger": {
      className = "addition-danger";
      break;
    }

    case "tldr": {
      className = "addition-tldr";
      break;
    }
  }

  if (!className) {
    throw new Error("Не указан тип для компонента Addition");
  }

  return (
    <div className={className}>
      <div>
        {type === "tldr" && (
          <Tooltip title="Too Long; Didn't Read (Слишком длинно; не читал) или же быстрый ответ на вопрос заголовка статьи.">
            <strong>TL;DR:</strong>
            <br />
          </Tooltip>
        )}
        {children}
      </div>
    </div>
  );
};

export default Addition;
