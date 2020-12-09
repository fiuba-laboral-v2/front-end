import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHasUnreadApplicantNotifications, useInfoSnackbar, useTranslations } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const ApplicantNotificationIconContainer: FunctionComponent = () => {
  const [lastUnreadValue, setLastUnreadValue] = useState(false);
  const history = useHistory();
  const translations = useTranslations<ITranslations>("notificationsNotice");
  const hasUnreadNotifications = useHasUnreadApplicantNotifications();
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

interface ITranslations {
  message: string;
  actionMessage: string;
}
