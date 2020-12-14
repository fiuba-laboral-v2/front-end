import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { RejectionReason } from "$components/Notification/RejectionReason";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { ApplicantIcon } from "$components/Icons/ApplicantIcon";
import { StatusIcon } from "$components/StatusIcon";

import { IRejectedProfileApplicantNotification } from "$interfaces/ApplicantNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const RejectedProfileApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("rejectedProfileApplicantNotification");

  const { adminEmail, moderatorMessage } = notification;

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={ApplicantIcon} approvalStatus={ApprovalStatus.rejected} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <NotificationBody>
        <RejectionReason moderatorEmail={adminEmail} message={moderatorMessage} />
      </NotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IRejectedProfileApplicantNotification;
}
