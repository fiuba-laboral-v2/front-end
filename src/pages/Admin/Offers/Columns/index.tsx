import React, { FunctionComponent, ReactNode } from "react";
import { OFFER_LIST_COLUMNS, OFFER_LIST_COLUMNS_VALUES } from "./constants";

export const Columns: FunctionComponent<IColumn> = ({ children }) => (
  <>{OFFER_LIST_COLUMNS.map(children)}</>
);

interface IColumn {
  children: (column: OFFER_LIST_COLUMNS_VALUES) => ReactNode;
}
