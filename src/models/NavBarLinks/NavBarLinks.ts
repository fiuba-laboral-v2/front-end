import { ICurrentUser } from "$models/CurrentUser";
import { CompanyNavBarLinks } from "./CompanyNavBarLinks";
import { ApplicantNavBarLinks } from "./ApplicantNavBarLinks";
import { INavBarTranslations } from "$components/NavBar/interface";

export const NavBarLinks = {
  getLinks: (currentUser: ICurrentUser, translations: INavBarTranslations) => {
    if (currentUser.company) return CompanyNavBarLinks.getLinks(currentUser, translations);
    if (currentUser.applicant) return ApplicantNavBarLinks.getLinks(currentUser, translations);
    return [];
  }
};
