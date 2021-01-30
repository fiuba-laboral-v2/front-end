import { TCurrentUser } from "$models/CurrentUser";
import { CompanyNavBarLinks } from "./CompanyNavBarLinks";
import { ApplicantNavBarLinks } from "./ApplicantNavBarLinks";
import { AdminNavBarLinks } from "./AdminNavBarLinks";
import { INavBarTranslations } from "$components/NavBar/interfaces";

export const NavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations, currentRoute: string) => {
    const currentRole = currentUser.getCurrentRole(currentRoute);
    if (currentRole.isCompanyRole()) return CompanyNavBarLinks.create(currentUser, translations);
    if (currentRole.isApplicantRole()) {
      return ApplicantNavBarLinks.create(currentUser, translations);
    }
    if (currentRole.isAdminRole()) return AdminNavBarLinks.create(translations);
    return [];
  }
};
