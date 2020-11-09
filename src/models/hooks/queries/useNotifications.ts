import { GET_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { IJobApplication } from "$interfaces/JobApplication";

export const useNotifications = () =>
  usePaginatedQuery<{}, Notification>({
    documentNode: GET_NOTIFICATIONS,
    queryName: "getNotifications",
    variables: {},
    timestampKey: "createdAt"
  });

export type Notification = IJobApplicationNotification;

interface IJobApplicationNotification {
  __typename: "JobApplicationNotification";
  uuid: string;
  message: string;
  createdAt: string;
  adminEmail: string;
  jobApplication: IJobApplication;
}
