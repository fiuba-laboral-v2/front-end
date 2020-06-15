import { Company } from "../CurrentCompany";
import { RoutesBuilder } from "../RoutesBuilder";

const AVAILABLE_ROUTES_IN_PENDING_STATUS = [
  RoutesBuilder.company.editMyProfile(),
  RoutesBuilder.company.myProfile()
];

const AVAILABLE_ROUTES_IN_REJECTED_STATUS = [
  RoutesBuilder.company.myProfile()
];

export const CompanyPermissions = {
  canAccess: (currentCompany: Company, route: string) => {
    if (currentCompany.isPending()) return AVAILABLE_ROUTES_IN_PENDING_STATUS.includes(route);
    if (currentCompany.isRejected()) return AVAILABLE_ROUTES_IN_REJECTED_STATUS.includes(route);

    return true;
  },
  getAccessError: (currentCompany: Company) => {
    if (currentCompany.isPending()) return "pendingProfile";
    if (currentCompany.isRejected()) return "rejectedProfile";
  }
};
