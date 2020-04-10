import { IApplicantCareer, ICapability, ILink } from "$interfaces/Applicant";

export interface IEditableDetailValues {
  uuid: string;
  links: ILink[];
  careers: IApplicantCareer[];
  capabilities: ICapability[];
  _form: string;
}
