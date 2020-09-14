import { GET_MY_JOB_APPLICATIONS } from "$queries";
import { IJobApplication } from "$interfaces/JobApplication";
import { usePaginatedQuery } from "$hooks";

export const useMyJobApplications = () =>
  usePaginatedQuery<IJobApplication>({
    documentNode: GET_MY_JOB_APPLICATIONS,
    queryName: "getMyLatestJobApplications"
  });
