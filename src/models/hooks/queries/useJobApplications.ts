import { usePaginatedQuery, IVariables } from "$hooks";
import { GET_JOB_APPLICATIONS } from "$queries";
import { IJobApplicationAttributes } from "$interfaces/JobApplication";
import { JobApplication } from "$models/JobApplication";

export const useJobApplications = (filter: IUseJobApplicationsFilter = {}) => {
  const result = usePaginatedQuery<Variables, IJobApplicationAttributes>({
    documentNode: GET_JOB_APPLICATIONS,
    queryName: "getJobApplications",
    variables: filter,
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

type Variables = IUseJobApplicationsFilter & IVariables;

export interface IUseJobApplicationsFilter {
  companyName?: string;
  applicantName?: string;
  offerTitle?: string;
}
