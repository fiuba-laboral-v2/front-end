import React, { FunctionComponent } from "react";
import { IsNewLabel } from "./IsNewLabel";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Card } from "$components/Card";
import { TNotification } from "$interfaces/Notification";
import styles from "./styles.module.scss";

export const Notification: FunctionComponent<IComponentProps> = ({
  className,
  icon,
  children,
  notification
}) => (
  <Card className={className}>
    {notification.isNew && <IsNewLabel />}
    <div className={styles.notification}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.info}>
        {children}
        <TimeHumanizer since={notification.createdAt} />
      </div>
    </div>
  </Card>
);

interface IComponentProps {
  className?: string;
  icon: React.ReactElement;
  notification: TNotification;
}
