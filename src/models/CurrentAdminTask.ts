import { ApprovalStatus } from "../interfaces/ApprovalStatus";

export const CurrentAdminTask = <T extends { approvalStatus: ApprovalStatus }>() => (
  attributes: T
): T & CurrentAdminTask => {
  const approvable: T & CurrentAdminTask = {
    ...attributes,
    isPending: () => approvable.approvalStatus === ApprovalStatus.pending,
    isRejected: () => approvable.approvalStatus === ApprovalStatus.rejected,
    isApproved: () => approvable.approvalStatus === ApprovalStatus.approved
  };
  return approvable;
};

export type CurrentAdminTask = {
  isPending: () => boolean;
  isRejected: () => boolean;
  isApproved: () => boolean;
};
