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
  applicantDetail
} = RoutesBuilder.admin;

export const AdminRoutes = [
  { path: admins(), component: Admins },
  { path: applicants(), component: Applicants },
  { path: companies(), component: Companies },
  { path: home(), component: Home },
  { path: offers(), component: Offers },
  { path: jobApplications(), component: JobApplications },
  { path: notifications(), component: Notifications },
  { path: signUp(), component: SignUp },
  { path: settings(), component: Settings },
  { path: applicantDetail(":uuid"), component: ApplicantDetail }
];
