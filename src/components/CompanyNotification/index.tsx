import React, { FunctionComponent } from "react";
import { TNotification } from "$interfaces/Notification";
import { COMPANY_NEW_JOB_APPLICATION_NOTIFICATION } from "$typenames";
import { CompanyNewJobApplicationNotification } from "./CompanyNewJobApplicationNotification";

export const CompanyNotification: FunctionComponent<IComponentProps> = ({
  className,
  notification
}) => {
  if (notification.__typename === COMPANY_NEW_JOB_APPLICATION_NOTIFICATION) {
    return (
      <CompanyNewJobApplicationNotification className={className} notification={notification} />
    );
  }
  throw new Error("The current user cannot see a JobApplicationNotification");
};

interface IComponentProps {
  className?: string;
  notification: TNotification;
}
