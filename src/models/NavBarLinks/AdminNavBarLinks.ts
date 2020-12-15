import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interfaces";
import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";

const {
  home,
  applicants,
  companies,
  admins,
  offers,
  jobApplications,
  notifications
} = RoutesBuilder.admin;

export const AdminNavBarLinks = {
  create: (translations: INavBarTranslations): INavBarLink[] => [
    {
      path: home(),
      title: translations.tasks,
      icon: HomeIcon
    },
    {
      path: applicants(),
      title: translations.applicants,
      icon: SchoolIcon
    },
    {
      path: companies(),
      title: translations.companies,
      icon: BusinessIcon
    },
    {
      path: admins(),
      title: translations.admins,
      icon: SupervisedUserCircleIcon
    },
    {
      path: offers(),
      title: translations.jobOffers,
      icon: LibraryBooksIcon
    },
    {
      path: jobApplications(),
      title: translations.jobApplications,
      icon: PersonAddIcon
    },
    {
      path: notifications(),
      title: translations.notifications,
      icon: NotificationsIcon
    }
  ]
};
