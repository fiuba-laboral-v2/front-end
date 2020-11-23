export interface ITranslations {
  title: string;
  careers: string;
  targetApplicantType: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
}
