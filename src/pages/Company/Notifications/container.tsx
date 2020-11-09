import React, { FunctionComponent } from "react";
import { useNotifications } from "$hooks";
import { Window } from "$components/Window";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const NotificationsContainer: FunctionComponent = () => {
  const notifications = useNotifications();

  if (notifications.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  return <Window />;
};
