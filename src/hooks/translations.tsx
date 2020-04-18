import { useQuery } from "@apollo/react-hooks";
import { GET_TRANSLATIONS } from "$queries";
import { ApolloError } from "apollo-client";

interface ITranslation {
  key: string;
  value: string;
}

type HookedFuncResult<T> = {
  translations: T | null;
  error: ApolloError | undefined;
  loading: boolean;
};

const translationMapper = (translationsList: ITranslation[]) => {
  const translations: any = {};
  for (const {key, value} of translationsList) {
    translations[`${key}`] = value;
  }
  return translations;
};

const useTranslations = <T,>(path: string): HookedFuncResult<T> => {
  const {
    data: { getTranslations } = { getTranslations: [] } ,
    loading,
    error
  } = useQuery(GET_TRANSLATIONS, {variables: { path }});

  const translations = translationMapper(getTranslations);

  return {translations, loading, error};
};

export { useTranslations };
