import React, { FunctionComponent } from "react";
import { useNotifications } from "$hooks";
import { Notifications } from "./component";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const NotificationsContainer: FunctionComponent = () => {
  const response = useNotifications();

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const result = response.data?.getNotifications;
  const notifications = result?.results;

  return (
    <Notifications
      notifications={notifications}
      loading={response.loading}
      fetchMore={response.fetchMore}
      shouldFetchMore={result?.shouldFetchMore}
    />
  );
};
