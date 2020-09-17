import { Home } from "./Home";
import { Applicants } from "./Applicants";
import { Companies } from "./Companies";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  home,
  applicants,
  companies
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: home(), component: Home },
  { path: applicants(), component: Applicants },
  { path: companies(), component: Companies }
];
