import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Link } from "$components/Link";
import { Subtitle } from "$components/Subtitle";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Card } from "$components/Card";

export const JobApplication: FunctionComponent<IJobApplicationProps> = ({
  className,
  jobApplication: { updatedAt, offer, applicant }
}) => {
  const link = RoutesBuilder.company.applicantDetail(applicant.uuid);
  return (
    <Card className={classNames(styles.card, className)} link={link}>
      <div className={styles.leftContainer}>
        <Subtitle className={styles.applicantName}>
          {`${applicant.user.name} ${applicant.user.surname}`}
        </Subtitle>
        <hr className={styles.separator} />
        <Subtitle className={styles.offerTitle}>
          <Link to={RoutesBuilder.company.offer(offer().uuid)}>{offer().title}</Link>
        </Subtitle>
      </div>
      <TimeHumanizer className={styles.updatedAt} since={updatedAt} />
    </Card>
  );
};

interface IJobApplicationProps {
  className: string;
  jobApplication: IJobApplication;
}
