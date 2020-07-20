import { IApplicant } from "../../interfaces/Applicant";
import { ReactElement } from "react";

export interface ITranslations {
  padron: string;
  capabilities: string;
}

export interface IApplicantDetailContainerProps {
  applicant: IApplicant;
  editButton?: ReactElement;
  statusLabel?: ReactElement;
}

export interface IApplicantDetailProps extends IApplicantDetailContainerProps {
  translations: ITranslations;
}
