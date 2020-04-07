import { IApplicantCareer } from "$interfaces/Applicant";

export interface ISignUpValues {
  email: string;
  password: string;
  name: string;
  surname: string;
  padron: number;
  careers: IApplicantCareer[];
  _form: string;
}
