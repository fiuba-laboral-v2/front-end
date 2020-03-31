import { IApplicant } from "$interfaces/Applicant";

export interface IApplicantsProps {
  applicants: IApplicant[];
  onClickEdit: (uuid: string) => void;
  onClickView: (uuid: string) => void;
  editButtonText: string;
  viewButtonText: string;
  loading: boolean;
}
