export interface IContainerProps {
  initialValue: string;
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
