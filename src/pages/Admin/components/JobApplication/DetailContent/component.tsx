import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { OfferDetail } from "$components/OfferDetail";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const JobApplicationDetailContent: FunctionComponent<IComponentProps> = ({
  jobApplication,
  className,
  hidden
}) => (
  <div className={classNames(styles.detailContent, className)} {...{ hidden }}>
    <ApplicantDetail
      mobileLayout
      className={styles.applicantDetail}
      applicant={jobApplication?.applicant}
      titleLink={
        jobApplication && RoutesBuilder.admin.applicantDetail(jobApplication.applicant.uuid)
      }
    />
    <OfferDetail
      mobileLayout
      className={styles.offerDetail}
      offer={jobApplication?.offer}
      titleLink={jobApplication && RoutesBuilder.admin.offerDetail(jobApplication.offer.uuid)}
      goToCompany={
        jobApplication && RoutesBuilder.admin.companyDetail(jobApplication.offer.company.uuid)
      }
    />
  </div>
);
