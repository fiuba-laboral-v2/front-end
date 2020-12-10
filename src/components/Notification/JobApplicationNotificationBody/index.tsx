import React, { FunctionComponent } from "react";

import { NotificationBody } from "$components/Notification/NotificationBody";
import { Link } from "$components/Link";

import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";

export const JobApplicationNotificationBody: FunctionComponent<IContainerProps> = ({
  applicant,
  offer,
  applicantLink,
  offerLink
}) => (
  <NotificationBody>
    <Link to={applicantLink}>{`${applicant.user.name} ${applicant.user.surname}`}</Link>
    <div className={styles.separator}>-</div>
    <Link className={styles.offer} to={offerLink(offer.uuid)}>
      {offer.title}
    </Link>
  </NotificationBody>
);

interface IContainerProps {
  applicant: IApplicant;
  applicantLink: string;
  offer: IOffer;
  offerLink: (uuid: string) => string;
}
