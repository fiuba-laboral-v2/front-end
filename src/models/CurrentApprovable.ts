import { ApprovalStatus } from "../interfaces/ApprovalStatus";

export const CurrentApprovable = <T extends { approvalStatus: ApprovalStatus }>() =>
  (attributes: T): T & CurrentApprovable => {
    const approvable: T & CurrentApprovable = {
      ...attributes,
      isPending: () => approvable.approvalStatus === ApprovalStatus.pending,
      isRejected: () => approvable.approvalStatus === ApprovalStatus.rejected,
      isApproved: () => approvable.approvalStatus === ApprovalStatus.approved
    };
    return approvable;
  };

export type CurrentApprovable = {
  isPending: () => boolean;
  isRejected: () => boolean;
  isApproved: () => boolean;
};
