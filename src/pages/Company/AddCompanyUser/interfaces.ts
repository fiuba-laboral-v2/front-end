import { ISaveCompanyUserInput } from "$hooks";
import { ICompanyUserInput } from "$interfaces/User";

export interface IUserFormInput extends ICompanyUserInput {
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
