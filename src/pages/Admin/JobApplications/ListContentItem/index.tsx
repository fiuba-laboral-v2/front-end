import React, { FunctionComponent } from "react";
import { IJobApplication } from "$interfaces/JobApplication";
import { TimeFormatter } from "$models/TimeFormatter";
import { NumberFormatter } from "$models/NumberFormatter";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { OpenDetailIcon } from "$components/OpenDetailIcon";

import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  jobApplication: {
    uuid,
    applicant: {
      padron,
      user: { name, surname }
    },
    offer: {
      company: { companyName, cuit }
    },
    updatedAt,
    approvalStatus
  }
}) => (
  <>
    <p className={styles.text}>{companyName}</p>
    <p className={styles.text}>{NumberFormatter.formatCuit(cuit)}</p>
    <p className={styles.text}>{`${name} ${surname}`}</p>
    <p className={styles.text}>{padron}</p>
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
