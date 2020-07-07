import React, { FunctionComponent } from "react";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import { Checkbox } from "$components/Checkbox";
import styles from "./styles.module.scss";

export const Tab: FunctionComponent<ITabProps> = (
  {
    className,
    color,
    iconTitle,
    Icon,
    onClick,
    selected
  }
) => (
  <Tooltip
    classes={{ tooltip: styles.tooltip }}
    title={iconTitle}
    placement="right"
  >
    <div
      className={classNames(
        styles.container,
        className,
        styles[color],
        styles[selected ? "selected" : ""]
      )}
      onClick={onClick}
    >
      <Checkbox
        checked={selected}
        className={styles.checkbox}
        checkboxClassName={classNames(styles.checkboxIcon, styles[color])}
      />
      <div><Icon className={styles.icon}/></div>
      <p className={classNames(styles.description, styles[color])}>{iconTitle}</p>
    </div>
  </Tooltip>
);

interface ITabProps {
  className?: string;
  color: "red" | "blue";
  selected: boolean;
  iconTitle: string;
  Icon: FunctionComponent<IIcon>;
  onClick: () => void;
}

interface IIcon {
  className?: string;
}
