import {InfoOutlined, ReportOutlined, WarningAmberOutlined} from "@mui/icons-material";
import React from "react";

/**
 * пропсы для компонентов дополнений
 */

interface AdditionProps {
  /** содержимое дополнения */

  children: React.ReactNode;
}

/**
 * компонент для отображения информационного дополнения
 * @param children - содержимое дополнения
 * @returns компонент с информационной иконкой и текстом
 */

const AdditionInfo: React.FC<AdditionProps> = ({children}) => (
  <div className="addition-info">
    <InfoOutlined />
    <div>{children}</div>
  </div>
);

/**
 * компонент для отображения предупреждающего дополнения
 * @param children - содержимое дополнения
 * @returns компонент с предупреждающей иконкой и текстом
 */

const AdditionWarning: React.FC<AdditionProps> = ({children}) => (
  <div className="addition-warning">
    <WarningAmberOutlined />
    <div>{children}</div>
  </div>
);

/**
 * компонент для отображения опасного дополнения
 * @param children - содержимое дополнения
 * @returns компонент с иконкой опасности и текстом
 */

const AdditionDanger: React.FC<AdditionProps> = ({children}) => (
  <div className="addition-danger">
    <ReportOutlined />
    <div>{children}</div>
  </div>
);
export {AdditionDanger, AdditionInfo, AdditionWarning};
