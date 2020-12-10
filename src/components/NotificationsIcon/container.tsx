import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useInfoSnackbar, useTranslations } from "$hooks";
import { NotificationsIcon } from "./component";

export const NotificationIconContainer: FunctionComponent<IContainerProps> = ({
  actionRoute,
  useHasUnreadNotifications
}) => {
  const [lastUnreadValue, setLastUnreadValue] = useState(false);
  const history = useHistory();
  const translations = useTranslations<ITranslations>("notificationsNotice");
  const hasUnreadNotifications = useHasUnreadNotifications();
  const infoSnackbar = useInfoSnackbar();
  useEffect(() => {
    infoSnackbar({
      action: () => history.push(actionRoute),
      message: translations?.message || "Tenés notificaciones",
      actionMessage: translations?.actionMessage || "Ver",
      skip: !hasUnreadNotifications || lastUnreadValue
    });
    setLastUnreadValue(!!hasUnreadNotifications);
  }, [lastUnreadValue, hasUnreadNotifications, infoSnackbar, history, translations, actionRoute]);
  return <NotificationsIcon unread={hasUnreadNotifications} />;
};

export interface IContainerProps {
  useHasUnreadNotifications: () => boolean | undefined;
  actionRoute: string;
}

interface ITranslations {
  message: string;
  actionMessage: string;
}
