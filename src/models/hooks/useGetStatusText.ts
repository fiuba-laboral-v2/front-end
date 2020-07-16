import { useTranslations } from "$hooks";

export const useGetStatusText = ({ translationGroup, withText }: IUseGetStatusText) => {
  const translations = useTranslations<IStatusTranslations>(translationGroup);
  if (!withText) return;
  if (translations.loading || translations.error) return "";
  return translations.data.text;
};

interface IStatusTranslations {
  text: string;
}

interface IUseGetStatusText {
  translationGroup: string;
  withText: boolean;
}
