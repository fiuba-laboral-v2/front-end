import React, { FunctionComponent } from "react";
import { useHasUnreadApplicantNotifications } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NotificationsIcon } from "$components/NotificationsIcon";

export const ApplicantNotificationIcon: FunctionComponent = () => (
  <NotificationsIcon
    actionRoute={RoutesBuilder.applicant.notifications()}
    useHasUnreadNotifications={useHasUnreadApplicantNotifications}
  />
);
