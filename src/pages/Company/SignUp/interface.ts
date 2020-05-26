import { ICreateCompany } from "$hooks";
import { IUserInput } from "$interfaces/User";

export interface IUserFormInput extends IUserInput {
  passwordConfirm: string;
}
export interface ISignUpFormValues extends ICreateCompany {
  user: IUserFormInput;
  _form: string;
}

export interface ISignUpTranslations {
  title: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  surname: string;
  submit: string;
}
