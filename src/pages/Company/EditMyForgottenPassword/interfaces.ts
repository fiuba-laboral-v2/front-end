import { IUpdateMyForgottenPasswordVariables } from "$hooks";

export interface IFormValues extends IUpdateMyForgottenPasswordVariables {
  newPasswordConfirm: string;
  _form: string;
}

export interface ITranslations {
  title: string;
  submit: string;
  newPassword: string;
  newPasswordConfirm: string;
}
