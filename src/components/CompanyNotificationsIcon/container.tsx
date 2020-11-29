import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUnreadCompanyNotifications, useShowInfo, useTranslations } from "$hooks";
import { NotificationsIcon } from "$components/NotificationsIcon";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const CompanyNotificationsIconContainer: FunctionComponent = () => {
  const [lastUnreadValue, setLastUnreadValue] = useState(false);
  const history = useHistory();
  const translations = useTranslations<ITranslations>("notificationsNotice");
  const unread = useUnreadCompanyNotifications();
  const showInfo = useShowInfo();
  useEffect(() => {
    showInfo({
      action: () => history.push(RoutesBuilder.company.notifications()),
      message: translations?.message || "",
      actionMessage: translations?.actionMessage || "",
      skip: !unread || lastUnreadValue
    });
    setLastUnreadValue(!!unread);
  }, [lastUnreadValue, unread, showInfo, history, translations]);
  return <NotificationsIcon unread={unread} />;
};

interface ITranslations {
  message: string;
  actionMessage: string;
}
