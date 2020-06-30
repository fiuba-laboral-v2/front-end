import { INavBarTranslations } from "$components/NavBar/interface";
import { PendingCompanyError, RejectedCompanyError } from "../Errors";
import { TCurrentUser } from "../CurrentUser";
import { Permissions } from "../Permissions";
import { RejectedApplicantError } from "../Errors/RejectedApplicantError";
import { PendingApplicantError } from "../Errors/PendingApplicantError";

export const getTooltipMessage = (
  currentUser: TCurrentUser,
  translations: INavBarTranslations,
  route: string
) => {
  try {
    Permissions.check(currentUser, route);
  } catch (error) {
    if (error instanceof RejectedCompanyError) return translations.rejectedProfile;
    if (error instanceof PendingCompanyError) return translations.pendingProfile;
    if (error instanceof RejectedApplicantError) return translations.rejectedProfile;
    if (error instanceof PendingApplicantError) return translations.pendingProfile;
  }
};
