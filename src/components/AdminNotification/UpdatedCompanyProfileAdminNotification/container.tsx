import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Notification } from "$components/Notification";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { CompanyIcon } from "$components/Icons/CompanyIcon";
import { ReloadLink } from "$components/ReloadLink";
import { IUpdatedCompanyProfileAdminNotification } from "$interfaces/AdminNotification";

export const UpdatedCompanyProfileAdminNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("updatedCompanyProfileAdminNotification");

  const company = notification.company;

  return (
    <Notification className={className} notification={notification} icon={<CompanyIcon />}>
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <NotificationBody>
        <ReloadLink to={RoutesBuilder.admin.companyDetail(company.uuid)}>
          {company.companyName}
        </ReloadLink>
      </NotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IUpdatedCompanyProfileAdminNotification;
}
