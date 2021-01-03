import { useQuery } from "$hooks";
import { GET_MY_COMPANY_USER } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICompanyUser } from "$interfaces/CompanyUser";

export const useMyCompanyUser = () => {
  const history = useHistory();
  const result = useQuery<{}, { getMyCompanyUser: ICompanyUser }>(GET_MY_COMPANY_USER, {
    errorHandlers: {
      UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  });
  return result.data?.getMyCompanyUser;
};
