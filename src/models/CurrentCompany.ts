import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";
import { RoutesBuilder } from "./RoutesBuilder";

export const CurrentCompany = (attributes: ICompany): ICurrentCompany => {
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

export interface ICurrentCompany extends ICompany {
  isPending: () => boolean;
  isRejected: () => boolean;
  isApproved: () => boolean;
  getHomeRoute: () => string;
}
