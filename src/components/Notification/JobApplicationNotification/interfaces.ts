import React from "react";
import { IJobApplicationNotification } from "$interfaces/Notification";

export interface IContainerProps {
  notification: IJobApplicationNotification;
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  title: string;
  firstLink: React.ReactElement;
}
