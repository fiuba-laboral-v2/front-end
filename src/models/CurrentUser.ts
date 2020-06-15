import { UseQueryResult } from "./hooks/useQuery";
import { IUseCurrentUser } from "./hooks/queries/useCurrentUser";
import { ICompany } from "$interfaces/Company";
import { CurrentCompany, Company } from "./CurrentCompany";

export const CurrentUser = (
  currentUserResponse: UseQueryResult<IUseCurrentUser>
): CurrentUser => {
  const currentUser: CurrentUser = {
    ...currentUserResponse,
    isCompany: () => !!currentUser.data?.getCurrentUser?.company,
    isApplicant: () => !!currentUser.data?.getCurrentUser?.applicant,
    isAdmin: () => !!currentUser.data?.getCurrentUser?.admin,
    company: () => CurrentCompany(currentUser.data?.getCurrentUser?.company as ICompany)
  };
  return currentUser;
};

interface ICurrentUser {
  isCompany: () => boolean;
  isApplicant: () => boolean;
  isAdmin: () => boolean;
  company: () => Company;
}

export type CurrentUser = UseQueryResult<IUseCurrentUser> & ICurrentUser;
