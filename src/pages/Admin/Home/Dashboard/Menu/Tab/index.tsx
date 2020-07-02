import React, { FunctionComponent } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./styles.module.scss";

export const Tab: FunctionComponent<ICompanyTabProps> = (
  {
    iconTitle,
    Icon
  }
) => (
  <div className={styles.tab}>
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

interface ICompanyTabProps {
  iconTitle: string;
  Icon: FunctionComponent<IIcon>;
}

interface IIcon {
  className?: string;
}
