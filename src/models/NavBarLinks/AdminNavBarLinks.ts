import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interface";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const { home, applicants, companies, admins, offers, jobApplications } = RoutesBuilder.admin;

export const AdminNavBarLinks = {
  create: (translations: INavBarTranslations): INavBarLink[] => [
    {
      path: home(),
      title: translations.tasks,
      icon: FormatListBulletedIcon
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
    }
  ]
};
