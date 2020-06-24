import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

export const MainContent: FunctionComponent<IMainContentProps> =
 ({ width = "narrow", children }) => (
  <div className={classnames(styles.mainContent, styles[width])}>
    {children}
  </div>
);

export interface IMainContentProps {
  width?: "narrow" | "fullWidth";
}
