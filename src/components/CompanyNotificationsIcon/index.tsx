import React, { FunctionComponent } from "react";
import { useHasUnreadCompanyNotifications } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NotificationsIcon } from "$components/NotificationsIcon";

export const CompanyNotificationsIcon: FunctionComponent = () => (
  <NotificationsIcon
    actionRoute={RoutesBuilder.company.notifications()}
    useHasUnreadNotifications={useHasUnreadCompanyNotifications}
  />
);
