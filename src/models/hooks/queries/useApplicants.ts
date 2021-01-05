import { usePaginatedQuery } from "$hooks";
import { GET_APPLICANTS } from "$queries";
import { ApplicantType, IApplicant } from "$interfaces/Applicant";

export const useApplicants = (filter: IUseApplicantsFilter = {}) =>
  usePaginatedQuery<{}, IApplicant>({
    documentNode: GET_APPLICANTS,
    queryName: "getApplicants",
    variables: filter,
    timestampKey: "updatedAt"
  });

export interface IUseApplicantsFilter {
  name?: string;
  careerCodes?: string[];
  applicantType?: ApplicantType;
}
