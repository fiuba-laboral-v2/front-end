import { Profile } from "./Profile";
import { List } from "./List";
import { SignUp } from "./SignUp";
import { CreateOffer } from "./CreateOffer";
import { MyJobApplications } from "./MyJobApplications";
import { Applicant } from "./Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  list,
  signUp,
  createOffer,
  jobApplications,
  detail,
  applicantDetail
} = RoutesBuilder.company;

export const CompanyRoutes = [
  { path: list, component: List },
  { path: signUp, component: SignUp, public: true },
  { path: createOffer, component: CreateOffer },
  { path: jobApplications, component: MyJobApplications },
  { path: detail(":id"), component: Profile },
  { path: applicantDetail(":id"), component: Applicant }
];
