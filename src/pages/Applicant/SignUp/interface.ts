import { ISaveApplicant } from "$hooks";

export interface ISignUpFormValues extends ISaveApplicant {
  passwordConfirm: string;
  _form: string;
}

export interface ISignUpTranslations {
  title: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  surname: string;
  padron: string;
  careersTitle: string;
  submit: string;
}
