import { TCurrentUser } from "$models/CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interface";

export const ApplicantNavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations): INavBarLink[] =>
    [
      {
        path: RoutesBuilder.applicant.offerList(),
        title: translations.jobOffers
      },
      {
        path: RoutesBuilder.applicant.myProfile(),
        title: translations.myProfile
      },
      {
        path: RoutesBuilder.applicant.companies(),
        title: translations.companies
      }
    ]
};
