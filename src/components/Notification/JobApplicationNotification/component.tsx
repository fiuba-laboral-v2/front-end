import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";
import { TimeHumanizer } from "$components/TimeHumanizer";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const JobApplicationNotification: FunctionComponent<IComponentProps> = ({
  className,
  title,
  notification: {
    createdAt,
    jobApplication: {
      approvalStatus,
      offer,
      applicant: {
        user: { name, surname }
      }
    }
  }
}) => (
  <Card className={className}>
    <div className={styles.notification}>
      <StatusIcon
        className={styles.statusIcon}
        Icon={JobApplicationIcon}
        approvalStatus={approvalStatus}
      />
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.name}>{`${name} ${surname} - ${offer.title}`}</div>
        <TimeHumanizer since={createdAt} />
      </div>
    </div>
  </Card>
);
