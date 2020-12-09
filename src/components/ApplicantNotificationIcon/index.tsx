import React, { FunctionComponent } from "react";
import { useHasUnreadApplicantNotifications } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";

export const ApplicantNotificationIcon: FunctionComponent = () => {
  return <NotificationsIcon useHasUnreadNotifications={useHasUnreadApplicantNotifications} />;
};
