import { useQuery } from "$hooks";
import { GET_COMPANIES } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICompany } from "$interfaces/Company";

export const useCompanies = () => {
  const history = useHistory();
  return useQuery<{}, { getCompanies: ICompany[] }>(
    GET_COMPANIES,
    {
      errorHandlers: {
        defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
      }
    }
  );
};
