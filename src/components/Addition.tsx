import {InfoOutlined, ReportOutlined, WarningAmberOutlined} from "@mui/icons-material";

import React, {ReactNode} from "react";

interface AdditionProps {
  children: ReactNode;
  type: "info" | "warning" | "danger";
}

const Addition: React.FC<AdditionProps> = ({children, type}) => {
  let icon: ReactNode;
  let className: string;

  switch (type) {
    case "info":
      icon = <InfoOutlined />;
      className = "addition-info";

      break;

    case "warning":
      icon = <WarningAmberOutlined />;
      className = "addition-warning";

      break;

    case "danger":
      icon = <ReportOutlined />;
      className = "addition-danger";

      break;
  }

  if (!icon || !className) {
    throw new Error("Не указан тип для компонента Addition");
  }

  return (
    <div className={className}>
      {icon}
      <div>{children}</div>
    </div>
  );
};

export default Addition;
