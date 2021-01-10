import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const TaskHeaderInfo: FunctionComponent<IUserDetailsProps> = ({
  className,
  Icon,
  title,
  value
}) => (
  <div className={classNames(className, styles.taskHeaderInfo)}>
    {Icon && <Icon className={styles.iconLabel} />}
    {title && <span className={styles.label}>{title}</span>}
    <span className={classNames(styles.infoText, { [styles.withoutMargin]: !title })}>{value}</span>
  </div>
);

interface IUserDetailsProps {
  className?: string;
  title?: string;
  value: string;
  Icon?: FunctionComponent<{ className: string }>;
}
