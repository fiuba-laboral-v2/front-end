import { IApplicant } from "$interfaces/Applicant";

export interface ITranslations {
  edit: string;
}

export interface IProfileParams {
  applicant: IApplicant;
  translations: ITranslations;
  onClickEdit: () => void;
}
