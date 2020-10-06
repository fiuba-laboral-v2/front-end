import { ApplicantType } from "$interfaces/Applicant";

export interface ITranslations {
  graduate: string;
  student: string;
  both: string;
}

export interface ITargetApplicantType extends ITargetApplicantTypeContainer {
  translations: ITranslations;
}

export interface ITargetApplicantTypeContainer {
  className?: string;
  targetApplicantType: ApplicantType;
}
