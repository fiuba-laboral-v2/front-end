import { IApplicant } from "$interfaces/Applicant";
import { IOffer } from "$interfaces/Offer";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export interface IJobApplication {
  uuid: string;
  updatedAt: string;
  createdAt: string;
  graduadosApprovalStatus: ApprovalStatus;
  extensionApprovalStatus: ApprovalStatus;
  applicant: IApplicant;
  offer: IOffer;
}
