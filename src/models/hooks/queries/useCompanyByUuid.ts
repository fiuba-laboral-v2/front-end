import { useQuery } from "$hooks";
import { GET_COMPANY_BY_UUID } from "$queries";
import { GET_COMPANY_BY_UUID_WITH_USERS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICompany } from "$interfaces/Company";
import { IUser } from "$interfaces/User";

export const useCompanyByUuid = <T extends IUser | undefined = undefined>({
  uuid,
  withUsers = false
}: IUseCompanyByUuid) => {
  const history = useHistory();
  const node = withUsers ? GET_COMPANY_BY_UUID_WITH_USERS : GET_COMPANY_BY_UUID;
  const options = {
    variables: { uuid },
    errorHandlers: {
      CompanyNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  };

  return useQuery<{}, { getCompanyByUuid: ICompany<T> }>(node, options).data?.getCompanyByUuid;
};

interface IUseCompanyByUuid {
  uuid: string;
  withUsers?: boolean;
}
