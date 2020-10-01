import { Home } from "./Home";
import { Applicants } from "./Applicants";
import { Companies } from "./Companies";
import { Admins } from "./Admins";
import { Offers } from "./Offers";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  admins,
  applicants,
  companies,
  home,
  offers
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: admins(), component: Admins },
  { path: applicants(), component: Applicants },
  { path: companies(), component: Companies },
  { path: home(), component: Home },
  { path: offers(), component: Offers }
];
