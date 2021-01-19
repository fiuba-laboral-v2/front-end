import { useHistory } from "react-router-dom";
import { useQuery, useShowError } from "$hooks";
import { GET_TRANSLATIONS } from "$queries";
import { handleGenericError } from "$models/errorHandlers";
import { RoutesBuilder } from "$models/RoutesBuilder";

interface ITranslationResponse<T> {
  getTranslations: T | undefined;
}

export const useTranslations = <T>(translationGroup: string) => {
  const showError = useShowError();
  const history = useHistory();
  return useQuery<{ translationGroup: string }, ITranslationResponse<T>>(GET_TRANSLATIONS, {
    variables: { translationGroup },
    errorHandlers: {
      MissingTranslationError: handleGenericError(showError),
      defaultHandler: () => {
        handleGenericError(showError)();
        history.push(RoutesBuilder.public.internalServerError());
      }
    }
  }).data?.getTranslations;
};
