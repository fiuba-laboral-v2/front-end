import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHasUnreadCompanyNotifications, useShowInfo, useTranslations } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const CompanyNotificationsIconContainer: FunctionComponent = () => {
  const [lastUnreadValue, setLastUnreadValue] = useState(false);
  const history = useHistory();
  const translations = useTranslations<ITranslations>("notificationsNotice");
  const hasUnreadNotifications = useHasUnreadCompanyNotifications();
  const showInfo = useShowInfo();
  useEffect(() => {
    showInfo({
      action: () => history.push(RoutesBuilder.company.notifications()),
      message: translations?.message || "",
      actionMessage: translations?.actionMessage || "",
      skip: !hasUnreadNotifications || lastUnreadValue
    });
    setLastUnreadValue(!!hasUnreadNotifications);
  }, [lastUnreadValue, hasUnreadNotifications, showInfo, history, translations]);
  return <NotificationsIcon unread={hasUnreadNotifications} />;
};

interface ITranslations {
  message: string;
  actionMessage: string;
}
