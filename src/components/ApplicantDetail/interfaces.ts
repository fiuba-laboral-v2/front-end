import { IApplicant } from "$interfaces/Applicant";

export interface ITranslations {
  padron: string;
  capabilities: string;
  experienceSectionsTitle: string;
  knowledgeSectionsTitle: string;
}

export interface IApplicantDetailContainerProps {
  mobileLayout?: boolean;
  className?: string;
  applicant?: IApplicant;
  withStatusLabel?: boolean;
  titleLink?: string;
}

export interface IApplicantDetailProps extends IApplicantDetailContainerProps {
  translations?: ITranslations;
}
