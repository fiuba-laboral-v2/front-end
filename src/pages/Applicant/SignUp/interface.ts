export interface ISignUpValues {
  email: string;
  password: string;
  name: string;
  surname: string;
  padron: number;
  careers: Array<{
    code: string;
    creditsCount: number;
  }>;
  _form: string;
}
