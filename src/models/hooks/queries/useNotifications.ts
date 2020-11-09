import { GET_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { IJobApplication } from "$interfaces/JobApplication";
import { JOB_APPLICATION_NOTIFICATION_TYPE } from "$typenames";

export const useNotifications = () =>
  usePaginatedQuery<{}, TNotification>({
    documentNode: GET_NOTIFICATIONS,
    queryName: "getNotifications",
    variables: {},
    timestampKey: "createdAt"
  });

export type TNotification = IJobApplicationNotification;

export interface IJobApplicationNotification {
  __typename: JOB_APPLICATION_NOTIFICATION_TYPE;
  uuid: string;
  message: string;
  createdAt: string;
  adminEmail: string;
  jobApplication: IJobApplication;
}
