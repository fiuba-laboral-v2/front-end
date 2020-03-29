import { ICareer } from "$interfaces/Applicant";

export interface ICareersProps {
  careers: ICareer[];
  careersTitle: string;
  creditsProgressTranslation: string;
  className?: string;
}

export interface ICareersContainerProps {
  careers: ICareer[];
  className?: string;
}
