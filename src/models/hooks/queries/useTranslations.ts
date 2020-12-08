import { useHistory } from "react-router-dom";
import { useQuery } from "$hooks";
import { GET_TRANSLATIONS } from "$queries";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { handleGenericError } from "$models/errorHandlers/handleGenericError";
import { RoutesBuilder } from "$models/RoutesBuilder";

interface ITranslationResponse<T> {
  getTranslations: T | undefined;
}

export const useTranslations = <T>(translationGroup: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const data = useQuery<{ translationGroup: string }, ITranslationResponse<T>>({
    query: GET_TRANSLATIONS,
    variables: { translationGroup },
    errorHandlers: {
      MissingTranslationError: handleGenericError({ enqueueSnackbar }),
      defaultHandler: () => {
        handleGenericError({ enqueueSnackbar })();
        history.push(RoutesBuilder.public.internalServerError());
      }
    }
  });
  return data?.getTranslations;
};
