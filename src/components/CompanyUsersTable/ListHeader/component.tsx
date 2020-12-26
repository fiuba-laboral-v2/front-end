import React, { FunctionComponent } from "react";
import { Item } from "./Item";
import { Columns } from "../Columns";
import { IComponentProps } from "./interfaces";

export const ListHeader: FunctionComponent<IComponentProps> = ({
  translations,
  withoutActions
}) => (
  <Columns withoutActions={withoutActions}>
    {column => (
      <Item
        withoutActions={withoutActions}
        key={column}
        column={column}
        text={translations[column]}
      />
    )}
  </Columns>
);
