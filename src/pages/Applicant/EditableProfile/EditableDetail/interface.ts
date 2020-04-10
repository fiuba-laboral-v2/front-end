import { IApplicantCareer, ICapability, ILink } from "$interfaces/Applicant";

export interface IEditableDetailValues {
  uuid: string;
  name: string;
  surname: string;
  links: ILink[];
  careers: IApplicantCareer[];
  capabilities: ICapability[];
  _form: string;
}
