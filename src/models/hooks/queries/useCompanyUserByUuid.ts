import { useQuery } from "$hooks";
import { useHistory } from "react-router-dom";
import { GET_COMPANY_USER_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ICompanyUser } from "$interfaces/CompanyUser";

export const useCompanyUserByUuid = (uuid: string) => {
  const history = useHistory();
  return useQuery<IVariables, IResponse>(GET_COMPANY_USER_BY_UUID, {
    variables: { uuid },
    errorHandlers: {
      UnauthorizedError: () => history.push(RoutesBuilder.public.forbidden()),
      CompanyUserNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.data?.getCompanyUserByUuid;
};

interface IVariables {
  uuid: string;
}

interface IResponse {
  getCompanyUserByUuid: ICompanyUser;
}
