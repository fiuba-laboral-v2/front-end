import { InternalServerError } from "./InternalServerError";
import { LogIn } from "./LogIn";
import { Register } from "./Register";
import Home from "./Home";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NotFound } from "./NotFound";

const {
  home,
  register,
  login,
  internalServerError,
  notFound
} = RoutesBuilder.public;

export const PublicRoutes = [
  { path: home, component: Home },
  { path: register, component: Register },
  { path: login, component: LogIn },
  { path: internalServerError, component: InternalServerError },
  { path: notFound, component: NotFound }
];
