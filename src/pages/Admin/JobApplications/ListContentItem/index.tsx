import React, { FunctionComponent } from "react";
import { IJobApplication } from "$interfaces/JobApplication";
import { TimeFormatter } from "$models/TimeFormatter";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import styles from "./styles.module.scss";
import { NumberFormatter } from "$models/NumberFormatter";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  jobApplication: {
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
  </>
);

interface IListContentItemProps {
  jobApplication: IJobApplication;
}
