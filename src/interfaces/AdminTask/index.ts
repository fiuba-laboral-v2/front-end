import { APPLICANT_TYPE, COMPANY_TYPE, OFFER_TYPE, JOB_APPLICATION_TYPE } from "$typenames";
import { IUser } from "../User";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { IPaginatedInput } from "../Pagination";

export interface ICompanyAdminTask {
  __typename: COMPANY_TYPE;
  uuid: string;
  updatedAt: string;
  companyName: string;
  approvalStatus: ApprovalStatus;
}

export interface IApplicantAdminTask {
  __typename: APPLICANT_TYPE;
  uuid: string;
  updatedAt: string;
  approvalStatus: ApprovalStatus;
  user: IUser;
}

export interface IOfferAdminTask {
  __typename: OFFER_TYPE;
  uuid: string;
  updatedAt: string;
  extensionApprovalStatus: ApprovalStatus;
  graduadosApprovalStatus: ApprovalStatus;
  approvalStatus: undefined;
  title: string;
}

export interface IJobApplicationAdminTask {
  __typename: JOB_APPLICATION_TYPE;
  uuid: string;
  updatedAt: string;
  approvalStatus: ApprovalStatus;
  offer: IOfferAdminTask;
  applicant: IApplicantAdminTask;
}

export type TAdminTask =
  | ICompanyAdminTask
  | IApplicantAdminTask
  | IOfferAdminTask
  | IJobApplicationAdminTask;

export type TAdminTaskType = COMPANY_TYPE | APPLICANT_TYPE | OFFER_TYPE | JOB_APPLICATION_TYPE;

export interface IAdminTasksFilter {
  adminTaskTypes: TAdminTaskType[];
  statuses: ApprovalStatus[];
  updatedBeforeThan?: IPaginatedInput;
}
