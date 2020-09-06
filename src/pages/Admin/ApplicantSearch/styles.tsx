import React, { FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.scss";

interface IMainContainer {
  children?: ReactNode;
}

export const MainContainer: FunctionComponent<IMainContainer> = ({ children }) => (
  <div className={styles.mainContent}>
    {children}
  </div>
);
