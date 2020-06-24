import { useQuery } from "$hooks";
import { GET_COMPANY_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICompany } from "$interfaces/Company";

export const useCompanyByUuid = (uuid?: string) => {
  const history = useHistory();
  return useQuery<{}, { getCompanyByUuid: ICompany }>(
    GET_COMPANY_BY_UUID,
    {
      variables: { uuid },
      errorHandlers: {
        CompanyNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};
