import { IApplicantCareerInput } from "$interfaces/Applicant";
import { ICareer } from "$interfaces/Career";

export interface ICareerSelectorContainerProps {
  index: number;
  value: IApplicantCareerInput;
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  translations: ICareerSelectorTranslations;
  options: ICareer[];
}

export interface ICareerSelectorTranslations {
  career: string;
  isGraduate: string;
  approvedSubjectCount: string;
  currentCareerYear: string;
}
