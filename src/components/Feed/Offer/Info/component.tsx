import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { IOffer } from "$interfaces/Offer";
import { JobSpecs } from "./JobSpecs";

import styles from "./styles.module.scss";
import { CompanyLogo } from "$components/CompanyLogo";
import { UpdatedSince } from "$components/UpdatedSince";

export const Info: FunctionComponent<IOfferProps> = ({
  data: {
    company,
    title,
    minimumSalary,
    maximumSalary,
    hoursPerDay,
    updatedAt
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
        <UpdatedSince date={updatedAt} className={styles.mobileTime}/>
      </div>
    </div>
    <div className={styles.detailsContainer}>
      <div className={styles.firstColumn}>
        <Subtitle className={styles.companyName}>
          {company.companyName}
        </Subtitle>
        <UpdatedSince date={updatedAt} className={styles.time}/>
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
