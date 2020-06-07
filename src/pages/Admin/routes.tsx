import { Home } from "./Home";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  home
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: home(), component: Home }
];
