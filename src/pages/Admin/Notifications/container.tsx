import React, { FunctionComponent } from "react";
import { useAdminNotifications, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Notifications } from "$components/Notifications";
import { AdminNotification } from "$components/AdminNotification";
import { EmptyList } from "$components/EmptyList";

export const NotificationsContainer: FunctionComponent = () => {
  const response = useAdminNotifications();
  const translations = useTranslations<{ title: string }>("notifications");

  return (
    <Notifications
      desktopOnly
      Notification={AdminNotification}
      shouldFetchMore={response.data?.getAdminNotifications.shouldFetchMore}
      fetchMore={response.fetchMore}
      loading={response.loading}
      title={translations?.title || ""}
      notifications={response.data?.getAdminNotifications.results || []}
      emptyListComponent={
        <EmptyList
          emptyTranslationSource="adminEmptyNotificationList"
          buttonKind="primary"
          link={RoutesBuilder.admin.home()}
        />
      }
    />
  );
};
