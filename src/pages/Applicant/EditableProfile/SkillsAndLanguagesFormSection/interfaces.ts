export interface ITranslations {
  capabilities: string;
  capability: string;
}

export interface IContainer {
  className?: string;
}

export interface IComponent extends IContainer {
  translations: ITranslations;
}
