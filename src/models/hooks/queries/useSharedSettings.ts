import { useQuery } from "$hooks";
import { GET_SHARED_SETTINGS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useSharedSettings = () => {
  const history = useHistory();
  return useQuery<{}, { getSharedSettings: ISharedSettings }>({
    query: GET_SHARED_SETTINGS,
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.getSharedSettings;
};

interface ISharedSettings {
  companySignUpAcceptanceCriteria: string;
  companyEditableAcceptanceCriteria: string;
  editOfferAcceptanceCriteria: string;
}
