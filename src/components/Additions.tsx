import {InfoOutlined, ReportOutlined, WarningAmberOutlined} from "@mui/icons-material";

import React from "react";

interface AdditionProps {
  children: React.ReactNode;
}

const AdditionInfo: React.FC<AdditionProps> = ({children}) => (
  <div className="addition-info">
    <InfoOutlined />
    <div>{children}</div>
  </div>
);

const AdditionWarning: React.FC<AdditionProps> = ({children}) => (
  <div className="addition-warning">
    <WarningAmberOutlined />
    <div>{children}</div>
  </div>
);

const AdditionDanger: React.FC<AdditionProps> = ({children}) => (
  <div className="addition-danger">
    <ReportOutlined />
    <div>{children}</div>
  </div>
);

export {AdditionDanger, AdditionInfo, AdditionWarning};
