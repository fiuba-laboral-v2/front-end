import { loader } from "graphql.macro";

const GET_TRANSLATIONS = loader("./getTranslations.graphql");
const GET_COMPANY_BY_ID = loader("./getCompanyById.graphql");
const GET_APPLICANT = loader("./getApplicant.graphql");
const GET_APPLICANTS = loader("./getApplicants.graphql");
const GET_CAPABILITIES = loader("./getCapabilities.graphql");
const GET_CAREERS = loader("./getCareers.graphql");
const GET_COMPANIES = loader("./getCompanies.graphql");

export {
  GET_TRANSLATIONS,
  GET_COMPANY_BY_ID,
  GET_CAREERS,
  GET_APPLICANT,
  GET_APPLICANTS,
  GET_CAPABILITIES,
  GET_COMPANIES
};
