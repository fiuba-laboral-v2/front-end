import { Profile } from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { CreateOffer } from "./CreateOffer";
import { OfferDetail } from "./OfferDetail";
import { MyOffers } from "./MyOffers";
import { MyJobApplications } from "./MyJobApplications";
import { Applicant } from "./Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditOffer } from "./EditOffer";

const {
  signUp,
  login,
  createOffer,
  editOffer,
  offer,
  myOffers,
  jobApplications,
  myProfile,
  editMyProfile,
  applicantDetail
} = RoutesBuilder.company;

export const CompanyRoutes = [
  { path: signUp(), component: SignUp, public: true },
  { path: login(), component: LogIn, public: true },
  { path: myOffers(), component: MyOffers },
  { path: createOffer(), component: CreateOffer },
  { path: editOffer(":uuid"), component: EditOffer },
  { path: offer(":uuid"), component: OfferDetail },
  { path: jobApplications(), component: MyJobApplications },
  { path: myProfile(), component: Profile },
  { path: editMyProfile(), component: EditableProfile },
  { path: applicantDetail(":uuid"), component: Applicant }
];
