import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { TimeFormatter } from "$models/TimeFormatter";
import { NumberFormatter } from "$models/NumberFormatter";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { OpenDetailIcon } from "$components/OpenDetailIcon";

import { ITranslations } from "./container";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  company: {
    uuid,
    companyName,
    businessSector,
    hasAnInternshipAgreement,
    businessName,
    cuit,
    updatedAt,
    approvalStatus
  },
  translations
}) => (
  <>
    <p className={styles.text}>{companyName}</p>
    <p className={styles.text}>{businessName}</p>
    <p className={styles.text}>{businessSector}</p>
    <p className={styles.text}>{NumberFormatter.formatCuit(cuit)}</p>
    <div className={styles.text}>{TimeFormatter.dateTime(updatedAt)}</div>
    {hasAnInternshipAgreement && <p className={styles.text}>{translations?.yes}</p>}
    {!hasAnInternshipAgreement && <p className={styles.text}>{translations?.no}</p>}
    <div className={styles.statusContainer}>
      <SharedStatusLabel status={approvalStatus} withTooltip type="large" />
    </div>
    <div className={styles.seeDetailButton}>
      <OpenDetailIcon detailRoute={RoutesBuilder.admin.companyDetail(uuid)} />
    </div>
  </>
);

interface IListContentItemProps {
  company: ICompany;
  translations?: ITranslations;
}
