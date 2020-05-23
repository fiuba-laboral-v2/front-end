import { Profile } from "./Profile";
import { List } from "./List";
import { SignUp } from "./SignUp";
import { CreateOffer } from "./CreateOffer";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  list,
  signUp,
  createOffer,
  detail
} = RoutesBuilder.company;

export const CompanyRoutes = [
  { path: list, component: List },
  { path: signUp, component: SignUp },
  { path: createOffer, component: CreateOffer },
  { path: detail(":id"), component: Profile }
];
