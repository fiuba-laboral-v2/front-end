import React, { FunctionComponent } from "react";
import classnames from "classnames";

import { IButtonProps } from "./interface";
import styles from "./styles.module.scss";

const Button: FunctionComponent<IButtonProps> = (
  {
    negative,
    secondary,
    onClick,
    children,
    ...props
  }) => (
    <button
      className={classnames(styles.main, {
        [styles.primary]: !secondary,
        [styles.secondary]: secondary,
        [styles.positive]: !negative,
        [styles.negative]: negative
      }
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

export default Button;
