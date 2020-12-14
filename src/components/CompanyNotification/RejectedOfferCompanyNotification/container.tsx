import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationItem } from "$components/Notification/NotificationItem";
import { RejectionReason } from "$components/Notification/RejectionReason";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { Link } from "$components/Link";
import { OfferIcon } from "$components/Icons/OfferIcon";

import { IRejectedOfferCompanyNotification } from "$interfaces/CompanyNotification";

export const RejectedOfferCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("rejectedOfferCompanyNotification");

  const { moderatorMessage, adminEmail } = notification;

  return (
    <Notification className={className} notification={notification} icon={<OfferIcon />}>
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <NotificationBody>
        <Link to={RoutesBuilder.company.offer(notification.offer.uuid)}>
          {notification.offer.title}
        </Link>
      </NotificationBody>
      <NotificationItem>
        <RejectionReason message={moderatorMessage} moderatorEmail={adminEmail} />
      </NotificationItem>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IRejectedOfferCompanyNotification;
}
