import { useAdvancedQuery } from "$hooks";
import { GET_CURRENT_USER } from "$queries";
import { CurrentUser, TGenericCurrentUser } from "$models/CurrentUser";
import { ICurrentCompanyAttributes } from "$models/CurrentCompany";
import { TCurrentApplicantAttributes } from "$models/CurrentApplicant";
import { TCurrentAdminAttributes } from "$models/CurrentAdmin";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useCurrentUser = () => {
  const history = useHistory();
  const response = useAdvancedQuery<{}, IUseCurrentUser>(GET_CURRENT_USER, {
    errorHandlers: {
      UserNotFoundError: () => history.push(RoutesBuilder.public.login()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  });
  const currentUser = response.data?.getCurrentUser;
  return {
    ...response,
    data: { getCurrentUser: currentUser && CurrentUser(currentUser) }
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
