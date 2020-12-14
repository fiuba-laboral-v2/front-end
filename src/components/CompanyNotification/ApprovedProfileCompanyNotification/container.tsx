import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { StatusIcon } from "$components/StatusIcon";

import { IApprovedProfileCompanyNotification } from "$interfaces/CompanyNotification";

export const ApprovedProfileCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("approvedProfileCompanyNotification");

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={OfferIcon} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IApprovedProfileCompanyNotification;
}
