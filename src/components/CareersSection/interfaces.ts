import { IApplicantCareer } from "$interfaces/Applicant";

export interface ICareerTranslations {
  careersTitle: string;
}

export interface ICareersContainerProps {
  careers: IApplicantCareer[];
  className?: string;
  mobileLayout?: boolean;
}

export interface ICareersProps extends ICareersContainerProps {
  translations?: ICareerTranslations;
}
