import { GET_ADMIN_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TAdminNotification } from "$interfaces/AdminNotification";

export const useAdminNotifications = () =>
  usePaginatedQuery<{}, TAdminNotification>({
    documentNode: GET_ADMIN_NOTIFICATIONS,
    queryName: "getAdminNotifications",
    variables: {},
    timestampKey: "createdAt"
  });
