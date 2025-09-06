import React, {ReactNode} from "react";

interface AdditionProps {
  children: ReactNode;
  type: "info" | "warning" | "danger";
}

const Addition: React.FC<AdditionProps> = ({children, type}) => {
  let className: string;

  switch (type) {
    case "info":
      className = "addition-info";

      break;

    case "warning":
      className = "addition-warning";

      break;

    case "danger":
      className = "addition-danger";

      break;
  }

  if (!className) {
    throw new Error("Не указан тип для компонента Addition");
  }

  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
};

export default Addition;
