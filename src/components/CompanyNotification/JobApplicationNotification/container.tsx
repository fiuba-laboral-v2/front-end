import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Notification } from "$components/Notification";
import { Link } from "$components/Link";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";

import styles from "./styles.module.scss";
import { IJobApplicationNotification } from "$interfaces/Notification";

export const JobApplicationNotificationContainer: FunctionComponent<IContainerProps> = ({
  notification,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("companyJobApplicationNotification");

  const applicant = notification.jobApplication.applicant;
  const offer = notification.jobApplication.offer;

  return (
    <Notification
      {...props}
      notification={notification}
      title={translations?.companyTitle || ""}
      icon={<StatusIcon Icon={JobApplicationIcon} />}
      body={
        <>
          <Link to={RoutesBuilder.company.applicantDetail(applicant.uuid)}>
            {`${applicant.user.name} ${applicant.user.surname}`}
          </Link>
          <div className={styles.separator}>-</div>
          <Link className={styles.offer} to={RoutesBuilder.company.offer(offer.uuid)}>
            {offer.title}
          </Link>
        </>
      }
    />
  );
};

interface IContainerProps {
  notification: IJobApplicationNotification;
  className?: string;
}

interface ITranslations {
  companyTitle: string;
}
