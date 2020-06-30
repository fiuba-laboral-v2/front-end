import { ApprovalStatus } from "../interfaces/ApprovalStatus";
import { CurrentApprovable } from "./CurrentApprovable";

export const CurrentApplicant = CurrentApprovable<TCurrentApplicantAttributes>();

export type TCurrentApplicantAttributes = {
  uuid: string;
  approvalStatus: ApprovalStatus;
};

export type TCurrentApplicant = CurrentApprovable & TCurrentApplicantAttributes;
