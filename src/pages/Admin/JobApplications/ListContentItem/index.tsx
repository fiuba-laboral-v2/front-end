import React, { FunctionComponent } from "react";
import { IJobApplication } from "$interfaces/JobApplication";
import { TimeFormatter } from "$models/TimeFormatter";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  jobApplication: {
    applicant: {
      padron,
      user: {
        name
      }
    },
    offer: {
      company: {
        companyName,
        cuit
      }
    },
    updatedAt,
    approvalStatus
  }
}) => (
  <>
    <p className={styles.text}>
      {companyName}
    </p>
    <p className={styles.text}>
      {cuit}
    </p>
    <p className={styles.text}>
      {name}
    </p>
    <p className={styles.text}>
      {padron}
    </p>
    <div className={styles.statusContainer}>
      <SharedStatusLabel
        status={approvalStatus}
        withTooltip
        type="large"
      />
    </div>
    <div className={styles.text}>
      {TimeFormatter.dateTime(updatedAt)}
    </div>
  </>
);

interface IListContentItemProps {
  jobApplication: IJobApplication;
}
