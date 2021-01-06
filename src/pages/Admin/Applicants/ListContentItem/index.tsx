import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NumberFormatter } from "$models/NumberFormatter";
import { IApplicant } from "$interfaces/Applicant";

import { CareersDetail } from "$components/CareersSection/CareersDetail";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { OpenDetailIcon } from "$components/OpenDetailIcon";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  applicant: {
    uuid,
    user: { name, surname, email, dni },
    padron,
    careers,
    approvalStatus
  }
}) => (
  <>
    <p className={styles.text}>{`${name} ${surname}`}</p>
    <p className={styles.text}>{email}</p>
    <div className={styles.careersContainer}>
      <CareersDetail
        className={styles.careers}
        regularFontWeight
        careers={careers}
        withSubjects={false}
      />
    </div>
    <p className={styles.text}>{padron}</p>
    <p className={styles.text}>{NumberFormatter.formatNumber(dni)}</p>
    <div className={styles.statusContainer}>
      <SharedStatusLabel status={approvalStatus} withTooltip type="large" />
    </div>
    <div className={styles.seeDetailButtonContainer}>
      <OpenDetailIcon detailRoute={RoutesBuilder.admin.applicantDetail(uuid)} />
    </div>
  </>
);

interface IListContentItemProps {
  applicant: IApplicant;
}
