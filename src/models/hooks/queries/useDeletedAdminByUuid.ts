import { useQuery } from "$hooks";
import { useHistory } from "react-router-dom";
import { GET_DELETED_ADMIN_BY_UUID } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IAdmin } from "$interfaces/Admin";

export const useDeletedAdminByUuid = (uuid: string) => {
  const history = useHistory();
  return useQuery<IVariables, IResponse>(GET_DELETED_ADMIN_BY_UUID, {
    variables: { uuid },
    errorHandlers: {
      AdminNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.data?.getDeletedAdminByUuid;
};

interface IVariables {
  uuid: string;
}

interface IResponse {
  getDeletedAdminByUuid: IAdmin;
}
