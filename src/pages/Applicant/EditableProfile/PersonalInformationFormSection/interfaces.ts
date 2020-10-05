export interface ITranslations {
  name: string;
  surname: string;
  description: string;
  email: string;
}

export interface IContainer {
  className?: string;
}

export interface IComponent extends IContainer {
  translations: ITranslations;
}
