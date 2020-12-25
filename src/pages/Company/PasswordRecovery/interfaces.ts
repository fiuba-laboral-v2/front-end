import { ISendPasswordRecoveryEmailVariables } from "$hooks";

export interface IFormValues extends ISendPasswordRecoveryEmailVariables {
  _form: string;
}

export interface ITranslations {
  title: string;
  submit: string;
  email: string;
}
