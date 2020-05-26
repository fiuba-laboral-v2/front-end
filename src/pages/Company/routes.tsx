import { Profile } from "./Profile";
import { SignUp } from "./SignUp";
import { CreateOffer } from "./CreateOffer";
import { OfferDetail } from "./OfferDetail";
import { MyJobApplications } from "./MyJobApplications";
import { Applicant } from "./Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  signUp,
  createOffer,
  offer,
  jobApplications,
  myProfile,
  applicantDetail
} = RoutesBuilder.company;

export const CompanyRoutes = [
  { path: signUp(), component: SignUp, public: true },
  { path: createOffer(), component: CreateOffer },
  { path: offer(":uuid"), component: OfferDetail },
  { path: jobApplications(), component: MyJobApplications },
  { path: myProfile(), component: Profile },
  { path: applicantDetail(":uuid"), component: Applicant }
];
