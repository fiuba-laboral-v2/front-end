import { IApplicant } from "$interfaces/Applicant";
import { ReactElement } from "react";

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
  editButton?: ReactElement;
  withStatusLabel?: boolean;
  titleLink?: string;
}

export interface IApplicantDetailProps extends IApplicantDetailContainerProps {
  translations?: ITranslations;
}
