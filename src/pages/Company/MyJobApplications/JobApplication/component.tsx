import React, { FunctionComponent, Ref } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { Link } from "$components/Link";
import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const JobApplication: FunctionComponent<IJobApplicationProps> = (
  {
    className,
    _ref,
    jobApplication: {
      updatedAt,
      offer,
      applicant
    }
  }) => {
  const history = useHistory();
  return (
    <Card
      _ref={_ref}
      className={classNames(styles.card, className)}
      onClick={() => history.push(RoutesBuilder.company.applicantDetail(applicant.uuid))}
    >
      <div className={styles.leftContainer}>
        <Subtitle className={styles.applicantName}>
          {`${applicant.user.name} ${applicant.user.surname}`}
        </Subtitle>
        <hr className={styles.separator}/>
        <Subtitle className={styles.offerTitle}>
          <Link to={RoutesBuilder.company.offer(offer.uuid)}>
            {offer.title}
          </Link>
        </Subtitle>
      </div>
      <TimeHumanizer
        className={styles.updatedAt}
        since={updatedAt}
      />
    </Card>
  );
};

interface IJobApplicationProps {
  className: string;
  jobApplication: IJobApplication;
  _ref?: Ref<HTMLDivElement>;
}
