import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useInfoSnackbar, useTranslations } from "$hooks";
import { NotificationsIcon } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const NotificationIconContainer: FunctionComponent<IContainerProps> = ({
  useHasUnreadNotifications
}) => {
  const [lastUnreadValue, setLastUnreadValue] = useState(false);
  const history = useHistory();
  const translations = useTranslations<ITranslations>("notificationsNotice");
  const hasUnreadNotifications = useHasUnreadNotifications();
  const infoSnackbar = useInfoSnackbar();
  useEffect(() => {
    infoSnackbar({
      action: () => history.push(RoutesBuilder.applicant.notifications()),
      message: translations?.message || "Tenés notificaciones",
      actionMessage: translations?.actionMessage || "Ver",
      skip: !hasUnreadNotifications || lastUnreadValue
    });
    setLastUnreadValue(!!hasUnreadNotifications);
  }, [lastUnreadValue, hasUnreadNotifications, infoSnackbar, history, translations]);
  return <NotificationsIcon unread={hasUnreadNotifications} />;
};

export interface IContainerProps {
  useHasUnreadNotifications: () => boolean | undefined;
}

interface ITranslations {
  message: string;
  actionMessage: string;
}
