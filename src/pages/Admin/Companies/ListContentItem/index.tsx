import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { TimeFormatter } from "$models/TimeFormatter";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import styles from "./styles.module.scss";
import { NumberFormatter } from "$models/NumberFormatter";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  company: { companyName, businessName, cuit, updatedAt, approvalStatus }
}) => (
  <>
    <p className={styles.text}>{companyName}</p>
    <p className={styles.text}>{businessName}</p>
    <p className={styles.text}>{NumberFormatter.formatCuit(cuit)}</p>
    <div className={styles.text}>{TimeFormatter.dateTime(updatedAt)}</div>
    <div className={styles.statusContainer}>
      <SharedStatusLabel status={approvalStatus} withTooltip type="large" />
    </div>
  </>
);

interface IListContentItemProps {
  company: ICompany;
}
