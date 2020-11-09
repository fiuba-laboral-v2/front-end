import React, { FunctionComponent } from "react";
import { TNotification } from "$interfaces/Notification";
import { JOB_APPLICATION_NOTIFICATION } from "$typenames";
import { JobApplicationNotification } from "./JobApplicationNotification";

export const Notification: FunctionComponent<IComponentProps> = ({ className, notification }) => {
  if (notification.__typename === JOB_APPLICATION_NOTIFICATION) {
    return <JobApplicationNotification className={className} notification={notification} />;
  }
  throw new Error("The current user cannot see a JobApplicationNotification");
};

interface IComponentProps {
  className?: string;
  notification: TNotification;
}
