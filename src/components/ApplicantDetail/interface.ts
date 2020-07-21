import { IApplicant } from "$interfaces/Applicant";
import { ReactElement, FunctionComponent } from "react";

export interface ITranslations {
  padron: string;
  capabilities: string;
}

export interface IApplicantDetailContainerProps {
  applicant: IApplicant;
  editButton?: ReactElement;
  statusLabel?: boolean;
}

export interface IApplicantDetailProps extends IApplicantDetailContainerProps {
  translations: ITranslations;
}
