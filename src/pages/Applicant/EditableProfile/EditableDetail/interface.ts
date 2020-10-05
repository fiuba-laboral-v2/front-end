import { IUpdateCurrentApplicantVariables } from "$hooks";

export interface IApplicantEditableFormValues extends IUpdateCurrentApplicantVariables {
  _form: string[];
}

export interface IApplicantDetailEditableTranslations {
  title: string;
  description: string;
  links: string;
  link: string;
  linkTitle: string;
  careers: string;
  capabilities: string;
  capability: string;
  sections: string;
  sectionTitle: string;
  sectionContent: string;
  submit: string;
}
