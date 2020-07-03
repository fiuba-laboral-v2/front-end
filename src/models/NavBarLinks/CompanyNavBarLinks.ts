import { TCurrentUser } from "$models/CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { getTooltipMessage } from "./getTooltipMessage";
import { INavBarTranslations } from "$components/NavBar/interface";
import { INavBarLink } from "./Interfaces";

const { jobApplications, createOffer, myOffers, myProfile } = RoutesBuilder.company;

export const CompanyNavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations): INavBarLink[] => [
    {
      path: jobApplications(),
      title: translations.jobApplications,
      tooltipMessage: getTooltipMessage(currentUser, translations, jobApplications())
    },
    {
      path: createOffer(),
      title: translations.createOffer,
      tooltipMessage: getTooltipMessage(currentUser, translations, createOffer())
    },
    {
      path: myOffers(),
      title: translations.myOffers,
      tooltipMessage: getTooltipMessage(currentUser, translations, myOffers())
    },
    {
      path: myProfile(),
      title: translations.myCompanyProfile,
      tooltipMessage: getTooltipMessage(currentUser, translations, myProfile())
    }
  ]
};
