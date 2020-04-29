import { useQuery } from "$hooks/useQuery";
import { GET_TRANSLATIONS } from "$queries";

type UseTranslationsResult<T> =
  ILoadingTranslations | ISuccessfulTranslations<T>;

type ILoadingTranslations = {
  data: undefined;
  error: undefined;
  loading: true;
};

type ISuccessfulTranslations<T> = {
  data: T;
  error: undefined;
  loading: false;
};

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

const useTranslations = <T, >(translationGroup: string): UseTranslationsResult<T> => {
  let anErrorHasOccurred = false;
  const { data, loading } = useQuery(
    GET_TRANSLATIONS,
    { variables: { translationGroup } },
    {
      MissingTranslationError: () => {
        alert("Un error inesperado ha ocurrido");
        anErrorHasOccurred = true;
      }
    }
  );

  if (anErrorHasOccurred) return { data: {} as T, loading: false } as UseTranslationsResult<T>;

  return {
    ...(data && { data: translationMapper<T>(data) }),
    loading
  } as UseTranslationsResult<T>;
};

export { useTranslations };
