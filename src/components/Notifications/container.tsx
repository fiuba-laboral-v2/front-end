import React, { FunctionComponent } from "react";
import { useNotifications } from "$hooks";
import { Notifications } from "./component";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps } from "./interfaces";

export const NotificationsContainer: FunctionComponent<IContainerProps> = props => {
  const response = useNotifications();

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const result = response.data?.getNotifications;
  const notifications = result?.results;

  return (
    <Notifications
      {...props}
      notifications={notifications}
      loading={response.loading}
      fetchMore={response.fetchMore}
      shouldFetchMore={result?.shouldFetchMore}
    />
  );
};
