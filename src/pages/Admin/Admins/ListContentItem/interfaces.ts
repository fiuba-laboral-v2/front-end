import { IAdmin } from "$interfaces/Admin";

export interface ITranslations {
  graduados: string;
  extension: string;
}

export interface IListContentItemContainer {
  admin: IAdmin;
}

export interface IListContentItem extends IListContentItemContainer {
  translations: ITranslations;
}
