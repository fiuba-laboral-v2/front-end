import React, { FunctionComponent } from "react";
import { useCompanyNotificationUnreadCount } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";

export const CompanyNotificationsIconContainer: FunctionComponent = () => {
  const count = useCompanyNotificationUnreadCount();
  return <NotificationsIcon unread={!!count && count !== 0} />;
};
