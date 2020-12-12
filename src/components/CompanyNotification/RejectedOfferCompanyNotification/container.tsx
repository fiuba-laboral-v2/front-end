import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";

import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { Link } from "$components/Link";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { StatusIcon } from "$components/StatusIcon";

import { IRejectedOfferCompanyNotification } from "$interfaces/CompanyNotification";
import { RejectionReason } from "../../Notification/RejectionReason";

export const RejectedOfferCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<{ title: string }>("rejectedOfferCompanyNotification");

  const { moderatorMessage, adminEmail } = notification;

  return (
    <Notification
      className={className}
      notification={notification}
      icon={<StatusIcon Icon={OfferIcon} />}
    >
      <NotificationTitle>{translations?.title || ""}</NotificationTitle>
      <NotificationBody>
        <Link to={RoutesBuilder.company.offer(notification.offer.uuid)}>
          {notification.offer.title}
        </Link>
      </NotificationBody>
      <RejectionReason message={moderatorMessage} moderatorEmail={adminEmail} />
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IRejectedOfferCompanyNotification;
}
