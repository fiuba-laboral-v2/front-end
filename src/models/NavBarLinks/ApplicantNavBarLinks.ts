import { TCurrentUser } from "$models/CurrentUser";
import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interfaces";
import { getTooltipMessage } from "./getTooltipMessage";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import { NotificationsIcon } from "$components/NotificationsIcon";

const { offerList, myProfile, companies, notifications } = RoutesBuilder.applicant;

export const ApplicantNavBarLinks = {
  create: (currentUser: TCurrentUser, translations: INavBarTranslations): INavBarLink[] => [
    {
      path: offerList(),
      title: translations.jobOffers,
      tooltipMessage: getTooltipMessage(currentUser, translations, offerList()),
      icon: LibraryBooksIcon
    },
    {
      path: myProfile(),
      title: translations.myProfile,
      tooltipMessage: getTooltipMessage(currentUser, translations, myProfile()),
      icon: SchoolIcon
    },
    {
      path: companies(),
      title: translations.companies,
      tooltipMessage: getTooltipMessage(currentUser, translations, companies()),
      icon: BusinessIcon
    },
    {
      path: notifications(),
      title: translations.notifications,
      tooltipMessage: getTooltipMessage(currentUser, translations, companies()),
      icon: NotificationsIcon
    }
  ]
};
