import { IUser } from "$interfaces/User";
import { CurrentCompany, ICurrentCompany } from "./CurrentCompany";
import { TCurrentUserAttributes } from "./hooks/queries";
import { CurrentApplicant, TCurrentApplicant } from "./CurrentApplicant";
import { CurrentAdmin, TCurrentAdmin } from "./CurrentAdmin";
import { Role } from "./Role";
import { RoleName, SessionStorageRepository } from "./Repositories";

export const CurrentUser = (attributes: TCurrentUserAttributes): TCurrentUser => {
  const currentUser = {
    ...attributes,
    admin: attributes.admin && CurrentAdmin(attributes.admin),
    company: attributes.company && CurrentCompany(attributes.company),
    applicant: attributes.applicant && CurrentApplicant(attributes.applicant),
    getCurrentRole: () => {
      try {
        return SessionStorageRepository.getCurrentRole();
      } catch (e) {
        let currentRole: RoleName = RoleName.Applicant;
        if (currentUser.admin) currentRole = RoleName.Admin;
        if (currentUser.company) currentRole = RoleName.Company;
        const role = new Role(currentRole);
        SessionStorageRepository.saveCurrentRole(role);
        return role;
      }
    }
  };
  return currentUser;
};

export type TCurrentUser = TGenericCurrentUser<
  TCurrentAdmin,
  TCurrentApplicant,
  ICurrentCompany
> & {
  getCurrentRole: () => Role;
};

export type TGenericCurrentUser<TAdmin, TApplicant, TCompany> = IUser & {
  admin?: TAdmin;
  company?: TCompany;
  applicant?: TApplicant;
};
