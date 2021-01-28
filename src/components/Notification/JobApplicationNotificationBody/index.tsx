import React, { FunctionComponent } from "react";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { NotificationItem } from "$components/Notification/NotificationItem";
import { ReloadLink } from "$components/ReloadLink";
import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";

export const JobApplicationNotificationBody: FunctionComponent<IContainerProps> = ({
  applicant,
  offer,
  applicantLink,
  offerLink,
  children
}) => (
  <div>
    <NotificationBody>
      <ReloadLink
        to={applicantLink}
      >{`${applicant.user.name} ${applicant.user.surname}`}</ReloadLink>
      <div className={styles.separator}>-</div>
      {offerLink && (
        <ReloadLink className={styles.offer} to={offerLink(offer.uuid)}>
          {offer.title}
        </ReloadLink>
      )}
      {!offerLink && <div className={styles.offer}>{offer.title}</div>}
    </NotificationBody>
    <NotificationItem>{children}</NotificationItem>
  </div>
);

interface IContainerProps {
  applicant: IApplicant;
  applicantLink: string;
  offer: IOffer;
  offerLink?: (uuid: string) => string;
}
