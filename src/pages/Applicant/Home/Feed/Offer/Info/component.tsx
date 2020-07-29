import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { IOffer } from "$interfaces/Offer";
import { JobSpecs } from "./JobSpecs";

import styles from "./styles.module.scss";
import { CompanyLogo } from "../../../../../../components/CompanyLogo";

export const Info: FunctionComponent<IOfferProps> = ({
  data: {
    company,
    title,
    minimumSalary,
    maximumSalary,
    hoursPerDay,
    createdAt
}}) => (
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
        <TimeHumanizer since={createdAt} className={styles.mobileTime} type="create"/>
      </div>
    </div>
    <div className={styles.detailsContainer}>
      <div className={styles.firstColumn}>
        <Subtitle className={styles.companyName}>
          {company.companyName}
        </Subtitle>
        <TimeHumanizer since={createdAt} className={styles.time} type="create"/>
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
}
