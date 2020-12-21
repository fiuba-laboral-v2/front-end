import React, { FunctionComponent, ReactNode } from "react";
import { COMPANY_USER_LIST_COLUMNS, COMPANY_USER_LIST_COLUMNS_VALUES } from "./constants";

export const Columns: FunctionComponent<IColumn> = ({ children }) => (
  <>{COMPANY_USER_LIST_COLUMNS.map(children)}</>
);

interface IColumn {
  children: (column: COMPANY_USER_LIST_COLUMNS_VALUES) => ReactNode;
}
