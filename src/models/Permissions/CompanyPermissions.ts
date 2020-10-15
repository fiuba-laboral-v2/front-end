import { ICurrentCompany } from "$models/CurrentCompany";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { RejectedCompanyError, PendingCompanyError } from "$models/Errors";

const AVAILABLE_ROUTES_IN_PENDING_STATUS = [
  RoutesBuilder.company.editMyProfile(),
  RoutesBuilder.company.myProfile()
];

const AVAILABLE_ROUTES_IN_REJECTED_STATUS = [RoutesBuilder.company.myProfile()];

export const CompanyPermissions = {
  check: (currentCompany: ICurrentCompany, route: string) => {
    if (currentCompany.isPending() && !AVAILABLE_ROUTES_IN_PENDING_STATUS.includes(route)) {
      throw new PendingCompanyError();
    }
    if (currentCompany.isRejected() && !AVAILABLE_ROUTES_IN_REJECTED_STATUS.includes(route)) {
      throw new RejectedCompanyError();
    }
  }
};
