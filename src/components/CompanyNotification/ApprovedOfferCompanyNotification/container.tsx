import React, { FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import {
  OfferNotificationTitleBuilder,
  ITitleTranslations
} from "$models/OfferNotificationTitleBuilder";
import { useTranslations } from "$hooks";
import { Notification } from "$components/Notification";
import { NotificationTitle } from "$components/Notification/NotificationTitle";
import { NotificationBody } from "$components/Notification/NotificationBody";
import { ReloadLink } from "$components/ReloadLink";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { IApprovedOfferCompanyNotification } from "$interfaces/CompanyNotification";

export const ApprovedOfferCompanyNotificationContainer: FunctionComponent<IContainerProps> = ({
  className,
  notification
}) => {
  const translations = useTranslations<ITitleTranslations>("approvedOfferCompanyNotification");
  const title = OfferNotificationTitleBuilder.build(notification.secretary, translations);

  return (
    <Notification className={className} notification={notification} icon={<OfferIcon />}>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationBody>
        <ReloadLink to={RoutesBuilder.company.offer(notification.offer.uuid)}>
          {notification.offer.title}
        </ReloadLink>
      </NotificationBody>
    </Notification>
  );
};

interface IContainerProps {
  className?: string;
  notification: IApprovedOfferCompanyNotification;
}
