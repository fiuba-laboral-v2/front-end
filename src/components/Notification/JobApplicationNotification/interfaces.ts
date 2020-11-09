import React from "react";
import { IJobApplicationNotification } from "$interfaces/Notification";

export interface IContainerProps {
  notification: IJobApplicationNotification;
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  hideApprovalStatus?: boolean;
  title: string;
  firstLink: React.ReactElement;
}
