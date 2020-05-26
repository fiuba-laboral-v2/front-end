import { IUpdateCurrentCompanyVariables } from "$hooks";

export interface IEditableProfileFormValues extends IUpdateCurrentCompanyVariables {
  _form: string;
}

export interface IEditableProfileTranslations {
  title: string;
  cuit: string;
  companyEmail: string;
  companyName: string;
  slogan: string;
  description: string;
  logo: string;
  website: string;
  submit: string;
}
