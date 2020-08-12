import { IApplicantCareerInput } from "$interfaces/Applicant";
import { ICareer } from "$interfaces/Career";

export interface ICareerSelectorContainerProps {
  index: number;
  value: IApplicantCareerInput;
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  careerLabel: string;
  creditsLabel: string;
  options: ICareer[];
}

export interface ICareerSelectorTranslations {
  career: string;
  credits: string;
}
