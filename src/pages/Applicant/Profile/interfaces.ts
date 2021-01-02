import { IApplicant } from "$interfaces/Applicant";

export interface ITranslations {
  edit: string;
  editPadron: string;
}

export interface IProfileParams {
  applicant?: IApplicant;
}
