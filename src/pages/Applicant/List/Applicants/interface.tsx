import { IApplicant } from "$interfaces/Applicant";

export interface IApplicantsProps {
  applicants: IApplicant[];
  loading: boolean;
}
