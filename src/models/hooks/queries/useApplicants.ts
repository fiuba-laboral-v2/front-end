import { usePaginatedQuery } from "$hooks";
import { GET_APPLICANTS } from "$queries";
import { IApplicant } from "$interfaces/Applicant";

export const useApplicants = () =>
  usePaginatedQuery<{}, IApplicant>({
    documentNode: GET_APPLICANTS,
    queryName: "getApplicants",
    variables: {}
  });
