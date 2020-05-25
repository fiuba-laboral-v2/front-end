import { SignUp } from "./SignUp";
import { Profile } from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { List } from "./List";
import { Home } from "./Home";
import { OfferDetail } from "./OfferDetail";
import { CompanyProfile } from "./Company";
import { Companies } from "./Companies";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  offerList,
  list,
  signUp,
  myProfile,
  edit,
  offerDetail,
  companyProfile,
  companies
} = RoutesBuilder.applicant;

export const ApplicantRoutes = [
  { path: offerList, component: Home },
  { path: list, component: List },
  { path: signUp, component: SignUp, public: true },
  { path: myProfile, component: Profile },
  { path: edit(":id"), component: EditableProfile },
  { path: offerDetail(":id"), component: OfferDetail },
  { path: companyProfile(":id"), component: CompanyProfile },
  { path: companies, component: Companies }
];
