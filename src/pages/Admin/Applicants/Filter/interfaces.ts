import { IUseApplicantsFilter } from "$hooks";
import { ApplicantsFilter } from "$models/SearchFilters/ApplicantsFilter";
import { ApplicantType } from "$interfaces/Applicant";
import { ICareer } from "$interfaces/Career";

export interface IContainerProps {
  showFilter: boolean;
  filter: ApplicantsFilter;
  refetchApplicants?: (filter: IUseApplicantsFilter) => void;
}

export interface IFormValues {
  name: string;
  careers: ICareer[];
  applicantType: ApplicantType | "";
  _form: string;
}
