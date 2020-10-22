import { IUpdateCurrentApplicantVariables } from "$hooks";

export interface IApplicantEditableFormValues extends IUpdateCurrentApplicantVariables {
  _form: string[];
}

export interface IApplicantDetailEditableTranslations {
  title: string;
  submit: string;
}
