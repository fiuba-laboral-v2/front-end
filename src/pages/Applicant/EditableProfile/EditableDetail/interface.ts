import { IApplicantCareer, ICapability, ILink, ISection } from "$interfaces/Applicant";

export interface IEditableDetailValues {
  uuid: string;
  name: string;
  surname: string;
  links: ILink[];
  careers: IApplicantCareer[];
  capabilities: ICapability[];
  sections: ISection[];
  _form: string;
}
