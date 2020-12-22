import { ICreateCompany } from "$hooks";
import { ICompanyUserInput } from "$interfaces/User";

export interface IUserFormInput extends ICompanyUserInput {
  passwordConfirm: string;
}
export interface ISignUpFormValues extends ICreateCompany {
  user: IUserFormInput;
  _form: string;
}

export interface ISignUpTranslations {
  title: string;
  submit: string;
}
