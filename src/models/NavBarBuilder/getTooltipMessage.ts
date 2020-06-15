import { INavBarTranslations } from "$components/NavBar/interface";

export const getTooltipMessage = (
  translations: INavBarTranslations,
  translationKey?: "pendingProfile" | "rejectedProfile"
) => translationKey && translations[translationKey];
