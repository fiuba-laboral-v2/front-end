import { IApplicantCareer } from "$interfaces/Applicant";

export interface ICareerTranslations {
  careersTitle: string;
}

export interface ICareersProps {
  careers: IApplicantCareer[];
  className?: string;
  translations: ICareerTranslations;
}

export interface ICareersContainerProps {
  careers: IApplicantCareer[];
  className?: string;
}
