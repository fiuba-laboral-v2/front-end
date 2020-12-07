import React, { FunctionComponent } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const MainContent: FunctionComponent<IMainContentProps> = ({
  width = "narrow",
  children,
  className
}) => <div className={classNames(styles.mainContent, styles[width], className)}>{children}</div>;

export interface IMainContentProps {
  width?: "narrow" | "fullWidth";
  className?: string;
}
