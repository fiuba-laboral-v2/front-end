import React, { FunctionComponent } from "react";
import { IJobApplication } from "$interfaces/JobApplication";
import { TimeFormatter } from "$models/TimeFormatter";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { OpenDetailIcon } from "$components/OpenDetailIcon";

import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  jobApplication: {
    uuid,
    applicant: {
      user: { name, surname }
    },
    offer,
    updatedAt,
    approvalStatus
  }
}) => (
  <>
    <p className={styles.text}>{offer().company.companyName}</p>
    <p className={styles.text}>{offer().title}</p>
    <p className={styles.text}>{`${name} ${surname}`}</p>
    <div className={styles.statusContainer}>
      <SharedStatusLabel status={approvalStatus} withTooltip type="large" />
    </div>
    <div className={styles.text}>{TimeFormatter.dateTime(updatedAt)}</div>
    <div className={styles.statusContainer}>
      <OpenDetailIcon detailRoute={RoutesBuilder.admin.jobApplicationDetail(uuid)} />
    </div>
  </>
);

interface IListContentItemProps {
  jobApplication: IJobApplication;
}
