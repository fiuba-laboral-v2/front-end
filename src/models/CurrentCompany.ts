import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { RoutesBuilder } from "./RoutesBuilder";

export const CurrentCompany = (attributes: ICurrentCompanyProps): ICurrentCompany => {
  const company: ICurrentCompany = {
    ...attributes,
    isPending: () => company.approvalStatus === ApprovalStatus.pending,
    isRejected: () => company.approvalStatus === ApprovalStatus.rejected,
    isApproved: () => company.approvalStatus === ApprovalStatus.approved,
    getHomeRoute: () => {
      if (company.isApproved()) return RoutesBuilder.company.jobApplications();
      if (company.isPending()) return RoutesBuilder.company.editMyProfile();

      return RoutesBuilder.company.myProfile();
    }
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
  getHomeRoute: () => string;
}
