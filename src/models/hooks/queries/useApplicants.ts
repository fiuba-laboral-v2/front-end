import { IVariables, usePaginatedQuery } from "$hooks";
import { ApplicantsFilter } from "$models/SearchFilters/ApplicantsFilter";
import { GET_APPLICANTS } from "$queries";
import { ApplicantType, IApplicant } from "$interfaces/Applicant";

export const useApplicants = (filter: ApplicantsFilter) =>
  usePaginatedQuery<IApplicantsVariables, IApplicant>({
    documentNode: GET_APPLICANTS,
    queryName: "getApplicants",
    variables: filter.getValues(),
    timestampKey: "updatedAt"
  });

type IApplicantsVariables = IVariables & IUseApplicantsFilter;

export interface IUseApplicantsFilter {
  name?: string;
  careerCodes?: string[];
  applicantType?: ApplicantType;
}
