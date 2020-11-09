import React, { FunctionComponent } from "react";
import { JobApplicationNotification } from "./component";
import { IContainerProps } from "./interfaces";

export const JobApplicationNotificationContainer: FunctionComponent<IContainerProps> = props => {
  return <JobApplicationNotification {...props} />;
};
