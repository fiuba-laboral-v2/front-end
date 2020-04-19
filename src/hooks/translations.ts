import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { ApolloError } from "apollo-client";

interface ITranslation {
  key: string;
  value: string;
}

type ErrorTranslationsResult = {
  data: undefined;
  error: ApolloError;
  loading: false;
};

type LoadingTranslationsResult = {
  data: undefined;
  error: undefined;
  loading: true;
};

type TranslationsResult<Translations> = {
  data: Translations;
  error: undefined;
  loading: false;
};

const translationMapper = <Translations>(translationsList: ITranslation[]) => {
  const translations: any = {};
  for (const { key, value } of translationsList) {
    translations[key] = value;
  }
  return translations as Translations;
};

const useTranslations = <Translations>(path: string) => {
  const { data, error } = useQuery<{ getTranslations: ITranslation[] }>(
    GET_TRANSLATIONS, { variables: { path } }
  );

  if (data) {
    return {
      data: translationMapper<Translations>(data.getTranslations),
      loading: false,
      error: undefined
    } as TranslationsResult<Translations>;
  } else if (error) {
    return {
      data: undefined,
      loading: false,
      error: error
    } as ErrorTranslationsResult;
  }
  return {
    data: undefined,
    loading: true,
    error: undefined
  } as LoadingTranslationsResult;
};

export { useTranslations };
