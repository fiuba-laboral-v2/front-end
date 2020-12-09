import { GET_APPLICANT_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TApplicantNotification } from "$interfaces/ApplicantNotification";

export const useApplicantNotifications = () =>
  usePaginatedQuery<{}, TApplicantNotification>({
    documentNode: GET_APPLICANT_NOTIFICATIONS,
    queryName: "getApplicantNotifications",
    variables: {},
    timestampKey: "createdAt"
  });
