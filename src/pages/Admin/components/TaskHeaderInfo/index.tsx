import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const TaskHeaderInfo: FunctionComponent<IUserDetailsProps> = ({
  className,
  valueClassName,
  Icon,
  title,
  value
}) => (
  <div className={classNames(className, styles.taskHeaderInfo)}>
    {Icon && <Icon className={styles.label} />}
    {title && <span className={styles.label}>{title}</span>}
    <span
      className={classNames(styles.infoText, valueClassName, { [styles.withoutMargin]: !title })}
    >
      {value}
    </span>
  </div>
);

interface IUserDetailsProps {
  className?: string;
  title?: string;
  value: string;
  valueClassName?: string;
  Icon?: FunctionComponent<{ className: string }>;
}
