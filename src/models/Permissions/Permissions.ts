import { TCurrentUser } from "../CurrentUser";
import { CompanyPermissions } from "./CompanyPermissions";

export const Permissions = {
  check: (currentUser: TCurrentUser, route: string) => {
    if (currentUser.company) return CompanyPermissions.check(currentUser.company, route);
  }
};
