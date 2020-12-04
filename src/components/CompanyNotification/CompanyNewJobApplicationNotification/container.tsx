import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { Link } from "$components/Link";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";

import styles from "./styles.module.scss";
import { INewJobApplicationCompanyNotification } from "$interfaces/CompanyNotification";

export const CompanyNewJobApplicationNotificationContainer: FunctionComponent<IContainerProps> = ({
  notification,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("companyNewJobApplicationNotification");

  const {
    jobApplication: { applicant, offer }
  } = notification;

  return (
    <Notification
      {...props}
      notification={notification}
      icon={<StatusIcon Icon={JobApplicationIcon} />}
    >
      <NotificationTitle>{translations?.title || " "}</NotificationTitle>
      <NotificationBody>
        <Link to={RoutesBuilder.company.applicantDetail(applicant.uuid)}>
          {`${applicant.user.name} ${applicant.user.surname}`}
        </Link>
        <div className={styles.separator}>-</div>
        <Link className={styles.offer} to={RoutesBuilder.company.offer(offer.uuid)}>
          {offer.title}
        </Link>
      </NotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  notification: INewJobApplicationCompanyNotification;
  className?: string;
}

interface ITranslations {
  title: string;
}
