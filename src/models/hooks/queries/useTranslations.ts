import { useQuery } from "$hooks";
import { GET_TRANSLATIONS } from "$queries";
import { UseQueryResult } from "../useQuery";

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

const useTranslations = <T, >(translationGroup: string) => {
  const { data, error, loading } = useQuery<{ translationGroup: string }, ITranslationMapperParams>(
    GET_TRANSLATIONS,
    {
      variables: { translationGroup },
      errorHandlers: { MissingTranslationError: () => alert("Un error inesperado ha ocurrido") }
    }
  );

  return {
    ...(data && { data: translationMapper<T>(data) }),
    loading,
    error
  } as UseQueryResult<T>;
};

export { useTranslations };
