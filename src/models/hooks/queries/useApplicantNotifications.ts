import { GET_APPLICANT_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TCompanyNotification } from "$interfaces/CompanyNotification";

export const useApplicantNotifications = () =>
  usePaginatedQuery<{}, TCompanyNotification>({
    documentNode: GET_APPLICANT_NOTIFICATIONS,
    queryName: "getApplicantNotifications",
    variables: {},
    timestampKey: "createdAt"
  });
