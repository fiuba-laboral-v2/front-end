import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const NotificationExplanation: FunctionComponent<IComponentProps> = ({
  className,
  message
}) => (
  <div className={classNames(className, styles.container)}>
    <div className={styles.message}>
      <p>{message}</p>
    </div>
  </div>
);

interface IComponentProps {
  className?: string;
  message: string;
}
