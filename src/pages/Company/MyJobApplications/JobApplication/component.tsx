import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ClickableCard } from "$components/ClickableCard";
import { Subtitle } from "$components/Subtitle";
import { TimeHumanizer } from "$components/TimeHumanizer";

import { IJobApplicationProps } from "./interfaces";
import styles from "./styles.module.scss";

export const JobApplication: FunctionComponent<IJobApplicationProps> = (
  {
    jobApplication,
    applicantDetailRoute
  }) => {
  return (
    <ClickableCard className={styles.card}>
      <div className={styles.leftContainer}>
        <Subtitle className={styles.offerTitle}>
          {jobApplication.offer.title}
        </Subtitle>
        <hr className={styles.separator}/>
        <Subtitle className={styles.applicantName}>
          <Link to={applicantDetailRoute}>{jobApplication.applicant.user.name}</Link>
        </Subtitle>
      </div>
      <TimeHumanizer
        className={styles.createdAt}
        since={parseInt(jobApplication.offer.createdAt, 10)}
      />
    </ClickableCard>
  );
};
