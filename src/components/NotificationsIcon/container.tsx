import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useInfoSnackbar } from "$hooks";
import { Window } from "$models/Window";
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
      action: () => {
        document.getElementById("root")!.style.display = "none";
        history.push(actionRoute);
        Window.reload();
      },
      message: "Tenés notificaciones",
      actionMessage: "Ver",
      skip: !hasUnreadNotifications || lastUnreadValue,
      preventDuplicate: true
    });
    setLastUnreadValue(!!hasUnreadNotifications);
  }, [lastUnreadValue, hasUnreadNotifications, infoSnackbar, history, actionRoute]);
  return <NotificationsIcon unread={hasUnreadNotifications} />;
};

export interface IContainerProps {
  useHasUnreadNotifications: () => boolean | undefined;
  actionRoute: string;
}
