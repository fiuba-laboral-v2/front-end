import { ICurrentUser } from "$models/CurrentUser";
import { CompanyNavBarLinks } from "./CompanyNavBarLinks";
import { ApplicantNavBarLinks } from "./ApplicantNavBarLinks";
import { INavBarTranslations } from "$components/NavBar/interface";

export const NavBarLinks = {
  create: (currentUser: ICurrentUser, translations: INavBarTranslations) => {
    if (currentUser.company) return CompanyNavBarLinks.create(currentUser, translations);
    if (currentUser.applicant) return ApplicantNavBarLinks.create(currentUser, translations);
    return [];
  }
};
