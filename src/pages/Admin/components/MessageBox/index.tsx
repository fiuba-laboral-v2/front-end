import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const MessageBox: FunctionComponent = ({ children }) => (
  <span className={styles.messageContainer}>{children}</span>
);
