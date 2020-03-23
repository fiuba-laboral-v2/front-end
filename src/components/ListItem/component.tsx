import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

const ListItem: FunctionComponent = (
  {
    children
  }) => (
  <div className={styles.listItem}>
    {children}
  </div>
);

export { ListItem };
