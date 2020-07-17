import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export const Label: FunctionComponent<ILabelProps> = (
  {
    className,
    Icon,
    text,
    color
  }
) => (
  <div className={classNames(styles.tag, styles[color], className)}>
    <div className={styles.iconContainer}>
      <Icon className={styles.icon} fontSize="inherit" />
    </div>
    {text && <span className={styles.text}>{text}</span>}
  </div>
);

interface ILabelProps {
  className?: string;
  Icon: FunctionComponent<SvgIconProps>;
  color: "red" | "green" | "darkYellow";
  text?: string;
}
