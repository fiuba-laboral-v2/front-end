import { loader } from "graphql.macro";

const GET_TRANSLATIONS = loader("./getTranslations.graphql");
const GET_COMPANY_BY_UUID = loader("./getCompanyByUuid.graphql");
const GET_COMPANY_BY_UUID_WITH_USERS = loader("./getCompanyByUuidWithUsers.graphql");
const GET_APPLICANT = loader("./getApplicant.graphql");
const GET_APPLICANTS = loader("./getApplicants.graphql");
const GET_CAPABILITIES = loader("./getCapabilities.graphql");
const GET_CAREERS = loader("./getCareers.graphql");
const GET_COMPANIES = loader("./getCompanies.graphql");
const GET_OFFER_BY_UUID = loader("./getOfferByUuid.graphql");
const GET_COMPANY_OFFER_BY_UUID = loader("./getCompanyOfferByUuid.graphql");
const GET_OFFERS = loader("./getOffers.graphql");
const GET_MY_OFFERS = loader("./getMyOffers.graphql");
const GET_CURRENT_USER = loader("./getCurrentUser.graphql");
const GET_MY_JOB_APPLICATIONS = loader("./getMyLatestJobApplications.graphql");
const GET_MY_APPLICANT_PROFILE = loader("./getMyApplicantProfile.graphql");
const GET_MY_COMPANY_PROFILE = loader("./getMyCompanyProfile.graphql");
const GET_APPROVABLES = loader("./getApprovables.graphql");

export {
  GET_CURRENT_USER,
  GET_TRANSLATIONS,
  GET_COMPANY_BY_UUID,
  GET_COMPANY_BY_UUID_WITH_USERS,
  GET_CAREERS,
  GET_APPLICANT,
  GET_APPLICANTS,
  GET_COMPANIES,
  GET_OFFER_BY_UUID,
  GET_MY_OFFERS,
  GET_COMPANY_OFFER_BY_UUID,
  GET_CAPABILITIES,
  GET_OFFERS,
  GET_MY_JOB_APPLICATIONS,
  GET_MY_APPLICANT_PROFILE,
  GET_MY_COMPANY_PROFILE,
  GET_APPROVABLES
};
