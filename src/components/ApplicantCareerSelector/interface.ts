import { IApplicantCareerInput } from "$interfaces/Applicant";
import { ICareer } from "$interfaces/Career";
import { RefObject } from "react";

export interface IContainerProps {
  index: number;
  value: IApplicantCareerInput;
  autofocusInputRef?: RefObject<HTMLInputElement>;
  mandatory?: boolean;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  options: ICareer[];
}

export interface ITranslations {
  career: string;
  isGraduate: string;
  approvedSubjectCount: string;
  currentCareerYear: string;
  withoutCBC: string;
}
