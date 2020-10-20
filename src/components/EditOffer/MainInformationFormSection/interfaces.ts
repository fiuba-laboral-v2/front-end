export interface ITranslations {
  offerTitle: string;
  minimumSalary: string;
  maximumSalary: string;
  hoursPerDay: string;
  description: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
