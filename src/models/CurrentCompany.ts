import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentApprovable } from "./CurrentApprovable";

export const CurrentCompany = CurrentApprovable<ICurrentCompanyAttributes>();

export type ICurrentCompanyAttributes = {
  uuid: string;
  approvalStatus: ApprovalStatus;
};

export type ICurrentCompany = CurrentApprovable & ICurrentCompanyAttributes;
