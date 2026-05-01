import React, {ReactNode} from "react";

import {Tooltip} from "antd";

import styles from "./Addition.module.scss";

interface AdditionProperties {
  children: ReactNode;
  type: "info" | "warning" | "danger" | "tldr";
}

const classNameByType: Record<AdditionProperties["type"], string> = {
  danger: styles["addition-danger"],
  info: styles["addition-info"],
  tldr: styles["addition-tldr"],
  warning: styles["addition-warning"],
};

const Addition: React.FC<AdditionProperties> = ({children, type}) => {
  const className = classNameByType[type];

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
