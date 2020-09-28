import { Home } from "./Home";
import { Applicants } from "./Applicants";
import { Companies } from "./Companies";
import { Admins } from "./Admins";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  home,
  applicants,
  companies,
  admins
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: home(), component: Home },
  { path: applicants(), component: Applicants },
  { path: companies(), component: Companies },
  { path: admins(), component: Admins }
];
