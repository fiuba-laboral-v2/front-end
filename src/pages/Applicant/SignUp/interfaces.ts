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
}
