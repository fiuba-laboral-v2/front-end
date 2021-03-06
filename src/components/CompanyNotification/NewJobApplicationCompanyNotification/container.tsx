import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Notification } from "$components/Notification";
import { JobApplicationNotificationBody } from "$components/Notification/JobApplicationNotificationBody";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";

import { INewJobApplicationCompanyNotification } from "$interfaces/CompanyNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const NewJobApplicationCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  notification,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("newJobApplicationCompanyNotification");
  const applicant = notification.jobApplication.applicant;
  const offer = notification.jobApplication.offer();
  const company = notification.jobApplication.offer().company;
  const isApproved = company.approvalStatus === ApprovalStatus.approved;

  return (
    <Notification {...props} notification={notification} icon={<JobApplicationIcon />}>
      <NotificationTitle>{translations?.title || " "}</NotificationTitle>
      <JobApplicationNotificationBody
        applicant={applicant}
        offer={offer}
        applicantLink={RoutesBuilder.company.applicantDetail(applicant.uuid)}
        {...(isApproved && { offerLink: RoutesBuilder.company.offer })}
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
