import { TCurrentUser } from "$models/CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { getTooltipMessage } from "./getTooltipMessage";
import { INavBarTranslations } from "$components/NavBar/interface";
import { INavBarLink } from "./Interfaces";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import BusinessIcon from "@material-ui/icons/Business";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import NotificationsIcon from "@material-ui/icons/Notifications";

const { jobApplications, createOffer, myOffers, myProfile, notifications } = RoutesBuilder.company;

export const CompanyNavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations): INavBarLink[] => [
    {
      path: jobApplications(),
      title: translations.jobApplications,
      tooltipMessage: getTooltipMessage(currentUser, translations, jobApplications()),
      icon: PersonAddIcon
    },
    {
      path: createOffer(),
      title: translations.createOffer,
      tooltipMessage: getTooltipMessage(currentUser, translations, createOffer()),
      icon: LibraryAddIcon
    },
    {
      path: myOffers(),
      title: translations.myOffers,
      tooltipMessage: getTooltipMessage(currentUser, translations, myOffers()),
      icon: LibraryBooksIcon
    },
    {
      path: myProfile(),
      title: translations.myCompanyProfile,
      tooltipMessage: getTooltipMessage(currentUser, translations, myProfile()),
      icon: BusinessIcon
    },
    {
      path: notifications(),
      title: translations.notifications,
      tooltipMessage: getTooltipMessage(currentUser, translations, notifications()),
      icon: NotificationsIcon
    }
  ]
};
