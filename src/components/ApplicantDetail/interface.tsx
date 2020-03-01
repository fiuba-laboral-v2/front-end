import { IApplicant } from "$interfaces/Applicant";

export interface ITranslations {
  padron: string;
  capabilities: string;
  careers: string;
  credits: string;
}

export interface IApplicantDetailProps {
  applicant: IApplicant;
  translations: ITranslations;
}
