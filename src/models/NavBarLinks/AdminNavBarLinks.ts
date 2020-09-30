import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interface";

const { home, applicants, companies, admins, offers } = RoutesBuilder.admin;

export const AdminNavBarLinks = {
  create: (translations: INavBarTranslations): INavBarLink[] =>
    [
      {
        path: home(),
        title: translations.tasks
      },
      {
        path: applicants(),
        title: translations.applicants
      },
      {
        path: companies(),
        title: translations.companies
      },
      {
        path: admins(),
        title: translations.admins
      },
      {
        path: offers(),
        title: translations.jobOffers
      }
    ]
};
