import { useQuery } from "$hooks";
import { GET_CAPABILITIES } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICapability } from "$interfaces/Capability";

export const useCapabilities = () => {
  const history = useHistory();
  return useQuery<{}, { getCapabilities: ICapability[] }>(GET_CAPABILITIES, {
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  });
};
