import { useQuery } from "$hooks";
import { GET_TRANSLATIONS } from "$queries";
import { useSnackbar } from "notistack";
import { handleGenericError } from "$models/errorHandlers/handleGenericError";

interface ITranslation {
  key: string;
  value: string;
}

interface ITranslationMapperParams {
  getTranslations: ITranslation[] | undefined;
}

const translationMapper = <T, >({ getTranslations }: ITranslationMapperParams): T | undefined => {
  const translations: any = {};
  if (getTranslations) {
    for (const { key, value } of getTranslations) {
      translations[`${key}`] = value;
    }

    return translations;
  }
};

export const useTranslations = <T, >(translationGroup: string) => {
  const { enqueueSnackbar } = useSnackbar();
  const { data } = useQuery<{ translationGroup: string }, ITranslationMapperParams>(
    GET_TRANSLATIONS,
    {
      variables: { translationGroup },
      errorHandlers: {
        MissingTranslationError: handleGenericError({ enqueueSnackbar }),
        defaultHandler: handleGenericError({ enqueueSnackbar })
      }
    }
  );
  return data && translationMapper<T>(data);
};
