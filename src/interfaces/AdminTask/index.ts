import { APPLICANT_TYPE, COMPANY_TYPE } from "$typenames";
import { IUser } from "../User";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface ICompanyAdminTask {
  __typename: COMPANY_TYPE;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  companyName: string;
  approvalStatus: ApprovalStatus;
}

export interface IApplicantAdminTask {
  __typename: APPLICANT_TYPE;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  approvalStatus: ApprovalStatus;
  user: IUser;
}

export type TAdminTask = ICompanyAdminTask | IApplicantAdminTask;

export type TAdminTaskType = COMPANY_TYPE | APPLICANT_TYPE;

export interface IAdminTasksFilter {
  adminTaskTypes: TAdminTaskType[];
  statuses: ApprovalStatus[];
}
