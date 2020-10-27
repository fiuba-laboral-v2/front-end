import { loader } from "graphql.macro";

const SAVE_APPLICANT = loader("./saveApplicant.graphql");
const UPDATE_CURRENT_APPLICANT = loader("./updateCurrentApplicant.graphql");
const SAVE_JOB_APPLICATION = loader("./saveJobApplication.graphql");
const CREATE_COMPANY = loader("./createCompany.graphql");
const UPDATE_CURRENT_COMPANY = loader("./updateCurrentCompany.graphql");
const CREATE_OFFER = loader("./createOffer.graphql");
const EDIT_OFFER = loader("./editOffer.graphql");
const COMPANY_LOGIN = loader("./companyLogin.graphql");
const FIUBA_LOGIN = loader("./fiubaLogin.graphql");
const LOGOUT = loader("./logout.graphql");
const UPDATE_COMPANY_APPROVAL_STATUS = loader("./updateCompanyApprovalStatus.graphql");
const UPDATE_APPLICANT_APPROVAL_STATUS = loader("./updateApplicantApprovalStatus.graphql");
const UPDATE_OFFER_APPROVAL_STATUS = loader("./updateOfferApprovalStatus.graphql");
const UPDATE_JOB_APPLICATION_APPROVAL_STATUS = loader(
  "./updateJobApplicationApprovalStatus.graphql"
);

export {
  FIUBA_LOGIN,
  COMPANY_LOGIN,
  LOGOUT,
  SAVE_APPLICANT,
  UPDATE_CURRENT_APPLICANT,
  SAVE_JOB_APPLICATION,
  CREATE_COMPANY,
  CREATE_OFFER,
  EDIT_OFFER,
  UPDATE_CURRENT_COMPANY,
  UPDATE_COMPANY_APPROVAL_STATUS,
  UPDATE_APPLICANT_APPROVAL_STATUS,
  UPDATE_OFFER_APPROVAL_STATUS,
  UPDATE_JOB_APPLICATION_APPROVAL_STATUS
};
