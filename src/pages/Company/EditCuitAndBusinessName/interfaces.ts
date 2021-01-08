import { IUseUpdateCuitAndBusinessName } from "$hooks";

export interface IFormValues extends IUseUpdateCuitAndBusinessName {
  _form: string;
}

export interface ITranslations {
  title: string;
  submit: string;
  cuit: string;
  businessName: string;
  hasAnInternshipAgreement: string;
}
