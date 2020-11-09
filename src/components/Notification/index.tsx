import React, { FunctionComponent } from "react";
import { TNotification } from "$hooks";

export const Notification: FunctionComponent<IContainerProps> = () => {
  return <div />;
};

interface IContainerProps {
  notification: TNotification;
}
