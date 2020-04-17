import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const MainContent: FunctionComponent<IMainContent> = (
  {
    className,
    children
  }
) => (
  <div className={classNames(styles.mainContent, className)}>
    {children}
  </div>
);

interface IMainContent {
  className?: string;
}
