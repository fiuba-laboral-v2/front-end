import { IApplicant } from "$interfaces/Applicant";

export interface ITranslationsEditable {
  padron: string;
  name: string;
  lastName: string;
  description: string;
}

export interface IApplicantDetailEditableProps {
  applicant: IApplicant;
  translations: ITranslationsEditable;
  onSubmit: (applicant: IApplicant) => void;
  onCancel: () => void;
  setApplicant: (applicant: IApplicant) => void;
  deleteCapability: (description: string) => void;
  deleteCareer: (code: string) => void;
}
