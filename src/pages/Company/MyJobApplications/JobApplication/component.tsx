import React, { FunctionComponent, Ref } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { Link } from "$components/Link";
import { Card } from "$components/Card";
import { Subtitle } from "$components/Subtitle";
import { CreatedSince } from "$components/CreatedSince";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";

export const JobApplication: FunctionComponent<IJobApplicationProps> = (
  {
    className,
    _ref,
    jobApplication: {
      createdAt,
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
      <CreatedSince
        className={styles.createdAt}
        date={createdAt}
      />
    </Card>
  );
};

interface IJobApplicationProps {
  className: string;
  jobApplication: IJobApplication;
  _ref?: Ref<HTMLDivElement>;
}
