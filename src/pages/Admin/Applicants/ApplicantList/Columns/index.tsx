import React, { FunctionComponent, ReactNode } from "react";
import { APPLICANT_LIST_COLUMNS, APPLICANT_LIST_COLUMNS_VALUES } from "../constants";

export const Columns: FunctionComponent<IColumn> = ({ children }) => (
  <>
    {
      APPLICANT_LIST_COLUMNS.map(children)
    }
  </>
);

interface IColumn {
  children: (column: APPLICANT_LIST_COLUMNS_VALUES) => ReactNode;
}
