import { InternalServerError } from "./InternalServerError";
import { LogIn } from "./LogIn";
import { InitialLogin } from "./InitialLogin";
import Home from "./Home";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NotFound } from "./NotFound";
import { Forbidden } from "./Forbidden";

const {
  home,
  register,
  login,
  internalServerError,
  notFound,
  forbidden
} = RoutesBuilder.public;

export const PublicRoutes = [
  { path: home(), component: Home },
  { path: register(), component: InitialLogin },
  { path: login(), component: LogIn },
  { path: internalServerError(), component: InternalServerError },
  { path: notFound(), component: NotFound },
  { path: forbidden(), component: Forbidden }
];
