import { useQuery } from "$hooks";
import { GET_ADMIN_SETTINGS_TRANSLATIONS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useAdminSettingsTranslations = () => {
  const history = useHistory();
  return useQuery<{}, { getAdminSettingsTranslations: IAdminSettingsTranslations }>({
    query: GET_ADMIN_SETTINGS_TRANSLATIONS,
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.getAdminSettingsTranslations;
};

interface IAdminSettingsTranslations {
  companySignUpAcceptanceCriteria: string;
  companyEditableAcceptanceCriteria: string;
  editOfferAcceptanceCriteria: string;
}
