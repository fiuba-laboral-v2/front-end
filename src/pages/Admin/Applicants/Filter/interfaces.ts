import { ApplicantsFilter } from "$models/ApplicantsFilter";
import { ApplicantType } from "$interfaces/Applicant";
import { ICareer } from "$interfaces/Career";

export interface IContainerProps {
  filter: ApplicantsFilter;
}

export interface IFormValues {
  name: string;
  careers: ICareer[];
  applicantType: ApplicantType;
  _form: string;
}
