import { IApplicant } from "$interfaces/Applicant";

export interface IUserDetailsContainerProps {
  applicant?: IApplicant;
}

export interface IUserDetailsProps extends IUserDetailsContainerProps {
  applicant: IApplicant;
  translations: IUserDetailsTranslations;
}

export interface IUserDetailsTranslations {
  padron: string;
  dni: string;
}
