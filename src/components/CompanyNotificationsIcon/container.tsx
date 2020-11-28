import React, { FunctionComponent } from "react";
import { useUnreadCompanyNotifications } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";

export const CompanyNotificationsIconContainer: FunctionComponent = () => {
  const unread = useUnreadCompanyNotifications();
  return <NotificationsIcon unread={unread} />;
};
