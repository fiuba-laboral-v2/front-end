import { useGetTranslations, ITranslation } from "./useGetTranslations";

const translationMapper = <T, >(getTranslations: ITranslation[]): T | undefined => {
  const translations: any = {};
  if (getTranslations) {
    for (const { key, value } of getTranslations) {
      translations[`${key}`] = value;
    }

    return translations;
  }
};

export const useTranslations = <T, >(translationGroup: string) => {
  const data = useGetTranslations(translationGroup);

  return data && translationMapper<T>(data);
};
