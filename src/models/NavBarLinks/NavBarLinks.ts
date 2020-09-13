import { TCurrentUser } from "$models/CurrentUser";
import { CompanyNavBarLinks } from "./CompanyNavBarLinks";
import { ApplicantNavBarLinks } from "./ApplicantNavBarLinks";
import { AdminNavBarLinks } from "./AdminNavBarLinks";
import { INavBarTranslations } from "$components/NavBar/interface";

export const NavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations) => {
    if (currentUser.company) return CompanyNavBarLinks.create(currentUser, translations);
    if (currentUser.applicant) return ApplicantNavBarLinks.create(currentUser, translations);
    if (currentUser.admin) return AdminNavBarLinks.create(translations);
    return [];
  }
};
