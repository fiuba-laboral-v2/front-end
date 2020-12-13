import React, { FunctionComponent, HTMLProps } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button: FunctionComponent<IButtonProps> = ({
  className,
  kind,
  width = "fitContent",
  children,
  ...props
}) => (
  <button className={classNames(styles.main, styles[kind], styles[width], className)} {...props}>
    {children}
  </button>
);

export type ButtonKind = "primary" | "secondary" | "warning" | "danger";
export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  kind: ButtonKind;
  width?: "expand" | "fitContent";
  onClick?: (state: object) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: ButtonType;
  negative?: boolean;
  secondary?: boolean;
}
