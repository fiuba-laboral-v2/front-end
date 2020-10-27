import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { List } from "./List";
import { Home } from "./Home";
import { OfferDetail } from "./OfferDetail";
import { CompanyProfile } from "./Company";
import { Companies } from "./Companies";
import { RoutesBuilder } from "$models/RoutesBuilder";
import React from "react";

const {
  offerList,
  list,
  signUp,
  login,
  myProfile,
  editMyProfile,
  offerDetail,
  companyProfile,
  companies
} = RoutesBuilder.applicant;

export const ApplicantRoutes = [
  {
    path: offerList(),
    component: (props: { location: Location }) => <Home searchQuery={props.location.search} />
  },
  { path: list(), component: List },
  { path: signUp(), component: SignUp, public: true },
  { path: login(), component: Login, public: true },
  { path: myProfile(), component: Profile },
  { path: editMyProfile(), component: EditableProfile },
  { path: offerDetail(":uuid"), component: OfferDetail },
  { path: companyProfile(":uuid"), component: CompanyProfile },
  { path: companies(), component: Companies }
];
