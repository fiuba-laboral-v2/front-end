import { IApplicant } from "$interfaces/Applicant";

export interface IUserDetailsContainerProps {
  applicant: IApplicant;
}

export interface IUserDetailsTranslations {
  padron: string;
}

export interface IUserDetailsProps extends IUserDetailsContainerProps {
  applicant: IApplicant;
  translations: IUserDetailsTranslations;
}
