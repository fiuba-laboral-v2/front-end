import React, { FunctionComponent, ReactNode } from "react";
import { ADMIN_LIST_COLUMNS, ADMIN_LIST_COLUMNS_VALUES } from "./constants";

export const Columns: FunctionComponent<IColumn> = ({ children }) => (
  <>{ADMIN_LIST_COLUMNS.map(children)}</>
);

interface IColumn {
  children: (column: ADMIN_LIST_COLUMNS_VALUES) => ReactNode;
}
