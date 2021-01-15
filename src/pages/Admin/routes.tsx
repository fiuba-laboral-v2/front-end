import React from "react";
import { Home } from "./Home";
import { Applicants } from "./Applicants";
import { Companies } from "./Companies";
import { Admins } from "./Admins";
import { Offers } from "./Offers";
import { JobApplications } from "./JobApplications";
import { Notifications } from "./Notifications";
import { SignUp } from "./SignUp";
import { Settings } from "./Settings";
import { ApplicantDetail } from "./ApplicantDetail";
import { CompanyDetail } from "./CompanyDetail";
import { CompanyUsers } from "./CompanyUsers";
import { JobApplicationDetail } from "./JobApplicationDetail";
import { OfferDetail } from "./OfferDetail";
import { EditAdmin } from "./EditAdmin";
import { DeactivateAdminAccount } from "./DeactivateAdminAccount";
import { ActivateAdminAccount } from "./ActivateAdminAccount";
import { RoutesBuilder } from "$models/RoutesBuilder";

const {
  admins,
  applicants,
  companies,
  home,
  offers,
  jobApplications,
  notifications,
  signUp,
  settings,
  applicantDetail,
  companyDetail,
  companyUsers,
  jobApplicationDetail,
  offerDetail,
  editAdmin,
  deactivateAdminAccount,
  activateAdminAccount
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: admins(), component: Admins },
  {
    path: applicants(),
    component: (props: { location: Location }) => <Applicants searchQuery={props.location.search} />
  },
  {
    path: jobApplications(),
    component: (props: { location: Location }) => (
      <JobApplications searchQuery={props.location.search} />
    )
  },
  {
    path: companies(),
    component: (props: { location: Location }) => <Companies searchQuery={props.location.search} />
  },
  {
    path: offers(),
    component: (props: { location: Location }) => <Offers searchQuery={props.location.search} />
  },
  {
    path: home(),
    component: (props: { location: Location }) => <Home searchQuery={props.location.search} />
  },
  { path: notifications(), component: Notifications },
  { path: signUp(), component: SignUp },
  { path: settings(), component: Settings },
  { path: applicantDetail(":uuid"), component: ApplicantDetail },
  { path: companyDetail(":uuid"), component: CompanyDetail },
  { path: companyUsers(":companyUuid"), component: CompanyUsers },
  { path: jobApplicationDetail(":uuid"), component: JobApplicationDetail },
  { path: offerDetail(":uuid"), component: OfferDetail },
  { path: editAdmin(":uuid"), component: EditAdmin },
  { path: deactivateAdminAccount(":uuid"), component: DeactivateAdminAccount },
  { path: activateAdminAccount(":uuid"), component: ActivateAdminAccount }
];
