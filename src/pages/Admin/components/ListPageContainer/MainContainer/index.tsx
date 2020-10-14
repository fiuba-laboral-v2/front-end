import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const MainContainer: FunctionComponent = ({ children }) => (
  <div className={styles.mainContent}>{children}</div>
);
