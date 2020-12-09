import React, { FunctionComponent } from "react";
import { useHasUnreadCompanyNotifications } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";

export const CompanyNotificationsIcon: FunctionComponent = () => {
  return <NotificationsIcon useHasUnreadNotifications={useHasUnreadCompanyNotifications} />;
};
