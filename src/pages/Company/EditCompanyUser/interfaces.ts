import { IUseUpdateCompanyUser } from "$hooks";

export interface IFormValues extends IUseUpdateCompanyUser {
  _form: string;
}

export interface ITranslations {
  title: string;
  submit: string;
}
