import { ISection } from "$interfaces/Applicant";

export interface ITranslations {
  sections: string;
  sectionTitle: string;
  sectionContent: string;
}

export interface IContainer {
  sections: ISection[];
}

export interface IComponent extends IContainer {
  translations: ITranslations;
}
