import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { IButtonProps } from "./interface";
import styles from "./styles.module.scss";

export const Button: FunctionComponent<IButtonProps> = (
  {
    className,
    width = "fitContent",
    children,
    ...props
  }) => (
    <button
      className={classNames(styles.main, styles[className], styles[width])}
      {...props}
    >
      {children}
    </button>
  );
