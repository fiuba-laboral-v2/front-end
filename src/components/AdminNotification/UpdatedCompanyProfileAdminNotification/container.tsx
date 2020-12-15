import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Notification } from "$components/Notification";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { CompanyIcon } from "$components/Icons/CompanyIcon";
import { Link } from "$components/Link";

import { IUpdatedCompanyProfileAdminNotification } from "$interfaces/AdminNotification";

export const UpdatedCompanyProfileAdminNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("updatedCompanyProfileAdminNotification");

  return (
    <Notification className={className} notification={notification} icon={<CompanyIcon />}>
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <NotificationBody>
        <Link to={RoutesBuilder.admin.companies()}>{notification.company.companyName}</Link>
      </NotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IUpdatedCompanyProfileAdminNotification;
}
