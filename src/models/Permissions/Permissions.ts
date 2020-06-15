import { ICurrentUser } from "../CurrentUser";
import { CompanyPermissions } from "./CompanyPermissions";

export const Permissions = {
  canAccess: (currentUser: ICurrentUser, route: string) => {
    if (currentUser.company) return CompanyPermissions.canAccess(currentUser.company, route);

    return true;
  },
  getAccessError: (currentUser: ICurrentUser, route: string) => {
    if (Permissions.canAccess(currentUser, route)) return;
    if (currentUser.company) return CompanyPermissions.getAccessError(currentUser.company);
  }
};
