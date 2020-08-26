import { useQuery } from "$hooks";
import { GET_CURRENT_USER } from "$queries";
import { CurrentUser, TGenericCurrentUser } from "$models/CurrentUser";
import { ICurrentCompanyAttributes } from "$models/CurrentCompany";
import { TCurrentApplicantAttributes } from "$models/CurrentApplicant";
import { TCurrentAdminAttributes } from "$models/CurrentAdmin";

export const useCurrentUser = () => {
  const response = useQuery<{}, IUseCurrentUser>(GET_CURRENT_USER);

  return {
    ...response,
    data: {
      getCurrentUser: response.data?.getCurrentUser && CurrentUser(response.data?.getCurrentUser)
    }
  };
};

export interface IUseCurrentUser {
  getCurrentUser: TCurrentUserAttributes | undefined;
}

export type TCurrentUserAttributes = TGenericCurrentUser<
  TCurrentAdminAttributes,
  TCurrentApplicantAttributes,
  ICurrentCompanyAttributes
>;
