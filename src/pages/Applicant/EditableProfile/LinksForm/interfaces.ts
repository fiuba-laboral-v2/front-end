import { ILink } from "$interfaces/Applicant";

export interface ITranslations {
  links: string;
  link: string;
  linkTitle: string;
}

export interface IContainer {
  links: ILink[];
}

export interface IComponent extends IContainer {
  translations: ITranslations;
}
