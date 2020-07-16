import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Label: FunctionComponent<ILabelProps> = (
  {
    className,
    Icon,
    text,
    color
  }
) => (
  <div className={classNames(styles.tag, styles[color], className)}>
    <Icon className={styles.icon} fontSize="inherit" />
    {text && <span className={styles.text}>{text}</span>}
  </div>
);

interface ILabelProps {
  className?: string;
  Icon: FunctionComponent<IIconProps>;
  color: "red" | "green" | "darkYellow";
  text?: string;
}

interface IIconProps {
  className?: string;
  fontSize?: "inherit" | "default" | "small" | "large";
}
