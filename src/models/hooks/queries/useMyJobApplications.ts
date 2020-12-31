import { GET_MY_JOB_APPLICATIONS } from "$queries";
import { IJobApplicationAttributes } from "$interfaces/JobApplication";
import { usePaginatedQuery } from "$hooks";
import { JobApplication } from "../../JobApplication";

export const useMyJobApplications = () => {
  const result = usePaginatedQuery<{}, IJobApplicationAttributes>({
    documentNode: GET_MY_JOB_APPLICATIONS,
    queryName: "getMyLatestJobApplications",
    variables: {},
    timestampKey: "updatedAt"
  });

  return {
    ...result,
    data: result.data && {
      getMyLatestJobApplications: {
        results: result.data?.getMyLatestJobApplications.results.map(attributes =>
          JobApplication(attributes)
        ),
        shouldFetchMore: result.data?.getMyLatestJobApplications.shouldFetchMore
      }
    }
  };
};
