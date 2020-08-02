import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const TaskHeaderInfo: FunctionComponent<IUserDetailsProps> = (
  {
    Icon,
    title,
    value
  }
) => (
  <div className={styles.taskHeaderInfo}>
    {Icon && <Icon className={styles.label}/>}
    {title && <span className={styles.label}>{title}</span>}
    <span className={styles.infoText}>{value}</span>
  </div>
);

interface IUserDetailsProps {
  title?: string;
  value: string;
  Icon?: FunctionComponent<{ className: string; }>;
}
