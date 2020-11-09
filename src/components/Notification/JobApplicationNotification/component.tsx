import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Card } from "$components/Card";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Link } from "$components/Link";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const JobApplicationNotification: FunctionComponent<IComponentProps> = ({
  className,
  title,
  notification: {
    createdAt,
    jobApplication: { approvalStatus, offer, applicant }
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
        <div className={styles.body}>
          <Link to={RoutesBuilder.company.applicantDetail(applicant.uuid)}>
            {`${applicant.user.name} ${applicant.user.surname}`}
          </Link>
          <div className={styles.separator}>-</div>
          <Link to={RoutesBuilder.company.offer(offer.uuid)}>{offer.title}</Link>
        </div>
        <TimeHumanizer since={createdAt} />
      </div>
    </div>
  </Card>
);
