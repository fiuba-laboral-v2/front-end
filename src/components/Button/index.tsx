import React, { FunctionComponent, HTMLProps } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button: FunctionComponent<IButtonProps> = (
  {
    className,
    kind,
    width = "fitContent",
    children,
    ...props
  }) => (
    <button
      className={classNames(styles.main, styles[kind], styles[width], className)}
      {...props}
    >
      {children}
    </button>
  );

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  kind: "primary" | "secondary" | "warning" | "danger";
  width?: "expand" | "fitContent";
  onClick?: (state: object) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  negative?: boolean;
  secondary?: boolean;
}
