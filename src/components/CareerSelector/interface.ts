import { ICareer } from "../../interfaces/Applicant";
import { ArrayHelpers } from "formik";

export interface ICareerSelectorContainerProps {
  index: number;
  careers: ICareer[];
  arrayHelpers: ArrayHelpers;
  creditsLabel: string;
}

export interface ICareerSelectorProps extends ICareerSelectorContainerProps {
  career: string;
}
