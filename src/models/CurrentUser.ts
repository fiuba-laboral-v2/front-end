import { IUser } from "$interfaces/User";
import { CurrentCompany, ICurrentCompany } from "./CurrentCompany";
import { TCurrentUserAttributes } from "./hooks/queries";
import { CurrentApplicant, TCurrentApplicant } from "./CurrentApplicant";
import { CurrentAdmin, TCurrentAdmin } from "./CurrentAdmin";
import { Role } from "./Role";
import { RoleName } from "./Repositories";
import { adminRoutePrefix, applicantRoutePrefix } from "./RoutesBuilder";

export const CurrentUser = (attributes: TCurrentUserAttributes): TCurrentUser => {
  const currentUser = {
    ...attributes,
    admin: attributes.admin && CurrentAdmin(attributes.admin),
    company: attributes.company && CurrentCompany(attributes.company),
    applicant: attributes.applicant && CurrentApplicant(attributes.applicant),
    getCurrentRole: (currentRoute: string) => {
      if (currentUser.company) return new Role(RoleName.Company);
      if (currentUser.admin && !currentUser.applicant) return new Role(RoleName.Admin);
      if (currentUser.applicant && !currentUser.admin) return new Role(RoleName.Applicant);

      const routeRole = currentRoute.split("/")[1];
      if (routeRole === adminRoutePrefix) return new Role(RoleName.Admin);
      if (routeRole === applicantRoutePrefix) return new Role(RoleName.Applicant);
      return new Role(RoleName.Admin);
    }
  };
  return currentUser;
};

export type TCurrentUser = TGenericCurrentUser<
  TCurrentAdmin,
  TCurrentApplicant,
  ICurrentCompany
> & {
  getCurrentRole: (currentRoute: string) => Role;
};

export type TGenericCurrentUser<TAdmin, TApplicant, TCompany> = IUser & {
  admin?: TAdmin;
  company?: TCompany;
  applicant?: TApplicant;
};
