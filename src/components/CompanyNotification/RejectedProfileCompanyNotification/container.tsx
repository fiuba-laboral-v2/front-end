import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { RejectionReason } from "$components/Notification/RejectionReason";
import { CompanyIcon } from "$components/Icons/CompanyIcon";

import { IRejectedProfileCompanyNotification } from "$interfaces/CompanyNotification";

export const RejectedProfileCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("rejectedProfileCompanyNotification");
  const { adminEmail, moderatorMessage } = notification;

  return (
    <Notification className={className} notification={notification} icon={<CompanyIcon />}>
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <NotificationBody>
        <RejectionReason message={moderatorMessage} moderatorEmail={adminEmail} />
      </NotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IRejectedProfileCompanyNotification;
}
