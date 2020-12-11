import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Notification } from "$components/Notification";
import { JobApplicationNotificationBody } from "$components/Notification/JobApplicationNotificationBody";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";

import { INewJobApplicationCompanyNotification } from "$interfaces/CompanyNotification";

export const NewJobApplicationCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  notification,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("newJobApplicationCompanyNotification");

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
      <JobApplicationNotificationBody
        applicant={applicant}
        offer={offer}
        applicantLink={RoutesBuilder.company.applicantDetail(applicant.uuid)}
        offerLink={RoutesBuilder.company.offer}
      />
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
