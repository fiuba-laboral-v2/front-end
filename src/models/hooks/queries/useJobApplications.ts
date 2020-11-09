import { usePaginatedQuery } from "$hooks";
import { GET_JOB_APPLICATIONS } from "$queries";
import { IJobApplication } from "$interfaces/JobApplication";

export const useJobApplications = () =>
  usePaginatedQuery<{}, IJobApplication>({
    documentNode: GET_JOB_APPLICATIONS,
    queryName: "getJobApplications",
    variables: {},
    timestampKey: "updatedAt"
  });
