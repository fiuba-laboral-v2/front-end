import { SignUp } from "./SignUp";
import { Profile } from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { List } from "./List";
import { Home } from "./Home";
import { OfferDetail } from "./OfferDetail";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  offerList,
  list,
  signUp,
  myProfile,
  edit,
  offerDetail
} = RoutesBuilder.applicant;

export const ApplicantRoutes = [
  { path: offerList, component: Home },
  { path: list, component: List },
  { path: signUp, component: SignUp, public: true },
  { path: myProfile, component: Profile },
  { path: edit(":id"), component: EditableProfile },
  { path: offerDetail(":id"), component: OfferDetail }
];
