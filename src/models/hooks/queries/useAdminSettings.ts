import { useQuery } from "$hooks";
import { GET_ADMIN_SETTINGS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IAdminSettings } from "$interfaces/AdminSettings";

export const useAdminSettings = () => {
  const history = useHistory();
  return useQuery<{}, { getAdminSettings: IAdminSettings }>({
    query: GET_ADMIN_SETTINGS,
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.getAdminSettings;
};
