import React, { FunctionComponent } from "react";

import { useApplicantNotifications, useTranslations } from "$hooks";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Notifications } from "$components/Notifications";
import { ApplicantNotification } from "$components/ApplicantNotification";
import { EmptyList } from "$components/EmptyList";

export const NotificationsContainer: FunctionComponent = () => {
  const response = useApplicantNotifications();
  const translations = useTranslations<{ title: string }>("notifications");
  const history = useHistory();

  return (
    <Notifications
      Notification={ApplicantNotification}
      shouldFetchMore={response.data?.getApplicantNotifications.shouldFetchMore}
      fetchMore={response.fetchMore}
      loading={response.loading}
      title={translations?.title || ""}
      notifications={response.data?.getApplicantNotifications.results || []}
      emptyListComponent={
        <EmptyList
          emptyTranslationSource="applicantEmptyNotificationList"
          buttonKind="primary"
          onClick={() => history.push(RoutesBuilder.applicant.offerList())}
        />
      }
    />
  );
};
