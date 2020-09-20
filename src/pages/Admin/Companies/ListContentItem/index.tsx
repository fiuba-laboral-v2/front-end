import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import styles from "./styles.module.scss";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  company: {
    companyName,
    businessName,
    cuit,
    updatedAt,
    approvalStatus
  }
}) => (
  <>
    <p className={styles.text}>
      {companyName}
    </p>
    <p className={styles.text}>
      {businessName}
    </p>
    <p className={styles.text}>
      {cuit}
    </p>
    <div className={styles.text}>
      <TimeHumanizer since={updatedAt}/>
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
  company: ICompany;
}
