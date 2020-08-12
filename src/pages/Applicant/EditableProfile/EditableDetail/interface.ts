import { IApplicantCareerInput, ILink, ISection } from "$interfaces/Applicant";
import { ICapability } from "$interfaces/Capability";

export interface IEditableDetailValues {
  uuid: string;
  name: string;
  surname: string;
  description: string;
  links: ILink[];
  careers: IApplicantCareerInput[];
  capabilities: ICapability[];
  sections: ISection[];
  _form: string[];
}

export interface IApplicantDetailEditableTranslations {
  title: string;
  name: string;
  surname: string;
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
