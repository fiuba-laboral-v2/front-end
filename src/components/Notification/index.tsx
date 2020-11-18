import React, { FunctionComponent } from "react";
import { IsNewLabel } from "./IsNewLabel";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Card } from "$components/Card";
import { TNotification } from "$interfaces/Notification";
import styles from "./styles.module.scss";

export const Notification: FunctionComponent<IComponentProps> = ({
  className,
  icon,
  body,
  title,
  notification
}) => (
  <Card className={className}>
    {notification.isNew && <IsNewLabel />}
    <div className={styles.notification}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{body}</div>
        <TimeHumanizer since={notification.createdAt} />
      </div>
    </div>
  </Card>
);

interface IComponentProps {
  className?: string;
  icon: React.ReactElement;
  title: string;
  body: React.ReactElement;
  notification: TNotification;
}
