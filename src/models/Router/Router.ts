import { TCurrentUser } from "../CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { CompanyRouter } from "./CompanyRouter";

export const Router = {
  home: (currentUser: TCurrentUser) => {
    if (currentUser.company) return CompanyRouter.home(currentUser.company);
    if (currentUser.applicant) return RoutesBuilder.applicant.offerList();
    return RoutesBuilder.admin.home();
  }
};
