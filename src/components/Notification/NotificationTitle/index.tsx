import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const NotificationTitle: FunctionComponent = ({ children }) => (
  <div className={styles.title}>{children}</div>
);
