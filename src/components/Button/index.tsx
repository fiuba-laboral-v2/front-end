import React, { FunctionComponent } from "react";
import classnames from "classnames";

import { IButtonProps } from "./interface";
import styles from "./styles.module.scss";

const Button: FunctionComponent<IButtonProps> = (
  {
    className,
    width = "fit-content",
    children,
    ...props
  }) => (
    <button
      className={classnames(styles.main, styles[className], styles[width])}
      {...props}
    >
      {children}
    </button>
  );

export default Button;
