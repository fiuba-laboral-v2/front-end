import { RoutesBuilder } from "../RoutesBuilder";
import { INavBarLink } from "./Interfaces";
import { INavBarTranslations } from "$components/NavBar/interface";

const { home, applicants } = RoutesBuilder.admin;

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
      }
    ]
};
