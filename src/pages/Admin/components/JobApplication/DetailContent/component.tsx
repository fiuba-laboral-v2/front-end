import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { OfferDetail } from "$components/OfferDetail";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const JobApplicationDetailContent: FunctionComponent<IComponentProps> = ({
  applicant,
  offer,
  className,
  hidden
}) => (
  <div className={classNames(styles.detailContent, className)} {...{ hidden }}>
    <ApplicantDetail mobileLayout className={styles.applicantDetail} applicant={applicant} />
    <OfferDetail mobileLayout className={styles.offerDetail} offer={offer} />
  </div>
);
