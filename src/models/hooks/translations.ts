import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { ApolloError } from "apollo-client";

type UseTranslationsResult<T> =
  ILoadingTranslations | IErroredTranslations | ISuccessfulTranslations<T>;

type ILoadingTranslations = {
  data: undefined;
  error: undefined;
  loading: true;
};

type IErroredTranslations = {
  data: undefined;
  error: ApolloError;
  loading: false;
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
  const {
    data,
    loading,
    error
  } = useQuery(GET_TRANSLATIONS, { variables: { translationGroup } });

  return {
    ...(data && { data: translationMapper<T>(data) }),
    loading,
    error
  } as UseTranslationsResult<T>;
};

export { useTranslations };
