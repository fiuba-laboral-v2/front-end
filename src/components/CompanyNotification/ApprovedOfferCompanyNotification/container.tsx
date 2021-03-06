import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import {
  ITitleTranslations,
  OfferNotificationTitleBuilder
} from "$models/OfferNotificationTitleBuilder";
import { useTranslations } from "$hooks";
import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { ReloadLink } from "$components/ReloadLink";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { IApprovedOfferCompanyNotification } from "$interfaces/CompanyNotification";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const ApprovedOfferCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<ITitleTranslations>("approvedOfferCompanyNotification");
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
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IApprovedOfferCompanyNotification;
}
