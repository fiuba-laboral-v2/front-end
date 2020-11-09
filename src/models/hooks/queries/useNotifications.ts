import { GET_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TNotification } from "$interfaces/Notification";

export const useNotifications = () =>
  usePaginatedQuery<{}, TNotification>({
    documentNode: GET_NOTIFICATIONS,
    queryName: "getNotifications",
    variables: {},
    timestampKey: "createdAt"
  });
