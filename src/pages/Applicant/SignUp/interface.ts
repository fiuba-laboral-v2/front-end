import { IApplicantCareer } from "$interfaces/Applicant";

export interface ISignUpValues {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  surname: string;
  padron: number;
  careers: IApplicantCareer[];
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
