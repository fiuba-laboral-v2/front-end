import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { RejectionReason } from "$components/Notification/RejectionReason";
import { JobApplicationNotificationBody } from "$components/Notification/JobApplicationNotificationBody";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";

import { IRejectedJobApplicationApplicantNotification } from "$interfaces/ApplicantNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const RejectedJobApplicationApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>(
    "rejectedJobApplicationApplicantNotification"
  );

  const { moderatorMessage, adminEmail } = notification;

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={JobApplicationIcon} approvalStatus={ApprovalStatus.rejected} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <JobApplicationNotificationBody
        applicant={notification.jobApplication.applicant}
        offer={notification.jobApplication.offer()}
        applicantLink={RoutesBuilder.applicant.myProfile()}
      >
        <RejectionReason message={moderatorMessage} moderatorEmail={adminEmail} />
      </JobApplicationNotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IRejectedJobApplicationApplicantNotification;
}
