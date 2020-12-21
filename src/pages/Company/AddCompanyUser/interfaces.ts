import { ISaveCompanyUserInput } from "$hooks";
import { IUserInput } from "$interfaces/User";

export interface IUserFormInput extends IUserInput {
  passwordConfirm: string;
}

export interface ICompanyUserFormValues extends ISaveCompanyUserInput {
  user: IUserFormInput;
  _form: string;
}

export interface ITranslations {
  title: string;
  submit: string;
}
