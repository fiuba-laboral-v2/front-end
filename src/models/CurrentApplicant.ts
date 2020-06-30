import { ApprovalStatus } from "../interfaces/ApprovalStatus";
import { CurrentApprovable } from "./CurrentApprovable";

export const CurrentApplicant = CurrentApprovable<ICurrentApplicantAttributes>();

export type ICurrentApplicantAttributes = {
  uuid: string;
  approvalStatus: ApprovalStatus;
};

export type ICurrentApplicant = CurrentApprovable & ICurrentApplicantAttributes;
