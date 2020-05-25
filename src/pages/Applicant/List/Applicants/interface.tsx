import { IApplicant } from "$interfaces/Applicant";

export interface IApplicantsProps {
  applicants: IApplicant[];
  onClickView: () => void;
  loading: boolean;
}
