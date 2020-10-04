export interface ITranslations {
  dni: string;
  password: string;
  title: string;
  subtitle: string;
}

export interface IContainer {
  className?: string;
}

export interface IComponentProps extends IContainer {
  translations: ITranslations;
}
