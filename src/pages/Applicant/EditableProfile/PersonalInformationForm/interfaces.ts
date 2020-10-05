export interface ITranslations {
  name: string;
  surname: string;
  description: string;
  email: string;
}

export interface IComponent {
  translations: ITranslations;
}
