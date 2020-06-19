import { TCurrentUser } from "../CurrentUser";
import { CompanyPermissions } from "./CompanyPermissions";

export const Permissions = {
  canAccess: (currentUser: TCurrentUser, route: string) => {
    if (currentUser.company) return CompanyPermissions.canAccess(currentUser.company, route);

    return true;
  },
  getAccessError: (currentUser: TCurrentUser, route: string) => {
    if (Permissions.canAccess(currentUser, route)) return;
    if (currentUser.company) return CompanyPermissions.getAccessError(currentUser.company);
  }
};
