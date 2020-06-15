import { ICurrentUser } from "$models/CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { Permissions } from "../Permissions";
import { getTooltipMessage } from "./getTooltipMessage";
import { INavBarTranslations } from "$components/NavBar/interface";
import { INavBarLink } from "./Interfaces";

export const CompanyNavBarBuilder = {
  getLinks: (currentUser: ICurrentUser, translations: INavBarTranslations): INavBarLink[] => {
    const { jobApplications, createOffer, myOffers, myProfile } = RoutesBuilder.company;
    const { getAccessError } = Permissions;
    return [
      {
        path: jobApplications(),
        title: translations.jobApplications,
        tooltipMessage: getTooltipMessage(
          translations,
          getAccessError(currentUser, jobApplications())
        )
      },
      {
        path: createOffer(),
        title: translations.createOffer,
        tooltipMessage: getTooltipMessage(translations, getAccessError(currentUser, createOffer()))
      },
      {
        path: myOffers(),
        title: translations.myOffers,
        tooltipMessage: getTooltipMessage(translations, getAccessError(currentUser, myOffers()))
      },
      {
        path: myProfile(),
        title: translations.myCompanyProfile,
        tooltipMessage: getTooltipMessage(translations, getAccessError(currentUser, myProfile()))
      }
    ];
  }
};
