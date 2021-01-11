export interface ITranslations {
  title: string;
  subtitle: string;
  email: string;
  emailHelperText: string;
  website: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
