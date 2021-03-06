import { useQuery } from "$hooks";
import { GET_MY_COMPANY_PROFILE } from "$queries";
import { ICompany } from "$interfaces/Company";
import { RoutesBuilder } from "../../RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useMyCompanyProfile = () => {
  const history = useHistory();
  return useQuery<{}, { getCurrentUser: { company: ICompany } }>(GET_MY_COMPANY_PROFILE, {
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  }).data?.getCurrentUser.company;
};
