import { APPLICANT_TYPE, COMPANY_TYPE } from "$typenames";
import { IUser } from "../User";
import { ApprovalStatus } from "../ApprovalStatus";

export interface IApprovableCompany {
  __typename: COMPANY_TYPE;
  uuid: string;
  createdAt: string;
  companyName: string;
}

export interface IApprovableApplicant {
  __typename: APPLICANT_TYPE;
  uuid: string;
  createdAt: string;
  user: IUser;
}

export type TAdminTask = IApprovableCompany | IApprovableApplicant;

export type TAdminTaskType = COMPANY_TYPE | APPLICANT_TYPE;

export interface IAdminTasksFilter {
  adminTaskTypes: TAdminTaskType[];
  statuses: ApprovalStatus[];
}
