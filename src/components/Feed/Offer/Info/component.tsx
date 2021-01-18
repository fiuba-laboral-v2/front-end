import React from "react";
import classNames from "classnames";
import { Subtitle } from "$components/Subtitle";
import { IOffer } from "$interfaces/Offer";
import { JobSpecs } from "./JobSpecs";
import { CompanyLogo } from "$components/CompanyLogo";
import { PublishedSince } from "$components/PublishedSince";
import { StatusLabels } from "./StatusLabels";

import styles from "./styles.module.scss";
import { InternshipLabel } from "$components/InternshipLabel";

export const Info = <TOffer extends IOffer>({
  offer,
  withStatusLabels
}: IComponentProps<TOffer>) => (
  <div className={styles.container}>
    <div className={styles.headerContainer}>
      <CompanyLogo
        className={styles.mobileLogo}
        companyName={offer.company.companyName}
        logo={offer.company.logo}
        size="large"
        useDefaultIcon
      />
      <div className={styles.subtitleContainer}>
        <Subtitle className={styles.jobDescription}>{offer.title}</Subtitle>
        <hr className={styles.separator} />
        <PublishedSince date={offer.updatedAt} className={styles.mobileTime} />
      </div>
    </div>
    <div
      className={classNames(styles.detailsContainer, {
        [styles.reverseDetailsContainer]: withStatusLabels
      })}
    >
      <div className={styles.firstColumn}>
        {!withStatusLabels && (
          <Subtitle className={styles.companyName}>{offer.company.companyName}</Subtitle>
        )}
        {withStatusLabels && <StatusLabels className={styles.statusLabels} offer={offer} />}
        <InternshipLabel
          hidden={!offer.isInternship}
          className={classNames(styles.internshipLabel, {
            [styles.underCompanyName]: !withStatusLabels
          })}
        />
        <PublishedSince
          className={classNames(styles.time, { [styles.alignLeft]: withStatusLabels })}
          date={offer.updatedAt}
        />
      </div>
      <JobSpecs
        salary={{ minimumSalary: offer.minimumSalary, maximumSalary: offer.maximumSalary }}
        workload={offer.hoursPerDay}
        className={styles.secondColumn}
      />
    </div>
  </div>
);

interface IComponentProps<TOffer> {
  offer: TOffer;
  withStatusLabels: boolean;
}
