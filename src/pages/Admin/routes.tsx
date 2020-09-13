import { Home } from "./Home";
import { Applicants } from "./Applicants";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  home,
  applicants
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: home(), component: Home },
  { path: applicants(), component: Applicants }
];
