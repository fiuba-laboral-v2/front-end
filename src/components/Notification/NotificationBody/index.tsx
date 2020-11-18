import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const NotificationBody: FunctionComponent = ({ children }) => (
  <div className={styles.body}>{children}</div>
);
