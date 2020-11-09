import React, { Fragment, FunctionComponent } from "react";
import { TNotification } from "$hooks";
import { JobApplicationNotification } from "./JobApplicationNotification";

export const Notification: FunctionComponent<IContainerProps> = ({ notification }) => {
  if (notification.__typename === "JobApplicationNotification") {
    return <JobApplicationNotification notification={notification} />;
  }
  return <Fragment />;
};

interface IContainerProps {
  notification: TNotification;
}
