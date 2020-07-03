import { COMPANY_TYPE, APPLICANT_TYPE } from "$typenames";
import { IUser } from "../User";

export interface IApprovableCompany {
  __typename: COMPANY_TYPE;
  uuid: string;
  companyName: string;
}

export interface IApprovableApplicant {
  __typename: APPLICANT_TYPE;
  uuid: string;
  user: IUser;
}

export type IApprovable = IApprovableCompany | IApprovableApplicant;
