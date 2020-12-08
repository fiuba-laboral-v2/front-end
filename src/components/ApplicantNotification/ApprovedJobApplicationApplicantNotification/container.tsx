import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { Link } from "$components/Link";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { StatusIcon } from "$components/StatusIcon";

import { IApprovedJobApplicationApplicantNotification } from "$interfaces/ApplicantNotification";
import styles from "./styles.module.scss";

export const ApprovedJobApplicationApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("approvedOfferCompanyNotification");

  const {
    jobApplication: { applicant, offer, approvalStatus }
  } = notification;

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={OfferIcon} approvalStatus={approvalStatus} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <NotificationBody>
        <Link to={RoutesBuilder.applicant.myProfile()}>
          {`${applicant.user.name} ${applicant.user.surname}`}
        </Link>
        <div className={styles.separator}>-</div>
        <Link className={styles.offer} to={RoutesBuilder.applicant.offerDetail(offer.uuid)}>
          {offer.title}
        </Link>
      </NotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IApprovedJobApplicationApplicantNotification;
}
