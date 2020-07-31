import { useTranslations } from "$hooks";

export const useStatusText = ({ translationGroup }: IUseStatusText) => {
  const translations = useTranslations<IStatusTranslations>(translationGroup);
  if (!translations) return "";
  return translations.text;
};

interface IStatusTranslations {
  text: string;
}

interface IUseStatusText {
  translationGroup: string;
}
