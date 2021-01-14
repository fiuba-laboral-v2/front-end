import { GET_COMPANY_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TCompanyNotificationAttributes } from "$interfaces/CompanyNotification";
import { JobApplication } from "$models/JobApplication";
import { NEW_JOB_APPLICATION_COMPANY_NOTIFICATION } from "$typenames";

export const useCompanyNotifications = () => {
  const result = usePaginatedQuery<{}, TCompanyNotificationAttributes>({
    documentNode: GET_COMPANY_NOTIFICATIONS,
    queryName: "getCompanyNotifications",
    variables: {},
    timestampKey: "createdAt",
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first"
  });

  return {
    ...result,
    data: result.data && {
      getCompanyNotifications: {
        results: result.data?.getCompanyNotifications.results.map(attributes => {
          if (attributes.__typename !== NEW_JOB_APPLICATION_COMPANY_NOTIFICATION) return attributes;
          return { ...attributes, jobApplication: JobApplication(attributes.jobApplication) };
        }),
        shouldFetchMore: result.data?.getCompanyNotifications.shouldFetchMore
      }
    }
  };
};
