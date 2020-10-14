import { TCurrentUser } from "$models/CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interface";
import { getTooltipMessage } from "./getTooltipMessage";

const { offerList, myProfile, companies } = RoutesBuilder.applicant;

export const ApplicantNavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations): INavBarLink[] => [
    {
      path: offerList(),
      title: translations.jobOffers,
      tooltipMessage: getTooltipMessage(currentUser, translations, offerList())
    },
    {
      path: myProfile(),
      title: translations.myProfile,
      tooltipMessage: getTooltipMessage(currentUser, translations, myProfile())
    },
    {
      path: companies(),
      title: translations.companies,
      tooltipMessage: getTooltipMessage(currentUser, translations, companies())
    }
  ]
};
