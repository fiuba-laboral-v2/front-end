import { loader } from "graphql.macro";

const GET_COMPANY_USER_BY_UUID = loader("./getCompanyUserByUuid.graphql");
const GET_TRANSLATIONS = loader("./getTranslations.graphql");
const GET_COMPANY_BY_UUID = loader("./getCompanyByUuid.graphql");
const GET_COMPANY_BY_UUID_WITH_USERS = loader("./getCompanyByUuidWithUsers.graphql");
const GET_APPLICANT = loader("./getApplicant.graphql");
const GET_APPLICANTS = loader("./getApplicants.graphql");
const GET_ADMINS = loader("./getAdmins.graphql");
const GET_ADMIN_BY_UUID = loader("./getAdminByUuid.graphql");
const GET_DELETED_ADMIN_BY_UUID = loader("./getDeletedAdminByUuid.graphql");
const GET_ADMIN_SETTINGS = loader("./getAdminSettings.graphql");
const GET_SHARED_SETTINGS = loader("./getSharedSettings.graphql");
const GET_CAPABILITIES = loader("./getCapabilities.graphql");
const GET_CAREERS = loader("./getCareers.graphql");
const GET_COMPANIES = loader("./getCompanies.graphql");
const GET_OFFER_BY_UUID = loader("./getOfferByUuid.graphql");
const GET_OFFERS = loader("./getOffers.graphql");
const GET_APPROVED_OFFERS = loader("./getApprovedOffers.graphql");
const GET_MY_OFFERS = loader("./getMyOffers.graphql");
const GET_CURRENT_USER = loader("./getCurrentUser.graphql");
const GET_MY_JOB_APPLICATIONS = loader("./getMyLatestJobApplications.graphql");
const GET_MY_APPLICANT_PROFILE = loader("./getMyApplicantProfile.graphql");
const GET_MY_CAREERS = loader("./getMyCareers.graphql");
const GET_MY_COMPANY_PROFILE = loader("./getMyCompanyProfile.graphql");
const GET_ADMIN_TASKS = loader("./getAdminTasks.graphql");
const GET_JOB_APPLICATION_BY_UUID = loader("./getJobApplicationByUuid.graphql");
const GET_OFFER_FOR_APPLICANT = loader("./getOfferForApplicant.graphql");
const GET_JOB_APPLICATIONS = loader("./getJobApplications.graphql");
const GET_COMPANY_NOTIFICATIONS = loader("./getCompanyNotifications.graphql");
const GET_SECRETARY_OFFER_DURATION = loader("./getSecretaryOfferDuration.graphql");
const HAS_UNREAD_COMPANY_NOTIFICATIONS = loader("./hasUnreadCompanyNotifications.graphql");
const GET_APPLICANT_NOTIFICATIONS = loader("./getApplicantNotifications.graphql");
const HAS_UNREAD_APPLICANT_NOTIFICATIONS = loader("./hasUnreadApplicantNotifications.graphql");
const GET_ADMIN_NOTIFICATIONS = loader("./getAdminNotifications.graphql");
const HAS_UNREAD_ADMIN_NOTIFICATIONS = loader("./hasUnreadAdminNotifications.graphql");
const GET_COMPANY_USERS = loader("./getCompanyUsers.graphql");
const GET_COMPANY_USERS_BY_COMPANY = loader("./getCompanyUsersByCompany.graphql");
const GET_MY_COMPANY_USER = loader("./getMyCompanyUser.graphql");
const GET_APPLICANT_EMAILS = loader("./getApplicantEmails.graphql");
const GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID = loader(
  "./getRejectedJobApplicationMessageByUuid.graphql"
);
const GET_REJECTED_APPLICANT_PROFILE_MESSAGE_BY_UUID = loader(
  "./getRejectedApplicantProfileMessageByUuid.graphql"
);
const GET_REJECTED_OFFER_MESSAGE_BY_UUID = loader("./getRejectedOfferMessageByUuid.graphql");
const GET_REJECTED_COMPANY_PROFILE_MESSAGE_BY_UUID = loader(
  "./getRejectedCompanyProfileMessageByUuid.graphql"
);
const GET_STATISTICS = loader("./getStatistics.graphql");

export {
  GET_CURRENT_USER,
  GET_TRANSLATIONS,
  GET_COMPANY_BY_UUID,
  GET_COMPANY_BY_UUID_WITH_USERS,
  GET_CAREERS,
  GET_APPLICANT,
  GET_APPLICANTS,
  GET_COMPANIES,
  GET_OFFER_FOR_APPLICANT,
  GET_MY_OFFERS,
  GET_OFFER_BY_UUID,
  GET_CAPABILITIES,
  GET_OFFERS,
  GET_APPROVED_OFFERS,
  GET_MY_JOB_APPLICATIONS,
  GET_MY_APPLICANT_PROFILE,
  GET_MY_CAREERS,
  GET_MY_COMPANY_PROFILE,
  GET_ADMIN_TASKS,
  GET_JOB_APPLICATION_BY_UUID,
  GET_ADMINS,
  GET_ADMIN_SETTINGS,
  GET_SHARED_SETTINGS,
  GET_JOB_APPLICATIONS,
  GET_SECRETARY_OFFER_DURATION,
  GET_COMPANY_NOTIFICATIONS,
  HAS_UNREAD_COMPANY_NOTIFICATIONS,
  GET_APPLICANT_NOTIFICATIONS,
  HAS_UNREAD_APPLICANT_NOTIFICATIONS,
  GET_ADMIN_NOTIFICATIONS,
  HAS_UNREAD_ADMIN_NOTIFICATIONS,
  GET_COMPANY_USERS,
  GET_COMPANY_USERS_BY_COMPANY,
  GET_MY_COMPANY_USER,
  GET_APPLICANT_EMAILS,
  GET_REJECTED_JOB_APPLICATION_MESSAGE_BY_UUID,
  GET_REJECTED_APPLICANT_PROFILE_MESSAGE_BY_UUID,
  GET_REJECTED_OFFER_MESSAGE_BY_UUID,
  GET_REJECTED_COMPANY_PROFILE_MESSAGE_BY_UUID,
  GET_ADMIN_BY_UUID,
  GET_DELETED_ADMIN_BY_UUID,
  GET_COMPANY_USER_BY_UUID,
  GET_STATISTICS
};
