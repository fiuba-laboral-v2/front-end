import { ISaveApplicant } from "$hooks";

export interface IApplicantSignUpFormValues extends ISaveApplicant {
  _form: string;
}

export interface IApplicantSignUpTranslations {
  title: string;
  submit: string;
}
