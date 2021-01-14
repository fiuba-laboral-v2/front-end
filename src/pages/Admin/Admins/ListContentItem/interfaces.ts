import { IAdmin } from "$interfaces/Admin";

export interface ISecretaryNamesTranslations {
  graduados: string;
  extension: string;
}

export interface IAdminStatusTranslations {
  active: string;
  deactivated: string;
}

export interface IListContentItemContainer {
  admin: IAdmin;
}

export interface IListContentItem extends IListContentItemContainer {
  translations?: ISecretaryNamesTranslations & IAdminStatusTranslations;
}
