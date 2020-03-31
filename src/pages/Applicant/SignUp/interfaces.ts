import { ICareer } from "$interfaces/Applicant";

export interface ICareersSelector {
  code: string;
  creditsCount: number;
}

export interface IInitialValues {
  email: string;
  password: string;
  name: string;
  surname: string;
  padron: number;
  careers: ICareersSelector[];
  _form: string;
}

export interface ISignUpProps {
  translations: {
    title: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    padron: string;
    careersTitle: string;
    submit: string;
  };
  careers: ICareer[];
}
