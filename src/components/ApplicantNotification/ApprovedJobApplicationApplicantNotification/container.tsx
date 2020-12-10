import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";
import { JobApplicationNotificationBody } from "$components/Notification/JobApplicationNotificationBody";

import { IApprovedJobApplicationApplicantNotification } from "$interfaces/ApplicantNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ApprovedJobApplicationApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>(
    "approvedJobApplicationApplicantNotification"
  );

  const {
    jobApplication: { applicant, offer }
  } = notification;

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={JobApplicationIcon} approvalStatus={ApprovalStatus.approved} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <JobApplicationNotificationBody
        applicant={applicant}
        offer={offer}
        applicantLink={RoutesBuilder.applicant.myProfile()}
        offerLink={RoutesBuilder.applicant.offerDetail}
      />
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IApprovedJobApplicationApplicantNotification;
}
