import { useQuery } from "$hooks";
import { GET_TRANSLATIONS } from "$queries";
import { UseQueryResult } from "../useQuery";
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

export const useTranslations = <T, >(translationGroup: string, skip?: boolean) => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, error, loading } = useQuery<{ translationGroup: string }, ITranslationMapperParams>(
    GET_TRANSLATIONS,
    {
      variables: { translationGroup },
      errorHandlers: {
        MissingTranslationError: () => handleGenericError({ enqueueSnackbar })
      },
      skip
    }
  );

  return {
    ...(data && { data: translationMapper<T>(data) }),
    loading,
    error
  } as UseQueryResult<string, T>;
};
