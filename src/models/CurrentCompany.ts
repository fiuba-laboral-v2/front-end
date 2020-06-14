import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { ICompany } from "$interfaces/Company";
import { RoutesBuilder } from "./RoutesBuilder";

export const buildCurrentCompany = (currentCompanyResponse: ICompany): Company => {
  const company: Company = {
    ...currentCompanyResponse,
    isPending: () => company.approvalStatus === ApprovalStatus.pending,
    isRejected: () => company.approvalStatus === ApprovalStatus.rejected,
    isApproved: () => company.approvalStatus === ApprovalStatus.approved,
    getHomeRoute: () => {
      if (company.isApproved()) return RoutesBuilder.company.jobApplications();

      return RoutesBuilder.company.editMyProfile();
    },
    availableRoutesInPendingStatus: () => {
      const { myProfile } = RoutesBuilder.company;
      return [myProfile()];
    },
    availableRoutesInRejectedStatus: () => {
      const { editMyProfile, myProfile } = RoutesBuilder.company;
      return [editMyProfile(), myProfile()];
    },
    isRouteDisabled: (route: string) => {
      if (company.isApproved()) return false;
      if (company.isPending()) {
        return !company.availableRoutesInPendingStatus().includes(route);
      }
      return !company.availableRoutesInRejectedStatus().includes(route);
    }
  };
  return company;
};

export type Company = ICompany & ICompanyProps;

export interface ICompanyProps {
  isPending: () => boolean;
  isRejected: () => boolean;
  isApproved: () => boolean;
  getHomeRoute: () => string;
  isRouteDisabled: (route: string) => boolean;
  availableRoutesInPendingStatus: () => string[];
  availableRoutesInRejectedStatus: () => string[];
}
