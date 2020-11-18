import { IApplicantCareerInput } from "$interfaces/Applicant";

export interface ITranslations {
  title: string;
}

export interface IContainer {
  className?: string;
  defaultValue: IApplicantCareerInput;
  careers: IApplicantCareerInput[];
}

export interface IComponent extends IContainer {
  translations?: ITranslations;
}
