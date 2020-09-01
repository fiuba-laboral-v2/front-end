import { TargetApplicantType } from "../../interfaces/Offer";

export interface IContainerProps {
  value: TargetApplicantType | "";
  error?: string;
}

export interface ITranslations {
  title: string;
  graduate: string;
  student: string;
  both: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
