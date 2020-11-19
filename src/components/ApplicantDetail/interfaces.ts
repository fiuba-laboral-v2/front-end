import { IApplicant } from "$interfaces/Applicant";
import { ReactElement } from "react";

export interface ITranslations {
  padron: string;
  capabilities: string;
}

export interface IApplicantDetailContainerProps {
  mobileLayout?: boolean;
  className?: string;
  applicant?: IApplicant;
  editButton?: ReactElement;
  withStatusLabel?: boolean;
}

export interface IApplicantDetailProps extends IApplicantDetailContainerProps {
  translations?: ITranslations;
}
