import { IApplicantCareer, ILink, ISection } from "$interfaces/Applicant";
import { ICapability } from "$interfaces/Capability";

export interface IEditableDetailValues {
  uuid: string;
  name: string;
  surname: string;
  links: ILink[];
  careers: IApplicantCareer[];
  capabilities: ICapability[];
  sections: ISection[];
  _form: string[];
}

export interface IApplicantDetailEditableTranslations {
  title: string;
  name: string;
  surname: string;
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
