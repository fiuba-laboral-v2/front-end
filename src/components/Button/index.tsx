import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Link } from "../Link";

export const Button: FunctionComponent<IButtonProps> = ({
  className,
  kind,
  width = "fitContent",
  children,
  link,
  ...props
}) => {
  const buttonProps = {
    className: classNames(styles.main, styles[kind], styles[width], className),
    children,
    ...props
  };
  return link ? <Link to={link} {...buttonProps} /> : <button {...buttonProps} />;
};

export type ButtonKind = "primary" | "secondary" | "warning" | "danger";
export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps {
  children?: ReactNode;
  hidden?: boolean;
  title?: string;
  form?: string;
  className?: string;
  kind: ButtonKind;
  width?: "expand" | "fitContent";
  onClick?: (state: object) => void;
  link?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: ButtonType;
  negative?: boolean;
  secondary?: boolean;
}
