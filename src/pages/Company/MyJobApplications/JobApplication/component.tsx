import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ClickableCard } from "$components/ClickableCard";
import { Subtitle } from "$components/Subtitle";
import { TimeHumanizer } from "$components/TimeHumanizer";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";

export const JobApplication: FunctionComponent<IJobApplicationProps> = (
  {
    className,
    jobApplication: {
      offer,
      applicant
    }
  }) => {
  return (
    <ClickableCard className={classNames(styles.card, className)}>
      <div className={styles.leftContainer}>
        <Subtitle className={styles.offerTitle}>
          {offer.title}
        </Subtitle>
        <hr className={styles.separator}/>
        <Subtitle className={styles.applicantName}>
          <Link to={RoutesBuilder.applicant.detail(applicant.uuid)}>
            {`${applicant.user.name} ${applicant.user.surname}`}
          </Link>
        </Subtitle>
      </div>
      <TimeHumanizer
        className={styles.createdAt}
        since={parseInt(offer.createdAt, 10)}
      />
    </ClickableCard>
  );
};

interface IJobApplicationProps {
  className: string;
  jobApplication: IJobApplication;
}
