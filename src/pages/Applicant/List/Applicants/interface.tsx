import { IApplicant } from "$interfaces/Applicant";

export interface IApplicantsProps {
  applicants: IApplicant[];
  onClickEdit: (uuid: string) => void;
  onClickView: () => void;
  translations?: IApplicantButtonsTranslations;
  loading: boolean;
}

export interface IApplicantButtonsTranslations {
  editButtonText: string;
  viewButtonText: string;
}
