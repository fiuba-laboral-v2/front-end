import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Subtitle } from "$components/Subtitle";
import { IOffer } from "$interfaces/Offer";
import { JobSpecs } from "./JobSpecs";
import { CompanyLogo } from "$components/CompanyLogo";
import { PublishedSince } from "$components/PublishedSince";
import { StatusLabels } from "./StatusLabels";

import styles from "./styles.module.scss";
import { InternshipLabel } from "$components/InternshipLabel";

export const Info: FunctionComponent<IOfferProps> = ({
  data: {
    company,
    title,
    minimumSalary,
    maximumSalary,
    hoursPerDay,
    updatedAt,
    extensionApprovalStatus,
    graduadosApprovalStatus,
    graduatesExpirationDateTime,
    studentsExpirationDateTime,
    targetApplicantType,
    isInternship
  },
  withStatusLabels
}) => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <CompanyLogo
        className={styles.mobileLogo}
        companyName={company.companyName}
        logo={company.logo}
        size="large"
        useDefaultIcon
      />
      <div className={styles.subtitleContainer}>
        <Subtitle className={styles.jobDescription}>{title}</Subtitle>
        <hr className={styles.separator} />
        <PublishedSince date={updatedAt} className={styles.mobileTime} />
      </div>
    </div>
    <div
      className={classNames(styles.detailsContainer, {
        [styles.reverseDetailsContainer]: withStatusLabels
      })}
    >
      <div className={styles.firstColumn}>
        {!withStatusLabels && (
          <Subtitle className={styles.companyName}>{company.companyName}</Subtitle>
        )}
        {withStatusLabels && (
          <StatusLabels
            className={styles.statusLabels}
            extensionApprovalStatus={extensionApprovalStatus}
            graduadosApprovalStatus={graduadosApprovalStatus}
            targetApplicantType={targetApplicantType}
            graduatesExpirationDateTime={graduatesExpirationDateTime}
            studentsExpirationDateTime={studentsExpirationDateTime}
          />
        )}
        <InternshipLabel
          hidden={!isInternship}
          className={classNames(styles.internshipLabel, {
            [styles.underCompanyName]: !withStatusLabels
          })}
        />
        <PublishedSince
          className={classNames(styles.time, { [styles.alignLeft]: withStatusLabels })}
          date={updatedAt}
        />
      </div>
      <JobSpecs
        salary={{ minimumSalary, maximumSalary }}
        workload={hoursPerDay}
        className={styles.secondColumn}
      />
    </div>
  </div>
);

interface IOfferProps {
  data: IOffer;
  withStatusLabels: boolean;
}
