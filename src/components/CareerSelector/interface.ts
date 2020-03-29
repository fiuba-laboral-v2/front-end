import { ICareer } from "../../interfaces/Applicant";
import { ArrayHelpers } from "formik";

export interface ICareerSelectorContainerProps {
  index: number;
  careers: ICareer[];
  arrayHelpers: ArrayHelpers;
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  careerLabel: string;
  creditsLabel: string;
}
