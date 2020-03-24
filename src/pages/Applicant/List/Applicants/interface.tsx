import { IApplicant } from "$interfaces/Applicant";

export interface IApplicantsProps {
  applicants: IApplicant[];
  onClickEdit: (padron: number) => void;
  onClickView: (padron: number) => void;
  editButtonText: string;
  viewButtonText: string;
}
