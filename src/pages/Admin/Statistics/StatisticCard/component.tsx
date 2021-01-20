import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { IStatisticCardProps } from "./interface";
import styles from "./styles.module.scss";

export const StatisticCard: FunctionComponent<IStatisticCardProps> = ({
  title,
  value,
  type,
  icon
}) => {
  return (
    <div className={classNames(styles.cardContainer, styles[type])}>
      {icon(styles[type])}
      <p className={classNames(styles.title, styles[type])}>{title}</p>
      <p className={classNames(styles.value, styles[type])}>{value}</p>
    </div>
  );
};
