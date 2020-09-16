import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { IApplicant } from "$interfaces/Applicant";
import { CareersDetail } from "$components/CareersSection/CareersDetail";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  applicant: {
    user: {
      name,
      surname,
      dni
    },
    padron,
    careers,
    approvalStatus
  }
}) => (
  <>
    <p className={classNames(styles.text, styles.names)}>
      {`${name} ${surname}`}
    </p>
    <p className={styles.text}>
      {padron}
    </p>
    <p className={styles.text}>
      {dni}
    </p>
    <div className={styles.careersContainer}>
      <CareersDetail
        className={styles.careers}
        regularFontWeight
        careers={careers}
        withSubjects={false}
      />
    </div>
    <div className={styles.statusContainer}>
      <SharedStatusLabel
        status={approvalStatus}
        withTooltip
        type="small"
      />
    </div>
  </>
);

interface IListContentItemProps {
  applicant: IApplicant;
}
