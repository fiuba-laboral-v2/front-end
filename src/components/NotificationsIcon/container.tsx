import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useInfoSnackbar } from "$hooks";
import { NotificationsIcon } from "./component";

export const NotificationIconContainer: FunctionComponent<IContainerProps> = ({
  actionRoute,
  useHasUnreadNotifications
}) => {
  const [lastUnreadValue, setLastUnreadValue] = useState(false);
  const history = useHistory();
  const hasUnreadNotifications = useHasUnreadNotifications();
  const infoSnackbar = useInfoSnackbar();
  useEffect(() => {
    infoSnackbar({
      action: () => history.push(actionRoute),
      message: "Tenés notificaciones",
      actionMessage: "Ver",
      skip: !hasUnreadNotifications || lastUnreadValue
    });
    setLastUnreadValue(!!hasUnreadNotifications);
  }, [lastUnreadValue, hasUnreadNotifications, infoSnackbar, history, actionRoute]);
  return <NotificationsIcon unread={hasUnreadNotifications} />;
};

export interface IContainerProps {
  useHasUnreadNotifications: () => boolean | undefined;
  actionRoute: string;
}
