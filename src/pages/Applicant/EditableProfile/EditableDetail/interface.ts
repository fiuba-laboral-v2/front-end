import { IApplicantCareer, ILink } from "$interfaces/Applicant";

export interface IEditableDetailValues {
  uuid: string;
  links: ILink[];
  careers: IApplicantCareer[];
  _form: string;
}
