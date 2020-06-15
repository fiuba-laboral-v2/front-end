import { ICurrentUser } from "../CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { CompanyRouter } from "./CompanyRouter";

export const Router = {
  getHomeRoute: (currentUser: ICurrentUser) => {
    if (currentUser.company) return CompanyRouter.getHomeRoute(currentUser.company);
    if (currentUser.applicant) return RoutesBuilder.applicant.offerList();
    return RoutesBuilder.admin.home();
  }
};
