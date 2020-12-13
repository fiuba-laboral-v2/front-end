import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const NotificationItem: FunctionComponent = ({ children }) => (
  <div className={styles.children}>{children}</div>
);
