import { usePaginatedQuery } from "$hooks";
import { GET_JOB_APPLICATIONS } from "$queries";
import { IJobApplicationAttributes } from "$interfaces/JobApplication";
import { JobApplication } from "$models/JobApplication";

export const useJobApplications = () => {
  const result = usePaginatedQuery<{}, IJobApplicationAttributes>({
    documentNode: GET_JOB_APPLICATIONS,
    queryName: "getJobApplications",
    variables: {},
    timestampKey: "updatedAt"
  });

  return {
    ...result,
    data: result.data && {
      getJobApplications: {
        results: result.data?.getJobApplications.results.map(attributes =>
          JobApplication(attributes)
        ),
        shouldFetchMore: result.data?.getJobApplications.shouldFetchMore
      }
    }
  };
};
