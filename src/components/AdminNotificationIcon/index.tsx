import React, { FunctionComponent } from "react";
import { useHasUnreadAdminNotifications } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NotificationsIcon } from "$components/NotificationsIcon";

export const AdminNotificationIcon: FunctionComponent = () => (
  <NotificationsIcon
    actionRoute={RoutesBuilder.admin.notifications()}
    useHasUnreadNotifications={useHasUnreadAdminNotifications}
  />
);
