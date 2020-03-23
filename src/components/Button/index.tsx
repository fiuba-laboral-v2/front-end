import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const existingProps = ({
  disabled,
  autoFocus,
  type
}: IButtonProps) => ({
  ...(disabled && { disabled }),
  ...(autoFocus && { autoFocus }),
  ...(type && { type })
});

const Button: FunctionComponent<IButtonProps & IButtonStyles> = (
  {
    negative,
    secondary,
    onClick,
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
      {...existingProps(props)}
    >
      {props.children}
    </button>
  );

interface IButtonProps {
  onClick?: (state: object) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: string | undefined;
}

interface IButtonStyles {
  negative?: boolean;
  secondary?: boolean;
}

export default Button;
