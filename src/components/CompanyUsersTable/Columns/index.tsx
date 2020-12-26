import React, { FunctionComponent, ReactNode } from "react";
import { COMPANY_USER_LIST_COLUMNS, COMPANY_USER_LIST_COLUMNS_VALUES } from "./constants";
import { pull } from "lodash";

export const Columns: FunctionComponent<IColumn> = ({ children, withoutActions }) => {
  const getColumns = () => {
    if (!withoutActions) return COMPANY_USER_LIST_COLUMNS;
    return pull(COMPANY_USER_LIST_COLUMNS, COMPANY_USER_LIST_COLUMNS_VALUES.ACTIONS);
  };
  return <>{getColumns().map(children)}</>;
};

interface IColumn {
  children: (column: COMPANY_USER_LIST_COLUMNS_VALUES) => ReactNode;
  withoutActions?: boolean;
}
