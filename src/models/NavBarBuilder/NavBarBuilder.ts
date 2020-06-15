import { ICurrentUser } from "$models/CurrentUser";
import { CompanyNavBarBuilder } from "./CompanyNavBarBuilder";
import { ApplicantNavBarBuilder } from "./ApplicantNavBarBuilder";
import { INavBarTranslations } from "$components/NavBar/interface";

export const NavBarBuilder = {
  getLinks: (currentUser: ICurrentUser, translations: INavBarTranslations) => {
    if (currentUser.company) return CompanyNavBarBuilder.getLinks(currentUser, translations);
    if (currentUser.applicant) return ApplicantNavBarBuilder.getLinks(currentUser, translations);
    return [];
  }
};
