import { JOB_APPLICATION_NOTIFICATION_TYPE } from "$typenames";
import { IJobApplication } from "$interfaces/JobApplication";

export type TNotification = IJobApplicationNotification;

export interface IJobApplicationNotification {
  __typename: JOB_APPLICATION_NOTIFICATION_TYPE;
  uuid: string;
  message: string;
  isNew: boolean;
  createdAt: string;
  adminEmail: string;
  jobApplication: IJobApplication;
}
