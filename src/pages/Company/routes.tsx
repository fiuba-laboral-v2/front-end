import { Profile } from "./Profile";
import { SignUp } from "./SignUp";
import { CreateOffer } from "./CreateOffer";
import { MyJobApplications } from "./MyJobApplications";
import { Applicant } from "./Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  signUp,
  createOffer,
  jobApplications,
  myProfile,
  applicantDetail
} = RoutesBuilder.company;

export const CompanyRoutes = [
  { path: signUp, component: SignUp },
  { path: createOffer, component: CreateOffer },
  { path: jobApplications, component: MyJobApplications },
  { path: myProfile, component: Profile },
  { path: applicantDetail(":id"), component: Applicant }
];
