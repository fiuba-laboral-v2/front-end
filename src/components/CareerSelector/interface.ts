import { IApplicantCareer, ICareer } from "$interfaces/Applicant";

export interface ICareerSelectorContainerProps {
  index: number;
  value?: IApplicantCareer;
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  careerLabel: string;
  creditsLabel: string;
  options: ICareer[];
}
