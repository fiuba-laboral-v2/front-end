import { ICareer } from "$interfaces/Applicant";

export interface ICareerTranslations {
  careersTitle: string;
  creditsProgress: string;
}

export interface ICareersProps {
  careers: ICareer[];
  className?: string;
  translations: ICareerTranslations;
}

export interface ICareersContainerProps {
  careers: ICareer[];
  className?: string;
}
