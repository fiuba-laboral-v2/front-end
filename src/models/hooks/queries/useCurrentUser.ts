import { useQuery } from "$hooks";
import { GET_CURRENT_USER } from "$queries";
import { CurrentUser, TGenericCurrentUser } from "$models/CurrentUser";
import { ICurrentCompanyAttributes } from "$models/CurrentCompany";

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
  { userUuid: string; },
  { uuid: string; },
  ICurrentCompanyAttributes
>;
