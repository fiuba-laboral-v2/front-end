import { useTranslations } from "$hooks";

export const useStatusText = ({ translationGroup }: IUseStatusText) => {
  const translations = useTranslations<IStatusTranslations>(translationGroup);
  if (translations.loading || translations.error) return "";
  return translations.data.text;
};

interface IStatusTranslations {
  text: string;
}

interface IUseStatusText {
  translationGroup: string;
}
