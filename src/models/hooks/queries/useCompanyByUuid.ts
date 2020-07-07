import { useQuery } from "$hooks";
import { GET_COMPANY_BY_UUID } from "$queries";
import { GET_COMPANY_BY_UUID_WITH_USERS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICompany } from "$interfaces/Company";

export const useCompanyByUuid = (
  {
    uuid,
    withUsers
  }: IUseCompanyByUuid = { withUsers: false }
) => {
  const history = useHistory();
  const query = withUsers ? GET_COMPANY_BY_UUID_WITH_USERS : GET_COMPANY_BY_UUID;
  return useQuery<{}, { getCompanyByUuid: ICompany }>(
    query,
    {
      variables: { uuid },
      errorHandlers: {
        CompanyNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};

interface IUseCompanyByUuid {
  uuid?: string;
  withUsers?: boolean;
}
