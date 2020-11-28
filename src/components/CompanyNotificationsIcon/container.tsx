import React, { FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUnreadCompanyNotifications, useShowInfo } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const CompanyNotificationsIconContainer: FunctionComponent = () => {
  const history = useHistory();
  const unread = useUnreadCompanyNotifications();
  const showInfo = useShowInfo();
  useEffect(() => {
    showInfo({
      action: () => history.push(RoutesBuilder.company.notifications()),
      message: "Tenés notificaciones",
      actionMessage: "Ver",
      skip: !unread
    });
  }, [unread]);
  return <NotificationsIcon unread={unread} />;
};
