export interface ITranslations {
  offerTitle: string;
  minimumSalary: string;
  maximumSalary: string;
  hoursPerDay: string;
  description: string;
  isInternship: string;
}

export interface IContainerProps {
  autoFocus?: boolean;
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
