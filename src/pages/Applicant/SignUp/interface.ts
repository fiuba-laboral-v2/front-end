import { ISaveApplicant } from "$hooks";
import { IFiubaUserInput } from "$interfaces/User";

export interface IApplicantSignUpFormValues extends ISaveApplicant {
  user: IFiubaUserInput;
  _form: string;
}

export interface IApplicantSignUpTranslations {
  title: string;
  padron: string;
  careersTitle: string;
  submit: string;
}
