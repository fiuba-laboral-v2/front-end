import { ICareer } from "../../interfaces/Applicant";

export interface ICareerSelectorContainerProps {
  index: number;
  options: ICareer[];
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  careerLabel: string;
  creditsLabel: string;
}
