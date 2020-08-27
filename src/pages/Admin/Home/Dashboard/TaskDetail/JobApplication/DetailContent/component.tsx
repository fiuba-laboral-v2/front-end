import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { OfferDetail } from "$components/OfferDetail";
import { RejectButton } from "../../Actions/RejectButton";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const JobApplicationDetailContent: FunctionComponent<IComponentProps> = (
  {
    applicant,
    offer,
    className,
    setStatus
  }
) => (
  <div className={classNames(styles.detailContent, className)}>
    <ApplicantDetail
      className={styles.applicantDetail}
      mobileLayout
      applicant={applicant}
      rejectButton={<RejectButton setStatus={setStatus}/>}
    />
    <OfferDetail
      className={styles.offerDetail}
      mobileLayout
      offer={offer}
    />
  </div>
);
