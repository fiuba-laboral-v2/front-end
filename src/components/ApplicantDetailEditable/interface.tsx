import { IApplicant, IApplicantEditable } from "$interfaces/Applicant";

export interface ITranslationsEditable {
  padron: string;
  capabilities: string;
  careers: string;
  credits: string;
  name: string;
  lastName: string;
  description: string;
}

export interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  state: IApplicantEditable;
  translations: ITranslationsEditable;
  onSubmit: (applicant: IApplicantEditable) => void;
  onCancel: () => void;
  setState: (applicant: IApplicantEditable) => void;
}
