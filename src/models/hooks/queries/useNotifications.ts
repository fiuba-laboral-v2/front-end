import { GET_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { IJobApplication } from "$interfaces/JobApplication";

export const useNotifications = () =>
  usePaginatedQuery<{}, TNotification>({
    documentNode: GET_NOTIFICATIONS,
    queryName: "getNotifications",
    variables: {},
    timestampKey: "createdAt"
  });

export type TNotification = IJobApplicationNotification;

export interface IJobApplicationNotification {
  __typename: "JobApplicationNotification";
  uuid: string;
  message: string;
  createdAt: string;
  adminEmail: string;
  jobApplication: IJobApplication;
}
