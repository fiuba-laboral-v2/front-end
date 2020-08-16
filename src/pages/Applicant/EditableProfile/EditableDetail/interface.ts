import { ICapability } from "$interfaces/Capability";
import { IUpdateCurrentApplicantVariables } from "$hooks";

export interface IApplicantEditableValues extends Omit<IUpdateCurrentApplicantVariables, "capabilities"> {
  capabilities: ICapability[];
}

export interface IApplicantEditableFormValues extends IApplicantEditableValues {
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
