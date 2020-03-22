import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const MainContent: FunctionComponent = ({ children }) => (
  <div className={styles.mainContent}>
    {children}
  </div>
);
