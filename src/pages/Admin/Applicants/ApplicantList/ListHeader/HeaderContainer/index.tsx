import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const HeaderContainer: FunctionComponent = ({ children }) => (
  <div className={styles.headerContainer}>
    {children}
  </div>
);
