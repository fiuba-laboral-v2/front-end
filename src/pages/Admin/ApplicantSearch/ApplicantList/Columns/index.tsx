import React, { FunctionComponent, ReactNode, Fragment } from "react";
import { APPLICANT_LIST_COLUMNS } from "../constants";

export const Columns: FunctionComponent<IColumn> = ({ children }) => (
  <Fragment>
    {
      APPLICANT_LIST_COLUMNS.map(children)
    }
  </Fragment>
);

interface IColumn {
  children: (column: string) => ReactNode;
}
