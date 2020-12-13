import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";
import { StatusIcon } from "$components/StatusIcon";

import { IRejectedProfileApplicantNotification } from "$interfaces/ApplicantNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const RejectedProfileApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("rejectedProfileApplicantNotification");

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={JobApplicationIcon} approvalStatus={ApprovalStatus.approved} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IRejectedProfileApplicantNotification;
}
