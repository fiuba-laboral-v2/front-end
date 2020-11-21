import { GET_COMPANY_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TNotification } from "$interfaces/Notification";

export const useCompanyNotifications = () =>
  usePaginatedQuery<{}, TNotification>({
    documentNode: GET_COMPANY_NOTIFICATIONS,
    queryName: "getCompanyNotifications",
    variables: {},
    timestampKey: "createdAt"
  });
