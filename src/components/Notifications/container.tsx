import React, { FunctionComponent } from "react";
import { useNotifications, useTranslations } from "$hooks";
import { Notifications } from "./component";
import { Redirect } from "$components/Redirect";
import { LoadingWindow } from "$components/LoadingWindow";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";

export const NotificationsContainer: FunctionComponent<IContainerProps> = props => {
  const response = useNotifications();
  const translations = useTranslations<ITranslations>("notifications");

  if (!translations) return <LoadingWindow />;
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const result = response.data?.getNotifications;
  const notifications = result?.results;

  return (
    <Notifications
      {...props}
      translations={translations}
      notifications={notifications}
      loading={response.loading}
      fetchMore={response.fetchMore}
      shouldFetchMore={result?.shouldFetchMore}
    />
  );
};
