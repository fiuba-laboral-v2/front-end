import { TCurrentUser } from "../CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { CompanyRouter } from "./CompanyRouter";
import { ApplicantRouter } from "./ApplicantRouter";

export const Router = {
  home: (currentUser: TCurrentUser) => {
    if (currentUser.company) return CompanyRouter.home(currentUser.company);
    if (currentUser.applicant) return ApplicantRouter.home(currentUser.applicant);
    return RoutesBuilder.admin.home();
  }
};
