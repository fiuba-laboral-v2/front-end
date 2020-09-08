import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Subtitle } from "$components/Subtitle";
import { IOffer } from "$interfaces/Offer";
import { JobSpecs } from "./JobSpecs";
import { CompanyLogo } from "$components/CompanyLogo";
import { PublishedSince } from "$components/PublishedSince";
import { SeparatedStatusLabel } from "$components/SeparatedStatusLabel";

import styles from "./styles.module.scss";

export const Info: FunctionComponent<IOfferProps> = (
  {
    data: {
      company,
      title,
      minimumSalary,
      maximumSalary,
      hoursPerDay,
      updatedAt,
      extensionApprovalStatus,
      graduadosApprovalStatus,
      targetApplicantType
    },
    hideCompanyName
  }
) => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <CompanyLogo
        className={styles.mobileLogo}
        companyName={company.companyName}
        logo={company.logo}
        size="large"
      />
      <div className={styles.subtitleContainer}>
        <Subtitle className={styles.jobDescription}>
          {title}
        </Subtitle>
        <hr className={styles.separator}/>
        <PublishedSince date={updatedAt} className={styles.mobileTime}/>
      </div>
    </div>
    <div className={classNames(styles.detailsContainer, {
      [styles.reverseDetailsContainer]: hideCompanyName
    })}>
      <div className={classNames({ [styles.firstColumn]: !hideCompanyName })}>
        {
          !hideCompanyName &&
          <Subtitle className={styles.companyName}>{company.companyName}</Subtitle>
        }
        {
          hideCompanyName &&
          <SeparatedStatusLabel
            className={styles.separatedStatusLabel}
            statusClassName={styles.statusLabel}
            withoutBackground
            extensionApprovalStatus={extensionApprovalStatus}
            graduadosApprovalStatus={graduadosApprovalStatus}
            targetApplicantType={targetApplicantType}
          />
        }
        <PublishedSince
          className={classNames({
            [styles.time]: !hideCompanyName,
            [styles.timeLeftAligned]: hideCompanyName
          })}
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
  hideCompanyName?: boolean;
}
