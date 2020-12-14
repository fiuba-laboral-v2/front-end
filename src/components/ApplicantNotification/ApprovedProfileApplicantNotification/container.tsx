import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { ApplicantIcon } from "$components/Icons/ApplicantIcon";
import { StatusIcon } from "$components/StatusIcon";

import { IApprovedProfileApplicantNotification } from "$interfaces/ApplicantNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ApprovedProfileApplicantNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("approvedProfileApplicantNotification");

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={ApplicantIcon} approvalStatus={ApprovalStatus.approved} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IApprovedProfileApplicantNotification;
}
