import { loader } from "graphql.macro";

const getTranslations = loader("./getTranslations.graphql");
const getCompanyById = loader("./getCompanyById.graphql");
const getApplicantByPadron = loader("./getApplicantByPadron.graphql");
const GET_APPLICANT = loader("./getApplicant.graphql");
const GET_APPLICANTS = loader("./getApplicants.graphql");
const GET_CAREERS = loader("./getCareers.graphql");
const GET_COMPANIES = loader("./getCompanies.graphql");

export {
  getTranslations,
  getCompanyById,
  getApplicantByPadron,
  GET_CAREERS,
  GET_APPLICANT,
  GET_APPLICANTS,
  GET_COMPANIES
};
