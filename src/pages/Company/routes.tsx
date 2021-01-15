import React from "react";
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
import { EditPassword } from "./EditPassword";
import { EditMyForgottenPassword } from "./EditMyForgottenPassword";
import { PasswordRecovery } from "./PasswordRecovery";
import { PasswordRecoveryExplanation } from "./PasswordRecoveryExplanation";
import { EditCriticalAttributes } from "./EditCriticalAttributes";
import { EditCompanyUser } from "./EditCompanyUser";
import { DeleteCompanyUser } from "./DeleteCompanyUser";

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
  createUser,
  editPassword,
  editMyForgottenPassword,
  passwordRecovery,
  passwordRecoveryExplanation,
  editUser,
  editCriticalAttributes,
  deleteUser
} = RoutesBuilder.company;

export const CompanyRoutes = [
  { path: signUp(), component: SignUp, public: true },
  { path: login(), component: Login, public: true },
  {
    path: myOffers(),
    component: (props: { location: Location }) => <MyOffers searchQuery={props.location.search} />
  },
  { path: createOffer(), component: CreateOffer },
  { path: editOffer(":uuid"), component: EditOffer },
  { path: offer(":uuid"), component: OfferDetail },
  { path: jobApplications(), component: MyJobApplications },
  { path: myProfile(), component: Profile },
  { path: editMyProfile(), component: EditableProfile },
  { path: applicantDetail(":uuid"), component: Applicant },
  { path: notifications(), component: Notifications },
  { path: users(), component: CompanyUsers },
  { path: createUser(), component: AddCompanyUser },
  { path: editUser(), component: EditCompanyUser },
  { path: deleteUser(":uuid"), component: DeleteCompanyUser },
  { path: editPassword(), component: EditPassword },
  { path: editCriticalAttributes(), component: EditCriticalAttributes },
  { path: passwordRecovery(), component: PasswordRecovery, public: true },
  { path: passwordRecoveryExplanation(), component: PasswordRecoveryExplanation, public: true },
  {
    path: editMyForgottenPassword(),
    component: (props: { location: Location }) => (
      <EditMyForgottenPassword searchQuery={props.location.search} />
    ),
    public: true
  }
];
