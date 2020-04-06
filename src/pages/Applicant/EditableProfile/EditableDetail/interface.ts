import { ILink } from "$interfaces/Applicant";

export interface IEditableDetailValues {
  uuid: string;
  links: ILink[];
  careers: Array<{
    code: string;
    creditsCount: number;
  }>;
  _form: string;
}
