import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import {
  OfferNotificationTitleBuilder,
  ITitleTranslations
} from "$models/OfferNotificationTitleBuilder";
import { useTranslations } from "$hooks";
import { Notification } from "$components/Notification";
import { NotificationItem } from "$components/Notification/NotificationItem";
import { RejectionReason } from "$components/Notification/RejectionReason";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { ReloadLink } from "$components/ReloadLink";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { IRejectedOfferCompanyNotification } from "$interfaces/CompanyNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const RejectedOfferCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<ITitleTranslations>("rejectedOfferCompanyNotification");

  const { moderatorMessage, adminEmail } = notification;
  const title = OfferNotificationTitleBuilder.build(notification.secretary, translations);
  const company = notification.offer.company;
  const isApproved = company.approvalStatus === ApprovalStatus.approved;

  return (
    <Notification className={className} notification={notification} icon={<OfferIcon />}>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationBody>
        {isApproved && (
          <ReloadLink to={RoutesBuilder.company.offer(notification.offer.uuid)}>
            {notification.offer.title}
          </ReloadLink>
        )}
        {!isApproved && <div>{notification.offer.title}</div>}
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
