import { ApprovalStatus } from "../interfaces/ApprovalStatus";

export const CurrentApplicant = (attributes: ICurrentApplicantAttributes): ICurrentApplicant => {
  const applicant: ICurrentApplicant = {
    ...attributes,
    isPending: () => applicant.approvalStatus === ApprovalStatus.pending,
    isRejected: () => applicant.approvalStatus === ApprovalStatus.rejected,
    isApproved: () => applicant.approvalStatus === ApprovalStatus.approved
  };
  return applicant;
};

export interface ICurrentApplicantAttributes {
  uuid: string;
  approvalStatus: ApprovalStatus;
}

export interface ICurrentApplicant extends ICurrentApplicantAttributes {
  isPending: () => boolean;
  isRejected: () => boolean;
  isApproved: () => boolean;
}
