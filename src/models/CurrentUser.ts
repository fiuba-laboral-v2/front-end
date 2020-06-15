import { UseCurrentUser } from "./hooks/queries/useCurrentUser";
import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";
import { CurrentCompany, Company } from "./CurrentCompany";

export const CurrentUser = (attributes?: UseCurrentUser): CurrentUser | undefined => {
  if (!attributes) return;

  return {
    ...attributes,
    isCompany: () => !!attributes.company,
    isApplicant: () => !!attributes.applicant,
    isAdmin: () => !!attributes.admin,
    company: () => CurrentCompany(attributes.company as ICompany)
  };
};

interface ICurrentUser {
  isCompany: () => boolean;
  isApplicant: () => boolean;
  isAdmin: () => boolean;
  company: () => Company;
}

export type CurrentUser = IUser & ICurrentUser;
