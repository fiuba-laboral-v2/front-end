import { ILink } from "$interfaces/Applicant";

export interface IEditableDetailValues {
  uuid: string;
  links: ILink[];
  _form: string;
}
