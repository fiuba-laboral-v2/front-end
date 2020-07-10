import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { CurrentAdminTask } from "./CurrentAdminTask";

export const CurrentCompany = CurrentAdminTask<ICurrentCompanyAttributes>();

export type ICurrentCompanyAttributes = {
  uuid: string;
  approvalStatus: ApprovalStatus;
};

export type ICurrentCompany = CurrentAdminTask & ICurrentCompanyAttributes;
