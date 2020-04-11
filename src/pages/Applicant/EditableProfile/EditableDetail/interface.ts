import { IApplicantCareer, ILink } from "$interfaces/Applicant";
import { ICapability } from "$interfaces/Capability";

export interface IEditableDetailValues {
  uuid: string;
  name: string;
  surname: string;
  links: ILink[];
  careers: IApplicantCareer[];
  capabilities: ICapability[];
  _form: string;
}
