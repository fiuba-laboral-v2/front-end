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
  <div
    className={classNames(className, styles[color], styles[selected ? "selected" : ""])}
    onClick={onClick}
  >
    <Checkbox checked={selected} className={styles.checkbox}/>
    <Tooltip
      classes={{ tooltip: styles.tooltip }}
      title={iconTitle}
      placement="right"
    >
      <div><Icon className={styles.icon}/></div>
    </Tooltip>
    <p className={styles.description}>{iconTitle}</p>
  </div>
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
