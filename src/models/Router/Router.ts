import { TCurrentUser } from "../CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { CompanyRouter } from "./CompanyRouter";
import { ApplicantRouter } from "./ApplicantRouter";

export const Router = {
  home: (currentUser: TCurrentUser, currentRoute: string) => {
    const currentRole = currentUser.getCurrentRole(currentRoute);
    if (currentRole.isCompanyRole() && currentUser.company) {
      return CompanyRouter.home(currentUser.company);
    }
    if (currentRole.isApplicantRole() && currentUser.applicant) {
      return ApplicantRouter.home(currentUser.applicant);
    }
    return RoutesBuilder.admin.home();
  }
};
