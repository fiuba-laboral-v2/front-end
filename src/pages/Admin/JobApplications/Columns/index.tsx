import React, { FunctionComponent, ReactNode } from "react";
import {
  JOB_APPLICATION_LIST_COLUMNS,
  JOB_APPLICATION_LIST_COLUMNS_VALUES
 } from "./constants";

export const Columns: FunctionComponent<IColumn> = ({ children }) => (
  <>
    {
      JOB_APPLICATION_LIST_COLUMNS.map(children)
    }
  </>
);

interface IColumn {
  children: (column: JOB_APPLICATION_LIST_COLUMNS_VALUES) => ReactNode;
}
