import { IJobApplicationNotification } from "$hooks";

export interface IContainerProps {
  notification: IJobApplicationNotification;
  className?: string;
}

export type IComponentProps = IContainerProps;
