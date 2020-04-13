import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { IOffer } from "$interfaces/Offer";
import { JobSpecs } from "./JobSpecs";

import styles from "./styles.module.scss";

const Info: FunctionComponent<IOfferProps> = ({
  data: {
    company,
    title,
    minimumSalary,
    maximumSalary,
    hoursPerDay,
    createdAt
}}) => (
  <div className={styles.container}>
    <Subtitle className={styles.jobDescription}>
      {title}
    </Subtitle>
    <hr className={styles.separator}/>
    <div className={styles.detailsContainer}>
      <div className={styles.firstColumn}>
        <Subtitle>
          {company.companyName}
        </Subtitle>
        <TimeHumanizer since={createdAt} className={styles.time}/>
      </div>
      <JobSpecs salary={{minimumSalary, maximumSalary}} workload={hoursPerDay} />
    </div>
  </div>
);

interface IOfferProps {
  data: IOffer;
}

export { Info };
