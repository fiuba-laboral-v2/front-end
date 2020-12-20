export interface ITranslations {
  title: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations?: ITranslations;
}
