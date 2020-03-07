import { ICareer } from "$interfaces/Applicant";

export interface ICareersProps {
  careers?: ICareer[];
  careersTitle: string;
  creditsProgressTranslation: string;
}

export interface ICareersContainerProps {
  careers?: ICareer[];
}
