import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const CurrentCompany = (attributes: ICurrentCompanyAttributes): ICurrentCompany => {
  const company: ICurrentCompany = {
    ...attributes,
    isPending: () => company.approvalStatus === ApprovalStatus.pending,
    isRejected: () => company.approvalStatus === ApprovalStatus.rejected,
    isApproved: () => company.approvalStatus === ApprovalStatus.approved
  };
  return company;
};

export interface ICurrentCompanyAttributes {
  uuid: string;
  approvalStatus: ApprovalStatus;
}

export interface ICurrentCompany extends ICurrentCompanyAttributes {
  isPending: () => boolean;
  isRejected: () => boolean;
  isApproved: () => boolean;
}
