import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationExplanation } from "$components/Notification/NotificationExplanation";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";
import { JobApplicationNotificationBody } from "$components/Notification/JobApplicationNotificationBody";

import { IApprovedJobApplicationApplicantNotification } from "$interfaces/ApplicantNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ApprovedJobApplicationApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<ITranslations>(
    "approvedJobApplicationApplicantNotification"
  );

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={JobApplicationIcon} approvalStatus={ApprovalStatus.approved} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <JobApplicationNotificationBody
        applicant={notification.jobApplication.applicant}
        offer={notification.jobApplication.offer()}
        applicantLink={RoutesBuilder.applicant.myProfile()}
        offerLink={RoutesBuilder.applicant.offerDetail}
      >
        <NotificationExplanation message={translations?.explanation} />
      </JobApplicationNotificationBody>
    </Notification>
  );
};

interface ITranslations {
  title: string;
  explanation: string;
}

interface IContainerProps {
  className?: string;
  notification: IApprovedJobApplicationApplicantNotification;
}
