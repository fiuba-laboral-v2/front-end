import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Card } from "$components/Card";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";
import { IsNewLabel } from "./IsNewLabel";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Link } from "$components/Link";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const JobApplicationNotification: FunctionComponent<IComponentProps> = ({
  className,
  firstLink,
  title,
  hideApprovalStatus,
  notification: {
    isNew,
    createdAt,
    jobApplication: { approvalStatus, offer }
  }
}) => (
  <Card className={className}>
    {isNew && <IsNewLabel />}
    <div className={styles.notification}>
      <StatusIcon
        className={styles.statusIcon}
        Icon={JobApplicationIcon}
        approvalStatus={hideApprovalStatus ? undefined : approvalStatus}
      />
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>
          {firstLink}
          <div className={styles.separator}>-</div>
          <Link className={styles.offer} to={RoutesBuilder.company.offer(offer.uuid)}>
            {offer.title}
          </Link>
        </div>
        <TimeHumanizer since={createdAt} />
      </div>
    </div>
  </Card>
);
