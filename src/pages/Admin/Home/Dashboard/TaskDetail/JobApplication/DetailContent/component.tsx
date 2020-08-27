import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { OfferDetail } from "$components/OfferDetail";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const JobApplicationDetailContent: FunctionComponent<IComponentProps> = (
  {
    applicant,
    offer,
    className
  }
) => (
  <div className={classNames(styles.detailContent, className)}>
    <ApplicantDetail applicant={applicant} className={styles.applicantDetail} mobileLayout />
    <OfferDetail offer={offer} className={styles.offerDetail} mobileLayout />
  </div>
);
