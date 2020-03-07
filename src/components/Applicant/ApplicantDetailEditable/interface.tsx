import { IApplicant } from "$interfaces/Applicant";

export interface ITranslationsEditable {
  padron: string;
  name: string;
  lastName: string;
  description: string;
}

export interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  state: IApplicant;
  translations: ITranslationsEditable;
  onSubmit: (applicant: IApplicant) => void;
  onCancel: () => void;
  setState: (applicant: IApplicant) => void;
}
