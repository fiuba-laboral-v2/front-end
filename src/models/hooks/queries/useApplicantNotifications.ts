import { GET_APPLICANT_NOTIFICATIONS } from "$queries";
import { usePaginatedQuery } from "$hooks";
import { TApplicantNotificationAttributes } from "$interfaces/ApplicantNotification";
import {
  PENDING_JOB_APPLICATION_APPLICANT_NOTIFICATION,
  APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION,
  REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION
} from "$typenames";
import { JobApplication } from "$models/JobApplication";

export const useApplicantNotifications = () => {
  const result = usePaginatedQuery<{}, TApplicantNotificationAttributes>({
    documentNode: GET_APPLICANT_NOTIFICATIONS,
    queryName: "getApplicantNotifications",
    variables: {},
    timestampKey: "createdAt"
  });

  return {
    ...result,
    data: result.data && {
      getApplicantNotifications: {
        results: result.data?.getApplicantNotifications.results.map(attributes => {
          if (attributes.__typename === PENDING_JOB_APPLICATION_APPLICANT_NOTIFICATION) {
            return { ...attributes, jobApplication: JobApplication(attributes.jobApplication) };
          }
          if (attributes.__typename === APPROVED_JOB_APPLICATION_APPLICANT_NOTIFICATION) {
            return { ...attributes, jobApplication: JobApplication(attributes.jobApplication) };
          }
          if (attributes.__typename === REJECTED_JOB_APPLICATION_APPLICANT_NOTIFICATION) {
            return { ...attributes, jobApplication: JobApplication(attributes.jobApplication) };
          }
          return attributes;
        }),
        shouldFetchMore: result.data?.getApplicantNotifications.shouldFetchMore
      }
    }
  };
};
