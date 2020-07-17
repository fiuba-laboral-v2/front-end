import { useTranslations } from "$hooks";

export const useStatusText = ({ translationGroup, withText }: IUseStatusText) => {
  const translations = useTranslations<IStatusTranslations>(translationGroup, !withText);
  if (!withText) return;
  if (translations.loading || translations.error) return "";
  return translations.data.text;
};

interface IStatusTranslations {
  text: string;
}

interface IUseStatusText {
  translationGroup: string;
  withText: boolean;
}
