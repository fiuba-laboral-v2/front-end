import { Profile } from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { CreateOffer } from "./CreateOffer";
import { OfferDetail } from "./OfferDetail";
import { MyOffers } from "./MyOffers";
import { MyJobApplications } from "./MyJobApplications";
import { Applicant } from "./Applicant";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditOffer } from "./EditOffer";
import { Notifications } from "./Notifications";
import { CompanyUsers } from "./CompanyUsers";
import { AddCompanyUser } from "./AddCompanyUser";

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
  applicantDetail,
  notifications,
  users,
  createUser
} = RoutesBuilder.company;

export const CompanyRoutes = [
  { path: signUp(), component: SignUp, public: true },
  { path: login(), component: Login, public: true },
  { path: myOffers(), component: MyOffers },
  { path: createOffer(), component: CreateOffer },
  { path: editOffer(":uuid"), component: EditOffer },
  { path: offer(":uuid"), component: OfferDetail },
  { path: jobApplications(), component: MyJobApplications },
  { path: myProfile(), component: Profile },
  { path: editMyProfile(), component: EditableProfile },
  { path: applicantDetail(":uuid"), component: Applicant },
  { path: notifications(), component: Notifications },
  { path: users(), component: CompanyUsers },
  { path: createUser(), component: AddCompanyUser }
];
