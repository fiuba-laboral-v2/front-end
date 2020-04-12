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
  _form: string;
}
