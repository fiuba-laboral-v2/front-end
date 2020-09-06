import { Home } from "./Home";
import { ApplicantSearch } from "./ApplicantSearch";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  home,
  applicantSearch
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: home(), component: Home },
  { path: applicantSearch(), component: ApplicantSearch }
];
