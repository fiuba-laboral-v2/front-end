import { ICareer } from "$interfaces/Applicant";

export interface ICareerSelectorContainerProps {
  index: number;
  value?: {
    code: string,
    creditsCount: number
  };
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  careerLabel: string;
  creditsLabel: string;
  options: ICareer[];
}
