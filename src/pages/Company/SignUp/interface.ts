import { ICreateCompany } from "$hooks";

export interface ISignUpFormValues extends ICreateCompany {
  _form: string;
  passwordConfirm: string;
}

export interface ISignUpTranslations {
  title: string;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  surname: string;
  cuit: string;
  companyName: string;
  slogan: string;
  description: string;
  logo: string;
  website: string;
  submit: string;
}
