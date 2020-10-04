export interface ITranslations {
  title: string;
  email: string;
  name: string;
  surname: string;
  padron: string;
}

export interface IContainer {
  className?: string;
}

export interface IComponent extends IContainer {
  translations: ITranslations;
}
