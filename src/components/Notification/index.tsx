import React, { Fragment, FunctionComponent } from "react";
import { TNotification } from "$interfaces/Notification";
import { JOB_APPLICATION_NOTIFICATION } from "$typenames";
import { JobApplicationNotification } from "./JobApplicationNotification";

export const Notification: FunctionComponent<IContainerProps> = ({ className, notification }) => {
  if (notification.__typename === JOB_APPLICATION_NOTIFICATION) {
    return <JobApplicationNotification className={className} notification={notification} />;
  }
  return <Fragment />;
};

interface IContainerProps {
  className?: string;
  notification: TNotification;
}
