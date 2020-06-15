import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const CurrentCompany = (attributes: ICurrentCompanyProps): ICurrentCompany => {
  const company: ICurrentCompany = {
    ...attributes,
    isPending: () => company.approvalStatus === ApprovalStatus.pending,
    isRejected: () => company.approvalStatus === ApprovalStatus.rejected,
    isApproved: () => company.approvalStatus === ApprovalStatus.approved
  };
  return company;
};

interface ICurrentCompanyProps {
  uuid: string;
  approvalStatus: ApprovalStatus;
}

export interface ICurrentCompany extends ICurrentCompanyProps {
  isPending: () => boolean;
  isRejected: () => boolean;
  isApproved: () => boolean;
}
