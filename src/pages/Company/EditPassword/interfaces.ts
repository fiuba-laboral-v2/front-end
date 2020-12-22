import { IUpdateCompanyUserPasswordVariables } from "$hooks";

export interface IFormValues extends IUpdateCompanyUserPasswordVariables {
  newPasswordConfirm: string;
  _form: string;
}

export interface ITranslations {
  title: string;
  submit: string;
  badCredentialsError: string;
  password: string;
  newPassword: string;
  newPasswordConfirm: string;
}
