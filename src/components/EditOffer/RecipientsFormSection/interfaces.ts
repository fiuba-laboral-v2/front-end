import { ApplicantType } from "$interfaces/Applicant";

export interface ITranslations {
  title: string;
  careers: string;
  targetApplicantType: string;
}

export interface IContainerProps {
  className?: string;
  targetApplicantType: {
    value: ApplicantType | "";
    error?: string;
  };
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
