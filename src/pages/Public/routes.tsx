import { InternalServerError } from "./InternalServerError";
import { Login } from "./Login";
import Home from "./Home";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NotFound } from "./NotFound";
import { Forbidden } from "./Forbidden";

const {
  home,
  login,
  internalServerError,
  notFound,
  forbidden
} = RoutesBuilder.public;

export const PublicRoutes = [
  { path: home(), component: Home },
  { path: login(), component: Login },
  { path: internalServerError(), component: InternalServerError },
  { path: notFound(), component: NotFound },
  { path: forbidden(), component: Forbidden }
];
