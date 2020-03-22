import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IListItemProps } from "./interface";

const ListItem: FunctionComponent<IListItemProps> = (
  {
    children
  }) => (
  <div className={styles.listItem}>
    {children}
  </div>
);

export { ListItem };
