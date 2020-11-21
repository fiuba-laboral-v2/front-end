import { GET_COMPANY_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TCompanyNotification } from "$interfaces/CompanyNotification";

export const useCompanyNotifications = () =>
  usePaginatedQuery<{}, TCompanyNotification>({
    documentNode: GET_COMPANY_NOTIFICATIONS,
    queryName: "getCompanyNotifications",
    variables: {},
    timestampKey: "createdAt"
  });
