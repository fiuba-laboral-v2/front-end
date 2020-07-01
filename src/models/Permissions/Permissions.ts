import { TCurrentUser } from "../CurrentUser";
import { CompanyPermissions } from "./CompanyPermissions";
import { ApplicantPermissions } from "./ApplicantPermissions";

export const Permissions = {
  check: (currentUser: TCurrentUser, route: string) => {
    if (currentUser.company) return CompanyPermissions.check(currentUser.company, route);
    if (currentUser.applicant) return ApplicantPermissions.check(currentUser.applicant, route);
  }
};
