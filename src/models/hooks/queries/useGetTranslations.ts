import { useHistory } from "react-router-dom";
import { useQuery } from "$hooks";
import { GET_TRANSLATIONS } from "$queries";
import { useSnackbar } from "notistack";
import { handleGenericError } from "$models/errorHandlers/handleGenericError";
import { RoutesBuilder } from "$models/RoutesBuilder";

export interface ITranslation {
  key: string;
  value: string;
}

interface ITranslationMapperParams {
  getTranslations: ITranslation[] | undefined;
}

export const useGetTranslations = (translationGroup: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const { data } = useQuery<{ translationGroup: string }, ITranslationMapperParams>(
    GET_TRANSLATIONS,
    {
      variables: { translationGroup },
      errorHandlers: {
        MissingTranslationError: handleGenericError({ enqueueSnackbar }),
        defaultHandler: () => {
          handleGenericError({ enqueueSnackbar })();
          history.push(RoutesBuilder.public.internalServerError());
        }
      }
    }
  );

  return data && data.getTranslations;
};
