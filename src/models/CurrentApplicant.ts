import { ApprovalStatus } from "../interfaces/ApprovalStatus";
import { CurrentAdminTask } from "./CurrentAdminTask";

export const CurrentApplicant = CurrentAdminTask<TCurrentApplicantAttributes>();

export type TCurrentApplicantAttributes = {
  uuid: string;
  approvalStatus: ApprovalStatus;
};

export type TCurrentApplicant = CurrentAdminTask & TCurrentApplicantAttributes;
