import { CurrentUser } from "../CurrentUser";
import { CompanyPermissions } from "./CompanyPermissions";

export const Permissions = {
  canAccess: (currentUser: CurrentUser, route: string) => {
    if (currentUser.isCompany()) return CompanyPermissions.canAccess(currentUser.company(), route);

    return true;
  },
  getAccessError: (currentUser: CurrentUser, route: string) => {
    if (Permissions.canAccess(currentUser, route)) return;
    if (currentUser.isCompany()) return CompanyPermissions.getAccessError(currentUser.company());
  }
};
