import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Notifications } from "$components/Notifications";
import { CompanyNotification } from "$components/CompanyNotification";
import { EmptyList } from "$components/EmptyList";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useCompanyNotifications, useTranslations } from "$hooks";

export const NotificationsContainer: FunctionComponent = () => {
  const response = useCompanyNotifications();
  const translations = useTranslations<{ title: string }>("notifications");
  const history = useHistory();

  return (
    <Notifications
      Notification={CompanyNotification}
      shouldFetchMore={response.data?.getCompanyNotifications.shouldFetchMore}
      fetchMore={response.fetchMore}
      loading={response.loading}
      title={translations?.title || ""}
      notifications={response.data?.getCompanyNotifications.results || []}
      emptyListComponent={
        <EmptyList
          emptyTranslationSource="companyEmptyNotificationList"
          buttonKind="primary"
          onClick={() => history.push(RoutesBuilder.company.jobApplications())}
        />
      }
    />
  );
};
