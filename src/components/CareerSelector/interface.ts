import { ICareer } from "../../interfaces/Applicant";

export interface ICareerSelectorContainerProps {
  index: number;
  value?: ICareer;
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  careerLabel: string;
  creditsLabel: string;
  options: ICareer[];
}
