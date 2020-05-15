export interface IUserInput {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export interface ISignUpValues {
  user: IUserInput;
  cuit: string;
  companyName: string;
  email: string;
  slogan: string;
  description: string;
  logo: string;
  website: string;
}

export interface ISignUpFormValues extends ISignUpValues {
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
